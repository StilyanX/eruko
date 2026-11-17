export default [
  {
    "id": "t244-k1-p01",
    "topic": "estimates-for-sequences",
    "kind": "t244-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $\\dfrac{1}{4 \\cdot 9 \\cdot 14} + \\dfrac{1}{9 \\cdot 14 \\cdot 19} + \\dots + \\dfrac{1}{(5n - 1)(5n + 4)(5n + 9)} < \\dfrac{1}{360}$ for every whole number $n$ from $1$ up.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\dfrac{1}{4 \\cdot 9 \\cdot 14} + \\dfrac{1}{9 \\cdot 14 \\cdot 19} + \\dots + \\dfrac{1}{(5n - 1)(5n + 4)(5n + 9)} < \\dfrac{1}{360}$ for every whole number $n$ from $1$ up.",
        "reason": "Arithmetic sequence: this is the problem as given; in each bottom the three factors go up by $5$, and from one term to the next the first factor goes up by $5$."
      },
      {
        "step": "Each term is $\\dfrac{1}{k(k + 5)(k + 10)}$, for $k = 4, 9, \\dots, 5n - 1$.",
        "reason": "Arithmetic sequence: the first factors have the common difference $5$, and in each bottom the second and third factors are the first plus $5$ and plus $10$."
      },
      {
        "step": "$\\dfrac{1}{k(k + 5)(k + 10)} = \\dfrac{a}{k(k + 5)} + \\dfrac{b}{(k + 5)(k + 10)}$",
        "reason": "Partial fractions: numbers $a$ and $b$ are sought that make this true for every $k$; each bottom on the right is the product of two neighbouring factors."
      },
      {
        "step": "$1 = a(k + 10) + bk$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $k(k + 5)(k + 10)$."
      },
      {
        "step": "$a = \\dfrac{1}{10}$",
        "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = 0$ gives $1 = 10a$."
      },
      {
        "step": "$b = -\\dfrac{1}{10}$",
        "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = -10$ gives $1 = -10b$."
      },
      {
        "step": "The sum is $\\dfrac{1}{10}\\left(\\dfrac{1}{4 \\cdot 9} - \\dfrac{1}{9 \\cdot 14}\\right) + \\dfrac{1}{10}\\left(\\dfrac{1}{9 \\cdot 14} - \\dfrac{1}{14 \\cdot 19}\\right) + \\dots + \\dfrac{1}{10}\\left(\\dfrac{1}{(5n - 1)(5n + 4)} - \\dfrac{1}{(5n + 4)(5n + 9)}\\right)$.",
        "reason": "Substituting a value: by lines 3, 5 and 6, each term $\\dfrac{1}{k(k + 5)(k + 10)}$ is $\\dfrac{1}{10}\\left(\\dfrac{1}{k(k + 5)} - \\dfrac{1}{(k + 5)(k + 10)}\\right)$, with its own value of $k$."
      },
      {
        "step": "The sum is $\\dfrac{1}{10}\\left(\\dfrac{1}{4 \\cdot 9} - \\dfrac{1}{9 \\cdot 14} + \\dfrac{1}{9 \\cdot 14} - \\dfrac{1}{14 \\cdot 19} + \\dots + \\dfrac{1}{(5n - 1)(5n + 4)} - \\dfrac{1}{(5n + 4)(5n + 9)}\\right)$.",
        "reason": "The distributive law, from arithmetic: the common factor $\\dfrac{1}{10}$ is taken out."
      },
      {
        "step": "The sum is $\\dfrac{1}{10}\\left(\\dfrac{1}{4 \\cdot 9} - \\dfrac{1}{(5n + 4)(5n + 9)}\\right)$.",
        "reason": "Telescoping sum: each fraction taken away is added back in the next bracket, so the first and the last are left."
      },
      {
        "step": "So the sum is below $\\dfrac{1}{10} \\cdot \\dfrac{1}{4 \\cdot 9} = \\dfrac{1}{360}$.",
        "reason": "Multiplying by a positive number: the fraction taken away in line 9 is positive, so the bracket is below $\\dfrac{1}{4 \\cdot 9}$, and both are multiplied by $\\dfrac{1}{10}$."
      }
    ]
  },
  {
    "id": "t244-k1-p02",
    "topic": "estimates-for-sequences",
    "kind": "t244-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} < \\dfrac{1}{42}$ for every whole number $n$ from $1$ up, where $a_1 = 14$ and $a_{k+1} = \\dfrac{a_k^2}{a_k - 3}$ for every whole number $k$ from $1$ up.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} < \\dfrac{1}{42}$ for every whole number $n$ from $1$ up, where $a_1 = 14$ and $a_{k+1} = \\dfrac{a_k^2}{a_k - 3}$ for every whole number $k$ from $1$ up.",
        "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and each term gives the next."
      },
      {
        "step": "$a_1 > 3$",
        "reason": "Base case: $a_1 = 14$, and $14$ is above $3$; this is the claim $a_k > 3$ at $k = 1$."
      },
      {
        "step": "Assume that $a_k > 3$ for some whole number $k$ from $1$ up.",
        "reason": "Inductive assumption: the claim at $k$."
      },
      {
        "step": "$a_{k+1} - a_k = \\dfrac{3a_k}{a_k - 3}$",
        "reason": "Single fraction: $\\dfrac{a_k^2}{a_k - 3} - a_k = \\dfrac{a_k^2 - a_k(a_k - 3)}{a_k - 3}$, and the top is $3a_k$."
      },
      {
        "step": "$a_{k+1} > a_k$",
        "reason": "A product is positive when its factors have the same sign and negative when they differ: by line 3 the top $3a_k$ and the bottom $a_k - 3$ of line 4 are positive, so $a_{k+1} - a_k$ is positive."
      },
      {
        "step": "So $a_{k+1} > 3$.",
        "reason": "Inductive step: by lines 5 and 3, $a_{k+1} > a_k > 3$; this is the claim at $k + 1$."
      },
      {
        "step": "So $a_k > 3$ for every whole number $k$ from $1$ up.",
        "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 6."
      },
      {
        "step": "$\\dfrac{1}{a_{k+1}} = \\dfrac{a_k - 3}{a_k^2}$",
        "reason": "Reciprocal, from arithmetic: equal numbers that are not $0$ have equal reciprocals, and both sides of the recursion are positive by line 7."
      },
      {
        "step": "$\\dfrac{1}{a_{k+1}} = \\dfrac{1}{a_k} - \\dfrac{3}{a_k^2}$",
        "reason": "Cancelling a common factor: each term of the top is divided by $a_k^2$, and $a_k$ cancels in the first."
      },
      {
        "step": "$\\dfrac{3}{a_k^2} = \\dfrac{1}{a_k} - \\dfrac{1}{a_{k+1}}$",
        "reason": "Adding the same number to both sides: $\\dfrac{3}{a_k^2}$ is added to both sides of line 9, and $\\dfrac{1}{a_{k+1}}$ is taken from both."
      },
      {
        "step": "$\\dfrac{3}{a_1^2} + \\dfrac{3}{a_2^2} + \\dots + \\dfrac{3}{a_n^2} = \\left(\\dfrac{1}{a_1} - \\dfrac{1}{a_2}\\right) + \\left(\\dfrac{1}{a_2} - \\dfrac{1}{a_3}\\right) + \\dots + \\left(\\dfrac{1}{a_n} - \\dfrac{1}{a_{n+1}}\\right)$",
        "reason": "Adding two equations: line 10 for $k = 1, 2, \\dots, n$, the $n$ equations added."
      },
      {
        "step": "$\\dfrac{3}{a_1^2} + \\dfrac{3}{a_2^2} + \\dots + \\dfrac{3}{a_n^2} = \\dfrac{1}{a_1} - \\dfrac{1}{a_{n+1}}$",
        "reason": "Telescoping sum: each fraction taken away is added back in the next bracket, so the first and the last are left."
      },
      {
        "step": "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} = \\dfrac{1}{3a_1} - \\dfrac{1}{3a_{n+1}}$",
        "reason": "Dividing both sides by a nonzero number: both sides of line 12 are divided by $3$."
      },
      {
        "step": "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} = \\dfrac{1}{42} - \\dfrac{1}{3a_{n+1}}$",
        "reason": "Substituting a value: $a_1 = 14$ goes into line 13, and $3 \\cdot 14 = 42$."
      },
      {
        "step": "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} < \\dfrac{1}{42}$",
        "reason": "A product is positive when its factors have the same sign and negative when they differ: $3$ and $a_{n+1}$ are positive by line 7, so $\\dfrac{1}{3a_{n+1}}$ is positive and the right side of line 14 is below $\\dfrac{1}{42}$."
      }
    ]
  },
  {
    "id": "t244-k1-p03",
    "topic": "estimates-for-sequences",
    "kind": "t244-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} < \\dfrac{1}{184}$ for every whole number $n$ from $1$ up, where $a_1 = 23$ and $a_{k+1} = \\dfrac{a_k^2}{a_k - 8}$ for every whole number $k$ from $1$ up.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} < \\dfrac{1}{184}$ for every whole number $n$ from $1$ up, where $a_1 = 23$ and $a_{k+1} = \\dfrac{a_k^2}{a_k - 8}$ for every whole number $k$ from $1$ up.",
        "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and each term gives the next."
      },
      {
        "step": "$a_1 > 8$",
        "reason": "Base case: $a_1 = 23$, and $23$ is above $8$; this is the claim $a_k > 8$ at $k = 1$."
      },
      {
        "step": "Assume that $a_k > 8$ for some whole number $k$ from $1$ up.",
        "reason": "Inductive assumption: the claim at $k$."
      },
      {
        "step": "$a_{k+1} - a_k = \\dfrac{8a_k}{a_k - 8}$",
        "reason": "Single fraction: $\\dfrac{a_k^2}{a_k - 8} - a_k = \\dfrac{a_k^2 - a_k(a_k - 8)}{a_k - 8}$, and the top is $8a_k$."
      },
      {
        "step": "$a_{k+1} > a_k$",
        "reason": "A product is positive when its factors have the same sign and negative when they differ: by line 3 the top $8a_k$ and the bottom $a_k - 8$ of line 4 are positive, so $a_{k+1} - a_k$ is positive."
      },
      {
        "step": "So $a_{k+1} > 8$.",
        "reason": "Inductive step: by lines 5 and 3, $a_{k+1} > a_k > 8$; this is the claim at $k + 1$."
      },
      {
        "step": "So $a_k > 8$ for every whole number $k$ from $1$ up.",
        "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 6."
      },
      {
        "step": "$\\dfrac{1}{a_{k+1}} = \\dfrac{a_k - 8}{a_k^2}$",
        "reason": "Reciprocal, from arithmetic: equal numbers that are not $0$ have equal reciprocals, and both sides of the recursion are positive by line 7."
      },
      {
        "step": "$\\dfrac{1}{a_{k+1}} = \\dfrac{1}{a_k} - \\dfrac{8}{a_k^2}$",
        "reason": "Cancelling a common factor: each term of the top is divided by $a_k^2$, and $a_k$ cancels in the first."
      },
      {
        "step": "$\\dfrac{8}{a_k^2} = \\dfrac{1}{a_k} - \\dfrac{1}{a_{k+1}}$",
        "reason": "Adding the same number to both sides: $\\dfrac{8}{a_k^2}$ is added to both sides of line 9, and $\\dfrac{1}{a_{k+1}}$ is taken from both."
      },
      {
        "step": "$\\dfrac{8}{a_1^2} + \\dfrac{8}{a_2^2} + \\dots + \\dfrac{8}{a_n^2} = \\left(\\dfrac{1}{a_1} - \\dfrac{1}{a_2}\\right) + \\left(\\dfrac{1}{a_2} - \\dfrac{1}{a_3}\\right) + \\dots + \\left(\\dfrac{1}{a_n} - \\dfrac{1}{a_{n+1}}\\right)$",
        "reason": "Adding two equations: line 10 for $k = 1, 2, \\dots, n$, the $n$ equations added."
      },
      {
        "step": "$\\dfrac{8}{a_1^2} + \\dfrac{8}{a_2^2} + \\dots + \\dfrac{8}{a_n^2} = \\dfrac{1}{a_1} - \\dfrac{1}{a_{n+1}}$",
        "reason": "Telescoping sum: each fraction taken away is added back in the next bracket, so the first and the last are left."
      },
      {
        "step": "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} = \\dfrac{1}{8a_1} - \\dfrac{1}{8a_{n+1}}$",
        "reason": "Dividing both sides by a nonzero number: both sides of line 12 are divided by $8$."
      },
      {
        "step": "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} = \\dfrac{1}{184} - \\dfrac{1}{8a_{n+1}}$",
        "reason": "Substituting a value: $a_1 = 23$ goes into line 13, and $8 \\cdot 23 = 184$."
      },
      {
        "step": "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} < \\dfrac{1}{184}$",
        "reason": "A product is positive when its factors have the same sign and negative when they differ: $8$ and $a_{n+1}$ are positive by line 7, so $\\dfrac{1}{8a_{n+1}}$ is positive and the right side of line 14 is below $\\dfrac{1}{184}$."
      }
    ]
  },
  {
    "id": "t244-k1-p04",
    "topic": "estimates-for-sequences",
    "kind": "t244-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $\\dfrac{1}{5 \\cdot 17 \\cdot 29} + \\dfrac{1}{17 \\cdot 29 \\cdot 41} + \\dots + \\dfrac{1}{(12n - 7)(12n + 5)(12n + 17)} < \\dfrac{1}{2040}$ for every whole number $n$ from $1$ up.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\dfrac{1}{5 \\cdot 17 \\cdot 29} + \\dfrac{1}{17 \\cdot 29 \\cdot 41} + \\dots + \\dfrac{1}{(12n - 7)(12n + 5)(12n + 17)} < \\dfrac{1}{2040}$ for every whole number $n$ from $1$ up.",
        "reason": "Arithmetic sequence: this is the problem as given; in each bottom the three factors go up by $12$, and from one term to the next the first factor goes up by $12$."
      },
      {
        "step": "Each term is $\\dfrac{1}{k(k + 12)(k + 24)}$, for $k = 5, 17, \\dots, 12n - 7$.",
        "reason": "Arithmetic sequence: the first factors have the common difference $12$, and in each bottom the second and third factors are the first plus $12$ and plus $24$."
      },
      {
        "step": "$\\dfrac{1}{k(k + 12)(k + 24)} = \\dfrac{a}{k(k + 12)} + \\dfrac{b}{(k + 12)(k + 24)}$",
        "reason": "Partial fractions: numbers $a$ and $b$ are sought that make this true for every $k$; each bottom on the right is the product of two neighbouring factors."
      },
      {
        "step": "$1 = a(k + 24) + bk$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $k(k + 12)(k + 24)$."
      },
      {
        "step": "$a = \\dfrac{1}{24}$",
        "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = 0$ gives $1 = 24a$."
      },
      {
        "step": "$b = -\\dfrac{1}{24}$",
        "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = -24$ gives $1 = -24b$."
      },
      {
        "step": "The sum is $\\dfrac{1}{24}\\left(\\dfrac{1}{5 \\cdot 17} - \\dfrac{1}{17 \\cdot 29}\\right) + \\dfrac{1}{24}\\left(\\dfrac{1}{17 \\cdot 29} - \\dfrac{1}{29 \\cdot 41}\\right) + \\dots + \\dfrac{1}{24}\\left(\\dfrac{1}{(12n - 7)(12n + 5)} - \\dfrac{1}{(12n + 5)(12n + 17)}\\right)$.",
        "reason": "Substituting a value: by lines 3, 5 and 6, each term $\\dfrac{1}{k(k + 12)(k + 24)}$ is $\\dfrac{1}{24}\\left(\\dfrac{1}{k(k + 12)} - \\dfrac{1}{(k + 12)(k + 24)}\\right)$, with its own value of $k$."
      },
      {
        "step": "The sum is $\\dfrac{1}{24}\\left(\\dfrac{1}{5 \\cdot 17} - \\dfrac{1}{17 \\cdot 29} + \\dfrac{1}{17 \\cdot 29} - \\dfrac{1}{29 \\cdot 41} + \\dots + \\dfrac{1}{(12n - 7)(12n + 5)} - \\dfrac{1}{(12n + 5)(12n + 17)}\\right)$.",
        "reason": "The distributive law, from arithmetic: the common factor $\\dfrac{1}{24}$ is taken out."
      },
      {
        "step": "The sum is $\\dfrac{1}{24}\\left(\\dfrac{1}{5 \\cdot 17} - \\dfrac{1}{(12n + 5)(12n + 17)}\\right)$.",
        "reason": "Telescoping sum: each fraction taken away is added back in the next bracket, so the first and the last are left."
      },
      {
        "step": "So the sum is below $\\dfrac{1}{24} \\cdot \\dfrac{1}{5 \\cdot 17} = \\dfrac{1}{2040}$.",
        "reason": "Multiplying by a positive number: the fraction taken away in line 9 is positive, so the bracket is below $\\dfrac{1}{5 \\cdot 17}$, and both are multiplied by $\\dfrac{1}{24}$."
      }
    ]
  },
  {
    "id": "t244-k1-p05",
    "topic": "estimates-for-sequences",
    "kind": "t244-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $\\dfrac{1}{9 \\cdot 19 \\cdot 29} + \\dfrac{1}{19 \\cdot 29 \\cdot 39} + \\dots + \\dfrac{1}{(10n - 1)(10n + 9)(10n + 19)} < \\dfrac{1}{3420}$ for every whole number $n$ from $1$ up.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\dfrac{1}{9 \\cdot 19 \\cdot 29} + \\dfrac{1}{19 \\cdot 29 \\cdot 39} + \\dots + \\dfrac{1}{(10n - 1)(10n + 9)(10n + 19)} < \\dfrac{1}{3420}$ for every whole number $n$ from $1$ up.",
        "reason": "Arithmetic sequence: this is the problem as given; in each bottom the three factors go up by $10$, and from one term to the next the first factor goes up by $10$."
      },
      {
        "step": "Each term is $\\dfrac{1}{k(k + 10)(k + 20)}$, for $k = 9, 19, \\dots, 10n - 1$.",
        "reason": "Arithmetic sequence: the first factors have the common difference $10$, and in each bottom the second and third factors are the first plus $10$ and plus $20$."
      },
      {
        "step": "$\\dfrac{1}{k(k + 10)(k + 20)} = \\dfrac{a}{k(k + 10)} + \\dfrac{b}{(k + 10)(k + 20)}$",
        "reason": "Partial fractions: numbers $a$ and $b$ are sought that make this true for every $k$; each bottom on the right is the product of two neighbouring factors."
      },
      {
        "step": "$1 = a(k + 20) + bk$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $k(k + 10)(k + 20)$."
      },
      {
        "step": "$a = \\dfrac{1}{20}$",
        "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = 0$ gives $1 = 20a$."
      },
      {
        "step": "$b = -\\dfrac{1}{20}$",
        "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = -20$ gives $1 = -20b$."
      },
      {
        "step": "The sum is $\\dfrac{1}{20}\\left(\\dfrac{1}{9 \\cdot 19} - \\dfrac{1}{19 \\cdot 29}\\right) + \\dfrac{1}{20}\\left(\\dfrac{1}{19 \\cdot 29} - \\dfrac{1}{29 \\cdot 39}\\right) + \\dots + \\dfrac{1}{20}\\left(\\dfrac{1}{(10n - 1)(10n + 9)} - \\dfrac{1}{(10n + 9)(10n + 19)}\\right)$.",
        "reason": "Substituting a value: by lines 3, 5 and 6, each term $\\dfrac{1}{k(k + 10)(k + 20)}$ is $\\dfrac{1}{20}\\left(\\dfrac{1}{k(k + 10)} - \\dfrac{1}{(k + 10)(k + 20)}\\right)$, with its own value of $k$."
      },
      {
        "step": "The sum is $\\dfrac{1}{20}\\left(\\dfrac{1}{9 \\cdot 19} - \\dfrac{1}{19 \\cdot 29} + \\dfrac{1}{19 \\cdot 29} - \\dfrac{1}{29 \\cdot 39} + \\dots + \\dfrac{1}{(10n - 1)(10n + 9)} - \\dfrac{1}{(10n + 9)(10n + 19)}\\right)$.",
        "reason": "The distributive law, from arithmetic: the common factor $\\dfrac{1}{20}$ is taken out."
      },
      {
        "step": "The sum is $\\dfrac{1}{20}\\left(\\dfrac{1}{9 \\cdot 19} - \\dfrac{1}{(10n + 9)(10n + 19)}\\right)$.",
        "reason": "Telescoping sum: each fraction taken away is added back in the next bracket, so the first and the last are left."
      },
      {
        "step": "So the sum is below $\\dfrac{1}{20} \\cdot \\dfrac{1}{9 \\cdot 19} = \\dfrac{1}{3420}$.",
        "reason": "Multiplying by a positive number: the fraction taken away in line 9 is positive, so the bracket is below $\\dfrac{1}{9 \\cdot 19}$, and both are multiplied by $\\dfrac{1}{20}$."
      }
    ]
  },
  {
    "id": "t244-k1-p06",
    "topic": "estimates-for-sequences",
    "kind": "t244-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} < \\dfrac{1}{70}$ for every whole number $n$ from $1$ up, where $a_1 = 10$ and $a_{k+1} = \\dfrac{a_k^2}{a_k - 7}$ for every whole number $k$ from $1$ up.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} < \\dfrac{1}{70}$ for every whole number $n$ from $1$ up, where $a_1 = 10$ and $a_{k+1} = \\dfrac{a_k^2}{a_k - 7}$ for every whole number $k$ from $1$ up.",
        "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and each term gives the next."
      },
      {
        "step": "$a_1 > 7$",
        "reason": "Base case: $a_1 = 10$, and $10$ is above $7$; this is the claim $a_k > 7$ at $k = 1$."
      },
      {
        "step": "Assume that $a_k > 7$ for some whole number $k$ from $1$ up.",
        "reason": "Inductive assumption: the claim at $k$."
      },
      {
        "step": "$a_{k+1} - a_k = \\dfrac{7a_k}{a_k - 7}$",
        "reason": "Single fraction: $\\dfrac{a_k^2}{a_k - 7} - a_k = \\dfrac{a_k^2 - a_k(a_k - 7)}{a_k - 7}$, and the top is $7a_k$."
      },
      {
        "step": "$a_{k+1} > a_k$",
        "reason": "A product is positive when its factors have the same sign and negative when they differ: by line 3 the top $7a_k$ and the bottom $a_k - 7$ of line 4 are positive, so $a_{k+1} - a_k$ is positive."
      },
      {
        "step": "So $a_{k+1} > 7$.",
        "reason": "Inductive step: by lines 5 and 3, $a_{k+1} > a_k > 7$; this is the claim at $k + 1$."
      },
      {
        "step": "So $a_k > 7$ for every whole number $k$ from $1$ up.",
        "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 6."
      },
      {
        "step": "$\\dfrac{1}{a_{k+1}} = \\dfrac{a_k - 7}{a_k^2}$",
        "reason": "Reciprocal, from arithmetic: equal numbers that are not $0$ have equal reciprocals, and both sides of the recursion are positive by line 7."
      },
      {
        "step": "$\\dfrac{1}{a_{k+1}} = \\dfrac{1}{a_k} - \\dfrac{7}{a_k^2}$",
        "reason": "Cancelling a common factor: each term of the top is divided by $a_k^2$, and $a_k$ cancels in the first."
      },
      {
        "step": "$\\dfrac{7}{a_k^2} = \\dfrac{1}{a_k} - \\dfrac{1}{a_{k+1}}$",
        "reason": "Adding the same number to both sides: $\\dfrac{7}{a_k^2}$ is added to both sides of line 9, and $\\dfrac{1}{a_{k+1}}$ is taken from both."
      },
      {
        "step": "$\\dfrac{7}{a_1^2} + \\dfrac{7}{a_2^2} + \\dots + \\dfrac{7}{a_n^2} = \\left(\\dfrac{1}{a_1} - \\dfrac{1}{a_2}\\right) + \\left(\\dfrac{1}{a_2} - \\dfrac{1}{a_3}\\right) + \\dots + \\left(\\dfrac{1}{a_n} - \\dfrac{1}{a_{n+1}}\\right)$",
        "reason": "Adding two equations: line 10 for $k = 1, 2, \\dots, n$, the $n$ equations added."
      },
      {
        "step": "$\\dfrac{7}{a_1^2} + \\dfrac{7}{a_2^2} + \\dots + \\dfrac{7}{a_n^2} = \\dfrac{1}{a_1} - \\dfrac{1}{a_{n+1}}$",
        "reason": "Telescoping sum: each fraction taken away is added back in the next bracket, so the first and the last are left."
      },
      {
        "step": "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} = \\dfrac{1}{7a_1} - \\dfrac{1}{7a_{n+1}}$",
        "reason": "Dividing both sides by a nonzero number: both sides of line 12 are divided by $7$."
      },
      {
        "step": "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} = \\dfrac{1}{70} - \\dfrac{1}{7a_{n+1}}$",
        "reason": "Substituting a value: $a_1 = 10$ goes into line 13, and $7 \\cdot 10 = 70$."
      },
      {
        "step": "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} < \\dfrac{1}{70}$",
        "reason": "A product is positive when its factors have the same sign and negative when they differ: $7$ and $a_{n+1}$ are positive by line 7, so $\\dfrac{1}{7a_{n+1}}$ is positive and the right side of line 14 is below $\\dfrac{1}{70}$."
      }
    ]
  },
  {
    "id": "t244-k1-p07",
    "topic": "estimates-for-sequences",
    "kind": "t244-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} < \\dfrac{1}{57}$ for every whole number $n$ from $1$ up, where $a_1 = 19$ and $a_{k+1} = \\dfrac{a_k^2}{a_k - 3}$ for every whole number $k$ from $1$ up.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} < \\dfrac{1}{57}$ for every whole number $n$ from $1$ up, where $a_1 = 19$ and $a_{k+1} = \\dfrac{a_k^2}{a_k - 3}$ for every whole number $k$ from $1$ up.",
        "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and each term gives the next."
      },
      {
        "step": "$a_1 > 3$",
        "reason": "Base case: $a_1 = 19$, and $19$ is above $3$; this is the claim $a_k > 3$ at $k = 1$."
      },
      {
        "step": "Assume that $a_k > 3$ for some whole number $k$ from $1$ up.",
        "reason": "Inductive assumption: the claim at $k$."
      },
      {
        "step": "$a_{k+1} - a_k = \\dfrac{3a_k}{a_k - 3}$",
        "reason": "Single fraction: $\\dfrac{a_k^2}{a_k - 3} - a_k = \\dfrac{a_k^2 - a_k(a_k - 3)}{a_k - 3}$, and the top is $3a_k$."
      },
      {
        "step": "$a_{k+1} > a_k$",
        "reason": "A product is positive when its factors have the same sign and negative when they differ: by line 3 the top $3a_k$ and the bottom $a_k - 3$ of line 4 are positive, so $a_{k+1} - a_k$ is positive."
      },
      {
        "step": "So $a_{k+1} > 3$.",
        "reason": "Inductive step: by lines 5 and 3, $a_{k+1} > a_k > 3$; this is the claim at $k + 1$."
      },
      {
        "step": "So $a_k > 3$ for every whole number $k$ from $1$ up.",
        "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 6."
      },
      {
        "step": "$\\dfrac{1}{a_{k+1}} = \\dfrac{a_k - 3}{a_k^2}$",
        "reason": "Reciprocal, from arithmetic: equal numbers that are not $0$ have equal reciprocals, and both sides of the recursion are positive by line 7."
      },
      {
        "step": "$\\dfrac{1}{a_{k+1}} = \\dfrac{1}{a_k} - \\dfrac{3}{a_k^2}$",
        "reason": "Cancelling a common factor: each term of the top is divided by $a_k^2$, and $a_k$ cancels in the first."
      },
      {
        "step": "$\\dfrac{3}{a_k^2} = \\dfrac{1}{a_k} - \\dfrac{1}{a_{k+1}}$",
        "reason": "Adding the same number to both sides: $\\dfrac{3}{a_k^2}$ is added to both sides of line 9, and $\\dfrac{1}{a_{k+1}}$ is taken from both."
      },
      {
        "step": "$\\dfrac{3}{a_1^2} + \\dfrac{3}{a_2^2} + \\dots + \\dfrac{3}{a_n^2} = \\left(\\dfrac{1}{a_1} - \\dfrac{1}{a_2}\\right) + \\left(\\dfrac{1}{a_2} - \\dfrac{1}{a_3}\\right) + \\dots + \\left(\\dfrac{1}{a_n} - \\dfrac{1}{a_{n+1}}\\right)$",
        "reason": "Adding two equations: line 10 for $k = 1, 2, \\dots, n$, the $n$ equations added."
      },
      {
        "step": "$\\dfrac{3}{a_1^2} + \\dfrac{3}{a_2^2} + \\dots + \\dfrac{3}{a_n^2} = \\dfrac{1}{a_1} - \\dfrac{1}{a_{n+1}}$",
        "reason": "Telescoping sum: each fraction taken away is added back in the next bracket, so the first and the last are left."
      },
      {
        "step": "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} = \\dfrac{1}{3a_1} - \\dfrac{1}{3a_{n+1}}$",
        "reason": "Dividing both sides by a nonzero number: both sides of line 12 are divided by $3$."
      },
      {
        "step": "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} = \\dfrac{1}{57} - \\dfrac{1}{3a_{n+1}}$",
        "reason": "Substituting a value: $a_1 = 19$ goes into line 13, and $3 \\cdot 19 = 57$."
      },
      {
        "step": "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} < \\dfrac{1}{57}$",
        "reason": "A product is positive when its factors have the same sign and negative when they differ: $3$ and $a_{n+1}$ are positive by line 7, so $\\dfrac{1}{3a_{n+1}}$ is positive and the right side of line 14 is below $\\dfrac{1}{57}$."
      }
    ]
  },
  {
    "id": "t244-k1-p08",
    "topic": "estimates-for-sequences",
    "kind": "t244-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} < \\dfrac{1}{18}$ for every whole number $n$ from $1$ up, where $a_1 = 9$ and $a_{k+1} = \\dfrac{a_k^2}{a_k - 2}$ for every whole number $k$ from $1$ up.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} < \\dfrac{1}{18}$ for every whole number $n$ from $1$ up, where $a_1 = 9$ and $a_{k+1} = \\dfrac{a_k^2}{a_k - 2}$ for every whole number $k$ from $1$ up.",
        "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and each term gives the next."
      },
      {
        "step": "$a_1 > 2$",
        "reason": "Base case: $a_1 = 9$, and $9$ is above $2$; this is the claim $a_k > 2$ at $k = 1$."
      },
      {
        "step": "Assume that $a_k > 2$ for some whole number $k$ from $1$ up.",
        "reason": "Inductive assumption: the claim at $k$."
      },
      {
        "step": "$a_{k+1} - a_k = \\dfrac{2a_k}{a_k - 2}$",
        "reason": "Single fraction: $\\dfrac{a_k^2}{a_k - 2} - a_k = \\dfrac{a_k^2 - a_k(a_k - 2)}{a_k - 2}$, and the top is $2a_k$."
      },
      {
        "step": "$a_{k+1} > a_k$",
        "reason": "A product is positive when its factors have the same sign and negative when they differ: by line 3 the top $2a_k$ and the bottom $a_k - 2$ of line 4 are positive, so $a_{k+1} - a_k$ is positive."
      },
      {
        "step": "So $a_{k+1} > 2$.",
        "reason": "Inductive step: by lines 5 and 3, $a_{k+1} > a_k > 2$; this is the claim at $k + 1$."
      },
      {
        "step": "So $a_k > 2$ for every whole number $k$ from $1$ up.",
        "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 6."
      },
      {
        "step": "$\\dfrac{1}{a_{k+1}} = \\dfrac{a_k - 2}{a_k^2}$",
        "reason": "Reciprocal, from arithmetic: equal numbers that are not $0$ have equal reciprocals, and both sides of the recursion are positive by line 7."
      },
      {
        "step": "$\\dfrac{1}{a_{k+1}} = \\dfrac{1}{a_k} - \\dfrac{2}{a_k^2}$",
        "reason": "Cancelling a common factor: each term of the top is divided by $a_k^2$, and $a_k$ cancels in the first."
      },
      {
        "step": "$\\dfrac{2}{a_k^2} = \\dfrac{1}{a_k} - \\dfrac{1}{a_{k+1}}$",
        "reason": "Adding the same number to both sides: $\\dfrac{2}{a_k^2}$ is added to both sides of line 9, and $\\dfrac{1}{a_{k+1}}$ is taken from both."
      },
      {
        "step": "$\\dfrac{2}{a_1^2} + \\dfrac{2}{a_2^2} + \\dots + \\dfrac{2}{a_n^2} = \\left(\\dfrac{1}{a_1} - \\dfrac{1}{a_2}\\right) + \\left(\\dfrac{1}{a_2} - \\dfrac{1}{a_3}\\right) + \\dots + \\left(\\dfrac{1}{a_n} - \\dfrac{1}{a_{n+1}}\\right)$",
        "reason": "Adding two equations: line 10 for $k = 1, 2, \\dots, n$, the $n$ equations added."
      },
      {
        "step": "$\\dfrac{2}{a_1^2} + \\dfrac{2}{a_2^2} + \\dots + \\dfrac{2}{a_n^2} = \\dfrac{1}{a_1} - \\dfrac{1}{a_{n+1}}$",
        "reason": "Telescoping sum: each fraction taken away is added back in the next bracket, so the first and the last are left."
      },
      {
        "step": "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} = \\dfrac{1}{2a_1} - \\dfrac{1}{2a_{n+1}}$",
        "reason": "Dividing both sides by a nonzero number: both sides of line 12 are divided by $2$."
      },
      {
        "step": "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} = \\dfrac{1}{18} - \\dfrac{1}{2a_{n+1}}$",
        "reason": "Substituting a value: $a_1 = 9$ goes into line 13, and $2 \\cdot 9 = 18$."
      },
      {
        "step": "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} < \\dfrac{1}{18}$",
        "reason": "A product is positive when its factors have the same sign and negative when they differ: $2$ and $a_{n+1}$ are positive by line 7, so $\\dfrac{1}{2a_{n+1}}$ is positive and the right side of line 14 is below $\\dfrac{1}{18}$."
      }
    ]
  },
  {
    "id": "t244-k1-p09",
    "topic": "estimates-for-sequences",
    "kind": "t244-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $\\dfrac{1}{1 \\cdot 3 \\cdot 5} + \\dfrac{1}{3 \\cdot 5 \\cdot 7} + \\dots + \\dfrac{1}{(2n - 1)(2n + 1)(2n + 3)} < \\dfrac{1}{12}$ for every whole number $n$ from $1$ up.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\dfrac{1}{1 \\cdot 3 \\cdot 5} + \\dfrac{1}{3 \\cdot 5 \\cdot 7} + \\dots + \\dfrac{1}{(2n - 1)(2n + 1)(2n + 3)} < \\dfrac{1}{12}$ for every whole number $n$ from $1$ up.",
        "reason": "Arithmetic sequence: this is the problem as given; in each bottom the three factors go up by $2$, and from one term to the next the first factor goes up by $2$."
      },
      {
        "step": "Each term is $\\dfrac{1}{k(k + 2)(k + 4)}$, for $k = 1, 3, \\dots, 2n - 1$.",
        "reason": "Arithmetic sequence: the first factors have the common difference $2$, and in each bottom the second and third factors are the first plus $2$ and plus $4$."
      },
      {
        "step": "$\\dfrac{1}{k(k + 2)(k + 4)} = \\dfrac{a}{k(k + 2)} + \\dfrac{b}{(k + 2)(k + 4)}$",
        "reason": "Partial fractions: numbers $a$ and $b$ are sought that make this true for every $k$; each bottom on the right is the product of two neighbouring factors."
      },
      {
        "step": "$1 = a(k + 4) + bk$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $k(k + 2)(k + 4)$."
      },
      {
        "step": "$a = \\dfrac{1}{4}$",
        "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = 0$ gives $1 = 4a$."
      },
      {
        "step": "$b = -\\dfrac{1}{4}$",
        "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = -4$ gives $1 = -4b$."
      },
      {
        "step": "The sum is $\\dfrac{1}{4}\\left(\\dfrac{1}{1 \\cdot 3} - \\dfrac{1}{3 \\cdot 5}\\right) + \\dfrac{1}{4}\\left(\\dfrac{1}{3 \\cdot 5} - \\dfrac{1}{5 \\cdot 7}\\right) + \\dots + \\dfrac{1}{4}\\left(\\dfrac{1}{(2n - 1)(2n + 1)} - \\dfrac{1}{(2n + 1)(2n + 3)}\\right)$.",
        "reason": "Substituting a value: by lines 3, 5 and 6, each term $\\dfrac{1}{k(k + 2)(k + 4)}$ is $\\dfrac{1}{4}\\left(\\dfrac{1}{k(k + 2)} - \\dfrac{1}{(k + 2)(k + 4)}\\right)$, with its own value of $k$."
      },
      {
        "step": "The sum is $\\dfrac{1}{4}\\left(\\dfrac{1}{1 \\cdot 3} - \\dfrac{1}{3 \\cdot 5} + \\dfrac{1}{3 \\cdot 5} - \\dfrac{1}{5 \\cdot 7} + \\dots + \\dfrac{1}{(2n - 1)(2n + 1)} - \\dfrac{1}{(2n + 1)(2n + 3)}\\right)$.",
        "reason": "The distributive law, from arithmetic: the common factor $\\dfrac{1}{4}$ is taken out."
      },
      {
        "step": "The sum is $\\dfrac{1}{4}\\left(\\dfrac{1}{1 \\cdot 3} - \\dfrac{1}{(2n + 1)(2n + 3)}\\right)$.",
        "reason": "Telescoping sum: each fraction taken away is added back in the next bracket, so the first and the last are left."
      },
      {
        "step": "So the sum is below $\\dfrac{1}{4} \\cdot \\dfrac{1}{1 \\cdot 3} = \\dfrac{1}{12}$.",
        "reason": "Multiplying by a positive number: the fraction taken away in line 9 is positive, so the bracket is below $\\dfrac{1}{1 \\cdot 3}$, and both are multiplied by $\\dfrac{1}{4}$."
      }
    ]
  },
  {
    "id": "t244-k1-p10",
    "topic": "estimates-for-sequences",
    "kind": "t244-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} < \\dfrac{1}{10}$ for every whole number $n$ from $1$ up, where $a_1 = 5$ and $a_{k+1} = \\dfrac{a_k^2}{a_k - 2}$ for every whole number $k$ from $1$ up.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} < \\dfrac{1}{10}$ for every whole number $n$ from $1$ up, where $a_1 = 5$ and $a_{k+1} = \\dfrac{a_k^2}{a_k - 2}$ for every whole number $k$ from $1$ up.",
        "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and each term gives the next."
      },
      {
        "step": "$a_1 > 2$",
        "reason": "Base case: $a_1 = 5$, and $5$ is above $2$; this is the claim $a_k > 2$ at $k = 1$."
      },
      {
        "step": "Assume that $a_k > 2$ for some whole number $k$ from $1$ up.",
        "reason": "Inductive assumption: the claim at $k$."
      },
      {
        "step": "$a_{k+1} - a_k = \\dfrac{2a_k}{a_k - 2}$",
        "reason": "Single fraction: $\\dfrac{a_k^2}{a_k - 2} - a_k = \\dfrac{a_k^2 - a_k(a_k - 2)}{a_k - 2}$, and the top is $2a_k$."
      },
      {
        "step": "$a_{k+1} > a_k$",
        "reason": "A product is positive when its factors have the same sign and negative when they differ: by line 3 the top $2a_k$ and the bottom $a_k - 2$ of line 4 are positive, so $a_{k+1} - a_k$ is positive."
      },
      {
        "step": "So $a_{k+1} > 2$.",
        "reason": "Inductive step: by lines 5 and 3, $a_{k+1} > a_k > 2$; this is the claim at $k + 1$."
      },
      {
        "step": "So $a_k > 2$ for every whole number $k$ from $1$ up.",
        "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 6."
      },
      {
        "step": "$\\dfrac{1}{a_{k+1}} = \\dfrac{a_k - 2}{a_k^2}$",
        "reason": "Reciprocal, from arithmetic: equal numbers that are not $0$ have equal reciprocals, and both sides of the recursion are positive by line 7."
      },
      {
        "step": "$\\dfrac{1}{a_{k+1}} = \\dfrac{1}{a_k} - \\dfrac{2}{a_k^2}$",
        "reason": "Cancelling a common factor: each term of the top is divided by $a_k^2$, and $a_k$ cancels in the first."
      },
      {
        "step": "$\\dfrac{2}{a_k^2} = \\dfrac{1}{a_k} - \\dfrac{1}{a_{k+1}}$",
        "reason": "Adding the same number to both sides: $\\dfrac{2}{a_k^2}$ is added to both sides of line 9, and $\\dfrac{1}{a_{k+1}}$ is taken from both."
      },
      {
        "step": "$\\dfrac{2}{a_1^2} + \\dfrac{2}{a_2^2} + \\dots + \\dfrac{2}{a_n^2} = \\left(\\dfrac{1}{a_1} - \\dfrac{1}{a_2}\\right) + \\left(\\dfrac{1}{a_2} - \\dfrac{1}{a_3}\\right) + \\dots + \\left(\\dfrac{1}{a_n} - \\dfrac{1}{a_{n+1}}\\right)$",
        "reason": "Adding two equations: line 10 for $k = 1, 2, \\dots, n$, the $n$ equations added."
      },
      {
        "step": "$\\dfrac{2}{a_1^2} + \\dfrac{2}{a_2^2} + \\dots + \\dfrac{2}{a_n^2} = \\dfrac{1}{a_1} - \\dfrac{1}{a_{n+1}}$",
        "reason": "Telescoping sum: each fraction taken away is added back in the next bracket, so the first and the last are left."
      },
      {
        "step": "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} = \\dfrac{1}{2a_1} - \\dfrac{1}{2a_{n+1}}$",
        "reason": "Dividing both sides by a nonzero number: both sides of line 12 are divided by $2$."
      },
      {
        "step": "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} = \\dfrac{1}{10} - \\dfrac{1}{2a_{n+1}}$",
        "reason": "Substituting a value: $a_1 = 5$ goes into line 13, and $2 \\cdot 5 = 10$."
      },
      {
        "step": "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} < \\dfrac{1}{10}$",
        "reason": "A product is positive when its factors have the same sign and negative when they differ: $2$ and $a_{n+1}$ are positive by line 7, so $\\dfrac{1}{2a_{n+1}}$ is positive and the right side of line 14 is below $\\dfrac{1}{10}$."
      }
    ]
  },
  {
    "id": "t244-k1-p11",
    "topic": "estimates-for-sequences",
    "kind": "t244-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $\\dfrac{1}{3 \\cdot 11 \\cdot 19} + \\dfrac{1}{11 \\cdot 19 \\cdot 27} + \\dots + \\dfrac{1}{(8n - 5)(8n + 3)(8n + 11)} < \\dfrac{1}{528}$ for every whole number $n$ from $1$ up.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\dfrac{1}{3 \\cdot 11 \\cdot 19} + \\dfrac{1}{11 \\cdot 19 \\cdot 27} + \\dots + \\dfrac{1}{(8n - 5)(8n + 3)(8n + 11)} < \\dfrac{1}{528}$ for every whole number $n$ from $1$ up.",
        "reason": "Arithmetic sequence: this is the problem as given; in each bottom the three factors go up by $8$, and from one term to the next the first factor goes up by $8$."
      },
      {
        "step": "Each term is $\\dfrac{1}{k(k + 8)(k + 16)}$, for $k = 3, 11, \\dots, 8n - 5$.",
        "reason": "Arithmetic sequence: the first factors have the common difference $8$, and in each bottom the second and third factors are the first plus $8$ and plus $16$."
      },
      {
        "step": "$\\dfrac{1}{k(k + 8)(k + 16)} = \\dfrac{a}{k(k + 8)} + \\dfrac{b}{(k + 8)(k + 16)}$",
        "reason": "Partial fractions: numbers $a$ and $b$ are sought that make this true for every $k$; each bottom on the right is the product of two neighbouring factors."
      },
      {
        "step": "$1 = a(k + 16) + bk$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $k(k + 8)(k + 16)$."
      },
      {
        "step": "$a = \\dfrac{1}{16}$",
        "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = 0$ gives $1 = 16a$."
      },
      {
        "step": "$b = -\\dfrac{1}{16}$",
        "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = -16$ gives $1 = -16b$."
      },
      {
        "step": "The sum is $\\dfrac{1}{16}\\left(\\dfrac{1}{3 \\cdot 11} - \\dfrac{1}{11 \\cdot 19}\\right) + \\dfrac{1}{16}\\left(\\dfrac{1}{11 \\cdot 19} - \\dfrac{1}{19 \\cdot 27}\\right) + \\dots + \\dfrac{1}{16}\\left(\\dfrac{1}{(8n - 5)(8n + 3)} - \\dfrac{1}{(8n + 3)(8n + 11)}\\right)$.",
        "reason": "Substituting a value: by lines 3, 5 and 6, each term $\\dfrac{1}{k(k + 8)(k + 16)}$ is $\\dfrac{1}{16}\\left(\\dfrac{1}{k(k + 8)} - \\dfrac{1}{(k + 8)(k + 16)}\\right)$, with its own value of $k$."
      },
      {
        "step": "The sum is $\\dfrac{1}{16}\\left(\\dfrac{1}{3 \\cdot 11} - \\dfrac{1}{11 \\cdot 19} + \\dfrac{1}{11 \\cdot 19} - \\dfrac{1}{19 \\cdot 27} + \\dots + \\dfrac{1}{(8n - 5)(8n + 3)} - \\dfrac{1}{(8n + 3)(8n + 11)}\\right)$.",
        "reason": "The distributive law, from arithmetic: the common factor $\\dfrac{1}{16}$ is taken out."
      },
      {
        "step": "The sum is $\\dfrac{1}{16}\\left(\\dfrac{1}{3 \\cdot 11} - \\dfrac{1}{(8n + 3)(8n + 11)}\\right)$.",
        "reason": "Telescoping sum: each fraction taken away is added back in the next bracket, so the first and the last are left."
      },
      {
        "step": "So the sum is below $\\dfrac{1}{16} \\cdot \\dfrac{1}{3 \\cdot 11} = \\dfrac{1}{528}$.",
        "reason": "Multiplying by a positive number: the fraction taken away in line 9 is positive, so the bracket is below $\\dfrac{1}{3 \\cdot 11}$, and both are multiplied by $\\dfrac{1}{16}$."
      }
    ]
  },
  {
    "id": "t244-k1-p12",
    "topic": "estimates-for-sequences",
    "kind": "t244-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $\\dfrac{1}{1 \\cdot 10 \\cdot 19} + \\dfrac{1}{10 \\cdot 19 \\cdot 28} + \\dots + \\dfrac{1}{(9n - 8)(9n + 1)(9n + 10)} < \\dfrac{1}{180}$ for every whole number $n$ from $1$ up.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\dfrac{1}{1 \\cdot 10 \\cdot 19} + \\dfrac{1}{10 \\cdot 19 \\cdot 28} + \\dots + \\dfrac{1}{(9n - 8)(9n + 1)(9n + 10)} < \\dfrac{1}{180}$ for every whole number $n$ from $1$ up.",
        "reason": "Arithmetic sequence: this is the problem as given; in each bottom the three factors go up by $9$, and from one term to the next the first factor goes up by $9$."
      },
      {
        "step": "Each term is $\\dfrac{1}{k(k + 9)(k + 18)}$, for $k = 1, 10, \\dots, 9n - 8$.",
        "reason": "Arithmetic sequence: the first factors have the common difference $9$, and in each bottom the second and third factors are the first plus $9$ and plus $18$."
      },
      {
        "step": "$\\dfrac{1}{k(k + 9)(k + 18)} = \\dfrac{a}{k(k + 9)} + \\dfrac{b}{(k + 9)(k + 18)}$",
        "reason": "Partial fractions: numbers $a$ and $b$ are sought that make this true for every $k$; each bottom on the right is the product of two neighbouring factors."
      },
      {
        "step": "$1 = a(k + 18) + bk$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $k(k + 9)(k + 18)$."
      },
      {
        "step": "$a = \\dfrac{1}{18}$",
        "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = 0$ gives $1 = 18a$."
      },
      {
        "step": "$b = -\\dfrac{1}{18}$",
        "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = -18$ gives $1 = -18b$."
      },
      {
        "step": "The sum is $\\dfrac{1}{18}\\left(\\dfrac{1}{1 \\cdot 10} - \\dfrac{1}{10 \\cdot 19}\\right) + \\dfrac{1}{18}\\left(\\dfrac{1}{10 \\cdot 19} - \\dfrac{1}{19 \\cdot 28}\\right) + \\dots + \\dfrac{1}{18}\\left(\\dfrac{1}{(9n - 8)(9n + 1)} - \\dfrac{1}{(9n + 1)(9n + 10)}\\right)$.",
        "reason": "Substituting a value: by lines 3, 5 and 6, each term $\\dfrac{1}{k(k + 9)(k + 18)}$ is $\\dfrac{1}{18}\\left(\\dfrac{1}{k(k + 9)} - \\dfrac{1}{(k + 9)(k + 18)}\\right)$, with its own value of $k$."
      },
      {
        "step": "The sum is $\\dfrac{1}{18}\\left(\\dfrac{1}{1 \\cdot 10} - \\dfrac{1}{10 \\cdot 19} + \\dfrac{1}{10 \\cdot 19} - \\dfrac{1}{19 \\cdot 28} + \\dots + \\dfrac{1}{(9n - 8)(9n + 1)} - \\dfrac{1}{(9n + 1)(9n + 10)}\\right)$.",
        "reason": "The distributive law, from arithmetic: the common factor $\\dfrac{1}{18}$ is taken out."
      },
      {
        "step": "The sum is $\\dfrac{1}{18}\\left(\\dfrac{1}{1 \\cdot 10} - \\dfrac{1}{(9n + 1)(9n + 10)}\\right)$.",
        "reason": "Telescoping sum: each fraction taken away is added back in the next bracket, so the first and the last are left."
      },
      {
        "step": "So the sum is below $\\dfrac{1}{18} \\cdot \\dfrac{1}{1 \\cdot 10} = \\dfrac{1}{180}$.",
        "reason": "Multiplying by a positive number: the fraction taken away in line 9 is positive, so the bracket is below $\\dfrac{1}{1 \\cdot 10}$, and both are multiplied by $\\dfrac{1}{18}$."
      }
    ]
  },
  {
    "id": "t244-k1-p13",
    "topic": "estimates-for-sequences",
    "kind": "t244-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} < \\dfrac{1}{52}$ for every whole number $n$ from $1$ up, where $a_1 = 13$ and $a_{k+1} = \\dfrac{a_k^2}{a_k - 4}$ for every whole number $k$ from $1$ up.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} < \\dfrac{1}{52}$ for every whole number $n$ from $1$ up, where $a_1 = 13$ and $a_{k+1} = \\dfrac{a_k^2}{a_k - 4}$ for every whole number $k$ from $1$ up.",
        "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and each term gives the next."
      },
      {
        "step": "$a_1 > 4$",
        "reason": "Base case: $a_1 = 13$, and $13$ is above $4$; this is the claim $a_k > 4$ at $k = 1$."
      },
      {
        "step": "Assume that $a_k > 4$ for some whole number $k$ from $1$ up.",
        "reason": "Inductive assumption: the claim at $k$."
      },
      {
        "step": "$a_{k+1} - a_k = \\dfrac{4a_k}{a_k - 4}$",
        "reason": "Single fraction: $\\dfrac{a_k^2}{a_k - 4} - a_k = \\dfrac{a_k^2 - a_k(a_k - 4)}{a_k - 4}$, and the top is $4a_k$."
      },
      {
        "step": "$a_{k+1} > a_k$",
        "reason": "A product is positive when its factors have the same sign and negative when they differ: by line 3 the top $4a_k$ and the bottom $a_k - 4$ of line 4 are positive, so $a_{k+1} - a_k$ is positive."
      },
      {
        "step": "So $a_{k+1} > 4$.",
        "reason": "Inductive step: by lines 5 and 3, $a_{k+1} > a_k > 4$; this is the claim at $k + 1$."
      },
      {
        "step": "So $a_k > 4$ for every whole number $k$ from $1$ up.",
        "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 6."
      },
      {
        "step": "$\\dfrac{1}{a_{k+1}} = \\dfrac{a_k - 4}{a_k^2}$",
        "reason": "Reciprocal, from arithmetic: equal numbers that are not $0$ have equal reciprocals, and both sides of the recursion are positive by line 7."
      },
      {
        "step": "$\\dfrac{1}{a_{k+1}} = \\dfrac{1}{a_k} - \\dfrac{4}{a_k^2}$",
        "reason": "Cancelling a common factor: each term of the top is divided by $a_k^2$, and $a_k$ cancels in the first."
      },
      {
        "step": "$\\dfrac{4}{a_k^2} = \\dfrac{1}{a_k} - \\dfrac{1}{a_{k+1}}$",
        "reason": "Adding the same number to both sides: $\\dfrac{4}{a_k^2}$ is added to both sides of line 9, and $\\dfrac{1}{a_{k+1}}$ is taken from both."
      },
      {
        "step": "$\\dfrac{4}{a_1^2} + \\dfrac{4}{a_2^2} + \\dots + \\dfrac{4}{a_n^2} = \\left(\\dfrac{1}{a_1} - \\dfrac{1}{a_2}\\right) + \\left(\\dfrac{1}{a_2} - \\dfrac{1}{a_3}\\right) + \\dots + \\left(\\dfrac{1}{a_n} - \\dfrac{1}{a_{n+1}}\\right)$",
        "reason": "Adding two equations: line 10 for $k = 1, 2, \\dots, n$, the $n$ equations added."
      },
      {
        "step": "$\\dfrac{4}{a_1^2} + \\dfrac{4}{a_2^2} + \\dots + \\dfrac{4}{a_n^2} = \\dfrac{1}{a_1} - \\dfrac{1}{a_{n+1}}$",
        "reason": "Telescoping sum: each fraction taken away is added back in the next bracket, so the first and the last are left."
      },
      {
        "step": "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} = \\dfrac{1}{4a_1} - \\dfrac{1}{4a_{n+1}}$",
        "reason": "Dividing both sides by a nonzero number: both sides of line 12 are divided by $4$."
      },
      {
        "step": "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} = \\dfrac{1}{52} - \\dfrac{1}{4a_{n+1}}$",
        "reason": "Substituting a value: $a_1 = 13$ goes into line 13, and $4 \\cdot 13 = 52$."
      },
      {
        "step": "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_n^2} < \\dfrac{1}{52}$",
        "reason": "A product is positive when its factors have the same sign and negative when they differ: $4$ and $a_{n+1}$ are positive by line 7, so $\\dfrac{1}{4a_{n+1}}$ is positive and the right side of line 14 is below $\\dfrac{1}{52}$."
      }
    ]
  },
  {
    "id": "t244-k1-p14",
    "topic": "estimates-for-sequences",
    "kind": "t244-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $\\dfrac{1}{11 \\cdot 15 \\cdot 19} + \\dfrac{1}{15 \\cdot 19 \\cdot 23} + \\dots + \\dfrac{1}{(4n + 7)(4n + 11)(4n + 15)} < \\dfrac{1}{1320}$ for every whole number $n$ from $1$ up.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\dfrac{1}{11 \\cdot 15 \\cdot 19} + \\dfrac{1}{15 \\cdot 19 \\cdot 23} + \\dots + \\dfrac{1}{(4n + 7)(4n + 11)(4n + 15)} < \\dfrac{1}{1320}$ for every whole number $n$ from $1$ up.",
        "reason": "Arithmetic sequence: this is the problem as given; in each bottom the three factors go up by $4$, and from one term to the next the first factor goes up by $4$."
      },
      {
        "step": "Each term is $\\dfrac{1}{k(k + 4)(k + 8)}$, for $k = 11, 15, \\dots, 4n + 7$.",
        "reason": "Arithmetic sequence: the first factors have the common difference $4$, and in each bottom the second and third factors are the first plus $4$ and plus $8$."
      },
      {
        "step": "$\\dfrac{1}{k(k + 4)(k + 8)} = \\dfrac{a}{k(k + 4)} + \\dfrac{b}{(k + 4)(k + 8)}$",
        "reason": "Partial fractions: numbers $a$ and $b$ are sought that make this true for every $k$; each bottom on the right is the product of two neighbouring factors."
      },
      {
        "step": "$1 = a(k + 8) + bk$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $k(k + 4)(k + 8)$."
      },
      {
        "step": "$a = \\dfrac{1}{8}$",
        "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = 0$ gives $1 = 8a$."
      },
      {
        "step": "$b = -\\dfrac{1}{8}$",
        "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = -8$ gives $1 = -8b$."
      },
      {
        "step": "The sum is $\\dfrac{1}{8}\\left(\\dfrac{1}{11 \\cdot 15} - \\dfrac{1}{15 \\cdot 19}\\right) + \\dfrac{1}{8}\\left(\\dfrac{1}{15 \\cdot 19} - \\dfrac{1}{19 \\cdot 23}\\right) + \\dots + \\dfrac{1}{8}\\left(\\dfrac{1}{(4n + 7)(4n + 11)} - \\dfrac{1}{(4n + 11)(4n + 15)}\\right)$.",
        "reason": "Substituting a value: by lines 3, 5 and 6, each term $\\dfrac{1}{k(k + 4)(k + 8)}$ is $\\dfrac{1}{8}\\left(\\dfrac{1}{k(k + 4)} - \\dfrac{1}{(k + 4)(k + 8)}\\right)$, with its own value of $k$."
      },
      {
        "step": "The sum is $\\dfrac{1}{8}\\left(\\dfrac{1}{11 \\cdot 15} - \\dfrac{1}{15 \\cdot 19} + \\dfrac{1}{15 \\cdot 19} - \\dfrac{1}{19 \\cdot 23} + \\dots + \\dfrac{1}{(4n + 7)(4n + 11)} - \\dfrac{1}{(4n + 11)(4n + 15)}\\right)$.",
        "reason": "The distributive law, from arithmetic: the common factor $\\dfrac{1}{8}$ is taken out."
      },
      {
        "step": "The sum is $\\dfrac{1}{8}\\left(\\dfrac{1}{11 \\cdot 15} - \\dfrac{1}{(4n + 11)(4n + 15)}\\right)$.",
        "reason": "Telescoping sum: each fraction taken away is added back in the next bracket, so the first and the last are left."
      },
      {
        "step": "So the sum is below $\\dfrac{1}{8} \\cdot \\dfrac{1}{11 \\cdot 15} = \\dfrac{1}{1320}$.",
        "reason": "Multiplying by a positive number: the fraction taken away in line 9 is positive, so the bracket is below $\\dfrac{1}{11 \\cdot 15}$, and both are multiplied by $\\dfrac{1}{8}$."
      }
    ]
  },
  {
    "id": "t244-k2-p01",
    "topic": "estimates-for-sequences",
    "kind": "t244-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $27 < a_{44} < 28$, where $a_0 = 17$ and $a_{n+1} = a_n + \\dfrac{5}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $27 < a_{44} < 28$, where $a_0 = 17$ and $a_{n+1} = a_n + \\dfrac{5}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$a_0 \\ge 17$",
        "reason": "Base case: $a_0 = 17$; this is the claim $a_n \\ge 17$ at $n = 0$."
      },
      {
        "step": "Assume that $a_k \\ge 17$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim at $k$."
      },
      {
        "step": "$a_{k+1} > a_k$",
        "reason": "Adding the same number: by line 3 the number $a_k$ is positive, so $\\dfrac{5}{a_k}$ is positive, and $a_k$ is added to both sides of $\\dfrac{5}{a_k} > 0$; the left side is then $a_{k+1}$."
      },
      {
        "step": "So $a_{k+1} \\ge 17$.",
        "reason": "Inductive step: by lines 4 and 3, $a_{k+1} > a_k \\ge 17$; this is the claim at $k + 1$."
      },
      {
        "step": "So $a_n \\ge 17$ for every whole number $n$.",
        "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 5."
      },
      {
        "step": "$a_{n+1}^2 = \\left(a_n + \\dfrac{5}{a_n}\\right)^2$",
        "reason": "Raising both sides to a power: both sides of the recursion are squared."
      },
      {
        "step": "$a_{n+1}^2 = a_n^2 + 10 + \\dfrac{25}{a_n^2}$",
        "reason": "Square of a binomial: twice the product of $a_n$ and $\\dfrac{5}{a_n}$ is $10$."
      },
      {
        "step": "$a_{n+1}^2 - a_n^2 = 10 + \\dfrac{25}{a_n^2}$",
        "reason": "Adding the same number to both sides: $a_n^2$ is taken from both sides."
      },
      {
        "step": "$a_{n+1}^2 - a_n^2 > 10$",
        "reason": "Trivial Inequality: $\\dfrac{25}{a_n^2}$ is the square of $\\dfrac{5}{a_n}$, which is not $0$, so it is above $0$."
      },
      {
        "step": "$a_{44}^2 - a_0^2 > 440$",
        "reason": "Telescoping bound: line 10 for $n = 0, 1, \\dots, 43$ gives $44$ differences, each above $10$, and $44 \\cdot 10 = 440$."
      },
      {
        "step": "$a_{44}^2 > 729$",
        "reason": "Adding the same number: $a_0^2 = 289$ is added to both sides, and $289 + 440 = 729$."
      },
      {
        "step": "$a_n^2 \\ge 289$",
        "reason": "Powers and roots of positive numbers keep the order: both sides of line 6 are squared, and $17^2 = 289$."
      },
      {
        "step": "$\\dfrac{25}{a_n^2} \\le \\dfrac{25}{289}$",
        "reason": "Reciprocals of numbers of the same sign reverse the order: by line 13, under the same positive top the greater positive bottom gives the smaller fraction."
      },
      {
        "step": "$a_{n+1}^2 - a_n^2 \\le 10 + \\dfrac{25}{289}$",
        "reason": "Adding the same number: $10$ is added to both sides of line 14, and the left side is then the difference of line 9."
      },
      {
        "step": "$a_{44}^2 - a_0^2 \\le 440 + \\dfrac{1100}{289}$",
        "reason": "Telescoping bound: line 15 for $n = 0, 1, \\dots, 43$ gives $44$ differences, each at most $10 + \\dfrac{25}{289}$, and $44$ times that is $440 + \\dfrac{1100}{289}$."
      },
      {
        "step": "$a_{44}^2 \\le 729 + \\dfrac{1100}{289}$",
        "reason": "Adding the same number: $a_0^2 = 289$ is added to both sides."
      },
      {
        "step": "$a_{44}^2 < 784$",
        "reason": "Transitivity: $\\dfrac{1100}{289}$ is below $55$, and $729 + 55 = 784$."
      },
      {
        "step": "$27 < a_{44} < 28$",
        "reason": "Powers and roots of positive numbers keep the order: by lines 12 and 18, $27^2 < a_{44}^2 < 28^2$, and $a_{44}$ is positive by line 6."
      }
    ]
  },
  {
    "id": "t244-k2-p02",
    "topic": "estimates-for-sequences",
    "kind": "t244-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $179 < \\dfrac{1}{a_4} < 180$, where $a_0 = \\dfrac{1}{155}$ and $a_{n+1} = a_n - 6a_n^2$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $179 < \\dfrac{1}{a_4} < 180$, where $a_0 = \\dfrac{1}{155}$ and $a_{n+1} = a_n - 6a_n^2$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$0 < a_0 \\le \\dfrac{1}{155}$",
        "reason": "Base case: $a_0 = \\dfrac{1}{155}$; this is the claim $0 < a_n \\le \\dfrac{1}{155}$ at $n = 0$."
      },
      {
        "step": "Assume that $0 < a_k \\le \\dfrac{1}{155}$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim at $k$."
      },
      {
        "step": "$a_{k+1} = a_k(1 - 6a_k)$",
        "reason": "Common factor: $a_k$ is taken out of $a_k - 6a_k^2$."
      },
      {
        "step": "$-\\dfrac{6}{155} \\le -6a_k < 0$",
        "reason": "Multiplying by a negative number reverses the sign: the two parts of line 3 are multiplied by $-6$."
      },
      {
        "step": "$\\dfrac{149}{155} \\le 1 - 6a_k < 1$",
        "reason": "Adding the same number: $1$ is added to each part of line 5, and $1 - \\dfrac{6}{155} = \\dfrac{149}{155}$."
      },
      {
        "step": "$0 < a_{k+1} < a_k$",
        "reason": "Multiplying by a positive number: by line 6, $0 < 1 - 6a_k < 1$, and each part is multiplied by $a_k$, which is positive by line 3; the middle is then $a_{k+1}$ by line 4."
      },
      {
        "step": "So $0 < a_{k+1} \\le \\dfrac{1}{155}$.",
        "reason": "Inductive step: by lines 7 and 3, $a_{k+1} < a_k \\le \\dfrac{1}{155}$; this is the claim at $k + 1$."
      },
      {
        "step": "So $0 < a_n \\le \\dfrac{1}{155}$ for every whole number $n$.",
        "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 8."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{1}{a_n(1 - 6a_n)}$",
        "reason": "Reciprocal, from arithmetic: equal numbers that are not $0$ have equal reciprocals; lines 4 and 6 hold for every whole number in place of $k$ by line 9, so both sides of $a_{n+1} = a_n(1 - 6a_n)$ are positive."
      },
      {
        "step": "$\\dfrac{1}{a_n(1 - 6a_n)} = \\dfrac{1}{a_n} + \\dfrac{6}{1 - 6a_n}$",
        "reason": "Partial fractions: over the common bottom $a_n(1 - 6a_n)$ the right side has the top $(1 - 6a_n) + 6a_n$, which is $1$."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} - \\dfrac{1}{a_n} = \\dfrac{6}{1 - 6a_n}$",
        "reason": "Adding the same number to both sides: by lines 10 and 11, with $\\dfrac{1}{a_n}$ taken from both sides."
      },
      {
        "step": "$6 < \\dfrac{6}{1 - 6a_n} \\le \\dfrac{930}{149}$",
        "reason": "Reciprocals of numbers of the same sign reverse the order: by line 6, which holds for every whole number in place of $k$ by line 9, the bottom is at least $\\dfrac{149}{155}$ and below $1$, and $6$ divided by $\\dfrac{149}{155}$ is $\\dfrac{930}{149}$."
      },
      {
        "step": "$\\dfrac{1}{a_4} - \\dfrac{1}{a_0} > 24$",
        "reason": "Telescoping bound: line 12 for $n = 0, 1, \\dots, 3$ gives $4$ differences, each above $6$ by line 13, and $4 \\cdot 6 = 24$."
      },
      {
        "step": "$\\dfrac{1}{a_4} - \\dfrac{1}{a_0} \\le 24 + \\dfrac{144}{149}$",
        "reason": "Telescoping bound: the same $4$ differences are each at most $\\dfrac{930}{149}$ by line 13, and $4 \\cdot \\dfrac{930}{149} = 24 + \\dfrac{144}{149}$."
      },
      {
        "step": "$179 < \\dfrac{1}{a_4} \\le 179 + \\dfrac{144}{149}$",
        "reason": "Adding the same number: $\\dfrac{1}{a_0} = 155$ is added to both sides of lines 14 and 15, and $155 + 24 = 179$."
      },
      {
        "step": "$179 < \\dfrac{1}{a_4} < 180$",
        "reason": "Transitivity: $\\dfrac{144}{149}$ is below $1$."
      }
    ]
  },
  {
    "id": "t244-k2-p03",
    "topic": "estimates-for-sequences",
    "kind": "t244-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $12 < a_{54} < 13$, where $a_0 = 6$ and $a_{n+1} = a_n + \\dfrac{1}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $12 < a_{54} < 13$, where $a_0 = 6$ and $a_{n+1} = a_n + \\dfrac{1}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$a_0 \\ge 6$",
        "reason": "Base case: $a_0 = 6$; this is the claim $a_n \\ge 6$ at $n = 0$."
      },
      {
        "step": "Assume that $a_k \\ge 6$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim at $k$."
      },
      {
        "step": "$a_{k+1} > a_k$",
        "reason": "Adding the same number: by line 3 the number $a_k$ is positive, so $\\dfrac{1}{a_k}$ is positive, and $a_k$ is added to both sides of $\\dfrac{1}{a_k} > 0$; the left side is then $a_{k+1}$."
      },
      {
        "step": "So $a_{k+1} \\ge 6$.",
        "reason": "Inductive step: by lines 4 and 3, $a_{k+1} > a_k \\ge 6$; this is the claim at $k + 1$."
      },
      {
        "step": "So $a_n \\ge 6$ for every whole number $n$.",
        "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 5."
      },
      {
        "step": "$a_{n+1}^2 = \\left(a_n + \\dfrac{1}{a_n}\\right)^2$",
        "reason": "Raising both sides to a power: both sides of the recursion are squared."
      },
      {
        "step": "$a_{n+1}^2 = a_n^2 + 2 + \\dfrac{1}{a_n^2}$",
        "reason": "Square of a binomial: twice the product of $a_n$ and $\\dfrac{1}{a_n}$ is $2$."
      },
      {
        "step": "$a_{n+1}^2 - a_n^2 = 2 + \\dfrac{1}{a_n^2}$",
        "reason": "Adding the same number to both sides: $a_n^2$ is taken from both sides."
      },
      {
        "step": "$a_{n+1}^2 - a_n^2 > 2$",
        "reason": "Trivial Inequality: $\\dfrac{1}{a_n^2}$ is the square of $\\dfrac{1}{a_n}$, which is not $0$, so it is above $0$."
      },
      {
        "step": "$a_{54}^2 - a_0^2 > 108$",
        "reason": "Telescoping bound: line 10 for $n = 0, 1, \\dots, 53$ gives $54$ differences, each above $2$, and $54 \\cdot 2 = 108$."
      },
      {
        "step": "$a_{54}^2 > 144$",
        "reason": "Adding the same number: $a_0^2 = 36$ is added to both sides, and $36 + 108 = 144$."
      },
      {
        "step": "$a_n^2 \\ge 36$",
        "reason": "Powers and roots of positive numbers keep the order: both sides of line 6 are squared, and $6^2 = 36$."
      },
      {
        "step": "$\\dfrac{1}{a_n^2} \\le \\dfrac{1}{36}$",
        "reason": "Reciprocals of numbers of the same sign reverse the order: by line 13, under the same positive top the greater positive bottom gives the smaller fraction."
      },
      {
        "step": "$a_{n+1}^2 - a_n^2 \\le 2 + \\dfrac{1}{36}$",
        "reason": "Adding the same number: $2$ is added to both sides of line 14, and the left side is then the difference of line 9."
      },
      {
        "step": "$a_{54}^2 - a_0^2 \\le 108 + \\dfrac{3}{2}$",
        "reason": "Telescoping bound: line 15 for $n = 0, 1, \\dots, 53$ gives $54$ differences, each at most $2 + \\dfrac{1}{36}$, and $54$ times that is $108 + \\dfrac{3}{2}$."
      },
      {
        "step": "$a_{54}^2 \\le 144 + \\dfrac{3}{2}$",
        "reason": "Adding the same number: $a_0^2 = 36$ is added to both sides."
      },
      {
        "step": "$a_{54}^2 < 169$",
        "reason": "Transitivity: $\\dfrac{3}{2}$ is below $25$, and $144 + 25 = 169$."
      },
      {
        "step": "$12 < a_{54} < 13$",
        "reason": "Powers and roots of positive numbers keep the order: by lines 12 and 18, $12^2 < a_{54}^2 < 13^2$, and $a_{54}$ is positive by line 6."
      }
    ]
  },
  {
    "id": "t244-k2-p04",
    "topic": "estimates-for-sequences",
    "kind": "t244-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $121 < \\dfrac{1}{a_8} < 122$, where $a_0 = \\dfrac{1}{97}$ and $a_{n+1} = a_n - 3a_n^2$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $121 < \\dfrac{1}{a_8} < 122$, where $a_0 = \\dfrac{1}{97}$ and $a_{n+1} = a_n - 3a_n^2$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$0 < a_0 \\le \\dfrac{1}{97}$",
        "reason": "Base case: $a_0 = \\dfrac{1}{97}$; this is the claim $0 < a_n \\le \\dfrac{1}{97}$ at $n = 0$."
      },
      {
        "step": "Assume that $0 < a_k \\le \\dfrac{1}{97}$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim at $k$."
      },
      {
        "step": "$a_{k+1} = a_k(1 - 3a_k)$",
        "reason": "Common factor: $a_k$ is taken out of $a_k - 3a_k^2$."
      },
      {
        "step": "$-\\dfrac{3}{97} \\le -3a_k < 0$",
        "reason": "Multiplying by a negative number reverses the sign: the two parts of line 3 are multiplied by $-3$."
      },
      {
        "step": "$\\dfrac{94}{97} \\le 1 - 3a_k < 1$",
        "reason": "Adding the same number: $1$ is added to each part of line 5, and $1 - \\dfrac{3}{97} = \\dfrac{94}{97}$."
      },
      {
        "step": "$0 < a_{k+1} < a_k$",
        "reason": "Multiplying by a positive number: by line 6, $0 < 1 - 3a_k < 1$, and each part is multiplied by $a_k$, which is positive by line 3; the middle is then $a_{k+1}$ by line 4."
      },
      {
        "step": "So $0 < a_{k+1} \\le \\dfrac{1}{97}$.",
        "reason": "Inductive step: by lines 7 and 3, $a_{k+1} < a_k \\le \\dfrac{1}{97}$; this is the claim at $k + 1$."
      },
      {
        "step": "So $0 < a_n \\le \\dfrac{1}{97}$ for every whole number $n$.",
        "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 8."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{1}{a_n(1 - 3a_n)}$",
        "reason": "Reciprocal, from arithmetic: equal numbers that are not $0$ have equal reciprocals; lines 4 and 6 hold for every whole number in place of $k$ by line 9, so both sides of $a_{n+1} = a_n(1 - 3a_n)$ are positive."
      },
      {
        "step": "$\\dfrac{1}{a_n(1 - 3a_n)} = \\dfrac{1}{a_n} + \\dfrac{3}{1 - 3a_n}$",
        "reason": "Partial fractions: over the common bottom $a_n(1 - 3a_n)$ the right side has the top $(1 - 3a_n) + 3a_n$, which is $1$."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} - \\dfrac{1}{a_n} = \\dfrac{3}{1 - 3a_n}$",
        "reason": "Adding the same number to both sides: by lines 10 and 11, with $\\dfrac{1}{a_n}$ taken from both sides."
      },
      {
        "step": "$3 < \\dfrac{3}{1 - 3a_n} \\le \\dfrac{291}{94}$",
        "reason": "Reciprocals of numbers of the same sign reverse the order: by line 6, which holds for every whole number in place of $k$ by line 9, the bottom is at least $\\dfrac{94}{97}$ and below $1$, and $3$ divided by $\\dfrac{94}{97}$ is $\\dfrac{291}{94}$."
      },
      {
        "step": "$\\dfrac{1}{a_8} - \\dfrac{1}{a_0} > 24$",
        "reason": "Telescoping bound: line 12 for $n = 0, 1, \\dots, 7$ gives $8$ differences, each above $3$ by line 13, and $8 \\cdot 3 = 24$."
      },
      {
        "step": "$\\dfrac{1}{a_8} - \\dfrac{1}{a_0} \\le 24 + \\dfrac{36}{47}$",
        "reason": "Telescoping bound: the same $8$ differences are each at most $\\dfrac{291}{94}$ by line 13, and $8 \\cdot \\dfrac{291}{94} = 24 + \\dfrac{36}{47}$."
      },
      {
        "step": "$121 < \\dfrac{1}{a_8} \\le 121 + \\dfrac{36}{47}$",
        "reason": "Adding the same number: $\\dfrac{1}{a_0} = 97$ is added to both sides of lines 14 and 15, and $97 + 24 = 121$."
      },
      {
        "step": "$121 < \\dfrac{1}{a_8} < 122$",
        "reason": "Transitivity: $\\dfrac{36}{47}$ is below $1$."
      }
    ]
  },
  {
    "id": "t244-k2-p05",
    "topic": "estimates-for-sequences",
    "kind": "t244-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $26 < a_{46} < 27$, where $a_0 = 20$ and $a_{n+1} = a_n + \\dfrac{3}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $26 < a_{46} < 27$, where $a_0 = 20$ and $a_{n+1} = a_n + \\dfrac{3}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$a_0 \\ge 20$",
        "reason": "Base case: $a_0 = 20$; this is the claim $a_n \\ge 20$ at $n = 0$."
      },
      {
        "step": "Assume that $a_k \\ge 20$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim at $k$."
      },
      {
        "step": "$a_{k+1} > a_k$",
        "reason": "Adding the same number: by line 3 the number $a_k$ is positive, so $\\dfrac{3}{a_k}$ is positive, and $a_k$ is added to both sides of $\\dfrac{3}{a_k} > 0$; the left side is then $a_{k+1}$."
      },
      {
        "step": "So $a_{k+1} \\ge 20$.",
        "reason": "Inductive step: by lines 4 and 3, $a_{k+1} > a_k \\ge 20$; this is the claim at $k + 1$."
      },
      {
        "step": "So $a_n \\ge 20$ for every whole number $n$.",
        "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 5."
      },
      {
        "step": "$a_{n+1}^2 = \\left(a_n + \\dfrac{3}{a_n}\\right)^2$",
        "reason": "Raising both sides to a power: both sides of the recursion are squared."
      },
      {
        "step": "$a_{n+1}^2 = a_n^2 + 6 + \\dfrac{9}{a_n^2}$",
        "reason": "Square of a binomial: twice the product of $a_n$ and $\\dfrac{3}{a_n}$ is $6$."
      },
      {
        "step": "$a_{n+1}^2 - a_n^2 = 6 + \\dfrac{9}{a_n^2}$",
        "reason": "Adding the same number to both sides: $a_n^2$ is taken from both sides."
      },
      {
        "step": "$a_{n+1}^2 - a_n^2 > 6$",
        "reason": "Trivial Inequality: $\\dfrac{9}{a_n^2}$ is the square of $\\dfrac{3}{a_n}$, which is not $0$, so it is above $0$."
      },
      {
        "step": "$a_{46}^2 - a_0^2 > 276$",
        "reason": "Telescoping bound: line 10 for $n = 0, 1, \\dots, 45$ gives $46$ differences, each above $6$, and $46 \\cdot 6 = 276$."
      },
      {
        "step": "$a_{46}^2 > 676$",
        "reason": "Adding the same number: $a_0^2 = 400$ is added to both sides, and $400 + 276 = 676$."
      },
      {
        "step": "$a_n^2 \\ge 400$",
        "reason": "Powers and roots of positive numbers keep the order: both sides of line 6 are squared, and $20^2 = 400$."
      },
      {
        "step": "$\\dfrac{9}{a_n^2} \\le \\dfrac{9}{400}$",
        "reason": "Reciprocals of numbers of the same sign reverse the order: by line 13, under the same positive top the greater positive bottom gives the smaller fraction."
      },
      {
        "step": "$a_{n+1}^2 - a_n^2 \\le 6 + \\dfrac{9}{400}$",
        "reason": "Adding the same number: $6$ is added to both sides of line 14, and the left side is then the difference of line 9."
      },
      {
        "step": "$a_{46}^2 - a_0^2 \\le 276 + \\dfrac{207}{200}$",
        "reason": "Telescoping bound: line 15 for $n = 0, 1, \\dots, 45$ gives $46$ differences, each at most $6 + \\dfrac{9}{400}$, and $46$ times that is $276 + \\dfrac{207}{200}$."
      },
      {
        "step": "$a_{46}^2 \\le 676 + \\dfrac{207}{200}$",
        "reason": "Adding the same number: $a_0^2 = 400$ is added to both sides."
      },
      {
        "step": "$a_{46}^2 < 729$",
        "reason": "Transitivity: $\\dfrac{207}{200}$ is below $53$, and $676 + 53 = 729$."
      },
      {
        "step": "$26 < a_{46} < 27$",
        "reason": "Powers and roots of positive numbers keep the order: by lines 12 and 18, $26^2 < a_{46}^2 < 27^2$, and $a_{46}$ is positive by line 6."
      }
    ]
  },
  {
    "id": "t244-k2-p06",
    "topic": "estimates-for-sequences",
    "kind": "t244-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $127 < \\dfrac{1}{a_6} < 128$, where $a_0 = \\dfrac{1}{109}$ and $a_{n+1} = a_n - 3a_n^2$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $127 < \\dfrac{1}{a_6} < 128$, where $a_0 = \\dfrac{1}{109}$ and $a_{n+1} = a_n - 3a_n^2$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$0 < a_0 \\le \\dfrac{1}{109}$",
        "reason": "Base case: $a_0 = \\dfrac{1}{109}$; this is the claim $0 < a_n \\le \\dfrac{1}{109}$ at $n = 0$."
      },
      {
        "step": "Assume that $0 < a_k \\le \\dfrac{1}{109}$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim at $k$."
      },
      {
        "step": "$a_{k+1} = a_k(1 - 3a_k)$",
        "reason": "Common factor: $a_k$ is taken out of $a_k - 3a_k^2$."
      },
      {
        "step": "$-\\dfrac{3}{109} \\le -3a_k < 0$",
        "reason": "Multiplying by a negative number reverses the sign: the two parts of line 3 are multiplied by $-3$."
      },
      {
        "step": "$\\dfrac{106}{109} \\le 1 - 3a_k < 1$",
        "reason": "Adding the same number: $1$ is added to each part of line 5, and $1 - \\dfrac{3}{109} = \\dfrac{106}{109}$."
      },
      {
        "step": "$0 < a_{k+1} < a_k$",
        "reason": "Multiplying by a positive number: by line 6, $0 < 1 - 3a_k < 1$, and each part is multiplied by $a_k$, which is positive by line 3; the middle is then $a_{k+1}$ by line 4."
      },
      {
        "step": "So $0 < a_{k+1} \\le \\dfrac{1}{109}$.",
        "reason": "Inductive step: by lines 7 and 3, $a_{k+1} < a_k \\le \\dfrac{1}{109}$; this is the claim at $k + 1$."
      },
      {
        "step": "So $0 < a_n \\le \\dfrac{1}{109}$ for every whole number $n$.",
        "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 8."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{1}{a_n(1 - 3a_n)}$",
        "reason": "Reciprocal, from arithmetic: equal numbers that are not $0$ have equal reciprocals; lines 4 and 6 hold for every whole number in place of $k$ by line 9, so both sides of $a_{n+1} = a_n(1 - 3a_n)$ are positive."
      },
      {
        "step": "$\\dfrac{1}{a_n(1 - 3a_n)} = \\dfrac{1}{a_n} + \\dfrac{3}{1 - 3a_n}$",
        "reason": "Partial fractions: over the common bottom $a_n(1 - 3a_n)$ the right side has the top $(1 - 3a_n) + 3a_n$, which is $1$."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} - \\dfrac{1}{a_n} = \\dfrac{3}{1 - 3a_n}$",
        "reason": "Adding the same number to both sides: by lines 10 and 11, with $\\dfrac{1}{a_n}$ taken from both sides."
      },
      {
        "step": "$3 < \\dfrac{3}{1 - 3a_n} \\le \\dfrac{327}{106}$",
        "reason": "Reciprocals of numbers of the same sign reverse the order: by line 6, which holds for every whole number in place of $k$ by line 9, the bottom is at least $\\dfrac{106}{109}$ and below $1$, and $3$ divided by $\\dfrac{106}{109}$ is $\\dfrac{327}{106}$."
      },
      {
        "step": "$\\dfrac{1}{a_6} - \\dfrac{1}{a_0} > 18$",
        "reason": "Telescoping bound: line 12 for $n = 0, 1, \\dots, 5$ gives $6$ differences, each above $3$ by line 13, and $6 \\cdot 3 = 18$."
      },
      {
        "step": "$\\dfrac{1}{a_6} - \\dfrac{1}{a_0} \\le 18 + \\dfrac{27}{53}$",
        "reason": "Telescoping bound: the same $6$ differences are each at most $\\dfrac{327}{106}$ by line 13, and $6 \\cdot \\dfrac{327}{106} = 18 + \\dfrac{27}{53}$."
      },
      {
        "step": "$127 < \\dfrac{1}{a_6} \\le 127 + \\dfrac{27}{53}$",
        "reason": "Adding the same number: $\\dfrac{1}{a_0} = 109$ is added to both sides of lines 14 and 15, and $109 + 18 = 127$."
      },
      {
        "step": "$127 < \\dfrac{1}{a_6} < 128$",
        "reason": "Transitivity: $\\dfrac{27}{53}$ is below $1$."
      }
    ]
  },
  {
    "id": "t244-k2-p07",
    "topic": "estimates-for-sequences",
    "kind": "t244-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $18 < a_{16} < 19$, where $a_0 = 10$ and $a_{n+1} = a_n + \\dfrac{7}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $18 < a_{16} < 19$, where $a_0 = 10$ and $a_{n+1} = a_n + \\dfrac{7}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$a_0 \\ge 10$",
        "reason": "Base case: $a_0 = 10$; this is the claim $a_n \\ge 10$ at $n = 0$."
      },
      {
        "step": "Assume that $a_k \\ge 10$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim at $k$."
      },
      {
        "step": "$a_{k+1} > a_k$",
        "reason": "Adding the same number: by line 3 the number $a_k$ is positive, so $\\dfrac{7}{a_k}$ is positive, and $a_k$ is added to both sides of $\\dfrac{7}{a_k} > 0$; the left side is then $a_{k+1}$."
      },
      {
        "step": "So $a_{k+1} \\ge 10$.",
        "reason": "Inductive step: by lines 4 and 3, $a_{k+1} > a_k \\ge 10$; this is the claim at $k + 1$."
      },
      {
        "step": "So $a_n \\ge 10$ for every whole number $n$.",
        "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 5."
      },
      {
        "step": "$a_{n+1}^2 = \\left(a_n + \\dfrac{7}{a_n}\\right)^2$",
        "reason": "Raising both sides to a power: both sides of the recursion are squared."
      },
      {
        "step": "$a_{n+1}^2 = a_n^2 + 14 + \\dfrac{49}{a_n^2}$",
        "reason": "Square of a binomial: twice the product of $a_n$ and $\\dfrac{7}{a_n}$ is $14$."
      },
      {
        "step": "$a_{n+1}^2 - a_n^2 = 14 + \\dfrac{49}{a_n^2}$",
        "reason": "Adding the same number to both sides: $a_n^2$ is taken from both sides."
      },
      {
        "step": "$a_{n+1}^2 - a_n^2 > 14$",
        "reason": "Trivial Inequality: $\\dfrac{49}{a_n^2}$ is the square of $\\dfrac{7}{a_n}$, which is not $0$, so it is above $0$."
      },
      {
        "step": "$a_{16}^2 - a_0^2 > 224$",
        "reason": "Telescoping bound: line 10 for $n = 0, 1, \\dots, 15$ gives $16$ differences, each above $14$, and $16 \\cdot 14 = 224$."
      },
      {
        "step": "$a_{16}^2 > 324$",
        "reason": "Adding the same number: $a_0^2 = 100$ is added to both sides, and $100 + 224 = 324$."
      },
      {
        "step": "$a_n^2 \\ge 100$",
        "reason": "Powers and roots of positive numbers keep the order: both sides of line 6 are squared, and $10^2 = 100$."
      },
      {
        "step": "$\\dfrac{49}{a_n^2} \\le \\dfrac{49}{100}$",
        "reason": "Reciprocals of numbers of the same sign reverse the order: by line 13, under the same positive top the greater positive bottom gives the smaller fraction."
      },
      {
        "step": "$a_{n+1}^2 - a_n^2 \\le 14 + \\dfrac{49}{100}$",
        "reason": "Adding the same number: $14$ is added to both sides of line 14, and the left side is then the difference of line 9."
      },
      {
        "step": "$a_{16}^2 - a_0^2 \\le 224 + \\dfrac{196}{25}$",
        "reason": "Telescoping bound: line 15 for $n = 0, 1, \\dots, 15$ gives $16$ differences, each at most $14 + \\dfrac{49}{100}$, and $16$ times that is $224 + \\dfrac{196}{25}$."
      },
      {
        "step": "$a_{16}^2 \\le 324 + \\dfrac{196}{25}$",
        "reason": "Adding the same number: $a_0^2 = 100$ is added to both sides."
      },
      {
        "step": "$a_{16}^2 < 361$",
        "reason": "Transitivity: $\\dfrac{196}{25}$ is below $37$, and $324 + 37 = 361$."
      },
      {
        "step": "$18 < a_{16} < 19$",
        "reason": "Powers and roots of positive numbers keep the order: by lines 12 and 18, $18^2 < a_{16}^2 < 19^2$, and $a_{16}$ is positive by line 6."
      }
    ]
  },
  {
    "id": "t244-k2-p08",
    "topic": "estimates-for-sequences",
    "kind": "t244-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $23 < a_{14} < 24$, where $a_0 = 19$ and $a_{n+1} = a_n + \\dfrac{6}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $23 < a_{14} < 24$, where $a_0 = 19$ and $a_{n+1} = a_n + \\dfrac{6}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$a_0 \\ge 19$",
        "reason": "Base case: $a_0 = 19$; this is the claim $a_n \\ge 19$ at $n = 0$."
      },
      {
        "step": "Assume that $a_k \\ge 19$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim at $k$."
      },
      {
        "step": "$a_{k+1} > a_k$",
        "reason": "Adding the same number: by line 3 the number $a_k$ is positive, so $\\dfrac{6}{a_k}$ is positive, and $a_k$ is added to both sides of $\\dfrac{6}{a_k} > 0$; the left side is then $a_{k+1}$."
      },
      {
        "step": "So $a_{k+1} \\ge 19$.",
        "reason": "Inductive step: by lines 4 and 3, $a_{k+1} > a_k \\ge 19$; this is the claim at $k + 1$."
      },
      {
        "step": "So $a_n \\ge 19$ for every whole number $n$.",
        "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 5."
      },
      {
        "step": "$a_{n+1}^2 = \\left(a_n + \\dfrac{6}{a_n}\\right)^2$",
        "reason": "Raising both sides to a power: both sides of the recursion are squared."
      },
      {
        "step": "$a_{n+1}^2 = a_n^2 + 12 + \\dfrac{36}{a_n^2}$",
        "reason": "Square of a binomial: twice the product of $a_n$ and $\\dfrac{6}{a_n}$ is $12$."
      },
      {
        "step": "$a_{n+1}^2 - a_n^2 = 12 + \\dfrac{36}{a_n^2}$",
        "reason": "Adding the same number to both sides: $a_n^2$ is taken from both sides."
      },
      {
        "step": "$a_{n+1}^2 - a_n^2 > 12$",
        "reason": "Trivial Inequality: $\\dfrac{36}{a_n^2}$ is the square of $\\dfrac{6}{a_n}$, which is not $0$, so it is above $0$."
      },
      {
        "step": "$a_{14}^2 - a_0^2 > 168$",
        "reason": "Telescoping bound: line 10 for $n = 0, 1, \\dots, 13$ gives $14$ differences, each above $12$, and $14 \\cdot 12 = 168$."
      },
      {
        "step": "$a_{14}^2 > 529$",
        "reason": "Adding the same number: $a_0^2 = 361$ is added to both sides, and $361 + 168 = 529$."
      },
      {
        "step": "$a_n^2 \\ge 361$",
        "reason": "Powers and roots of positive numbers keep the order: both sides of line 6 are squared, and $19^2 = 361$."
      },
      {
        "step": "$\\dfrac{36}{a_n^2} \\le \\dfrac{36}{361}$",
        "reason": "Reciprocals of numbers of the same sign reverse the order: by line 13, under the same positive top the greater positive bottom gives the smaller fraction."
      },
      {
        "step": "$a_{n+1}^2 - a_n^2 \\le 12 + \\dfrac{36}{361}$",
        "reason": "Adding the same number: $12$ is added to both sides of line 14, and the left side is then the difference of line 9."
      },
      {
        "step": "$a_{14}^2 - a_0^2 \\le 168 + \\dfrac{504}{361}$",
        "reason": "Telescoping bound: line 15 for $n = 0, 1, \\dots, 13$ gives $14$ differences, each at most $12 + \\dfrac{36}{361}$, and $14$ times that is $168 + \\dfrac{504}{361}$."
      },
      {
        "step": "$a_{14}^2 \\le 529 + \\dfrac{504}{361}$",
        "reason": "Adding the same number: $a_0^2 = 361$ is added to both sides."
      },
      {
        "step": "$a_{14}^2 < 576$",
        "reason": "Transitivity: $\\dfrac{504}{361}$ is below $47$, and $529 + 47 = 576$."
      },
      {
        "step": "$23 < a_{14} < 24$",
        "reason": "Powers and roots of positive numbers keep the order: by lines 12 and 18, $23^2 < a_{14}^2 < 24^2$, and $a_{14}$ is positive by line 6."
      }
    ]
  },
  {
    "id": "t244-k2-p09",
    "topic": "estimates-for-sequences",
    "kind": "t244-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $93 < \\dfrac{1}{a_9} < 94$, where $a_0 = \\dfrac{1}{75}$ and $a_{n+1} = a_n - 2a_n^2$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $93 < \\dfrac{1}{a_9} < 94$, where $a_0 = \\dfrac{1}{75}$ and $a_{n+1} = a_n - 2a_n^2$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$0 < a_0 \\le \\dfrac{1}{75}$",
        "reason": "Base case: $a_0 = \\dfrac{1}{75}$; this is the claim $0 < a_n \\le \\dfrac{1}{75}$ at $n = 0$."
      },
      {
        "step": "Assume that $0 < a_k \\le \\dfrac{1}{75}$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim at $k$."
      },
      {
        "step": "$a_{k+1} = a_k(1 - 2a_k)$",
        "reason": "Common factor: $a_k$ is taken out of $a_k - 2a_k^2$."
      },
      {
        "step": "$-\\dfrac{2}{75} \\le -2a_k < 0$",
        "reason": "Multiplying by a negative number reverses the sign: the two parts of line 3 are multiplied by $-2$."
      },
      {
        "step": "$\\dfrac{73}{75} \\le 1 - 2a_k < 1$",
        "reason": "Adding the same number: $1$ is added to each part of line 5, and $1 - \\dfrac{2}{75} = \\dfrac{73}{75}$."
      },
      {
        "step": "$0 < a_{k+1} < a_k$",
        "reason": "Multiplying by a positive number: by line 6, $0 < 1 - 2a_k < 1$, and each part is multiplied by $a_k$, which is positive by line 3; the middle is then $a_{k+1}$ by line 4."
      },
      {
        "step": "So $0 < a_{k+1} \\le \\dfrac{1}{75}$.",
        "reason": "Inductive step: by lines 7 and 3, $a_{k+1} < a_k \\le \\dfrac{1}{75}$; this is the claim at $k + 1$."
      },
      {
        "step": "So $0 < a_n \\le \\dfrac{1}{75}$ for every whole number $n$.",
        "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 8."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{1}{a_n(1 - 2a_n)}$",
        "reason": "Reciprocal, from arithmetic: equal numbers that are not $0$ have equal reciprocals; lines 4 and 6 hold for every whole number in place of $k$ by line 9, so both sides of $a_{n+1} = a_n(1 - 2a_n)$ are positive."
      },
      {
        "step": "$\\dfrac{1}{a_n(1 - 2a_n)} = \\dfrac{1}{a_n} + \\dfrac{2}{1 - 2a_n}$",
        "reason": "Partial fractions: over the common bottom $a_n(1 - 2a_n)$ the right side has the top $(1 - 2a_n) + 2a_n$, which is $1$."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} - \\dfrac{1}{a_n} = \\dfrac{2}{1 - 2a_n}$",
        "reason": "Adding the same number to both sides: by lines 10 and 11, with $\\dfrac{1}{a_n}$ taken from both sides."
      },
      {
        "step": "$2 < \\dfrac{2}{1 - 2a_n} \\le \\dfrac{150}{73}$",
        "reason": "Reciprocals of numbers of the same sign reverse the order: by line 6, which holds for every whole number in place of $k$ by line 9, the bottom is at least $\\dfrac{73}{75}$ and below $1$, and $2$ divided by $\\dfrac{73}{75}$ is $\\dfrac{150}{73}$."
      },
      {
        "step": "$\\dfrac{1}{a_9} - \\dfrac{1}{a_0} > 18$",
        "reason": "Telescoping bound: line 12 for $n = 0, 1, \\dots, 8$ gives $9$ differences, each above $2$ by line 13, and $9 \\cdot 2 = 18$."
      },
      {
        "step": "$\\dfrac{1}{a_9} - \\dfrac{1}{a_0} \\le 18 + \\dfrac{36}{73}$",
        "reason": "Telescoping bound: the same $9$ differences are each at most $\\dfrac{150}{73}$ by line 13, and $9 \\cdot \\dfrac{150}{73} = 18 + \\dfrac{36}{73}$."
      },
      {
        "step": "$93 < \\dfrac{1}{a_9} \\le 93 + \\dfrac{36}{73}$",
        "reason": "Adding the same number: $\\dfrac{1}{a_0} = 75$ is added to both sides of lines 14 and 15, and $75 + 18 = 93$."
      },
      {
        "step": "$93 < \\dfrac{1}{a_9} < 94$",
        "reason": "Transitivity: $\\dfrac{36}{73}$ is below $1$."
      }
    ]
  },
  {
    "id": "t244-k2-p10",
    "topic": "estimates-for-sequences",
    "kind": "t244-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $288 < \\dfrac{1}{a_5} < 289$, where $a_0 = \\dfrac{1}{253}$ and $a_{n+1} = a_n - 7a_n^2$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $288 < \\dfrac{1}{a_5} < 289$, where $a_0 = \\dfrac{1}{253}$ and $a_{n+1} = a_n - 7a_n^2$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$0 < a_0 \\le \\dfrac{1}{253}$",
        "reason": "Base case: $a_0 = \\dfrac{1}{253}$; this is the claim $0 < a_n \\le \\dfrac{1}{253}$ at $n = 0$."
      },
      {
        "step": "Assume that $0 < a_k \\le \\dfrac{1}{253}$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim at $k$."
      },
      {
        "step": "$a_{k+1} = a_k(1 - 7a_k)$",
        "reason": "Common factor: $a_k$ is taken out of $a_k - 7a_k^2$."
      },
      {
        "step": "$-\\dfrac{7}{253} \\le -7a_k < 0$",
        "reason": "Multiplying by a negative number reverses the sign: the two parts of line 3 are multiplied by $-7$."
      },
      {
        "step": "$\\dfrac{246}{253} \\le 1 - 7a_k < 1$",
        "reason": "Adding the same number: $1$ is added to each part of line 5, and $1 - \\dfrac{7}{253} = \\dfrac{246}{253}$."
      },
      {
        "step": "$0 < a_{k+1} < a_k$",
        "reason": "Multiplying by a positive number: by line 6, $0 < 1 - 7a_k < 1$, and each part is multiplied by $a_k$, which is positive by line 3; the middle is then $a_{k+1}$ by line 4."
      },
      {
        "step": "So $0 < a_{k+1} \\le \\dfrac{1}{253}$.",
        "reason": "Inductive step: by lines 7 and 3, $a_{k+1} < a_k \\le \\dfrac{1}{253}$; this is the claim at $k + 1$."
      },
      {
        "step": "So $0 < a_n \\le \\dfrac{1}{253}$ for every whole number $n$.",
        "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 8."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{1}{a_n(1 - 7a_n)}$",
        "reason": "Reciprocal, from arithmetic: equal numbers that are not $0$ have equal reciprocals; lines 4 and 6 hold for every whole number in place of $k$ by line 9, so both sides of $a_{n+1} = a_n(1 - 7a_n)$ are positive."
      },
      {
        "step": "$\\dfrac{1}{a_n(1 - 7a_n)} = \\dfrac{1}{a_n} + \\dfrac{7}{1 - 7a_n}$",
        "reason": "Partial fractions: over the common bottom $a_n(1 - 7a_n)$ the right side has the top $(1 - 7a_n) + 7a_n$, which is $1$."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} - \\dfrac{1}{a_n} = \\dfrac{7}{1 - 7a_n}$",
        "reason": "Adding the same number to both sides: by lines 10 and 11, with $\\dfrac{1}{a_n}$ taken from both sides."
      },
      {
        "step": "$7 < \\dfrac{7}{1 - 7a_n} \\le \\dfrac{1771}{246}$",
        "reason": "Reciprocals of numbers of the same sign reverse the order: by line 6, which holds for every whole number in place of $k$ by line 9, the bottom is at least $\\dfrac{246}{253}$ and below $1$, and $7$ divided by $\\dfrac{246}{253}$ is $\\dfrac{1771}{246}$."
      },
      {
        "step": "$\\dfrac{1}{a_5} - \\dfrac{1}{a_0} > 35$",
        "reason": "Telescoping bound: line 12 for $n = 0, 1, \\dots, 4$ gives $5$ differences, each above $7$ by line 13, and $5 \\cdot 7 = 35$."
      },
      {
        "step": "$\\dfrac{1}{a_5} - \\dfrac{1}{a_0} \\le 35 + \\dfrac{245}{246}$",
        "reason": "Telescoping bound: the same $5$ differences are each at most $\\dfrac{1771}{246}$ by line 13, and $5 \\cdot \\dfrac{1771}{246} = 35 + \\dfrac{245}{246}$."
      },
      {
        "step": "$288 < \\dfrac{1}{a_5} \\le 288 + \\dfrac{245}{246}$",
        "reason": "Adding the same number: $\\dfrac{1}{a_0} = 253$ is added to both sides of lines 14 and 15, and $253 + 35 = 288$."
      },
      {
        "step": "$288 < \\dfrac{1}{a_5} < 289$",
        "reason": "Transitivity: $\\dfrac{245}{246}$ is below $1$."
      }
    ]
  },
  {
    "id": "t244-k2-p11",
    "topic": "estimates-for-sequences",
    "kind": "t244-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $13 < a_9 < 14$, where $a_0 = 5$ and $a_{n+1} = a_n + \\dfrac{8}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $13 < a_9 < 14$, where $a_0 = 5$ and $a_{n+1} = a_n + \\dfrac{8}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$a_0 \\ge 5$",
        "reason": "Base case: $a_0 = 5$; this is the claim $a_n \\ge 5$ at $n = 0$."
      },
      {
        "step": "Assume that $a_k \\ge 5$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim at $k$."
      },
      {
        "step": "$a_{k+1} > a_k$",
        "reason": "Adding the same number: by line 3 the number $a_k$ is positive, so $\\dfrac{8}{a_k}$ is positive, and $a_k$ is added to both sides of $\\dfrac{8}{a_k} > 0$; the left side is then $a_{k+1}$."
      },
      {
        "step": "So $a_{k+1} \\ge 5$.",
        "reason": "Inductive step: by lines 4 and 3, $a_{k+1} > a_k \\ge 5$; this is the claim at $k + 1$."
      },
      {
        "step": "So $a_n \\ge 5$ for every whole number $n$.",
        "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 5."
      },
      {
        "step": "$a_{n+1}^2 = \\left(a_n + \\dfrac{8}{a_n}\\right)^2$",
        "reason": "Raising both sides to a power: both sides of the recursion are squared."
      },
      {
        "step": "$a_{n+1}^2 = a_n^2 + 16 + \\dfrac{64}{a_n^2}$",
        "reason": "Square of a binomial: twice the product of $a_n$ and $\\dfrac{8}{a_n}$ is $16$."
      },
      {
        "step": "$a_{n+1}^2 - a_n^2 = 16 + \\dfrac{64}{a_n^2}$",
        "reason": "Adding the same number to both sides: $a_n^2$ is taken from both sides."
      },
      {
        "step": "$a_{n+1}^2 - a_n^2 > 16$",
        "reason": "Trivial Inequality: $\\dfrac{64}{a_n^2}$ is the square of $\\dfrac{8}{a_n}$, which is not $0$, so it is above $0$."
      },
      {
        "step": "$a_9^2 - a_0^2 > 144$",
        "reason": "Telescoping bound: line 10 for $n = 0, 1, \\dots, 8$ gives $9$ differences, each above $16$, and $9 \\cdot 16 = 144$."
      },
      {
        "step": "$a_9^2 > 169$",
        "reason": "Adding the same number: $a_0^2 = 25$ is added to both sides, and $25 + 144 = 169$."
      },
      {
        "step": "$a_n^2 \\ge 25$",
        "reason": "Powers and roots of positive numbers keep the order: both sides of line 6 are squared, and $5^2 = 25$."
      },
      {
        "step": "$\\dfrac{64}{a_n^2} \\le \\dfrac{64}{25}$",
        "reason": "Reciprocals of numbers of the same sign reverse the order: by line 13, under the same positive top the greater positive bottom gives the smaller fraction."
      },
      {
        "step": "$a_{n+1}^2 - a_n^2 \\le 16 + \\dfrac{64}{25}$",
        "reason": "Adding the same number: $16$ is added to both sides of line 14, and the left side is then the difference of line 9."
      },
      {
        "step": "$a_9^2 - a_0^2 \\le 144 + \\dfrac{576}{25}$",
        "reason": "Telescoping bound: line 15 for $n = 0, 1, \\dots, 8$ gives $9$ differences, each at most $16 + \\dfrac{64}{25}$, and $9$ times that is $144 + \\dfrac{576}{25}$."
      },
      {
        "step": "$a_9^2 \\le 169 + \\dfrac{576}{25}$",
        "reason": "Adding the same number: $a_0^2 = 25$ is added to both sides."
      },
      {
        "step": "$a_9^2 < 196$",
        "reason": "Transitivity: $\\dfrac{576}{25}$ is below $27$, and $169 + 27 = 196$."
      },
      {
        "step": "$13 < a_9 < 14$",
        "reason": "Powers and roots of positive numbers keep the order: by lines 12 and 18, $13^2 < a_9^2 < 14^2$, and $a_9$ is positive by line 6."
      }
    ]
  },
  {
    "id": "t244-k2-p12",
    "topic": "estimates-for-sequences",
    "kind": "t244-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $242 < \\dfrac{1}{a_4} < 243$, where $a_0 = \\dfrac{1}{214}$ and $a_{n+1} = a_n - 7a_n^2$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $242 < \\dfrac{1}{a_4} < 243$, where $a_0 = \\dfrac{1}{214}$ and $a_{n+1} = a_n - 7a_n^2$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$0 < a_0 \\le \\dfrac{1}{214}$",
        "reason": "Base case: $a_0 = \\dfrac{1}{214}$; this is the claim $0 < a_n \\le \\dfrac{1}{214}$ at $n = 0$."
      },
      {
        "step": "Assume that $0 < a_k \\le \\dfrac{1}{214}$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim at $k$."
      },
      {
        "step": "$a_{k+1} = a_k(1 - 7a_k)$",
        "reason": "Common factor: $a_k$ is taken out of $a_k - 7a_k^2$."
      },
      {
        "step": "$-\\dfrac{7}{214} \\le -7a_k < 0$",
        "reason": "Multiplying by a negative number reverses the sign: the two parts of line 3 are multiplied by $-7$."
      },
      {
        "step": "$\\dfrac{207}{214} \\le 1 - 7a_k < 1$",
        "reason": "Adding the same number: $1$ is added to each part of line 5, and $1 - \\dfrac{7}{214} = \\dfrac{207}{214}$."
      },
      {
        "step": "$0 < a_{k+1} < a_k$",
        "reason": "Multiplying by a positive number: by line 6, $0 < 1 - 7a_k < 1$, and each part is multiplied by $a_k$, which is positive by line 3; the middle is then $a_{k+1}$ by line 4."
      },
      {
        "step": "So $0 < a_{k+1} \\le \\dfrac{1}{214}$.",
        "reason": "Inductive step: by lines 7 and 3, $a_{k+1} < a_k \\le \\dfrac{1}{214}$; this is the claim at $k + 1$."
      },
      {
        "step": "So $0 < a_n \\le \\dfrac{1}{214}$ for every whole number $n$.",
        "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 8."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{1}{a_n(1 - 7a_n)}$",
        "reason": "Reciprocal, from arithmetic: equal numbers that are not $0$ have equal reciprocals; lines 4 and 6 hold for every whole number in place of $k$ by line 9, so both sides of $a_{n+1} = a_n(1 - 7a_n)$ are positive."
      },
      {
        "step": "$\\dfrac{1}{a_n(1 - 7a_n)} = \\dfrac{1}{a_n} + \\dfrac{7}{1 - 7a_n}$",
        "reason": "Partial fractions: over the common bottom $a_n(1 - 7a_n)$ the right side has the top $(1 - 7a_n) + 7a_n$, which is $1$."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} - \\dfrac{1}{a_n} = \\dfrac{7}{1 - 7a_n}$",
        "reason": "Adding the same number to both sides: by lines 10 and 11, with $\\dfrac{1}{a_n}$ taken from both sides."
      },
      {
        "step": "$7 < \\dfrac{7}{1 - 7a_n} \\le \\dfrac{1498}{207}$",
        "reason": "Reciprocals of numbers of the same sign reverse the order: by line 6, which holds for every whole number in place of $k$ by line 9, the bottom is at least $\\dfrac{207}{214}$ and below $1$, and $7$ divided by $\\dfrac{207}{214}$ is $\\dfrac{1498}{207}$."
      },
      {
        "step": "$\\dfrac{1}{a_4} - \\dfrac{1}{a_0} > 28$",
        "reason": "Telescoping bound: line 12 for $n = 0, 1, \\dots, 3$ gives $4$ differences, each above $7$ by line 13, and $4 \\cdot 7 = 28$."
      },
      {
        "step": "$\\dfrac{1}{a_4} - \\dfrac{1}{a_0} \\le 28 + \\dfrac{196}{207}$",
        "reason": "Telescoping bound: the same $4$ differences are each at most $\\dfrac{1498}{207}$ by line 13, and $4 \\cdot \\dfrac{1498}{207} = 28 + \\dfrac{196}{207}$."
      },
      {
        "step": "$242 < \\dfrac{1}{a_4} \\le 242 + \\dfrac{196}{207}$",
        "reason": "Adding the same number: $\\dfrac{1}{a_0} = 214$ is added to both sides of lines 14 and 15, and $214 + 28 = 242$."
      },
      {
        "step": "$242 < \\dfrac{1}{a_4} < 243$",
        "reason": "Transitivity: $\\dfrac{196}{207}$ is below $1$."
      }
    ]
  },
  {
    "id": "t244-k2-p13",
    "topic": "estimates-for-sequences",
    "kind": "t244-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $233 < \\dfrac{1}{a_5} < 234$, where $a_0 = \\dfrac{1}{203}$ and $a_{n+1} = a_n - 6a_n^2$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $233 < \\dfrac{1}{a_5} < 234$, where $a_0 = \\dfrac{1}{203}$ and $a_{n+1} = a_n - 6a_n^2$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$0 < a_0 \\le \\dfrac{1}{203}$",
        "reason": "Base case: $a_0 = \\dfrac{1}{203}$; this is the claim $0 < a_n \\le \\dfrac{1}{203}$ at $n = 0$."
      },
      {
        "step": "Assume that $0 < a_k \\le \\dfrac{1}{203}$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim at $k$."
      },
      {
        "step": "$a_{k+1} = a_k(1 - 6a_k)$",
        "reason": "Common factor: $a_k$ is taken out of $a_k - 6a_k^2$."
      },
      {
        "step": "$-\\dfrac{6}{203} \\le -6a_k < 0$",
        "reason": "Multiplying by a negative number reverses the sign: the two parts of line 3 are multiplied by $-6$."
      },
      {
        "step": "$\\dfrac{197}{203} \\le 1 - 6a_k < 1$",
        "reason": "Adding the same number: $1$ is added to each part of line 5, and $1 - \\dfrac{6}{203} = \\dfrac{197}{203}$."
      },
      {
        "step": "$0 < a_{k+1} < a_k$",
        "reason": "Multiplying by a positive number: by line 6, $0 < 1 - 6a_k < 1$, and each part is multiplied by $a_k$, which is positive by line 3; the middle is then $a_{k+1}$ by line 4."
      },
      {
        "step": "So $0 < a_{k+1} \\le \\dfrac{1}{203}$.",
        "reason": "Inductive step: by lines 7 and 3, $a_{k+1} < a_k \\le \\dfrac{1}{203}$; this is the claim at $k + 1$."
      },
      {
        "step": "So $0 < a_n \\le \\dfrac{1}{203}$ for every whole number $n$.",
        "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 8."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{1}{a_n(1 - 6a_n)}$",
        "reason": "Reciprocal, from arithmetic: equal numbers that are not $0$ have equal reciprocals; lines 4 and 6 hold for every whole number in place of $k$ by line 9, so both sides of $a_{n+1} = a_n(1 - 6a_n)$ are positive."
      },
      {
        "step": "$\\dfrac{1}{a_n(1 - 6a_n)} = \\dfrac{1}{a_n} + \\dfrac{6}{1 - 6a_n}$",
        "reason": "Partial fractions: over the common bottom $a_n(1 - 6a_n)$ the right side has the top $(1 - 6a_n) + 6a_n$, which is $1$."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} - \\dfrac{1}{a_n} = \\dfrac{6}{1 - 6a_n}$",
        "reason": "Adding the same number to both sides: by lines 10 and 11, with $\\dfrac{1}{a_n}$ taken from both sides."
      },
      {
        "step": "$6 < \\dfrac{6}{1 - 6a_n} \\le \\dfrac{1218}{197}$",
        "reason": "Reciprocals of numbers of the same sign reverse the order: by line 6, which holds for every whole number in place of $k$ by line 9, the bottom is at least $\\dfrac{197}{203}$ and below $1$, and $6$ divided by $\\dfrac{197}{203}$ is $\\dfrac{1218}{197}$."
      },
      {
        "step": "$\\dfrac{1}{a_5} - \\dfrac{1}{a_0} > 30$",
        "reason": "Telescoping bound: line 12 for $n = 0, 1, \\dots, 4$ gives $5$ differences, each above $6$ by line 13, and $5 \\cdot 6 = 30$."
      },
      {
        "step": "$\\dfrac{1}{a_5} - \\dfrac{1}{a_0} \\le 30 + \\dfrac{180}{197}$",
        "reason": "Telescoping bound: the same $5$ differences are each at most $\\dfrac{1218}{197}$ by line 13, and $5 \\cdot \\dfrac{1218}{197} = 30 + \\dfrac{180}{197}$."
      },
      {
        "step": "$233 < \\dfrac{1}{a_5} \\le 233 + \\dfrac{180}{197}$",
        "reason": "Adding the same number: $\\dfrac{1}{a_0} = 203$ is added to both sides of lines 14 and 15, and $203 + 30 = 233$."
      },
      {
        "step": "$233 < \\dfrac{1}{a_5} < 234$",
        "reason": "Transitivity: $\\dfrac{180}{197}$ is below $1$."
      }
    ]
  },
  {
    "id": "t244-k2-p14",
    "topic": "estimates-for-sequences",
    "kind": "t244-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $17 < a_{13} < 18$, where $a_0 = 9$ and $a_{n+1} = a_n + \\dfrac{8}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $17 < a_{13} < 18$, where $a_0 = 9$ and $a_{n+1} = a_n + \\dfrac{8}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$a_0 \\ge 9$",
        "reason": "Base case: $a_0 = 9$; this is the claim $a_n \\ge 9$ at $n = 0$."
      },
      {
        "step": "Assume that $a_k \\ge 9$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim at $k$."
      },
      {
        "step": "$a_{k+1} > a_k$",
        "reason": "Adding the same number: by line 3 the number $a_k$ is positive, so $\\dfrac{8}{a_k}$ is positive, and $a_k$ is added to both sides of $\\dfrac{8}{a_k} > 0$; the left side is then $a_{k+1}$."
      },
      {
        "step": "So $a_{k+1} \\ge 9$.",
        "reason": "Inductive step: by lines 4 and 3, $a_{k+1} > a_k \\ge 9$; this is the claim at $k + 1$."
      },
      {
        "step": "So $a_n \\ge 9$ for every whole number $n$.",
        "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 5."
      },
      {
        "step": "$a_{n+1}^2 = \\left(a_n + \\dfrac{8}{a_n}\\right)^2$",
        "reason": "Raising both sides to a power: both sides of the recursion are squared."
      },
      {
        "step": "$a_{n+1}^2 = a_n^2 + 16 + \\dfrac{64}{a_n^2}$",
        "reason": "Square of a binomial: twice the product of $a_n$ and $\\dfrac{8}{a_n}$ is $16$."
      },
      {
        "step": "$a_{n+1}^2 - a_n^2 = 16 + \\dfrac{64}{a_n^2}$",
        "reason": "Adding the same number to both sides: $a_n^2$ is taken from both sides."
      },
      {
        "step": "$a_{n+1}^2 - a_n^2 > 16$",
        "reason": "Trivial Inequality: $\\dfrac{64}{a_n^2}$ is the square of $\\dfrac{8}{a_n}$, which is not $0$, so it is above $0$."
      },
      {
        "step": "$a_{13}^2 - a_0^2 > 208$",
        "reason": "Telescoping bound: line 10 for $n = 0, 1, \\dots, 12$ gives $13$ differences, each above $16$, and $13 \\cdot 16 = 208$."
      },
      {
        "step": "$a_{13}^2 > 289$",
        "reason": "Adding the same number: $a_0^2 = 81$ is added to both sides, and $81 + 208 = 289$."
      },
      {
        "step": "$a_n^2 \\ge 81$",
        "reason": "Powers and roots of positive numbers keep the order: both sides of line 6 are squared, and $9^2 = 81$."
      },
      {
        "step": "$\\dfrac{64}{a_n^2} \\le \\dfrac{64}{81}$",
        "reason": "Reciprocals of numbers of the same sign reverse the order: by line 13, under the same positive top the greater positive bottom gives the smaller fraction."
      },
      {
        "step": "$a_{n+1}^2 - a_n^2 \\le 16 + \\dfrac{64}{81}$",
        "reason": "Adding the same number: $16$ is added to both sides of line 14, and the left side is then the difference of line 9."
      },
      {
        "step": "$a_{13}^2 - a_0^2 \\le 208 + \\dfrac{832}{81}$",
        "reason": "Telescoping bound: line 15 for $n = 0, 1, \\dots, 12$ gives $13$ differences, each at most $16 + \\dfrac{64}{81}$, and $13$ times that is $208 + \\dfrac{832}{81}$."
      },
      {
        "step": "$a_{13}^2 \\le 289 + \\dfrac{832}{81}$",
        "reason": "Adding the same number: $a_0^2 = 81$ is added to both sides."
      },
      {
        "step": "$a_{13}^2 < 324$",
        "reason": "Transitivity: $\\dfrac{832}{81}$ is below $35$, and $289 + 35 = 324$."
      },
      {
        "step": "$17 < a_{13} < 18$",
        "reason": "Powers and roots of positive numbers keep the order: by lines 12 and 18, $17^2 < a_{13}^2 < 18^2$, and $a_{13}$ is positive by line 6."
      }
    ]
  },
  {
    "id": "t244-k3-p01",
    "topic": "estimates-for-sequences",
    "kind": "t244-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_1 + 2a_2 + 3a_3 + \\dots + na_n \\ge -\\dfrac{6n(n + 1)(2n + 1) + 1}{12}$ for every whole number $n$ from $1$ up and all numbers $a_1, a_2, \\dots, a_{n+1}$ with $a_1 = 1$ and $|a_{k+1}| = |a_k + 6k|$ for $k = 1, 2, \\dots, n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_1 + 2a_2 + 3a_3 + \\dots + na_n \\ge -\\dfrac{6n(n + 1)(2n + 1) + 1}{12}$ for every whole number $n$ from $1$ up and all numbers $a_1, a_2, \\dots, a_{n+1}$ with $a_1 = 1$ and $|a_{k+1}| = |a_k + 6k|$ for $k = 1, 2, \\dots, n$.",
        "reason": "Absolute value, from arithmetic: this is the problem as given; each term fixes the size of the next term and leaves its sign open."
      },
      {
        "step": "For $k = 1, 2, \\dots, n$, $a_{k+1}^2 = (a_k + 6k)^2$.",
        "reason": "The rule $|x|^2 = x^2$: both sides of $|a_{k+1}| = |a_k + 6k|$ are squared."
      },
      {
        "step": "$a_{k+1}^2 = a_k^2 + 12ka_k + 36k^2$",
        "reason": "Square of a binomial: twice the product of $a_k$ and $6k$ is $12ka_k$."
      },
      {
        "step": "$a_{k+1}^2 - a_k^2 = 12ka_k + 36k^2$",
        "reason": "Adding the same number to both sides: $a_k^2$ is taken from both sides."
      },
      {
        "step": "$\\left(a_2^2 - a_1^2\\right) + \\left(a_3^2 - a_2^2\\right) + \\dots + \\left(a_{n+1}^2 - a_n^2\\right) = 12\\left(a_1 + 2a_2 + 3a_3 + \\dots + na_n\\right) + 36\\left(1^2 + 2^2 + \\dots + n^2\\right)$",
        "reason": "Adding two equations: line 4 for $k = 1, 2, \\dots, n$, the $n$ equations added, with the common factor $12$ taken out of the terms in $a_k$ and $36$ out of the squares."
      },
      {
        "step": "$a_{n+1}^2 - a_1^2 = 12\\left(a_1 + 2a_2 + 3a_3 + \\dots + na_n\\right) + 36\\left(1^2 + 2^2 + \\dots + n^2\\right)$",
        "reason": "Telescoping sum: each square taken away is added back in the next bracket, so the last and the first are left."
      },
      {
        "step": "$1^2 + 2^2 + \\dots + n^2 = \\dfrac{n(n + 1)(2n + 1)}{6}$",
        "reason": "Sum of squares: the sum of the first $n$ squares."
      },
      {
        "step": "$a_{n+1}^2 - 1 = 12\\left(a_1 + 2a_2 + 3a_3 + \\dots + na_n\\right) + 6n(n + 1)(2n + 1)$",
        "reason": "Substituting a value: $a_1 = 1$ and line 7 go into line 6."
      },
      {
        "step": "$a_{n+1}^2 \\ge 0$",
        "reason": "Trivial Inequality: the square of a real number is at least $0$."
      },
      {
        "step": "$a_{n+1}^2 = 12\\left(a_1 + 2a_2 + 3a_3 + \\dots + na_n\\right) + 6n(n + 1)(2n + 1) + 1$",
        "reason": "Adding the same number to both sides: $1$ is added to both sides of line 8."
      },
      {
        "step": "$12\\left(a_1 + 2a_2 + 3a_3 + \\dots + na_n\\right) + 6n(n + 1)(2n + 1) + 1 \\ge 0$",
        "reason": "Substituting a value: line 10 goes into line 9."
      },
      {
        "step": "$12\\left(a_1 + 2a_2 + 3a_3 + \\dots + na_n\\right) \\ge -6n(n + 1)(2n + 1) - 1$",
        "reason": "Adding the same number: $6n(n + 1)(2n + 1) + 1$ is taken from both sides."
      },
      {
        "step": "$a_1 + 2a_2 + 3a_3 + \\dots + na_n \\ge -\\dfrac{6n(n + 1)(2n + 1) + 1}{12}$",
        "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{12}$, and the right side is written over one bottom."
      }
    ]
  },
  {
    "id": "t244-k3-p02",
    "topic": "estimates-for-sequences",
    "kind": "t244-k3",
    "formNo": 3,
    "calc": "no",
    "prompt": "Prove that $\\left(a_1 + a_2 + \\dots + a_n\\right) + \\left(\\dfrac{4^2}{a_1} + \\dfrac{9^2}{a_2} + \\dfrac{14^2}{a_3} + \\dots + \\dfrac{(5n - 1)^2}{a_n}\\right) \\ge n(5n + 3)$ for every whole number $n$ from $1$ up and all positive numbers $a_1, a_2, \\dots, a_n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\left(a_1 + a_2 + \\dots + a_n\\right) + \\left(\\dfrac{4^2}{a_1} + \\dfrac{9^2}{a_2} + \\dfrac{14^2}{a_3} + \\dots + \\dfrac{(5n - 1)^2}{a_n}\\right) \\ge n(5n + 3)$ for every whole number $n$ from $1$ up and all positive numbers $a_1, a_2, \\dots, a_n$.",
        "reason": "AM-GM for two numbers: this is the problem as given; the $k$th term of the second bracket is $\\dfrac{(5k - 1)^2}{a_k}$."
      },
      {
        "step": "For $k = 1, 2, \\dots, n$, $\\dfrac{1}{2}\\left(a_k + \\dfrac{(5k - 1)^2}{a_k}\\right) \\ge \\sqrt{a_k \\cdot \\dfrac{(5k - 1)^2}{a_k}}$.",
        "reason": "AM-GM for two numbers: both numbers are positive, since $a_k$ is positive."
      },
      {
        "step": "$a_k \\cdot \\dfrac{(5k - 1)^2}{a_k} = (5k - 1)^2$",
        "reason": "Cancelling a common factor: $a_k$ cancels."
      },
      {
        "step": "$\\sqrt{a_k \\cdot \\dfrac{(5k - 1)^2}{a_k}} = 5k - 1$",
        "reason": "Root of a square: by line 3 the number under the root is $(5k - 1)^2$, and $5k - 1$ is positive for every $k$ from $1$ up."
      },
      {
        "step": "$a_k + \\dfrac{(5k - 1)^2}{a_k} \\ge 2\\sqrt{a_k \\cdot \\dfrac{(5k - 1)^2}{a_k}}$",
        "reason": "Multiplying by a positive number: both sides of line 2 are multiplied by $2$."
      },
      {
        "step": "$a_k + \\dfrac{(5k - 1)^2}{a_k} \\ge 2(5k - 1)$",
        "reason": "Substituting a value: the root in line 5 is replaced by its value from line 4."
      },
      {
        "step": "$\\left(a_1 + a_2 + \\dots + a_n\\right) + \\left(\\dfrac{4^2}{a_1} + \\dfrac{9^2}{a_2} + \\dfrac{14^2}{a_3} + \\dots + \\dfrac{(5n - 1)^2}{a_n}\\right) \\ge 2\\left(4 + 9 + 14 + \\dots + (5n - 1)\\right)$",
        "reason": "Adding two inequalities: line 6 for $k = 1, 2, \\dots, n$, the $n$ inequalities added, with the common factor $2$ taken out on the right."
      },
      {
        "step": "$4 + 9 + 14 + \\dots + (5n - 1) = \\dfrac{n(5n + 3)}{2}$",
        "reason": "Sum = number of terms × mean of the first and last term, with $n$ terms: the first term is $4$ and the last is $5n - 1$."
      },
      {
        "step": "$\\left(a_1 + a_2 + \\dots + a_n\\right) + \\left(\\dfrac{4^2}{a_1} + \\dfrac{9^2}{a_2} + \\dfrac{14^2}{a_3} + \\dots + \\dfrac{(5n - 1)^2}{a_n}\\right) \\ge n(5n + 3)$",
        "reason": "Substituting a value: line 8 goes into line 7, and twice the fraction is its top."
      }
    ]
  },
  {
    "id": "t244-k3-p03",
    "topic": "estimates-for-sequences",
    "kind": "t244-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_1 + 2a_2 + 3a_3 + \\dots + na_n \\ge -\\dfrac{6n(n + 1)(2n + 1) + 49}{12}$ for every whole number $n$ from $1$ up and all numbers $a_1, a_2, \\dots, a_{n+1}$ with $a_1 = 7$ and $|a_{k+1}| = |a_k + 6k|$ for $k = 1, 2, \\dots, n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_1 + 2a_2 + 3a_3 + \\dots + na_n \\ge -\\dfrac{6n(n + 1)(2n + 1) + 49}{12}$ for every whole number $n$ from $1$ up and all numbers $a_1, a_2, \\dots, a_{n+1}$ with $a_1 = 7$ and $|a_{k+1}| = |a_k + 6k|$ for $k = 1, 2, \\dots, n$.",
        "reason": "Absolute value, from arithmetic: this is the problem as given; each term fixes the size of the next term and leaves its sign open."
      },
      {
        "step": "For $k = 1, 2, \\dots, n$, $a_{k+1}^2 = (a_k + 6k)^2$.",
        "reason": "The rule $|x|^2 = x^2$: both sides of $|a_{k+1}| = |a_k + 6k|$ are squared."
      },
      {
        "step": "$a_{k+1}^2 = a_k^2 + 12ka_k + 36k^2$",
        "reason": "Square of a binomial: twice the product of $a_k$ and $6k$ is $12ka_k$."
      },
      {
        "step": "$a_{k+1}^2 - a_k^2 = 12ka_k + 36k^2$",
        "reason": "Adding the same number to both sides: $a_k^2$ is taken from both sides."
      },
      {
        "step": "$\\left(a_2^2 - a_1^2\\right) + \\left(a_3^2 - a_2^2\\right) + \\dots + \\left(a_{n+1}^2 - a_n^2\\right) = 12\\left(a_1 + 2a_2 + 3a_3 + \\dots + na_n\\right) + 36\\left(1^2 + 2^2 + \\dots + n^2\\right)$",
        "reason": "Adding two equations: line 4 for $k = 1, 2, \\dots, n$, the $n$ equations added, with the common factor $12$ taken out of the terms in $a_k$ and $36$ out of the squares."
      },
      {
        "step": "$a_{n+1}^2 - a_1^2 = 12\\left(a_1 + 2a_2 + 3a_3 + \\dots + na_n\\right) + 36\\left(1^2 + 2^2 + \\dots + n^2\\right)$",
        "reason": "Telescoping sum: each square taken away is added back in the next bracket, so the last and the first are left."
      },
      {
        "step": "$1^2 + 2^2 + \\dots + n^2 = \\dfrac{n(n + 1)(2n + 1)}{6}$",
        "reason": "Sum of squares: the sum of the first $n$ squares."
      },
      {
        "step": "$a_{n+1}^2 - 49 = 12\\left(a_1 + 2a_2 + 3a_3 + \\dots + na_n\\right) + 6n(n + 1)(2n + 1)$",
        "reason": "Substituting a value: $a_1 = 7$ and line 7 go into line 6."
      },
      {
        "step": "$a_{n+1}^2 \\ge 0$",
        "reason": "Trivial Inequality: the square of a real number is at least $0$."
      },
      {
        "step": "$a_{n+1}^2 = 12\\left(a_1 + 2a_2 + 3a_3 + \\dots + na_n\\right) + 6n(n + 1)(2n + 1) + 49$",
        "reason": "Adding the same number to both sides: $49$ is added to both sides of line 8."
      },
      {
        "step": "$12\\left(a_1 + 2a_2 + 3a_3 + \\dots + na_n\\right) + 6n(n + 1)(2n + 1) + 49 \\ge 0$",
        "reason": "Substituting a value: line 10 goes into line 9."
      },
      {
        "step": "$12\\left(a_1 + 2a_2 + 3a_3 + \\dots + na_n\\right) \\ge -6n(n + 1)(2n + 1) - 49$",
        "reason": "Adding the same number: $6n(n + 1)(2n + 1) + 49$ is taken from both sides."
      },
      {
        "step": "$a_1 + 2a_2 + 3a_3 + \\dots + na_n \\ge -\\dfrac{6n(n + 1)(2n + 1) + 49}{12}$",
        "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{12}$, and the right side is written over one bottom."
      }
    ]
  },
  {
    "id": "t244-k3-p04",
    "topic": "estimates-for-sequences",
    "kind": "t244-k3",
    "formNo": 3,
    "calc": "no",
    "prompt": "Prove that $\\left(a_1 + a_2 + \\dots + a_n\\right) + \\left(\\dfrac{2^2}{a_1} + \\dfrac{3^2}{a_2} + \\dfrac{4^2}{a_3} + \\dots + \\dfrac{(n + 1)^2}{a_n}\\right) \\ge n(n + 3)$ for every whole number $n$ from $1$ up and all positive numbers $a_1, a_2, \\dots, a_n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\left(a_1 + a_2 + \\dots + a_n\\right) + \\left(\\dfrac{2^2}{a_1} + \\dfrac{3^2}{a_2} + \\dfrac{4^2}{a_3} + \\dots + \\dfrac{(n + 1)^2}{a_n}\\right) \\ge n(n + 3)$ for every whole number $n$ from $1$ up and all positive numbers $a_1, a_2, \\dots, a_n$.",
        "reason": "AM-GM for two numbers: this is the problem as given; the $k$th term of the second bracket is $\\dfrac{(k + 1)^2}{a_k}$."
      },
      {
        "step": "For $k = 1, 2, \\dots, n$, $\\dfrac{1}{2}\\left(a_k + \\dfrac{(k + 1)^2}{a_k}\\right) \\ge \\sqrt{a_k \\cdot \\dfrac{(k + 1)^2}{a_k}}$.",
        "reason": "AM-GM for two numbers: both numbers are positive, since $a_k$ is positive."
      },
      {
        "step": "$a_k \\cdot \\dfrac{(k + 1)^2}{a_k} = (k + 1)^2$",
        "reason": "Cancelling a common factor: $a_k$ cancels."
      },
      {
        "step": "$\\sqrt{a_k \\cdot \\dfrac{(k + 1)^2}{a_k}} = k + 1$",
        "reason": "Root of a square: by line 3 the number under the root is $(k + 1)^2$, and $k + 1$ is positive for every $k$ from $1$ up."
      },
      {
        "step": "$a_k + \\dfrac{(k + 1)^2}{a_k} \\ge 2\\sqrt{a_k \\cdot \\dfrac{(k + 1)^2}{a_k}}$",
        "reason": "Multiplying by a positive number: both sides of line 2 are multiplied by $2$."
      },
      {
        "step": "$a_k + \\dfrac{(k + 1)^2}{a_k} \\ge 2(k + 1)$",
        "reason": "Substituting a value: the root in line 5 is replaced by its value from line 4."
      },
      {
        "step": "$\\left(a_1 + a_2 + \\dots + a_n\\right) + \\left(\\dfrac{2^2}{a_1} + \\dfrac{3^2}{a_2} + \\dfrac{4^2}{a_3} + \\dots + \\dfrac{(n + 1)^2}{a_n}\\right) \\ge 2\\left(2 + 3 + 4 + \\dots + (n + 1)\\right)$",
        "reason": "Adding two inequalities: line 6 for $k = 1, 2, \\dots, n$, the $n$ inequalities added, with the common factor $2$ taken out on the right."
      },
      {
        "step": "$2 + 3 + 4 + \\dots + (n + 1) = \\dfrac{n(n + 3)}{2}$",
        "reason": "Sum = number of terms × mean of the first and last term, with $n$ terms: the first term is $2$ and the last is $n + 1$."
      },
      {
        "step": "$\\left(a_1 + a_2 + \\dots + a_n\\right) + \\left(\\dfrac{2^2}{a_1} + \\dfrac{3^2}{a_2} + \\dfrac{4^2}{a_3} + \\dots + \\dfrac{(n + 1)^2}{a_n}\\right) \\ge n(n + 3)$",
        "reason": "Substituting a value: line 8 goes into line 7, and twice the fraction is its top."
      }
    ]
  },
  {
    "id": "t244-k3-p05",
    "topic": "estimates-for-sequences",
    "kind": "t244-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_1 + 2a_2 + 3a_3 + \\dots + na_n \\ge -\\dfrac{3n(n + 1)(2n + 1) + 128}{12}$ for every whole number $n$ from $1$ up and all numbers $a_1, a_2, \\dots, a_{n+1}$ with $a_1 = 8$ and $|a_{k+1}| = |a_k + 3k|$ for $k = 1, 2, \\dots, n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_1 + 2a_2 + 3a_3 + \\dots + na_n \\ge -\\dfrac{3n(n + 1)(2n + 1) + 128}{12}$ for every whole number $n$ from $1$ up and all numbers $a_1, a_2, \\dots, a_{n+1}$ with $a_1 = 8$ and $|a_{k+1}| = |a_k + 3k|$ for $k = 1, 2, \\dots, n$.",
        "reason": "Absolute value, from arithmetic: this is the problem as given; each term fixes the size of the next term and leaves its sign open."
      },
      {
        "step": "For $k = 1, 2, \\dots, n$, $a_{k+1}^2 = (a_k + 3k)^2$.",
        "reason": "The rule $|x|^2 = x^2$: both sides of $|a_{k+1}| = |a_k + 3k|$ are squared."
      },
      {
        "step": "$a_{k+1}^2 = a_k^2 + 6ka_k + 9k^2$",
        "reason": "Square of a binomial: twice the product of $a_k$ and $3k$ is $6ka_k$."
      },
      {
        "step": "$a_{k+1}^2 - a_k^2 = 6ka_k + 9k^2$",
        "reason": "Adding the same number to both sides: $a_k^2$ is taken from both sides."
      },
      {
        "step": "$\\left(a_2^2 - a_1^2\\right) + \\left(a_3^2 - a_2^2\\right) + \\dots + \\left(a_{n+1}^2 - a_n^2\\right) = 6\\left(a_1 + 2a_2 + 3a_3 + \\dots + na_n\\right) + 9\\left(1^2 + 2^2 + \\dots + n^2\\right)$",
        "reason": "Adding two equations: line 4 for $k = 1, 2, \\dots, n$, the $n$ equations added, with the common factor $6$ taken out of the terms in $a_k$ and $9$ out of the squares."
      },
      {
        "step": "$a_{n+1}^2 - a_1^2 = 6\\left(a_1 + 2a_2 + 3a_3 + \\dots + na_n\\right) + 9\\left(1^2 + 2^2 + \\dots + n^2\\right)$",
        "reason": "Telescoping sum: each square taken away is added back in the next bracket, so the last and the first are left."
      },
      {
        "step": "$1^2 + 2^2 + \\dots + n^2 = \\dfrac{n(n + 1)(2n + 1)}{6}$",
        "reason": "Sum of squares: the sum of the first $n$ squares."
      },
      {
        "step": "$a_{n+1}^2 - 64 = 6\\left(a_1 + 2a_2 + 3a_3 + \\dots + na_n\\right) + \\dfrac{3n(n + 1)(2n + 1)}{2}$",
        "reason": "Substituting a value: $a_1 = 8$ and line 7 go into line 6."
      },
      {
        "step": "$a_{n+1}^2 \\ge 0$",
        "reason": "Trivial Inequality: the square of a real number is at least $0$."
      },
      {
        "step": "$a_{n+1}^2 = 6\\left(a_1 + 2a_2 + 3a_3 + \\dots + na_n\\right) + \\dfrac{3n(n + 1)(2n + 1)}{2} + 64$",
        "reason": "Adding the same number to both sides: $64$ is added to both sides of line 8."
      },
      {
        "step": "$6\\left(a_1 + 2a_2 + 3a_3 + \\dots + na_n\\right) + \\dfrac{3n(n + 1)(2n + 1)}{2} + 64 \\ge 0$",
        "reason": "Substituting a value: line 10 goes into line 9."
      },
      {
        "step": "$6\\left(a_1 + 2a_2 + 3a_3 + \\dots + na_n\\right) \\ge -\\dfrac{3n(n + 1)(2n + 1)}{2} - 64$",
        "reason": "Adding the same number: $\\dfrac{3n(n + 1)(2n + 1)}{2} + 64$ is taken from both sides."
      },
      {
        "step": "$a_1 + 2a_2 + 3a_3 + \\dots + na_n \\ge -\\dfrac{3n(n + 1)(2n + 1) + 128}{12}$",
        "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{6}$, and the right side is written over one bottom."
      }
    ]
  },
  {
    "id": "t244-k3-p06",
    "topic": "estimates-for-sequences",
    "kind": "t244-k3",
    "formNo": 3,
    "calc": "no",
    "prompt": "Prove that $\\left(a_1 + a_2 + \\dots + a_n\\right) + \\left(\\dfrac{6^2}{a_1} + \\dfrac{11^2}{a_2} + \\dfrac{16^2}{a_3} + \\dots + \\dfrac{(5n + 1)^2}{a_n}\\right) \\ge n(5n + 7)$ for every whole number $n$ from $1$ up and all positive numbers $a_1, a_2, \\dots, a_n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\left(a_1 + a_2 + \\dots + a_n\\right) + \\left(\\dfrac{6^2}{a_1} + \\dfrac{11^2}{a_2} + \\dfrac{16^2}{a_3} + \\dots + \\dfrac{(5n + 1)^2}{a_n}\\right) \\ge n(5n + 7)$ for every whole number $n$ from $1$ up and all positive numbers $a_1, a_2, \\dots, a_n$.",
        "reason": "AM-GM for two numbers: this is the problem as given; the $k$th term of the second bracket is $\\dfrac{(5k + 1)^2}{a_k}$."
      },
      {
        "step": "For $k = 1, 2, \\dots, n$, $\\dfrac{1}{2}\\left(a_k + \\dfrac{(5k + 1)^2}{a_k}\\right) \\ge \\sqrt{a_k \\cdot \\dfrac{(5k + 1)^2}{a_k}}$.",
        "reason": "AM-GM for two numbers: both numbers are positive, since $a_k$ is positive."
      },
      {
        "step": "$a_k \\cdot \\dfrac{(5k + 1)^2}{a_k} = (5k + 1)^2$",
        "reason": "Cancelling a common factor: $a_k$ cancels."
      },
      {
        "step": "$\\sqrt{a_k \\cdot \\dfrac{(5k + 1)^2}{a_k}} = 5k + 1$",
        "reason": "Root of a square: by line 3 the number under the root is $(5k + 1)^2$, and $5k + 1$ is positive for every $k$ from $1$ up."
      },
      {
        "step": "$a_k + \\dfrac{(5k + 1)^2}{a_k} \\ge 2\\sqrt{a_k \\cdot \\dfrac{(5k + 1)^2}{a_k}}$",
        "reason": "Multiplying by a positive number: both sides of line 2 are multiplied by $2$."
      },
      {
        "step": "$a_k + \\dfrac{(5k + 1)^2}{a_k} \\ge 2(5k + 1)$",
        "reason": "Substituting a value: the root in line 5 is replaced by its value from line 4."
      },
      {
        "step": "$\\left(a_1 + a_2 + \\dots + a_n\\right) + \\left(\\dfrac{6^2}{a_1} + \\dfrac{11^2}{a_2} + \\dfrac{16^2}{a_3} + \\dots + \\dfrac{(5n + 1)^2}{a_n}\\right) \\ge 2\\left(6 + 11 + 16 + \\dots + (5n + 1)\\right)$",
        "reason": "Adding two inequalities: line 6 for $k = 1, 2, \\dots, n$, the $n$ inequalities added, with the common factor $2$ taken out on the right."
      },
      {
        "step": "$6 + 11 + 16 + \\dots + (5n + 1) = \\dfrac{n(5n + 7)}{2}$",
        "reason": "Sum = number of terms × mean of the first and last term, with $n$ terms: the first term is $6$ and the last is $5n + 1$."
      },
      {
        "step": "$\\left(a_1 + a_2 + \\dots + a_n\\right) + \\left(\\dfrac{6^2}{a_1} + \\dfrac{11^2}{a_2} + \\dfrac{16^2}{a_3} + \\dots + \\dfrac{(5n + 1)^2}{a_n}\\right) \\ge n(5n + 7)$",
        "reason": "Substituting a value: line 8 goes into line 7, and twice the fraction is its top."
      }
    ]
  },
  {
    "id": "t244-k3-p07",
    "topic": "estimates-for-sequences",
    "kind": "t244-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $a_k \\le 6 + 32k - k^2$ for $k = 0, 1, \\dots, 28$, where $a_0, a_1, \\dots, a_{28}$ are numbers with $a_0 = 6$, $a_{28} = 118$ and $a_{k-1} - 2a_k + a_{k+1} \\ge -2$ for $k = 1, 2, \\dots, 27$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_k \\le 6 + 32k - k^2$ for $k = 0, 1, \\dots, 28$, where $a_0, a_1, \\dots, a_{28}$ are numbers with $a_0 = 6$, $a_{28} = 118$ and $a_{k-1} - 2a_k + a_{k+1} \\ge -2$ for $k = 1, 2, \\dots, 27$.",
        "reason": "Telescoping bound: this is the problem as given; the condition bounds how far one step of the sequence may fall short of the step before it."
      },
      {
        "step": "The numbers $b_k = 6 + zk - k^2$, with $z$ still to be chosen, have $b_0 = 6$ and $b_{k-1} - 2b_k + b_{k+1} = -2$ for every $k$ and every $z$.",
        "reason": "Collecting like terms: in $b_{k-1} - 2b_k + b_{k+1}$ the numbers $6$ and the terms in $z$ cancel, and $-(k - 1)^2 + 2k^2 - (k + 1)^2 = -2$."
      },
      {
        "step": "The number $b_{28}$ is $118$ when $z = 32$.",
        "reason": "Isolating the variable: $b_{28} = 6 + 28z - 28^2$, and $6 + 28z - 28^2 = 118$ gives $28z = 896$."
      },
      {
        "step": "Let $d_k = a_k - \\left(6 + 32k - k^2\\right)$ for $k = 0, 1, \\dots, 28$; then $d_0 = 0$ and $d_{28} = 0$.",
        "reason": "Substituting a value: with $z = 32$ the bracket is $b_k$ of line 2, which is $6$ at $k = 0$ by line 2 and $118$ at $k = 28$ by line 3, and these are $a_0$ and $a_{28}$."
      },
      {
        "step": "For $k = 1, 2, \\dots, 27$, $d_{k-1} - 2d_k + d_{k+1} = a_{k-1} - 2a_k + a_{k+1} + 2$.",
        "reason": "Collecting like terms: $d_k = a_k - b_k$ with $z = 32$, and by line 2 the numbers $b_k$ give $-2$, which is taken away."
      },
      {
        "step": "For $k = 1, 2, \\dots, 27$, $d_{k-1} - 2d_k + d_{k+1} \\ge 0$.",
        "reason": "Adding the same number: $2$ is added to both sides of the given inequality, and the left side is then that of line 5."
      },
      {
        "step": "For $k = 1, 2, \\dots, 27$, $d_{k+1} - d_k \\ge d_k - d_{k-1}$.",
        "reason": "Adding the same number: $d_k - d_{k-1}$ is added to both sides of line 6."
      },
      {
        "step": "Take a whole number $j$ from $1$ to $27$. For each $i$ from $1$ to $j$, $d_i - d_{i-1} \\le d_j - d_{j-1}$.",
        "reason": "Induction: on $i$, going down from $i = j$, where the two sides are equal; line 7 at $k = i - 1$ gives $d_{i-1} - d_{i-2} \\le d_i - d_{i-1}$, which is the step from $i$ to $i - 1$."
      },
      {
        "step": "$d_j - d_0 \\le j(d_j - d_{j-1})$",
        "reason": "Telescoping bound: line 8 gives $j$ differences, from $d_1 - d_0$ to $d_j - d_{j-1}$, each at most $d_j - d_{j-1}$."
      },
      {
        "step": "For each $i$ from $j$ to $27$, $d_{i+1} - d_i \\ge d_j - d_{j-1}$.",
        "reason": "Induction: on $i$, going up from $i = j$, where the claim is line 7 at $k = j$; line 7 at $k = i + 1$ gives $d_{i+2} - d_{i+1} \\ge d_{i+1} - d_i$, which is the step from $i$ to $i + 1$."
      },
      {
        "step": "$d_{28} - d_j \\ge (28 - j)(d_j - d_{j-1})$",
        "reason": "Telescoping bound: line 10 gives $28 - j$ differences, from $d_{j+1} - d_j$ to $d_{28} - d_{27}$, each at least $d_j - d_{j-1}$."
      },
      {
        "step": "$(28 - j)d_j \\le j(28 - j)(d_j - d_{j-1})$",
        "reason": "Multiplying by a positive number: line 9, with $d_0 = 0$, is multiplied by $28 - j$, which is positive."
      },
      {
        "step": "$j(28 - j)(d_j - d_{j-1}) \\le -jd_j$",
        "reason": "Multiplying by a positive number: line 11, with $d_{28} = 0$, is multiplied by $j$."
      },
      {
        "step": "$(28 - j)d_j \\le -jd_j$",
        "reason": "Transitivity: lines 12 and 13."
      },
      {
        "step": "$28d_j \\le 0$",
        "reason": "Adding the same number: $jd_j$ is added to both sides, and $(28 - j)d_j + jd_j = 28d_j$."
      },
      {
        "step": "$d_j \\le 0$",
        "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{28}$."
      },
      {
        "step": "So $a_k \\le 6 + 32k - k^2$ for $k = 0, 1, \\dots, 28$.",
        "reason": "Substituting a value: line 16 holds for every $j$ from $1$ to $27$, $d_0$ and $d_{28}$ are $0$, and $d_k$ is $a_k$ less the right side."
      }
    ]
  },
  {
    "id": "t244-k3-p08",
    "topic": "estimates-for-sequences",
    "kind": "t244-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $a_k \\le 8 + 81k - 4k^2$ for $k = 0, 1, \\dots, 19$, where $a_0, a_1, \\dots, a_{19}$ are numbers with $a_0 = 8$, $a_{19} = 103$ and $a_{k-1} - 2a_k + a_{k+1} \\ge -8$ for $k = 1, 2, \\dots, 18$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_k \\le 8 + 81k - 4k^2$ for $k = 0, 1, \\dots, 19$, where $a_0, a_1, \\dots, a_{19}$ are numbers with $a_0 = 8$, $a_{19} = 103$ and $a_{k-1} - 2a_k + a_{k+1} \\ge -8$ for $k = 1, 2, \\dots, 18$.",
        "reason": "Telescoping bound: this is the problem as given; the condition bounds how far one step of the sequence may fall short of the step before it."
      },
      {
        "step": "The numbers $b_k = 8 + zk - 4k^2$, with $z$ still to be chosen, have $b_0 = 8$ and $b_{k-1} - 2b_k + b_{k+1} = -8$ for every $k$ and every $z$.",
        "reason": "Collecting like terms: in $b_{k-1} - 2b_k + b_{k+1}$ the numbers $8$ and the terms in $z$ cancel, and $-4(k - 1)^2 + 8k^2 - 4(k + 1)^2 = -8$."
      },
      {
        "step": "The number $b_{19}$ is $103$ when $z = 81$.",
        "reason": "Isolating the variable: $b_{19} = 8 + 19z - 4 \\cdot 19^2$, and $8 + 19z - 4 \\cdot 19^2 = 103$ gives $19z = 1539$."
      },
      {
        "step": "Let $d_k = a_k - \\left(8 + 81k - 4k^2\\right)$ for $k = 0, 1, \\dots, 19$; then $d_0 = 0$ and $d_{19} = 0$.",
        "reason": "Substituting a value: with $z = 81$ the bracket is $b_k$ of line 2, which is $8$ at $k = 0$ by line 2 and $103$ at $k = 19$ by line 3, and these are $a_0$ and $a_{19}$."
      },
      {
        "step": "For $k = 1, 2, \\dots, 18$, $d_{k-1} - 2d_k + d_{k+1} = a_{k-1} - 2a_k + a_{k+1} + 8$.",
        "reason": "Collecting like terms: $d_k = a_k - b_k$ with $z = 81$, and by line 2 the numbers $b_k$ give $-8$, which is taken away."
      },
      {
        "step": "For $k = 1, 2, \\dots, 18$, $d_{k-1} - 2d_k + d_{k+1} \\ge 0$.",
        "reason": "Adding the same number: $8$ is added to both sides of the given inequality, and the left side is then that of line 5."
      },
      {
        "step": "For $k = 1, 2, \\dots, 18$, $d_{k+1} - d_k \\ge d_k - d_{k-1}$.",
        "reason": "Adding the same number: $d_k - d_{k-1}$ is added to both sides of line 6."
      },
      {
        "step": "Take a whole number $j$ from $1$ to $18$. For each $i$ from $1$ to $j$, $d_i - d_{i-1} \\le d_j - d_{j-1}$.",
        "reason": "Induction: on $i$, going down from $i = j$, where the two sides are equal; line 7 at $k = i - 1$ gives $d_{i-1} - d_{i-2} \\le d_i - d_{i-1}$, which is the step from $i$ to $i - 1$."
      },
      {
        "step": "$d_j - d_0 \\le j(d_j - d_{j-1})$",
        "reason": "Telescoping bound: line 8 gives $j$ differences, from $d_1 - d_0$ to $d_j - d_{j-1}$, each at most $d_j - d_{j-1}$."
      },
      {
        "step": "For each $i$ from $j$ to $18$, $d_{i+1} - d_i \\ge d_j - d_{j-1}$.",
        "reason": "Induction: on $i$, going up from $i = j$, where the claim is line 7 at $k = j$; line 7 at $k = i + 1$ gives $d_{i+2} - d_{i+1} \\ge d_{i+1} - d_i$, which is the step from $i$ to $i + 1$."
      },
      {
        "step": "$d_{19} - d_j \\ge (19 - j)(d_j - d_{j-1})$",
        "reason": "Telescoping bound: line 10 gives $19 - j$ differences, from $d_{j+1} - d_j$ to $d_{19} - d_{18}$, each at least $d_j - d_{j-1}$."
      },
      {
        "step": "$(19 - j)d_j \\le j(19 - j)(d_j - d_{j-1})$",
        "reason": "Multiplying by a positive number: line 9, with $d_0 = 0$, is multiplied by $19 - j$, which is positive."
      },
      {
        "step": "$j(19 - j)(d_j - d_{j-1}) \\le -jd_j$",
        "reason": "Multiplying by a positive number: line 11, with $d_{19} = 0$, is multiplied by $j$."
      },
      {
        "step": "$(19 - j)d_j \\le -jd_j$",
        "reason": "Transitivity: lines 12 and 13."
      },
      {
        "step": "$19d_j \\le 0$",
        "reason": "Adding the same number: $jd_j$ is added to both sides, and $(19 - j)d_j + jd_j = 19d_j$."
      },
      {
        "step": "$d_j \\le 0$",
        "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{19}$."
      },
      {
        "step": "So $a_k \\le 8 + 81k - 4k^2$ for $k = 0, 1, \\dots, 19$.",
        "reason": "Substituting a value: line 16 holds for every $j$ from $1$ to $18$, $d_0$ and $d_{19}$ are $0$, and $d_k$ is $a_k$ less the right side."
      }
    ]
  },
  {
    "id": "t244-k3-p09",
    "topic": "estimates-for-sequences",
    "kind": "t244-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_1 + 2a_2 + 3a_3 + \\dots + na_n \\ge -\\dfrac{2n(n + 1)(2n + 1) + 27}{12}$ for every whole number $n$ from $1$ up and all numbers $a_1, a_2, \\dots, a_{n+1}$ with $a_1 = 3$ and $|a_{k+1}| = |a_k + 2k|$ for $k = 1, 2, \\dots, n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_1 + 2a_2 + 3a_3 + \\dots + na_n \\ge -\\dfrac{2n(n + 1)(2n + 1) + 27}{12}$ for every whole number $n$ from $1$ up and all numbers $a_1, a_2, \\dots, a_{n+1}$ with $a_1 = 3$ and $|a_{k+1}| = |a_k + 2k|$ for $k = 1, 2, \\dots, n$.",
        "reason": "Absolute value, from arithmetic: this is the problem as given; each term fixes the size of the next term and leaves its sign open."
      },
      {
        "step": "For $k = 1, 2, \\dots, n$, $a_{k+1}^2 = (a_k + 2k)^2$.",
        "reason": "The rule $|x|^2 = x^2$: both sides of $|a_{k+1}| = |a_k + 2k|$ are squared."
      },
      {
        "step": "$a_{k+1}^2 = a_k^2 + 4ka_k + 4k^2$",
        "reason": "Square of a binomial: twice the product of $a_k$ and $2k$ is $4ka_k$."
      },
      {
        "step": "$a_{k+1}^2 - a_k^2 = 4ka_k + 4k^2$",
        "reason": "Adding the same number to both sides: $a_k^2$ is taken from both sides."
      },
      {
        "step": "$\\left(a_2^2 - a_1^2\\right) + \\left(a_3^2 - a_2^2\\right) + \\dots + \\left(a_{n+1}^2 - a_n^2\\right) = 4\\left(a_1 + 2a_2 + 3a_3 + \\dots + na_n\\right) + 4\\left(1^2 + 2^2 + \\dots + n^2\\right)$",
        "reason": "Adding two equations: line 4 for $k = 1, 2, \\dots, n$, the $n$ equations added, with the common factor $4$ taken out of the terms in $a_k$ and $4$ out of the squares."
      },
      {
        "step": "$a_{n+1}^2 - a_1^2 = 4\\left(a_1 + 2a_2 + 3a_3 + \\dots + na_n\\right) + 4\\left(1^2 + 2^2 + \\dots + n^2\\right)$",
        "reason": "Telescoping sum: each square taken away is added back in the next bracket, so the last and the first are left."
      },
      {
        "step": "$1^2 + 2^2 + \\dots + n^2 = \\dfrac{n(n + 1)(2n + 1)}{6}$",
        "reason": "Sum of squares: the sum of the first $n$ squares."
      },
      {
        "step": "$a_{n+1}^2 - 9 = 4\\left(a_1 + 2a_2 + 3a_3 + \\dots + na_n\\right) + \\dfrac{2n(n + 1)(2n + 1)}{3}$",
        "reason": "Substituting a value: $a_1 = 3$ and line 7 go into line 6."
      },
      {
        "step": "$a_{n+1}^2 \\ge 0$",
        "reason": "Trivial Inequality: the square of a real number is at least $0$."
      },
      {
        "step": "$a_{n+1}^2 = 4\\left(a_1 + 2a_2 + 3a_3 + \\dots + na_n\\right) + \\dfrac{2n(n + 1)(2n + 1)}{3} + 9$",
        "reason": "Adding the same number to both sides: $9$ is added to both sides of line 8."
      },
      {
        "step": "$4\\left(a_1 + 2a_2 + 3a_3 + \\dots + na_n\\right) + \\dfrac{2n(n + 1)(2n + 1)}{3} + 9 \\ge 0$",
        "reason": "Substituting a value: line 10 goes into line 9."
      },
      {
        "step": "$4\\left(a_1 + 2a_2 + 3a_3 + \\dots + na_n\\right) \\ge -\\dfrac{2n(n + 1)(2n + 1)}{3} - 9$",
        "reason": "Adding the same number: $\\dfrac{2n(n + 1)(2n + 1)}{3} + 9$ is taken from both sides."
      },
      {
        "step": "$a_1 + 2a_2 + 3a_3 + \\dots + na_n \\ge -\\dfrac{2n(n + 1)(2n + 1) + 27}{12}$",
        "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{4}$, and the right side is written over one bottom."
      }
    ]
  },
  {
    "id": "t244-k3-p10",
    "topic": "estimates-for-sequences",
    "kind": "t244-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $a_k \\le 5 + 75k - 3k^2$ for $k = 0, 1, \\dots, 24$, where $a_0, a_1, \\dots, a_{24}$ are numbers with $a_0 = 5$, $a_{24} = 77$ and $a_{k-1} - 2a_k + a_{k+1} \\ge -6$ for $k = 1, 2, \\dots, 23$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_k \\le 5 + 75k - 3k^2$ for $k = 0, 1, \\dots, 24$, where $a_0, a_1, \\dots, a_{24}$ are numbers with $a_0 = 5$, $a_{24} = 77$ and $a_{k-1} - 2a_k + a_{k+1} \\ge -6$ for $k = 1, 2, \\dots, 23$.",
        "reason": "Telescoping bound: this is the problem as given; the condition bounds how far one step of the sequence may fall short of the step before it."
      },
      {
        "step": "The numbers $b_k = 5 + zk - 3k^2$, with $z$ still to be chosen, have $b_0 = 5$ and $b_{k-1} - 2b_k + b_{k+1} = -6$ for every $k$ and every $z$.",
        "reason": "Collecting like terms: in $b_{k-1} - 2b_k + b_{k+1}$ the numbers $5$ and the terms in $z$ cancel, and $-3(k - 1)^2 + 6k^2 - 3(k + 1)^2 = -6$."
      },
      {
        "step": "The number $b_{24}$ is $77$ when $z = 75$.",
        "reason": "Isolating the variable: $b_{24} = 5 + 24z - 3 \\cdot 24^2$, and $5 + 24z - 3 \\cdot 24^2 = 77$ gives $24z = 1800$."
      },
      {
        "step": "Let $d_k = a_k - \\left(5 + 75k - 3k^2\\right)$ for $k = 0, 1, \\dots, 24$; then $d_0 = 0$ and $d_{24} = 0$.",
        "reason": "Substituting a value: with $z = 75$ the bracket is $b_k$ of line 2, which is $5$ at $k = 0$ by line 2 and $77$ at $k = 24$ by line 3, and these are $a_0$ and $a_{24}$."
      },
      {
        "step": "For $k = 1, 2, \\dots, 23$, $d_{k-1} - 2d_k + d_{k+1} = a_{k-1} - 2a_k + a_{k+1} + 6$.",
        "reason": "Collecting like terms: $d_k = a_k - b_k$ with $z = 75$, and by line 2 the numbers $b_k$ give $-6$, which is taken away."
      },
      {
        "step": "For $k = 1, 2, \\dots, 23$, $d_{k-1} - 2d_k + d_{k+1} \\ge 0$.",
        "reason": "Adding the same number: $6$ is added to both sides of the given inequality, and the left side is then that of line 5."
      },
      {
        "step": "For $k = 1, 2, \\dots, 23$, $d_{k+1} - d_k \\ge d_k - d_{k-1}$.",
        "reason": "Adding the same number: $d_k - d_{k-1}$ is added to both sides of line 6."
      },
      {
        "step": "Take a whole number $j$ from $1$ to $23$. For each $i$ from $1$ to $j$, $d_i - d_{i-1} \\le d_j - d_{j-1}$.",
        "reason": "Induction: on $i$, going down from $i = j$, where the two sides are equal; line 7 at $k = i - 1$ gives $d_{i-1} - d_{i-2} \\le d_i - d_{i-1}$, which is the step from $i$ to $i - 1$."
      },
      {
        "step": "$d_j - d_0 \\le j(d_j - d_{j-1})$",
        "reason": "Telescoping bound: line 8 gives $j$ differences, from $d_1 - d_0$ to $d_j - d_{j-1}$, each at most $d_j - d_{j-1}$."
      },
      {
        "step": "For each $i$ from $j$ to $23$, $d_{i+1} - d_i \\ge d_j - d_{j-1}$.",
        "reason": "Induction: on $i$, going up from $i = j$, where the claim is line 7 at $k = j$; line 7 at $k = i + 1$ gives $d_{i+2} - d_{i+1} \\ge d_{i+1} - d_i$, which is the step from $i$ to $i + 1$."
      },
      {
        "step": "$d_{24} - d_j \\ge (24 - j)(d_j - d_{j-1})$",
        "reason": "Telescoping bound: line 10 gives $24 - j$ differences, from $d_{j+1} - d_j$ to $d_{24} - d_{23}$, each at least $d_j - d_{j-1}$."
      },
      {
        "step": "$(24 - j)d_j \\le j(24 - j)(d_j - d_{j-1})$",
        "reason": "Multiplying by a positive number: line 9, with $d_0 = 0$, is multiplied by $24 - j$, which is positive."
      },
      {
        "step": "$j(24 - j)(d_j - d_{j-1}) \\le -jd_j$",
        "reason": "Multiplying by a positive number: line 11, with $d_{24} = 0$, is multiplied by $j$."
      },
      {
        "step": "$(24 - j)d_j \\le -jd_j$",
        "reason": "Transitivity: lines 12 and 13."
      },
      {
        "step": "$24d_j \\le 0$",
        "reason": "Adding the same number: $jd_j$ is added to both sides, and $(24 - j)d_j + jd_j = 24d_j$."
      },
      {
        "step": "$d_j \\le 0$",
        "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{24}$."
      },
      {
        "step": "So $a_k \\le 5 + 75k - 3k^2$ for $k = 0, 1, \\dots, 24$.",
        "reason": "Substituting a value: line 16 holds for every $j$ from $1$ to $23$, $d_0$ and $d_{24}$ are $0$, and $d_k$ is $a_k$ less the right side."
      }
    ]
  },
  {
    "id": "t244-k3-p11",
    "topic": "estimates-for-sequences",
    "kind": "t244-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $a_k \\le 2 + 17k - k^2$ for $k = 0, 1, \\dots, 16$, where $a_0, a_1, \\dots, a_{16}$ are numbers with $a_0 = 2$, $a_{16} = 18$ and $a_{k-1} - 2a_k + a_{k+1} \\ge -2$ for $k = 1, 2, \\dots, 15$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_k \\le 2 + 17k - k^2$ for $k = 0, 1, \\dots, 16$, where $a_0, a_1, \\dots, a_{16}$ are numbers with $a_0 = 2$, $a_{16} = 18$ and $a_{k-1} - 2a_k + a_{k+1} \\ge -2$ for $k = 1, 2, \\dots, 15$.",
        "reason": "Telescoping bound: this is the problem as given; the condition bounds how far one step of the sequence may fall short of the step before it."
      },
      {
        "step": "The numbers $b_k = 2 + zk - k^2$, with $z$ still to be chosen, have $b_0 = 2$ and $b_{k-1} - 2b_k + b_{k+1} = -2$ for every $k$ and every $z$.",
        "reason": "Collecting like terms: in $b_{k-1} - 2b_k + b_{k+1}$ the numbers $2$ and the terms in $z$ cancel, and $-(k - 1)^2 + 2k^2 - (k + 1)^2 = -2$."
      },
      {
        "step": "The number $b_{16}$ is $18$ when $z = 17$.",
        "reason": "Isolating the variable: $b_{16} = 2 + 16z - 16^2$, and $2 + 16z - 16^2 = 18$ gives $16z = 272$."
      },
      {
        "step": "Let $d_k = a_k - \\left(2 + 17k - k^2\\right)$ for $k = 0, 1, \\dots, 16$; then $d_0 = 0$ and $d_{16} = 0$.",
        "reason": "Substituting a value: with $z = 17$ the bracket is $b_k$ of line 2, which is $2$ at $k = 0$ by line 2 and $18$ at $k = 16$ by line 3, and these are $a_0$ and $a_{16}$."
      },
      {
        "step": "For $k = 1, 2, \\dots, 15$, $d_{k-1} - 2d_k + d_{k+1} = a_{k-1} - 2a_k + a_{k+1} + 2$.",
        "reason": "Collecting like terms: $d_k = a_k - b_k$ with $z = 17$, and by line 2 the numbers $b_k$ give $-2$, which is taken away."
      },
      {
        "step": "For $k = 1, 2, \\dots, 15$, $d_{k-1} - 2d_k + d_{k+1} \\ge 0$.",
        "reason": "Adding the same number: $2$ is added to both sides of the given inequality, and the left side is then that of line 5."
      },
      {
        "step": "For $k = 1, 2, \\dots, 15$, $d_{k+1} - d_k \\ge d_k - d_{k-1}$.",
        "reason": "Adding the same number: $d_k - d_{k-1}$ is added to both sides of line 6."
      },
      {
        "step": "Take a whole number $j$ from $1$ to $15$. For each $i$ from $1$ to $j$, $d_i - d_{i-1} \\le d_j - d_{j-1}$.",
        "reason": "Induction: on $i$, going down from $i = j$, where the two sides are equal; line 7 at $k = i - 1$ gives $d_{i-1} - d_{i-2} \\le d_i - d_{i-1}$, which is the step from $i$ to $i - 1$."
      },
      {
        "step": "$d_j - d_0 \\le j(d_j - d_{j-1})$",
        "reason": "Telescoping bound: line 8 gives $j$ differences, from $d_1 - d_0$ to $d_j - d_{j-1}$, each at most $d_j - d_{j-1}$."
      },
      {
        "step": "For each $i$ from $j$ to $15$, $d_{i+1} - d_i \\ge d_j - d_{j-1}$.",
        "reason": "Induction: on $i$, going up from $i = j$, where the claim is line 7 at $k = j$; line 7 at $k = i + 1$ gives $d_{i+2} - d_{i+1} \\ge d_{i+1} - d_i$, which is the step from $i$ to $i + 1$."
      },
      {
        "step": "$d_{16} - d_j \\ge (16 - j)(d_j - d_{j-1})$",
        "reason": "Telescoping bound: line 10 gives $16 - j$ differences, from $d_{j+1} - d_j$ to $d_{16} - d_{15}$, each at least $d_j - d_{j-1}$."
      },
      {
        "step": "$(16 - j)d_j \\le j(16 - j)(d_j - d_{j-1})$",
        "reason": "Multiplying by a positive number: line 9, with $d_0 = 0$, is multiplied by $16 - j$, which is positive."
      },
      {
        "step": "$j(16 - j)(d_j - d_{j-1}) \\le -jd_j$",
        "reason": "Multiplying by a positive number: line 11, with $d_{16} = 0$, is multiplied by $j$."
      },
      {
        "step": "$(16 - j)d_j \\le -jd_j$",
        "reason": "Transitivity: lines 12 and 13."
      },
      {
        "step": "$16d_j \\le 0$",
        "reason": "Adding the same number: $jd_j$ is added to both sides, and $(16 - j)d_j + jd_j = 16d_j$."
      },
      {
        "step": "$d_j \\le 0$",
        "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{16}$."
      },
      {
        "step": "So $a_k \\le 2 + 17k - k^2$ for $k = 0, 1, \\dots, 16$.",
        "reason": "Substituting a value: line 16 holds for every $j$ from $1$ to $15$, $d_0$ and $d_{16}$ are $0$, and $d_k$ is $a_k$ less the right side."
      }
    ]
  },
  {
    "id": "t244-k3-p12",
    "topic": "estimates-for-sequences",
    "kind": "t244-k3",
    "formNo": 3,
    "calc": "no",
    "prompt": "Prove that $\\left(a_1 + a_2 + \\dots + a_n\\right) + \\left(\\dfrac{9^2}{a_1} + \\dfrac{11^2}{a_2} + \\dfrac{13^2}{a_3} + \\dots + \\dfrac{(2n + 7)^2}{a_n}\\right) \\ge 2n(n + 8)$ for every whole number $n$ from $1$ up and all positive numbers $a_1, a_2, \\dots, a_n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\left(a_1 + a_2 + \\dots + a_n\\right) + \\left(\\dfrac{9^2}{a_1} + \\dfrac{11^2}{a_2} + \\dfrac{13^2}{a_3} + \\dots + \\dfrac{(2n + 7)^2}{a_n}\\right) \\ge 2n(n + 8)$ for every whole number $n$ from $1$ up and all positive numbers $a_1, a_2, \\dots, a_n$.",
        "reason": "AM-GM for two numbers: this is the problem as given; the $k$th term of the second bracket is $\\dfrac{(2k + 7)^2}{a_k}$."
      },
      {
        "step": "For $k = 1, 2, \\dots, n$, $\\dfrac{1}{2}\\left(a_k + \\dfrac{(2k + 7)^2}{a_k}\\right) \\ge \\sqrt{a_k \\cdot \\dfrac{(2k + 7)^2}{a_k}}$.",
        "reason": "AM-GM for two numbers: both numbers are positive, since $a_k$ is positive."
      },
      {
        "step": "$a_k \\cdot \\dfrac{(2k + 7)^2}{a_k} = (2k + 7)^2$",
        "reason": "Cancelling a common factor: $a_k$ cancels."
      },
      {
        "step": "$\\sqrt{a_k \\cdot \\dfrac{(2k + 7)^2}{a_k}} = 2k + 7$",
        "reason": "Root of a square: by line 3 the number under the root is $(2k + 7)^2$, and $2k + 7$ is positive for every $k$ from $1$ up."
      },
      {
        "step": "$a_k + \\dfrac{(2k + 7)^2}{a_k} \\ge 2\\sqrt{a_k \\cdot \\dfrac{(2k + 7)^2}{a_k}}$",
        "reason": "Multiplying by a positive number: both sides of line 2 are multiplied by $2$."
      },
      {
        "step": "$a_k + \\dfrac{(2k + 7)^2}{a_k} \\ge 2(2k + 7)$",
        "reason": "Substituting a value: the root in line 5 is replaced by its value from line 4."
      },
      {
        "step": "$\\left(a_1 + a_2 + \\dots + a_n\\right) + \\left(\\dfrac{9^2}{a_1} + \\dfrac{11^2}{a_2} + \\dfrac{13^2}{a_3} + \\dots + \\dfrac{(2n + 7)^2}{a_n}\\right) \\ge 2\\left(9 + 11 + 13 + \\dots + (2n + 7)\\right)$",
        "reason": "Adding two inequalities: line 6 for $k = 1, 2, \\dots, n$, the $n$ inequalities added, with the common factor $2$ taken out on the right."
      },
      {
        "step": "$9 + 11 + 13 + \\dots + (2n + 7) = \\dfrac{n(2n + 16)}{2}$",
        "reason": "Sum = number of terms × mean of the first and last term, with $n$ terms: the first term is $9$ and the last is $2n + 7$."
      },
      {
        "step": "$\\left(a_1 + a_2 + \\dots + a_n\\right) + \\left(\\dfrac{9^2}{a_1} + \\dfrac{11^2}{a_2} + \\dfrac{13^2}{a_3} + \\dots + \\dfrac{(2n + 7)^2}{a_n}\\right) \\ge 2n(n + 8)$",
        "reason": "Substituting a value: line 8 goes into line 7, and twice the fraction is its top $n(2n + 16)$, which is $2n(n + 8)$."
      }
    ]
  },
  {
    "id": "t244-k3-p13",
    "topic": "estimates-for-sequences",
    "kind": "t244-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $a_k \\le 2 + 25k - 2k^2$ for $k = 0, 1, \\dots, 12$, where $a_0, a_1, \\dots, a_{12}$ are numbers with $a_0 = 2$, $a_{12} = 14$ and $a_{k-1} - 2a_k + a_{k+1} \\ge -4$ for $k = 1, 2, \\dots, 11$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_k \\le 2 + 25k - 2k^2$ for $k = 0, 1, \\dots, 12$, where $a_0, a_1, \\dots, a_{12}$ are numbers with $a_0 = 2$, $a_{12} = 14$ and $a_{k-1} - 2a_k + a_{k+1} \\ge -4$ for $k = 1, 2, \\dots, 11$.",
        "reason": "Telescoping bound: this is the problem as given; the condition bounds how far one step of the sequence may fall short of the step before it."
      },
      {
        "step": "The numbers $b_k = 2 + zk - 2k^2$, with $z$ still to be chosen, have $b_0 = 2$ and $b_{k-1} - 2b_k + b_{k+1} = -4$ for every $k$ and every $z$.",
        "reason": "Collecting like terms: in $b_{k-1} - 2b_k + b_{k+1}$ the numbers $2$ and the terms in $z$ cancel, and $-2(k - 1)^2 + 4k^2 - 2(k + 1)^2 = -4$."
      },
      {
        "step": "The number $b_{12}$ is $14$ when $z = 25$.",
        "reason": "Isolating the variable: $b_{12} = 2 + 12z - 2 \\cdot 12^2$, and $2 + 12z - 2 \\cdot 12^2 = 14$ gives $12z = 300$."
      },
      {
        "step": "Let $d_k = a_k - \\left(2 + 25k - 2k^2\\right)$ for $k = 0, 1, \\dots, 12$; then $d_0 = 0$ and $d_{12} = 0$.",
        "reason": "Substituting a value: with $z = 25$ the bracket is $b_k$ of line 2, which is $2$ at $k = 0$ by line 2 and $14$ at $k = 12$ by line 3, and these are $a_0$ and $a_{12}$."
      },
      {
        "step": "For $k = 1, 2, \\dots, 11$, $d_{k-1} - 2d_k + d_{k+1} = a_{k-1} - 2a_k + a_{k+1} + 4$.",
        "reason": "Collecting like terms: $d_k = a_k - b_k$ with $z = 25$, and by line 2 the numbers $b_k$ give $-4$, which is taken away."
      },
      {
        "step": "For $k = 1, 2, \\dots, 11$, $d_{k-1} - 2d_k + d_{k+1} \\ge 0$.",
        "reason": "Adding the same number: $4$ is added to both sides of the given inequality, and the left side is then that of line 5."
      },
      {
        "step": "For $k = 1, 2, \\dots, 11$, $d_{k+1} - d_k \\ge d_k - d_{k-1}$.",
        "reason": "Adding the same number: $d_k - d_{k-1}$ is added to both sides of line 6."
      },
      {
        "step": "Take a whole number $j$ from $1$ to $11$. For each $i$ from $1$ to $j$, $d_i - d_{i-1} \\le d_j - d_{j-1}$.",
        "reason": "Induction: on $i$, going down from $i = j$, where the two sides are equal; line 7 at $k = i - 1$ gives $d_{i-1} - d_{i-2} \\le d_i - d_{i-1}$, which is the step from $i$ to $i - 1$."
      },
      {
        "step": "$d_j - d_0 \\le j(d_j - d_{j-1})$",
        "reason": "Telescoping bound: line 8 gives $j$ differences, from $d_1 - d_0$ to $d_j - d_{j-1}$, each at most $d_j - d_{j-1}$."
      },
      {
        "step": "For each $i$ from $j$ to $11$, $d_{i+1} - d_i \\ge d_j - d_{j-1}$.",
        "reason": "Induction: on $i$, going up from $i = j$, where the claim is line 7 at $k = j$; line 7 at $k = i + 1$ gives $d_{i+2} - d_{i+1} \\ge d_{i+1} - d_i$, which is the step from $i$ to $i + 1$."
      },
      {
        "step": "$d_{12} - d_j \\ge (12 - j)(d_j - d_{j-1})$",
        "reason": "Telescoping bound: line 10 gives $12 - j$ differences, from $d_{j+1} - d_j$ to $d_{12} - d_{11}$, each at least $d_j - d_{j-1}$."
      },
      {
        "step": "$(12 - j)d_j \\le j(12 - j)(d_j - d_{j-1})$",
        "reason": "Multiplying by a positive number: line 9, with $d_0 = 0$, is multiplied by $12 - j$, which is positive."
      },
      {
        "step": "$j(12 - j)(d_j - d_{j-1}) \\le -jd_j$",
        "reason": "Multiplying by a positive number: line 11, with $d_{12} = 0$, is multiplied by $j$."
      },
      {
        "step": "$(12 - j)d_j \\le -jd_j$",
        "reason": "Transitivity: lines 12 and 13."
      },
      {
        "step": "$12d_j \\le 0$",
        "reason": "Adding the same number: $jd_j$ is added to both sides, and $(12 - j)d_j + jd_j = 12d_j$."
      },
      {
        "step": "$d_j \\le 0$",
        "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{12}$."
      },
      {
        "step": "So $a_k \\le 2 + 25k - 2k^2$ for $k = 0, 1, \\dots, 12$.",
        "reason": "Substituting a value: line 16 holds for every $j$ from $1$ to $11$, $d_0$ and $d_{12}$ are $0$, and $d_k$ is $a_k$ less the right side."
      }
    ]
  },
  {
    "id": "t244-k3-p14",
    "topic": "estimates-for-sequences",
    "kind": "t244-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_1 + 2a_2 + 3a_3 + \\dots + na_n \\ge -\\dfrac{25n(n + 1)(2n + 1) + 96}{60}$ for every whole number $n$ from $1$ up and all numbers $a_1, a_2, \\dots, a_{n+1}$ with $a_1 = 4$ and $|a_{k+1}| = |a_k + 5k|$ for $k = 1, 2, \\dots, n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_1 + 2a_2 + 3a_3 + \\dots + na_n \\ge -\\dfrac{25n(n + 1)(2n + 1) + 96}{60}$ for every whole number $n$ from $1$ up and all numbers $a_1, a_2, \\dots, a_{n+1}$ with $a_1 = 4$ and $|a_{k+1}| = |a_k + 5k|$ for $k = 1, 2, \\dots, n$.",
        "reason": "Absolute value, from arithmetic: this is the problem as given; each term fixes the size of the next term and leaves its sign open."
      },
      {
        "step": "For $k = 1, 2, \\dots, n$, $a_{k+1}^2 = (a_k + 5k)^2$.",
        "reason": "The rule $|x|^2 = x^2$: both sides of $|a_{k+1}| = |a_k + 5k|$ are squared."
      },
      {
        "step": "$a_{k+1}^2 = a_k^2 + 10ka_k + 25k^2$",
        "reason": "Square of a binomial: twice the product of $a_k$ and $5k$ is $10ka_k$."
      },
      {
        "step": "$a_{k+1}^2 - a_k^2 = 10ka_k + 25k^2$",
        "reason": "Adding the same number to both sides: $a_k^2$ is taken from both sides."
      },
      {
        "step": "$\\left(a_2^2 - a_1^2\\right) + \\left(a_3^2 - a_2^2\\right) + \\dots + \\left(a_{n+1}^2 - a_n^2\\right) = 10\\left(a_1 + 2a_2 + 3a_3 + \\dots + na_n\\right) + 25\\left(1^2 + 2^2 + \\dots + n^2\\right)$",
        "reason": "Adding two equations: line 4 for $k = 1, 2, \\dots, n$, the $n$ equations added, with the common factor $10$ taken out of the terms in $a_k$ and $25$ out of the squares."
      },
      {
        "step": "$a_{n+1}^2 - a_1^2 = 10\\left(a_1 + 2a_2 + 3a_3 + \\dots + na_n\\right) + 25\\left(1^2 + 2^2 + \\dots + n^2\\right)$",
        "reason": "Telescoping sum: each square taken away is added back in the next bracket, so the last and the first are left."
      },
      {
        "step": "$1^2 + 2^2 + \\dots + n^2 = \\dfrac{n(n + 1)(2n + 1)}{6}$",
        "reason": "Sum of squares: the sum of the first $n$ squares."
      },
      {
        "step": "$a_{n+1}^2 - 16 = 10\\left(a_1 + 2a_2 + 3a_3 + \\dots + na_n\\right) + \\dfrac{25n(n + 1)(2n + 1)}{6}$",
        "reason": "Substituting a value: $a_1 = 4$ and line 7 go into line 6."
      },
      {
        "step": "$a_{n+1}^2 \\ge 0$",
        "reason": "Trivial Inequality: the square of a real number is at least $0$."
      },
      {
        "step": "$a_{n+1}^2 = 10\\left(a_1 + 2a_2 + 3a_3 + \\dots + na_n\\right) + \\dfrac{25n(n + 1)(2n + 1)}{6} + 16$",
        "reason": "Adding the same number to both sides: $16$ is added to both sides of line 8."
      },
      {
        "step": "$10\\left(a_1 + 2a_2 + 3a_3 + \\dots + na_n\\right) + \\dfrac{25n(n + 1)(2n + 1)}{6} + 16 \\ge 0$",
        "reason": "Substituting a value: line 10 goes into line 9."
      },
      {
        "step": "$10\\left(a_1 + 2a_2 + 3a_3 + \\dots + na_n\\right) \\ge -\\dfrac{25n(n + 1)(2n + 1)}{6} - 16$",
        "reason": "Adding the same number: $\\dfrac{25n(n + 1)(2n + 1)}{6} + 16$ is taken from both sides."
      },
      {
        "step": "$a_1 + 2a_2 + 3a_3 + \\dots + na_n \\ge -\\dfrac{25n(n + 1)(2n + 1) + 96}{60}$",
        "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{10}$, and the right side is written over one bottom."
      }
    ]
  },
  {
    "id": "t244-k3-p15",
    "topic": "estimates-for-sequences",
    "kind": "t244-k3",
    "formNo": 3,
    "calc": "no",
    "prompt": "Prove that $\\left(a_1 + a_2 + \\dots + a_n\\right) + \\left(\\dfrac{7^2}{a_1} + \\dfrac{13^2}{a_2} + \\dfrac{19^2}{a_3} + \\dots + \\dfrac{(6n + 1)^2}{a_n}\\right) \\ge 2n(3n + 4)$ for every whole number $n$ from $1$ up and all positive numbers $a_1, a_2, \\dots, a_n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\left(a_1 + a_2 + \\dots + a_n\\right) + \\left(\\dfrac{7^2}{a_1} + \\dfrac{13^2}{a_2} + \\dfrac{19^2}{a_3} + \\dots + \\dfrac{(6n + 1)^2}{a_n}\\right) \\ge 2n(3n + 4)$ for every whole number $n$ from $1$ up and all positive numbers $a_1, a_2, \\dots, a_n$.",
        "reason": "AM-GM for two numbers: this is the problem as given; the $k$th term of the second bracket is $\\dfrac{(6k + 1)^2}{a_k}$."
      },
      {
        "step": "For $k = 1, 2, \\dots, n$, $\\dfrac{1}{2}\\left(a_k + \\dfrac{(6k + 1)^2}{a_k}\\right) \\ge \\sqrt{a_k \\cdot \\dfrac{(6k + 1)^2}{a_k}}$.",
        "reason": "AM-GM for two numbers: both numbers are positive, since $a_k$ is positive."
      },
      {
        "step": "$a_k \\cdot \\dfrac{(6k + 1)^2}{a_k} = (6k + 1)^2$",
        "reason": "Cancelling a common factor: $a_k$ cancels."
      },
      {
        "step": "$\\sqrt{a_k \\cdot \\dfrac{(6k + 1)^2}{a_k}} = 6k + 1$",
        "reason": "Root of a square: by line 3 the number under the root is $(6k + 1)^2$, and $6k + 1$ is positive for every $k$ from $1$ up."
      },
      {
        "step": "$a_k + \\dfrac{(6k + 1)^2}{a_k} \\ge 2\\sqrt{a_k \\cdot \\dfrac{(6k + 1)^2}{a_k}}$",
        "reason": "Multiplying by a positive number: both sides of line 2 are multiplied by $2$."
      },
      {
        "step": "$a_k + \\dfrac{(6k + 1)^2}{a_k} \\ge 2(6k + 1)$",
        "reason": "Substituting a value: the root in line 5 is replaced by its value from line 4."
      },
      {
        "step": "$\\left(a_1 + a_2 + \\dots + a_n\\right) + \\left(\\dfrac{7^2}{a_1} + \\dfrac{13^2}{a_2} + \\dfrac{19^2}{a_3} + \\dots + \\dfrac{(6n + 1)^2}{a_n}\\right) \\ge 2\\left(7 + 13 + 19 + \\dots + (6n + 1)\\right)$",
        "reason": "Adding two inequalities: line 6 for $k = 1, 2, \\dots, n$, the $n$ inequalities added, with the common factor $2$ taken out on the right."
      },
      {
        "step": "$7 + 13 + 19 + \\dots + (6n + 1) = \\dfrac{n(6n + 8)}{2}$",
        "reason": "Sum = number of terms × mean of the first and last term, with $n$ terms: the first term is $7$ and the last is $6n + 1$."
      },
      {
        "step": "$\\left(a_1 + a_2 + \\dots + a_n\\right) + \\left(\\dfrac{7^2}{a_1} + \\dfrac{13^2}{a_2} + \\dfrac{19^2}{a_3} + \\dots + \\dfrac{(6n + 1)^2}{a_n}\\right) \\ge 2n(3n + 4)$",
        "reason": "Substituting a value: line 8 goes into line 7, and twice the fraction is its top $n(6n + 8)$, which is $2n(3n + 4)$."
      }
    ]
  },
  {
    "id": "t244-k4-p01",
    "topic": "estimates-for-sequences",
    "kind": "t244-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $34$ is the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (8, 22)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 7)$, and a step of the second kind takes $(x, y)$ to $(x, y - 3)$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $34$ is the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (8, 22)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 7)$, and a step of the second kind takes $(x, y)$ to $(x, y - 3)$.",
        "reason": "Monovariant: this is the problem as given; whole numbers are never below $0$, so a step is possible only while it leaves both numbers of the pair at $0$ or above."
      },
      {
        "step": "A step of the first kind changes $zx + y$ by $-z + 7$, and a step of the second kind changes it by $-3$; the two changes are equal when $z = 10$.",
        "reason": "Isolating the variable: $z$ stands for a weight on $x$ still to be chosen, and $-z + 7 = -3$ gives $z = 7 + 3$."
      },
      {
        "step": "Let $d_k = 10x_k + y_k$ for $k = 0, 1, \\dots, n$.",
        "reason": "Monovariant: with the weight $10$ of line 2, both kinds of step change this number by the same amount."
      },
      {
        "step": "After a step of the first kind, $d_{k+1} = 10(x_k - 1) + (y_k + 7) = d_k - 3$.",
        "reason": "Multiplying out: $10(x_k - 1) = 10x_k - 10$, and $-10 + 7 = -3$."
      },
      {
        "step": "After a step of the second kind, $d_{k+1} = 10x_k + (y_k - 3) = d_k - 3$.",
        "reason": "Substituting a value: $x_{k+1} = x_k$ and $y_{k+1} = y_k - 3$ go into $d_{k+1}$."
      },
      {
        "step": "For $k = 0, 1, \\dots, n - 1$, $d_{k+1} - d_k = -3$.",
        "reason": "Monovariant: by lines 4 and 5 the number $d_k$ falls by $3$ at every step, whichever kind of step is taken."
      },
      {
        "step": "$d_n - d_0 = -3n$",
        "reason": "Telescoping sum: the $n$ differences of line 6 add up to $d_n - d_0$, and each is $-3$."
      },
      {
        "step": "$d_0 = 10 \\cdot 8 + 22 = 102$",
        "reason": "Substituting a value: $x_0 = 8$ and $y_0 = 22$."
      },
      {
        "step": "$d_n \\ge 0$",
        "reason": "Adding two inequalities: $x_n$ and $y_n$ are whole numbers, so $10x_n \\ge 0$ and $y_n \\ge 0$."
      },
      {
        "step": "$102 - 3n \\ge 0$",
        "reason": "Substituting a value: by lines 7 and 8, $d_n = 102 - 3n$, which goes into line 9."
      },
      {
        "step": "$3n \\le 102$",
        "reason": "Adding the same number: $3n$ is added to both sides of line 10."
      },
      {
        "step": "$n \\le 34$",
        "reason": "Multiplying by a positive number: both sides of line 11 are multiplied by $\\dfrac{1}{3}$."
      },
      {
        "step": "From $(8, 22)$, $8$ steps of the first kind lead to $(0, 78)$, and then $26$ steps of the second kind lead to $(0, 0)$; these are $34$ steps, and no number goes below $0$ on the way.",
        "reason": "Attaining the bound: $22 + 8 \\cdot 7 = 78$ and $78 - 26 \\cdot 3 = 0$."
      },
      {
        "step": "So the greatest $n$ is $34$.",
        "reason": "Attaining the bound: a bound that is reached is the greatest value."
      }
    ]
  },
  {
    "id": "t244-k4-p02",
    "topic": "estimates-for-sequences",
    "kind": "t244-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $29$ is the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (10, 7)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 9)$, and a step of the second kind takes $(x, y)$ to $(x, y - 5)$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $29$ is the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (10, 7)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 9)$, and a step of the second kind takes $(x, y)$ to $(x, y - 5)$.",
        "reason": "Monovariant: this is the problem as given; whole numbers are never below $0$, so a step is possible only while it leaves both numbers of the pair at $0$ or above."
      },
      {
        "step": "A step of the first kind changes $zx + y$ by $-z + 9$, and a step of the second kind changes it by $-5$; the two changes are equal when $z = 14$.",
        "reason": "Isolating the variable: $z$ stands for a weight on $x$ still to be chosen, and $-z + 9 = -5$ gives $z = 9 + 5$."
      },
      {
        "step": "Let $d_k = 14x_k + y_k$ for $k = 0, 1, \\dots, n$.",
        "reason": "Monovariant: with the weight $14$ of line 2, both kinds of step change this number by the same amount."
      },
      {
        "step": "After a step of the first kind, $d_{k+1} = 14(x_k - 1) + (y_k + 9) = d_k - 5$.",
        "reason": "Multiplying out: $14(x_k - 1) = 14x_k - 14$, and $-14 + 9 = -5$."
      },
      {
        "step": "After a step of the second kind, $d_{k+1} = 14x_k + (y_k - 5) = d_k - 5$.",
        "reason": "Substituting a value: $x_{k+1} = x_k$ and $y_{k+1} = y_k - 5$ go into $d_{k+1}$."
      },
      {
        "step": "For $k = 0, 1, \\dots, n - 1$, $d_{k+1} - d_k = -5$.",
        "reason": "Monovariant: by lines 4 and 5 the number $d_k$ falls by $5$ at every step, whichever kind of step is taken."
      },
      {
        "step": "$d_n - d_0 = -5n$",
        "reason": "Telescoping sum: the $n$ differences of line 6 add up to $d_n - d_0$, and each is $-5$."
      },
      {
        "step": "$d_0 = 14 \\cdot 10 + 7 = 147$",
        "reason": "Substituting a value: $x_0 = 10$ and $y_0 = 7$."
      },
      {
        "step": "$d_n \\ge 0$",
        "reason": "Adding two inequalities: $x_n$ and $y_n$ are whole numbers, so $14x_n \\ge 0$ and $y_n \\ge 0$."
      },
      {
        "step": "$147 - 5n \\ge 0$",
        "reason": "Substituting a value: by lines 7 and 8, $d_n = 147 - 5n$, which goes into line 9."
      },
      {
        "step": "$5n \\le 147$",
        "reason": "Adding the same number: $5n$ is added to both sides of line 10."
      },
      {
        "step": "$n \\le 29$",
        "reason": "Multiplying by a positive number: both sides of line 11 are multiplied by $\\dfrac{1}{5}$, which gives $n \\le \\dfrac{147}{5}$, and $n$ is a whole number."
      },
      {
        "step": "From $(10, 7)$, $10$ steps of the first kind lead to $(0, 97)$, and then $19$ steps of the second kind lead to $(0, 2)$; these are $29$ steps, and no number goes below $0$ on the way.",
        "reason": "Attaining the bound: $7 + 10 \\cdot 9 = 97$ and $97 - 19 \\cdot 5 = 2$."
      },
      {
        "step": "So the greatest $n$ is $29$.",
        "reason": "Attaining the bound: a bound that is reached is the greatest value."
      }
    ]
  },
  {
    "id": "t244-k4-p03",
    "topic": "estimates-for-sequences",
    "kind": "t244-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $39$ is the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (15, 3)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 8)$, and a step of the second kind takes $(x, y)$ to $(x, y - 5)$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $39$ is the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (15, 3)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 8)$, and a step of the second kind takes $(x, y)$ to $(x, y - 5)$.",
        "reason": "Monovariant: this is the problem as given; whole numbers are never below $0$, so a step is possible only while it leaves both numbers of the pair at $0$ or above."
      },
      {
        "step": "A step of the first kind changes $zx + y$ by $-z + 8$, and a step of the second kind changes it by $-5$; the two changes are equal when $z = 13$.",
        "reason": "Isolating the variable: $z$ stands for a weight on $x$ still to be chosen, and $-z + 8 = -5$ gives $z = 8 + 5$."
      },
      {
        "step": "Let $d_k = 13x_k + y_k$ for $k = 0, 1, \\dots, n$.",
        "reason": "Monovariant: with the weight $13$ of line 2, both kinds of step change this number by the same amount."
      },
      {
        "step": "After a step of the first kind, $d_{k+1} = 13(x_k - 1) + (y_k + 8) = d_k - 5$.",
        "reason": "Multiplying out: $13(x_k - 1) = 13x_k - 13$, and $-13 + 8 = -5$."
      },
      {
        "step": "After a step of the second kind, $d_{k+1} = 13x_k + (y_k - 5) = d_k - 5$.",
        "reason": "Substituting a value: $x_{k+1} = x_k$ and $y_{k+1} = y_k - 5$ go into $d_{k+1}$."
      },
      {
        "step": "For $k = 0, 1, \\dots, n - 1$, $d_{k+1} - d_k = -5$.",
        "reason": "Monovariant: by lines 4 and 5 the number $d_k$ falls by $5$ at every step, whichever kind of step is taken."
      },
      {
        "step": "$d_n - d_0 = -5n$",
        "reason": "Telescoping sum: the $n$ differences of line 6 add up to $d_n - d_0$, and each is $-5$."
      },
      {
        "step": "$d_0 = 13 \\cdot 15 + 3 = 198$",
        "reason": "Substituting a value: $x_0 = 15$ and $y_0 = 3$."
      },
      {
        "step": "$d_n \\ge 0$",
        "reason": "Adding two inequalities: $x_n$ and $y_n$ are whole numbers, so $13x_n \\ge 0$ and $y_n \\ge 0$."
      },
      {
        "step": "$198 - 5n \\ge 0$",
        "reason": "Substituting a value: by lines 7 and 8, $d_n = 198 - 5n$, which goes into line 9."
      },
      {
        "step": "$5n \\le 198$",
        "reason": "Adding the same number: $5n$ is added to both sides of line 10."
      },
      {
        "step": "$n \\le 39$",
        "reason": "Multiplying by a positive number: both sides of line 11 are multiplied by $\\dfrac{1}{5}$, which gives $n \\le \\dfrac{198}{5}$, and $n$ is a whole number."
      },
      {
        "step": "From $(15, 3)$, $15$ steps of the first kind lead to $(0, 123)$, and then $24$ steps of the second kind lead to $(0, 3)$; these are $39$ steps, and no number goes below $0$ on the way.",
        "reason": "Attaining the bound: $3 + 15 \\cdot 8 = 123$ and $123 - 24 \\cdot 5 = 3$."
      },
      {
        "step": "So the greatest $n$ is $39$.",
        "reason": "Attaining the bound: a bound that is reached is the greatest value."
      }
    ]
  },
  {
    "id": "t244-k4-p04",
    "topic": "estimates-for-sequences",
    "kind": "t244-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $91$ is the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (18, 20)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 7)$, and a step of the second kind takes $(x, y)$ to $(x, y - 2)$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $91$ is the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (18, 20)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 7)$, and a step of the second kind takes $(x, y)$ to $(x, y - 2)$.",
        "reason": "Monovariant: this is the problem as given; whole numbers are never below $0$, so a step is possible only while it leaves both numbers of the pair at $0$ or above."
      },
      {
        "step": "A step of the first kind changes $zx + y$ by $-z + 7$, and a step of the second kind changes it by $-2$; the two changes are equal when $z = 9$.",
        "reason": "Isolating the variable: $z$ stands for a weight on $x$ still to be chosen, and $-z + 7 = -2$ gives $z = 7 + 2$."
      },
      {
        "step": "Let $d_k = 9x_k + y_k$ for $k = 0, 1, \\dots, n$.",
        "reason": "Monovariant: with the weight $9$ of line 2, both kinds of step change this number by the same amount."
      },
      {
        "step": "After a step of the first kind, $d_{k+1} = 9(x_k - 1) + (y_k + 7) = d_k - 2$.",
        "reason": "Multiplying out: $9(x_k - 1) = 9x_k - 9$, and $-9 + 7 = -2$."
      },
      {
        "step": "After a step of the second kind, $d_{k+1} = 9x_k + (y_k - 2) = d_k - 2$.",
        "reason": "Substituting a value: $x_{k+1} = x_k$ and $y_{k+1} = y_k - 2$ go into $d_{k+1}$."
      },
      {
        "step": "For $k = 0, 1, \\dots, n - 1$, $d_{k+1} - d_k = -2$.",
        "reason": "Monovariant: by lines 4 and 5 the number $d_k$ falls by $2$ at every step, whichever kind of step is taken."
      },
      {
        "step": "$d_n - d_0 = -2n$",
        "reason": "Telescoping sum: the $n$ differences of line 6 add up to $d_n - d_0$, and each is $-2$."
      },
      {
        "step": "$d_0 = 9 \\cdot 18 + 20 = 182$",
        "reason": "Substituting a value: $x_0 = 18$ and $y_0 = 20$."
      },
      {
        "step": "$d_n \\ge 0$",
        "reason": "Adding two inequalities: $x_n$ and $y_n$ are whole numbers, so $9x_n \\ge 0$ and $y_n \\ge 0$."
      },
      {
        "step": "$182 - 2n \\ge 0$",
        "reason": "Substituting a value: by lines 7 and 8, $d_n = 182 - 2n$, which goes into line 9."
      },
      {
        "step": "$2n \\le 182$",
        "reason": "Adding the same number: $2n$ is added to both sides of line 10."
      },
      {
        "step": "$n \\le 91$",
        "reason": "Multiplying by a positive number: both sides of line 11 are multiplied by $\\dfrac{1}{2}$."
      },
      {
        "step": "From $(18, 20)$, $18$ steps of the first kind lead to $(0, 146)$, and then $73$ steps of the second kind lead to $(0, 0)$; these are $91$ steps, and no number goes below $0$ on the way.",
        "reason": "Attaining the bound: $20 + 18 \\cdot 7 = 146$ and $146 - 73 \\cdot 2 = 0$."
      },
      {
        "step": "So the greatest $n$ is $91$.",
        "reason": "Attaining the bound: a bound that is reached is the greatest value."
      }
    ]
  },
  {
    "id": "t244-k4-p05",
    "topic": "estimates-for-sequences",
    "kind": "t244-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $22$ is the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (12, 1)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 6)$, and a step of the second kind takes $(x, y)$ to $(x, y - 7)$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $22$ is the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (12, 1)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 6)$, and a step of the second kind takes $(x, y)$ to $(x, y - 7)$.",
        "reason": "Monovariant: this is the problem as given; whole numbers are never below $0$, so a step is possible only while it leaves both numbers of the pair at $0$ or above."
      },
      {
        "step": "A step of the first kind changes $zx + y$ by $-z + 6$, and a step of the second kind changes it by $-7$; the two changes are equal when $z = 13$.",
        "reason": "Isolating the variable: $z$ stands for a weight on $x$ still to be chosen, and $-z + 6 = -7$ gives $z = 6 + 7$."
      },
      {
        "step": "Let $d_k = 13x_k + y_k$ for $k = 0, 1, \\dots, n$.",
        "reason": "Monovariant: with the weight $13$ of line 2, both kinds of step change this number by the same amount."
      },
      {
        "step": "After a step of the first kind, $d_{k+1} = 13(x_k - 1) + (y_k + 6) = d_k - 7$.",
        "reason": "Multiplying out: $13(x_k - 1) = 13x_k - 13$, and $-13 + 6 = -7$."
      },
      {
        "step": "After a step of the second kind, $d_{k+1} = 13x_k + (y_k - 7) = d_k - 7$.",
        "reason": "Substituting a value: $x_{k+1} = x_k$ and $y_{k+1} = y_k - 7$ go into $d_{k+1}$."
      },
      {
        "step": "For $k = 0, 1, \\dots, n - 1$, $d_{k+1} - d_k = -7$.",
        "reason": "Monovariant: by lines 4 and 5 the number $d_k$ falls by $7$ at every step, whichever kind of step is taken."
      },
      {
        "step": "$d_n - d_0 = -7n$",
        "reason": "Telescoping sum: the $n$ differences of line 6 add up to $d_n - d_0$, and each is $-7$."
      },
      {
        "step": "$d_0 = 13 \\cdot 12 + 1 = 157$",
        "reason": "Substituting a value: $x_0 = 12$ and $y_0 = 1$."
      },
      {
        "step": "$d_n \\ge 0$",
        "reason": "Adding two inequalities: $x_n$ and $y_n$ are whole numbers, so $13x_n \\ge 0$ and $y_n \\ge 0$."
      },
      {
        "step": "$157 - 7n \\ge 0$",
        "reason": "Substituting a value: by lines 7 and 8, $d_n = 157 - 7n$, which goes into line 9."
      },
      {
        "step": "$7n \\le 157$",
        "reason": "Adding the same number: $7n$ is added to both sides of line 10."
      },
      {
        "step": "$n \\le 22$",
        "reason": "Multiplying by a positive number: both sides of line 11 are multiplied by $\\dfrac{1}{7}$, which gives $n \\le \\dfrac{157}{7}$, and $n$ is a whole number."
      },
      {
        "step": "From $(12, 1)$, $12$ steps of the first kind lead to $(0, 73)$, and then $10$ steps of the second kind lead to $(0, 3)$; these are $22$ steps, and no number goes below $0$ on the way.",
        "reason": "Attaining the bound: $1 + 12 \\cdot 6 = 73$ and $73 - 10 \\cdot 7 = 3$."
      },
      {
        "step": "So the greatest $n$ is $22$.",
        "reason": "Attaining the bound: a bound that is reached is the greatest value."
      }
    ]
  },
  {
    "id": "t244-k4-p06",
    "topic": "estimates-for-sequences",
    "kind": "t244-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $40$ is the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (13, 20)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 7)$, and a step of the second kind takes $(x, y)$ to $(x, y - 4)$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $40$ is the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (13, 20)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 7)$, and a step of the second kind takes $(x, y)$ to $(x, y - 4)$.",
        "reason": "Monovariant: this is the problem as given; whole numbers are never below $0$, so a step is possible only while it leaves both numbers of the pair at $0$ or above."
      },
      {
        "step": "A step of the first kind changes $zx + y$ by $-z + 7$, and a step of the second kind changes it by $-4$; the two changes are equal when $z = 11$.",
        "reason": "Isolating the variable: $z$ stands for a weight on $x$ still to be chosen, and $-z + 7 = -4$ gives $z = 7 + 4$."
      },
      {
        "step": "Let $d_k = 11x_k + y_k$ for $k = 0, 1, \\dots, n$.",
        "reason": "Monovariant: with the weight $11$ of line 2, both kinds of step change this number by the same amount."
      },
      {
        "step": "After a step of the first kind, $d_{k+1} = 11(x_k - 1) + (y_k + 7) = d_k - 4$.",
        "reason": "Multiplying out: $11(x_k - 1) = 11x_k - 11$, and $-11 + 7 = -4$."
      },
      {
        "step": "After a step of the second kind, $d_{k+1} = 11x_k + (y_k - 4) = d_k - 4$.",
        "reason": "Substituting a value: $x_{k+1} = x_k$ and $y_{k+1} = y_k - 4$ go into $d_{k+1}$."
      },
      {
        "step": "For $k = 0, 1, \\dots, n - 1$, $d_{k+1} - d_k = -4$.",
        "reason": "Monovariant: by lines 4 and 5 the number $d_k$ falls by $4$ at every step, whichever kind of step is taken."
      },
      {
        "step": "$d_n - d_0 = -4n$",
        "reason": "Telescoping sum: the $n$ differences of line 6 add up to $d_n - d_0$, and each is $-4$."
      },
      {
        "step": "$d_0 = 11 \\cdot 13 + 20 = 163$",
        "reason": "Substituting a value: $x_0 = 13$ and $y_0 = 20$."
      },
      {
        "step": "$d_n \\ge 0$",
        "reason": "Adding two inequalities: $x_n$ and $y_n$ are whole numbers, so $11x_n \\ge 0$ and $y_n \\ge 0$."
      },
      {
        "step": "$163 - 4n \\ge 0$",
        "reason": "Substituting a value: by lines 7 and 8, $d_n = 163 - 4n$, which goes into line 9."
      },
      {
        "step": "$4n \\le 163$",
        "reason": "Adding the same number: $4n$ is added to both sides of line 10."
      },
      {
        "step": "$n \\le 40$",
        "reason": "Multiplying by a positive number: both sides of line 11 are multiplied by $\\dfrac{1}{4}$, which gives $n \\le \\dfrac{163}{4}$, and $n$ is a whole number."
      },
      {
        "step": "From $(13, 20)$, $13$ steps of the first kind lead to $(0, 111)$, and then $27$ steps of the second kind lead to $(0, 3)$; these are $40$ steps, and no number goes below $0$ on the way.",
        "reason": "Attaining the bound: $20 + 13 \\cdot 7 = 111$ and $111 - 27 \\cdot 4 = 3$."
      },
      {
        "step": "So the greatest $n$ is $40$.",
        "reason": "Attaining the bound: a bound that is reached is the greatest value."
      }
    ]
  },
  {
    "id": "t244-k4-p07",
    "topic": "estimates-for-sequences",
    "kind": "t244-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $59$ is the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (16, 1)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 8)$, and a step of the second kind takes $(x, y)$ to $(x, y - 3)$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $59$ is the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (16, 1)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 8)$, and a step of the second kind takes $(x, y)$ to $(x, y - 3)$.",
        "reason": "Monovariant: this is the problem as given; whole numbers are never below $0$, so a step is possible only while it leaves both numbers of the pair at $0$ or above."
      },
      {
        "step": "A step of the first kind changes $zx + y$ by $-z + 8$, and a step of the second kind changes it by $-3$; the two changes are equal when $z = 11$.",
        "reason": "Isolating the variable: $z$ stands for a weight on $x$ still to be chosen, and $-z + 8 = -3$ gives $z = 8 + 3$."
      },
      {
        "step": "Let $d_k = 11x_k + y_k$ for $k = 0, 1, \\dots, n$.",
        "reason": "Monovariant: with the weight $11$ of line 2, both kinds of step change this number by the same amount."
      },
      {
        "step": "After a step of the first kind, $d_{k+1} = 11(x_k - 1) + (y_k + 8) = d_k - 3$.",
        "reason": "Multiplying out: $11(x_k - 1) = 11x_k - 11$, and $-11 + 8 = -3$."
      },
      {
        "step": "After a step of the second kind, $d_{k+1} = 11x_k + (y_k - 3) = d_k - 3$.",
        "reason": "Substituting a value: $x_{k+1} = x_k$ and $y_{k+1} = y_k - 3$ go into $d_{k+1}$."
      },
      {
        "step": "For $k = 0, 1, \\dots, n - 1$, $d_{k+1} - d_k = -3$.",
        "reason": "Monovariant: by lines 4 and 5 the number $d_k$ falls by $3$ at every step, whichever kind of step is taken."
      },
      {
        "step": "$d_n - d_0 = -3n$",
        "reason": "Telescoping sum: the $n$ differences of line 6 add up to $d_n - d_0$, and each is $-3$."
      },
      {
        "step": "$d_0 = 11 \\cdot 16 + 1 = 177$",
        "reason": "Substituting a value: $x_0 = 16$ and $y_0 = 1$."
      },
      {
        "step": "$d_n \\ge 0$",
        "reason": "Adding two inequalities: $x_n$ and $y_n$ are whole numbers, so $11x_n \\ge 0$ and $y_n \\ge 0$."
      },
      {
        "step": "$177 - 3n \\ge 0$",
        "reason": "Substituting a value: by lines 7 and 8, $d_n = 177 - 3n$, which goes into line 9."
      },
      {
        "step": "$3n \\le 177$",
        "reason": "Adding the same number: $3n$ is added to both sides of line 10."
      },
      {
        "step": "$n \\le 59$",
        "reason": "Multiplying by a positive number: both sides of line 11 are multiplied by $\\dfrac{1}{3}$."
      },
      {
        "step": "From $(16, 1)$, $16$ steps of the first kind lead to $(0, 129)$, and then $43$ steps of the second kind lead to $(0, 0)$; these are $59$ steps, and no number goes below $0$ on the way.",
        "reason": "Attaining the bound: $1 + 16 \\cdot 8 = 129$ and $129 - 43 \\cdot 3 = 0$."
      },
      {
        "step": "So the greatest $n$ is $59$.",
        "reason": "Attaining the bound: a bound that is reached is the greatest value."
      }
    ]
  },
  {
    "id": "t244-k4-p08",
    "topic": "estimates-for-sequences",
    "kind": "t244-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $25$ is the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (7, 10)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 9)$, and a step of the second kind takes $(x, y)$ to $(x, y - 4)$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $25$ is the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (7, 10)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 9)$, and a step of the second kind takes $(x, y)$ to $(x, y - 4)$.",
        "reason": "Monovariant: this is the problem as given; whole numbers are never below $0$, so a step is possible only while it leaves both numbers of the pair at $0$ or above."
      },
      {
        "step": "A step of the first kind changes $zx + y$ by $-z + 9$, and a step of the second kind changes it by $-4$; the two changes are equal when $z = 13$.",
        "reason": "Isolating the variable: $z$ stands for a weight on $x$ still to be chosen, and $-z + 9 = -4$ gives $z = 9 + 4$."
      },
      {
        "step": "Let $d_k = 13x_k + y_k$ for $k = 0, 1, \\dots, n$.",
        "reason": "Monovariant: with the weight $13$ of line 2, both kinds of step change this number by the same amount."
      },
      {
        "step": "After a step of the first kind, $d_{k+1} = 13(x_k - 1) + (y_k + 9) = d_k - 4$.",
        "reason": "Multiplying out: $13(x_k - 1) = 13x_k - 13$, and $-13 + 9 = -4$."
      },
      {
        "step": "After a step of the second kind, $d_{k+1} = 13x_k + (y_k - 4) = d_k - 4$.",
        "reason": "Substituting a value: $x_{k+1} = x_k$ and $y_{k+1} = y_k - 4$ go into $d_{k+1}$."
      },
      {
        "step": "For $k = 0, 1, \\dots, n - 1$, $d_{k+1} - d_k = -4$.",
        "reason": "Monovariant: by lines 4 and 5 the number $d_k$ falls by $4$ at every step, whichever kind of step is taken."
      },
      {
        "step": "$d_n - d_0 = -4n$",
        "reason": "Telescoping sum: the $n$ differences of line 6 add up to $d_n - d_0$, and each is $-4$."
      },
      {
        "step": "$d_0 = 13 \\cdot 7 + 10 = 101$",
        "reason": "Substituting a value: $x_0 = 7$ and $y_0 = 10$."
      },
      {
        "step": "$d_n \\ge 0$",
        "reason": "Adding two inequalities: $x_n$ and $y_n$ are whole numbers, so $13x_n \\ge 0$ and $y_n \\ge 0$."
      },
      {
        "step": "$101 - 4n \\ge 0$",
        "reason": "Substituting a value: by lines 7 and 8, $d_n = 101 - 4n$, which goes into line 9."
      },
      {
        "step": "$4n \\le 101$",
        "reason": "Adding the same number: $4n$ is added to both sides of line 10."
      },
      {
        "step": "$n \\le 25$",
        "reason": "Multiplying by a positive number: both sides of line 11 are multiplied by $\\dfrac{1}{4}$, which gives $n \\le \\dfrac{101}{4}$, and $n$ is a whole number."
      },
      {
        "step": "From $(7, 10)$, $7$ steps of the first kind lead to $(0, 73)$, and then $18$ steps of the second kind lead to $(0, 1)$; these are $25$ steps, and no number goes below $0$ on the way.",
        "reason": "Attaining the bound: $10 + 7 \\cdot 9 = 73$ and $73 - 18 \\cdot 4 = 1$."
      },
      {
        "step": "So the greatest $n$ is $25$.",
        "reason": "Attaining the bound: a bound that is reached is the greatest value."
      }
    ]
  },
  {
    "id": "t244-k4-p09",
    "topic": "estimates-for-sequences",
    "kind": "t244-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $36$ is the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (14, 21)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 5)$, and a step of the second kind takes $(x, y)$ to $(x, y - 4)$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $36$ is the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (14, 21)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 5)$, and a step of the second kind takes $(x, y)$ to $(x, y - 4)$.",
        "reason": "Monovariant: this is the problem as given; whole numbers are never below $0$, so a step is possible only while it leaves both numbers of the pair at $0$ or above."
      },
      {
        "step": "A step of the first kind changes $zx + y$ by $-z + 5$, and a step of the second kind changes it by $-4$; the two changes are equal when $z = 9$.",
        "reason": "Isolating the variable: $z$ stands for a weight on $x$ still to be chosen, and $-z + 5 = -4$ gives $z = 5 + 4$."
      },
      {
        "step": "Let $d_k = 9x_k + y_k$ for $k = 0, 1, \\dots, n$.",
        "reason": "Monovariant: with the weight $9$ of line 2, both kinds of step change this number by the same amount."
      },
      {
        "step": "After a step of the first kind, $d_{k+1} = 9(x_k - 1) + (y_k + 5) = d_k - 4$.",
        "reason": "Multiplying out: $9(x_k - 1) = 9x_k - 9$, and $-9 + 5 = -4$."
      },
      {
        "step": "After a step of the second kind, $d_{k+1} = 9x_k + (y_k - 4) = d_k - 4$.",
        "reason": "Substituting a value: $x_{k+1} = x_k$ and $y_{k+1} = y_k - 4$ go into $d_{k+1}$."
      },
      {
        "step": "For $k = 0, 1, \\dots, n - 1$, $d_{k+1} - d_k = -4$.",
        "reason": "Monovariant: by lines 4 and 5 the number $d_k$ falls by $4$ at every step, whichever kind of step is taken."
      },
      {
        "step": "$d_n - d_0 = -4n$",
        "reason": "Telescoping sum: the $n$ differences of line 6 add up to $d_n - d_0$, and each is $-4$."
      },
      {
        "step": "$d_0 = 9 \\cdot 14 + 21 = 147$",
        "reason": "Substituting a value: $x_0 = 14$ and $y_0 = 21$."
      },
      {
        "step": "$d_n \\ge 0$",
        "reason": "Adding two inequalities: $x_n$ and $y_n$ are whole numbers, so $9x_n \\ge 0$ and $y_n \\ge 0$."
      },
      {
        "step": "$147 - 4n \\ge 0$",
        "reason": "Substituting a value: by lines 7 and 8, $d_n = 147 - 4n$, which goes into line 9."
      },
      {
        "step": "$4n \\le 147$",
        "reason": "Adding the same number: $4n$ is added to both sides of line 10."
      },
      {
        "step": "$n \\le 36$",
        "reason": "Multiplying by a positive number: both sides of line 11 are multiplied by $\\dfrac{1}{4}$, which gives $n \\le \\dfrac{147}{4}$, and $n$ is a whole number."
      },
      {
        "step": "From $(14, 21)$, $14$ steps of the first kind lead to $(0, 91)$, and then $22$ steps of the second kind lead to $(0, 3)$; these are $36$ steps, and no number goes below $0$ on the way.",
        "reason": "Attaining the bound: $21 + 14 \\cdot 5 = 91$ and $91 - 22 \\cdot 4 = 3$."
      },
      {
        "step": "So the greatest $n$ is $36$.",
        "reason": "Attaining the bound: a bound that is reached is the greatest value."
      }
    ]
  },
  {
    "id": "t244-k4-p10",
    "topic": "estimates-for-sequences",
    "kind": "t244-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $24$ is the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (19, 15)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 1)$, and a step of the second kind takes $(x, y)$ to $(x, y - 6)$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $24$ is the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (19, 15)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 1)$, and a step of the second kind takes $(x, y)$ to $(x, y - 6)$.",
        "reason": "Monovariant: this is the problem as given; whole numbers are never below $0$, so a step is possible only while it leaves both numbers of the pair at $0$ or above."
      },
      {
        "step": "A step of the first kind changes $zx + y$ by $-z + 1$, and a step of the second kind changes it by $-6$; the two changes are equal when $z = 7$.",
        "reason": "Isolating the variable: $z$ stands for a weight on $x$ still to be chosen, and $-z + 1 = -6$ gives $z = 1 + 6$."
      },
      {
        "step": "Let $d_k = 7x_k + y_k$ for $k = 0, 1, \\dots, n$.",
        "reason": "Monovariant: with the weight $7$ of line 2, both kinds of step change this number by the same amount."
      },
      {
        "step": "After a step of the first kind, $d_{k+1} = 7(x_k - 1) + (y_k + 1) = d_k - 6$.",
        "reason": "Multiplying out: $7(x_k - 1) = 7x_k - 7$, and $-7 + 1 = -6$."
      },
      {
        "step": "After a step of the second kind, $d_{k+1} = 7x_k + (y_k - 6) = d_k - 6$.",
        "reason": "Substituting a value: $x_{k+1} = x_k$ and $y_{k+1} = y_k - 6$ go into $d_{k+1}$."
      },
      {
        "step": "For $k = 0, 1, \\dots, n - 1$, $d_{k+1} - d_k = -6$.",
        "reason": "Monovariant: by lines 4 and 5 the number $d_k$ falls by $6$ at every step, whichever kind of step is taken."
      },
      {
        "step": "$d_n - d_0 = -6n$",
        "reason": "Telescoping sum: the $n$ differences of line 6 add up to $d_n - d_0$, and each is $-6$."
      },
      {
        "step": "$d_0 = 7 \\cdot 19 + 15 = 148$",
        "reason": "Substituting a value: $x_0 = 19$ and $y_0 = 15$."
      },
      {
        "step": "$d_n \\ge 0$",
        "reason": "Adding two inequalities: $x_n$ and $y_n$ are whole numbers, so $7x_n \\ge 0$ and $y_n \\ge 0$."
      },
      {
        "step": "$148 - 6n \\ge 0$",
        "reason": "Substituting a value: by lines 7 and 8, $d_n = 148 - 6n$, which goes into line 9."
      },
      {
        "step": "$6n \\le 148$",
        "reason": "Adding the same number: $6n$ is added to both sides of line 10."
      },
      {
        "step": "$n \\le 24$",
        "reason": "Multiplying by a positive number: both sides of line 11 are multiplied by $\\dfrac{1}{6}$, which gives $n \\le \\dfrac{74}{3}$, and $n$ is a whole number."
      },
      {
        "step": "From $(19, 15)$, $19$ steps of the first kind lead to $(0, 34)$, and then $5$ steps of the second kind lead to $(0, 4)$; these are $24$ steps, and no number goes below $0$ on the way.",
        "reason": "Attaining the bound: $15 + 19 = 34$ and $34 - 5 \\cdot 6 = 4$."
      },
      {
        "step": "So the greatest $n$ is $24$.",
        "reason": "Attaining the bound: a bound that is reached is the greatest value."
      }
    ]
  },
  {
    "id": "t244-k4-p11",
    "topic": "estimates-for-sequences",
    "kind": "t244-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $51$ is the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (19, 21)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 4)$, and a step of the second kind takes $(x, y)$ to $(x, y - 3)$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $51$ is the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (19, 21)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 4)$, and a step of the second kind takes $(x, y)$ to $(x, y - 3)$.",
        "reason": "Monovariant: this is the problem as given; whole numbers are never below $0$, so a step is possible only while it leaves both numbers of the pair at $0$ or above."
      },
      {
        "step": "A step of the first kind changes $zx + y$ by $-z + 4$, and a step of the second kind changes it by $-3$; the two changes are equal when $z = 7$.",
        "reason": "Isolating the variable: $z$ stands for a weight on $x$ still to be chosen, and $-z + 4 = -3$ gives $z = 4 + 3$."
      },
      {
        "step": "Let $d_k = 7x_k + y_k$ for $k = 0, 1, \\dots, n$.",
        "reason": "Monovariant: with the weight $7$ of line 2, both kinds of step change this number by the same amount."
      },
      {
        "step": "After a step of the first kind, $d_{k+1} = 7(x_k - 1) + (y_k + 4) = d_k - 3$.",
        "reason": "Multiplying out: $7(x_k - 1) = 7x_k - 7$, and $-7 + 4 = -3$."
      },
      {
        "step": "After a step of the second kind, $d_{k+1} = 7x_k + (y_k - 3) = d_k - 3$.",
        "reason": "Substituting a value: $x_{k+1} = x_k$ and $y_{k+1} = y_k - 3$ go into $d_{k+1}$."
      },
      {
        "step": "For $k = 0, 1, \\dots, n - 1$, $d_{k+1} - d_k = -3$.",
        "reason": "Monovariant: by lines 4 and 5 the number $d_k$ falls by $3$ at every step, whichever kind of step is taken."
      },
      {
        "step": "$d_n - d_0 = -3n$",
        "reason": "Telescoping sum: the $n$ differences of line 6 add up to $d_n - d_0$, and each is $-3$."
      },
      {
        "step": "$d_0 = 7 \\cdot 19 + 21 = 154$",
        "reason": "Substituting a value: $x_0 = 19$ and $y_0 = 21$."
      },
      {
        "step": "$d_n \\ge 0$",
        "reason": "Adding two inequalities: $x_n$ and $y_n$ are whole numbers, so $7x_n \\ge 0$ and $y_n \\ge 0$."
      },
      {
        "step": "$154 - 3n \\ge 0$",
        "reason": "Substituting a value: by lines 7 and 8, $d_n = 154 - 3n$, which goes into line 9."
      },
      {
        "step": "$3n \\le 154$",
        "reason": "Adding the same number: $3n$ is added to both sides of line 10."
      },
      {
        "step": "$n \\le 51$",
        "reason": "Multiplying by a positive number: both sides of line 11 are multiplied by $\\dfrac{1}{3}$, which gives $n \\le \\dfrac{154}{3}$, and $n$ is a whole number."
      },
      {
        "step": "From $(19, 21)$, $19$ steps of the first kind lead to $(0, 97)$, and then $32$ steps of the second kind lead to $(0, 1)$; these are $51$ steps, and no number goes below $0$ on the way.",
        "reason": "Attaining the bound: $21 + 19 \\cdot 4 = 97$ and $97 - 32 \\cdot 3 = 1$."
      },
      {
        "step": "So the greatest $n$ is $51$.",
        "reason": "Attaining the bound: a bound that is reached is the greatest value."
      }
    ]
  },
  {
    "id": "t244-k4-p12",
    "topic": "estimates-for-sequences",
    "kind": "t244-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $11$ is the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (6, 2)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 4)$, and a step of the second kind takes $(x, y)$ to $(x, y - 5)$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $11$ is the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (6, 2)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 4)$, and a step of the second kind takes $(x, y)$ to $(x, y - 5)$.",
        "reason": "Monovariant: this is the problem as given; whole numbers are never below $0$, so a step is possible only while it leaves both numbers of the pair at $0$ or above."
      },
      {
        "step": "A step of the first kind changes $zx + y$ by $-z + 4$, and a step of the second kind changes it by $-5$; the two changes are equal when $z = 9$.",
        "reason": "Isolating the variable: $z$ stands for a weight on $x$ still to be chosen, and $-z + 4 = -5$ gives $z = 4 + 5$."
      },
      {
        "step": "Let $d_k = 9x_k + y_k$ for $k = 0, 1, \\dots, n$.",
        "reason": "Monovariant: with the weight $9$ of line 2, both kinds of step change this number by the same amount."
      },
      {
        "step": "After a step of the first kind, $d_{k+1} = 9(x_k - 1) + (y_k + 4) = d_k - 5$.",
        "reason": "Multiplying out: $9(x_k - 1) = 9x_k - 9$, and $-9 + 4 = -5$."
      },
      {
        "step": "After a step of the second kind, $d_{k+1} = 9x_k + (y_k - 5) = d_k - 5$.",
        "reason": "Substituting a value: $x_{k+1} = x_k$ and $y_{k+1} = y_k - 5$ go into $d_{k+1}$."
      },
      {
        "step": "For $k = 0, 1, \\dots, n - 1$, $d_{k+1} - d_k = -5$.",
        "reason": "Monovariant: by lines 4 and 5 the number $d_k$ falls by $5$ at every step, whichever kind of step is taken."
      },
      {
        "step": "$d_n - d_0 = -5n$",
        "reason": "Telescoping sum: the $n$ differences of line 6 add up to $d_n - d_0$, and each is $-5$."
      },
      {
        "step": "$d_0 = 9 \\cdot 6 + 2 = 56$",
        "reason": "Substituting a value: $x_0 = 6$ and $y_0 = 2$."
      },
      {
        "step": "$d_n \\ge 0$",
        "reason": "Adding two inequalities: $x_n$ and $y_n$ are whole numbers, so $9x_n \\ge 0$ and $y_n \\ge 0$."
      },
      {
        "step": "$56 - 5n \\ge 0$",
        "reason": "Substituting a value: by lines 7 and 8, $d_n = 56 - 5n$, which goes into line 9."
      },
      {
        "step": "$5n \\le 56$",
        "reason": "Adding the same number: $5n$ is added to both sides of line 10."
      },
      {
        "step": "$n \\le 11$",
        "reason": "Multiplying by a positive number: both sides of line 11 are multiplied by $\\dfrac{1}{5}$, which gives $n \\le \\dfrac{56}{5}$, and $n$ is a whole number."
      },
      {
        "step": "From $(6, 2)$, $6$ steps of the first kind lead to $(0, 26)$, and then $5$ steps of the second kind lead to $(0, 1)$; these are $11$ steps, and no number goes below $0$ on the way.",
        "reason": "Attaining the bound: $2 + 6 \\cdot 4 = 26$ and $26 - 5 \\cdot 5 = 1$."
      },
      {
        "step": "So the greatest $n$ is $11$.",
        "reason": "Attaining the bound: a bound that is reached is the greatest value."
      }
    ]
  },
  {
    "id": "t244-k4-p13",
    "topic": "estimates-for-sequences",
    "kind": "t244-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $19$ is the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (12, 23)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 1)$, and a step of the second kind takes $(x, y)$ to $(x, y - 5)$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $19$ is the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (12, 23)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 1)$, and a step of the second kind takes $(x, y)$ to $(x, y - 5)$.",
        "reason": "Monovariant: this is the problem as given; whole numbers are never below $0$, so a step is possible only while it leaves both numbers of the pair at $0$ or above."
      },
      {
        "step": "A step of the first kind changes $zx + y$ by $-z + 1$, and a step of the second kind changes it by $-5$; the two changes are equal when $z = 6$.",
        "reason": "Isolating the variable: $z$ stands for a weight on $x$ still to be chosen, and $-z + 1 = -5$ gives $z = 1 + 5$."
      },
      {
        "step": "Let $d_k = 6x_k + y_k$ for $k = 0, 1, \\dots, n$.",
        "reason": "Monovariant: with the weight $6$ of line 2, both kinds of step change this number by the same amount."
      },
      {
        "step": "After a step of the first kind, $d_{k+1} = 6(x_k - 1) + (y_k + 1) = d_k - 5$.",
        "reason": "Multiplying out: $6(x_k - 1) = 6x_k - 6$, and $-6 + 1 = -5$."
      },
      {
        "step": "After a step of the second kind, $d_{k+1} = 6x_k + (y_k - 5) = d_k - 5$.",
        "reason": "Substituting a value: $x_{k+1} = x_k$ and $y_{k+1} = y_k - 5$ go into $d_{k+1}$."
      },
      {
        "step": "For $k = 0, 1, \\dots, n - 1$, $d_{k+1} - d_k = -5$.",
        "reason": "Monovariant: by lines 4 and 5 the number $d_k$ falls by $5$ at every step, whichever kind of step is taken."
      },
      {
        "step": "$d_n - d_0 = -5n$",
        "reason": "Telescoping sum: the $n$ differences of line 6 add up to $d_n - d_0$, and each is $-5$."
      },
      {
        "step": "$d_0 = 6 \\cdot 12 + 23 = 95$",
        "reason": "Substituting a value: $x_0 = 12$ and $y_0 = 23$."
      },
      {
        "step": "$d_n \\ge 0$",
        "reason": "Adding two inequalities: $x_n$ and $y_n$ are whole numbers, so $6x_n \\ge 0$ and $y_n \\ge 0$."
      },
      {
        "step": "$95 - 5n \\ge 0$",
        "reason": "Substituting a value: by lines 7 and 8, $d_n = 95 - 5n$, which goes into line 9."
      },
      {
        "step": "$5n \\le 95$",
        "reason": "Adding the same number: $5n$ is added to both sides of line 10."
      },
      {
        "step": "$n \\le 19$",
        "reason": "Multiplying by a positive number: both sides of line 11 are multiplied by $\\dfrac{1}{5}$."
      },
      {
        "step": "From $(12, 23)$, $12$ steps of the first kind lead to $(0, 35)$, and then $7$ steps of the second kind lead to $(0, 0)$; these are $19$ steps, and no number goes below $0$ on the way.",
        "reason": "Attaining the bound: $23 + 12 = 35$ and $35 - 7 \\cdot 5 = 0$."
      },
      {
        "step": "So the greatest $n$ is $19$.",
        "reason": "Attaining the bound: a bound that is reached is the greatest value."
      }
    ]
  },
  {
    "id": "t244-k4-p14",
    "topic": "estimates-for-sequences",
    "kind": "t244-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $32$ is the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (16, 18)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 3)$, and a step of the second kind takes $(x, y)$ to $(x, y - 4)$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $32$ is the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (16, 18)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 3)$, and a step of the second kind takes $(x, y)$ to $(x, y - 4)$.",
        "reason": "Monovariant: this is the problem as given; whole numbers are never below $0$, so a step is possible only while it leaves both numbers of the pair at $0$ or above."
      },
      {
        "step": "A step of the first kind changes $zx + y$ by $-z + 3$, and a step of the second kind changes it by $-4$; the two changes are equal when $z = 7$.",
        "reason": "Isolating the variable: $z$ stands for a weight on $x$ still to be chosen, and $-z + 3 = -4$ gives $z = 3 + 4$."
      },
      {
        "step": "Let $d_k = 7x_k + y_k$ for $k = 0, 1, \\dots, n$.",
        "reason": "Monovariant: with the weight $7$ of line 2, both kinds of step change this number by the same amount."
      },
      {
        "step": "After a step of the first kind, $d_{k+1} = 7(x_k - 1) + (y_k + 3) = d_k - 4$.",
        "reason": "Multiplying out: $7(x_k - 1) = 7x_k - 7$, and $-7 + 3 = -4$."
      },
      {
        "step": "After a step of the second kind, $d_{k+1} = 7x_k + (y_k - 4) = d_k - 4$.",
        "reason": "Substituting a value: $x_{k+1} = x_k$ and $y_{k+1} = y_k - 4$ go into $d_{k+1}$."
      },
      {
        "step": "For $k = 0, 1, \\dots, n - 1$, $d_{k+1} - d_k = -4$.",
        "reason": "Monovariant: by lines 4 and 5 the number $d_k$ falls by $4$ at every step, whichever kind of step is taken."
      },
      {
        "step": "$d_n - d_0 = -4n$",
        "reason": "Telescoping sum: the $n$ differences of line 6 add up to $d_n - d_0$, and each is $-4$."
      },
      {
        "step": "$d_0 = 7 \\cdot 16 + 18 = 130$",
        "reason": "Substituting a value: $x_0 = 16$ and $y_0 = 18$."
      },
      {
        "step": "$d_n \\ge 0$",
        "reason": "Adding two inequalities: $x_n$ and $y_n$ are whole numbers, so $7x_n \\ge 0$ and $y_n \\ge 0$."
      },
      {
        "step": "$130 - 4n \\ge 0$",
        "reason": "Substituting a value: by lines 7 and 8, $d_n = 130 - 4n$, which goes into line 9."
      },
      {
        "step": "$4n \\le 130$",
        "reason": "Adding the same number: $4n$ is added to both sides of line 10."
      },
      {
        "step": "$n \\le 32$",
        "reason": "Multiplying by a positive number: both sides of line 11 are multiplied by $\\dfrac{1}{4}$, which gives $n \\le \\dfrac{65}{2}$, and $n$ is a whole number."
      },
      {
        "step": "From $(16, 18)$, $16$ steps of the first kind lead to $(0, 66)$, and then $16$ steps of the second kind lead to $(0, 2)$; these are $32$ steps, and no number goes below $0$ on the way.",
        "reason": "Attaining the bound: $18 + 16 \\cdot 3 = 66$ and $66 - 16 \\cdot 4 = 2$."
      },
      {
        "step": "So the greatest $n$ is $32$.",
        "reason": "Attaining the bound: a bound that is reached is the greatest value."
      }
    ]
  }
]
