export default {
  "number": 242,
  "title": "Recurrences that count",
  "section": 23,
  "book": {
    "title": "Problem-Solving Strategies",
    "pages": "223-224"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find $a_5$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $5$ colours, and a long tile covers two neighbouring squares and comes in $9$ colours.",
    "form": "Answer as an integer.",
    "answer": "8840",
    "solution": [
      "Find $a_5$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $5$ colours, and a long tile covers two neighbouring squares and comes in $9$ colours.",
      "For $n$ from $3$ up, $5a_{n-1}$ of the coverings of $n$ squares end in a short tile.",
      "For $n$ from $3$ up, $9a_{n-2}$ of the coverings of $n$ squares end in a long tile.",
      "So $a_n = 5a_{n-1} + 9a_{n-2}$ for every whole number $n$ from $3$ up.",
      "$a_1 = 5$",
      "$a_2 = 5 \\cdot 5 + 9$",
      "$a_2 = 34$",
      "$a_3 = 5 \\cdot 34 + 9 \\cdot 5 = 215$",
      "$a_4 = 5 \\cdot 215 + 9 \\cdot 34 = 1381$",
      "$a_5 = 5 \\cdot 1381 + 9 \\cdot 215 = 8840$"
    ]
  },
  "ideas": [
    {
      "name": "Separation of cases",
      "concrete": "Count the words of three letters made from $a$, $b$, $c$, $d$ and $e$ in which no two letters $e$ stand side by side. There are $5$ such words of one letter and $24$ of two letters, all $25$ pairs but $ee$. A word of three letters that ends in $a$, $b$, $c$ or $d$ is one of the $24$ words of two letters with one of those $4$ letters after it: $96$ words. A word that ends in $e$ has $a$, $b$, $c$ or $d$ directly before that $e$, after one of the $5$ words of one letter: $20$ words. No word ends both ways, so there are $96 + 20 = 116$ words.",
      "general": "**Separation of cases**: when the things to be counted fall into cases that cannot happen together, and every thing is in one of the cases, the count is the sum of the counts of the cases. Sorting the things of size $n$ by their last part writes their number $a_n$ through the numbers for smaller sizes, a recursion for $a_n$; with $a_{n-1}$ and $a_{n-2}$ alone it is a linear recurrence of order 2. Two linked counts, such as the things that end one way and the things that end the other way, each written through the other, give one recurrence once one of the two is eliminated."
    }
  ],
  "kinds": [
    {
      "id": "t242-k1",
      "forms": [
        {
          "example": {
            "problem": "Find $a_5$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $4$ colours, and a long tile covers two neighbouring squares and comes in $17$ colours.",
            "lines": [
              {
                "step": "Find $a_5$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $4$ colours, and a long tile covers two neighbouring squares and comes in $17$ colours.",
                "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the tile on the last square."
              },
              {
                "step": "For $n$ from $3$ up, $4a_{n-1}$ of the coverings of $n$ squares end in a short tile.",
                "reason": "Separation of cases: the $4$ colours of a short last tile are $4$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
              },
              {
                "step": "For $n$ from $3$ up, $17a_{n-2}$ of the coverings of $n$ squares end in a long tile.",
                "reason": "Separation of cases: the $17$ colours of a long last tile are $17$ cases, each with the $a_{n-2}$ coverings of the first $n - 2$ squares, and multiplication as repeated addition adds them."
              },
              {
                "step": "So $a_n = 4a_{n-1} + 17a_{n-2}$ for every whole number $n$ from $3$ up.",
                "reason": "Separation of cases: the last square lies under a short tile or under a long tile, never both, so the counts of lines 2 and 3 are added."
              },
              {
                "step": "$a_1 = 4$",
                "reason": "Separation of cases: one square takes one short tile, in one of $4$ colours."
              },
              {
                "step": "$a_2 = 4 \\cdot 4 + 17$",
                "reason": "Separation of cases: two squares take two short tiles, $4$ colours for the first and $4$ for the second, or one long tile in one of $17$ colours."
              },
              {
                "step": "$a_2 = 33$",
                "reason": "Order of operations, from arithmetic: the product first, then the sum."
              },
              {
                "step": "$a_3 = 4 \\cdot 33 + 17 \\cdot 4 = 200$",
                "reason": "Substituting a value: $n = 3$ in line 4, with $a_2 = 33$ and $a_1 = 4$."
              },
              {
                "step": "$a_4 = 4 \\cdot 200 + 17 \\cdot 33 = 1361$",
                "reason": "Substituting a value: $n = 4$ in line 4, with $a_3 = 200$ and $a_2 = 33$."
              },
              {
                "step": "$a_5 = 4 \\cdot 1361 + 17 \\cdot 200 = 8844$",
                "reason": "Substituting a value: $n = 5$ in line 4, with $a_4 = 1361$ and $a_3 = 200$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $a_5$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $6$ colours, and a long tile covers two neighbouring squares and comes in $6$ colours.",
              "form": "Answer as an integer.",
              "answer": "13608",
              "lines": [
                {
                  "step": "Find $a_5$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $6$ colours, and a long tile covers two neighbouring squares and comes in $6$ colours.",
                  "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the tile on the last square."
                },
                {
                  "step": "For $n$ from $3$ up, $6a_{n-1}$ of the coverings of $n$ squares end in a short tile.",
                  "reason": "Separation of cases: the $6$ colours of a short last tile are $6$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
                },
                {
                  "step": "For $n$ from $3$ up, $6a_{n-2}$ of the coverings of $n$ squares end in a long tile.",
                  "reason": "Separation of cases: the $6$ colours of a long last tile are $6$ cases, each with the $a_{n-2}$ coverings of the first $n - 2$ squares, and multiplication as repeated addition adds them."
                },
                {
                  "step": "So $a_n = 6a_{n-1} + 6a_{n-2}$ for every whole number $n$ from $3$ up.",
                  "reason": "Separation of cases: the last square lies under a short tile or under a long tile, never both, so the counts of lines 2 and 3 are added."
                },
                {
                  "step": "$a_1 = 6$",
                  "reason": "Separation of cases: one square takes one short tile, in one of $6$ colours."
                },
                {
                  "step": "$a_2 = 6 \\cdot 6 + 6$",
                  "reason": "Separation of cases: two squares take two short tiles, $6$ colours for the first and $6$ for the second, or one long tile in one of $6$ colours."
                },
                {
                  "step": "$a_2 = 42$",
                  "reason": "Order of operations, from arithmetic: the product first, then the sum."
                },
                {
                  "step": "$a_3 = 6 \\cdot 42 + 6 \\cdot 6 = 288$",
                  "reason": "Substituting a value: $n = 3$ in line 4, with $a_2 = 42$ and $a_1 = 6$."
                },
                {
                  "step": "$a_4 = 6 \\cdot 288 + 6 \\cdot 42 = 1980$",
                  "reason": "Substituting a value: $n = 4$ in line 4, with $a_3 = 288$ and $a_2 = 42$."
                },
                {
                  "step": "$a_5 = 6 \\cdot 1980 + 6 \\cdot 288 = 13{,}608$",
                  "reason": "Substituting a value: $n = 5$ in line 4, with $a_4 = 1980$ and $a_3 = 288$."
                }
              ]
            },
            {
              "prompt": "Find $a_5$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $4$ colours, and a long tile covers two neighbouring squares and comes in $14$ colours.",
              "form": "Answer as an integer.",
              "answer": "6960",
              "lines": [
                {
                  "step": "Find $a_5$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $4$ colours, and a long tile covers two neighbouring squares and comes in $14$ colours.",
                  "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the tile on the last square."
                },
                {
                  "step": "For $n$ from $3$ up, $4a_{n-1}$ of the coverings of $n$ squares end in a short tile.",
                  "reason": "Separation of cases: the $4$ colours of a short last tile are $4$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
                },
                {
                  "step": "For $n$ from $3$ up, $14a_{n-2}$ of the coverings of $n$ squares end in a long tile.",
                  "reason": "Separation of cases: the $14$ colours of a long last tile are $14$ cases, each with the $a_{n-2}$ coverings of the first $n - 2$ squares, and multiplication as repeated addition adds them."
                },
                {
                  "step": "So $a_n = 4a_{n-1} + 14a_{n-2}$ for every whole number $n$ from $3$ up.",
                  "reason": "Separation of cases: the last square lies under a short tile or under a long tile, never both, so the counts of lines 2 and 3 are added."
                },
                {
                  "step": "$a_1 = 4$",
                  "reason": "Separation of cases: one square takes one short tile, in one of $4$ colours."
                },
                {
                  "step": "$a_2 = 4 \\cdot 4 + 14$",
                  "reason": "Separation of cases: two squares take two short tiles, $4$ colours for the first and $4$ for the second, or one long tile in one of $14$ colours."
                },
                {
                  "step": "$a_2 = 30$",
                  "reason": "Order of operations, from arithmetic: the product first, then the sum."
                },
                {
                  "step": "$a_3 = 4 \\cdot 30 + 14 \\cdot 4 = 176$",
                  "reason": "Substituting a value: $n = 3$ in line 4, with $a_2 = 30$ and $a_1 = 4$."
                },
                {
                  "step": "$a_4 = 4 \\cdot 176 + 14 \\cdot 30 = 1124$",
                  "reason": "Substituting a value: $n = 4$ in line 4, with $a_3 = 176$ and $a_2 = 30$."
                },
                {
                  "step": "$a_5 = 4 \\cdot 1124 + 14 \\cdot 176 = 6960$",
                  "reason": "Substituting a value: $n = 5$ in line 4, with $a_4 = 1124$ and $a_3 = 176$."
                }
              ]
            },
            {
              "prompt": "Find $a_5$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $3$ colours, and a long tile covers two neighbouring squares and comes in $7$ colours.",
              "form": "Answer as an integer.",
              "answer": "1440",
              "lines": [
                {
                  "step": "Find $a_5$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $3$ colours, and a long tile covers two neighbouring squares and comes in $7$ colours.",
                  "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the tile on the last square."
                },
                {
                  "step": "For $n$ from $3$ up, $3a_{n-1}$ of the coverings of $n$ squares end in a short tile.",
                  "reason": "Separation of cases: the $3$ colours of a short last tile are $3$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
                },
                {
                  "step": "For $n$ from $3$ up, $7a_{n-2}$ of the coverings of $n$ squares end in a long tile.",
                  "reason": "Separation of cases: the $7$ colours of a long last tile are $7$ cases, each with the $a_{n-2}$ coverings of the first $n - 2$ squares, and multiplication as repeated addition adds them."
                },
                {
                  "step": "So $a_n = 3a_{n-1} + 7a_{n-2}$ for every whole number $n$ from $3$ up.",
                  "reason": "Separation of cases: the last square lies under a short tile or under a long tile, never both, so the counts of lines 2 and 3 are added."
                },
                {
                  "step": "$a_1 = 3$",
                  "reason": "Separation of cases: one square takes one short tile, in one of $3$ colours."
                },
                {
                  "step": "$a_2 = 3 \\cdot 3 + 7$",
                  "reason": "Separation of cases: two squares take two short tiles, $3$ colours for the first and $3$ for the second, or one long tile in one of $7$ colours."
                },
                {
                  "step": "$a_2 = 16$",
                  "reason": "Order of operations, from arithmetic: the product first, then the sum."
                },
                {
                  "step": "$a_3 = 3 \\cdot 16 + 7 \\cdot 3 = 69$",
                  "reason": "Substituting a value: $n = 3$ in line 4, with $a_2 = 16$ and $a_1 = 3$."
                },
                {
                  "step": "$a_4 = 3 \\cdot 69 + 7 \\cdot 16 = 319$",
                  "reason": "Substituting a value: $n = 4$ in line 4, with $a_3 = 69$ and $a_2 = 16$."
                },
                {
                  "step": "$a_5 = 3 \\cdot 319 + 7 \\cdot 69 = 1440$",
                  "reason": "Substituting a value: $n = 5$ in line 4, with $a_4 = 319$ and $a_3 = 69$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $a_4$, where $a_n$ is the number of words of $n$ letters, each letter taken from the $4$ letters of a set $A$ or the $6$ letters of a set $B$ with no letter in both sets; a letter may be used more than once, but no letter of $B$ comes straight after the same letter.",
            "lines": [
              {
                "step": "Find $a_4$, where $a_n$ is the number of words of $n$ letters, each letter taken from the $4$ letters of a set $A$ or the $6$ letters of a set $B$ with no letter in both sets; a letter may be used more than once, but no letter of $B$ comes straight after the same letter.",
                "reason": "Separation of cases: this is the problem as given; the words are sorted by their last letter."
              },
              {
                "step": "For every whole number $n$ from $1$ up, let $u_n$ be the number of these words of $n$ letters that end in a letter of $A$, and $w_n$ the number that end in a letter of $B$.",
                "reason": "Separation of cases: a word ends in a letter of $A$ or in a letter of $B$, never both."
              },
              {
                "step": "$a_n = u_n + w_n$",
                "reason": "Separation of cases: the two cases of line 2 are counted apart and added."
              },
              {
                "step": "$u_{n+1} = 4a_n$",
                "reason": "Separation of cases: a word of $n + 1$ letters that ends in a letter of $A$ is a word of $n$ letters with one of the $4$ letters of $A$ after it, and multiplication as repeated addition adds the $4$ cases."
              },
              {
                "step": "$w_{n+1} = 6u_n + 5w_n$",
                "reason": "Separation of cases: after a word that ends in a letter of $A$ each of the $6$ letters of $B$ may follow, and after a word that ends in a letter of $B$ only the $5$ others."
              },
              {
                "step": "$u_{n+1} + w_{n+1} = 4a_n + 6u_n + 5w_n$",
                "reason": "Adding two equations: lines 4 and 5 are added."
              },
              {
                "step": "$a_{n+1} = 4a_n + 6u_n + 5w_n$",
                "reason": "Substituting a value: line 3 with $n + 1$ in place of $n$."
              },
              {
                "step": "$a_{n+1} = 4a_n + 5u_n + 5w_n + u_n$",
                "reason": "Collecting like terms, read backwards: $6u_n = 5u_n + u_n$."
              },
              {
                "step": "$a_{n+1} = 4a_n + 5(u_n + w_n) + u_n$",
                "reason": "Common factor: $5$ is taken out of $5u_n + 5w_n$."
              },
              {
                "step": "$a_{n+1} = 4a_n + 5a_n + u_n$",
                "reason": "Substituting a value: $u_n + w_n = a_n$ from line 3."
              },
              {
                "step": "$a_{n+1} = 9a_n + u_n$",
                "reason": "Collecting like terms: the terms in $a_n$ are added."
              },
              {
                "step": "$a_{n+2} = 9a_{n+1} + u_{n+1}$",
                "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 11."
              },
              {
                "step": "$a_{n+2} = 9a_{n+1} + 4a_n$",
                "reason": "Substitution: line 4 gives $u_{n+1} = 4a_n$, which takes the place of $u_{n+1}$ in line 12 and leaves a recurrence for $a_n$ alone."
              },
              {
                "step": "$a_1 = 10$",
                "reason": "Separation of cases: a word of one letter is one of the $4$ letters of $A$ or one of the $6$ letters of $B$."
              },
              {
                "step": "$u_1 = 4$",
                "reason": "Separation of cases: the words of one letter that end in a letter of $A$ are the $4$ letters of $A$."
              },
              {
                "step": "$a_2 = 9 \\cdot 10 + 4 = 94$",
                "reason": "Substituting a value: $n = 1$ in line 11, with $a_1 = 10$ from line 14 and $u_1 = 4$ from line 15."
              },
              {
                "step": "$a_3 = 9 \\cdot 94 + 4 \\cdot 10 = 886$",
                "reason": "Substituting a value: $n = 1$ in line 13, with $a_2 = 94$ and $a_1 = 10$."
              },
              {
                "step": "$a_4 = 9 \\cdot 886 + 4 \\cdot 94 = 8350$",
                "reason": "Substituting a value: $n = 2$ in line 13, with $a_3 = 886$ and $a_2 = 94$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $a_4$, where $a_n$ is the number of words of $n$ letters, each letter taken from the $8$ letters of a set $A$ or the $7$ letters of a set $B$ with no letter in both sets; a letter may be used more than once, but no letter of $B$ comes straight after the same letter.",
              "form": "Answer as an integer.",
              "answer": "46152",
              "lines": [
                {
                  "step": "Find $a_4$, where $a_n$ is the number of words of $n$ letters, each letter taken from the $8$ letters of a set $A$ or the $7$ letters of a set $B$ with no letter in both sets; a letter may be used more than once, but no letter of $B$ comes straight after the same letter.",
                  "reason": "Separation of cases: this is the problem as given; the words are sorted by their last letter."
                },
                {
                  "step": "For every whole number $n$ from $1$ up, let $u_n$ be the number of these words of $n$ letters that end in a letter of $A$, and $w_n$ the number that end in a letter of $B$.",
                  "reason": "Separation of cases: a word ends in a letter of $A$ or in a letter of $B$, never both."
                },
                {
                  "step": "$a_n = u_n + w_n$",
                  "reason": "Separation of cases: the two cases of line 2 are counted apart and added."
                },
                {
                  "step": "$u_{n+1} = 8a_n$",
                  "reason": "Separation of cases: a word of $n + 1$ letters that ends in a letter of $A$ is a word of $n$ letters with one of the $8$ letters of $A$ after it, and multiplication as repeated addition adds the $8$ cases."
                },
                {
                  "step": "$w_{n+1} = 7u_n + 6w_n$",
                  "reason": "Separation of cases: after a word that ends in a letter of $A$ each of the $7$ letters of $B$ may follow, and after a word that ends in a letter of $B$ only the $6$ others."
                },
                {
                  "step": "$u_{n+1} + w_{n+1} = 8a_n + 7u_n + 6w_n$",
                  "reason": "Adding two equations: lines 4 and 5 are added."
                },
                {
                  "step": "$a_{n+1} = 8a_n + 7u_n + 6w_n$",
                  "reason": "Substituting a value: line 3 with $n + 1$ in place of $n$."
                },
                {
                  "step": "$a_{n+1} = 8a_n + 6u_n + 6w_n + u_n$",
                  "reason": "Collecting like terms, read backwards: $7u_n = 6u_n + u_n$."
                },
                {
                  "step": "$a_{n+1} = 8a_n + 6(u_n + w_n) + u_n$",
                  "reason": "Common factor: $6$ is taken out of $6u_n + 6w_n$."
                },
                {
                  "step": "$a_{n+1} = 8a_n + 6a_n + u_n$",
                  "reason": "Substituting a value: $u_n + w_n = a_n$ from line 3."
                },
                {
                  "step": "$a_{n+1} = 14a_n + u_n$",
                  "reason": "Collecting like terms: the terms in $a_n$ are added."
                },
                {
                  "step": "$a_{n+2} = 14a_{n+1} + u_{n+1}$",
                  "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 11."
                },
                {
                  "step": "$a_{n+2} = 14a_{n+1} + 8a_n$",
                  "reason": "Substitution: line 4 gives $u_{n+1} = 8a_n$, which takes the place of $u_{n+1}$ in line 12 and leaves a recurrence for $a_n$ alone."
                },
                {
                  "step": "$a_1 = 15$",
                  "reason": "Separation of cases: a word of one letter is one of the $8$ letters of $A$ or one of the $7$ letters of $B$."
                },
                {
                  "step": "$u_1 = 8$",
                  "reason": "Separation of cases: the words of one letter that end in a letter of $A$ are the $8$ letters of $A$."
                },
                {
                  "step": "$a_2 = 14 \\cdot 15 + 8 = 218$",
                  "reason": "Substituting a value: $n = 1$ in line 11, with $a_1 = 15$ from line 14 and $u_1 = 8$ from line 15."
                },
                {
                  "step": "$a_3 = 14 \\cdot 218 + 8 \\cdot 15 = 3172$",
                  "reason": "Substituting a value: $n = 1$ in line 13, with $a_2 = 218$ and $a_1 = 15$."
                },
                {
                  "step": "$a_4 = 14 \\cdot 3172 + 8 \\cdot 218 = 46{,}152$",
                  "reason": "Substituting a value: $n = 2$ in line 13, with $a_3 = 3172$ and $a_2 = 218$."
                }
              ]
            },
            {
              "prompt": "Find $a_4$, where $a_n$ is the number of words of $n$ letters, each letter taken from the $9$ letters of a set $A$ or the $3$ letters of a set $B$ with no letter in both sets; a letter may be used more than once, but no letter of $B$ comes straight after the same letter.",
              "form": "Answer as an integer.",
              "answer": "19518",
              "lines": [
                {
                  "step": "Find $a_4$, where $a_n$ is the number of words of $n$ letters, each letter taken from the $9$ letters of a set $A$ or the $3$ letters of a set $B$ with no letter in both sets; a letter may be used more than once, but no letter of $B$ comes straight after the same letter.",
                  "reason": "Separation of cases: this is the problem as given; the words are sorted by their last letter."
                },
                {
                  "step": "For every whole number $n$ from $1$ up, let $u_n$ be the number of these words of $n$ letters that end in a letter of $A$, and $w_n$ the number that end in a letter of $B$.",
                  "reason": "Separation of cases: a word ends in a letter of $A$ or in a letter of $B$, never both."
                },
                {
                  "step": "$a_n = u_n + w_n$",
                  "reason": "Separation of cases: the two cases of line 2 are counted apart and added."
                },
                {
                  "step": "$u_{n+1} = 9a_n$",
                  "reason": "Separation of cases: a word of $n + 1$ letters that ends in a letter of $A$ is a word of $n$ letters with one of the $9$ letters of $A$ after it, and multiplication as repeated addition adds the $9$ cases."
                },
                {
                  "step": "$w_{n+1} = 3u_n + 2w_n$",
                  "reason": "Separation of cases: after a word that ends in a letter of $A$ each of the $3$ letters of $B$ may follow, and after a word that ends in a letter of $B$ only the $2$ others."
                },
                {
                  "step": "$u_{n+1} + w_{n+1} = 9a_n + 3u_n + 2w_n$",
                  "reason": "Adding two equations: lines 4 and 5 are added."
                },
                {
                  "step": "$a_{n+1} = 9a_n + 3u_n + 2w_n$",
                  "reason": "Substituting a value: line 3 with $n + 1$ in place of $n$."
                },
                {
                  "step": "$a_{n+1} = 9a_n + 2u_n + 2w_n + u_n$",
                  "reason": "Collecting like terms, read backwards: $3u_n = 2u_n + u_n$."
                },
                {
                  "step": "$a_{n+1} = 9a_n + 2(u_n + w_n) + u_n$",
                  "reason": "Common factor: $2$ is taken out of $2u_n + 2w_n$."
                },
                {
                  "step": "$a_{n+1} = 9a_n + 2a_n + u_n$",
                  "reason": "Substituting a value: $u_n + w_n = a_n$ from line 3."
                },
                {
                  "step": "$a_{n+1} = 11a_n + u_n$",
                  "reason": "Collecting like terms: the terms in $a_n$ are added."
                },
                {
                  "step": "$a_{n+2} = 11a_{n+1} + u_{n+1}$",
                  "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 11."
                },
                {
                  "step": "$a_{n+2} = 11a_{n+1} + 9a_n$",
                  "reason": "Substitution: line 4 gives $u_{n+1} = 9a_n$, which takes the place of $u_{n+1}$ in line 12 and leaves a recurrence for $a_n$ alone."
                },
                {
                  "step": "$a_1 = 12$",
                  "reason": "Separation of cases: a word of one letter is one of the $9$ letters of $A$ or one of the $3$ letters of $B$."
                },
                {
                  "step": "$u_1 = 9$",
                  "reason": "Separation of cases: the words of one letter that end in a letter of $A$ are the $9$ letters of $A$."
                },
                {
                  "step": "$a_2 = 11 \\cdot 12 + 9 = 141$",
                  "reason": "Substituting a value: $n = 1$ in line 11, with $a_1 = 12$ from line 14 and $u_1 = 9$ from line 15."
                },
                {
                  "step": "$a_3 = 11 \\cdot 141 + 9 \\cdot 12 = 1659$",
                  "reason": "Substituting a value: $n = 1$ in line 13, with $a_2 = 141$ and $a_1 = 12$."
                },
                {
                  "step": "$a_4 = 11 \\cdot 1659 + 9 \\cdot 141 = 19{,}518$",
                  "reason": "Substituting a value: $n = 2$ in line 13, with $a_3 = 1659$ and $a_2 = 141$."
                }
              ]
            },
            {
              "prompt": "Find $a_4$, where $a_n$ is the number of words of $n$ letters, each letter taken from the $5$ letters of a set $A$ or the $9$ letters of a set $B$ with no letter in both sets; a letter may be used more than once, but no letter of $B$ comes straight after the same letter.",
              "form": "Answer as an integer.",
              "answer": "33448",
              "lines": [
                {
                  "step": "Find $a_4$, where $a_n$ is the number of words of $n$ letters, each letter taken from the $5$ letters of a set $A$ or the $9$ letters of a set $B$ with no letter in both sets; a letter may be used more than once, but no letter of $B$ comes straight after the same letter.",
                  "reason": "Separation of cases: this is the problem as given; the words are sorted by their last letter."
                },
                {
                  "step": "For every whole number $n$ from $1$ up, let $u_n$ be the number of these words of $n$ letters that end in a letter of $A$, and $w_n$ the number that end in a letter of $B$.",
                  "reason": "Separation of cases: a word ends in a letter of $A$ or in a letter of $B$, never both."
                },
                {
                  "step": "$a_n = u_n + w_n$",
                  "reason": "Separation of cases: the two cases of line 2 are counted apart and added."
                },
                {
                  "step": "$u_{n+1} = 5a_n$",
                  "reason": "Separation of cases: a word of $n + 1$ letters that ends in a letter of $A$ is a word of $n$ letters with one of the $5$ letters of $A$ after it, and multiplication as repeated addition adds the $5$ cases."
                },
                {
                  "step": "$w_{n+1} = 9u_n + 8w_n$",
                  "reason": "Separation of cases: after a word that ends in a letter of $A$ each of the $9$ letters of $B$ may follow, and after a word that ends in a letter of $B$ only the $8$ others."
                },
                {
                  "step": "$u_{n+1} + w_{n+1} = 5a_n + 9u_n + 8w_n$",
                  "reason": "Adding two equations: lines 4 and 5 are added."
                },
                {
                  "step": "$a_{n+1} = 5a_n + 9u_n + 8w_n$",
                  "reason": "Substituting a value: line 3 with $n + 1$ in place of $n$."
                },
                {
                  "step": "$a_{n+1} = 5a_n + 8u_n + 8w_n + u_n$",
                  "reason": "Collecting like terms, read backwards: $9u_n = 8u_n + u_n$."
                },
                {
                  "step": "$a_{n+1} = 5a_n + 8(u_n + w_n) + u_n$",
                  "reason": "Common factor: $8$ is taken out of $8u_n + 8w_n$."
                },
                {
                  "step": "$a_{n+1} = 5a_n + 8a_n + u_n$",
                  "reason": "Substituting a value: $u_n + w_n = a_n$ from line 3."
                },
                {
                  "step": "$a_{n+1} = 13a_n + u_n$",
                  "reason": "Collecting like terms: the terms in $a_n$ are added."
                },
                {
                  "step": "$a_{n+2} = 13a_{n+1} + u_{n+1}$",
                  "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 11."
                },
                {
                  "step": "$a_{n+2} = 13a_{n+1} + 5a_n$",
                  "reason": "Substitution: line 4 gives $u_{n+1} = 5a_n$, which takes the place of $u_{n+1}$ in line 12 and leaves a recurrence for $a_n$ alone."
                },
                {
                  "step": "$a_1 = 14$",
                  "reason": "Separation of cases: a word of one letter is one of the $5$ letters of $A$ or one of the $9$ letters of $B$."
                },
                {
                  "step": "$u_1 = 5$",
                  "reason": "Separation of cases: the words of one letter that end in a letter of $A$ are the $5$ letters of $A$."
                },
                {
                  "step": "$a_2 = 13 \\cdot 14 + 5 = 187$",
                  "reason": "Substituting a value: $n = 1$ in line 11, with $a_1 = 14$ from line 14 and $u_1 = 5$ from line 15."
                },
                {
                  "step": "$a_3 = 13 \\cdot 187 + 5 \\cdot 14 = 2501$",
                  "reason": "Substituting a value: $n = 1$ in line 13, with $a_2 = 187$ and $a_1 = 14$."
                },
                {
                  "step": "$a_4 = 13 \\cdot 2501 + 5 \\cdot 187 = 33{,}448$",
                  "reason": "Substituting a value: $n = 2$ in line 13, with $a_3 = 2501$ and $a_2 = 187$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $a_5$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: the tiles come in every length, a tile of length $k$ covering $k$ neighbouring squares for each whole number $k$ from $1$ up; a tile on one square comes in $7$ colours, and a tile of each greater length comes in $11$ colours.",
            "lines": [
              {
                "step": "Find $a_5$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: the tiles come in every length, a tile of length $k$ covering $k$ neighbouring squares for each whole number $k$ from $1$ up; a tile on one square comes in $7$ colours, and a tile of each greater length comes in $11$ colours.",
                "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the length of the last tile."
              },
              {
                "step": "For $n$ from $2$ up, $7a_{n-1}$ of the coverings of $n$ squares end in a tile on one square.",
                "reason": "Separation of cases: the $7$ colours of that last tile are $7$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
              },
              {
                "step": "For $n$ from $3$ up and each whole number $k$ from $2$ to $n - 1$, $11a_{n-k}$ of them end in a tile of length $k$.",
                "reason": "Separation of cases: the $11$ colours of that last tile are $11$ cases, each with the $a_{n-k}$ coverings of the first $n - k$ squares."
              },
              {
                "step": "For $n$ from $2$ up, $11$ of them are one tile of length $n$.",
                "reason": "Separation of cases: one tile covers the whole row, in one of $11$ colours."
              },
              {
                "step": "So $a_n = 7a_{n-1} + 11a_{n-2} + \\dots + 11a_1 + 11$ for every whole number $n$ from $3$ up.",
                "reason": "Separation of cases: the last tile has one length from $1$ to $n$ and never two, so the counts of lines 2, 3 and 4 are added."
              },
              {
                "step": "$a_{n+1} = 7a_n + 11a_{n-1} + 11a_{n-2} + \\dots + 11a_1 + 11$",
                "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 5."
              },
              {
                "step": "$a_{n+1} - a_n = 7a_n + 11a_{n-1} - 7a_{n-1}$",
                "reason": "Elimination: line 5 is taken from line 6; the terms from $11a_{n-2}$ down to $11a_1$ and the number $11$ stand in both lines and cancel."
              },
              {
                "step": "$a_{n+1} - a_n = 7a_n + 4a_{n-1}$",
                "reason": "Collecting like terms: $11 - 7 = 4$."
              },
              {
                "step": "$a_{n+1} = a_n + 7a_n + 4a_{n-1}$",
                "reason": "Adding the same number to both sides: $a_n$ is added to both sides."
              },
              {
                "step": "So $a_{n+1} = 8a_n + 4a_{n-1}$ for every whole number $n$ from $3$ up.",
                "reason": "Collecting like terms: $a_n + 7a_n = 8a_n$."
              },
              {
                "step": "$a_1 = 7$",
                "reason": "Separation of cases: one square takes one tile, in one of $7$ colours."
              },
              {
                "step": "$a_2 = 7 \\cdot 7 + 11$",
                "reason": "Separation of cases: two squares take two tiles on one square each, $7$ colours for the first and $7$ for the second, or one tile of length $2$ in one of $11$ colours."
              },
              {
                "step": "$a_2 = 60$",
                "reason": "Order of operations, from arithmetic: the product first, then the sum."
              },
              {
                "step": "$a_3 = 7 \\cdot 60 + 11 \\cdot 7 + 11 = 508$",
                "reason": "Substituting a value: $n = 3$ in line 5, with $a_2 = 60$ and $a_1 = 7$."
              },
              {
                "step": "$a_4 = 8 \\cdot 508 + 4 \\cdot 60 = 4304$",
                "reason": "Substituting a value: $n = 3$ in line 10, with $a_3 = 508$ and $a_2 = 60$."
              },
              {
                "step": "$a_5 = 8 \\cdot 4304 + 4 \\cdot 508 = 36{,}464$",
                "reason": "Substituting a value: $n = 4$ in line 10, with $a_4 = 4304$ and $a_3 = 508$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $a_5$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: the tiles come in every length, a tile of length $k$ covering $k$ neighbouring squares for each whole number $k$ from $1$ up; a tile on one square comes in $4$ colours, and a tile of each greater length comes in $9$ colours.",
              "form": "Answer as an integer.",
              "answer": "4975",
              "lines": [
                {
                  "step": "Find $a_5$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: the tiles come in every length, a tile of length $k$ covering $k$ neighbouring squares for each whole number $k$ from $1$ up; a tile on one square comes in $4$ colours, and a tile of each greater length comes in $9$ colours.",
                  "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the length of the last tile."
                },
                {
                  "step": "For $n$ from $2$ up, $4a_{n-1}$ of the coverings of $n$ squares end in a tile on one square.",
                  "reason": "Separation of cases: the $4$ colours of that last tile are $4$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
                },
                {
                  "step": "For $n$ from $3$ up and each whole number $k$ from $2$ to $n - 1$, $9a_{n-k}$ of them end in a tile of length $k$.",
                  "reason": "Separation of cases: the $9$ colours of that last tile are $9$ cases, each with the $a_{n-k}$ coverings of the first $n - k$ squares."
                },
                {
                  "step": "For $n$ from $2$ up, $9$ of them are one tile of length $n$.",
                  "reason": "Separation of cases: one tile covers the whole row, in one of $9$ colours."
                },
                {
                  "step": "So $a_n = 4a_{n-1} + 9a_{n-2} + \\dots + 9a_1 + 9$ for every whole number $n$ from $3$ up.",
                  "reason": "Separation of cases: the last tile has one length from $1$ to $n$ and never two, so the counts of lines 2, 3 and 4 are added."
                },
                {
                  "step": "$a_{n+1} = 4a_n + 9a_{n-1} + 9a_{n-2} + \\dots + 9a_1 + 9$",
                  "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 5."
                },
                {
                  "step": "$a_{n+1} - a_n = 4a_n + 9a_{n-1} - 4a_{n-1}$",
                  "reason": "Elimination: line 5 is taken from line 6; the terms from $9a_{n-2}$ down to $9a_1$ and the number $9$ stand in both lines and cancel."
                },
                {
                  "step": "$a_{n+1} - a_n = 4a_n + 5a_{n-1}$",
                  "reason": "Collecting like terms: $9 - 4 = 5$."
                },
                {
                  "step": "$a_{n+1} = a_n + 4a_n + 5a_{n-1}$",
                  "reason": "Adding the same number to both sides: $a_n$ is added to both sides."
                },
                {
                  "step": "So $a_{n+1} = 5a_n + 5a_{n-1}$ for every whole number $n$ from $3$ up.",
                  "reason": "Collecting like terms: $a_n + 4a_n = 5a_n$."
                },
                {
                  "step": "$a_1 = 4$",
                  "reason": "Separation of cases: one square takes one tile, in one of $4$ colours."
                },
                {
                  "step": "$a_2 = 4 \\cdot 4 + 9$",
                  "reason": "Separation of cases: two squares take two tiles on one square each, $4$ colours for the first and $4$ for the second, or one tile of length $2$ in one of $9$ colours."
                },
                {
                  "step": "$a_2 = 25$",
                  "reason": "Order of operations, from arithmetic: the product first, then the sum."
                },
                {
                  "step": "$a_3 = 4 \\cdot 25 + 9 \\cdot 4 + 9 = 145$",
                  "reason": "Substituting a value: $n = 3$ in line 5, with $a_2 = 25$ and $a_1 = 4$."
                },
                {
                  "step": "$a_4 = 5 \\cdot 145 + 5 \\cdot 25 = 850$",
                  "reason": "Substituting a value: $n = 3$ in line 10, with $a_3 = 145$ and $a_2 = 25$."
                },
                {
                  "step": "$a_5 = 5 \\cdot 850 + 5 \\cdot 145 = 4975$",
                  "reason": "Substituting a value: $n = 4$ in line 10, with $a_4 = 850$ and $a_3 = 145$."
                }
              ]
            },
            {
              "prompt": "Find $a_5$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: the tiles come in every length, a tile of length $k$ covering $k$ neighbouring squares for each whole number $k$ from $1$ up; a tile on one square comes in $3$ colours, and a tile of each greater length comes in $13$ colours.",
              "form": "Answer as an integer.",
              "answer": "3948",
              "lines": [
                {
                  "step": "Find $a_5$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: the tiles come in every length, a tile of length $k$ covering $k$ neighbouring squares for each whole number $k$ from $1$ up; a tile on one square comes in $3$ colours, and a tile of each greater length comes in $13$ colours.",
                  "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the length of the last tile."
                },
                {
                  "step": "For $n$ from $2$ up, $3a_{n-1}$ of the coverings of $n$ squares end in a tile on one square.",
                  "reason": "Separation of cases: the $3$ colours of that last tile are $3$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
                },
                {
                  "step": "For $n$ from $3$ up and each whole number $k$ from $2$ to $n - 1$, $13a_{n-k}$ of them end in a tile of length $k$.",
                  "reason": "Separation of cases: the $13$ colours of that last tile are $13$ cases, each with the $a_{n-k}$ coverings of the first $n - k$ squares."
                },
                {
                  "step": "For $n$ from $2$ up, $13$ of them are one tile of length $n$.",
                  "reason": "Separation of cases: one tile covers the whole row, in one of $13$ colours."
                },
                {
                  "step": "So $a_n = 3a_{n-1} + 13a_{n-2} + \\dots + 13a_1 + 13$ for every whole number $n$ from $3$ up.",
                  "reason": "Separation of cases: the last tile has one length from $1$ to $n$ and never two, so the counts of lines 2, 3 and 4 are added."
                },
                {
                  "step": "$a_{n+1} = 3a_n + 13a_{n-1} + 13a_{n-2} + \\dots + 13a_1 + 13$",
                  "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 5."
                },
                {
                  "step": "$a_{n+1} - a_n = 3a_n + 13a_{n-1} - 3a_{n-1}$",
                  "reason": "Elimination: line 5 is taken from line 6; the terms from $13a_{n-2}$ down to $13a_1$ and the number $13$ stand in both lines and cancel."
                },
                {
                  "step": "$a_{n+1} - a_n = 3a_n + 10a_{n-1}$",
                  "reason": "Collecting like terms: $13 - 3 = 10$."
                },
                {
                  "step": "$a_{n+1} = a_n + 3a_n + 10a_{n-1}$",
                  "reason": "Adding the same number to both sides: $a_n$ is added to both sides."
                },
                {
                  "step": "So $a_{n+1} = 4a_n + 10a_{n-1}$ for every whole number $n$ from $3$ up.",
                  "reason": "Collecting like terms: $a_n + 3a_n = 4a_n$."
                },
                {
                  "step": "$a_1 = 3$",
                  "reason": "Separation of cases: one square takes one tile, in one of $3$ colours."
                },
                {
                  "step": "$a_2 = 3 \\cdot 3 + 13$",
                  "reason": "Separation of cases: two squares take two tiles on one square each, $3$ colours for the first and $3$ for the second, or one tile of length $2$ in one of $13$ colours."
                },
                {
                  "step": "$a_2 = 22$",
                  "reason": "Order of operations, from arithmetic: the product first, then the sum."
                },
                {
                  "step": "$a_3 = 3 \\cdot 22 + 13 \\cdot 3 + 13 = 118$",
                  "reason": "Substituting a value: $n = 3$ in line 5, with $a_2 = 22$ and $a_1 = 3$."
                },
                {
                  "step": "$a_4 = 4 \\cdot 118 + 10 \\cdot 22 = 692$",
                  "reason": "Substituting a value: $n = 3$ in line 10, with $a_3 = 118$ and $a_2 = 22$."
                },
                {
                  "step": "$a_5 = 4 \\cdot 692 + 10 \\cdot 118 = 3948$",
                  "reason": "Substituting a value: $n = 4$ in line 10, with $a_4 = 692$ and $a_3 = 118$."
                }
              ]
            },
            {
              "prompt": "Find $a_5$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: the tiles come in every length, a tile of length $k$ covering $k$ neighbouring squares for each whole number $k$ from $1$ up; a tile on one square comes in $2$ colours, and a tile of each greater length comes in $8$ colours.",
              "form": "Answer as an integer.",
              "answer": "936",
              "lines": [
                {
                  "step": "Find $a_5$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: the tiles come in every length, a tile of length $k$ covering $k$ neighbouring squares for each whole number $k$ from $1$ up; a tile on one square comes in $2$ colours, and a tile of each greater length comes in $8$ colours.",
                  "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the length of the last tile."
                },
                {
                  "step": "For $n$ from $2$ up, $2a_{n-1}$ of the coverings of $n$ squares end in a tile on one square.",
                  "reason": "Separation of cases: the $2$ colours of that last tile are $2$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
                },
                {
                  "step": "For $n$ from $3$ up and each whole number $k$ from $2$ to $n - 1$, $8a_{n-k}$ of them end in a tile of length $k$.",
                  "reason": "Separation of cases: the $8$ colours of that last tile are $8$ cases, each with the $a_{n-k}$ coverings of the first $n - k$ squares."
                },
                {
                  "step": "For $n$ from $2$ up, $8$ of them are one tile of length $n$.",
                  "reason": "Separation of cases: one tile covers the whole row, in one of $8$ colours."
                },
                {
                  "step": "So $a_n = 2a_{n-1} + 8a_{n-2} + \\dots + 8a_1 + 8$ for every whole number $n$ from $3$ up.",
                  "reason": "Separation of cases: the last tile has one length from $1$ to $n$ and never two, so the counts of lines 2, 3 and 4 are added."
                },
                {
                  "step": "$a_{n+1} = 2a_n + 8a_{n-1} + 8a_{n-2} + \\dots + 8a_1 + 8$",
                  "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 5."
                },
                {
                  "step": "$a_{n+1} - a_n = 2a_n + 8a_{n-1} - 2a_{n-1}$",
                  "reason": "Elimination: line 5 is taken from line 6; the terms from $8a_{n-2}$ down to $8a_1$ and the number $8$ stand in both lines and cancel."
                },
                {
                  "step": "$a_{n+1} - a_n = 2a_n + 6a_{n-1}$",
                  "reason": "Collecting like terms: $8 - 2 = 6$."
                },
                {
                  "step": "$a_{n+1} = a_n + 2a_n + 6a_{n-1}$",
                  "reason": "Adding the same number to both sides: $a_n$ is added to both sides."
                },
                {
                  "step": "So $a_{n+1} = 3a_n + 6a_{n-1}$ for every whole number $n$ from $3$ up.",
                  "reason": "Collecting like terms: $a_n + 2a_n = 3a_n$."
                },
                {
                  "step": "$a_1 = 2$",
                  "reason": "Separation of cases: one square takes one tile, in one of $2$ colours."
                },
                {
                  "step": "$a_2 = 2 \\cdot 2 + 8$",
                  "reason": "Separation of cases: two squares take two tiles on one square each, $2$ colours for the first and $2$ for the second, or one tile of length $2$ in one of $8$ colours."
                },
                {
                  "step": "$a_2 = 12$",
                  "reason": "Order of operations, from arithmetic: the product first, then the sum."
                },
                {
                  "step": "$a_3 = 2 \\cdot 12 + 8 \\cdot 2 + 8 = 48$",
                  "reason": "Substituting a value: $n = 3$ in line 5, with $a_2 = 12$ and $a_1 = 2$."
                },
                {
                  "step": "$a_4 = 3 \\cdot 48 + 6 \\cdot 12 = 216$",
                  "reason": "Substituting a value: $n = 3$ in line 10, with $a_3 = 48$ and $a_2 = 12$."
                },
                {
                  "step": "$a_5 = 3 \\cdot 216 + 6 \\cdot 48 = 936$",
                  "reason": "Substituting a value: $n = 4$ in line 10, with $a_4 = 216$ and $a_3 = 48$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t242-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the number $y$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $11$ colours, and a long tile covers two neighbouring squares and comes in $26$ colours.",
            "lines": [
              {
                "step": "Find the number $y$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $11$ colours, and a long tile covers two neighbouring squares and comes in $26$ colours.",
                "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the tile on the last square."
              },
              {
                "step": "For $n$ from $3$ up, $11a_{n-1}$ of the coverings of $n$ squares end in a short tile.",
                "reason": "Separation of cases: the $11$ colours of a short last tile are $11$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
              },
              {
                "step": "For $n$ from $3$ up, $26a_{n-2}$ of the coverings of $n$ squares end in a long tile.",
                "reason": "Separation of cases: the $26$ colours of a long last tile are $26$ cases, each with the $a_{n-2}$ coverings of the first $n - 2$ squares, and multiplication as repeated addition adds them."
              },
              {
                "step": "So $a_n = 11a_{n-1} + 26a_{n-2}$ for every whole number $n$ from $3$ up.",
                "reason": "Separation of cases: the last square lies under a short tile or under a long tile, never both, so the counts of lines 2 and 3 are added."
              },
              {
                "step": "$a_1 = 11$",
                "reason": "Separation of cases: one square takes one short tile, in one of $11$ colours."
              },
              {
                "step": "$a_2 = 11 \\cdot 11 + 26$",
                "reason": "Separation of cases: two squares take two short tiles, $11$ colours for the first and $11$ for the second, or one long tile in one of $26$ colours."
              },
              {
                "step": "$a_2 = 147$",
                "reason": "Order of operations, from arithmetic: the product first, then the sum."
              },
              {
                "step": "$x^2 = 11x + 26$",
                "reason": "Characteristic equation: line 4 is a linear recurrence of order 2, and $a_n$, $a_{n-1}$ and $a_{n-2}$ become $x^2$, $x$ and $1$."
              },
              {
                "step": "$x^2 - 11x - 26 = 0$",
                "reason": "Adding the same number to both sides: $11x + 26$ is taken from both sides."
              },
              {
                "step": "$(x - 13)(x + 2) = 0$",
                "reason": "Factoring a quadratic: $-13$ and $2$ have sum $-11$ and product $-26$."
              },
              {
                "step": "The roots are $r_1 = 13$ and $r_2 = -2$.",
                "reason": "Zero-product property: one of the two brackets is $0$; the positive root is $r_1$ and the negative root is $r_2$."
              },
              {
                "step": "So $a_n = y \\cdot 13^n + z \\cdot (-2)^n$ for every whole number $n$ from $1$ up.",
                "reason": "General solution (distinct roots): the roots $13$ and $-2$ are different, and the sequence counted from $a_1$ satisfies the recurrence of line 4 at every step; counting from $1$ in place of $0$ changes only the numbers $y$ and $z$."
              },
              {
                "step": "$13y - 2z = 11$",
                "reason": "Substituting a value: $n = 1$ in line 12, with $a_1 = 11$."
              },
              {
                "step": "$169y + 4z = 147$",
                "reason": "Substituting a value: $n = 2$ in line 12, with $(-2)^2 = 4$ and $a_2 = 147$."
              },
              {
                "step": "$26y - 4z = 22$",
                "reason": "Multiplying both sides by the same number: line 13 is multiplied by $2$."
              },
              {
                "step": "$195y = 169$",
                "reason": "Adding two equations: lines 14 and 15 are added."
              },
              {
                "step": "$y = \\dfrac{169}{195}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $195$."
              },
              {
                "step": "$y = \\dfrac{13}{15}$",
                "reason": "Cancelling a common factor: $13$ divides $169$ and $195$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number $y$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $7$ colours, and a long tile covers two neighbouring squares and comes in $18$ colours.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "9/11",
              "lines": [
                {
                  "step": "Find the number $y$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $7$ colours, and a long tile covers two neighbouring squares and comes in $18$ colours.",
                  "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the tile on the last square."
                },
                {
                  "step": "For $n$ from $3$ up, $7a_{n-1}$ of the coverings of $n$ squares end in a short tile.",
                  "reason": "Separation of cases: the $7$ colours of a short last tile are $7$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
                },
                {
                  "step": "For $n$ from $3$ up, $18a_{n-2}$ of the coverings of $n$ squares end in a long tile.",
                  "reason": "Separation of cases: the $18$ colours of a long last tile are $18$ cases, each with the $a_{n-2}$ coverings of the first $n - 2$ squares, and multiplication as repeated addition adds them."
                },
                {
                  "step": "So $a_n = 7a_{n-1} + 18a_{n-2}$ for every whole number $n$ from $3$ up.",
                  "reason": "Separation of cases: the last square lies under a short tile or under a long tile, never both, so the counts of lines 2 and 3 are added."
                },
                {
                  "step": "$a_1 = 7$",
                  "reason": "Separation of cases: one square takes one short tile, in one of $7$ colours."
                },
                {
                  "step": "$a_2 = 7 \\cdot 7 + 18$",
                  "reason": "Separation of cases: two squares take two short tiles, $7$ colours for the first and $7$ for the second, or one long tile in one of $18$ colours."
                },
                {
                  "step": "$a_2 = 67$",
                  "reason": "Order of operations, from arithmetic: the product first, then the sum."
                },
                {
                  "step": "$x^2 = 7x + 18$",
                  "reason": "Characteristic equation: line 4 is a linear recurrence of order 2, and $a_n$, $a_{n-1}$ and $a_{n-2}$ become $x^2$, $x$ and $1$."
                },
                {
                  "step": "$x^2 - 7x - 18 = 0$",
                  "reason": "Adding the same number to both sides: $7x + 18$ is taken from both sides."
                },
                {
                  "step": "$(x - 9)(x + 2) = 0$",
                  "reason": "Factoring a quadratic: $-9$ and $2$ have sum $-7$ and product $-18$."
                },
                {
                  "step": "The roots are $r_1 = 9$ and $r_2 = -2$.",
                  "reason": "Zero-product property: one of the two brackets is $0$; the positive root is $r_1$ and the negative root is $r_2$."
                },
                {
                  "step": "So $a_n = y \\cdot 9^n + z \\cdot (-2)^n$ for every whole number $n$ from $1$ up.",
                  "reason": "General solution (distinct roots): the roots $9$ and $-2$ are different, and the sequence counted from $a_1$ satisfies the recurrence of line 4 at every step; counting from $1$ in place of $0$ changes only the numbers $y$ and $z$."
                },
                {
                  "step": "$9y - 2z = 7$",
                  "reason": "Substituting a value: $n = 1$ in line 12, with $a_1 = 7$."
                },
                {
                  "step": "$81y + 4z = 67$",
                  "reason": "Substituting a value: $n = 2$ in line 12, with $(-2)^2 = 4$ and $a_2 = 67$."
                },
                {
                  "step": "$18y - 4z = 14$",
                  "reason": "Multiplying both sides by the same number: line 13 is multiplied by $2$."
                },
                {
                  "step": "$99y = 81$",
                  "reason": "Adding two equations: lines 14 and 15 are added."
                },
                {
                  "step": "$y = \\dfrac{81}{99}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $99$."
                },
                {
                  "step": "$y = \\dfrac{9}{11}$",
                  "reason": "Cancelling a common factor: $9$ divides $81$ and $99$."
                }
              ]
            },
            {
              "prompt": "Find the number $y$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $8$ colours, and a long tile covers two neighbouring squares and comes in $65$ colours.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "13/18",
              "lines": [
                {
                  "step": "Find the number $y$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $8$ colours, and a long tile covers two neighbouring squares and comes in $65$ colours.",
                  "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the tile on the last square."
                },
                {
                  "step": "For $n$ from $3$ up, $8a_{n-1}$ of the coverings of $n$ squares end in a short tile.",
                  "reason": "Separation of cases: the $8$ colours of a short last tile are $8$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
                },
                {
                  "step": "For $n$ from $3$ up, $65a_{n-2}$ of the coverings of $n$ squares end in a long tile.",
                  "reason": "Separation of cases: the $65$ colours of a long last tile are $65$ cases, each with the $a_{n-2}$ coverings of the first $n - 2$ squares, and multiplication as repeated addition adds them."
                },
                {
                  "step": "So $a_n = 8a_{n-1} + 65a_{n-2}$ for every whole number $n$ from $3$ up.",
                  "reason": "Separation of cases: the last square lies under a short tile or under a long tile, never both, so the counts of lines 2 and 3 are added."
                },
                {
                  "step": "$a_1 = 8$",
                  "reason": "Separation of cases: one square takes one short tile, in one of $8$ colours."
                },
                {
                  "step": "$a_2 = 8 \\cdot 8 + 65$",
                  "reason": "Separation of cases: two squares take two short tiles, $8$ colours for the first and $8$ for the second, or one long tile in one of $65$ colours."
                },
                {
                  "step": "$a_2 = 129$",
                  "reason": "Order of operations, from arithmetic: the product first, then the sum."
                },
                {
                  "step": "$x^2 = 8x + 65$",
                  "reason": "Characteristic equation: line 4 is a linear recurrence of order 2, and $a_n$, $a_{n-1}$ and $a_{n-2}$ become $x^2$, $x$ and $1$."
                },
                {
                  "step": "$x^2 - 8x - 65 = 0$",
                  "reason": "Adding the same number to both sides: $8x + 65$ is taken from both sides."
                },
                {
                  "step": "$(x - 13)(x + 5) = 0$",
                  "reason": "Factoring a quadratic: $-13$ and $5$ have sum $-8$ and product $-65$."
                },
                {
                  "step": "The roots are $r_1 = 13$ and $r_2 = -5$.",
                  "reason": "Zero-product property: one of the two brackets is $0$; the positive root is $r_1$ and the negative root is $r_2$."
                },
                {
                  "step": "So $a_n = y \\cdot 13^n + z \\cdot (-5)^n$ for every whole number $n$ from $1$ up.",
                  "reason": "General solution (distinct roots): the roots $13$ and $-5$ are different, and the sequence counted from $a_1$ satisfies the recurrence of line 4 at every step; counting from $1$ in place of $0$ changes only the numbers $y$ and $z$."
                },
                {
                  "step": "$13y - 5z = 8$",
                  "reason": "Substituting a value: $n = 1$ in line 12, with $a_1 = 8$."
                },
                {
                  "step": "$169y + 25z = 129$",
                  "reason": "Substituting a value: $n = 2$ in line 12, with $(-5)^2 = 25$ and $a_2 = 129$."
                },
                {
                  "step": "$65y - 25z = 40$",
                  "reason": "Multiplying both sides by the same number: line 13 is multiplied by $5$."
                },
                {
                  "step": "$234y = 169$",
                  "reason": "Adding two equations: lines 14 and 15 are added."
                },
                {
                  "step": "$y = \\dfrac{169}{234}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $234$."
                },
                {
                  "step": "$y = \\dfrac{13}{18}$",
                  "reason": "Cancelling a common factor: $13$ divides $169$ and $234$."
                }
              ]
            },
            {
              "prompt": "Find the number $y$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $2$ colours, and a long tile covers two neighbouring squares and comes in $35$ colours.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "7/12",
              "lines": [
                {
                  "step": "Find the number $y$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $2$ colours, and a long tile covers two neighbouring squares and comes in $35$ colours.",
                  "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the tile on the last square."
                },
                {
                  "step": "For $n$ from $3$ up, $2a_{n-1}$ of the coverings of $n$ squares end in a short tile.",
                  "reason": "Separation of cases: the $2$ colours of a short last tile are $2$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
                },
                {
                  "step": "For $n$ from $3$ up, $35a_{n-2}$ of the coverings of $n$ squares end in a long tile.",
                  "reason": "Separation of cases: the $35$ colours of a long last tile are $35$ cases, each with the $a_{n-2}$ coverings of the first $n - 2$ squares, and multiplication as repeated addition adds them."
                },
                {
                  "step": "So $a_n = 2a_{n-1} + 35a_{n-2}$ for every whole number $n$ from $3$ up.",
                  "reason": "Separation of cases: the last square lies under a short tile or under a long tile, never both, so the counts of lines 2 and 3 are added."
                },
                {
                  "step": "$a_1 = 2$",
                  "reason": "Separation of cases: one square takes one short tile, in one of $2$ colours."
                },
                {
                  "step": "$a_2 = 2 \\cdot 2 + 35$",
                  "reason": "Separation of cases: two squares take two short tiles, $2$ colours for the first and $2$ for the second, or one long tile in one of $35$ colours."
                },
                {
                  "step": "$a_2 = 39$",
                  "reason": "Order of operations, from arithmetic: the product first, then the sum."
                },
                {
                  "step": "$x^2 = 2x + 35$",
                  "reason": "Characteristic equation: line 4 is a linear recurrence of order 2, and $a_n$, $a_{n-1}$ and $a_{n-2}$ become $x^2$, $x$ and $1$."
                },
                {
                  "step": "$x^2 - 2x - 35 = 0$",
                  "reason": "Adding the same number to both sides: $2x + 35$ is taken from both sides."
                },
                {
                  "step": "$(x - 7)(x + 5) = 0$",
                  "reason": "Factoring a quadratic: $-7$ and $5$ have sum $-2$ and product $-35$."
                },
                {
                  "step": "The roots are $r_1 = 7$ and $r_2 = -5$.",
                  "reason": "Zero-product property: one of the two brackets is $0$; the positive root is $r_1$ and the negative root is $r_2$."
                },
                {
                  "step": "So $a_n = y \\cdot 7^n + z \\cdot (-5)^n$ for every whole number $n$ from $1$ up.",
                  "reason": "General solution (distinct roots): the roots $7$ and $-5$ are different, and the sequence counted from $a_1$ satisfies the recurrence of line 4 at every step; counting from $1$ in place of $0$ changes only the numbers $y$ and $z$."
                },
                {
                  "step": "$7y - 5z = 2$",
                  "reason": "Substituting a value: $n = 1$ in line 12, with $a_1 = 2$."
                },
                {
                  "step": "$49y + 25z = 39$",
                  "reason": "Substituting a value: $n = 2$ in line 12, with $(-5)^2 = 25$ and $a_2 = 39$."
                },
                {
                  "step": "$35y - 25z = 10$",
                  "reason": "Multiplying both sides by the same number: line 13 is multiplied by $5$."
                },
                {
                  "step": "$84y = 49$",
                  "reason": "Adding two equations: lines 14 and 15 are added."
                },
                {
                  "step": "$y = \\dfrac{49}{84}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $84$."
                },
                {
                  "step": "$y = \\dfrac{7}{12}$",
                  "reason": "Cancelling a common factor: $7$ divides $49$ and $84$."
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
      "id": "t242-p1",
      "method": "proof by cases",
      "statement": "For each whole number $n$ from $1$ up, let $a_n$ be the number of permutations of $1, 2, \\dots, n$, that is a rule $f$ that gives each of the numbers $1, 2, \\dots, n$ a value $f(i)$ from the same numbers, no two values the same, with $|f(i) - i| \\le 1$ for every $i$. Then $a_1 = 1$, $a_2 = 2$ and $a_n = a_{n-1} + a_{n-2}$ for every whole number $n$ from $3$ up.",
      "idea": "Sort the permutations by the value of $f(n)$: it is $n$ or $n - 1$, and in the second case $n - 1$ must send to $n$, so the rest is a shorter permutation of the same kind.",
      "lines": [
        {
          "line": "$a_1 = 1$",
          "reason": "Separation of cases: for one number the only value is $f(1) = 1$."
        },
        {
          "line": "$a_2 = 2$",
          "reason": "Separation of cases: for two numbers $f(2) = 2$ with $f(1) = 1$, or $f(2) = 1$ with $f(1) = 2$."
        },
        {
          "line": "For $n$ from $3$ up, $f(n) = n$ or $f(n) = n - 1$.",
          "reason": "Absolute value, from arithmetic: $|f(n) - n| \\le 1$ and $f(n)$ is at most $n$."
        },
        {
          "line": "When $f(n) = n$, the values $f(1), \\dots, f(n - 1)$ are $1, \\dots, n - 1$, each within $1$ of its $i$: $a_{n-1}$ permutations.",
          "reason": "Separation of cases: the value $n$ is taken, so the first $n - 1$ numbers form a permutation of the same kind."
        },
        {
          "line": "When $f(n) = n - 1$, the value $n$ is $f(n - 1)$.",
          "reason": "Absolute value, from arithmetic: only $i = n - 1$ and $i = n$ have $|n - i| \\le 1$, and $f(n)$ is not $n$."
        },
        {
          "line": "When $f(n) = n - 1$ and $f(n - 1) = n$, the values $f(1), \\dots, f(n - 2)$ are $1, \\dots, n - 2$: $a_{n-2}$ permutations.",
          "reason": "Separation of cases: the values $n - 1$ and $n$ are taken, so the first $n - 2$ numbers form a permutation of the same kind."
        },
        {
          "line": "So $a_n = a_{n-1} + a_{n-2}$ for every whole number $n$ from $3$ up.",
          "reason": "Separation of cases: the two cases of line 3 cannot happen together, so the counts of lines 4 and 6 are added."
        }
      ]
    },
    {
      "id": "t242-p2",
      "method": "proof by cases",
      "statement": "For each whole number $n$ from $4$ up, let $b_n$ be the number of permutations of $1, 2, \\dots, n$, that is a rule $f$ that gives each of the numbers $1, 2, \\dots, n$ a value $f(i)$ from the same numbers, no two values the same, in which $f(i)$ is $i$ or a neighbour of $i$ when the numbers stand in a circle, with $n$ and $1$ neighbours. Then $b_n = a_{n-1} + 2a_{n-2} + 2$, where $a_n$ counts the permutations with $|f(i) - i| \\le 1$ for every $i$.",
      "idea": "Sort by $f(n)$, which is $n$, $n - 1$ or $1$; a swap of two neighbours leaves a row of the first kind, and the only other way is to turn the whole circle one place.",
      "lines": [
        {
          "line": "$f(n) = n$, $f(n) = n - 1$ or $f(n) = 1$.",
          "reason": "Separation of cases: in the circle the neighbours of $n$ are $n - 1$ and $1$."
        },
        {
          "line": "When $f(n) = n$, the values $f(1), \\dots, f(n - 1)$ are $1, \\dots, n - 1$, each within $1$ of its $i$: $a_{n-1}$ permutations.",
          "reason": "Separation of cases: the value $n$ is taken, so $f(1)$ is $1$ or $2$, and the first $n - 1$ numbers form a row permutation counted by $a_{n-1}$."
        },
        {
          "line": "When $f(n) = n - 1$, the value $n$ is $f(n - 1)$ or $f(1)$.",
          "reason": "Separation of cases: in the circle only $n - 1$, $n$ and $1$ may send to $n$, and $f(n)$ is not $n$."
        },
        {
          "line": "When $f(n) = n - 1$ and $f(n - 1) = n$, the values $f(1), \\dots, f(n - 2)$ are $1, \\dots, n - 2$: $a_{n-2}$ permutations.",
          "reason": "Separation of cases: $n - 1$ and $n$ are taken, so $f(1)$ is $1$ or $2$, and the first $n - 2$ numbers form a row permutation."
        },
        {
          "line": "When $f(n) = n - 1$ and $f(1) = n$, then $f(i) = i - 1$ for every $i$ from $2$ to $n$: one permutation.",
          "reason": "Induction: only $2$ is left to send to $1$, and once $f(i) = i - 1$, only $i + 1$ is left to send to $i$."
        },
        {
          "line": "When $f(n) = 1$, the value $n$ is $f(n - 1)$ or $f(1)$.",
          "reason": "Separation of cases: $f(n)$ is not $n$, so $n - 1$ or $1$ sends to $n$."
        },
        {
          "line": "When $f(n) = 1$ and $f(1) = n$, the values $f(2), \\dots, f(n - 1)$ are $2, \\dots, n - 1$: $a_{n-2}$ permutations.",
          "reason": "Separation of cases: $1$ and $n$ are taken, so the middle $n - 2$ numbers form a row permutation."
        },
        {
          "line": "When $f(n) = 1$ and $f(n - 1) = n$, then $f(i) = i + 1$ for every $i$ from $1$ to $n - 1$: one permutation.",
          "reason": "Induction: only $n - 2$ is left to send to $n - 1$, and once $f(i) = i + 1$, only $i - 1$ is left to send to $i$."
        },
        {
          "line": "$b_n = a_{n-1} + a_{n-2} + 1 + a_{n-2} + 1$",
          "reason": "Separation of cases: the cases of lines 1, 3 and 6 cannot happen together, so the counts of lines 2, 4, 5, 7 and 8 are added."
        },
        {
          "line": "$b_n = a_{n-1} + 2a_{n-2} + 2$",
          "reason": "Collecting like terms: the two $a_{n-2}$ and the two $1$ are added."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t242-s1",
      "method": "proof by cases",
      "statement": "For each whole number $n$ from $1$ up, let $s_n$ be the number of sets of numbers taken from $1, 2, \\dots, n$, the empty set included, that hold no three consecutive whole numbers. Prove that $s_n = s_{n-1} + s_{n-2} + s_{n-3}$ for every whole number $n$ from $4$ up. Facts it may use: separation of cases.",
      "check": {
        "proof": [
          {
            "line": "Each set counted by $s_n$ leaves out $n$, or holds $n$ and leaves out $n - 1$, or holds $n$ and $n - 1$ and leaves out $n - 2$.",
            "reason": "Separation of cases: a set that holds $n$, $n - 1$ and $n - 2$ holds three consecutive numbers, so the three cases take in every set counted, and no set is in two of them."
          },
          {
            "line": "The sets that leave out $n$ are the $s_{n-1}$ sets from $1, \\dots, n - 1$ with no three consecutive numbers.",
            "reason": "Separation of cases: $n$ plays no part in them."
          },
          {
            "line": "The sets that hold $n$ and leave out $n - 1$ are the $s_{n-2}$ sets from $1, \\dots, n - 2$ with no three consecutive numbers, each with $n$ put in.",
            "reason": "Separation of cases: with $n - 1$ left out, $n$ starts no run of three with smaller numbers."
          },
          {
            "line": "The sets that hold $n$ and $n - 1$ and leave out $n - 2$ are the $s_{n-3}$ sets from $1, \\dots, n - 3$ with no three consecutive numbers, each with $n - 1$ and $n$ put in.",
            "reason": "Separation of cases: with $n - 2$ left out, $n - 1$ and $n$ start no run of three with smaller numbers, and $n - 3$ is at least $1$."
          },
          {
            "line": "So $s_n = s_{n-1} + s_{n-2} + s_{n-3}$ for every whole number $n$ from $4$ up.",
            "reason": "Separation of cases: the counts of lines 2, 3 and 4 are added."
          }
        ]
      }
    },
    {
      "id": "t242-s2",
      "method": "induction",
      "statement": "Let $f(0) = 1$ and, for every whole number $n$, let $f(n + 1) = f(n)$ when $n + 1$ is odd and $f(n + 1) = f(n) + f\\left(\\dfrac{n + 1}{2}\\right)$ when $n + 1$ is even. Prove that $f(2m) = \\sum_{i=0}^{m} f(i)$ for every whole number $m$. Facts it may use: recursion, substituting a value, term from the sum, induction, base case, inductive assumption, inductive step.",
      "check": {
        "proof": [
          {
            "line": "$f(2 \\cdot 0) = \\sum_{i=0}^{0} f(i)$",
            "reason": "Base case: both sides are $f(0)$."
          },
          {
            "line": "Assume that $f(2k) = \\sum_{i=0}^{k} f(i)$ for some whole number $k$.",
            "reason": "Inductive assumption: the claim at $m = k$."
          },
          {
            "line": "$f(2k + 1) = f(2k)$",
            "reason": "Recursion: $n = 2k$, and $2k + 1$ is odd."
          },
          {
            "line": "$f(2k + 2) = f(2k + 1) + f(k + 1)$",
            "reason": "Recursion: $n = 2k + 1$, and $2k + 2$ is even with half $k + 1$."
          },
          {
            "line": "$f(2k + 2) = f(2k) + f(k + 1)$",
            "reason": "Substituting a value: line 3 goes into line 4."
          },
          {
            "line": "$f(2k + 2) = \\sum_{i=0}^{k} f(i) + f(k + 1)$",
            "reason": "Substituting a value: line 2 goes into line 5."
          },
          {
            "line": "$f(2k + 2) = \\sum_{i=0}^{k+1} f(i)$",
            "reason": "Term from the sum: $f(k + 1)$ is the last term of the sum up to $k + 1$."
          },
          {
            "line": "$f(2(k + 1)) = \\sum_{i=0}^{k+1} f(i)$",
            "reason": "Inductive step: by lines 3 to 7, with $2k + 2 = 2(k + 1)$; the statement for $m = k$ has given the statement for $m = k + 1$."
          },
          {
            "line": "So $f(2m) = \\sum_{i=0}^{m} f(i)$ for every whole number $m$.",
            "reason": "Induction: the base case is line 1 and the inductive step is lines 2 to 8."
          }
        ]
      }
    }
  ]
}
