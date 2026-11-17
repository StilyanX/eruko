export default [
  {
    "id": "t242-k1-p01",
    "topic": "recurrences-from-counting",
    "kind": "t242-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_5 = 2310$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $2$ colours, and a long tile covers two neighbouring squares and comes in $17$ colours.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_5 = 2310$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $2$ colours, and a long tile covers two neighbouring squares and comes in $17$ colours.",
        "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the tile on the last square."
      },
      {
        "step": "For $n$ from $3$ up, $2a_{n-1}$ of the coverings of $n$ squares end in a short tile.",
        "reason": "Separation of cases: the $2$ colours of a short last tile are $2$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "For $n$ from $3$ up, $17a_{n-2}$ of the coverings of $n$ squares end in a long tile.",
        "reason": "Separation of cases: the $17$ colours of a long last tile are $17$ cases, each with the $a_{n-2}$ coverings of the first $n - 2$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "So $a_n = 2a_{n-1} + 17a_{n-2}$ for every whole number $n$ from $3$ up.",
        "reason": "Separation of cases: the last square lies under a short tile or under a long tile, never both, so the counts of lines 2 and 3 are added."
      },
      {
        "step": "$a_1 = 2$",
        "reason": "Separation of cases: one square takes one short tile, in one of $2$ colours."
      },
      {
        "step": "$a_2 = 2 \\cdot 2 + 17$",
        "reason": "Separation of cases: two squares take two short tiles, $2$ colours for the first and $2$ for the second, or one long tile in one of $17$ colours."
      },
      {
        "step": "$a_2 = 21$",
        "reason": "Order of operations, from arithmetic: the product first, then the sum."
      },
      {
        "step": "$a_3 = 2 \\cdot 21 + 17 \\cdot 2 = 76$",
        "reason": "Substituting a value: $n = 3$ in line 4, with $a_2 = 21$ and $a_1 = 2$."
      },
      {
        "step": "$a_4 = 2 \\cdot 76 + 17 \\cdot 21 = 509$",
        "reason": "Substituting a value: $n = 4$ in line 4, with $a_3 = 76$ and $a_2 = 21$."
      },
      {
        "step": "$a_5 = 2 \\cdot 509 + 17 \\cdot 76 = 2310$",
        "reason": "Substituting a value: $n = 5$ in line 4, with $a_4 = 509$ and $a_3 = 76$."
      }
    ]
  },
  {
    "id": "t242-k1-p02",
    "topic": "recurrences-from-counting",
    "kind": "t242-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $a_4 = 97{,}544$, where $a_n$ is the number of words of $n$ letters, each letter taken from the $10$ letters of a set $A$ or the $8$ letters of a set $B$ with no letter in both sets; a letter may be used more than once, but no letter of $B$ comes straight after the same letter.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_4 = 97{,}544$, where $a_n$ is the number of words of $n$ letters, each letter taken from the $10$ letters of a set $A$ or the $8$ letters of a set $B$ with no letter in both sets; a letter may be used more than once, but no letter of $B$ comes straight after the same letter.",
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
        "step": "$u_{n+1} = 10a_n$",
        "reason": "Separation of cases: a word of $n + 1$ letters that ends in a letter of $A$ is a word of $n$ letters with one of the $10$ letters of $A$ after it, and multiplication as repeated addition adds the $10$ cases."
      },
      {
        "step": "$w_{n+1} = 8u_n + 7w_n$",
        "reason": "Separation of cases: after a word that ends in a letter of $A$ each of the $8$ letters of $B$ may follow, and after a word that ends in a letter of $B$ only the $7$ others."
      },
      {
        "step": "$u_{n+1} + w_{n+1} = 10a_n + 8u_n + 7w_n$",
        "reason": "Adding two equations: lines 4 and 5 are added."
      },
      {
        "step": "$a_{n+1} = 10a_n + 8u_n + 7w_n$",
        "reason": "Substituting a value: line 3 with $n + 1$ in place of $n$."
      },
      {
        "step": "$a_{n+1} = 10a_n + 7u_n + 7w_n + u_n$",
        "reason": "Collecting like terms, read backwards: $8u_n = 7u_n + u_n$."
      },
      {
        "step": "$a_{n+1} = 10a_n + 7(u_n + w_n) + u_n$",
        "reason": "Common factor: $7$ is taken out of $7u_n + 7w_n$."
      },
      {
        "step": "$a_{n+1} = 10a_n + 7a_n + u_n$",
        "reason": "Substituting a value: $u_n + w_n = a_n$ from line 3."
      },
      {
        "step": "$a_{n+1} = 17a_n + u_n$",
        "reason": "Collecting like terms: the terms in $a_n$ are added."
      },
      {
        "step": "$a_{n+2} = 17a_{n+1} + u_{n+1}$",
        "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 11."
      },
      {
        "step": "$a_{n+2} = 17a_{n+1} + 10a_n$",
        "reason": "Substitution: line 4 gives $u_{n+1} = 10a_n$, which takes the place of $u_{n+1}$ in line 12 and leaves a recurrence for $a_n$ alone."
      },
      {
        "step": "$a_1 = 18$",
        "reason": "Separation of cases: a word of one letter is one of the $10$ letters of $A$ or one of the $8$ letters of $B$."
      },
      {
        "step": "$u_1 = 10$",
        "reason": "Separation of cases: the words of one letter that end in a letter of $A$ are the $10$ letters of $A$."
      },
      {
        "step": "$a_2 = 17 \\cdot 18 + 10 = 316$",
        "reason": "Substituting a value: $n = 1$ in line 11, with $a_1 = 18$ from line 14 and $u_1 = 10$ from line 15."
      },
      {
        "step": "$a_3 = 17 \\cdot 316 + 10 \\cdot 18 = 5552$",
        "reason": "Substituting a value: $n = 1$ in line 13, with $a_2 = 316$ and $a_1 = 18$."
      },
      {
        "step": "$a_4 = 17 \\cdot 5552 + 10 \\cdot 316 = 97{,}544$",
        "reason": "Substituting a value: $n = 2$ in line 13, with $a_3 = 5552$ and $a_2 = 316$."
      }
    ]
  },
  {
    "id": "t242-k1-p03",
    "topic": "recurrences-from-counting",
    "kind": "t242-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_5 = 1280$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $2$ colours, and a long tile covers two neighbouring squares and comes in $12$ colours.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_5 = 1280$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $2$ colours, and a long tile covers two neighbouring squares and comes in $12$ colours.",
        "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the tile on the last square."
      },
      {
        "step": "For $n$ from $3$ up, $2a_{n-1}$ of the coverings of $n$ squares end in a short tile.",
        "reason": "Separation of cases: the $2$ colours of a short last tile are $2$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "For $n$ from $3$ up, $12a_{n-2}$ of the coverings of $n$ squares end in a long tile.",
        "reason": "Separation of cases: the $12$ colours of a long last tile are $12$ cases, each with the $a_{n-2}$ coverings of the first $n - 2$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "So $a_n = 2a_{n-1} + 12a_{n-2}$ for every whole number $n$ from $3$ up.",
        "reason": "Separation of cases: the last square lies under a short tile or under a long tile, never both, so the counts of lines 2 and 3 are added."
      },
      {
        "step": "$a_1 = 2$",
        "reason": "Separation of cases: one square takes one short tile, in one of $2$ colours."
      },
      {
        "step": "$a_2 = 2 \\cdot 2 + 12$",
        "reason": "Separation of cases: two squares take two short tiles, $2$ colours for the first and $2$ for the second, or one long tile in one of $12$ colours."
      },
      {
        "step": "$a_2 = 16$",
        "reason": "Order of operations, from arithmetic: the product first, then the sum."
      },
      {
        "step": "$a_3 = 2 \\cdot 16 + 12 \\cdot 2 = 56$",
        "reason": "Substituting a value: $n = 3$ in line 4, with $a_2 = 16$ and $a_1 = 2$."
      },
      {
        "step": "$a_4 = 2 \\cdot 56 + 12 \\cdot 16 = 304$",
        "reason": "Substituting a value: $n = 4$ in line 4, with $a_3 = 56$ and $a_2 = 16$."
      },
      {
        "step": "$a_5 = 2 \\cdot 304 + 12 \\cdot 56 = 1280$",
        "reason": "Substituting a value: $n = 5$ in line 4, with $a_4 = 304$ and $a_3 = 56$."
      }
    ]
  },
  {
    "id": "t242-k1-p04",
    "topic": "recurrences-from-counting",
    "kind": "t242-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_5 = 1656$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $2$ colours, and a long tile covers two neighbouring squares and comes in $14$ colours.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_5 = 1656$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $2$ colours, and a long tile covers two neighbouring squares and comes in $14$ colours.",
        "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the tile on the last square."
      },
      {
        "step": "For $n$ from $3$ up, $2a_{n-1}$ of the coverings of $n$ squares end in a short tile.",
        "reason": "Separation of cases: the $2$ colours of a short last tile are $2$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "For $n$ from $3$ up, $14a_{n-2}$ of the coverings of $n$ squares end in a long tile.",
        "reason": "Separation of cases: the $14$ colours of a long last tile are $14$ cases, each with the $a_{n-2}$ coverings of the first $n - 2$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "So $a_n = 2a_{n-1} + 14a_{n-2}$ for every whole number $n$ from $3$ up.",
        "reason": "Separation of cases: the last square lies under a short tile or under a long tile, never both, so the counts of lines 2 and 3 are added."
      },
      {
        "step": "$a_1 = 2$",
        "reason": "Separation of cases: one square takes one short tile, in one of $2$ colours."
      },
      {
        "step": "$a_2 = 2 \\cdot 2 + 14$",
        "reason": "Separation of cases: two squares take two short tiles, $2$ colours for the first and $2$ for the second, or one long tile in one of $14$ colours."
      },
      {
        "step": "$a_2 = 18$",
        "reason": "Order of operations, from arithmetic: the product first, then the sum."
      },
      {
        "step": "$a_3 = 2 \\cdot 18 + 14 \\cdot 2 = 64$",
        "reason": "Substituting a value: $n = 3$ in line 4, with $a_2 = 18$ and $a_1 = 2$."
      },
      {
        "step": "$a_4 = 2 \\cdot 64 + 14 \\cdot 18 = 380$",
        "reason": "Substituting a value: $n = 4$ in line 4, with $a_3 = 64$ and $a_2 = 18$."
      },
      {
        "step": "$a_5 = 2 \\cdot 380 + 14 \\cdot 64 = 1656$",
        "reason": "Substituting a value: $n = 5$ in line 4, with $a_4 = 380$ and $a_3 = 64$."
      }
    ]
  },
  {
    "id": "t242-k1-p05",
    "topic": "recurrences-from-counting",
    "kind": "t242-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_5 = 11{,}520$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $6$ colours, and a long tile covers two neighbouring squares and comes in $4$ colours.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_5 = 11{,}520$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $6$ colours, and a long tile covers two neighbouring squares and comes in $4$ colours.",
        "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the tile on the last square."
      },
      {
        "step": "For $n$ from $3$ up, $6a_{n-1}$ of the coverings of $n$ squares end in a short tile.",
        "reason": "Separation of cases: the $6$ colours of a short last tile are $6$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "For $n$ from $3$ up, $4a_{n-2}$ of the coverings of $n$ squares end in a long tile.",
        "reason": "Separation of cases: the $4$ colours of a long last tile are $4$ cases, each with the $a_{n-2}$ coverings of the first $n - 2$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "So $a_n = 6a_{n-1} + 4a_{n-2}$ for every whole number $n$ from $3$ up.",
        "reason": "Separation of cases: the last square lies under a short tile or under a long tile, never both, so the counts of lines 2 and 3 are added."
      },
      {
        "step": "$a_1 = 6$",
        "reason": "Separation of cases: one square takes one short tile, in one of $6$ colours."
      },
      {
        "step": "$a_2 = 6 \\cdot 6 + 4$",
        "reason": "Separation of cases: two squares take two short tiles, $6$ colours for the first and $6$ for the second, or one long tile in one of $4$ colours."
      },
      {
        "step": "$a_2 = 40$",
        "reason": "Order of operations, from arithmetic: the product first, then the sum."
      },
      {
        "step": "$a_3 = 6 \\cdot 40 + 4 \\cdot 6 = 264$",
        "reason": "Substituting a value: $n = 3$ in line 4, with $a_2 = 40$ and $a_1 = 6$."
      },
      {
        "step": "$a_4 = 6 \\cdot 264 + 4 \\cdot 40 = 1744$",
        "reason": "Substituting a value: $n = 4$ in line 4, with $a_3 = 264$ and $a_2 = 40$."
      },
      {
        "step": "$a_5 = 6 \\cdot 1744 + 4 \\cdot 264 = 11{,}520$",
        "reason": "Substituting a value: $n = 5$ in line 4, with $a_4 = 1744$ and $a_3 = 264$."
      }
    ]
  },
  {
    "id": "t242-k1-p06",
    "topic": "recurrences-from-counting",
    "kind": "t242-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Prove that $a_5 = 20{,}396$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: the tiles come in every length, a tile of length $k$ covering $k$ neighbouring squares for each whole number $k$ from $1$ up; a tile on one square comes in $5$ colours, and a tile of each greater length comes in $19$ colours.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_5 = 20{,}396$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: the tiles come in every length, a tile of length $k$ covering $k$ neighbouring squares for each whole number $k$ from $1$ up; a tile on one square comes in $5$ colours, and a tile of each greater length comes in $19$ colours.",
        "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the length of the last tile."
      },
      {
        "step": "For $n$ from $2$ up, $5a_{n-1}$ of the coverings of $n$ squares end in a tile on one square.",
        "reason": "Separation of cases: the $5$ colours of that last tile are $5$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "For $n$ from $3$ up and each whole number $k$ from $2$ to $n - 1$, $19a_{n-k}$ of them end in a tile of length $k$.",
        "reason": "Separation of cases: the $19$ colours of that last tile are $19$ cases, each with the $a_{n-k}$ coverings of the first $n - k$ squares."
      },
      {
        "step": "For $n$ from $2$ up, $19$ of them are one tile of length $n$.",
        "reason": "Separation of cases: one tile covers the whole row, in one of $19$ colours."
      },
      {
        "step": "So $a_n = 5a_{n-1} + 19a_{n-2} + \\dots + 19a_1 + 19$ for every whole number $n$ from $3$ up.",
        "reason": "Separation of cases: the last tile has one length from $1$ to $n$ and never two, so the counts of lines 2, 3 and 4 are added."
      },
      {
        "step": "$a_{n+1} = 5a_n + 19a_{n-1} + 19a_{n-2} + \\dots + 19a_1 + 19$",
        "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 5."
      },
      {
        "step": "$a_{n+1} - a_n = 5a_n + 19a_{n-1} - 5a_{n-1}$",
        "reason": "Elimination: line 5 is taken from line 6; the terms from $19a_{n-2}$ down to $19a_1$ and the number $19$ stand in both lines and cancel."
      },
      {
        "step": "$a_{n+1} - a_n = 5a_n + 14a_{n-1}$",
        "reason": "Collecting like terms: $19 - 5 = 14$."
      },
      {
        "step": "$a_{n+1} = a_n + 5a_n + 14a_{n-1}$",
        "reason": "Adding the same number to both sides: $a_n$ is added to both sides."
      },
      {
        "step": "So $a_{n+1} = 6a_n + 14a_{n-1}$ for every whole number $n$ from $3$ up.",
        "reason": "Collecting like terms: $a_n + 5a_n = 6a_n$."
      },
      {
        "step": "$a_1 = 5$",
        "reason": "Separation of cases: one square takes one tile, in one of $5$ colours."
      },
      {
        "step": "$a_2 = 5 \\cdot 5 + 19$",
        "reason": "Separation of cases: two squares take two tiles on one square each, $5$ colours for the first and $5$ for the second, or one tile of length $2$ in one of $19$ colours."
      },
      {
        "step": "$a_2 = 44$",
        "reason": "Order of operations, from arithmetic: the product first, then the sum."
      },
      {
        "step": "$a_3 = 5 \\cdot 44 + 19 \\cdot 5 + 19 = 334$",
        "reason": "Substituting a value: $n = 3$ in line 5, with $a_2 = 44$ and $a_1 = 5$."
      },
      {
        "step": "$a_4 = 6 \\cdot 334 + 14 \\cdot 44 = 2620$",
        "reason": "Substituting a value: $n = 3$ in line 10, with $a_3 = 334$ and $a_2 = 44$."
      },
      {
        "step": "$a_5 = 6 \\cdot 2620 + 14 \\cdot 334 = 20{,}396$",
        "reason": "Substituting a value: $n = 4$ in line 10, with $a_4 = 2620$ and $a_3 = 334$."
      }
    ]
  },
  {
    "id": "t242-k1-p07",
    "topic": "recurrences-from-counting",
    "kind": "t242-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Prove that $a_5 = 88{,}308$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: the tiles come in every length, a tile of length $k$ covering $k$ neighbouring squares for each whole number $k$ from $1$ up; a tile on one square comes in $8$ colours, and a tile of each greater length comes in $20$ colours.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_5 = 88{,}308$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: the tiles come in every length, a tile of length $k$ covering $k$ neighbouring squares for each whole number $k$ from $1$ up; a tile on one square comes in $8$ colours, and a tile of each greater length comes in $20$ colours.",
        "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the length of the last tile."
      },
      {
        "step": "For $n$ from $2$ up, $8a_{n-1}$ of the coverings of $n$ squares end in a tile on one square.",
        "reason": "Separation of cases: the $8$ colours of that last tile are $8$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "For $n$ from $3$ up and each whole number $k$ from $2$ to $n - 1$, $20a_{n-k}$ of them end in a tile of length $k$.",
        "reason": "Separation of cases: the $20$ colours of that last tile are $20$ cases, each with the $a_{n-k}$ coverings of the first $n - k$ squares."
      },
      {
        "step": "For $n$ from $2$ up, $20$ of them are one tile of length $n$.",
        "reason": "Separation of cases: one tile covers the whole row, in one of $20$ colours."
      },
      {
        "step": "So $a_n = 8a_{n-1} + 20a_{n-2} + \\dots + 20a_1 + 20$ for every whole number $n$ from $3$ up.",
        "reason": "Separation of cases: the last tile has one length from $1$ to $n$ and never two, so the counts of lines 2, 3 and 4 are added."
      },
      {
        "step": "$a_{n+1} = 8a_n + 20a_{n-1} + 20a_{n-2} + \\dots + 20a_1 + 20$",
        "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 5."
      },
      {
        "step": "$a_{n+1} - a_n = 8a_n + 20a_{n-1} - 8a_{n-1}$",
        "reason": "Elimination: line 5 is taken from line 6; the terms from $20a_{n-2}$ down to $20a_1$ and the number $20$ stand in both lines and cancel."
      },
      {
        "step": "$a_{n+1} - a_n = 8a_n + 12a_{n-1}$",
        "reason": "Collecting like terms: $20 - 8 = 12$."
      },
      {
        "step": "$a_{n+1} = a_n + 8a_n + 12a_{n-1}$",
        "reason": "Adding the same number to both sides: $a_n$ is added to both sides."
      },
      {
        "step": "So $a_{n+1} = 9a_n + 12a_{n-1}$ for every whole number $n$ from $3$ up.",
        "reason": "Collecting like terms: $a_n + 8a_n = 9a_n$."
      },
      {
        "step": "$a_1 = 8$",
        "reason": "Separation of cases: one square takes one tile, in one of $8$ colours."
      },
      {
        "step": "$a_2 = 8 \\cdot 8 + 20$",
        "reason": "Separation of cases: two squares take two tiles on one square each, $8$ colours for the first and $8$ for the second, or one tile of length $2$ in one of $20$ colours."
      },
      {
        "step": "$a_2 = 84$",
        "reason": "Order of operations, from arithmetic: the product first, then the sum."
      },
      {
        "step": "$a_3 = 8 \\cdot 84 + 20 \\cdot 8 + 20 = 852$",
        "reason": "Substituting a value: $n = 3$ in line 5, with $a_2 = 84$ and $a_1 = 8$."
      },
      {
        "step": "$a_4 = 9 \\cdot 852 + 12 \\cdot 84 = 8676$",
        "reason": "Substituting a value: $n = 3$ in line 10, with $a_3 = 852$ and $a_2 = 84$."
      },
      {
        "step": "$a_5 = 9 \\cdot 8676 + 12 \\cdot 852 = 88{,}308$",
        "reason": "Substituting a value: $n = 4$ in line 10, with $a_4 = 8676$ and $a_3 = 852$."
      }
    ]
  },
  {
    "id": "t242-k1-p08",
    "topic": "recurrences-from-counting",
    "kind": "t242-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_5 = 30{,}856$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $7$ colours, and a long tile covers two neighbouring squares and comes in $9$ colours.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_5 = 30{,}856$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $7$ colours, and a long tile covers two neighbouring squares and comes in $9$ colours.",
        "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the tile on the last square."
      },
      {
        "step": "For $n$ from $3$ up, $7a_{n-1}$ of the coverings of $n$ squares end in a short tile.",
        "reason": "Separation of cases: the $7$ colours of a short last tile are $7$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "For $n$ from $3$ up, $9a_{n-2}$ of the coverings of $n$ squares end in a long tile.",
        "reason": "Separation of cases: the $9$ colours of a long last tile are $9$ cases, each with the $a_{n-2}$ coverings of the first $n - 2$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "So $a_n = 7a_{n-1} + 9a_{n-2}$ for every whole number $n$ from $3$ up.",
        "reason": "Separation of cases: the last square lies under a short tile or under a long tile, never both, so the counts of lines 2 and 3 are added."
      },
      {
        "step": "$a_1 = 7$",
        "reason": "Separation of cases: one square takes one short tile, in one of $7$ colours."
      },
      {
        "step": "$a_2 = 7 \\cdot 7 + 9$",
        "reason": "Separation of cases: two squares take two short tiles, $7$ colours for the first and $7$ for the second, or one long tile in one of $9$ colours."
      },
      {
        "step": "$a_2 = 58$",
        "reason": "Order of operations, from arithmetic: the product first, then the sum."
      },
      {
        "step": "$a_3 = 7 \\cdot 58 + 9 \\cdot 7 = 469$",
        "reason": "Substituting a value: $n = 3$ in line 4, with $a_2 = 58$ and $a_1 = 7$."
      },
      {
        "step": "$a_4 = 7 \\cdot 469 + 9 \\cdot 58 = 3805$",
        "reason": "Substituting a value: $n = 4$ in line 4, with $a_3 = 469$ and $a_2 = 58$."
      },
      {
        "step": "$a_5 = 7 \\cdot 3805 + 9 \\cdot 469 = 30{,}856$",
        "reason": "Substituting a value: $n = 5$ in line 4, with $a_4 = 3805$ and $a_3 = 469$."
      }
    ]
  },
  {
    "id": "t242-k1-p09",
    "topic": "recurrences-from-counting",
    "kind": "t242-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $a_4 = 74{,}468$, where $a_n$ is the number of words of $n$ letters, each letter taken from the $6$ letters of a set $A$ or the $11$ letters of a set $B$ with no letter in both sets; a letter may be used more than once, but no letter of $B$ comes straight after the same letter.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_4 = 74{,}468$, where $a_n$ is the number of words of $n$ letters, each letter taken from the $6$ letters of a set $A$ or the $11$ letters of a set $B$ with no letter in both sets; a letter may be used more than once, but no letter of $B$ comes straight after the same letter.",
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
        "step": "$u_{n+1} = 6a_n$",
        "reason": "Separation of cases: a word of $n + 1$ letters that ends in a letter of $A$ is a word of $n$ letters with one of the $6$ letters of $A$ after it, and multiplication as repeated addition adds the $6$ cases."
      },
      {
        "step": "$w_{n+1} = 11u_n + 10w_n$",
        "reason": "Separation of cases: after a word that ends in a letter of $A$ each of the $11$ letters of $B$ may follow, and after a word that ends in a letter of $B$ only the $10$ others."
      },
      {
        "step": "$u_{n+1} + w_{n+1} = 6a_n + 11u_n + 10w_n$",
        "reason": "Adding two equations: lines 4 and 5 are added."
      },
      {
        "step": "$a_{n+1} = 6a_n + 11u_n + 10w_n$",
        "reason": "Substituting a value: line 3 with $n + 1$ in place of $n$."
      },
      {
        "step": "$a_{n+1} = 6a_n + 10u_n + 10w_n + u_n$",
        "reason": "Collecting like terms, read backwards: $11u_n = 10u_n + u_n$."
      },
      {
        "step": "$a_{n+1} = 6a_n + 10(u_n + w_n) + u_n$",
        "reason": "Common factor: $10$ is taken out of $10u_n + 10w_n$."
      },
      {
        "step": "$a_{n+1} = 6a_n + 10a_n + u_n$",
        "reason": "Substituting a value: $u_n + w_n = a_n$ from line 3."
      },
      {
        "step": "$a_{n+1} = 16a_n + u_n$",
        "reason": "Collecting like terms: the terms in $a_n$ are added."
      },
      {
        "step": "$a_{n+2} = 16a_{n+1} + u_{n+1}$",
        "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 11."
      },
      {
        "step": "$a_{n+2} = 16a_{n+1} + 6a_n$",
        "reason": "Substitution: line 4 gives $u_{n+1} = 6a_n$, which takes the place of $u_{n+1}$ in line 12 and leaves a recurrence for $a_n$ alone."
      },
      {
        "step": "$a_1 = 17$",
        "reason": "Separation of cases: a word of one letter is one of the $6$ letters of $A$ or one of the $11$ letters of $B$."
      },
      {
        "step": "$u_1 = 6$",
        "reason": "Separation of cases: the words of one letter that end in a letter of $A$ are the $6$ letters of $A$."
      },
      {
        "step": "$a_2 = 16 \\cdot 17 + 6 = 278$",
        "reason": "Substituting a value: $n = 1$ in line 11, with $a_1 = 17$ from line 14 and $u_1 = 6$ from line 15."
      },
      {
        "step": "$a_3 = 16 \\cdot 278 + 6 \\cdot 17 = 4550$",
        "reason": "Substituting a value: $n = 1$ in line 13, with $a_2 = 278$ and $a_1 = 17$."
      },
      {
        "step": "$a_4 = 16 \\cdot 4550 + 6 \\cdot 278 = 74{,}468$",
        "reason": "Substituting a value: $n = 2$ in line 13, with $a_3 = 4550$ and $a_2 = 278$."
      }
    ]
  },
  {
    "id": "t242-k1-p10",
    "topic": "recurrences-from-counting",
    "kind": "t242-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $a_4 = 13{,}289$, where $a_n$ is the number of words of $n$ letters, each letter taken from the $7$ letters of a set $A$ or the $4$ letters of a set $B$ with no letter in both sets; a letter may be used more than once, but no letter of $B$ comes straight after the same letter.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_4 = 13{,}289$, where $a_n$ is the number of words of $n$ letters, each letter taken from the $7$ letters of a set $A$ or the $4$ letters of a set $B$ with no letter in both sets; a letter may be used more than once, but no letter of $B$ comes straight after the same letter.",
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
        "step": "$u_{n+1} = 7a_n$",
        "reason": "Separation of cases: a word of $n + 1$ letters that ends in a letter of $A$ is a word of $n$ letters with one of the $7$ letters of $A$ after it, and multiplication as repeated addition adds the $7$ cases."
      },
      {
        "step": "$w_{n+1} = 4u_n + 3w_n$",
        "reason": "Separation of cases: after a word that ends in a letter of $A$ each of the $4$ letters of $B$ may follow, and after a word that ends in a letter of $B$ only the $3$ others."
      },
      {
        "step": "$u_{n+1} + w_{n+1} = 7a_n + 4u_n + 3w_n$",
        "reason": "Adding two equations: lines 4 and 5 are added."
      },
      {
        "step": "$a_{n+1} = 7a_n + 4u_n + 3w_n$",
        "reason": "Substituting a value: line 3 with $n + 1$ in place of $n$."
      },
      {
        "step": "$a_{n+1} = 7a_n + 3u_n + 3w_n + u_n$",
        "reason": "Collecting like terms, read backwards: $4u_n = 3u_n + u_n$."
      },
      {
        "step": "$a_{n+1} = 7a_n + 3(u_n + w_n) + u_n$",
        "reason": "Common factor: $3$ is taken out of $3u_n + 3w_n$."
      },
      {
        "step": "$a_{n+1} = 7a_n + 3a_n + u_n$",
        "reason": "Substituting a value: $u_n + w_n = a_n$ from line 3."
      },
      {
        "step": "$a_{n+1} = 10a_n + u_n$",
        "reason": "Collecting like terms: the terms in $a_n$ are added."
      },
      {
        "step": "$a_{n+2} = 10a_{n+1} + u_{n+1}$",
        "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 11."
      },
      {
        "step": "$a_{n+2} = 10a_{n+1} + 7a_n$",
        "reason": "Substitution: line 4 gives $u_{n+1} = 7a_n$, which takes the place of $u_{n+1}$ in line 12 and leaves a recurrence for $a_n$ alone."
      },
      {
        "step": "$a_1 = 11$",
        "reason": "Separation of cases: a word of one letter is one of the $7$ letters of $A$ or one of the $4$ letters of $B$."
      },
      {
        "step": "$u_1 = 7$",
        "reason": "Separation of cases: the words of one letter that end in a letter of $A$ are the $7$ letters of $A$."
      },
      {
        "step": "$a_2 = 10 \\cdot 11 + 7 = 117$",
        "reason": "Substituting a value: $n = 1$ in line 11, with $a_1 = 11$ from line 14 and $u_1 = 7$ from line 15."
      },
      {
        "step": "$a_3 = 10 \\cdot 117 + 7 \\cdot 11 = 1247$",
        "reason": "Substituting a value: $n = 1$ in line 13, with $a_2 = 117$ and $a_1 = 11$."
      },
      {
        "step": "$a_4 = 10 \\cdot 1247 + 7 \\cdot 117 = 13{,}289$",
        "reason": "Substituting a value: $n = 2$ in line 13, with $a_3 = 1247$ and $a_2 = 117$."
      }
    ]
  },
  {
    "id": "t242-k1-p11",
    "topic": "recurrences-from-counting",
    "kind": "t242-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_5 = 40{,}131$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $7$ colours, and a long tile covers two neighbouring squares and comes in $14$ colours.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_5 = 40{,}131$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $7$ colours, and a long tile covers two neighbouring squares and comes in $14$ colours.",
        "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the tile on the last square."
      },
      {
        "step": "For $n$ from $3$ up, $7a_{n-1}$ of the coverings of $n$ squares end in a short tile.",
        "reason": "Separation of cases: the $7$ colours of a short last tile are $7$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "For $n$ from $3$ up, $14a_{n-2}$ of the coverings of $n$ squares end in a long tile.",
        "reason": "Separation of cases: the $14$ colours of a long last tile are $14$ cases, each with the $a_{n-2}$ coverings of the first $n - 2$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "So $a_n = 7a_{n-1} + 14a_{n-2}$ for every whole number $n$ from $3$ up.",
        "reason": "Separation of cases: the last square lies under a short tile or under a long tile, never both, so the counts of lines 2 and 3 are added."
      },
      {
        "step": "$a_1 = 7$",
        "reason": "Separation of cases: one square takes one short tile, in one of $7$ colours."
      },
      {
        "step": "$a_2 = 7 \\cdot 7 + 14$",
        "reason": "Separation of cases: two squares take two short tiles, $7$ colours for the first and $7$ for the second, or one long tile in one of $14$ colours."
      },
      {
        "step": "$a_2 = 63$",
        "reason": "Order of operations, from arithmetic: the product first, then the sum."
      },
      {
        "step": "$a_3 = 7 \\cdot 63 + 14 \\cdot 7 = 539$",
        "reason": "Substituting a value: $n = 3$ in line 4, with $a_2 = 63$ and $a_1 = 7$."
      },
      {
        "step": "$a_4 = 7 \\cdot 539 + 14 \\cdot 63 = 4655$",
        "reason": "Substituting a value: $n = 4$ in line 4, with $a_3 = 539$ and $a_2 = 63$."
      },
      {
        "step": "$a_5 = 7 \\cdot 4655 + 14 \\cdot 539 = 40{,}131$",
        "reason": "Substituting a value: $n = 5$ in line 4, with $a_4 = 4655$ and $a_3 = 539$."
      }
    ]
  },
  {
    "id": "t242-k1-p12",
    "topic": "recurrences-from-counting",
    "kind": "t242-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $a_4 = 23{,}841$, where $a_n$ is the number of words of $n$ letters, each letter taken from the $3$ letters of a set $A$ or the $10$ letters of a set $B$ with no letter in both sets; a letter may be used more than once, but no letter of $B$ comes straight after the same letter.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_4 = 23{,}841$, where $a_n$ is the number of words of $n$ letters, each letter taken from the $3$ letters of a set $A$ or the $10$ letters of a set $B$ with no letter in both sets; a letter may be used more than once, but no letter of $B$ comes straight after the same letter.",
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
        "step": "$u_{n+1} = 3a_n$",
        "reason": "Separation of cases: a word of $n + 1$ letters that ends in a letter of $A$ is a word of $n$ letters with one of the $3$ letters of $A$ after it, and multiplication as repeated addition adds the $3$ cases."
      },
      {
        "step": "$w_{n+1} = 10u_n + 9w_n$",
        "reason": "Separation of cases: after a word that ends in a letter of $A$ each of the $10$ letters of $B$ may follow, and after a word that ends in a letter of $B$ only the $9$ others."
      },
      {
        "step": "$u_{n+1} + w_{n+1} = 3a_n + 10u_n + 9w_n$",
        "reason": "Adding two equations: lines 4 and 5 are added."
      },
      {
        "step": "$a_{n+1} = 3a_n + 10u_n + 9w_n$",
        "reason": "Substituting a value: line 3 with $n + 1$ in place of $n$."
      },
      {
        "step": "$a_{n+1} = 3a_n + 9u_n + 9w_n + u_n$",
        "reason": "Collecting like terms, read backwards: $10u_n = 9u_n + u_n$."
      },
      {
        "step": "$a_{n+1} = 3a_n + 9(u_n + w_n) + u_n$",
        "reason": "Common factor: $9$ is taken out of $9u_n + 9w_n$."
      },
      {
        "step": "$a_{n+1} = 3a_n + 9a_n + u_n$",
        "reason": "Substituting a value: $u_n + w_n = a_n$ from line 3."
      },
      {
        "step": "$a_{n+1} = 12a_n + u_n$",
        "reason": "Collecting like terms: the terms in $a_n$ are added."
      },
      {
        "step": "$a_{n+2} = 12a_{n+1} + u_{n+1}$",
        "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 11."
      },
      {
        "step": "$a_{n+2} = 12a_{n+1} + 3a_n$",
        "reason": "Substitution: line 4 gives $u_{n+1} = 3a_n$, which takes the place of $u_{n+1}$ in line 12 and leaves a recurrence for $a_n$ alone."
      },
      {
        "step": "$a_1 = 13$",
        "reason": "Separation of cases: a word of one letter is one of the $3$ letters of $A$ or one of the $10$ letters of $B$."
      },
      {
        "step": "$u_1 = 3$",
        "reason": "Separation of cases: the words of one letter that end in a letter of $A$ are the $3$ letters of $A$."
      },
      {
        "step": "$a_2 = 12 \\cdot 13 + 3 = 159$",
        "reason": "Substituting a value: $n = 1$ in line 11, with $a_1 = 13$ from line 14 and $u_1 = 3$ from line 15."
      },
      {
        "step": "$a_3 = 12 \\cdot 159 + 3 \\cdot 13 = 1947$",
        "reason": "Substituting a value: $n = 1$ in line 13, with $a_2 = 159$ and $a_1 = 13$."
      },
      {
        "step": "$a_4 = 12 \\cdot 1947 + 3 \\cdot 159 = 23{,}841$",
        "reason": "Substituting a value: $n = 2$ in line 13, with $a_3 = 1947$ and $a_2 = 159$."
      }
    ]
  },
  {
    "id": "t242-k1-p13",
    "topic": "recurrences-from-counting",
    "kind": "t242-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_5 = 1944$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $3$ colours, and a long tile covers two neighbouring squares and comes in $9$ colours.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_5 = 1944$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $3$ colours, and a long tile covers two neighbouring squares and comes in $9$ colours.",
        "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the tile on the last square."
      },
      {
        "step": "For $n$ from $3$ up, $3a_{n-1}$ of the coverings of $n$ squares end in a short tile.",
        "reason": "Separation of cases: the $3$ colours of a short last tile are $3$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "For $n$ from $3$ up, $9a_{n-2}$ of the coverings of $n$ squares end in a long tile.",
        "reason": "Separation of cases: the $9$ colours of a long last tile are $9$ cases, each with the $a_{n-2}$ coverings of the first $n - 2$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "So $a_n = 3a_{n-1} + 9a_{n-2}$ for every whole number $n$ from $3$ up.",
        "reason": "Separation of cases: the last square lies under a short tile or under a long tile, never both, so the counts of lines 2 and 3 are added."
      },
      {
        "step": "$a_1 = 3$",
        "reason": "Separation of cases: one square takes one short tile, in one of $3$ colours."
      },
      {
        "step": "$a_2 = 3 \\cdot 3 + 9$",
        "reason": "Separation of cases: two squares take two short tiles, $3$ colours for the first and $3$ for the second, or one long tile in one of $9$ colours."
      },
      {
        "step": "$a_2 = 18$",
        "reason": "Order of operations, from arithmetic: the product first, then the sum."
      },
      {
        "step": "$a_3 = 3 \\cdot 18 + 9 \\cdot 3 = 81$",
        "reason": "Substituting a value: $n = 3$ in line 4, with $a_2 = 18$ and $a_1 = 3$."
      },
      {
        "step": "$a_4 = 3 \\cdot 81 + 9 \\cdot 18 = 405$",
        "reason": "Substituting a value: $n = 4$ in line 4, with $a_3 = 81$ and $a_2 = 18$."
      },
      {
        "step": "$a_5 = 3 \\cdot 405 + 9 \\cdot 81 = 1944$",
        "reason": "Substituting a value: $n = 5$ in line 4, with $a_4 = 405$ and $a_3 = 81$."
      }
    ]
  },
  {
    "id": "t242-k1-p14",
    "topic": "recurrences-from-counting",
    "kind": "t242-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_5 = 19{,}458$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $6$ colours, and a long tile covers two neighbouring squares and comes in $11$ colours.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_5 = 19{,}458$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $6$ colours, and a long tile covers two neighbouring squares and comes in $11$ colours.",
        "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the tile on the last square."
      },
      {
        "step": "For $n$ from $3$ up, $6a_{n-1}$ of the coverings of $n$ squares end in a short tile.",
        "reason": "Separation of cases: the $6$ colours of a short last tile are $6$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "For $n$ from $3$ up, $11a_{n-2}$ of the coverings of $n$ squares end in a long tile.",
        "reason": "Separation of cases: the $11$ colours of a long last tile are $11$ cases, each with the $a_{n-2}$ coverings of the first $n - 2$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "So $a_n = 6a_{n-1} + 11a_{n-2}$ for every whole number $n$ from $3$ up.",
        "reason": "Separation of cases: the last square lies under a short tile or under a long tile, never both, so the counts of lines 2 and 3 are added."
      },
      {
        "step": "$a_1 = 6$",
        "reason": "Separation of cases: one square takes one short tile, in one of $6$ colours."
      },
      {
        "step": "$a_2 = 6 \\cdot 6 + 11$",
        "reason": "Separation of cases: two squares take two short tiles, $6$ colours for the first and $6$ for the second, or one long tile in one of $11$ colours."
      },
      {
        "step": "$a_2 = 47$",
        "reason": "Order of operations, from arithmetic: the product first, then the sum."
      },
      {
        "step": "$a_3 = 6 \\cdot 47 + 11 \\cdot 6 = 348$",
        "reason": "Substituting a value: $n = 3$ in line 4, with $a_2 = 47$ and $a_1 = 6$."
      },
      {
        "step": "$a_4 = 6 \\cdot 348 + 11 \\cdot 47 = 2605$",
        "reason": "Substituting a value: $n = 4$ in line 4, with $a_3 = 348$ and $a_2 = 47$."
      },
      {
        "step": "$a_5 = 6 \\cdot 2605 + 11 \\cdot 348 = 19{,}458$",
        "reason": "Substituting a value: $n = 5$ in line 4, with $a_4 = 2605$ and $a_3 = 348$."
      }
    ]
  },
  {
    "id": "t242-k1-p15",
    "topic": "recurrences-from-counting",
    "kind": "t242-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Prove that $a_5 = 121{,}456$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: the tiles come in every length, a tile of length $k$ covering $k$ neighbouring squares for each whole number $k$ from $1$ up; a tile on one square comes in $9$ colours, and a tile of each greater length comes in $17$ colours.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_5 = 121{,}456$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: the tiles come in every length, a tile of length $k$ covering $k$ neighbouring squares for each whole number $k$ from $1$ up; a tile on one square comes in $9$ colours, and a tile of each greater length comes in $17$ colours.",
        "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the length of the last tile."
      },
      {
        "step": "For $n$ from $2$ up, $9a_{n-1}$ of the coverings of $n$ squares end in a tile on one square.",
        "reason": "Separation of cases: the $9$ colours of that last tile are $9$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "For $n$ from $3$ up and each whole number $k$ from $2$ to $n - 1$, $17a_{n-k}$ of them end in a tile of length $k$.",
        "reason": "Separation of cases: the $17$ colours of that last tile are $17$ cases, each with the $a_{n-k}$ coverings of the first $n - k$ squares."
      },
      {
        "step": "For $n$ from $2$ up, $17$ of them are one tile of length $n$.",
        "reason": "Separation of cases: one tile covers the whole row, in one of $17$ colours."
      },
      {
        "step": "So $a_n = 9a_{n-1} + 17a_{n-2} + \\dots + 17a_1 + 17$ for every whole number $n$ from $3$ up.",
        "reason": "Separation of cases: the last tile has one length from $1$ to $n$ and never two, so the counts of lines 2, 3 and 4 are added."
      },
      {
        "step": "$a_{n+1} = 9a_n + 17a_{n-1} + 17a_{n-2} + \\dots + 17a_1 + 17$",
        "reason": "Substituting a value: $n + 1$ goes in place of $n$ in line 5."
      },
      {
        "step": "$a_{n+1} - a_n = 9a_n + 17a_{n-1} - 9a_{n-1}$",
        "reason": "Elimination: line 5 is taken from line 6; the terms from $17a_{n-2}$ down to $17a_1$ and the number $17$ stand in both lines and cancel."
      },
      {
        "step": "$a_{n+1} - a_n = 9a_n + 8a_{n-1}$",
        "reason": "Collecting like terms: $17 - 9 = 8$."
      },
      {
        "step": "$a_{n+1} = a_n + 9a_n + 8a_{n-1}$",
        "reason": "Adding the same number to both sides: $a_n$ is added to both sides."
      },
      {
        "step": "So $a_{n+1} = 10a_n + 8a_{n-1}$ for every whole number $n$ from $3$ up.",
        "reason": "Collecting like terms: $a_n + 9a_n = 10a_n$."
      },
      {
        "step": "$a_1 = 9$",
        "reason": "Separation of cases: one square takes one tile, in one of $9$ colours."
      },
      {
        "step": "$a_2 = 9 \\cdot 9 + 17$",
        "reason": "Separation of cases: two squares take two tiles on one square each, $9$ colours for the first and $9$ for the second, or one tile of length $2$ in one of $17$ colours."
      },
      {
        "step": "$a_2 = 98$",
        "reason": "Order of operations, from arithmetic: the product first, then the sum."
      },
      {
        "step": "$a_3 = 9 \\cdot 98 + 17 \\cdot 9 + 17 = 1052$",
        "reason": "Substituting a value: $n = 3$ in line 5, with $a_2 = 98$ and $a_1 = 9$."
      },
      {
        "step": "$a_4 = 10 \\cdot 1052 + 8 \\cdot 98 = 11{,}304$",
        "reason": "Substituting a value: $n = 3$ in line 10, with $a_3 = 1052$ and $a_2 = 98$."
      },
      {
        "step": "$a_5 = 10 \\cdot 11{,}304 + 8 \\cdot 1052 = 121{,}456$",
        "reason": "Substituting a value: $n = 4$ in line 10, with $a_4 = 11{,}304$ and $a_3 = 1052$."
      }
    ]
  },
  {
    "id": "t242-k1-p16",
    "topic": "recurrences-from-counting",
    "kind": "t242-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_5 = 5292$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $4$ colours, and a long tile covers two neighbouring squares and comes in $11$ colours.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_5 = 5292$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $4$ colours, and a long tile covers two neighbouring squares and comes in $11$ colours.",
        "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the tile on the last square."
      },
      {
        "step": "For $n$ from $3$ up, $4a_{n-1}$ of the coverings of $n$ squares end in a short tile.",
        "reason": "Separation of cases: the $4$ colours of a short last tile are $4$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "For $n$ from $3$ up, $11a_{n-2}$ of the coverings of $n$ squares end in a long tile.",
        "reason": "Separation of cases: the $11$ colours of a long last tile are $11$ cases, each with the $a_{n-2}$ coverings of the first $n - 2$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "So $a_n = 4a_{n-1} + 11a_{n-2}$ for every whole number $n$ from $3$ up.",
        "reason": "Separation of cases: the last square lies under a short tile or under a long tile, never both, so the counts of lines 2 and 3 are added."
      },
      {
        "step": "$a_1 = 4$",
        "reason": "Separation of cases: one square takes one short tile, in one of $4$ colours."
      },
      {
        "step": "$a_2 = 4 \\cdot 4 + 11$",
        "reason": "Separation of cases: two squares take two short tiles, $4$ colours for the first and $4$ for the second, or one long tile in one of $11$ colours."
      },
      {
        "step": "$a_2 = 27$",
        "reason": "Order of operations, from arithmetic: the product first, then the sum."
      },
      {
        "step": "$a_3 = 4 \\cdot 27 + 11 \\cdot 4 = 152$",
        "reason": "Substituting a value: $n = 3$ in line 4, with $a_2 = 27$ and $a_1 = 4$."
      },
      {
        "step": "$a_4 = 4 \\cdot 152 + 11 \\cdot 27 = 905$",
        "reason": "Substituting a value: $n = 4$ in line 4, with $a_3 = 152$ and $a_2 = 27$."
      },
      {
        "step": "$a_5 = 4 \\cdot 905 + 11 \\cdot 152 = 5292$",
        "reason": "Substituting a value: $n = 5$ in line 4, with $a_4 = 905$ and $a_3 = 152$."
      }
    ]
  },
  {
    "id": "t242-k1-p17",
    "topic": "recurrences-from-counting",
    "kind": "t242-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_5 = 46{,}200$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $7$ colours, and a long tile covers two neighbouring squares and comes in $17$ colours.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_5 = 46{,}200$, where $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $7$ colours, and a long tile covers two neighbouring squares and comes in $17$ colours.",
        "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the tile on the last square."
      },
      {
        "step": "For $n$ from $3$ up, $7a_{n-1}$ of the coverings of $n$ squares end in a short tile.",
        "reason": "Separation of cases: the $7$ colours of a short last tile are $7$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "For $n$ from $3$ up, $17a_{n-2}$ of the coverings of $n$ squares end in a long tile.",
        "reason": "Separation of cases: the $17$ colours of a long last tile are $17$ cases, each with the $a_{n-2}$ coverings of the first $n - 2$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "So $a_n = 7a_{n-1} + 17a_{n-2}$ for every whole number $n$ from $3$ up.",
        "reason": "Separation of cases: the last square lies under a short tile or under a long tile, never both, so the counts of lines 2 and 3 are added."
      },
      {
        "step": "$a_1 = 7$",
        "reason": "Separation of cases: one square takes one short tile, in one of $7$ colours."
      },
      {
        "step": "$a_2 = 7 \\cdot 7 + 17$",
        "reason": "Separation of cases: two squares take two short tiles, $7$ colours for the first and $7$ for the second, or one long tile in one of $17$ colours."
      },
      {
        "step": "$a_2 = 66$",
        "reason": "Order of operations, from arithmetic: the product first, then the sum."
      },
      {
        "step": "$a_3 = 7 \\cdot 66 + 17 \\cdot 7 = 581$",
        "reason": "Substituting a value: $n = 3$ in line 4, with $a_2 = 66$ and $a_1 = 7$."
      },
      {
        "step": "$a_4 = 7 \\cdot 581 + 17 \\cdot 66 = 5189$",
        "reason": "Substituting a value: $n = 4$ in line 4, with $a_3 = 581$ and $a_2 = 66$."
      },
      {
        "step": "$a_5 = 7 \\cdot 5189 + 17 \\cdot 581 = 46{,}200$",
        "reason": "Substituting a value: $n = 5$ in line 4, with $a_4 = 5189$ and $a_3 = 581$."
      }
    ]
  },
  {
    "id": "t242-k2-p01",
    "topic": "recurrences-from-counting",
    "kind": "t242-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $y = \\dfrac{16}{19}$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $13$ colours, and a long tile covers two neighbouring squares and comes in $48$ colours.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $y = \\dfrac{16}{19}$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $13$ colours, and a long tile covers two neighbouring squares and comes in $48$ colours.",
        "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the tile on the last square."
      },
      {
        "step": "For $n$ from $3$ up, $13a_{n-1}$ of the coverings of $n$ squares end in a short tile.",
        "reason": "Separation of cases: the $13$ colours of a short last tile are $13$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "For $n$ from $3$ up, $48a_{n-2}$ of the coverings of $n$ squares end in a long tile.",
        "reason": "Separation of cases: the $48$ colours of a long last tile are $48$ cases, each with the $a_{n-2}$ coverings of the first $n - 2$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "So $a_n = 13a_{n-1} + 48a_{n-2}$ for every whole number $n$ from $3$ up.",
        "reason": "Separation of cases: the last square lies under a short tile or under a long tile, never both, so the counts of lines 2 and 3 are added."
      },
      {
        "step": "$a_1 = 13$",
        "reason": "Separation of cases: one square takes one short tile, in one of $13$ colours."
      },
      {
        "step": "$a_2 = 13 \\cdot 13 + 48$",
        "reason": "Separation of cases: two squares take two short tiles, $13$ colours for the first and $13$ for the second, or one long tile in one of $48$ colours."
      },
      {
        "step": "$a_2 = 217$",
        "reason": "Order of operations, from arithmetic: the product first, then the sum."
      },
      {
        "step": "$x^2 = 13x + 48$",
        "reason": "Characteristic equation: line 4 is a linear recurrence of order 2, and $a_n$, $a_{n-1}$ and $a_{n-2}$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$x^2 - 13x - 48 = 0$",
        "reason": "Adding the same number to both sides: $13x + 48$ is taken from both sides."
      },
      {
        "step": "$(x - 16)(x + 3) = 0$",
        "reason": "Factoring a quadratic: $-16$ and $3$ have sum $-13$ and product $-48$."
      },
      {
        "step": "The roots are $r_1 = 16$ and $r_2 = -3$.",
        "reason": "Zero-product property: one of the two brackets is $0$; the positive root is $r_1$ and the negative root is $r_2$."
      },
      {
        "step": "So $a_n = y \\cdot 16^n + z \\cdot (-3)^n$ for every whole number $n$ from $1$ up.",
        "reason": "General solution (distinct roots): the roots $16$ and $-3$ are different, and the sequence counted from $a_1$ satisfies the recurrence of line 4 at every step; counting from $1$ in place of $0$ changes only the numbers $y$ and $z$."
      },
      {
        "step": "$16y - 3z = 13$",
        "reason": "Substituting a value: $n = 1$ in line 12, with $a_1 = 13$."
      },
      {
        "step": "$256y + 9z = 217$",
        "reason": "Substituting a value: $n = 2$ in line 12, with $(-3)^2 = 9$ and $a_2 = 217$."
      },
      {
        "step": "$48y - 9z = 39$",
        "reason": "Multiplying both sides by the same number: line 13 is multiplied by $3$."
      },
      {
        "step": "$304y = 256$",
        "reason": "Adding two equations: lines 14 and 15 are added."
      },
      {
        "step": "$y = \\dfrac{256}{304}$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $304$."
      },
      {
        "step": "$y = \\dfrac{16}{19}$",
        "reason": "Cancelling a common factor: $16$ divides $256$ and $304$."
      }
    ]
  },
  {
    "id": "t242-k2-p02",
    "topic": "recurrences-from-counting",
    "kind": "t242-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $y = \\dfrac{16}{21}$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $11$ colours, and a long tile covers two neighbouring squares and comes in $80$ colours.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $y = \\dfrac{16}{21}$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $11$ colours, and a long tile covers two neighbouring squares and comes in $80$ colours.",
        "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the tile on the last square."
      },
      {
        "step": "For $n$ from $3$ up, $11a_{n-1}$ of the coverings of $n$ squares end in a short tile.",
        "reason": "Separation of cases: the $11$ colours of a short last tile are $11$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "For $n$ from $3$ up, $80a_{n-2}$ of the coverings of $n$ squares end in a long tile.",
        "reason": "Separation of cases: the $80$ colours of a long last tile are $80$ cases, each with the $a_{n-2}$ coverings of the first $n - 2$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "So $a_n = 11a_{n-1} + 80a_{n-2}$ for every whole number $n$ from $3$ up.",
        "reason": "Separation of cases: the last square lies under a short tile or under a long tile, never both, so the counts of lines 2 and 3 are added."
      },
      {
        "step": "$a_1 = 11$",
        "reason": "Separation of cases: one square takes one short tile, in one of $11$ colours."
      },
      {
        "step": "$a_2 = 11 \\cdot 11 + 80$",
        "reason": "Separation of cases: two squares take two short tiles, $11$ colours for the first and $11$ for the second, or one long tile in one of $80$ colours."
      },
      {
        "step": "$a_2 = 201$",
        "reason": "Order of operations, from arithmetic: the product first, then the sum."
      },
      {
        "step": "$x^2 = 11x + 80$",
        "reason": "Characteristic equation: line 4 is a linear recurrence of order 2, and $a_n$, $a_{n-1}$ and $a_{n-2}$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$x^2 - 11x - 80 = 0$",
        "reason": "Adding the same number to both sides: $11x + 80$ is taken from both sides."
      },
      {
        "step": "$(x - 16)(x + 5) = 0$",
        "reason": "Factoring a quadratic: $-16$ and $5$ have sum $-11$ and product $-80$."
      },
      {
        "step": "The roots are $r_1 = 16$ and $r_2 = -5$.",
        "reason": "Zero-product property: one of the two brackets is $0$; the positive root is $r_1$ and the negative root is $r_2$."
      },
      {
        "step": "So $a_n = y \\cdot 16^n + z \\cdot (-5)^n$ for every whole number $n$ from $1$ up.",
        "reason": "General solution (distinct roots): the roots $16$ and $-5$ are different, and the sequence counted from $a_1$ satisfies the recurrence of line 4 at every step; counting from $1$ in place of $0$ changes only the numbers $y$ and $z$."
      },
      {
        "step": "$16y - 5z = 11$",
        "reason": "Substituting a value: $n = 1$ in line 12, with $a_1 = 11$."
      },
      {
        "step": "$256y + 25z = 201$",
        "reason": "Substituting a value: $n = 2$ in line 12, with $(-5)^2 = 25$ and $a_2 = 201$."
      },
      {
        "step": "$80y - 25z = 55$",
        "reason": "Multiplying both sides by the same number: line 13 is multiplied by $5$."
      },
      {
        "step": "$336y = 256$",
        "reason": "Adding two equations: lines 14 and 15 are added."
      },
      {
        "step": "$y = \\dfrac{256}{336}$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $336$."
      },
      {
        "step": "$y = \\dfrac{16}{21}$",
        "reason": "Cancelling a common factor: $16$ divides $256$ and $336$."
      }
    ]
  },
  {
    "id": "t242-k2-p03",
    "topic": "recurrences-from-counting",
    "kind": "t242-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $y = \\dfrac{11}{14}$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $8$ colours, and a long tile covers two neighbouring squares and comes in $33$ colours.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $y = \\dfrac{11}{14}$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $8$ colours, and a long tile covers two neighbouring squares and comes in $33$ colours.",
        "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the tile on the last square."
      },
      {
        "step": "For $n$ from $3$ up, $8a_{n-1}$ of the coverings of $n$ squares end in a short tile.",
        "reason": "Separation of cases: the $8$ colours of a short last tile are $8$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "For $n$ from $3$ up, $33a_{n-2}$ of the coverings of $n$ squares end in a long tile.",
        "reason": "Separation of cases: the $33$ colours of a long last tile are $33$ cases, each with the $a_{n-2}$ coverings of the first $n - 2$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "So $a_n = 8a_{n-1} + 33a_{n-2}$ for every whole number $n$ from $3$ up.",
        "reason": "Separation of cases: the last square lies under a short tile or under a long tile, never both, so the counts of lines 2 and 3 are added."
      },
      {
        "step": "$a_1 = 8$",
        "reason": "Separation of cases: one square takes one short tile, in one of $8$ colours."
      },
      {
        "step": "$a_2 = 8 \\cdot 8 + 33$",
        "reason": "Separation of cases: two squares take two short tiles, $8$ colours for the first and $8$ for the second, or one long tile in one of $33$ colours."
      },
      {
        "step": "$a_2 = 97$",
        "reason": "Order of operations, from arithmetic: the product first, then the sum."
      },
      {
        "step": "$x^2 = 8x + 33$",
        "reason": "Characteristic equation: line 4 is a linear recurrence of order 2, and $a_n$, $a_{n-1}$ and $a_{n-2}$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$x^2 - 8x - 33 = 0$",
        "reason": "Adding the same number to both sides: $8x + 33$ is taken from both sides."
      },
      {
        "step": "$(x - 11)(x + 3) = 0$",
        "reason": "Factoring a quadratic: $-11$ and $3$ have sum $-8$ and product $-33$."
      },
      {
        "step": "The roots are $r_1 = 11$ and $r_2 = -3$.",
        "reason": "Zero-product property: one of the two brackets is $0$; the positive root is $r_1$ and the negative root is $r_2$."
      },
      {
        "step": "So $a_n = y \\cdot 11^n + z \\cdot (-3)^n$ for every whole number $n$ from $1$ up.",
        "reason": "General solution (distinct roots): the roots $11$ and $-3$ are different, and the sequence counted from $a_1$ satisfies the recurrence of line 4 at every step; counting from $1$ in place of $0$ changes only the numbers $y$ and $z$."
      },
      {
        "step": "$11y - 3z = 8$",
        "reason": "Substituting a value: $n = 1$ in line 12, with $a_1 = 8$."
      },
      {
        "step": "$121y + 9z = 97$",
        "reason": "Substituting a value: $n = 2$ in line 12, with $(-3)^2 = 9$ and $a_2 = 97$."
      },
      {
        "step": "$33y - 9z = 24$",
        "reason": "Multiplying both sides by the same number: line 13 is multiplied by $3$."
      },
      {
        "step": "$154y = 121$",
        "reason": "Adding two equations: lines 14 and 15 are added."
      },
      {
        "step": "$y = \\dfrac{121}{154}$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $154$."
      },
      {
        "step": "$y = \\dfrac{11}{14}$",
        "reason": "Cancelling a common factor: $11$ divides $121$ and $154$."
      }
    ]
  },
  {
    "id": "t242-k2-p04",
    "topic": "recurrences-from-counting",
    "kind": "t242-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $y = \\dfrac{14}{19}$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $9$ colours, and a long tile covers two neighbouring squares and comes in $70$ colours.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $y = \\dfrac{14}{19}$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $9$ colours, and a long tile covers two neighbouring squares and comes in $70$ colours.",
        "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the tile on the last square."
      },
      {
        "step": "For $n$ from $3$ up, $9a_{n-1}$ of the coverings of $n$ squares end in a short tile.",
        "reason": "Separation of cases: the $9$ colours of a short last tile are $9$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "For $n$ from $3$ up, $70a_{n-2}$ of the coverings of $n$ squares end in a long tile.",
        "reason": "Separation of cases: the $70$ colours of a long last tile are $70$ cases, each with the $a_{n-2}$ coverings of the first $n - 2$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "So $a_n = 9a_{n-1} + 70a_{n-2}$ for every whole number $n$ from $3$ up.",
        "reason": "Separation of cases: the last square lies under a short tile or under a long tile, never both, so the counts of lines 2 and 3 are added."
      },
      {
        "step": "$a_1 = 9$",
        "reason": "Separation of cases: one square takes one short tile, in one of $9$ colours."
      },
      {
        "step": "$a_2 = 9 \\cdot 9 + 70$",
        "reason": "Separation of cases: two squares take two short tiles, $9$ colours for the first and $9$ for the second, or one long tile in one of $70$ colours."
      },
      {
        "step": "$a_2 = 151$",
        "reason": "Order of operations, from arithmetic: the product first, then the sum."
      },
      {
        "step": "$x^2 = 9x + 70$",
        "reason": "Characteristic equation: line 4 is a linear recurrence of order 2, and $a_n$, $a_{n-1}$ and $a_{n-2}$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$x^2 - 9x - 70 = 0$",
        "reason": "Adding the same number to both sides: $9x + 70$ is taken from both sides."
      },
      {
        "step": "$(x - 14)(x + 5) = 0$",
        "reason": "Factoring a quadratic: $-14$ and $5$ have sum $-9$ and product $-70$."
      },
      {
        "step": "The roots are $r_1 = 14$ and $r_2 = -5$.",
        "reason": "Zero-product property: one of the two brackets is $0$; the positive root is $r_1$ and the negative root is $r_2$."
      },
      {
        "step": "So $a_n = y \\cdot 14^n + z \\cdot (-5)^n$ for every whole number $n$ from $1$ up.",
        "reason": "General solution (distinct roots): the roots $14$ and $-5$ are different, and the sequence counted from $a_1$ satisfies the recurrence of line 4 at every step; counting from $1$ in place of $0$ changes only the numbers $y$ and $z$."
      },
      {
        "step": "$14y - 5z = 9$",
        "reason": "Substituting a value: $n = 1$ in line 12, with $a_1 = 9$."
      },
      {
        "step": "$196y + 25z = 151$",
        "reason": "Substituting a value: $n = 2$ in line 12, with $(-5)^2 = 25$ and $a_2 = 151$."
      },
      {
        "step": "$70y - 25z = 45$",
        "reason": "Multiplying both sides by the same number: line 13 is multiplied by $5$."
      },
      {
        "step": "$266y = 196$",
        "reason": "Adding two equations: lines 14 and 15 are added."
      },
      {
        "step": "$y = \\dfrac{196}{266}$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $266$."
      },
      {
        "step": "$y = \\dfrac{14}{19}$",
        "reason": "Cancelling a common factor: $14$ divides $196$ and $266$."
      }
    ]
  },
  {
    "id": "t242-k2-p05",
    "topic": "recurrences-from-counting",
    "kind": "t242-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $y = \\dfrac{10}{13}$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $7$ colours, and a long tile covers two neighbouring squares and comes in $30$ colours.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $y = \\dfrac{10}{13}$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $7$ colours, and a long tile covers two neighbouring squares and comes in $30$ colours.",
        "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the tile on the last square."
      },
      {
        "step": "For $n$ from $3$ up, $7a_{n-1}$ of the coverings of $n$ squares end in a short tile.",
        "reason": "Separation of cases: the $7$ colours of a short last tile are $7$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "For $n$ from $3$ up, $30a_{n-2}$ of the coverings of $n$ squares end in a long tile.",
        "reason": "Separation of cases: the $30$ colours of a long last tile are $30$ cases, each with the $a_{n-2}$ coverings of the first $n - 2$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "So $a_n = 7a_{n-1} + 30a_{n-2}$ for every whole number $n$ from $3$ up.",
        "reason": "Separation of cases: the last square lies under a short tile or under a long tile, never both, so the counts of lines 2 and 3 are added."
      },
      {
        "step": "$a_1 = 7$",
        "reason": "Separation of cases: one square takes one short tile, in one of $7$ colours."
      },
      {
        "step": "$a_2 = 7 \\cdot 7 + 30$",
        "reason": "Separation of cases: two squares take two short tiles, $7$ colours for the first and $7$ for the second, or one long tile in one of $30$ colours."
      },
      {
        "step": "$a_2 = 79$",
        "reason": "Order of operations, from arithmetic: the product first, then the sum."
      },
      {
        "step": "$x^2 = 7x + 30$",
        "reason": "Characteristic equation: line 4 is a linear recurrence of order 2, and $a_n$, $a_{n-1}$ and $a_{n-2}$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$x^2 - 7x - 30 = 0$",
        "reason": "Adding the same number to both sides: $7x + 30$ is taken from both sides."
      },
      {
        "step": "$(x - 10)(x + 3) = 0$",
        "reason": "Factoring a quadratic: $-10$ and $3$ have sum $-7$ and product $-30$."
      },
      {
        "step": "The roots are $r_1 = 10$ and $r_2 = -3$.",
        "reason": "Zero-product property: one of the two brackets is $0$; the positive root is $r_1$ and the negative root is $r_2$."
      },
      {
        "step": "So $a_n = y \\cdot 10^n + z \\cdot (-3)^n$ for every whole number $n$ from $1$ up.",
        "reason": "General solution (distinct roots): the roots $10$ and $-3$ are different, and the sequence counted from $a_1$ satisfies the recurrence of line 4 at every step; counting from $1$ in place of $0$ changes only the numbers $y$ and $z$."
      },
      {
        "step": "$10y - 3z = 7$",
        "reason": "Substituting a value: $n = 1$ in line 12, with $a_1 = 7$."
      },
      {
        "step": "$100y + 9z = 79$",
        "reason": "Substituting a value: $n = 2$ in line 12, with $(-3)^2 = 9$ and $a_2 = 79$."
      },
      {
        "step": "$30y - 9z = 21$",
        "reason": "Multiplying both sides by the same number: line 13 is multiplied by $3$."
      },
      {
        "step": "$130y = 100$",
        "reason": "Adding two equations: lines 14 and 15 are added."
      },
      {
        "step": "$y = \\dfrac{100}{130}$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $130$."
      },
      {
        "step": "$y = \\dfrac{10}{13}$",
        "reason": "Cancelling a common factor: $10$ divides $100$ and $130$."
      }
    ]
  },
  {
    "id": "t242-k2-p06",
    "topic": "recurrences-from-counting",
    "kind": "t242-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $y = \\dfrac{14}{17}$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $11$ colours, and a long tile covers two neighbouring squares and comes in $42$ colours.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $y = \\dfrac{14}{17}$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $11$ colours, and a long tile covers two neighbouring squares and comes in $42$ colours.",
        "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the tile on the last square."
      },
      {
        "step": "For $n$ from $3$ up, $11a_{n-1}$ of the coverings of $n$ squares end in a short tile.",
        "reason": "Separation of cases: the $11$ colours of a short last tile are $11$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "For $n$ from $3$ up, $42a_{n-2}$ of the coverings of $n$ squares end in a long tile.",
        "reason": "Separation of cases: the $42$ colours of a long last tile are $42$ cases, each with the $a_{n-2}$ coverings of the first $n - 2$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "So $a_n = 11a_{n-1} + 42a_{n-2}$ for every whole number $n$ from $3$ up.",
        "reason": "Separation of cases: the last square lies under a short tile or under a long tile, never both, so the counts of lines 2 and 3 are added."
      },
      {
        "step": "$a_1 = 11$",
        "reason": "Separation of cases: one square takes one short tile, in one of $11$ colours."
      },
      {
        "step": "$a_2 = 11 \\cdot 11 + 42$",
        "reason": "Separation of cases: two squares take two short tiles, $11$ colours for the first and $11$ for the second, or one long tile in one of $42$ colours."
      },
      {
        "step": "$a_2 = 163$",
        "reason": "Order of operations, from arithmetic: the product first, then the sum."
      },
      {
        "step": "$x^2 = 11x + 42$",
        "reason": "Characteristic equation: line 4 is a linear recurrence of order 2, and $a_n$, $a_{n-1}$ and $a_{n-2}$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$x^2 - 11x - 42 = 0$",
        "reason": "Adding the same number to both sides: $11x + 42$ is taken from both sides."
      },
      {
        "step": "$(x - 14)(x + 3) = 0$",
        "reason": "Factoring a quadratic: $-14$ and $3$ have sum $-11$ and product $-42$."
      },
      {
        "step": "The roots are $r_1 = 14$ and $r_2 = -3$.",
        "reason": "Zero-product property: one of the two brackets is $0$; the positive root is $r_1$ and the negative root is $r_2$."
      },
      {
        "step": "So $a_n = y \\cdot 14^n + z \\cdot (-3)^n$ for every whole number $n$ from $1$ up.",
        "reason": "General solution (distinct roots): the roots $14$ and $-3$ are different, and the sequence counted from $a_1$ satisfies the recurrence of line 4 at every step; counting from $1$ in place of $0$ changes only the numbers $y$ and $z$."
      },
      {
        "step": "$14y - 3z = 11$",
        "reason": "Substituting a value: $n = 1$ in line 12, with $a_1 = 11$."
      },
      {
        "step": "$196y + 9z = 163$",
        "reason": "Substituting a value: $n = 2$ in line 12, with $(-3)^2 = 9$ and $a_2 = 163$."
      },
      {
        "step": "$42y - 9z = 33$",
        "reason": "Multiplying both sides by the same number: line 13 is multiplied by $3$."
      },
      {
        "step": "$238y = 196$",
        "reason": "Adding two equations: lines 14 and 15 are added."
      },
      {
        "step": "$y = \\dfrac{196}{238}$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $238$."
      },
      {
        "step": "$y = \\dfrac{14}{17}$",
        "reason": "Cancelling a common factor: $14$ divides $196$ and $238$."
      }
    ]
  },
  {
    "id": "t242-k2-p07",
    "topic": "recurrences-from-counting",
    "kind": "t242-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $y = \\dfrac{13}{16}$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $10$ colours, and a long tile covers two neighbouring squares and comes in $39$ colours.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $y = \\dfrac{13}{16}$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $10$ colours, and a long tile covers two neighbouring squares and comes in $39$ colours.",
        "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the tile on the last square."
      },
      {
        "step": "For $n$ from $3$ up, $10a_{n-1}$ of the coverings of $n$ squares end in a short tile.",
        "reason": "Separation of cases: the $10$ colours of a short last tile are $10$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "For $n$ from $3$ up, $39a_{n-2}$ of the coverings of $n$ squares end in a long tile.",
        "reason": "Separation of cases: the $39$ colours of a long last tile are $39$ cases, each with the $a_{n-2}$ coverings of the first $n - 2$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "So $a_n = 10a_{n-1} + 39a_{n-2}$ for every whole number $n$ from $3$ up.",
        "reason": "Separation of cases: the last square lies under a short tile or under a long tile, never both, so the counts of lines 2 and 3 are added."
      },
      {
        "step": "$a_1 = 10$",
        "reason": "Separation of cases: one square takes one short tile, in one of $10$ colours."
      },
      {
        "step": "$a_2 = 10 \\cdot 10 + 39$",
        "reason": "Separation of cases: two squares take two short tiles, $10$ colours for the first and $10$ for the second, or one long tile in one of $39$ colours."
      },
      {
        "step": "$a_2 = 139$",
        "reason": "Order of operations, from arithmetic: the product first, then the sum."
      },
      {
        "step": "$x^2 = 10x + 39$",
        "reason": "Characteristic equation: line 4 is a linear recurrence of order 2, and $a_n$, $a_{n-1}$ and $a_{n-2}$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$x^2 - 10x - 39 = 0$",
        "reason": "Adding the same number to both sides: $10x + 39$ is taken from both sides."
      },
      {
        "step": "$(x - 13)(x + 3) = 0$",
        "reason": "Factoring a quadratic: $-13$ and $3$ have sum $-10$ and product $-39$."
      },
      {
        "step": "The roots are $r_1 = 13$ and $r_2 = -3$.",
        "reason": "Zero-product property: one of the two brackets is $0$; the positive root is $r_1$ and the negative root is $r_2$."
      },
      {
        "step": "So $a_n = y \\cdot 13^n + z \\cdot (-3)^n$ for every whole number $n$ from $1$ up.",
        "reason": "General solution (distinct roots): the roots $13$ and $-3$ are different, and the sequence counted from $a_1$ satisfies the recurrence of line 4 at every step; counting from $1$ in place of $0$ changes only the numbers $y$ and $z$."
      },
      {
        "step": "$13y - 3z = 10$",
        "reason": "Substituting a value: $n = 1$ in line 12, with $a_1 = 10$."
      },
      {
        "step": "$169y + 9z = 139$",
        "reason": "Substituting a value: $n = 2$ in line 12, with $(-3)^2 = 9$ and $a_2 = 139$."
      },
      {
        "step": "$39y - 9z = 30$",
        "reason": "Multiplying both sides by the same number: line 13 is multiplied by $3$."
      },
      {
        "step": "$208y = 169$",
        "reason": "Adding two equations: lines 14 and 15 are added."
      },
      {
        "step": "$y = \\dfrac{169}{208}$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $208$."
      },
      {
        "step": "$y = \\dfrac{13}{16}$",
        "reason": "Cancelling a common factor: $13$ divides $169$ and $208$."
      }
    ]
  },
  {
    "id": "t242-k2-p08",
    "topic": "recurrences-from-counting",
    "kind": "t242-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $y = \\dfrac{7}{11}$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $3$ colours, and a long tile covers two neighbouring squares and comes in $28$ colours.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $y = \\dfrac{7}{11}$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $3$ colours, and a long tile covers two neighbouring squares and comes in $28$ colours.",
        "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the tile on the last square."
      },
      {
        "step": "For $n$ from $3$ up, $3a_{n-1}$ of the coverings of $n$ squares end in a short tile.",
        "reason": "Separation of cases: the $3$ colours of a short last tile are $3$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "For $n$ from $3$ up, $28a_{n-2}$ of the coverings of $n$ squares end in a long tile.",
        "reason": "Separation of cases: the $28$ colours of a long last tile are $28$ cases, each with the $a_{n-2}$ coverings of the first $n - 2$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "So $a_n = 3a_{n-1} + 28a_{n-2}$ for every whole number $n$ from $3$ up.",
        "reason": "Separation of cases: the last square lies under a short tile or under a long tile, never both, so the counts of lines 2 and 3 are added."
      },
      {
        "step": "$a_1 = 3$",
        "reason": "Separation of cases: one square takes one short tile, in one of $3$ colours."
      },
      {
        "step": "$a_2 = 3 \\cdot 3 + 28$",
        "reason": "Separation of cases: two squares take two short tiles, $3$ colours for the first and $3$ for the second, or one long tile in one of $28$ colours."
      },
      {
        "step": "$a_2 = 37$",
        "reason": "Order of operations, from arithmetic: the product first, then the sum."
      },
      {
        "step": "$x^2 = 3x + 28$",
        "reason": "Characteristic equation: line 4 is a linear recurrence of order 2, and $a_n$, $a_{n-1}$ and $a_{n-2}$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$x^2 - 3x - 28 = 0$",
        "reason": "Adding the same number to both sides: $3x + 28$ is taken from both sides."
      },
      {
        "step": "$(x - 7)(x + 4) = 0$",
        "reason": "Factoring a quadratic: $-7$ and $4$ have sum $-3$ and product $-28$."
      },
      {
        "step": "The roots are $r_1 = 7$ and $r_2 = -4$.",
        "reason": "Zero-product property: one of the two brackets is $0$; the positive root is $r_1$ and the negative root is $r_2$."
      },
      {
        "step": "So $a_n = y \\cdot 7^n + z \\cdot (-4)^n$ for every whole number $n$ from $1$ up.",
        "reason": "General solution (distinct roots): the roots $7$ and $-4$ are different, and the sequence counted from $a_1$ satisfies the recurrence of line 4 at every step; counting from $1$ in place of $0$ changes only the numbers $y$ and $z$."
      },
      {
        "step": "$7y - 4z = 3$",
        "reason": "Substituting a value: $n = 1$ in line 12, with $a_1 = 3$."
      },
      {
        "step": "$49y + 16z = 37$",
        "reason": "Substituting a value: $n = 2$ in line 12, with $(-4)^2 = 16$ and $a_2 = 37$."
      },
      {
        "step": "$28y - 16z = 12$",
        "reason": "Multiplying both sides by the same number: line 13 is multiplied by $4$."
      },
      {
        "step": "$77y = 49$",
        "reason": "Adding two equations: lines 14 and 15 are added."
      },
      {
        "step": "$y = \\dfrac{49}{77}$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $77$."
      },
      {
        "step": "$y = \\dfrac{7}{11}$",
        "reason": "Cancelling a common factor: $7$ divides $49$ and $77$."
      }
    ]
  },
  {
    "id": "t242-k2-p09",
    "topic": "recurrences-from-counting",
    "kind": "t242-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $y = \\dfrac{11}{16}$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $6$ colours, and a long tile covers two neighbouring squares and comes in $55$ colours.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $y = \\dfrac{11}{16}$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $6$ colours, and a long tile covers two neighbouring squares and comes in $55$ colours.",
        "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the tile on the last square."
      },
      {
        "step": "For $n$ from $3$ up, $6a_{n-1}$ of the coverings of $n$ squares end in a short tile.",
        "reason": "Separation of cases: the $6$ colours of a short last tile are $6$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "For $n$ from $3$ up, $55a_{n-2}$ of the coverings of $n$ squares end in a long tile.",
        "reason": "Separation of cases: the $55$ colours of a long last tile are $55$ cases, each with the $a_{n-2}$ coverings of the first $n - 2$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "So $a_n = 6a_{n-1} + 55a_{n-2}$ for every whole number $n$ from $3$ up.",
        "reason": "Separation of cases: the last square lies under a short tile or under a long tile, never both, so the counts of lines 2 and 3 are added."
      },
      {
        "step": "$a_1 = 6$",
        "reason": "Separation of cases: one square takes one short tile, in one of $6$ colours."
      },
      {
        "step": "$a_2 = 6 \\cdot 6 + 55$",
        "reason": "Separation of cases: two squares take two short tiles, $6$ colours for the first and $6$ for the second, or one long tile in one of $55$ colours."
      },
      {
        "step": "$a_2 = 91$",
        "reason": "Order of operations, from arithmetic: the product first, then the sum."
      },
      {
        "step": "$x^2 = 6x + 55$",
        "reason": "Characteristic equation: line 4 is a linear recurrence of order 2, and $a_n$, $a_{n-1}$ and $a_{n-2}$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$x^2 - 6x - 55 = 0$",
        "reason": "Adding the same number to both sides: $6x + 55$ is taken from both sides."
      },
      {
        "step": "$(x - 11)(x + 5) = 0$",
        "reason": "Factoring a quadratic: $-11$ and $5$ have sum $-6$ and product $-55$."
      },
      {
        "step": "The roots are $r_1 = 11$ and $r_2 = -5$.",
        "reason": "Zero-product property: one of the two brackets is $0$; the positive root is $r_1$ and the negative root is $r_2$."
      },
      {
        "step": "So $a_n = y \\cdot 11^n + z \\cdot (-5)^n$ for every whole number $n$ from $1$ up.",
        "reason": "General solution (distinct roots): the roots $11$ and $-5$ are different, and the sequence counted from $a_1$ satisfies the recurrence of line 4 at every step; counting from $1$ in place of $0$ changes only the numbers $y$ and $z$."
      },
      {
        "step": "$11y - 5z = 6$",
        "reason": "Substituting a value: $n = 1$ in line 12, with $a_1 = 6$."
      },
      {
        "step": "$121y + 25z = 91$",
        "reason": "Substituting a value: $n = 2$ in line 12, with $(-5)^2 = 25$ and $a_2 = 91$."
      },
      {
        "step": "$55y - 25z = 30$",
        "reason": "Multiplying both sides by the same number: line 13 is multiplied by $5$."
      },
      {
        "step": "$176y = 121$",
        "reason": "Adding two equations: lines 14 and 15 are added."
      },
      {
        "step": "$y = \\dfrac{121}{176}$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $176$."
      },
      {
        "step": "$y = \\dfrac{11}{16}$",
        "reason": "Cancelling a common factor: $11$ divides $121$ and $176$."
      }
    ]
  },
  {
    "id": "t242-k2-p10",
    "topic": "recurrences-from-counting",
    "kind": "t242-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $y = \\dfrac{5}{8}$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $2$ colours, and a long tile covers two neighbouring squares and comes in $15$ colours.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $y = \\dfrac{5}{8}$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $2$ colours, and a long tile covers two neighbouring squares and comes in $15$ colours.",
        "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the tile on the last square."
      },
      {
        "step": "For $n$ from $3$ up, $2a_{n-1}$ of the coverings of $n$ squares end in a short tile.",
        "reason": "Separation of cases: the $2$ colours of a short last tile are $2$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "For $n$ from $3$ up, $15a_{n-2}$ of the coverings of $n$ squares end in a long tile.",
        "reason": "Separation of cases: the $15$ colours of a long last tile are $15$ cases, each with the $a_{n-2}$ coverings of the first $n - 2$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "So $a_n = 2a_{n-1} + 15a_{n-2}$ for every whole number $n$ from $3$ up.",
        "reason": "Separation of cases: the last square lies under a short tile or under a long tile, never both, so the counts of lines 2 and 3 are added."
      },
      {
        "step": "$a_1 = 2$",
        "reason": "Separation of cases: one square takes one short tile, in one of $2$ colours."
      },
      {
        "step": "$a_2 = 2 \\cdot 2 + 15$",
        "reason": "Separation of cases: two squares take two short tiles, $2$ colours for the first and $2$ for the second, or one long tile in one of $15$ colours."
      },
      {
        "step": "$a_2 = 19$",
        "reason": "Order of operations, from arithmetic: the product first, then the sum."
      },
      {
        "step": "$x^2 = 2x + 15$",
        "reason": "Characteristic equation: line 4 is a linear recurrence of order 2, and $a_n$, $a_{n-1}$ and $a_{n-2}$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$x^2 - 2x - 15 = 0$",
        "reason": "Adding the same number to both sides: $2x + 15$ is taken from both sides."
      },
      {
        "step": "$(x - 5)(x + 3) = 0$",
        "reason": "Factoring a quadratic: $-5$ and $3$ have sum $-2$ and product $-15$."
      },
      {
        "step": "The roots are $r_1 = 5$ and $r_2 = -3$.",
        "reason": "Zero-product property: one of the two brackets is $0$; the positive root is $r_1$ and the negative root is $r_2$."
      },
      {
        "step": "So $a_n = y \\cdot 5^n + z \\cdot (-3)^n$ for every whole number $n$ from $1$ up.",
        "reason": "General solution (distinct roots): the roots $5$ and $-3$ are different, and the sequence counted from $a_1$ satisfies the recurrence of line 4 at every step; counting from $1$ in place of $0$ changes only the numbers $y$ and $z$."
      },
      {
        "step": "$5y - 3z = 2$",
        "reason": "Substituting a value: $n = 1$ in line 12, with $a_1 = 2$."
      },
      {
        "step": "$25y + 9z = 19$",
        "reason": "Substituting a value: $n = 2$ in line 12, with $(-3)^2 = 9$ and $a_2 = 19$."
      },
      {
        "step": "$15y - 9z = 6$",
        "reason": "Multiplying both sides by the same number: line 13 is multiplied by $3$."
      },
      {
        "step": "$40y = 25$",
        "reason": "Adding two equations: lines 14 and 15 are added."
      },
      {
        "step": "$y = \\dfrac{25}{40}$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $40$."
      },
      {
        "step": "$y = \\dfrac{5}{8}$",
        "reason": "Cancelling a common factor: $5$ divides $25$ and $40$."
      }
    ]
  },
  {
    "id": "t242-k2-p11",
    "topic": "recurrences-from-counting",
    "kind": "t242-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $y = \\dfrac{11}{15}$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $7$ colours, and a long tile covers two neighbouring squares and comes in $44$ colours.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $y = \\dfrac{11}{15}$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $7$ colours, and a long tile covers two neighbouring squares and comes in $44$ colours.",
        "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the tile on the last square."
      },
      {
        "step": "For $n$ from $3$ up, $7a_{n-1}$ of the coverings of $n$ squares end in a short tile.",
        "reason": "Separation of cases: the $7$ colours of a short last tile are $7$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "For $n$ from $3$ up, $44a_{n-2}$ of the coverings of $n$ squares end in a long tile.",
        "reason": "Separation of cases: the $44$ colours of a long last tile are $44$ cases, each with the $a_{n-2}$ coverings of the first $n - 2$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "So $a_n = 7a_{n-1} + 44a_{n-2}$ for every whole number $n$ from $3$ up.",
        "reason": "Separation of cases: the last square lies under a short tile or under a long tile, never both, so the counts of lines 2 and 3 are added."
      },
      {
        "step": "$a_1 = 7$",
        "reason": "Separation of cases: one square takes one short tile, in one of $7$ colours."
      },
      {
        "step": "$a_2 = 7 \\cdot 7 + 44$",
        "reason": "Separation of cases: two squares take two short tiles, $7$ colours for the first and $7$ for the second, or one long tile in one of $44$ colours."
      },
      {
        "step": "$a_2 = 93$",
        "reason": "Order of operations, from arithmetic: the product first, then the sum."
      },
      {
        "step": "$x^2 = 7x + 44$",
        "reason": "Characteristic equation: line 4 is a linear recurrence of order 2, and $a_n$, $a_{n-1}$ and $a_{n-2}$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$x^2 - 7x - 44 = 0$",
        "reason": "Adding the same number to both sides: $7x + 44$ is taken from both sides."
      },
      {
        "step": "$(x - 11)(x + 4) = 0$",
        "reason": "Factoring a quadratic: $-11$ and $4$ have sum $-7$ and product $-44$."
      },
      {
        "step": "The roots are $r_1 = 11$ and $r_2 = -4$.",
        "reason": "Zero-product property: one of the two brackets is $0$; the positive root is $r_1$ and the negative root is $r_2$."
      },
      {
        "step": "So $a_n = y \\cdot 11^n + z \\cdot (-4)^n$ for every whole number $n$ from $1$ up.",
        "reason": "General solution (distinct roots): the roots $11$ and $-4$ are different, and the sequence counted from $a_1$ satisfies the recurrence of line 4 at every step; counting from $1$ in place of $0$ changes only the numbers $y$ and $z$."
      },
      {
        "step": "$11y - 4z = 7$",
        "reason": "Substituting a value: $n = 1$ in line 12, with $a_1 = 7$."
      },
      {
        "step": "$121y + 16z = 93$",
        "reason": "Substituting a value: $n = 2$ in line 12, with $(-4)^2 = 16$ and $a_2 = 93$."
      },
      {
        "step": "$44y - 16z = 28$",
        "reason": "Multiplying both sides by the same number: line 13 is multiplied by $4$."
      },
      {
        "step": "$165y = 121$",
        "reason": "Adding two equations: lines 14 and 15 are added."
      },
      {
        "step": "$y = \\dfrac{121}{165}$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $165$."
      },
      {
        "step": "$y = \\dfrac{11}{15}$",
        "reason": "Cancelling a common factor: $11$ divides $121$ and $165$."
      }
    ]
  },
  {
    "id": "t242-k2-p12",
    "topic": "recurrences-from-counting",
    "kind": "t242-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $y = \\dfrac{15}{19}$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $11$ colours, and a long tile covers two neighbouring squares and comes in $60$ colours.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $y = \\dfrac{15}{19}$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $11$ colours, and a long tile covers two neighbouring squares and comes in $60$ colours.",
        "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the tile on the last square."
      },
      {
        "step": "For $n$ from $3$ up, $11a_{n-1}$ of the coverings of $n$ squares end in a short tile.",
        "reason": "Separation of cases: the $11$ colours of a short last tile are $11$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "For $n$ from $3$ up, $60a_{n-2}$ of the coverings of $n$ squares end in a long tile.",
        "reason": "Separation of cases: the $60$ colours of a long last tile are $60$ cases, each with the $a_{n-2}$ coverings of the first $n - 2$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "So $a_n = 11a_{n-1} + 60a_{n-2}$ for every whole number $n$ from $3$ up.",
        "reason": "Separation of cases: the last square lies under a short tile or under a long tile, never both, so the counts of lines 2 and 3 are added."
      },
      {
        "step": "$a_1 = 11$",
        "reason": "Separation of cases: one square takes one short tile, in one of $11$ colours."
      },
      {
        "step": "$a_2 = 11 \\cdot 11 + 60$",
        "reason": "Separation of cases: two squares take two short tiles, $11$ colours for the first and $11$ for the second, or one long tile in one of $60$ colours."
      },
      {
        "step": "$a_2 = 181$",
        "reason": "Order of operations, from arithmetic: the product first, then the sum."
      },
      {
        "step": "$x^2 = 11x + 60$",
        "reason": "Characteristic equation: line 4 is a linear recurrence of order 2, and $a_n$, $a_{n-1}$ and $a_{n-2}$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$x^2 - 11x - 60 = 0$",
        "reason": "Adding the same number to both sides: $11x + 60$ is taken from both sides."
      },
      {
        "step": "$(x - 15)(x + 4) = 0$",
        "reason": "Factoring a quadratic: $-15$ and $4$ have sum $-11$ and product $-60$."
      },
      {
        "step": "The roots are $r_1 = 15$ and $r_2 = -4$.",
        "reason": "Zero-product property: one of the two brackets is $0$; the positive root is $r_1$ and the negative root is $r_2$."
      },
      {
        "step": "So $a_n = y \\cdot 15^n + z \\cdot (-4)^n$ for every whole number $n$ from $1$ up.",
        "reason": "General solution (distinct roots): the roots $15$ and $-4$ are different, and the sequence counted from $a_1$ satisfies the recurrence of line 4 at every step; counting from $1$ in place of $0$ changes only the numbers $y$ and $z$."
      },
      {
        "step": "$15y - 4z = 11$",
        "reason": "Substituting a value: $n = 1$ in line 12, with $a_1 = 11$."
      },
      {
        "step": "$225y + 16z = 181$",
        "reason": "Substituting a value: $n = 2$ in line 12, with $(-4)^2 = 16$ and $a_2 = 181$."
      },
      {
        "step": "$60y - 16z = 44$",
        "reason": "Multiplying both sides by the same number: line 13 is multiplied by $4$."
      },
      {
        "step": "$285y = 225$",
        "reason": "Adding two equations: lines 14 and 15 are added."
      },
      {
        "step": "$y = \\dfrac{225}{285}$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $285$."
      },
      {
        "step": "$y = \\dfrac{15}{19}$",
        "reason": "Cancelling a common factor: $15$ divides $225$ and $285$."
      }
    ]
  },
  {
    "id": "t242-k2-p13",
    "topic": "recurrences-from-counting",
    "kind": "t242-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $y = \\dfrac{9}{14}$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $4$ colours, and a long tile covers two neighbouring squares and comes in $45$ colours.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $y = \\dfrac{9}{14}$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $4$ colours, and a long tile covers two neighbouring squares and comes in $45$ colours.",
        "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the tile on the last square."
      },
      {
        "step": "For $n$ from $3$ up, $4a_{n-1}$ of the coverings of $n$ squares end in a short tile.",
        "reason": "Separation of cases: the $4$ colours of a short last tile are $4$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "For $n$ from $3$ up, $45a_{n-2}$ of the coverings of $n$ squares end in a long tile.",
        "reason": "Separation of cases: the $45$ colours of a long last tile are $45$ cases, each with the $a_{n-2}$ coverings of the first $n - 2$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "So $a_n = 4a_{n-1} + 45a_{n-2}$ for every whole number $n$ from $3$ up.",
        "reason": "Separation of cases: the last square lies under a short tile or under a long tile, never both, so the counts of lines 2 and 3 are added."
      },
      {
        "step": "$a_1 = 4$",
        "reason": "Separation of cases: one square takes one short tile, in one of $4$ colours."
      },
      {
        "step": "$a_2 = 4 \\cdot 4 + 45$",
        "reason": "Separation of cases: two squares take two short tiles, $4$ colours for the first and $4$ for the second, or one long tile in one of $45$ colours."
      },
      {
        "step": "$a_2 = 61$",
        "reason": "Order of operations, from arithmetic: the product first, then the sum."
      },
      {
        "step": "$x^2 = 4x + 45$",
        "reason": "Characteristic equation: line 4 is a linear recurrence of order 2, and $a_n$, $a_{n-1}$ and $a_{n-2}$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$x^2 - 4x - 45 = 0$",
        "reason": "Adding the same number to both sides: $4x + 45$ is taken from both sides."
      },
      {
        "step": "$(x - 9)(x + 5) = 0$",
        "reason": "Factoring a quadratic: $-9$ and $5$ have sum $-4$ and product $-45$."
      },
      {
        "step": "The roots are $r_1 = 9$ and $r_2 = -5$.",
        "reason": "Zero-product property: one of the two brackets is $0$; the positive root is $r_1$ and the negative root is $r_2$."
      },
      {
        "step": "So $a_n = y \\cdot 9^n + z \\cdot (-5)^n$ for every whole number $n$ from $1$ up.",
        "reason": "General solution (distinct roots): the roots $9$ and $-5$ are different, and the sequence counted from $a_1$ satisfies the recurrence of line 4 at every step; counting from $1$ in place of $0$ changes only the numbers $y$ and $z$."
      },
      {
        "step": "$9y - 5z = 4$",
        "reason": "Substituting a value: $n = 1$ in line 12, with $a_1 = 4$."
      },
      {
        "step": "$81y + 25z = 61$",
        "reason": "Substituting a value: $n = 2$ in line 12, with $(-5)^2 = 25$ and $a_2 = 61$."
      },
      {
        "step": "$45y - 25z = 20$",
        "reason": "Multiplying both sides by the same number: line 13 is multiplied by $5$."
      },
      {
        "step": "$126y = 81$",
        "reason": "Adding two equations: lines 14 and 15 are added."
      },
      {
        "step": "$y = \\dfrac{81}{126}$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $126$."
      },
      {
        "step": "$y = \\dfrac{9}{14}$",
        "reason": "Cancelling a common factor: $9$ divides $81$ and $126$."
      }
    ]
  },
  {
    "id": "t242-k2-p14",
    "topic": "recurrences-from-counting",
    "kind": "t242-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $y = \\dfrac{7}{10}$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $4$ colours, and a long tile covers two neighbouring squares and comes in $21$ colours.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $y = \\dfrac{7}{10}$, where $a_n = yr_1^n + zr_2^n$ for every whole number $n$ from $1$ up, $r_1$ is the positive root and $r_2$ the negative root of the characteristic equation of the linear recurrence of order 2 that $a_n$ satisfies, and $a_n$ is the number of ways to cover a row of $n$ squares with tiles, each square under exactly one tile: a short tile covers one square and comes in $4$ colours, and a long tile covers two neighbouring squares and comes in $21$ colours.",
        "reason": "Separation of cases: this is the problem as given; the coverings are sorted by the tile on the last square."
      },
      {
        "step": "For $n$ from $3$ up, $4a_{n-1}$ of the coverings of $n$ squares end in a short tile.",
        "reason": "Separation of cases: the $4$ colours of a short last tile are $4$ cases, each with the $a_{n-1}$ coverings of the first $n - 1$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "For $n$ from $3$ up, $21a_{n-2}$ of the coverings of $n$ squares end in a long tile.",
        "reason": "Separation of cases: the $21$ colours of a long last tile are $21$ cases, each with the $a_{n-2}$ coverings of the first $n - 2$ squares, and multiplication as repeated addition adds them."
      },
      {
        "step": "So $a_n = 4a_{n-1} + 21a_{n-2}$ for every whole number $n$ from $3$ up.",
        "reason": "Separation of cases: the last square lies under a short tile or under a long tile, never both, so the counts of lines 2 and 3 are added."
      },
      {
        "step": "$a_1 = 4$",
        "reason": "Separation of cases: one square takes one short tile, in one of $4$ colours."
      },
      {
        "step": "$a_2 = 4 \\cdot 4 + 21$",
        "reason": "Separation of cases: two squares take two short tiles, $4$ colours for the first and $4$ for the second, or one long tile in one of $21$ colours."
      },
      {
        "step": "$a_2 = 37$",
        "reason": "Order of operations, from arithmetic: the product first, then the sum."
      },
      {
        "step": "$x^2 = 4x + 21$",
        "reason": "Characteristic equation: line 4 is a linear recurrence of order 2, and $a_n$, $a_{n-1}$ and $a_{n-2}$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$x^2 - 4x - 21 = 0$",
        "reason": "Adding the same number to both sides: $4x + 21$ is taken from both sides."
      },
      {
        "step": "$(x - 7)(x + 3) = 0$",
        "reason": "Factoring a quadratic: $-7$ and $3$ have sum $-4$ and product $-21$."
      },
      {
        "step": "The roots are $r_1 = 7$ and $r_2 = -3$.",
        "reason": "Zero-product property: one of the two brackets is $0$; the positive root is $r_1$ and the negative root is $r_2$."
      },
      {
        "step": "So $a_n = y \\cdot 7^n + z \\cdot (-3)^n$ for every whole number $n$ from $1$ up.",
        "reason": "General solution (distinct roots): the roots $7$ and $-3$ are different, and the sequence counted from $a_1$ satisfies the recurrence of line 4 at every step; counting from $1$ in place of $0$ changes only the numbers $y$ and $z$."
      },
      {
        "step": "$7y - 3z = 4$",
        "reason": "Substituting a value: $n = 1$ in line 12, with $a_1 = 4$."
      },
      {
        "step": "$49y + 9z = 37$",
        "reason": "Substituting a value: $n = 2$ in line 12, with $(-3)^2 = 9$ and $a_2 = 37$."
      },
      {
        "step": "$21y - 9z = 12$",
        "reason": "Multiplying both sides by the same number: line 13 is multiplied by $3$."
      },
      {
        "step": "$70y = 49$",
        "reason": "Adding two equations: lines 14 and 15 are added."
      },
      {
        "step": "$y = \\dfrac{49}{70}$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $70$."
      },
      {
        "step": "$y = \\dfrac{7}{10}$",
        "reason": "Cancelling a common factor: $7$ divides $49$ and $70$."
      }
    ]
  }
]
