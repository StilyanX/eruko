export default [
  {
    "id": "t239-k1-p01",
    "topic": "periodic-sequences",
    "kind": "t239-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that the sequence has a period from $1$ to $289$, where $a_0 = 11$, $a_1 = 5$ and $a_{n+2}$ is the remainder of $11a_{n+1} + 6a_n$ on division by $17$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence has a period from $1$ to $289$, where $a_0 = 11$, $a_1 = 5$ and $a_{n+2}$ is the remainder of $11a_{n+1} + 6a_n$ on division by $17$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $a_1$ start the sequence and each later term comes from the two before it."
      },
      {
        "step": "Each term is one of the $17$ remainders $0, 1, \\dots, 16$.",
        "reason": "Divisibility of integers, from arithmetic: a remainder on division by $17$ is a whole number below $17$."
      },
      {
        "step": "The pair $(a_n, a_{n+1})$ is one of $289$ pairs.",
        "reason": "Multiplication as repeated addition, from arithmetic: $17$ choices for $a_n$, each with $17$ choices for $a_{n+1}$, make $17$ times $17$ pairs."
      },
      {
        "step": "The pair $(a_n, a_{n+1})$ fixes the next pair $(a_{n+1}, a_{n+2})$.",
        "reason": "Recursion: the rule gives $a_{n+2}$ from $a_n$ and $a_{n+1}$."
      },
      {
        "step": "$6 \\cdot 3 = 17 + 1$",
        "reason": "Divisibility of integers, from arithmetic: $6 \\cdot 3$ leaves the remainder $1$ on division by $17$."
      },
      {
        "step": "The number $3a_{n+2}$ leaves the same remainder on division by $17$ as $33a_{n+1} + 18a_n$.",
        "reason": "Multiplying both sides by the same number: the rule is multiplied by $3$."
      },
      {
        "step": "The number $3a_{n+2}$ leaves the same remainder on division by $17$ as $33a_{n+1} + a_n$.",
        "reason": "Divisibility of integers, from arithmetic: by line 5, $18a_n$ and $a_n$ differ by a multiple of $17$."
      },
      {
        "step": "Each term $a_n$ is the remainder of $3a_{n+2} + a_{n+1}$ on division by $17$.",
        "reason": "Adding the same number to both sides: $33a_{n+1}$ is taken from both sides, and $-33$ leaves the remainder $1$ on division by $17$."
      },
      {
        "step": "Each pair $(a_{n+1}, a_{n+2})$ follows from exactly one pair $(a_n, a_{n+1})$.",
        "reason": "Recursion: line 4 runs the step forwards and line 8 runs it backwards."
      },
      {
        "step": "The sequence has a period from $1$ to $289$.",
        "reason": "Pigeonhole on states: by lines 3 and 9 the pairs are states with one state before each, so they repeat from the start, and the pair fixes every later term."
      }
    ]
  },
  {
    "id": "t239-k1-p02",
    "topic": "periodic-sequences",
    "kind": "t239-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that the sequence has a period from $1$ to $361$, where $a_0 = 13$, $a_1 = 16$ and $a_{n+2}$ is the remainder of $12a_{n+1} + 14a_n$ on division by $19$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence has a period from $1$ to $361$, where $a_0 = 13$, $a_1 = 16$ and $a_{n+2}$ is the remainder of $12a_{n+1} + 14a_n$ on division by $19$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $a_1$ start the sequence and each later term comes from the two before it."
      },
      {
        "step": "Each term is one of the $19$ remainders $0, 1, \\dots, 18$.",
        "reason": "Divisibility of integers, from arithmetic: a remainder on division by $19$ is a whole number below $19$."
      },
      {
        "step": "The pair $(a_n, a_{n+1})$ is one of $361$ pairs.",
        "reason": "Multiplication as repeated addition, from arithmetic: $19$ choices for $a_n$, each with $19$ choices for $a_{n+1}$, make $19$ times $19$ pairs."
      },
      {
        "step": "The pair $(a_n, a_{n+1})$ fixes the next pair $(a_{n+1}, a_{n+2})$.",
        "reason": "Recursion: the rule gives $a_{n+2}$ from $a_n$ and $a_{n+1}$."
      },
      {
        "step": "$14 \\cdot 15 = 11 \\cdot 19 + 1$",
        "reason": "Divisibility of integers, from arithmetic: $14 \\cdot 15$ leaves the remainder $1$ on division by $19$."
      },
      {
        "step": "The number $15a_{n+2}$ leaves the same remainder on division by $19$ as $180a_{n+1} + 210a_n$.",
        "reason": "Multiplying both sides by the same number: the rule is multiplied by $15$."
      },
      {
        "step": "The number $15a_{n+2}$ leaves the same remainder on division by $19$ as $180a_{n+1} + a_n$.",
        "reason": "Divisibility of integers, from arithmetic: by line 5, $210a_n$ and $a_n$ differ by a multiple of $19$."
      },
      {
        "step": "Each term $a_n$ is the remainder of $15a_{n+2} + 10a_{n+1}$ on division by $19$.",
        "reason": "Adding the same number to both sides: $180a_{n+1}$ is taken from both sides, and $-180$ leaves the remainder $10$ on division by $19$."
      },
      {
        "step": "Each pair $(a_{n+1}, a_{n+2})$ follows from exactly one pair $(a_n, a_{n+1})$.",
        "reason": "Recursion: line 4 runs the step forwards and line 8 runs it backwards."
      },
      {
        "step": "The sequence has a period from $1$ to $361$.",
        "reason": "Pigeonhole on states: by lines 3 and 9 the pairs are states with one state before each, so they repeat from the start, and the pair fixes every later term."
      }
    ]
  },
  {
    "id": "t239-k1-p03",
    "topic": "periodic-sequences",
    "kind": "t239-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that the sequence has a period from $1$ to $961$, where $a_0 = 22$, $a_1 = 8$ and $a_{n+2}$ is the remainder of $26a_{n+1} + 24a_n$ on division by $31$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence has a period from $1$ to $961$, where $a_0 = 22$, $a_1 = 8$ and $a_{n+2}$ is the remainder of $26a_{n+1} + 24a_n$ on division by $31$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $a_1$ start the sequence and each later term comes from the two before it."
      },
      {
        "step": "Each term is one of the $31$ remainders $0, 1, \\dots, 30$.",
        "reason": "Divisibility of integers, from arithmetic: a remainder on division by $31$ is a whole number below $31$."
      },
      {
        "step": "The pair $(a_n, a_{n+1})$ is one of $961$ pairs.",
        "reason": "Multiplication as repeated addition, from arithmetic: $31$ choices for $a_n$, each with $31$ choices for $a_{n+1}$, make $31$ times $31$ pairs."
      },
      {
        "step": "The pair $(a_n, a_{n+1})$ fixes the next pair $(a_{n+1}, a_{n+2})$.",
        "reason": "Recursion: the rule gives $a_{n+2}$ from $a_n$ and $a_{n+1}$."
      },
      {
        "step": "$24 \\cdot 22 = 17 \\cdot 31 + 1$",
        "reason": "Divisibility of integers, from arithmetic: $24 \\cdot 22$ leaves the remainder $1$ on division by $31$."
      },
      {
        "step": "The number $22a_{n+2}$ leaves the same remainder on division by $31$ as $572a_{n+1} + 528a_n$.",
        "reason": "Multiplying both sides by the same number: the rule is multiplied by $22$."
      },
      {
        "step": "The number $22a_{n+2}$ leaves the same remainder on division by $31$ as $572a_{n+1} + a_n$.",
        "reason": "Divisibility of integers, from arithmetic: by line 5, $528a_n$ and $a_n$ differ by a multiple of $31$."
      },
      {
        "step": "Each term $a_n$ is the remainder of $22a_{n+2} + 17a_{n+1}$ on division by $31$.",
        "reason": "Adding the same number to both sides: $572a_{n+1}$ is taken from both sides, and $-572$ leaves the remainder $17$ on division by $31$."
      },
      {
        "step": "Each pair $(a_{n+1}, a_{n+2})$ follows from exactly one pair $(a_n, a_{n+1})$.",
        "reason": "Recursion: line 4 runs the step forwards and line 8 runs it backwards."
      },
      {
        "step": "The sequence has a period from $1$ to $961$.",
        "reason": "Pigeonhole on states: by lines 3 and 9 the pairs are states with one state before each, so they repeat from the start, and the pair fixes every later term."
      }
    ]
  },
  {
    "id": "t239-k1-p04",
    "topic": "periodic-sequences",
    "kind": "t239-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the least period of the sequence is $5$, where $a_0 = 40$ and $a_{n+1}$ is the remainder of $a_n + 22$ on division by $55$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the least period of the sequence is $5$, where $a_0 = 40$ and $a_{n+1}$ is the remainder of $a_n + 22$ on division by $55$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each later term comes from the one before it."
      },
      {
        "step": "Each term $a_{n+1}$ leaves the same remainder on division by $55$ as $a_n + 22$.",
        "reason": "Divisibility of integers, from arithmetic: a number and its remainder on division by $55$ differ by a multiple of $55$."
      },
      {
        "step": "Each term $a_n$ is the remainder of $40 + 22n$ on division by $55$, for every whole number $n$.",
        "reason": "Induction: true at $n = 0$, and by line 2 each step adds $22$ and keeps the remainder."
      },
      {
        "step": "The terms satisfy $a_{n+p} = a_n$ for every whole number $n$ exactly when $55$ divides $22p$.",
        "reason": "Divisibility of integers, from arithmetic: two whole numbers leave the same remainder on division by $55$ exactly when $55$ divides their difference, and $(40 + 22(n + p)) - (40 + 22n) = 22p$."
      },
      {
        "step": "$\\dfrac{22p}{55} = \\dfrac{2p}{5}$",
        "reason": "Cancelling a common factor: $22$ and $55$ share the factor $11$."
      },
      {
        "step": "The number $55$ divides $22p$ exactly when $5$ divides $p$.",
        "reason": "Fractions in lowest terms and the gcd, from arithmetic: $\\dfrac{2}{5}$ is in lowest terms, so $\\dfrac{2p}{5}$ is a whole number exactly when $5$ divides $p$."
      },
      {
        "step": "The least period is $5$.",
        "reason": "Period: the least whole number $p$ from $1$ up that $5$ divides is $5$."
      }
    ]
  },
  {
    "id": "t239-k1-p05",
    "topic": "periodic-sequences",
    "kind": "t239-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that the sequence has a period from $1$ to $121$, where $a_0 = 2$, $a_1 = 9$ and $a_{n+2}$ is the remainder of $3a_{n+1} + 3a_n$ on division by $11$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence has a period from $1$ to $121$, where $a_0 = 2$, $a_1 = 9$ and $a_{n+2}$ is the remainder of $3a_{n+1} + 3a_n$ on division by $11$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $a_1$ start the sequence and each later term comes from the two before it."
      },
      {
        "step": "Each term is one of the $11$ remainders $0, 1, \\dots, 10$.",
        "reason": "Divisibility of integers, from arithmetic: a remainder on division by $11$ is a whole number below $11$."
      },
      {
        "step": "The pair $(a_n, a_{n+1})$ is one of $121$ pairs.",
        "reason": "Multiplication as repeated addition, from arithmetic: $11$ choices for $a_n$, each with $11$ choices for $a_{n+1}$, make $11$ times $11$ pairs."
      },
      {
        "step": "The pair $(a_n, a_{n+1})$ fixes the next pair $(a_{n+1}, a_{n+2})$.",
        "reason": "Recursion: the rule gives $a_{n+2}$ from $a_n$ and $a_{n+1}$."
      },
      {
        "step": "$3 \\cdot 4 = 11 + 1$",
        "reason": "Divisibility of integers, from arithmetic: $3 \\cdot 4$ leaves the remainder $1$ on division by $11$."
      },
      {
        "step": "The number $4a_{n+2}$ leaves the same remainder on division by $11$ as $12a_{n+1} + 12a_n$.",
        "reason": "Multiplying both sides by the same number: the rule is multiplied by $4$."
      },
      {
        "step": "The number $4a_{n+2}$ leaves the same remainder on division by $11$ as $12a_{n+1} + a_n$.",
        "reason": "Divisibility of integers, from arithmetic: by line 5, $12a_n$ and $a_n$ differ by a multiple of $11$."
      },
      {
        "step": "Each term $a_n$ is the remainder of $4a_{n+2} + 10a_{n+1}$ on division by $11$.",
        "reason": "Adding the same number to both sides: $12a_{n+1}$ is taken from both sides, and $-12$ leaves the remainder $10$ on division by $11$."
      },
      {
        "step": "Each pair $(a_{n+1}, a_{n+2})$ follows from exactly one pair $(a_n, a_{n+1})$.",
        "reason": "Recursion: line 4 runs the step forwards and line 8 runs it backwards."
      },
      {
        "step": "The sequence has a period from $1$ to $121$.",
        "reason": "Pigeonhole on states: by lines 3 and 9 the pairs are states with one state before each, so they repeat from the start, and the pair fixes every later term."
      }
    ]
  },
  {
    "id": "t239-k1-p06",
    "topic": "periodic-sequences",
    "kind": "t239-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the least period of the sequence is $18$, where $a_0 = 51$ and $a_{n+1}$ is the remainder of $a_n + 28$ on division by $72$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the least period of the sequence is $18$, where $a_0 = 51$ and $a_{n+1}$ is the remainder of $a_n + 28$ on division by $72$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each later term comes from the one before it."
      },
      {
        "step": "Each term $a_{n+1}$ leaves the same remainder on division by $72$ as $a_n + 28$.",
        "reason": "Divisibility of integers, from arithmetic: a number and its remainder on division by $72$ differ by a multiple of $72$."
      },
      {
        "step": "Each term $a_n$ is the remainder of $51 + 28n$ on division by $72$, for every whole number $n$.",
        "reason": "Induction: true at $n = 0$, and by line 2 each step adds $28$ and keeps the remainder."
      },
      {
        "step": "The terms satisfy $a_{n+p} = a_n$ for every whole number $n$ exactly when $72$ divides $28p$.",
        "reason": "Divisibility of integers, from arithmetic: two whole numbers leave the same remainder on division by $72$ exactly when $72$ divides their difference, and $(51 + 28(n + p)) - (51 + 28n) = 28p$."
      },
      {
        "step": "$\\dfrac{28p}{72} = \\dfrac{7p}{18}$",
        "reason": "Cancelling a common factor: $28$ and $72$ share the factor $4$."
      },
      {
        "step": "The number $72$ divides $28p$ exactly when $18$ divides $p$.",
        "reason": "Fractions in lowest terms and the gcd, from arithmetic: $\\dfrac{7}{18}$ is in lowest terms, so $\\dfrac{7p}{18}$ is a whole number exactly when $18$ divides $p$."
      },
      {
        "step": "The least period is $18$.",
        "reason": "Period: the least whole number $p$ from $1$ up that $18$ divides is $18$."
      }
    ]
  },
  {
    "id": "t239-k1-p07",
    "topic": "periodic-sequences",
    "kind": "t239-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the least period of the sequence is $16$, where $a_0 = 2$ and $a_{n+1}$ is the remainder of $a_n + 26$ on division by $32$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the least period of the sequence is $16$, where $a_0 = 2$ and $a_{n+1}$ is the remainder of $a_n + 26$ on division by $32$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each later term comes from the one before it."
      },
      {
        "step": "Each term $a_{n+1}$ leaves the same remainder on division by $32$ as $a_n + 26$.",
        "reason": "Divisibility of integers, from arithmetic: a number and its remainder on division by $32$ differ by a multiple of $32$."
      },
      {
        "step": "Each term $a_n$ is the remainder of $2 + 26n$ on division by $32$, for every whole number $n$.",
        "reason": "Induction: true at $n = 0$, and by line 2 each step adds $26$ and keeps the remainder."
      },
      {
        "step": "The terms satisfy $a_{n+p} = a_n$ for every whole number $n$ exactly when $32$ divides $26p$.",
        "reason": "Divisibility of integers, from arithmetic: two whole numbers leave the same remainder on division by $32$ exactly when $32$ divides their difference, and $(2 + 26(n + p)) - (2 + 26n) = 26p$."
      },
      {
        "step": "$\\dfrac{26p}{32} = \\dfrac{13p}{16}$",
        "reason": "Cancelling a common factor: $26$ and $32$ share the factor $2$."
      },
      {
        "step": "The number $32$ divides $26p$ exactly when $16$ divides $p$.",
        "reason": "Fractions in lowest terms and the gcd, from arithmetic: $\\dfrac{13}{16}$ is in lowest terms, so $\\dfrac{13p}{16}$ is a whole number exactly when $16$ divides $p$."
      },
      {
        "step": "The least period is $16$.",
        "reason": "Period: the least whole number $p$ from $1$ up that $16$ divides is $16$."
      }
    ]
  },
  {
    "id": "t239-k1-p08",
    "topic": "periodic-sequences",
    "kind": "t239-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that the sequence has a period from $1$ to $256$, where $a_0 = 11$, $a_1 = 13$ and $a_{n+2}$ is the remainder of $13a_{n+1} + 7a_n$ on division by $16$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence has a period from $1$ to $256$, where $a_0 = 11$, $a_1 = 13$ and $a_{n+2}$ is the remainder of $13a_{n+1} + 7a_n$ on division by $16$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $a_1$ start the sequence and each later term comes from the two before it."
      },
      {
        "step": "Each term is one of the $16$ remainders $0, 1, \\dots, 15$.",
        "reason": "Divisibility of integers, from arithmetic: a remainder on division by $16$ is a whole number below $16$."
      },
      {
        "step": "The pair $(a_n, a_{n+1})$ is one of $256$ pairs.",
        "reason": "Multiplication as repeated addition, from arithmetic: $16$ choices for $a_n$, each with $16$ choices for $a_{n+1}$, make $16$ times $16$ pairs."
      },
      {
        "step": "The pair $(a_n, a_{n+1})$ fixes the next pair $(a_{n+1}, a_{n+2})$.",
        "reason": "Recursion: the rule gives $a_{n+2}$ from $a_n$ and $a_{n+1}$."
      },
      {
        "step": "$7 \\cdot 7 = 3 \\cdot 16 + 1$",
        "reason": "Divisibility of integers, from arithmetic: $7 \\cdot 7$ leaves the remainder $1$ on division by $16$."
      },
      {
        "step": "The number $7a_{n+2}$ leaves the same remainder on division by $16$ as $91a_{n+1} + 49a_n$.",
        "reason": "Multiplying both sides by the same number: the rule is multiplied by $7$."
      },
      {
        "step": "The number $7a_{n+2}$ leaves the same remainder on division by $16$ as $91a_{n+1} + a_n$.",
        "reason": "Divisibility of integers, from arithmetic: by line 5, $49a_n$ and $a_n$ differ by a multiple of $16$."
      },
      {
        "step": "Each term $a_n$ is the remainder of $7a_{n+2} + 5a_{n+1}$ on division by $16$.",
        "reason": "Adding the same number to both sides: $91a_{n+1}$ is taken from both sides, and $-91$ leaves the remainder $5$ on division by $16$."
      },
      {
        "step": "Each pair $(a_{n+1}, a_{n+2})$ follows from exactly one pair $(a_n, a_{n+1})$.",
        "reason": "Recursion: line 4 runs the step forwards and line 8 runs it backwards."
      },
      {
        "step": "The sequence has a period from $1$ to $256$.",
        "reason": "Pigeonhole on states: by lines 3 and 9 the pairs are states with one state before each, so they repeat from the start, and the pair fixes every later term."
      }
    ]
  },
  {
    "id": "t239-k1-p09",
    "topic": "periodic-sequences",
    "kind": "t239-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that the sequence has a period from $1$ to $144$, where $a_0 = 4$, $a_1 = 1$ and $a_{n+2}$ is the remainder of $9a_{n+1} + 11a_n$ on division by $12$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence has a period from $1$ to $144$, where $a_0 = 4$, $a_1 = 1$ and $a_{n+2}$ is the remainder of $9a_{n+1} + 11a_n$ on division by $12$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $a_1$ start the sequence and each later term comes from the two before it."
      },
      {
        "step": "Each term is one of the $12$ remainders $0, 1, \\dots, 11$.",
        "reason": "Divisibility of integers, from arithmetic: a remainder on division by $12$ is a whole number below $12$."
      },
      {
        "step": "The pair $(a_n, a_{n+1})$ is one of $144$ pairs.",
        "reason": "Multiplication as repeated addition, from arithmetic: $12$ choices for $a_n$, each with $12$ choices for $a_{n+1}$, make $12$ times $12$ pairs."
      },
      {
        "step": "The pair $(a_n, a_{n+1})$ fixes the next pair $(a_{n+1}, a_{n+2})$.",
        "reason": "Recursion: the rule gives $a_{n+2}$ from $a_n$ and $a_{n+1}$."
      },
      {
        "step": "$11 \\cdot 11 = 10 \\cdot 12 + 1$",
        "reason": "Divisibility of integers, from arithmetic: $11 \\cdot 11$ leaves the remainder $1$ on division by $12$."
      },
      {
        "step": "The number $11a_{n+2}$ leaves the same remainder on division by $12$ as $99a_{n+1} + 121a_n$.",
        "reason": "Multiplying both sides by the same number: the rule is multiplied by $11$."
      },
      {
        "step": "The number $11a_{n+2}$ leaves the same remainder on division by $12$ as $99a_{n+1} + a_n$.",
        "reason": "Divisibility of integers, from arithmetic: by line 5, $121a_n$ and $a_n$ differ by a multiple of $12$."
      },
      {
        "step": "Each term $a_n$ is the remainder of $11a_{n+2} + 9a_{n+1}$ on division by $12$.",
        "reason": "Adding the same number to both sides: $99a_{n+1}$ is taken from both sides, and $-99$ leaves the remainder $9$ on division by $12$."
      },
      {
        "step": "Each pair $(a_{n+1}, a_{n+2})$ follows from exactly one pair $(a_n, a_{n+1})$.",
        "reason": "Recursion: line 4 runs the step forwards and line 8 runs it backwards."
      },
      {
        "step": "The sequence has a period from $1$ to $144$.",
        "reason": "Pigeonhole on states: by lines 3 and 9 the pairs are states with one state before each, so they repeat from the start, and the pair fixes every later term."
      }
    ]
  },
  {
    "id": "t239-k1-p10",
    "topic": "periodic-sequences",
    "kind": "t239-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the least period of the sequence is $31$, where $a_0 = 52$ and $a_{n+1}$ is the remainder of $a_n + 15$ on division by $93$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the least period of the sequence is $31$, where $a_0 = 52$ and $a_{n+1}$ is the remainder of $a_n + 15$ on division by $93$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each later term comes from the one before it."
      },
      {
        "step": "Each term $a_{n+1}$ leaves the same remainder on division by $93$ as $a_n + 15$.",
        "reason": "Divisibility of integers, from arithmetic: a number and its remainder on division by $93$ differ by a multiple of $93$."
      },
      {
        "step": "Each term $a_n$ is the remainder of $52 + 15n$ on division by $93$, for every whole number $n$.",
        "reason": "Induction: true at $n = 0$, and by line 2 each step adds $15$ and keeps the remainder."
      },
      {
        "step": "The terms satisfy $a_{n+p} = a_n$ for every whole number $n$ exactly when $93$ divides $15p$.",
        "reason": "Divisibility of integers, from arithmetic: two whole numbers leave the same remainder on division by $93$ exactly when $93$ divides their difference, and $(52 + 15(n + p)) - (52 + 15n) = 15p$."
      },
      {
        "step": "$\\dfrac{15p}{93} = \\dfrac{5p}{31}$",
        "reason": "Cancelling a common factor: $15$ and $93$ share the factor $3$."
      },
      {
        "step": "The number $93$ divides $15p$ exactly when $31$ divides $p$.",
        "reason": "Fractions in lowest terms and the gcd, from arithmetic: $\\dfrac{5}{31}$ is in lowest terms, so $\\dfrac{5p}{31}$ is a whole number exactly when $31$ divides $p$."
      },
      {
        "step": "The least period is $31$.",
        "reason": "Period: the least whole number $p$ from $1$ up that $31$ divides is $31$."
      }
    ]
  },
  {
    "id": "t239-k1-p11",
    "topic": "periodic-sequences",
    "kind": "t239-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that the sequence has a period from $1$ to $625$, where $a_0 = 24$, $a_1 = 18$ and $a_{n+2}$ is the remainder of $24a_{n+1} + 14a_n$ on division by $25$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence has a period from $1$ to $625$, where $a_0 = 24$, $a_1 = 18$ and $a_{n+2}$ is the remainder of $24a_{n+1} + 14a_n$ on division by $25$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $a_1$ start the sequence and each later term comes from the two before it."
      },
      {
        "step": "Each term is one of the $25$ remainders $0, 1, \\dots, 24$.",
        "reason": "Divisibility of integers, from arithmetic: a remainder on division by $25$ is a whole number below $25$."
      },
      {
        "step": "The pair $(a_n, a_{n+1})$ is one of $625$ pairs.",
        "reason": "Multiplication as repeated addition, from arithmetic: $25$ choices for $a_n$, each with $25$ choices for $a_{n+1}$, make $25$ times $25$ pairs."
      },
      {
        "step": "The pair $(a_n, a_{n+1})$ fixes the next pair $(a_{n+1}, a_{n+2})$.",
        "reason": "Recursion: the rule gives $a_{n+2}$ from $a_n$ and $a_{n+1}$."
      },
      {
        "step": "$14 \\cdot 9 = 5 \\cdot 25 + 1$",
        "reason": "Divisibility of integers, from arithmetic: $14 \\cdot 9$ leaves the remainder $1$ on division by $25$."
      },
      {
        "step": "The number $9a_{n+2}$ leaves the same remainder on division by $25$ as $216a_{n+1} + 126a_n$.",
        "reason": "Multiplying both sides by the same number: the rule is multiplied by $9$."
      },
      {
        "step": "The number $9a_{n+2}$ leaves the same remainder on division by $25$ as $216a_{n+1} + a_n$.",
        "reason": "Divisibility of integers, from arithmetic: by line 5, $126a_n$ and $a_n$ differ by a multiple of $25$."
      },
      {
        "step": "Each term $a_n$ is the remainder of $9a_{n+2} + 9a_{n+1}$ on division by $25$.",
        "reason": "Adding the same number to both sides: $216a_{n+1}$ is taken from both sides, and $-216$ leaves the remainder $9$ on division by $25$."
      },
      {
        "step": "Each pair $(a_{n+1}, a_{n+2})$ follows from exactly one pair $(a_n, a_{n+1})$.",
        "reason": "Recursion: line 4 runs the step forwards and line 8 runs it backwards."
      },
      {
        "step": "The sequence has a period from $1$ to $625$.",
        "reason": "Pigeonhole on states: by lines 3 and 9 the pairs are states with one state before each, so they repeat from the start, and the pair fixes every later term."
      }
    ]
  },
  {
    "id": "t239-k1-p12",
    "topic": "periodic-sequences",
    "kind": "t239-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the least period of the sequence is $32$, where $a_0 = 44$ and $a_{n+1}$ is the remainder of $a_n + 14$ on division by $64$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the least period of the sequence is $32$, where $a_0 = 44$ and $a_{n+1}$ is the remainder of $a_n + 14$ on division by $64$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each later term comes from the one before it."
      },
      {
        "step": "Each term $a_{n+1}$ leaves the same remainder on division by $64$ as $a_n + 14$.",
        "reason": "Divisibility of integers, from arithmetic: a number and its remainder on division by $64$ differ by a multiple of $64$."
      },
      {
        "step": "Each term $a_n$ is the remainder of $44 + 14n$ on division by $64$, for every whole number $n$.",
        "reason": "Induction: true at $n = 0$, and by line 2 each step adds $14$ and keeps the remainder."
      },
      {
        "step": "The terms satisfy $a_{n+p} = a_n$ for every whole number $n$ exactly when $64$ divides $14p$.",
        "reason": "Divisibility of integers, from arithmetic: two whole numbers leave the same remainder on division by $64$ exactly when $64$ divides their difference, and $(44 + 14(n + p)) - (44 + 14n) = 14p$."
      },
      {
        "step": "$\\dfrac{14p}{64} = \\dfrac{7p}{32}$",
        "reason": "Cancelling a common factor: $14$ and $64$ share the factor $2$."
      },
      {
        "step": "The number $64$ divides $14p$ exactly when $32$ divides $p$.",
        "reason": "Fractions in lowest terms and the gcd, from arithmetic: $\\dfrac{7}{32}$ is in lowest terms, so $\\dfrac{7p}{32}$ is a whole number exactly when $32$ divides $p$."
      },
      {
        "step": "The least period is $32$.",
        "reason": "Period: the least whole number $p$ from $1$ up that $32$ divides is $32$."
      }
    ]
  },
  {
    "id": "t239-k1-p13",
    "topic": "periodic-sequences",
    "kind": "t239-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the least period of the sequence is $14$, where $a_0 = 34$ and $a_{n+1}$ is the remainder of $a_n + 45$ on division by $70$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the least period of the sequence is $14$, where $a_0 = 34$ and $a_{n+1}$ is the remainder of $a_n + 45$ on division by $70$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each later term comes from the one before it."
      },
      {
        "step": "Each term $a_{n+1}$ leaves the same remainder on division by $70$ as $a_n + 45$.",
        "reason": "Divisibility of integers, from arithmetic: a number and its remainder on division by $70$ differ by a multiple of $70$."
      },
      {
        "step": "Each term $a_n$ is the remainder of $34 + 45n$ on division by $70$, for every whole number $n$.",
        "reason": "Induction: true at $n = 0$, and by line 2 each step adds $45$ and keeps the remainder."
      },
      {
        "step": "The terms satisfy $a_{n+p} = a_n$ for every whole number $n$ exactly when $70$ divides $45p$.",
        "reason": "Divisibility of integers, from arithmetic: two whole numbers leave the same remainder on division by $70$ exactly when $70$ divides their difference, and $(34 + 45(n + p)) - (34 + 45n) = 45p$."
      },
      {
        "step": "$\\dfrac{45p}{70} = \\dfrac{9p}{14}$",
        "reason": "Cancelling a common factor: $45$ and $70$ share the factor $5$."
      },
      {
        "step": "The number $70$ divides $45p$ exactly when $14$ divides $p$.",
        "reason": "Fractions in lowest terms and the gcd, from arithmetic: $\\dfrac{9}{14}$ is in lowest terms, so $\\dfrac{9p}{14}$ is a whole number exactly when $14$ divides $p$."
      },
      {
        "step": "The least period is $14$.",
        "reason": "Period: the least whole number $p$ from $1$ up that $14$ divides is $14$."
      }
    ]
  },
  {
    "id": "t239-k1-p14",
    "topic": "periodic-sequences",
    "kind": "t239-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the least period of the sequence is $35$, where $a_0 = 60$ and $a_{n+1}$ is the remainder of $a_n + 64$ on division by $70$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the least period of the sequence is $35$, where $a_0 = 60$ and $a_{n+1}$ is the remainder of $a_n + 64$ on division by $70$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each later term comes from the one before it."
      },
      {
        "step": "Each term $a_{n+1}$ leaves the same remainder on division by $70$ as $a_n + 64$.",
        "reason": "Divisibility of integers, from arithmetic: a number and its remainder on division by $70$ differ by a multiple of $70$."
      },
      {
        "step": "Each term $a_n$ is the remainder of $60 + 64n$ on division by $70$, for every whole number $n$.",
        "reason": "Induction: true at $n = 0$, and by line 2 each step adds $64$ and keeps the remainder."
      },
      {
        "step": "The terms satisfy $a_{n+p} = a_n$ for every whole number $n$ exactly when $70$ divides $64p$.",
        "reason": "Divisibility of integers, from arithmetic: two whole numbers leave the same remainder on division by $70$ exactly when $70$ divides their difference, and $(60 + 64(n + p)) - (60 + 64n) = 64p$."
      },
      {
        "step": "$\\dfrac{64p}{70} = \\dfrac{32p}{35}$",
        "reason": "Cancelling a common factor: $64$ and $70$ share the factor $2$."
      },
      {
        "step": "The number $70$ divides $64p$ exactly when $35$ divides $p$.",
        "reason": "Fractions in lowest terms and the gcd, from arithmetic: $\\dfrac{32}{35}$ is in lowest terms, so $\\dfrac{32p}{35}$ is a whole number exactly when $35$ divides $p$."
      },
      {
        "step": "The least period is $35$.",
        "reason": "Period: the least whole number $p$ from $1$ up that $35$ divides is $35$."
      }
    ]
  },
  {
    "id": "t239-k2-p01",
    "topic": "periodic-sequences",
    "kind": "t239-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the sequence is not periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{183}}{18}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence is not periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{183}}{18}$ for every whole number $n$.",
        "reason": "Periodic sequence: this is the problem as given; each term is the fractional part of $n$ times $\\dfrac{\\sqrt{183}}{18}$."
      },
      {
        "step": "For a whole number $p$ from $1$ up, $a_{n+p} = a_n$ for every whole number $n$ exactly when $\\dfrac{p\\sqrt{183}}{18}$ is an integer.",
        "reason": "Fractional part: two numbers have the same fractional part exactly when their difference is an integer, and $\\dfrac{(n + p)\\sqrt{183}}{18} - \\dfrac{n\\sqrt{183}}{18} = \\dfrac{p\\sqrt{183}}{18}$."
      },
      {
        "step": "If $\\dfrac{p\\sqrt{183}}{18} = N$ for an integer $N$, then $\\sqrt{183} = \\dfrac{18N}{p}$, a rational number.",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{18}{p}$."
      },
      {
        "step": "If $\\sqrt{183} = \\dfrac{s}{t}$ for whole numbers $s$ and $t$ from $1$ up, then $p = 18t$ gives $\\dfrac{p\\sqrt{183}}{18} = s$, an integer.",
        "reason": "Substituting a value: $p = 18t$ and $\\sqrt{183} = \\dfrac{s}{t}$."
      },
      {
        "step": "So the sequence has a period exactly when $\\sqrt{183}$ is rational.",
        "reason": "Period: lines 2 to 4."
      },
      {
        "step": "The root $\\sqrt{183}$ is rational exactly when $183$ is a perfect square.",
        "reason": "Irrational square roots, from arithmetic: the square root of a whole number is rational exactly when the number is a perfect square."
      },
      {
        "step": "$13^2 < 183 < 14^2$",
        "reason": "Perfect square, from arithmetic: $183$ lies strictly between the squares of two neighbouring whole numbers, so it is the square of no whole number."
      },
      {
        "step": "So the sequence is not periodic.",
        "reason": "Period: lines 5 to 7."
      }
    ]
  },
  {
    "id": "t239-k2-p02",
    "topic": "periodic-sequences",
    "kind": "t239-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the sequence is not periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{78}}{20}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence is not periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{78}}{20}$ for every whole number $n$.",
        "reason": "Periodic sequence: this is the problem as given; each term is the fractional part of $n$ times $\\dfrac{\\sqrt{78}}{20}$."
      },
      {
        "step": "For a whole number $p$ from $1$ up, $a_{n+p} = a_n$ for every whole number $n$ exactly when $\\dfrac{p\\sqrt{78}}{20}$ is an integer.",
        "reason": "Fractional part: two numbers have the same fractional part exactly when their difference is an integer, and $\\dfrac{(n + p)\\sqrt{78}}{20} - \\dfrac{n\\sqrt{78}}{20} = \\dfrac{p\\sqrt{78}}{20}$."
      },
      {
        "step": "If $\\dfrac{p\\sqrt{78}}{20} = N$ for an integer $N$, then $\\sqrt{78} = \\dfrac{20N}{p}$, a rational number.",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{20}{p}$."
      },
      {
        "step": "If $\\sqrt{78} = \\dfrac{s}{t}$ for whole numbers $s$ and $t$ from $1$ up, then $p = 20t$ gives $\\dfrac{p\\sqrt{78}}{20} = s$, an integer.",
        "reason": "Substituting a value: $p = 20t$ and $\\sqrt{78} = \\dfrac{s}{t}$."
      },
      {
        "step": "So the sequence has a period exactly when $\\sqrt{78}$ is rational.",
        "reason": "Period: lines 2 to 4."
      },
      {
        "step": "The root $\\sqrt{78}$ is rational exactly when $78$ is a perfect square.",
        "reason": "Irrational square roots, from arithmetic: the square root of a whole number is rational exactly when the number is a perfect square."
      },
      {
        "step": "$8^2 < 78 < 9^2$",
        "reason": "Perfect square, from arithmetic: $78$ lies strictly between the squares of two neighbouring whole numbers, so it is the square of no whole number."
      },
      {
        "step": "So the sequence is not periodic.",
        "reason": "Period: lines 5 to 7."
      }
    ]
  },
  {
    "id": "t239-k2-p03",
    "topic": "periodic-sequences",
    "kind": "t239-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the sequence is not periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{299}}{3}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence is not periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{299}}{3}$ for every whole number $n$.",
        "reason": "Periodic sequence: this is the problem as given; each term is the fractional part of $n$ times $\\dfrac{\\sqrt{299}}{3}$."
      },
      {
        "step": "For a whole number $p$ from $1$ up, $a_{n+p} = a_n$ for every whole number $n$ exactly when $\\dfrac{p\\sqrt{299}}{3}$ is an integer.",
        "reason": "Fractional part: two numbers have the same fractional part exactly when their difference is an integer, and $\\dfrac{(n + p)\\sqrt{299}}{3} - \\dfrac{n\\sqrt{299}}{3} = \\dfrac{p\\sqrt{299}}{3}$."
      },
      {
        "step": "If $\\dfrac{p\\sqrt{299}}{3} = N$ for an integer $N$, then $\\sqrt{299} = \\dfrac{3N}{p}$, a rational number.",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{3}{p}$."
      },
      {
        "step": "If $\\sqrt{299} = \\dfrac{s}{t}$ for whole numbers $s$ and $t$ from $1$ up, then $p = 3t$ gives $\\dfrac{p\\sqrt{299}}{3} = s$, an integer.",
        "reason": "Substituting a value: $p = 3t$ and $\\sqrt{299} = \\dfrac{s}{t}$."
      },
      {
        "step": "So the sequence has a period exactly when $\\sqrt{299}$ is rational.",
        "reason": "Period: lines 2 to 4."
      },
      {
        "step": "The root $\\sqrt{299}$ is rational exactly when $299$ is a perfect square.",
        "reason": "Irrational square roots, from arithmetic: the square root of a whole number is rational exactly when the number is a perfect square."
      },
      {
        "step": "$17^2 < 299 < 18^2$",
        "reason": "Perfect square, from arithmetic: $299$ lies strictly between the squares of two neighbouring whole numbers, so it is the square of no whole number."
      },
      {
        "step": "So the sequence is not periodic.",
        "reason": "Period: lines 5 to 7."
      }
    ]
  },
  {
    "id": "t239-k2-p04",
    "topic": "periodic-sequences",
    "kind": "t239-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the sequence is not periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{295}}{22}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence is not periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{295}}{22}$ for every whole number $n$.",
        "reason": "Periodic sequence: this is the problem as given; each term is the fractional part of $n$ times $\\dfrac{\\sqrt{295}}{22}$."
      },
      {
        "step": "For a whole number $p$ from $1$ up, $a_{n+p} = a_n$ for every whole number $n$ exactly when $\\dfrac{p\\sqrt{295}}{22}$ is an integer.",
        "reason": "Fractional part: two numbers have the same fractional part exactly when their difference is an integer, and $\\dfrac{(n + p)\\sqrt{295}}{22} - \\dfrac{n\\sqrt{295}}{22} = \\dfrac{p\\sqrt{295}}{22}$."
      },
      {
        "step": "If $\\dfrac{p\\sqrt{295}}{22} = N$ for an integer $N$, then $\\sqrt{295} = \\dfrac{22N}{p}$, a rational number.",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{22}{p}$."
      },
      {
        "step": "If $\\sqrt{295} = \\dfrac{s}{t}$ for whole numbers $s$ and $t$ from $1$ up, then $p = 22t$ gives $\\dfrac{p\\sqrt{295}}{22} = s$, an integer.",
        "reason": "Substituting a value: $p = 22t$ and $\\sqrt{295} = \\dfrac{s}{t}$."
      },
      {
        "step": "So the sequence has a period exactly when $\\sqrt{295}$ is rational.",
        "reason": "Period: lines 2 to 4."
      },
      {
        "step": "The root $\\sqrt{295}$ is rational exactly when $295$ is a perfect square.",
        "reason": "Irrational square roots, from arithmetic: the square root of a whole number is rational exactly when the number is a perfect square."
      },
      {
        "step": "$17^2 < 295 < 18^2$",
        "reason": "Perfect square, from arithmetic: $295$ lies strictly between the squares of two neighbouring whole numbers, so it is the square of no whole number."
      },
      {
        "step": "So the sequence is not periodic.",
        "reason": "Period: lines 5 to 7."
      }
    ]
  },
  {
    "id": "t239-k2-p05",
    "topic": "periodic-sequences",
    "kind": "t239-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the sequence is not periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{281}}{11}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence is not periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{281}}{11}$ for every whole number $n$.",
        "reason": "Periodic sequence: this is the problem as given; each term is the fractional part of $n$ times $\\dfrac{\\sqrt{281}}{11}$."
      },
      {
        "step": "For a whole number $p$ from $1$ up, $a_{n+p} = a_n$ for every whole number $n$ exactly when $\\dfrac{p\\sqrt{281}}{11}$ is an integer.",
        "reason": "Fractional part: two numbers have the same fractional part exactly when their difference is an integer, and $\\dfrac{(n + p)\\sqrt{281}}{11} - \\dfrac{n\\sqrt{281}}{11} = \\dfrac{p\\sqrt{281}}{11}$."
      },
      {
        "step": "If $\\dfrac{p\\sqrt{281}}{11} = N$ for an integer $N$, then $\\sqrt{281} = \\dfrac{11N}{p}$, a rational number.",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{11}{p}$."
      },
      {
        "step": "If $\\sqrt{281} = \\dfrac{s}{t}$ for whole numbers $s$ and $t$ from $1$ up, then $p = 11t$ gives $\\dfrac{p\\sqrt{281}}{11} = s$, an integer.",
        "reason": "Substituting a value: $p = 11t$ and $\\sqrt{281} = \\dfrac{s}{t}$."
      },
      {
        "step": "So the sequence has a period exactly when $\\sqrt{281}$ is rational.",
        "reason": "Period: lines 2 to 4."
      },
      {
        "step": "The root $\\sqrt{281}$ is rational exactly when $281$ is a perfect square.",
        "reason": "Irrational square roots, from arithmetic: the square root of a whole number is rational exactly when the number is a perfect square."
      },
      {
        "step": "$16^2 < 281 < 17^2$",
        "reason": "Perfect square, from arithmetic: $281$ lies strictly between the squares of two neighbouring whole numbers, so it is the square of no whole number."
      },
      {
        "step": "So the sequence is not periodic.",
        "reason": "Period: lines 5 to 7."
      }
    ]
  },
  {
    "id": "t239-k2-p06",
    "topic": "periodic-sequences",
    "kind": "t239-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the sequence is periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{400}}{39}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence is periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{400}}{39}$ for every whole number $n$.",
        "reason": "Periodic sequence: this is the problem as given; each term is the fractional part of $n$ times $\\dfrac{\\sqrt{400}}{39}$."
      },
      {
        "step": "For a whole number $p$ from $1$ up, $a_{n+p} = a_n$ for every whole number $n$ exactly when $\\dfrac{p\\sqrt{400}}{39}$ is an integer.",
        "reason": "Fractional part: two numbers have the same fractional part exactly when their difference is an integer, and $\\dfrac{(n + p)\\sqrt{400}}{39} - \\dfrac{n\\sqrt{400}}{39} = \\dfrac{p\\sqrt{400}}{39}$."
      },
      {
        "step": "If $\\dfrac{p\\sqrt{400}}{39} = N$ for an integer $N$, then $\\sqrt{400} = \\dfrac{39N}{p}$, a rational number.",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{39}{p}$."
      },
      {
        "step": "If $\\sqrt{400} = \\dfrac{s}{t}$ for whole numbers $s$ and $t$ from $1$ up, then $p = 39t$ gives $\\dfrac{p\\sqrt{400}}{39} = s$, an integer.",
        "reason": "Substituting a value: $p = 39t$ and $\\sqrt{400} = \\dfrac{s}{t}$."
      },
      {
        "step": "So the sequence has a period exactly when $\\sqrt{400}$ is rational.",
        "reason": "Period: lines 2 to 4."
      },
      {
        "step": "The root $\\sqrt{400}$ is rational exactly when $400$ is a perfect square.",
        "reason": "Irrational square roots, from arithmetic: the square root of a whole number is rational exactly when the number is a perfect square."
      },
      {
        "step": "$400 = 20^2$",
        "reason": "Perfect square, from arithmetic: $400$ is the square of the whole number $20$."
      },
      {
        "step": "So the sequence is periodic.",
        "reason": "Period: lines 5 to 7."
      }
    ]
  },
  {
    "id": "t239-k2-p07",
    "topic": "periodic-sequences",
    "kind": "t239-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the sequence is periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{1089}}{24}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence is periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{1089}}{24}$ for every whole number $n$.",
        "reason": "Periodic sequence: this is the problem as given; each term is the fractional part of $n$ times $\\dfrac{\\sqrt{1089}}{24}$."
      },
      {
        "step": "For a whole number $p$ from $1$ up, $a_{n+p} = a_n$ for every whole number $n$ exactly when $\\dfrac{p\\sqrt{1089}}{24}$ is an integer.",
        "reason": "Fractional part: two numbers have the same fractional part exactly when their difference is an integer, and $\\dfrac{(n + p)\\sqrt{1089}}{24} - \\dfrac{n\\sqrt{1089}}{24} = \\dfrac{p\\sqrt{1089}}{24}$."
      },
      {
        "step": "If $\\dfrac{p\\sqrt{1089}}{24} = N$ for an integer $N$, then $\\sqrt{1089} = \\dfrac{24N}{p}$, a rational number.",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{24}{p}$."
      },
      {
        "step": "If $\\sqrt{1089} = \\dfrac{s}{t}$ for whole numbers $s$ and $t$ from $1$ up, then $p = 24t$ gives $\\dfrac{p\\sqrt{1089}}{24} = s$, an integer.",
        "reason": "Substituting a value: $p = 24t$ and $\\sqrt{1089} = \\dfrac{s}{t}$."
      },
      {
        "step": "So the sequence has a period exactly when $\\sqrt{1089}$ is rational.",
        "reason": "Period: lines 2 to 4."
      },
      {
        "step": "The root $\\sqrt{1089}$ is rational exactly when $1089$ is a perfect square.",
        "reason": "Irrational square roots, from arithmetic: the square root of a whole number is rational exactly when the number is a perfect square."
      },
      {
        "step": "$1089 = 33^2$",
        "reason": "Perfect square, from arithmetic: $1089$ is the square of the whole number $33$."
      },
      {
        "step": "So the sequence is periodic.",
        "reason": "Period: lines 5 to 7."
      }
    ]
  },
  {
    "id": "t239-k2-p08",
    "topic": "periodic-sequences",
    "kind": "t239-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the sequence is not periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{38}}{15}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence is not periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{38}}{15}$ for every whole number $n$.",
        "reason": "Periodic sequence: this is the problem as given; each term is the fractional part of $n$ times $\\dfrac{\\sqrt{38}}{15}$."
      },
      {
        "step": "For a whole number $p$ from $1$ up, $a_{n+p} = a_n$ for every whole number $n$ exactly when $\\dfrac{p\\sqrt{38}}{15}$ is an integer.",
        "reason": "Fractional part: two numbers have the same fractional part exactly when their difference is an integer, and $\\dfrac{(n + p)\\sqrt{38}}{15} - \\dfrac{n\\sqrt{38}}{15} = \\dfrac{p\\sqrt{38}}{15}$."
      },
      {
        "step": "If $\\dfrac{p\\sqrt{38}}{15} = N$ for an integer $N$, then $\\sqrt{38} = \\dfrac{15N}{p}$, a rational number.",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{15}{p}$."
      },
      {
        "step": "If $\\sqrt{38} = \\dfrac{s}{t}$ for whole numbers $s$ and $t$ from $1$ up, then $p = 15t$ gives $\\dfrac{p\\sqrt{38}}{15} = s$, an integer.",
        "reason": "Substituting a value: $p = 15t$ and $\\sqrt{38} = \\dfrac{s}{t}$."
      },
      {
        "step": "So the sequence has a period exactly when $\\sqrt{38}$ is rational.",
        "reason": "Period: lines 2 to 4."
      },
      {
        "step": "The root $\\sqrt{38}$ is rational exactly when $38$ is a perfect square.",
        "reason": "Irrational square roots, from arithmetic: the square root of a whole number is rational exactly when the number is a perfect square."
      },
      {
        "step": "$6^2 < 38 < 7^2$",
        "reason": "Perfect square, from arithmetic: $38$ lies strictly between the squares of two neighbouring whole numbers, so it is the square of no whole number."
      },
      {
        "step": "So the sequence is not periodic.",
        "reason": "Period: lines 5 to 7."
      }
    ]
  },
  {
    "id": "t239-k2-p09",
    "topic": "periodic-sequences",
    "kind": "t239-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the sequence is not periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{114}}{32}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence is not periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{114}}{32}$ for every whole number $n$.",
        "reason": "Periodic sequence: this is the problem as given; each term is the fractional part of $n$ times $\\dfrac{\\sqrt{114}}{32}$."
      },
      {
        "step": "For a whole number $p$ from $1$ up, $a_{n+p} = a_n$ for every whole number $n$ exactly when $\\dfrac{p\\sqrt{114}}{32}$ is an integer.",
        "reason": "Fractional part: two numbers have the same fractional part exactly when their difference is an integer, and $\\dfrac{(n + p)\\sqrt{114}}{32} - \\dfrac{n\\sqrt{114}}{32} = \\dfrac{p\\sqrt{114}}{32}$."
      },
      {
        "step": "If $\\dfrac{p\\sqrt{114}}{32} = N$ for an integer $N$, then $\\sqrt{114} = \\dfrac{32N}{p}$, a rational number.",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{32}{p}$."
      },
      {
        "step": "If $\\sqrt{114} = \\dfrac{s}{t}$ for whole numbers $s$ and $t$ from $1$ up, then $p = 32t$ gives $\\dfrac{p\\sqrt{114}}{32} = s$, an integer.",
        "reason": "Substituting a value: $p = 32t$ and $\\sqrt{114} = \\dfrac{s}{t}$."
      },
      {
        "step": "So the sequence has a period exactly when $\\sqrt{114}$ is rational.",
        "reason": "Period: lines 2 to 4."
      },
      {
        "step": "The root $\\sqrt{114}$ is rational exactly when $114$ is a perfect square.",
        "reason": "Irrational square roots, from arithmetic: the square root of a whole number is rational exactly when the number is a perfect square."
      },
      {
        "step": "$10^2 < 114 < 11^2$",
        "reason": "Perfect square, from arithmetic: $114$ lies strictly between the squares of two neighbouring whole numbers, so it is the square of no whole number."
      },
      {
        "step": "So the sequence is not periodic.",
        "reason": "Period: lines 5 to 7."
      }
    ]
  },
  {
    "id": "t239-k2-p10",
    "topic": "periodic-sequences",
    "kind": "t239-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the sequence is periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{1764}}{16}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence is periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{1764}}{16}$ for every whole number $n$.",
        "reason": "Periodic sequence: this is the problem as given; each term is the fractional part of $n$ times $\\dfrac{\\sqrt{1764}}{16}$."
      },
      {
        "step": "For a whole number $p$ from $1$ up, $a_{n+p} = a_n$ for every whole number $n$ exactly when $\\dfrac{p\\sqrt{1764}}{16}$ is an integer.",
        "reason": "Fractional part: two numbers have the same fractional part exactly when their difference is an integer, and $\\dfrac{(n + p)\\sqrt{1764}}{16} - \\dfrac{n\\sqrt{1764}}{16} = \\dfrac{p\\sqrt{1764}}{16}$."
      },
      {
        "step": "If $\\dfrac{p\\sqrt{1764}}{16} = N$ for an integer $N$, then $\\sqrt{1764} = \\dfrac{16N}{p}$, a rational number.",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{16}{p}$."
      },
      {
        "step": "If $\\sqrt{1764} = \\dfrac{s}{t}$ for whole numbers $s$ and $t$ from $1$ up, then $p = 16t$ gives $\\dfrac{p\\sqrt{1764}}{16} = s$, an integer.",
        "reason": "Substituting a value: $p = 16t$ and $\\sqrt{1764} = \\dfrac{s}{t}$."
      },
      {
        "step": "So the sequence has a period exactly when $\\sqrt{1764}$ is rational.",
        "reason": "Period: lines 2 to 4."
      },
      {
        "step": "The root $\\sqrt{1764}$ is rational exactly when $1764$ is a perfect square.",
        "reason": "Irrational square roots, from arithmetic: the square root of a whole number is rational exactly when the number is a perfect square."
      },
      {
        "step": "$1764 = 42^2$",
        "reason": "Perfect square, from arithmetic: $1764$ is the square of the whole number $42$."
      },
      {
        "step": "So the sequence is periodic.",
        "reason": "Period: lines 5 to 7."
      }
    ]
  },
  {
    "id": "t239-k2-p11",
    "topic": "periodic-sequences",
    "kind": "t239-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the sequence is periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{1849}}{4}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence is periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{1849}}{4}$ for every whole number $n$.",
        "reason": "Periodic sequence: this is the problem as given; each term is the fractional part of $n$ times $\\dfrac{\\sqrt{1849}}{4}$."
      },
      {
        "step": "For a whole number $p$ from $1$ up, $a_{n+p} = a_n$ for every whole number $n$ exactly when $\\dfrac{p\\sqrt{1849}}{4}$ is an integer.",
        "reason": "Fractional part: two numbers have the same fractional part exactly when their difference is an integer, and $\\dfrac{(n + p)\\sqrt{1849}}{4} - \\dfrac{n\\sqrt{1849}}{4} = \\dfrac{p\\sqrt{1849}}{4}$."
      },
      {
        "step": "If $\\dfrac{p\\sqrt{1849}}{4} = N$ for an integer $N$, then $\\sqrt{1849} = \\dfrac{4N}{p}$, a rational number.",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{4}{p}$."
      },
      {
        "step": "If $\\sqrt{1849} = \\dfrac{s}{t}$ for whole numbers $s$ and $t$ from $1$ up, then $p = 4t$ gives $\\dfrac{p\\sqrt{1849}}{4} = s$, an integer.",
        "reason": "Substituting a value: $p = 4t$ and $\\sqrt{1849} = \\dfrac{s}{t}$."
      },
      {
        "step": "So the sequence has a period exactly when $\\sqrt{1849}$ is rational.",
        "reason": "Period: lines 2 to 4."
      },
      {
        "step": "The root $\\sqrt{1849}$ is rational exactly when $1849$ is a perfect square.",
        "reason": "Irrational square roots, from arithmetic: the square root of a whole number is rational exactly when the number is a perfect square."
      },
      {
        "step": "$1849 = 43^2$",
        "reason": "Perfect square, from arithmetic: $1849$ is the square of the whole number $43$."
      },
      {
        "step": "So the sequence is periodic.",
        "reason": "Period: lines 5 to 7."
      }
    ]
  },
  {
    "id": "t239-k2-p12",
    "topic": "periodic-sequences",
    "kind": "t239-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the sequence is not periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{61}}{2}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence is not periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{61}}{2}$ for every whole number $n$.",
        "reason": "Periodic sequence: this is the problem as given; each term is the fractional part of $n$ times $\\dfrac{\\sqrt{61}}{2}$."
      },
      {
        "step": "For a whole number $p$ from $1$ up, $a_{n+p} = a_n$ for every whole number $n$ exactly when $\\dfrac{p\\sqrt{61}}{2}$ is an integer.",
        "reason": "Fractional part: two numbers have the same fractional part exactly when their difference is an integer, and $\\dfrac{(n + p)\\sqrt{61}}{2} - \\dfrac{n\\sqrt{61}}{2} = \\dfrac{p\\sqrt{61}}{2}$."
      },
      {
        "step": "If $\\dfrac{p\\sqrt{61}}{2} = N$ for an integer $N$, then $\\sqrt{61} = \\dfrac{2N}{p}$, a rational number.",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{2}{p}$."
      },
      {
        "step": "If $\\sqrt{61} = \\dfrac{s}{t}$ for whole numbers $s$ and $t$ from $1$ up, then $p = 2t$ gives $\\dfrac{p\\sqrt{61}}{2} = s$, an integer.",
        "reason": "Substituting a value: $p = 2t$ and $\\sqrt{61} = \\dfrac{s}{t}$."
      },
      {
        "step": "So the sequence has a period exactly when $\\sqrt{61}$ is rational.",
        "reason": "Period: lines 2 to 4."
      },
      {
        "step": "The root $\\sqrt{61}$ is rational exactly when $61$ is a perfect square.",
        "reason": "Irrational square roots, from arithmetic: the square root of a whole number is rational exactly when the number is a perfect square."
      },
      {
        "step": "$7^2 < 61 < 8^2$",
        "reason": "Perfect square, from arithmetic: $61$ lies strictly between the squares of two neighbouring whole numbers, so it is the square of no whole number."
      },
      {
        "step": "So the sequence is not periodic.",
        "reason": "Period: lines 5 to 7."
      }
    ]
  },
  {
    "id": "t239-k2-p13",
    "topic": "periodic-sequences",
    "kind": "t239-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the sequence is not periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{258}}{37}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence is not periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{258}}{37}$ for every whole number $n$.",
        "reason": "Periodic sequence: this is the problem as given; each term is the fractional part of $n$ times $\\dfrac{\\sqrt{258}}{37}$."
      },
      {
        "step": "For a whole number $p$ from $1$ up, $a_{n+p} = a_n$ for every whole number $n$ exactly when $\\dfrac{p\\sqrt{258}}{37}$ is an integer.",
        "reason": "Fractional part: two numbers have the same fractional part exactly when their difference is an integer, and $\\dfrac{(n + p)\\sqrt{258}}{37} - \\dfrac{n\\sqrt{258}}{37} = \\dfrac{p\\sqrt{258}}{37}$."
      },
      {
        "step": "If $\\dfrac{p\\sqrt{258}}{37} = N$ for an integer $N$, then $\\sqrt{258} = \\dfrac{37N}{p}$, a rational number.",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{37}{p}$."
      },
      {
        "step": "If $\\sqrt{258} = \\dfrac{s}{t}$ for whole numbers $s$ and $t$ from $1$ up, then $p = 37t$ gives $\\dfrac{p\\sqrt{258}}{37} = s$, an integer.",
        "reason": "Substituting a value: $p = 37t$ and $\\sqrt{258} = \\dfrac{s}{t}$."
      },
      {
        "step": "So the sequence has a period exactly when $\\sqrt{258}$ is rational.",
        "reason": "Period: lines 2 to 4."
      },
      {
        "step": "The root $\\sqrt{258}$ is rational exactly when $258$ is a perfect square.",
        "reason": "Irrational square roots, from arithmetic: the square root of a whole number is rational exactly when the number is a perfect square."
      },
      {
        "step": "$16^2 < 258 < 17^2$",
        "reason": "Perfect square, from arithmetic: $258$ lies strictly between the squares of two neighbouring whole numbers, so it is the square of no whole number."
      },
      {
        "step": "So the sequence is not periodic.",
        "reason": "Period: lines 5 to 7."
      }
    ]
  },
  {
    "id": "t239-k2-p14",
    "topic": "periodic-sequences",
    "kind": "t239-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the sequence is periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{784}}{25}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence is periodic, where $a_n$ is the fractional part of $\\dfrac{n\\sqrt{784}}{25}$ for every whole number $n$.",
        "reason": "Periodic sequence: this is the problem as given; each term is the fractional part of $n$ times $\\dfrac{\\sqrt{784}}{25}$."
      },
      {
        "step": "For a whole number $p$ from $1$ up, $a_{n+p} = a_n$ for every whole number $n$ exactly when $\\dfrac{p\\sqrt{784}}{25}$ is an integer.",
        "reason": "Fractional part: two numbers have the same fractional part exactly when their difference is an integer, and $\\dfrac{(n + p)\\sqrt{784}}{25} - \\dfrac{n\\sqrt{784}}{25} = \\dfrac{p\\sqrt{784}}{25}$."
      },
      {
        "step": "If $\\dfrac{p\\sqrt{784}}{25} = N$ for an integer $N$, then $\\sqrt{784} = \\dfrac{25N}{p}$, a rational number.",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $\\dfrac{25}{p}$."
      },
      {
        "step": "If $\\sqrt{784} = \\dfrac{s}{t}$ for whole numbers $s$ and $t$ from $1$ up, then $p = 25t$ gives $\\dfrac{p\\sqrt{784}}{25} = s$, an integer.",
        "reason": "Substituting a value: $p = 25t$ and $\\sqrt{784} = \\dfrac{s}{t}$."
      },
      {
        "step": "So the sequence has a period exactly when $\\sqrt{784}$ is rational.",
        "reason": "Period: lines 2 to 4."
      },
      {
        "step": "The root $\\sqrt{784}$ is rational exactly when $784$ is a perfect square.",
        "reason": "Irrational square roots, from arithmetic: the square root of a whole number is rational exactly when the number is a perfect square."
      },
      {
        "step": "$784 = 28^2$",
        "reason": "Perfect square, from arithmetic: $784$ is the square of the whole number $28$."
      },
      {
        "step": "So the sequence is periodic.",
        "reason": "Period: lines 5 to 7."
      }
    ]
  },
  {
    "id": "t239-k3-p01",
    "topic": "periodic-sequences",
    "kind": "t239-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{74} = -\\dfrac{270}{7}$, where $a_0 = -7$, $a_1 = 9$ and $a_{n+2} = \\dfrac{30a_{n+1}}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{74} = -\\dfrac{270}{7}$, where $a_0 = -7$, $a_1 = 9$ and $a_{n+2} = \\dfrac{30a_{n+1}}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $a_1$ start the sequence and the rule gives every later term."
      },
      {
        "step": "$a_2 = \\dfrac{30 \\cdot 9}{(-7)} = -\\dfrac{270}{7}$",
        "reason": "Substituting a value: $n = 0$ in the rule."
      },
      {
        "step": "$a_3 = \\dfrac{30 \\cdot \\left(-\\dfrac{270}{7}\\right)}{9} = -\\dfrac{900}{7}$",
        "reason": "Substituting a value: $n = 1$ in the rule."
      },
      {
        "step": "$a_4 = \\dfrac{30 \\cdot \\left(-\\dfrac{900}{7}\\right)}{\\left(-\\dfrac{270}{7}\\right)} = 100$",
        "reason": "Substituting a value: $n = 2$ in the rule."
      },
      {
        "step": "$a_5 = \\dfrac{30 \\cdot 100}{\\left(-\\dfrac{900}{7}\\right)} = -\\dfrac{70}{3}$",
        "reason": "Substituting a value: $n = 3$ in the rule."
      },
      {
        "step": "$a_6 = \\dfrac{30 \\cdot \\left(-\\dfrac{70}{3}\\right)}{100} = -7$",
        "reason": "Substituting a value: $n = 4$ in the rule."
      },
      {
        "step": "$a_7 = \\dfrac{30 \\cdot (-7)}{\\left(-\\dfrac{70}{3}\\right)} = 9$",
        "reason": "Substituting a value: $n = 5$ in the rule."
      },
      {
        "step": "So $a_{n+6} = a_n$ for every whole number $n$.",
        "reason": "Period: lines 6 and 7 give $a_6 = a_0$ and $a_7 = a_1$, and two neighbouring terms fix every later term, so $6$ is a period."
      },
      {
        "step": "$74 = 6 \\cdot 12 + 2$",
        "reason": "Divisibility of integers, from arithmetic: $74$ leaves the remainder $2$ on division by $6$."
      },
      {
        "step": "$a_{74} = a_2$",
        "reason": "Period: $12$ steps of $6$ lead from $a_2$ to $a_{74}$."
      },
      {
        "step": "$a_{74} = -\\dfrac{270}{7}$",
        "reason": "Transitive property: line 2 gives $a_2$."
      }
    ]
  },
  {
    "id": "t239-k3-p02",
    "topic": "periodic-sequences",
    "kind": "t239-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{597} = -\\dfrac{100}{11}$, where $a_0 = -11$, $a_1 = -3$ and $a_{n+2} = \\dfrac{10a_{n+1}}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{597} = -\\dfrac{100}{11}$, where $a_0 = -11$, $a_1 = -3$ and $a_{n+2} = \\dfrac{10a_{n+1}}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $a_1$ start the sequence and the rule gives every later term."
      },
      {
        "step": "$a_2 = \\dfrac{10 \\cdot (-3)}{(-11)} = \\dfrac{30}{11}$",
        "reason": "Substituting a value: $n = 0$ in the rule."
      },
      {
        "step": "$a_3 = \\dfrac{10 \\cdot \\dfrac{30}{11}}{(-3)} = -\\dfrac{100}{11}$",
        "reason": "Substituting a value: $n = 1$ in the rule."
      },
      {
        "step": "$a_4 = \\dfrac{10 \\cdot \\left(-\\dfrac{100}{11}\\right)}{\\dfrac{30}{11}} = -\\dfrac{100}{3}$",
        "reason": "Substituting a value: $n = 2$ in the rule."
      },
      {
        "step": "$a_5 = \\dfrac{10 \\cdot \\left(-\\dfrac{100}{3}\\right)}{\\left(-\\dfrac{100}{11}\\right)} = \\dfrac{110}{3}$",
        "reason": "Substituting a value: $n = 3$ in the rule."
      },
      {
        "step": "$a_6 = \\dfrac{10 \\cdot \\dfrac{110}{3}}{\\left(-\\dfrac{100}{3}\\right)} = -11$",
        "reason": "Substituting a value: $n = 4$ in the rule."
      },
      {
        "step": "$a_7 = \\dfrac{10 \\cdot (-11)}{\\dfrac{110}{3}} = -3$",
        "reason": "Substituting a value: $n = 5$ in the rule."
      },
      {
        "step": "So $a_{n+6} = a_n$ for every whole number $n$.",
        "reason": "Period: lines 6 and 7 give $a_6 = a_0$ and $a_7 = a_1$, and two neighbouring terms fix every later term, so $6$ is a period."
      },
      {
        "step": "$597 = 6 \\cdot 99 + 3$",
        "reason": "Divisibility of integers, from arithmetic: $597$ leaves the remainder $3$ on division by $6$."
      },
      {
        "step": "$a_{597} = a_3$",
        "reason": "Period: $99$ steps of $6$ lead from $a_3$ to $a_{597}$."
      },
      {
        "step": "$a_{597} = -\\dfrac{100}{11}$",
        "reason": "Transitive property: line 3 gives $a_3$."
      }
    ]
  },
  {
    "id": "t239-k3-p03",
    "topic": "periodic-sequences",
    "kind": "t239-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{353} = -\\dfrac{120}{11}$, where $a_0 = 5$, $a_1 = -11$ and $a_{n+2} = \\dfrac{24a_{n+1}}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{353} = -\\dfrac{120}{11}$, where $a_0 = 5$, $a_1 = -11$ and $a_{n+2} = \\dfrac{24a_{n+1}}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $a_1$ start the sequence and the rule gives every later term."
      },
      {
        "step": "$a_2 = \\dfrac{24 \\cdot (-11)}{5} = -\\dfrac{264}{5}$",
        "reason": "Substituting a value: $n = 0$ in the rule."
      },
      {
        "step": "$a_3 = \\dfrac{24 \\cdot \\left(-\\dfrac{264}{5}\\right)}{(-11)} = \\dfrac{576}{5}$",
        "reason": "Substituting a value: $n = 1$ in the rule."
      },
      {
        "step": "$a_4 = \\dfrac{24 \\cdot \\dfrac{576}{5}}{\\left(-\\dfrac{264}{5}\\right)} = -\\dfrac{576}{11}$",
        "reason": "Substituting a value: $n = 2$ in the rule."
      },
      {
        "step": "$a_5 = \\dfrac{24 \\cdot \\left(-\\dfrac{576}{11}\\right)}{\\dfrac{576}{5}} = -\\dfrac{120}{11}$",
        "reason": "Substituting a value: $n = 3$ in the rule."
      },
      {
        "step": "$a_6 = \\dfrac{24 \\cdot \\left(-\\dfrac{120}{11}\\right)}{\\left(-\\dfrac{576}{11}\\right)} = 5$",
        "reason": "Substituting a value: $n = 4$ in the rule."
      },
      {
        "step": "$a_7 = \\dfrac{24 \\cdot 5}{\\left(-\\dfrac{120}{11}\\right)} = -11$",
        "reason": "Substituting a value: $n = 5$ in the rule."
      },
      {
        "step": "So $a_{n+6} = a_n$ for every whole number $n$.",
        "reason": "Period: lines 6 and 7 give $a_6 = a_0$ and $a_7 = a_1$, and two neighbouring terms fix every later term, so $6$ is a period."
      },
      {
        "step": "$353 = 6 \\cdot 58 + 5$",
        "reason": "Divisibility of integers, from arithmetic: $353$ leaves the remainder $5$ on division by $6$."
      },
      {
        "step": "$a_{353} = a_5$",
        "reason": "Period: $58$ steps of $6$ lead from $a_5$ to $a_{353}$."
      },
      {
        "step": "$a_{353} = -\\dfrac{120}{11}$",
        "reason": "Transitive property: line 5 gives $a_5$."
      }
    ]
  },
  {
    "id": "t239-k3-p04",
    "topic": "periodic-sequences",
    "kind": "t239-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{861} = \\dfrac{361}{6}$, where $a_0 = 6$, $a_1 = 5$ and $a_{n+2} = \\dfrac{19a_{n+1}}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{861} = \\dfrac{361}{6}$, where $a_0 = 6$, $a_1 = 5$ and $a_{n+2} = \\dfrac{19a_{n+1}}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $a_1$ start the sequence and the rule gives every later term."
      },
      {
        "step": "$a_2 = \\dfrac{19 \\cdot 5}{6} = \\dfrac{95}{6}$",
        "reason": "Substituting a value: $n = 0$ in the rule."
      },
      {
        "step": "$a_3 = \\dfrac{19 \\cdot \\dfrac{95}{6}}{5} = \\dfrac{361}{6}$",
        "reason": "Substituting a value: $n = 1$ in the rule."
      },
      {
        "step": "$a_4 = \\dfrac{19 \\cdot \\dfrac{361}{6}}{\\dfrac{95}{6}} = \\dfrac{361}{5}$",
        "reason": "Substituting a value: $n = 2$ in the rule."
      },
      {
        "step": "$a_5 = \\dfrac{19 \\cdot \\dfrac{361}{5}}{\\dfrac{361}{6}} = \\dfrac{114}{5}$",
        "reason": "Substituting a value: $n = 3$ in the rule."
      },
      {
        "step": "$a_6 = \\dfrac{19 \\cdot \\dfrac{114}{5}}{\\dfrac{361}{5}} = 6$",
        "reason": "Substituting a value: $n = 4$ in the rule."
      },
      {
        "step": "$a_7 = \\dfrac{19 \\cdot 6}{\\dfrac{114}{5}} = 5$",
        "reason": "Substituting a value: $n = 5$ in the rule."
      },
      {
        "step": "So $a_{n+6} = a_n$ for every whole number $n$.",
        "reason": "Period: lines 6 and 7 give $a_6 = a_0$ and $a_7 = a_1$, and two neighbouring terms fix every later term, so $6$ is a period."
      },
      {
        "step": "$861 = 6 \\cdot 143 + 3$",
        "reason": "Divisibility of integers, from arithmetic: $861$ leaves the remainder $3$ on division by $6$."
      },
      {
        "step": "$a_{861} = a_3$",
        "reason": "Period: $143$ steps of $6$ lead from $a_3$ to $a_{861}$."
      },
      {
        "step": "$a_{861} = \\dfrac{361}{6}$",
        "reason": "Transitive property: line 3 gives $a_3$."
      }
    ]
  },
  {
    "id": "t239-k3-p05",
    "topic": "periodic-sequences",
    "kind": "t239-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{664} = -\\dfrac{289}{6}$, where $a_0 = 5$, $a_1 = -6$ and $a_{n+2} = \\dfrac{17a_{n+1}}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{664} = -\\dfrac{289}{6}$, where $a_0 = 5$, $a_1 = -6$ and $a_{n+2} = \\dfrac{17a_{n+1}}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $a_1$ start the sequence and the rule gives every later term."
      },
      {
        "step": "$a_2 = \\dfrac{17 \\cdot (-6)}{5} = -\\dfrac{102}{5}$",
        "reason": "Substituting a value: $n = 0$ in the rule."
      },
      {
        "step": "$a_3 = \\dfrac{17 \\cdot \\left(-\\dfrac{102}{5}\\right)}{(-6)} = \\dfrac{289}{5}$",
        "reason": "Substituting a value: $n = 1$ in the rule."
      },
      {
        "step": "$a_4 = \\dfrac{17 \\cdot \\dfrac{289}{5}}{\\left(-\\dfrac{102}{5}\\right)} = -\\dfrac{289}{6}$",
        "reason": "Substituting a value: $n = 2$ in the rule."
      },
      {
        "step": "$a_5 = \\dfrac{17 \\cdot \\left(-\\dfrac{289}{6}\\right)}{\\dfrac{289}{5}} = -\\dfrac{85}{6}$",
        "reason": "Substituting a value: $n = 3$ in the rule."
      },
      {
        "step": "$a_6 = \\dfrac{17 \\cdot \\left(-\\dfrac{85}{6}\\right)}{\\left(-\\dfrac{289}{6}\\right)} = 5$",
        "reason": "Substituting a value: $n = 4$ in the rule."
      },
      {
        "step": "$a_7 = \\dfrac{17 \\cdot 5}{\\left(-\\dfrac{85}{6}\\right)} = -6$",
        "reason": "Substituting a value: $n = 5$ in the rule."
      },
      {
        "step": "So $a_{n+6} = a_n$ for every whole number $n$.",
        "reason": "Period: lines 6 and 7 give $a_6 = a_0$ and $a_7 = a_1$, and two neighbouring terms fix every later term, so $6$ is a period."
      },
      {
        "step": "$664 = 6 \\cdot 110 + 4$",
        "reason": "Divisibility of integers, from arithmetic: $664$ leaves the remainder $4$ on division by $6$."
      },
      {
        "step": "$a_{664} = a_4$",
        "reason": "Period: $110$ steps of $6$ lead from $a_4$ to $a_{664}$."
      },
      {
        "step": "$a_{664} = -\\dfrac{289}{6}$",
        "reason": "Transitive property: line 4 gives $a_4$."
      }
    ]
  },
  {
    "id": "t239-k3-p06",
    "topic": "periodic-sequences",
    "kind": "t239-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{99} = -\\dfrac{169}{4}$, where $a_0 = -4$, $a_1 = -11$ and $a_{n+2} = \\dfrac{13a_{n+1}}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{99} = -\\dfrac{169}{4}$, where $a_0 = -4$, $a_1 = -11$ and $a_{n+2} = \\dfrac{13a_{n+1}}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $a_1$ start the sequence and the rule gives every later term."
      },
      {
        "step": "$a_2 = \\dfrac{13 \\cdot (-11)}{(-4)} = \\dfrac{143}{4}$",
        "reason": "Substituting a value: $n = 0$ in the rule."
      },
      {
        "step": "$a_3 = \\dfrac{13 \\cdot \\dfrac{143}{4}}{(-11)} = -\\dfrac{169}{4}$",
        "reason": "Substituting a value: $n = 1$ in the rule."
      },
      {
        "step": "$a_4 = \\dfrac{13 \\cdot \\left(-\\dfrac{169}{4}\\right)}{\\dfrac{143}{4}} = -\\dfrac{169}{11}$",
        "reason": "Substituting a value: $n = 2$ in the rule."
      },
      {
        "step": "$a_5 = \\dfrac{13 \\cdot \\left(-\\dfrac{169}{11}\\right)}{\\left(-\\dfrac{169}{4}\\right)} = \\dfrac{52}{11}$",
        "reason": "Substituting a value: $n = 3$ in the rule."
      },
      {
        "step": "$a_6 = \\dfrac{13 \\cdot \\dfrac{52}{11}}{\\left(-\\dfrac{169}{11}\\right)} = -4$",
        "reason": "Substituting a value: $n = 4$ in the rule."
      },
      {
        "step": "$a_7 = \\dfrac{13 \\cdot (-4)}{\\dfrac{52}{11}} = -11$",
        "reason": "Substituting a value: $n = 5$ in the rule."
      },
      {
        "step": "So $a_{n+6} = a_n$ for every whole number $n$.",
        "reason": "Period: lines 6 and 7 give $a_6 = a_0$ and $a_7 = a_1$, and two neighbouring terms fix every later term, so $6$ is a period."
      },
      {
        "step": "$99 = 6 \\cdot 16 + 3$",
        "reason": "Divisibility of integers, from arithmetic: $99$ leaves the remainder $3$ on division by $6$."
      },
      {
        "step": "$a_{99} = a_3$",
        "reason": "Period: $16$ steps of $6$ lead from $a_3$ to $a_{99}$."
      },
      {
        "step": "$a_{99} = -\\dfrac{169}{4}$",
        "reason": "Transitive property: line 3 gives $a_3$."
      }
    ]
  },
  {
    "id": "t239-k3-p07",
    "topic": "periodic-sequences",
    "kind": "t239-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{562} = -\\dfrac{80}{3}$, where $a_0 = 5$, $a_1 = -15$ and $a_{n+2} = \\dfrac{20a_{n+1}}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{562} = -\\dfrac{80}{3}$, where $a_0 = 5$, $a_1 = -15$ and $a_{n+2} = \\dfrac{20a_{n+1}}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $a_1$ start the sequence and the rule gives every later term."
      },
      {
        "step": "$a_2 = \\dfrac{20 \\cdot (-15)}{5} = -60$",
        "reason": "Substituting a value: $n = 0$ in the rule."
      },
      {
        "step": "$a_3 = \\dfrac{20 \\cdot (-60)}{(-15)} = 80$",
        "reason": "Substituting a value: $n = 1$ in the rule."
      },
      {
        "step": "$a_4 = \\dfrac{20 \\cdot 80}{(-60)} = -\\dfrac{80}{3}$",
        "reason": "Substituting a value: $n = 2$ in the rule."
      },
      {
        "step": "$a_5 = \\dfrac{20 \\cdot \\left(-\\dfrac{80}{3}\\right)}{80} = -\\dfrac{20}{3}$",
        "reason": "Substituting a value: $n = 3$ in the rule."
      },
      {
        "step": "$a_6 = \\dfrac{20 \\cdot \\left(-\\dfrac{20}{3}\\right)}{\\left(-\\dfrac{80}{3}\\right)} = 5$",
        "reason": "Substituting a value: $n = 4$ in the rule."
      },
      {
        "step": "$a_7 = \\dfrac{20 \\cdot 5}{\\left(-\\dfrac{20}{3}\\right)} = -15$",
        "reason": "Substituting a value: $n = 5$ in the rule."
      },
      {
        "step": "So $a_{n+6} = a_n$ for every whole number $n$.",
        "reason": "Period: lines 6 and 7 give $a_6 = a_0$ and $a_7 = a_1$, and two neighbouring terms fix every later term, so $6$ is a period."
      },
      {
        "step": "$562 = 6 \\cdot 93 + 4$",
        "reason": "Divisibility of integers, from arithmetic: $562$ leaves the remainder $4$ on division by $6$."
      },
      {
        "step": "$a_{562} = a_4$",
        "reason": "Period: $93$ steps of $6$ lead from $a_4$ to $a_{562}$."
      },
      {
        "step": "$a_{562} = -\\dfrac{80}{3}$",
        "reason": "Transitive property: line 4 gives $a_4$."
      }
    ]
  },
  {
    "id": "t239-k3-p08",
    "topic": "periodic-sequences",
    "kind": "t239-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{760} = \\dfrac{196}{11}$, where $a_0 = 12$, $a_1 = 11$ and $a_{n+2} = \\dfrac{14a_{n+1}}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{760} = \\dfrac{196}{11}$, where $a_0 = 12$, $a_1 = 11$ and $a_{n+2} = \\dfrac{14a_{n+1}}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $a_1$ start the sequence and the rule gives every later term."
      },
      {
        "step": "$a_2 = \\dfrac{14 \\cdot 11}{12} = \\dfrac{77}{6}$",
        "reason": "Substituting a value: $n = 0$ in the rule."
      },
      {
        "step": "$a_3 = \\dfrac{14 \\cdot \\dfrac{77}{6}}{11} = \\dfrac{49}{3}$",
        "reason": "Substituting a value: $n = 1$ in the rule."
      },
      {
        "step": "$a_4 = \\dfrac{14 \\cdot \\dfrac{49}{3}}{\\dfrac{77}{6}} = \\dfrac{196}{11}$",
        "reason": "Substituting a value: $n = 2$ in the rule."
      },
      {
        "step": "$a_5 = \\dfrac{14 \\cdot \\dfrac{196}{11}}{\\dfrac{49}{3}} = \\dfrac{168}{11}$",
        "reason": "Substituting a value: $n = 3$ in the rule."
      },
      {
        "step": "$a_6 = \\dfrac{14 \\cdot \\dfrac{168}{11}}{\\dfrac{196}{11}} = 12$",
        "reason": "Substituting a value: $n = 4$ in the rule."
      },
      {
        "step": "$a_7 = \\dfrac{14 \\cdot 12}{\\dfrac{168}{11}} = 11$",
        "reason": "Substituting a value: $n = 5$ in the rule."
      },
      {
        "step": "So $a_{n+6} = a_n$ for every whole number $n$.",
        "reason": "Period: lines 6 and 7 give $a_6 = a_0$ and $a_7 = a_1$, and two neighbouring terms fix every later term, so $6$ is a period."
      },
      {
        "step": "$760 = 6 \\cdot 126 + 4$",
        "reason": "Divisibility of integers, from arithmetic: $760$ leaves the remainder $4$ on division by $6$."
      },
      {
        "step": "$a_{760} = a_4$",
        "reason": "Period: $126$ steps of $6$ lead from $a_4$ to $a_{760}$."
      },
      {
        "step": "$a_{760} = \\dfrac{196}{11}$",
        "reason": "Transitive property: line 4 gives $a_4$."
      }
    ]
  },
  {
    "id": "t239-k3-p09",
    "topic": "periodic-sequences",
    "kind": "t239-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{887} = \\dfrac{299}{3}$, where $a_0 = -13$, $a_1 = -3$ and $a_{n+2} = \\dfrac{23a_{n+1}}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{887} = \\dfrac{299}{3}$, where $a_0 = -13$, $a_1 = -3$ and $a_{n+2} = \\dfrac{23a_{n+1}}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $a_1$ start the sequence and the rule gives every later term."
      },
      {
        "step": "$a_2 = \\dfrac{23 \\cdot (-3)}{(-13)} = \\dfrac{69}{13}$",
        "reason": "Substituting a value: $n = 0$ in the rule."
      },
      {
        "step": "$a_3 = \\dfrac{23 \\cdot \\dfrac{69}{13}}{(-3)} = -\\dfrac{529}{13}$",
        "reason": "Substituting a value: $n = 1$ in the rule."
      },
      {
        "step": "$a_4 = \\dfrac{23 \\cdot \\left(-\\dfrac{529}{13}\\right)}{\\dfrac{69}{13}} = -\\dfrac{529}{3}$",
        "reason": "Substituting a value: $n = 2$ in the rule."
      },
      {
        "step": "$a_5 = \\dfrac{23 \\cdot \\left(-\\dfrac{529}{3}\\right)}{\\left(-\\dfrac{529}{13}\\right)} = \\dfrac{299}{3}$",
        "reason": "Substituting a value: $n = 3$ in the rule."
      },
      {
        "step": "$a_6 = \\dfrac{23 \\cdot \\dfrac{299}{3}}{\\left(-\\dfrac{529}{3}\\right)} = -13$",
        "reason": "Substituting a value: $n = 4$ in the rule."
      },
      {
        "step": "$a_7 = \\dfrac{23 \\cdot (-13)}{\\dfrac{299}{3}} = -3$",
        "reason": "Substituting a value: $n = 5$ in the rule."
      },
      {
        "step": "So $a_{n+6} = a_n$ for every whole number $n$.",
        "reason": "Period: lines 6 and 7 give $a_6 = a_0$ and $a_7 = a_1$, and two neighbouring terms fix every later term, so $6$ is a period."
      },
      {
        "step": "$887 = 6 \\cdot 147 + 5$",
        "reason": "Divisibility of integers, from arithmetic: $887$ leaves the remainder $5$ on division by $6$."
      },
      {
        "step": "$a_{887} = a_5$",
        "reason": "Period: $147$ steps of $6$ lead from $a_5$ to $a_{887}$."
      },
      {
        "step": "$a_{887} = \\dfrac{299}{3}$",
        "reason": "Transitive property: line 5 gives $a_5$."
      }
    ]
  },
  {
    "id": "t239-k3-p10",
    "topic": "periodic-sequences",
    "kind": "t239-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{137} = \\dfrac{338}{9}$, where $a_0 = -13$, $a_1 = -9$ and $a_{n+2} = \\dfrac{26a_{n+1}}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{137} = \\dfrac{338}{9}$, where $a_0 = -13$, $a_1 = -9$ and $a_{n+2} = \\dfrac{26a_{n+1}}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $a_1$ start the sequence and the rule gives every later term."
      },
      {
        "step": "$a_2 = \\dfrac{26 \\cdot (-9)}{(-13)} = 18$",
        "reason": "Substituting a value: $n = 0$ in the rule."
      },
      {
        "step": "$a_3 = \\dfrac{26 \\cdot 18}{(-9)} = -52$",
        "reason": "Substituting a value: $n = 1$ in the rule."
      },
      {
        "step": "$a_4 = \\dfrac{26 \\cdot (-52)}{18} = -\\dfrac{676}{9}$",
        "reason": "Substituting a value: $n = 2$ in the rule."
      },
      {
        "step": "$a_5 = \\dfrac{26 \\cdot \\left(-\\dfrac{676}{9}\\right)}{(-52)} = \\dfrac{338}{9}$",
        "reason": "Substituting a value: $n = 3$ in the rule."
      },
      {
        "step": "$a_6 = \\dfrac{26 \\cdot \\dfrac{338}{9}}{\\left(-\\dfrac{676}{9}\\right)} = -13$",
        "reason": "Substituting a value: $n = 4$ in the rule."
      },
      {
        "step": "$a_7 = \\dfrac{26 \\cdot (-13)}{\\dfrac{338}{9}} = -9$",
        "reason": "Substituting a value: $n = 5$ in the rule."
      },
      {
        "step": "So $a_{n+6} = a_n$ for every whole number $n$.",
        "reason": "Period: lines 6 and 7 give $a_6 = a_0$ and $a_7 = a_1$, and two neighbouring terms fix every later term, so $6$ is a period."
      },
      {
        "step": "$137 = 6 \\cdot 22 + 5$",
        "reason": "Divisibility of integers, from arithmetic: $137$ leaves the remainder $5$ on division by $6$."
      },
      {
        "step": "$a_{137} = a_5$",
        "reason": "Period: $22$ steps of $6$ lead from $a_5$ to $a_{137}$."
      },
      {
        "step": "$a_{137} = \\dfrac{338}{9}$",
        "reason": "Transitive property: line 5 gives $a_5$."
      }
    ]
  },
  {
    "id": "t239-k3-p11",
    "topic": "periodic-sequences",
    "kind": "t239-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{394} = \\dfrac{900}{13}$, where $a_0 = -12$, $a_1 = 13$ and $a_{n+2} = \\dfrac{30a_{n+1}}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{394} = \\dfrac{900}{13}$, where $a_0 = -12$, $a_1 = 13$ and $a_{n+2} = \\dfrac{30a_{n+1}}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $a_1$ start the sequence and the rule gives every later term."
      },
      {
        "step": "$a_2 = \\dfrac{30 \\cdot 13}{(-12)} = -\\dfrac{65}{2}$",
        "reason": "Substituting a value: $n = 0$ in the rule."
      },
      {
        "step": "$a_3 = \\dfrac{30 \\cdot \\left(-\\dfrac{65}{2}\\right)}{13} = -75$",
        "reason": "Substituting a value: $n = 1$ in the rule."
      },
      {
        "step": "$a_4 = \\dfrac{30 \\cdot (-75)}{\\left(-\\dfrac{65}{2}\\right)} = \\dfrac{900}{13}$",
        "reason": "Substituting a value: $n = 2$ in the rule."
      },
      {
        "step": "$a_5 = \\dfrac{30 \\cdot \\dfrac{900}{13}}{(-75)} = -\\dfrac{360}{13}$",
        "reason": "Substituting a value: $n = 3$ in the rule."
      },
      {
        "step": "$a_6 = \\dfrac{30 \\cdot \\left(-\\dfrac{360}{13}\\right)}{\\dfrac{900}{13}} = -12$",
        "reason": "Substituting a value: $n = 4$ in the rule."
      },
      {
        "step": "$a_7 = \\dfrac{30 \\cdot (-12)}{\\left(-\\dfrac{360}{13}\\right)} = 13$",
        "reason": "Substituting a value: $n = 5$ in the rule."
      },
      {
        "step": "So $a_{n+6} = a_n$ for every whole number $n$.",
        "reason": "Period: lines 6 and 7 give $a_6 = a_0$ and $a_7 = a_1$, and two neighbouring terms fix every later term, so $6$ is a period."
      },
      {
        "step": "$394 = 6 \\cdot 65 + 4$",
        "reason": "Divisibility of integers, from arithmetic: $394$ leaves the remainder $4$ on division by $6$."
      },
      {
        "step": "$a_{394} = a_4$",
        "reason": "Period: $65$ steps of $6$ lead from $a_4$ to $a_{394}$."
      },
      {
        "step": "$a_{394} = \\dfrac{900}{13}$",
        "reason": "Transitive property: line 4 gives $a_4$."
      }
    ]
  },
  {
    "id": "t239-k3-p12",
    "topic": "periodic-sequences",
    "kind": "t239-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{171} = \\dfrac{729}{5}$, where $a_0 = 5$, $a_1 = 10$ and $a_{n+2} = \\dfrac{27a_{n+1}}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{171} = \\dfrac{729}{5}$, where $a_0 = 5$, $a_1 = 10$ and $a_{n+2} = \\dfrac{27a_{n+1}}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $a_1$ start the sequence and the rule gives every later term."
      },
      {
        "step": "$a_2 = \\dfrac{27 \\cdot 10}{5} = 54$",
        "reason": "Substituting a value: $n = 0$ in the rule."
      },
      {
        "step": "$a_3 = \\dfrac{27 \\cdot 54}{10} = \\dfrac{729}{5}$",
        "reason": "Substituting a value: $n = 1$ in the rule."
      },
      {
        "step": "$a_4 = \\dfrac{27 \\cdot \\dfrac{729}{5}}{54} = \\dfrac{729}{10}$",
        "reason": "Substituting a value: $n = 2$ in the rule."
      },
      {
        "step": "$a_5 = \\dfrac{27 \\cdot \\dfrac{729}{10}}{\\dfrac{729}{5}} = \\dfrac{27}{2}$",
        "reason": "Substituting a value: $n = 3$ in the rule."
      },
      {
        "step": "$a_6 = \\dfrac{27 \\cdot \\dfrac{27}{2}}{\\dfrac{729}{10}} = 5$",
        "reason": "Substituting a value: $n = 4$ in the rule."
      },
      {
        "step": "$a_7 = \\dfrac{27 \\cdot 5}{\\dfrac{27}{2}} = 10$",
        "reason": "Substituting a value: $n = 5$ in the rule."
      },
      {
        "step": "So $a_{n+6} = a_n$ for every whole number $n$.",
        "reason": "Period: lines 6 and 7 give $a_6 = a_0$ and $a_7 = a_1$, and two neighbouring terms fix every later term, so $6$ is a period."
      },
      {
        "step": "$171 = 6 \\cdot 28 + 3$",
        "reason": "Divisibility of integers, from arithmetic: $171$ leaves the remainder $3$ on division by $6$."
      },
      {
        "step": "$a_{171} = a_3$",
        "reason": "Period: $28$ steps of $6$ lead from $a_3$ to $a_{171}$."
      },
      {
        "step": "$a_{171} = \\dfrac{729}{5}$",
        "reason": "Transitive property: line 3 gives $a_3$."
      }
    ]
  },
  {
    "id": "t239-k3-p13",
    "topic": "periodic-sequences",
    "kind": "t239-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{587} = 24$, where $a_0 = 12$, $a_1 = 3$ and $a_{n+2} = \\dfrac{6a_{n+1}}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{587} = 24$, where $a_0 = 12$, $a_1 = 3$ and $a_{n+2} = \\dfrac{6a_{n+1}}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $a_1$ start the sequence and the rule gives every later term."
      },
      {
        "step": "$a_2 = \\dfrac{6 \\cdot 3}{12} = \\dfrac{3}{2}$",
        "reason": "Substituting a value: $n = 0$ in the rule."
      },
      {
        "step": "$a_3 = \\dfrac{6 \\cdot \\dfrac{3}{2}}{3} = 3$",
        "reason": "Substituting a value: $n = 1$ in the rule."
      },
      {
        "step": "$a_4 = \\dfrac{6 \\cdot 3}{\\dfrac{3}{2}} = 12$",
        "reason": "Substituting a value: $n = 2$ in the rule."
      },
      {
        "step": "$a_5 = \\dfrac{6 \\cdot 12}{3} = 24$",
        "reason": "Substituting a value: $n = 3$ in the rule."
      },
      {
        "step": "$a_6 = \\dfrac{6 \\cdot 24}{12} = 12$",
        "reason": "Substituting a value: $n = 4$ in the rule."
      },
      {
        "step": "$a_7 = \\dfrac{6 \\cdot 12}{24} = 3$",
        "reason": "Substituting a value: $n = 5$ in the rule."
      },
      {
        "step": "So $a_{n+6} = a_n$ for every whole number $n$.",
        "reason": "Period: lines 6 and 7 give $a_6 = a_0$ and $a_7 = a_1$, and two neighbouring terms fix every later term, so $6$ is a period."
      },
      {
        "step": "$587 = 6 \\cdot 97 + 5$",
        "reason": "Divisibility of integers, from arithmetic: $587$ leaves the remainder $5$ on division by $6$."
      },
      {
        "step": "$a_{587} = a_5$",
        "reason": "Period: $97$ steps of $6$ lead from $a_5$ to $a_{587}$."
      },
      {
        "step": "$a_{587} = 24$",
        "reason": "Transitive property: line 5 gives $a_5$."
      }
    ]
  },
  {
    "id": "t239-k3-p14",
    "topic": "periodic-sequences",
    "kind": "t239-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{614} = \\dfrac{30}{7}$, where $a_0 = -14$, $a_1 = -4$ and $a_{n+2} = \\dfrac{15a_{n+1}}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{614} = \\dfrac{30}{7}$, where $a_0 = -14$, $a_1 = -4$ and $a_{n+2} = \\dfrac{15a_{n+1}}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $a_1$ start the sequence and the rule gives every later term."
      },
      {
        "step": "$a_2 = \\dfrac{15 \\cdot (-4)}{(-14)} = \\dfrac{30}{7}$",
        "reason": "Substituting a value: $n = 0$ in the rule."
      },
      {
        "step": "$a_3 = \\dfrac{15 \\cdot \\dfrac{30}{7}}{(-4)} = -\\dfrac{225}{14}$",
        "reason": "Substituting a value: $n = 1$ in the rule."
      },
      {
        "step": "$a_4 = \\dfrac{15 \\cdot \\left(-\\dfrac{225}{14}\\right)}{\\dfrac{30}{7}} = -\\dfrac{225}{4}$",
        "reason": "Substituting a value: $n = 2$ in the rule."
      },
      {
        "step": "$a_5 = \\dfrac{15 \\cdot \\left(-\\dfrac{225}{4}\\right)}{\\left(-\\dfrac{225}{14}\\right)} = \\dfrac{105}{2}$",
        "reason": "Substituting a value: $n = 3$ in the rule."
      },
      {
        "step": "$a_6 = \\dfrac{15 \\cdot \\dfrac{105}{2}}{\\left(-\\dfrac{225}{4}\\right)} = -14$",
        "reason": "Substituting a value: $n = 4$ in the rule."
      },
      {
        "step": "$a_7 = \\dfrac{15 \\cdot (-14)}{\\dfrac{105}{2}} = -4$",
        "reason": "Substituting a value: $n = 5$ in the rule."
      },
      {
        "step": "So $a_{n+6} = a_n$ for every whole number $n$.",
        "reason": "Period: lines 6 and 7 give $a_6 = a_0$ and $a_7 = a_1$, and two neighbouring terms fix every later term, so $6$ is a period."
      },
      {
        "step": "$614 = 6 \\cdot 102 + 2$",
        "reason": "Divisibility of integers, from arithmetic: $614$ leaves the remainder $2$ on division by $6$."
      },
      {
        "step": "$a_{614} = a_2$",
        "reason": "Period: $102$ steps of $6$ lead from $a_2$ to $a_{614}$."
      },
      {
        "step": "$a_{614} = \\dfrac{30}{7}$",
        "reason": "Transitive property: line 2 gives $a_2$."
      }
    ]
  }
]
