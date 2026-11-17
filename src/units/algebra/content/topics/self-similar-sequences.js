export default {
  "number": 243,
  "title": "Sequences built by substitution, digits and floors",
  "section": 23,
  "book": {
    "title": "Problem-Solving Strategies",
    "pages": "224"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find $a_{161}$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 9$ on division by $11$, and the remainder of $t + 2$ on division by $11$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
    "form": "Answer as an integer.",
    "answer": "6",
    "solution": [
      "Find $a_{161}$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 9$ on division by $11$, and the remainder of $t + 2$ on division by $11$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
      "The term in place $n$ of a row gives the terms in places $3n$, $3n + 1$ and $3n + 2$ of the next row.",
      "Row $1$ starts with row $0$.",
      "Assume that row $j$ starts with row $j - 1$, for some whole number $j$ from $1$ up.",
      "Then row $j + 1$ starts with row $j$.",
      "So every row starts with the row before it, and the term in place $n$ is the same number $a_n$ in every row that has such a place.",
      "So $a_{3n} = a_n$, $a_{3n+1}$ is the remainder of $a_n + 9$ on division by $11$, and $a_{3n+2}$ is the remainder of $a_n + 2$ on division by $11$, for every whole number $n$.",
      "In base $3$ the number $161$ has the digits $1$, $2$, $2$, $2$, $2$, read from the left.",
      "$a_{1} = 9$",
      "$a_{5} = 0$",
      "$a_{17} = 2$",
      "$a_{53} = 4$",
      "$a_{161} = 6$"
    ]
  },
  "ideas": [
    {
      "name": "Substitution sequence",
      "concrete": "Start with the single term $0$, and again and again replace each $0$ by the block $0$, $1$, $1$ and each $1$ by the block $1$, $0$. The rows are $0$, then $0$, $1$, $1$, then $0$, $1$, $1$, $1$, $0$, $1$, $0$. Each row starts with the row before it, because the block for $0$ starts with $0$. So a term never changes once it is written, and the rows grow into one sequence without end.",
      "general": "A **substitution sequence** is given by a starting term and a block of terms for each value a term can take. Start with the row of the starting term alone, and again and again replace every term of the row by its block. When the block for the starting term has two terms or more and starts with that term, each row starts with the row before it, the rows grow into one sequence, and replacing every term of that sequence by its block gives the sequence again. Count the places from $0$: when every block has $b$ terms, the block of the term in place $n$ fills the places $bn$ to $bn + b - 1$, so the term in place $n$ fixes the terms in those places, and the base $b$ expansion of a place leads to its term digit by digit. The **Morse-Thue sequence** starts with $0$, and at each step the terms so far are followed by the same terms with $0$ and $1$ exchanged: $0$, then $0$, $1$, then $0$, $1$, $1$, $0$. It is also the substitution sequence that starts with $0$ and replaces each $0$ by $0$, $1$ and each $1$ by $1$, $0$."
    },
    {
      "name": "Counting the numbers left out",
      "concrete": "List the whole numbers from $1$ up that do not leave the remainder $3$ on division by $4$: the terms are $1$, $2$, $4$, $5$, $6$, $8$, $9$, $10$, $12$. The term $a_n$ less $n$ runs $0$, $0$, $1$, $1$, $1$, $2$, $2$, $2$, $3$: it rises by $1$ at every third term, which suggests $a_n = n + \\left\\lfloor \\dfrac{n}{3} \\right\\rfloor$. The difference $a_n - n$ is the number of left-out numbers below $a_n$, and counting them proves the guess.",
      "general": "When a sequence lists, in increasing order, the whole numbers from $1$ up that a rule does not leave out, the term $a_n$ is $n$ plus the number $j$ of left-out numbers below $a_n$, because each whole number from $1$ to $a_n$ is one of the $n$ terms up to $a_n$ or one of the $j$ left-out numbers, never both. The term $a_n$ lies between two neighbouring left-out numbers, and the two inequalities that say so turn into $j \\le x < j + 1$ for a quotient $x$ written with $n$; then $j$ is the floor of $x$. A table of the first terms suggests the formula, and the count proves it for every whole number $n$ from $1$ up."
    }
  ],
  "kinds": [
    {
      "id": "t243-k1",
      "forms": [
        {
          "example": {
            "problem": "Find $a_{226}$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 13$ on division by $15$, and the remainder of $t + 12$ on division by $15$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
            "lines": [
              {
                "step": "Find $a_{226}$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 13$ on division by $15$, and the remainder of $t + 12$ on division by $15$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
                "reason": "Substitution sequence: this is the problem as given; call the single term $0$ row $0$, and the row made from row $j$ by the replacement row $j + 1$."
              },
              {
                "step": "The term in place $n$ of a row gives the terms in places $3n$, $3n + 1$ and $3n + 2$ of the next row.",
                "reason": "Substitution sequence: the $n$ terms before it give $3n$ terms, which fill the places $0$ to $3n - 1$."
              },
              {
                "step": "Row $1$ starts with row $0$.",
                "reason": "Base case: row $0$ is $0$, and row $1$ is $0$, $13$, $12$, since $13$ and $12$ are below $15$."
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
                "step": "So $a_{3n} = a_n$, $a_{3n+1}$ is the remainder of $a_n + 13$ on division by $15$, and $a_{3n+2}$ is the remainder of $a_n + 12$ on division by $15$, for every whole number $n$.",
                "reason": "Substitution sequence: by line 6 the term in place $n$ of a row is $a_n$; by line 2 its three terms stand in places $3n$, $3n + 1$ and $3n + 2$ of the next row, and by line 6 these are $a_{3n}$, $a_{3n+1}$ and $a_{3n+2}$."
              },
              {
                "step": "In base $3$ the number $226$ has the digits $2$, $2$, $1$, $0$, $1$, read from the left.",
                "reason": "Base b expansion, from arithmetic: $226 = 2 \\cdot 81 + 2 \\cdot 27 + 1 \\cdot 9 + 0 \\cdot 3 + 1$."
              },
              {
                "step": "$a_{2} = 12$",
                "reason": "Substituting a value: $n = 0$ in line 7, with $2 = 3 \\cdot 0 + 2$ and $a_0 = 0$; the remainder of $0 + 12$ on division by $15$ is $12$."
              },
              {
                "step": "$a_{8} = 9$",
                "reason": "Substituting a value: $n = 2$ in line 7, with $8 = 3 \\cdot 2 + 2$ and $a_{2} = 12$; $12 + 12 = 24 = 15 + 9$."
              },
              {
                "step": "$a_{25} = 7$",
                "reason": "Substituting a value: $n = 8$ in line 7, with $25 = 3 \\cdot 8 + 1$ and $a_{8} = 9$; $9 + 13 = 22 = 15 + 7$."
              },
              {
                "step": "$a_{75} = 7$",
                "reason": "Substituting a value: $n = 25$ in line 7, with $75 = 3 \\cdot 25$ and $a_{25} = 7$."
              },
              {
                "step": "$a_{226} = 5$",
                "reason": "Substituting a value: $n = 75$ in line 7, with $226 = 3 \\cdot 75 + 1$ and $a_{75} = 7$; $7 + 13 = 20 = 15 + 5$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $a_{134}$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 15$ on division by $16$, and the remainder of $t + 14$ on division by $16$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
              "form": "Answer as an integer.",
              "answer": "8",
              "lines": [
                {
                  "step": "Find $a_{134}$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 15$ on division by $16$, and the remainder of $t + 14$ on division by $16$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
                  "reason": "Substitution sequence: this is the problem as given; call the single term $0$ row $0$, and the row made from row $j$ by the replacement row $j + 1$."
                },
                {
                  "step": "The term in place $n$ of a row gives the terms in places $3n$, $3n + 1$ and $3n + 2$ of the next row.",
                  "reason": "Substitution sequence: the $n$ terms before it give $3n$ terms, which fill the places $0$ to $3n - 1$."
                },
                {
                  "step": "Row $1$ starts with row $0$.",
                  "reason": "Base case: row $0$ is $0$, and row $1$ is $0$, $15$, $14$, since $15$ and $14$ are below $16$."
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
                  "step": "So $a_{3n} = a_n$, $a_{3n+1}$ is the remainder of $a_n + 15$ on division by $16$, and $a_{3n+2}$ is the remainder of $a_n + 14$ on division by $16$, for every whole number $n$.",
                  "reason": "Substitution sequence: by line 6 the term in place $n$ of a row is $a_n$; by line 2 its three terms stand in places $3n$, $3n + 1$ and $3n + 2$ of the next row, and by line 6 these are $a_{3n}$, $a_{3n+1}$ and $a_{3n+2}$."
                },
                {
                  "step": "In base $3$ the number $134$ has the digits $1$, $1$, $2$, $2$, $2$, read from the left.",
                  "reason": "Base b expansion, from arithmetic: $134 = 1 \\cdot 81 + 1 \\cdot 27 + 2 \\cdot 9 + 2 \\cdot 3 + 2$."
                },
                {
                  "step": "$a_{1} = 15$",
                  "reason": "Substituting a value: $n = 0$ in line 7, with $1 = 3 \\cdot 0 + 1$ and $a_0 = 0$; the remainder of $0 + 15$ on division by $16$ is $15$."
                },
                {
                  "step": "$a_{4} = 14$",
                  "reason": "Substituting a value: $n = 1$ in line 7, with $4 = 3 \\cdot 1 + 1$ and $a_{1} = 15$; $15 + 15 = 30 = 16 + 14$."
                },
                {
                  "step": "$a_{14} = 12$",
                  "reason": "Substituting a value: $n = 4$ in line 7, with $14 = 3 \\cdot 4 + 2$ and $a_{4} = 14$; $14 + 14 = 28 = 16 + 12$."
                },
                {
                  "step": "$a_{44} = 10$",
                  "reason": "Substituting a value: $n = 14$ in line 7, with $44 = 3 \\cdot 14 + 2$ and $a_{14} = 12$; $12 + 14 = 26 = 16 + 10$."
                },
                {
                  "step": "$a_{134} = 8$",
                  "reason": "Substituting a value: $n = 44$ in line 7, with $134 = 3 \\cdot 44 + 2$ and $a_{44} = 10$; $10 + 14 = 24 = 16 + 8$."
                }
              ]
            },
            {
              "prompt": "Find $a_{238}$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 2$ on division by $5$, and the remainder of $t + 4$ on division by $5$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
              "form": "Answer as an integer.",
              "answer": "1",
              "lines": [
                {
                  "step": "Find $a_{238}$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 2$ on division by $5$, and the remainder of $t + 4$ on division by $5$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
                  "reason": "Substitution sequence: this is the problem as given; call the single term $0$ row $0$, and the row made from row $j$ by the replacement row $j + 1$."
                },
                {
                  "step": "The term in place $n$ of a row gives the terms in places $3n$, $3n + 1$ and $3n + 2$ of the next row.",
                  "reason": "Substitution sequence: the $n$ terms before it give $3n$ terms, which fill the places $0$ to $3n - 1$."
                },
                {
                  "step": "Row $1$ starts with row $0$.",
                  "reason": "Base case: row $0$ is $0$, and row $1$ is $0$, $2$, $4$, since $2$ and $4$ are below $5$."
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
                  "step": "So $a_{3n} = a_n$, $a_{3n+1}$ is the remainder of $a_n + 2$ on division by $5$, and $a_{3n+2}$ is the remainder of $a_n + 4$ on division by $5$, for every whole number $n$.",
                  "reason": "Substitution sequence: by line 6 the term in place $n$ of a row is $a_n$; by line 2 its three terms stand in places $3n$, $3n + 1$ and $3n + 2$ of the next row, and by line 6 these are $a_{3n}$, $a_{3n+1}$ and $a_{3n+2}$."
                },
                {
                  "step": "In base $3$ the number $238$ has the digits $2$, $2$, $2$, $1$, $1$, read from the left.",
                  "reason": "Base b expansion, from arithmetic: $238 = 2 \\cdot 81 + 2 \\cdot 27 + 2 \\cdot 9 + 1 \\cdot 3 + 1$."
                },
                {
                  "step": "$a_{2} = 4$",
                  "reason": "Substituting a value: $n = 0$ in line 7, with $2 = 3 \\cdot 0 + 2$ and $a_0 = 0$; the remainder of $0 + 4$ on division by $5$ is $4$."
                },
                {
                  "step": "$a_{8} = 3$",
                  "reason": "Substituting a value: $n = 2$ in line 7, with $8 = 3 \\cdot 2 + 2$ and $a_{2} = 4$; $4 + 4 = 8 = 5 + 3$."
                },
                {
                  "step": "$a_{26} = 2$",
                  "reason": "Substituting a value: $n = 8$ in line 7, with $26 = 3 \\cdot 8 + 2$ and $a_{8} = 3$; $3 + 4 = 7 = 5 + 2$."
                },
                {
                  "step": "$a_{79} = 4$",
                  "reason": "Substituting a value: $n = 26$ in line 7, with $79 = 3 \\cdot 26 + 1$ and $a_{26} = 2$; $2 + 2 = 4$, which is below $5$."
                },
                {
                  "step": "$a_{238} = 1$",
                  "reason": "Substituting a value: $n = 79$ in line 7, with $238 = 3 \\cdot 79 + 1$ and $a_{79} = 4$; $4 + 2 = 6 = 5 + 1$."
                }
              ]
            },
            {
              "prompt": "Find $a_{129}$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 14$ on division by $16$, and the remainder of $t + 7$ on division by $16$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
              "form": "Answer as an integer.",
              "answer": "1",
              "lines": [
                {
                  "step": "Find $a_{129}$, where the sequence $a_0, a_1, a_2, \\dots$ is made as follows: start with the single term $0$, and again and again replace every term $t$ of the row by the three terms $t$, the remainder of $t + 14$ on division by $16$, and the remainder of $t + 7$ on division by $16$; the term in place $n$, the places counted from $0$, of every row that has such a place is $a_n$.",
                  "reason": "Substitution sequence: this is the problem as given; call the single term $0$ row $0$, and the row made from row $j$ by the replacement row $j + 1$."
                },
                {
                  "step": "The term in place $n$ of a row gives the terms in places $3n$, $3n + 1$ and $3n + 2$ of the next row.",
                  "reason": "Substitution sequence: the $n$ terms before it give $3n$ terms, which fill the places $0$ to $3n - 1$."
                },
                {
                  "step": "Row $1$ starts with row $0$.",
                  "reason": "Base case: row $0$ is $0$, and row $1$ is $0$, $14$, $7$, since $14$ and $7$ are below $16$."
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
                  "step": "So $a_{3n} = a_n$, $a_{3n+1}$ is the remainder of $a_n + 14$ on division by $16$, and $a_{3n+2}$ is the remainder of $a_n + 7$ on division by $16$, for every whole number $n$.",
                  "reason": "Substitution sequence: by line 6 the term in place $n$ of a row is $a_n$; by line 2 its three terms stand in places $3n$, $3n + 1$ and $3n + 2$ of the next row, and by line 6 these are $a_{3n}$, $a_{3n+1}$ and $a_{3n+2}$."
                },
                {
                  "step": "In base $3$ the number $129$ has the digits $1$, $1$, $2$, $1$, $0$, read from the left.",
                  "reason": "Base b expansion, from arithmetic: $129 = 1 \\cdot 81 + 1 \\cdot 27 + 2 \\cdot 9 + 1 \\cdot 3 + 0$."
                },
                {
                  "step": "$a_{1} = 14$",
                  "reason": "Substituting a value: $n = 0$ in line 7, with $1 = 3 \\cdot 0 + 1$ and $a_0 = 0$; the remainder of $0 + 14$ on division by $16$ is $14$."
                },
                {
                  "step": "$a_{4} = 12$",
                  "reason": "Substituting a value: $n = 1$ in line 7, with $4 = 3 \\cdot 1 + 1$ and $a_{1} = 14$; $14 + 14 = 28 = 16 + 12$."
                },
                {
                  "step": "$a_{14} = 3$",
                  "reason": "Substituting a value: $n = 4$ in line 7, with $14 = 3 \\cdot 4 + 2$ and $a_{4} = 12$; $12 + 7 = 19 = 16 + 3$."
                },
                {
                  "step": "$a_{43} = 1$",
                  "reason": "Substituting a value: $n = 14$ in line 7, with $43 = 3 \\cdot 14 + 1$ and $a_{14} = 3$; $3 + 14 = 17 = 16 + 1$."
                },
                {
                  "step": "$a_{129} = 1$",
                  "reason": "Substituting a value: $n = 43$ in line 7, with $129 = 3 \\cdot 43$ and $a_{43} = 1$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t243-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the positive number $y$ for which $u - yv = c(k - ym)$ for every row of zeros and ones, with $c$ a number that is the same for every row, where a row of $k$ zeros and $m$ ones, in some order, turns into a row of $u$ zeros and $v$ ones when each $0$ is replaced by the block $0$, $0$, $1$, $0$, $0$, $0$ and each $1$ by the block $0$, $0$.",
            "lines": [
              {
                "step": "Find the positive number $y$ for which $u - yv = c(k - ym)$ for every row of zeros and ones, with $c$ a number that is the same for every row, where a row of $k$ zeros and $m$ ones, in some order, turns into a row of $u$ zeros and $v$ ones when each $0$ is replaced by the block $0$, $0$, $1$, $0$, $0$, $0$ and each $1$ by the block $0$, $0$.",
                "reason": "Substitution sequence: this is the problem as given; the replacement turns the numbers $k$ and $m$ of a row into the numbers $u$ and $v$ of the next row."
              },
              {
                "step": "$u = 5k + 2m$",
                "reason": "Substitution sequence: the block for $0$ has $5$ of its terms equal to $0$ and the block for $1$ has $2$, and the new row is $k$ blocks for $0$ and $m$ blocks for $1$."
              },
              {
                "step": "$v = k$",
                "reason": "Substitution sequence: the block for $0$ has $1$ of its terms equal to $1$ and the block for $1$ has $0$."
              },
              {
                "step": "$u - yv = (5 - y)k + 2m$",
                "reason": "Collecting like terms: lines 2 and 3 go into $u - yv$, and the terms in $k$ and the terms in $m$ are collected."
              },
              {
                "step": "$c = 5 - y$",
                "reason": "Substituting a value: the row of the single term $0$ has $k = 1$ and $m = 0$, so by line 4 the equation $u - yv = c(k - ym)$ reads $5 - y = c$."
              },
              {
                "step": "$2 = -cy$",
                "reason": "Substituting a value: the row of the single term $1$ has $k = 0$ and $m = 1$, so by line 4 the equation $u - yv = c(k - ym)$ reads $2 = -cy$."
              },
              {
                "step": "$2 = -(5 - y)y$",
                "reason": "Substituting a value: line 5 goes into line 6."
              },
              {
                "step": "$2 = -5y + y^2$",
                "reason": "Multiplying out: each term of the bracket is multiplied by $-y$."
              },
              {
                "step": "$y^2 - 5y - 2 = 0$",
                "reason": "Adding the same number to both sides: $2$ is taken from both sides, and the terms in $y$ are collected."
              },
              {
                "step": "Each number $y$ with $y^2 - 5y - 2 = 0$ fits: with $c = 5 - y$, line 4 reads $u - yv = ck - cym$, which is $c(k - ym)$.",
                "reason": "Common factor: lines 9, 8 and 7 read backwards give $2 = -cy$, the number in front of $m$ in line 4."
              },
              {
                "step": "So $y = \\dfrac{5 + \\sqrt{33}}{2}$ or $y = \\dfrac{5 - \\sqrt{33}}{2}$.",
                "reason": "Quadratic formula: the discriminant is $(-5)^2 - 4 \\cdot 1 \\cdot (-2) = 33$."
              },
              {
                "step": "So $y = \\dfrac{5 + \\sqrt{33}}{2}$.",
                "reason": "Positive square root, from arithmetic: $33$ is above $5^2 = 25$, so $\\sqrt{33}$ is above $5$ and the second value is negative, while $y$ is positive."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the positive number $y$ for which $u - yv = c(k - ym)$ for every row of zeros and ones, with $c$ a number that is the same for every row, where a row of $k$ zeros and $m$ ones, in some order, turns into a row of $u$ zeros and $v$ ones when each $0$ is replaced by the block $0$, $1$, $1$, $1$, $1$ and each $1$ by the single term $0$.",
              "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
              "answer": "(1+sqrt(17))/8",
              "lines": [
                {
                  "step": "Find the positive number $y$ for which $u - yv = c(k - ym)$ for every row of zeros and ones, with $c$ a number that is the same for every row, where a row of $k$ zeros and $m$ ones, in some order, turns into a row of $u$ zeros and $v$ ones when each $0$ is replaced by the block $0$, $1$, $1$, $1$, $1$ and each $1$ by the single term $0$.",
                  "reason": "Substitution sequence: this is the problem as given; the replacement turns the numbers $k$ and $m$ of a row into the numbers $u$ and $v$ of the next row."
                },
                {
                  "step": "$u = k + m$",
                  "reason": "Substitution sequence: the block for $0$ has $1$ of its terms equal to $0$ and the block for $1$ has $1$, and the new row is $k$ blocks for $0$ and $m$ blocks for $1$."
                },
                {
                  "step": "$v = 4k$",
                  "reason": "Substitution sequence: the block for $0$ has $4$ of its terms equal to $1$ and the block for $1$ has $0$."
                },
                {
                  "step": "$u - yv = (1 - 4y)k + m$",
                  "reason": "Collecting like terms: lines 2 and 3 go into $u - yv$, and the terms in $k$ and the terms in $m$ are collected."
                },
                {
                  "step": "$c = 1 - 4y$",
                  "reason": "Substituting a value: the row of the single term $0$ has $k = 1$ and $m = 0$, so by line 4 the equation $u - yv = c(k - ym)$ reads $1 - 4y = c$."
                },
                {
                  "step": "$1 = -cy$",
                  "reason": "Substituting a value: the row of the single term $1$ has $k = 0$ and $m = 1$, so by line 4 the equation $u - yv = c(k - ym)$ reads $1 = -cy$."
                },
                {
                  "step": "$1 = -(1 - 4y)y$",
                  "reason": "Substituting a value: line 5 goes into line 6."
                },
                {
                  "step": "$1 = -y + 4y^2$",
                  "reason": "Multiplying out: each term of the bracket is multiplied by $-y$."
                },
                {
                  "step": "$4y^2 - y - 1 = 0$",
                  "reason": "Adding the same number to both sides: $1$ is taken from both sides, and the terms in $y$ are collected."
                },
                {
                  "step": "Each number $y$ with $4y^2 - y - 1 = 0$ fits: with $c = 1 - 4y$, line 4 reads $u - yv = ck - cym$, which is $c(k - ym)$.",
                  "reason": "Common factor: lines 9, 8 and 7 read backwards give $1 = -cy$, the number in front of $m$ in line 4."
                },
                {
                  "step": "So $y = \\dfrac{1 + \\sqrt{17}}{8}$ or $y = \\dfrac{1 - \\sqrt{17}}{8}$.",
                  "reason": "Quadratic formula: the discriminant is $(-1)^2 - 4 \\cdot 4 \\cdot (-1) = 17$."
                },
                {
                  "step": "So $y = \\dfrac{1 + \\sqrt{17}}{8}$.",
                  "reason": "Positive square root, from arithmetic: $17$ is above $1^2 = 1$, so $\\sqrt{17}$ is above $1$ and the second value is negative, while $y$ is positive."
                }
              ]
            },
            {
              "prompt": "Find the positive number $y$ for which $u - yv = c(k - ym)$ for every row of zeros and ones, with $c$ a number that is the same for every row, where a row of $k$ zeros and $m$ ones, in some order, turns into a row of $u$ zeros and $v$ ones when each $0$ is replaced by the block $0$, $1$, $0$, $0$, $0$ and each $1$ by the block $1$, $0$, $0$.",
              "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
              "answer": "(3+sqrt(17))/2",
              "lines": [
                {
                  "step": "Find the positive number $y$ for which $u - yv = c(k - ym)$ for every row of zeros and ones, with $c$ a number that is the same for every row, where a row of $k$ zeros and $m$ ones, in some order, turns into a row of $u$ zeros and $v$ ones when each $0$ is replaced by the block $0$, $1$, $0$, $0$, $0$ and each $1$ by the block $1$, $0$, $0$.",
                  "reason": "Substitution sequence: this is the problem as given; the replacement turns the numbers $k$ and $m$ of a row into the numbers $u$ and $v$ of the next row."
                },
                {
                  "step": "$u = 4k + 2m$",
                  "reason": "Substitution sequence: the block for $0$ has $4$ of its terms equal to $0$ and the block for $1$ has $2$, and the new row is $k$ blocks for $0$ and $m$ blocks for $1$."
                },
                {
                  "step": "$v = k + m$",
                  "reason": "Substitution sequence: the block for $0$ has $1$ of its terms equal to $1$ and the block for $1$ has $1$."
                },
                {
                  "step": "$u - yv = (4 - y)k + (2 - y)m$",
                  "reason": "Collecting like terms: lines 2 and 3 go into $u - yv$, and the terms in $k$ and the terms in $m$ are collected."
                },
                {
                  "step": "$c = 4 - y$",
                  "reason": "Substituting a value: the row of the single term $0$ has $k = 1$ and $m = 0$, so by line 4 the equation $u - yv = c(k - ym)$ reads $4 - y = c$."
                },
                {
                  "step": "$2 - y = -cy$",
                  "reason": "Substituting a value: the row of the single term $1$ has $k = 0$ and $m = 1$, so by line 4 the equation $u - yv = c(k - ym)$ reads $2 - y = -cy$."
                },
                {
                  "step": "$2 - y = -(4 - y)y$",
                  "reason": "Substituting a value: line 5 goes into line 6."
                },
                {
                  "step": "$2 - y = -4y + y^2$",
                  "reason": "Multiplying out: each term of the bracket is multiplied by $-y$."
                },
                {
                  "step": "$y^2 - 3y - 2 = 0$",
                  "reason": "Adding the same number to both sides: $2 - y$ is taken from both sides, and the terms in $y$ are collected."
                },
                {
                  "step": "Each number $y$ with $y^2 - 3y - 2 = 0$ fits: with $c = 4 - y$, line 4 reads $u - yv = ck - cym$, which is $c(k - ym)$.",
                  "reason": "Common factor: lines 9, 8 and 7 read backwards give $2 - y = -cy$, the number in front of $m$ in line 4."
                },
                {
                  "step": "So $y = \\dfrac{3 + \\sqrt{17}}{2}$ or $y = \\dfrac{3 - \\sqrt{17}}{2}$.",
                  "reason": "Quadratic formula: the discriminant is $(-3)^2 - 4 \\cdot 1 \\cdot (-2) = 17$."
                },
                {
                  "step": "So $y = \\dfrac{3 + \\sqrt{17}}{2}$.",
                  "reason": "Positive square root, from arithmetic: $17$ is above $3^2 = 9$, so $\\sqrt{17}$ is above $3$ and the second value is negative, while $y$ is positive."
                }
              ]
            },
            {
              "prompt": "Find the positive number $y$ for which $u - yv = c(k - ym)$ for every row of zeros and ones, with $c$ a number that is the same for every row, where a row of $k$ zeros and $m$ ones, in some order, turns into a row of $u$ zeros and $v$ ones when each $0$ is replaced by the block $0$, $0$, $1$, $1$, $0$, $1$, $1$ and each $1$ by the block $0$, $0$, $0$, $0$.",
              "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
              "answer": "(3+sqrt(73))/8",
              "lines": [
                {
                  "step": "Find the positive number $y$ for which $u - yv = c(k - ym)$ for every row of zeros and ones, with $c$ a number that is the same for every row, where a row of $k$ zeros and $m$ ones, in some order, turns into a row of $u$ zeros and $v$ ones when each $0$ is replaced by the block $0$, $0$, $1$, $1$, $0$, $1$, $1$ and each $1$ by the block $0$, $0$, $0$, $0$.",
                  "reason": "Substitution sequence: this is the problem as given; the replacement turns the numbers $k$ and $m$ of a row into the numbers $u$ and $v$ of the next row."
                },
                {
                  "step": "$u = 3k + 4m$",
                  "reason": "Substitution sequence: the block for $0$ has $3$ of its terms equal to $0$ and the block for $1$ has $4$, and the new row is $k$ blocks for $0$ and $m$ blocks for $1$."
                },
                {
                  "step": "$v = 4k$",
                  "reason": "Substitution sequence: the block for $0$ has $4$ of its terms equal to $1$ and the block for $1$ has $0$."
                },
                {
                  "step": "$u - yv = (3 - 4y)k + 4m$",
                  "reason": "Collecting like terms: lines 2 and 3 go into $u - yv$, and the terms in $k$ and the terms in $m$ are collected."
                },
                {
                  "step": "$c = 3 - 4y$",
                  "reason": "Substituting a value: the row of the single term $0$ has $k = 1$ and $m = 0$, so by line 4 the equation $u - yv = c(k - ym)$ reads $3 - 4y = c$."
                },
                {
                  "step": "$4 = -cy$",
                  "reason": "Substituting a value: the row of the single term $1$ has $k = 0$ and $m = 1$, so by line 4 the equation $u - yv = c(k - ym)$ reads $4 = -cy$."
                },
                {
                  "step": "$4 = -(3 - 4y)y$",
                  "reason": "Substituting a value: line 5 goes into line 6."
                },
                {
                  "step": "$4 = -3y + 4y^2$",
                  "reason": "Multiplying out: each term of the bracket is multiplied by $-y$."
                },
                {
                  "step": "$4y^2 - 3y - 4 = 0$",
                  "reason": "Adding the same number to both sides: $4$ is taken from both sides, and the terms in $y$ are collected."
                },
                {
                  "step": "Each number $y$ with $4y^2 - 3y - 4 = 0$ fits: with $c = 3 - 4y$, line 4 reads $u - yv = ck - cym$, which is $c(k - ym)$.",
                  "reason": "Common factor: lines 9, 8 and 7 read backwards give $4 = -cy$, the number in front of $m$ in line 4."
                },
                {
                  "step": "So $y = \\dfrac{3 + \\sqrt{73}}{8}$ or $y = \\dfrac{3 - \\sqrt{73}}{8}$.",
                  "reason": "Quadratic formula: the discriminant is $(-3)^2 - 4 \\cdot 4 \\cdot (-4) = 73$."
                },
                {
                  "step": "So $y = \\dfrac{3 + \\sqrt{73}}{8}$.",
                  "reason": "Positive square root, from arithmetic: $73$ is above $3^2 = 9$, so $\\sqrt{73}$ is above $3$ and the second value is negative, while $y$ is positive."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the whole number $d$ from $0$ to $50$ for which $a_{4n+3}$ is the remainder of $a_n + d$ on division by $51$ for every whole number $n$, where $a_0 = 0$, $a_{2n} = a_n$ and $a_{2n+1}$ is the remainder of $a_n + 49$ on division by $51$, for every whole number $n$.",
            "lines": [
              {
                "step": "Find the whole number $d$ from $0$ to $50$ for which $a_{4n+3}$ is the remainder of $a_n + d$ on division by $51$ for every whole number $n$, where $a_0 = 0$, $a_{2n} = a_n$ and $a_{2n+1}$ is the remainder of $a_n + 49$ on division by $51$, for every whole number $n$.",
                "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence, and the rule for even places and the rule for odd places give every later term from an earlier one."
              },
              {
                "step": "The term $a_{4n+3}$ is the remainder of $a_{2n+1} + 49$ on division by $51$.",
                "reason": "Recursion: the rule for odd places with $2n + 1$ in place of $n$, since $4n + 3 = 2(2n + 1) + 1$."
              },
              {
                "step": "The number $a_{2n+1} + 49$ leaves the same remainder on division by $51$ as $a_n + 98$.",
                "reason": "Divisibility of integers, from arithmetic: $a_{2n+1}$ is the remainder of $a_n + 49$, so the two differ by a multiple of $51$, and $49 + 49 = 98$."
              },
              {
                "step": "$98 = 51 + 47$",
                "reason": "Division-with-remainder, from arithmetic: $98$ leaves the remainder $47$ on division by $51$."
              },
              {
                "step": "So $a_{4n+3}$ is the remainder of $a_n + 47$ on division by $51$, for every whole number $n$.",
                "reason": "Divisibility of integers, from arithmetic: by lines 3 and 4 the numbers $a_{2n+1} + 49$ and $a_n + 47$ differ by a multiple of $51$, so line 2 gives the remainder of $a_n + 47$."
              },
              {
                "step": "So $d = 47$.",
                "reason": "Transitive property: line 5 is the asked form with $d = 47$, a whole number from $0$ to $50$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the whole number $d$ from $0$ to $47$ for which $a_{4n+3}$ is the remainder of $a_n + d$ on division by $48$ for every whole number $n$, where $a_0 = 0$, $a_{2n} = a_n$ and $a_{2n+1}$ is the remainder of $a_n + 38$ on division by $48$, for every whole number $n$.",
              "form": "Answer as an integer.",
              "answer": "28",
              "lines": [
                {
                  "step": "Find the whole number $d$ from $0$ to $47$ for which $a_{4n+3}$ is the remainder of $a_n + d$ on division by $48$ for every whole number $n$, where $a_0 = 0$, $a_{2n} = a_n$ and $a_{2n+1}$ is the remainder of $a_n + 38$ on division by $48$, for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence, and the rule for even places and the rule for odd places give every later term from an earlier one."
                },
                {
                  "step": "The term $a_{4n+3}$ is the remainder of $a_{2n+1} + 38$ on division by $48$.",
                  "reason": "Recursion: the rule for odd places with $2n + 1$ in place of $n$, since $4n + 3 = 2(2n + 1) + 1$."
                },
                {
                  "step": "The number $a_{2n+1} + 38$ leaves the same remainder on division by $48$ as $a_n + 76$.",
                  "reason": "Divisibility of integers, from arithmetic: $a_{2n+1}$ is the remainder of $a_n + 38$, so the two differ by a multiple of $48$, and $38 + 38 = 76$."
                },
                {
                  "step": "$76 = 48 + 28$",
                  "reason": "Division-with-remainder, from arithmetic: $76$ leaves the remainder $28$ on division by $48$."
                },
                {
                  "step": "So $a_{4n+3}$ is the remainder of $a_n + 28$ on division by $48$, for every whole number $n$.",
                  "reason": "Divisibility of integers, from arithmetic: by lines 3 and 4 the numbers $a_{2n+1} + 38$ and $a_n + 28$ differ by a multiple of $48$, so line 2 gives the remainder of $a_n + 28$."
                },
                {
                  "step": "So $d = 28$.",
                  "reason": "Transitive property: line 5 is the asked form with $d = 28$, a whole number from $0$ to $47$."
                }
              ]
            },
            {
              "prompt": "Find the whole number $d$ from $0$ to $44$ for which $a_{4n+3}$ is the remainder of $a_n + d$ on division by $45$ for every whole number $n$, where $a_0 = 0$, $a_{2n} = a_n$ and $a_{2n+1}$ is the remainder of $a_n + 34$ on division by $45$, for every whole number $n$.",
              "form": "Answer as an integer.",
              "answer": "23",
              "lines": [
                {
                  "step": "Find the whole number $d$ from $0$ to $44$ for which $a_{4n+3}$ is the remainder of $a_n + d$ on division by $45$ for every whole number $n$, where $a_0 = 0$, $a_{2n} = a_n$ and $a_{2n+1}$ is the remainder of $a_n + 34$ on division by $45$, for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence, and the rule for even places and the rule for odd places give every later term from an earlier one."
                },
                {
                  "step": "The term $a_{4n+3}$ is the remainder of $a_{2n+1} + 34$ on division by $45$.",
                  "reason": "Recursion: the rule for odd places with $2n + 1$ in place of $n$, since $4n + 3 = 2(2n + 1) + 1$."
                },
                {
                  "step": "The number $a_{2n+1} + 34$ leaves the same remainder on division by $45$ as $a_n + 68$.",
                  "reason": "Divisibility of integers, from arithmetic: $a_{2n+1}$ is the remainder of $a_n + 34$, so the two differ by a multiple of $45$, and $34 + 34 = 68$."
                },
                {
                  "step": "$68 = 45 + 23$",
                  "reason": "Division-with-remainder, from arithmetic: $68$ leaves the remainder $23$ on division by $45$."
                },
                {
                  "step": "So $a_{4n+3}$ is the remainder of $a_n + 23$ on division by $45$, for every whole number $n$.",
                  "reason": "Divisibility of integers, from arithmetic: by lines 3 and 4 the numbers $a_{2n+1} + 34$ and $a_n + 23$ differ by a multiple of $45$, so line 2 gives the remainder of $a_n + 23$."
                },
                {
                  "step": "So $d = 23$.",
                  "reason": "Transitive property: line 5 is the asked form with $d = 23$, a whole number from $0$ to $44$."
                }
              ]
            },
            {
              "prompt": "Find the whole number $d$ from $0$ to $56$ for which $a_{4n+3}$ is the remainder of $a_n + d$ on division by $57$ for every whole number $n$, where $a_0 = 0$, $a_{2n} = a_n$ and $a_{2n+1}$ is the remainder of $a_n + 54$ on division by $57$, for every whole number $n$.",
              "form": "Answer as an integer.",
              "answer": "51",
              "lines": [
                {
                  "step": "Find the whole number $d$ from $0$ to $56$ for which $a_{4n+3}$ is the remainder of $a_n + d$ on division by $57$ for every whole number $n$, where $a_0 = 0$, $a_{2n} = a_n$ and $a_{2n+1}$ is the remainder of $a_n + 54$ on division by $57$, for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence, and the rule for even places and the rule for odd places give every later term from an earlier one."
                },
                {
                  "step": "The term $a_{4n+3}$ is the remainder of $a_{2n+1} + 54$ on division by $57$.",
                  "reason": "Recursion: the rule for odd places with $2n + 1$ in place of $n$, since $4n + 3 = 2(2n + 1) + 1$."
                },
                {
                  "step": "The number $a_{2n+1} + 54$ leaves the same remainder on division by $57$ as $a_n + 108$.",
                  "reason": "Divisibility of integers, from arithmetic: $a_{2n+1}$ is the remainder of $a_n + 54$, so the two differ by a multiple of $57$, and $54 + 54 = 108$."
                },
                {
                  "step": "$108 = 57 + 51$",
                  "reason": "Division-with-remainder, from arithmetic: $108$ leaves the remainder $51$ on division by $57$."
                },
                {
                  "step": "So $a_{4n+3}$ is the remainder of $a_n + 51$ on division by $57$, for every whole number $n$.",
                  "reason": "Divisibility of integers, from arithmetic: by lines 3 and 4 the numbers $a_{2n+1} + 54$ and $a_n + 51$ differ by a multiple of $57$, so line 2 gives the remainder of $a_n + 51$."
                },
                {
                  "step": "So $d = 51$.",
                  "reason": "Transitive property: line 5 is the asked form with $d = 51$, a whole number from $0$ to $56$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t243-k3",
      "forms": [
        {
          "example": {
            "problem": "Find $a_{150}$, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $1$ on division by $5$.",
            "lines": [
              {
                "step": "Find $a_{150}$, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $1$ on division by $5$.",
                "reason": "Floor: this is the problem as given; the numbers that leave the remainder $1$ on division by $5$ are left out, and the terms are the other whole numbers from $1$ up, in order."
              },
              {
                "step": "The first terms are $2$, $3$, $4$, $5$, $7$, $8$, $9$, $10$, and the differences $a_n - n$ are $1$, $1$, $1$, $1$, $2$, $2$, $2$, $2$, which suggests $a_n = n + \\left\\lfloor \\dfrac{n + 3}{4} \\right\\rfloor$.",
                "reason": "Floor: the difference rises by $1$ once in every $4$ terms, as the floor of a quotient by $4$ does; the lines below prove this guess."
              },
              {
                "step": "Let $j$ be the number of left-out numbers below $a_n$, for a whole number $n$ from $1$ up; then $a_n = n + j$.",
                "reason": "Counting the numbers left out: each whole number from $1$ to $a_n$ is one of the $n$ terms $a_1, \\dots, a_n$ or one of the $j$ left-out numbers, never both."
              },
              {
                "step": "The term satisfies $1 + 5(j - 1) + 1 \\le a_n \\le 1 + 5j - 1$.",
                "reason": "Division-with-remainder, from arithmetic: the left-out numbers are $1$, $6$, $11$ and so on, in steps of $5$; exactly $j$ of them are below $a_n$, so $1 + 5(j - 1)$ is below $a_n$ (the last of them, or a negative number when $j = 0$), and the next one, $1 + 5j$, is above $a_n$, which is not left out; whole numbers that differ are at least $1$ apart."
              },
              {
                "step": "$1 + 5(j - 1) + 1 \\le n + j \\le 1 + 5j - 1$",
                "reason": "Substituting a value: $a_n = n + j$ from line 3."
              },
              {
                "step": "$4j \\le n + 3$",
                "reason": "Adding the same number, from arithmetic: $3 - j$ is added to both sides of the left inequality of line 5, and $1 + 5(j - 1) + 1 + 3 - j = 4j$."
              },
              {
                "step": "$n + 3 \\le 4j + 3$",
                "reason": "Adding the same number, from arithmetic: $3 - j$ is added to both sides of the right inequality of line 5, and $1 + 5j - 1 + 3 - j = 4j + 3$."
              },
              {
                "step": "$n + 3 < 4(j + 1)$",
                "reason": "Transitivity, from arithmetic: $4j + 3$ is below $4j + 4$, which is $4(j + 1)$."
              },
              {
                "step": "$j \\le \\dfrac{n + 3}{4} < j + 1$",
                "reason": "Multiplying by a positive number, from arithmetic: lines 6 and 8 are divided by $4$."
              },
              {
                "step": "$j = \\left\\lfloor \\dfrac{n + 3}{4} \\right\\rfloor$",
                "reason": "Floor: the floor of a number $x$ is the whole number $j$ with $j \\le x < j + 1$."
              },
              {
                "step": "So $a_n = n + \\left\\lfloor \\dfrac{n + 3}{4} \\right\\rfloor$ for every whole number $n$ from $1$ up.",
                "reason": "Substituting a value: line 10 goes into line 3."
              },
              {
                "step": "$a_{150} = 150 + \\left\\lfloor \\dfrac{153}{4} \\right\\rfloor$",
                "reason": "Substituting a value: $n = 150$ in line 11, and $150 + 3 = 153$."
              },
              {
                "step": "$\\left\\lfloor \\dfrac{153}{4} \\right\\rfloor = 38$",
                "reason": "Floor: $38 \\cdot 4 = 152$ and $39 \\cdot 4 = 156$, and $153$ is at least the first and below the second."
              },
              {
                "step": "$a_{150} = 188$",
                "reason": "Substituting a value: line 13 goes into line 12, and $150 + 38 = 188$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $a_{377}$, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $1$ on division by $4$.",
              "form": "Answer as an integer.",
              "answer": "503",
              "lines": [
                {
                  "step": "Find $a_{377}$, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $1$ on division by $4$.",
                  "reason": "Floor: this is the problem as given; the numbers that leave the remainder $1$ on division by $4$ are left out, and the terms are the other whole numbers from $1$ up, in order."
                },
                {
                  "step": "The first terms are $2$, $3$, $4$, $6$, $7$, $8$, and the differences $a_n - n$ are $1$, $1$, $1$, $2$, $2$, $2$, which suggests $a_n = n + \\left\\lfloor \\dfrac{n + 2}{3} \\right\\rfloor$.",
                  "reason": "Floor: the difference rises by $1$ once in every $3$ terms, as the floor of a quotient by $3$ does; the lines below prove this guess."
                },
                {
                  "step": "Let $j$ be the number of left-out numbers below $a_n$, for a whole number $n$ from $1$ up; then $a_n = n + j$.",
                  "reason": "Counting the numbers left out: each whole number from $1$ to $a_n$ is one of the $n$ terms $a_1, \\dots, a_n$ or one of the $j$ left-out numbers, never both."
                },
                {
                  "step": "The term satisfies $1 + 4(j - 1) + 1 \\le a_n \\le 1 + 4j - 1$.",
                  "reason": "Division-with-remainder, from arithmetic: the left-out numbers are $1$, $5$, $9$ and so on, in steps of $4$; exactly $j$ of them are below $a_n$, so $1 + 4(j - 1)$ is below $a_n$ (the last of them, or a negative number when $j = 0$), and the next one, $1 + 4j$, is above $a_n$, which is not left out; whole numbers that differ are at least $1$ apart."
                },
                {
                  "step": "$1 + 4(j - 1) + 1 \\le n + j \\le 1 + 4j - 1$",
                  "reason": "Substituting a value: $a_n = n + j$ from line 3."
                },
                {
                  "step": "$3j \\le n + 2$",
                  "reason": "Adding the same number, from arithmetic: $2 - j$ is added to both sides of the left inequality of line 5, and $1 + 4(j - 1) + 1 + 2 - j = 3j$."
                },
                {
                  "step": "$n + 2 \\le 3j + 2$",
                  "reason": "Adding the same number, from arithmetic: $2 - j$ is added to both sides of the right inequality of line 5, and $1 + 4j - 1 + 2 - j = 3j + 2$."
                },
                {
                  "step": "$n + 2 < 3(j + 1)$",
                  "reason": "Transitivity, from arithmetic: $3j + 2$ is below $3j + 3$, which is $3(j + 1)$."
                },
                {
                  "step": "$j \\le \\dfrac{n + 2}{3} < j + 1$",
                  "reason": "Multiplying by a positive number, from arithmetic: lines 6 and 8 are divided by $3$."
                },
                {
                  "step": "$j = \\left\\lfloor \\dfrac{n + 2}{3} \\right\\rfloor$",
                  "reason": "Floor: the floor of a number $x$ is the whole number $j$ with $j \\le x < j + 1$."
                },
                {
                  "step": "So $a_n = n + \\left\\lfloor \\dfrac{n + 2}{3} \\right\\rfloor$ for every whole number $n$ from $1$ up.",
                  "reason": "Substituting a value: line 10 goes into line 3."
                },
                {
                  "step": "$a_{377} = 377 + \\left\\lfloor \\dfrac{379}{3} \\right\\rfloor$",
                  "reason": "Substituting a value: $n = 377$ in line 11, and $377 + 2 = 379$."
                },
                {
                  "step": "$\\left\\lfloor \\dfrac{379}{3} \\right\\rfloor = 126$",
                  "reason": "Floor: $126 \\cdot 3 = 378$ and $127 \\cdot 3 = 381$, and $379$ is at least the first and below the second."
                },
                {
                  "step": "$a_{377} = 503$",
                  "reason": "Substituting a value: line 13 goes into line 12, and $377 + 126 = 503$."
                }
              ]
            },
            {
              "prompt": "Find $a_{395}$, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $4$ on division by $7$.",
              "form": "Answer as an integer.",
              "answer": "461",
              "lines": [
                {
                  "step": "Find $a_{395}$, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $4$ on division by $7$.",
                  "reason": "Floor: this is the problem as given; the numbers that leave the remainder $4$ on division by $7$ are left out, and the terms are the other whole numbers from $1$ up, in order."
                },
                {
                  "step": "The first terms are $1$, $2$, $3$, $5$, $6$, $7$, $8$, $9$, $10$, $12$, $13$, $14$, and the differences $a_n - n$ are $0$, $0$, $0$, $1$, $1$, $1$, $1$, $1$, $1$, $2$, $2$, $2$, which suggests $a_n = n + \\left\\lfloor \\dfrac{n + 2}{6} \\right\\rfloor$.",
                  "reason": "Floor: the difference rises by $1$ once in every $6$ terms, as the floor of a quotient by $6$ does; the lines below prove this guess."
                },
                {
                  "step": "Let $j$ be the number of left-out numbers below $a_n$, for a whole number $n$ from $1$ up; then $a_n = n + j$.",
                  "reason": "Counting the numbers left out: each whole number from $1$ to $a_n$ is one of the $n$ terms $a_1, \\dots, a_n$ or one of the $j$ left-out numbers, never both."
                },
                {
                  "step": "The term satisfies $4 + 7(j - 1) + 1 \\le a_n \\le 4 + 7j - 1$.",
                  "reason": "Division-with-remainder, from arithmetic: the left-out numbers are $4$, $11$, $18$ and so on, in steps of $7$; exactly $j$ of them are below $a_n$, so $4 + 7(j - 1)$ is below $a_n$ (the last of them, or a negative number when $j = 0$), and the next one, $4 + 7j$, is above $a_n$, which is not left out; whole numbers that differ are at least $1$ apart."
                },
                {
                  "step": "$4 + 7(j - 1) + 1 \\le n + j \\le 4 + 7j - 1$",
                  "reason": "Substituting a value: $a_n = n + j$ from line 3."
                },
                {
                  "step": "$6j \\le n + 2$",
                  "reason": "Adding the same number, from arithmetic: $2 - j$ is added to both sides of the left inequality of line 5, and $4 + 7(j - 1) + 1 + 2 - j = 6j$."
                },
                {
                  "step": "$n + 2 \\le 6j + 5$",
                  "reason": "Adding the same number, from arithmetic: $2 - j$ is added to both sides of the right inequality of line 5, and $4 + 7j - 1 + 2 - j = 6j + 5$."
                },
                {
                  "step": "$n + 2 < 6(j + 1)$",
                  "reason": "Transitivity, from arithmetic: $6j + 5$ is below $6j + 6$, which is $6(j + 1)$."
                },
                {
                  "step": "$j \\le \\dfrac{n + 2}{6} < j + 1$",
                  "reason": "Multiplying by a positive number, from arithmetic: lines 6 and 8 are divided by $6$."
                },
                {
                  "step": "$j = \\left\\lfloor \\dfrac{n + 2}{6} \\right\\rfloor$",
                  "reason": "Floor: the floor of a number $x$ is the whole number $j$ with $j \\le x < j + 1$."
                },
                {
                  "step": "So $a_n = n + \\left\\lfloor \\dfrac{n + 2}{6} \\right\\rfloor$ for every whole number $n$ from $1$ up.",
                  "reason": "Substituting a value: line 10 goes into line 3."
                },
                {
                  "step": "$a_{395} = 395 + \\left\\lfloor \\dfrac{397}{6} \\right\\rfloor$",
                  "reason": "Substituting a value: $n = 395$ in line 11, and $395 + 2 = 397$."
                },
                {
                  "step": "$\\left\\lfloor \\dfrac{397}{6} \\right\\rfloor = 66$",
                  "reason": "Floor: $66 \\cdot 6 = 396$ and $67 \\cdot 6 = 402$, and $397$ is at least the first and below the second."
                },
                {
                  "step": "$a_{395} = 461$",
                  "reason": "Substituting a value: line 13 goes into line 12, and $395 + 66 = 461$."
                }
              ]
            },
            {
              "prompt": "Find $a_{191}$, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $3$ on division by $6$.",
              "form": "Answer as an integer.",
              "answer": "229",
              "lines": [
                {
                  "step": "Find $a_{191}$, where $a_1, a_2, a_3, \\dots$ are, in increasing order, the whole numbers from $1$ up that do not leave the remainder $3$ on division by $6$.",
                  "reason": "Floor: this is the problem as given; the numbers that leave the remainder $3$ on division by $6$ are left out, and the terms are the other whole numbers from $1$ up, in order."
                },
                {
                  "step": "The first terms are $1$, $2$, $4$, $5$, $6$, $7$, $8$, $10$, $11$, $12$, and the differences $a_n - n$ are $0$, $0$, $1$, $1$, $1$, $1$, $1$, $2$, $2$, $2$, which suggests $a_n = n + \\left\\lfloor \\dfrac{n + 2}{5} \\right\\rfloor$.",
                  "reason": "Floor: the difference rises by $1$ once in every $5$ terms, as the floor of a quotient by $5$ does; the lines below prove this guess."
                },
                {
                  "step": "Let $j$ be the number of left-out numbers below $a_n$, for a whole number $n$ from $1$ up; then $a_n = n + j$.",
                  "reason": "Counting the numbers left out: each whole number from $1$ to $a_n$ is one of the $n$ terms $a_1, \\dots, a_n$ or one of the $j$ left-out numbers, never both."
                },
                {
                  "step": "The term satisfies $3 + 6(j - 1) + 1 \\le a_n \\le 3 + 6j - 1$.",
                  "reason": "Division-with-remainder, from arithmetic: the left-out numbers are $3$, $9$, $15$ and so on, in steps of $6$; exactly $j$ of them are below $a_n$, so $3 + 6(j - 1)$ is below $a_n$ (the last of them, or a negative number when $j = 0$), and the next one, $3 + 6j$, is above $a_n$, which is not left out; whole numbers that differ are at least $1$ apart."
                },
                {
                  "step": "$3 + 6(j - 1) + 1 \\le n + j \\le 3 + 6j - 1$",
                  "reason": "Substituting a value: $a_n = n + j$ from line 3."
                },
                {
                  "step": "$5j \\le n + 2$",
                  "reason": "Adding the same number, from arithmetic: $2 - j$ is added to both sides of the left inequality of line 5, and $3 + 6(j - 1) + 1 + 2 - j = 5j$."
                },
                {
                  "step": "$n + 2 \\le 5j + 4$",
                  "reason": "Adding the same number, from arithmetic: $2 - j$ is added to both sides of the right inequality of line 5, and $3 + 6j - 1 + 2 - j = 5j + 4$."
                },
                {
                  "step": "$n + 2 < 5(j + 1)$",
                  "reason": "Transitivity, from arithmetic: $5j + 4$ is below $5j + 5$, which is $5(j + 1)$."
                },
                {
                  "step": "$j \\le \\dfrac{n + 2}{5} < j + 1$",
                  "reason": "Multiplying by a positive number, from arithmetic: lines 6 and 8 are divided by $5$."
                },
                {
                  "step": "$j = \\left\\lfloor \\dfrac{n + 2}{5} \\right\\rfloor$",
                  "reason": "Floor: the floor of a number $x$ is the whole number $j$ with $j \\le x < j + 1$."
                },
                {
                  "step": "So $a_n = n + \\left\\lfloor \\dfrac{n + 2}{5} \\right\\rfloor$ for every whole number $n$ from $1$ up.",
                  "reason": "Substituting a value: line 10 goes into line 3."
                },
                {
                  "step": "$a_{191} = 191 + \\left\\lfloor \\dfrac{193}{5} \\right\\rfloor$",
                  "reason": "Substituting a value: $n = 191$ in line 11, and $191 + 2 = 193$."
                },
                {
                  "step": "$\\left\\lfloor \\dfrac{193}{5} \\right\\rfloor = 38$",
                  "reason": "Floor: $38 \\cdot 5 = 190$ and $39 \\cdot 5 = 195$, and $193$ is at least the first and below the second."
                },
                {
                  "step": "$a_{191} = 229$",
                  "reason": "Substituting a value: line 13 goes into line 12, and $191 + 38 = 229$."
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
      "id": "t243-p1",
      "method": "induction",
      "statement": "Rows of zeros and ones are made as follows: start with the single term $0$, and again and again replace each $0$ by the block $0$, $0$, $1$ and each $1$ by the single term $0$. Let $W_j$ be the row after $j$ replacements, so that $W_0$ is $0$ and $W_1$ is $0$, $0$, $1$. Then for every whole number $j$ from $1$ up, the row $W_{j+1}$ is $W_j$ followed by $W_j$ followed by $W_{j-1}$, and so each row starts with the row before it.",
      "idea": "Each term is replaced by its own block, so a row made of parts is replaced part by part, and the claim for one row hands itself on to the next.",
      "lines": [
        {
          "line": "The row $W_2$ is $0$, $0$, $1$, $0$, $0$, $1$, $0$, which is $W_1$ followed by $W_1$ followed by $W_0$.",
          "reason": "Base case: each of the two terms $0$ of $W_1$ gives $0$, $0$, $1$, and its term $1$ gives $0$."
        },
        {
          "line": "Assume that $W_{j+1}$ is $W_j$ followed by $W_j$ followed by $W_{j-1}$, for some whole number $j$ from $1$ up.",
          "reason": "Inductive assumption: the claim at $j$."
        },
        {
          "line": "Replacing the terms of a row made of several rows one after another gives the replaced rows one after another.",
          "reason": "Substitution sequence: each term is replaced by its own block, whatever stands beside it."
        },
        {
          "line": "So $W_{j+2}$ is $W_{j+1}$ followed by $W_{j+1}$ followed by $W_j$.",
          "reason": "Inductive step: $W_{j+2}$ comes from $W_{j+1}$ by the replacement; by lines 2 and 3 it is made of the rows that come from $W_j$, $W_j$ and $W_{j-1}$, and these are $W_{j+1}$, $W_{j+1}$ and $W_j$."
        },
        {
          "line": "So $W_{j+1}$ is $W_j$ followed by $W_j$ followed by $W_{j-1}$ for every whole number $j$ from $1$ up.",
          "reason": "Induction: the base case is line 1 and the inductive step is lines 2 to 4."
        },
        {
          "line": "So each row starts with the row before it.",
          "reason": "Substitution sequence: line 5 for the rows from $W_2$ on, and $W_1$ starts with $W_0$, the term $0$."
        }
      ]
    },
    {
      "id": "t243-p2",
      "method": "proof by contradiction",
      "statement": "Let a sequence of zeros and ones be made as follows: start with the single term $0$, and again and again replace each $0$ by the block $0$, $0$, $1$ and each $1$ by the single term $0$; the rows grow into the sequence. This sequence is not periodic.",
      "idea": "A row of $k$ zeros and $m$ ones turns into a row whose numbers of zeros and ones are sums of multiples of $k$ and $m$. For one positive number $y$ the replacement multiplies $k - ym$ by a fixed number, and this $y$ is irrational. A period gives a row that repeats, and counting the zeros and the ones of one stretch in two ways makes $y$ a quotient of whole numbers.",
      "lines": [
        {
          "line": "Each row starts with the row before it, and the rows grow into one sequence.",
          "reason": "Substitution sequence: the block for $0$ has two terms or more and starts with $0$."
        },
        {
          "line": "Let a row of $k$ zeros and $m$ ones turn, by the replacement, into a row of $u$ zeros and $v$ ones, and look for a positive number $y$ and a number $c$ with $u - yv = c(k - ym)$ for every row of zeros and ones.",
          "reason": "Substitution sequence: the replacement turns the numbers of zeros and ones of a row into those of the next row; such a $y$ is the ratio of zeros to ones that the replacement keeps."
        },
        {
          "line": "$u = 2k + m$",
          "reason": "Substitution sequence: the block for $0$ has $2$ of its terms equal to $0$ and the block for $1$ has $1$, and the new row is $k$ blocks for $0$ and $m$ blocks for $1$."
        },
        {
          "line": "$v = k$",
          "reason": "Substitution sequence: the block for $0$ has $1$ of its terms equal to $1$ and the block for $1$ has $0$."
        },
        {
          "line": "$u - yv = (2 - y)k + m$",
          "reason": "Collecting like terms: lines 3 and 4 go into $u - yv$, and the terms in $k$ and the terms in $m$ are collected."
        },
        {
          "line": "$c = 2 - y$",
          "reason": "Substituting a value: the row of the single term $0$ has $k = 1$ and $m = 0$, so by line 5 the equation $u - yv = c(k - ym)$ reads $2 - y = c$."
        },
        {
          "line": "$1 = -cy$",
          "reason": "Substituting a value: the row of the single term $1$ has $k = 0$ and $m = 1$, so by line 5 the equation $u - yv = c(k - ym)$ reads $1 = -cy$."
        },
        {
          "line": "$1 = -(2 - y)y$",
          "reason": "Substituting a value: line 6 goes into line 7."
        },
        {
          "line": "$1 = -2y + y^2$",
          "reason": "Multiplying out: each term of the bracket is multiplied by $-y$."
        },
        {
          "line": "$y^2 - 2y - 1 = 0$",
          "reason": "Adding the same number to both sides: $1$ is taken from both sides, and the terms in $y$ are collected."
        },
        {
          "line": "Each number $y$ with $y^2 - 2y - 1 = 0$ fits: with $c = 2 - y$, line 5 reads $u - yv = ck - cym$, which is $c(k - ym)$.",
          "reason": "Common factor: lines 10, 9 and 8 read backwards give $1 = -cy$, the number in front of $m$ in line 5."
        },
        {
          "line": "So $y = \\dfrac{2 + \\sqrt{8}}{2}$ or $y = \\dfrac{2 - \\sqrt{8}}{2}$.",
          "reason": "Quadratic formula: the discriminant is $(-2)^2 - 4 \\cdot 1 \\cdot (-1) = 8$."
        },
        {
          "line": "The root $\\sqrt{8}$ is $2\\sqrt{2}$.",
          "reason": "Root of a product: $8 = 4 \\cdot 2$, and $\\sqrt{4}$ is $2$."
        },
        {
          "line": "So $y = 1 + \\sqrt{2}$ or $y = 1 - \\sqrt{2}$.",
          "reason": "Cancelling a common factor: by line 13 the tops of line 12 are $2 + 2\\sqrt{2}$ and $2 - 2\\sqrt{2}$, and the top and the bottom of each are divided by $2$."
        },
        {
          "line": "So $y = 1 + \\sqrt{2}$.",
          "reason": "Positive square root, from arithmetic: $2$ is above $1^2 = 1$, so $\\sqrt{2}$ is above $1$ and the second value is negative, while $y$ is positive."
        },
        {
          "line": "The number $y$ is irrational.",
          "reason": "Irrational square roots, from arithmetic: $2$ lies between $1^2 = 1$ and $2^2 = 4$, so it is no perfect square and $\\sqrt{2}$ is irrational; a rational $y$ would make $\\sqrt{2} = y - 1$ rational."
        },
        {
          "line": "Suppose the sequence has a period $p$, and let the row $B$ of its first $p$ terms have $k$ zeros and $m$ ones.",
          "reason": "Period: each term equals the term $p$ places on, so the sequence is $B$ written again and again."
        },
        {
          "line": "Replacing every term of the sequence by its block gives the sequence again.",
          "reason": "Substitution sequence: the block for $0$ starts with $0$, and the sequence starts with $0$."
        },
        {
          "line": "Let $C$ be the row that $B$ turns into, with $u$ zeros and $v$ ones; the sequence is $C$ written again and again.",
          "reason": "Substitution sequence: replacing the terms of $B$, $B$, $B$ and so on gives $C$, $C$, $C$ and so on, which by line 18 is the sequence."
        },
        {
          "line": "The first $p(u + v)$ terms of the sequence are $u + v$ copies of $B$, and they are $p$ copies of $C$.",
          "reason": "Period: by lines 17 and 19; $B$ has $p$ terms and $C$ has $u + v$ terms."
        },
        {
          "line": "$(u + v)k = pu$",
          "reason": "Multiplication as repeated addition, from arithmetic: the zeros among these terms are counted in the copies of $B$ and in the copies of $C$."
        },
        {
          "line": "$(u + v)m = pv$",
          "reason": "Multiplication as repeated addition, from arithmetic: the ones among these terms are counted in the copies of $B$ and in the copies of $C$."
        },
        {
          "line": "$p(u - yv) = (u + v)(k - ym)$",
          "reason": "Common factor: by lines 21 and 22, $pu - ypv = (u + v)k - y(u + v)m$, and $p$ and $u + v$ are taken out."
        },
        {
          "line": "$pc(k - ym) = (u + v)(k - ym)$",
          "reason": "Substituting a value: $u - yv = c(k - ym)$ with $c = 2 - y$, by lines 11 and 15."
        },
        {
          "line": "The number $m$ is not $0$.",
          "reason": "Period: the block for $0$ holds a $1$, so the sequence holds a $1$, in the block of its first term, and every term lies in a copy of $B$."
        },
        {
          "line": "The number $k - ym$ is not $0$.",
          "reason": "Irrational number, from arithmetic: $k = ym$ would make $y = \\dfrac{k}{m}$, a quotient of whole numbers with $m$ not $0$ by line 25, against line 16."
        },
        {
          "line": "$pc = u + v$",
          "reason": "Dividing both sides by a nonzero number: both sides of line 24 are divided by $k - ym$, which is not $0$ by line 26."
        },
        {
          "line": "So $y = \\dfrac{2p - u - v}{p}$.",
          "reason": "Isolating the variable: $c = 2 - y$ from line 6 goes into line 27, which gives $p(2 - y) = u + v$; this is solved for $y$, and $p$ is not $0$."
        },
        {
          "line": "So $y$ is a rational number.",
          "reason": "Irrational number, from arithmetic: by line 28 the number $y$ is a quotient of integers, since $p$, $u$ and $v$ are whole numbers and $p$ is not $0$."
        },
        {
          "line": "So the sequence is not periodic.",
          "reason": "Irrational number, from arithmetic: lines 16 and 29 cannot both hold, so the supposition of line 17 fails for every $p$."
        }
      ]
    },
    {
      "id": "t243-p3",
      "method": "proof by contradiction",
      "statement": "Let $a_0 = 0$, and for every whole number $n$ let $a_{2n} = a_n$ (the rule for even places) and let $a_{2n+1}$ be the remainder of $a_n + 1$ on division by $2$ (the rule for odd places). These terms are the Morse-Thue sequence, the places counted from $0$: as a substitution sequence it replaces each $0$ by $0$, $1$ and each $1$ by $1$, $0$, so the term in place $n$ gives itself in place $2n$ and the other value in place $2n + 1$. This sequence is not periodic.",
      "idea": "Two uses of the rule for odd places give $a_{4n+3}$ from $a_n$. A least period cannot be even, since half of it would be a period as well. An odd period makes each term fix the next one, by the same step that leads from $a_n$ to $a_{4n+3}$, and then $a_1$ and $a_3$ would be equal.",
      "lines": [
        {
          "line": "The sequence is as given: $a_0 = 0$, $a_{2n} = a_n$ and $a_{2n+1}$ is the remainder of $a_n + 1$ on division by $2$, for every whole number $n$.",
          "reason": "Recursion: $a_0$ starts the sequence, and the rule for even places and the rule for odd places give every later term from an earlier one."
        },
        {
          "line": "The term $a_{4n+3}$ is the remainder of $a_{2n+1} + 1$ on division by $2$.",
          "reason": "Recursion: the rule for odd places with $2n + 1$ in place of $n$, since $4n + 3 = 2(2n + 1) + 1$."
        },
        {
          "line": "The number $a_{2n+1} + 1$ leaves the same remainder on division by $2$ as $a_n + 2$.",
          "reason": "Divisibility of integers, from arithmetic: $a_{2n+1}$ is the remainder of $a_n + 1$, so the two differ by a multiple of $2$, and $1 + 1 = 2$."
        },
        {
          "line": "$2 = 2 + 0$",
          "reason": "Division-with-remainder, from arithmetic: $2$ leaves the remainder $0$ on division by $2$."
        },
        {
          "line": "So $a_{4n+3}$ is the remainder of $a_n$ on division by $2$, for every whole number $n$.",
          "reason": "Divisibility of integers, from arithmetic: by lines 3 and 4 the numbers $a_{2n+1} + 1$ and $a_n$ differ by a multiple of $2$, so line 2 gives the remainder of $a_n$."
        },
        {
          "line": "Suppose the sequence has a period, and let $p$ be its least period.",
          "reason": "A nonempty set of whole numbers has a least member, from arithmetic: a period is a whole number from $1$ up, and by the supposition there is one."
        },
        {
          "line": "If $p = 2q$ for a whole number $q$, then $a_{n+q} = a_{2n+2q}$ for every whole number $n$.",
          "reason": "Recursion: the rule for even places with $n + q$ in place of $n$."
        },
        {
          "line": "Then $a_{2n+2q} = a_{2n}$.",
          "reason": "Period: $2q = p$ is a period."
        },
        {
          "line": "Then $a_{n+q} = a_n$ for every whole number $n$.",
          "reason": "Transitive property: lines 7 and 8, and $a_{2n} = a_n$ by the rule for even places."
        },
        {
          "line": "So $p$ is odd: $p = 2h + 1$ for a whole number $h$.",
          "reason": "Period: by line 9 an even $p$ would give the period $q$, which is below the least period $p$."
        },
        {
          "line": "The term $a_{2n+p}$ is the remainder of $a_{n+h} + 1$ on division by $2$.",
          "reason": "Recursion: the rule for odd places with $n + h$ in place of $n$, since $2n + p = 2(n + h) + 1$."
        },
        {
          "line": "$a_{2n+p} = a_n$",
          "reason": "Period: $a_{2n+p} = a_{2n}$, and $a_{2n} = a_n$ by the rule for even places."
        },
        {
          "line": "So $a_{n+h} + 1$ leaves the same remainder on division by $2$ as $a_n$, for every whole number $n$.",
          "reason": "Divisibility of integers, from arithmetic: by lines 11 and 12, $a_n$ is the remainder of $a_{n+h} + 1$."
        },
        {
          "line": "$a_{2n+1+p} = a_{n+h+1}$",
          "reason": "Recursion: the rule for even places with $n + h + 1$ in place of $n$, since $2n + 1 + p = 2(n + h + 1)$."
        },
        {
          "line": "The term $a_{2n+1+p}$ is the remainder of $a_n + 1$ on division by $2$.",
          "reason": "Period: $a_{2n+1+p} = a_{2n+1}$, and the rule for odd places gives $a_{2n+1}$."
        },
        {
          "line": "So $a_{n+h+1}$ leaves the same remainder on division by $2$ as $a_n + 1$, for every whole number $n$.",
          "reason": "Transitive property: lines 14 and 15."
        },
        {
          "line": "The number $a_{n+h+1} + 1$ leaves the same remainder on division by $2$ as $a_{n+1}$.",
          "reason": "Substituting a value: $n + 1$ in place of $n$ in line 13."
        },
        {
          "line": "So $a_{n+1}$ leaves the same remainder on division by $2$ as $a_n + 2$.",
          "reason": "Divisibility of integers, from arithmetic: by line 16 the numbers $a_{n+h+1} + 1$ and $a_n + 1 + 1$ differ by a multiple of $2$, and line 17."
        },
        {
          "line": "Every term is a whole number from $0$ to $1$.",
          "reason": "Induction: $a_0 = 0$, and each later term is an earlier term or a remainder on division by $2$."
        },
        {
          "line": "So $a_{n+1} = a_{4n+3}$ for every whole number $n$.",
          "reason": "Divisibility of integers, from arithmetic: by lines 4 and 18, $a_{n+1}$ leaves the same remainder as $a_n$, and by line 19 it is that remainder, which is $a_{4n+3}$ by line 5."
        },
        {
          "line": "$a_1 = a_3$",
          "reason": "Substituting a value: $n = 0$ in line 20."
        },
        {
          "line": "$a_1 = 1$",
          "reason": "Recursion: the rule for odd places at $n = 0$ gives the remainder of $0 + 1$ on division by $2$, and $1$ is below $2$."
        },
        {
          "line": "$a_3 = 0$",
          "reason": "Substituting a value: $n = 0$ in line 5 gives the remainder of $0$ on division by $2$, and $0$ is below $2$."
        },
        {
          "line": "So the sequence is not periodic.",
          "reason": "Period: lines 21, 22 and 23 give $1 = 0$, which is false, so the supposition of line 6 fails."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t243-s1",
      "method": "induction",
      "statement": "Let $R_0$ be the single term $0$, and for every whole number $j$ let $R_{j+1}$ be the row made from $R_j$ by replacing each $0$ by $0$, $1$ and each $1$ by $1$, $0$. Prove that for every whole number $j$ the row $R_{j+1}$ is $R_j$ followed by the terms of $R_j$ with $0$ and $1$ exchanged, so that these rows are the steps of the Morse-Thue sequence. Facts it may use: substitution sequence, Morse-Thue sequence, induction.",
      "check": {
        "proof": [
          {
            "line": "The row $R_1$ is $0$, $1$, which is $R_0$ followed by $R_0$ with $0$ and $1$ exchanged.",
            "reason": "Base case: $R_0$ is the term $0$, and its block is $0$, $1$."
          },
          {
            "line": "Assume that $R_{j+1}$ is $R_j$ followed by $R_j$ with $0$ and $1$ exchanged, for some whole number $j$.",
            "reason": "Inductive assumption: the claim at $j$."
          },
          {
            "line": "Then $R_{j+2}$ is the row that $R_j$ turns into, followed by the row that $R_j$ with $0$ and $1$ exchanged turns into.",
            "reason": "Substitution sequence: $R_{j+2}$ comes from $R_{j+1}$, and each term is replaced by its own block, so the two parts of line 2 are replaced one after the other."
          },
          {
            "line": "Exchanging $0$ and $1$ in a row and then replacing its terms gives the same as replacing its terms and then exchanging $0$ and $1$.",
            "reason": "Substitution sequence: the blocks $0$, $1$ and $1$, $0$ turn into each other when $0$ and $1$ are exchanged."
          },
          {
            "line": "So $R_{j+2}$ is $R_{j+1}$ followed by $R_{j+1}$ with $0$ and $1$ exchanged.",
            "reason": "Inductive step: by lines 3 and 4, since $R_j$ turns into $R_{j+1}$."
          },
          {
            "line": "So $R_{j+1}$ is $R_j$ followed by $R_j$ with $0$ and $1$ exchanged, for every whole number $j$.",
            "reason": "Induction: the base case is line 1 and the inductive step is lines 2 to 5."
          },
          {
            "line": "So the rows $R_0$, $R_1$, $R_2$ and so on are the steps of the Morse-Thue sequence.",
            "reason": "Morse-Thue sequence: both start with the term $0$, and by line 6 each step follows the terms so far by the same terms with $0$ and $1$ exchanged."
          }
        ]
      }
    },
    {
      "id": "t243-s2",
      "method": "proof by contradiction",
      "statement": "Let a sequence of zeros and ones be made as follows: start with the single term $0$, and again and again replace each $0$ by the block $0$, $1$ and each $1$ by the single term $0$; the rows grow into the sequence. Prove that this sequence is not periodic. Facts it may use: substitution sequence, period, collecting like terms, substituting a value, multiplying out, adding the same number to both sides, common factor, quadratic formula, dividing both sides by a nonzero number, isolating the variable, and positive square root, irrational square roots, irrational number and multiplication as repeated addition from arithmetic.",
      "check": {
        "proof": [
          {
            "line": "Each row starts with the row before it, and the rows grow into one sequence.",
            "reason": "Substitution sequence: the block for $0$ has two terms or more and starts with $0$."
          },
          {
            "line": "Let a row of $k$ zeros and $m$ ones turn, by the replacement, into a row of $u$ zeros and $v$ ones, and look for a positive number $y$ and a number $c$ with $u - yv = c(k - ym)$ for every row of zeros and ones.",
            "reason": "Substitution sequence: the replacement turns the numbers of zeros and ones of a row into those of the next row; such a $y$ is the ratio of zeros to ones that the replacement keeps."
          },
          {
            "line": "$u = k + m$",
            "reason": "Substitution sequence: the block for $0$ has $1$ of its terms equal to $0$ and the block for $1$ has $1$, and the new row is $k$ blocks for $0$ and $m$ blocks for $1$."
          },
          {
            "line": "$v = k$",
            "reason": "Substitution sequence: the block for $0$ has $1$ of its terms equal to $1$ and the block for $1$ has $0$."
          },
          {
            "line": "$u - yv = (1 - y)k + m$",
            "reason": "Collecting like terms: lines 3 and 4 go into $u - yv$, and the terms in $k$ and the terms in $m$ are collected."
          },
          {
            "line": "$c = 1 - y$",
            "reason": "Substituting a value: the row of the single term $0$ has $k = 1$ and $m = 0$, so by line 5 the equation $u - yv = c(k - ym)$ reads $1 - y = c$."
          },
          {
            "line": "$1 = -cy$",
            "reason": "Substituting a value: the row of the single term $1$ has $k = 0$ and $m = 1$, so by line 5 the equation $u - yv = c(k - ym)$ reads $1 = -cy$."
          },
          {
            "line": "$1 = -(1 - y)y$",
            "reason": "Substituting a value: line 6 goes into line 7."
          },
          {
            "line": "$1 = -y + y^2$",
            "reason": "Multiplying out: each term of the bracket is multiplied by $-y$."
          },
          {
            "line": "$y^2 - y - 1 = 0$",
            "reason": "Adding the same number to both sides: $1$ is taken from both sides, and the terms in $y$ are collected."
          },
          {
            "line": "Each number $y$ with $y^2 - y - 1 = 0$ fits: with $c = 1 - y$, line 5 reads $u - yv = ck - cym$, which is $c(k - ym)$.",
            "reason": "Common factor: lines 10, 9 and 8 read backwards give $1 = -cy$, the number in front of $m$ in line 5."
          },
          {
            "line": "So $y = \\dfrac{1 + \\sqrt{5}}{2}$ or $y = \\dfrac{1 - \\sqrt{5}}{2}$.",
            "reason": "Quadratic formula: the discriminant is $(-1)^2 - 4 \\cdot 1 \\cdot (-1) = 5$."
          },
          {
            "line": "So $y = \\dfrac{1 + \\sqrt{5}}{2}$.",
            "reason": "Positive square root, from arithmetic: $5$ is above $1^2 = 1$, so $\\sqrt{5}$ is above $1$ and the second value is negative, while $y$ is positive."
          },
          {
            "line": "The number $y$ is irrational.",
            "reason": "Irrational square roots, from arithmetic: $5$ lies between $2^2 = 4$ and $3^2 = 9$, so it is no perfect square and $\\sqrt{5}$ is irrational; a rational $y$ would make $\\sqrt{5} = 2y - 1$ rational."
          },
          {
            "line": "Suppose the sequence has a period $p$, and let the row $B$ of its first $p$ terms have $k$ zeros and $m$ ones.",
            "reason": "Period: each term equals the term $p$ places on, so the sequence is $B$ written again and again."
          },
          {
            "line": "Replacing every term of the sequence by its block gives the sequence again.",
            "reason": "Substitution sequence: the block for $0$ starts with $0$, and the sequence starts with $0$."
          },
          {
            "line": "Let $C$ be the row that $B$ turns into, with $u$ zeros and $v$ ones; the sequence is $C$ written again and again.",
            "reason": "Substitution sequence: replacing the terms of $B$, $B$, $B$ and so on gives $C$, $C$, $C$ and so on, which by line 16 is the sequence."
          },
          {
            "line": "The first $p(u + v)$ terms of the sequence are $u + v$ copies of $B$, and they are $p$ copies of $C$.",
            "reason": "Period: by lines 15 and 17; $B$ has $p$ terms and $C$ has $u + v$ terms."
          },
          {
            "line": "$(u + v)k = pu$",
            "reason": "Multiplication as repeated addition, from arithmetic: the zeros among these terms are counted in the copies of $B$ and in the copies of $C$."
          },
          {
            "line": "$(u + v)m = pv$",
            "reason": "Multiplication as repeated addition, from arithmetic: the ones among these terms are counted in the copies of $B$ and in the copies of $C$."
          },
          {
            "line": "$p(u - yv) = (u + v)(k - ym)$",
            "reason": "Common factor: by lines 19 and 20, $pu - ypv = (u + v)k - y(u + v)m$, and $p$ and $u + v$ are taken out."
          },
          {
            "line": "$pc(k - ym) = (u + v)(k - ym)$",
            "reason": "Substituting a value: $u - yv = c(k - ym)$ with $c = 1 - y$, by lines 11 and 13."
          },
          {
            "line": "The number $m$ is not $0$.",
            "reason": "Period: the block for $0$ holds a $1$, so the sequence holds a $1$, in the block of its first term, and every term lies in a copy of $B$."
          },
          {
            "line": "The number $k - ym$ is not $0$.",
            "reason": "Irrational number, from arithmetic: $k = ym$ would make $y = \\dfrac{k}{m}$, a quotient of whole numbers with $m$ not $0$ by line 23, against line 14."
          },
          {
            "line": "$pc = u + v$",
            "reason": "Dividing both sides by a nonzero number: both sides of line 22 are divided by $k - ym$, which is not $0$ by line 24."
          },
          {
            "line": "So $y = \\dfrac{p - u - v}{p}$.",
            "reason": "Isolating the variable: $c = 1 - y$ from line 6 goes into line 25, which gives $p(1 - y) = u + v$; this is solved for $y$, and $p$ is not $0$."
          },
          {
            "line": "So $y$ is a rational number.",
            "reason": "Irrational number, from arithmetic: by line 26 the number $y$ is a quotient of integers, since $p$, $u$ and $v$ are whole numbers and $p$ is not $0$."
          },
          {
            "line": "So the sequence is not periodic.",
            "reason": "Irrational number, from arithmetic: lines 14 and 27 cannot both hold, so the supposition of line 15 fails for every $p$."
          }
        ]
      }
    },
    {
      "id": "t243-s3",
      "method": "induction",
      "statement": "A function $f$ gives each whole number $n$ from $1$ up a whole number $f(n)$ from $1$ up, and $f(n + 1) > f(f(n))$ for every whole number $n$ from $1$ up. Prove that $f(n) = n$ for every whole number $n$ from $1$ up. Facts it may use: induction, substituting a value, and transitivity from arithmetic.",
      "check": {
        "proof": [
          {
            "line": "For every whole number $n$ from $1$ up, $f(n) \\ge 1$.",
            "reason": "Base case: the values of $f$ are whole numbers from $1$ up; this is the claim that $f(n) \\ge k$ for every whole number $n \\ge k$, at $k = 1$."
          },
          {
            "line": "Assume that $f(n) \\ge k$ for every whole number $n \\ge k$, for some whole number $k$ from $1$ up.",
            "reason": "Inductive assumption: the claim at $k$."
          },
          {
            "line": "Take a whole number $n \\ge k + 1$; then $f(n - 1) \\ge k$.",
            "reason": "Inductive assumption: line 2 at the number $n - 1$, which is at least $k$."
          },
          {
            "line": "Then $f(f(n - 1)) \\ge k$.",
            "reason": "Inductive assumption: line 2 at the whole number $f(n - 1)$, which is at least $k$ by line 3."
          },
          {
            "line": "Then $f(n) > k$, so $f(n) \\ge k + 1$.",
            "reason": "Inductive step: $f(n) > f(f(n - 1))$ is the given inequality at $n - 1$, line 4 bounds its right side, and $f(n)$ and $k$ are whole numbers."
          },
          {
            "line": "So $f(n) \\ge k$ for every whole number $n \\ge k$, for every whole number $k$ from $1$ up.",
            "reason": "Induction: the base case is line 1 and the inductive step is lines 2 to 5."
          },
          {
            "line": "So $f(n) \\ge n$ for every whole number $n$ from $1$ up.",
            "reason": "Substituting a value: $k = n$ in line 6."
          },
          {
            "line": "So $f(n + 1) > f(n)$ for every whole number $n$ from $1$ up.",
            "reason": "Transitivity, from arithmetic: $f(n + 1) > f(f(n))$ is given, and $f(f(n)) \\ge f(n)$ by line 7 at the whole number $f(n)$."
          },
          {
            "line": "So $f(i) \\ge f(n + 1)$ for every whole number $i \\ge n + 1$.",
            "reason": "Induction: on $i$, line 8 is the step; the values of $f$ rise at every step from $n + 1$ to $i$."
          },
          {
            "line": "If $f(n) > n$ for some whole number $n$ from $1$ up, then $f(f(n)) \\ge f(n + 1)$.",
            "reason": "Substituting a value: $i = f(n)$ in line 9, a whole number that is at least $n + 1$."
          },
          {
            "line": "So $f(n) \\le n$ for every whole number $n$ from $1$ up.",
            "reason": "Transitivity, from arithmetic: the inequality of line 10 is against the given $f(n + 1) > f(f(n))$."
          },
          {
            "line": "So $f(n) = n$ for every whole number $n$ from $1$ up.",
            "reason": "Transitivity, from arithmetic: lines 7 and 11 hold together only when $f(n) = n$."
          }
        ]
      }
    }
  ]
}
