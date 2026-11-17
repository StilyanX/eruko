export default [
  {
    "id": "t241-k1-p01",
    "topic": "recurrences-made-linear",
    "kind": "t241-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that every term $a_n$ is an integer, where $a_0 = 2$, $a_1 = 8$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 700}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that every term $a_n$ is an integer, where $a_0 = 2$, $a_1 = 8$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 700}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
      },
      {
        "step": "Every term $a_n$ is positive.",
        "reason": "Induction: $a_0$ and $a_1$ are positive, and when $a_n$ and $a_{n+1}$ are positive, so are the top $a_{n+1}^2 + 700$ and the bottom $a_n$ of the rule."
      },
      {
        "step": "$a_{n+2}a_n = a_{n+1}^2 + 700$",
        "reason": "Multiplying both sides by the same number: both sides of the rule are multiplied by $a_n$, which is not $0$ by line 2."
      },
      {
        "step": "$a_{n+3}a_{n+1} = a_{n+2}^2 + 700$",
        "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 3."
      },
      {
        "step": "$a_{n+3}a_{n+1} - a_{n+2}a_n = a_{n+2}^2 - a_{n+1}^2$",
        "reason": "Elimination: line 3 is taken from line 4, and the two numbers $700$ cancel."
      },
      {
        "step": "$a_{n+3}a_{n+1} + a_{n+1}^2 = a_{n+2}^2 + a_{n+2}a_n$",
        "reason": "Adding the same number to both sides: $a_{n+1}^2 + a_{n+2}a_n$ is added to both sides."
      },
      {
        "step": "$a_{n+1}(a_{n+3} + a_{n+1}) = a_{n+2}(a_{n+2} + a_n)$",
        "reason": "Common factor: $a_{n+1}$ comes out on the left and $a_{n+2}$ on the right."
      },
      {
        "step": "$\\dfrac{a_{n+3} + a_{n+1}}{a_{n+2}} = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $a_{n+1}a_{n+2}$, which is not $0$ by line 2."
      },
      {
        "step": "$a_2 = \\dfrac{8^2 + 700}{2} = 382$",
        "reason": "Substituting a value: $n = 0$ in the rule, with $a_0 = 2$ and $a_1 = 8$."
      },
      {
        "step": "$\\dfrac{a_2 + a_0}{a_1} = \\dfrac{382 + 2}{8} = 48$",
        "reason": "Substituting a value: $a_0 = 2$, $a_1 = 8$ and $a_2 = 382$ from line 9."
      },
      {
        "step": "So $\\dfrac{a_{n+2} + a_n}{a_{n+1}} = 48$ for every whole number $n$.",
        "reason": "Linearising a recurrence: by line 8 the ratio at $n + 1$ equals the ratio at $n$, so by induction every ratio equals the one at $n = 0$, which is line 10."
      },
      {
        "step": "$a_{n+2} + a_n = 48a_{n+1}$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $a_{n+1}$."
      },
      {
        "step": "$a_{n+2} = 48a_{n+1} - a_n$",
        "reason": "Adding the same number to both sides: $a_n$ is taken from both sides."
      },
      {
        "step": "So every term $a_n$ is an integer.",
        "reason": "Induction: $a_0$ and $a_1$ are integers, and by line 13 two neighbouring integers give an integer next term, since $48$ is a whole number."
      }
    ]
  },
  {
    "id": "t241-k1-p02",
    "topic": "recurrences-made-linear",
    "kind": "t241-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that every term $a_n$ is an integer, where $a_0 = 2$, $a_1 = 4$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 508}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that every term $a_n$ is an integer, where $a_0 = 2$, $a_1 = 4$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 508}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
      },
      {
        "step": "Every term $a_n$ is positive.",
        "reason": "Induction: $a_0$ and $a_1$ are positive, and when $a_n$ and $a_{n+1}$ are positive, so are the top $a_{n+1}^2 + 508$ and the bottom $a_n$ of the rule."
      },
      {
        "step": "$a_{n+2}a_n = a_{n+1}^2 + 508$",
        "reason": "Multiplying both sides by the same number: both sides of the rule are multiplied by $a_n$, which is not $0$ by line 2."
      },
      {
        "step": "$a_{n+3}a_{n+1} = a_{n+2}^2 + 508$",
        "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 3."
      },
      {
        "step": "$a_{n+3}a_{n+1} - a_{n+2}a_n = a_{n+2}^2 - a_{n+1}^2$",
        "reason": "Elimination: line 3 is taken from line 4, and the two numbers $508$ cancel."
      },
      {
        "step": "$a_{n+3}a_{n+1} + a_{n+1}^2 = a_{n+2}^2 + a_{n+2}a_n$",
        "reason": "Adding the same number to both sides: $a_{n+1}^2 + a_{n+2}a_n$ is added to both sides."
      },
      {
        "step": "$a_{n+1}(a_{n+3} + a_{n+1}) = a_{n+2}(a_{n+2} + a_n)$",
        "reason": "Common factor: $a_{n+1}$ comes out on the left and $a_{n+2}$ on the right."
      },
      {
        "step": "$\\dfrac{a_{n+3} + a_{n+1}}{a_{n+2}} = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $a_{n+1}a_{n+2}$, which is not $0$ by line 2."
      },
      {
        "step": "$a_2 = \\dfrac{4^2 + 508}{2} = 262$",
        "reason": "Substituting a value: $n = 0$ in the rule, with $a_0 = 2$ and $a_1 = 4$."
      },
      {
        "step": "$\\dfrac{a_2 + a_0}{a_1} = \\dfrac{262 + 2}{4} = 66$",
        "reason": "Substituting a value: $a_0 = 2$, $a_1 = 4$ and $a_2 = 262$ from line 9."
      },
      {
        "step": "So $\\dfrac{a_{n+2} + a_n}{a_{n+1}} = 66$ for every whole number $n$.",
        "reason": "Linearising a recurrence: by line 8 the ratio at $n + 1$ equals the ratio at $n$, so by induction every ratio equals the one at $n = 0$, which is line 10."
      },
      {
        "step": "$a_{n+2} + a_n = 66a_{n+1}$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $a_{n+1}$."
      },
      {
        "step": "$a_{n+2} = 66a_{n+1} - a_n$",
        "reason": "Adding the same number to both sides: $a_n$ is taken from both sides."
      },
      {
        "step": "So every term $a_n$ is an integer.",
        "reason": "Induction: $a_0$ and $a_1$ are integers, and by line 13 two neighbouring integers give an integer next term, since $66$ is a whole number."
      }
    ]
  },
  {
    "id": "t241-k1-p03",
    "topic": "recurrences-made-linear",
    "kind": "t241-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that every term $a_n$ is an integer, where $a_0 = 8$, $a_1 = 2$, $a_2 = 10$ and $a_{n+3} = \\dfrac{a_{n+1}a_{n+2} + 364}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that every term $a_n$ is an integer, where $a_0 = 8$, $a_1 = 2$, $a_2 = 10$ and $a_{n+3} = \\dfrac{a_{n+1}a_{n+2} + 364}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
      },
      {
        "step": "Every term $a_n$ is positive.",
        "reason": "Induction: $a_0$, $a_1$ and $a_2$ are positive, and when $a_n$, $a_{n+1}$ and $a_{n+2}$ are positive, so are the top $a_{n+1}a_{n+2} + 364$ and the bottom $a_n$ of the rule."
      },
      {
        "step": "$a_{n+3}a_n = a_{n+1}a_{n+2} + 364$",
        "reason": "Multiplying both sides by the same number: both sides of the rule are multiplied by $a_n$, which is not $0$ by line 2."
      },
      {
        "step": "$a_{n+4}a_{n+1} = a_{n+2}a_{n+3} + 364$",
        "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 3."
      },
      {
        "step": "$a_{n+4}a_{n+1} - a_{n+3}a_n = a_{n+2}a_{n+3} - a_{n+1}a_{n+2}$",
        "reason": "Elimination: line 3 is taken from line 4, and the two numbers $364$ cancel."
      },
      {
        "step": "$a_{n+4}a_{n+1} + a_{n+1}a_{n+2} = a_{n+2}a_{n+3} + a_{n+3}a_n$",
        "reason": "Adding the same number to both sides: $a_{n+1}a_{n+2} + a_{n+3}a_n$ is added to both sides."
      },
      {
        "step": "$a_{n+1}(a_{n+4} + a_{n+2}) = a_{n+3}(a_{n+2} + a_n)$",
        "reason": "Common factor: $a_{n+1}$ comes out on the left and $a_{n+3}$ on the right."
      },
      {
        "step": "$\\dfrac{a_{n+4} + a_{n+2}}{a_{n+3}} = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $a_{n+1}a_{n+3}$, which is not $0$ by line 2."
      },
      {
        "step": "Write $d_n = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$, so $d_{n+2} = d_n$ for every whole number $n$.",
        "reason": "Substitution for a repeated expression: the ratio of line 8 is written $d_n$, and line 8 says that the ratio two places on is the same."
      },
      {
        "step": "$a_3 = \\dfrac{2 \\cdot 10 + 364}{8} = 48$",
        "reason": "Substituting a value: $n = 0$ in the rule, with $a_0 = 8$, $a_1 = 2$ and $a_2 = 10$."
      },
      {
        "step": "$d_0 = \\dfrac{10 + 8}{2} = 9$",
        "reason": "Substituting a value: $n = 0$ in line 9."
      },
      {
        "step": "$d_1 = \\dfrac{48 + 2}{10} = 5$",
        "reason": "Substituting a value: $n = 1$ in line 9, with $a_3 = 48$ from line 10."
      },
      {
        "step": "So $d_n$ is $9$ for every even whole number $n$ and $5$ for every odd whole number $n$.",
        "reason": "Induction: lines 11 and 12 are the two base cases, and by line 9 each ratio equals the ratio two places before it."
      },
      {
        "step": "So $d_nd_{n+1} = 45$ for every whole number $n$.",
        "reason": "Substituting a value: of $n$ and $n + 1$ one is even and the other odd, so by line 13 the two factors are $9$ and $5$ in one order or the other, and $9 \\cdot 5 = 45$."
      },
      {
        "step": "$a_{n+2} + a_n = d_na_{n+1}$",
        "reason": "Multiplying both sides by the same number: both sides of $d_n = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$, line 9, are multiplied by $a_{n+1}$."
      },
      {
        "step": "$a_{n+4} + a_{n+2} = d_{n+2}a_{n+3}$",
        "reason": "Substituting a value: $n + 2$ goes in place of $n$ in line 15."
      },
      {
        "step": "$a_{n+4} + a_{n+2} = d_na_{n+3}$",
        "reason": "Substituting a value: $d_{n+2} = d_n$ by line 9."
      },
      {
        "step": "$a_{n+4} + 2a_{n+2} + a_n = d_na_{n+3} + d_na_{n+1}$",
        "reason": "Adding two equations: lines 15 and 17 are added."
      },
      {
        "step": "$a_{n+4} + 2a_{n+2} + a_n = d_n(a_{n+3} + a_{n+1})$",
        "reason": "Common factor: $d_n$ is taken out on the right."
      },
      {
        "step": "$a_{n+3} + a_{n+1} = d_{n+1}a_{n+2}$",
        "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 15."
      },
      {
        "step": "$a_{n+4} + 2a_{n+2} + a_n = d_nd_{n+1}a_{n+2}$",
        "reason": "Substituting a value: line 20 goes into the bracket of line 19."
      },
      {
        "step": "$a_{n+4} + 2a_{n+2} + a_n = 45a_{n+2}$",
        "reason": "Substituting a value: line 14 gives the product $d_nd_{n+1}$."
      },
      {
        "step": "$a_{n+4} = 43a_{n+2} - a_n$",
        "reason": "Adding the same number to both sides: $2a_{n+2} + a_n$ is taken from both sides, and $45 - 2 = 43$."
      },
      {
        "step": "So every term $a_n$ is an integer.",
        "reason": "Induction: $a_0$, $a_1$, $a_2$ and $a_3$ are integers, $a_3$ by line 10, and by line 23 each later term is $43$ times the term two places before it less the term four places before it."
      }
    ]
  },
  {
    "id": "t241-k1-p04",
    "topic": "recurrences-made-linear",
    "kind": "t241-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that every term $a_n$ is an integer, where $a_0 = 2$, $a_1 = 3$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 209}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that every term $a_n$ is an integer, where $a_0 = 2$, $a_1 = 3$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 209}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
      },
      {
        "step": "Every term $a_n$ is positive.",
        "reason": "Induction: $a_0$ and $a_1$ are positive, and when $a_n$ and $a_{n+1}$ are positive, so are the top $a_{n+1}^2 + 209$ and the bottom $a_n$ of the rule."
      },
      {
        "step": "$a_{n+2}a_n = a_{n+1}^2 + 209$",
        "reason": "Multiplying both sides by the same number: both sides of the rule are multiplied by $a_n$, which is not $0$ by line 2."
      },
      {
        "step": "$a_{n+3}a_{n+1} = a_{n+2}^2 + 209$",
        "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 3."
      },
      {
        "step": "$a_{n+3}a_{n+1} - a_{n+2}a_n = a_{n+2}^2 - a_{n+1}^2$",
        "reason": "Elimination: line 3 is taken from line 4, and the two numbers $209$ cancel."
      },
      {
        "step": "$a_{n+3}a_{n+1} + a_{n+1}^2 = a_{n+2}^2 + a_{n+2}a_n$",
        "reason": "Adding the same number to both sides: $a_{n+1}^2 + a_{n+2}a_n$ is added to both sides."
      },
      {
        "step": "$a_{n+1}(a_{n+3} + a_{n+1}) = a_{n+2}(a_{n+2} + a_n)$",
        "reason": "Common factor: $a_{n+1}$ comes out on the left and $a_{n+2}$ on the right."
      },
      {
        "step": "$\\dfrac{a_{n+3} + a_{n+1}}{a_{n+2}} = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $a_{n+1}a_{n+2}$, which is not $0$ by line 2."
      },
      {
        "step": "$a_2 = \\dfrac{3^2 + 209}{2} = 109$",
        "reason": "Substituting a value: $n = 0$ in the rule, with $a_0 = 2$ and $a_1 = 3$."
      },
      {
        "step": "$\\dfrac{a_2 + a_0}{a_1} = \\dfrac{109 + 2}{3} = 37$",
        "reason": "Substituting a value: $a_0 = 2$, $a_1 = 3$ and $a_2 = 109$ from line 9."
      },
      {
        "step": "So $\\dfrac{a_{n+2} + a_n}{a_{n+1}} = 37$ for every whole number $n$.",
        "reason": "Linearising a recurrence: by line 8 the ratio at $n + 1$ equals the ratio at $n$, so by induction every ratio equals the one at $n = 0$, which is line 10."
      },
      {
        "step": "$a_{n+2} + a_n = 37a_{n+1}$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $a_{n+1}$."
      },
      {
        "step": "$a_{n+2} = 37a_{n+1} - a_n$",
        "reason": "Adding the same number to both sides: $a_n$ is taken from both sides."
      },
      {
        "step": "So every term $a_n$ is an integer.",
        "reason": "Induction: $a_0$ and $a_1$ are integers, and by line 13 two neighbouring integers give an integer next term, since $37$ is a whole number."
      }
    ]
  },
  {
    "id": "t241-k1-p05",
    "topic": "recurrences-made-linear",
    "kind": "t241-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that every term $a_n$ is an integer, where $a_0 = 6$, $a_1 = 2$, $a_2 = 4$ and $a_{n+3} = \\dfrac{a_{n+1}a_{n+2} + 172}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that every term $a_n$ is an integer, where $a_0 = 6$, $a_1 = 2$, $a_2 = 4$ and $a_{n+3} = \\dfrac{a_{n+1}a_{n+2} + 172}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
      },
      {
        "step": "Every term $a_n$ is positive.",
        "reason": "Induction: $a_0$, $a_1$ and $a_2$ are positive, and when $a_n$, $a_{n+1}$ and $a_{n+2}$ are positive, so are the top $a_{n+1}a_{n+2} + 172$ and the bottom $a_n$ of the rule."
      },
      {
        "step": "$a_{n+3}a_n = a_{n+1}a_{n+2} + 172$",
        "reason": "Multiplying both sides by the same number: both sides of the rule are multiplied by $a_n$, which is not $0$ by line 2."
      },
      {
        "step": "$a_{n+4}a_{n+1} = a_{n+2}a_{n+3} + 172$",
        "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 3."
      },
      {
        "step": "$a_{n+4}a_{n+1} - a_{n+3}a_n = a_{n+2}a_{n+3} - a_{n+1}a_{n+2}$",
        "reason": "Elimination: line 3 is taken from line 4, and the two numbers $172$ cancel."
      },
      {
        "step": "$a_{n+4}a_{n+1} + a_{n+1}a_{n+2} = a_{n+2}a_{n+3} + a_{n+3}a_n$",
        "reason": "Adding the same number to both sides: $a_{n+1}a_{n+2} + a_{n+3}a_n$ is added to both sides."
      },
      {
        "step": "$a_{n+1}(a_{n+4} + a_{n+2}) = a_{n+3}(a_{n+2} + a_n)$",
        "reason": "Common factor: $a_{n+1}$ comes out on the left and $a_{n+3}$ on the right."
      },
      {
        "step": "$\\dfrac{a_{n+4} + a_{n+2}}{a_{n+3}} = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $a_{n+1}a_{n+3}$, which is not $0$ by line 2."
      },
      {
        "step": "Write $d_n = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$, so $d_{n+2} = d_n$ for every whole number $n$.",
        "reason": "Substitution for a repeated expression: the ratio of line 8 is written $d_n$, and line 8 says that the ratio two places on is the same."
      },
      {
        "step": "$a_3 = \\dfrac{2 \\cdot 4 + 172}{6} = 30$",
        "reason": "Substituting a value: $n = 0$ in the rule, with $a_0 = 6$, $a_1 = 2$ and $a_2 = 4$."
      },
      {
        "step": "$d_0 = \\dfrac{4 + 6}{2} = 5$",
        "reason": "Substituting a value: $n = 0$ in line 9."
      },
      {
        "step": "$d_1 = \\dfrac{30 + 2}{4} = 8$",
        "reason": "Substituting a value: $n = 1$ in line 9, with $a_3 = 30$ from line 10."
      },
      {
        "step": "So $d_n$ is $5$ for every even whole number $n$ and $8$ for every odd whole number $n$.",
        "reason": "Induction: lines 11 and 12 are the two base cases, and by line 9 each ratio equals the ratio two places before it."
      },
      {
        "step": "So $d_nd_{n+1} = 40$ for every whole number $n$.",
        "reason": "Substituting a value: of $n$ and $n + 1$ one is even and the other odd, so by line 13 the two factors are $5$ and $8$ in one order or the other, and $5 \\cdot 8 = 40$."
      },
      {
        "step": "$a_{n+2} + a_n = d_na_{n+1}$",
        "reason": "Multiplying both sides by the same number: both sides of $d_n = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$, line 9, are multiplied by $a_{n+1}$."
      },
      {
        "step": "$a_{n+4} + a_{n+2} = d_{n+2}a_{n+3}$",
        "reason": "Substituting a value: $n + 2$ goes in place of $n$ in line 15."
      },
      {
        "step": "$a_{n+4} + a_{n+2} = d_na_{n+3}$",
        "reason": "Substituting a value: $d_{n+2} = d_n$ by line 9."
      },
      {
        "step": "$a_{n+4} + 2a_{n+2} + a_n = d_na_{n+3} + d_na_{n+1}$",
        "reason": "Adding two equations: lines 15 and 17 are added."
      },
      {
        "step": "$a_{n+4} + 2a_{n+2} + a_n = d_n(a_{n+3} + a_{n+1})$",
        "reason": "Common factor: $d_n$ is taken out on the right."
      },
      {
        "step": "$a_{n+3} + a_{n+1} = d_{n+1}a_{n+2}$",
        "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 15."
      },
      {
        "step": "$a_{n+4} + 2a_{n+2} + a_n = d_nd_{n+1}a_{n+2}$",
        "reason": "Substituting a value: line 20 goes into the bracket of line 19."
      },
      {
        "step": "$a_{n+4} + 2a_{n+2} + a_n = 40a_{n+2}$",
        "reason": "Substituting a value: line 14 gives the product $d_nd_{n+1}$."
      },
      {
        "step": "$a_{n+4} = 38a_{n+2} - a_n$",
        "reason": "Adding the same number to both sides: $2a_{n+2} + a_n$ is taken from both sides, and $40 - 2 = 38$."
      },
      {
        "step": "So every term $a_n$ is an integer.",
        "reason": "Induction: $a_0$, $a_1$, $a_2$ and $a_3$ are integers, $a_3$ by line 10, and by line 23 each later term is $38$ times the term two places before it less the term four places before it."
      }
    ]
  },
  {
    "id": "t241-k1-p06",
    "topic": "recurrences-made-linear",
    "kind": "t241-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that every term $a_n$ is an integer, where $a_0 = 6$, $a_1 = 8$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 1388}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that every term $a_n$ is an integer, where $a_0 = 6$, $a_1 = 8$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 1388}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
      },
      {
        "step": "Every term $a_n$ is positive.",
        "reason": "Induction: $a_0$ and $a_1$ are positive, and when $a_n$ and $a_{n+1}$ are positive, so are the top $a_{n+1}^2 + 1388$ and the bottom $a_n$ of the rule."
      },
      {
        "step": "$a_{n+2}a_n = a_{n+1}^2 + 1388$",
        "reason": "Multiplying both sides by the same number: both sides of the rule are multiplied by $a_n$, which is not $0$ by line 2."
      },
      {
        "step": "$a_{n+3}a_{n+1} = a_{n+2}^2 + 1388$",
        "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 3."
      },
      {
        "step": "$a_{n+3}a_{n+1} - a_{n+2}a_n = a_{n+2}^2 - a_{n+1}^2$",
        "reason": "Elimination: line 3 is taken from line 4, and the two numbers $1388$ cancel."
      },
      {
        "step": "$a_{n+3}a_{n+1} + a_{n+1}^2 = a_{n+2}^2 + a_{n+2}a_n$",
        "reason": "Adding the same number to both sides: $a_{n+1}^2 + a_{n+2}a_n$ is added to both sides."
      },
      {
        "step": "$a_{n+1}(a_{n+3} + a_{n+1}) = a_{n+2}(a_{n+2} + a_n)$",
        "reason": "Common factor: $a_{n+1}$ comes out on the left and $a_{n+2}$ on the right."
      },
      {
        "step": "$\\dfrac{a_{n+3} + a_{n+1}}{a_{n+2}} = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $a_{n+1}a_{n+2}$, which is not $0$ by line 2."
      },
      {
        "step": "$a_2 = \\dfrac{8^2 + 1388}{6} = 242$",
        "reason": "Substituting a value: $n = 0$ in the rule, with $a_0 = 6$ and $a_1 = 8$."
      },
      {
        "step": "$\\dfrac{a_2 + a_0}{a_1} = \\dfrac{242 + 6}{8} = 31$",
        "reason": "Substituting a value: $a_0 = 6$, $a_1 = 8$ and $a_2 = 242$ from line 9."
      },
      {
        "step": "So $\\dfrac{a_{n+2} + a_n}{a_{n+1}} = 31$ for every whole number $n$.",
        "reason": "Linearising a recurrence: by line 8 the ratio at $n + 1$ equals the ratio at $n$, so by induction every ratio equals the one at $n = 0$, which is line 10."
      },
      {
        "step": "$a_{n+2} + a_n = 31a_{n+1}$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $a_{n+1}$."
      },
      {
        "step": "$a_{n+2} = 31a_{n+1} - a_n$",
        "reason": "Adding the same number to both sides: $a_n$ is taken from both sides."
      },
      {
        "step": "So every term $a_n$ is an integer.",
        "reason": "Induction: $a_0$ and $a_1$ are integers, and by line 13 two neighbouring integers give an integer next term, since $31$ is a whole number."
      }
    ]
  },
  {
    "id": "t241-k1-p07",
    "topic": "recurrences-made-linear",
    "kind": "t241-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that every term $a_n$ is an integer, where $a_0 = 8$, $a_1 = 4$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 944}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that every term $a_n$ is an integer, where $a_0 = 8$, $a_1 = 4$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 944}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
      },
      {
        "step": "Every term $a_n$ is positive.",
        "reason": "Induction: $a_0$ and $a_1$ are positive, and when $a_n$ and $a_{n+1}$ are positive, so are the top $a_{n+1}^2 + 944$ and the bottom $a_n$ of the rule."
      },
      {
        "step": "$a_{n+2}a_n = a_{n+1}^2 + 944$",
        "reason": "Multiplying both sides by the same number: both sides of the rule are multiplied by $a_n$, which is not $0$ by line 2."
      },
      {
        "step": "$a_{n+3}a_{n+1} = a_{n+2}^2 + 944$",
        "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 3."
      },
      {
        "step": "$a_{n+3}a_{n+1} - a_{n+2}a_n = a_{n+2}^2 - a_{n+1}^2$",
        "reason": "Elimination: line 3 is taken from line 4, and the two numbers $944$ cancel."
      },
      {
        "step": "$a_{n+3}a_{n+1} + a_{n+1}^2 = a_{n+2}^2 + a_{n+2}a_n$",
        "reason": "Adding the same number to both sides: $a_{n+1}^2 + a_{n+2}a_n$ is added to both sides."
      },
      {
        "step": "$a_{n+1}(a_{n+3} + a_{n+1}) = a_{n+2}(a_{n+2} + a_n)$",
        "reason": "Common factor: $a_{n+1}$ comes out on the left and $a_{n+2}$ on the right."
      },
      {
        "step": "$\\dfrac{a_{n+3} + a_{n+1}}{a_{n+2}} = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $a_{n+1}a_{n+2}$, which is not $0$ by line 2."
      },
      {
        "step": "$a_2 = \\dfrac{4^2 + 944}{8} = 120$",
        "reason": "Substituting a value: $n = 0$ in the rule, with $a_0 = 8$ and $a_1 = 4$."
      },
      {
        "step": "$\\dfrac{a_2 + a_0}{a_1} = \\dfrac{120 + 8}{4} = 32$",
        "reason": "Substituting a value: $a_0 = 8$, $a_1 = 4$ and $a_2 = 120$ from line 9."
      },
      {
        "step": "So $\\dfrac{a_{n+2} + a_n}{a_{n+1}} = 32$ for every whole number $n$.",
        "reason": "Linearising a recurrence: by line 8 the ratio at $n + 1$ equals the ratio at $n$, so by induction every ratio equals the one at $n = 0$, which is line 10."
      },
      {
        "step": "$a_{n+2} + a_n = 32a_{n+1}$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $a_{n+1}$."
      },
      {
        "step": "$a_{n+2} = 32a_{n+1} - a_n$",
        "reason": "Adding the same number to both sides: $a_n$ is taken from both sides."
      },
      {
        "step": "So every term $a_n$ is an integer.",
        "reason": "Induction: $a_0$ and $a_1$ are integers, and by line 13 two neighbouring integers give an integer next term, since $32$ is a whole number."
      }
    ]
  },
  {
    "id": "t241-k1-p08",
    "topic": "recurrences-made-linear",
    "kind": "t241-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that every term $a_n$ is an integer, where $a_0 = 6$, $a_1 = 4$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 884}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that every term $a_n$ is an integer, where $a_0 = 6$, $a_1 = 4$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 884}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
      },
      {
        "step": "Every term $a_n$ is positive.",
        "reason": "Induction: $a_0$ and $a_1$ are positive, and when $a_n$ and $a_{n+1}$ are positive, so are the top $a_{n+1}^2 + 884$ and the bottom $a_n$ of the rule."
      },
      {
        "step": "$a_{n+2}a_n = a_{n+1}^2 + 884$",
        "reason": "Multiplying both sides by the same number: both sides of the rule are multiplied by $a_n$, which is not $0$ by line 2."
      },
      {
        "step": "$a_{n+3}a_{n+1} = a_{n+2}^2 + 884$",
        "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 3."
      },
      {
        "step": "$a_{n+3}a_{n+1} - a_{n+2}a_n = a_{n+2}^2 - a_{n+1}^2$",
        "reason": "Elimination: line 3 is taken from line 4, and the two numbers $884$ cancel."
      },
      {
        "step": "$a_{n+3}a_{n+1} + a_{n+1}^2 = a_{n+2}^2 + a_{n+2}a_n$",
        "reason": "Adding the same number to both sides: $a_{n+1}^2 + a_{n+2}a_n$ is added to both sides."
      },
      {
        "step": "$a_{n+1}(a_{n+3} + a_{n+1}) = a_{n+2}(a_{n+2} + a_n)$",
        "reason": "Common factor: $a_{n+1}$ comes out on the left and $a_{n+2}$ on the right."
      },
      {
        "step": "$\\dfrac{a_{n+3} + a_{n+1}}{a_{n+2}} = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $a_{n+1}a_{n+2}$, which is not $0$ by line 2."
      },
      {
        "step": "$a_2 = \\dfrac{4^2 + 884}{6} = 150$",
        "reason": "Substituting a value: $n = 0$ in the rule, with $a_0 = 6$ and $a_1 = 4$."
      },
      {
        "step": "$\\dfrac{a_2 + a_0}{a_1} = \\dfrac{150 + 6}{4} = 39$",
        "reason": "Substituting a value: $a_0 = 6$, $a_1 = 4$ and $a_2 = 150$ from line 9."
      },
      {
        "step": "So $\\dfrac{a_{n+2} + a_n}{a_{n+1}} = 39$ for every whole number $n$.",
        "reason": "Linearising a recurrence: by line 8 the ratio at $n + 1$ equals the ratio at $n$, so by induction every ratio equals the one at $n = 0$, which is line 10."
      },
      {
        "step": "$a_{n+2} + a_n = 39a_{n+1}$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $a_{n+1}$."
      },
      {
        "step": "$a_{n+2} = 39a_{n+1} - a_n$",
        "reason": "Adding the same number to both sides: $a_n$ is taken from both sides."
      },
      {
        "step": "So every term $a_n$ is an integer.",
        "reason": "Induction: $a_0$ and $a_1$ are integers, and by line 13 two neighbouring integers give an integer next term, since $39$ is a whole number."
      }
    ]
  },
  {
    "id": "t241-k1-p09",
    "topic": "recurrences-made-linear",
    "kind": "t241-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that every term $a_n$ is an integer, where $a_0 = 2$, $a_1 = 5$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 481}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that every term $a_n$ is an integer, where $a_0 = 2$, $a_1 = 5$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 481}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
      },
      {
        "step": "Every term $a_n$ is positive.",
        "reason": "Induction: $a_0$ and $a_1$ are positive, and when $a_n$ and $a_{n+1}$ are positive, so are the top $a_{n+1}^2 + 481$ and the bottom $a_n$ of the rule."
      },
      {
        "step": "$a_{n+2}a_n = a_{n+1}^2 + 481$",
        "reason": "Multiplying both sides by the same number: both sides of the rule are multiplied by $a_n$, which is not $0$ by line 2."
      },
      {
        "step": "$a_{n+3}a_{n+1} = a_{n+2}^2 + 481$",
        "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 3."
      },
      {
        "step": "$a_{n+3}a_{n+1} - a_{n+2}a_n = a_{n+2}^2 - a_{n+1}^2$",
        "reason": "Elimination: line 3 is taken from line 4, and the two numbers $481$ cancel."
      },
      {
        "step": "$a_{n+3}a_{n+1} + a_{n+1}^2 = a_{n+2}^2 + a_{n+2}a_n$",
        "reason": "Adding the same number to both sides: $a_{n+1}^2 + a_{n+2}a_n$ is added to both sides."
      },
      {
        "step": "$a_{n+1}(a_{n+3} + a_{n+1}) = a_{n+2}(a_{n+2} + a_n)$",
        "reason": "Common factor: $a_{n+1}$ comes out on the left and $a_{n+2}$ on the right."
      },
      {
        "step": "$\\dfrac{a_{n+3} + a_{n+1}}{a_{n+2}} = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $a_{n+1}a_{n+2}$, which is not $0$ by line 2."
      },
      {
        "step": "$a_2 = \\dfrac{5^2 + 481}{2} = 253$",
        "reason": "Substituting a value: $n = 0$ in the rule, with $a_0 = 2$ and $a_1 = 5$."
      },
      {
        "step": "$\\dfrac{a_2 + a_0}{a_1} = \\dfrac{253 + 2}{5} = 51$",
        "reason": "Substituting a value: $a_0 = 2$, $a_1 = 5$ and $a_2 = 253$ from line 9."
      },
      {
        "step": "So $\\dfrac{a_{n+2} + a_n}{a_{n+1}} = 51$ for every whole number $n$.",
        "reason": "Linearising a recurrence: by line 8 the ratio at $n + 1$ equals the ratio at $n$, so by induction every ratio equals the one at $n = 0$, which is line 10."
      },
      {
        "step": "$a_{n+2} + a_n = 51a_{n+1}$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $a_{n+1}$."
      },
      {
        "step": "$a_{n+2} = 51a_{n+1} - a_n$",
        "reason": "Adding the same number to both sides: $a_n$ is taken from both sides."
      },
      {
        "step": "So every term $a_n$ is an integer.",
        "reason": "Induction: $a_0$ and $a_1$ are integers, and by line 13 two neighbouring integers give an integer next term, since $51$ is a whole number."
      }
    ]
  },
  {
    "id": "t241-k1-p10",
    "topic": "recurrences-made-linear",
    "kind": "t241-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that every term $a_n$ is an integer, where $a_0 = 7$, $a_1 = 5$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 1081}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that every term $a_n$ is an integer, where $a_0 = 7$, $a_1 = 5$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 1081}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
      },
      {
        "step": "Every term $a_n$ is positive.",
        "reason": "Induction: $a_0$ and $a_1$ are positive, and when $a_n$ and $a_{n+1}$ are positive, so are the top $a_{n+1}^2 + 1081$ and the bottom $a_n$ of the rule."
      },
      {
        "step": "$a_{n+2}a_n = a_{n+1}^2 + 1081$",
        "reason": "Multiplying both sides by the same number: both sides of the rule are multiplied by $a_n$, which is not $0$ by line 2."
      },
      {
        "step": "$a_{n+3}a_{n+1} = a_{n+2}^2 + 1081$",
        "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 3."
      },
      {
        "step": "$a_{n+3}a_{n+1} - a_{n+2}a_n = a_{n+2}^2 - a_{n+1}^2$",
        "reason": "Elimination: line 3 is taken from line 4, and the two numbers $1081$ cancel."
      },
      {
        "step": "$a_{n+3}a_{n+1} + a_{n+1}^2 = a_{n+2}^2 + a_{n+2}a_n$",
        "reason": "Adding the same number to both sides: $a_{n+1}^2 + a_{n+2}a_n$ is added to both sides."
      },
      {
        "step": "$a_{n+1}(a_{n+3} + a_{n+1}) = a_{n+2}(a_{n+2} + a_n)$",
        "reason": "Common factor: $a_{n+1}$ comes out on the left and $a_{n+2}$ on the right."
      },
      {
        "step": "$\\dfrac{a_{n+3} + a_{n+1}}{a_{n+2}} = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $a_{n+1}a_{n+2}$, which is not $0$ by line 2."
      },
      {
        "step": "$a_2 = \\dfrac{5^2 + 1081}{7} = 158$",
        "reason": "Substituting a value: $n = 0$ in the rule, with $a_0 = 7$ and $a_1 = 5$."
      },
      {
        "step": "$\\dfrac{a_2 + a_0}{a_1} = \\dfrac{158 + 7}{5} = 33$",
        "reason": "Substituting a value: $a_0 = 7$, $a_1 = 5$ and $a_2 = 158$ from line 9."
      },
      {
        "step": "So $\\dfrac{a_{n+2} + a_n}{a_{n+1}} = 33$ for every whole number $n$.",
        "reason": "Linearising a recurrence: by line 8 the ratio at $n + 1$ equals the ratio at $n$, so by induction every ratio equals the one at $n = 0$, which is line 10."
      },
      {
        "step": "$a_{n+2} + a_n = 33a_{n+1}$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $a_{n+1}$."
      },
      {
        "step": "$a_{n+2} = 33a_{n+1} - a_n$",
        "reason": "Adding the same number to both sides: $a_n$ is taken from both sides."
      },
      {
        "step": "So every term $a_n$ is an integer.",
        "reason": "Induction: $a_0$ and $a_1$ are integers, and by line 13 two neighbouring integers give an integer next term, since $33$ is a whole number."
      }
    ]
  },
  {
    "id": "t241-k1-p11",
    "topic": "recurrences-made-linear",
    "kind": "t241-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that every term $a_n$ is an integer, where $a_0 = 8$, $a_1 = 3$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 599}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that every term $a_n$ is an integer, where $a_0 = 8$, $a_1 = 3$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 599}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
      },
      {
        "step": "Every term $a_n$ is positive.",
        "reason": "Induction: $a_0$ and $a_1$ are positive, and when $a_n$ and $a_{n+1}$ are positive, so are the top $a_{n+1}^2 + 599$ and the bottom $a_n$ of the rule."
      },
      {
        "step": "$a_{n+2}a_n = a_{n+1}^2 + 599$",
        "reason": "Multiplying both sides by the same number: both sides of the rule are multiplied by $a_n$, which is not $0$ by line 2."
      },
      {
        "step": "$a_{n+3}a_{n+1} = a_{n+2}^2 + 599$",
        "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 3."
      },
      {
        "step": "$a_{n+3}a_{n+1} - a_{n+2}a_n = a_{n+2}^2 - a_{n+1}^2$",
        "reason": "Elimination: line 3 is taken from line 4, and the two numbers $599$ cancel."
      },
      {
        "step": "$a_{n+3}a_{n+1} + a_{n+1}^2 = a_{n+2}^2 + a_{n+2}a_n$",
        "reason": "Adding the same number to both sides: $a_{n+1}^2 + a_{n+2}a_n$ is added to both sides."
      },
      {
        "step": "$a_{n+1}(a_{n+3} + a_{n+1}) = a_{n+2}(a_{n+2} + a_n)$",
        "reason": "Common factor: $a_{n+1}$ comes out on the left and $a_{n+2}$ on the right."
      },
      {
        "step": "$\\dfrac{a_{n+3} + a_{n+1}}{a_{n+2}} = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $a_{n+1}a_{n+2}$, which is not $0$ by line 2."
      },
      {
        "step": "$a_2 = \\dfrac{3^2 + 599}{8} = 76$",
        "reason": "Substituting a value: $n = 0$ in the rule, with $a_0 = 8$ and $a_1 = 3$."
      },
      {
        "step": "$\\dfrac{a_2 + a_0}{a_1} = \\dfrac{76 + 8}{3} = 28$",
        "reason": "Substituting a value: $a_0 = 8$, $a_1 = 3$ and $a_2 = 76$ from line 9."
      },
      {
        "step": "So $\\dfrac{a_{n+2} + a_n}{a_{n+1}} = 28$ for every whole number $n$.",
        "reason": "Linearising a recurrence: by line 8 the ratio at $n + 1$ equals the ratio at $n$, so by induction every ratio equals the one at $n = 0$, which is line 10."
      },
      {
        "step": "$a_{n+2} + a_n = 28a_{n+1}$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $a_{n+1}$."
      },
      {
        "step": "$a_{n+2} = 28a_{n+1} - a_n$",
        "reason": "Adding the same number to both sides: $a_n$ is taken from both sides."
      },
      {
        "step": "So every term $a_n$ is an integer.",
        "reason": "Induction: $a_0$ and $a_1$ are integers, and by line 13 two neighbouring integers give an integer next term, since $28$ is a whole number."
      }
    ]
  },
  {
    "id": "t241-k1-p12",
    "topic": "recurrences-made-linear",
    "kind": "t241-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that every term $a_n$ is an integer, where $a_0 = 9$, $a_1 = 3$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 1179}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that every term $a_n$ is an integer, where $a_0 = 9$, $a_1 = 3$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 1179}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
      },
      {
        "step": "Every term $a_n$ is positive.",
        "reason": "Induction: $a_0$ and $a_1$ are positive, and when $a_n$ and $a_{n+1}$ are positive, so are the top $a_{n+1}^2 + 1179$ and the bottom $a_n$ of the rule."
      },
      {
        "step": "$a_{n+2}a_n = a_{n+1}^2 + 1179$",
        "reason": "Multiplying both sides by the same number: both sides of the rule are multiplied by $a_n$, which is not $0$ by line 2."
      },
      {
        "step": "$a_{n+3}a_{n+1} = a_{n+2}^2 + 1179$",
        "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 3."
      },
      {
        "step": "$a_{n+3}a_{n+1} - a_{n+2}a_n = a_{n+2}^2 - a_{n+1}^2$",
        "reason": "Elimination: line 3 is taken from line 4, and the two numbers $1179$ cancel."
      },
      {
        "step": "$a_{n+3}a_{n+1} + a_{n+1}^2 = a_{n+2}^2 + a_{n+2}a_n$",
        "reason": "Adding the same number to both sides: $a_{n+1}^2 + a_{n+2}a_n$ is added to both sides."
      },
      {
        "step": "$a_{n+1}(a_{n+3} + a_{n+1}) = a_{n+2}(a_{n+2} + a_n)$",
        "reason": "Common factor: $a_{n+1}$ comes out on the left and $a_{n+2}$ on the right."
      },
      {
        "step": "$\\dfrac{a_{n+3} + a_{n+1}}{a_{n+2}} = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $a_{n+1}a_{n+2}$, which is not $0$ by line 2."
      },
      {
        "step": "$a_2 = \\dfrac{3^2 + 1179}{9} = 132$",
        "reason": "Substituting a value: $n = 0$ in the rule, with $a_0 = 9$ and $a_1 = 3$."
      },
      {
        "step": "$\\dfrac{a_2 + a_0}{a_1} = \\dfrac{132 + 9}{3} = 47$",
        "reason": "Substituting a value: $a_0 = 9$, $a_1 = 3$ and $a_2 = 132$ from line 9."
      },
      {
        "step": "So $\\dfrac{a_{n+2} + a_n}{a_{n+1}} = 47$ for every whole number $n$.",
        "reason": "Linearising a recurrence: by line 8 the ratio at $n + 1$ equals the ratio at $n$, so by induction every ratio equals the one at $n = 0$, which is line 10."
      },
      {
        "step": "$a_{n+2} + a_n = 47a_{n+1}$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $a_{n+1}$."
      },
      {
        "step": "$a_{n+2} = 47a_{n+1} - a_n$",
        "reason": "Adding the same number to both sides: $a_n$ is taken from both sides."
      },
      {
        "step": "So every term $a_n$ is an integer.",
        "reason": "Induction: $a_0$ and $a_1$ are integers, and by line 13 two neighbouring integers give an integer next term, since $47$ is a whole number."
      }
    ]
  },
  {
    "id": "t241-k1-p13",
    "topic": "recurrences-made-linear",
    "kind": "t241-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that every term $a_n$ is an integer, where $a_0 = 4$, $a_1 = 2$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 540}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that every term $a_n$ is an integer, where $a_0 = 4$, $a_1 = 2$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 540}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
      },
      {
        "step": "Every term $a_n$ is positive.",
        "reason": "Induction: $a_0$ and $a_1$ are positive, and when $a_n$ and $a_{n+1}$ are positive, so are the top $a_{n+1}^2 + 540$ and the bottom $a_n$ of the rule."
      },
      {
        "step": "$a_{n+2}a_n = a_{n+1}^2 + 540$",
        "reason": "Multiplying both sides by the same number: both sides of the rule are multiplied by $a_n$, which is not $0$ by line 2."
      },
      {
        "step": "$a_{n+3}a_{n+1} = a_{n+2}^2 + 540$",
        "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 3."
      },
      {
        "step": "$a_{n+3}a_{n+1} - a_{n+2}a_n = a_{n+2}^2 - a_{n+1}^2$",
        "reason": "Elimination: line 3 is taken from line 4, and the two numbers $540$ cancel."
      },
      {
        "step": "$a_{n+3}a_{n+1} + a_{n+1}^2 = a_{n+2}^2 + a_{n+2}a_n$",
        "reason": "Adding the same number to both sides: $a_{n+1}^2 + a_{n+2}a_n$ is added to both sides."
      },
      {
        "step": "$a_{n+1}(a_{n+3} + a_{n+1}) = a_{n+2}(a_{n+2} + a_n)$",
        "reason": "Common factor: $a_{n+1}$ comes out on the left and $a_{n+2}$ on the right."
      },
      {
        "step": "$\\dfrac{a_{n+3} + a_{n+1}}{a_{n+2}} = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $a_{n+1}a_{n+2}$, which is not $0$ by line 2."
      },
      {
        "step": "$a_2 = \\dfrac{2^2 + 540}{4} = 136$",
        "reason": "Substituting a value: $n = 0$ in the rule, with $a_0 = 4$ and $a_1 = 2$."
      },
      {
        "step": "$\\dfrac{a_2 + a_0}{a_1} = \\dfrac{136 + 4}{2} = 70$",
        "reason": "Substituting a value: $a_0 = 4$, $a_1 = 2$ and $a_2 = 136$ from line 9."
      },
      {
        "step": "So $\\dfrac{a_{n+2} + a_n}{a_{n+1}} = 70$ for every whole number $n$.",
        "reason": "Linearising a recurrence: by line 8 the ratio at $n + 1$ equals the ratio at $n$, so by induction every ratio equals the one at $n = 0$, which is line 10."
      },
      {
        "step": "$a_{n+2} + a_n = 70a_{n+1}$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $a_{n+1}$."
      },
      {
        "step": "$a_{n+2} = 70a_{n+1} - a_n$",
        "reason": "Adding the same number to both sides: $a_n$ is taken from both sides."
      },
      {
        "step": "So every term $a_n$ is an integer.",
        "reason": "Induction: $a_0$ and $a_1$ are integers, and by line 13 two neighbouring integers give an integer next term, since $70$ is a whole number."
      }
    ]
  },
  {
    "id": "t241-k1-p14",
    "topic": "recurrences-made-linear",
    "kind": "t241-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that every term $a_n$ is an integer, where $a_0 = 9$, $a_1 = 3$, $a_2 = 15$ and $a_{n+3} = \\dfrac{a_{n+1}a_{n+2} + 198}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that every term $a_n$ is an integer, where $a_0 = 9$, $a_1 = 3$, $a_2 = 15$ and $a_{n+3} = \\dfrac{a_{n+1}a_{n+2} + 198}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
      },
      {
        "step": "Every term $a_n$ is positive.",
        "reason": "Induction: $a_0$, $a_1$ and $a_2$ are positive, and when $a_n$, $a_{n+1}$ and $a_{n+2}$ are positive, so are the top $a_{n+1}a_{n+2} + 198$ and the bottom $a_n$ of the rule."
      },
      {
        "step": "$a_{n+3}a_n = a_{n+1}a_{n+2} + 198$",
        "reason": "Multiplying both sides by the same number: both sides of the rule are multiplied by $a_n$, which is not $0$ by line 2."
      },
      {
        "step": "$a_{n+4}a_{n+1} = a_{n+2}a_{n+3} + 198$",
        "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 3."
      },
      {
        "step": "$a_{n+4}a_{n+1} - a_{n+3}a_n = a_{n+2}a_{n+3} - a_{n+1}a_{n+2}$",
        "reason": "Elimination: line 3 is taken from line 4, and the two numbers $198$ cancel."
      },
      {
        "step": "$a_{n+4}a_{n+1} + a_{n+1}a_{n+2} = a_{n+2}a_{n+3} + a_{n+3}a_n$",
        "reason": "Adding the same number to both sides: $a_{n+1}a_{n+2} + a_{n+3}a_n$ is added to both sides."
      },
      {
        "step": "$a_{n+1}(a_{n+4} + a_{n+2}) = a_{n+3}(a_{n+2} + a_n)$",
        "reason": "Common factor: $a_{n+1}$ comes out on the left and $a_{n+3}$ on the right."
      },
      {
        "step": "$\\dfrac{a_{n+4} + a_{n+2}}{a_{n+3}} = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $a_{n+1}a_{n+3}$, which is not $0$ by line 2."
      },
      {
        "step": "Write $d_n = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$, so $d_{n+2} = d_n$ for every whole number $n$.",
        "reason": "Substitution for a repeated expression: the ratio of line 8 is written $d_n$, and line 8 says that the ratio two places on is the same."
      },
      {
        "step": "$a_3 = \\dfrac{3 \\cdot 15 + 198}{9} = 27$",
        "reason": "Substituting a value: $n = 0$ in the rule, with $a_0 = 9$, $a_1 = 3$ and $a_2 = 15$."
      },
      {
        "step": "$d_0 = \\dfrac{15 + 9}{3} = 8$",
        "reason": "Substituting a value: $n = 0$ in line 9."
      },
      {
        "step": "$d_1 = \\dfrac{27 + 3}{15} = 2$",
        "reason": "Substituting a value: $n = 1$ in line 9, with $a_3 = 27$ from line 10."
      },
      {
        "step": "So $d_n$ is $8$ for every even whole number $n$ and $2$ for every odd whole number $n$.",
        "reason": "Induction: lines 11 and 12 are the two base cases, and by line 9 each ratio equals the ratio two places before it."
      },
      {
        "step": "So $d_nd_{n+1} = 16$ for every whole number $n$.",
        "reason": "Substituting a value: of $n$ and $n + 1$ one is even and the other odd, so by line 13 the two factors are $8$ and $2$ in one order or the other, and $8 \\cdot 2 = 16$."
      },
      {
        "step": "$a_{n+2} + a_n = d_na_{n+1}$",
        "reason": "Multiplying both sides by the same number: both sides of $d_n = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$, line 9, are multiplied by $a_{n+1}$."
      },
      {
        "step": "$a_{n+4} + a_{n+2} = d_{n+2}a_{n+3}$",
        "reason": "Substituting a value: $n + 2$ goes in place of $n$ in line 15."
      },
      {
        "step": "$a_{n+4} + a_{n+2} = d_na_{n+3}$",
        "reason": "Substituting a value: $d_{n+2} = d_n$ by line 9."
      },
      {
        "step": "$a_{n+4} + 2a_{n+2} + a_n = d_na_{n+3} + d_na_{n+1}$",
        "reason": "Adding two equations: lines 15 and 17 are added."
      },
      {
        "step": "$a_{n+4} + 2a_{n+2} + a_n = d_n(a_{n+3} + a_{n+1})$",
        "reason": "Common factor: $d_n$ is taken out on the right."
      },
      {
        "step": "$a_{n+3} + a_{n+1} = d_{n+1}a_{n+2}$",
        "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 15."
      },
      {
        "step": "$a_{n+4} + 2a_{n+2} + a_n = d_nd_{n+1}a_{n+2}$",
        "reason": "Substituting a value: line 20 goes into the bracket of line 19."
      },
      {
        "step": "$a_{n+4} + 2a_{n+2} + a_n = 16a_{n+2}$",
        "reason": "Substituting a value: line 14 gives the product $d_nd_{n+1}$."
      },
      {
        "step": "$a_{n+4} = 14a_{n+2} - a_n$",
        "reason": "Adding the same number to both sides: $2a_{n+2} + a_n$ is taken from both sides, and $16 - 2 = 14$."
      },
      {
        "step": "So every term $a_n$ is an integer.",
        "reason": "Induction: $a_0$, $a_1$, $a_2$ and $a_3$ are integers, $a_3$ by line 10, and by line 23 each later term is $14$ times the term two places before it less the term four places before it."
      }
    ]
  },
  {
    "id": "t241-k1-p15",
    "topic": "recurrences-made-linear",
    "kind": "t241-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that every term $a_n$ is an integer, where $a_0 = 5$, $a_1 = 4$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 1319}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that every term $a_n$ is an integer, where $a_0 = 5$, $a_1 = 4$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 1319}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
      },
      {
        "step": "Every term $a_n$ is positive.",
        "reason": "Induction: $a_0$ and $a_1$ are positive, and when $a_n$ and $a_{n+1}$ are positive, so are the top $a_{n+1}^2 + 1319$ and the bottom $a_n$ of the rule."
      },
      {
        "step": "$a_{n+2}a_n = a_{n+1}^2 + 1319$",
        "reason": "Multiplying both sides by the same number: both sides of the rule are multiplied by $a_n$, which is not $0$ by line 2."
      },
      {
        "step": "$a_{n+3}a_{n+1} = a_{n+2}^2 + 1319$",
        "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 3."
      },
      {
        "step": "$a_{n+3}a_{n+1} - a_{n+2}a_n = a_{n+2}^2 - a_{n+1}^2$",
        "reason": "Elimination: line 3 is taken from line 4, and the two numbers $1319$ cancel."
      },
      {
        "step": "$a_{n+3}a_{n+1} + a_{n+1}^2 = a_{n+2}^2 + a_{n+2}a_n$",
        "reason": "Adding the same number to both sides: $a_{n+1}^2 + a_{n+2}a_n$ is added to both sides."
      },
      {
        "step": "$a_{n+1}(a_{n+3} + a_{n+1}) = a_{n+2}(a_{n+2} + a_n)$",
        "reason": "Common factor: $a_{n+1}$ comes out on the left and $a_{n+2}$ on the right."
      },
      {
        "step": "$\\dfrac{a_{n+3} + a_{n+1}}{a_{n+2}} = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $a_{n+1}a_{n+2}$, which is not $0$ by line 2."
      },
      {
        "step": "$a_2 = \\dfrac{4^2 + 1319}{5} = 267$",
        "reason": "Substituting a value: $n = 0$ in the rule, with $a_0 = 5$ and $a_1 = 4$."
      },
      {
        "step": "$\\dfrac{a_2 + a_0}{a_1} = \\dfrac{267 + 5}{4} = 68$",
        "reason": "Substituting a value: $a_0 = 5$, $a_1 = 4$ and $a_2 = 267$ from line 9."
      },
      {
        "step": "So $\\dfrac{a_{n+2} + a_n}{a_{n+1}} = 68$ for every whole number $n$.",
        "reason": "Linearising a recurrence: by line 8 the ratio at $n + 1$ equals the ratio at $n$, so by induction every ratio equals the one at $n = 0$, which is line 10."
      },
      {
        "step": "$a_{n+2} + a_n = 68a_{n+1}$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $a_{n+1}$."
      },
      {
        "step": "$a_{n+2} = 68a_{n+1} - a_n$",
        "reason": "Adding the same number to both sides: $a_n$ is taken from both sides."
      },
      {
        "step": "So every term $a_n$ is an integer.",
        "reason": "Induction: $a_0$ and $a_1$ are integers, and by line 13 two neighbouring integers give an integer next term, since $68$ is a whole number."
      }
    ]
  },
  {
    "id": "t241-k1-p16",
    "topic": "recurrences-made-linear",
    "kind": "t241-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that every term $a_n$ is an integer, where $a_0 = 4$, $a_1 = 6$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 1268}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that every term $a_n$ is an integer, where $a_0 = 4$, $a_1 = 6$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 1268}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
      },
      {
        "step": "Every term $a_n$ is positive.",
        "reason": "Induction: $a_0$ and $a_1$ are positive, and when $a_n$ and $a_{n+1}$ are positive, so are the top $a_{n+1}^2 + 1268$ and the bottom $a_n$ of the rule."
      },
      {
        "step": "$a_{n+2}a_n = a_{n+1}^2 + 1268$",
        "reason": "Multiplying both sides by the same number: both sides of the rule are multiplied by $a_n$, which is not $0$ by line 2."
      },
      {
        "step": "$a_{n+3}a_{n+1} = a_{n+2}^2 + 1268$",
        "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 3."
      },
      {
        "step": "$a_{n+3}a_{n+1} - a_{n+2}a_n = a_{n+2}^2 - a_{n+1}^2$",
        "reason": "Elimination: line 3 is taken from line 4, and the two numbers $1268$ cancel."
      },
      {
        "step": "$a_{n+3}a_{n+1} + a_{n+1}^2 = a_{n+2}^2 + a_{n+2}a_n$",
        "reason": "Adding the same number to both sides: $a_{n+1}^2 + a_{n+2}a_n$ is added to both sides."
      },
      {
        "step": "$a_{n+1}(a_{n+3} + a_{n+1}) = a_{n+2}(a_{n+2} + a_n)$",
        "reason": "Common factor: $a_{n+1}$ comes out on the left and $a_{n+2}$ on the right."
      },
      {
        "step": "$\\dfrac{a_{n+3} + a_{n+1}}{a_{n+2}} = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $a_{n+1}a_{n+2}$, which is not $0$ by line 2."
      },
      {
        "step": "$a_2 = \\dfrac{6^2 + 1268}{4} = 326$",
        "reason": "Substituting a value: $n = 0$ in the rule, with $a_0 = 4$ and $a_1 = 6$."
      },
      {
        "step": "$\\dfrac{a_2 + a_0}{a_1} = \\dfrac{326 + 4}{6} = 55$",
        "reason": "Substituting a value: $a_0 = 4$, $a_1 = 6$ and $a_2 = 326$ from line 9."
      },
      {
        "step": "So $\\dfrac{a_{n+2} + a_n}{a_{n+1}} = 55$ for every whole number $n$.",
        "reason": "Linearising a recurrence: by line 8 the ratio at $n + 1$ equals the ratio at $n$, so by induction every ratio equals the one at $n = 0$, which is line 10."
      },
      {
        "step": "$a_{n+2} + a_n = 55a_{n+1}$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $a_{n+1}$."
      },
      {
        "step": "$a_{n+2} = 55a_{n+1} - a_n$",
        "reason": "Adding the same number to both sides: $a_n$ is taken from both sides."
      },
      {
        "step": "So every term $a_n$ is an integer.",
        "reason": "Induction: $a_0$ and $a_1$ are integers, and by line 13 two neighbouring integers give an integer next term, since $55$ is a whole number."
      }
    ]
  },
  {
    "id": "t241-k1-p17",
    "topic": "recurrences-made-linear",
    "kind": "t241-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that every term $a_n$ is an integer, where $a_0 = 2$, $a_1 = 4$, $a_2 = 34$ and $a_{n+3} = \\dfrac{a_{n+1}a_{n+2} + 60}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that every term $a_n$ is an integer, where $a_0 = 2$, $a_1 = 4$, $a_2 = 34$ and $a_{n+3} = \\dfrac{a_{n+1}a_{n+2} + 60}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
      },
      {
        "step": "Every term $a_n$ is positive.",
        "reason": "Induction: $a_0$, $a_1$ and $a_2$ are positive, and when $a_n$, $a_{n+1}$ and $a_{n+2}$ are positive, so are the top $a_{n+1}a_{n+2} + 60$ and the bottom $a_n$ of the rule."
      },
      {
        "step": "$a_{n+3}a_n = a_{n+1}a_{n+2} + 60$",
        "reason": "Multiplying both sides by the same number: both sides of the rule are multiplied by $a_n$, which is not $0$ by line 2."
      },
      {
        "step": "$a_{n+4}a_{n+1} = a_{n+2}a_{n+3} + 60$",
        "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 3."
      },
      {
        "step": "$a_{n+4}a_{n+1} - a_{n+3}a_n = a_{n+2}a_{n+3} - a_{n+1}a_{n+2}$",
        "reason": "Elimination: line 3 is taken from line 4, and the two numbers $60$ cancel."
      },
      {
        "step": "$a_{n+4}a_{n+1} + a_{n+1}a_{n+2} = a_{n+2}a_{n+3} + a_{n+3}a_n$",
        "reason": "Adding the same number to both sides: $a_{n+1}a_{n+2} + a_{n+3}a_n$ is added to both sides."
      },
      {
        "step": "$a_{n+1}(a_{n+4} + a_{n+2}) = a_{n+3}(a_{n+2} + a_n)$",
        "reason": "Common factor: $a_{n+1}$ comes out on the left and $a_{n+3}$ on the right."
      },
      {
        "step": "$\\dfrac{a_{n+4} + a_{n+2}}{a_{n+3}} = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $a_{n+1}a_{n+3}$, which is not $0$ by line 2."
      },
      {
        "step": "Write $d_n = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$, so $d_{n+2} = d_n$ for every whole number $n$.",
        "reason": "Substitution for a repeated expression: the ratio of line 8 is written $d_n$, and line 8 says that the ratio two places on is the same."
      },
      {
        "step": "$a_3 = \\dfrac{4 \\cdot 34 + 60}{2} = 98$",
        "reason": "Substituting a value: $n = 0$ in the rule, with $a_0 = 2$, $a_1 = 4$ and $a_2 = 34$."
      },
      {
        "step": "$d_0 = \\dfrac{34 + 2}{4} = 9$",
        "reason": "Substituting a value: $n = 0$ in line 9."
      },
      {
        "step": "$d_1 = \\dfrac{98 + 4}{34} = 3$",
        "reason": "Substituting a value: $n = 1$ in line 9, with $a_3 = 98$ from line 10."
      },
      {
        "step": "So $d_n$ is $9$ for every even whole number $n$ and $3$ for every odd whole number $n$.",
        "reason": "Induction: lines 11 and 12 are the two base cases, and by line 9 each ratio equals the ratio two places before it."
      },
      {
        "step": "So $d_nd_{n+1} = 27$ for every whole number $n$.",
        "reason": "Substituting a value: of $n$ and $n + 1$ one is even and the other odd, so by line 13 the two factors are $9$ and $3$ in one order or the other, and $9 \\cdot 3 = 27$."
      },
      {
        "step": "$a_{n+2} + a_n = d_na_{n+1}$",
        "reason": "Multiplying both sides by the same number: both sides of $d_n = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$, line 9, are multiplied by $a_{n+1}$."
      },
      {
        "step": "$a_{n+4} + a_{n+2} = d_{n+2}a_{n+3}$",
        "reason": "Substituting a value: $n + 2$ goes in place of $n$ in line 15."
      },
      {
        "step": "$a_{n+4} + a_{n+2} = d_na_{n+3}$",
        "reason": "Substituting a value: $d_{n+2} = d_n$ by line 9."
      },
      {
        "step": "$a_{n+4} + 2a_{n+2} + a_n = d_na_{n+3} + d_na_{n+1}$",
        "reason": "Adding two equations: lines 15 and 17 are added."
      },
      {
        "step": "$a_{n+4} + 2a_{n+2} + a_n = d_n(a_{n+3} + a_{n+1})$",
        "reason": "Common factor: $d_n$ is taken out on the right."
      },
      {
        "step": "$a_{n+3} + a_{n+1} = d_{n+1}a_{n+2}$",
        "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 15."
      },
      {
        "step": "$a_{n+4} + 2a_{n+2} + a_n = d_nd_{n+1}a_{n+2}$",
        "reason": "Substituting a value: line 20 goes into the bracket of line 19."
      },
      {
        "step": "$a_{n+4} + 2a_{n+2} + a_n = 27a_{n+2}$",
        "reason": "Substituting a value: line 14 gives the product $d_nd_{n+1}$."
      },
      {
        "step": "$a_{n+4} = 25a_{n+2} - a_n$",
        "reason": "Adding the same number to both sides: $2a_{n+2} + a_n$ is taken from both sides, and $27 - 2 = 25$."
      },
      {
        "step": "So every term $a_n$ is an integer.",
        "reason": "Induction: $a_0$, $a_1$, $a_2$ and $a_3$ are integers, $a_3$ by line 10, and by line 23 each later term is $25$ times the term two places before it less the term four places before it."
      }
    ]
  },
  {
    "id": "t241-k1-p18",
    "topic": "recurrences-made-linear",
    "kind": "t241-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that every term $a_n$ is an integer, where $a_0 = 7$, $a_1 = 3$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 656}{a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that every term $a_n$ is an integer, where $a_0 = 7$, $a_1 = 3$ and $a_{n+2} = \\dfrac{a_{n+1}^2 + 656}{a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
      },
      {
        "step": "Every term $a_n$ is positive.",
        "reason": "Induction: $a_0$ and $a_1$ are positive, and when $a_n$ and $a_{n+1}$ are positive, so are the top $a_{n+1}^2 + 656$ and the bottom $a_n$ of the rule."
      },
      {
        "step": "$a_{n+2}a_n = a_{n+1}^2 + 656$",
        "reason": "Multiplying both sides by the same number: both sides of the rule are multiplied by $a_n$, which is not $0$ by line 2."
      },
      {
        "step": "$a_{n+3}a_{n+1} = a_{n+2}^2 + 656$",
        "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 3."
      },
      {
        "step": "$a_{n+3}a_{n+1} - a_{n+2}a_n = a_{n+2}^2 - a_{n+1}^2$",
        "reason": "Elimination: line 3 is taken from line 4, and the two numbers $656$ cancel."
      },
      {
        "step": "$a_{n+3}a_{n+1} + a_{n+1}^2 = a_{n+2}^2 + a_{n+2}a_n$",
        "reason": "Adding the same number to both sides: $a_{n+1}^2 + a_{n+2}a_n$ is added to both sides."
      },
      {
        "step": "$a_{n+1}(a_{n+3} + a_{n+1}) = a_{n+2}(a_{n+2} + a_n)$",
        "reason": "Common factor: $a_{n+1}$ comes out on the left and $a_{n+2}$ on the right."
      },
      {
        "step": "$\\dfrac{a_{n+3} + a_{n+1}}{a_{n+2}} = \\dfrac{a_{n+2} + a_n}{a_{n+1}}$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $a_{n+1}a_{n+2}$, which is not $0$ by line 2."
      },
      {
        "step": "$a_2 = \\dfrac{3^2 + 656}{7} = 95$",
        "reason": "Substituting a value: $n = 0$ in the rule, with $a_0 = 7$ and $a_1 = 3$."
      },
      {
        "step": "$\\dfrac{a_2 + a_0}{a_1} = \\dfrac{95 + 7}{3} = 34$",
        "reason": "Substituting a value: $a_0 = 7$, $a_1 = 3$ and $a_2 = 95$ from line 9."
      },
      {
        "step": "So $\\dfrac{a_{n+2} + a_n}{a_{n+1}} = 34$ for every whole number $n$.",
        "reason": "Linearising a recurrence: by line 8 the ratio at $n + 1$ equals the ratio at $n$, so by induction every ratio equals the one at $n = 0$, which is line 10."
      },
      {
        "step": "$a_{n+2} + a_n = 34a_{n+1}$",
        "reason": "Multiplying both sides by the same number: both sides are multiplied by $a_{n+1}$."
      },
      {
        "step": "$a_{n+2} = 34a_{n+1} - a_n$",
        "reason": "Adding the same number to both sides: $a_n$ is taken from both sides."
      },
      {
        "step": "So every term $a_n$ is an integer.",
        "reason": "Induction: $a_0$ and $a_1$ are integers, and by line 13 two neighbouring integers give an integer next term, since $34$ is a whole number."
      }
    ]
  },
  {
    "id": "t241-k2-p01",
    "topic": "recurrences-made-linear",
    "kind": "t241-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $16a_na_{n+1} - 143$ is the square of $a_{n+1} + a_n$ for every whole number $n$, where $a_0 = 4$, $a_1 = 3$ and $a_{n+2} = 14a_{n+1} - a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $16a_na_{n+1} - 143$ is the square of $a_{n+1} + a_n$ for every whole number $n$, where $a_0 = 4$, $a_1 = 3$ and $a_{n+2} = 14a_{n+1} - a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$a_2 = 14 \\cdot 3 - 4 = 38$",
        "reason": "Substituting a value: $n = 0$ in the recurrence, with $a_0 = 4$ and $a_1 = 3$."
      },
      {
        "step": "$(a_1 + a_0)^2 - 16a_0a_1 = (3 + 4)^2 - 16 \\cdot 4 \\cdot 3 = -143$",
        "reason": "Substituting a value: $a_0 = 4$ and $a_1 = 3$, with $(3 + 4)^2 = 49$ and $16 \\cdot 4 \\cdot 3 = 192$."
      },
      {
        "step": "$(a_2 + a_1)^2 - 16a_1a_2 = (38 + 3)^2 - 16 \\cdot 3 \\cdot 38 = -143$",
        "reason": "Substituting a value: $a_1 = 3$ and $a_2 = 38$ from line 2, with $(38 + 3)^2 = 1681$ and $16 \\cdot 3 \\cdot 38 = 1824$."
      },
      {
        "step": "Guess: $(a_{n+1} + a_n)^2 - 16a_na_{n+1} = -143$ for every whole number $n$.",
        "reason": "Experiment, find the pattern, prove it: lines 3 and 4 give the same number at $n = 0$ and at $n = 1$; two cases show a pattern and prove nothing yet."
      },
      {
        "step": "The guess holds at $n = 0$.",
        "reason": "Base case: line 3 is the guess at $n = 0$."
      },
      {
        "step": "Assume that $(a_{k+1} + a_k)^2 - 16a_ka_{k+1} = -143$ for some whole number $k$.",
        "reason": "Inductive assumption: the guess at $n = k$."
      },
      {
        "step": "$a_{k+1}^2 + 2a_ka_{k+1} + a_k^2 - 16a_ka_{k+1} = -143$",
        "reason": "Square of a binomial: the square in line 7 is multiplied out."
      },
      {
        "step": "$a_{k+1}^2 - 14a_ka_{k+1} + a_k^2 = -143$",
        "reason": "Collecting like terms: $2 - 16 = -14$."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 16a_{k+1}a_{k+2} = a_{k+2}^2 + 2a_{k+1}a_{k+2} + a_{k+1}^2 - 16a_{k+1}a_{k+2}$",
        "reason": "Square of a binomial: the left side of the guess at $n = k + 1$, with its square multiplied out."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 16a_{k+1}a_{k+2} = a_{k+2}^2 - 14a_{k+1}a_{k+2} + a_{k+1}^2$",
        "reason": "Collecting like terms: $2 - 16 = -14$, as in line 9."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 16a_{k+1}a_{k+2} = a_{k+2}(a_{k+2} - 14a_{k+1}) + a_{k+1}^2$",
        "reason": "Common factor: $a_{k+2}$ comes out of the first two terms."
      },
      {
        "step": "$a_{k+2} - 14a_{k+1} = -a_k$",
        "reason": "Adding the same number to both sides: $14a_{k+1}$ is taken from both sides of the recurrence at $n = k$."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 16a_{k+1}a_{k+2} = -a_ka_{k+2} + a_{k+1}^2$",
        "reason": "Substituting a value: line 13 goes into the bracket of line 12."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 16a_{k+1}a_{k+2} = -a_k(14a_{k+1} - a_k) + a_{k+1}^2$",
        "reason": "Linear recurrence of order 2: the recurrence at $n = k$ gives $a_{k+2}$ from the two terms before it."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 16a_{k+1}a_{k+2} = a_{k+1}^2 - 14a_ka_{k+1} + a_k^2$",
        "reason": "Multiplying out: $-a_k$ multiplies each term of the bracket, and the terms are put in the order of line 9."
      },
      {
        "step": "So $(a_{k+2} + a_{k+1})^2 - 16a_{k+1}a_{k+2} = -143$, and the guess holds at $n = k + 1$.",
        "reason": "Inductive step: the right side of line 16 is the left side of line 9, and line 9 gives it the value $-143$."
      },
      {
        "step": "So $(a_{n+1} + a_n)^2 - 16a_na_{n+1} = -143$ for every whole number $n$.",
        "reason": "Induction: the base case is line 6 and the inductive step is lines 7 to 17."
      },
      {
        "step": "So $16a_na_{n+1} - 143 = (a_{n+1} + a_n)^2$ for every whole number $n$.",
        "reason": "Adding the same number to both sides: $16a_na_{n+1}$ is added to both sides of line 18, which is then read right to left."
      }
    ]
  },
  {
    "id": "t241-k2-p02",
    "topic": "recurrences-made-linear",
    "kind": "t241-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $22a_na_{n+1} - 359$ is the square of $a_{n+1} + a_n$ for every whole number $n$, where $a_0 = 4$, $a_1 = 5$ and $a_{n+2} = 20a_{n+1} - a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $22a_na_{n+1} - 359$ is the square of $a_{n+1} + a_n$ for every whole number $n$, where $a_0 = 4$, $a_1 = 5$ and $a_{n+2} = 20a_{n+1} - a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$a_2 = 20 \\cdot 5 - 4 = 96$",
        "reason": "Substituting a value: $n = 0$ in the recurrence, with $a_0 = 4$ and $a_1 = 5$."
      },
      {
        "step": "$(a_1 + a_0)^2 - 22a_0a_1 = (5 + 4)^2 - 22 \\cdot 4 \\cdot 5 = -359$",
        "reason": "Substituting a value: $a_0 = 4$ and $a_1 = 5$, with $(5 + 4)^2 = 81$ and $22 \\cdot 4 \\cdot 5 = 440$."
      },
      {
        "step": "$(a_2 + a_1)^2 - 22a_1a_2 = (96 + 5)^2 - 22 \\cdot 5 \\cdot 96 = -359$",
        "reason": "Substituting a value: $a_1 = 5$ and $a_2 = 96$ from line 2, with $(96 + 5)^2 = 10{,}201$ and $22 \\cdot 5 \\cdot 96 = 10{,}560$."
      },
      {
        "step": "Guess: $(a_{n+1} + a_n)^2 - 22a_na_{n+1} = -359$ for every whole number $n$.",
        "reason": "Experiment, find the pattern, prove it: lines 3 and 4 give the same number at $n = 0$ and at $n = 1$; two cases show a pattern and prove nothing yet."
      },
      {
        "step": "The guess holds at $n = 0$.",
        "reason": "Base case: line 3 is the guess at $n = 0$."
      },
      {
        "step": "Assume that $(a_{k+1} + a_k)^2 - 22a_ka_{k+1} = -359$ for some whole number $k$.",
        "reason": "Inductive assumption: the guess at $n = k$."
      },
      {
        "step": "$a_{k+1}^2 + 2a_ka_{k+1} + a_k^2 - 22a_ka_{k+1} = -359$",
        "reason": "Square of a binomial: the square in line 7 is multiplied out."
      },
      {
        "step": "$a_{k+1}^2 - 20a_ka_{k+1} + a_k^2 = -359$",
        "reason": "Collecting like terms: $2 - 22 = -20$."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 22a_{k+1}a_{k+2} = a_{k+2}^2 + 2a_{k+1}a_{k+2} + a_{k+1}^2 - 22a_{k+1}a_{k+2}$",
        "reason": "Square of a binomial: the left side of the guess at $n = k + 1$, with its square multiplied out."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 22a_{k+1}a_{k+2} = a_{k+2}^2 - 20a_{k+1}a_{k+2} + a_{k+1}^2$",
        "reason": "Collecting like terms: $2 - 22 = -20$, as in line 9."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 22a_{k+1}a_{k+2} = a_{k+2}(a_{k+2} - 20a_{k+1}) + a_{k+1}^2$",
        "reason": "Common factor: $a_{k+2}$ comes out of the first two terms."
      },
      {
        "step": "$a_{k+2} - 20a_{k+1} = -a_k$",
        "reason": "Adding the same number to both sides: $20a_{k+1}$ is taken from both sides of the recurrence at $n = k$."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 22a_{k+1}a_{k+2} = -a_ka_{k+2} + a_{k+1}^2$",
        "reason": "Substituting a value: line 13 goes into the bracket of line 12."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 22a_{k+1}a_{k+2} = -a_k(20a_{k+1} - a_k) + a_{k+1}^2$",
        "reason": "Linear recurrence of order 2: the recurrence at $n = k$ gives $a_{k+2}$ from the two terms before it."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 22a_{k+1}a_{k+2} = a_{k+1}^2 - 20a_ka_{k+1} + a_k^2$",
        "reason": "Multiplying out: $-a_k$ multiplies each term of the bracket, and the terms are put in the order of line 9."
      },
      {
        "step": "So $(a_{k+2} + a_{k+1})^2 - 22a_{k+1}a_{k+2} = -359$, and the guess holds at $n = k + 1$.",
        "reason": "Inductive step: the right side of line 16 is the left side of line 9, and line 9 gives it the value $-359$."
      },
      {
        "step": "So $(a_{n+1} + a_n)^2 - 22a_na_{n+1} = -359$ for every whole number $n$.",
        "reason": "Induction: the base case is line 6 and the inductive step is lines 7 to 17."
      },
      {
        "step": "So $22a_na_{n+1} - 359 = (a_{n+1} + a_n)^2$ for every whole number $n$.",
        "reason": "Adding the same number to both sides: $22a_na_{n+1}$ is added to both sides of line 18, which is then read right to left."
      }
    ]
  },
  {
    "id": "t241-k2-p03",
    "topic": "recurrences-made-linear",
    "kind": "t241-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $27a_na_{n+1} - 137$ is the square of $a_{n+1} + a_n$ for every whole number $n$, where $a_0 = 2$, $a_1 = 3$ and $a_{n+2} = 25a_{n+1} - a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $27a_na_{n+1} - 137$ is the square of $a_{n+1} + a_n$ for every whole number $n$, where $a_0 = 2$, $a_1 = 3$ and $a_{n+2} = 25a_{n+1} - a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$a_2 = 25 \\cdot 3 - 2 = 73$",
        "reason": "Substituting a value: $n = 0$ in the recurrence, with $a_0 = 2$ and $a_1 = 3$."
      },
      {
        "step": "$(a_1 + a_0)^2 - 27a_0a_1 = (3 + 2)^2 - 27 \\cdot 2 \\cdot 3 = -137$",
        "reason": "Substituting a value: $a_0 = 2$ and $a_1 = 3$, with $(3 + 2)^2 = 25$ and $27 \\cdot 2 \\cdot 3 = 162$."
      },
      {
        "step": "$(a_2 + a_1)^2 - 27a_1a_2 = (73 + 3)^2 - 27 \\cdot 3 \\cdot 73 = -137$",
        "reason": "Substituting a value: $a_1 = 3$ and $a_2 = 73$ from line 2, with $(73 + 3)^2 = 5776$ and $27 \\cdot 3 \\cdot 73 = 5913$."
      },
      {
        "step": "Guess: $(a_{n+1} + a_n)^2 - 27a_na_{n+1} = -137$ for every whole number $n$.",
        "reason": "Experiment, find the pattern, prove it: lines 3 and 4 give the same number at $n = 0$ and at $n = 1$; two cases show a pattern and prove nothing yet."
      },
      {
        "step": "The guess holds at $n = 0$.",
        "reason": "Base case: line 3 is the guess at $n = 0$."
      },
      {
        "step": "Assume that $(a_{k+1} + a_k)^2 - 27a_ka_{k+1} = -137$ for some whole number $k$.",
        "reason": "Inductive assumption: the guess at $n = k$."
      },
      {
        "step": "$a_{k+1}^2 + 2a_ka_{k+1} + a_k^2 - 27a_ka_{k+1} = -137$",
        "reason": "Square of a binomial: the square in line 7 is multiplied out."
      },
      {
        "step": "$a_{k+1}^2 - 25a_ka_{k+1} + a_k^2 = -137$",
        "reason": "Collecting like terms: $2 - 27 = -25$."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 27a_{k+1}a_{k+2} = a_{k+2}^2 + 2a_{k+1}a_{k+2} + a_{k+1}^2 - 27a_{k+1}a_{k+2}$",
        "reason": "Square of a binomial: the left side of the guess at $n = k + 1$, with its square multiplied out."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 27a_{k+1}a_{k+2} = a_{k+2}^2 - 25a_{k+1}a_{k+2} + a_{k+1}^2$",
        "reason": "Collecting like terms: $2 - 27 = -25$, as in line 9."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 27a_{k+1}a_{k+2} = a_{k+2}(a_{k+2} - 25a_{k+1}) + a_{k+1}^2$",
        "reason": "Common factor: $a_{k+2}$ comes out of the first two terms."
      },
      {
        "step": "$a_{k+2} - 25a_{k+1} = -a_k$",
        "reason": "Adding the same number to both sides: $25a_{k+1}$ is taken from both sides of the recurrence at $n = k$."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 27a_{k+1}a_{k+2} = -a_ka_{k+2} + a_{k+1}^2$",
        "reason": "Substituting a value: line 13 goes into the bracket of line 12."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 27a_{k+1}a_{k+2} = -a_k(25a_{k+1} - a_k) + a_{k+1}^2$",
        "reason": "Linear recurrence of order 2: the recurrence at $n = k$ gives $a_{k+2}$ from the two terms before it."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 27a_{k+1}a_{k+2} = a_{k+1}^2 - 25a_ka_{k+1} + a_k^2$",
        "reason": "Multiplying out: $-a_k$ multiplies each term of the bracket, and the terms are put in the order of line 9."
      },
      {
        "step": "So $(a_{k+2} + a_{k+1})^2 - 27a_{k+1}a_{k+2} = -137$, and the guess holds at $n = k + 1$.",
        "reason": "Inductive step: the right side of line 16 is the left side of line 9, and line 9 gives it the value $-137$."
      },
      {
        "step": "So $(a_{n+1} + a_n)^2 - 27a_na_{n+1} = -137$ for every whole number $n$.",
        "reason": "Induction: the base case is line 6 and the inductive step is lines 7 to 17."
      },
      {
        "step": "So $27a_na_{n+1} - 137 = (a_{n+1} + a_n)^2$ for every whole number $n$.",
        "reason": "Adding the same number to both sides: $27a_na_{n+1}$ is added to both sides of line 18, which is then read right to left."
      }
    ]
  },
  {
    "id": "t241-k2-p04",
    "topic": "recurrences-made-linear",
    "kind": "t241-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $25a_na_{n+1} - 300$ is the square of $a_{n+1} + a_n$ for every whole number $n$, where $a_0 = 8$, $a_1 = 2$ and $a_{n+2} = 23a_{n+1} - a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $25a_na_{n+1} - 300$ is the square of $a_{n+1} + a_n$ for every whole number $n$, where $a_0 = 8$, $a_1 = 2$ and $a_{n+2} = 23a_{n+1} - a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$a_2 = 23 \\cdot 2 - 8 = 38$",
        "reason": "Substituting a value: $n = 0$ in the recurrence, with $a_0 = 8$ and $a_1 = 2$."
      },
      {
        "step": "$(a_1 + a_0)^2 - 25a_0a_1 = (2 + 8)^2 - 25 \\cdot 8 \\cdot 2 = -300$",
        "reason": "Substituting a value: $a_0 = 8$ and $a_1 = 2$, with $(2 + 8)^2 = 100$ and $25 \\cdot 8 \\cdot 2 = 400$."
      },
      {
        "step": "$(a_2 + a_1)^2 - 25a_1a_2 = (38 + 2)^2 - 25 \\cdot 2 \\cdot 38 = -300$",
        "reason": "Substituting a value: $a_1 = 2$ and $a_2 = 38$ from line 2, with $(38 + 2)^2 = 1600$ and $25 \\cdot 2 \\cdot 38 = 1900$."
      },
      {
        "step": "Guess: $(a_{n+1} + a_n)^2 - 25a_na_{n+1} = -300$ for every whole number $n$.",
        "reason": "Experiment, find the pattern, prove it: lines 3 and 4 give the same number at $n = 0$ and at $n = 1$; two cases show a pattern and prove nothing yet."
      },
      {
        "step": "The guess holds at $n = 0$.",
        "reason": "Base case: line 3 is the guess at $n = 0$."
      },
      {
        "step": "Assume that $(a_{k+1} + a_k)^2 - 25a_ka_{k+1} = -300$ for some whole number $k$.",
        "reason": "Inductive assumption: the guess at $n = k$."
      },
      {
        "step": "$a_{k+1}^2 + 2a_ka_{k+1} + a_k^2 - 25a_ka_{k+1} = -300$",
        "reason": "Square of a binomial: the square in line 7 is multiplied out."
      },
      {
        "step": "$a_{k+1}^2 - 23a_ka_{k+1} + a_k^2 = -300$",
        "reason": "Collecting like terms: $2 - 25 = -23$."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 25a_{k+1}a_{k+2} = a_{k+2}^2 + 2a_{k+1}a_{k+2} + a_{k+1}^2 - 25a_{k+1}a_{k+2}$",
        "reason": "Square of a binomial: the left side of the guess at $n = k + 1$, with its square multiplied out."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 25a_{k+1}a_{k+2} = a_{k+2}^2 - 23a_{k+1}a_{k+2} + a_{k+1}^2$",
        "reason": "Collecting like terms: $2 - 25 = -23$, as in line 9."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 25a_{k+1}a_{k+2} = a_{k+2}(a_{k+2} - 23a_{k+1}) + a_{k+1}^2$",
        "reason": "Common factor: $a_{k+2}$ comes out of the first two terms."
      },
      {
        "step": "$a_{k+2} - 23a_{k+1} = -a_k$",
        "reason": "Adding the same number to both sides: $23a_{k+1}$ is taken from both sides of the recurrence at $n = k$."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 25a_{k+1}a_{k+2} = -a_ka_{k+2} + a_{k+1}^2$",
        "reason": "Substituting a value: line 13 goes into the bracket of line 12."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 25a_{k+1}a_{k+2} = -a_k(23a_{k+1} - a_k) + a_{k+1}^2$",
        "reason": "Linear recurrence of order 2: the recurrence at $n = k$ gives $a_{k+2}$ from the two terms before it."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 25a_{k+1}a_{k+2} = a_{k+1}^2 - 23a_ka_{k+1} + a_k^2$",
        "reason": "Multiplying out: $-a_k$ multiplies each term of the bracket, and the terms are put in the order of line 9."
      },
      {
        "step": "So $(a_{k+2} + a_{k+1})^2 - 25a_{k+1}a_{k+2} = -300$, and the guess holds at $n = k + 1$.",
        "reason": "Inductive step: the right side of line 16 is the left side of line 9, and line 9 gives it the value $-300$."
      },
      {
        "step": "So $(a_{n+1} + a_n)^2 - 25a_na_{n+1} = -300$ for every whole number $n$.",
        "reason": "Induction: the base case is line 6 and the inductive step is lines 7 to 17."
      },
      {
        "step": "So $25a_na_{n+1} - 300 = (a_{n+1} + a_n)^2$ for every whole number $n$.",
        "reason": "Adding the same number to both sides: $25a_na_{n+1}$ is added to both sides of line 18, which is then read right to left."
      }
    ]
  },
  {
    "id": "t241-k2-p05",
    "topic": "recurrences-made-linear",
    "kind": "t241-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $17a_na_{n+1} - 225$ is the square of $a_{n+1} + a_n$ for every whole number $n$, where $a_0 = 3$, $a_1 = 6$ and $a_{n+2} = 15a_{n+1} - a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $17a_na_{n+1} - 225$ is the square of $a_{n+1} + a_n$ for every whole number $n$, where $a_0 = 3$, $a_1 = 6$ and $a_{n+2} = 15a_{n+1} - a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$a_2 = 15 \\cdot 6 - 3 = 87$",
        "reason": "Substituting a value: $n = 0$ in the recurrence, with $a_0 = 3$ and $a_1 = 6$."
      },
      {
        "step": "$(a_1 + a_0)^2 - 17a_0a_1 = (6 + 3)^2 - 17 \\cdot 3 \\cdot 6 = -225$",
        "reason": "Substituting a value: $a_0 = 3$ and $a_1 = 6$, with $(6 + 3)^2 = 81$ and $17 \\cdot 3 \\cdot 6 = 306$."
      },
      {
        "step": "$(a_2 + a_1)^2 - 17a_1a_2 = (87 + 6)^2 - 17 \\cdot 6 \\cdot 87 = -225$",
        "reason": "Substituting a value: $a_1 = 6$ and $a_2 = 87$ from line 2, with $(87 + 6)^2 = 8649$ and $17 \\cdot 6 \\cdot 87 = 8874$."
      },
      {
        "step": "Guess: $(a_{n+1} + a_n)^2 - 17a_na_{n+1} = -225$ for every whole number $n$.",
        "reason": "Experiment, find the pattern, prove it: lines 3 and 4 give the same number at $n = 0$ and at $n = 1$; two cases show a pattern and prove nothing yet."
      },
      {
        "step": "The guess holds at $n = 0$.",
        "reason": "Base case: line 3 is the guess at $n = 0$."
      },
      {
        "step": "Assume that $(a_{k+1} + a_k)^2 - 17a_ka_{k+1} = -225$ for some whole number $k$.",
        "reason": "Inductive assumption: the guess at $n = k$."
      },
      {
        "step": "$a_{k+1}^2 + 2a_ka_{k+1} + a_k^2 - 17a_ka_{k+1} = -225$",
        "reason": "Square of a binomial: the square in line 7 is multiplied out."
      },
      {
        "step": "$a_{k+1}^2 - 15a_ka_{k+1} + a_k^2 = -225$",
        "reason": "Collecting like terms: $2 - 17 = -15$."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 17a_{k+1}a_{k+2} = a_{k+2}^2 + 2a_{k+1}a_{k+2} + a_{k+1}^2 - 17a_{k+1}a_{k+2}$",
        "reason": "Square of a binomial: the left side of the guess at $n = k + 1$, with its square multiplied out."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 17a_{k+1}a_{k+2} = a_{k+2}^2 - 15a_{k+1}a_{k+2} + a_{k+1}^2$",
        "reason": "Collecting like terms: $2 - 17 = -15$, as in line 9."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 17a_{k+1}a_{k+2} = a_{k+2}(a_{k+2} - 15a_{k+1}) + a_{k+1}^2$",
        "reason": "Common factor: $a_{k+2}$ comes out of the first two terms."
      },
      {
        "step": "$a_{k+2} - 15a_{k+1} = -a_k$",
        "reason": "Adding the same number to both sides: $15a_{k+1}$ is taken from both sides of the recurrence at $n = k$."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 17a_{k+1}a_{k+2} = -a_ka_{k+2} + a_{k+1}^2$",
        "reason": "Substituting a value: line 13 goes into the bracket of line 12."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 17a_{k+1}a_{k+2} = -a_k(15a_{k+1} - a_k) + a_{k+1}^2$",
        "reason": "Linear recurrence of order 2: the recurrence at $n = k$ gives $a_{k+2}$ from the two terms before it."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 17a_{k+1}a_{k+2} = a_{k+1}^2 - 15a_ka_{k+1} + a_k^2$",
        "reason": "Multiplying out: $-a_k$ multiplies each term of the bracket, and the terms are put in the order of line 9."
      },
      {
        "step": "So $(a_{k+2} + a_{k+1})^2 - 17a_{k+1}a_{k+2} = -225$, and the guess holds at $n = k + 1$.",
        "reason": "Inductive step: the right side of line 16 is the left side of line 9, and line 9 gives it the value $-225$."
      },
      {
        "step": "So $(a_{n+1} + a_n)^2 - 17a_na_{n+1} = -225$ for every whole number $n$.",
        "reason": "Induction: the base case is line 6 and the inductive step is lines 7 to 17."
      },
      {
        "step": "So $17a_na_{n+1} - 225 = (a_{n+1} + a_n)^2$ for every whole number $n$.",
        "reason": "Adding the same number to both sides: $17a_na_{n+1}$ is added to both sides of line 18, which is then read right to left."
      }
    ]
  },
  {
    "id": "t241-k2-p06",
    "topic": "recurrences-made-linear",
    "kind": "t241-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $14a_na_{n+1} - 215$ is the square of $a_{n+1} + a_n$ for every whole number $n$, where $a_0 = 3$, $a_1 = 8$ and $a_{n+2} = 12a_{n+1} - a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $14a_na_{n+1} - 215$ is the square of $a_{n+1} + a_n$ for every whole number $n$, where $a_0 = 3$, $a_1 = 8$ and $a_{n+2} = 12a_{n+1} - a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$a_2 = 12 \\cdot 8 - 3 = 93$",
        "reason": "Substituting a value: $n = 0$ in the recurrence, with $a_0 = 3$ and $a_1 = 8$."
      },
      {
        "step": "$(a_1 + a_0)^2 - 14a_0a_1 = (8 + 3)^2 - 14 \\cdot 3 \\cdot 8 = -215$",
        "reason": "Substituting a value: $a_0 = 3$ and $a_1 = 8$, with $(8 + 3)^2 = 121$ and $14 \\cdot 3 \\cdot 8 = 336$."
      },
      {
        "step": "$(a_2 + a_1)^2 - 14a_1a_2 = (93 + 8)^2 - 14 \\cdot 8 \\cdot 93 = -215$",
        "reason": "Substituting a value: $a_1 = 8$ and $a_2 = 93$ from line 2, with $(93 + 8)^2 = 10{,}201$ and $14 \\cdot 8 \\cdot 93 = 10{,}416$."
      },
      {
        "step": "Guess: $(a_{n+1} + a_n)^2 - 14a_na_{n+1} = -215$ for every whole number $n$.",
        "reason": "Experiment, find the pattern, prove it: lines 3 and 4 give the same number at $n = 0$ and at $n = 1$; two cases show a pattern and prove nothing yet."
      },
      {
        "step": "The guess holds at $n = 0$.",
        "reason": "Base case: line 3 is the guess at $n = 0$."
      },
      {
        "step": "Assume that $(a_{k+1} + a_k)^2 - 14a_ka_{k+1} = -215$ for some whole number $k$.",
        "reason": "Inductive assumption: the guess at $n = k$."
      },
      {
        "step": "$a_{k+1}^2 + 2a_ka_{k+1} + a_k^2 - 14a_ka_{k+1} = -215$",
        "reason": "Square of a binomial: the square in line 7 is multiplied out."
      },
      {
        "step": "$a_{k+1}^2 - 12a_ka_{k+1} + a_k^2 = -215$",
        "reason": "Collecting like terms: $2 - 14 = -12$."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 14a_{k+1}a_{k+2} = a_{k+2}^2 + 2a_{k+1}a_{k+2} + a_{k+1}^2 - 14a_{k+1}a_{k+2}$",
        "reason": "Square of a binomial: the left side of the guess at $n = k + 1$, with its square multiplied out."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 14a_{k+1}a_{k+2} = a_{k+2}^2 - 12a_{k+1}a_{k+2} + a_{k+1}^2$",
        "reason": "Collecting like terms: $2 - 14 = -12$, as in line 9."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 14a_{k+1}a_{k+2} = a_{k+2}(a_{k+2} - 12a_{k+1}) + a_{k+1}^2$",
        "reason": "Common factor: $a_{k+2}$ comes out of the first two terms."
      },
      {
        "step": "$a_{k+2} - 12a_{k+1} = -a_k$",
        "reason": "Adding the same number to both sides: $12a_{k+1}$ is taken from both sides of the recurrence at $n = k$."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 14a_{k+1}a_{k+2} = -a_ka_{k+2} + a_{k+1}^2$",
        "reason": "Substituting a value: line 13 goes into the bracket of line 12."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 14a_{k+1}a_{k+2} = -a_k(12a_{k+1} - a_k) + a_{k+1}^2$",
        "reason": "Linear recurrence of order 2: the recurrence at $n = k$ gives $a_{k+2}$ from the two terms before it."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 14a_{k+1}a_{k+2} = a_{k+1}^2 - 12a_ka_{k+1} + a_k^2$",
        "reason": "Multiplying out: $-a_k$ multiplies each term of the bracket, and the terms are put in the order of line 9."
      },
      {
        "step": "So $(a_{k+2} + a_{k+1})^2 - 14a_{k+1}a_{k+2} = -215$, and the guess holds at $n = k + 1$.",
        "reason": "Inductive step: the right side of line 16 is the left side of line 9, and line 9 gives it the value $-215$."
      },
      {
        "step": "So $(a_{n+1} + a_n)^2 - 14a_na_{n+1} = -215$ for every whole number $n$.",
        "reason": "Induction: the base case is line 6 and the inductive step is lines 7 to 17."
      },
      {
        "step": "So $14a_na_{n+1} - 215 = (a_{n+1} + a_n)^2$ for every whole number $n$.",
        "reason": "Adding the same number to both sides: $14a_na_{n+1}$ is added to both sides of line 18, which is then read right to left."
      }
    ]
  },
  {
    "id": "t241-k2-p07",
    "topic": "recurrences-made-linear",
    "kind": "t241-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $23a_na_{n+1} - 452$ is the square of $a_{n+1} + a_n$ for every whole number $n$, where $a_0 = 6$, $a_1 = 4$ and $a_{n+2} = 21a_{n+1} - a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $23a_na_{n+1} - 452$ is the square of $a_{n+1} + a_n$ for every whole number $n$, where $a_0 = 6$, $a_1 = 4$ and $a_{n+2} = 21a_{n+1} - a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$a_2 = 21 \\cdot 4 - 6 = 78$",
        "reason": "Substituting a value: $n = 0$ in the recurrence, with $a_0 = 6$ and $a_1 = 4$."
      },
      {
        "step": "$(a_1 + a_0)^2 - 23a_0a_1 = (4 + 6)^2 - 23 \\cdot 6 \\cdot 4 = -452$",
        "reason": "Substituting a value: $a_0 = 6$ and $a_1 = 4$, with $(4 + 6)^2 = 100$ and $23 \\cdot 6 \\cdot 4 = 552$."
      },
      {
        "step": "$(a_2 + a_1)^2 - 23a_1a_2 = (78 + 4)^2 - 23 \\cdot 4 \\cdot 78 = -452$",
        "reason": "Substituting a value: $a_1 = 4$ and $a_2 = 78$ from line 2, with $(78 + 4)^2 = 6724$ and $23 \\cdot 4 \\cdot 78 = 7176$."
      },
      {
        "step": "Guess: $(a_{n+1} + a_n)^2 - 23a_na_{n+1} = -452$ for every whole number $n$.",
        "reason": "Experiment, find the pattern, prove it: lines 3 and 4 give the same number at $n = 0$ and at $n = 1$; two cases show a pattern and prove nothing yet."
      },
      {
        "step": "The guess holds at $n = 0$.",
        "reason": "Base case: line 3 is the guess at $n = 0$."
      },
      {
        "step": "Assume that $(a_{k+1} + a_k)^2 - 23a_ka_{k+1} = -452$ for some whole number $k$.",
        "reason": "Inductive assumption: the guess at $n = k$."
      },
      {
        "step": "$a_{k+1}^2 + 2a_ka_{k+1} + a_k^2 - 23a_ka_{k+1} = -452$",
        "reason": "Square of a binomial: the square in line 7 is multiplied out."
      },
      {
        "step": "$a_{k+1}^2 - 21a_ka_{k+1} + a_k^2 = -452$",
        "reason": "Collecting like terms: $2 - 23 = -21$."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 23a_{k+1}a_{k+2} = a_{k+2}^2 + 2a_{k+1}a_{k+2} + a_{k+1}^2 - 23a_{k+1}a_{k+2}$",
        "reason": "Square of a binomial: the left side of the guess at $n = k + 1$, with its square multiplied out."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 23a_{k+1}a_{k+2} = a_{k+2}^2 - 21a_{k+1}a_{k+2} + a_{k+1}^2$",
        "reason": "Collecting like terms: $2 - 23 = -21$, as in line 9."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 23a_{k+1}a_{k+2} = a_{k+2}(a_{k+2} - 21a_{k+1}) + a_{k+1}^2$",
        "reason": "Common factor: $a_{k+2}$ comes out of the first two terms."
      },
      {
        "step": "$a_{k+2} - 21a_{k+1} = -a_k$",
        "reason": "Adding the same number to both sides: $21a_{k+1}$ is taken from both sides of the recurrence at $n = k$."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 23a_{k+1}a_{k+2} = -a_ka_{k+2} + a_{k+1}^2$",
        "reason": "Substituting a value: line 13 goes into the bracket of line 12."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 23a_{k+1}a_{k+2} = -a_k(21a_{k+1} - a_k) + a_{k+1}^2$",
        "reason": "Linear recurrence of order 2: the recurrence at $n = k$ gives $a_{k+2}$ from the two terms before it."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 23a_{k+1}a_{k+2} = a_{k+1}^2 - 21a_ka_{k+1} + a_k^2$",
        "reason": "Multiplying out: $-a_k$ multiplies each term of the bracket, and the terms are put in the order of line 9."
      },
      {
        "step": "So $(a_{k+2} + a_{k+1})^2 - 23a_{k+1}a_{k+2} = -452$, and the guess holds at $n = k + 1$.",
        "reason": "Inductive step: the right side of line 16 is the left side of line 9, and line 9 gives it the value $-452$."
      },
      {
        "step": "So $(a_{n+1} + a_n)^2 - 23a_na_{n+1} = -452$ for every whole number $n$.",
        "reason": "Induction: the base case is line 6 and the inductive step is lines 7 to 17."
      },
      {
        "step": "So $23a_na_{n+1} - 452 = (a_{n+1} + a_n)^2$ for every whole number $n$.",
        "reason": "Adding the same number to both sides: $23a_na_{n+1}$ is added to both sides of line 18, which is then read right to left."
      }
    ]
  },
  {
    "id": "t241-k2-p08",
    "topic": "recurrences-made-linear",
    "kind": "t241-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $28a_na_{n+1} - 423$ is the square of $a_{n+1} + a_n$ for every whole number $n$, where $a_0 = 6$, $a_1 = 3$ and $a_{n+2} = 26a_{n+1} - a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $28a_na_{n+1} - 423$ is the square of $a_{n+1} + a_n$ for every whole number $n$, where $a_0 = 6$, $a_1 = 3$ and $a_{n+2} = 26a_{n+1} - a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$a_2 = 26 \\cdot 3 - 6 = 72$",
        "reason": "Substituting a value: $n = 0$ in the recurrence, with $a_0 = 6$ and $a_1 = 3$."
      },
      {
        "step": "$(a_1 + a_0)^2 - 28a_0a_1 = (3 + 6)^2 - 28 \\cdot 6 \\cdot 3 = -423$",
        "reason": "Substituting a value: $a_0 = 6$ and $a_1 = 3$, with $(3 + 6)^2 = 81$ and $28 \\cdot 6 \\cdot 3 = 504$."
      },
      {
        "step": "$(a_2 + a_1)^2 - 28a_1a_2 = (72 + 3)^2 - 28 \\cdot 3 \\cdot 72 = -423$",
        "reason": "Substituting a value: $a_1 = 3$ and $a_2 = 72$ from line 2, with $(72 + 3)^2 = 5625$ and $28 \\cdot 3 \\cdot 72 = 6048$."
      },
      {
        "step": "Guess: $(a_{n+1} + a_n)^2 - 28a_na_{n+1} = -423$ for every whole number $n$.",
        "reason": "Experiment, find the pattern, prove it: lines 3 and 4 give the same number at $n = 0$ and at $n = 1$; two cases show a pattern and prove nothing yet."
      },
      {
        "step": "The guess holds at $n = 0$.",
        "reason": "Base case: line 3 is the guess at $n = 0$."
      },
      {
        "step": "Assume that $(a_{k+1} + a_k)^2 - 28a_ka_{k+1} = -423$ for some whole number $k$.",
        "reason": "Inductive assumption: the guess at $n = k$."
      },
      {
        "step": "$a_{k+1}^2 + 2a_ka_{k+1} + a_k^2 - 28a_ka_{k+1} = -423$",
        "reason": "Square of a binomial: the square in line 7 is multiplied out."
      },
      {
        "step": "$a_{k+1}^2 - 26a_ka_{k+1} + a_k^2 = -423$",
        "reason": "Collecting like terms: $2 - 28 = -26$."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 28a_{k+1}a_{k+2} = a_{k+2}^2 + 2a_{k+1}a_{k+2} + a_{k+1}^2 - 28a_{k+1}a_{k+2}$",
        "reason": "Square of a binomial: the left side of the guess at $n = k + 1$, with its square multiplied out."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 28a_{k+1}a_{k+2} = a_{k+2}^2 - 26a_{k+1}a_{k+2} + a_{k+1}^2$",
        "reason": "Collecting like terms: $2 - 28 = -26$, as in line 9."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 28a_{k+1}a_{k+2} = a_{k+2}(a_{k+2} - 26a_{k+1}) + a_{k+1}^2$",
        "reason": "Common factor: $a_{k+2}$ comes out of the first two terms."
      },
      {
        "step": "$a_{k+2} - 26a_{k+1} = -a_k$",
        "reason": "Adding the same number to both sides: $26a_{k+1}$ is taken from both sides of the recurrence at $n = k$."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 28a_{k+1}a_{k+2} = -a_ka_{k+2} + a_{k+1}^2$",
        "reason": "Substituting a value: line 13 goes into the bracket of line 12."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 28a_{k+1}a_{k+2} = -a_k(26a_{k+1} - a_k) + a_{k+1}^2$",
        "reason": "Linear recurrence of order 2: the recurrence at $n = k$ gives $a_{k+2}$ from the two terms before it."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 28a_{k+1}a_{k+2} = a_{k+1}^2 - 26a_ka_{k+1} + a_k^2$",
        "reason": "Multiplying out: $-a_k$ multiplies each term of the bracket, and the terms are put in the order of line 9."
      },
      {
        "step": "So $(a_{k+2} + a_{k+1})^2 - 28a_{k+1}a_{k+2} = -423$, and the guess holds at $n = k + 1$.",
        "reason": "Inductive step: the right side of line 16 is the left side of line 9, and line 9 gives it the value $-423$."
      },
      {
        "step": "So $(a_{n+1} + a_n)^2 - 28a_na_{n+1} = -423$ for every whole number $n$.",
        "reason": "Induction: the base case is line 6 and the inductive step is lines 7 to 17."
      },
      {
        "step": "So $28a_na_{n+1} - 423 = (a_{n+1} + a_n)^2$ for every whole number $n$.",
        "reason": "Adding the same number to both sides: $28a_na_{n+1}$ is added to both sides of line 18, which is then read right to left."
      }
    ]
  },
  {
    "id": "t241-k2-p09",
    "topic": "recurrences-made-linear",
    "kind": "t241-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $18a_na_{n+1} - 747$ is the square of $a_{n+1} + a_n$ for every whole number $n$, where $a_0 = 9$, $a_1 = 6$ and $a_{n+2} = 16a_{n+1} - a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $18a_na_{n+1} - 747$ is the square of $a_{n+1} + a_n$ for every whole number $n$, where $a_0 = 9$, $a_1 = 6$ and $a_{n+2} = 16a_{n+1} - a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$a_2 = 16 \\cdot 6 - 9 = 87$",
        "reason": "Substituting a value: $n = 0$ in the recurrence, with $a_0 = 9$ and $a_1 = 6$."
      },
      {
        "step": "$(a_1 + a_0)^2 - 18a_0a_1 = (6 + 9)^2 - 18 \\cdot 9 \\cdot 6 = -747$",
        "reason": "Substituting a value: $a_0 = 9$ and $a_1 = 6$, with $(6 + 9)^2 = 225$ and $18 \\cdot 9 \\cdot 6 = 972$."
      },
      {
        "step": "$(a_2 + a_1)^2 - 18a_1a_2 = (87 + 6)^2 - 18 \\cdot 6 \\cdot 87 = -747$",
        "reason": "Substituting a value: $a_1 = 6$ and $a_2 = 87$ from line 2, with $(87 + 6)^2 = 8649$ and $18 \\cdot 6 \\cdot 87 = 9396$."
      },
      {
        "step": "Guess: $(a_{n+1} + a_n)^2 - 18a_na_{n+1} = -747$ for every whole number $n$.",
        "reason": "Experiment, find the pattern, prove it: lines 3 and 4 give the same number at $n = 0$ and at $n = 1$; two cases show a pattern and prove nothing yet."
      },
      {
        "step": "The guess holds at $n = 0$.",
        "reason": "Base case: line 3 is the guess at $n = 0$."
      },
      {
        "step": "Assume that $(a_{k+1} + a_k)^2 - 18a_ka_{k+1} = -747$ for some whole number $k$.",
        "reason": "Inductive assumption: the guess at $n = k$."
      },
      {
        "step": "$a_{k+1}^2 + 2a_ka_{k+1} + a_k^2 - 18a_ka_{k+1} = -747$",
        "reason": "Square of a binomial: the square in line 7 is multiplied out."
      },
      {
        "step": "$a_{k+1}^2 - 16a_ka_{k+1} + a_k^2 = -747$",
        "reason": "Collecting like terms: $2 - 18 = -16$."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 18a_{k+1}a_{k+2} = a_{k+2}^2 + 2a_{k+1}a_{k+2} + a_{k+1}^2 - 18a_{k+1}a_{k+2}$",
        "reason": "Square of a binomial: the left side of the guess at $n = k + 1$, with its square multiplied out."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 18a_{k+1}a_{k+2} = a_{k+2}^2 - 16a_{k+1}a_{k+2} + a_{k+1}^2$",
        "reason": "Collecting like terms: $2 - 18 = -16$, as in line 9."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 18a_{k+1}a_{k+2} = a_{k+2}(a_{k+2} - 16a_{k+1}) + a_{k+1}^2$",
        "reason": "Common factor: $a_{k+2}$ comes out of the first two terms."
      },
      {
        "step": "$a_{k+2} - 16a_{k+1} = -a_k$",
        "reason": "Adding the same number to both sides: $16a_{k+1}$ is taken from both sides of the recurrence at $n = k$."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 18a_{k+1}a_{k+2} = -a_ka_{k+2} + a_{k+1}^2$",
        "reason": "Substituting a value: line 13 goes into the bracket of line 12."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 18a_{k+1}a_{k+2} = -a_k(16a_{k+1} - a_k) + a_{k+1}^2$",
        "reason": "Linear recurrence of order 2: the recurrence at $n = k$ gives $a_{k+2}$ from the two terms before it."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 18a_{k+1}a_{k+2} = a_{k+1}^2 - 16a_ka_{k+1} + a_k^2$",
        "reason": "Multiplying out: $-a_k$ multiplies each term of the bracket, and the terms are put in the order of line 9."
      },
      {
        "step": "So $(a_{k+2} + a_{k+1})^2 - 18a_{k+1}a_{k+2} = -747$, and the guess holds at $n = k + 1$.",
        "reason": "Inductive step: the right side of line 16 is the left side of line 9, and line 9 gives it the value $-747$."
      },
      {
        "step": "So $(a_{n+1} + a_n)^2 - 18a_na_{n+1} = -747$ for every whole number $n$.",
        "reason": "Induction: the base case is line 6 and the inductive step is lines 7 to 17."
      },
      {
        "step": "So $18a_na_{n+1} - 747 = (a_{n+1} + a_n)^2$ for every whole number $n$.",
        "reason": "Adding the same number to both sides: $18a_na_{n+1}$ is added to both sides of line 18, which is then read right to left."
      }
    ]
  },
  {
    "id": "t241-k2-p10",
    "topic": "recurrences-made-linear",
    "kind": "t241-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $10a_na_{n+1} - 35$ is the square of $a_{n+1} + a_n$ for every whole number $n$, where $a_0 = 3$, $a_1 = 2$ and $a_{n+2} = 8a_{n+1} - a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $10a_na_{n+1} - 35$ is the square of $a_{n+1} + a_n$ for every whole number $n$, where $a_0 = 3$, $a_1 = 2$ and $a_{n+2} = 8a_{n+1} - a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$a_2 = 8 \\cdot 2 - 3 = 13$",
        "reason": "Substituting a value: $n = 0$ in the recurrence, with $a_0 = 3$ and $a_1 = 2$."
      },
      {
        "step": "$(a_1 + a_0)^2 - 10a_0a_1 = (2 + 3)^2 - 10 \\cdot 3 \\cdot 2 = -35$",
        "reason": "Substituting a value: $a_0 = 3$ and $a_1 = 2$, with $(2 + 3)^2 = 25$ and $10 \\cdot 3 \\cdot 2 = 60$."
      },
      {
        "step": "$(a_2 + a_1)^2 - 10a_1a_2 = (13 + 2)^2 - 10 \\cdot 2 \\cdot 13 = -35$",
        "reason": "Substituting a value: $a_1 = 2$ and $a_2 = 13$ from line 2, with $(13 + 2)^2 = 225$ and $10 \\cdot 2 \\cdot 13 = 260$."
      },
      {
        "step": "Guess: $(a_{n+1} + a_n)^2 - 10a_na_{n+1} = -35$ for every whole number $n$.",
        "reason": "Experiment, find the pattern, prove it: lines 3 and 4 give the same number at $n = 0$ and at $n = 1$; two cases show a pattern and prove nothing yet."
      },
      {
        "step": "The guess holds at $n = 0$.",
        "reason": "Base case: line 3 is the guess at $n = 0$."
      },
      {
        "step": "Assume that $(a_{k+1} + a_k)^2 - 10a_ka_{k+1} = -35$ for some whole number $k$.",
        "reason": "Inductive assumption: the guess at $n = k$."
      },
      {
        "step": "$a_{k+1}^2 + 2a_ka_{k+1} + a_k^2 - 10a_ka_{k+1} = -35$",
        "reason": "Square of a binomial: the square in line 7 is multiplied out."
      },
      {
        "step": "$a_{k+1}^2 - 8a_ka_{k+1} + a_k^2 = -35$",
        "reason": "Collecting like terms: $2 - 10 = -8$."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 10a_{k+1}a_{k+2} = a_{k+2}^2 + 2a_{k+1}a_{k+2} + a_{k+1}^2 - 10a_{k+1}a_{k+2}$",
        "reason": "Square of a binomial: the left side of the guess at $n = k + 1$, with its square multiplied out."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 10a_{k+1}a_{k+2} = a_{k+2}^2 - 8a_{k+1}a_{k+2} + a_{k+1}^2$",
        "reason": "Collecting like terms: $2 - 10 = -8$, as in line 9."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 10a_{k+1}a_{k+2} = a_{k+2}(a_{k+2} - 8a_{k+1}) + a_{k+1}^2$",
        "reason": "Common factor: $a_{k+2}$ comes out of the first two terms."
      },
      {
        "step": "$a_{k+2} - 8a_{k+1} = -a_k$",
        "reason": "Adding the same number to both sides: $8a_{k+1}$ is taken from both sides of the recurrence at $n = k$."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 10a_{k+1}a_{k+2} = -a_ka_{k+2} + a_{k+1}^2$",
        "reason": "Substituting a value: line 13 goes into the bracket of line 12."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 10a_{k+1}a_{k+2} = -a_k(8a_{k+1} - a_k) + a_{k+1}^2$",
        "reason": "Linear recurrence of order 2: the recurrence at $n = k$ gives $a_{k+2}$ from the two terms before it."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 10a_{k+1}a_{k+2} = a_{k+1}^2 - 8a_ka_{k+1} + a_k^2$",
        "reason": "Multiplying out: $-a_k$ multiplies each term of the bracket, and the terms are put in the order of line 9."
      },
      {
        "step": "So $(a_{k+2} + a_{k+1})^2 - 10a_{k+1}a_{k+2} = -35$, and the guess holds at $n = k + 1$.",
        "reason": "Inductive step: the right side of line 16 is the left side of line 9, and line 9 gives it the value $-35$."
      },
      {
        "step": "So $(a_{n+1} + a_n)^2 - 10a_na_{n+1} = -35$ for every whole number $n$.",
        "reason": "Induction: the base case is line 6 and the inductive step is lines 7 to 17."
      },
      {
        "step": "So $10a_na_{n+1} - 35 = (a_{n+1} + a_n)^2$ for every whole number $n$.",
        "reason": "Adding the same number to both sides: $10a_na_{n+1}$ is added to both sides of line 18, which is then read right to left."
      }
    ]
  },
  {
    "id": "t241-k2-p11",
    "topic": "recurrences-made-linear",
    "kind": "t241-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $9a_na_{n+1} - 36$ is the square of $a_{n+1} + a_n$ for every whole number $n$, where $a_0 = 2$, $a_1 = 4$ and $a_{n+2} = 7a_{n+1} - a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $9a_na_{n+1} - 36$ is the square of $a_{n+1} + a_n$ for every whole number $n$, where $a_0 = 2$, $a_1 = 4$ and $a_{n+2} = 7a_{n+1} - a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$a_2 = 7 \\cdot 4 - 2 = 26$",
        "reason": "Substituting a value: $n = 0$ in the recurrence, with $a_0 = 2$ and $a_1 = 4$."
      },
      {
        "step": "$(a_1 + a_0)^2 - 9a_0a_1 = (4 + 2)^2 - 9 \\cdot 2 \\cdot 4 = -36$",
        "reason": "Substituting a value: $a_0 = 2$ and $a_1 = 4$, with $(4 + 2)^2 = 36$ and $9 \\cdot 2 \\cdot 4 = 72$."
      },
      {
        "step": "$(a_2 + a_1)^2 - 9a_1a_2 = (26 + 4)^2 - 9 \\cdot 4 \\cdot 26 = -36$",
        "reason": "Substituting a value: $a_1 = 4$ and $a_2 = 26$ from line 2, with $(26 + 4)^2 = 900$ and $9 \\cdot 4 \\cdot 26 = 936$."
      },
      {
        "step": "Guess: $(a_{n+1} + a_n)^2 - 9a_na_{n+1} = -36$ for every whole number $n$.",
        "reason": "Experiment, find the pattern, prove it: lines 3 and 4 give the same number at $n = 0$ and at $n = 1$; two cases show a pattern and prove nothing yet."
      },
      {
        "step": "The guess holds at $n = 0$.",
        "reason": "Base case: line 3 is the guess at $n = 0$."
      },
      {
        "step": "Assume that $(a_{k+1} + a_k)^2 - 9a_ka_{k+1} = -36$ for some whole number $k$.",
        "reason": "Inductive assumption: the guess at $n = k$."
      },
      {
        "step": "$a_{k+1}^2 + 2a_ka_{k+1} + a_k^2 - 9a_ka_{k+1} = -36$",
        "reason": "Square of a binomial: the square in line 7 is multiplied out."
      },
      {
        "step": "$a_{k+1}^2 - 7a_ka_{k+1} + a_k^2 = -36$",
        "reason": "Collecting like terms: $2 - 9 = -7$."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 9a_{k+1}a_{k+2} = a_{k+2}^2 + 2a_{k+1}a_{k+2} + a_{k+1}^2 - 9a_{k+1}a_{k+2}$",
        "reason": "Square of a binomial: the left side of the guess at $n = k + 1$, with its square multiplied out."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 9a_{k+1}a_{k+2} = a_{k+2}^2 - 7a_{k+1}a_{k+2} + a_{k+1}^2$",
        "reason": "Collecting like terms: $2 - 9 = -7$, as in line 9."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 9a_{k+1}a_{k+2} = a_{k+2}(a_{k+2} - 7a_{k+1}) + a_{k+1}^2$",
        "reason": "Common factor: $a_{k+2}$ comes out of the first two terms."
      },
      {
        "step": "$a_{k+2} - 7a_{k+1} = -a_k$",
        "reason": "Adding the same number to both sides: $7a_{k+1}$ is taken from both sides of the recurrence at $n = k$."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 9a_{k+1}a_{k+2} = -a_ka_{k+2} + a_{k+1}^2$",
        "reason": "Substituting a value: line 13 goes into the bracket of line 12."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 9a_{k+1}a_{k+2} = -a_k(7a_{k+1} - a_k) + a_{k+1}^2$",
        "reason": "Linear recurrence of order 2: the recurrence at $n = k$ gives $a_{k+2}$ from the two terms before it."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 9a_{k+1}a_{k+2} = a_{k+1}^2 - 7a_ka_{k+1} + a_k^2$",
        "reason": "Multiplying out: $-a_k$ multiplies each term of the bracket, and the terms are put in the order of line 9."
      },
      {
        "step": "So $(a_{k+2} + a_{k+1})^2 - 9a_{k+1}a_{k+2} = -36$, and the guess holds at $n = k + 1$.",
        "reason": "Inductive step: the right side of line 16 is the left side of line 9, and line 9 gives it the value $-36$."
      },
      {
        "step": "So $(a_{n+1} + a_n)^2 - 9a_na_{n+1} = -36$ for every whole number $n$.",
        "reason": "Induction: the base case is line 6 and the inductive step is lines 7 to 17."
      },
      {
        "step": "So $9a_na_{n+1} - 36 = (a_{n+1} + a_n)^2$ for every whole number $n$.",
        "reason": "Adding the same number to both sides: $9a_na_{n+1}$ is added to both sides of line 18, which is then read right to left."
      }
    ]
  },
  {
    "id": "t241-k2-p12",
    "topic": "recurrences-made-linear",
    "kind": "t241-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $21a_na_{n+1} - 161$ is the square of $a_{n+1} + a_n$ for every whole number $n$, where $a_0 = 2$, $a_1 = 5$ and $a_{n+2} = 19a_{n+1} - a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $21a_na_{n+1} - 161$ is the square of $a_{n+1} + a_n$ for every whole number $n$, where $a_0 = 2$, $a_1 = 5$ and $a_{n+2} = 19a_{n+1} - a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$a_2 = 19 \\cdot 5 - 2 = 93$",
        "reason": "Substituting a value: $n = 0$ in the recurrence, with $a_0 = 2$ and $a_1 = 5$."
      },
      {
        "step": "$(a_1 + a_0)^2 - 21a_0a_1 = (5 + 2)^2 - 21 \\cdot 2 \\cdot 5 = -161$",
        "reason": "Substituting a value: $a_0 = 2$ and $a_1 = 5$, with $(5 + 2)^2 = 49$ and $21 \\cdot 2 \\cdot 5 = 210$."
      },
      {
        "step": "$(a_2 + a_1)^2 - 21a_1a_2 = (93 + 5)^2 - 21 \\cdot 5 \\cdot 93 = -161$",
        "reason": "Substituting a value: $a_1 = 5$ and $a_2 = 93$ from line 2, with $(93 + 5)^2 = 9604$ and $21 \\cdot 5 \\cdot 93 = 9765$."
      },
      {
        "step": "Guess: $(a_{n+1} + a_n)^2 - 21a_na_{n+1} = -161$ for every whole number $n$.",
        "reason": "Experiment, find the pattern, prove it: lines 3 and 4 give the same number at $n = 0$ and at $n = 1$; two cases show a pattern and prove nothing yet."
      },
      {
        "step": "The guess holds at $n = 0$.",
        "reason": "Base case: line 3 is the guess at $n = 0$."
      },
      {
        "step": "Assume that $(a_{k+1} + a_k)^2 - 21a_ka_{k+1} = -161$ for some whole number $k$.",
        "reason": "Inductive assumption: the guess at $n = k$."
      },
      {
        "step": "$a_{k+1}^2 + 2a_ka_{k+1} + a_k^2 - 21a_ka_{k+1} = -161$",
        "reason": "Square of a binomial: the square in line 7 is multiplied out."
      },
      {
        "step": "$a_{k+1}^2 - 19a_ka_{k+1} + a_k^2 = -161$",
        "reason": "Collecting like terms: $2 - 21 = -19$."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 21a_{k+1}a_{k+2} = a_{k+2}^2 + 2a_{k+1}a_{k+2} + a_{k+1}^2 - 21a_{k+1}a_{k+2}$",
        "reason": "Square of a binomial: the left side of the guess at $n = k + 1$, with its square multiplied out."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 21a_{k+1}a_{k+2} = a_{k+2}^2 - 19a_{k+1}a_{k+2} + a_{k+1}^2$",
        "reason": "Collecting like terms: $2 - 21 = -19$, as in line 9."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 21a_{k+1}a_{k+2} = a_{k+2}(a_{k+2} - 19a_{k+1}) + a_{k+1}^2$",
        "reason": "Common factor: $a_{k+2}$ comes out of the first two terms."
      },
      {
        "step": "$a_{k+2} - 19a_{k+1} = -a_k$",
        "reason": "Adding the same number to both sides: $19a_{k+1}$ is taken from both sides of the recurrence at $n = k$."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 21a_{k+1}a_{k+2} = -a_ka_{k+2} + a_{k+1}^2$",
        "reason": "Substituting a value: line 13 goes into the bracket of line 12."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 21a_{k+1}a_{k+2} = -a_k(19a_{k+1} - a_k) + a_{k+1}^2$",
        "reason": "Linear recurrence of order 2: the recurrence at $n = k$ gives $a_{k+2}$ from the two terms before it."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 21a_{k+1}a_{k+2} = a_{k+1}^2 - 19a_ka_{k+1} + a_k^2$",
        "reason": "Multiplying out: $-a_k$ multiplies each term of the bracket, and the terms are put in the order of line 9."
      },
      {
        "step": "So $(a_{k+2} + a_{k+1})^2 - 21a_{k+1}a_{k+2} = -161$, and the guess holds at $n = k + 1$.",
        "reason": "Inductive step: the right side of line 16 is the left side of line 9, and line 9 gives it the value $-161$."
      },
      {
        "step": "So $(a_{n+1} + a_n)^2 - 21a_na_{n+1} = -161$ for every whole number $n$.",
        "reason": "Induction: the base case is line 6 and the inductive step is lines 7 to 17."
      },
      {
        "step": "So $21a_na_{n+1} - 161 = (a_{n+1} + a_n)^2$ for every whole number $n$.",
        "reason": "Adding the same number to both sides: $21a_na_{n+1}$ is added to both sides of line 18, which is then read right to left."
      }
    ]
  },
  {
    "id": "t241-k2-p13",
    "topic": "recurrences-made-linear",
    "kind": "t241-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $26a_na_{n+1} - 767$ is the square of $a_{n+1} + a_n$ for every whole number $n$, where $a_0 = 9$, $a_1 = 4$ and $a_{n+2} = 24a_{n+1} - a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $26a_na_{n+1} - 767$ is the square of $a_{n+1} + a_n$ for every whole number $n$, where $a_0 = 9$, $a_1 = 4$ and $a_{n+2} = 24a_{n+1} - a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$a_2 = 24 \\cdot 4 - 9 = 87$",
        "reason": "Substituting a value: $n = 0$ in the recurrence, with $a_0 = 9$ and $a_1 = 4$."
      },
      {
        "step": "$(a_1 + a_0)^2 - 26a_0a_1 = (4 + 9)^2 - 26 \\cdot 9 \\cdot 4 = -767$",
        "reason": "Substituting a value: $a_0 = 9$ and $a_1 = 4$, with $(4 + 9)^2 = 169$ and $26 \\cdot 9 \\cdot 4 = 936$."
      },
      {
        "step": "$(a_2 + a_1)^2 - 26a_1a_2 = (87 + 4)^2 - 26 \\cdot 4 \\cdot 87 = -767$",
        "reason": "Substituting a value: $a_1 = 4$ and $a_2 = 87$ from line 2, with $(87 + 4)^2 = 8281$ and $26 \\cdot 4 \\cdot 87 = 9048$."
      },
      {
        "step": "Guess: $(a_{n+1} + a_n)^2 - 26a_na_{n+1} = -767$ for every whole number $n$.",
        "reason": "Experiment, find the pattern, prove it: lines 3 and 4 give the same number at $n = 0$ and at $n = 1$; two cases show a pattern and prove nothing yet."
      },
      {
        "step": "The guess holds at $n = 0$.",
        "reason": "Base case: line 3 is the guess at $n = 0$."
      },
      {
        "step": "Assume that $(a_{k+1} + a_k)^2 - 26a_ka_{k+1} = -767$ for some whole number $k$.",
        "reason": "Inductive assumption: the guess at $n = k$."
      },
      {
        "step": "$a_{k+1}^2 + 2a_ka_{k+1} + a_k^2 - 26a_ka_{k+1} = -767$",
        "reason": "Square of a binomial: the square in line 7 is multiplied out."
      },
      {
        "step": "$a_{k+1}^2 - 24a_ka_{k+1} + a_k^2 = -767$",
        "reason": "Collecting like terms: $2 - 26 = -24$."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 26a_{k+1}a_{k+2} = a_{k+2}^2 + 2a_{k+1}a_{k+2} + a_{k+1}^2 - 26a_{k+1}a_{k+2}$",
        "reason": "Square of a binomial: the left side of the guess at $n = k + 1$, with its square multiplied out."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 26a_{k+1}a_{k+2} = a_{k+2}^2 - 24a_{k+1}a_{k+2} + a_{k+1}^2$",
        "reason": "Collecting like terms: $2 - 26 = -24$, as in line 9."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 26a_{k+1}a_{k+2} = a_{k+2}(a_{k+2} - 24a_{k+1}) + a_{k+1}^2$",
        "reason": "Common factor: $a_{k+2}$ comes out of the first two terms."
      },
      {
        "step": "$a_{k+2} - 24a_{k+1} = -a_k$",
        "reason": "Adding the same number to both sides: $24a_{k+1}$ is taken from both sides of the recurrence at $n = k$."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 26a_{k+1}a_{k+2} = -a_ka_{k+2} + a_{k+1}^2$",
        "reason": "Substituting a value: line 13 goes into the bracket of line 12."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 26a_{k+1}a_{k+2} = -a_k(24a_{k+1} - a_k) + a_{k+1}^2$",
        "reason": "Linear recurrence of order 2: the recurrence at $n = k$ gives $a_{k+2}$ from the two terms before it."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 26a_{k+1}a_{k+2} = a_{k+1}^2 - 24a_ka_{k+1} + a_k^2$",
        "reason": "Multiplying out: $-a_k$ multiplies each term of the bracket, and the terms are put in the order of line 9."
      },
      {
        "step": "So $(a_{k+2} + a_{k+1})^2 - 26a_{k+1}a_{k+2} = -767$, and the guess holds at $n = k + 1$.",
        "reason": "Inductive step: the right side of line 16 is the left side of line 9, and line 9 gives it the value $-767$."
      },
      {
        "step": "So $(a_{n+1} + a_n)^2 - 26a_na_{n+1} = -767$ for every whole number $n$.",
        "reason": "Induction: the base case is line 6 and the inductive step is lines 7 to 17."
      },
      {
        "step": "So $26a_na_{n+1} - 767 = (a_{n+1} + a_n)^2$ for every whole number $n$.",
        "reason": "Adding the same number to both sides: $26a_na_{n+1}$ is added to both sides of line 18, which is then read right to left."
      }
    ]
  },
  {
    "id": "t241-k2-p14",
    "topic": "recurrences-made-linear",
    "kind": "t241-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $15a_na_{n+1} - 299$ is the square of $a_{n+1} + a_n$ for every whole number $n$, where $a_0 = 7$, $a_1 = 4$ and $a_{n+2} = 13a_{n+1} - a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $15a_na_{n+1} - 299$ is the square of $a_{n+1} + a_n$ for every whole number $n$, where $a_0 = 7$, $a_1 = 4$ and $a_{n+2} = 13a_{n+1} - a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$a_2 = 13 \\cdot 4 - 7 = 45$",
        "reason": "Substituting a value: $n = 0$ in the recurrence, with $a_0 = 7$ and $a_1 = 4$."
      },
      {
        "step": "$(a_1 + a_0)^2 - 15a_0a_1 = (4 + 7)^2 - 15 \\cdot 7 \\cdot 4 = -299$",
        "reason": "Substituting a value: $a_0 = 7$ and $a_1 = 4$, with $(4 + 7)^2 = 121$ and $15 \\cdot 7 \\cdot 4 = 420$."
      },
      {
        "step": "$(a_2 + a_1)^2 - 15a_1a_2 = (45 + 4)^2 - 15 \\cdot 4 \\cdot 45 = -299$",
        "reason": "Substituting a value: $a_1 = 4$ and $a_2 = 45$ from line 2, with $(45 + 4)^2 = 2401$ and $15 \\cdot 4 \\cdot 45 = 2700$."
      },
      {
        "step": "Guess: $(a_{n+1} + a_n)^2 - 15a_na_{n+1} = -299$ for every whole number $n$.",
        "reason": "Experiment, find the pattern, prove it: lines 3 and 4 give the same number at $n = 0$ and at $n = 1$; two cases show a pattern and prove nothing yet."
      },
      {
        "step": "The guess holds at $n = 0$.",
        "reason": "Base case: line 3 is the guess at $n = 0$."
      },
      {
        "step": "Assume that $(a_{k+1} + a_k)^2 - 15a_ka_{k+1} = -299$ for some whole number $k$.",
        "reason": "Inductive assumption: the guess at $n = k$."
      },
      {
        "step": "$a_{k+1}^2 + 2a_ka_{k+1} + a_k^2 - 15a_ka_{k+1} = -299$",
        "reason": "Square of a binomial: the square in line 7 is multiplied out."
      },
      {
        "step": "$a_{k+1}^2 - 13a_ka_{k+1} + a_k^2 = -299$",
        "reason": "Collecting like terms: $2 - 15 = -13$."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 15a_{k+1}a_{k+2} = a_{k+2}^2 + 2a_{k+1}a_{k+2} + a_{k+1}^2 - 15a_{k+1}a_{k+2}$",
        "reason": "Square of a binomial: the left side of the guess at $n = k + 1$, with its square multiplied out."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 15a_{k+1}a_{k+2} = a_{k+2}^2 - 13a_{k+1}a_{k+2} + a_{k+1}^2$",
        "reason": "Collecting like terms: $2 - 15 = -13$, as in line 9."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 15a_{k+1}a_{k+2} = a_{k+2}(a_{k+2} - 13a_{k+1}) + a_{k+1}^2$",
        "reason": "Common factor: $a_{k+2}$ comes out of the first two terms."
      },
      {
        "step": "$a_{k+2} - 13a_{k+1} = -a_k$",
        "reason": "Adding the same number to both sides: $13a_{k+1}$ is taken from both sides of the recurrence at $n = k$."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 15a_{k+1}a_{k+2} = -a_ka_{k+2} + a_{k+1}^2$",
        "reason": "Substituting a value: line 13 goes into the bracket of line 12."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 15a_{k+1}a_{k+2} = -a_k(13a_{k+1} - a_k) + a_{k+1}^2$",
        "reason": "Linear recurrence of order 2: the recurrence at $n = k$ gives $a_{k+2}$ from the two terms before it."
      },
      {
        "step": "$(a_{k+2} + a_{k+1})^2 - 15a_{k+1}a_{k+2} = a_{k+1}^2 - 13a_ka_{k+1} + a_k^2$",
        "reason": "Multiplying out: $-a_k$ multiplies each term of the bracket, and the terms are put in the order of line 9."
      },
      {
        "step": "So $(a_{k+2} + a_{k+1})^2 - 15a_{k+1}a_{k+2} = -299$, and the guess holds at $n = k + 1$.",
        "reason": "Inductive step: the right side of line 16 is the left side of line 9, and line 9 gives it the value $-299$."
      },
      {
        "step": "So $(a_{n+1} + a_n)^2 - 15a_na_{n+1} = -299$ for every whole number $n$.",
        "reason": "Induction: the base case is line 6 and the inductive step is lines 7 to 17."
      },
      {
        "step": "So $15a_na_{n+1} - 299 = (a_{n+1} + a_n)^2$ for every whole number $n$.",
        "reason": "Adding the same number to both sides: $15a_na_{n+1}$ is added to both sides of line 18, which is then read right to left."
      }
    ]
  },
  {
    "id": "t241-k3-p01",
    "topic": "recurrences-made-linear",
    "kind": "t241-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $\\log_2 a_n = 6 \\cdot 8^n - 4 \\cdot 10^n$ for every whole number $n$, where $a_0 = 4$, $a_1 = 256$ and $a_{n+2} = \\dfrac{a_{n+1}^{18}}{a_n^{80}}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\log_2 a_n = 6 \\cdot 8^n - 4 \\cdot 10^n$ for every whole number $n$, where $a_0 = 4$, $a_1 = 256$ and $a_{n+2} = \\dfrac{a_{n+1}^{18}}{a_n^{80}}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
      },
      {
        "step": "Every term $a_n$ is positive.",
        "reason": "Induction: $a_0$ and $a_1$ are positive, and powers and quotients of positive numbers are positive."
      },
      {
        "step": "$\\log_2 a_{n+2} = \\log_2 \\dfrac{a_{n+1}^{18}}{a_n^{80}}$",
        "reason": "Logarithm: both sides of the rule are positive by line 2, and equal positive numbers have equal logarithms to base $2$."
      },
      {
        "step": "$\\log_2 a_{n+2} = \\log_2 a_{n+1}^{18} - \\log_2 a_n^{80}$",
        "reason": "Log of a quotient: the logarithm of a quotient is the logarithm of the top less the logarithm of the bottom."
      },
      {
        "step": "$\\log_2 a_{n+2} = 18\\log_2 a_{n+1} - 80\\log_2 a_n$",
        "reason": "Log of a power: the power comes out in front of each logarithm."
      },
      {
        "step": "Write $d_n = \\log_2 a_n$, so $d_{n+2} = 18d_{n+1} - 80d_n$ for every whole number $n$.",
        "reason": "Linearising a recurrence: the logarithm $\\log_2 a_n$ is written $d_n$ in line 5, and the rule for $d_n$ is a linear recurrence of order 2."
      },
      {
        "step": "So $d_0 = 2$ and $d_1 = 8$.",
        "reason": "Logarithm: $a_0 = 2^2$ and $a_1 = 2^8$."
      },
      {
        "step": "$x^2 = 18x - 80$",
        "reason": "Characteristic equation: $d_{n+2}$, $d_{n+1}$ and $d_n$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$x^2 - 18x + 80 = 0$",
        "reason": "Adding the same number to both sides: $18x - 80$ is taken from both sides."
      },
      {
        "step": "$(x - 8)(x - 10) = 0$",
        "reason": "Factoring a quadratic: $-8$ and $-10$ have sum $-18$ and product $80$."
      },
      {
        "step": "The roots are $8$ and $10$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$d_n = y \\cdot 8^n + z \\cdot 10^n$",
        "reason": "General solution (distinct roots): the roots $8$ and $10$ are different, so two numbers $y$ and $z$ give every term."
      },
      {
        "step": "$y + z = 2$",
        "reason": "Substituting a value: $n = 0$ in line 12, with $8^0 = 10^0 = 1$ and $d_0 = 2$."
      },
      {
        "step": "$8y + 10z = 8$",
        "reason": "Substituting a value: $n = 1$ in line 12, with $d_1 = 8$."
      },
      {
        "step": "$2z = -8$",
        "reason": "Elimination: $8$ times line 13 is taken from line 14."
      },
      {
        "step": "$z = -4$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
      },
      {
        "step": "$y = 6$",
        "reason": "Back-substitution: $z = -4$ goes into line 13."
      },
      {
        "step": "$\\log_2 a_n = 6 \\cdot 8^n - 4 \\cdot 10^n$",
        "reason": "Substituting a value: the numbers $y$ and $z$ go into line 12, and $d_n = \\log_2 a_n$."
      }
    ]
  },
  {
    "id": "t241-k3-p02",
    "topic": "recurrences-made-linear",
    "kind": "t241-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $\\log_2 a_n = 5 \\cdot 9^n - 3 \\cdot 12^n$ for every whole number $n$, where $a_0 = 4$, $a_1 = 512$ and $a_{n+2} = \\dfrac{a_{n+1}^{21}}{a_n^{108}}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\log_2 a_n = 5 \\cdot 9^n - 3 \\cdot 12^n$ for every whole number $n$, where $a_0 = 4$, $a_1 = 512$ and $a_{n+2} = \\dfrac{a_{n+1}^{21}}{a_n^{108}}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
      },
      {
        "step": "Every term $a_n$ is positive.",
        "reason": "Induction: $a_0$ and $a_1$ are positive, and powers and quotients of positive numbers are positive."
      },
      {
        "step": "$\\log_2 a_{n+2} = \\log_2 \\dfrac{a_{n+1}^{21}}{a_n^{108}}$",
        "reason": "Logarithm: both sides of the rule are positive by line 2, and equal positive numbers have equal logarithms to base $2$."
      },
      {
        "step": "$\\log_2 a_{n+2} = \\log_2 a_{n+1}^{21} - \\log_2 a_n^{108}$",
        "reason": "Log of a quotient: the logarithm of a quotient is the logarithm of the top less the logarithm of the bottom."
      },
      {
        "step": "$\\log_2 a_{n+2} = 21\\log_2 a_{n+1} - 108\\log_2 a_n$",
        "reason": "Log of a power: the power comes out in front of each logarithm."
      },
      {
        "step": "Write $d_n = \\log_2 a_n$, so $d_{n+2} = 21d_{n+1} - 108d_n$ for every whole number $n$.",
        "reason": "Linearising a recurrence: the logarithm $\\log_2 a_n$ is written $d_n$ in line 5, and the rule for $d_n$ is a linear recurrence of order 2."
      },
      {
        "step": "So $d_0 = 2$ and $d_1 = 9$.",
        "reason": "Logarithm: $a_0 = 2^2$ and $a_1 = 2^9$."
      },
      {
        "step": "$x^2 = 21x - 108$",
        "reason": "Characteristic equation: $d_{n+2}$, $d_{n+1}$ and $d_n$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$x^2 - 21x + 108 = 0$",
        "reason": "Adding the same number to both sides: $21x - 108$ is taken from both sides."
      },
      {
        "step": "$(x - 9)(x - 12) = 0$",
        "reason": "Factoring a quadratic: $-9$ and $-12$ have sum $-21$ and product $108$."
      },
      {
        "step": "The roots are $9$ and $12$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$d_n = y \\cdot 9^n + z \\cdot 12^n$",
        "reason": "General solution (distinct roots): the roots $9$ and $12$ are different, so two numbers $y$ and $z$ give every term."
      },
      {
        "step": "$y + z = 2$",
        "reason": "Substituting a value: $n = 0$ in line 12, with $9^0 = 12^0 = 1$ and $d_0 = 2$."
      },
      {
        "step": "$9y + 12z = 9$",
        "reason": "Substituting a value: $n = 1$ in line 12, with $d_1 = 9$."
      },
      {
        "step": "$3z = -9$",
        "reason": "Elimination: $9$ times line 13 is taken from line 14."
      },
      {
        "step": "$z = -3$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
      },
      {
        "step": "$y = 5$",
        "reason": "Back-substitution: $z = -3$ goes into line 13."
      },
      {
        "step": "$\\log_2 a_n = 5 \\cdot 9^n - 3 \\cdot 12^n$",
        "reason": "Substituting a value: the numbers $y$ and $z$ go into line 12, and $d_n = \\log_2 a_n$."
      }
    ]
  },
  {
    "id": "t241-k3-p03",
    "topic": "recurrences-made-linear",
    "kind": "t241-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n = \\dfrac{21}{7 + 18n}$ for every whole number $n$, where $a_0 = 3$ and $a_{n+1} = \\dfrac{7a_n}{7 + 6a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n = \\dfrac{21}{7 + 18n}$ for every whole number $n$, where $a_0 = 3$ and $a_{n+1} = \\dfrac{7a_n}{7 + 6a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
      },
      {
        "step": "Every term $a_n$ is positive.",
        "reason": "Induction: $a_0 = 3$ is positive, and a positive $a_n$ gives a positive top $7a_n$ and a positive bottom $7 + 6a_n$."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{7 + 6a_n}{7a_n}$",
        "reason": "Reciprocal, from arithmetic: equal numbers that are not $0$ have equal reciprocals, and both sides of the rule are positive by line 2."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{7}{7a_n} + \\dfrac{6a_n}{7a_n}$",
        "reason": "Adding fractions with the same denominator, from arithmetic, read from right to left: the top is split into its two terms over the same bottom."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{1}{a_n} + \\dfrac{6}{7}$",
        "reason": "Cancelling a common factor: $7$ in the first fraction and $a_n$ in the second."
      },
      {
        "step": "Write $d_n = \\dfrac{1}{a_n}$, so $d_{n+1} = d_n + \\dfrac{6}{7}$ for every whole number $n$.",
        "reason": "Linearising a recurrence: the reciprocal $\\dfrac{1}{a_n}$ is written $d_n$ in line 5, and the rule for $d_n$ is linear."
      },
      {
        "step": "So the numbers $d_n$ form an arithmetic sequence with common difference $\\dfrac{6}{7}$.",
        "reason": "Arithmetic sequence: by line 6 each term less the one before is the same number."
      },
      {
        "step": "$d_0 = \\dfrac{1}{3}$",
        "reason": "Substituting a value: $a_0 = 3$ in line 6."
      },
      {
        "step": "$d_n = \\dfrac{1}{3} + \\dfrac{6}{7}n$",
        "reason": "The $n$th term $a + (n - 1)d$: counted from $d_0$, the term $d_n$ is $d_0$ plus $n$ common differences."
      },
      {
        "step": "$d_n = \\dfrac{7 + 18n}{21}$",
        "reason": "Single fraction: both fractions are written over the common bottom $21$."
      },
      {
        "step": "$a_n = \\dfrac{21}{7 + 18n}$",
        "reason": "Reciprocal, from arithmetic: $a_n$ is the reciprocal of $d_n$."
      }
    ]
  },
  {
    "id": "t241-k3-p04",
    "topic": "recurrences-made-linear",
    "kind": "t241-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n = \\dfrac{130}{13 + 30n}$ for every whole number $n$, where $a_0 = 10$ and $a_{n+1} = \\dfrac{13a_n}{13 + 3a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n = \\dfrac{130}{13 + 30n}$ for every whole number $n$, where $a_0 = 10$ and $a_{n+1} = \\dfrac{13a_n}{13 + 3a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
      },
      {
        "step": "Every term $a_n$ is positive.",
        "reason": "Induction: $a_0 = 10$ is positive, and a positive $a_n$ gives a positive top $13a_n$ and a positive bottom $13 + 3a_n$."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{13 + 3a_n}{13a_n}$",
        "reason": "Reciprocal, from arithmetic: equal numbers that are not $0$ have equal reciprocals, and both sides of the rule are positive by line 2."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{13}{13a_n} + \\dfrac{3a_n}{13a_n}$",
        "reason": "Adding fractions with the same denominator, from arithmetic, read from right to left: the top is split into its two terms over the same bottom."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{1}{a_n} + \\dfrac{3}{13}$",
        "reason": "Cancelling a common factor: $13$ in the first fraction and $a_n$ in the second."
      },
      {
        "step": "Write $d_n = \\dfrac{1}{a_n}$, so $d_{n+1} = d_n + \\dfrac{3}{13}$ for every whole number $n$.",
        "reason": "Linearising a recurrence: the reciprocal $\\dfrac{1}{a_n}$ is written $d_n$ in line 5, and the rule for $d_n$ is linear."
      },
      {
        "step": "So the numbers $d_n$ form an arithmetic sequence with common difference $\\dfrac{3}{13}$.",
        "reason": "Arithmetic sequence: by line 6 each term less the one before is the same number."
      },
      {
        "step": "$d_0 = \\dfrac{1}{10}$",
        "reason": "Substituting a value: $a_0 = 10$ in line 6."
      },
      {
        "step": "$d_n = \\dfrac{1}{10} + \\dfrac{3}{13}n$",
        "reason": "The $n$th term $a + (n - 1)d$: counted from $d_0$, the term $d_n$ is $d_0$ plus $n$ common differences."
      },
      {
        "step": "$d_n = \\dfrac{13 + 30n}{130}$",
        "reason": "Single fraction: both fractions are written over the common bottom $130$."
      },
      {
        "step": "$a_n = \\dfrac{130}{13 + 30n}$",
        "reason": "Reciprocal, from arithmetic: $a_n$ is the reciprocal of $d_n$."
      }
    ]
  },
  {
    "id": "t241-k3-p05",
    "topic": "recurrences-made-linear",
    "kind": "t241-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $\\log_2 a_n = 7 \\cdot 7^n - 3 \\cdot 11^n$ for every whole number $n$, where $a_0 = 16$, $a_1 = 65{,}536$ and $a_{n+2} = \\dfrac{a_{n+1}^{18}}{a_n^{77}}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\log_2 a_n = 7 \\cdot 7^n - 3 \\cdot 11^n$ for every whole number $n$, where $a_0 = 16$, $a_1 = 65{,}536$ and $a_{n+2} = \\dfrac{a_{n+1}^{18}}{a_n^{77}}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
      },
      {
        "step": "Every term $a_n$ is positive.",
        "reason": "Induction: $a_0$ and $a_1$ are positive, and powers and quotients of positive numbers are positive."
      },
      {
        "step": "$\\log_2 a_{n+2} = \\log_2 \\dfrac{a_{n+1}^{18}}{a_n^{77}}$",
        "reason": "Logarithm: both sides of the rule are positive by line 2, and equal positive numbers have equal logarithms to base $2$."
      },
      {
        "step": "$\\log_2 a_{n+2} = \\log_2 a_{n+1}^{18} - \\log_2 a_n^{77}$",
        "reason": "Log of a quotient: the logarithm of a quotient is the logarithm of the top less the logarithm of the bottom."
      },
      {
        "step": "$\\log_2 a_{n+2} = 18\\log_2 a_{n+1} - 77\\log_2 a_n$",
        "reason": "Log of a power: the power comes out in front of each logarithm."
      },
      {
        "step": "Write $d_n = \\log_2 a_n$, so $d_{n+2} = 18d_{n+1} - 77d_n$ for every whole number $n$.",
        "reason": "Linearising a recurrence: the logarithm $\\log_2 a_n$ is written $d_n$ in line 5, and the rule for $d_n$ is a linear recurrence of order 2."
      },
      {
        "step": "So $d_0 = 4$ and $d_1 = 16$.",
        "reason": "Logarithm: $a_0 = 2^4$ and $a_1 = 2^{16}$."
      },
      {
        "step": "$x^2 = 18x - 77$",
        "reason": "Characteristic equation: $d_{n+2}$, $d_{n+1}$ and $d_n$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$x^2 - 18x + 77 = 0$",
        "reason": "Adding the same number to both sides: $18x - 77$ is taken from both sides."
      },
      {
        "step": "$(x - 7)(x - 11) = 0$",
        "reason": "Factoring a quadratic: $-7$ and $-11$ have sum $-18$ and product $77$."
      },
      {
        "step": "The roots are $7$ and $11$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$d_n = y \\cdot 7^n + z \\cdot 11^n$",
        "reason": "General solution (distinct roots): the roots $7$ and $11$ are different, so two numbers $y$ and $z$ give every term."
      },
      {
        "step": "$y + z = 4$",
        "reason": "Substituting a value: $n = 0$ in line 12, with $7^0 = 11^0 = 1$ and $d_0 = 4$."
      },
      {
        "step": "$7y + 11z = 16$",
        "reason": "Substituting a value: $n = 1$ in line 12, with $d_1 = 16$."
      },
      {
        "step": "$4z = -12$",
        "reason": "Elimination: $7$ times line 13 is taken from line 14."
      },
      {
        "step": "$z = -3$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
      },
      {
        "step": "$y = 7$",
        "reason": "Back-substitution: $z = -3$ goes into line 13."
      },
      {
        "step": "$\\log_2 a_n = 7 \\cdot 7^n - 3 \\cdot 11^n$",
        "reason": "Substituting a value: the numbers $y$ and $z$ go into line 12, and $d_n = \\log_2 a_n$."
      }
    ]
  },
  {
    "id": "t241-k3-p06",
    "topic": "recurrences-made-linear",
    "kind": "t241-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $\\log_3 a_n = 7 \\cdot 8^n - 4 \\cdot 11^n$ for every whole number $n$, where $a_0 = 27$, $a_1 = 531{,}441$ and $a_{n+2} = \\dfrac{a_{n+1}^{19}}{a_n^{88}}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\log_3 a_n = 7 \\cdot 8^n - 4 \\cdot 11^n$ for every whole number $n$, where $a_0 = 27$, $a_1 = 531{,}441$ and $a_{n+2} = \\dfrac{a_{n+1}^{19}}{a_n^{88}}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
      },
      {
        "step": "Every term $a_n$ is positive.",
        "reason": "Induction: $a_0$ and $a_1$ are positive, and powers and quotients of positive numbers are positive."
      },
      {
        "step": "$\\log_3 a_{n+2} = \\log_3 \\dfrac{a_{n+1}^{19}}{a_n^{88}}$",
        "reason": "Logarithm: both sides of the rule are positive by line 2, and equal positive numbers have equal logarithms to base $3$."
      },
      {
        "step": "$\\log_3 a_{n+2} = \\log_3 a_{n+1}^{19} - \\log_3 a_n^{88}$",
        "reason": "Log of a quotient: the logarithm of a quotient is the logarithm of the top less the logarithm of the bottom."
      },
      {
        "step": "$\\log_3 a_{n+2} = 19\\log_3 a_{n+1} - 88\\log_3 a_n$",
        "reason": "Log of a power: the power comes out in front of each logarithm."
      },
      {
        "step": "Write $d_n = \\log_3 a_n$, so $d_{n+2} = 19d_{n+1} - 88d_n$ for every whole number $n$.",
        "reason": "Linearising a recurrence: the logarithm $\\log_3 a_n$ is written $d_n$ in line 5, and the rule for $d_n$ is a linear recurrence of order 2."
      },
      {
        "step": "So $d_0 = 3$ and $d_1 = 12$.",
        "reason": "Logarithm: $a_0 = 3^3$ and $a_1 = 3^{12}$."
      },
      {
        "step": "$x^2 = 19x - 88$",
        "reason": "Characteristic equation: $d_{n+2}$, $d_{n+1}$ and $d_n$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$x^2 - 19x + 88 = 0$",
        "reason": "Adding the same number to both sides: $19x - 88$ is taken from both sides."
      },
      {
        "step": "$(x - 8)(x - 11) = 0$",
        "reason": "Factoring a quadratic: $-8$ and $-11$ have sum $-19$ and product $88$."
      },
      {
        "step": "The roots are $8$ and $11$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$d_n = y \\cdot 8^n + z \\cdot 11^n$",
        "reason": "General solution (distinct roots): the roots $8$ and $11$ are different, so two numbers $y$ and $z$ give every term."
      },
      {
        "step": "$y + z = 3$",
        "reason": "Substituting a value: $n = 0$ in line 12, with $8^0 = 11^0 = 1$ and $d_0 = 3$."
      },
      {
        "step": "$8y + 11z = 12$",
        "reason": "Substituting a value: $n = 1$ in line 12, with $d_1 = 12$."
      },
      {
        "step": "$3z = -12$",
        "reason": "Elimination: $8$ times line 13 is taken from line 14."
      },
      {
        "step": "$z = -4$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
      },
      {
        "step": "$y = 7$",
        "reason": "Back-substitution: $z = -4$ goes into line 13."
      },
      {
        "step": "$\\log_3 a_n = 7 \\cdot 8^n - 4 \\cdot 11^n$",
        "reason": "Substituting a value: the numbers $y$ and $z$ go into line 12, and $d_n = \\log_3 a_n$."
      }
    ]
  },
  {
    "id": "t241-k3-p07",
    "topic": "recurrences-made-linear",
    "kind": "t241-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $\\log_7 a_n = 7 \\cdot 2^n - 2 \\cdot 6^n$ for every whole number $n$, where $a_0 = 16{,}807$, $a_1 = 49$ and $a_{n+2} = \\dfrac{a_{n+1}^8}{a_n^{12}}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\log_7 a_n = 7 \\cdot 2^n - 2 \\cdot 6^n$ for every whole number $n$, where $a_0 = 16{,}807$, $a_1 = 49$ and $a_{n+2} = \\dfrac{a_{n+1}^8}{a_n^{12}}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
      },
      {
        "step": "Every term $a_n$ is positive.",
        "reason": "Induction: $a_0$ and $a_1$ are positive, and powers and quotients of positive numbers are positive."
      },
      {
        "step": "$\\log_7 a_{n+2} = \\log_7 \\dfrac{a_{n+1}^8}{a_n^{12}}$",
        "reason": "Logarithm: both sides of the rule are positive by line 2, and equal positive numbers have equal logarithms to base $7$."
      },
      {
        "step": "$\\log_7 a_{n+2} = \\log_7 a_{n+1}^8 - \\log_7 a_n^{12}$",
        "reason": "Log of a quotient: the logarithm of a quotient is the logarithm of the top less the logarithm of the bottom."
      },
      {
        "step": "$\\log_7 a_{n+2} = 8\\log_7 a_{n+1} - 12\\log_7 a_n$",
        "reason": "Log of a power: the power comes out in front of each logarithm."
      },
      {
        "step": "Write $d_n = \\log_7 a_n$, so $d_{n+2} = 8d_{n+1} - 12d_n$ for every whole number $n$.",
        "reason": "Linearising a recurrence: the logarithm $\\log_7 a_n$ is written $d_n$ in line 5, and the rule for $d_n$ is a linear recurrence of order 2."
      },
      {
        "step": "So $d_0 = 5$ and $d_1 = 2$.",
        "reason": "Logarithm: $a_0 = 7^5$ and $a_1 = 7^2$."
      },
      {
        "step": "$x^2 = 8x - 12$",
        "reason": "Characteristic equation: $d_{n+2}$, $d_{n+1}$ and $d_n$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$x^2 - 8x + 12 = 0$",
        "reason": "Adding the same number to both sides: $8x - 12$ is taken from both sides."
      },
      {
        "step": "$(x - 2)(x - 6) = 0$",
        "reason": "Factoring a quadratic: $-2$ and $-6$ have sum $-8$ and product $12$."
      },
      {
        "step": "The roots are $2$ and $6$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$d_n = y \\cdot 2^n + z \\cdot 6^n$",
        "reason": "General solution (distinct roots): the roots $2$ and $6$ are different, so two numbers $y$ and $z$ give every term."
      },
      {
        "step": "$y + z = 5$",
        "reason": "Substituting a value: $n = 0$ in line 12, with $2^0 = 6^0 = 1$ and $d_0 = 5$."
      },
      {
        "step": "$2y + 6z = 2$",
        "reason": "Substituting a value: $n = 1$ in line 12, with $d_1 = 2$."
      },
      {
        "step": "$4z = -8$",
        "reason": "Elimination: $2$ times line 13 is taken from line 14."
      },
      {
        "step": "$z = -2$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
      },
      {
        "step": "$y = 7$",
        "reason": "Back-substitution: $z = -2$ goes into line 13."
      },
      {
        "step": "$\\log_7 a_n = 7 \\cdot 2^n - 2 \\cdot 6^n$",
        "reason": "Substituting a value: the numbers $y$ and $z$ go into line 12, and $d_n = \\log_7 a_n$."
      }
    ]
  },
  {
    "id": "t241-k3-p08",
    "topic": "recurrences-made-linear",
    "kind": "t241-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $\\log_2 a_n = 6 \\cdot 7^n - 3 \\cdot 10^n$ for every whole number $n$, where $a_0 = 8$, $a_1 = 4096$ and $a_{n+2} = \\dfrac{a_{n+1}^{17}}{a_n^{70}}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\log_2 a_n = 6 \\cdot 7^n - 3 \\cdot 10^n$ for every whole number $n$, where $a_0 = 8$, $a_1 = 4096$ and $a_{n+2} = \\dfrac{a_{n+1}^{17}}{a_n^{70}}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
      },
      {
        "step": "Every term $a_n$ is positive.",
        "reason": "Induction: $a_0$ and $a_1$ are positive, and powers and quotients of positive numbers are positive."
      },
      {
        "step": "$\\log_2 a_{n+2} = \\log_2 \\dfrac{a_{n+1}^{17}}{a_n^{70}}$",
        "reason": "Logarithm: both sides of the rule are positive by line 2, and equal positive numbers have equal logarithms to base $2$."
      },
      {
        "step": "$\\log_2 a_{n+2} = \\log_2 a_{n+1}^{17} - \\log_2 a_n^{70}$",
        "reason": "Log of a quotient: the logarithm of a quotient is the logarithm of the top less the logarithm of the bottom."
      },
      {
        "step": "$\\log_2 a_{n+2} = 17\\log_2 a_{n+1} - 70\\log_2 a_n$",
        "reason": "Log of a power: the power comes out in front of each logarithm."
      },
      {
        "step": "Write $d_n = \\log_2 a_n$, so $d_{n+2} = 17d_{n+1} - 70d_n$ for every whole number $n$.",
        "reason": "Linearising a recurrence: the logarithm $\\log_2 a_n$ is written $d_n$ in line 5, and the rule for $d_n$ is a linear recurrence of order 2."
      },
      {
        "step": "So $d_0 = 3$ and $d_1 = 12$.",
        "reason": "Logarithm: $a_0 = 2^3$ and $a_1 = 2^{12}$."
      },
      {
        "step": "$x^2 = 17x - 70$",
        "reason": "Characteristic equation: $d_{n+2}$, $d_{n+1}$ and $d_n$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$x^2 - 17x + 70 = 0$",
        "reason": "Adding the same number to both sides: $17x - 70$ is taken from both sides."
      },
      {
        "step": "$(x - 7)(x - 10) = 0$",
        "reason": "Factoring a quadratic: $-7$ and $-10$ have sum $-17$ and product $70$."
      },
      {
        "step": "The roots are $7$ and $10$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$d_n = y \\cdot 7^n + z \\cdot 10^n$",
        "reason": "General solution (distinct roots): the roots $7$ and $10$ are different, so two numbers $y$ and $z$ give every term."
      },
      {
        "step": "$y + z = 3$",
        "reason": "Substituting a value: $n = 0$ in line 12, with $7^0 = 10^0 = 1$ and $d_0 = 3$."
      },
      {
        "step": "$7y + 10z = 12$",
        "reason": "Substituting a value: $n = 1$ in line 12, with $d_1 = 12$."
      },
      {
        "step": "$3z = -9$",
        "reason": "Elimination: $7$ times line 13 is taken from line 14."
      },
      {
        "step": "$z = -3$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
      },
      {
        "step": "$y = 6$",
        "reason": "Back-substitution: $z = -3$ goes into line 13."
      },
      {
        "step": "$\\log_2 a_n = 6 \\cdot 7^n - 3 \\cdot 10^n$",
        "reason": "Substituting a value: the numbers $y$ and $z$ go into line 12, and $d_n = \\log_2 a_n$."
      }
    ]
  },
  {
    "id": "t241-k3-p09",
    "topic": "recurrences-made-linear",
    "kind": "t241-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n = \\dfrac{63}{9 + 56n}$ for every whole number $n$, where $a_0 = 7$ and $a_{n+1} = \\dfrac{9a_n}{9 + 8a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n = \\dfrac{63}{9 + 56n}$ for every whole number $n$, where $a_0 = 7$ and $a_{n+1} = \\dfrac{9a_n}{9 + 8a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
      },
      {
        "step": "Every term $a_n$ is positive.",
        "reason": "Induction: $a_0 = 7$ is positive, and a positive $a_n$ gives a positive top $9a_n$ and a positive bottom $9 + 8a_n$."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{9 + 8a_n}{9a_n}$",
        "reason": "Reciprocal, from arithmetic: equal numbers that are not $0$ have equal reciprocals, and both sides of the rule are positive by line 2."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{9}{9a_n} + \\dfrac{8a_n}{9a_n}$",
        "reason": "Adding fractions with the same denominator, from arithmetic, read from right to left: the top is split into its two terms over the same bottom."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{1}{a_n} + \\dfrac{8}{9}$",
        "reason": "Cancelling a common factor: $9$ in the first fraction and $a_n$ in the second."
      },
      {
        "step": "Write $d_n = \\dfrac{1}{a_n}$, so $d_{n+1} = d_n + \\dfrac{8}{9}$ for every whole number $n$.",
        "reason": "Linearising a recurrence: the reciprocal $\\dfrac{1}{a_n}$ is written $d_n$ in line 5, and the rule for $d_n$ is linear."
      },
      {
        "step": "So the numbers $d_n$ form an arithmetic sequence with common difference $\\dfrac{8}{9}$.",
        "reason": "Arithmetic sequence: by line 6 each term less the one before is the same number."
      },
      {
        "step": "$d_0 = \\dfrac{1}{7}$",
        "reason": "Substituting a value: $a_0 = 7$ in line 6."
      },
      {
        "step": "$d_n = \\dfrac{1}{7} + \\dfrac{8}{9}n$",
        "reason": "The $n$th term $a + (n - 1)d$: counted from $d_0$, the term $d_n$ is $d_0$ plus $n$ common differences."
      },
      {
        "step": "$d_n = \\dfrac{9 + 56n}{63}$",
        "reason": "Single fraction: both fractions are written over the common bottom $63$."
      },
      {
        "step": "$a_n = \\dfrac{63}{9 + 56n}$",
        "reason": "Reciprocal, from arithmetic: $a_n$ is the reciprocal of $d_n$."
      }
    ]
  },
  {
    "id": "t241-k3-p10",
    "topic": "recurrences-made-linear",
    "kind": "t241-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $\\log_7 a_n = 4 \\cdot 4^n - 2 \\cdot 6^n$ for every whole number $n$, where $a_0 = 49$, $a_1 = 2401$ and $a_{n+2} = \\dfrac{a_{n+1}^{10}}{a_n^{24}}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $\\log_7 a_n = 4 \\cdot 4^n - 2 \\cdot 6^n$ for every whole number $n$, where $a_0 = 49$, $a_1 = 2401$ and $a_{n+2} = \\dfrac{a_{n+1}^{10}}{a_n^{24}}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
      },
      {
        "step": "Every term $a_n$ is positive.",
        "reason": "Induction: $a_0$ and $a_1$ are positive, and powers and quotients of positive numbers are positive."
      },
      {
        "step": "$\\log_7 a_{n+2} = \\log_7 \\dfrac{a_{n+1}^{10}}{a_n^{24}}$",
        "reason": "Logarithm: both sides of the rule are positive by line 2, and equal positive numbers have equal logarithms to base $7$."
      },
      {
        "step": "$\\log_7 a_{n+2} = \\log_7 a_{n+1}^{10} - \\log_7 a_n^{24}$",
        "reason": "Log of a quotient: the logarithm of a quotient is the logarithm of the top less the logarithm of the bottom."
      },
      {
        "step": "$\\log_7 a_{n+2} = 10\\log_7 a_{n+1} - 24\\log_7 a_n$",
        "reason": "Log of a power: the power comes out in front of each logarithm."
      },
      {
        "step": "Write $d_n = \\log_7 a_n$, so $d_{n+2} = 10d_{n+1} - 24d_n$ for every whole number $n$.",
        "reason": "Linearising a recurrence: the logarithm $\\log_7 a_n$ is written $d_n$ in line 5, and the rule for $d_n$ is a linear recurrence of order 2."
      },
      {
        "step": "So $d_0 = 2$ and $d_1 = 4$.",
        "reason": "Logarithm: $a_0 = 7^2$ and $a_1 = 7^4$."
      },
      {
        "step": "$x^2 = 10x - 24$",
        "reason": "Characteristic equation: $d_{n+2}$, $d_{n+1}$ and $d_n$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$x^2 - 10x + 24 = 0$",
        "reason": "Adding the same number to both sides: $10x - 24$ is taken from both sides."
      },
      {
        "step": "$(x - 4)(x - 6) = 0$",
        "reason": "Factoring a quadratic: $-4$ and $-6$ have sum $-10$ and product $24$."
      },
      {
        "step": "The roots are $4$ and $6$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$d_n = y \\cdot 4^n + z \\cdot 6^n$",
        "reason": "General solution (distinct roots): the roots $4$ and $6$ are different, so two numbers $y$ and $z$ give every term."
      },
      {
        "step": "$y + z = 2$",
        "reason": "Substituting a value: $n = 0$ in line 12, with $4^0 = 6^0 = 1$ and $d_0 = 2$."
      },
      {
        "step": "$4y + 6z = 4$",
        "reason": "Substituting a value: $n = 1$ in line 12, with $d_1 = 4$."
      },
      {
        "step": "$2z = -4$",
        "reason": "Elimination: $4$ times line 13 is taken from line 14."
      },
      {
        "step": "$z = -2$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
      },
      {
        "step": "$y = 4$",
        "reason": "Back-substitution: $z = -2$ goes into line 13."
      },
      {
        "step": "$\\log_7 a_n = 4 \\cdot 4^n - 2 \\cdot 6^n$",
        "reason": "Substituting a value: the numbers $y$ and $z$ go into line 12, and $d_n = \\log_7 a_n$."
      }
    ]
  },
  {
    "id": "t241-k3-p11",
    "topic": "recurrences-made-linear",
    "kind": "t241-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n = \\dfrac{6}{3 + 20n}$ for every whole number $n$, where $a_0 = 2$ and $a_{n+1} = \\dfrac{3a_n}{3 + 10a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n = \\dfrac{6}{3 + 20n}$ for every whole number $n$, where $a_0 = 2$ and $a_{n+1} = \\dfrac{3a_n}{3 + 10a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
      },
      {
        "step": "Every term $a_n$ is positive.",
        "reason": "Induction: $a_0 = 2$ is positive, and a positive $a_n$ gives a positive top $3a_n$ and a positive bottom $3 + 10a_n$."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{3 + 10a_n}{3a_n}$",
        "reason": "Reciprocal, from arithmetic: equal numbers that are not $0$ have equal reciprocals, and both sides of the rule are positive by line 2."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{3}{3a_n} + \\dfrac{10a_n}{3a_n}$",
        "reason": "Adding fractions with the same denominator, from arithmetic, read from right to left: the top is split into its two terms over the same bottom."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{1}{a_n} + \\dfrac{10}{3}$",
        "reason": "Cancelling a common factor: $3$ in the first fraction and $a_n$ in the second."
      },
      {
        "step": "Write $d_n = \\dfrac{1}{a_n}$, so $d_{n+1} = d_n + \\dfrac{10}{3}$ for every whole number $n$.",
        "reason": "Linearising a recurrence: the reciprocal $\\dfrac{1}{a_n}$ is written $d_n$ in line 5, and the rule for $d_n$ is linear."
      },
      {
        "step": "So the numbers $d_n$ form an arithmetic sequence with common difference $\\dfrac{10}{3}$.",
        "reason": "Arithmetic sequence: by line 6 each term less the one before is the same number."
      },
      {
        "step": "$d_0 = \\dfrac{1}{2}$",
        "reason": "Substituting a value: $a_0 = 2$ in line 6."
      },
      {
        "step": "$d_n = \\dfrac{1}{2} + \\dfrac{10}{3}n$",
        "reason": "The $n$th term $a + (n - 1)d$: counted from $d_0$, the term $d_n$ is $d_0$ plus $n$ common differences."
      },
      {
        "step": "$d_n = \\dfrac{3 + 20n}{6}$",
        "reason": "Single fraction: both fractions are written over the common bottom $6$."
      },
      {
        "step": "$a_n = \\dfrac{6}{3 + 20n}$",
        "reason": "Reciprocal, from arithmetic: $a_n$ is the reciprocal of $d_n$."
      }
    ]
  },
  {
    "id": "t241-k3-p12",
    "topic": "recurrences-made-linear",
    "kind": "t241-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n = \\dfrac{22}{2 + 77n}$ for every whole number $n$, where $a_0 = 11$ and $a_{n+1} = \\dfrac{2a_n}{2 + 7a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n = \\dfrac{22}{2 + 77n}$ for every whole number $n$, where $a_0 = 11$ and $a_{n+1} = \\dfrac{2a_n}{2 + 7a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
      },
      {
        "step": "Every term $a_n$ is positive.",
        "reason": "Induction: $a_0 = 11$ is positive, and a positive $a_n$ gives a positive top $2a_n$ and a positive bottom $2 + 7a_n$."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{2 + 7a_n}{2a_n}$",
        "reason": "Reciprocal, from arithmetic: equal numbers that are not $0$ have equal reciprocals, and both sides of the rule are positive by line 2."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{2}{2a_n} + \\dfrac{7a_n}{2a_n}$",
        "reason": "Adding fractions with the same denominator, from arithmetic, read from right to left: the top is split into its two terms over the same bottom."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{1}{a_n} + \\dfrac{7}{2}$",
        "reason": "Cancelling a common factor: $2$ in the first fraction and $a_n$ in the second."
      },
      {
        "step": "Write $d_n = \\dfrac{1}{a_n}$, so $d_{n+1} = d_n + \\dfrac{7}{2}$ for every whole number $n$.",
        "reason": "Linearising a recurrence: the reciprocal $\\dfrac{1}{a_n}$ is written $d_n$ in line 5, and the rule for $d_n$ is linear."
      },
      {
        "step": "So the numbers $d_n$ form an arithmetic sequence with common difference $\\dfrac{7}{2}$.",
        "reason": "Arithmetic sequence: by line 6 each term less the one before is the same number."
      },
      {
        "step": "$d_0 = \\dfrac{1}{11}$",
        "reason": "Substituting a value: $a_0 = 11$ in line 6."
      },
      {
        "step": "$d_n = \\dfrac{1}{11} + \\dfrac{7}{2}n$",
        "reason": "The $n$th term $a + (n - 1)d$: counted from $d_0$, the term $d_n$ is $d_0$ plus $n$ common differences."
      },
      {
        "step": "$d_n = \\dfrac{2 + 77n}{22}$",
        "reason": "Single fraction: both fractions are written over the common bottom $22$."
      },
      {
        "step": "$a_n = \\dfrac{22}{2 + 77n}$",
        "reason": "Reciprocal, from arithmetic: $a_n$ is the reciprocal of $d_n$."
      }
    ]
  },
  {
    "id": "t241-k3-p13",
    "topic": "recurrences-made-linear",
    "kind": "t241-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n = \\dfrac{60}{5 + 72n}$ for every whole number $n$, where $a_0 = 12$ and $a_{n+1} = \\dfrac{5a_n}{5 + 6a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n = \\dfrac{60}{5 + 72n}$ for every whole number $n$, where $a_0 = 12$ and $a_{n+1} = \\dfrac{5a_n}{5 + 6a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
      },
      {
        "step": "Every term $a_n$ is positive.",
        "reason": "Induction: $a_0 = 12$ is positive, and a positive $a_n$ gives a positive top $5a_n$ and a positive bottom $5 + 6a_n$."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{5 + 6a_n}{5a_n}$",
        "reason": "Reciprocal, from arithmetic: equal numbers that are not $0$ have equal reciprocals, and both sides of the rule are positive by line 2."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{5}{5a_n} + \\dfrac{6a_n}{5a_n}$",
        "reason": "Adding fractions with the same denominator, from arithmetic, read from right to left: the top is split into its two terms over the same bottom."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{1}{a_n} + \\dfrac{6}{5}$",
        "reason": "Cancelling a common factor: $5$ in the first fraction and $a_n$ in the second."
      },
      {
        "step": "Write $d_n = \\dfrac{1}{a_n}$, so $d_{n+1} = d_n + \\dfrac{6}{5}$ for every whole number $n$.",
        "reason": "Linearising a recurrence: the reciprocal $\\dfrac{1}{a_n}$ is written $d_n$ in line 5, and the rule for $d_n$ is linear."
      },
      {
        "step": "So the numbers $d_n$ form an arithmetic sequence with common difference $\\dfrac{6}{5}$.",
        "reason": "Arithmetic sequence: by line 6 each term less the one before is the same number."
      },
      {
        "step": "$d_0 = \\dfrac{1}{12}$",
        "reason": "Substituting a value: $a_0 = 12$ in line 6."
      },
      {
        "step": "$d_n = \\dfrac{1}{12} + \\dfrac{6}{5}n$",
        "reason": "The $n$th term $a + (n - 1)d$: counted from $d_0$, the term $d_n$ is $d_0$ plus $n$ common differences."
      },
      {
        "step": "$d_n = \\dfrac{5 + 72n}{60}$",
        "reason": "Single fraction: both fractions are written over the common bottom $60$."
      },
      {
        "step": "$a_n = \\dfrac{60}{5 + 72n}$",
        "reason": "Reciprocal, from arithmetic: $a_n$ is the reciprocal of $d_n$."
      }
    ]
  },
  {
    "id": "t241-k3-p14",
    "topic": "recurrences-made-linear",
    "kind": "t241-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n = \\dfrac{110}{11 + 60n}$ for every whole number $n$, where $a_0 = 10$ and $a_{n+1} = \\dfrac{11a_n}{11 + 6a_n}$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n = \\dfrac{110}{11 + 60n}$ for every whole number $n$, where $a_0 = 10$ and $a_{n+1} = \\dfrac{11a_n}{11 + 6a_n}$ for every whole number $n$.",
        "reason": "Recursion: this is the problem as given; the starting terms and the rule give every later term."
      },
      {
        "step": "Every term $a_n$ is positive.",
        "reason": "Induction: $a_0 = 10$ is positive, and a positive $a_n$ gives a positive top $11a_n$ and a positive bottom $11 + 6a_n$."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{11 + 6a_n}{11a_n}$",
        "reason": "Reciprocal, from arithmetic: equal numbers that are not $0$ have equal reciprocals, and both sides of the rule are positive by line 2."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{11}{11a_n} + \\dfrac{6a_n}{11a_n}$",
        "reason": "Adding fractions with the same denominator, from arithmetic, read from right to left: the top is split into its two terms over the same bottom."
      },
      {
        "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{1}{a_n} + \\dfrac{6}{11}$",
        "reason": "Cancelling a common factor: $11$ in the first fraction and $a_n$ in the second."
      },
      {
        "step": "Write $d_n = \\dfrac{1}{a_n}$, so $d_{n+1} = d_n + \\dfrac{6}{11}$ for every whole number $n$.",
        "reason": "Linearising a recurrence: the reciprocal $\\dfrac{1}{a_n}$ is written $d_n$ in line 5, and the rule for $d_n$ is linear."
      },
      {
        "step": "So the numbers $d_n$ form an arithmetic sequence with common difference $\\dfrac{6}{11}$.",
        "reason": "Arithmetic sequence: by line 6 each term less the one before is the same number."
      },
      {
        "step": "$d_0 = \\dfrac{1}{10}$",
        "reason": "Substituting a value: $a_0 = 10$ in line 6."
      },
      {
        "step": "$d_n = \\dfrac{1}{10} + \\dfrac{6}{11}n$",
        "reason": "The $n$th term $a + (n - 1)d$: counted from $d_0$, the term $d_n$ is $d_0$ plus $n$ common differences."
      },
      {
        "step": "$d_n = \\dfrac{11 + 60n}{110}$",
        "reason": "Single fraction: both fractions are written over the common bottom $110$."
      },
      {
        "step": "$a_n = \\dfrac{110}{11 + 60n}$",
        "reason": "Reciprocal, from arithmetic: $a_n$ is the reciprocal of $d_n$."
      }
    ]
  }
]
