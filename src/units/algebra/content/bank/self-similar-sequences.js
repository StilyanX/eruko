export default [
  {
    "id": "t243-k1-p01",
    "topic": "self-similar-sequences",
    "kind": "t243-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{3n} = a_n$, that $a_{3n+1}$ is the remainder of $a_n + 8$ on division by $10$, and that $a_{3n+2}$ is the remainder of $a_n + 5$ on division by $10$, for every whole number $n$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 8$ on division by $10$, and the remainder of $t + 5$ on division by $10$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{3n} = a_n$, that $a_{3n+1}$ is the remainder of $a_n + 8$ on division by $10$, and that $a_{3n+2}$ is the remainder of $a_n + 5$ on division by $10$, for every whole number $n$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 8$ on division by $10$, and the remainder of $t + 5$ on division by $10$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
        "reason": "Substitution sequence: this is the problem as given; call the single term $0$ row $0$, and the row made from row $j$ by the replacement row $j + 1$."
      },
      {
        "step": "The term in place $n$ of a row gives the terms in places $3n$, $3n + 1$ and $3n + 2$ of the next row.",
        "reason": "Substitution sequence: the $n$ terms before it give $3n$ terms, which fill the places $0$ to $3n - 1$."
      },
      {
        "step": "Row $1$ starts with row $0$.",
        "reason": "Base case: row $0$ is $0$, and row $1$ is $0$, $8$, $5$, since $8$ and $5$ are below $10$."
      },
      {
        "step": "Assume that row $j$ starts with row $j - 1$, for some whole number $j$ from $1$ up.",
        "reason": "Inductive assumption: the claim at $j$."
      },
      {
        "step": "Then row $j + 1$ starts with row $j$.",
        "reason": "Inductive step: by line 4 the terms of row $j - 1$ open row $j$; by line 2 what they give opens row $j + 1$, and what they give is row $j$."
      },
      {
        "step": "So every row starts with the row before it, and the term in place $n$ is the same number $a_n$ in every row that has such a place.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 and 5."
      },
      {
        "step": "So $a_{3n} = a_n$, $a_{3n+1}$ is the remainder of $a_n + 8$ on division by $10$, and $a_{3n+2}$ is the remainder of $a_n + 5$ on division by $10$, for every whole number $n$.",
        "reason": "Substitution sequence: by line 6 the term in place $n$ of a row is $a_n$; by line 2 its three terms stand in places $3n$, $3n + 1$ and $3n + 2$ of the next row, and by line 6 these are $a_{3n}$, $a_{3n+1}$ and $a_{3n+2}$."
      }
    ]
  },
  {
    "id": "t243-k1-p02",
    "topic": "self-similar-sequences",
    "kind": "t243-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{3n} = a_n$, that $a_{3n+1}$ is the remainder of $a_n + 3$ on division by $15$, and that $a_{3n+2}$ is the remainder of $a_n + 11$ on division by $15$, for every whole number $n$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 3$ on division by $15$, and the remainder of $t + 11$ on division by $15$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{3n} = a_n$, that $a_{3n+1}$ is the remainder of $a_n + 3$ on division by $15$, and that $a_{3n+2}$ is the remainder of $a_n + 11$ on division by $15$, for every whole number $n$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 3$ on division by $15$, and the remainder of $t + 11$ on division by $15$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
        "reason": "Substitution sequence: this is the problem as given; call the single term $0$ row $0$, and the row made from row $j$ by the replacement row $j + 1$."
      },
      {
        "step": "The term in place $n$ of a row gives the terms in places $3n$, $3n + 1$ and $3n + 2$ of the next row.",
        "reason": "Substitution sequence: the $n$ terms before it give $3n$ terms, which fill the places $0$ to $3n - 1$."
      },
      {
        "step": "Row $1$ starts with row $0$.",
        "reason": "Base case: row $0$ is $0$, and row $1$ is $0$, $3$, $11$, since $3$ and $11$ are below $15$."
      },
      {
        "step": "Assume that row $j$ starts with row $j - 1$, for some whole number $j$ from $1$ up.",
        "reason": "Inductive assumption: the claim at $j$."
      },
      {
        "step": "Then row $j + 1$ starts with row $j$.",
        "reason": "Inductive step: by line 4 the terms of row $j - 1$ open row $j$; by line 2 what they give opens row $j + 1$, and what they give is row $j$."
      },
      {
        "step": "So every row starts with the row before it, and the term in place $n$ is the same number $a_n$ in every row that has such a place.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 and 5."
      },
      {
        "step": "So $a_{3n} = a_n$, $a_{3n+1}$ is the remainder of $a_n + 3$ on division by $15$, and $a_{3n+2}$ is the remainder of $a_n + 11$ on division by $15$, for every whole number $n$.",
        "reason": "Substitution sequence: by line 6 the term in place $n$ of a row is $a_n$; by line 2 its three terms stand in places $3n$, $3n + 1$ and $3n + 2$ of the next row, and by line 6 these are $a_{3n}$, $a_{3n+1}$ and $a_{3n+2}$."
      }
    ]
  },
  {
    "id": "t243-k1-p03",
    "topic": "self-similar-sequences",
    "kind": "t243-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{3n} = a_n$, that $a_{3n+1}$ is the remainder of $a_n + 5$ on division by $15$, and that $a_{3n+2}$ is the remainder of $a_n + 3$ on division by $15$, for every whole number $n$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 5$ on division by $15$, and the remainder of $t + 3$ on division by $15$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{3n} = a_n$, that $a_{3n+1}$ is the remainder of $a_n + 5$ on division by $15$, and that $a_{3n+2}$ is the remainder of $a_n + 3$ on division by $15$, for every whole number $n$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 5$ on division by $15$, and the remainder of $t + 3$ on division by $15$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
        "reason": "Substitution sequence: this is the problem as given; call the single term $0$ row $0$, and the row made from row $j$ by the replacement row $j + 1$."
      },
      {
        "step": "The term in place $n$ of a row gives the terms in places $3n$, $3n + 1$ and $3n + 2$ of the next row.",
        "reason": "Substitution sequence: the $n$ terms before it give $3n$ terms, which fill the places $0$ to $3n - 1$."
      },
      {
        "step": "Row $1$ starts with row $0$.",
        "reason": "Base case: row $0$ is $0$, and row $1$ is $0$, $5$, $3$, since $5$ and $3$ are below $15$."
      },
      {
        "step": "Assume that row $j$ starts with row $j - 1$, for some whole number $j$ from $1$ up.",
        "reason": "Inductive assumption: the claim at $j$."
      },
      {
        "step": "Then row $j + 1$ starts with row $j$.",
        "reason": "Inductive step: by line 4 the terms of row $j - 1$ open row $j$; by line 2 what they give opens row $j + 1$, and what they give is row $j$."
      },
      {
        "step": "So every row starts with the row before it, and the term in place $n$ is the same number $a_n$ in every row that has such a place.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 and 5."
      },
      {
        "step": "So $a_{3n} = a_n$, $a_{3n+1}$ is the remainder of $a_n + 5$ on division by $15$, and $a_{3n+2}$ is the remainder of $a_n + 3$ on division by $15$, for every whole number $n$.",
        "reason": "Substitution sequence: by line 6 the term in place $n$ of a row is $a_n$; by line 2 its three terms stand in places $3n$, $3n + 1$ and $3n + 2$ of the next row, and by line 6 these are $a_{3n}$, $a_{3n+1}$ and $a_{3n+2}$."
      }
    ]
  },
  {
    "id": "t243-k1-p04",
    "topic": "self-similar-sequences",
    "kind": "t243-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{3n} = a_n$, that $a_{3n+1}$ is the remainder of $a_n + 6$ on division by $8$, and that $a_{3n+2}$ is the remainder of $a_n + 3$ on division by $8$, for every whole number $n$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 6$ on division by $8$, and the remainder of $t + 3$ on division by $8$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{3n} = a_n$, that $a_{3n+1}$ is the remainder of $a_n + 6$ on division by $8$, and that $a_{3n+2}$ is the remainder of $a_n + 3$ on division by $8$, for every whole number $n$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 6$ on division by $8$, and the remainder of $t + 3$ on division by $8$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
        "reason": "Substitution sequence: this is the problem as given; call the single term $0$ row $0$, and the row made from row $j$ by the replacement row $j + 1$."
      },
      {
        "step": "The term in place $n$ of a row gives the terms in places $3n$, $3n + 1$ and $3n + 2$ of the next row.",
        "reason": "Substitution sequence: the $n$ terms before it give $3n$ terms, which fill the places $0$ to $3n - 1$."
      },
      {
        "step": "Row $1$ starts with row $0$.",
        "reason": "Base case: row $0$ is $0$, and row $1$ is $0$, $6$, $3$, since $6$ and $3$ are below $8$."
      },
      {
        "step": "Assume that row $j$ starts with row $j - 1$, for some whole number $j$ from $1$ up.",
        "reason": "Inductive assumption: the claim at $j$."
      },
      {
        "step": "Then row $j + 1$ starts with row $j$.",
        "reason": "Inductive step: by line 4 the terms of row $j - 1$ open row $j$; by line 2 what they give opens row $j + 1$, and what they give is row $j$."
      },
      {
        "step": "So every row starts with the row before it, and the term in place $n$ is the same number $a_n$ in every row that has such a place.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 and 5."
      },
      {
        "step": "So $a_{3n} = a_n$, $a_{3n+1}$ is the remainder of $a_n + 6$ on division by $8$, and $a_{3n+2}$ is the remainder of $a_n + 3$ on division by $8$, for every whole number $n$.",
        "reason": "Substitution sequence: by line 6 the term in place $n$ of a row is $a_n$; by line 2 its three terms stand in places $3n$, $3n + 1$ and $3n + 2$ of the next row, and by line 6 these are $a_{3n}$, $a_{3n+1}$ and $a_{3n+2}$."
      }
    ]
  },
  {
    "id": "t243-k1-p05",
    "topic": "self-similar-sequences",
    "kind": "t243-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{3n} = a_n$, that $a_{3n+1}$ is the remainder of $a_n + 6$ on division by $9$, and that $a_{3n+2}$ is the remainder of $a_n + 8$ on division by $9$, for every whole number $n$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 6$ on division by $9$, and the remainder of $t + 8$ on division by $9$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{3n} = a_n$, that $a_{3n+1}$ is the remainder of $a_n + 6$ on division by $9$, and that $a_{3n+2}$ is the remainder of $a_n + 8$ on division by $9$, for every whole number $n$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 6$ on division by $9$, and the remainder of $t + 8$ on division by $9$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
        "reason": "Substitution sequence: this is the problem as given; call the single term $0$ row $0$, and the row made from row $j$ by the replacement row $j + 1$."
      },
      {
        "step": "The term in place $n$ of a row gives the terms in places $3n$, $3n + 1$ and $3n + 2$ of the next row.",
        "reason": "Substitution sequence: the $n$ terms before it give $3n$ terms, which fill the places $0$ to $3n - 1$."
      },
      {
        "step": "Row $1$ starts with row $0$.",
        "reason": "Base case: row $0$ is $0$, and row $1$ is $0$, $6$, $8$, since $6$ and $8$ are below $9$."
      },
      {
        "step": "Assume that row $j$ starts with row $j - 1$, for some whole number $j$ from $1$ up.",
        "reason": "Inductive assumption: the claim at $j$."
      },
      {
        "step": "Then row $j + 1$ starts with row $j$.",
        "reason": "Inductive step: by line 4 the terms of row $j - 1$ open row $j$; by line 2 what they give opens row $j + 1$, and what they give is row $j$."
      },
      {
        "step": "So every row starts with the row before it, and the term in place $n$ is the same number $a_n$ in every row that has such a place.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 and 5."
      },
      {
        "step": "So $a_{3n} = a_n$, $a_{3n+1}$ is the remainder of $a_n + 6$ on division by $9$, and $a_{3n+2}$ is the remainder of $a_n + 8$ on division by $9$, for every whole number $n$.",
        "reason": "Substitution sequence: by line 6 the term in place $n$ of a row is $a_n$; by line 2 its three terms stand in places $3n$, $3n + 1$ and $3n + 2$ of the next row, and by line 6 these are $a_{3n}$, $a_{3n+1}$ and $a_{3n+2}$."
      }
    ]
  },
  {
    "id": "t243-k1-p06",
    "topic": "self-similar-sequences",
    "kind": "t243-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{3n} = a_n$, that $a_{3n+1}$ is the remainder of $a_n + 10$ on division by $12$, and that $a_{3n+2}$ is the remainder of $a_n + 4$ on division by $12$, for every whole number $n$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 10$ on division by $12$, and the remainder of $t + 4$ on division by $12$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{3n} = a_n$, that $a_{3n+1}$ is the remainder of $a_n + 10$ on division by $12$, and that $a_{3n+2}$ is the remainder of $a_n + 4$ on division by $12$, for every whole number $n$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 10$ on division by $12$, and the remainder of $t + 4$ on division by $12$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
        "reason": "Substitution sequence: this is the problem as given; call the single term $0$ row $0$, and the row made from row $j$ by the replacement row $j + 1$."
      },
      {
        "step": "The term in place $n$ of a row gives the terms in places $3n$, $3n + 1$ and $3n + 2$ of the next row.",
        "reason": "Substitution sequence: the $n$ terms before it give $3n$ terms, which fill the places $0$ to $3n - 1$."
      },
      {
        "step": "Row $1$ starts with row $0$.",
        "reason": "Base case: row $0$ is $0$, and row $1$ is $0$, $10$, $4$, since $10$ and $4$ are below $12$."
      },
      {
        "step": "Assume that row $j$ starts with row $j - 1$, for some whole number $j$ from $1$ up.",
        "reason": "Inductive assumption: the claim at $j$."
      },
      {
        "step": "Then row $j + 1$ starts with row $j$.",
        "reason": "Inductive step: by line 4 the terms of row $j - 1$ open row $j$; by line 2 what they give opens row $j + 1$, and what they give is row $j$."
      },
      {
        "step": "So every row starts with the row before it, and the term in place $n$ is the same number $a_n$ in every row that has such a place.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 and 5."
      },
      {
        "step": "So $a_{3n} = a_n$, $a_{3n+1}$ is the remainder of $a_n + 10$ on division by $12$, and $a_{3n+2}$ is the remainder of $a_n + 4$ on division by $12$, for every whole number $n$.",
        "reason": "Substitution sequence: by line 6 the term in place $n$ of a row is $a_n$; by line 2 its three terms stand in places $3n$, $3n + 1$ and $3n + 2$ of the next row, and by line 6 these are $a_{3n}$, $a_{3n+1}$ and $a_{3n+2}$."
      }
    ]
  },
  {
    "id": "t243-k1-p07",
    "topic": "self-similar-sequences",
    "kind": "t243-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{3n} = a_n$, that $a_{3n+1}$ is the remainder of $a_n + 11$ on division by $13$, and that $a_{3n+2}$ is the remainder of $a_n + 7$ on division by $13$, for every whole number $n$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 11$ on division by $13$, and the remainder of $t + 7$ on division by $13$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{3n} = a_n$, that $a_{3n+1}$ is the remainder of $a_n + 11$ on division by $13$, and that $a_{3n+2}$ is the remainder of $a_n + 7$ on division by $13$, for every whole number $n$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 11$ on division by $13$, and the remainder of $t + 7$ on division by $13$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
        "reason": "Substitution sequence: this is the problem as given; call the single term $0$ row $0$, and the row made from row $j$ by the replacement row $j + 1$."
      },
      {
        "step": "The term in place $n$ of a row gives the terms in places $3n$, $3n + 1$ and $3n + 2$ of the next row.",
        "reason": "Substitution sequence: the $n$ terms before it give $3n$ terms, which fill the places $0$ to $3n - 1$."
      },
      {
        "step": "Row $1$ starts with row $0$.",
        "reason": "Base case: row $0$ is $0$, and row $1$ is $0$, $11$, $7$, since $11$ and $7$ are below $13$."
      },
      {
        "step": "Assume that row $j$ starts with row $j - 1$, for some whole number $j$ from $1$ up.",
        "reason": "Inductive assumption: the claim at $j$."
      },
      {
        "step": "Then row $j + 1$ starts with row $j$.",
        "reason": "Inductive step: by line 4 the terms of row $j - 1$ open row $j$; by line 2 what they give opens row $j + 1$, and what they give is row $j$."
      },
      {
        "step": "So every row starts with the row before it, and the term in place $n$ is the same number $a_n$ in every row that has such a place.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 and 5."
      },
      {
        "step": "So $a_{3n} = a_n$, $a_{3n+1}$ is the remainder of $a_n + 11$ on division by $13$, and $a_{3n+2}$ is the remainder of $a_n + 7$ on division by $13$, for every whole number $n$.",
        "reason": "Substitution sequence: by line 6 the term in place $n$ of a row is $a_n$; by line 2 its three terms stand in places $3n$, $3n + 1$ and $3n + 2$ of the next row, and by line 6 these are $a_{3n}$, $a_{3n+1}$ and $a_{3n+2}$."
      }
    ]
  },
  {
    "id": "t243-k1-p08",
    "topic": "self-similar-sequences",
    "kind": "t243-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{3n} = a_n$, that $a_{3n+1}$ is the remainder of $a_n + 7$ on division by $11$, and that $a_{3n+2}$ is the remainder of $a_n + 3$ on division by $11$, for every whole number $n$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 7$ on division by $11$, and the remainder of $t + 3$ on division by $11$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{3n} = a_n$, that $a_{3n+1}$ is the remainder of $a_n + 7$ on division by $11$, and that $a_{3n+2}$ is the remainder of $a_n + 3$ on division by $11$, for every whole number $n$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 7$ on division by $11$, and the remainder of $t + 3$ on division by $11$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
        "reason": "Substitution sequence: this is the problem as given; call the single term $0$ row $0$, and the row made from row $j$ by the replacement row $j + 1$."
      },
      {
        "step": "The term in place $n$ of a row gives the terms in places $3n$, $3n + 1$ and $3n + 2$ of the next row.",
        "reason": "Substitution sequence: the $n$ terms before it give $3n$ terms, which fill the places $0$ to $3n - 1$."
      },
      {
        "step": "Row $1$ starts with row $0$.",
        "reason": "Base case: row $0$ is $0$, and row $1$ is $0$, $7$, $3$, since $7$ and $3$ are below $11$."
      },
      {
        "step": "Assume that row $j$ starts with row $j - 1$, for some whole number $j$ from $1$ up.",
        "reason": "Inductive assumption: the claim at $j$."
      },
      {
        "step": "Then row $j + 1$ starts with row $j$.",
        "reason": "Inductive step: by line 4 the terms of row $j - 1$ open row $j$; by line 2 what they give opens row $j + 1$, and what they give is row $j$."
      },
      {
        "step": "So every row starts with the row before it, and the term in place $n$ is the same number $a_n$ in every row that has such a place.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 and 5."
      },
      {
        "step": "So $a_{3n} = a_n$, $a_{3n+1}$ is the remainder of $a_n + 7$ on division by $11$, and $a_{3n+2}$ is the remainder of $a_n + 3$ on division by $11$, for every whole number $n$.",
        "reason": "Substitution sequence: by line 6 the term in place $n$ of a row is $a_n$; by line 2 its three terms stand in places $3n$, $3n + 1$ and $3n + 2$ of the next row, and by line 6 these are $a_{3n}$, $a_{3n+1}$ and $a_{3n+2}$."
      }
    ]
  },
  {
    "id": "t243-k1-p09",
    "topic": "self-similar-sequences",
    "kind": "t243-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{3n} = a_n$, that $a_{3n+1}$ is the remainder of $a_n + 4$ on division by $6$, and that $a_{3n+2}$ is the remainder of $a_n + 5$ on division by $6$, for every whole number $n$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 4$ on division by $6$, and the remainder of $t + 5$ on division by $6$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{3n} = a_n$, that $a_{3n+1}$ is the remainder of $a_n + 4$ on division by $6$, and that $a_{3n+2}$ is the remainder of $a_n + 5$ on division by $6$, for every whole number $n$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 4$ on division by $6$, and the remainder of $t + 5$ on division by $6$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
        "reason": "Substitution sequence: this is the problem as given; call the single term $0$ row $0$, and the row made from row $j$ by the replacement row $j + 1$."
      },
      {
        "step": "The term in place $n$ of a row gives the terms in places $3n$, $3n + 1$ and $3n + 2$ of the next row.",
        "reason": "Substitution sequence: the $n$ terms before it give $3n$ terms, which fill the places $0$ to $3n - 1$."
      },
      {
        "step": "Row $1$ starts with row $0$.",
        "reason": "Base case: row $0$ is $0$, and row $1$ is $0$, $4$, $5$, since $4$ and $5$ are below $6$."
      },
      {
        "step": "Assume that row $j$ starts with row $j - 1$, for some whole number $j$ from $1$ up.",
        "reason": "Inductive assumption: the claim at $j$."
      },
      {
        "step": "Then row $j + 1$ starts with row $j$.",
        "reason": "Inductive step: by line 4 the terms of row $j - 1$ open row $j$; by line 2 what they give opens row $j + 1$, and what they give is row $j$."
      },
      {
        "step": "So every row starts with the row before it, and the term in place $n$ is the same number $a_n$ in every row that has such a place.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 and 5."
      },
      {
        "step": "So $a_{3n} = a_n$, $a_{3n+1}$ is the remainder of $a_n + 4$ on division by $6$, and $a_{3n+2}$ is the remainder of $a_n + 5$ on division by $6$, for every whole number $n$.",
        "reason": "Substitution sequence: by line 6 the term in place $n$ of a row is $a_n$; by line 2 its three terms stand in places $3n$, $3n + 1$ and $3n + 2$ of the next row, and by line 6 these are $a_{3n}$, $a_{3n+1}$ and $a_{3n+2}$."
      }
    ]
  },
  {
    "id": "t243-k1-p10",
    "topic": "self-similar-sequences",
    "kind": "t243-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{3n} = a_n$, that $a_{3n+1}$ is the remainder of $a_n + 12$ on division by $14$, and that $a_{3n+2}$ is the remainder of $a_n + 1$ on division by $14$, for every whole number $n$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 12$ on division by $14$, and the remainder of $t + 1$ on division by $14$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{3n} = a_n$, that $a_{3n+1}$ is the remainder of $a_n + 12$ on division by $14$, and that $a_{3n+2}$ is the remainder of $a_n + 1$ on division by $14$, for every whole number $n$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 12$ on division by $14$, and the remainder of $t + 1$ on division by $14$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
        "reason": "Substitution sequence: this is the problem as given; call the single term $0$ row $0$, and the row made from row $j$ by the replacement row $j + 1$."
      },
      {
        "step": "The term in place $n$ of a row gives the terms in places $3n$, $3n + 1$ and $3n + 2$ of the next row.",
        "reason": "Substitution sequence: the $n$ terms before it give $3n$ terms, which fill the places $0$ to $3n - 1$."
      },
      {
        "step": "Row $1$ starts with row $0$.",
        "reason": "Base case: row $0$ is $0$, and row $1$ is $0$, $12$, $1$, since $12$ and $1$ are below $14$."
      },
      {
        "step": "Assume that row $j$ starts with row $j - 1$, for some whole number $j$ from $1$ up.",
        "reason": "Inductive assumption: the claim at $j$."
      },
      {
        "step": "Then row $j + 1$ starts with row $j$.",
        "reason": "Inductive step: by line 4 the terms of row $j - 1$ open row $j$; by line 2 what they give opens row $j + 1$, and what they give is row $j$."
      },
      {
        "step": "So every row starts with the row before it, and the term in place $n$ is the same number $a_n$ in every row that has such a place.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 and 5."
      },
      {
        "step": "So $a_{3n} = a_n$, $a_{3n+1}$ is the remainder of $a_n + 12$ on division by $14$, and $a_{3n+2}$ is the remainder of $a_n + 1$ on division by $14$, for every whole number $n$.",
        "reason": "Substitution sequence: by line 6 the term in place $n$ of a row is $a_n$; by line 2 its three terms stand in places $3n$, $3n + 1$ and $3n + 2$ of the next row, and by line 6 these are $a_{3n}$, $a_{3n+1}$ and $a_{3n+2}$."
      }
    ]
  },
  {
    "id": "t243-k1-p11",
    "topic": "self-similar-sequences",
    "kind": "t243-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{3n} = a_n$, that $a_{3n+1}$ is the remainder of $a_n + 6$ on division by $16$, and that $a_{3n+2}$ is the remainder of $a_n + 1$ on division by $16$, for every whole number $n$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 6$ on division by $16$, and the remainder of $t + 1$ on division by $16$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{3n} = a_n$, that $a_{3n+1}$ is the remainder of $a_n + 6$ on division by $16$, and that $a_{3n+2}$ is the remainder of $a_n + 1$ on division by $16$, for every whole number $n$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 6$ on division by $16$, and the remainder of $t + 1$ on division by $16$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
        "reason": "Substitution sequence: this is the problem as given; call the single term $0$ row $0$, and the row made from row $j$ by the replacement row $j + 1$."
      },
      {
        "step": "The term in place $n$ of a row gives the terms in places $3n$, $3n + 1$ and $3n + 2$ of the next row.",
        "reason": "Substitution sequence: the $n$ terms before it give $3n$ terms, which fill the places $0$ to $3n - 1$."
      },
      {
        "step": "Row $1$ starts with row $0$.",
        "reason": "Base case: row $0$ is $0$, and row $1$ is $0$, $6$, $1$, since $6$ and $1$ are below $16$."
      },
      {
        "step": "Assume that row $j$ starts with row $j - 1$, for some whole number $j$ from $1$ up.",
        "reason": "Inductive assumption: the claim at $j$."
      },
      {
        "step": "Then row $j + 1$ starts with row $j$.",
        "reason": "Inductive step: by line 4 the terms of row $j - 1$ open row $j$; by line 2 what they give opens row $j + 1$, and what they give is row $j$."
      },
      {
        "step": "So every row starts with the row before it, and the term in place $n$ is the same number $a_n$ in every row that has such a place.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 and 5."
      },
      {
        "step": "So $a_{3n} = a_n$, $a_{3n+1}$ is the remainder of $a_n + 6$ on division by $16$, and $a_{3n+2}$ is the remainder of $a_n + 1$ on division by $16$, for every whole number $n$.",
        "reason": "Substitution sequence: by line 6 the term in place $n$ of a row is $a_n$; by line 2 its three terms stand in places $3n$, $3n + 1$ and $3n + 2$ of the next row, and by line 6 these are $a_{3n}$, $a_{3n+1}$ and $a_{3n+2}$."
      }
    ]
  },
  {
    "id": "t243-k1-p12",
    "topic": "self-similar-sequences",
    "kind": "t243-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{3n} = a_n$, that $a_{3n+1}$ is the remainder of $a_n + 2$ on division by $15$, and that $a_{3n+2}$ is the remainder of $a_n + 9$ on division by $15$, for every whole number $n$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 2$ on division by $15$, and the remainder of $t + 9$ on division by $15$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{3n} = a_n$, that $a_{3n+1}$ is the remainder of $a_n + 2$ on division by $15$, and that $a_{3n+2}$ is the remainder of $a_n + 9$ on division by $15$, for every whole number $n$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 2$ on division by $15$, and the remainder of $t + 9$ on division by $15$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
        "reason": "Substitution sequence: this is the problem as given; call the single term $0$ row $0$, and the row made from row $j$ by the replacement row $j + 1$."
      },
      {
        "step": "The term in place $n$ of a row gives the terms in places $3n$, $3n + 1$ and $3n + 2$ of the next row.",
        "reason": "Substitution sequence: the $n$ terms before it give $3n$ terms, which fill the places $0$ to $3n - 1$."
      },
      {
        "step": "Row $1$ starts with row $0$.",
        "reason": "Base case: row $0$ is $0$, and row $1$ is $0$, $2$, $9$, since $2$ and $9$ are below $15$."
      },
      {
        "step": "Assume that row $j$ starts with row $j - 1$, for some whole number $j$ from $1$ up.",
        "reason": "Inductive assumption: the claim at $j$."
      },
      {
        "step": "Then row $j + 1$ starts with row $j$.",
        "reason": "Inductive step: by line 4 the terms of row $j - 1$ open row $j$; by line 2 what they give opens row $j + 1$, and what they give is row $j$."
      },
      {
        "step": "So every row starts with the row before it, and the term in place $n$ is the same number $a_n$ in every row that has such a place.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 and 5."
      },
      {
        "step": "So $a_{3n} = a_n$, $a_{3n+1}$ is the remainder of $a_n + 2$ on division by $15$, and $a_{3n+2}$ is the remainder of $a_n + 9$ on division by $15$, for every whole number $n$.",
        "reason": "Substitution sequence: by line 6 the term in place $n$ of a row is $a_n$; by line 2 its three terms stand in places $3n$, $3n + 1$ and $3n + 2$ of the next row, and by line 6 these are $a_{3n}$, $a_{3n+1}$ and $a_{3n+2}$."
      }
    ]
  },
  {
    "id": "t243-k1-p13",
    "topic": "self-similar-sequences",
    "kind": "t243-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{3n} = a_n$, that $a_{3n+1}$ is the remainder of $a_n + 10$ on division by $13$, and that $a_{3n+2}$ is the remainder of $a_n + 1$ on division by $13$, for every whole number $n$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 10$ on division by $13$, and the remainder of $t + 1$ on division by $13$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{3n} = a_n$, that $a_{3n+1}$ is the remainder of $a_n + 10$ on division by $13$, and that $a_{3n+2}$ is the remainder of $a_n + 1$ on division by $13$, for every whole number $n$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 10$ on division by $13$, and the remainder of $t + 1$ on division by $13$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
        "reason": "Substitution sequence: this is the problem as given; call the single term $0$ row $0$, and the row made from row $j$ by the replacement row $j + 1$."
      },
      {
        "step": "The term in place $n$ of a row gives the terms in places $3n$, $3n + 1$ and $3n + 2$ of the next row.",
        "reason": "Substitution sequence: the $n$ terms before it give $3n$ terms, which fill the places $0$ to $3n - 1$."
      },
      {
        "step": "Row $1$ starts with row $0$.",
        "reason": "Base case: row $0$ is $0$, and row $1$ is $0$, $10$, $1$, since $10$ and $1$ are below $13$."
      },
      {
        "step": "Assume that row $j$ starts with row $j - 1$, for some whole number $j$ from $1$ up.",
        "reason": "Inductive assumption: the claim at $j$."
      },
      {
        "step": "Then row $j + 1$ starts with row $j$.",
        "reason": "Inductive step: by line 4 the terms of row $j - 1$ open row $j$; by line 2 what they give opens row $j + 1$, and what they give is row $j$."
      },
      {
        "step": "So every row starts with the row before it, and the term in place $n$ is the same number $a_n$ in every row that has such a place.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 and 5."
      },
      {
        "step": "So $a_{3n} = a_n$, $a_{3n+1}$ is the remainder of $a_n + 10$ on division by $13$, and $a_{3n+2}$ is the remainder of $a_n + 1$ on division by $13$, for every whole number $n$.",
        "reason": "Substitution sequence: by line 6 the term in place $n$ of a row is $a_n$; by line 2 its three terms stand in places $3n$, $3n + 1$ and $3n + 2$ of the next row, and by line 6 these are $a_{3n}$, $a_{3n+1}$ and $a_{3n+2}$."
      }
    ]
  },
  {
    "id": "t243-k1-p14",
    "topic": "self-similar-sequences",
    "kind": "t243-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{3n} = a_n$, that $a_{3n+1}$ is the remainder of $a_n + 7$ on division by $9$, and that $a_{3n+2}$ is the remainder of $a_n + 1$ on division by $9$, for every whole number $n$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 7$ on division by $9$, and the remainder of $t + 1$ on division by $9$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{3n} = a_n$, that $a_{3n+1}$ is the remainder of $a_n + 7$ on division by $9$, and that $a_{3n+2}$ is the remainder of $a_n + 1$ on division by $9$, for every whole number $n$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 7$ on division by $9$, and the remainder of $t + 1$ on division by $9$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
        "reason": "Substitution sequence: this is the problem as given; call the single term $0$ row $0$, and the row made from row $j$ by the replacement row $j + 1$."
      },
      {
        "step": "The term in place $n$ of a row gives the terms in places $3n$, $3n + 1$ and $3n + 2$ of the next row.",
        "reason": "Substitution sequence: the $n$ terms before it give $3n$ terms, which fill the places $0$ to $3n - 1$."
      },
      {
        "step": "Row $1$ starts with row $0$.",
        "reason": "Base case: row $0$ is $0$, and row $1$ is $0$, $7$, $1$, since $7$ and $1$ are below $9$."
      },
      {
        "step": "Assume that row $j$ starts with row $j - 1$, for some whole number $j$ from $1$ up.",
        "reason": "Inductive assumption: the claim at $j$."
      },
      {
        "step": "Then row $j + 1$ starts with row $j$.",
        "reason": "Inductive step: by line 4 the terms of row $j - 1$ open row $j$; by line 2 what they give opens row $j + 1$, and what they give is row $j$."
      },
      {
        "step": "So every row starts with the row before it, and the term in place $n$ is the same number $a_n$ in every row that has such a place.",
        "reason": "Induction: the base case is line 3 and the inductive step is lines 4 and 5."
      },
      {
        "step": "So $a_{3n} = a_n$, $a_{3n+1}$ is the remainder of $a_n + 7$ on division by $9$, and $a_{3n+2}$ is the remainder of $a_n + 1$ on division by $9$, for every whole number $n$.",
        "reason": "Substitution sequence: by line 6 the term in place $n$ of a row is $a_n$; by line 2 its three terms stand in places $3n$, $3n + 1$ and $3n + 2$ of the next row, and by line 6 these are $a_{3n}$, $a_{3n+1}$ and $a_{3n+2}$."
      }
    ]
  },
  {
    "id": "t243-k2-p01",
    "topic": "self-similar-sequences",
    "kind": "t243-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the sequence is not periodic, where the sequence is made as follows: start with the single term $0$, and again and again replace every term of the row by its block, where each $0$ is replaced by the block $0$, $0$, $1$, $0$, $1$ and each $1$ by the block $0$, $1$, $1$, $0$; the rows grow into the sequence.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence is not periodic, where the sequence is made as follows: start with the single term $0$, and again and again replace every term of the row by its block, where each $0$ is replaced by the block $0$, $0$, $1$, $0$, $1$ and each $1$ by the block $0$, $1$, $1$, $0$; the rows grow into the sequence.",
        "reason": "Substitution sequence: this is the problem as given; the block for $0$ starts with $0$, so each row starts with the row before it and the rows grow into one sequence."
      },
      {
        "step": "Let a row of $k$ zeros and $m$ ones turn, by the replacement, into a row of $u$ zeros and $v$ ones, and look for a positive number $y$ and a number $c$ with $u - yv = c(k - ym)$ for every row of zeros and ones.",
        "reason": "Substitution sequence: the replacement turns the numbers of zeros and ones of a row into those of the next row; such a $y$ is the ratio of zeros to ones that the replacement keeps."
      },
      {
        "step": "$u = 3k + 2m$",
        "reason": "Substitution sequence: the block for $0$ has $3$ of its terms equal to $0$ and the block for $1$ has $2$, and the new row is $k$ blocks for $0$ and $m$ blocks for $1$."
      },
      {
        "step": "$v = 2k + 2m$",
        "reason": "Substitution sequence: the block for $0$ has $2$ of its terms equal to $1$ and the block for $1$ has $2$."
      },
      {
        "step": "$u - yv = (3 - 2y)k + (2 - 2y)m$",
        "reason": "Collecting like terms: lines 3 and 4 go into $u - yv$, and the terms in $k$ and the terms in $m$ are collected."
      },
      {
        "step": "$c = 3 - 2y$",
        "reason": "Substituting a value: the row of the single term $0$ has $k = 1$ and $m = 0$, so by line 5 the equation $u - yv = c(k - ym)$ reads $3 - 2y = c$."
      },
      {
        "step": "$2 - 2y = -cy$",
        "reason": "Substituting a value: the row of the single term $1$ has $k = 0$ and $m = 1$, so by line 5 the equation $u - yv = c(k - ym)$ reads $2 - 2y = -cy$."
      },
      {
        "step": "$2 - 2y = -(3 - 2y)y$",
        "reason": "Substituting a value: line 6 goes into line 7."
      },
      {
        "step": "$2 - 2y = -3y + 2y^2$",
        "reason": "Multiplying out: each term of the bracket is multiplied by $-y$."
      },
      {
        "step": "$2y^2 - y - 2 = 0$",
        "reason": "Adding the same number to both sides: $2 - 2y$ is taken from both sides, and the terms in $y$ are collected."
      },
      {
        "step": "Each number $y$ with $2y^2 - y - 2 = 0$ fits: with $c = 3 - 2y$, line 5 reads $u - yv = ck - cym$, which is $c(k - ym)$.",
        "reason": "Common factor: lines 10, 9 and 8 read backwards give $2 - 2y = -cy$, the number in front of $m$ in line 5."
      },
      {
        "step": "So $y = \\dfrac{1 + \\sqrt{17}}{4}$ or $y = \\dfrac{1 - \\sqrt{17}}{4}$.",
        "reason": "Quadratic formula: the discriminant is $(-1)^2 - 4 \\cdot 2 \\cdot (-2) = 17$."
      },
      {
        "step": "So $y = \\dfrac{1 + \\sqrt{17}}{4}$.",
        "reason": "Positive square root, from arithmetic: $17$ is above $1^2 = 1$, so $\\sqrt{17}$ is above $1$ and the second value is negative, while $y$ is positive."
      },
      {
        "step": "The number $y$ is irrational.",
        "reason": "Irrational square roots, from arithmetic: $17$ lies between $4^2 = 16$ and $5^2 = 25$, so it is no perfect square and $\\sqrt{17}$ is irrational; a rational $y$ would make $\\sqrt{17} = 4y - 1$ rational."
      },
      {
        "step": "Suppose the sequence has a period $p$, and let the row $B$ of its first $p$ terms have $k$ zeros and $m$ ones.",
        "reason": "Period: each term equals the term $p$ places on, so the sequence is $B$ written again and again."
      },
      {
        "step": "Replacing every term of the sequence by its block gives the sequence again.",
        "reason": "Substitution sequence: the block for $0$ starts with $0$, and the sequence starts with $0$."
      },
      {
        "step": "Let $C$ be the row that $B$ turns into, with $u$ zeros and $v$ ones; the sequence is $C$ written again and again.",
        "reason": "Substitution sequence: replacing the terms of $B$, $B$, $B$ and so on gives $C$, $C$, $C$ and so on, which by line 16 is the sequence."
      },
      {
        "step": "The first $p(u + v)$ terms of the sequence are $u + v$ copies of $B$, and they are $p$ copies of $C$.",
        "reason": "Period: by lines 15 and 17; $B$ has $p$ terms and $C$ has $u + v$ terms."
      },
      {
        "step": "$(u + v)k = pu$",
        "reason": "Multiplication as repeated addition, from arithmetic: the zeros among these terms are counted in the copies of $B$ and in the copies of $C$."
      },
      {
        "step": "$(u + v)m = pv$",
        "reason": "Multiplication as repeated addition, from arithmetic: the ones among these terms are counted in the copies of $B$ and in the copies of $C$."
      },
      {
        "step": "$p(u - yv) = (u + v)(k - ym)$",
        "reason": "Common factor: by lines 19 and 20, $pu - ypv = (u + v)k - y(u + v)m$, and $p$ and $u + v$ are taken out."
      },
      {
        "step": "$pc(k - ym) = (u + v)(k - ym)$",
        "reason": "Substituting a value: $u - yv = c(k - ym)$ with $c = 3 - 2y$, by lines 11 and 13."
      },
      {
        "step": "The number $m$ is not $0$.",
        "reason": "Period: the block for $0$ holds a $1$, so the sequence holds a $1$, in the block of its first term, and every term lies in a copy of $B$."
      },
      {
        "step": "The number $k - ym$ is not $0$.",
        "reason": "Irrational number, from arithmetic: $k = ym$ would make $y = \\dfrac{k}{m}$, a quotient of whole numbers with $m$ not $0$ by line 23, against line 14."
      },
      {
        "step": "$pc = u + v$",
        "reason": "Dividing both sides by a nonzero number: both sides of line 22 are divided by $k - ym$, which is not $0$ by line 24."
      },
      {
        "step": "So $y = \\dfrac{3p - u - v}{2p}$.",
        "reason": "Isolating the variable: $c = 3 - 2y$ from line 6 goes into line 25, which gives $p(3 - 2y) = u + v$; this is solved for $y$, and $p$ is not $0$."
      },
      {
        "step": "So $y$ is a rational number.",
        "reason": "Irrational number, from arithmetic: by line 26 the number $y$ is a quotient of integers, since $p$, $u$ and $v$ are whole numbers and $p$ is not $0$."
      },
      {
        "step": "So the sequence is not periodic.",
        "reason": "Irrational number, from arithmetic: lines 14 and 27 cannot both hold, so the supposition of line 15 fails for every $p$."
      }
    ]
  },
  {
    "id": "t243-k2-p02",
    "topic": "self-similar-sequences",
    "kind": "t243-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that the sequence is not periodic, where $a_0 = 0$, $a_{2n} = a_n$ and $a_{2n+1}$ is the remainder of $a_n + 42$ on division by $44$, for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence is not periodic, where $a_0 = 0$, $a_{2n} = a_n$ and $a_{2n+1}$ is the remainder of $a_n + 42$ on division by $44$, for every whole number $n$.",
        "reason": "Period: this is the problem as given; $a_0$ starts the sequence, and the rule for even places and the rule for odd places give every later term from an earlier one."
      },
      {
        "step": "The term $a_{4n+3}$ is the remainder of $a_{2n+1} + 42$ on division by $44$.",
        "reason": "Recursion: the rule for odd places with $2n + 1$ in place of $n$, since $4n + 3 = 2(2n + 1) + 1$."
      },
      {
        "step": "The number $a_{2n+1} + 42$ leaves the same remainder on division by $44$ as $a_n + 84$.",
        "reason": "Divisibility of integers, from arithmetic: $a_{2n+1}$ is the remainder of $a_n + 42$, so the two differ by a multiple of $44$, and $42 + 42 = 84$."
      },
      {
        "step": "$84 = 44 + 40$",
        "reason": "Division-with-remainder, from arithmetic: $84$ leaves the remainder $40$ on division by $44$."
      },
      {
        "step": "So $a_{4n+3}$ is the remainder of $a_n + 40$ on division by $44$, for every whole number $n$.",
        "reason": "Divisibility of integers, from arithmetic: by lines 3 and 4 the numbers $a_{2n+1} + 42$ and $a_n + 40$ differ by a multiple of $44$, so line 2 gives the remainder of $a_n + 40$."
      },
      {
        "step": "Suppose the sequence has a period, and let $p$ be its least period.",
        "reason": "A nonempty set of whole numbers has a least member, from arithmetic: a period is a whole number from $1$ up, and by the supposition there is one."
      },
      {
        "step": "If $p = 2q$ for a whole number $q$, then $a_{n+q} = a_{2n+2q}$ for every whole number $n$.",
        "reason": "Recursion: the rule for even places with $n + q$ in place of $n$."
      },
      {
        "step": "Then $a_{2n+2q} = a_{2n}$.",
        "reason": "Period: $2q = p$ is a period."
      },
      {
        "step": "Then $a_{n+q} = a_n$ for every whole number $n$.",
        "reason": "Transitive property: lines 7 and 8, and $a_{2n} = a_n$ by the rule for even places."
      },
      {
        "step": "So $p$ is odd: $p = 2h + 1$ for a whole number $h$.",
        "reason": "Period: by line 9 an even $p$ would give the period $q$, which is below the least period $p$."
      },
      {
        "step": "The term $a_{2n+p}$ is the remainder of $a_{n+h} + 42$ on division by $44$.",
        "reason": "Recursion: the rule for odd places with $n + h$ in place of $n$, since $2n + p = 2(n + h) + 1$."
      },
      {
        "step": "$a_{2n+p} = a_n$",
        "reason": "Period: $a_{2n+p} = a_{2n}$, and $a_{2n} = a_n$ by the rule for even places."
      },
      {
        "step": "So $a_{n+h} + 42$ leaves the same remainder on division by $44$ as $a_n$, for every whole number $n$.",
        "reason": "Divisibility of integers, from arithmetic: by lines 11 and 12, $a_n$ is the remainder of $a_{n+h} + 42$."
      },
      {
        "step": "$a_{2n+1+p} = a_{n+h+1}$",
        "reason": "Recursion: the rule for even places with $n + h + 1$ in place of $n$, since $2n + 1 + p = 2(n + h + 1)$."
      },
      {
        "step": "The term $a_{2n+1+p}$ is the remainder of $a_n + 42$ on division by $44$.",
        "reason": "Period: $a_{2n+1+p} = a_{2n+1}$, and the rule for odd places gives $a_{2n+1}$."
      },
      {
        "step": "So $a_{n+h+1}$ leaves the same remainder on division by $44$ as $a_n + 42$, for every whole number $n$.",
        "reason": "Transitive property: lines 14 and 15."
      },
      {
        "step": "The number $a_{n+h+1} + 42$ leaves the same remainder on division by $44$ as $a_{n+1}$.",
        "reason": "Substituting a value: $n + 1$ in place of $n$ in line 13."
      },
      {
        "step": "So $a_{n+1}$ leaves the same remainder on division by $44$ as $a_n + 84$.",
        "reason": "Divisibility of integers, from arithmetic: by line 16 the numbers $a_{n+h+1} + 42$ and $a_n + 42 + 42$ differ by a multiple of $44$, and line 17."
      },
      {
        "step": "Every term is a whole number from $0$ to $43$.",
        "reason": "Induction: $a_0 = 0$, and each later term is an earlier term or a remainder on division by $44$."
      },
      {
        "step": "So $a_{n+1} = a_{4n+3}$ for every whole number $n$.",
        "reason": "Divisibility of integers, from arithmetic: by lines 4 and 18, $a_{n+1}$ leaves the same remainder as $a_n + 40$, and by line 19 it is that remainder, which is $a_{4n+3}$ by line 5."
      },
      {
        "step": "$a_1 = a_3$",
        "reason": "Substituting a value: $n = 0$ in line 20."
      },
      {
        "step": "$a_1 = 42$",
        "reason": "Recursion: the rule for odd places at $n = 0$ gives the remainder of $0 + 42$ on division by $44$, and $42$ is below $44$."
      },
      {
        "step": "$a_3 = 40$",
        "reason": "Substituting a value: $n = 0$ in line 5 gives the remainder of $0 + 40$ on division by $44$, and $40$ is below $44$."
      },
      {
        "step": "So the sequence is not periodic.",
        "reason": "Period: lines 21, 22 and 23 give $42 = 40$, which is false, so the supposition of line 6 fails."
      }
    ]
  },
  {
    "id": "t243-k2-p03",
    "topic": "self-similar-sequences",
    "kind": "t243-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that the sequence is not periodic, where $a_0 = 0$, $a_{2n} = a_n$ and $a_{2n+1}$ is the remainder of $a_n + 37$ on division by $40$, for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence is not periodic, where $a_0 = 0$, $a_{2n} = a_n$ and $a_{2n+1}$ is the remainder of $a_n + 37$ on division by $40$, for every whole number $n$.",
        "reason": "Period: this is the problem as given; $a_0$ starts the sequence, and the rule for even places and the rule for odd places give every later term from an earlier one."
      },
      {
        "step": "The term $a_{4n+3}$ is the remainder of $a_{2n+1} + 37$ on division by $40$.",
        "reason": "Recursion: the rule for odd places with $2n + 1$ in place of $n$, since $4n + 3 = 2(2n + 1) + 1$."
      },
      {
        "step": "The number $a_{2n+1} + 37$ leaves the same remainder on division by $40$ as $a_n + 74$.",
        "reason": "Divisibility of integers, from arithmetic: $a_{2n+1}$ is the remainder of $a_n + 37$, so the two differ by a multiple of $40$, and $37 + 37 = 74$."
      },
      {
        "step": "$74 = 40 + 34$",
        "reason": "Division-with-remainder, from arithmetic: $74$ leaves the remainder $34$ on division by $40$."
      },
      {
        "step": "So $a_{4n+3}$ is the remainder of $a_n + 34$ on division by $40$, for every whole number $n$.",
        "reason": "Divisibility of integers, from arithmetic: by lines 3 and 4 the numbers $a_{2n+1} + 37$ and $a_n + 34$ differ by a multiple of $40$, so line 2 gives the remainder of $a_n + 34$."
      },
      {
        "step": "Suppose the sequence has a period, and let $p$ be its least period.",
        "reason": "A nonempty set of whole numbers has a least member, from arithmetic: a period is a whole number from $1$ up, and by the supposition there is one."
      },
      {
        "step": "If $p = 2q$ for a whole number $q$, then $a_{n+q} = a_{2n+2q}$ for every whole number $n$.",
        "reason": "Recursion: the rule for even places with $n + q$ in place of $n$."
      },
      {
        "step": "Then $a_{2n+2q} = a_{2n}$.",
        "reason": "Period: $2q = p$ is a period."
      },
      {
        "step": "Then $a_{n+q} = a_n$ for every whole number $n$.",
        "reason": "Transitive property: lines 7 and 8, and $a_{2n} = a_n$ by the rule for even places."
      },
      {
        "step": "So $p$ is odd: $p = 2h + 1$ for a whole number $h$.",
        "reason": "Period: by line 9 an even $p$ would give the period $q$, which is below the least period $p$."
      },
      {
        "step": "The term $a_{2n+p}$ is the remainder of $a_{n+h} + 37$ on division by $40$.",
        "reason": "Recursion: the rule for odd places with $n + h$ in place of $n$, since $2n + p = 2(n + h) + 1$."
      },
      {
        "step": "$a_{2n+p} = a_n$",
        "reason": "Period: $a_{2n+p} = a_{2n}$, and $a_{2n} = a_n$ by the rule for even places."
      },
      {
        "step": "So $a_{n+h} + 37$ leaves the same remainder on division by $40$ as $a_n$, for every whole number $n$.",
        "reason": "Divisibility of integers, from arithmetic: by lines 11 and 12, $a_n$ is the remainder of $a_{n+h} + 37$."
      },
      {
        "step": "$a_{2n+1+p} = a_{n+h+1}$",
        "reason": "Recursion: the rule for even places with $n + h + 1$ in place of $n$, since $2n + 1 + p = 2(n + h + 1)$."
      },
      {
        "step": "The term $a_{2n+1+p}$ is the remainder of $a_n + 37$ on division by $40$.",
        "reason": "Period: $a_{2n+1+p} = a_{2n+1}$, and the rule for odd places gives $a_{2n+1}$."
      },
      {
        "step": "So $a_{n+h+1}$ leaves the same remainder on division by $40$ as $a_n + 37$, for every whole number $n$.",
        "reason": "Transitive property: lines 14 and 15."
      },
      {
        "step": "The number $a_{n+h+1} + 37$ leaves the same remainder on division by $40$ as $a_{n+1}$.",
        "reason": "Substituting a value: $n + 1$ in place of $n$ in line 13."
      },
      {
        "step": "So $a_{n+1}$ leaves the same remainder on division by $40$ as $a_n + 74$.",
        "reason": "Divisibility of integers, from arithmetic: by line 16 the numbers $a_{n+h+1} + 37$ and $a_n + 37 + 37$ differ by a multiple of $40$, and line 17."
      },
      {
        "step": "Every term is a whole number from $0$ to $39$.",
        "reason": "Induction: $a_0 = 0$, and each later term is an earlier term or a remainder on division by $40$."
      },
      {
        "step": "So $a_{n+1} = a_{4n+3}$ for every whole number $n$.",
        "reason": "Divisibility of integers, from arithmetic: by lines 4 and 18, $a_{n+1}$ leaves the same remainder as $a_n + 34$, and by line 19 it is that remainder, which is $a_{4n+3}$ by line 5."
      },
      {
        "step": "$a_1 = a_3$",
        "reason": "Substituting a value: $n = 0$ in line 20."
      },
      {
        "step": "$a_1 = 37$",
        "reason": "Recursion: the rule for odd places at $n = 0$ gives the remainder of $0 + 37$ on division by $40$, and $37$ is below $40$."
      },
      {
        "step": "$a_3 = 34$",
        "reason": "Substituting a value: $n = 0$ in line 5 gives the remainder of $0 + 34$ on division by $40$, and $34$ is below $40$."
      },
      {
        "step": "So the sequence is not periodic.",
        "reason": "Period: lines 21, 22 and 23 give $37 = 34$, which is false, so the supposition of line 6 fails."
      }
    ]
  },
  {
    "id": "t243-k2-p04",
    "topic": "self-similar-sequences",
    "kind": "t243-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that the sequence is not periodic, where $a_0 = 0$, $a_{2n} = a_n$ and $a_{2n+1}$ is the remainder of $a_n + 48$ on division by $53$, for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence is not periodic, where $a_0 = 0$, $a_{2n} = a_n$ and $a_{2n+1}$ is the remainder of $a_n + 48$ on division by $53$, for every whole number $n$.",
        "reason": "Period: this is the problem as given; $a_0$ starts the sequence, and the rule for even places and the rule for odd places give every later term from an earlier one."
      },
      {
        "step": "The term $a_{4n+3}$ is the remainder of $a_{2n+1} + 48$ on division by $53$.",
        "reason": "Recursion: the rule for odd places with $2n + 1$ in place of $n$, since $4n + 3 = 2(2n + 1) + 1$."
      },
      {
        "step": "The number $a_{2n+1} + 48$ leaves the same remainder on division by $53$ as $a_n + 96$.",
        "reason": "Divisibility of integers, from arithmetic: $a_{2n+1}$ is the remainder of $a_n + 48$, so the two differ by a multiple of $53$, and $48 + 48 = 96$."
      },
      {
        "step": "$96 = 53 + 43$",
        "reason": "Division-with-remainder, from arithmetic: $96$ leaves the remainder $43$ on division by $53$."
      },
      {
        "step": "So $a_{4n+3}$ is the remainder of $a_n + 43$ on division by $53$, for every whole number $n$.",
        "reason": "Divisibility of integers, from arithmetic: by lines 3 and 4 the numbers $a_{2n+1} + 48$ and $a_n + 43$ differ by a multiple of $53$, so line 2 gives the remainder of $a_n + 43$."
      },
      {
        "step": "Suppose the sequence has a period, and let $p$ be its least period.",
        "reason": "A nonempty set of whole numbers has a least member, from arithmetic: a period is a whole number from $1$ up, and by the supposition there is one."
      },
      {
        "step": "If $p = 2q$ for a whole number $q$, then $a_{n+q} = a_{2n+2q}$ for every whole number $n$.",
        "reason": "Recursion: the rule for even places with $n + q$ in place of $n$."
      },
      {
        "step": "Then $a_{2n+2q} = a_{2n}$.",
        "reason": "Period: $2q = p$ is a period."
      },
      {
        "step": "Then $a_{n+q} = a_n$ for every whole number $n$.",
        "reason": "Transitive property: lines 7 and 8, and $a_{2n} = a_n$ by the rule for even places."
      },
      {
        "step": "So $p$ is odd: $p = 2h + 1$ for a whole number $h$.",
        "reason": "Period: by line 9 an even $p$ would give the period $q$, which is below the least period $p$."
      },
      {
        "step": "The term $a_{2n+p}$ is the remainder of $a_{n+h} + 48$ on division by $53$.",
        "reason": "Recursion: the rule for odd places with $n + h$ in place of $n$, since $2n + p = 2(n + h) + 1$."
      },
      {
        "step": "$a_{2n+p} = a_n$",
        "reason": "Period: $a_{2n+p} = a_{2n}$, and $a_{2n} = a_n$ by the rule for even places."
      },
      {
        "step": "So $a_{n+h} + 48$ leaves the same remainder on division by $53$ as $a_n$, for every whole number $n$.",
        "reason": "Divisibility of integers, from arithmetic: by lines 11 and 12, $a_n$ is the remainder of $a_{n+h} + 48$."
      },
      {
        "step": "$a_{2n+1+p} = a_{n+h+1}$",
        "reason": "Recursion: the rule for even places with $n + h + 1$ in place of $n$, since $2n + 1 + p = 2(n + h + 1)$."
      },
      {
        "step": "The term $a_{2n+1+p}$ is the remainder of $a_n + 48$ on division by $53$.",
        "reason": "Period: $a_{2n+1+p} = a_{2n+1}$, and the rule for odd places gives $a_{2n+1}$."
      },
      {
        "step": "So $a_{n+h+1}$ leaves the same remainder on division by $53$ as $a_n + 48$, for every whole number $n$.",
        "reason": "Transitive property: lines 14 and 15."
      },
      {
        "step": "The number $a_{n+h+1} + 48$ leaves the same remainder on division by $53$ as $a_{n+1}$.",
        "reason": "Substituting a value: $n + 1$ in place of $n$ in line 13."
      },
      {
        "step": "So $a_{n+1}$ leaves the same remainder on division by $53$ as $a_n + 96$.",
        "reason": "Divisibility of integers, from arithmetic: by line 16 the numbers $a_{n+h+1} + 48$ and $a_n + 48 + 48$ differ by a multiple of $53$, and line 17."
      },
      {
        "step": "Every term is a whole number from $0$ to $52$.",
        "reason": "Induction: $a_0 = 0$, and each later term is an earlier term or a remainder on division by $53$."
      },
      {
        "step": "So $a_{n+1} = a_{4n+3}$ for every whole number $n$.",
        "reason": "Divisibility of integers, from arithmetic: by lines 4 and 18, $a_{n+1}$ leaves the same remainder as $a_n + 43$, and by line 19 it is that remainder, which is $a_{4n+3}$ by line 5."
      },
      {
        "step": "$a_1 = a_3$",
        "reason": "Substituting a value: $n = 0$ in line 20."
      },
      {
        "step": "$a_1 = 48$",
        "reason": "Recursion: the rule for odd places at $n = 0$ gives the remainder of $0 + 48$ on division by $53$, and $48$ is below $53$."
      },
      {
        "step": "$a_3 = 43$",
        "reason": "Substituting a value: $n = 0$ in line 5 gives the remainder of $0 + 43$ on division by $53$, and $43$ is below $53$."
      },
      {
        "step": "So the sequence is not periodic.",
        "reason": "Period: lines 21, 22 and 23 give $48 = 43$, which is false, so the supposition of line 6 fails."
      }
    ]
  },
  {
    "id": "t243-k2-p05",
    "topic": "self-similar-sequences",
    "kind": "t243-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the sequence is not periodic, where the sequence is made as follows: start with the single term $0$, and again and again replace every term of the row by its block, where each $0$ is replaced by the block $0$, $0$, $1$, $1$, $1$, $1$ and each $1$ by the block $0$, $1$, $0$; the rows grow into the sequence.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence is not periodic, where the sequence is made as follows: start with the single term $0$, and again and again replace every term of the row by its block, where each $0$ is replaced by the block $0$, $0$, $1$, $1$, $1$, $1$ and each $1$ by the block $0$, $1$, $0$; the rows grow into the sequence.",
        "reason": "Substitution sequence: this is the problem as given; the block for $0$ starts with $0$, so each row starts with the row before it and the rows grow into one sequence."
      },
      {
        "step": "Let a row of $k$ zeros and $m$ ones turn, by the replacement, into a row of $u$ zeros and $v$ ones, and look for a positive number $y$ and a number $c$ with $u - yv = c(k - ym)$ for every row of zeros and ones.",
        "reason": "Substitution sequence: the replacement turns the numbers of zeros and ones of a row into those of the next row; such a $y$ is the ratio of zeros to ones that the replacement keeps."
      },
      {
        "step": "$u = 2k + 2m$",
        "reason": "Substitution sequence: the block for $0$ has $2$ of its terms equal to $0$ and the block for $1$ has $2$, and the new row is $k$ blocks for $0$ and $m$ blocks for $1$."
      },
      {
        "step": "$v = 4k + m$",
        "reason": "Substitution sequence: the block for $0$ has $4$ of its terms equal to $1$ and the block for $1$ has $1$."
      },
      {
        "step": "$u - yv = (2 - 4y)k + (2 - y)m$",
        "reason": "Collecting like terms: lines 3 and 4 go into $u - yv$, and the terms in $k$ and the terms in $m$ are collected."
      },
      {
        "step": "$c = 2 - 4y$",
        "reason": "Substituting a value: the row of the single term $0$ has $k = 1$ and $m = 0$, so by line 5 the equation $u - yv = c(k - ym)$ reads $2 - 4y = c$."
      },
      {
        "step": "$2 - y = -cy$",
        "reason": "Substituting a value: the row of the single term $1$ has $k = 0$ and $m = 1$, so by line 5 the equation $u - yv = c(k - ym)$ reads $2 - y = -cy$."
      },
      {
        "step": "$2 - y = -(2 - 4y)y$",
        "reason": "Substituting a value: line 6 goes into line 7."
      },
      {
        "step": "$2 - y = -2y + 4y^2$",
        "reason": "Multiplying out: each term of the bracket is multiplied by $-y$."
      },
      {
        "step": "$4y^2 - y - 2 = 0$",
        "reason": "Adding the same number to both sides: $2 - y$ is taken from both sides, and the terms in $y$ are collected."
      },
      {
        "step": "Each number $y$ with $4y^2 - y - 2 = 0$ fits: with $c = 2 - 4y$, line 5 reads $u - yv = ck - cym$, which is $c(k - ym)$.",
        "reason": "Common factor: lines 10, 9 and 8 read backwards give $2 - y = -cy$, the number in front of $m$ in line 5."
      },
      {
        "step": "So $y = \\dfrac{1 + \\sqrt{33}}{8}$ or $y = \\dfrac{1 - \\sqrt{33}}{8}$.",
        "reason": "Quadratic formula: the discriminant is $(-1)^2 - 4 \\cdot 4 \\cdot (-2) = 33$."
      },
      {
        "step": "So $y = \\dfrac{1 + \\sqrt{33}}{8}$.",
        "reason": "Positive square root, from arithmetic: $33$ is above $1^2 = 1$, so $\\sqrt{33}$ is above $1$ and the second value is negative, while $y$ is positive."
      },
      {
        "step": "The number $y$ is irrational.",
        "reason": "Irrational square roots, from arithmetic: $33$ lies between $5^2 = 25$ and $6^2 = 36$, so it is no perfect square and $\\sqrt{33}$ is irrational; a rational $y$ would make $\\sqrt{33} = 8y - 1$ rational."
      },
      {
        "step": "Suppose the sequence has a period $p$, and let the row $B$ of its first $p$ terms have $k$ zeros and $m$ ones.",
        "reason": "Period: each term equals the term $p$ places on, so the sequence is $B$ written again and again."
      },
      {
        "step": "Replacing every term of the sequence by its block gives the sequence again.",
        "reason": "Substitution sequence: the block for $0$ starts with $0$, and the sequence starts with $0$."
      },
      {
        "step": "Let $C$ be the row that $B$ turns into, with $u$ zeros and $v$ ones; the sequence is $C$ written again and again.",
        "reason": "Substitution sequence: replacing the terms of $B$, $B$, $B$ and so on gives $C$, $C$, $C$ and so on, which by line 16 is the sequence."
      },
      {
        "step": "The first $p(u + v)$ terms of the sequence are $u + v$ copies of $B$, and they are $p$ copies of $C$.",
        "reason": "Period: by lines 15 and 17; $B$ has $p$ terms and $C$ has $u + v$ terms."
      },
      {
        "step": "$(u + v)k = pu$",
        "reason": "Multiplication as repeated addition, from arithmetic: the zeros among these terms are counted in the copies of $B$ and in the copies of $C$."
      },
      {
        "step": "$(u + v)m = pv$",
        "reason": "Multiplication as repeated addition, from arithmetic: the ones among these terms are counted in the copies of $B$ and in the copies of $C$."
      },
      {
        "step": "$p(u - yv) = (u + v)(k - ym)$",
        "reason": "Common factor: by lines 19 and 20, $pu - ypv = (u + v)k - y(u + v)m$, and $p$ and $u + v$ are taken out."
      },
      {
        "step": "$pc(k - ym) = (u + v)(k - ym)$",
        "reason": "Substituting a value: $u - yv = c(k - ym)$ with $c = 2 - 4y$, by lines 11 and 13."
      },
      {
        "step": "The number $m$ is not $0$.",
        "reason": "Period: the block for $0$ holds a $1$, so the sequence holds a $1$, in the block of its first term, and every term lies in a copy of $B$."
      },
      {
        "step": "The number $k - ym$ is not $0$.",
        "reason": "Irrational number, from arithmetic: $k = ym$ would make $y = \\dfrac{k}{m}$, a quotient of whole numbers with $m$ not $0$ by line 23, against line 14."
      },
      {
        "step": "$pc = u + v$",
        "reason": "Dividing both sides by a nonzero number: both sides of line 22 are divided by $k - ym$, which is not $0$ by line 24."
      },
      {
        "step": "So $y = \\dfrac{2p - u - v}{4p}$.",
        "reason": "Isolating the variable: $c = 2 - 4y$ from line 6 goes into line 25, which gives $p(2 - 4y) = u + v$; this is solved for $y$, and $p$ is not $0$."
      },
      {
        "step": "So $y$ is a rational number.",
        "reason": "Irrational number, from arithmetic: by line 26 the number $y$ is a quotient of integers, since $p$, $u$ and $v$ are whole numbers and $p$ is not $0$."
      },
      {
        "step": "So the sequence is not periodic.",
        "reason": "Irrational number, from arithmetic: lines 14 and 27 cannot both hold, so the supposition of line 15 fails for every $p$."
      }
    ]
  },
  {
    "id": "t243-k2-p06",
    "topic": "self-similar-sequences",
    "kind": "t243-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that the sequence is not periodic, where $a_0 = 0$, $a_{2n} = a_n$ and $a_{2n+1}$ is the remainder of $a_n + 28$ on division by $32$, for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence is not periodic, where $a_0 = 0$, $a_{2n} = a_n$ and $a_{2n+1}$ is the remainder of $a_n + 28$ on division by $32$, for every whole number $n$.",
        "reason": "Period: this is the problem as given; $a_0$ starts the sequence, and the rule for even places and the rule for odd places give every later term from an earlier one."
      },
      {
        "step": "The term $a_{4n+3}$ is the remainder of $a_{2n+1} + 28$ on division by $32$.",
        "reason": "Recursion: the rule for odd places with $2n + 1$ in place of $n$, since $4n + 3 = 2(2n + 1) + 1$."
      },
      {
        "step": "The number $a_{2n+1} + 28$ leaves the same remainder on division by $32$ as $a_n + 56$.",
        "reason": "Divisibility of integers, from arithmetic: $a_{2n+1}$ is the remainder of $a_n + 28$, so the two differ by a multiple of $32$, and $28 + 28 = 56$."
      },
      {
        "step": "$56 = 32 + 24$",
        "reason": "Division-with-remainder, from arithmetic: $56$ leaves the remainder $24$ on division by $32$."
      },
      {
        "step": "So $a_{4n+3}$ is the remainder of $a_n + 24$ on division by $32$, for every whole number $n$.",
        "reason": "Divisibility of integers, from arithmetic: by lines 3 and 4 the numbers $a_{2n+1} + 28$ and $a_n + 24$ differ by a multiple of $32$, so line 2 gives the remainder of $a_n + 24$."
      },
      {
        "step": "Suppose the sequence has a period, and let $p$ be its least period.",
        "reason": "A nonempty set of whole numbers has a least member, from arithmetic: a period is a whole number from $1$ up, and by the supposition there is one."
      },
      {
        "step": "If $p = 2q$ for a whole number $q$, then $a_{n+q} = a_{2n+2q}$ for every whole number $n$.",
        "reason": "Recursion: the rule for even places with $n + q$ in place of $n$."
      },
      {
        "step": "Then $a_{2n+2q} = a_{2n}$.",
        "reason": "Period: $2q = p$ is a period."
      },
      {
        "step": "Then $a_{n+q} = a_n$ for every whole number $n$.",
        "reason": "Transitive property: lines 7 and 8, and $a_{2n} = a_n$ by the rule for even places."
      },
      {
        "step": "So $p$ is odd: $p = 2h + 1$ for a whole number $h$.",
        "reason": "Period: by line 9 an even $p$ would give the period $q$, which is below the least period $p$."
      },
      {
        "step": "The term $a_{2n+p}$ is the remainder of $a_{n+h} + 28$ on division by $32$.",
        "reason": "Recursion: the rule for odd places with $n + h$ in place of $n$, since $2n + p = 2(n + h) + 1$."
      },
      {
        "step": "$a_{2n+p} = a_n$",
        "reason": "Period: $a_{2n+p} = a_{2n}$, and $a_{2n} = a_n$ by the rule for even places."
      },
      {
        "step": "So $a_{n+h} + 28$ leaves the same remainder on division by $32$ as $a_n$, for every whole number $n$.",
        "reason": "Divisibility of integers, from arithmetic: by lines 11 and 12, $a_n$ is the remainder of $a_{n+h} + 28$."
      },
      {
        "step": "$a_{2n+1+p} = a_{n+h+1}$",
        "reason": "Recursion: the rule for even places with $n + h + 1$ in place of $n$, since $2n + 1 + p = 2(n + h + 1)$."
      },
      {
        "step": "The term $a_{2n+1+p}$ is the remainder of $a_n + 28$ on division by $32$.",
        "reason": "Period: $a_{2n+1+p} = a_{2n+1}$, and the rule for odd places gives $a_{2n+1}$."
      },
      {
        "step": "So $a_{n+h+1}$ leaves the same remainder on division by $32$ as $a_n + 28$, for every whole number $n$.",
        "reason": "Transitive property: lines 14 and 15."
      },
      {
        "step": "The number $a_{n+h+1} + 28$ leaves the same remainder on division by $32$ as $a_{n+1}$.",
        "reason": "Substituting a value: $n + 1$ in place of $n$ in line 13."
      },
      {
        "step": "So $a_{n+1}$ leaves the same remainder on division by $32$ as $a_n + 56$.",
        "reason": "Divisibility of integers, from arithmetic: by line 16 the numbers $a_{n+h+1} + 28$ and $a_n + 28 + 28$ differ by a multiple of $32$, and line 17."
      },
      {
        "step": "Every term is a whole number from $0$ to $31$.",
        "reason": "Induction: $a_0 = 0$, and each later term is an earlier term or a remainder on division by $32$."
      },
      {
        "step": "So $a_{n+1} = a_{4n+3}$ for every whole number $n$.",
        "reason": "Divisibility of integers, from arithmetic: by lines 4 and 18, $a_{n+1}$ leaves the same remainder as $a_n + 24$, and by line 19 it is that remainder, which is $a_{4n+3}$ by line 5."
      },
      {
        "step": "$a_1 = a_3$",
        "reason": "Substituting a value: $n = 0$ in line 20."
      },
      {
        "step": "$a_1 = 28$",
        "reason": "Recursion: the rule for odd places at $n = 0$ gives the remainder of $0 + 28$ on division by $32$, and $28$ is below $32$."
      },
      {
        "step": "$a_3 = 24$",
        "reason": "Substituting a value: $n = 0$ in line 5 gives the remainder of $0 + 24$ on division by $32$, and $24$ is below $32$."
      },
      {
        "step": "So the sequence is not periodic.",
        "reason": "Period: lines 21, 22 and 23 give $28 = 24$, which is false, so the supposition of line 6 fails."
      }
    ]
  },
  {
    "id": "t243-k2-p07",
    "topic": "self-similar-sequences",
    "kind": "t243-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the sequence is not periodic, where the sequence is made as follows: start with the single term $0$, and again and again replace every term of the row by its block, where each $0$ is replaced by the block $0$, $1$, $1$, $0$, $1$ and each $1$ by the block $1$, $0$, $0$, $0$; the rows grow into the sequence.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence is not periodic, where the sequence is made as follows: start with the single term $0$, and again and again replace every term of the row by its block, where each $0$ is replaced by the block $0$, $1$, $1$, $0$, $1$ and each $1$ by the block $1$, $0$, $0$, $0$; the rows grow into the sequence.",
        "reason": "Substitution sequence: this is the problem as given; the block for $0$ starts with $0$, so each row starts with the row before it and the rows grow into one sequence."
      },
      {
        "step": "Let a row of $k$ zeros and $m$ ones turn, by the replacement, into a row of $u$ zeros and $v$ ones, and look for a positive number $y$ and a number $c$ with $u - yv = c(k - ym)$ for every row of zeros and ones.",
        "reason": "Substitution sequence: the replacement turns the numbers of zeros and ones of a row into those of the next row; such a $y$ is the ratio of zeros to ones that the replacement keeps."
      },
      {
        "step": "$u = 2k + 3m$",
        "reason": "Substitution sequence: the block for $0$ has $2$ of its terms equal to $0$ and the block for $1$ has $3$, and the new row is $k$ blocks for $0$ and $m$ blocks for $1$."
      },
      {
        "step": "$v = 3k + m$",
        "reason": "Substitution sequence: the block for $0$ has $3$ of its terms equal to $1$ and the block for $1$ has $1$."
      },
      {
        "step": "$u - yv = (2 - 3y)k + (3 - y)m$",
        "reason": "Collecting like terms: lines 3 and 4 go into $u - yv$, and the terms in $k$ and the terms in $m$ are collected."
      },
      {
        "step": "$c = 2 - 3y$",
        "reason": "Substituting a value: the row of the single term $0$ has $k = 1$ and $m = 0$, so by line 5 the equation $u - yv = c(k - ym)$ reads $2 - 3y = c$."
      },
      {
        "step": "$3 - y = -cy$",
        "reason": "Substituting a value: the row of the single term $1$ has $k = 0$ and $m = 1$, so by line 5 the equation $u - yv = c(k - ym)$ reads $3 - y = -cy$."
      },
      {
        "step": "$3 - y = -(2 - 3y)y$",
        "reason": "Substituting a value: line 6 goes into line 7."
      },
      {
        "step": "$3 - y = -2y + 3y^2$",
        "reason": "Multiplying out: each term of the bracket is multiplied by $-y$."
      },
      {
        "step": "$3y^2 - y - 3 = 0$",
        "reason": "Adding the same number to both sides: $3 - y$ is taken from both sides, and the terms in $y$ are collected."
      },
      {
        "step": "Each number $y$ with $3y^2 - y - 3 = 0$ fits: with $c = 2 - 3y$, line 5 reads $u - yv = ck - cym$, which is $c(k - ym)$.",
        "reason": "Common factor: lines 10, 9 and 8 read backwards give $3 - y = -cy$, the number in front of $m$ in line 5."
      },
      {
        "step": "So $y = \\dfrac{1 + \\sqrt{37}}{6}$ or $y = \\dfrac{1 - \\sqrt{37}}{6}$.",
        "reason": "Quadratic formula: the discriminant is $(-1)^2 - 4 \\cdot 3 \\cdot (-3) = 37$."
      },
      {
        "step": "So $y = \\dfrac{1 + \\sqrt{37}}{6}$.",
        "reason": "Positive square root, from arithmetic: $37$ is above $1^2 = 1$, so $\\sqrt{37}$ is above $1$ and the second value is negative, while $y$ is positive."
      },
      {
        "step": "The number $y$ is irrational.",
        "reason": "Irrational square roots, from arithmetic: $37$ lies between $6^2 = 36$ and $7^2 = 49$, so it is no perfect square and $\\sqrt{37}$ is irrational; a rational $y$ would make $\\sqrt{37} = 6y - 1$ rational."
      },
      {
        "step": "Suppose the sequence has a period $p$, and let the row $B$ of its first $p$ terms have $k$ zeros and $m$ ones.",
        "reason": "Period: each term equals the term $p$ places on, so the sequence is $B$ written again and again."
      },
      {
        "step": "Replacing every term of the sequence by its block gives the sequence again.",
        "reason": "Substitution sequence: the block for $0$ starts with $0$, and the sequence starts with $0$."
      },
      {
        "step": "Let $C$ be the row that $B$ turns into, with $u$ zeros and $v$ ones; the sequence is $C$ written again and again.",
        "reason": "Substitution sequence: replacing the terms of $B$, $B$, $B$ and so on gives $C$, $C$, $C$ and so on, which by line 16 is the sequence."
      },
      {
        "step": "The first $p(u + v)$ terms of the sequence are $u + v$ copies of $B$, and they are $p$ copies of $C$.",
        "reason": "Period: by lines 15 and 17; $B$ has $p$ terms and $C$ has $u + v$ terms."
      },
      {
        "step": "$(u + v)k = pu$",
        "reason": "Multiplication as repeated addition, from arithmetic: the zeros among these terms are counted in the copies of $B$ and in the copies of $C$."
      },
      {
        "step": "$(u + v)m = pv$",
        "reason": "Multiplication as repeated addition, from arithmetic: the ones among these terms are counted in the copies of $B$ and in the copies of $C$."
      },
      {
        "step": "$p(u - yv) = (u + v)(k - ym)$",
        "reason": "Common factor: by lines 19 and 20, $pu - ypv = (u + v)k - y(u + v)m$, and $p$ and $u + v$ are taken out."
      },
      {
        "step": "$pc(k - ym) = (u + v)(k - ym)$",
        "reason": "Substituting a value: $u - yv = c(k - ym)$ with $c = 2 - 3y$, by lines 11 and 13."
      },
      {
        "step": "The number $m$ is not $0$.",
        "reason": "Period: the block for $0$ holds a $1$, so the sequence holds a $1$, in the block of its first term, and every term lies in a copy of $B$."
      },
      {
        "step": "The number $k - ym$ is not $0$.",
        "reason": "Irrational number, from arithmetic: $k = ym$ would make $y = \\dfrac{k}{m}$, a quotient of whole numbers with $m$ not $0$ by line 23, against line 14."
      },
      {
        "step": "$pc = u + v$",
        "reason": "Dividing both sides by a nonzero number: both sides of line 22 are divided by $k - ym$, which is not $0$ by line 24."
      },
      {
        "step": "So $y = \\dfrac{2p - u - v}{3p}$.",
        "reason": "Isolating the variable: $c = 2 - 3y$ from line 6 goes into line 25, which gives $p(2 - 3y) = u + v$; this is solved for $y$, and $p$ is not $0$."
      },
      {
        "step": "So $y$ is a rational number.",
        "reason": "Irrational number, from arithmetic: by line 26 the number $y$ is a quotient of integers, since $p$, $u$ and $v$ are whole numbers and $p$ is not $0$."
      },
      {
        "step": "So the sequence is not periodic.",
        "reason": "Irrational number, from arithmetic: lines 14 and 27 cannot both hold, so the supposition of line 15 fails for every $p$."
      }
    ]
  },
  {
    "id": "t243-k2-p08",
    "topic": "self-similar-sequences",
    "kind": "t243-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that the sequence is not periodic, where $a_0 = 0$, $a_{2n} = a_n$ and $a_{2n+1}$ is the remainder of $a_n + 40$ on division by $58$, for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence is not periodic, where $a_0 = 0$, $a_{2n} = a_n$ and $a_{2n+1}$ is the remainder of $a_n + 40$ on division by $58$, for every whole number $n$.",
        "reason": "Period: this is the problem as given; $a_0$ starts the sequence, and the rule for even places and the rule for odd places give every later term from an earlier one."
      },
      {
        "step": "The term $a_{4n+3}$ is the remainder of $a_{2n+1} + 40$ on division by $58$.",
        "reason": "Recursion: the rule for odd places with $2n + 1$ in place of $n$, since $4n + 3 = 2(2n + 1) + 1$."
      },
      {
        "step": "The number $a_{2n+1} + 40$ leaves the same remainder on division by $58$ as $a_n + 80$.",
        "reason": "Divisibility of integers, from arithmetic: $a_{2n+1}$ is the remainder of $a_n + 40$, so the two differ by a multiple of $58$, and $40 + 40 = 80$."
      },
      {
        "step": "$80 = 58 + 22$",
        "reason": "Division-with-remainder, from arithmetic: $80$ leaves the remainder $22$ on division by $58$."
      },
      {
        "step": "So $a_{4n+3}$ is the remainder of $a_n + 22$ on division by $58$, for every whole number $n$.",
        "reason": "Divisibility of integers, from arithmetic: by lines 3 and 4 the numbers $a_{2n+1} + 40$ and $a_n + 22$ differ by a multiple of $58$, so line 2 gives the remainder of $a_n + 22$."
      },
      {
        "step": "Suppose the sequence has a period, and let $p$ be its least period.",
        "reason": "A nonempty set of whole numbers has a least member, from arithmetic: a period is a whole number from $1$ up, and by the supposition there is one."
      },
      {
        "step": "If $p = 2q$ for a whole number $q$, then $a_{n+q} = a_{2n+2q}$ for every whole number $n$.",
        "reason": "Recursion: the rule for even places with $n + q$ in place of $n$."
      },
      {
        "step": "Then $a_{2n+2q} = a_{2n}$.",
        "reason": "Period: $2q = p$ is a period."
      },
      {
        "step": "Then $a_{n+q} = a_n$ for every whole number $n$.",
        "reason": "Transitive property: lines 7 and 8, and $a_{2n} = a_n$ by the rule for even places."
      },
      {
        "step": "So $p$ is odd: $p = 2h + 1$ for a whole number $h$.",
        "reason": "Period: by line 9 an even $p$ would give the period $q$, which is below the least period $p$."
      },
      {
        "step": "The term $a_{2n+p}$ is the remainder of $a_{n+h} + 40$ on division by $58$.",
        "reason": "Recursion: the rule for odd places with $n + h$ in place of $n$, since $2n + p = 2(n + h) + 1$."
      },
      {
        "step": "$a_{2n+p} = a_n$",
        "reason": "Period: $a_{2n+p} = a_{2n}$, and $a_{2n} = a_n$ by the rule for even places."
      },
      {
        "step": "So $a_{n+h} + 40$ leaves the same remainder on division by $58$ as $a_n$, for every whole number $n$.",
        "reason": "Divisibility of integers, from arithmetic: by lines 11 and 12, $a_n$ is the remainder of $a_{n+h} + 40$."
      },
      {
        "step": "$a_{2n+1+p} = a_{n+h+1}$",
        "reason": "Recursion: the rule for even places with $n + h + 1$ in place of $n$, since $2n + 1 + p = 2(n + h + 1)$."
      },
      {
        "step": "The term $a_{2n+1+p}$ is the remainder of $a_n + 40$ on division by $58$.",
        "reason": "Period: $a_{2n+1+p} = a_{2n+1}$, and the rule for odd places gives $a_{2n+1}$."
      },
      {
        "step": "So $a_{n+h+1}$ leaves the same remainder on division by $58$ as $a_n + 40$, for every whole number $n$.",
        "reason": "Transitive property: lines 14 and 15."
      },
      {
        "step": "The number $a_{n+h+1} + 40$ leaves the same remainder on division by $58$ as $a_{n+1}$.",
        "reason": "Substituting a value: $n + 1$ in place of $n$ in line 13."
      },
      {
        "step": "So $a_{n+1}$ leaves the same remainder on division by $58$ as $a_n + 80$.",
        "reason": "Divisibility of integers, from arithmetic: by line 16 the numbers $a_{n+h+1} + 40$ and $a_n + 40 + 40$ differ by a multiple of $58$, and line 17."
      },
      {
        "step": "Every term is a whole number from $0$ to $57$.",
        "reason": "Induction: $a_0 = 0$, and each later term is an earlier term or a remainder on division by $58$."
      },
      {
        "step": "So $a_{n+1} = a_{4n+3}$ for every whole number $n$.",
        "reason": "Divisibility of integers, from arithmetic: by lines 4 and 18, $a_{n+1}$ leaves the same remainder as $a_n + 22$, and by line 19 it is that remainder, which is $a_{4n+3}$ by line 5."
      },
      {
        "step": "$a_1 = a_3$",
        "reason": "Substituting a value: $n = 0$ in line 20."
      },
      {
        "step": "$a_1 = 40$",
        "reason": "Recursion: the rule for odd places at $n = 0$ gives the remainder of $0 + 40$ on division by $58$, and $40$ is below $58$."
      },
      {
        "step": "$a_3 = 22$",
        "reason": "Substituting a value: $n = 0$ in line 5 gives the remainder of $0 + 22$ on division by $58$, and $22$ is below $58$."
      },
      {
        "step": "So the sequence is not periodic.",
        "reason": "Period: lines 21, 22 and 23 give $40 = 22$, which is false, so the supposition of line 6 fails."
      }
    ]
  },
  {
    "id": "t243-k2-p09",
    "topic": "self-similar-sequences",
    "kind": "t243-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that the sequence is not periodic, where $a_0 = 0$, $a_{2n} = a_n$ and $a_{2n+1}$ is the remainder of $a_n + 56$ on division by $60$, for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence is not periodic, where $a_0 = 0$, $a_{2n} = a_n$ and $a_{2n+1}$ is the remainder of $a_n + 56$ on division by $60$, for every whole number $n$.",
        "reason": "Period: this is the problem as given; $a_0$ starts the sequence, and the rule for even places and the rule for odd places give every later term from an earlier one."
      },
      {
        "step": "The term $a_{4n+3}$ is the remainder of $a_{2n+1} + 56$ on division by $60$.",
        "reason": "Recursion: the rule for odd places with $2n + 1$ in place of $n$, since $4n + 3 = 2(2n + 1) + 1$."
      },
      {
        "step": "The number $a_{2n+1} + 56$ leaves the same remainder on division by $60$ as $a_n + 112$.",
        "reason": "Divisibility of integers, from arithmetic: $a_{2n+1}$ is the remainder of $a_n + 56$, so the two differ by a multiple of $60$, and $56 + 56 = 112$."
      },
      {
        "step": "$112 = 60 + 52$",
        "reason": "Division-with-remainder, from arithmetic: $112$ leaves the remainder $52$ on division by $60$."
      },
      {
        "step": "So $a_{4n+3}$ is the remainder of $a_n + 52$ on division by $60$, for every whole number $n$.",
        "reason": "Divisibility of integers, from arithmetic: by lines 3 and 4 the numbers $a_{2n+1} + 56$ and $a_n + 52$ differ by a multiple of $60$, so line 2 gives the remainder of $a_n + 52$."
      },
      {
        "step": "Suppose the sequence has a period, and let $p$ be its least period.",
        "reason": "A nonempty set of whole numbers has a least member, from arithmetic: a period is a whole number from $1$ up, and by the supposition there is one."
      },
      {
        "step": "If $p = 2q$ for a whole number $q$, then $a_{n+q} = a_{2n+2q}$ for every whole number $n$.",
        "reason": "Recursion: the rule for even places with $n + q$ in place of $n$."
      },
      {
        "step": "Then $a_{2n+2q} = a_{2n}$.",
        "reason": "Period: $2q = p$ is a period."
      },
      {
        "step": "Then $a_{n+q} = a_n$ for every whole number $n$.",
        "reason": "Transitive property: lines 7 and 8, and $a_{2n} = a_n$ by the rule for even places."
      },
      {
        "step": "So $p$ is odd: $p = 2h + 1$ for a whole number $h$.",
        "reason": "Period: by line 9 an even $p$ would give the period $q$, which is below the least period $p$."
      },
      {
        "step": "The term $a_{2n+p}$ is the remainder of $a_{n+h} + 56$ on division by $60$.",
        "reason": "Recursion: the rule for odd places with $n + h$ in place of $n$, since $2n + p = 2(n + h) + 1$."
      },
      {
        "step": "$a_{2n+p} = a_n$",
        "reason": "Period: $a_{2n+p} = a_{2n}$, and $a_{2n} = a_n$ by the rule for even places."
      },
      {
        "step": "So $a_{n+h} + 56$ leaves the same remainder on division by $60$ as $a_n$, for every whole number $n$.",
        "reason": "Divisibility of integers, from arithmetic: by lines 11 and 12, $a_n$ is the remainder of $a_{n+h} + 56$."
      },
      {
        "step": "$a_{2n+1+p} = a_{n+h+1}$",
        "reason": "Recursion: the rule for even places with $n + h + 1$ in place of $n$, since $2n + 1 + p = 2(n + h + 1)$."
      },
      {
        "step": "The term $a_{2n+1+p}$ is the remainder of $a_n + 56$ on division by $60$.",
        "reason": "Period: $a_{2n+1+p} = a_{2n+1}$, and the rule for odd places gives $a_{2n+1}$."
      },
      {
        "step": "So $a_{n+h+1}$ leaves the same remainder on division by $60$ as $a_n + 56$, for every whole number $n$.",
        "reason": "Transitive property: lines 14 and 15."
      },
      {
        "step": "The number $a_{n+h+1} + 56$ leaves the same remainder on division by $60$ as $a_{n+1}$.",
        "reason": "Substituting a value: $n + 1$ in place of $n$ in line 13."
      },
      {
        "step": "So $a_{n+1}$ leaves the same remainder on division by $60$ as $a_n + 112$.",
        "reason": "Divisibility of integers, from arithmetic: by line 16 the numbers $a_{n+h+1} + 56$ and $a_n + 56 + 56$ differ by a multiple of $60$, and line 17."
      },
      {
        "step": "Every term is a whole number from $0$ to $59$.",
        "reason": "Induction: $a_0 = 0$, and each later term is an earlier term or a remainder on division by $60$."
      },
      {
        "step": "So $a_{n+1} = a_{4n+3}$ for every whole number $n$.",
        "reason": "Divisibility of integers, from arithmetic: by lines 4 and 18, $a_{n+1}$ leaves the same remainder as $a_n + 52$, and by line 19 it is that remainder, which is $a_{4n+3}$ by line 5."
      },
      {
        "step": "$a_1 = a_3$",
        "reason": "Substituting a value: $n = 0$ in line 20."
      },
      {
        "step": "$a_1 = 56$",
        "reason": "Recursion: the rule for odd places at $n = 0$ gives the remainder of $0 + 56$ on division by $60$, and $56$ is below $60$."
      },
      {
        "step": "$a_3 = 52$",
        "reason": "Substituting a value: $n = 0$ in line 5 gives the remainder of $0 + 52$ on division by $60$, and $52$ is below $60$."
      },
      {
        "step": "So the sequence is not periodic.",
        "reason": "Period: lines 21, 22 and 23 give $56 = 52$, which is false, so the supposition of line 6 fails."
      }
    ]
  },
  {
    "id": "t243-k2-p10",
    "topic": "self-similar-sequences",
    "kind": "t243-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the sequence is not periodic, where the sequence is made as follows: start with the single term $0$, and again and again replace every term of the row by its block, where each $0$ is replaced by the block $0$, $0$, $1$, $0$, $1$ and each $1$ by the single term $0$; the rows grow into the sequence.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence is not periodic, where the sequence is made as follows: start with the single term $0$, and again and again replace every term of the row by its block, where each $0$ is replaced by the block $0$, $0$, $1$, $0$, $1$ and each $1$ by the single term $0$; the rows grow into the sequence.",
        "reason": "Substitution sequence: this is the problem as given; the block for $0$ starts with $0$, so each row starts with the row before it and the rows grow into one sequence."
      },
      {
        "step": "Let a row of $k$ zeros and $m$ ones turn, by the replacement, into a row of $u$ zeros and $v$ ones, and look for a positive number $y$ and a number $c$ with $u - yv = c(k - ym)$ for every row of zeros and ones.",
        "reason": "Substitution sequence: the replacement turns the numbers of zeros and ones of a row into those of the next row; such a $y$ is the ratio of zeros to ones that the replacement keeps."
      },
      {
        "step": "$u = 3k + m$",
        "reason": "Substitution sequence: the block for $0$ has $3$ of its terms equal to $0$ and the block for $1$ has $1$, and the new row is $k$ blocks for $0$ and $m$ blocks for $1$."
      },
      {
        "step": "$v = 2k$",
        "reason": "Substitution sequence: the block for $0$ has $2$ of its terms equal to $1$ and the block for $1$ has $0$."
      },
      {
        "step": "$u - yv = (3 - 2y)k + m$",
        "reason": "Collecting like terms: lines 3 and 4 go into $u - yv$, and the terms in $k$ and the terms in $m$ are collected."
      },
      {
        "step": "$c = 3 - 2y$",
        "reason": "Substituting a value: the row of the single term $0$ has $k = 1$ and $m = 0$, so by line 5 the equation $u - yv = c(k - ym)$ reads $3 - 2y = c$."
      },
      {
        "step": "$1 = -cy$",
        "reason": "Substituting a value: the row of the single term $1$ has $k = 0$ and $m = 1$, so by line 5 the equation $u - yv = c(k - ym)$ reads $1 = -cy$."
      },
      {
        "step": "$1 = -(3 - 2y)y$",
        "reason": "Substituting a value: line 6 goes into line 7."
      },
      {
        "step": "$1 = -3y + 2y^2$",
        "reason": "Multiplying out: each term of the bracket is multiplied by $-y$."
      },
      {
        "step": "$2y^2 - 3y - 1 = 0$",
        "reason": "Adding the same number to both sides: $1$ is taken from both sides, and the terms in $y$ are collected."
      },
      {
        "step": "Each number $y$ with $2y^2 - 3y - 1 = 0$ fits: with $c = 3 - 2y$, line 5 reads $u - yv = ck - cym$, which is $c(k - ym)$.",
        "reason": "Common factor: lines 10, 9 and 8 read backwards give $1 = -cy$, the number in front of $m$ in line 5."
      },
      {
        "step": "So $y = \\dfrac{3 + \\sqrt{17}}{4}$ or $y = \\dfrac{3 - \\sqrt{17}}{4}$.",
        "reason": "Quadratic formula: the discriminant is $(-3)^2 - 4 \\cdot 2 \\cdot (-1) = 17$."
      },
      {
        "step": "So $y = \\dfrac{3 + \\sqrt{17}}{4}$.",
        "reason": "Positive square root, from arithmetic: $17$ is above $3^2 = 9$, so $\\sqrt{17}$ is above $3$ and the second value is negative, while $y$ is positive."
      },
      {
        "step": "The number $y$ is irrational.",
        "reason": "Irrational square roots, from arithmetic: $17$ lies between $4^2 = 16$ and $5^2 = 25$, so it is no perfect square and $\\sqrt{17}$ is irrational; a rational $y$ would make $\\sqrt{17} = 4y - 3$ rational."
      },
      {
        "step": "Suppose the sequence has a period $p$, and let the row $B$ of its first $p$ terms have $k$ zeros and $m$ ones.",
        "reason": "Period: each term equals the term $p$ places on, so the sequence is $B$ written again and again."
      },
      {
        "step": "Replacing every term of the sequence by its block gives the sequence again.",
        "reason": "Substitution sequence: the block for $0$ starts with $0$, and the sequence starts with $0$."
      },
      {
        "step": "Let $C$ be the row that $B$ turns into, with $u$ zeros and $v$ ones; the sequence is $C$ written again and again.",
        "reason": "Substitution sequence: replacing the terms of $B$, $B$, $B$ and so on gives $C$, $C$, $C$ and so on, which by line 16 is the sequence."
      },
      {
        "step": "The first $p(u + v)$ terms of the sequence are $u + v$ copies of $B$, and they are $p$ copies of $C$.",
        "reason": "Period: by lines 15 and 17; $B$ has $p$ terms and $C$ has $u + v$ terms."
      },
      {
        "step": "$(u + v)k = pu$",
        "reason": "Multiplication as repeated addition, from arithmetic: the zeros among these terms are counted in the copies of $B$ and in the copies of $C$."
      },
      {
        "step": "$(u + v)m = pv$",
        "reason": "Multiplication as repeated addition, from arithmetic: the ones among these terms are counted in the copies of $B$ and in the copies of $C$."
      },
      {
        "step": "$p(u - yv) = (u + v)(k - ym)$",
        "reason": "Common factor: by lines 19 and 20, $pu - ypv = (u + v)k - y(u + v)m$, and $p$ and $u + v$ are taken out."
      },
      {
        "step": "$pc(k - ym) = (u + v)(k - ym)$",
        "reason": "Substituting a value: $u - yv = c(k - ym)$ with $c = 3 - 2y$, by lines 11 and 13."
      },
      {
        "step": "The number $m$ is not $0$.",
        "reason": "Period: the block for $0$ holds a $1$, so the sequence holds a $1$, in the block of its first term, and every term lies in a copy of $B$."
      },
      {
        "step": "The number $k - ym$ is not $0$.",
        "reason": "Irrational number, from arithmetic: $k = ym$ would make $y = \\dfrac{k}{m}$, a quotient of whole numbers with $m$ not $0$ by line 23, against line 14."
      },
      {
        "step": "$pc = u + v$",
        "reason": "Dividing both sides by a nonzero number: both sides of line 22 are divided by $k - ym$, which is not $0$ by line 24."
      },
      {
        "step": "So $y = \\dfrac{3p - u - v}{2p}$.",
        "reason": "Isolating the variable: $c = 3 - 2y$ from line 6 goes into line 25, which gives $p(3 - 2y) = u + v$; this is solved for $y$, and $p$ is not $0$."
      },
      {
        "step": "So $y$ is a rational number.",
        "reason": "Irrational number, from arithmetic: by line 26 the number $y$ is a quotient of integers, since $p$, $u$ and $v$ are whole numbers and $p$ is not $0$."
      },
      {
        "step": "So the sequence is not periodic.",
        "reason": "Irrational number, from arithmetic: lines 14 and 27 cannot both hold, so the supposition of line 15 fails for every $p$."
      }
    ]
  },
  {
    "id": "t243-k2-p11",
    "topic": "self-similar-sequences",
    "kind": "t243-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that the sequence is not periodic, where $a_0 = 0$, $a_{2n} = a_n$ and $a_{2n+1}$ is the remainder of $a_n + 32$ on division by $39$, for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence is not periodic, where $a_0 = 0$, $a_{2n} = a_n$ and $a_{2n+1}$ is the remainder of $a_n + 32$ on division by $39$, for every whole number $n$.",
        "reason": "Period: this is the problem as given; $a_0$ starts the sequence, and the rule for even places and the rule for odd places give every later term from an earlier one."
      },
      {
        "step": "The term $a_{4n+3}$ is the remainder of $a_{2n+1} + 32$ on division by $39$.",
        "reason": "Recursion: the rule for odd places with $2n + 1$ in place of $n$, since $4n + 3 = 2(2n + 1) + 1$."
      },
      {
        "step": "The number $a_{2n+1} + 32$ leaves the same remainder on division by $39$ as $a_n + 64$.",
        "reason": "Divisibility of integers, from arithmetic: $a_{2n+1}$ is the remainder of $a_n + 32$, so the two differ by a multiple of $39$, and $32 + 32 = 64$."
      },
      {
        "step": "$64 = 39 + 25$",
        "reason": "Division-with-remainder, from arithmetic: $64$ leaves the remainder $25$ on division by $39$."
      },
      {
        "step": "So $a_{4n+3}$ is the remainder of $a_n + 25$ on division by $39$, for every whole number $n$.",
        "reason": "Divisibility of integers, from arithmetic: by lines 3 and 4 the numbers $a_{2n+1} + 32$ and $a_n + 25$ differ by a multiple of $39$, so line 2 gives the remainder of $a_n + 25$."
      },
      {
        "step": "Suppose the sequence has a period, and let $p$ be its least period.",
        "reason": "A nonempty set of whole numbers has a least member, from arithmetic: a period is a whole number from $1$ up, and by the supposition there is one."
      },
      {
        "step": "If $p = 2q$ for a whole number $q$, then $a_{n+q} = a_{2n+2q}$ for every whole number $n$.",
        "reason": "Recursion: the rule for even places with $n + q$ in place of $n$."
      },
      {
        "step": "Then $a_{2n+2q} = a_{2n}$.",
        "reason": "Period: $2q = p$ is a period."
      },
      {
        "step": "Then $a_{n+q} = a_n$ for every whole number $n$.",
        "reason": "Transitive property: lines 7 and 8, and $a_{2n} = a_n$ by the rule for even places."
      },
      {
        "step": "So $p$ is odd: $p = 2h + 1$ for a whole number $h$.",
        "reason": "Period: by line 9 an even $p$ would give the period $q$, which is below the least period $p$."
      },
      {
        "step": "The term $a_{2n+p}$ is the remainder of $a_{n+h} + 32$ on division by $39$.",
        "reason": "Recursion: the rule for odd places with $n + h$ in place of $n$, since $2n + p = 2(n + h) + 1$."
      },
      {
        "step": "$a_{2n+p} = a_n$",
        "reason": "Period: $a_{2n+p} = a_{2n}$, and $a_{2n} = a_n$ by the rule for even places."
      },
      {
        "step": "So $a_{n+h} + 32$ leaves the same remainder on division by $39$ as $a_n$, for every whole number $n$.",
        "reason": "Divisibility of integers, from arithmetic: by lines 11 and 12, $a_n$ is the remainder of $a_{n+h} + 32$."
      },
      {
        "step": "$a_{2n+1+p} = a_{n+h+1}$",
        "reason": "Recursion: the rule for even places with $n + h + 1$ in place of $n$, since $2n + 1 + p = 2(n + h + 1)$."
      },
      {
        "step": "The term $a_{2n+1+p}$ is the remainder of $a_n + 32$ on division by $39$.",
        "reason": "Period: $a_{2n+1+p} = a_{2n+1}$, and the rule for odd places gives $a_{2n+1}$."
      },
      {
        "step": "So $a_{n+h+1}$ leaves the same remainder on division by $39$ as $a_n + 32$, for every whole number $n$.",
        "reason": "Transitive property: lines 14 and 15."
      },
      {
        "step": "The number $a_{n+h+1} + 32$ leaves the same remainder on division by $39$ as $a_{n+1}$.",
        "reason": "Substituting a value: $n + 1$ in place of $n$ in line 13."
      },
      {
        "step": "So $a_{n+1}$ leaves the same remainder on division by $39$ as $a_n + 64$.",
        "reason": "Divisibility of integers, from arithmetic: by line 16 the numbers $a_{n+h+1} + 32$ and $a_n + 32 + 32$ differ by a multiple of $39$, and line 17."
      },
      {
        "step": "Every term is a whole number from $0$ to $38$.",
        "reason": "Induction: $a_0 = 0$, and each later term is an earlier term or a remainder on division by $39$."
      },
      {
        "step": "So $a_{n+1} = a_{4n+3}$ for every whole number $n$.",
        "reason": "Divisibility of integers, from arithmetic: by lines 4 and 18, $a_{n+1}$ leaves the same remainder as $a_n + 25$, and by line 19 it is that remainder, which is $a_{4n+3}$ by line 5."
      },
      {
        "step": "$a_1 = a_3$",
        "reason": "Substituting a value: $n = 0$ in line 20."
      },
      {
        "step": "$a_1 = 32$",
        "reason": "Recursion: the rule for odd places at $n = 0$ gives the remainder of $0 + 32$ on division by $39$, and $32$ is below $39$."
      },
      {
        "step": "$a_3 = 25$",
        "reason": "Substituting a value: $n = 0$ in line 5 gives the remainder of $0 + 25$ on division by $39$, and $25$ is below $39$."
      },
      {
        "step": "So the sequence is not periodic.",
        "reason": "Period: lines 21, 22 and 23 give $32 = 25$, which is false, so the supposition of line 6 fails."
      }
    ]
  },
  {
    "id": "t243-k2-p12",
    "topic": "self-similar-sequences",
    "kind": "t243-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the sequence is not periodic, where the sequence is made as follows: start with the single term $0$, and again and again replace every term of the row by its block, where each $0$ is replaced by the block $0$, $1$, $0$, $1$ and each $1$ by the block $0$, $0$, $1$, $0$, $0$; the rows grow into the sequence.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence is not periodic, where the sequence is made as follows: start with the single term $0$, and again and again replace every term of the row by its block, where each $0$ is replaced by the block $0$, $1$, $0$, $1$ and each $1$ by the block $0$, $0$, $1$, $0$, $0$; the rows grow into the sequence.",
        "reason": "Substitution sequence: this is the problem as given; the block for $0$ starts with $0$, so each row starts with the row before it and the rows grow into one sequence."
      },
      {
        "step": "Let a row of $k$ zeros and $m$ ones turn, by the replacement, into a row of $u$ zeros and $v$ ones, and look for a positive number $y$ and a number $c$ with $u - yv = c(k - ym)$ for every row of zeros and ones.",
        "reason": "Substitution sequence: the replacement turns the numbers of zeros and ones of a row into those of the next row; such a $y$ is the ratio of zeros to ones that the replacement keeps."
      },
      {
        "step": "$u = 2k + 4m$",
        "reason": "Substitution sequence: the block for $0$ has $2$ of its terms equal to $0$ and the block for $1$ has $4$, and the new row is $k$ blocks for $0$ and $m$ blocks for $1$."
      },
      {
        "step": "$v = 2k + m$",
        "reason": "Substitution sequence: the block for $0$ has $2$ of its terms equal to $1$ and the block for $1$ has $1$."
      },
      {
        "step": "$u - yv = (2 - 2y)k + (4 - y)m$",
        "reason": "Collecting like terms: lines 3 and 4 go into $u - yv$, and the terms in $k$ and the terms in $m$ are collected."
      },
      {
        "step": "$c = 2 - 2y$",
        "reason": "Substituting a value: the row of the single term $0$ has $k = 1$ and $m = 0$, so by line 5 the equation $u - yv = c(k - ym)$ reads $2 - 2y = c$."
      },
      {
        "step": "$4 - y = -cy$",
        "reason": "Substituting a value: the row of the single term $1$ has $k = 0$ and $m = 1$, so by line 5 the equation $u - yv = c(k - ym)$ reads $4 - y = -cy$."
      },
      {
        "step": "$4 - y = -(2 - 2y)y$",
        "reason": "Substituting a value: line 6 goes into line 7."
      },
      {
        "step": "$4 - y = -2y + 2y^2$",
        "reason": "Multiplying out: each term of the bracket is multiplied by $-y$."
      },
      {
        "step": "$2y^2 - y - 4 = 0$",
        "reason": "Adding the same number to both sides: $4 - y$ is taken from both sides, and the terms in $y$ are collected."
      },
      {
        "step": "Each number $y$ with $2y^2 - y - 4 = 0$ fits: with $c = 2 - 2y$, line 5 reads $u - yv = ck - cym$, which is $c(k - ym)$.",
        "reason": "Common factor: lines 10, 9 and 8 read backwards give $4 - y = -cy$, the number in front of $m$ in line 5."
      },
      {
        "step": "So $y = \\dfrac{1 + \\sqrt{33}}{4}$ or $y = \\dfrac{1 - \\sqrt{33}}{4}$.",
        "reason": "Quadratic formula: the discriminant is $(-1)^2 - 4 \\cdot 2 \\cdot (-4) = 33$."
      },
      {
        "step": "So $y = \\dfrac{1 + \\sqrt{33}}{4}$.",
        "reason": "Positive square root, from arithmetic: $33$ is above $1^2 = 1$, so $\\sqrt{33}$ is above $1$ and the second value is negative, while $y$ is positive."
      },
      {
        "step": "The number $y$ is irrational.",
        "reason": "Irrational square roots, from arithmetic: $33$ lies between $5^2 = 25$ and $6^2 = 36$, so it is no perfect square and $\\sqrt{33}$ is irrational; a rational $y$ would make $\\sqrt{33} = 4y - 1$ rational."
      },
      {
        "step": "Suppose the sequence has a period $p$, and let the row $B$ of its first $p$ terms have $k$ zeros and $m$ ones.",
        "reason": "Period: each term equals the term $p$ places on, so the sequence is $B$ written again and again."
      },
      {
        "step": "Replacing every term of the sequence by its block gives the sequence again.",
        "reason": "Substitution sequence: the block for $0$ starts with $0$, and the sequence starts with $0$."
      },
      {
        "step": "Let $C$ be the row that $B$ turns into, with $u$ zeros and $v$ ones; the sequence is $C$ written again and again.",
        "reason": "Substitution sequence: replacing the terms of $B$, $B$, $B$ and so on gives $C$, $C$, $C$ and so on, which by line 16 is the sequence."
      },
      {
        "step": "The first $p(u + v)$ terms of the sequence are $u + v$ copies of $B$, and they are $p$ copies of $C$.",
        "reason": "Period: by lines 15 and 17; $B$ has $p$ terms and $C$ has $u + v$ terms."
      },
      {
        "step": "$(u + v)k = pu$",
        "reason": "Multiplication as repeated addition, from arithmetic: the zeros among these terms are counted in the copies of $B$ and in the copies of $C$."
      },
      {
        "step": "$(u + v)m = pv$",
        "reason": "Multiplication as repeated addition, from arithmetic: the ones among these terms are counted in the copies of $B$ and in the copies of $C$."
      },
      {
        "step": "$p(u - yv) = (u + v)(k - ym)$",
        "reason": "Common factor: by lines 19 and 20, $pu - ypv = (u + v)k - y(u + v)m$, and $p$ and $u + v$ are taken out."
      },
      {
        "step": "$pc(k - ym) = (u + v)(k - ym)$",
        "reason": "Substituting a value: $u - yv = c(k - ym)$ with $c = 2 - 2y$, by lines 11 and 13."
      },
      {
        "step": "The number $m$ is not $0$.",
        "reason": "Period: the block for $0$ holds a $1$, so the sequence holds a $1$, in the block of its first term, and every term lies in a copy of $B$."
      },
      {
        "step": "The number $k - ym$ is not $0$.",
        "reason": "Irrational number, from arithmetic: $k = ym$ would make $y = \\dfrac{k}{m}$, a quotient of whole numbers with $m$ not $0$ by line 23, against line 14."
      },
      {
        "step": "$pc = u + v$",
        "reason": "Dividing both sides by a nonzero number: both sides of line 22 are divided by $k - ym$, which is not $0$ by line 24."
      },
      {
        "step": "So $y = \\dfrac{2p - u - v}{2p}$.",
        "reason": "Isolating the variable: $c = 2 - 2y$ from line 6 goes into line 25, which gives $p(2 - 2y) = u + v$; this is solved for $y$, and $p$ is not $0$."
      },
      {
        "step": "So $y$ is a rational number.",
        "reason": "Irrational number, from arithmetic: by line 26 the number $y$ is a quotient of integers, since $p$, $u$ and $v$ are whole numbers and $p$ is not $0$."
      },
      {
        "step": "So the sequence is not periodic.",
        "reason": "Irrational number, from arithmetic: lines 14 and 27 cannot both hold, so the supposition of line 15 fails for every $p$."
      }
    ]
  },
  {
    "id": "t243-k2-p13",
    "topic": "self-similar-sequences",
    "kind": "t243-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the sequence is not periodic, where the sequence is made as follows: start with the single term $0$, and again and again replace every term of the row by its block, where each $0$ is replaced by the block $0$, $0$, $0$, $1$, $1$, $0$ and each $1$ by the block $0$, $1$, $0$, $0$; the rows grow into the sequence.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence is not periodic, where the sequence is made as follows: start with the single term $0$, and again and again replace every term of the row by its block, where each $0$ is replaced by the block $0$, $0$, $0$, $1$, $1$, $0$ and each $1$ by the block $0$, $1$, $0$, $0$; the rows grow into the sequence.",
        "reason": "Substitution sequence: this is the problem as given; the block for $0$ starts with $0$, so each row starts with the row before it and the rows grow into one sequence."
      },
      {
        "step": "Let a row of $k$ zeros and $m$ ones turn, by the replacement, into a row of $u$ zeros and $v$ ones, and look for a positive number $y$ and a number $c$ with $u - yv = c(k - ym)$ for every row of zeros and ones.",
        "reason": "Substitution sequence: the replacement turns the numbers of zeros and ones of a row into those of the next row; such a $y$ is the ratio of zeros to ones that the replacement keeps."
      },
      {
        "step": "$u = 4k + 3m$",
        "reason": "Substitution sequence: the block for $0$ has $4$ of its terms equal to $0$ and the block for $1$ has $3$, and the new row is $k$ blocks for $0$ and $m$ blocks for $1$."
      },
      {
        "step": "$v = 2k + m$",
        "reason": "Substitution sequence: the block for $0$ has $2$ of its terms equal to $1$ and the block for $1$ has $1$."
      },
      {
        "step": "$u - yv = (4 - 2y)k + (3 - y)m$",
        "reason": "Collecting like terms: lines 3 and 4 go into $u - yv$, and the terms in $k$ and the terms in $m$ are collected."
      },
      {
        "step": "$c = 4 - 2y$",
        "reason": "Substituting a value: the row of the single term $0$ has $k = 1$ and $m = 0$, so by line 5 the equation $u - yv = c(k - ym)$ reads $4 - 2y = c$."
      },
      {
        "step": "$3 - y = -cy$",
        "reason": "Substituting a value: the row of the single term $1$ has $k = 0$ and $m = 1$, so by line 5 the equation $u - yv = c(k - ym)$ reads $3 - y = -cy$."
      },
      {
        "step": "$3 - y = -(4 - 2y)y$",
        "reason": "Substituting a value: line 6 goes into line 7."
      },
      {
        "step": "$3 - y = -4y + 2y^2$",
        "reason": "Multiplying out: each term of the bracket is multiplied by $-y$."
      },
      {
        "step": "$2y^2 - 3y - 3 = 0$",
        "reason": "Adding the same number to both sides: $3 - y$ is taken from both sides, and the terms in $y$ are collected."
      },
      {
        "step": "Each number $y$ with $2y^2 - 3y - 3 = 0$ fits: with $c = 4 - 2y$, line 5 reads $u - yv = ck - cym$, which is $c(k - ym)$.",
        "reason": "Common factor: lines 10, 9 and 8 read backwards give $3 - y = -cy$, the number in front of $m$ in line 5."
      },
      {
        "step": "So $y = \\dfrac{3 + \\sqrt{33}}{4}$ or $y = \\dfrac{3 - \\sqrt{33}}{4}$.",
        "reason": "Quadratic formula: the discriminant is $(-3)^2 - 4 \\cdot 2 \\cdot (-3) = 33$."
      },
      {
        "step": "So $y = \\dfrac{3 + \\sqrt{33}}{4}$.",
        "reason": "Positive square root, from arithmetic: $33$ is above $3^2 = 9$, so $\\sqrt{33}$ is above $3$ and the second value is negative, while $y$ is positive."
      },
      {
        "step": "The number $y$ is irrational.",
        "reason": "Irrational square roots, from arithmetic: $33$ lies between $5^2 = 25$ and $6^2 = 36$, so it is no perfect square and $\\sqrt{33}$ is irrational; a rational $y$ would make $\\sqrt{33} = 4y - 3$ rational."
      },
      {
        "step": "Suppose the sequence has a period $p$, and let the row $B$ of its first $p$ terms have $k$ zeros and $m$ ones.",
        "reason": "Period: each term equals the term $p$ places on, so the sequence is $B$ written again and again."
      },
      {
        "step": "Replacing every term of the sequence by its block gives the sequence again.",
        "reason": "Substitution sequence: the block for $0$ starts with $0$, and the sequence starts with $0$."
      },
      {
        "step": "Let $C$ be the row that $B$ turns into, with $u$ zeros and $v$ ones; the sequence is $C$ written again and again.",
        "reason": "Substitution sequence: replacing the terms of $B$, $B$, $B$ and so on gives $C$, $C$, $C$ and so on, which by line 16 is the sequence."
      },
      {
        "step": "The first $p(u + v)$ terms of the sequence are $u + v$ copies of $B$, and they are $p$ copies of $C$.",
        "reason": "Period: by lines 15 and 17; $B$ has $p$ terms and $C$ has $u + v$ terms."
      },
      {
        "step": "$(u + v)k = pu$",
        "reason": "Multiplication as repeated addition, from arithmetic: the zeros among these terms are counted in the copies of $B$ and in the copies of $C$."
      },
      {
        "step": "$(u + v)m = pv$",
        "reason": "Multiplication as repeated addition, from arithmetic: the ones among these terms are counted in the copies of $B$ and in the copies of $C$."
      },
      {
        "step": "$p(u - yv) = (u + v)(k - ym)$",
        "reason": "Common factor: by lines 19 and 20, $pu - ypv = (u + v)k - y(u + v)m$, and $p$ and $u + v$ are taken out."
      },
      {
        "step": "$pc(k - ym) = (u + v)(k - ym)$",
        "reason": "Substituting a value: $u - yv = c(k - ym)$ with $c = 4 - 2y$, by lines 11 and 13."
      },
      {
        "step": "The number $m$ is not $0$.",
        "reason": "Period: the block for $0$ holds a $1$, so the sequence holds a $1$, in the block of its first term, and every term lies in a copy of $B$."
      },
      {
        "step": "The number $k - ym$ is not $0$.",
        "reason": "Irrational number, from arithmetic: $k = ym$ would make $y = \\dfrac{k}{m}$, a quotient of whole numbers with $m$ not $0$ by line 23, against line 14."
      },
      {
        "step": "$pc = u + v$",
        "reason": "Dividing both sides by a nonzero number: both sides of line 22 are divided by $k - ym$, which is not $0$ by line 24."
      },
      {
        "step": "So $y = \\dfrac{4p - u - v}{2p}$.",
        "reason": "Isolating the variable: $c = 4 - 2y$ from line 6 goes into line 25, which gives $p(4 - 2y) = u + v$; this is solved for $y$, and $p$ is not $0$."
      },
      {
        "step": "So $y$ is a rational number.",
        "reason": "Irrational number, from arithmetic: by line 26 the number $y$ is a quotient of integers, since $p$, $u$ and $v$ are whole numbers and $p$ is not $0$."
      },
      {
        "step": "So the sequence is not periodic.",
        "reason": "Irrational number, from arithmetic: lines 14 and 27 cannot both hold, so the supposition of line 15 fails for every $p$."
      }
    ]
  },
  {
    "id": "t243-k2-p14",
    "topic": "self-similar-sequences",
    "kind": "t243-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that the sequence is not periodic, where the sequence is made as follows: start with the single term $0$, and again and again replace every term of the row by its block, where each $0$ is replaced by the block $0$, $1$ and each $1$ by the block $0$, $0$, $0$, $0$; the rows grow into the sequence.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the sequence is not periodic, where the sequence is made as follows: start with the single term $0$, and again and again replace every term of the row by its block, where each $0$ is replaced by the block $0$, $1$ and each $1$ by the block $0$, $0$, $0$, $0$; the rows grow into the sequence.",
        "reason": "Substitution sequence: this is the problem as given; the block for $0$ starts with $0$, so each row starts with the row before it and the rows grow into one sequence."
      },
      {
        "step": "Let a row of $k$ zeros and $m$ ones turn, by the replacement, into a row of $u$ zeros and $v$ ones, and look for a positive number $y$ and a number $c$ with $u - yv = c(k - ym)$ for every row of zeros and ones.",
        "reason": "Substitution sequence: the replacement turns the numbers of zeros and ones of a row into those of the next row; such a $y$ is the ratio of zeros to ones that the replacement keeps."
      },
      {
        "step": "$u = k + 4m$",
        "reason": "Substitution sequence: the block for $0$ has $1$ of its terms equal to $0$ and the block for $1$ has $4$, and the new row is $k$ blocks for $0$ and $m$ blocks for $1$."
      },
      {
        "step": "$v = k$",
        "reason": "Substitution sequence: the block for $0$ has $1$ of its terms equal to $1$ and the block for $1$ has $0$."
      },
      {
        "step": "$u - yv = (1 - y)k + 4m$",
        "reason": "Collecting like terms: lines 3 and 4 go into $u - yv$, and the terms in $k$ and the terms in $m$ are collected."
      },
      {
        "step": "$c = 1 - y$",
        "reason": "Substituting a value: the row of the single term $0$ has $k = 1$ and $m = 0$, so by line 5 the equation $u - yv = c(k - ym)$ reads $1 - y = c$."
      },
      {
        "step": "$4 = -cy$",
        "reason": "Substituting a value: the row of the single term $1$ has $k = 0$ and $m = 1$, so by line 5 the equation $u - yv = c(k - ym)$ reads $4 = -cy$."
      },
      {
        "step": "$4 = -(1 - y)y$",
        "reason": "Substituting a value: line 6 goes into line 7."
      },
      {
        "step": "$4 = -y + y^2$",
        "reason": "Multiplying out: each term of the bracket is multiplied by $-y$."
      },
      {
        "step": "$y^2 - y - 4 = 0$",
        "reason": "Adding the same number to both sides: $4$ is taken from both sides, and the terms in $y$ are collected."
      },
      {
        "step": "Each number $y$ with $y^2 - y - 4 = 0$ fits: with $c = 1 - y$, line 5 reads $u - yv = ck - cym$, which is $c(k - ym)$.",
        "reason": "Common factor: lines 10, 9 and 8 read backwards give $4 = -cy$, the number in front of $m$ in line 5."
      },
      {
        "step": "So $y = \\dfrac{1 + \\sqrt{17}}{2}$ or $y = \\dfrac{1 - \\sqrt{17}}{2}$.",
        "reason": "Quadratic formula: the discriminant is $(-1)^2 - 4 \\cdot 1 \\cdot (-4) = 17$."
      },
      {
        "step": "So $y = \\dfrac{1 + \\sqrt{17}}{2}$.",
        "reason": "Positive square root, from arithmetic: $17$ is above $1^2 = 1$, so $\\sqrt{17}$ is above $1$ and the second value is negative, while $y$ is positive."
      },
      {
        "step": "The number $y$ is irrational.",
        "reason": "Irrational square roots, from arithmetic: $17$ lies between $4^2 = 16$ and $5^2 = 25$, so it is no perfect square and $\\sqrt{17}$ is irrational; a rational $y$ would make $\\sqrt{17} = 2y - 1$ rational."
      },
      {
        "step": "Suppose the sequence has a period $p$, and let the row $B$ of its first $p$ terms have $k$ zeros and $m$ ones.",
        "reason": "Period: each term equals the term $p$ places on, so the sequence is $B$ written again and again."
      },
      {
        "step": "Replacing every term of the sequence by its block gives the sequence again.",
        "reason": "Substitution sequence: the block for $0$ starts with $0$, and the sequence starts with $0$."
      },
      {
        "step": "Let $C$ be the row that $B$ turns into, with $u$ zeros and $v$ ones; the sequence is $C$ written again and again.",
        "reason": "Substitution sequence: replacing the terms of $B$, $B$, $B$ and so on gives $C$, $C$, $C$ and so on, which by line 16 is the sequence."
      },
      {
        "step": "The first $p(u + v)$ terms of the sequence are $u + v$ copies of $B$, and they are $p$ copies of $C$.",
        "reason": "Period: by lines 15 and 17; $B$ has $p$ terms and $C$ has $u + v$ terms."
      },
      {
        "step": "$(u + v)k = pu$",
        "reason": "Multiplication as repeated addition, from arithmetic: the zeros among these terms are counted in the copies of $B$ and in the copies of $C$."
      },
      {
        "step": "$(u + v)m = pv$",
        "reason": "Multiplication as repeated addition, from arithmetic: the ones among these terms are counted in the copies of $B$ and in the copies of $C$."
      },
      {
        "step": "$p(u - yv) = (u + v)(k - ym)$",
        "reason": "Common factor: by lines 19 and 20, $pu - ypv = (u + v)k - y(u + v)m$, and $p$ and $u + v$ are taken out."
      },
      {
        "step": "$pc(k - ym) = (u + v)(k - ym)$",
        "reason": "Substituting a value: $u - yv = c(k - ym)$ with $c = 1 - y$, by lines 11 and 13."
      },
      {
        "step": "The number $m$ is not $0$.",
        "reason": "Period: the block for $0$ holds a $1$, so the sequence holds a $1$, in the block of its first term, and every term lies in a copy of $B$."
      },
      {
        "step": "The number $k - ym$ is not $0$.",
        "reason": "Irrational number, from arithmetic: $k = ym$ would make $y = \\dfrac{k}{m}$, a quotient of whole numbers with $m$ not $0$ by line 23, against line 14."
      },
      {
        "step": "$pc = u + v$",
        "reason": "Dividing both sides by a nonzero number: both sides of line 22 are divided by $k - ym$, which is not $0$ by line 24."
      },
      {
        "step": "So $y = \\dfrac{p - u - v}{p}$.",
        "reason": "Isolating the variable: $c = 1 - y$ from line 6 goes into line 25, which gives $p(1 - y) = u + v$; this is solved for $y$, and $p$ is not $0$."
      },
      {
        "step": "So $y$ is a rational number.",
        "reason": "Irrational number, from arithmetic: by line 26 the number $y$ is a quotient of integers, since $p$, $u$ and $v$ are whole numbers and $p$ is not $0$."
      },
      {
        "step": "So the sequence is not periodic.",
        "reason": "Irrational number, from arithmetic: lines 14 and 27 cannot both hold, so the supposition of line 15 fails for every $p$."
      }
    ]
  },
  {
    "id": "t243-k3-p01",
    "topic": "self-similar-sequences",
    "kind": "t243-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n = n + \\left\\lfloor \\dfrac{n + 3}{9} \\right\\rfloor$ for every whole number $n$ from $1$ up, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $6$ on division by $10$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n = n + \\left\\lfloor \\dfrac{n + 3}{9} \\right\\rfloor$ for every whole number $n$ from $1$ up, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $6$ on division by $10$.",
        "reason": "Floor: this is the problem as given; the numbers that leave the remainder $6$ on division by $10$ are left out, and the terms are the other whole numbers from $1$ up, in order."
      },
      {
        "step": "Let $j$ be the number of left-out numbers below $a_n$, for a whole number $n$ from $1$ up; then $a_n = n + j$.",
        "reason": "Counting the numbers left out: each whole number from $1$ to $a_n$ is one of the $n$ terms $a_1, \\dots, a_n$ or one of the $j$ left-out numbers, never both."
      },
      {
        "step": "The term satisfies $6 + 10(j - 1) + 1 \\le a_n \\le 6 + 10j - 1$.",
        "reason": "Division-with-remainder, from arithmetic: the left-out numbers are $6$, $16$, $26$ and so on, in steps of $10$; exactly $j$ of them are below $a_n$, so $6 + 10(j - 1)$ is below $a_n$ (the last of them, or a negative number when $j = 0$), and the next one, $6 + 10j$, is above $a_n$, which is not left out; whole numbers that differ are at least $1$ apart."
      },
      {
        "step": "$6 + 10(j - 1) + 1 \\le n + j \\le 6 + 10j - 1$",
        "reason": "Substituting a value: $a_n = n + j$ from line 2."
      },
      {
        "step": "$9j \\le n + 3$",
        "reason": "Adding the same number, from arithmetic: $3 - j$ is added to both sides of the left inequality of line 4, and $6 + 10(j - 1) + 1 + 3 - j = 9j$."
      },
      {
        "step": "$n + 3 \\le 9j + 8$",
        "reason": "Adding the same number, from arithmetic: $3 - j$ is added to both sides of the right inequality of line 4, and $6 + 10j - 1 + 3 - j = 9j + 8$."
      },
      {
        "step": "$n + 3 < 9(j + 1)$",
        "reason": "Transitivity, from arithmetic: $9j + 8$ is below $9j + 9$, which is $9(j + 1)$."
      },
      {
        "step": "$j \\le \\dfrac{n + 3}{9} < j + 1$",
        "reason": "Multiplying by a positive number, from arithmetic: lines 5 and 7 are divided by $9$."
      },
      {
        "step": "$j = \\left\\lfloor \\dfrac{n + 3}{9} \\right\\rfloor$",
        "reason": "Floor: the floor of a number $x$ is the whole number $j$ with $j \\le x < j + 1$."
      },
      {
        "step": "So $a_n = n + \\left\\lfloor \\dfrac{n + 3}{9} \\right\\rfloor$ for every whole number $n$ from $1$ up.",
        "reason": "Substituting a value: line 9 goes into line 2."
      }
    ]
  },
  {
    "id": "t243-k3-p02",
    "topic": "self-similar-sequences",
    "kind": "t243-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n = n + \\left\\lfloor \\dfrac{n + 9}{10} \\right\\rfloor$ for every whole number $n$ from $1$ up, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $1$ on division by $11$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n = n + \\left\\lfloor \\dfrac{n + 9}{10} \\right\\rfloor$ for every whole number $n$ from $1$ up, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $1$ on division by $11$.",
        "reason": "Floor: this is the problem as given; the numbers that leave the remainder $1$ on division by $11$ are left out, and the terms are the other whole numbers from $1$ up, in order."
      },
      {
        "step": "Let $j$ be the number of left-out numbers below $a_n$, for a whole number $n$ from $1$ up; then $a_n = n + j$.",
        "reason": "Counting the numbers left out: each whole number from $1$ to $a_n$ is one of the $n$ terms $a_1, \\dots, a_n$ or one of the $j$ left-out numbers, never both."
      },
      {
        "step": "The term satisfies $1 + 11(j - 1) + 1 \\le a_n \\le 1 + 11j - 1$.",
        "reason": "Division-with-remainder, from arithmetic: the left-out numbers are $1$, $12$, $23$ and so on, in steps of $11$; exactly $j$ of them are below $a_n$, so $1 + 11(j - 1)$ is below $a_n$ (the last of them, or a negative number when $j = 0$), and the next one, $1 + 11j$, is above $a_n$, which is not left out; whole numbers that differ are at least $1$ apart."
      },
      {
        "step": "$1 + 11(j - 1) + 1 \\le n + j \\le 1 + 11j - 1$",
        "reason": "Substituting a value: $a_n = n + j$ from line 2."
      },
      {
        "step": "$10j \\le n + 9$",
        "reason": "Adding the same number, from arithmetic: $9 - j$ is added to both sides of the left inequality of line 4, and $1 + 11(j - 1) + 1 + 9 - j = 10j$."
      },
      {
        "step": "$n + 9 \\le 10j + 9$",
        "reason": "Adding the same number, from arithmetic: $9 - j$ is added to both sides of the right inequality of line 4, and $1 + 11j - 1 + 9 - j = 10j + 9$."
      },
      {
        "step": "$n + 9 < 10(j + 1)$",
        "reason": "Transitivity, from arithmetic: $10j + 9$ is below $10j + 10$, which is $10(j + 1)$."
      },
      {
        "step": "$j \\le \\dfrac{n + 9}{10} < j + 1$",
        "reason": "Multiplying by a positive number, from arithmetic: lines 5 and 7 are divided by $10$."
      },
      {
        "step": "$j = \\left\\lfloor \\dfrac{n + 9}{10} \\right\\rfloor$",
        "reason": "Floor: the floor of a number $x$ is the whole number $j$ with $j \\le x < j + 1$."
      },
      {
        "step": "So $a_n = n + \\left\\lfloor \\dfrac{n + 9}{10} \\right\\rfloor$ for every whole number $n$ from $1$ up.",
        "reason": "Substituting a value: line 9 goes into line 2."
      }
    ]
  },
  {
    "id": "t243-k3-p03",
    "topic": "self-similar-sequences",
    "kind": "t243-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n = n + \\left\\lfloor \\dfrac{n + 2}{10} \\right\\rfloor$ for every whole number $n$ from $1$ up, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $8$ on division by $11$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n = n + \\left\\lfloor \\dfrac{n + 2}{10} \\right\\rfloor$ for every whole number $n$ from $1$ up, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $8$ on division by $11$.",
        "reason": "Floor: this is the problem as given; the numbers that leave the remainder $8$ on division by $11$ are left out, and the terms are the other whole numbers from $1$ up, in order."
      },
      {
        "step": "Let $j$ be the number of left-out numbers below $a_n$, for a whole number $n$ from $1$ up; then $a_n = n + j$.",
        "reason": "Counting the numbers left out: each whole number from $1$ to $a_n$ is one of the $n$ terms $a_1, \\dots, a_n$ or one of the $j$ left-out numbers, never both."
      },
      {
        "step": "The term satisfies $8 + 11(j - 1) + 1 \\le a_n \\le 8 + 11j - 1$.",
        "reason": "Division-with-remainder, from arithmetic: the left-out numbers are $8$, $19$, $30$ and so on, in steps of $11$; exactly $j$ of them are below $a_n$, so $8 + 11(j - 1)$ is below $a_n$ (the last of them, or a negative number when $j = 0$), and the next one, $8 + 11j$, is above $a_n$, which is not left out; whole numbers that differ are at least $1$ apart."
      },
      {
        "step": "$8 + 11(j - 1) + 1 \\le n + j \\le 8 + 11j - 1$",
        "reason": "Substituting a value: $a_n = n + j$ from line 2."
      },
      {
        "step": "$10j \\le n + 2$",
        "reason": "Adding the same number, from arithmetic: $2 - j$ is added to both sides of the left inequality of line 4, and $8 + 11(j - 1) + 1 + 2 - j = 10j$."
      },
      {
        "step": "$n + 2 \\le 10j + 9$",
        "reason": "Adding the same number, from arithmetic: $2 - j$ is added to both sides of the right inequality of line 4, and $8 + 11j - 1 + 2 - j = 10j + 9$."
      },
      {
        "step": "$n + 2 < 10(j + 1)$",
        "reason": "Transitivity, from arithmetic: $10j + 9$ is below $10j + 10$, which is $10(j + 1)$."
      },
      {
        "step": "$j \\le \\dfrac{n + 2}{10} < j + 1$",
        "reason": "Multiplying by a positive number, from arithmetic: lines 5 and 7 are divided by $10$."
      },
      {
        "step": "$j = \\left\\lfloor \\dfrac{n + 2}{10} \\right\\rfloor$",
        "reason": "Floor: the floor of a number $x$ is the whole number $j$ with $j \\le x < j + 1$."
      },
      {
        "step": "So $a_n = n + \\left\\lfloor \\dfrac{n + 2}{10} \\right\\rfloor$ for every whole number $n$ from $1$ up.",
        "reason": "Substituting a value: line 9 goes into line 2."
      }
    ]
  },
  {
    "id": "t243-k3-p04",
    "topic": "self-similar-sequences",
    "kind": "t243-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n = n + \\left\\lfloor \\dfrac{n + 2}{7} \\right\\rfloor$ for every whole number $n$ from $1$ up, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $5$ on division by $8$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n = n + \\left\\lfloor \\dfrac{n + 2}{7} \\right\\rfloor$ for every whole number $n$ from $1$ up, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $5$ on division by $8$.",
        "reason": "Floor: this is the problem as given; the numbers that leave the remainder $5$ on division by $8$ are left out, and the terms are the other whole numbers from $1$ up, in order."
      },
      {
        "step": "Let $j$ be the number of left-out numbers below $a_n$, for a whole number $n$ from $1$ up; then $a_n = n + j$.",
        "reason": "Counting the numbers left out: each whole number from $1$ to $a_n$ is one of the $n$ terms $a_1, \\dots, a_n$ or one of the $j$ left-out numbers, never both."
      },
      {
        "step": "The term satisfies $5 + 8(j - 1) + 1 \\le a_n \\le 5 + 8j - 1$.",
        "reason": "Division-with-remainder, from arithmetic: the left-out numbers are $5$, $13$, $21$ and so on, in steps of $8$; exactly $j$ of them are below $a_n$, so $5 + 8(j - 1)$ is below $a_n$ (the last of them, or a negative number when $j = 0$), and the next one, $5 + 8j$, is above $a_n$, which is not left out; whole numbers that differ are at least $1$ apart."
      },
      {
        "step": "$5 + 8(j - 1) + 1 \\le n + j \\le 5 + 8j - 1$",
        "reason": "Substituting a value: $a_n = n + j$ from line 2."
      },
      {
        "step": "$7j \\le n + 2$",
        "reason": "Adding the same number, from arithmetic: $2 - j$ is added to both sides of the left inequality of line 4, and $5 + 8(j - 1) + 1 + 2 - j = 7j$."
      },
      {
        "step": "$n + 2 \\le 7j + 6$",
        "reason": "Adding the same number, from arithmetic: $2 - j$ is added to both sides of the right inequality of line 4, and $5 + 8j - 1 + 2 - j = 7j + 6$."
      },
      {
        "step": "$n + 2 < 7(j + 1)$",
        "reason": "Transitivity, from arithmetic: $7j + 6$ is below $7j + 7$, which is $7(j + 1)$."
      },
      {
        "step": "$j \\le \\dfrac{n + 2}{7} < j + 1$",
        "reason": "Multiplying by a positive number, from arithmetic: lines 5 and 7 are divided by $7$."
      },
      {
        "step": "$j = \\left\\lfloor \\dfrac{n + 2}{7} \\right\\rfloor$",
        "reason": "Floor: the floor of a number $x$ is the whole number $j$ with $j \\le x < j + 1$."
      },
      {
        "step": "So $a_n = n + \\left\\lfloor \\dfrac{n + 2}{7} \\right\\rfloor$ for every whole number $n$ from $1$ up.",
        "reason": "Substituting a value: line 9 goes into line 2."
      }
    ]
  },
  {
    "id": "t243-k3-p05",
    "topic": "self-similar-sequences",
    "kind": "t243-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n = n + \\left\\lfloor \\dfrac{n + 6}{9} \\right\\rfloor$ for every whole number $n$ from $1$ up, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $3$ on division by $10$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n = n + \\left\\lfloor \\dfrac{n + 6}{9} \\right\\rfloor$ for every whole number $n$ from $1$ up, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $3$ on division by $10$.",
        "reason": "Floor: this is the problem as given; the numbers that leave the remainder $3$ on division by $10$ are left out, and the terms are the other whole numbers from $1$ up, in order."
      },
      {
        "step": "Let $j$ be the number of left-out numbers below $a_n$, for a whole number $n$ from $1$ up; then $a_n = n + j$.",
        "reason": "Counting the numbers left out: each whole number from $1$ to $a_n$ is one of the $n$ terms $a_1, \\dots, a_n$ or one of the $j$ left-out numbers, never both."
      },
      {
        "step": "The term satisfies $3 + 10(j - 1) + 1 \\le a_n \\le 3 + 10j - 1$.",
        "reason": "Division-with-remainder, from arithmetic: the left-out numbers are $3$, $13$, $23$ and so on, in steps of $10$; exactly $j$ of them are below $a_n$, so $3 + 10(j - 1)$ is below $a_n$ (the last of them, or a negative number when $j = 0$), and the next one, $3 + 10j$, is above $a_n$, which is not left out; whole numbers that differ are at least $1$ apart."
      },
      {
        "step": "$3 + 10(j - 1) + 1 \\le n + j \\le 3 + 10j - 1$",
        "reason": "Substituting a value: $a_n = n + j$ from line 2."
      },
      {
        "step": "$9j \\le n + 6$",
        "reason": "Adding the same number, from arithmetic: $6 - j$ is added to both sides of the left inequality of line 4, and $3 + 10(j - 1) + 1 + 6 - j = 9j$."
      },
      {
        "step": "$n + 6 \\le 9j + 8$",
        "reason": "Adding the same number, from arithmetic: $6 - j$ is added to both sides of the right inequality of line 4, and $3 + 10j - 1 + 6 - j = 9j + 8$."
      },
      {
        "step": "$n + 6 < 9(j + 1)$",
        "reason": "Transitivity, from arithmetic: $9j + 8$ is below $9j + 9$, which is $9(j + 1)$."
      },
      {
        "step": "$j \\le \\dfrac{n + 6}{9} < j + 1$",
        "reason": "Multiplying by a positive number, from arithmetic: lines 5 and 7 are divided by $9$."
      },
      {
        "step": "$j = \\left\\lfloor \\dfrac{n + 6}{9} \\right\\rfloor$",
        "reason": "Floor: the floor of a number $x$ is the whole number $j$ with $j \\le x < j + 1$."
      },
      {
        "step": "So $a_n = n + \\left\\lfloor \\dfrac{n + 6}{9} \\right\\rfloor$ for every whole number $n$ from $1$ up.",
        "reason": "Substituting a value: line 9 goes into line 2."
      }
    ]
  },
  {
    "id": "t243-k3-p06",
    "topic": "self-similar-sequences",
    "kind": "t243-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n = n + \\left\\lfloor \\dfrac{n + 5}{6} \\right\\rfloor$ for every whole number $n$ from $1$ up, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $1$ on division by $7$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n = n + \\left\\lfloor \\dfrac{n + 5}{6} \\right\\rfloor$ for every whole number $n$ from $1$ up, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $1$ on division by $7$.",
        "reason": "Floor: this is the problem as given; the numbers that leave the remainder $1$ on division by $7$ are left out, and the terms are the other whole numbers from $1$ up, in order."
      },
      {
        "step": "Let $j$ be the number of left-out numbers below $a_n$, for a whole number $n$ from $1$ up; then $a_n = n + j$.",
        "reason": "Counting the numbers left out: each whole number from $1$ to $a_n$ is one of the $n$ terms $a_1, \\dots, a_n$ or one of the $j$ left-out numbers, never both."
      },
      {
        "step": "The term satisfies $1 + 7(j - 1) + 1 \\le a_n \\le 1 + 7j - 1$.",
        "reason": "Division-with-remainder, from arithmetic: the left-out numbers are $1$, $8$, $15$ and so on, in steps of $7$; exactly $j$ of them are below $a_n$, so $1 + 7(j - 1)$ is below $a_n$ (the last of them, or a negative number when $j = 0$), and the next one, $1 + 7j$, is above $a_n$, which is not left out; whole numbers that differ are at least $1$ apart."
      },
      {
        "step": "$1 + 7(j - 1) + 1 \\le n + j \\le 1 + 7j - 1$",
        "reason": "Substituting a value: $a_n = n + j$ from line 2."
      },
      {
        "step": "$6j \\le n + 5$",
        "reason": "Adding the same number, from arithmetic: $5 - j$ is added to both sides of the left inequality of line 4, and $1 + 7(j - 1) + 1 + 5 - j = 6j$."
      },
      {
        "step": "$n + 5 \\le 6j + 5$",
        "reason": "Adding the same number, from arithmetic: $5 - j$ is added to both sides of the right inequality of line 4, and $1 + 7j - 1 + 5 - j = 6j + 5$."
      },
      {
        "step": "$n + 5 < 6(j + 1)$",
        "reason": "Transitivity, from arithmetic: $6j + 5$ is below $6j + 6$, which is $6(j + 1)$."
      },
      {
        "step": "$j \\le \\dfrac{n + 5}{6} < j + 1$",
        "reason": "Multiplying by a positive number, from arithmetic: lines 5 and 7 are divided by $6$."
      },
      {
        "step": "$j = \\left\\lfloor \\dfrac{n + 5}{6} \\right\\rfloor$",
        "reason": "Floor: the floor of a number $x$ is the whole number $j$ with $j \\le x < j + 1$."
      },
      {
        "step": "So $a_n = n + \\left\\lfloor \\dfrac{n + 5}{6} \\right\\rfloor$ for every whole number $n$ from $1$ up.",
        "reason": "Substituting a value: line 9 goes into line 2."
      }
    ]
  },
  {
    "id": "t243-k3-p07",
    "topic": "self-similar-sequences",
    "kind": "t243-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n = n + \\left\\lfloor \\dfrac{n + 1}{9} \\right\\rfloor$ for every whole number $n$ from $1$ up, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $8$ on division by $10$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n = n + \\left\\lfloor \\dfrac{n + 1}{9} \\right\\rfloor$ for every whole number $n$ from $1$ up, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $8$ on division by $10$.",
        "reason": "Floor: this is the problem as given; the numbers that leave the remainder $8$ on division by $10$ are left out, and the terms are the other whole numbers from $1$ up, in order."
      },
      {
        "step": "Let $j$ be the number of left-out numbers below $a_n$, for a whole number $n$ from $1$ up; then $a_n = n + j$.",
        "reason": "Counting the numbers left out: each whole number from $1$ to $a_n$ is one of the $n$ terms $a_1, \\dots, a_n$ or one of the $j$ left-out numbers, never both."
      },
      {
        "step": "The term satisfies $8 + 10(j - 1) + 1 \\le a_n \\le 8 + 10j - 1$.",
        "reason": "Division-with-remainder, from arithmetic: the left-out numbers are $8$, $18$, $28$ and so on, in steps of $10$; exactly $j$ of them are below $a_n$, so $8 + 10(j - 1)$ is below $a_n$ (the last of them, or a negative number when $j = 0$), and the next one, $8 + 10j$, is above $a_n$, which is not left out; whole numbers that differ are at least $1$ apart."
      },
      {
        "step": "$8 + 10(j - 1) + 1 \\le n + j \\le 8 + 10j - 1$",
        "reason": "Substituting a value: $a_n = n + j$ from line 2."
      },
      {
        "step": "$9j \\le n + 1$",
        "reason": "Adding the same number, from arithmetic: $1 - j$ is added to both sides of the left inequality of line 4, and $8 + 10(j - 1) + 1 + 1 - j = 9j$."
      },
      {
        "step": "$n + 1 \\le 9j + 8$",
        "reason": "Adding the same number, from arithmetic: $1 - j$ is added to both sides of the right inequality of line 4, and $8 + 10j - 1 + 1 - j = 9j + 8$."
      },
      {
        "step": "$n + 1 < 9(j + 1)$",
        "reason": "Transitivity, from arithmetic: $9j + 8$ is below $9j + 9$, which is $9(j + 1)$."
      },
      {
        "step": "$j \\le \\dfrac{n + 1}{9} < j + 1$",
        "reason": "Multiplying by a positive number, from arithmetic: lines 5 and 7 are divided by $9$."
      },
      {
        "step": "$j = \\left\\lfloor \\dfrac{n + 1}{9} \\right\\rfloor$",
        "reason": "Floor: the floor of a number $x$ is the whole number $j$ with $j \\le x < j + 1$."
      },
      {
        "step": "So $a_n = n + \\left\\lfloor \\dfrac{n + 1}{9} \\right\\rfloor$ for every whole number $n$ from $1$ up.",
        "reason": "Substituting a value: line 9 goes into line 2."
      }
    ]
  },
  {
    "id": "t243-k3-p08",
    "topic": "self-similar-sequences",
    "kind": "t243-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n = n + \\left\\lfloor \\dfrac{n + 1}{8} \\right\\rfloor$ for every whole number $n$ from $1$ up, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $7$ on division by $9$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n = n + \\left\\lfloor \\dfrac{n + 1}{8} \\right\\rfloor$ for every whole number $n$ from $1$ up, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $7$ on division by $9$.",
        "reason": "Floor: this is the problem as given; the numbers that leave the remainder $7$ on division by $9$ are left out, and the terms are the other whole numbers from $1$ up, in order."
      },
      {
        "step": "Let $j$ be the number of left-out numbers below $a_n$, for a whole number $n$ from $1$ up; then $a_n = n + j$.",
        "reason": "Counting the numbers left out: each whole number from $1$ to $a_n$ is one of the $n$ terms $a_1, \\dots, a_n$ or one of the $j$ left-out numbers, never both."
      },
      {
        "step": "The term satisfies $7 + 9(j - 1) + 1 \\le a_n \\le 7 + 9j - 1$.",
        "reason": "Division-with-remainder, from arithmetic: the left-out numbers are $7$, $16$, $25$ and so on, in steps of $9$; exactly $j$ of them are below $a_n$, so $7 + 9(j - 1)$ is below $a_n$ (the last of them, or a negative number when $j = 0$), and the next one, $7 + 9j$, is above $a_n$, which is not left out; whole numbers that differ are at least $1$ apart."
      },
      {
        "step": "$7 + 9(j - 1) + 1 \\le n + j \\le 7 + 9j - 1$",
        "reason": "Substituting a value: $a_n = n + j$ from line 2."
      },
      {
        "step": "$8j \\le n + 1$",
        "reason": "Adding the same number, from arithmetic: $1 - j$ is added to both sides of the left inequality of line 4, and $7 + 9(j - 1) + 1 + 1 - j = 8j$."
      },
      {
        "step": "$n + 1 \\le 8j + 7$",
        "reason": "Adding the same number, from arithmetic: $1 - j$ is added to both sides of the right inequality of line 4, and $7 + 9j - 1 + 1 - j = 8j + 7$."
      },
      {
        "step": "$n + 1 < 8(j + 1)$",
        "reason": "Transitivity, from arithmetic: $8j + 7$ is below $8j + 8$, which is $8(j + 1)$."
      },
      {
        "step": "$j \\le \\dfrac{n + 1}{8} < j + 1$",
        "reason": "Multiplying by a positive number, from arithmetic: lines 5 and 7 are divided by $8$."
      },
      {
        "step": "$j = \\left\\lfloor \\dfrac{n + 1}{8} \\right\\rfloor$",
        "reason": "Floor: the floor of a number $x$ is the whole number $j$ with $j \\le x < j + 1$."
      },
      {
        "step": "So $a_n = n + \\left\\lfloor \\dfrac{n + 1}{8} \\right\\rfloor$ for every whole number $n$ from $1$ up.",
        "reason": "Substituting a value: line 9 goes into line 2."
      }
    ]
  },
  {
    "id": "t243-k3-p09",
    "topic": "self-similar-sequences",
    "kind": "t243-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n = n + \\left\\lfloor \\dfrac{n + 7}{8} \\right\\rfloor$ for every whole number $n$ from $1$ up, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $1$ on division by $9$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n = n + \\left\\lfloor \\dfrac{n + 7}{8} \\right\\rfloor$ for every whole number $n$ from $1$ up, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $1$ on division by $9$.",
        "reason": "Floor: this is the problem as given; the numbers that leave the remainder $1$ on division by $9$ are left out, and the terms are the other whole numbers from $1$ up, in order."
      },
      {
        "step": "Let $j$ be the number of left-out numbers below $a_n$, for a whole number $n$ from $1$ up; then $a_n = n + j$.",
        "reason": "Counting the numbers left out: each whole number from $1$ to $a_n$ is one of the $n$ terms $a_1, \\dots, a_n$ or one of the $j$ left-out numbers, never both."
      },
      {
        "step": "The term satisfies $1 + 9(j - 1) + 1 \\le a_n \\le 1 + 9j - 1$.",
        "reason": "Division-with-remainder, from arithmetic: the left-out numbers are $1$, $10$, $19$ and so on, in steps of $9$; exactly $j$ of them are below $a_n$, so $1 + 9(j - 1)$ is below $a_n$ (the last of them, or a negative number when $j = 0$), and the next one, $1 + 9j$, is above $a_n$, which is not left out; whole numbers that differ are at least $1$ apart."
      },
      {
        "step": "$1 + 9(j - 1) + 1 \\le n + j \\le 1 + 9j - 1$",
        "reason": "Substituting a value: $a_n = n + j$ from line 2."
      },
      {
        "step": "$8j \\le n + 7$",
        "reason": "Adding the same number, from arithmetic: $7 - j$ is added to both sides of the left inequality of line 4, and $1 + 9(j - 1) + 1 + 7 - j = 8j$."
      },
      {
        "step": "$n + 7 \\le 8j + 7$",
        "reason": "Adding the same number, from arithmetic: $7 - j$ is added to both sides of the right inequality of line 4, and $1 + 9j - 1 + 7 - j = 8j + 7$."
      },
      {
        "step": "$n + 7 < 8(j + 1)$",
        "reason": "Transitivity, from arithmetic: $8j + 7$ is below $8j + 8$, which is $8(j + 1)$."
      },
      {
        "step": "$j \\le \\dfrac{n + 7}{8} < j + 1$",
        "reason": "Multiplying by a positive number, from arithmetic: lines 5 and 7 are divided by $8$."
      },
      {
        "step": "$j = \\left\\lfloor \\dfrac{n + 7}{8} \\right\\rfloor$",
        "reason": "Floor: the floor of a number $x$ is the whole number $j$ with $j \\le x < j + 1$."
      },
      {
        "step": "So $a_n = n + \\left\\lfloor \\dfrac{n + 7}{8} \\right\\rfloor$ for every whole number $n$ from $1$ up.",
        "reason": "Substituting a value: line 9 goes into line 2."
      }
    ]
  },
  {
    "id": "t243-k3-p10",
    "topic": "self-similar-sequences",
    "kind": "t243-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n = n + \\left\\lfloor \\dfrac{n + 5}{8} \\right\\rfloor$ for every whole number $n$ from $1$ up, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $3$ on division by $9$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n = n + \\left\\lfloor \\dfrac{n + 5}{8} \\right\\rfloor$ for every whole number $n$ from $1$ up, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $3$ on division by $9$.",
        "reason": "Floor: this is the problem as given; the numbers that leave the remainder $3$ on division by $9$ are left out, and the terms are the other whole numbers from $1$ up, in order."
      },
      {
        "step": "Let $j$ be the number of left-out numbers below $a_n$, for a whole number $n$ from $1$ up; then $a_n = n + j$.",
        "reason": "Counting the numbers left out: each whole number from $1$ to $a_n$ is one of the $n$ terms $a_1, \\dots, a_n$ or one of the $j$ left-out numbers, never both."
      },
      {
        "step": "The term satisfies $3 + 9(j - 1) + 1 \\le a_n \\le 3 + 9j - 1$.",
        "reason": "Division-with-remainder, from arithmetic: the left-out numbers are $3$, $12$, $21$ and so on, in steps of $9$; exactly $j$ of them are below $a_n$, so $3 + 9(j - 1)$ is below $a_n$ (the last of them, or a negative number when $j = 0$), and the next one, $3 + 9j$, is above $a_n$, which is not left out; whole numbers that differ are at least $1$ apart."
      },
      {
        "step": "$3 + 9(j - 1) + 1 \\le n + j \\le 3 + 9j - 1$",
        "reason": "Substituting a value: $a_n = n + j$ from line 2."
      },
      {
        "step": "$8j \\le n + 5$",
        "reason": "Adding the same number, from arithmetic: $5 - j$ is added to both sides of the left inequality of line 4, and $3 + 9(j - 1) + 1 + 5 - j = 8j$."
      },
      {
        "step": "$n + 5 \\le 8j + 7$",
        "reason": "Adding the same number, from arithmetic: $5 - j$ is added to both sides of the right inequality of line 4, and $3 + 9j - 1 + 5 - j = 8j + 7$."
      },
      {
        "step": "$n + 5 < 8(j + 1)$",
        "reason": "Transitivity, from arithmetic: $8j + 7$ is below $8j + 8$, which is $8(j + 1)$."
      },
      {
        "step": "$j \\le \\dfrac{n + 5}{8} < j + 1$",
        "reason": "Multiplying by a positive number, from arithmetic: lines 5 and 7 are divided by $8$."
      },
      {
        "step": "$j = \\left\\lfloor \\dfrac{n + 5}{8} \\right\\rfloor$",
        "reason": "Floor: the floor of a number $x$ is the whole number $j$ with $j \\le x < j + 1$."
      },
      {
        "step": "So $a_n = n + \\left\\lfloor \\dfrac{n + 5}{8} \\right\\rfloor$ for every whole number $n$ from $1$ up.",
        "reason": "Substituting a value: line 9 goes into line 2."
      }
    ]
  },
  {
    "id": "t243-k3-p11",
    "topic": "self-similar-sequences",
    "kind": "t243-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n = n + \\left\\lfloor \\dfrac{n + 4}{7} \\right\\rfloor$ for every whole number $n$ from $1$ up, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $3$ on division by $8$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n = n + \\left\\lfloor \\dfrac{n + 4}{7} \\right\\rfloor$ for every whole number $n$ from $1$ up, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $3$ on division by $8$.",
        "reason": "Floor: this is the problem as given; the numbers that leave the remainder $3$ on division by $8$ are left out, and the terms are the other whole numbers from $1$ up, in order."
      },
      {
        "step": "Let $j$ be the number of left-out numbers below $a_n$, for a whole number $n$ from $1$ up; then $a_n = n + j$.",
        "reason": "Counting the numbers left out: each whole number from $1$ to $a_n$ is one of the $n$ terms $a_1, \\dots, a_n$ or one of the $j$ left-out numbers, never both."
      },
      {
        "step": "The term satisfies $3 + 8(j - 1) + 1 \\le a_n \\le 3 + 8j - 1$.",
        "reason": "Division-with-remainder, from arithmetic: the left-out numbers are $3$, $11$, $19$ and so on, in steps of $8$; exactly $j$ of them are below $a_n$, so $3 + 8(j - 1)$ is below $a_n$ (the last of them, or a negative number when $j = 0$), and the next one, $3 + 8j$, is above $a_n$, which is not left out; whole numbers that differ are at least $1$ apart."
      },
      {
        "step": "$3 + 8(j - 1) + 1 \\le n + j \\le 3 + 8j - 1$",
        "reason": "Substituting a value: $a_n = n + j$ from line 2."
      },
      {
        "step": "$7j \\le n + 4$",
        "reason": "Adding the same number, from arithmetic: $4 - j$ is added to both sides of the left inequality of line 4, and $3 + 8(j - 1) + 1 + 4 - j = 7j$."
      },
      {
        "step": "$n + 4 \\le 7j + 6$",
        "reason": "Adding the same number, from arithmetic: $4 - j$ is added to both sides of the right inequality of line 4, and $3 + 8j - 1 + 4 - j = 7j + 6$."
      },
      {
        "step": "$n + 4 < 7(j + 1)$",
        "reason": "Transitivity, from arithmetic: $7j + 6$ is below $7j + 7$, which is $7(j + 1)$."
      },
      {
        "step": "$j \\le \\dfrac{n + 4}{7} < j + 1$",
        "reason": "Multiplying by a positive number, from arithmetic: lines 5 and 7 are divided by $7$."
      },
      {
        "step": "$j = \\left\\lfloor \\dfrac{n + 4}{7} \\right\\rfloor$",
        "reason": "Floor: the floor of a number $x$ is the whole number $j$ with $j \\le x < j + 1$."
      },
      {
        "step": "So $a_n = n + \\left\\lfloor \\dfrac{n + 4}{7} \\right\\rfloor$ for every whole number $n$ from $1$ up.",
        "reason": "Substituting a value: line 9 goes into line 2."
      }
    ]
  },
  {
    "id": "t243-k3-p12",
    "topic": "self-similar-sequences",
    "kind": "t243-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n = n + \\left\\lfloor \\dfrac{n + 4}{5} \\right\\rfloor$ for every whole number $n$ from $1$ up, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $1$ on division by $6$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n = n + \\left\\lfloor \\dfrac{n + 4}{5} \\right\\rfloor$ for every whole number $n$ from $1$ up, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $1$ on division by $6$.",
        "reason": "Floor: this is the problem as given; the numbers that leave the remainder $1$ on division by $6$ are left out, and the terms are the other whole numbers from $1$ up, in order."
      },
      {
        "step": "Let $j$ be the number of left-out numbers below $a_n$, for a whole number $n$ from $1$ up; then $a_n = n + j$.",
        "reason": "Counting the numbers left out: each whole number from $1$ to $a_n$ is one of the $n$ terms $a_1, \\dots, a_n$ or one of the $j$ left-out numbers, never both."
      },
      {
        "step": "The term satisfies $1 + 6(j - 1) + 1 \\le a_n \\le 1 + 6j - 1$.",
        "reason": "Division-with-remainder, from arithmetic: the left-out numbers are $1$, $7$, $13$ and so on, in steps of $6$; exactly $j$ of them are below $a_n$, so $1 + 6(j - 1)$ is below $a_n$ (the last of them, or a negative number when $j = 0$), and the next one, $1 + 6j$, is above $a_n$, which is not left out; whole numbers that differ are at least $1$ apart."
      },
      {
        "step": "$1 + 6(j - 1) + 1 \\le n + j \\le 1 + 6j - 1$",
        "reason": "Substituting a value: $a_n = n + j$ from line 2."
      },
      {
        "step": "$5j \\le n + 4$",
        "reason": "Adding the same number, from arithmetic: $4 - j$ is added to both sides of the left inequality of line 4, and $1 + 6(j - 1) + 1 + 4 - j = 5j$."
      },
      {
        "step": "$n + 4 \\le 5j + 4$",
        "reason": "Adding the same number, from arithmetic: $4 - j$ is added to both sides of the right inequality of line 4, and $1 + 6j - 1 + 4 - j = 5j + 4$."
      },
      {
        "step": "$n + 4 < 5(j + 1)$",
        "reason": "Transitivity, from arithmetic: $5j + 4$ is below $5j + 5$, which is $5(j + 1)$."
      },
      {
        "step": "$j \\le \\dfrac{n + 4}{5} < j + 1$",
        "reason": "Multiplying by a positive number, from arithmetic: lines 5 and 7 are divided by $5$."
      },
      {
        "step": "$j = \\left\\lfloor \\dfrac{n + 4}{5} \\right\\rfloor$",
        "reason": "Floor: the floor of a number $x$ is the whole number $j$ with $j \\le x < j + 1$."
      },
      {
        "step": "So $a_n = n + \\left\\lfloor \\dfrac{n + 4}{5} \\right\\rfloor$ for every whole number $n$ from $1$ up.",
        "reason": "Substituting a value: line 9 goes into line 2."
      }
    ]
  },
  {
    "id": "t243-k3-p13",
    "topic": "self-similar-sequences",
    "kind": "t243-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n = n + \\left\\lfloor \\dfrac{n + 6}{7} \\right\\rfloor$ for every whole number $n$ from $1$ up, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $1$ on division by $8$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n = n + \\left\\lfloor \\dfrac{n + 6}{7} \\right\\rfloor$ for every whole number $n$ from $1$ up, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $1$ on division by $8$.",
        "reason": "Floor: this is the problem as given; the numbers that leave the remainder $1$ on division by $8$ are left out, and the terms are the other whole numbers from $1$ up, in order."
      },
      {
        "step": "Let $j$ be the number of left-out numbers below $a_n$, for a whole number $n$ from $1$ up; then $a_n = n + j$.",
        "reason": "Counting the numbers left out: each whole number from $1$ to $a_n$ is one of the $n$ terms $a_1, \\dots, a_n$ or one of the $j$ left-out numbers, never both."
      },
      {
        "step": "The term satisfies $1 + 8(j - 1) + 1 \\le a_n \\le 1 + 8j - 1$.",
        "reason": "Division-with-remainder, from arithmetic: the left-out numbers are $1$, $9$, $17$ and so on, in steps of $8$; exactly $j$ of them are below $a_n$, so $1 + 8(j - 1)$ is below $a_n$ (the last of them, or a negative number when $j = 0$), and the next one, $1 + 8j$, is above $a_n$, which is not left out; whole numbers that differ are at least $1$ apart."
      },
      {
        "step": "$1 + 8(j - 1) + 1 \\le n + j \\le 1 + 8j - 1$",
        "reason": "Substituting a value: $a_n = n + j$ from line 2."
      },
      {
        "step": "$7j \\le n + 6$",
        "reason": "Adding the same number, from arithmetic: $6 - j$ is added to both sides of the left inequality of line 4, and $1 + 8(j - 1) + 1 + 6 - j = 7j$."
      },
      {
        "step": "$n + 6 \\le 7j + 6$",
        "reason": "Adding the same number, from arithmetic: $6 - j$ is added to both sides of the right inequality of line 4, and $1 + 8j - 1 + 6 - j = 7j + 6$."
      },
      {
        "step": "$n + 6 < 7(j + 1)$",
        "reason": "Transitivity, from arithmetic: $7j + 6$ is below $7j + 7$, which is $7(j + 1)$."
      },
      {
        "step": "$j \\le \\dfrac{n + 6}{7} < j + 1$",
        "reason": "Multiplying by a positive number, from arithmetic: lines 5 and 7 are divided by $7$."
      },
      {
        "step": "$j = \\left\\lfloor \\dfrac{n + 6}{7} \\right\\rfloor$",
        "reason": "Floor: the floor of a number $x$ is the whole number $j$ with $j \\le x < j + 1$."
      },
      {
        "step": "So $a_n = n + \\left\\lfloor \\dfrac{n + 6}{7} \\right\\rfloor$ for every whole number $n$ from $1$ up.",
        "reason": "Substituting a value: line 9 goes into line 2."
      }
    ]
  },
  {
    "id": "t243-k3-p14",
    "topic": "self-similar-sequences",
    "kind": "t243-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n = n + \\left\\lfloor \\dfrac{n + 7}{10} \\right\\rfloor$ for every whole number $n$ from $1$ up, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $3$ on division by $11$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n = n + \\left\\lfloor \\dfrac{n + 7}{10} \\right\\rfloor$ for every whole number $n$ from $1$ up, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $3$ on division by $11$.",
        "reason": "Floor: this is the problem as given; the numbers that leave the remainder $3$ on division by $11$ are left out, and the terms are the other whole numbers from $1$ up, in order."
      },
      {
        "step": "Let $j$ be the number of left-out numbers below $a_n$, for a whole number $n$ from $1$ up; then $a_n = n + j$.",
        "reason": "Counting the numbers left out: each whole number from $1$ to $a_n$ is one of the $n$ terms $a_1, \\dots, a_n$ or one of the $j$ left-out numbers, never both."
      },
      {
        "step": "The term satisfies $3 + 11(j - 1) + 1 \\le a_n \\le 3 + 11j - 1$.",
        "reason": "Division-with-remainder, from arithmetic: the left-out numbers are $3$, $14$, $25$ and so on, in steps of $11$; exactly $j$ of them are below $a_n$, so $3 + 11(j - 1)$ is below $a_n$ (the last of them, or a negative number when $j = 0$), and the next one, $3 + 11j$, is above $a_n$, which is not left out; whole numbers that differ are at least $1$ apart."
      },
      {
        "step": "$3 + 11(j - 1) + 1 \\le n + j \\le 3 + 11j - 1$",
        "reason": "Substituting a value: $a_n = n + j$ from line 2."
      },
      {
        "step": "$10j \\le n + 7$",
        "reason": "Adding the same number, from arithmetic: $7 - j$ is added to both sides of the left inequality of line 4, and $3 + 11(j - 1) + 1 + 7 - j = 10j$."
      },
      {
        "step": "$n + 7 \\le 10j + 9$",
        "reason": "Adding the same number, from arithmetic: $7 - j$ is added to both sides of the right inequality of line 4, and $3 + 11j - 1 + 7 - j = 10j + 9$."
      },
      {
        "step": "$n + 7 < 10(j + 1)$",
        "reason": "Transitivity, from arithmetic: $10j + 9$ is below $10j + 10$, which is $10(j + 1)$."
      },
      {
        "step": "$j \\le \\dfrac{n + 7}{10} < j + 1$",
        "reason": "Multiplying by a positive number, from arithmetic: lines 5 and 7 are divided by $10$."
      },
      {
        "step": "$j = \\left\\lfloor \\dfrac{n + 7}{10} \\right\\rfloor$",
        "reason": "Floor: the floor of a number $x$ is the whole number $j$ with $j \\le x < j + 1$."
      },
      {
        "step": "So $a_n = n + \\left\\lfloor \\dfrac{n + 7}{10} \\right\\rfloor$ for every whole number $n$ from $1$ up.",
        "reason": "Substituting a value: line 9 goes into line 2."
      }
    ]
  }
]
