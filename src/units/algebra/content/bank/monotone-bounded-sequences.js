export default [
  {
    "id": "t240-k1-p01",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$ is $33$, where $a_0 = 0$ and $a_{n+1} = \\sqrt{330 + 23a_n}$ for every whole number $n$, and that the sequence increases and $a_n < 33$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$ is $33$, where $a_0 = 0$ and $a_{n+1} = \\sqrt{330 + 23a_n}$ for every whole number $n$, and that the sequence increases and $a_n < 33$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$\\sqrt{330 + 23m} \\le m$",
        "reason": "Powers and roots of positive numbers keep the order: $a_k < m$ gives $a_{k+1} < \\sqrt{330 + 23m}$, and $a_k$ may come as close to $m$ as wished, so the step holds for every $a_k$ below $m$ exactly when this holds."
      },
      {
        "step": "$m^2 - 23m - 330 \\ge 0$",
        "reason": "Raising both sides to a power: both sides of line 2 are squared, $m > 0$, and $330 + 23m$ is taken from both sides."
      },
      {
        "step": "$(m - 33)(m + 10) \\ge 0$",
        "reason": "Factoring a quadratic: $-33$ and $10$ have sum $-23$ and product $-330$."
      },
      {
        "step": "$m \\ge 33$",
        "reason": "A product is positive when its factors have the same sign: $m + 10 > 0$, so $m - 33$ is not below $0$."
      },
      {
        "step": "$m = 33$",
        "reason": "Powers and roots of positive numbers keep the order: $\\sqrt{330 + 23 \\cdot 33} = 33$, so $m = 33$ satisfies line 2, and line 5 rules out every smaller $m$."
      },
      {
        "step": "$a_1 = \\sqrt{330} > 0 = a_0$",
        "reason": "Base case: $n = 0$; $0 < 330$, and powers and roots of positive numbers keep the order."
      },
      {
        "step": "Assume that $a_k < a_{k+1}$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim $a_n < a_{n+1}$ for $n = k$."
      },
      {
        "step": "$23a_k < 23a_{k+1}$",
        "reason": "Multiplying by a positive number: both sides of line 8 are multiplied by $23$."
      },
      {
        "step": "$330 + 23a_k < 330 + 23a_{k+1}$",
        "reason": "Adding the same number: $330$ is added to both sides of line 9."
      },
      {
        "step": "$a_{k+1} < a_{k+2}$",
        "reason": "Powers and roots of positive numbers keep the order: the square roots of the two sides of line 10 are $a_{k+1}$ and $a_{k+2}$."
      },
      {
        "step": "So $a_n < a_{n+1}$ for every whole number $n$: the sequence increases.",
        "reason": "Induction: the base case is line 7 and the inductive step is lines 8 to 11."
      },
      {
        "step": "$a_0 = 0 < 33$",
        "reason": "Base case: the bound $33$ at $n = 0$."
      },
      {
        "step": "Assume that $a_k < 33$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim $a_n < 33$ for $n = k$."
      },
      {
        "step": "$23a_k < 23 \\cdot 33$",
        "reason": "Multiplying by a positive number: line 14 is multiplied by $23$."
      },
      {
        "step": "$330 + 23a_k < 330 + 23 \\cdot 33 = 1089$",
        "reason": "Adding the same number: $330$ is added to both sides of line 15."
      },
      {
        "step": "$a_{k+1} < 33$",
        "reason": "Powers and roots of positive numbers keep the order: the square root of the left side of line 16 is $a_{k+1}$, and $\\sqrt{1089} = 33$."
      },
      {
        "step": "So $a_n < 33$ for every whole number $n$, and $m = 33$.",
        "reason": "Induction: the base case is line 13 and the inductive step is lines 14 to 17."
      }
    ]
  },
  {
    "id": "t240-k1-p02",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$ is $25$, where $a_0 = 0$ and $a_{n+1} = \\sqrt{400 + 9a_n}$ for every whole number $n$, and that the sequence increases and $a_n < 25$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$ is $25$, where $a_0 = 0$ and $a_{n+1} = \\sqrt{400 + 9a_n}$ for every whole number $n$, and that the sequence increases and $a_n < 25$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$\\sqrt{400 + 9m} \\le m$",
        "reason": "Powers and roots of positive numbers keep the order: $a_k < m$ gives $a_{k+1} < \\sqrt{400 + 9m}$, and $a_k$ may come as close to $m$ as wished, so the step holds for every $a_k$ below $m$ exactly when this holds."
      },
      {
        "step": "$m^2 - 9m - 400 \\ge 0$",
        "reason": "Raising both sides to a power: both sides of line 2 are squared, $m > 0$, and $400 + 9m$ is taken from both sides."
      },
      {
        "step": "$(m - 25)(m + 16) \\ge 0$",
        "reason": "Factoring a quadratic: $-25$ and $16$ have sum $-9$ and product $-400$."
      },
      {
        "step": "$m \\ge 25$",
        "reason": "A product is positive when its factors have the same sign: $m + 16 > 0$, so $m - 25$ is not below $0$."
      },
      {
        "step": "$m = 25$",
        "reason": "Powers and roots of positive numbers keep the order: $\\sqrt{400 + 9 \\cdot 25} = 25$, so $m = 25$ satisfies line 2, and line 5 rules out every smaller $m$."
      },
      {
        "step": "$a_1 = \\sqrt{400} > 0 = a_0$",
        "reason": "Base case: $n = 0$; $0 < 400$, and powers and roots of positive numbers keep the order."
      },
      {
        "step": "Assume that $a_k < a_{k+1}$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim $a_n < a_{n+1}$ for $n = k$."
      },
      {
        "step": "$9a_k < 9a_{k+1}$",
        "reason": "Multiplying by a positive number: both sides of line 8 are multiplied by $9$."
      },
      {
        "step": "$400 + 9a_k < 400 + 9a_{k+1}$",
        "reason": "Adding the same number: $400$ is added to both sides of line 9."
      },
      {
        "step": "$a_{k+1} < a_{k+2}$",
        "reason": "Powers and roots of positive numbers keep the order: the square roots of the two sides of line 10 are $a_{k+1}$ and $a_{k+2}$."
      },
      {
        "step": "So $a_n < a_{n+1}$ for every whole number $n$: the sequence increases.",
        "reason": "Induction: the base case is line 7 and the inductive step is lines 8 to 11."
      },
      {
        "step": "$a_0 = 0 < 25$",
        "reason": "Base case: the bound $25$ at $n = 0$."
      },
      {
        "step": "Assume that $a_k < 25$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim $a_n < 25$ for $n = k$."
      },
      {
        "step": "$9a_k < 9 \\cdot 25$",
        "reason": "Multiplying by a positive number: line 14 is multiplied by $9$."
      },
      {
        "step": "$400 + 9a_k < 400 + 9 \\cdot 25 = 625$",
        "reason": "Adding the same number: $400$ is added to both sides of line 15."
      },
      {
        "step": "$a_{k+1} < 25$",
        "reason": "Powers and roots of positive numbers keep the order: the square root of the left side of line 16 is $a_{k+1}$, and $\\sqrt{625} = 25$."
      },
      {
        "step": "So $a_n < 25$ for every whole number $n$, and $m = 25$.",
        "reason": "Induction: the base case is line 13 and the inductive step is lines 14 to 17."
      }
    ]
  },
  {
    "id": "t240-k1-p03",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$ is $24$, where $a_0 = 3$ and $a_{n+1} = \\sqrt{120 + 19a_n}$ for every whole number $n$, and that the sequence increases and $a_n < 24$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$ is $24$, where $a_0 = 3$ and $a_{n+1} = \\sqrt{120 + 19a_n}$ for every whole number $n$, and that the sequence increases and $a_n < 24$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$\\sqrt{120 + 19m} \\le m$",
        "reason": "Powers and roots of positive numbers keep the order: $a_k < m$ gives $a_{k+1} < \\sqrt{120 + 19m}$, and $a_k$ may come as close to $m$ as wished, so the step holds for every $a_k$ below $m$ exactly when this holds."
      },
      {
        "step": "$m^2 - 19m - 120 \\ge 0$",
        "reason": "Raising both sides to a power: both sides of line 2 are squared, $m > 0$, and $120 + 19m$ is taken from both sides."
      },
      {
        "step": "$(m - 24)(m + 5) \\ge 0$",
        "reason": "Factoring a quadratic: $-24$ and $5$ have sum $-19$ and product $-120$."
      },
      {
        "step": "$m \\ge 24$",
        "reason": "A product is positive when its factors have the same sign: $m + 5 > 0$, so $m - 24$ is not below $0$."
      },
      {
        "step": "$m = 24$",
        "reason": "Powers and roots of positive numbers keep the order: $\\sqrt{120 + 19 \\cdot 24} = 24$, so $m = 24$ satisfies line 2, and line 5 rules out every smaller $m$."
      },
      {
        "step": "$a_1 = \\sqrt{177} > \\sqrt{9} = 3$",
        "reason": "Base case: $n = 0$; $9 < 177$, and powers and roots of positive numbers keep the order."
      },
      {
        "step": "Assume that $a_k < a_{k+1}$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim $a_n < a_{n+1}$ for $n = k$."
      },
      {
        "step": "$19a_k < 19a_{k+1}$",
        "reason": "Multiplying by a positive number: both sides of line 8 are multiplied by $19$."
      },
      {
        "step": "$120 + 19a_k < 120 + 19a_{k+1}$",
        "reason": "Adding the same number: $120$ is added to both sides of line 9."
      },
      {
        "step": "$a_{k+1} < a_{k+2}$",
        "reason": "Powers and roots of positive numbers keep the order: the square roots of the two sides of line 10 are $a_{k+1}$ and $a_{k+2}$."
      },
      {
        "step": "So $a_n < a_{n+1}$ for every whole number $n$: the sequence increases.",
        "reason": "Induction: the base case is line 7 and the inductive step is lines 8 to 11."
      },
      {
        "step": "$a_0 = 3 < 24$",
        "reason": "Base case: the bound $24$ at $n = 0$."
      },
      {
        "step": "Assume that $a_k < 24$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim $a_n < 24$ for $n = k$."
      },
      {
        "step": "$19a_k < 19 \\cdot 24$",
        "reason": "Multiplying by a positive number: line 14 is multiplied by $19$."
      },
      {
        "step": "$120 + 19a_k < 120 + 19 \\cdot 24 = 576$",
        "reason": "Adding the same number: $120$ is added to both sides of line 15."
      },
      {
        "step": "$a_{k+1} < 24$",
        "reason": "Powers and roots of positive numbers keep the order: the square root of the left side of line 16 is $a_{k+1}$, and $\\sqrt{576} = 24$."
      },
      {
        "step": "So $a_n < 24$ for every whole number $n$, and $m = 24$.",
        "reason": "Induction: the base case is line 13 and the inductive step is lines 14 to 17."
      }
    ]
  },
  {
    "id": "t240-k1-p04",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$ is $29$, where $a_0 = 2$ and $a_{n+1} = \\sqrt{551 + 10a_n}$ for every whole number $n$, and that the sequence increases and $a_n < 29$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$ is $29$, where $a_0 = 2$ and $a_{n+1} = \\sqrt{551 + 10a_n}$ for every whole number $n$, and that the sequence increases and $a_n < 29$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$\\sqrt{551 + 10m} \\le m$",
        "reason": "Powers and roots of positive numbers keep the order: $a_k < m$ gives $a_{k+1} < \\sqrt{551 + 10m}$, and $a_k$ may come as close to $m$ as wished, so the step holds for every $a_k$ below $m$ exactly when this holds."
      },
      {
        "step": "$m^2 - 10m - 551 \\ge 0$",
        "reason": "Raising both sides to a power: both sides of line 2 are squared, $m > 0$, and $551 + 10m$ is taken from both sides."
      },
      {
        "step": "$(m - 29)(m + 19) \\ge 0$",
        "reason": "Factoring a quadratic: $-29$ and $19$ have sum $-10$ and product $-551$."
      },
      {
        "step": "$m \\ge 29$",
        "reason": "A product is positive when its factors have the same sign: $m + 19 > 0$, so $m - 29$ is not below $0$."
      },
      {
        "step": "$m = 29$",
        "reason": "Powers and roots of positive numbers keep the order: $\\sqrt{551 + 10 \\cdot 29} = 29$, so $m = 29$ satisfies line 2, and line 5 rules out every smaller $m$."
      },
      {
        "step": "$a_1 = \\sqrt{571} > \\sqrt{4} = 2$",
        "reason": "Base case: $n = 0$; $4 < 571$, and powers and roots of positive numbers keep the order."
      },
      {
        "step": "Assume that $a_k < a_{k+1}$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim $a_n < a_{n+1}$ for $n = k$."
      },
      {
        "step": "$10a_k < 10a_{k+1}$",
        "reason": "Multiplying by a positive number: both sides of line 8 are multiplied by $10$."
      },
      {
        "step": "$551 + 10a_k < 551 + 10a_{k+1}$",
        "reason": "Adding the same number: $551$ is added to both sides of line 9."
      },
      {
        "step": "$a_{k+1} < a_{k+2}$",
        "reason": "Powers and roots of positive numbers keep the order: the square roots of the two sides of line 10 are $a_{k+1}$ and $a_{k+2}$."
      },
      {
        "step": "So $a_n < a_{n+1}$ for every whole number $n$: the sequence increases.",
        "reason": "Induction: the base case is line 7 and the inductive step is lines 8 to 11."
      },
      {
        "step": "$a_0 = 2 < 29$",
        "reason": "Base case: the bound $29$ at $n = 0$."
      },
      {
        "step": "Assume that $a_k < 29$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim $a_n < 29$ for $n = k$."
      },
      {
        "step": "$10a_k < 10 \\cdot 29$",
        "reason": "Multiplying by a positive number: line 14 is multiplied by $10$."
      },
      {
        "step": "$551 + 10a_k < 551 + 10 \\cdot 29 = 841$",
        "reason": "Adding the same number: $551$ is added to both sides of line 15."
      },
      {
        "step": "$a_{k+1} < 29$",
        "reason": "Powers and roots of positive numbers keep the order: the square root of the left side of line 16 is $a_{k+1}$, and $\\sqrt{841} = 29$."
      },
      {
        "step": "So $a_n < 29$ for every whole number $n$, and $m = 29$.",
        "reason": "Induction: the base case is line 13 and the inductive step is lines 14 to 17."
      }
    ]
  },
  {
    "id": "t240-k1-p05",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$ is $32$, where $a_0 = 20$ and $a_{n+1} = \\sqrt{256 + 24a_n}$ for every whole number $n$, and that the sequence increases and $a_n < 32$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$ is $32$, where $a_0 = 20$ and $a_{n+1} = \\sqrt{256 + 24a_n}$ for every whole number $n$, and that the sequence increases and $a_n < 32$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$\\sqrt{256 + 24m} \\le m$",
        "reason": "Powers and roots of positive numbers keep the order: $a_k < m$ gives $a_{k+1} < \\sqrt{256 + 24m}$, and $a_k$ may come as close to $m$ as wished, so the step holds for every $a_k$ below $m$ exactly when this holds."
      },
      {
        "step": "$m^2 - 24m - 256 \\ge 0$",
        "reason": "Raising both sides to a power: both sides of line 2 are squared, $m > 0$, and $256 + 24m$ is taken from both sides."
      },
      {
        "step": "$(m - 32)(m + 8) \\ge 0$",
        "reason": "Factoring a quadratic: $-32$ and $8$ have sum $-24$ and product $-256$."
      },
      {
        "step": "$m \\ge 32$",
        "reason": "A product is positive when its factors have the same sign: $m + 8 > 0$, so $m - 32$ is not below $0$."
      },
      {
        "step": "$m = 32$",
        "reason": "Powers and roots of positive numbers keep the order: $\\sqrt{256 + 24 \\cdot 32} = 32$, so $m = 32$ satisfies line 2, and line 5 rules out every smaller $m$."
      },
      {
        "step": "$a_1 = \\sqrt{736} > \\sqrt{400} = 20$",
        "reason": "Base case: $n = 0$; $400 < 736$, and powers and roots of positive numbers keep the order."
      },
      {
        "step": "Assume that $a_k < a_{k+1}$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim $a_n < a_{n+1}$ for $n = k$."
      },
      {
        "step": "$24a_k < 24a_{k+1}$",
        "reason": "Multiplying by a positive number: both sides of line 8 are multiplied by $24$."
      },
      {
        "step": "$256 + 24a_k < 256 + 24a_{k+1}$",
        "reason": "Adding the same number: $256$ is added to both sides of line 9."
      },
      {
        "step": "$a_{k+1} < a_{k+2}$",
        "reason": "Powers and roots of positive numbers keep the order: the square roots of the two sides of line 10 are $a_{k+1}$ and $a_{k+2}$."
      },
      {
        "step": "So $a_n < a_{n+1}$ for every whole number $n$: the sequence increases.",
        "reason": "Induction: the base case is line 7 and the inductive step is lines 8 to 11."
      },
      {
        "step": "$a_0 = 20 < 32$",
        "reason": "Base case: the bound $32$ at $n = 0$."
      },
      {
        "step": "Assume that $a_k < 32$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim $a_n < 32$ for $n = k$."
      },
      {
        "step": "$24a_k < 24 \\cdot 32$",
        "reason": "Multiplying by a positive number: line 14 is multiplied by $24$."
      },
      {
        "step": "$256 + 24a_k < 256 + 24 \\cdot 32 = 1024$",
        "reason": "Adding the same number: $256$ is added to both sides of line 15."
      },
      {
        "step": "$a_{k+1} < 32$",
        "reason": "Powers and roots of positive numbers keep the order: the square root of the left side of line 16 is $a_{k+1}$, and $\\sqrt{1024} = 32$."
      },
      {
        "step": "So $a_n < 32$ for every whole number $n$, and $m = 32$.",
        "reason": "Induction: the base case is line 13 and the inductive step is lines 14 to 17."
      }
    ]
  },
  {
    "id": "t240-k1-p06",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$ is $27$, where $a_0 = 20$ and $a_{n+1} = \\sqrt{351 + 14a_n}$ for every whole number $n$, and that the sequence increases and $a_n < 27$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$ is $27$, where $a_0 = 20$ and $a_{n+1} = \\sqrt{351 + 14a_n}$ for every whole number $n$, and that the sequence increases and $a_n < 27$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$\\sqrt{351 + 14m} \\le m$",
        "reason": "Powers and roots of positive numbers keep the order: $a_k < m$ gives $a_{k+1} < \\sqrt{351 + 14m}$, and $a_k$ may come as close to $m$ as wished, so the step holds for every $a_k$ below $m$ exactly when this holds."
      },
      {
        "step": "$m^2 - 14m - 351 \\ge 0$",
        "reason": "Raising both sides to a power: both sides of line 2 are squared, $m > 0$, and $351 + 14m$ is taken from both sides."
      },
      {
        "step": "$(m - 27)(m + 13) \\ge 0$",
        "reason": "Factoring a quadratic: $-27$ and $13$ have sum $-14$ and product $-351$."
      },
      {
        "step": "$m \\ge 27$",
        "reason": "A product is positive when its factors have the same sign: $m + 13 > 0$, so $m - 27$ is not below $0$."
      },
      {
        "step": "$m = 27$",
        "reason": "Powers and roots of positive numbers keep the order: $\\sqrt{351 + 14 \\cdot 27} = 27$, so $m = 27$ satisfies line 2, and line 5 rules out every smaller $m$."
      },
      {
        "step": "$a_1 = \\sqrt{631} > \\sqrt{400} = 20$",
        "reason": "Base case: $n = 0$; $400 < 631$, and powers and roots of positive numbers keep the order."
      },
      {
        "step": "Assume that $a_k < a_{k+1}$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim $a_n < a_{n+1}$ for $n = k$."
      },
      {
        "step": "$14a_k < 14a_{k+1}$",
        "reason": "Multiplying by a positive number: both sides of line 8 are multiplied by $14$."
      },
      {
        "step": "$351 + 14a_k < 351 + 14a_{k+1}$",
        "reason": "Adding the same number: $351$ is added to both sides of line 9."
      },
      {
        "step": "$a_{k+1} < a_{k+2}$",
        "reason": "Powers and roots of positive numbers keep the order: the square roots of the two sides of line 10 are $a_{k+1}$ and $a_{k+2}$."
      },
      {
        "step": "So $a_n < a_{n+1}$ for every whole number $n$: the sequence increases.",
        "reason": "Induction: the base case is line 7 and the inductive step is lines 8 to 11."
      },
      {
        "step": "$a_0 = 20 < 27$",
        "reason": "Base case: the bound $27$ at $n = 0$."
      },
      {
        "step": "Assume that $a_k < 27$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim $a_n < 27$ for $n = k$."
      },
      {
        "step": "$14a_k < 14 \\cdot 27$",
        "reason": "Multiplying by a positive number: line 14 is multiplied by $14$."
      },
      {
        "step": "$351 + 14a_k < 351 + 14 \\cdot 27 = 729$",
        "reason": "Adding the same number: $351$ is added to both sides of line 15."
      },
      {
        "step": "$a_{k+1} < 27$",
        "reason": "Powers and roots of positive numbers keep the order: the square root of the left side of line 16 is $a_{k+1}$, and $\\sqrt{729} = 27$."
      },
      {
        "step": "So $a_n < 27$ for every whole number $n$, and $m = 27$.",
        "reason": "Induction: the base case is line 13 and the inductive step is lines 14 to 17."
      }
    ]
  },
  {
    "id": "t240-k1-p07",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$ is $30$, where $a_0 = 0$ and $a_{n+1} = \\sqrt{300 + 20a_n}$ for every whole number $n$, and that the sequence increases and $a_n < 30$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$ is $30$, where $a_0 = 0$ and $a_{n+1} = \\sqrt{300 + 20a_n}$ for every whole number $n$, and that the sequence increases and $a_n < 30$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$\\sqrt{300 + 20m} \\le m$",
        "reason": "Powers and roots of positive numbers keep the order: $a_k < m$ gives $a_{k+1} < \\sqrt{300 + 20m}$, and $a_k$ may come as close to $m$ as wished, so the step holds for every $a_k$ below $m$ exactly when this holds."
      },
      {
        "step": "$m^2 - 20m - 300 \\ge 0$",
        "reason": "Raising both sides to a power: both sides of line 2 are squared, $m > 0$, and $300 + 20m$ is taken from both sides."
      },
      {
        "step": "$(m - 30)(m + 10) \\ge 0$",
        "reason": "Factoring a quadratic: $-30$ and $10$ have sum $-20$ and product $-300$."
      },
      {
        "step": "$m \\ge 30$",
        "reason": "A product is positive when its factors have the same sign: $m + 10 > 0$, so $m - 30$ is not below $0$."
      },
      {
        "step": "$m = 30$",
        "reason": "Powers and roots of positive numbers keep the order: $\\sqrt{300 + 20 \\cdot 30} = 30$, so $m = 30$ satisfies line 2, and line 5 rules out every smaller $m$."
      },
      {
        "step": "$a_1 = \\sqrt{300} > 0 = a_0$",
        "reason": "Base case: $n = 0$; $0 < 300$, and powers and roots of positive numbers keep the order."
      },
      {
        "step": "Assume that $a_k < a_{k+1}$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim $a_n < a_{n+1}$ for $n = k$."
      },
      {
        "step": "$20a_k < 20a_{k+1}$",
        "reason": "Multiplying by a positive number: both sides of line 8 are multiplied by $20$."
      },
      {
        "step": "$300 + 20a_k < 300 + 20a_{k+1}$",
        "reason": "Adding the same number: $300$ is added to both sides of line 9."
      },
      {
        "step": "$a_{k+1} < a_{k+2}$",
        "reason": "Powers and roots of positive numbers keep the order: the square roots of the two sides of line 10 are $a_{k+1}$ and $a_{k+2}$."
      },
      {
        "step": "So $a_n < a_{n+1}$ for every whole number $n$: the sequence increases.",
        "reason": "Induction: the base case is line 7 and the inductive step is lines 8 to 11."
      },
      {
        "step": "$a_0 = 0 < 30$",
        "reason": "Base case: the bound $30$ at $n = 0$."
      },
      {
        "step": "Assume that $a_k < 30$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim $a_n < 30$ for $n = k$."
      },
      {
        "step": "$20a_k < 20 \\cdot 30$",
        "reason": "Multiplying by a positive number: line 14 is multiplied by $20$."
      },
      {
        "step": "$300 + 20a_k < 300 + 20 \\cdot 30 = 900$",
        "reason": "Adding the same number: $300$ is added to both sides of line 15."
      },
      {
        "step": "$a_{k+1} < 30$",
        "reason": "Powers and roots of positive numbers keep the order: the square root of the left side of line 16 is $a_{k+1}$, and $\\sqrt{900} = 30$."
      },
      {
        "step": "So $a_n < 30$ for every whole number $n$, and $m = 30$.",
        "reason": "Induction: the base case is line 13 and the inductive step is lines 14 to 17."
      }
    ]
  },
  {
    "id": "t240-k1-p08",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$ is $28$, where $a_0 = 7$ and $a_{n+1} = \\sqrt{336 + 16a_n}$ for every whole number $n$, and that the sequence increases and $a_n < 28$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$ is $28$, where $a_0 = 7$ and $a_{n+1} = \\sqrt{336 + 16a_n}$ for every whole number $n$, and that the sequence increases and $a_n < 28$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$\\sqrt{336 + 16m} \\le m$",
        "reason": "Powers and roots of positive numbers keep the order: $a_k < m$ gives $a_{k+1} < \\sqrt{336 + 16m}$, and $a_k$ may come as close to $m$ as wished, so the step holds for every $a_k$ below $m$ exactly when this holds."
      },
      {
        "step": "$m^2 - 16m - 336 \\ge 0$",
        "reason": "Raising both sides to a power: both sides of line 2 are squared, $m > 0$, and $336 + 16m$ is taken from both sides."
      },
      {
        "step": "$(m - 28)(m + 12) \\ge 0$",
        "reason": "Factoring a quadratic: $-28$ and $12$ have sum $-16$ and product $-336$."
      },
      {
        "step": "$m \\ge 28$",
        "reason": "A product is positive when its factors have the same sign: $m + 12 > 0$, so $m - 28$ is not below $0$."
      },
      {
        "step": "$m = 28$",
        "reason": "Powers and roots of positive numbers keep the order: $\\sqrt{336 + 16 \\cdot 28} = 28$, so $m = 28$ satisfies line 2, and line 5 rules out every smaller $m$."
      },
      {
        "step": "$a_1 = \\sqrt{448} > \\sqrt{49} = 7$",
        "reason": "Base case: $n = 0$; $49 < 448$, and powers and roots of positive numbers keep the order."
      },
      {
        "step": "Assume that $a_k < a_{k+1}$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim $a_n < a_{n+1}$ for $n = k$."
      },
      {
        "step": "$16a_k < 16a_{k+1}$",
        "reason": "Multiplying by a positive number: both sides of line 8 are multiplied by $16$."
      },
      {
        "step": "$336 + 16a_k < 336 + 16a_{k+1}$",
        "reason": "Adding the same number: $336$ is added to both sides of line 9."
      },
      {
        "step": "$a_{k+1} < a_{k+2}$",
        "reason": "Powers and roots of positive numbers keep the order: the square roots of the two sides of line 10 are $a_{k+1}$ and $a_{k+2}$."
      },
      {
        "step": "So $a_n < a_{n+1}$ for every whole number $n$: the sequence increases.",
        "reason": "Induction: the base case is line 7 and the inductive step is lines 8 to 11."
      },
      {
        "step": "$a_0 = 7 < 28$",
        "reason": "Base case: the bound $28$ at $n = 0$."
      },
      {
        "step": "Assume that $a_k < 28$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim $a_n < 28$ for $n = k$."
      },
      {
        "step": "$16a_k < 16 \\cdot 28$",
        "reason": "Multiplying by a positive number: line 14 is multiplied by $16$."
      },
      {
        "step": "$336 + 16a_k < 336 + 16 \\cdot 28 = 784$",
        "reason": "Adding the same number: $336$ is added to both sides of line 15."
      },
      {
        "step": "$a_{k+1} < 28$",
        "reason": "Powers and roots of positive numbers keep the order: the square root of the left side of line 16 is $a_{k+1}$, and $\\sqrt{784} = 28$."
      },
      {
        "step": "So $a_n < 28$ for every whole number $n$, and $m = 28$.",
        "reason": "Induction: the base case is line 13 and the inductive step is lines 14 to 17."
      }
    ]
  },
  {
    "id": "t240-k1-p09",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$ is $22$, where $a_0 = 18$ and $a_{n+1} = \\sqrt{154 + 15a_n}$ for every whole number $n$, and that the sequence increases and $a_n < 22$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$ is $22$, where $a_0 = 18$ and $a_{n+1} = \\sqrt{154 + 15a_n}$ for every whole number $n$, and that the sequence increases and $a_n < 22$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$\\sqrt{154 + 15m} \\le m$",
        "reason": "Powers and roots of positive numbers keep the order: $a_k < m$ gives $a_{k+1} < \\sqrt{154 + 15m}$, and $a_k$ may come as close to $m$ as wished, so the step holds for every $a_k$ below $m$ exactly when this holds."
      },
      {
        "step": "$m^2 - 15m - 154 \\ge 0$",
        "reason": "Raising both sides to a power: both sides of line 2 are squared, $m > 0$, and $154 + 15m$ is taken from both sides."
      },
      {
        "step": "$(m - 22)(m + 7) \\ge 0$",
        "reason": "Factoring a quadratic: $-22$ and $7$ have sum $-15$ and product $-154$."
      },
      {
        "step": "$m \\ge 22$",
        "reason": "A product is positive when its factors have the same sign: $m + 7 > 0$, so $m - 22$ is not below $0$."
      },
      {
        "step": "$m = 22$",
        "reason": "Powers and roots of positive numbers keep the order: $\\sqrt{154 + 15 \\cdot 22} = 22$, so $m = 22$ satisfies line 2, and line 5 rules out every smaller $m$."
      },
      {
        "step": "$a_1 = \\sqrt{424} > \\sqrt{324} = 18$",
        "reason": "Base case: $n = 0$; $324 < 424$, and powers and roots of positive numbers keep the order."
      },
      {
        "step": "Assume that $a_k < a_{k+1}$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim $a_n < a_{n+1}$ for $n = k$."
      },
      {
        "step": "$15a_k < 15a_{k+1}$",
        "reason": "Multiplying by a positive number: both sides of line 8 are multiplied by $15$."
      },
      {
        "step": "$154 + 15a_k < 154 + 15a_{k+1}$",
        "reason": "Adding the same number: $154$ is added to both sides of line 9."
      },
      {
        "step": "$a_{k+1} < a_{k+2}$",
        "reason": "Powers and roots of positive numbers keep the order: the square roots of the two sides of line 10 are $a_{k+1}$ and $a_{k+2}$."
      },
      {
        "step": "So $a_n < a_{n+1}$ for every whole number $n$: the sequence increases.",
        "reason": "Induction: the base case is line 7 and the inductive step is lines 8 to 11."
      },
      {
        "step": "$a_0 = 18 < 22$",
        "reason": "Base case: the bound $22$ at $n = 0$."
      },
      {
        "step": "Assume that $a_k < 22$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim $a_n < 22$ for $n = k$."
      },
      {
        "step": "$15a_k < 15 \\cdot 22$",
        "reason": "Multiplying by a positive number: line 14 is multiplied by $15$."
      },
      {
        "step": "$154 + 15a_k < 154 + 15 \\cdot 22 = 484$",
        "reason": "Adding the same number: $154$ is added to both sides of line 15."
      },
      {
        "step": "$a_{k+1} < 22$",
        "reason": "Powers and roots of positive numbers keep the order: the square root of the left side of line 16 is $a_{k+1}$, and $\\sqrt{484} = 22$."
      },
      {
        "step": "So $a_n < 22$ for every whole number $n$, and $m = 22$.",
        "reason": "Induction: the base case is line 13 and the inductive step is lines 14 to 17."
      }
    ]
  },
  {
    "id": "t240-k1-p10",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$ is $23$, where $a_0 = 4$ and $a_{n+1} = \\sqrt{115 + 18a_n}$ for every whole number $n$, and that the sequence increases and $a_n < 23$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$ is $23$, where $a_0 = 4$ and $a_{n+1} = \\sqrt{115 + 18a_n}$ for every whole number $n$, and that the sequence increases and $a_n < 23$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$\\sqrt{115 + 18m} \\le m$",
        "reason": "Powers and roots of positive numbers keep the order: $a_k < m$ gives $a_{k+1} < \\sqrt{115 + 18m}$, and $a_k$ may come as close to $m$ as wished, so the step holds for every $a_k$ below $m$ exactly when this holds."
      },
      {
        "step": "$m^2 - 18m - 115 \\ge 0$",
        "reason": "Raising both sides to a power: both sides of line 2 are squared, $m > 0$, and $115 + 18m$ is taken from both sides."
      },
      {
        "step": "$(m - 23)(m + 5) \\ge 0$",
        "reason": "Factoring a quadratic: $-23$ and $5$ have sum $-18$ and product $-115$."
      },
      {
        "step": "$m \\ge 23$",
        "reason": "A product is positive when its factors have the same sign: $m + 5 > 0$, so $m - 23$ is not below $0$."
      },
      {
        "step": "$m = 23$",
        "reason": "Powers and roots of positive numbers keep the order: $\\sqrt{115 + 18 \\cdot 23} = 23$, so $m = 23$ satisfies line 2, and line 5 rules out every smaller $m$."
      },
      {
        "step": "$a_1 = \\sqrt{187} > \\sqrt{16} = 4$",
        "reason": "Base case: $n = 0$; $16 < 187$, and powers and roots of positive numbers keep the order."
      },
      {
        "step": "Assume that $a_k < a_{k+1}$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim $a_n < a_{n+1}$ for $n = k$."
      },
      {
        "step": "$18a_k < 18a_{k+1}$",
        "reason": "Multiplying by a positive number: both sides of line 8 are multiplied by $18$."
      },
      {
        "step": "$115 + 18a_k < 115 + 18a_{k+1}$",
        "reason": "Adding the same number: $115$ is added to both sides of line 9."
      },
      {
        "step": "$a_{k+1} < a_{k+2}$",
        "reason": "Powers and roots of positive numbers keep the order: the square roots of the two sides of line 10 are $a_{k+1}$ and $a_{k+2}$."
      },
      {
        "step": "So $a_n < a_{n+1}$ for every whole number $n$: the sequence increases.",
        "reason": "Induction: the base case is line 7 and the inductive step is lines 8 to 11."
      },
      {
        "step": "$a_0 = 4 < 23$",
        "reason": "Base case: the bound $23$ at $n = 0$."
      },
      {
        "step": "Assume that $a_k < 23$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim $a_n < 23$ for $n = k$."
      },
      {
        "step": "$18a_k < 18 \\cdot 23$",
        "reason": "Multiplying by a positive number: line 14 is multiplied by $18$."
      },
      {
        "step": "$115 + 18a_k < 115 + 18 \\cdot 23 = 529$",
        "reason": "Adding the same number: $115$ is added to both sides of line 15."
      },
      {
        "step": "$a_{k+1} < 23$",
        "reason": "Powers and roots of positive numbers keep the order: the square root of the left side of line 16 is $a_{k+1}$, and $\\sqrt{529} = 23$."
      },
      {
        "step": "So $a_n < 23$ for every whole number $n$, and $m = 23$.",
        "reason": "Induction: the base case is line 13 and the inductive step is lines 14 to 17."
      }
    ]
  },
  {
    "id": "t240-k1-p11",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$ is $15$, where $a_0 = 11$ and $a_{n+1} = \\sqrt{165 + 4a_n}$ for every whole number $n$, and that the sequence increases and $a_n < 15$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$ is $15$, where $a_0 = 11$ and $a_{n+1} = \\sqrt{165 + 4a_n}$ for every whole number $n$, and that the sequence increases and $a_n < 15$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$\\sqrt{165 + 4m} \\le m$",
        "reason": "Powers and roots of positive numbers keep the order: $a_k < m$ gives $a_{k+1} < \\sqrt{165 + 4m}$, and $a_k$ may come as close to $m$ as wished, so the step holds for every $a_k$ below $m$ exactly when this holds."
      },
      {
        "step": "$m^2 - 4m - 165 \\ge 0$",
        "reason": "Raising both sides to a power: both sides of line 2 are squared, $m > 0$, and $165 + 4m$ is taken from both sides."
      },
      {
        "step": "$(m - 15)(m + 11) \\ge 0$",
        "reason": "Factoring a quadratic: $-15$ and $11$ have sum $-4$ and product $-165$."
      },
      {
        "step": "$m \\ge 15$",
        "reason": "A product is positive when its factors have the same sign: $m + 11 > 0$, so $m - 15$ is not below $0$."
      },
      {
        "step": "$m = 15$",
        "reason": "Powers and roots of positive numbers keep the order: $\\sqrt{165 + 4 \\cdot 15} = 15$, so $m = 15$ satisfies line 2, and line 5 rules out every smaller $m$."
      },
      {
        "step": "$a_1 = \\sqrt{209} > \\sqrt{121} = 11$",
        "reason": "Base case: $n = 0$; $121 < 209$, and powers and roots of positive numbers keep the order."
      },
      {
        "step": "Assume that $a_k < a_{k+1}$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim $a_n < a_{n+1}$ for $n = k$."
      },
      {
        "step": "$4a_k < 4a_{k+1}$",
        "reason": "Multiplying by a positive number: both sides of line 8 are multiplied by $4$."
      },
      {
        "step": "$165 + 4a_k < 165 + 4a_{k+1}$",
        "reason": "Adding the same number: $165$ is added to both sides of line 9."
      },
      {
        "step": "$a_{k+1} < a_{k+2}$",
        "reason": "Powers and roots of positive numbers keep the order: the square roots of the two sides of line 10 are $a_{k+1}$ and $a_{k+2}$."
      },
      {
        "step": "So $a_n < a_{n+1}$ for every whole number $n$: the sequence increases.",
        "reason": "Induction: the base case is line 7 and the inductive step is lines 8 to 11."
      },
      {
        "step": "$a_0 = 11 < 15$",
        "reason": "Base case: the bound $15$ at $n = 0$."
      },
      {
        "step": "Assume that $a_k < 15$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim $a_n < 15$ for $n = k$."
      },
      {
        "step": "$4a_k < 4 \\cdot 15$",
        "reason": "Multiplying by a positive number: line 14 is multiplied by $4$."
      },
      {
        "step": "$165 + 4a_k < 165 + 4 \\cdot 15 = 225$",
        "reason": "Adding the same number: $165$ is added to both sides of line 15."
      },
      {
        "step": "$a_{k+1} < 15$",
        "reason": "Powers and roots of positive numbers keep the order: the square root of the left side of line 16 is $a_{k+1}$, and $\\sqrt{225} = 15$."
      },
      {
        "step": "So $a_n < 15$ for every whole number $n$, and $m = 15$.",
        "reason": "Induction: the base case is line 13 and the inductive step is lines 14 to 17."
      }
    ]
  },
  {
    "id": "t240-k1-p12",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$ is $21$, where $a_0 = 8$ and $a_{n+1} = \\sqrt{294 + 7a_n}$ for every whole number $n$, and that the sequence increases and $a_n < 21$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$ is $21$, where $a_0 = 8$ and $a_{n+1} = \\sqrt{294 + 7a_n}$ for every whole number $n$, and that the sequence increases and $a_n < 21$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$\\sqrt{294 + 7m} \\le m$",
        "reason": "Powers and roots of positive numbers keep the order: $a_k < m$ gives $a_{k+1} < \\sqrt{294 + 7m}$, and $a_k$ may come as close to $m$ as wished, so the step holds for every $a_k$ below $m$ exactly when this holds."
      },
      {
        "step": "$m^2 - 7m - 294 \\ge 0$",
        "reason": "Raising both sides to a power: both sides of line 2 are squared, $m > 0$, and $294 + 7m$ is taken from both sides."
      },
      {
        "step": "$(m - 21)(m + 14) \\ge 0$",
        "reason": "Factoring a quadratic: $-21$ and $14$ have sum $-7$ and product $-294$."
      },
      {
        "step": "$m \\ge 21$",
        "reason": "A product is positive when its factors have the same sign: $m + 14 > 0$, so $m - 21$ is not below $0$."
      },
      {
        "step": "$m = 21$",
        "reason": "Powers and roots of positive numbers keep the order: $\\sqrt{294 + 7 \\cdot 21} = 21$, so $m = 21$ satisfies line 2, and line 5 rules out every smaller $m$."
      },
      {
        "step": "$a_1 = \\sqrt{350} > \\sqrt{64} = 8$",
        "reason": "Base case: $n = 0$; $64 < 350$, and powers and roots of positive numbers keep the order."
      },
      {
        "step": "Assume that $a_k < a_{k+1}$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim $a_n < a_{n+1}$ for $n = k$."
      },
      {
        "step": "$7a_k < 7a_{k+1}$",
        "reason": "Multiplying by a positive number: both sides of line 8 are multiplied by $7$."
      },
      {
        "step": "$294 + 7a_k < 294 + 7a_{k+1}$",
        "reason": "Adding the same number: $294$ is added to both sides of line 9."
      },
      {
        "step": "$a_{k+1} < a_{k+2}$",
        "reason": "Powers and roots of positive numbers keep the order: the square roots of the two sides of line 10 are $a_{k+1}$ and $a_{k+2}$."
      },
      {
        "step": "So $a_n < a_{n+1}$ for every whole number $n$: the sequence increases.",
        "reason": "Induction: the base case is line 7 and the inductive step is lines 8 to 11."
      },
      {
        "step": "$a_0 = 8 < 21$",
        "reason": "Base case: the bound $21$ at $n = 0$."
      },
      {
        "step": "Assume that $a_k < 21$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim $a_n < 21$ for $n = k$."
      },
      {
        "step": "$7a_k < 7 \\cdot 21$",
        "reason": "Multiplying by a positive number: line 14 is multiplied by $7$."
      },
      {
        "step": "$294 + 7a_k < 294 + 7 \\cdot 21 = 441$",
        "reason": "Adding the same number: $294$ is added to both sides of line 15."
      },
      {
        "step": "$a_{k+1} < 21$",
        "reason": "Powers and roots of positive numbers keep the order: the square root of the left side of line 16 is $a_{k+1}$, and $\\sqrt{441} = 21$."
      },
      {
        "step": "So $a_n < 21$ for every whole number $n$, and $m = 21$.",
        "reason": "Induction: the base case is line 13 and the inductive step is lines 14 to 17."
      }
    ]
  },
  {
    "id": "t240-k1-p13",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$ is $34$, where $a_0 = 10$ and $a_{n+1} = \\sqrt{408 + 22a_n}$ for every whole number $n$, and that the sequence increases and $a_n < 34$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$ is $34$, where $a_0 = 10$ and $a_{n+1} = \\sqrt{408 + 22a_n}$ for every whole number $n$, and that the sequence increases and $a_n < 34$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$\\sqrt{408 + 22m} \\le m$",
        "reason": "Powers and roots of positive numbers keep the order: $a_k < m$ gives $a_{k+1} < \\sqrt{408 + 22m}$, and $a_k$ may come as close to $m$ as wished, so the step holds for every $a_k$ below $m$ exactly when this holds."
      },
      {
        "step": "$m^2 - 22m - 408 \\ge 0$",
        "reason": "Raising both sides to a power: both sides of line 2 are squared, $m > 0$, and $408 + 22m$ is taken from both sides."
      },
      {
        "step": "$(m - 34)(m + 12) \\ge 0$",
        "reason": "Factoring a quadratic: $-34$ and $12$ have sum $-22$ and product $-408$."
      },
      {
        "step": "$m \\ge 34$",
        "reason": "A product is positive when its factors have the same sign: $m + 12 > 0$, so $m - 34$ is not below $0$."
      },
      {
        "step": "$m = 34$",
        "reason": "Powers and roots of positive numbers keep the order: $\\sqrt{408 + 22 \\cdot 34} = 34$, so $m = 34$ satisfies line 2, and line 5 rules out every smaller $m$."
      },
      {
        "step": "$a_1 = \\sqrt{628} > \\sqrt{100} = 10$",
        "reason": "Base case: $n = 0$; $100 < 628$, and powers and roots of positive numbers keep the order."
      },
      {
        "step": "Assume that $a_k < a_{k+1}$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim $a_n < a_{n+1}$ for $n = k$."
      },
      {
        "step": "$22a_k < 22a_{k+1}$",
        "reason": "Multiplying by a positive number: both sides of line 8 are multiplied by $22$."
      },
      {
        "step": "$408 + 22a_k < 408 + 22a_{k+1}$",
        "reason": "Adding the same number: $408$ is added to both sides of line 9."
      },
      {
        "step": "$a_{k+1} < a_{k+2}$",
        "reason": "Powers and roots of positive numbers keep the order: the square roots of the two sides of line 10 are $a_{k+1}$ and $a_{k+2}$."
      },
      {
        "step": "So $a_n < a_{n+1}$ for every whole number $n$: the sequence increases.",
        "reason": "Induction: the base case is line 7 and the inductive step is lines 8 to 11."
      },
      {
        "step": "$a_0 = 10 < 34$",
        "reason": "Base case: the bound $34$ at $n = 0$."
      },
      {
        "step": "Assume that $a_k < 34$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim $a_n < 34$ for $n = k$."
      },
      {
        "step": "$22a_k < 22 \\cdot 34$",
        "reason": "Multiplying by a positive number: line 14 is multiplied by $22$."
      },
      {
        "step": "$408 + 22a_k < 408 + 22 \\cdot 34 = 1156$",
        "reason": "Adding the same number: $408$ is added to both sides of line 15."
      },
      {
        "step": "$a_{k+1} < 34$",
        "reason": "Powers and roots of positive numbers keep the order: the square root of the left side of line 16 is $a_{k+1}$, and $\\sqrt{1156} = 34$."
      },
      {
        "step": "So $a_n < 34$ for every whole number $n$, and $m = 34$.",
        "reason": "Induction: the base case is line 13 and the inductive step is lines 14 to 17."
      }
    ]
  },
  {
    "id": "t240-k1-p14",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$ is $31$, where $a_0 = 8$ and $a_{n+1} = \\sqrt{310 + 21a_n}$ for every whole number $n$, and that the sequence increases and $a_n < 31$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the least positive number $m$ for which $a_k < m$ always gives $a_{k+1} < m$ is $31$, where $a_0 = 8$ and $a_{n+1} = \\sqrt{310 + 21a_n}$ for every whole number $n$, and that the sequence increases and $a_n < 31$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$\\sqrt{310 + 21m} \\le m$",
        "reason": "Powers and roots of positive numbers keep the order: $a_k < m$ gives $a_{k+1} < \\sqrt{310 + 21m}$, and $a_k$ may come as close to $m$ as wished, so the step holds for every $a_k$ below $m$ exactly when this holds."
      },
      {
        "step": "$m^2 - 21m - 310 \\ge 0$",
        "reason": "Raising both sides to a power: both sides of line 2 are squared, $m > 0$, and $310 + 21m$ is taken from both sides."
      },
      {
        "step": "$(m - 31)(m + 10) \\ge 0$",
        "reason": "Factoring a quadratic: $-31$ and $10$ have sum $-21$ and product $-310$."
      },
      {
        "step": "$m \\ge 31$",
        "reason": "A product is positive when its factors have the same sign: $m + 10 > 0$, so $m - 31$ is not below $0$."
      },
      {
        "step": "$m = 31$",
        "reason": "Powers and roots of positive numbers keep the order: $\\sqrt{310 + 21 \\cdot 31} = 31$, so $m = 31$ satisfies line 2, and line 5 rules out every smaller $m$."
      },
      {
        "step": "$a_1 = \\sqrt{478} > \\sqrt{64} = 8$",
        "reason": "Base case: $n = 0$; $64 < 478$, and powers and roots of positive numbers keep the order."
      },
      {
        "step": "Assume that $a_k < a_{k+1}$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim $a_n < a_{n+1}$ for $n = k$."
      },
      {
        "step": "$21a_k < 21a_{k+1}$",
        "reason": "Multiplying by a positive number: both sides of line 8 are multiplied by $21$."
      },
      {
        "step": "$310 + 21a_k < 310 + 21a_{k+1}$",
        "reason": "Adding the same number: $310$ is added to both sides of line 9."
      },
      {
        "step": "$a_{k+1} < a_{k+2}$",
        "reason": "Powers and roots of positive numbers keep the order: the square roots of the two sides of line 10 are $a_{k+1}$ and $a_{k+2}$."
      },
      {
        "step": "So $a_n < a_{n+1}$ for every whole number $n$: the sequence increases.",
        "reason": "Induction: the base case is line 7 and the inductive step is lines 8 to 11."
      },
      {
        "step": "$a_0 = 8 < 31$",
        "reason": "Base case: the bound $31$ at $n = 0$."
      },
      {
        "step": "Assume that $a_k < 31$ for some whole number $k$.",
        "reason": "Inductive assumption: the claim $a_n < 31$ for $n = k$."
      },
      {
        "step": "$21a_k < 21 \\cdot 31$",
        "reason": "Multiplying by a positive number: line 14 is multiplied by $21$."
      },
      {
        "step": "$310 + 21a_k < 310 + 21 \\cdot 31 = 961$",
        "reason": "Adding the same number: $310$ is added to both sides of line 15."
      },
      {
        "step": "$a_{k+1} < 31$",
        "reason": "Powers and roots of positive numbers keep the order: the square root of the left side of line 16 is $a_{k+1}$, and $\\sqrt{961} = 31$."
      },
      {
        "step": "So $a_n < 31$ for every whole number $n$, and $m = 31$.",
        "reason": "Induction: the base case is line 13 and the inductive step is lines 14 to 17."
      }
    ]
  },
  {
    "id": "t240-k2-p01",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the limit of $a_n$ is $\\dfrac{6}{5}$, where $a_0 = 0$ and $a_{n+1} = \\dfrac{5a_n^2 + 18}{21}$ for every whole number $n$, the sequence increases, and $a_n < 2$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the limit of $a_n$ is $\\dfrac{6}{5}$, where $a_0 = 0$ and $a_{n+1} = \\dfrac{5a_n^2 + 18}{21}$ for every whole number $n$, the sequence increases, and $a_n < 2$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "The numbers $a_n$ have a limit $y$.",
        "reason": "Monotone bounded sequences converge: the sequence increases and is bounded above by $2$."
      },
      {
        "step": "$y = \\dfrac{5y^2 + 18}{21}$",
        "reason": "Limit satisfies the recursion: $a_n$ and $a_{n+1}$ both have the limit $y$."
      },
      {
        "step": "$21y = 5y^2 + 18$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $21$."
      },
      {
        "step": "$5y^2 - 21y + 18 = 0$",
        "reason": "Adding the same number to both sides: $21y$ is taken from both sides."
      },
      {
        "step": "$(5y - 6)(y - 3) = 0$",
        "reason": "Factoring a quadratic: $(5y - 6)(y - 3) = 5y^2 - 21y + 18$."
      },
      {
        "step": "So $y = \\dfrac{6}{5}$ or $y = 3$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$y \\le 2$",
        "reason": "A limit stays within a bound: every term is below $2$."
      },
      {
        "step": "$y = \\dfrac{6}{5}$",
        "reason": "Zero-product property: of the roots in line 7, only $\\dfrac{6}{5}$ is at most $2$ (line 8)."
      }
    ]
  },
  {
    "id": "t240-k2-p02",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the limit of $a_n$ is $\\dfrac{5}{2}$, where $a_0 = 1$ and $a_{n+1} = \\dfrac{2a_n^2 + 20}{13}$ for every whole number $n$, the sequence increases, and $a_n < 3$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the limit of $a_n$ is $\\dfrac{5}{2}$, where $a_0 = 1$ and $a_{n+1} = \\dfrac{2a_n^2 + 20}{13}$ for every whole number $n$, the sequence increases, and $a_n < 3$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "The numbers $a_n$ have a limit $y$.",
        "reason": "Monotone bounded sequences converge: the sequence increases and is bounded above by $3$."
      },
      {
        "step": "$y = \\dfrac{2y^2 + 20}{13}$",
        "reason": "Limit satisfies the recursion: $a_n$ and $a_{n+1}$ both have the limit $y$."
      },
      {
        "step": "$13y = 2y^2 + 20$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $13$."
      },
      {
        "step": "$2y^2 - 13y + 20 = 0$",
        "reason": "Adding the same number to both sides: $13y$ is taken from both sides."
      },
      {
        "step": "$(2y - 5)(y - 4) = 0$",
        "reason": "Factoring a quadratic: $(2y - 5)(y - 4) = 2y^2 - 13y + 20$."
      },
      {
        "step": "So $y = \\dfrac{5}{2}$ or $y = 4$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$y \\le 3$",
        "reason": "A limit stays within a bound: every term is below $3$."
      },
      {
        "step": "$y = \\dfrac{5}{2}$",
        "reason": "Zero-product property: of the roots in line 7, only $\\dfrac{5}{2}$ is at most $3$ (line 8)."
      }
    ]
  },
  {
    "id": "t240-k2-p03",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the limit of $a_n$ is $\\dfrac{7}{2}$, where $a_0 = 0$ and $a_{n+1} = \\dfrac{2a_n^2 + 35}{17}$ for every whole number $n$, the sequence increases, and $a_n < 4$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the limit of $a_n$ is $\\dfrac{7}{2}$, where $a_0 = 0$ and $a_{n+1} = \\dfrac{2a_n^2 + 35}{17}$ for every whole number $n$, the sequence increases, and $a_n < 4$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "The numbers $a_n$ have a limit $y$.",
        "reason": "Monotone bounded sequences converge: the sequence increases and is bounded above by $4$."
      },
      {
        "step": "$y = \\dfrac{2y^2 + 35}{17}$",
        "reason": "Limit satisfies the recursion: $a_n$ and $a_{n+1}$ both have the limit $y$."
      },
      {
        "step": "$17y = 2y^2 + 35$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $17$."
      },
      {
        "step": "$2y^2 - 17y + 35 = 0$",
        "reason": "Adding the same number to both sides: $17y$ is taken from both sides."
      },
      {
        "step": "$(2y - 7)(y - 5) = 0$",
        "reason": "Factoring a quadratic: $(2y - 7)(y - 5) = 2y^2 - 17y + 35$."
      },
      {
        "step": "So $y = \\dfrac{7}{2}$ or $y = 5$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$y \\le 4$",
        "reason": "A limit stays within a bound: every term is below $4$."
      },
      {
        "step": "$y = \\dfrac{7}{2}$",
        "reason": "Zero-product property: of the roots in line 7, only $\\dfrac{7}{2}$ is at most $4$ (line 8)."
      }
    ]
  },
  {
    "id": "t240-k2-p04",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the limit of $a_n$ is $\\dfrac{1}{4}$, where $a_0 = 0$ and $a_{n+1} = \\dfrac{4a_n^2 + 5}{21}$ for every whole number $n$, the sequence increases, and $a_n < 3$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the limit of $a_n$ is $\\dfrac{1}{4}$, where $a_0 = 0$ and $a_{n+1} = \\dfrac{4a_n^2 + 5}{21}$ for every whole number $n$, the sequence increases, and $a_n < 3$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "The numbers $a_n$ have a limit $y$.",
        "reason": "Monotone bounded sequences converge: the sequence increases and is bounded above by $3$."
      },
      {
        "step": "$y = \\dfrac{4y^2 + 5}{21}$",
        "reason": "Limit satisfies the recursion: $a_n$ and $a_{n+1}$ both have the limit $y$."
      },
      {
        "step": "$21y = 4y^2 + 5$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $21$."
      },
      {
        "step": "$4y^2 - 21y + 5 = 0$",
        "reason": "Adding the same number to both sides: $21y$ is taken from both sides."
      },
      {
        "step": "$(4y - 1)(y - 5) = 0$",
        "reason": "Factoring a quadratic: $(4y - 1)(y - 5) = 4y^2 - 21y + 5$."
      },
      {
        "step": "So $y = \\dfrac{1}{4}$ or $y = 5$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$y \\le 3$",
        "reason": "A limit stays within a bound: every term is below $3$."
      },
      {
        "step": "$y = \\dfrac{1}{4}$",
        "reason": "Zero-product property: of the roots in line 7, only $\\dfrac{1}{4}$ is at most $3$ (line 8)."
      }
    ]
  },
  {
    "id": "t240-k2-p05",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the limit of $a_n$ is $\\dfrac{8}{5}$, where $a_0 = 1$ and $a_{n+1} = \\dfrac{5a_n^2 + 56}{43}$ for every whole number $n$, the sequence increases, and $a_n < 2$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the limit of $a_n$ is $\\dfrac{8}{5}$, where $a_0 = 1$ and $a_{n+1} = \\dfrac{5a_n^2 + 56}{43}$ for every whole number $n$, the sequence increases, and $a_n < 2$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "The numbers $a_n$ have a limit $y$.",
        "reason": "Monotone bounded sequences converge: the sequence increases and is bounded above by $2$."
      },
      {
        "step": "$y = \\dfrac{5y^2 + 56}{43}$",
        "reason": "Limit satisfies the recursion: $a_n$ and $a_{n+1}$ both have the limit $y$."
      },
      {
        "step": "$43y = 5y^2 + 56$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $43$."
      },
      {
        "step": "$5y^2 - 43y + 56 = 0$",
        "reason": "Adding the same number to both sides: $43y$ is taken from both sides."
      },
      {
        "step": "$(5y - 8)(y - 7) = 0$",
        "reason": "Factoring a quadratic: $(5y - 8)(y - 7) = 5y^2 - 43y + 56$."
      },
      {
        "step": "So $y = \\dfrac{8}{5}$ or $y = 7$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$y \\le 2$",
        "reason": "A limit stays within a bound: every term is below $2$."
      },
      {
        "step": "$y = \\dfrac{8}{5}$",
        "reason": "Zero-product property: of the roots in line 7, only $\\dfrac{8}{5}$ is at most $2$ (line 8)."
      }
    ]
  },
  {
    "id": "t240-k2-p06",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the limit of $a_n$ is $\\dfrac{4}{3}$, where $a_0 = 0$ and $a_{n+1} = \\dfrac{3a_n^2 + 20}{19}$ for every whole number $n$, the sequence increases, and $a_n < 4$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the limit of $a_n$ is $\\dfrac{4}{3}$, where $a_0 = 0$ and $a_{n+1} = \\dfrac{3a_n^2 + 20}{19}$ for every whole number $n$, the sequence increases, and $a_n < 4$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "The numbers $a_n$ have a limit $y$.",
        "reason": "Monotone bounded sequences converge: the sequence increases and is bounded above by $4$."
      },
      {
        "step": "$y = \\dfrac{3y^2 + 20}{19}$",
        "reason": "Limit satisfies the recursion: $a_n$ and $a_{n+1}$ both have the limit $y$."
      },
      {
        "step": "$19y = 3y^2 + 20$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $19$."
      },
      {
        "step": "$3y^2 - 19y + 20 = 0$",
        "reason": "Adding the same number to both sides: $19y$ is taken from both sides."
      },
      {
        "step": "$(3y - 4)(y - 5) = 0$",
        "reason": "Factoring a quadratic: $(3y - 4)(y - 5) = 3y^2 - 19y + 20$."
      },
      {
        "step": "So $y = \\dfrac{4}{3}$ or $y = 5$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$y \\le 4$",
        "reason": "A limit stays within a bound: every term is below $4$."
      },
      {
        "step": "$y = \\dfrac{4}{3}$",
        "reason": "Zero-product property: of the roots in line 7, only $\\dfrac{4}{3}$ is at most $4$ (line 8)."
      }
    ]
  },
  {
    "id": "t240-k2-p07",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the limit of $a_n$ is $\\dfrac{5}{4}$, where $a_0 = 0$ and $a_{n+1} = \\dfrac{4a_n^2 + 25}{25}$ for every whole number $n$, the sequence increases, and $a_n < 2$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the limit of $a_n$ is $\\dfrac{5}{4}$, where $a_0 = 0$ and $a_{n+1} = \\dfrac{4a_n^2 + 25}{25}$ for every whole number $n$, the sequence increases, and $a_n < 2$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "The numbers $a_n$ have a limit $y$.",
        "reason": "Monotone bounded sequences converge: the sequence increases and is bounded above by $2$."
      },
      {
        "step": "$y = \\dfrac{4y^2 + 25}{25}$",
        "reason": "Limit satisfies the recursion: $a_n$ and $a_{n+1}$ both have the limit $y$."
      },
      {
        "step": "$25y = 4y^2 + 25$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $25$."
      },
      {
        "step": "$4y^2 - 25y + 25 = 0$",
        "reason": "Adding the same number to both sides: $25y$ is taken from both sides."
      },
      {
        "step": "$(4y - 5)(y - 5) = 0$",
        "reason": "Factoring a quadratic: $(4y - 5)(y - 5) = 4y^2 - 25y + 25$."
      },
      {
        "step": "So $y = \\dfrac{5}{4}$ or $y = 5$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$y \\le 2$",
        "reason": "A limit stays within a bound: every term is below $2$."
      },
      {
        "step": "$y = \\dfrac{5}{4}$",
        "reason": "Zero-product property: of the roots in line 7, only $\\dfrac{5}{4}$ is at most $2$ (line 8)."
      }
    ]
  },
  {
    "id": "t240-k2-p08",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the limit of $a_n$ is $\\dfrac{3}{4}$, where $a_0 = 0$ and $a_{n+1} = \\dfrac{4a_n^2 + 6}{11}$ for every whole number $n$, the sequence increases, and $a_n < 1$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the limit of $a_n$ is $\\dfrac{3}{4}$, where $a_0 = 0$ and $a_{n+1} = \\dfrac{4a_n^2 + 6}{11}$ for every whole number $n$, the sequence increases, and $a_n < 1$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "The numbers $a_n$ have a limit $y$.",
        "reason": "Monotone bounded sequences converge: the sequence increases and is bounded above by $1$."
      },
      {
        "step": "$y = \\dfrac{4y^2 + 6}{11}$",
        "reason": "Limit satisfies the recursion: $a_n$ and $a_{n+1}$ both have the limit $y$."
      },
      {
        "step": "$11y = 4y^2 + 6$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $11$."
      },
      {
        "step": "$4y^2 - 11y + 6 = 0$",
        "reason": "Adding the same number to both sides: $11y$ is taken from both sides."
      },
      {
        "step": "$(4y - 3)(y - 2) = 0$",
        "reason": "Factoring a quadratic: $(4y - 3)(y - 2) = 4y^2 - 11y + 6$."
      },
      {
        "step": "So $y = \\dfrac{3}{4}$ or $y = 2$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$y \\le 1$",
        "reason": "A limit stays within a bound: every term is below $1$."
      },
      {
        "step": "$y = \\dfrac{3}{4}$",
        "reason": "Zero-product property: of the roots in line 7, only $\\dfrac{3}{4}$ is at most $1$ (line 8)."
      }
    ]
  },
  {
    "id": "t240-k2-p09",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the limit of $a_n$ is $\\dfrac{17}{5}$, where $a_0 = 3$ and $a_{n+1} = \\dfrac{5a_n^2 + 85}{42}$ for every whole number $n$, the sequence increases, and $a_n < 4$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the limit of $a_n$ is $\\dfrac{17}{5}$, where $a_0 = 3$ and $a_{n+1} = \\dfrac{5a_n^2 + 85}{42}$ for every whole number $n$, the sequence increases, and $a_n < 4$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "The numbers $a_n$ have a limit $y$.",
        "reason": "Monotone bounded sequences converge: the sequence increases and is bounded above by $4$."
      },
      {
        "step": "$y = \\dfrac{5y^2 + 85}{42}$",
        "reason": "Limit satisfies the recursion: $a_n$ and $a_{n+1}$ both have the limit $y$."
      },
      {
        "step": "$42y = 5y^2 + 85$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $42$."
      },
      {
        "step": "$5y^2 - 42y + 85 = 0$",
        "reason": "Adding the same number to both sides: $42y$ is taken from both sides."
      },
      {
        "step": "$(5y - 17)(y - 5) = 0$",
        "reason": "Factoring a quadratic: $(5y - 17)(y - 5) = 5y^2 - 42y + 85$."
      },
      {
        "step": "So $y = \\dfrac{17}{5}$ or $y = 5$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$y \\le 4$",
        "reason": "A limit stays within a bound: every term is below $4$."
      },
      {
        "step": "$y = \\dfrac{17}{5}$",
        "reason": "Zero-product property: of the roots in line 7, only $\\dfrac{17}{5}$ is at most $4$ (line 8)."
      }
    ]
  },
  {
    "id": "t240-k2-p10",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the limit of $a_n$ is $\\dfrac{11}{5}$, where $a_0 = 1$ and $a_{n+1} = \\dfrac{5a_n^2 + 55}{36}$ for every whole number $n$, the sequence increases, and $a_n < 3$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the limit of $a_n$ is $\\dfrac{11}{5}$, where $a_0 = 1$ and $a_{n+1} = \\dfrac{5a_n^2 + 55}{36}$ for every whole number $n$, the sequence increases, and $a_n < 3$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "The numbers $a_n$ have a limit $y$.",
        "reason": "Monotone bounded sequences converge: the sequence increases and is bounded above by $3$."
      },
      {
        "step": "$y = \\dfrac{5y^2 + 55}{36}$",
        "reason": "Limit satisfies the recursion: $a_n$ and $a_{n+1}$ both have the limit $y$."
      },
      {
        "step": "$36y = 5y^2 + 55$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $36$."
      },
      {
        "step": "$5y^2 - 36y + 55 = 0$",
        "reason": "Adding the same number to both sides: $36y$ is taken from both sides."
      },
      {
        "step": "$(5y - 11)(y - 5) = 0$",
        "reason": "Factoring a quadratic: $(5y - 11)(y - 5) = 5y^2 - 36y + 55$."
      },
      {
        "step": "So $y = \\dfrac{11}{5}$ or $y = 5$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$y \\le 3$",
        "reason": "A limit stays within a bound: every term is below $3$."
      },
      {
        "step": "$y = \\dfrac{11}{5}$",
        "reason": "Zero-product property: of the roots in line 7, only $\\dfrac{11}{5}$ is at most $3$ (line 8)."
      }
    ]
  },
  {
    "id": "t240-k2-p11",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the limit of $a_n$ is $\\dfrac{10}{3}$, where $a_0 = 1$ and $a_{n+1} = \\dfrac{3a_n^2 + 50}{25}$ for every whole number $n$, the sequence increases, and $a_n < 4$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the limit of $a_n$ is $\\dfrac{10}{3}$, where $a_0 = 1$ and $a_{n+1} = \\dfrac{3a_n^2 + 50}{25}$ for every whole number $n$, the sequence increases, and $a_n < 4$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "The numbers $a_n$ have a limit $y$.",
        "reason": "Monotone bounded sequences converge: the sequence increases and is bounded above by $4$."
      },
      {
        "step": "$y = \\dfrac{3y^2 + 50}{25}$",
        "reason": "Limit satisfies the recursion: $a_n$ and $a_{n+1}$ both have the limit $y$."
      },
      {
        "step": "$25y = 3y^2 + 50$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $25$."
      },
      {
        "step": "$3y^2 - 25y + 50 = 0$",
        "reason": "Adding the same number to both sides: $25y$ is taken from both sides."
      },
      {
        "step": "$(3y - 10)(y - 5) = 0$",
        "reason": "Factoring a quadratic: $(3y - 10)(y - 5) = 3y^2 - 25y + 50$."
      },
      {
        "step": "So $y = \\dfrac{10}{3}$ or $y = 5$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$y \\le 4$",
        "reason": "A limit stays within a bound: every term is below $4$."
      },
      {
        "step": "$y = \\dfrac{10}{3}$",
        "reason": "Zero-product property: of the roots in line 7, only $\\dfrac{10}{3}$ is at most $4$ (line 8)."
      }
    ]
  },
  {
    "id": "t240-k2-p12",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the limit of $a_n$ is $\\dfrac{5}{3}$, where $a_0 = 1$ and $a_{n+1} = \\dfrac{3a_n^2 + 20}{17}$ for every whole number $n$, the sequence increases, and $a_n < 2$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the limit of $a_n$ is $\\dfrac{5}{3}$, where $a_0 = 1$ and $a_{n+1} = \\dfrac{3a_n^2 + 20}{17}$ for every whole number $n$, the sequence increases, and $a_n < 2$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "The numbers $a_n$ have a limit $y$.",
        "reason": "Monotone bounded sequences converge: the sequence increases and is bounded above by $2$."
      },
      {
        "step": "$y = \\dfrac{3y^2 + 20}{17}$",
        "reason": "Limit satisfies the recursion: $a_n$ and $a_{n+1}$ both have the limit $y$."
      },
      {
        "step": "$17y = 3y^2 + 20$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $17$."
      },
      {
        "step": "$3y^2 - 17y + 20 = 0$",
        "reason": "Adding the same number to both sides: $17y$ is taken from both sides."
      },
      {
        "step": "$(3y - 5)(y - 4) = 0$",
        "reason": "Factoring a quadratic: $(3y - 5)(y - 4) = 3y^2 - 17y + 20$."
      },
      {
        "step": "So $y = \\dfrac{5}{3}$ or $y = 4$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$y \\le 2$",
        "reason": "A limit stays within a bound: every term is below $2$."
      },
      {
        "step": "$y = \\dfrac{5}{3}$",
        "reason": "Zero-product property: of the roots in line 7, only $\\dfrac{5}{3}$ is at most $2$ (line 8)."
      }
    ]
  },
  {
    "id": "t240-k2-p13",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the limit of $a_n$ is $\\dfrac{11}{3}$, where $a_0 = 0$ and $a_{n+1} = \\dfrac{3a_n^2 + 88}{35}$ for every whole number $n$, the sequence increases, and $a_n < 6$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the limit of $a_n$ is $\\dfrac{11}{3}$, where $a_0 = 0$ and $a_{n+1} = \\dfrac{3a_n^2 + 88}{35}$ for every whole number $n$, the sequence increases, and $a_n < 6$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "The numbers $a_n$ have a limit $y$.",
        "reason": "Monotone bounded sequences converge: the sequence increases and is bounded above by $6$."
      },
      {
        "step": "$y = \\dfrac{3y^2 + 88}{35}$",
        "reason": "Limit satisfies the recursion: $a_n$ and $a_{n+1}$ both have the limit $y$."
      },
      {
        "step": "$35y = 3y^2 + 88$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $35$."
      },
      {
        "step": "$3y^2 - 35y + 88 = 0$",
        "reason": "Adding the same number to both sides: $35y$ is taken from both sides."
      },
      {
        "step": "$(3y - 11)(y - 8) = 0$",
        "reason": "Factoring a quadratic: $(3y - 11)(y - 8) = 3y^2 - 35y + 88$."
      },
      {
        "step": "So $y = \\dfrac{11}{3}$ or $y = 8$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$y \\le 6$",
        "reason": "A limit stays within a bound: every term is below $6$."
      },
      {
        "step": "$y = \\dfrac{11}{3}$",
        "reason": "Zero-product property: of the roots in line 7, only $\\dfrac{11}{3}$ is at most $6$ (line 8)."
      }
    ]
  },
  {
    "id": "t240-k2-p14",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the limit of $a_n$ is $\\dfrac{4}{5}$, where $a_0 = 0$ and $a_{n+1} = \\dfrac{5a_n^2 + 8}{14}$ for every whole number $n$, the sequence increases, and $a_n < 1$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the limit of $a_n$ is $\\dfrac{4}{5}$, where $a_0 = 0$ and $a_{n+1} = \\dfrac{5a_n^2 + 8}{14}$ for every whole number $n$, the sequence increases, and $a_n < 1$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "The numbers $a_n$ have a limit $y$.",
        "reason": "Monotone bounded sequences converge: the sequence increases and is bounded above by $1$."
      },
      {
        "step": "$y = \\dfrac{5y^2 + 8}{14}$",
        "reason": "Limit satisfies the recursion: $a_n$ and $a_{n+1}$ both have the limit $y$."
      },
      {
        "step": "$14y = 5y^2 + 8$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $14$."
      },
      {
        "step": "$5y^2 - 14y + 8 = 0$",
        "reason": "Adding the same number to both sides: $14y$ is taken from both sides."
      },
      {
        "step": "$(5y - 4)(y - 2) = 0$",
        "reason": "Factoring a quadratic: $(5y - 4)(y - 2) = 5y^2 - 14y + 8$."
      },
      {
        "step": "So $y = \\dfrac{4}{5}$ or $y = 2$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$y \\le 1$",
        "reason": "A limit stays within a bound: every term is below $1$."
      },
      {
        "step": "$y = \\dfrac{4}{5}$",
        "reason": "Zero-product property: of the roots in line 7, only $\\dfrac{4}{5}$ is at most $1$ (line 8)."
      }
    ]
  },
  {
    "id": "t240-k3-p01",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the convergence rate of $a_n$, the limit of $\\dfrac{a_{n+1} - 6}{a_n - 6}$, is $\\dfrac{3}{13}$, where $a_0 = 1$ and $a_{n+1} = \\dfrac{9a_n + 24}{a_n + 7}$ for every whole number $n$, $a_n$ has the limit $6$, and no term is $6$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the convergence rate of $a_n$, the limit of $\\dfrac{a_{n+1} - 6}{a_n - 6}$, is $\\dfrac{3}{13}$, where $a_0 = 1$ and $a_{n+1} = \\dfrac{9a_n + 24}{a_n + 7}$ for every whole number $n$, $a_n$ has the limit $6$, and no term is $6$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$a_{n+1} - 6 = \\dfrac{9a_n + 24}{a_n + 7} - 6$",
        "reason": "Adding the same number to both sides: $6$ is taken from both sides of the recursion."
      },
      {
        "step": "$a_{n+1} - 6 = \\dfrac{9a_n + 24 - 6a_n - 42}{a_n + 7}$",
        "reason": "Single fraction: $6 = \\dfrac{6(a_n + 7)}{a_n + 7}$, multiplied out on top."
      },
      {
        "step": "$a_{n+1} - 6 = \\dfrac{3a_n - 18}{a_n + 7}$",
        "reason": "Collecting like terms: the terms in $a_n$ are joined, and so are the numbers."
      },
      {
        "step": "$a_{n+1} - 6 = \\dfrac{3(a_n - 6)}{a_n + 7}$",
        "reason": "Common factor: $3$ is taken out, since $-18 = 3 \\cdot \\left(-6\\right)$."
      },
      {
        "step": "$\\dfrac{a_{n+1} - 6}{a_n - 6} = \\dfrac{3}{a_n + 7}$",
        "reason": "Dividing both sides by a nonzero number: $a_n - 6$ is not $0$, as no term is $6$."
      },
      {
        "step": "The limit of $\\dfrac{3}{a_n + 7}$ is $\\dfrac{3}{6 + 7} = \\dfrac{3}{13}$.",
        "reason": "A limit passes through products and quotients of sequences: $a_n$ has the limit $6$, and the limit of the bottom is not $0$."
      },
      {
        "step": "The convergence rate is $\\dfrac{3}{13}$.",
        "reason": "Convergence rate: it is the limit of the quotient in line 6."
      }
    ]
  },
  {
    "id": "t240-k3-p02",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $\\dfrac{a_{n+1} - 5}{(a_n - 5)^2}$ has the limit $\\dfrac{1}{11}$, where $a_0 = 7$ and $a_{n+1} = \\dfrac{a_n^2 + 30}{2a_n + 1}$ for every whole number $n$, $a_n$ has the limit $5$, and no term is $5$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\dfrac{a_{n+1} - 5}{(a_n - 5)^2}$ has the limit $\\dfrac{1}{11}$, where $a_0 = 7$ and $a_{n+1} = \\dfrac{a_n^2 + 30}{2a_n + 1}$ for every whole number $n$, $a_n$ has the limit $5$, and no term is $5$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$a_{n+1} - 5 = \\dfrac{a_n^2 + 30}{2a_n + 1} - 5$",
        "reason": "Adding the same number to both sides: $5$ is taken from both sides of the recursion."
      },
      {
        "step": "$a_{n+1} - 5 = \\dfrac{a_n^2 + 30 - 10a_n - 5}{2a_n + 1}$",
        "reason": "Single fraction: $5 = \\dfrac{5(2a_n + 1)}{2a_n + 1}$, multiplied out on top."
      },
      {
        "step": "$a_{n+1} - 5 = \\dfrac{a_n^2 - 10a_n + 25}{2a_n + 1}$",
        "reason": "Collecting like terms: the two numbers on top are joined."
      },
      {
        "step": "$a_{n+1} - 5 = \\dfrac{(a_n - 5)^2}{2a_n + 1}$",
        "reason": "Square of a binomial: $(a_n - 5)^2 = a_n^2 - 10a_n + 25$."
      },
      {
        "step": "$\\dfrac{a_{n+1} - 5}{(a_n - 5)^2} = \\dfrac{1}{2a_n + 1}$",
        "reason": "Dividing both sides by a nonzero number: $(a_n - 5)^2$ is not $0$, as no term is $5$."
      },
      {
        "step": "The limit of $\\dfrac{1}{2a_n + 1}$ is $\\dfrac{1}{2 \\cdot 5 + 1} = \\dfrac{1}{11}$.",
        "reason": "A limit passes through products and quotients of sequences: $a_n$ has the limit $5$, and the limit of the bottom is not $0$."
      },
      {
        "step": "The limit of $\\dfrac{a_{n+1} - 5}{(a_n - 5)^2}$ is $\\dfrac{1}{11}$.",
        "reason": "Convergence rate: the distance to the limit is squared at each step, then multiplied by about this number."
      }
    ]
  },
  {
    "id": "t240-k3-p03",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the convergence rate of $a_n$, the limit of $\\dfrac{a_{n+1} - 5}{a_n - 5}$, is $-\\dfrac{1}{5}$, where $a_0 = 10$ and $a_{n+1} = \\dfrac{3a_n + 35}{a_n + 5}$ for every whole number $n$, $a_n$ has the limit $5$, and no term is $5$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the convergence rate of $a_n$, the limit of $\\dfrac{a_{n+1} - 5}{a_n - 5}$, is $-\\dfrac{1}{5}$, where $a_0 = 10$ and $a_{n+1} = \\dfrac{3a_n + 35}{a_n + 5}$ for every whole number $n$, $a_n$ has the limit $5$, and no term is $5$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$a_{n+1} - 5 = \\dfrac{3a_n + 35}{a_n + 5} - 5$",
        "reason": "Adding the same number to both sides: $5$ is taken from both sides of the recursion."
      },
      {
        "step": "$a_{n+1} - 5 = \\dfrac{3a_n + 35 - 5a_n - 25}{a_n + 5}$",
        "reason": "Single fraction: $5 = \\dfrac{5(a_n + 5)}{a_n + 5}$, multiplied out on top."
      },
      {
        "step": "$a_{n+1} - 5 = \\dfrac{-2a_n + 10}{a_n + 5}$",
        "reason": "Collecting like terms: the terms in $a_n$ are joined, and so are the numbers."
      },
      {
        "step": "$a_{n+1} - 5 = -\\dfrac{2(a_n - 5)}{a_n + 5}$",
        "reason": "Common factor: $-2$ is taken out, since $10 = -2 \\cdot \\left(-5\\right)$."
      },
      {
        "step": "$\\dfrac{a_{n+1} - 5}{a_n - 5} = -\\dfrac{2}{a_n + 5}$",
        "reason": "Dividing both sides by a nonzero number: $a_n - 5$ is not $0$, as no term is $5$."
      },
      {
        "step": "The limit of $-\\dfrac{2}{a_n + 5}$ is $-\\dfrac{2}{5 + 5} = -\\dfrac{1}{5}$.",
        "reason": "A limit passes through products and quotients of sequences: $a_n$ has the limit $5$, and the limit of the bottom is not $0$."
      },
      {
        "step": "The convergence rate is $-\\dfrac{1}{5}$.",
        "reason": "Convergence rate: it is the limit of the quotient in line 6."
      }
    ]
  },
  {
    "id": "t240-k3-p04",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the convergence rate of $a_n$, the limit of $\\dfrac{a_{n+1} - 7}{a_n - 7}$, is $\\dfrac{1}{8}$, where $a_0 = 6$ and $a_{n+1} = \\dfrac{9a_n + 49}{a_n + 9}$ for every whole number $n$, $a_n$ has the limit $7$, and no term is $7$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the convergence rate of $a_n$, the limit of $\\dfrac{a_{n+1} - 7}{a_n - 7}$, is $\\dfrac{1}{8}$, where $a_0 = 6$ and $a_{n+1} = \\dfrac{9a_n + 49}{a_n + 9}$ for every whole number $n$, $a_n$ has the limit $7$, and no term is $7$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$a_{n+1} - 7 = \\dfrac{9a_n + 49}{a_n + 9} - 7$",
        "reason": "Adding the same number to both sides: $7$ is taken from both sides of the recursion."
      },
      {
        "step": "$a_{n+1} - 7 = \\dfrac{9a_n + 49 - 7a_n - 63}{a_n + 9}$",
        "reason": "Single fraction: $7 = \\dfrac{7(a_n + 9)}{a_n + 9}$, multiplied out on top."
      },
      {
        "step": "$a_{n+1} - 7 = \\dfrac{2a_n - 14}{a_n + 9}$",
        "reason": "Collecting like terms: the terms in $a_n$ are joined, and so are the numbers."
      },
      {
        "step": "$a_{n+1} - 7 = \\dfrac{2(a_n - 7)}{a_n + 9}$",
        "reason": "Common factor: $2$ is taken out, since $-14 = 2 \\cdot \\left(-7\\right)$."
      },
      {
        "step": "$\\dfrac{a_{n+1} - 7}{a_n - 7} = \\dfrac{2}{a_n + 9}$",
        "reason": "Dividing both sides by a nonzero number: $a_n - 7$ is not $0$, as no term is $7$."
      },
      {
        "step": "The limit of $\\dfrac{2}{a_n + 9}$ is $\\dfrac{2}{7 + 9} = \\dfrac{1}{8}$.",
        "reason": "A limit passes through products and quotients of sequences: $a_n$ has the limit $7$, and the limit of the bottom is not $0$."
      },
      {
        "step": "The convergence rate is $\\dfrac{1}{8}$.",
        "reason": "Convergence rate: it is the limit of the quotient in line 6."
      }
    ]
  },
  {
    "id": "t240-k3-p05",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $\\dfrac{a_{n+1} - 6}{(a_n - 6)^2}$ has the limit $\\dfrac{1}{13}$, where $a_0 = 13$ and $a_{n+1} = \\dfrac{a_n^2 + 42}{2a_n + 1}$ for every whole number $n$, $a_n$ has the limit $6$, and no term is $6$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\dfrac{a_{n+1} - 6}{(a_n - 6)^2}$ has the limit $\\dfrac{1}{13}$, where $a_0 = 13$ and $a_{n+1} = \\dfrac{a_n^2 + 42}{2a_n + 1}$ for every whole number $n$, $a_n$ has the limit $6$, and no term is $6$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$a_{n+1} - 6 = \\dfrac{a_n^2 + 42}{2a_n + 1} - 6$",
        "reason": "Adding the same number to both sides: $6$ is taken from both sides of the recursion."
      },
      {
        "step": "$a_{n+1} - 6 = \\dfrac{a_n^2 + 42 - 12a_n - 6}{2a_n + 1}$",
        "reason": "Single fraction: $6 = \\dfrac{6(2a_n + 1)}{2a_n + 1}$, multiplied out on top."
      },
      {
        "step": "$a_{n+1} - 6 = \\dfrac{a_n^2 - 12a_n + 36}{2a_n + 1}$",
        "reason": "Collecting like terms: the two numbers on top are joined."
      },
      {
        "step": "$a_{n+1} - 6 = \\dfrac{(a_n - 6)^2}{2a_n + 1}$",
        "reason": "Square of a binomial: $(a_n - 6)^2 = a_n^2 - 12a_n + 36$."
      },
      {
        "step": "$\\dfrac{a_{n+1} - 6}{(a_n - 6)^2} = \\dfrac{1}{2a_n + 1}$",
        "reason": "Dividing both sides by a nonzero number: $(a_n - 6)^2$ is not $0$, as no term is $6$."
      },
      {
        "step": "The limit of $\\dfrac{1}{2a_n + 1}$ is $\\dfrac{1}{2 \\cdot 6 + 1} = \\dfrac{1}{13}$.",
        "reason": "A limit passes through products and quotients of sequences: $a_n$ has the limit $6$, and the limit of the bottom is not $0$."
      },
      {
        "step": "The limit of $\\dfrac{a_{n+1} - 6}{(a_n - 6)^2}$ is $\\dfrac{1}{13}$.",
        "reason": "Convergence rate: the distance to the limit is squared at each step, then multiplied by about this number."
      }
    ]
  },
  {
    "id": "t240-k3-p06",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $\\dfrac{a_{n+1} - 9}{(a_n - 9)^2}$ has the limit $\\dfrac{1}{5}$, where $a_0 = 17$ and $a_{n+1} = \\dfrac{a_n^2 - 36}{2a_n - 13}$ for every whole number $n$, $a_n$ has the limit $9$, and no term is $9$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\dfrac{a_{n+1} - 9}{(a_n - 9)^2}$ has the limit $\\dfrac{1}{5}$, where $a_0 = 17$ and $a_{n+1} = \\dfrac{a_n^2 - 36}{2a_n - 13}$ for every whole number $n$, $a_n$ has the limit $9$, and no term is $9$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$a_{n+1} - 9 = \\dfrac{a_n^2 - 36}{2a_n - 13} - 9$",
        "reason": "Adding the same number to both sides: $9$ is taken from both sides of the recursion."
      },
      {
        "step": "$a_{n+1} - 9 = \\dfrac{a_n^2 - 36 - 18a_n + 117}{2a_n - 13}$",
        "reason": "Single fraction: $9 = \\dfrac{9(2a_n - 13)}{2a_n - 13}$, multiplied out on top."
      },
      {
        "step": "$a_{n+1} - 9 = \\dfrac{a_n^2 - 18a_n + 81}{2a_n - 13}$",
        "reason": "Collecting like terms: the two numbers on top are joined."
      },
      {
        "step": "$a_{n+1} - 9 = \\dfrac{(a_n - 9)^2}{2a_n - 13}$",
        "reason": "Square of a binomial: $(a_n - 9)^2 = a_n^2 - 18a_n + 81$."
      },
      {
        "step": "$\\dfrac{a_{n+1} - 9}{(a_n - 9)^2} = \\dfrac{1}{2a_n - 13}$",
        "reason": "Dividing both sides by a nonzero number: $(a_n - 9)^2$ is not $0$, as no term is $9$."
      },
      {
        "step": "The limit of $\\dfrac{1}{2a_n - 13}$ is $\\dfrac{1}{2 \\cdot 9 - 13} = \\dfrac{1}{5}$.",
        "reason": "A limit passes through products and quotients of sequences: $a_n$ has the limit $9$, and the limit of the bottom is not $0$."
      },
      {
        "step": "The limit of $\\dfrac{a_{n+1} - 9}{(a_n - 9)^2}$ is $\\dfrac{1}{5}$.",
        "reason": "Convergence rate: the distance to the limit is squared at each step, then multiplied by about this number."
      }
    ]
  },
  {
    "id": "t240-k3-p07",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the convergence rate of $a_n$, the limit of $\\dfrac{a_{n+1} - 6}{a_n - 6}$, is $\\dfrac{8}{15}$, where $a_0 = 12$ and $a_{n+1} = \\dfrac{14a_n + 6}{a_n + 9}$ for every whole number $n$, $a_n$ has the limit $6$, and no term is $6$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the convergence rate of $a_n$, the limit of $\\dfrac{a_{n+1} - 6}{a_n - 6}$, is $\\dfrac{8}{15}$, where $a_0 = 12$ and $a_{n+1} = \\dfrac{14a_n + 6}{a_n + 9}$ for every whole number $n$, $a_n$ has the limit $6$, and no term is $6$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$a_{n+1} - 6 = \\dfrac{14a_n + 6}{a_n + 9} - 6$",
        "reason": "Adding the same number to both sides: $6$ is taken from both sides of the recursion."
      },
      {
        "step": "$a_{n+1} - 6 = \\dfrac{14a_n + 6 - 6a_n - 54}{a_n + 9}$",
        "reason": "Single fraction: $6 = \\dfrac{6(a_n + 9)}{a_n + 9}$, multiplied out on top."
      },
      {
        "step": "$a_{n+1} - 6 = \\dfrac{8a_n - 48}{a_n + 9}$",
        "reason": "Collecting like terms: the terms in $a_n$ are joined, and so are the numbers."
      },
      {
        "step": "$a_{n+1} - 6 = \\dfrac{8(a_n - 6)}{a_n + 9}$",
        "reason": "Common factor: $8$ is taken out, since $-48 = 8 \\cdot \\left(-6\\right)$."
      },
      {
        "step": "$\\dfrac{a_{n+1} - 6}{a_n - 6} = \\dfrac{8}{a_n + 9}$",
        "reason": "Dividing both sides by a nonzero number: $a_n - 6$ is not $0$, as no term is $6$."
      },
      {
        "step": "The limit of $\\dfrac{8}{a_n + 9}$ is $\\dfrac{8}{6 + 9} = \\dfrac{8}{15}$.",
        "reason": "A limit passes through products and quotients of sequences: $a_n$ has the limit $6$, and the limit of the bottom is not $0$."
      },
      {
        "step": "The convergence rate is $\\dfrac{8}{15}$.",
        "reason": "Convergence rate: it is the limit of the quotient in line 6."
      }
    ]
  },
  {
    "id": "t240-k3-p08",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the convergence rate of $a_n$, the limit of $\\dfrac{a_{n+1} - 6}{a_n - 6}$, is $\\dfrac{4}{15}$, where $a_0 = 8$ and $a_{n+1} = \\dfrac{10a_n + 30}{a_n + 9}$ for every whole number $n$, $a_n$ has the limit $6$, and no term is $6$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the convergence rate of $a_n$, the limit of $\\dfrac{a_{n+1} - 6}{a_n - 6}$, is $\\dfrac{4}{15}$, where $a_0 = 8$ and $a_{n+1} = \\dfrac{10a_n + 30}{a_n + 9}$ for every whole number $n$, $a_n$ has the limit $6$, and no term is $6$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$a_{n+1} - 6 = \\dfrac{10a_n + 30}{a_n + 9} - 6$",
        "reason": "Adding the same number to both sides: $6$ is taken from both sides of the recursion."
      },
      {
        "step": "$a_{n+1} - 6 = \\dfrac{10a_n + 30 - 6a_n - 54}{a_n + 9}$",
        "reason": "Single fraction: $6 = \\dfrac{6(a_n + 9)}{a_n + 9}$, multiplied out on top."
      },
      {
        "step": "$a_{n+1} - 6 = \\dfrac{4a_n - 24}{a_n + 9}$",
        "reason": "Collecting like terms: the terms in $a_n$ are joined, and so are the numbers."
      },
      {
        "step": "$a_{n+1} - 6 = \\dfrac{4(a_n - 6)}{a_n + 9}$",
        "reason": "Common factor: $4$ is taken out, since $-24 = 4 \\cdot \\left(-6\\right)$."
      },
      {
        "step": "$\\dfrac{a_{n+1} - 6}{a_n - 6} = \\dfrac{4}{a_n + 9}$",
        "reason": "Dividing both sides by a nonzero number: $a_n - 6$ is not $0$, as no term is $6$."
      },
      {
        "step": "The limit of $\\dfrac{4}{a_n + 9}$ is $\\dfrac{4}{6 + 9} = \\dfrac{4}{15}$.",
        "reason": "A limit passes through products and quotients of sequences: $a_n$ has the limit $6$, and the limit of the bottom is not $0$."
      },
      {
        "step": "The convergence rate is $\\dfrac{4}{15}$.",
        "reason": "Convergence rate: it is the limit of the quotient in line 6."
      }
    ]
  },
  {
    "id": "t240-k3-p09",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $\\dfrac{a_{n+1} - 5}{(a_n - 5)^2}$ has the limit $\\dfrac{1}{6}$, where $a_0 = 8$ and $a_{n+1} = \\dfrac{a_n^2 + 5}{2a_n - 4}$ for every whole number $n$, $a_n$ has the limit $5$, and no term is $5$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\dfrac{a_{n+1} - 5}{(a_n - 5)^2}$ has the limit $\\dfrac{1}{6}$, where $a_0 = 8$ and $a_{n+1} = \\dfrac{a_n^2 + 5}{2a_n - 4}$ for every whole number $n$, $a_n$ has the limit $5$, and no term is $5$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$a_{n+1} - 5 = \\dfrac{a_n^2 + 5}{2a_n - 4} - 5$",
        "reason": "Adding the same number to both sides: $5$ is taken from both sides of the recursion."
      },
      {
        "step": "$a_{n+1} - 5 = \\dfrac{a_n^2 + 5 - 10a_n + 20}{2a_n - 4}$",
        "reason": "Single fraction: $5 = \\dfrac{5(2a_n - 4)}{2a_n - 4}$, multiplied out on top."
      },
      {
        "step": "$a_{n+1} - 5 = \\dfrac{a_n^2 - 10a_n + 25}{2a_n - 4}$",
        "reason": "Collecting like terms: the two numbers on top are joined."
      },
      {
        "step": "$a_{n+1} - 5 = \\dfrac{(a_n - 5)^2}{2a_n - 4}$",
        "reason": "Square of a binomial: $(a_n - 5)^2 = a_n^2 - 10a_n + 25$."
      },
      {
        "step": "$\\dfrac{a_{n+1} - 5}{(a_n - 5)^2} = \\dfrac{1}{2a_n - 4}$",
        "reason": "Dividing both sides by a nonzero number: $(a_n - 5)^2$ is not $0$, as no term is $5$."
      },
      {
        "step": "The limit of $\\dfrac{1}{2a_n - 4}$ is $\\dfrac{1}{2 \\cdot 5 - 4} = \\dfrac{1}{6}$.",
        "reason": "A limit passes through products and quotients of sequences: $a_n$ has the limit $5$, and the limit of the bottom is not $0$."
      },
      {
        "step": "The limit of $\\dfrac{a_{n+1} - 5}{(a_n - 5)^2}$ is $\\dfrac{1}{6}$.",
        "reason": "Convergence rate: the distance to the limit is squared at each step, then multiplied by about this number."
      }
    ]
  },
  {
    "id": "t240-k3-p10",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $\\dfrac{a_{n+1} - 6}{(a_n - 6)^2}$ has the limit $\\dfrac{1}{14}$, where $a_0 = 11$ and $a_{n+1} = \\dfrac{a_n^2 + 48}{2a_n + 2}$ for every whole number $n$, $a_n$ has the limit $6$, and no term is $6$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\dfrac{a_{n+1} - 6}{(a_n - 6)^2}$ has the limit $\\dfrac{1}{14}$, where $a_0 = 11$ and $a_{n+1} = \\dfrac{a_n^2 + 48}{2a_n + 2}$ for every whole number $n$, $a_n$ has the limit $6$, and no term is $6$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$a_{n+1} - 6 = \\dfrac{a_n^2 + 48}{2a_n + 2} - 6$",
        "reason": "Adding the same number to both sides: $6$ is taken from both sides of the recursion."
      },
      {
        "step": "$a_{n+1} - 6 = \\dfrac{a_n^2 + 48 - 12a_n - 12}{2a_n + 2}$",
        "reason": "Single fraction: $6 = \\dfrac{6(2a_n + 2)}{2a_n + 2}$, multiplied out on top."
      },
      {
        "step": "$a_{n+1} - 6 = \\dfrac{a_n^2 - 12a_n + 36}{2a_n + 2}$",
        "reason": "Collecting like terms: the two numbers on top are joined."
      },
      {
        "step": "$a_{n+1} - 6 = \\dfrac{(a_n - 6)^2}{2a_n + 2}$",
        "reason": "Square of a binomial: $(a_n - 6)^2 = a_n^2 - 12a_n + 36$."
      },
      {
        "step": "$\\dfrac{a_{n+1} - 6}{(a_n - 6)^2} = \\dfrac{1}{2a_n + 2}$",
        "reason": "Dividing both sides by a nonzero number: $(a_n - 6)^2$ is not $0$, as no term is $6$."
      },
      {
        "step": "The limit of $\\dfrac{1}{2a_n + 2}$ is $\\dfrac{1}{2 \\cdot 6 + 2} = \\dfrac{1}{14}$.",
        "reason": "A limit passes through products and quotients of sequences: $a_n$ has the limit $6$, and the limit of the bottom is not $0$."
      },
      {
        "step": "The limit of $\\dfrac{a_{n+1} - 6}{(a_n - 6)^2}$ is $\\dfrac{1}{14}$.",
        "reason": "Convergence rate: the distance to the limit is squared at each step, then multiplied by about this number."
      }
    ]
  },
  {
    "id": "t240-k3-p11",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $\\dfrac{a_{n+1} - 9}{(a_n - 9)^2}$ has the limit $\\dfrac{1}{16}$, where $a_0 = 11$ and $a_{n+1} = \\dfrac{a_n^2 + 63}{2a_n - 2}$ for every whole number $n$, $a_n$ has the limit $9$, and no term is $9$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\dfrac{a_{n+1} - 9}{(a_n - 9)^2}$ has the limit $\\dfrac{1}{16}$, where $a_0 = 11$ and $a_{n+1} = \\dfrac{a_n^2 + 63}{2a_n - 2}$ for every whole number $n$, $a_n$ has the limit $9$, and no term is $9$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$a_{n+1} - 9 = \\dfrac{a_n^2 + 63}{2a_n - 2} - 9$",
        "reason": "Adding the same number to both sides: $9$ is taken from both sides of the recursion."
      },
      {
        "step": "$a_{n+1} - 9 = \\dfrac{a_n^2 + 63 - 18a_n + 18}{2a_n - 2}$",
        "reason": "Single fraction: $9 = \\dfrac{9(2a_n - 2)}{2a_n - 2}$, multiplied out on top."
      },
      {
        "step": "$a_{n+1} - 9 = \\dfrac{a_n^2 - 18a_n + 81}{2a_n - 2}$",
        "reason": "Collecting like terms: the two numbers on top are joined."
      },
      {
        "step": "$a_{n+1} - 9 = \\dfrac{(a_n - 9)^2}{2a_n - 2}$",
        "reason": "Square of a binomial: $(a_n - 9)^2 = a_n^2 - 18a_n + 81$."
      },
      {
        "step": "$\\dfrac{a_{n+1} - 9}{(a_n - 9)^2} = \\dfrac{1}{2a_n - 2}$",
        "reason": "Dividing both sides by a nonzero number: $(a_n - 9)^2$ is not $0$, as no term is $9$."
      },
      {
        "step": "The limit of $\\dfrac{1}{2a_n - 2}$ is $\\dfrac{1}{2 \\cdot 9 - 2} = \\dfrac{1}{16}$.",
        "reason": "A limit passes through products and quotients of sequences: $a_n$ has the limit $9$, and the limit of the bottom is not $0$."
      },
      {
        "step": "The limit of $\\dfrac{a_{n+1} - 9}{(a_n - 9)^2}$ is $\\dfrac{1}{16}$.",
        "reason": "Convergence rate: the distance to the limit is squared at each step, then multiplied by about this number."
      }
    ]
  },
  {
    "id": "t240-k3-p12",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $\\dfrac{a_{n+1} - 7}{(a_n - 7)^2}$ has the limit $\\dfrac{1}{10}$, where $a_0 = 14$ and $a_{n+1} = \\dfrac{a_n^2 + 21}{2a_n - 4}$ for every whole number $n$, $a_n$ has the limit $7$, and no term is $7$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\dfrac{a_{n+1} - 7}{(a_n - 7)^2}$ has the limit $\\dfrac{1}{10}$, where $a_0 = 14$ and $a_{n+1} = \\dfrac{a_n^2 + 21}{2a_n - 4}$ for every whole number $n$, $a_n$ has the limit $7$, and no term is $7$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$a_{n+1} - 7 = \\dfrac{a_n^2 + 21}{2a_n - 4} - 7$",
        "reason": "Adding the same number to both sides: $7$ is taken from both sides of the recursion."
      },
      {
        "step": "$a_{n+1} - 7 = \\dfrac{a_n^2 + 21 - 14a_n + 28}{2a_n - 4}$",
        "reason": "Single fraction: $7 = \\dfrac{7(2a_n - 4)}{2a_n - 4}$, multiplied out on top."
      },
      {
        "step": "$a_{n+1} - 7 = \\dfrac{a_n^2 - 14a_n + 49}{2a_n - 4}$",
        "reason": "Collecting like terms: the two numbers on top are joined."
      },
      {
        "step": "$a_{n+1} - 7 = \\dfrac{(a_n - 7)^2}{2a_n - 4}$",
        "reason": "Square of a binomial: $(a_n - 7)^2 = a_n^2 - 14a_n + 49$."
      },
      {
        "step": "$\\dfrac{a_{n+1} - 7}{(a_n - 7)^2} = \\dfrac{1}{2a_n - 4}$",
        "reason": "Dividing both sides by a nonzero number: $(a_n - 7)^2$ is not $0$, as no term is $7$."
      },
      {
        "step": "The limit of $\\dfrac{1}{2a_n - 4}$ is $\\dfrac{1}{2 \\cdot 7 - 4} = \\dfrac{1}{10}$.",
        "reason": "A limit passes through products and quotients of sequences: $a_n$ has the limit $7$, and the limit of the bottom is not $0$."
      },
      {
        "step": "The limit of $\\dfrac{a_{n+1} - 7}{(a_n - 7)^2}$ is $\\dfrac{1}{10}$.",
        "reason": "Convergence rate: the distance to the limit is squared at each step, then multiplied by about this number."
      }
    ]
  },
  {
    "id": "t240-k3-p13",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the convergence rate of $a_n$, the limit of $\\dfrac{a_{n+1} - 4}{a_n - 4}$, is $\\dfrac{8}{13}$, where $a_0 = 9$ and $a_{n+1} = \\dfrac{12a_n + 4}{a_n + 9}$ for every whole number $n$, $a_n$ has the limit $4$, and no term is $4$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the convergence rate of $a_n$, the limit of $\\dfrac{a_{n+1} - 4}{a_n - 4}$, is $\\dfrac{8}{13}$, where $a_0 = 9$ and $a_{n+1} = \\dfrac{12a_n + 4}{a_n + 9}$ for every whole number $n$, $a_n$ has the limit $4$, and no term is $4$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$a_{n+1} - 4 = \\dfrac{12a_n + 4}{a_n + 9} - 4$",
        "reason": "Adding the same number to both sides: $4$ is taken from both sides of the recursion."
      },
      {
        "step": "$a_{n+1} - 4 = \\dfrac{12a_n + 4 - 4a_n - 36}{a_n + 9}$",
        "reason": "Single fraction: $4 = \\dfrac{4(a_n + 9)}{a_n + 9}$, multiplied out on top."
      },
      {
        "step": "$a_{n+1} - 4 = \\dfrac{8a_n - 32}{a_n + 9}$",
        "reason": "Collecting like terms: the terms in $a_n$ are joined, and so are the numbers."
      },
      {
        "step": "$a_{n+1} - 4 = \\dfrac{8(a_n - 4)}{a_n + 9}$",
        "reason": "Common factor: $8$ is taken out, since $-32 = 8 \\cdot \\left(-4\\right)$."
      },
      {
        "step": "$\\dfrac{a_{n+1} - 4}{a_n - 4} = \\dfrac{8}{a_n + 9}$",
        "reason": "Dividing both sides by a nonzero number: $a_n - 4$ is not $0$, as no term is $4$."
      },
      {
        "step": "The limit of $\\dfrac{8}{a_n + 9}$ is $\\dfrac{8}{4 + 9} = \\dfrac{8}{13}$.",
        "reason": "A limit passes through products and quotients of sequences: $a_n$ has the limit $4$, and the limit of the bottom is not $0$."
      },
      {
        "step": "The convergence rate is $\\dfrac{8}{13}$.",
        "reason": "Convergence rate: it is the limit of the quotient in line 6."
      }
    ]
  },
  {
    "id": "t240-k3-p14",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the convergence rate of $a_n$, the limit of $\\dfrac{a_{n+1} - 6}{a_n - 6}$, is $-\\dfrac{1}{5}$, where $a_0 = 0$ and $a_{n+1} = \\dfrac{3a_n + 72}{a_n + 9}$ for every whole number $n$, $a_n$ has the limit $6$, and no term is $6$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the convergence rate of $a_n$, the limit of $\\dfrac{a_{n+1} - 6}{a_n - 6}$, is $-\\dfrac{1}{5}$, where $a_0 = 0$ and $a_{n+1} = \\dfrac{3a_n + 72}{a_n + 9}$ for every whole number $n$, $a_n$ has the limit $6$, and no term is $6$.",
        "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
      },
      {
        "step": "$a_{n+1} - 6 = \\dfrac{3a_n + 72}{a_n + 9} - 6$",
        "reason": "Adding the same number to both sides: $6$ is taken from both sides of the recursion."
      },
      {
        "step": "$a_{n+1} - 6 = \\dfrac{3a_n + 72 - 6a_n - 54}{a_n + 9}$",
        "reason": "Single fraction: $6 = \\dfrac{6(a_n + 9)}{a_n + 9}$, multiplied out on top."
      },
      {
        "step": "$a_{n+1} - 6 = \\dfrac{-3a_n + 18}{a_n + 9}$",
        "reason": "Collecting like terms: the terms in $a_n$ are joined, and so are the numbers."
      },
      {
        "step": "$a_{n+1} - 6 = -\\dfrac{3(a_n - 6)}{a_n + 9}$",
        "reason": "Common factor: $-3$ is taken out, since $18 = -3 \\cdot \\left(-6\\right)$."
      },
      {
        "step": "$\\dfrac{a_{n+1} - 6}{a_n - 6} = -\\dfrac{3}{a_n + 9}$",
        "reason": "Dividing both sides by a nonzero number: $a_n - 6$ is not $0$, as no term is $6$."
      },
      {
        "step": "The limit of $-\\dfrac{3}{a_n + 9}$ is $-\\dfrac{3}{6 + 9} = -\\dfrac{1}{5}$.",
        "reason": "A limit passes through products and quotients of sequences: $a_n$ has the limit $6$, and the limit of the bottom is not $0$."
      },
      {
        "step": "The convergence rate is $-\\dfrac{1}{5}$.",
        "reason": "Convergence rate: it is the limit of the quotient in line 6."
      }
    ]
  },
  {
    "id": "t240-k4-p01",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n$ and $d_n$ both have the limit $\\dfrac{287}{19}$, where $a_0 = 18$, $d_0 = 8$, $a_{n+1} = \\dfrac{8a_n + d_n}{9}$ and $d_{n+1} = \\dfrac{3a_n + 8d_n}{11}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n$ and $d_n$ both have the limit $\\dfrac{287}{19}$, where $a_0 = 18$, $d_0 = 8$, $a_{n+1} = \\dfrac{8a_n + d_n}{9}$ and $d_{n+1} = \\dfrac{3a_n + 8d_n}{11}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $d_0$ start the two sequences and each pair of terms gives the next pair."
      },
      {
        "step": "$d_{n+1} - a_{n+1} = \\dfrac{3a_n + 8d_n}{11} - \\dfrac{8a_n + d_n}{9}$",
        "reason": "Recursion: the first recursion is taken from the second."
      },
      {
        "step": "$d_{n+1} - a_{n+1} = \\dfrac{61}{99}(d_n - a_n)$",
        "reason": "Single fraction: over the bottom $99$, the terms in $a_n$ and $d_n$ collect to $\\dfrac{61}{99}$ times $d_n - a_n$."
      },
      {
        "step": "$d_n - a_n = -10\\left(\\dfrac{61}{99}\\right)^n$",
        "reason": "Geometric sequence: the differences have common ratio $\\dfrac{61}{99}$ and start at $d_0 - a_0 = -10$."
      },
      {
        "step": "The powers $\\left(\\dfrac{61}{99}\\right)^n$ have the limit $0$.",
        "reason": "Powers of a number between $-1$ and $1$ shrink to $0$: $\\dfrac{61}{99}$ lies between $-1$ and $1$."
      },
      {
        "step": "The differences $d_n - a_n$ have the limit $0$.",
        "reason": "A limit passes through sums, products and quotients: line 4 is $-10$ times the powers of line 5."
      },
      {
        "step": "For the weights $x$ and $z$ of $xa_n + zd_n$, $x \\cdot \\dfrac{8}{9} + z \\cdot \\dfrac{3}{11} = x$, so $z = \\dfrac{11}{27}x$; take $x = 27$ and $z = 11$.",
        "reason": "Isolating the variable: the weight on $a_n$ is unchanged by a step, and $z$ is isolated."
      },
      {
        "step": "$27a_{n+1} + 11d_{n+1} = 27a_n + 11d_n$",
        "reason": "Collecting like terms: $27$ times the first recursion and $11$ times the second, multiplied out and added."
      },
      {
        "step": "For every whole number $n$, $27a_n + 11d_n = 27a_0 + 11d_0 = 574$.",
        "reason": "Induction: line 8 is the inductive step, and $n = 0$ is the base case."
      },
      {
        "step": "$27a_n + 11a_n + 11(d_n - a_n) = 574$",
        "reason": "Multiplying out: $11(d_n - a_n) = 11d_n - 11a_n$, so this is line 9."
      },
      {
        "step": "$38a_n = 574 - 11(d_n - a_n)$",
        "reason": "Adding the same number to both sides: $11(d_n - a_n)$ is taken from both sides of line 10, and like terms are collected."
      },
      {
        "step": "The limit of $a_n$ is $\\dfrac{574 - 11 \\cdot 0}{38} = \\dfrac{287}{19}$.",
        "reason": "A limit passes through sums, products and quotients: lines 6 and 11."
      },
      {
        "step": "Both $a_n$ and $d_n$ have the limit $\\dfrac{287}{19}$.",
        "reason": "A limit passes through sums, products and quotients: $d_n = a_n + (d_n - a_n)$, with lines 6 and 12."
      }
    ]
  },
  {
    "id": "t240-k4-p02",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n$ and $d_n$ both have the limit $\\dfrac{956}{55}$, where $a_0 = 16$, $d_0 = 20$, $a_{n+1} = \\dfrac{3a_n + d_n}{4}$ and $d_{n+1} = \\dfrac{9a_n + 10d_n}{19}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n$ and $d_n$ both have the limit $\\dfrac{956}{55}$, where $a_0 = 16$, $d_0 = 20$, $a_{n+1} = \\dfrac{3a_n + d_n}{4}$ and $d_{n+1} = \\dfrac{9a_n + 10d_n}{19}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $d_0$ start the two sequences and each pair of terms gives the next pair."
      },
      {
        "step": "$d_{n+1} - a_{n+1} = \\dfrac{9a_n + 10d_n}{19} - \\dfrac{3a_n + d_n}{4}$",
        "reason": "Recursion: the first recursion is taken from the second."
      },
      {
        "step": "$d_{n+1} - a_{n+1} = \\dfrac{21}{76}(d_n - a_n)$",
        "reason": "Single fraction: over the bottom $76$, the terms in $a_n$ and $d_n$ collect to $\\dfrac{21}{76}$ times $d_n - a_n$."
      },
      {
        "step": "$d_n - a_n = 4\\left(\\dfrac{21}{76}\\right)^n$",
        "reason": "Geometric sequence: the differences have common ratio $\\dfrac{21}{76}$ and start at $d_0 - a_0 = 4$."
      },
      {
        "step": "The powers $\\left(\\dfrac{21}{76}\\right)^n$ have the limit $0$.",
        "reason": "Powers of a number between $-1$ and $1$ shrink to $0$: $\\dfrac{21}{76}$ lies between $-1$ and $1$."
      },
      {
        "step": "The differences $d_n - a_n$ have the limit $0$.",
        "reason": "A limit passes through sums, products and quotients: line 4 is $4$ times the powers of line 5."
      },
      {
        "step": "For the weights $x$ and $z$ of $xa_n + zd_n$, $x \\cdot \\dfrac{3}{4} + z \\cdot \\dfrac{9}{19} = x$, so $z = \\dfrac{19}{36}x$; take $x = 36$ and $z = 19$.",
        "reason": "Isolating the variable: the weight on $a_n$ is unchanged by a step, and $z$ is isolated."
      },
      {
        "step": "$36a_{n+1} + 19d_{n+1} = 36a_n + 19d_n$",
        "reason": "Collecting like terms: $36$ times the first recursion and $19$ times the second, multiplied out and added."
      },
      {
        "step": "For every whole number $n$, $36a_n + 19d_n = 36a_0 + 19d_0 = 956$.",
        "reason": "Induction: line 8 is the inductive step, and $n = 0$ is the base case."
      },
      {
        "step": "$36a_n + 19a_n + 19(d_n - a_n) = 956$",
        "reason": "Multiplying out: $19(d_n - a_n) = 19d_n - 19a_n$, so this is line 9."
      },
      {
        "step": "$55a_n = 956 - 19(d_n - a_n)$",
        "reason": "Adding the same number to both sides: $19(d_n - a_n)$ is taken from both sides of line 10, and like terms are collected."
      },
      {
        "step": "The limit of $a_n$ is $\\dfrac{956 - 19 \\cdot 0}{55} = \\dfrac{956}{55}$.",
        "reason": "A limit passes through sums, products and quotients: lines 6 and 11."
      },
      {
        "step": "Both $a_n$ and $d_n$ have the limit $\\dfrac{956}{55}$.",
        "reason": "A limit passes through sums, products and quotients: $d_n = a_n + (d_n - a_n)$, with lines 6 and 12."
      }
    ]
  },
  {
    "id": "t240-k4-p03",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n$ and $d_n$ both have the limit $\\dfrac{1288}{107}$, where $a_0 = 9$, $d_0 = 14$, $a_{n+1} = \\dfrac{11a_n + 10d_n}{21}$ and $d_{n+1} = \\dfrac{4a_n + 9d_n}{13}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n$ and $d_n$ both have the limit $\\dfrac{1288}{107}$, where $a_0 = 9$, $d_0 = 14$, $a_{n+1} = \\dfrac{11a_n + 10d_n}{21}$ and $d_{n+1} = \\dfrac{4a_n + 9d_n}{13}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $d_0$ start the two sequences and each pair of terms gives the next pair."
      },
      {
        "step": "$d_{n+1} - a_{n+1} = \\dfrac{4a_n + 9d_n}{13} - \\dfrac{11a_n + 10d_n}{21}$",
        "reason": "Recursion: the first recursion is taken from the second."
      },
      {
        "step": "$d_{n+1} - a_{n+1} = \\dfrac{59}{273}(d_n - a_n)$",
        "reason": "Single fraction: over the bottom $273$, the terms in $a_n$ and $d_n$ collect to $\\dfrac{59}{273}$ times $d_n - a_n$."
      },
      {
        "step": "$d_n - a_n = 5\\left(\\dfrac{59}{273}\\right)^n$",
        "reason": "Geometric sequence: the differences have common ratio $\\dfrac{59}{273}$ and start at $d_0 - a_0 = 5$."
      },
      {
        "step": "The powers $\\left(\\dfrac{59}{273}\\right)^n$ have the limit $0$.",
        "reason": "Powers of a number between $-1$ and $1$ shrink to $0$: $\\dfrac{59}{273}$ lies between $-1$ and $1$."
      },
      {
        "step": "The differences $d_n - a_n$ have the limit $0$.",
        "reason": "A limit passes through sums, products and quotients: line 4 is $5$ times the powers of line 5."
      },
      {
        "step": "For the weights $x$ and $z$ of $xa_n + zd_n$, $x \\cdot \\dfrac{11}{21} + z \\cdot \\dfrac{4}{13} = x$, so $z = \\dfrac{65}{42}x$; take $x = 42$ and $z = 65$.",
        "reason": "Isolating the variable: the weight on $a_n$ is unchanged by a step, and $z$ is isolated."
      },
      {
        "step": "$42a_{n+1} + 65d_{n+1} = 42a_n + 65d_n$",
        "reason": "Collecting like terms: $42$ times the first recursion and $65$ times the second, multiplied out and added."
      },
      {
        "step": "For every whole number $n$, $42a_n + 65d_n = 42a_0 + 65d_0 = 1288$.",
        "reason": "Induction: line 8 is the inductive step, and $n = 0$ is the base case."
      },
      {
        "step": "$42a_n + 65a_n + 65(d_n - a_n) = 1288$",
        "reason": "Multiplying out: $65(d_n - a_n) = 65d_n - 65a_n$, so this is line 9."
      },
      {
        "step": "$107a_n = 1288 - 65(d_n - a_n)$",
        "reason": "Adding the same number to both sides: $65(d_n - a_n)$ is taken from both sides of line 10, and like terms are collected."
      },
      {
        "step": "The limit of $a_n$ is $\\dfrac{1288 - 65 \\cdot 0}{107} = \\dfrac{1288}{107}$.",
        "reason": "A limit passes through sums, products and quotients: lines 6 and 11."
      },
      {
        "step": "Both $a_n$ and $d_n$ have the limit $\\dfrac{1288}{107}$.",
        "reason": "A limit passes through sums, products and quotients: $d_n = a_n + (d_n - a_n)$, with lines 6 and 12."
      }
    ]
  },
  {
    "id": "t240-k4-p04",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n$ and $d_n$ both have the limit $\\dfrac{240}{17}$, where $a_0 = 10$, $d_0 = 16$, $a_{n+1} = \\dfrac{11a_n + 5d_n}{16}$ and $d_{n+1} = \\dfrac{a_n + 6d_n}{7}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n$ and $d_n$ both have the limit $\\dfrac{240}{17}$, where $a_0 = 10$, $d_0 = 16$, $a_{n+1} = \\dfrac{11a_n + 5d_n}{16}$ and $d_{n+1} = \\dfrac{a_n + 6d_n}{7}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $d_0$ start the two sequences and each pair of terms gives the next pair."
      },
      {
        "step": "$d_{n+1} - a_{n+1} = \\dfrac{a_n + 6d_n}{7} - \\dfrac{11a_n + 5d_n}{16}$",
        "reason": "Recursion: the first recursion is taken from the second."
      },
      {
        "step": "$d_{n+1} - a_{n+1} = \\dfrac{61}{112}(d_n - a_n)$",
        "reason": "Single fraction: over the bottom $112$, the terms in $a_n$ and $d_n$ collect to $\\dfrac{61}{112}$ times $d_n - a_n$."
      },
      {
        "step": "$d_n - a_n = 6\\left(\\dfrac{61}{112}\\right)^n$",
        "reason": "Geometric sequence: the differences have common ratio $\\dfrac{61}{112}$ and start at $d_0 - a_0 = 6$."
      },
      {
        "step": "The powers $\\left(\\dfrac{61}{112}\\right)^n$ have the limit $0$.",
        "reason": "Powers of a number between $-1$ and $1$ shrink to $0$: $\\dfrac{61}{112}$ lies between $-1$ and $1$."
      },
      {
        "step": "The differences $d_n - a_n$ have the limit $0$.",
        "reason": "A limit passes through sums, products and quotients: line 4 is $6$ times the powers of line 5."
      },
      {
        "step": "For the weights $x$ and $z$ of $xa_n + zd_n$, $x \\cdot \\dfrac{11}{16} + z \\cdot \\dfrac{1}{7} = x$, so $z = \\dfrac{35}{16}x$; take $x = 16$ and $z = 35$.",
        "reason": "Isolating the variable: the weight on $a_n$ is unchanged by a step, and $z$ is isolated."
      },
      {
        "step": "$16a_{n+1} + 35d_{n+1} = 16a_n + 35d_n$",
        "reason": "Collecting like terms: $16$ times the first recursion and $35$ times the second, multiplied out and added."
      },
      {
        "step": "For every whole number $n$, $16a_n + 35d_n = 16a_0 + 35d_0 = 720$.",
        "reason": "Induction: line 8 is the inductive step, and $n = 0$ is the base case."
      },
      {
        "step": "$16a_n + 35a_n + 35(d_n - a_n) = 720$",
        "reason": "Multiplying out: $35(d_n - a_n) = 35d_n - 35a_n$, so this is line 9."
      },
      {
        "step": "$51a_n = 720 - 35(d_n - a_n)$",
        "reason": "Adding the same number to both sides: $35(d_n - a_n)$ is taken from both sides of line 10, and like terms are collected."
      },
      {
        "step": "The limit of $a_n$ is $\\dfrac{720 - 35 \\cdot 0}{51} = \\dfrac{240}{17}$.",
        "reason": "A limit passes through sums, products and quotients: lines 6 and 11."
      },
      {
        "step": "Both $a_n$ and $d_n$ have the limit $\\dfrac{240}{17}$.",
        "reason": "A limit passes through sums, products and quotients: $d_n = a_n + (d_n - a_n)$, with lines 6 and 12."
      }
    ]
  },
  {
    "id": "t240-k4-p05",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n$ and $d_n$ both have the limit $\\dfrac{520}{53}$, where $a_0 = 8$, $d_0 = 10$, $a_{n+1} = \\dfrac{a_n + 4d_n}{5}$ and $d_{n+1} = \\dfrac{a_n + 11d_n}{12}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n$ and $d_n$ both have the limit $\\dfrac{520}{53}$, where $a_0 = 8$, $d_0 = 10$, $a_{n+1} = \\dfrac{a_n + 4d_n}{5}$ and $d_{n+1} = \\dfrac{a_n + 11d_n}{12}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $d_0$ start the two sequences and each pair of terms gives the next pair."
      },
      {
        "step": "$d_{n+1} - a_{n+1} = \\dfrac{a_n + 11d_n}{12} - \\dfrac{a_n + 4d_n}{5}$",
        "reason": "Recursion: the first recursion is taken from the second."
      },
      {
        "step": "$d_{n+1} - a_{n+1} = \\dfrac{7}{60}(d_n - a_n)$",
        "reason": "Single fraction: over the bottom $60$, the terms in $a_n$ and $d_n$ collect to $\\dfrac{7}{60}$ times $d_n - a_n$."
      },
      {
        "step": "$d_n - a_n = 2\\left(\\dfrac{7}{60}\\right)^n$",
        "reason": "Geometric sequence: the differences have common ratio $\\dfrac{7}{60}$ and start at $d_0 - a_0 = 2$."
      },
      {
        "step": "The powers $\\left(\\dfrac{7}{60}\\right)^n$ have the limit $0$.",
        "reason": "Powers of a number between $-1$ and $1$ shrink to $0$: $\\dfrac{7}{60}$ lies between $-1$ and $1$."
      },
      {
        "step": "The differences $d_n - a_n$ have the limit $0$.",
        "reason": "A limit passes through sums, products and quotients: line 4 is $2$ times the powers of line 5."
      },
      {
        "step": "For the weights $x$ and $z$ of $xa_n + zd_n$, $x \\cdot \\dfrac{1}{5} + z \\cdot \\dfrac{1}{12} = x$, so $z = \\dfrac{48}{5}x$; take $x = 5$ and $z = 48$.",
        "reason": "Isolating the variable: the weight on $a_n$ is unchanged by a step, and $z$ is isolated."
      },
      {
        "step": "$5a_{n+1} + 48d_{n+1} = 5a_n + 48d_n$",
        "reason": "Collecting like terms: $5$ times the first recursion and $48$ times the second, multiplied out and added."
      },
      {
        "step": "For every whole number $n$, $5a_n + 48d_n = 5a_0 + 48d_0 = 520$.",
        "reason": "Induction: line 8 is the inductive step, and $n = 0$ is the base case."
      },
      {
        "step": "$5a_n + 48a_n + 48(d_n - a_n) = 520$",
        "reason": "Multiplying out: $48(d_n - a_n) = 48d_n - 48a_n$, so this is line 9."
      },
      {
        "step": "$53a_n = 520 - 48(d_n - a_n)$",
        "reason": "Adding the same number to both sides: $48(d_n - a_n)$ is taken from both sides of line 10, and like terms are collected."
      },
      {
        "step": "The limit of $a_n$ is $\\dfrac{520 - 48 \\cdot 0}{53} = \\dfrac{520}{53}$.",
        "reason": "A limit passes through sums, products and quotients: lines 6 and 11."
      },
      {
        "step": "Both $a_n$ and $d_n$ have the limit $\\dfrac{520}{53}$.",
        "reason": "A limit passes through sums, products and quotients: $d_n = a_n + (d_n - a_n)$, with lines 6 and 12."
      }
    ]
  },
  {
    "id": "t240-k4-p06",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n$ and $d_n$ both have the limit $\\dfrac{559}{77}$, where $a_0 = 17$, $d_0 = 2$, $a_{n+1} = \\dfrac{4a_n + 5d_n}{9}$ and $d_{n+1} = \\dfrac{3a_n + 7d_n}{10}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n$ and $d_n$ both have the limit $\\dfrac{559}{77}$, where $a_0 = 17$, $d_0 = 2$, $a_{n+1} = \\dfrac{4a_n + 5d_n}{9}$ and $d_{n+1} = \\dfrac{3a_n + 7d_n}{10}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $d_0$ start the two sequences and each pair of terms gives the next pair."
      },
      {
        "step": "$d_{n+1} - a_{n+1} = \\dfrac{3a_n + 7d_n}{10} - \\dfrac{4a_n + 5d_n}{9}$",
        "reason": "Recursion: the first recursion is taken from the second."
      },
      {
        "step": "$d_{n+1} - a_{n+1} = \\dfrac{13}{90}(d_n - a_n)$",
        "reason": "Single fraction: over the bottom $90$, the terms in $a_n$ and $d_n$ collect to $\\dfrac{13}{90}$ times $d_n - a_n$."
      },
      {
        "step": "$d_n - a_n = -15\\left(\\dfrac{13}{90}\\right)^n$",
        "reason": "Geometric sequence: the differences have common ratio $\\dfrac{13}{90}$ and start at $d_0 - a_0 = -15$."
      },
      {
        "step": "The powers $\\left(\\dfrac{13}{90}\\right)^n$ have the limit $0$.",
        "reason": "Powers of a number between $-1$ and $1$ shrink to $0$: $\\dfrac{13}{90}$ lies between $-1$ and $1$."
      },
      {
        "step": "The differences $d_n - a_n$ have the limit $0$.",
        "reason": "A limit passes through sums, products and quotients: line 4 is $-15$ times the powers of line 5."
      },
      {
        "step": "For the weights $x$ and $z$ of $xa_n + zd_n$, $x \\cdot \\dfrac{4}{9} + z \\cdot \\dfrac{3}{10} = x$, so $z = \\dfrac{50}{27}x$; take $x = 27$ and $z = 50$.",
        "reason": "Isolating the variable: the weight on $a_n$ is unchanged by a step, and $z$ is isolated."
      },
      {
        "step": "$27a_{n+1} + 50d_{n+1} = 27a_n + 50d_n$",
        "reason": "Collecting like terms: $27$ times the first recursion and $50$ times the second, multiplied out and added."
      },
      {
        "step": "For every whole number $n$, $27a_n + 50d_n = 27a_0 + 50d_0 = 559$.",
        "reason": "Induction: line 8 is the inductive step, and $n = 0$ is the base case."
      },
      {
        "step": "$27a_n + 50a_n + 50(d_n - a_n) = 559$",
        "reason": "Multiplying out: $50(d_n - a_n) = 50d_n - 50a_n$, so this is line 9."
      },
      {
        "step": "$77a_n = 559 - 50(d_n - a_n)$",
        "reason": "Adding the same number to both sides: $50(d_n - a_n)$ is taken from both sides of line 10, and like terms are collected."
      },
      {
        "step": "The limit of $a_n$ is $\\dfrac{559 - 50 \\cdot 0}{77} = \\dfrac{559}{77}$.",
        "reason": "A limit passes through sums, products and quotients: lines 6 and 11."
      },
      {
        "step": "Both $a_n$ and $d_n$ have the limit $\\dfrac{559}{77}$.",
        "reason": "A limit passes through sums, products and quotients: $d_n = a_n + (d_n - a_n)$, with lines 6 and 12."
      }
    ]
  },
  {
    "id": "t240-k4-p07",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n$ and $d_n$ both have the limit $\\dfrac{609}{71}$, where $a_0 = 3$, $d_0 = 14$, $a_{n+1} = \\dfrac{11a_n + 9d_n}{20}$ and $d_{n+1} = \\dfrac{7a_n + 9d_n}{16}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n$ and $d_n$ both have the limit $\\dfrac{609}{71}$, where $a_0 = 3$, $d_0 = 14$, $a_{n+1} = \\dfrac{11a_n + 9d_n}{20}$ and $d_{n+1} = \\dfrac{7a_n + 9d_n}{16}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $d_0$ start the two sequences and each pair of terms gives the next pair."
      },
      {
        "step": "$d_{n+1} - a_{n+1} = \\dfrac{7a_n + 9d_n}{16} - \\dfrac{11a_n + 9d_n}{20}$",
        "reason": "Recursion: the first recursion is taken from the second."
      },
      {
        "step": "$d_{n+1} - a_{n+1} = \\dfrac{9}{80}(d_n - a_n)$",
        "reason": "Single fraction: over the bottom $320$, the terms in $a_n$ and $d_n$ collect to $\\dfrac{9}{80}$ times $d_n - a_n$."
      },
      {
        "step": "$d_n - a_n = 11\\left(\\dfrac{9}{80}\\right)^n$",
        "reason": "Geometric sequence: the differences have common ratio $\\dfrac{9}{80}$ and start at $d_0 - a_0 = 11$."
      },
      {
        "step": "The powers $\\left(\\dfrac{9}{80}\\right)^n$ have the limit $0$.",
        "reason": "Powers of a number between $-1$ and $1$ shrink to $0$: $\\dfrac{9}{80}$ lies between $-1$ and $1$."
      },
      {
        "step": "The differences $d_n - a_n$ have the limit $0$.",
        "reason": "A limit passes through sums, products and quotients: line 4 is $11$ times the powers of line 5."
      },
      {
        "step": "For the weights $x$ and $z$ of $xa_n + zd_n$, $x \\cdot \\dfrac{11}{20} + z \\cdot \\dfrac{7}{16} = x$, so $z = \\dfrac{36}{35}x$; take $x = 35$ and $z = 36$.",
        "reason": "Isolating the variable: the weight on $a_n$ is unchanged by a step, and $z$ is isolated."
      },
      {
        "step": "$35a_{n+1} + 36d_{n+1} = 35a_n + 36d_n$",
        "reason": "Collecting like terms: $35$ times the first recursion and $36$ times the second, multiplied out and added."
      },
      {
        "step": "For every whole number $n$, $35a_n + 36d_n = 35a_0 + 36d_0 = 609$.",
        "reason": "Induction: line 8 is the inductive step, and $n = 0$ is the base case."
      },
      {
        "step": "$35a_n + 36a_n + 36(d_n - a_n) = 609$",
        "reason": "Multiplying out: $36(d_n - a_n) = 36d_n - 36a_n$, so this is line 9."
      },
      {
        "step": "$71a_n = 609 - 36(d_n - a_n)$",
        "reason": "Adding the same number to both sides: $36(d_n - a_n)$ is taken from both sides of line 10, and like terms are collected."
      },
      {
        "step": "The limit of $a_n$ is $\\dfrac{609 - 36 \\cdot 0}{71} = \\dfrac{609}{71}$.",
        "reason": "A limit passes through sums, products and quotients: lines 6 and 11."
      },
      {
        "step": "Both $a_n$ and $d_n$ have the limit $\\dfrac{609}{71}$.",
        "reason": "A limit passes through sums, products and quotients: $d_n = a_n + (d_n - a_n)$, with lines 6 and 12."
      }
    ]
  },
  {
    "id": "t240-k4-p08",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n$ and $d_n$ both have the limit $\\dfrac{410}{43}$, where $a_0 = 5$, $d_0 = 11$, $a_{n+1} = \\dfrac{2a_n + 5d_n}{7}$ and $d_{n+1} = \\dfrac{3a_n + 10d_n}{13}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n$ and $d_n$ both have the limit $\\dfrac{410}{43}$, where $a_0 = 5$, $d_0 = 11$, $a_{n+1} = \\dfrac{2a_n + 5d_n}{7}$ and $d_{n+1} = \\dfrac{3a_n + 10d_n}{13}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $d_0$ start the two sequences and each pair of terms gives the next pair."
      },
      {
        "step": "$d_{n+1} - a_{n+1} = \\dfrac{3a_n + 10d_n}{13} - \\dfrac{2a_n + 5d_n}{7}$",
        "reason": "Recursion: the first recursion is taken from the second."
      },
      {
        "step": "$d_{n+1} - a_{n+1} = \\dfrac{5}{91}(d_n - a_n)$",
        "reason": "Single fraction: over the bottom $91$, the terms in $a_n$ and $d_n$ collect to $\\dfrac{5}{91}$ times $d_n - a_n$."
      },
      {
        "step": "$d_n - a_n = 6\\left(\\dfrac{5}{91}\\right)^n$",
        "reason": "Geometric sequence: the differences have common ratio $\\dfrac{5}{91}$ and start at $d_0 - a_0 = 6$."
      },
      {
        "step": "The powers $\\left(\\dfrac{5}{91}\\right)^n$ have the limit $0$.",
        "reason": "Powers of a number between $-1$ and $1$ shrink to $0$: $\\dfrac{5}{91}$ lies between $-1$ and $1$."
      },
      {
        "step": "The differences $d_n - a_n$ have the limit $0$.",
        "reason": "A limit passes through sums, products and quotients: line 4 is $6$ times the powers of line 5."
      },
      {
        "step": "For the weights $x$ and $z$ of $xa_n + zd_n$, $x \\cdot \\dfrac{2}{7} + z \\cdot \\dfrac{3}{13} = x$, so $z = \\dfrac{65}{21}x$; take $x = 21$ and $z = 65$.",
        "reason": "Isolating the variable: the weight on $a_n$ is unchanged by a step, and $z$ is isolated."
      },
      {
        "step": "$21a_{n+1} + 65d_{n+1} = 21a_n + 65d_n$",
        "reason": "Collecting like terms: $21$ times the first recursion and $65$ times the second, multiplied out and added."
      },
      {
        "step": "For every whole number $n$, $21a_n + 65d_n = 21a_0 + 65d_0 = 820$.",
        "reason": "Induction: line 8 is the inductive step, and $n = 0$ is the base case."
      },
      {
        "step": "$21a_n + 65a_n + 65(d_n - a_n) = 820$",
        "reason": "Multiplying out: $65(d_n - a_n) = 65d_n - 65a_n$, so this is line 9."
      },
      {
        "step": "$86a_n = 820 - 65(d_n - a_n)$",
        "reason": "Adding the same number to both sides: $65(d_n - a_n)$ is taken from both sides of line 10, and like terms are collected."
      },
      {
        "step": "The limit of $a_n$ is $\\dfrac{820 - 65 \\cdot 0}{86} = \\dfrac{410}{43}$.",
        "reason": "A limit passes through sums, products and quotients: lines 6 and 11."
      },
      {
        "step": "Both $a_n$ and $d_n$ have the limit $\\dfrac{410}{43}$.",
        "reason": "A limit passes through sums, products and quotients: $d_n = a_n + (d_n - a_n)$, with lines 6 and 12."
      }
    ]
  },
  {
    "id": "t240-k4-p09",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n$ and $d_n$ both have the limit $\\dfrac{547}{51}$, where $a_0 = 11$, $d_0 = 9$, $a_{n+1} = \\dfrac{7a_n + d_n}{8}$ and $d_{n+1} = \\dfrac{11a_n + 3d_n}{14}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n$ and $d_n$ both have the limit $\\dfrac{547}{51}$, where $a_0 = 11$, $d_0 = 9$, $a_{n+1} = \\dfrac{7a_n + d_n}{8}$ and $d_{n+1} = \\dfrac{11a_n + 3d_n}{14}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $d_0$ start the two sequences and each pair of terms gives the next pair."
      },
      {
        "step": "$d_{n+1} - a_{n+1} = \\dfrac{11a_n + 3d_n}{14} - \\dfrac{7a_n + d_n}{8}$",
        "reason": "Recursion: the first recursion is taken from the second."
      },
      {
        "step": "$d_{n+1} - a_{n+1} = \\dfrac{5}{56}(d_n - a_n)$",
        "reason": "Single fraction: over the bottom $112$, the terms in $a_n$ and $d_n$ collect to $\\dfrac{5}{56}$ times $d_n - a_n$."
      },
      {
        "step": "$d_n - a_n = -2\\left(\\dfrac{5}{56}\\right)^n$",
        "reason": "Geometric sequence: the differences have common ratio $\\dfrac{5}{56}$ and start at $d_0 - a_0 = -2$."
      },
      {
        "step": "The powers $\\left(\\dfrac{5}{56}\\right)^n$ have the limit $0$.",
        "reason": "Powers of a number between $-1$ and $1$ shrink to $0$: $\\dfrac{5}{56}$ lies between $-1$ and $1$."
      },
      {
        "step": "The differences $d_n - a_n$ have the limit $0$.",
        "reason": "A limit passes through sums, products and quotients: line 4 is $-2$ times the powers of line 5."
      },
      {
        "step": "For the weights $x$ and $z$ of $xa_n + zd_n$, $x \\cdot \\dfrac{7}{8} + z \\cdot \\dfrac{11}{14} = x$, so $z = \\dfrac{7}{44}x$; take $x = 44$ and $z = 7$.",
        "reason": "Isolating the variable: the weight on $a_n$ is unchanged by a step, and $z$ is isolated."
      },
      {
        "step": "$44a_{n+1} + 7d_{n+1} = 44a_n + 7d_n$",
        "reason": "Collecting like terms: $44$ times the first recursion and $7$ times the second, multiplied out and added."
      },
      {
        "step": "For every whole number $n$, $44a_n + 7d_n = 44a_0 + 7d_0 = 547$.",
        "reason": "Induction: line 8 is the inductive step, and $n = 0$ is the base case."
      },
      {
        "step": "$44a_n + 7a_n + 7(d_n - a_n) = 547$",
        "reason": "Multiplying out: $7(d_n - a_n) = 7d_n - 7a_n$, so this is line 9."
      },
      {
        "step": "$51a_n = 547 - 7(d_n - a_n)$",
        "reason": "Adding the same number to both sides: $7(d_n - a_n)$ is taken from both sides of line 10, and like terms are collected."
      },
      {
        "step": "The limit of $a_n$ is $\\dfrac{547 - 7 \\cdot 0}{51} = \\dfrac{547}{51}$.",
        "reason": "A limit passes through sums, products and quotients: lines 6 and 11."
      },
      {
        "step": "Both $a_n$ and $d_n$ have the limit $\\dfrac{547}{51}$.",
        "reason": "A limit passes through sums, products and quotients: $d_n = a_n + (d_n - a_n)$, with lines 6 and 12."
      }
    ]
  },
  {
    "id": "t240-k4-p10",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n$ and $d_n$ both have the limit $\\dfrac{739}{127}$, where $a_0 = 7$, $d_0 = 5$, $a_{n+1} = \\dfrac{8a_n + 5d_n}{13}$ and $d_{n+1} = \\dfrac{4a_n + 11d_n}{15}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n$ and $d_n$ both have the limit $\\dfrac{739}{127}$, where $a_0 = 7$, $d_0 = 5$, $a_{n+1} = \\dfrac{8a_n + 5d_n}{13}$ and $d_{n+1} = \\dfrac{4a_n + 11d_n}{15}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $d_0$ start the two sequences and each pair of terms gives the next pair."
      },
      {
        "step": "$d_{n+1} - a_{n+1} = \\dfrac{4a_n + 11d_n}{15} - \\dfrac{8a_n + 5d_n}{13}$",
        "reason": "Recursion: the first recursion is taken from the second."
      },
      {
        "step": "$d_{n+1} - a_{n+1} = \\dfrac{68}{195}(d_n - a_n)$",
        "reason": "Single fraction: over the bottom $195$, the terms in $a_n$ and $d_n$ collect to $\\dfrac{68}{195}$ times $d_n - a_n$."
      },
      {
        "step": "$d_n - a_n = -2\\left(\\dfrac{68}{195}\\right)^n$",
        "reason": "Geometric sequence: the differences have common ratio $\\dfrac{68}{195}$ and start at $d_0 - a_0 = -2$."
      },
      {
        "step": "The powers $\\left(\\dfrac{68}{195}\\right)^n$ have the limit $0$.",
        "reason": "Powers of a number between $-1$ and $1$ shrink to $0$: $\\dfrac{68}{195}$ lies between $-1$ and $1$."
      },
      {
        "step": "The differences $d_n - a_n$ have the limit $0$.",
        "reason": "A limit passes through sums, products and quotients: line 4 is $-2$ times the powers of line 5."
      },
      {
        "step": "For the weights $x$ and $z$ of $xa_n + zd_n$, $x \\cdot \\dfrac{8}{13} + z \\cdot \\dfrac{4}{15} = x$, so $z = \\dfrac{75}{52}x$; take $x = 52$ and $z = 75$.",
        "reason": "Isolating the variable: the weight on $a_n$ is unchanged by a step, and $z$ is isolated."
      },
      {
        "step": "$52a_{n+1} + 75d_{n+1} = 52a_n + 75d_n$",
        "reason": "Collecting like terms: $52$ times the first recursion and $75$ times the second, multiplied out and added."
      },
      {
        "step": "For every whole number $n$, $52a_n + 75d_n = 52a_0 + 75d_0 = 739$.",
        "reason": "Induction: line 8 is the inductive step, and $n = 0$ is the base case."
      },
      {
        "step": "$52a_n + 75a_n + 75(d_n - a_n) = 739$",
        "reason": "Multiplying out: $75(d_n - a_n) = 75d_n - 75a_n$, so this is line 9."
      },
      {
        "step": "$127a_n = 739 - 75(d_n - a_n)$",
        "reason": "Adding the same number to both sides: $75(d_n - a_n)$ is taken from both sides of line 10, and like terms are collected."
      },
      {
        "step": "The limit of $a_n$ is $\\dfrac{739 - 75 \\cdot 0}{127} = \\dfrac{739}{127}$.",
        "reason": "A limit passes through sums, products and quotients: lines 6 and 11."
      },
      {
        "step": "Both $a_n$ and $d_n$ have the limit $\\dfrac{739}{127}$.",
        "reason": "A limit passes through sums, products and quotients: $d_n = a_n + (d_n - a_n)$, with lines 6 and 12."
      }
    ]
  },
  {
    "id": "t240-k4-p11",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n$ and $d_n$ both have the limit $\\dfrac{887}{54}$, where $a_0 = 18$, $d_0 = 15$, $a_{n+1} = \\dfrac{6a_n + 5d_n}{11}$ and $d_{n+1} = \\dfrac{7a_n + 10d_n}{17}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n$ and $d_n$ both have the limit $\\dfrac{887}{54}$, where $a_0 = 18$, $d_0 = 15$, $a_{n+1} = \\dfrac{6a_n + 5d_n}{11}$ and $d_{n+1} = \\dfrac{7a_n + 10d_n}{17}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $d_0$ start the two sequences and each pair of terms gives the next pair."
      },
      {
        "step": "$d_{n+1} - a_{n+1} = \\dfrac{7a_n + 10d_n}{17} - \\dfrac{6a_n + 5d_n}{11}$",
        "reason": "Recursion: the first recursion is taken from the second."
      },
      {
        "step": "$d_{n+1} - a_{n+1} = \\dfrac{25}{187}(d_n - a_n)$",
        "reason": "Single fraction: over the bottom $187$, the terms in $a_n$ and $d_n$ collect to $\\dfrac{25}{187}$ times $d_n - a_n$."
      },
      {
        "step": "$d_n - a_n = -3\\left(\\dfrac{25}{187}\\right)^n$",
        "reason": "Geometric sequence: the differences have common ratio $\\dfrac{25}{187}$ and start at $d_0 - a_0 = -3$."
      },
      {
        "step": "The powers $\\left(\\dfrac{25}{187}\\right)^n$ have the limit $0$.",
        "reason": "Powers of a number between $-1$ and $1$ shrink to $0$: $\\dfrac{25}{187}$ lies between $-1$ and $1$."
      },
      {
        "step": "The differences $d_n - a_n$ have the limit $0$.",
        "reason": "A limit passes through sums, products and quotients: line 4 is $-3$ times the powers of line 5."
      },
      {
        "step": "For the weights $x$ and $z$ of $xa_n + zd_n$, $x \\cdot \\dfrac{6}{11} + z \\cdot \\dfrac{7}{17} = x$, so $z = \\dfrac{85}{77}x$; take $x = 77$ and $z = 85$.",
        "reason": "Isolating the variable: the weight on $a_n$ is unchanged by a step, and $z$ is isolated."
      },
      {
        "step": "$77a_{n+1} + 85d_{n+1} = 77a_n + 85d_n$",
        "reason": "Collecting like terms: $77$ times the first recursion and $85$ times the second, multiplied out and added."
      },
      {
        "step": "For every whole number $n$, $77a_n + 85d_n = 77a_0 + 85d_0 = 2661$.",
        "reason": "Induction: line 8 is the inductive step, and $n = 0$ is the base case."
      },
      {
        "step": "$77a_n + 85a_n + 85(d_n - a_n) = 2661$",
        "reason": "Multiplying out: $85(d_n - a_n) = 85d_n - 85a_n$, so this is line 9."
      },
      {
        "step": "$162a_n = 2661 - 85(d_n - a_n)$",
        "reason": "Adding the same number to both sides: $85(d_n - a_n)$ is taken from both sides of line 10, and like terms are collected."
      },
      {
        "step": "The limit of $a_n$ is $\\dfrac{2661 - 85 \\cdot 0}{162} = \\dfrac{887}{54}$.",
        "reason": "A limit passes through sums, products and quotients: lines 6 and 11."
      },
      {
        "step": "Both $a_n$ and $d_n$ have the limit $\\dfrac{887}{54}$.",
        "reason": "A limit passes through sums, products and quotients: $d_n = a_n + (d_n - a_n)$, with lines 6 and 12."
      }
    ]
  },
  {
    "id": "t240-k4-p12",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n$ and $d_n$ both have the limit $\\dfrac{621}{47}$, where $a_0 = 18$, $d_0 = 8$, $a_{n+1} = \\dfrac{9a_n + 5d_n}{14}$ and $d_{n+1} = \\dfrac{7a_n + 11d_n}{18}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n$ and $d_n$ both have the limit $\\dfrac{621}{47}$, where $a_0 = 18$, $d_0 = 8$, $a_{n+1} = \\dfrac{9a_n + 5d_n}{14}$ and $d_{n+1} = \\dfrac{7a_n + 11d_n}{18}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $d_0$ start the two sequences and each pair of terms gives the next pair."
      },
      {
        "step": "$d_{n+1} - a_{n+1} = \\dfrac{7a_n + 11d_n}{18} - \\dfrac{9a_n + 5d_n}{14}$",
        "reason": "Recursion: the first recursion is taken from the second."
      },
      {
        "step": "$d_{n+1} - a_{n+1} = \\dfrac{16}{63}(d_n - a_n)$",
        "reason": "Single fraction: over the bottom $252$, the terms in $a_n$ and $d_n$ collect to $\\dfrac{16}{63}$ times $d_n - a_n$."
      },
      {
        "step": "$d_n - a_n = -10\\left(\\dfrac{16}{63}\\right)^n$",
        "reason": "Geometric sequence: the differences have common ratio $\\dfrac{16}{63}$ and start at $d_0 - a_0 = -10$."
      },
      {
        "step": "The powers $\\left(\\dfrac{16}{63}\\right)^n$ have the limit $0$.",
        "reason": "Powers of a number between $-1$ and $1$ shrink to $0$: $\\dfrac{16}{63}$ lies between $-1$ and $1$."
      },
      {
        "step": "The differences $d_n - a_n$ have the limit $0$.",
        "reason": "A limit passes through sums, products and quotients: line 4 is $-10$ times the powers of line 5."
      },
      {
        "step": "For the weights $x$ and $z$ of $xa_n + zd_n$, $x \\cdot \\dfrac{9}{14} + z \\cdot \\dfrac{7}{18} = x$, so $z = \\dfrac{45}{49}x$; take $x = 49$ and $z = 45$.",
        "reason": "Isolating the variable: the weight on $a_n$ is unchanged by a step, and $z$ is isolated."
      },
      {
        "step": "$49a_{n+1} + 45d_{n+1} = 49a_n + 45d_n$",
        "reason": "Collecting like terms: $49$ times the first recursion and $45$ times the second, multiplied out and added."
      },
      {
        "step": "For every whole number $n$, $49a_n + 45d_n = 49a_0 + 45d_0 = 1242$.",
        "reason": "Induction: line 8 is the inductive step, and $n = 0$ is the base case."
      },
      {
        "step": "$49a_n + 45a_n + 45(d_n - a_n) = 1242$",
        "reason": "Multiplying out: $45(d_n - a_n) = 45d_n - 45a_n$, so this is line 9."
      },
      {
        "step": "$94a_n = 1242 - 45(d_n - a_n)$",
        "reason": "Adding the same number to both sides: $45(d_n - a_n)$ is taken from both sides of line 10, and like terms are collected."
      },
      {
        "step": "The limit of $a_n$ is $\\dfrac{1242 - 45 \\cdot 0}{94} = \\dfrac{621}{47}$.",
        "reason": "A limit passes through sums, products and quotients: lines 6 and 11."
      },
      {
        "step": "Both $a_n$ and $d_n$ have the limit $\\dfrac{621}{47}$.",
        "reason": "A limit passes through sums, products and quotients: $d_n = a_n + (d_n - a_n)$, with lines 6 and 12."
      }
    ]
  },
  {
    "id": "t240-k4-p13",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n$ and $d_n$ both have the limit $\\dfrac{1028}{109}$, where $a_0 = 2$, $d_0 = 20$, $a_{n+1} = \\dfrac{5a_n + 3d_n}{8}$ and $d_{n+1} = \\dfrac{8a_n + 7d_n}{15}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n$ and $d_n$ both have the limit $\\dfrac{1028}{109}$, where $a_0 = 2$, $d_0 = 20$, $a_{n+1} = \\dfrac{5a_n + 3d_n}{8}$ and $d_{n+1} = \\dfrac{8a_n + 7d_n}{15}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $d_0$ start the two sequences and each pair of terms gives the next pair."
      },
      {
        "step": "$d_{n+1} - a_{n+1} = \\dfrac{8a_n + 7d_n}{15} - \\dfrac{5a_n + 3d_n}{8}$",
        "reason": "Recursion: the first recursion is taken from the second."
      },
      {
        "step": "$d_{n+1} - a_{n+1} = \\dfrac{11}{120}(d_n - a_n)$",
        "reason": "Single fraction: over the bottom $120$, the terms in $a_n$ and $d_n$ collect to $\\dfrac{11}{120}$ times $d_n - a_n$."
      },
      {
        "step": "$d_n - a_n = 18\\left(\\dfrac{11}{120}\\right)^n$",
        "reason": "Geometric sequence: the differences have common ratio $\\dfrac{11}{120}$ and start at $d_0 - a_0 = 18$."
      },
      {
        "step": "The powers $\\left(\\dfrac{11}{120}\\right)^n$ have the limit $0$.",
        "reason": "Powers of a number between $-1$ and $1$ shrink to $0$: $\\dfrac{11}{120}$ lies between $-1$ and $1$."
      },
      {
        "step": "The differences $d_n - a_n$ have the limit $0$.",
        "reason": "A limit passes through sums, products and quotients: line 4 is $18$ times the powers of line 5."
      },
      {
        "step": "For the weights $x$ and $z$ of $xa_n + zd_n$, $x \\cdot \\dfrac{5}{8} + z \\cdot \\dfrac{8}{15} = x$, so $z = \\dfrac{45}{64}x$; take $x = 64$ and $z = 45$.",
        "reason": "Isolating the variable: the weight on $a_n$ is unchanged by a step, and $z$ is isolated."
      },
      {
        "step": "$64a_{n+1} + 45d_{n+1} = 64a_n + 45d_n$",
        "reason": "Collecting like terms: $64$ times the first recursion and $45$ times the second, multiplied out and added."
      },
      {
        "step": "For every whole number $n$, $64a_n + 45d_n = 64a_0 + 45d_0 = 1028$.",
        "reason": "Induction: line 8 is the inductive step, and $n = 0$ is the base case."
      },
      {
        "step": "$64a_n + 45a_n + 45(d_n - a_n) = 1028$",
        "reason": "Multiplying out: $45(d_n - a_n) = 45d_n - 45a_n$, so this is line 9."
      },
      {
        "step": "$109a_n = 1028 - 45(d_n - a_n)$",
        "reason": "Adding the same number to both sides: $45(d_n - a_n)$ is taken from both sides of line 10, and like terms are collected."
      },
      {
        "step": "The limit of $a_n$ is $\\dfrac{1028 - 45 \\cdot 0}{109} = \\dfrac{1028}{109}$.",
        "reason": "A limit passes through sums, products and quotients: lines 6 and 11."
      },
      {
        "step": "Both $a_n$ and $d_n$ have the limit $\\dfrac{1028}{109}$.",
        "reason": "A limit passes through sums, products and quotients: $d_n = a_n + (d_n - a_n)$, with lines 6 and 12."
      }
    ]
  },
  {
    "id": "t240-k4-p14",
    "topic": "monotone-bounded-sequences",
    "kind": "t240-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n$ and $d_n$ both have the limit $\\dfrac{253}{18}$, where $a_0 = 16$, $d_0 = 11$, $a_{n+1} = \\dfrac{7a_n + 4d_n}{11}$ and $d_{n+1} = \\dfrac{4a_n + 3d_n}{7}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n$ and $d_n$ both have the limit $\\dfrac{253}{18}$, where $a_0 = 16$, $d_0 = 11$, $a_{n+1} = \\dfrac{7a_n + 4d_n}{11}$ and $d_{n+1} = \\dfrac{4a_n + 3d_n}{7}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; $a_0$ and $d_0$ start the two sequences and each pair of terms gives the next pair."
      },
      {
        "step": "$d_{n+1} - a_{n+1} = \\dfrac{4a_n + 3d_n}{7} - \\dfrac{7a_n + 4d_n}{11}$",
        "reason": "Recursion: the first recursion is taken from the second."
      },
      {
        "step": "$d_{n+1} - a_{n+1} = \\dfrac{5}{77}(d_n - a_n)$",
        "reason": "Single fraction: over the bottom $77$, the terms in $a_n$ and $d_n$ collect to $\\dfrac{5}{77}$ times $d_n - a_n$."
      },
      {
        "step": "$d_n - a_n = -5\\left(\\dfrac{5}{77}\\right)^n$",
        "reason": "Geometric sequence: the differences have common ratio $\\dfrac{5}{77}$ and start at $d_0 - a_0 = -5$."
      },
      {
        "step": "The powers $\\left(\\dfrac{5}{77}\\right)^n$ have the limit $0$.",
        "reason": "Powers of a number between $-1$ and $1$ shrink to $0$: $\\dfrac{5}{77}$ lies between $-1$ and $1$."
      },
      {
        "step": "The differences $d_n - a_n$ have the limit $0$.",
        "reason": "A limit passes through sums, products and quotients: line 4 is $-5$ times the powers of line 5."
      },
      {
        "step": "For the weights $x$ and $z$ of $xa_n + zd_n$, $x \\cdot \\dfrac{7}{11} + z \\cdot \\dfrac{4}{7} = x$, so $z = \\dfrac{7}{11}x$; take $x = 11$ and $z = 7$.",
        "reason": "Isolating the variable: the weight on $a_n$ is unchanged by a step, and $z$ is isolated."
      },
      {
        "step": "$11a_{n+1} + 7d_{n+1} = 11a_n + 7d_n$",
        "reason": "Collecting like terms: $11$ times the first recursion and $7$ times the second, multiplied out and added."
      },
      {
        "step": "For every whole number $n$, $11a_n + 7d_n = 11a_0 + 7d_0 = 253$.",
        "reason": "Induction: line 8 is the inductive step, and $n = 0$ is the base case."
      },
      {
        "step": "$11a_n + 7a_n + 7(d_n - a_n) = 253$",
        "reason": "Multiplying out: $7(d_n - a_n) = 7d_n - 7a_n$, so this is line 9."
      },
      {
        "step": "$18a_n = 253 - 7(d_n - a_n)$",
        "reason": "Adding the same number to both sides: $7(d_n - a_n)$ is taken from both sides of line 10, and like terms are collected."
      },
      {
        "step": "The limit of $a_n$ is $\\dfrac{253 - 7 \\cdot 0}{18} = \\dfrac{253}{18}$.",
        "reason": "A limit passes through sums, products and quotients: lines 6 and 11."
      },
      {
        "step": "Both $a_n$ and $d_n$ have the limit $\\dfrac{253}{18}$.",
        "reason": "A limit passes through sums, products and quotients: $d_n = a_n + (d_n - a_n)$, with lines 6 and 12."
      }
    ]
  }
]
