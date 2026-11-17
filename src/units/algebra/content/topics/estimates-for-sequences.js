export default {
  "number": 244,
  "title": "Estimates and inequalities for sequences",
  "section": 23,
  "book": {
    "title": "Problem-Solving Strategies",
    "pages": "225-228"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find $\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_{47}^2} + \\dfrac{1}{6a_{48}}$, where $a_1 = 17$ and $a_{k+1} = \\dfrac{a_k^2}{a_k - 6}$ for every whole number $k$ from $1$ up.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "1/102",
    "solution": [
      "Find $\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_{47}^2} + \\dfrac{1}{6a_{48}}$, where $a_1 = 17$ and $a_{k+1} = \\dfrac{a_k^2}{a_k - 6}$ for every whole number $k$ from $1$ up.",
      "$a_1 > 6$",
      "Assume that $a_k > 6$ for some whole number $k$ from $1$ up.",
      "$a_{k+1} - a_k = \\dfrac{6a_k}{a_k - 6}$",
      "$a_{k+1} > a_k$",
      "So $a_{k+1} > 6$.",
      "So $a_k > 6$ for every whole number $k$ from $1$ up.",
      "$\\dfrac{1}{a_{k+1}} = \\dfrac{a_k - 6}{a_k^2}$",
      "$\\dfrac{1}{a_{k+1}} = \\dfrac{1}{a_k} - \\dfrac{6}{a_k^2}$",
      "$\\dfrac{6}{a_k^2} = \\dfrac{1}{a_k} - \\dfrac{1}{a_{k+1}}$",
      "$\\dfrac{6}{a_1^2} + \\dfrac{6}{a_2^2} + \\dots + \\dfrac{6}{a_{47}^2} = \\left(\\dfrac{1}{a_1} - \\dfrac{1}{a_2}\\right) + \\left(\\dfrac{1}{a_2} - \\dfrac{1}{a_3}\\right) + \\dots + \\left(\\dfrac{1}{a_{47}} - \\dfrac{1}{a_{48}}\\right)$",
      "$\\dfrac{6}{a_1^2} + \\dfrac{6}{a_2^2} + \\dots + \\dfrac{6}{a_{47}^2} = \\dfrac{1}{a_1} - \\dfrac{1}{a_{48}}$",
      "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_{47}^2} = \\dfrac{1}{6a_1} - \\dfrac{1}{6a_{48}}$",
      "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_{47}^2} = \\dfrac{1}{102} - \\dfrac{1}{6a_{48}}$",
      "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_{47}^2} + \\dfrac{1}{6a_{48}} = \\dfrac{1}{102}$"
    ]
  },
  "ideas": [
    {
      "name": "Telescoping bound",
      "concrete": "The numbers $b_0, b_1, \\dots, b_{10}$ have $b_0 = 7$, and each step $b_{k+1} - b_k$ is at least $3$. The ten steps add up to $b_{10} - b_0$, because every number between the first and the last is added once and taken away once. Ten numbers that are each at least $3$ add up to at least $30$, so $b_{10} - 7 \\ge 30$ and $b_{10} \\ge 37$.",
      "general": "Let $n$ be a whole number from $1$ up, and let $b_0, b_1, \\dots, b_n$ and $c_0, c_1, \\dots, c_{n-1}$ be numbers. If $b_{k+1} - b_k \\ge c_k$ for $k = 0, 1, \\dots, n - 1$, then $b_n - b_0 \\ge c_0 + c_1 + \\dots + c_{n-1}$. This is the **telescoping bound**: the $n$ inequalities are added, and the differences on the left add up to $b_n - b_0$, a telescoping sum. When every $c_k$ is the same number $c$, it reads $b_n - b_0 \\ge nc$. The same holds with $\\le$ in both places, and with $>$ or $<$ in both places. To bound a term of a sequence given by a recursion, square the recursion or take the reciprocals of its two sides, so that the difference of two neighbouring squares or reciprocals lies between fixed numbers, and then use the telescoping bound."
    },
    {
      "name": "Monovariant",
      "concrete": "Pairs of whole numbers start at $(2, 1)$, and each step takes $(x, y)$ to $(x - 1, y + 2)$ or to $(x, y - 1)$. The number $3x + y$ starts at $7$ and falls by $1$ at every step of either kind, and it is never below $0$, so there are at most $7$ steps. Seven steps are possible: two steps of the first kind lead to $(0, 5)$, and five steps of the second kind lead to $(0, 0)$.",
      "general": "A process goes on step by step, each step changing its state by a fixed rule or by one of several rules. A **monovariant** of the process is a number, worked out from the state, that never rises from one step to the next, or never falls. If a monovariant falls by at least a fixed number $b$ above $0$ at every step and is never below a number $c$, then a process that starts with the monovariant at $d_0$ takes at most $\\dfrac{d_0 - c}{b}$ steps, by the telescoping bound. A greatest number of steps found this way also needs a run of the process that takes that many steps."
    }
  ],
  "kinds": [
    {
      "id": "t244-k1",
      "forms": [
        {
          "example": {
            "problem": "Find $\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_{18}^2} + \\dfrac{1}{5a_{19}}$, where $a_1 = 11$ and $a_{k+1} = \\dfrac{a_k^2}{a_k - 5}$ for every whole number $k$ from $1$ up.",
            "lines": [
              {
                "step": "Find $\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_{18}^2} + \\dfrac{1}{5a_{19}}$, where $a_1 = 11$ and $a_{k+1} = \\dfrac{a_k^2}{a_k - 5}$ for every whole number $k$ from $1$ up.",
                "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and each term gives the next."
              },
              {
                "step": "$a_1 > 5$",
                "reason": "Base case: $a_1 = 11$, and $11$ is above $5$; this is the claim $a_k > 5$ at $k = 1$."
              },
              {
                "step": "Assume that $a_k > 5$ for some whole number $k$ from $1$ up.",
                "reason": "Inductive assumption: the claim at $k$."
              },
              {
                "step": "$a_{k+1} - a_k = \\dfrac{5a_k}{a_k - 5}$",
                "reason": "Single fraction: $\\dfrac{a_k^2}{a_k - 5} - a_k = \\dfrac{a_k^2 - a_k(a_k - 5)}{a_k - 5}$, and the top is $5a_k$."
              },
              {
                "step": "$a_{k+1} > a_k$",
                "reason": "A product is positive when its factors have the same sign and negative when they differ: by line 3 the top $5a_k$ and the bottom $a_k - 5$ of line 4 are positive, so $a_{k+1} - a_k$ is positive."
              },
              {
                "step": "So $a_{k+1} > 5$.",
                "reason": "Inductive step: by lines 5 and 3, $a_{k+1} > a_k > 5$; this is the claim at $k + 1$."
              },
              {
                "step": "So $a_k > 5$ for every whole number $k$ from $1$ up.",
                "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 6."
              },
              {
                "step": "$\\dfrac{1}{a_{k+1}} = \\dfrac{a_k - 5}{a_k^2}$",
                "reason": "Reciprocal, from arithmetic: equal numbers that are not $0$ have equal reciprocals, and both sides of the recursion are positive by line 7."
              },
              {
                "step": "$\\dfrac{1}{a_{k+1}} = \\dfrac{1}{a_k} - \\dfrac{5}{a_k^2}$",
                "reason": "Cancelling a common factor: each term of the top is divided by $a_k^2$, and $a_k$ cancels in the first."
              },
              {
                "step": "$\\dfrac{5}{a_k^2} = \\dfrac{1}{a_k} - \\dfrac{1}{a_{k+1}}$",
                "reason": "Adding the same number to both sides: $\\dfrac{5}{a_k^2}$ is added to both sides of line 9, and $\\dfrac{1}{a_{k+1}}$ is taken from both."
              },
              {
                "step": "$\\dfrac{5}{a_1^2} + \\dfrac{5}{a_2^2} + \\dots + \\dfrac{5}{a_{18}^2} = \\left(\\dfrac{1}{a_1} - \\dfrac{1}{a_2}\\right) + \\left(\\dfrac{1}{a_2} - \\dfrac{1}{a_3}\\right) + \\dots + \\left(\\dfrac{1}{a_{18}} - \\dfrac{1}{a_{19}}\\right)$",
                "reason": "Adding two equations: line 10 for $k = 1, 2, \\dots, 18$, the $18$ equations added."
              },
              {
                "step": "$\\dfrac{5}{a_1^2} + \\dfrac{5}{a_2^2} + \\dots + \\dfrac{5}{a_{18}^2} = \\dfrac{1}{a_1} - \\dfrac{1}{a_{19}}$",
                "reason": "Telescoping sum: each fraction taken away is added back in the next bracket, so the first and the last are left."
              },
              {
                "step": "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_{18}^2} = \\dfrac{1}{5a_1} - \\dfrac{1}{5a_{19}}$",
                "reason": "Dividing both sides by a nonzero number: both sides of line 12 are divided by $5$."
              },
              {
                "step": "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_{18}^2} = \\dfrac{1}{55} - \\dfrac{1}{5a_{19}}$",
                "reason": "Substituting a value: $a_1 = 11$ goes into line 13, and $5 \\cdot 11 = 55$."
              },
              {
                "step": "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_{18}^2} + \\dfrac{1}{5a_{19}} = \\dfrac{1}{55}$",
                "reason": "Adding the same number to both sides: $\\dfrac{1}{5a_{19}}$ is added to both sides."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_{45}^2} + \\dfrac{1}{9a_{46}}$, where $a_1 = 16$ and $a_{k+1} = \\dfrac{a_k^2}{a_k - 9}$ for every whole number $k$ from $1$ up.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "1/144",
              "lines": [
                {
                  "step": "Find $\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_{45}^2} + \\dfrac{1}{9a_{46}}$, where $a_1 = 16$ and $a_{k+1} = \\dfrac{a_k^2}{a_k - 9}$ for every whole number $k$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and each term gives the next."
                },
                {
                  "step": "$a_1 > 9$",
                  "reason": "Base case: $a_1 = 16$, and $16$ is above $9$; this is the claim $a_k > 9$ at $k = 1$."
                },
                {
                  "step": "Assume that $a_k > 9$ for some whole number $k$ from $1$ up.",
                  "reason": "Inductive assumption: the claim at $k$."
                },
                {
                  "step": "$a_{k+1} - a_k = \\dfrac{9a_k}{a_k - 9}$",
                  "reason": "Single fraction: $\\dfrac{a_k^2}{a_k - 9} - a_k = \\dfrac{a_k^2 - a_k(a_k - 9)}{a_k - 9}$, and the top is $9a_k$."
                },
                {
                  "step": "$a_{k+1} > a_k$",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: by line 3 the top $9a_k$ and the bottom $a_k - 9$ of line 4 are positive, so $a_{k+1} - a_k$ is positive."
                },
                {
                  "step": "So $a_{k+1} > 9$.",
                  "reason": "Inductive step: by lines 5 and 3, $a_{k+1} > a_k > 9$; this is the claim at $k + 1$."
                },
                {
                  "step": "So $a_k > 9$ for every whole number $k$ from $1$ up.",
                  "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 6."
                },
                {
                  "step": "$\\dfrac{1}{a_{k+1}} = \\dfrac{a_k - 9}{a_k^2}$",
                  "reason": "Reciprocal, from arithmetic: equal numbers that are not $0$ have equal reciprocals, and both sides of the recursion are positive by line 7."
                },
                {
                  "step": "$\\dfrac{1}{a_{k+1}} = \\dfrac{1}{a_k} - \\dfrac{9}{a_k^2}$",
                  "reason": "Cancelling a common factor: each term of the top is divided by $a_k^2$, and $a_k$ cancels in the first."
                },
                {
                  "step": "$\\dfrac{9}{a_k^2} = \\dfrac{1}{a_k} - \\dfrac{1}{a_{k+1}}$",
                  "reason": "Adding the same number to both sides: $\\dfrac{9}{a_k^2}$ is added to both sides of line 9, and $\\dfrac{1}{a_{k+1}}$ is taken from both."
                },
                {
                  "step": "$\\dfrac{9}{a_1^2} + \\dfrac{9}{a_2^2} + \\dots + \\dfrac{9}{a_{45}^2} = \\left(\\dfrac{1}{a_1} - \\dfrac{1}{a_2}\\right) + \\left(\\dfrac{1}{a_2} - \\dfrac{1}{a_3}\\right) + \\dots + \\left(\\dfrac{1}{a_{45}} - \\dfrac{1}{a_{46}}\\right)$",
                  "reason": "Adding two equations: line 10 for $k = 1, 2, \\dots, 45$, the $45$ equations added."
                },
                {
                  "step": "$\\dfrac{9}{a_1^2} + \\dfrac{9}{a_2^2} + \\dots + \\dfrac{9}{a_{45}^2} = \\dfrac{1}{a_1} - \\dfrac{1}{a_{46}}$",
                  "reason": "Telescoping sum: each fraction taken away is added back in the next bracket, so the first and the last are left."
                },
                {
                  "step": "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_{45}^2} = \\dfrac{1}{9a_1} - \\dfrac{1}{9a_{46}}$",
                  "reason": "Dividing both sides by a nonzero number: both sides of line 12 are divided by $9$."
                },
                {
                  "step": "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_{45}^2} = \\dfrac{1}{144} - \\dfrac{1}{9a_{46}}$",
                  "reason": "Substituting a value: $a_1 = 16$ goes into line 13, and $9 \\cdot 16 = 144$."
                },
                {
                  "step": "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_{45}^2} + \\dfrac{1}{9a_{46}} = \\dfrac{1}{144}$",
                  "reason": "Adding the same number to both sides: $\\dfrac{1}{9a_{46}}$ is added to both sides."
                }
              ]
            },
            {
              "prompt": "Find $\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_{17}^2} + \\dfrac{1}{7a_{18}}$, where $a_1 = 20$ and $a_{k+1} = \\dfrac{a_k^2}{a_k - 7}$ for every whole number $k$ from $1$ up.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "1/140",
              "lines": [
                {
                  "step": "Find $\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_{17}^2} + \\dfrac{1}{7a_{18}}$, where $a_1 = 20$ and $a_{k+1} = \\dfrac{a_k^2}{a_k - 7}$ for every whole number $k$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and each term gives the next."
                },
                {
                  "step": "$a_1 > 7$",
                  "reason": "Base case: $a_1 = 20$, and $20$ is above $7$; this is the claim $a_k > 7$ at $k = 1$."
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
                  "step": "$\\dfrac{7}{a_1^2} + \\dfrac{7}{a_2^2} + \\dots + \\dfrac{7}{a_{17}^2} = \\left(\\dfrac{1}{a_1} - \\dfrac{1}{a_2}\\right) + \\left(\\dfrac{1}{a_2} - \\dfrac{1}{a_3}\\right) + \\dots + \\left(\\dfrac{1}{a_{17}} - \\dfrac{1}{a_{18}}\\right)$",
                  "reason": "Adding two equations: line 10 for $k = 1, 2, \\dots, 17$, the $17$ equations added."
                },
                {
                  "step": "$\\dfrac{7}{a_1^2} + \\dfrac{7}{a_2^2} + \\dots + \\dfrac{7}{a_{17}^2} = \\dfrac{1}{a_1} - \\dfrac{1}{a_{18}}$",
                  "reason": "Telescoping sum: each fraction taken away is added back in the next bracket, so the first and the last are left."
                },
                {
                  "step": "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_{17}^2} = \\dfrac{1}{7a_1} - \\dfrac{1}{7a_{18}}$",
                  "reason": "Dividing both sides by a nonzero number: both sides of line 12 are divided by $7$."
                },
                {
                  "step": "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_{17}^2} = \\dfrac{1}{140} - \\dfrac{1}{7a_{18}}$",
                  "reason": "Substituting a value: $a_1 = 20$ goes into line 13, and $7 \\cdot 20 = 140$."
                },
                {
                  "step": "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_{17}^2} + \\dfrac{1}{7a_{18}} = \\dfrac{1}{140}$",
                  "reason": "Adding the same number to both sides: $\\dfrac{1}{7a_{18}}$ is added to both sides."
                }
              ]
            },
            {
              "prompt": "Find $\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_{26}^2} + \\dfrac{1}{5a_{27}}$, where $a_1 = 22$ and $a_{k+1} = \\dfrac{a_k^2}{a_k - 5}$ for every whole number $k$ from $1$ up.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "1/110",
              "lines": [
                {
                  "step": "Find $\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_{26}^2} + \\dfrac{1}{5a_{27}}$, where $a_1 = 22$ and $a_{k+1} = \\dfrac{a_k^2}{a_k - 5}$ for every whole number $k$ from $1$ up.",
                  "reason": "Recursion: this is the problem as given; $a_1$ starts the sequence and each term gives the next."
                },
                {
                  "step": "$a_1 > 5$",
                  "reason": "Base case: $a_1 = 22$, and $22$ is above $5$; this is the claim $a_k > 5$ at $k = 1$."
                },
                {
                  "step": "Assume that $a_k > 5$ for some whole number $k$ from $1$ up.",
                  "reason": "Inductive assumption: the claim at $k$."
                },
                {
                  "step": "$a_{k+1} - a_k = \\dfrac{5a_k}{a_k - 5}$",
                  "reason": "Single fraction: $\\dfrac{a_k^2}{a_k - 5} - a_k = \\dfrac{a_k^2 - a_k(a_k - 5)}{a_k - 5}$, and the top is $5a_k$."
                },
                {
                  "step": "$a_{k+1} > a_k$",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: by line 3 the top $5a_k$ and the bottom $a_k - 5$ of line 4 are positive, so $a_{k+1} - a_k$ is positive."
                },
                {
                  "step": "So $a_{k+1} > 5$.",
                  "reason": "Inductive step: by lines 5 and 3, $a_{k+1} > a_k > 5$; this is the claim at $k + 1$."
                },
                {
                  "step": "So $a_k > 5$ for every whole number $k$ from $1$ up.",
                  "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 6."
                },
                {
                  "step": "$\\dfrac{1}{a_{k+1}} = \\dfrac{a_k - 5}{a_k^2}$",
                  "reason": "Reciprocal, from arithmetic: equal numbers that are not $0$ have equal reciprocals, and both sides of the recursion are positive by line 7."
                },
                {
                  "step": "$\\dfrac{1}{a_{k+1}} = \\dfrac{1}{a_k} - \\dfrac{5}{a_k^2}$",
                  "reason": "Cancelling a common factor: each term of the top is divided by $a_k^2$, and $a_k$ cancels in the first."
                },
                {
                  "step": "$\\dfrac{5}{a_k^2} = \\dfrac{1}{a_k} - \\dfrac{1}{a_{k+1}}$",
                  "reason": "Adding the same number to both sides: $\\dfrac{5}{a_k^2}$ is added to both sides of line 9, and $\\dfrac{1}{a_{k+1}}$ is taken from both."
                },
                {
                  "step": "$\\dfrac{5}{a_1^2} + \\dfrac{5}{a_2^2} + \\dots + \\dfrac{5}{a_{26}^2} = \\left(\\dfrac{1}{a_1} - \\dfrac{1}{a_2}\\right) + \\left(\\dfrac{1}{a_2} - \\dfrac{1}{a_3}\\right) + \\dots + \\left(\\dfrac{1}{a_{26}} - \\dfrac{1}{a_{27}}\\right)$",
                  "reason": "Adding two equations: line 10 for $k = 1, 2, \\dots, 26$, the $26$ equations added."
                },
                {
                  "step": "$\\dfrac{5}{a_1^2} + \\dfrac{5}{a_2^2} + \\dots + \\dfrac{5}{a_{26}^2} = \\dfrac{1}{a_1} - \\dfrac{1}{a_{27}}$",
                  "reason": "Telescoping sum: each fraction taken away is added back in the next bracket, so the first and the last are left."
                },
                {
                  "step": "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_{26}^2} = \\dfrac{1}{5a_1} - \\dfrac{1}{5a_{27}}$",
                  "reason": "Dividing both sides by a nonzero number: both sides of line 12 are divided by $5$."
                },
                {
                  "step": "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_{26}^2} = \\dfrac{1}{110} - \\dfrac{1}{5a_{27}}$",
                  "reason": "Substituting a value: $a_1 = 22$ goes into line 13, and $5 \\cdot 22 = 110$."
                },
                {
                  "step": "$\\dfrac{1}{a_1^2} + \\dfrac{1}{a_2^2} + \\dots + \\dfrac{1}{a_{26}^2} + \\dfrac{1}{5a_{27}} = \\dfrac{1}{110}$",
                  "reason": "Adding the same number to both sides: $\\dfrac{1}{5a_{27}}$ is added to both sides."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the sum $\\dfrac{1}{3 \\cdot 4 \\cdot 5} + \\dfrac{1}{4 \\cdot 5 \\cdot 6} + \\dfrac{1}{5 \\cdot 6 \\cdot 7} + \\dots + \\dfrac{1}{17 \\cdot 18 \\cdot 19}$.",
            "lines": [
              {
                "step": "Find the sum $\\dfrac{1}{3 \\cdot 4 \\cdot 5} + \\dfrac{1}{4 \\cdot 5 \\cdot 6} + \\dfrac{1}{5 \\cdot 6 \\cdot 7} + \\dots + \\dfrac{1}{17 \\cdot 18 \\cdot 19}$.",
                "reason": "Arithmetic sequence: this is the problem as given; in each bottom the three factors go up by $1$, and from one term to the next the first factor goes up by $1$."
              },
              {
                "step": "Each term is $\\dfrac{1}{k(k + 1)(k + 2)}$, for $k = 3, 4, \\dots, 17$.",
                "reason": "Arithmetic sequence: the first factors have the common difference $1$, and in each bottom the second and third factors are the first plus $1$ and plus $2$."
              },
              {
                "step": "$\\dfrac{1}{k(k + 1)(k + 2)} = \\dfrac{a}{k(k + 1)} + \\dfrac{b}{(k + 1)(k + 2)}$",
                "reason": "Partial fractions: numbers $a$ and $b$ are sought that make this true for every $k$; each bottom on the right is the product of two neighbouring factors."
              },
              {
                "step": "$1 = a(k + 2) + bk$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $k(k + 1)(k + 2)$."
              },
              {
                "step": "$a = \\dfrac{1}{2}$",
                "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = 0$ gives $1 = 2a$."
              },
              {
                "step": "$b = -\\dfrac{1}{2}$",
                "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = -2$ gives $1 = -2b$."
              },
              {
                "step": "The sum is $\\dfrac{1}{2}\\left(\\dfrac{1}{3 \\cdot 4} - \\dfrac{1}{4 \\cdot 5}\\right) + \\dfrac{1}{2}\\left(\\dfrac{1}{4 \\cdot 5} - \\dfrac{1}{5 \\cdot 6}\\right) + \\dots + \\dfrac{1}{2}\\left(\\dfrac{1}{17 \\cdot 18} - \\dfrac{1}{18 \\cdot 19}\\right)$.",
                "reason": "Substituting a value: by lines 3, 5 and 6, each term $\\dfrac{1}{k(k + 1)(k + 2)}$ is $\\dfrac{1}{2}\\left(\\dfrac{1}{k(k + 1)} - \\dfrac{1}{(k + 1)(k + 2)}\\right)$, with its own value of $k$."
              },
              {
                "step": "The sum is $\\dfrac{1}{2}\\left(\\dfrac{1}{3 \\cdot 4} - \\dfrac{1}{4 \\cdot 5} + \\dfrac{1}{4 \\cdot 5} - \\dfrac{1}{5 \\cdot 6} + \\dots + \\dfrac{1}{17 \\cdot 18} - \\dfrac{1}{18 \\cdot 19}\\right)$.",
                "reason": "The distributive law, from arithmetic: the common factor $\\dfrac{1}{2}$ is taken out."
              },
              {
                "step": "The sum is $\\dfrac{1}{2}\\left(\\dfrac{1}{3 \\cdot 4} - \\dfrac{1}{18 \\cdot 19}\\right)$.",
                "reason": "Telescoping sum: each fraction taken away is added back in the next bracket, so the first and the last are left."
              },
              {
                "step": "$\\dfrac{1}{3 \\cdot 4} - \\dfrac{1}{18 \\cdot 19} = \\dfrac{55}{684}$",
                "reason": "The general subtraction formula, from arithmetic: over a common bottom, in lowest terms."
              },
              {
                "step": "$\\dfrac{1}{2} \\cdot \\dfrac{55}{684} = \\dfrac{55}{1368}$",
                "reason": "The product formula, from arithmetic: the tops multiply and the bottoms multiply, and the result is in lowest terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the sum $\\dfrac{1}{5 \\cdot 11 \\cdot 17} + \\dfrac{1}{11 \\cdot 17 \\cdot 23} + \\dfrac{1}{17 \\cdot 23 \\cdot 29} + \\dots + \\dfrac{1}{83 \\cdot 89 \\cdot 95}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "28/18601",
              "lines": [
                {
                  "step": "Find the sum $\\dfrac{1}{5 \\cdot 11 \\cdot 17} + \\dfrac{1}{11 \\cdot 17 \\cdot 23} + \\dfrac{1}{17 \\cdot 23 \\cdot 29} + \\dots + \\dfrac{1}{83 \\cdot 89 \\cdot 95}$.",
                  "reason": "Arithmetic sequence: this is the problem as given; in each bottom the three factors go up by $6$, and from one term to the next the first factor goes up by $6$."
                },
                {
                  "step": "Each term is $\\dfrac{1}{k(k + 6)(k + 12)}$, for $k = 5, 11, \\dots, 83$.",
                  "reason": "Arithmetic sequence: the first factors have the common difference $6$, and in each bottom the second and third factors are the first plus $6$ and plus $12$."
                },
                {
                  "step": "$\\dfrac{1}{k(k + 6)(k + 12)} = \\dfrac{a}{k(k + 6)} + \\dfrac{b}{(k + 6)(k + 12)}$",
                  "reason": "Partial fractions: numbers $a$ and $b$ are sought that make this true for every $k$; each bottom on the right is the product of two neighbouring factors."
                },
                {
                  "step": "$1 = a(k + 12) + bk$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $k(k + 6)(k + 12)$."
                },
                {
                  "step": "$a = \\dfrac{1}{12}$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = 0$ gives $1 = 12a$."
                },
                {
                  "step": "$b = -\\dfrac{1}{12}$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = -12$ gives $1 = -12b$."
                },
                {
                  "step": "The sum is $\\dfrac{1}{12}\\left(\\dfrac{1}{5 \\cdot 11} - \\dfrac{1}{11 \\cdot 17}\\right) + \\dfrac{1}{12}\\left(\\dfrac{1}{11 \\cdot 17} - \\dfrac{1}{17 \\cdot 23}\\right) + \\dots + \\dfrac{1}{12}\\left(\\dfrac{1}{83 \\cdot 89} - \\dfrac{1}{89 \\cdot 95}\\right)$.",
                  "reason": "Substituting a value: by lines 3, 5 and 6, each term $\\dfrac{1}{k(k + 6)(k + 12)}$ is $\\dfrac{1}{12}\\left(\\dfrac{1}{k(k + 6)} - \\dfrac{1}{(k + 6)(k + 12)}\\right)$, with its own value of $k$."
                },
                {
                  "step": "The sum is $\\dfrac{1}{12}\\left(\\dfrac{1}{5 \\cdot 11} - \\dfrac{1}{11 \\cdot 17} + \\dfrac{1}{11 \\cdot 17} - \\dfrac{1}{17 \\cdot 23} + \\dots + \\dfrac{1}{83 \\cdot 89} - \\dfrac{1}{89 \\cdot 95}\\right)$.",
                  "reason": "The distributive law, from arithmetic: the common factor $\\dfrac{1}{12}$ is taken out."
                },
                {
                  "step": "The sum is $\\dfrac{1}{12}\\left(\\dfrac{1}{5 \\cdot 11} - \\dfrac{1}{89 \\cdot 95}\\right)$.",
                  "reason": "Telescoping sum: each fraction taken away is added back in the next bracket, so the first and the last are left."
                },
                {
                  "step": "$\\dfrac{1}{5 \\cdot 11} - \\dfrac{1}{89 \\cdot 95} = \\dfrac{336}{18\\,601}$",
                  "reason": "The general subtraction formula, from arithmetic: over a common bottom, in lowest terms."
                },
                {
                  "step": "$\\dfrac{1}{12} \\cdot \\dfrac{336}{18\\,601} = \\dfrac{28}{18\\,601}$",
                  "reason": "The product formula, from arithmetic: the tops multiply and the bottoms multiply, and the result is in lowest terms."
                }
              ]
            },
            {
              "prompt": "Find the sum $\\dfrac{1}{6 \\cdot 19 \\cdot 32} + \\dfrac{1}{19 \\cdot 32 \\cdot 45} + \\dfrac{1}{32 \\cdot 45 \\cdot 58} + \\dots + \\dfrac{1}{97 \\cdot 110 \\cdot 123}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "43/128535",
              "lines": [
                {
                  "step": "Find the sum $\\dfrac{1}{6 \\cdot 19 \\cdot 32} + \\dfrac{1}{19 \\cdot 32 \\cdot 45} + \\dfrac{1}{32 \\cdot 45 \\cdot 58} + \\dots + \\dfrac{1}{97 \\cdot 110 \\cdot 123}$.",
                  "reason": "Arithmetic sequence: this is the problem as given; in each bottom the three factors go up by $13$, and from one term to the next the first factor goes up by $13$."
                },
                {
                  "step": "Each term is $\\dfrac{1}{k(k + 13)(k + 26)}$, for $k = 6, 19, \\dots, 97$.",
                  "reason": "Arithmetic sequence: the first factors have the common difference $13$, and in each bottom the second and third factors are the first plus $13$ and plus $26$."
                },
                {
                  "step": "$\\dfrac{1}{k(k + 13)(k + 26)} = \\dfrac{a}{k(k + 13)} + \\dfrac{b}{(k + 13)(k + 26)}$",
                  "reason": "Partial fractions: numbers $a$ and $b$ are sought that make this true for every $k$; each bottom on the right is the product of two neighbouring factors."
                },
                {
                  "step": "$1 = a(k + 26) + bk$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $k(k + 13)(k + 26)$."
                },
                {
                  "step": "$a = \\dfrac{1}{26}$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = 0$ gives $1 = 26a$."
                },
                {
                  "step": "$b = -\\dfrac{1}{26}$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = -26$ gives $1 = -26b$."
                },
                {
                  "step": "The sum is $\\dfrac{1}{26}\\left(\\dfrac{1}{6 \\cdot 19} - \\dfrac{1}{19 \\cdot 32}\\right) + \\dfrac{1}{26}\\left(\\dfrac{1}{19 \\cdot 32} - \\dfrac{1}{32 \\cdot 45}\\right) + \\dots + \\dfrac{1}{26}\\left(\\dfrac{1}{97 \\cdot 110} - \\dfrac{1}{110 \\cdot 123}\\right)$.",
                  "reason": "Substituting a value: by lines 3, 5 and 6, each term $\\dfrac{1}{k(k + 13)(k + 26)}$ is $\\dfrac{1}{26}\\left(\\dfrac{1}{k(k + 13)} - \\dfrac{1}{(k + 13)(k + 26)}\\right)$, with its own value of $k$."
                },
                {
                  "step": "The sum is $\\dfrac{1}{26}\\left(\\dfrac{1}{6 \\cdot 19} - \\dfrac{1}{19 \\cdot 32} + \\dfrac{1}{19 \\cdot 32} - \\dfrac{1}{32 \\cdot 45} + \\dots + \\dfrac{1}{97 \\cdot 110} - \\dfrac{1}{110 \\cdot 123}\\right)$.",
                  "reason": "The distributive law, from arithmetic: the common factor $\\dfrac{1}{26}$ is taken out."
                },
                {
                  "step": "The sum is $\\dfrac{1}{26}\\left(\\dfrac{1}{6 \\cdot 19} - \\dfrac{1}{110 \\cdot 123}\\right)$.",
                  "reason": "Telescoping sum: each fraction taken away is added back in the next bracket, so the first and the last are left."
                },
                {
                  "step": "$\\dfrac{1}{6 \\cdot 19} - \\dfrac{1}{110 \\cdot 123} = \\dfrac{1118}{128\\,535}$",
                  "reason": "The general subtraction formula, from arithmetic: over a common bottom, in lowest terms."
                },
                {
                  "step": "$\\dfrac{1}{26} \\cdot \\dfrac{1118}{128\\,535} = \\dfrac{43}{128\\,535}$",
                  "reason": "The product formula, from arithmetic: the tops multiply and the bottoms multiply, and the result is in lowest terms."
                }
              ]
            },
            {
              "prompt": "Find the sum $\\dfrac{1}{6 \\cdot 13 \\cdot 20} + \\dfrac{1}{13 \\cdot 20 \\cdot 27} + \\dfrac{1}{20 \\cdot 27 \\cdot 34} + \\dots + \\dfrac{1}{97 \\cdot 104 \\cdot 111}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "7/7696",
              "lines": [
                {
                  "step": "Find the sum $\\dfrac{1}{6 \\cdot 13 \\cdot 20} + \\dfrac{1}{13 \\cdot 20 \\cdot 27} + \\dfrac{1}{20 \\cdot 27 \\cdot 34} + \\dots + \\dfrac{1}{97 \\cdot 104 \\cdot 111}$.",
                  "reason": "Arithmetic sequence: this is the problem as given; in each bottom the three factors go up by $7$, and from one term to the next the first factor goes up by $7$."
                },
                {
                  "step": "Each term is $\\dfrac{1}{k(k + 7)(k + 14)}$, for $k = 6, 13, \\dots, 97$.",
                  "reason": "Arithmetic sequence: the first factors have the common difference $7$, and in each bottom the second and third factors are the first plus $7$ and plus $14$."
                },
                {
                  "step": "$\\dfrac{1}{k(k + 7)(k + 14)} = \\dfrac{a}{k(k + 7)} + \\dfrac{b}{(k + 7)(k + 14)}$",
                  "reason": "Partial fractions: numbers $a$ and $b$ are sought that make this true for every $k$; each bottom on the right is the product of two neighbouring factors."
                },
                {
                  "step": "$1 = a(k + 14) + bk$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $k(k + 7)(k + 14)$."
                },
                {
                  "step": "$a = \\dfrac{1}{14}$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = 0$ gives $1 = 14a$."
                },
                {
                  "step": "$b = -\\dfrac{1}{14}$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = -14$ gives $1 = -14b$."
                },
                {
                  "step": "The sum is $\\dfrac{1}{14}\\left(\\dfrac{1}{6 \\cdot 13} - \\dfrac{1}{13 \\cdot 20}\\right) + \\dfrac{1}{14}\\left(\\dfrac{1}{13 \\cdot 20} - \\dfrac{1}{20 \\cdot 27}\\right) + \\dots + \\dfrac{1}{14}\\left(\\dfrac{1}{97 \\cdot 104} - \\dfrac{1}{104 \\cdot 111}\\right)$.",
                  "reason": "Substituting a value: by lines 3, 5 and 6, each term $\\dfrac{1}{k(k + 7)(k + 14)}$ is $\\dfrac{1}{14}\\left(\\dfrac{1}{k(k + 7)} - \\dfrac{1}{(k + 7)(k + 14)}\\right)$, with its own value of $k$."
                },
                {
                  "step": "The sum is $\\dfrac{1}{14}\\left(\\dfrac{1}{6 \\cdot 13} - \\dfrac{1}{13 \\cdot 20} + \\dfrac{1}{13 \\cdot 20} - \\dfrac{1}{20 \\cdot 27} + \\dots + \\dfrac{1}{97 \\cdot 104} - \\dfrac{1}{104 \\cdot 111}\\right)$.",
                  "reason": "The distributive law, from arithmetic: the common factor $\\dfrac{1}{14}$ is taken out."
                },
                {
                  "step": "The sum is $\\dfrac{1}{14}\\left(\\dfrac{1}{6 \\cdot 13} - \\dfrac{1}{104 \\cdot 111}\\right)$.",
                  "reason": "Telescoping sum: each fraction taken away is added back in the next bracket, so the first and the last are left."
                },
                {
                  "step": "$\\dfrac{1}{6 \\cdot 13} - \\dfrac{1}{104 \\cdot 111} = \\dfrac{49}{3848}$",
                  "reason": "The general subtraction formula, from arithmetic: over a common bottom, in lowest terms."
                },
                {
                  "step": "$\\dfrac{1}{14} \\cdot \\dfrac{49}{3848} = \\dfrac{7}{7696}$",
                  "reason": "The product formula, from arithmetic: the tops multiply and the bottoms multiply, and the result is in lowest terms."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t244-k2",
      "forms": [
        {
          "example": {
            "problem": "Find $\\left\\lfloor a_{18} \\right\\rfloor$, where $a_0 = 4$ and $a_{n+1} = a_n + \\dfrac{5}{a_n}$ for every whole number $n$.",
            "lines": [
              {
                "step": "Find $\\left\\lfloor a_{18} \\right\\rfloor$, where $a_0 = 4$ and $a_{n+1} = a_n + \\dfrac{5}{a_n}$ for every whole number $n$.",
                "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
              },
              {
                "step": "$a_0 \\ge 4$",
                "reason": "Base case: $a_0 = 4$; this is the claim $a_n \\ge 4$ at $n = 0$."
              },
              {
                "step": "Assume that $a_k \\ge 4$ for some whole number $k$.",
                "reason": "Inductive assumption: the claim at $k$."
              },
              {
                "step": "$a_{k+1} > a_k$",
                "reason": "Adding the same number: by line 3 the number $a_k$ is positive, so $\\dfrac{5}{a_k}$ is positive, and $a_k$ is added to both sides of $\\dfrac{5}{a_k} > 0$; the left side is then $a_{k+1}$."
              },
              {
                "step": "So $a_{k+1} \\ge 4$.",
                "reason": "Inductive step: by lines 4 and 3, $a_{k+1} > a_k \\ge 4$; this is the claim at $k + 1$."
              },
              {
                "step": "So $a_n \\ge 4$ for every whole number $n$.",
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
                "step": "$a_{18}^2 - a_0^2 > 180$",
                "reason": "Telescoping bound: line 10 for $n = 0, 1, \\dots, 17$ gives $18$ differences, each above $10$, and $18 \\cdot 10 = 180$."
              },
              {
                "step": "$a_{18}^2 > 196$",
                "reason": "Adding the same number: $a_0^2 = 16$ is added to both sides, and $16 + 180 = 196$."
              },
              {
                "step": "$a_n^2 \\ge 16$",
                "reason": "Powers and roots of positive numbers keep the order: both sides of line 6 are squared, and $4^2 = 16$."
              },
              {
                "step": "$\\dfrac{25}{a_n^2} \\le \\dfrac{25}{16}$",
                "reason": "Reciprocals of numbers of the same sign reverse the order: by line 13, under the same positive top the greater positive bottom gives the smaller fraction."
              },
              {
                "step": "$a_{n+1}^2 - a_n^2 \\le 10 + \\dfrac{25}{16}$",
                "reason": "Adding the same number: $10$ is added to both sides of line 14, and the left side is then the difference of line 9."
              },
              {
                "step": "$a_{18}^2 - a_0^2 \\le 180 + \\dfrac{225}{8}$",
                "reason": "Telescoping bound: line 15 for $n = 0, 1, \\dots, 17$ gives $18$ differences, each at most $10 + \\dfrac{25}{16}$, and $18$ times that is $180 + \\dfrac{225}{8}$."
              },
              {
                "step": "$a_{18}^2 \\le 196 + \\dfrac{225}{8}$",
                "reason": "Adding the same number: $a_0^2 = 16$ is added to both sides."
              },
              {
                "step": "$a_{18}^2 < 225$",
                "reason": "Transitivity: $\\dfrac{225}{8}$ is below $29$, and $196 + 29 = 225$."
              },
              {
                "step": "$14 < a_{18} < 15$",
                "reason": "Powers and roots of positive numbers keep the order: by lines 12 and 18, $14^2 < a_{18}^2 < 15^2$, and $a_{18}$ is positive by line 6."
              },
              {
                "step": "$\\left\\lfloor a_{18} \\right\\rfloor = 14$",
                "reason": "Floor: the floor of a number $x$ is the whole number $j$ with $j \\le x < j + 1$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $\\left\\lfloor a_{10} \\right\\rfloor$, where $a_0 = 14$ and $a_{n+1} = a_n + \\dfrac{3}{a_n}$ for every whole number $n$.",
              "form": "Answer as an integer.",
              "answer": "16",
              "lines": [
                {
                  "step": "Find $\\left\\lfloor a_{10} \\right\\rfloor$, where $a_0 = 14$ and $a_{n+1} = a_n + \\dfrac{3}{a_n}$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
                },
                {
                  "step": "$a_0 \\ge 14$",
                  "reason": "Base case: $a_0 = 14$; this is the claim $a_n \\ge 14$ at $n = 0$."
                },
                {
                  "step": "Assume that $a_k \\ge 14$ for some whole number $k$.",
                  "reason": "Inductive assumption: the claim at $k$."
                },
                {
                  "step": "$a_{k+1} > a_k$",
                  "reason": "Adding the same number: by line 3 the number $a_k$ is positive, so $\\dfrac{3}{a_k}$ is positive, and $a_k$ is added to both sides of $\\dfrac{3}{a_k} > 0$; the left side is then $a_{k+1}$."
                },
                {
                  "step": "So $a_{k+1} \\ge 14$.",
                  "reason": "Inductive step: by lines 4 and 3, $a_{k+1} > a_k \\ge 14$; this is the claim at $k + 1$."
                },
                {
                  "step": "So $a_n \\ge 14$ for every whole number $n$.",
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
                  "step": "$a_{10}^2 - a_0^2 > 60$",
                  "reason": "Telescoping bound: line 10 for $n = 0, 1, \\dots, 9$ gives $10$ differences, each above $6$, and $10 \\cdot 6 = 60$."
                },
                {
                  "step": "$a_{10}^2 > 256$",
                  "reason": "Adding the same number: $a_0^2 = 196$ is added to both sides, and $196 + 60 = 256$."
                },
                {
                  "step": "$a_n^2 \\ge 196$",
                  "reason": "Powers and roots of positive numbers keep the order: both sides of line 6 are squared, and $14^2 = 196$."
                },
                {
                  "step": "$\\dfrac{9}{a_n^2} \\le \\dfrac{9}{196}$",
                  "reason": "Reciprocals of numbers of the same sign reverse the order: by line 13, under the same positive top the greater positive bottom gives the smaller fraction."
                },
                {
                  "step": "$a_{n+1}^2 - a_n^2 \\le 6 + \\dfrac{9}{196}$",
                  "reason": "Adding the same number: $6$ is added to both sides of line 14, and the left side is then the difference of line 9."
                },
                {
                  "step": "$a_{10}^2 - a_0^2 \\le 60 + \\dfrac{45}{98}$",
                  "reason": "Telescoping bound: line 15 for $n = 0, 1, \\dots, 9$ gives $10$ differences, each at most $6 + \\dfrac{9}{196}$, and $10$ times that is $60 + \\dfrac{45}{98}$."
                },
                {
                  "step": "$a_{10}^2 \\le 256 + \\dfrac{45}{98}$",
                  "reason": "Adding the same number: $a_0^2 = 196$ is added to both sides."
                },
                {
                  "step": "$a_{10}^2 < 289$",
                  "reason": "Transitivity: $\\dfrac{45}{98}$ is below $33$, and $256 + 33 = 289$."
                },
                {
                  "step": "$16 < a_{10} < 17$",
                  "reason": "Powers and roots of positive numbers keep the order: by lines 12 and 18, $16^2 < a_{10}^2 < 17^2$, and $a_{10}$ is positive by line 6."
                },
                {
                  "step": "$\\left\\lfloor a_{10} \\right\\rfloor = 16$",
                  "reason": "Floor: the floor of a number $x$ is the whole number $j$ with $j \\le x < j + 1$."
                }
              ]
            },
            {
              "prompt": "Find $\\left\\lfloor a_8 \\right\\rfloor$, where $a_0 = 7$ and $a_{n+1} = a_n + \\dfrac{2}{a_n}$ for every whole number $n$.",
              "form": "Answer as an integer.",
              "answer": "9",
              "lines": [
                {
                  "step": "Find $\\left\\lfloor a_8 \\right\\rfloor$, where $a_0 = 7$ and $a_{n+1} = a_n + \\dfrac{2}{a_n}$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
                },
                {
                  "step": "$a_0 \\ge 7$",
                  "reason": "Base case: $a_0 = 7$; this is the claim $a_n \\ge 7$ at $n = 0$."
                },
                {
                  "step": "Assume that $a_k \\ge 7$ for some whole number $k$.",
                  "reason": "Inductive assumption: the claim at $k$."
                },
                {
                  "step": "$a_{k+1} > a_k$",
                  "reason": "Adding the same number: by line 3 the number $a_k$ is positive, so $\\dfrac{2}{a_k}$ is positive, and $a_k$ is added to both sides of $\\dfrac{2}{a_k} > 0$; the left side is then $a_{k+1}$."
                },
                {
                  "step": "So $a_{k+1} \\ge 7$.",
                  "reason": "Inductive step: by lines 4 and 3, $a_{k+1} > a_k \\ge 7$; this is the claim at $k + 1$."
                },
                {
                  "step": "So $a_n \\ge 7$ for every whole number $n$.",
                  "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 5."
                },
                {
                  "step": "$a_{n+1}^2 = \\left(a_n + \\dfrac{2}{a_n}\\right)^2$",
                  "reason": "Raising both sides to a power: both sides of the recursion are squared."
                },
                {
                  "step": "$a_{n+1}^2 = a_n^2 + 4 + \\dfrac{4}{a_n^2}$",
                  "reason": "Square of a binomial: twice the product of $a_n$ and $\\dfrac{2}{a_n}$ is $4$."
                },
                {
                  "step": "$a_{n+1}^2 - a_n^2 = 4 + \\dfrac{4}{a_n^2}$",
                  "reason": "Adding the same number to both sides: $a_n^2$ is taken from both sides."
                },
                {
                  "step": "$a_{n+1}^2 - a_n^2 > 4$",
                  "reason": "Trivial Inequality: $\\dfrac{4}{a_n^2}$ is the square of $\\dfrac{2}{a_n}$, which is not $0$, so it is above $0$."
                },
                {
                  "step": "$a_8^2 - a_0^2 > 32$",
                  "reason": "Telescoping bound: line 10 for $n = 0, 1, \\dots, 7$ gives $8$ differences, each above $4$, and $8 \\cdot 4 = 32$."
                },
                {
                  "step": "$a_8^2 > 81$",
                  "reason": "Adding the same number: $a_0^2 = 49$ is added to both sides, and $49 + 32 = 81$."
                },
                {
                  "step": "$a_n^2 \\ge 49$",
                  "reason": "Powers and roots of positive numbers keep the order: both sides of line 6 are squared, and $7^2 = 49$."
                },
                {
                  "step": "$\\dfrac{4}{a_n^2} \\le \\dfrac{4}{49}$",
                  "reason": "Reciprocals of numbers of the same sign reverse the order: by line 13, under the same positive top the greater positive bottom gives the smaller fraction."
                },
                {
                  "step": "$a_{n+1}^2 - a_n^2 \\le 4 + \\dfrac{4}{49}$",
                  "reason": "Adding the same number: $4$ is added to both sides of line 14, and the left side is then the difference of line 9."
                },
                {
                  "step": "$a_8^2 - a_0^2 \\le 32 + \\dfrac{32}{49}$",
                  "reason": "Telescoping bound: line 15 for $n = 0, 1, \\dots, 7$ gives $8$ differences, each at most $4 + \\dfrac{4}{49}$, and $8$ times that is $32 + \\dfrac{32}{49}$."
                },
                {
                  "step": "$a_8^2 \\le 81 + \\dfrac{32}{49}$",
                  "reason": "Adding the same number: $a_0^2 = 49$ is added to both sides."
                },
                {
                  "step": "$a_8^2 < 100$",
                  "reason": "Transitivity: $\\dfrac{32}{49}$ is below $19$, and $81 + 19 = 100$."
                },
                {
                  "step": "$9 < a_8 < 10$",
                  "reason": "Powers and roots of positive numbers keep the order: by lines 12 and 18, $9^2 < a_8^2 < 10^2$, and $a_8$ is positive by line 6."
                },
                {
                  "step": "$\\left\\lfloor a_8 \\right\\rfloor = 9$",
                  "reason": "Floor: the floor of a number $x$ is the whole number $j$ with $j \\le x < j + 1$."
                }
              ]
            },
            {
              "prompt": "Find $\\left\\lfloor a_{28} \\right\\rfloor$, where $a_0 = 13$ and $a_{n+1} = a_n + \\dfrac{1}{a_n}$ for every whole number $n$.",
              "form": "Answer as an integer.",
              "answer": "15",
              "lines": [
                {
                  "step": "Find $\\left\\lfloor a_{28} \\right\\rfloor$, where $a_0 = 13$ and $a_{n+1} = a_n + \\dfrac{1}{a_n}$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
                },
                {
                  "step": "$a_0 \\ge 13$",
                  "reason": "Base case: $a_0 = 13$; this is the claim $a_n \\ge 13$ at $n = 0$."
                },
                {
                  "step": "Assume that $a_k \\ge 13$ for some whole number $k$.",
                  "reason": "Inductive assumption: the claim at $k$."
                },
                {
                  "step": "$a_{k+1} > a_k$",
                  "reason": "Adding the same number: by line 3 the number $a_k$ is positive, so $\\dfrac{1}{a_k}$ is positive, and $a_k$ is added to both sides of $\\dfrac{1}{a_k} > 0$; the left side is then $a_{k+1}$."
                },
                {
                  "step": "So $a_{k+1} \\ge 13$.",
                  "reason": "Inductive step: by lines 4 and 3, $a_{k+1} > a_k \\ge 13$; this is the claim at $k + 1$."
                },
                {
                  "step": "So $a_n \\ge 13$ for every whole number $n$.",
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
                  "step": "$a_{28}^2 - a_0^2 > 56$",
                  "reason": "Telescoping bound: line 10 for $n = 0, 1, \\dots, 27$ gives $28$ differences, each above $2$, and $28 \\cdot 2 = 56$."
                },
                {
                  "step": "$a_{28}^2 > 225$",
                  "reason": "Adding the same number: $a_0^2 = 169$ is added to both sides, and $169 + 56 = 225$."
                },
                {
                  "step": "$a_n^2 \\ge 169$",
                  "reason": "Powers and roots of positive numbers keep the order: both sides of line 6 are squared, and $13^2 = 169$."
                },
                {
                  "step": "$\\dfrac{1}{a_n^2} \\le \\dfrac{1}{169}$",
                  "reason": "Reciprocals of numbers of the same sign reverse the order: by line 13, under the same positive top the greater positive bottom gives the smaller fraction."
                },
                {
                  "step": "$a_{n+1}^2 - a_n^2 \\le 2 + \\dfrac{1}{169}$",
                  "reason": "Adding the same number: $2$ is added to both sides of line 14, and the left side is then the difference of line 9."
                },
                {
                  "step": "$a_{28}^2 - a_0^2 \\le 56 + \\dfrac{28}{169}$",
                  "reason": "Telescoping bound: line 15 for $n = 0, 1, \\dots, 27$ gives $28$ differences, each at most $2 + \\dfrac{1}{169}$, and $28$ times that is $56 + \\dfrac{28}{169}$."
                },
                {
                  "step": "$a_{28}^2 \\le 225 + \\dfrac{28}{169}$",
                  "reason": "Adding the same number: $a_0^2 = 169$ is added to both sides."
                },
                {
                  "step": "$a_{28}^2 < 256$",
                  "reason": "Transitivity: $\\dfrac{28}{169}$ is below $31$, and $225 + 31 = 256$."
                },
                {
                  "step": "$15 < a_{28} < 16$",
                  "reason": "Powers and roots of positive numbers keep the order: by lines 12 and 18, $15^2 < a_{28}^2 < 16^2$, and $a_{28}$ is positive by line 6."
                },
                {
                  "step": "$\\left\\lfloor a_{28} \\right\\rfloor = 15$",
                  "reason": "Floor: the floor of a number $x$ is the whole number $j$ with $j \\le x < j + 1$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $\\left\\lfloor \\dfrac{1}{a_6} \\right\\rfloor$, where $a_0 = \\dfrac{1}{182}$ and $a_{n+1} = a_n - 5a_n^2$ for every whole number $n$.",
            "lines": [
              {
                "step": "Find $\\left\\lfloor \\dfrac{1}{a_6} \\right\\rfloor$, where $a_0 = \\dfrac{1}{182}$ and $a_{n+1} = a_n - 5a_n^2$ for every whole number $n$.",
                "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
              },
              {
                "step": "$0 < a_0 \\le \\dfrac{1}{182}$",
                "reason": "Base case: $a_0 = \\dfrac{1}{182}$; this is the claim $0 < a_n \\le \\dfrac{1}{182}$ at $n = 0$."
              },
              {
                "step": "Assume that $0 < a_k \\le \\dfrac{1}{182}$ for some whole number $k$.",
                "reason": "Inductive assumption: the claim at $k$."
              },
              {
                "step": "$a_{k+1} = a_k(1 - 5a_k)$",
                "reason": "Common factor: $a_k$ is taken out of $a_k - 5a_k^2$."
              },
              {
                "step": "$-\\dfrac{5}{182} \\le -5a_k < 0$",
                "reason": "Multiplying by a negative number reverses the sign: the two parts of line 3 are multiplied by $-5$."
              },
              {
                "step": "$\\dfrac{177}{182} \\le 1 - 5a_k < 1$",
                "reason": "Adding the same number: $1$ is added to each part of line 5, and $1 - \\dfrac{5}{182} = \\dfrac{177}{182}$."
              },
              {
                "step": "$0 < a_{k+1} < a_k$",
                "reason": "Multiplying by a positive number: by line 6, $0 < 1 - 5a_k < 1$, and each part is multiplied by $a_k$, which is positive by line 3; the middle is then $a_{k+1}$ by line 4."
              },
              {
                "step": "So $0 < a_{k+1} \\le \\dfrac{1}{182}$.",
                "reason": "Inductive step: by lines 7 and 3, $a_{k+1} < a_k \\le \\dfrac{1}{182}$; this is the claim at $k + 1$."
              },
              {
                "step": "So $0 < a_n \\le \\dfrac{1}{182}$ for every whole number $n$.",
                "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 8."
              },
              {
                "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{1}{a_n(1 - 5a_n)}$",
                "reason": "Reciprocal, from arithmetic: equal numbers that are not $0$ have equal reciprocals; lines 4 and 6 hold for every whole number in place of $k$ by line 9, so both sides of $a_{n+1} = a_n(1 - 5a_n)$ are positive."
              },
              {
                "step": "$\\dfrac{1}{a_n(1 - 5a_n)} = \\dfrac{1}{a_n} + \\dfrac{5}{1 - 5a_n}$",
                "reason": "Partial fractions: over the common bottom $a_n(1 - 5a_n)$ the right side has the top $(1 - 5a_n) + 5a_n$, which is $1$."
              },
              {
                "step": "$\\dfrac{1}{a_{n+1}} - \\dfrac{1}{a_n} = \\dfrac{5}{1 - 5a_n}$",
                "reason": "Adding the same number to both sides: by lines 10 and 11, with $\\dfrac{1}{a_n}$ taken from both sides."
              },
              {
                "step": "$5 < \\dfrac{5}{1 - 5a_n} \\le \\dfrac{910}{177}$",
                "reason": "Reciprocals of numbers of the same sign reverse the order: by line 6, which holds for every whole number in place of $k$ by line 9, the bottom is at least $\\dfrac{177}{182}$ and below $1$, and $5$ divided by $\\dfrac{177}{182}$ is $\\dfrac{910}{177}$."
              },
              {
                "step": "$\\dfrac{1}{a_6} - \\dfrac{1}{a_0} > 30$",
                "reason": "Telescoping bound: line 12 for $n = 0, 1, \\dots, 5$ gives $6$ differences, each above $5$ by line 13, and $6 \\cdot 5 = 30$."
              },
              {
                "step": "$\\dfrac{1}{a_6} - \\dfrac{1}{a_0} \\le 30 + \\dfrac{50}{59}$",
                "reason": "Telescoping bound: the same $6$ differences are each at most $\\dfrac{910}{177}$ by line 13, and $6 \\cdot \\dfrac{910}{177} = 30 + \\dfrac{50}{59}$."
              },
              {
                "step": "$212 < \\dfrac{1}{a_6} \\le 212 + \\dfrac{50}{59}$",
                "reason": "Adding the same number: $\\dfrac{1}{a_0} = 182$ is added to both sides of lines 14 and 15, and $182 + 30 = 212$."
              },
              {
                "step": "$212 < \\dfrac{1}{a_6} < 213$",
                "reason": "Transitivity: $\\dfrac{50}{59}$ is below $1$."
              },
              {
                "step": "$\\left\\lfloor \\dfrac{1}{a_6} \\right\\rfloor = 212$",
                "reason": "Floor: the floor of a number $x$ is the whole number $j$ with $j \\le x < j + 1$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $\\left\\lfloor \\dfrac{1}{a_3} \\right\\rfloor$, where $a_0 = \\dfrac{1}{141}$ and $a_{n+1} = a_n - 4a_n^2$ for every whole number $n$.",
              "form": "Answer as an integer.",
              "answer": "153",
              "lines": [
                {
                  "step": "Find $\\left\\lfloor \\dfrac{1}{a_3} \\right\\rfloor$, where $a_0 = \\dfrac{1}{141}$ and $a_{n+1} = a_n - 4a_n^2$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
                },
                {
                  "step": "$0 < a_0 \\le \\dfrac{1}{141}$",
                  "reason": "Base case: $a_0 = \\dfrac{1}{141}$; this is the claim $0 < a_n \\le \\dfrac{1}{141}$ at $n = 0$."
                },
                {
                  "step": "Assume that $0 < a_k \\le \\dfrac{1}{141}$ for some whole number $k$.",
                  "reason": "Inductive assumption: the claim at $k$."
                },
                {
                  "step": "$a_{k+1} = a_k(1 - 4a_k)$",
                  "reason": "Common factor: $a_k$ is taken out of $a_k - 4a_k^2$."
                },
                {
                  "step": "$-\\dfrac{4}{141} \\le -4a_k < 0$",
                  "reason": "Multiplying by a negative number reverses the sign: the two parts of line 3 are multiplied by $-4$."
                },
                {
                  "step": "$\\dfrac{137}{141} \\le 1 - 4a_k < 1$",
                  "reason": "Adding the same number: $1$ is added to each part of line 5, and $1 - \\dfrac{4}{141} = \\dfrac{137}{141}$."
                },
                {
                  "step": "$0 < a_{k+1} < a_k$",
                  "reason": "Multiplying by a positive number: by line 6, $0 < 1 - 4a_k < 1$, and each part is multiplied by $a_k$, which is positive by line 3; the middle is then $a_{k+1}$ by line 4."
                },
                {
                  "step": "So $0 < a_{k+1} \\le \\dfrac{1}{141}$.",
                  "reason": "Inductive step: by lines 7 and 3, $a_{k+1} < a_k \\le \\dfrac{1}{141}$; this is the claim at $k + 1$."
                },
                {
                  "step": "So $0 < a_n \\le \\dfrac{1}{141}$ for every whole number $n$.",
                  "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 8."
                },
                {
                  "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{1}{a_n(1 - 4a_n)}$",
                  "reason": "Reciprocal, from arithmetic: equal numbers that are not $0$ have equal reciprocals; lines 4 and 6 hold for every whole number in place of $k$ by line 9, so both sides of $a_{n+1} = a_n(1 - 4a_n)$ are positive."
                },
                {
                  "step": "$\\dfrac{1}{a_n(1 - 4a_n)} = \\dfrac{1}{a_n} + \\dfrac{4}{1 - 4a_n}$",
                  "reason": "Partial fractions: over the common bottom $a_n(1 - 4a_n)$ the right side has the top $(1 - 4a_n) + 4a_n$, which is $1$."
                },
                {
                  "step": "$\\dfrac{1}{a_{n+1}} - \\dfrac{1}{a_n} = \\dfrac{4}{1 - 4a_n}$",
                  "reason": "Adding the same number to both sides: by lines 10 and 11, with $\\dfrac{1}{a_n}$ taken from both sides."
                },
                {
                  "step": "$4 < \\dfrac{4}{1 - 4a_n} \\le \\dfrac{564}{137}$",
                  "reason": "Reciprocals of numbers of the same sign reverse the order: by line 6, which holds for every whole number in place of $k$ by line 9, the bottom is at least $\\dfrac{137}{141}$ and below $1$, and $4$ divided by $\\dfrac{137}{141}$ is $\\dfrac{564}{137}$."
                },
                {
                  "step": "$\\dfrac{1}{a_3} - \\dfrac{1}{a_0} > 12$",
                  "reason": "Telescoping bound: line 12 for $n = 0, 1, \\dots, 2$ gives $3$ differences, each above $4$ by line 13, and $3 \\cdot 4 = 12$."
                },
                {
                  "step": "$\\dfrac{1}{a_3} - \\dfrac{1}{a_0} \\le 12 + \\dfrac{48}{137}$",
                  "reason": "Telescoping bound: the same $3$ differences are each at most $\\dfrac{564}{137}$ by line 13, and $3 \\cdot \\dfrac{564}{137} = 12 + \\dfrac{48}{137}$."
                },
                {
                  "step": "$153 < \\dfrac{1}{a_3} \\le 153 + \\dfrac{48}{137}$",
                  "reason": "Adding the same number: $\\dfrac{1}{a_0} = 141$ is added to both sides of lines 14 and 15, and $141 + 12 = 153$."
                },
                {
                  "step": "$153 < \\dfrac{1}{a_3} < 154$",
                  "reason": "Transitivity: $\\dfrac{48}{137}$ is below $1$."
                },
                {
                  "step": "$\\left\\lfloor \\dfrac{1}{a_3} \\right\\rfloor = 153$",
                  "reason": "Floor: the floor of a number $x$ is the whole number $j$ with $j \\le x < j + 1$."
                }
              ]
            },
            {
              "prompt": "Find $\\left\\lfloor \\dfrac{1}{a_3} \\right\\rfloor$, where $a_0 = \\dfrac{1}{223}$ and $a_{n+1} = a_n - 5a_n^2$ for every whole number $n$.",
              "form": "Answer as an integer.",
              "answer": "238",
              "lines": [
                {
                  "step": "Find $\\left\\lfloor \\dfrac{1}{a_3} \\right\\rfloor$, where $a_0 = \\dfrac{1}{223}$ and $a_{n+1} = a_n - 5a_n^2$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
                },
                {
                  "step": "$0 < a_0 \\le \\dfrac{1}{223}$",
                  "reason": "Base case: $a_0 = \\dfrac{1}{223}$; this is the claim $0 < a_n \\le \\dfrac{1}{223}$ at $n = 0$."
                },
                {
                  "step": "Assume that $0 < a_k \\le \\dfrac{1}{223}$ for some whole number $k$.",
                  "reason": "Inductive assumption: the claim at $k$."
                },
                {
                  "step": "$a_{k+1} = a_k(1 - 5a_k)$",
                  "reason": "Common factor: $a_k$ is taken out of $a_k - 5a_k^2$."
                },
                {
                  "step": "$-\\dfrac{5}{223} \\le -5a_k < 0$",
                  "reason": "Multiplying by a negative number reverses the sign: the two parts of line 3 are multiplied by $-5$."
                },
                {
                  "step": "$\\dfrac{218}{223} \\le 1 - 5a_k < 1$",
                  "reason": "Adding the same number: $1$ is added to each part of line 5, and $1 - \\dfrac{5}{223} = \\dfrac{218}{223}$."
                },
                {
                  "step": "$0 < a_{k+1} < a_k$",
                  "reason": "Multiplying by a positive number: by line 6, $0 < 1 - 5a_k < 1$, and each part is multiplied by $a_k$, which is positive by line 3; the middle is then $a_{k+1}$ by line 4."
                },
                {
                  "step": "So $0 < a_{k+1} \\le \\dfrac{1}{223}$.",
                  "reason": "Inductive step: by lines 7 and 3, $a_{k+1} < a_k \\le \\dfrac{1}{223}$; this is the claim at $k + 1$."
                },
                {
                  "step": "So $0 < a_n \\le \\dfrac{1}{223}$ for every whole number $n$.",
                  "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 8."
                },
                {
                  "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{1}{a_n(1 - 5a_n)}$",
                  "reason": "Reciprocal, from arithmetic: equal numbers that are not $0$ have equal reciprocals; lines 4 and 6 hold for every whole number in place of $k$ by line 9, so both sides of $a_{n+1} = a_n(1 - 5a_n)$ are positive."
                },
                {
                  "step": "$\\dfrac{1}{a_n(1 - 5a_n)} = \\dfrac{1}{a_n} + \\dfrac{5}{1 - 5a_n}$",
                  "reason": "Partial fractions: over the common bottom $a_n(1 - 5a_n)$ the right side has the top $(1 - 5a_n) + 5a_n$, which is $1$."
                },
                {
                  "step": "$\\dfrac{1}{a_{n+1}} - \\dfrac{1}{a_n} = \\dfrac{5}{1 - 5a_n}$",
                  "reason": "Adding the same number to both sides: by lines 10 and 11, with $\\dfrac{1}{a_n}$ taken from both sides."
                },
                {
                  "step": "$5 < \\dfrac{5}{1 - 5a_n} \\le \\dfrac{1115}{218}$",
                  "reason": "Reciprocals of numbers of the same sign reverse the order: by line 6, which holds for every whole number in place of $k$ by line 9, the bottom is at least $\\dfrac{218}{223}$ and below $1$, and $5$ divided by $\\dfrac{218}{223}$ is $\\dfrac{1115}{218}$."
                },
                {
                  "step": "$\\dfrac{1}{a_3} - \\dfrac{1}{a_0} > 15$",
                  "reason": "Telescoping bound: line 12 for $n = 0, 1, \\dots, 2$ gives $3$ differences, each above $5$ by line 13, and $3 \\cdot 5 = 15$."
                },
                {
                  "step": "$\\dfrac{1}{a_3} - \\dfrac{1}{a_0} \\le 15 + \\dfrac{75}{218}$",
                  "reason": "Telescoping bound: the same $3$ differences are each at most $\\dfrac{1115}{218}$ by line 13, and $3 \\cdot \\dfrac{1115}{218} = 15 + \\dfrac{75}{218}$."
                },
                {
                  "step": "$238 < \\dfrac{1}{a_3} \\le 238 + \\dfrac{75}{218}$",
                  "reason": "Adding the same number: $\\dfrac{1}{a_0} = 223$ is added to both sides of lines 14 and 15, and $223 + 15 = 238$."
                },
                {
                  "step": "$238 < \\dfrac{1}{a_3} < 239$",
                  "reason": "Transitivity: $\\dfrac{75}{218}$ is below $1$."
                },
                {
                  "step": "$\\left\\lfloor \\dfrac{1}{a_3} \\right\\rfloor = 238$",
                  "reason": "Floor: the floor of a number $x$ is the whole number $j$ with $j \\le x < j + 1$."
                }
              ]
            },
            {
              "prompt": "Find $\\left\\lfloor \\dfrac{1}{a_8} \\right\\rfloor$, where $a_0 = \\dfrac{1}{259}$ and $a_{n+1} = a_n - 4a_n^2$ for every whole number $n$.",
              "form": "Answer as an integer.",
              "answer": "291",
              "lines": [
                {
                  "step": "Find $\\left\\lfloor \\dfrac{1}{a_8} \\right\\rfloor$, where $a_0 = \\dfrac{1}{259}$ and $a_{n+1} = a_n - 4a_n^2$ for every whole number $n$.",
                  "reason": "Recursion: this is the problem as given; $a_0$ starts the sequence and each term gives the next."
                },
                {
                  "step": "$0 < a_0 \\le \\dfrac{1}{259}$",
                  "reason": "Base case: $a_0 = \\dfrac{1}{259}$; this is the claim $0 < a_n \\le \\dfrac{1}{259}$ at $n = 0$."
                },
                {
                  "step": "Assume that $0 < a_k \\le \\dfrac{1}{259}$ for some whole number $k$.",
                  "reason": "Inductive assumption: the claim at $k$."
                },
                {
                  "step": "$a_{k+1} = a_k(1 - 4a_k)$",
                  "reason": "Common factor: $a_k$ is taken out of $a_k - 4a_k^2$."
                },
                {
                  "step": "$-\\dfrac{4}{259} \\le -4a_k < 0$",
                  "reason": "Multiplying by a negative number reverses the sign: the two parts of line 3 are multiplied by $-4$."
                },
                {
                  "step": "$\\dfrac{255}{259} \\le 1 - 4a_k < 1$",
                  "reason": "Adding the same number: $1$ is added to each part of line 5, and $1 - \\dfrac{4}{259} = \\dfrac{255}{259}$."
                },
                {
                  "step": "$0 < a_{k+1} < a_k$",
                  "reason": "Multiplying by a positive number: by line 6, $0 < 1 - 4a_k < 1$, and each part is multiplied by $a_k$, which is positive by line 3; the middle is then $a_{k+1}$ by line 4."
                },
                {
                  "step": "So $0 < a_{k+1} \\le \\dfrac{1}{259}$.",
                  "reason": "Inductive step: by lines 7 and 3, $a_{k+1} < a_k \\le \\dfrac{1}{259}$; this is the claim at $k + 1$."
                },
                {
                  "step": "So $0 < a_n \\le \\dfrac{1}{259}$ for every whole number $n$.",
                  "reason": "Induction: the base case is line 2 and the inductive step is lines 3 to 8."
                },
                {
                  "step": "$\\dfrac{1}{a_{n+1}} = \\dfrac{1}{a_n(1 - 4a_n)}$",
                  "reason": "Reciprocal, from arithmetic: equal numbers that are not $0$ have equal reciprocals; lines 4 and 6 hold for every whole number in place of $k$ by line 9, so both sides of $a_{n+1} = a_n(1 - 4a_n)$ are positive."
                },
                {
                  "step": "$\\dfrac{1}{a_n(1 - 4a_n)} = \\dfrac{1}{a_n} + \\dfrac{4}{1 - 4a_n}$",
                  "reason": "Partial fractions: over the common bottom $a_n(1 - 4a_n)$ the right side has the top $(1 - 4a_n) + 4a_n$, which is $1$."
                },
                {
                  "step": "$\\dfrac{1}{a_{n+1}} - \\dfrac{1}{a_n} = \\dfrac{4}{1 - 4a_n}$",
                  "reason": "Adding the same number to both sides: by lines 10 and 11, with $\\dfrac{1}{a_n}$ taken from both sides."
                },
                {
                  "step": "$4 < \\dfrac{4}{1 - 4a_n} \\le \\dfrac{1036}{255}$",
                  "reason": "Reciprocals of numbers of the same sign reverse the order: by line 6, which holds for every whole number in place of $k$ by line 9, the bottom is at least $\\dfrac{255}{259}$ and below $1$, and $4$ divided by $\\dfrac{255}{259}$ is $\\dfrac{1036}{255}$."
                },
                {
                  "step": "$\\dfrac{1}{a_8} - \\dfrac{1}{a_0} > 32$",
                  "reason": "Telescoping bound: line 12 for $n = 0, 1, \\dots, 7$ gives $8$ differences, each above $4$ by line 13, and $8 \\cdot 4 = 32$."
                },
                {
                  "step": "$\\dfrac{1}{a_8} - \\dfrac{1}{a_0} \\le 32 + \\dfrac{128}{255}$",
                  "reason": "Telescoping bound: the same $8$ differences are each at most $\\dfrac{1036}{255}$ by line 13, and $8 \\cdot \\dfrac{1036}{255} = 32 + \\dfrac{128}{255}$."
                },
                {
                  "step": "$291 < \\dfrac{1}{a_8} \\le 291 + \\dfrac{128}{255}$",
                  "reason": "Adding the same number: $\\dfrac{1}{a_0} = 259$ is added to both sides of lines 14 and 15, and $259 + 32 = 291$."
                },
                {
                  "step": "$291 < \\dfrac{1}{a_8} < 292$",
                  "reason": "Transitivity: $\\dfrac{128}{255}$ is below $1$."
                },
                {
                  "step": "$\\left\\lfloor \\dfrac{1}{a_8} \\right\\rfloor = 291$",
                  "reason": "Floor: the floor of a number $x$ is the whole number $j$ with $j \\le x < j + 1$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t244-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the least value that $a_1 + 2a_2 + 3a_3 + \\dots + 11a_{11}$ can take, where $a_1, a_2, \\dots, a_{12}$ are numbers with $a_1 = 8$ and $|a_{k+1}| = |a_k + k|$ for $k = 1, 2, \\dots, 11$.",
            "lines": [
              {
                "step": "Find the least value that $a_1 + 2a_2 + 3a_3 + \\dots + 11a_{11}$ can take, where $a_1, a_2, \\dots, a_{12}$ are numbers with $a_1 = 8$ and $|a_{k+1}| = |a_k + k|$ for $k = 1, 2, \\dots, 11$.",
                "reason": "Absolute value, from arithmetic: this is the problem as given; each term fixes the size of the next term and leaves its sign open."
              },
              {
                "step": "For $k = 1, 2, \\dots, 11$, $a_{k+1}^2 = (a_k + k)^2$.",
                "reason": "The rule $|x|^2 = x^2$: both sides of $|a_{k+1}| = |a_k + k|$ are squared."
              },
              {
                "step": "$a_{k+1}^2 = a_k^2 + 2ka_k + k^2$",
                "reason": "Square of a binomial: twice the product of $a_k$ and $k$ is $2ka_k$."
              },
              {
                "step": "$a_{k+1}^2 - a_k^2 = 2ka_k + k^2$",
                "reason": "Adding the same number to both sides: $a_k^2$ is taken from both sides."
              },
              {
                "step": "$\\left(a_2^2 - a_1^2\\right) + \\left(a_3^2 - a_2^2\\right) + \\dots + \\left(a_{12}^2 - a_{11}^2\\right) = 2\\left(a_1 + 2a_2 + 3a_3 + \\dots + 11a_{11}\\right) + \\left(1^2 + 2^2 + \\dots + 11^2\\right)$",
                "reason": "Adding two equations: line 4 for $k = 1, 2, \\dots, 11$, the $11$ equations added, with the common factor $2$ taken out of the terms in $a_k$."
              },
              {
                "step": "$a_{12}^2 - a_1^2 = 2\\left(a_1 + 2a_2 + 3a_3 + \\dots + 11a_{11}\\right) + \\left(1^2 + 2^2 + \\dots + 11^2\\right)$",
                "reason": "Telescoping sum: each square taken away is added back in the next bracket, so the last and the first are left."
              },
              {
                "step": "$1^2 + 2^2 + \\dots + 11^2 = \\dfrac{11 \\cdot 12 \\cdot 23}{6} = 506$",
                "reason": "Sum of squares: with $n = 11$."
              },
              {
                "step": "$a_{12}^2 - 64 = 2\\left(a_1 + 2a_2 + 3a_3 + \\dots + 11a_{11}\\right) + 506$",
                "reason": "Substituting a value: $a_1 = 8$ and line 7 go into line 6, with $8^2 = 64$."
              },
              {
                "step": "$a_{12}^2 \\ge 0$",
                "reason": "Trivial Inequality: the square of a real number is at least $0$."
              },
              {
                "step": "$a_{12}^2 = 2\\left(a_1 + 2a_2 + 3a_3 + \\dots + 11a_{11}\\right) + 570$",
                "reason": "Adding the same number to both sides: $64$ is added to both sides of line 8, and $506 + 64 = 570$."
              },
              {
                "step": "$2\\left(a_1 + 2a_2 + 3a_3 + \\dots + 11a_{11}\\right) + 570 \\ge 0$",
                "reason": "Substituting a value: line 10 goes into line 9."
              },
              {
                "step": "$2\\left(a_1 + 2a_2 + 3a_3 + \\dots + 11a_{11}\\right) \\ge -570$",
                "reason": "Adding the same number: $570$ is taken from both sides."
              },
              {
                "step": "$a_1 + 2a_2 + 3a_3 + \\dots + 11a_{11} \\ge -285$",
                "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{2}$, and $570 = 2 \\cdot 285$."
              },
              {
                "step": "The numbers $8$, $9$, $11$, $-14$, $10$, $-15$, $9$, $-16$, $-8$, $1$, $-11$, $0$, taken in this order as $a_1, a_2, \\dots, a_{12}$, meet the conditions, and for them $a_1 + 2a_2 + 3a_3 + \\dots + 11a_{11} = -285$.",
                "reason": "Attaining the bound: for $k = 1, 2, \\dots, 11$ the number $a_{k+1}$ is $a_k + k$ or its negative, so the conditions hold; and with $a_{12} = 0$ line 10 reads $0 = 2\\left(a_1 + 2a_2 + 3a_3 + \\dots + 11a_{11}\\right) + 570$, which gives the bound."
              },
              {
                "step": "The least value is $-285$.",
                "reason": "Attaining the bound: a bound that is reached is the least value."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the least value that $a_1 + 2a_2 + 3a_3 + \\dots + 12a_{12}$ can take, where $a_1, a_2, \\dots, a_{13}$ are numbers with $a_1 = 6$ and $|a_{k+1}| = |a_k + 3k|$ for $k = 1, 2, \\dots, 12$.",
              "form": "Answer as an integer.",
              "answer": "-981",
              "lines": [
                {
                  "step": "Find the least value that $a_1 + 2a_2 + 3a_3 + \\dots + 12a_{12}$ can take, where $a_1, a_2, \\dots, a_{13}$ are numbers with $a_1 = 6$ and $|a_{k+1}| = |a_k + 3k|$ for $k = 1, 2, \\dots, 12$.",
                  "reason": "Absolute value, from arithmetic: this is the problem as given; each term fixes the size of the next term and leaves its sign open."
                },
                {
                  "step": "For $k = 1, 2, \\dots, 12$, $a_{k+1}^2 = (a_k + 3k)^2$.",
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
                  "step": "$\\left(a_2^2 - a_1^2\\right) + \\left(a_3^2 - a_2^2\\right) + \\dots + \\left(a_{13}^2 - a_{12}^2\\right) = 6\\left(a_1 + 2a_2 + 3a_3 + \\dots + 12a_{12}\\right) + 9\\left(1^2 + 2^2 + \\dots + 12^2\\right)$",
                  "reason": "Adding two equations: line 4 for $k = 1, 2, \\dots, 12$, the $12$ equations added, with the common factor $6$ taken out of the terms in $a_k$ and $9$ out of the squares."
                },
                {
                  "step": "$a_{13}^2 - a_1^2 = 6\\left(a_1 + 2a_2 + 3a_3 + \\dots + 12a_{12}\\right) + 9\\left(1^2 + 2^2 + \\dots + 12^2\\right)$",
                  "reason": "Telescoping sum: each square taken away is added back in the next bracket, so the last and the first are left."
                },
                {
                  "step": "$1^2 + 2^2 + \\dots + 12^2 = \\dfrac{12 \\cdot 13 \\cdot 25}{6} = 650$",
                  "reason": "Sum of squares: with $n = 12$."
                },
                {
                  "step": "$a_{13}^2 - 36 = 6\\left(a_1 + 2a_2 + 3a_3 + \\dots + 12a_{12}\\right) + 5850$",
                  "reason": "Substituting a value: $a_1 = 6$ and line 7 go into line 6, with $6^2 = 36$ and $9 \\cdot 650 = 5850$."
                },
                {
                  "step": "$a_{13}^2 \\ge 0$",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$."
                },
                {
                  "step": "$a_{13}^2 = 6\\left(a_1 + 2a_2 + 3a_3 + \\dots + 12a_{12}\\right) + 5886$",
                  "reason": "Adding the same number to both sides: $36$ is added to both sides of line 8, and $5850 + 36 = 5886$."
                },
                {
                  "step": "$6\\left(a_1 + 2a_2 + 3a_3 + \\dots + 12a_{12}\\right) + 5886 \\ge 0$",
                  "reason": "Substituting a value: line 10 goes into line 9."
                },
                {
                  "step": "$6\\left(a_1 + 2a_2 + 3a_3 + \\dots + 12a_{12}\\right) \\ge -5886$",
                  "reason": "Adding the same number: $5886$ is taken from both sides."
                },
                {
                  "step": "$a_1 + 2a_2 + 3a_3 + \\dots + 12a_{12} \\ge -981$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{6}$, and $5886 = 6 \\cdot 981$."
                },
                {
                  "step": "The numbers $6$, $9$, $-15$, $-6$, $-6$, $9$, $27$, $48$, $72$, $-99$, $-69$, $-36$, $0$, taken in this order as $a_1, a_2, \\dots, a_{13}$, meet the conditions, and for them $a_1 + 2a_2 + 3a_3 + \\dots + 12a_{12} = -981$.",
                  "reason": "Attaining the bound: for $k = 1, 2, \\dots, 12$ the number $a_{k+1}$ is $a_k + 3k$ or its negative, so the conditions hold; and with $a_{13} = 0$ line 10 reads $0 = 6\\left(a_1 + 2a_2 + 3a_3 + \\dots + 12a_{12}\\right) + 5886$, which gives the bound."
                },
                {
                  "step": "The least value is $-981$.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            },
            {
              "prompt": "Find the least value that $a_1 + 2a_2 + 3a_3 + \\dots + 8a_8$ can take, where $a_1, a_2, \\dots, a_9$ are numbers with $a_1 = 16$ and $|a_{k+1}| = |a_k + 4k|$ for $k = 1, 2, \\dots, 8$.",
              "form": "Answer as an integer.",
              "answer": "-440",
              "lines": [
                {
                  "step": "Find the least value that $a_1 + 2a_2 + 3a_3 + \\dots + 8a_8$ can take, where $a_1, a_2, \\dots, a_9$ are numbers with $a_1 = 16$ and $|a_{k+1}| = |a_k + 4k|$ for $k = 1, 2, \\dots, 8$.",
                  "reason": "Absolute value, from arithmetic: this is the problem as given; each term fixes the size of the next term and leaves its sign open."
                },
                {
                  "step": "For $k = 1, 2, \\dots, 8$, $a_{k+1}^2 = (a_k + 4k)^2$.",
                  "reason": "The rule $|x|^2 = x^2$: both sides of $|a_{k+1}| = |a_k + 4k|$ are squared."
                },
                {
                  "step": "$a_{k+1}^2 = a_k^2 + 8ka_k + 16k^2$",
                  "reason": "Square of a binomial: twice the product of $a_k$ and $4k$ is $8ka_k$."
                },
                {
                  "step": "$a_{k+1}^2 - a_k^2 = 8ka_k + 16k^2$",
                  "reason": "Adding the same number to both sides: $a_k^2$ is taken from both sides."
                },
                {
                  "step": "$\\left(a_2^2 - a_1^2\\right) + \\left(a_3^2 - a_2^2\\right) + \\dots + \\left(a_9^2 - a_8^2\\right) = 8\\left(a_1 + 2a_2 + 3a_3 + \\dots + 8a_8\\right) + 16\\left(1^2 + 2^2 + \\dots + 8^2\\right)$",
                  "reason": "Adding two equations: line 4 for $k = 1, 2, \\dots, 8$, the $8$ equations added, with the common factor $8$ taken out of the terms in $a_k$ and $16$ out of the squares."
                },
                {
                  "step": "$a_9^2 - a_1^2 = 8\\left(a_1 + 2a_2 + 3a_3 + \\dots + 8a_8\\right) + 16\\left(1^2 + 2^2 + \\dots + 8^2\\right)$",
                  "reason": "Telescoping sum: each square taken away is added back in the next bracket, so the last and the first are left."
                },
                {
                  "step": "$1^2 + 2^2 + \\dots + 8^2 = \\dfrac{8 \\cdot 9 \\cdot 17}{6} = 204$",
                  "reason": "Sum of squares: with $n = 8$."
                },
                {
                  "step": "$a_9^2 - 256 = 8\\left(a_1 + 2a_2 + 3a_3 + \\dots + 8a_8\\right) + 3264$",
                  "reason": "Substituting a value: $a_1 = 16$ and line 7 go into line 6, with $16^2 = 256$ and $16 \\cdot 204 = 3264$."
                },
                {
                  "step": "$a_9^2 \\ge 0$",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$."
                },
                {
                  "step": "$a_9^2 = 8\\left(a_1 + 2a_2 + 3a_3 + \\dots + 8a_8\\right) + 3520$",
                  "reason": "Adding the same number to both sides: $256$ is added to both sides of line 8, and $3264 + 256 = 3520$."
                },
                {
                  "step": "$8\\left(a_1 + 2a_2 + 3a_3 + \\dots + 8a_8\\right) + 3520 \\ge 0$",
                  "reason": "Substituting a value: line 10 goes into line 9."
                },
                {
                  "step": "$8\\left(a_1 + 2a_2 + 3a_3 + \\dots + 8a_8\\right) \\ge -3520$",
                  "reason": "Adding the same number: $3520$ is taken from both sides."
                },
                {
                  "step": "$a_1 + 2a_2 + 3a_3 + \\dots + 8a_8 \\ge -440$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{8}$, and $3520 = 8 \\cdot 440$."
                },
                {
                  "step": "The numbers $16$, $20$, $28$, $40$, $-56$, $36$, $-60$, $-32$, $0$, taken in this order as $a_1, a_2, \\dots, a_9$, meet the conditions, and for them $a_1 + 2a_2 + 3a_3 + \\dots + 8a_8 = -440$.",
                  "reason": "Attaining the bound: for $k = 1, 2, \\dots, 8$ the number $a_{k+1}$ is $a_k + 4k$ or its negative, so the conditions hold; and with $a_9 = 0$ line 10 reads $0 = 8\\left(a_1 + 2a_2 + 3a_3 + \\dots + 8a_8\\right) + 3520$, which gives the bound."
                },
                {
                  "step": "The least value is $-440$.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            },
            {
              "prompt": "Find the least value that $a_1 + 2a_2 + 3a_3 + \\dots + 10a_{10}$ can take, where $a_1, a_2, \\dots, a_{11}$ are numbers with $a_1 = -6$ and $|a_{k+1}| = |a_k + 2k|$ for $k = 1, 2, \\dots, 10$.",
              "form": "Answer as an integer.",
              "answer": "-394",
              "lines": [
                {
                  "step": "Find the least value that $a_1 + 2a_2 + 3a_3 + \\dots + 10a_{10}$ can take, where $a_1, a_2, \\dots, a_{11}$ are numbers with $a_1 = -6$ and $|a_{k+1}| = |a_k + 2k|$ for $k = 1, 2, \\dots, 10$.",
                  "reason": "Absolute value, from arithmetic: this is the problem as given; each term fixes the size of the next term and leaves its sign open."
                },
                {
                  "step": "For $k = 1, 2, \\dots, 10$, $a_{k+1}^2 = (a_k + 2k)^2$.",
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
                  "step": "$\\left(a_2^2 - a_1^2\\right) + \\left(a_3^2 - a_2^2\\right) + \\dots + \\left(a_{11}^2 - a_{10}^2\\right) = 4\\left(a_1 + 2a_2 + 3a_3 + \\dots + 10a_{10}\\right) + 4\\left(1^2 + 2^2 + \\dots + 10^2\\right)$",
                  "reason": "Adding two equations: line 4 for $k = 1, 2, \\dots, 10$, the $10$ equations added, with the common factor $4$ taken out of the terms in $a_k$ and $4$ out of the squares."
                },
                {
                  "step": "$a_{11}^2 - a_1^2 = 4\\left(a_1 + 2a_2 + 3a_3 + \\dots + 10a_{10}\\right) + 4\\left(1^2 + 2^2 + \\dots + 10^2\\right)$",
                  "reason": "Telescoping sum: each square taken away is added back in the next bracket, so the last and the first are left."
                },
                {
                  "step": "$1^2 + 2^2 + \\dots + 10^2 = \\dfrac{10 \\cdot 11 \\cdot 21}{6} = 385$",
                  "reason": "Sum of squares: with $n = 10$."
                },
                {
                  "step": "$a_{11}^2 - 36 = 4\\left(a_1 + 2a_2 + 3a_3 + \\dots + 10a_{10}\\right) + 1540$",
                  "reason": "Substituting a value: $a_1 = -6$ and line 7 go into line 6, with $\\left(-6\\right)^2 = 36$ and $4 \\cdot 385 = 1540$."
                },
                {
                  "step": "$a_{11}^2 \\ge 0$",
                  "reason": "Trivial Inequality: the square of a real number is at least $0$."
                },
                {
                  "step": "$a_{11}^2 = 4\\left(a_1 + 2a_2 + 3a_3 + \\dots + 10a_{10}\\right) + 1576$",
                  "reason": "Adding the same number to both sides: $36$ is added to both sides of line 8, and $1540 + 36 = 1576$."
                },
                {
                  "step": "$4\\left(a_1 + 2a_2 + 3a_3 + \\dots + 10a_{10}\\right) + 1576 \\ge 0$",
                  "reason": "Substituting a value: line 10 goes into line 9."
                },
                {
                  "step": "$4\\left(a_1 + 2a_2 + 3a_3 + \\dots + 10a_{10}\\right) \\ge -1576$",
                  "reason": "Adding the same number: $1576$ is taken from both sides."
                },
                {
                  "step": "$a_1 + 2a_2 + 3a_3 + \\dots + 10a_{10} \\ge -394$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{4}$, and $1576 = 4 \\cdot 394$."
                },
                {
                  "step": "The numbers $-6$, $4$, $8$, $-14$, $-6$, $-4$, $8$, $22$, $-38$, $-20$, $0$, taken in this order as $a_1, a_2, \\dots, a_{11}$, meet the conditions, and for them $a_1 + 2a_2 + 3a_3 + \\dots + 10a_{10} = -394$.",
                  "reason": "Attaining the bound: for $k = 1, 2, \\dots, 10$ the number $a_{k+1}$ is $a_k + 2k$ or its negative, so the conditions hold; and with $a_{11} = 0$ line 10 reads $0 = 4\\left(a_1 + 2a_2 + 3a_3 + \\dots + 10a_{10}\\right) + 1576$, which gives the bound."
                },
                {
                  "step": "The least value is $-394$.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the greatest value that $a_{10}$ can take, where $a_0, a_1, \\dots, a_{29}$ are numbers with $a_0 = 8$, $a_{29} = 66$ and $a_{k-1} - 2a_k + a_{k+1} \\ge -4$ for $k = 1, 2, \\dots, 28$.",
            "lines": [
              {
                "step": "Find the greatest value that $a_{10}$ can take, where $a_0, a_1, \\dots, a_{29}$ are numbers with $a_0 = 8$, $a_{29} = 66$ and $a_{k-1} - 2a_k + a_{k+1} \\ge -4$ for $k = 1, 2, \\dots, 28$.",
                "reason": "Telescoping bound: this is the problem as given; the condition bounds how far one step of the sequence may fall short of the step before it."
              },
              {
                "step": "The numbers $b_k = 8 + zk - 2k^2$, with $z$ still to be chosen, have $b_0 = 8$ and $b_{k-1} - 2b_k + b_{k+1} = -4$ for every $k$ and every $z$.",
                "reason": "Collecting like terms: in $b_{k-1} - 2b_k + b_{k+1}$ the numbers $8$ and the terms in $z$ cancel, and $-2(k - 1)^2 + 4k^2 - 2(k + 1)^2 = -4$."
              },
              {
                "step": "The number $b_{29}$ is $66$ when $z = 60$.",
                "reason": "Isolating the variable: $b_{29} = 8 + 29z - 2 \\cdot 29^2$, and $8 + 29z - 2 \\cdot 29^2 = 66$ gives $29z = 1740$."
              },
              {
                "step": "Let $d_k = a_k - \\left(8 + 60k - 2k^2\\right)$ for $k = 0, 1, \\dots, 29$; then $d_0 = 0$ and $d_{29} = 0$.",
                "reason": "Substituting a value: with $z = 60$ the bracket is $b_k$ of line 2, which is $8$ at $k = 0$ by line 2 and $66$ at $k = 29$ by line 3, and these are $a_0$ and $a_{29}$."
              },
              {
                "step": "For $k = 1, 2, \\dots, 28$, $d_{k-1} - 2d_k + d_{k+1} = a_{k-1} - 2a_k + a_{k+1} + 4$.",
                "reason": "Collecting like terms: $d_k = a_k - b_k$ with $z = 60$, and by line 2 the numbers $b_k$ give $-4$, which is taken away."
              },
              {
                "step": "For $k = 1, 2, \\dots, 28$, $d_{k-1} - 2d_k + d_{k+1} \\ge 0$.",
                "reason": "Adding the same number: $4$ is added to both sides of the given inequality, and the left side is then that of line 5."
              },
              {
                "step": "For $k = 1, 2, \\dots, 28$, $d_{k+1} - d_k \\ge d_k - d_{k-1}$.",
                "reason": "Adding the same number: $d_k - d_{k-1}$ is added to both sides of line 6."
              },
              {
                "step": "Take a whole number $j$ from $1$ to $28$. For each $i$ from $1$ to $j$, $d_i - d_{i-1} \\le d_j - d_{j-1}$.",
                "reason": "Induction: on $i$, going down from $i = j$, where the two sides are equal; line 7 at $k = i - 1$ gives $d_{i-1} - d_{i-2} \\le d_i - d_{i-1}$, which is the step from $i$ to $i - 1$."
              },
              {
                "step": "$d_j - d_0 \\le j(d_j - d_{j-1})$",
                "reason": "Telescoping bound: line 8 gives $j$ differences, from $d_1 - d_0$ to $d_j - d_{j-1}$, each at most $d_j - d_{j-1}$."
              },
              {
                "step": "For each $i$ from $j$ to $28$, $d_{i+1} - d_i \\ge d_j - d_{j-1}$.",
                "reason": "Induction: on $i$, going up from $i = j$, where the claim is line 7 at $k = j$; line 7 at $k = i + 1$ gives $d_{i+2} - d_{i+1} \\ge d_{i+1} - d_i$, which is the step from $i$ to $i + 1$."
              },
              {
                "step": "$d_{29} - d_j \\ge (29 - j)(d_j - d_{j-1})$",
                "reason": "Telescoping bound: line 10 gives $29 - j$ differences, from $d_{j+1} - d_j$ to $d_{29} - d_{28}$, each at least $d_j - d_{j-1}$."
              },
              {
                "step": "$(29 - j)d_j \\le j(29 - j)(d_j - d_{j-1})$",
                "reason": "Multiplying by a positive number: line 9, with $d_0 = 0$, is multiplied by $29 - j$, which is positive."
              },
              {
                "step": "$j(29 - j)(d_j - d_{j-1}) \\le -jd_j$",
                "reason": "Multiplying by a positive number: line 11, with $d_{29} = 0$, is multiplied by $j$."
              },
              {
                "step": "$(29 - j)d_j \\le -jd_j$",
                "reason": "Transitivity: lines 12 and 13."
              },
              {
                "step": "$29d_j \\le 0$",
                "reason": "Adding the same number: $jd_j$ is added to both sides, and $(29 - j)d_j + jd_j = 29d_j$."
              },
              {
                "step": "$d_j \\le 0$",
                "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{29}$."
              },
              {
                "step": "So $a_k \\le 8 + 60k - 2k^2$ for $k = 0, 1, \\dots, 29$.",
                "reason": "Substituting a value: line 16 holds for every $j$ from $1$ to $28$, $d_0$ and $d_{29}$ are $0$, and $d_k$ is $a_k$ less the right side."
              },
              {
                "step": "$a_{10} \\le 8 + 60 \\cdot 10 - 2 \\cdot 10^2 = 408$",
                "reason": "Substituting a value: $k = 10$ in line 17."
              },
              {
                "step": "The numbers $a_k = 8 + 60k - 2k^2$ have $a_0 = 8$ and $a_{29} = 66$, and $a_{k-1} - 2a_k + a_{k+1} = -4$ for $k = 1, 2, \\dots, 28$, so they meet the conditions, and $a_{10} = 408$.",
                "reason": "Attaining the bound: for these numbers every $d_k$ is $0$, so line 5 gives the second condition with equality, and the value at $k = 10$ is the bound."
              },
              {
                "step": "The greatest value of $a_{10}$ is $408$.",
                "reason": "Attaining the bound: a bound that is reached is the greatest value."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greatest value that $a_4$ can take, where $a_0, a_1, \\dots, a_{14}$ are numbers with $a_0 = 9$, $a_{14} = 37$ and $a_{k-1} - 2a_k + a_{k+1} \\ge -4$ for $k = 1, 2, \\dots, 13$.",
              "form": "Answer as an integer.",
              "answer": "97",
              "lines": [
                {
                  "step": "Find the greatest value that $a_4$ can take, where $a_0, a_1, \\dots, a_{14}$ are numbers with $a_0 = 9$, $a_{14} = 37$ and $a_{k-1} - 2a_k + a_{k+1} \\ge -4$ for $k = 1, 2, \\dots, 13$.",
                  "reason": "Telescoping bound: this is the problem as given; the condition bounds how far one step of the sequence may fall short of the step before it."
                },
                {
                  "step": "The numbers $b_k = 9 + zk - 2k^2$, with $z$ still to be chosen, have $b_0 = 9$ and $b_{k-1} - 2b_k + b_{k+1} = -4$ for every $k$ and every $z$.",
                  "reason": "Collecting like terms: in $b_{k-1} - 2b_k + b_{k+1}$ the numbers $9$ and the terms in $z$ cancel, and $-2(k - 1)^2 + 4k^2 - 2(k + 1)^2 = -4$."
                },
                {
                  "step": "The number $b_{14}$ is $37$ when $z = 30$.",
                  "reason": "Isolating the variable: $b_{14} = 9 + 14z - 2 \\cdot 14^2$, and $9 + 14z - 2 \\cdot 14^2 = 37$ gives $14z = 420$."
                },
                {
                  "step": "Let $d_k = a_k - \\left(9 + 30k - 2k^2\\right)$ for $k = 0, 1, \\dots, 14$; then $d_0 = 0$ and $d_{14} = 0$.",
                  "reason": "Substituting a value: with $z = 30$ the bracket is $b_k$ of line 2, which is $9$ at $k = 0$ by line 2 and $37$ at $k = 14$ by line 3, and these are $a_0$ and $a_{14}$."
                },
                {
                  "step": "For $k = 1, 2, \\dots, 13$, $d_{k-1} - 2d_k + d_{k+1} = a_{k-1} - 2a_k + a_{k+1} + 4$.",
                  "reason": "Collecting like terms: $d_k = a_k - b_k$ with $z = 30$, and by line 2 the numbers $b_k$ give $-4$, which is taken away."
                },
                {
                  "step": "For $k = 1, 2, \\dots, 13$, $d_{k-1} - 2d_k + d_{k+1} \\ge 0$.",
                  "reason": "Adding the same number: $4$ is added to both sides of the given inequality, and the left side is then that of line 5."
                },
                {
                  "step": "For $k = 1, 2, \\dots, 13$, $d_{k+1} - d_k \\ge d_k - d_{k-1}$.",
                  "reason": "Adding the same number: $d_k - d_{k-1}$ is added to both sides of line 6."
                },
                {
                  "step": "Take a whole number $j$ from $1$ to $13$. For each $i$ from $1$ to $j$, $d_i - d_{i-1} \\le d_j - d_{j-1}$.",
                  "reason": "Induction: on $i$, going down from $i = j$, where the two sides are equal; line 7 at $k = i - 1$ gives $d_{i-1} - d_{i-2} \\le d_i - d_{i-1}$, which is the step from $i$ to $i - 1$."
                },
                {
                  "step": "$d_j - d_0 \\le j(d_j - d_{j-1})$",
                  "reason": "Telescoping bound: line 8 gives $j$ differences, from $d_1 - d_0$ to $d_j - d_{j-1}$, each at most $d_j - d_{j-1}$."
                },
                {
                  "step": "For each $i$ from $j$ to $13$, $d_{i+1} - d_i \\ge d_j - d_{j-1}$.",
                  "reason": "Induction: on $i$, going up from $i = j$, where the claim is line 7 at $k = j$; line 7 at $k = i + 1$ gives $d_{i+2} - d_{i+1} \\ge d_{i+1} - d_i$, which is the step from $i$ to $i + 1$."
                },
                {
                  "step": "$d_{14} - d_j \\ge (14 - j)(d_j - d_{j-1})$",
                  "reason": "Telescoping bound: line 10 gives $14 - j$ differences, from $d_{j+1} - d_j$ to $d_{14} - d_{13}$, each at least $d_j - d_{j-1}$."
                },
                {
                  "step": "$(14 - j)d_j \\le j(14 - j)(d_j - d_{j-1})$",
                  "reason": "Multiplying by a positive number: line 9, with $d_0 = 0$, is multiplied by $14 - j$, which is positive."
                },
                {
                  "step": "$j(14 - j)(d_j - d_{j-1}) \\le -jd_j$",
                  "reason": "Multiplying by a positive number: line 11, with $d_{14} = 0$, is multiplied by $j$."
                },
                {
                  "step": "$(14 - j)d_j \\le -jd_j$",
                  "reason": "Transitivity: lines 12 and 13."
                },
                {
                  "step": "$14d_j \\le 0$",
                  "reason": "Adding the same number: $jd_j$ is added to both sides, and $(14 - j)d_j + jd_j = 14d_j$."
                },
                {
                  "step": "$d_j \\le 0$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{14}$."
                },
                {
                  "step": "So $a_k \\le 9 + 30k - 2k^2$ for $k = 0, 1, \\dots, 14$.",
                  "reason": "Substituting a value: line 16 holds for every $j$ from $1$ to $13$, $d_0$ and $d_{14}$ are $0$, and $d_k$ is $a_k$ less the right side."
                },
                {
                  "step": "$a_4 \\le 9 + 30 \\cdot 4 - 2 \\cdot 4^2 = 97$",
                  "reason": "Substituting a value: $k = 4$ in line 17."
                },
                {
                  "step": "The numbers $a_k = 9 + 30k - 2k^2$ have $a_0 = 9$ and $a_{14} = 37$, and $a_{k-1} - 2a_k + a_{k+1} = -4$ for $k = 1, 2, \\dots, 13$, so they meet the conditions, and $a_4 = 97$.",
                  "reason": "Attaining the bound: for these numbers every $d_k$ is $0$, so line 5 gives the second condition with equality, and the value at $k = 4$ is the bound."
                },
                {
                  "step": "The greatest value of $a_4$ is $97$.",
                  "reason": "Attaining the bound: a bound that is reached is the greatest value."
                }
              ]
            },
            {
              "prompt": "Find the greatest value that $a_3$ can take, where $a_0, a_1, \\dots, a_{17}$ are numbers with $a_0 = 9$, $a_{17} = 77$ and $a_{k-1} - 2a_k + a_{k+1} \\ge -8$ for $k = 1, 2, \\dots, 16$.",
              "form": "Answer as an integer.",
              "answer": "189",
              "lines": [
                {
                  "step": "Find the greatest value that $a_3$ can take, where $a_0, a_1, \\dots, a_{17}$ are numbers with $a_0 = 9$, $a_{17} = 77$ and $a_{k-1} - 2a_k + a_{k+1} \\ge -8$ for $k = 1, 2, \\dots, 16$.",
                  "reason": "Telescoping bound: this is the problem as given; the condition bounds how far one step of the sequence may fall short of the step before it."
                },
                {
                  "step": "The numbers $b_k = 9 + zk - 4k^2$, with $z$ still to be chosen, have $b_0 = 9$ and $b_{k-1} - 2b_k + b_{k+1} = -8$ for every $k$ and every $z$.",
                  "reason": "Collecting like terms: in $b_{k-1} - 2b_k + b_{k+1}$ the numbers $9$ and the terms in $z$ cancel, and $-4(k - 1)^2 + 8k^2 - 4(k + 1)^2 = -8$."
                },
                {
                  "step": "The number $b_{17}$ is $77$ when $z = 72$.",
                  "reason": "Isolating the variable: $b_{17} = 9 + 17z - 4 \\cdot 17^2$, and $9 + 17z - 4 \\cdot 17^2 = 77$ gives $17z = 1224$."
                },
                {
                  "step": "Let $d_k = a_k - \\left(9 + 72k - 4k^2\\right)$ for $k = 0, 1, \\dots, 17$; then $d_0 = 0$ and $d_{17} = 0$.",
                  "reason": "Substituting a value: with $z = 72$ the bracket is $b_k$ of line 2, which is $9$ at $k = 0$ by line 2 and $77$ at $k = 17$ by line 3, and these are $a_0$ and $a_{17}$."
                },
                {
                  "step": "For $k = 1, 2, \\dots, 16$, $d_{k-1} - 2d_k + d_{k+1} = a_{k-1} - 2a_k + a_{k+1} + 8$.",
                  "reason": "Collecting like terms: $d_k = a_k - b_k$ with $z = 72$, and by line 2 the numbers $b_k$ give $-8$, which is taken away."
                },
                {
                  "step": "For $k = 1, 2, \\dots, 16$, $d_{k-1} - 2d_k + d_{k+1} \\ge 0$.",
                  "reason": "Adding the same number: $8$ is added to both sides of the given inequality, and the left side is then that of line 5."
                },
                {
                  "step": "For $k = 1, 2, \\dots, 16$, $d_{k+1} - d_k \\ge d_k - d_{k-1}$.",
                  "reason": "Adding the same number: $d_k - d_{k-1}$ is added to both sides of line 6."
                },
                {
                  "step": "Take a whole number $j$ from $1$ to $16$. For each $i$ from $1$ to $j$, $d_i - d_{i-1} \\le d_j - d_{j-1}$.",
                  "reason": "Induction: on $i$, going down from $i = j$, where the two sides are equal; line 7 at $k = i - 1$ gives $d_{i-1} - d_{i-2} \\le d_i - d_{i-1}$, which is the step from $i$ to $i - 1$."
                },
                {
                  "step": "$d_j - d_0 \\le j(d_j - d_{j-1})$",
                  "reason": "Telescoping bound: line 8 gives $j$ differences, from $d_1 - d_0$ to $d_j - d_{j-1}$, each at most $d_j - d_{j-1}$."
                },
                {
                  "step": "For each $i$ from $j$ to $16$, $d_{i+1} - d_i \\ge d_j - d_{j-1}$.",
                  "reason": "Induction: on $i$, going up from $i = j$, where the claim is line 7 at $k = j$; line 7 at $k = i + 1$ gives $d_{i+2} - d_{i+1} \\ge d_{i+1} - d_i$, which is the step from $i$ to $i + 1$."
                },
                {
                  "step": "$d_{17} - d_j \\ge (17 - j)(d_j - d_{j-1})$",
                  "reason": "Telescoping bound: line 10 gives $17 - j$ differences, from $d_{j+1} - d_j$ to $d_{17} - d_{16}$, each at least $d_j - d_{j-1}$."
                },
                {
                  "step": "$(17 - j)d_j \\le j(17 - j)(d_j - d_{j-1})$",
                  "reason": "Multiplying by a positive number: line 9, with $d_0 = 0$, is multiplied by $17 - j$, which is positive."
                },
                {
                  "step": "$j(17 - j)(d_j - d_{j-1}) \\le -jd_j$",
                  "reason": "Multiplying by a positive number: line 11, with $d_{17} = 0$, is multiplied by $j$."
                },
                {
                  "step": "$(17 - j)d_j \\le -jd_j$",
                  "reason": "Transitivity: lines 12 and 13."
                },
                {
                  "step": "$17d_j \\le 0$",
                  "reason": "Adding the same number: $jd_j$ is added to both sides, and $(17 - j)d_j + jd_j = 17d_j$."
                },
                {
                  "step": "$d_j \\le 0$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{17}$."
                },
                {
                  "step": "So $a_k \\le 9 + 72k - 4k^2$ for $k = 0, 1, \\dots, 17$.",
                  "reason": "Substituting a value: line 16 holds for every $j$ from $1$ to $16$, $d_0$ and $d_{17}$ are $0$, and $d_k$ is $a_k$ less the right side."
                },
                {
                  "step": "$a_3 \\le 9 + 72 \\cdot 3 - 4 \\cdot 3^2 = 189$",
                  "reason": "Substituting a value: $k = 3$ in line 17."
                },
                {
                  "step": "The numbers $a_k = 9 + 72k - 4k^2$ have $a_0 = 9$ and $a_{17} = 77$, and $a_{k-1} - 2a_k + a_{k+1} = -8$ for $k = 1, 2, \\dots, 16$, so they meet the conditions, and $a_3 = 189$.",
                  "reason": "Attaining the bound: for these numbers every $d_k$ is $0$, so line 5 gives the second condition with equality, and the value at $k = 3$ is the bound."
                },
                {
                  "step": "The greatest value of $a_3$ is $189$.",
                  "reason": "Attaining the bound: a bound that is reached is the greatest value."
                }
              ]
            },
            {
              "prompt": "Find the greatest value that $a_{20}$ can take, where $a_0, a_1, \\dots, a_{27}$ are numbers with $a_0 = 7$, $a_{27} = 88$ and $a_{k-1} - 2a_k + a_{k+1} \\ge -6$ for $k = 1, 2, \\dots, 26$.",
              "form": "Answer as an integer.",
              "answer": "487",
              "lines": [
                {
                  "step": "Find the greatest value that $a_{20}$ can take, where $a_0, a_1, \\dots, a_{27}$ are numbers with $a_0 = 7$, $a_{27} = 88$ and $a_{k-1} - 2a_k + a_{k+1} \\ge -6$ for $k = 1, 2, \\dots, 26$.",
                  "reason": "Telescoping bound: this is the problem as given; the condition bounds how far one step of the sequence may fall short of the step before it."
                },
                {
                  "step": "The numbers $b_k = 7 + zk - 3k^2$, with $z$ still to be chosen, have $b_0 = 7$ and $b_{k-1} - 2b_k + b_{k+1} = -6$ for every $k$ and every $z$.",
                  "reason": "Collecting like terms: in $b_{k-1} - 2b_k + b_{k+1}$ the numbers $7$ and the terms in $z$ cancel, and $-3(k - 1)^2 + 6k^2 - 3(k + 1)^2 = -6$."
                },
                {
                  "step": "The number $b_{27}$ is $88$ when $z = 84$.",
                  "reason": "Isolating the variable: $b_{27} = 7 + 27z - 3 \\cdot 27^2$, and $7 + 27z - 3 \\cdot 27^2 = 88$ gives $27z = 2268$."
                },
                {
                  "step": "Let $d_k = a_k - \\left(7 + 84k - 3k^2\\right)$ for $k = 0, 1, \\dots, 27$; then $d_0 = 0$ and $d_{27} = 0$.",
                  "reason": "Substituting a value: with $z = 84$ the bracket is $b_k$ of line 2, which is $7$ at $k = 0$ by line 2 and $88$ at $k = 27$ by line 3, and these are $a_0$ and $a_{27}$."
                },
                {
                  "step": "For $k = 1, 2, \\dots, 26$, $d_{k-1} - 2d_k + d_{k+1} = a_{k-1} - 2a_k + a_{k+1} + 6$.",
                  "reason": "Collecting like terms: $d_k = a_k - b_k$ with $z = 84$, and by line 2 the numbers $b_k$ give $-6$, which is taken away."
                },
                {
                  "step": "For $k = 1, 2, \\dots, 26$, $d_{k-1} - 2d_k + d_{k+1} \\ge 0$.",
                  "reason": "Adding the same number: $6$ is added to both sides of the given inequality, and the left side is then that of line 5."
                },
                {
                  "step": "For $k = 1, 2, \\dots, 26$, $d_{k+1} - d_k \\ge d_k - d_{k-1}$.",
                  "reason": "Adding the same number: $d_k - d_{k-1}$ is added to both sides of line 6."
                },
                {
                  "step": "Take a whole number $j$ from $1$ to $26$. For each $i$ from $1$ to $j$, $d_i - d_{i-1} \\le d_j - d_{j-1}$.",
                  "reason": "Induction: on $i$, going down from $i = j$, where the two sides are equal; line 7 at $k = i - 1$ gives $d_{i-1} - d_{i-2} \\le d_i - d_{i-1}$, which is the step from $i$ to $i - 1$."
                },
                {
                  "step": "$d_j - d_0 \\le j(d_j - d_{j-1})$",
                  "reason": "Telescoping bound: line 8 gives $j$ differences, from $d_1 - d_0$ to $d_j - d_{j-1}$, each at most $d_j - d_{j-1}$."
                },
                {
                  "step": "For each $i$ from $j$ to $26$, $d_{i+1} - d_i \\ge d_j - d_{j-1}$.",
                  "reason": "Induction: on $i$, going up from $i = j$, where the claim is line 7 at $k = j$; line 7 at $k = i + 1$ gives $d_{i+2} - d_{i+1} \\ge d_{i+1} - d_i$, which is the step from $i$ to $i + 1$."
                },
                {
                  "step": "$d_{27} - d_j \\ge (27 - j)(d_j - d_{j-1})$",
                  "reason": "Telescoping bound: line 10 gives $27 - j$ differences, from $d_{j+1} - d_j$ to $d_{27} - d_{26}$, each at least $d_j - d_{j-1}$."
                },
                {
                  "step": "$(27 - j)d_j \\le j(27 - j)(d_j - d_{j-1})$",
                  "reason": "Multiplying by a positive number: line 9, with $d_0 = 0$, is multiplied by $27 - j$, which is positive."
                },
                {
                  "step": "$j(27 - j)(d_j - d_{j-1}) \\le -jd_j$",
                  "reason": "Multiplying by a positive number: line 11, with $d_{27} = 0$, is multiplied by $j$."
                },
                {
                  "step": "$(27 - j)d_j \\le -jd_j$",
                  "reason": "Transitivity: lines 12 and 13."
                },
                {
                  "step": "$27d_j \\le 0$",
                  "reason": "Adding the same number: $jd_j$ is added to both sides, and $(27 - j)d_j + jd_j = 27d_j$."
                },
                {
                  "step": "$d_j \\le 0$",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{27}$."
                },
                {
                  "step": "So $a_k \\le 7 + 84k - 3k^2$ for $k = 0, 1, \\dots, 27$.",
                  "reason": "Substituting a value: line 16 holds for every $j$ from $1$ to $26$, $d_0$ and $d_{27}$ are $0$, and $d_k$ is $a_k$ less the right side."
                },
                {
                  "step": "$a_{20} \\le 7 + 84 \\cdot 20 - 3 \\cdot 20^2 = 487$",
                  "reason": "Substituting a value: $k = 20$ in line 17."
                },
                {
                  "step": "The numbers $a_k = 7 + 84k - 3k^2$ have $a_0 = 7$ and $a_{27} = 88$, and $a_{k-1} - 2a_k + a_{k+1} = -6$ for $k = 1, 2, \\dots, 26$, so they meet the conditions, and $a_{20} = 487$.",
                  "reason": "Attaining the bound: for these numbers every $d_k$ is $0$, so line 5 gives the second condition with equality, and the value at $k = 20$ is the bound."
                },
                {
                  "step": "The greatest value of $a_{20}$ is $487$.",
                  "reason": "Attaining the bound: a bound that is reached is the greatest value."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the least value of $\\left(a_1 + a_2 + \\dots + a_{19}\\right) + \\left(\\dfrac{7^2}{a_1} + \\dfrac{9^2}{a_2} + \\dfrac{11^2}{a_3} + \\dots + \\dfrac{43^2}{a_{19}}\\right)$ for positive numbers $a_1, a_2, \\dots, a_{19}$.",
            "lines": [
              {
                "step": "Find the least value of $\\left(a_1 + a_2 + \\dots + a_{19}\\right) + \\left(\\dfrac{7^2}{a_1} + \\dfrac{9^2}{a_2} + \\dfrac{11^2}{a_3} + \\dots + \\dfrac{43^2}{a_{19}}\\right)$ for positive numbers $a_1, a_2, \\dots, a_{19}$.",
                "reason": "AM-GM for two numbers: this is the problem as given; the $k$th term of the second bracket is $\\dfrac{(2k + 5)^2}{a_k}$."
              },
              {
                "step": "For $k = 1, 2, \\dots, 19$, $\\dfrac{1}{2}\\left(a_k + \\dfrac{(2k + 5)^2}{a_k}\\right) \\ge \\sqrt{a_k \\cdot \\dfrac{(2k + 5)^2}{a_k}}$.",
                "reason": "AM-GM for two numbers: both numbers are positive, since $a_k$ is positive."
              },
              {
                "step": "$a_k \\cdot \\dfrac{(2k + 5)^2}{a_k} = (2k + 5)^2$",
                "reason": "Cancelling a common factor: $a_k$ cancels."
              },
              {
                "step": "$\\sqrt{a_k \\cdot \\dfrac{(2k + 5)^2}{a_k}} = 2k + 5$",
                "reason": "Root of a square: by line 3 the number under the root is $(2k + 5)^2$, and $2k + 5$ is positive for every $k$ from $1$ up."
              },
              {
                "step": "$a_k + \\dfrac{(2k + 5)^2}{a_k} \\ge 2\\sqrt{a_k \\cdot \\dfrac{(2k + 5)^2}{a_k}}$",
                "reason": "Multiplying by a positive number: both sides of line 2 are multiplied by $2$."
              },
              {
                "step": "$a_k + \\dfrac{(2k + 5)^2}{a_k} \\ge 2(2k + 5)$",
                "reason": "Substituting a value: the root in line 5 is replaced by its value from line 4."
              },
              {
                "step": "$\\left(a_1 + a_2 + \\dots + a_{19}\\right) + \\left(\\dfrac{7^2}{a_1} + \\dfrac{9^2}{a_2} + \\dfrac{11^2}{a_3} + \\dots + \\dfrac{43^2}{a_{19}}\\right) \\ge 2\\left(7 + 9 + 11 + \\dots + 43\\right)$",
                "reason": "Adding two inequalities: line 6 for $k = 1, 2, \\dots, 19$, the $19$ inequalities added, with the common factor $2$ taken out on the right."
              },
              {
                "step": "$7 + 9 + 11 + \\dots + 43 = \\dfrac{19(7 + 43)}{2} = 475$",
                "reason": "Sum = number of terms × mean of the first and last term, with $19$ terms."
              },
              {
                "step": "$\\left(a_1 + a_2 + \\dots + a_{19}\\right) + \\left(\\dfrac{7^2}{a_1} + \\dfrac{9^2}{a_2} + \\dfrac{11^2}{a_3} + \\dots + \\dfrac{43^2}{a_{19}}\\right) \\ge 950$",
                "reason": "Substituting a value: line 8 goes into line 7, and $2 \\cdot 475 = 950$."
              },
              {
                "step": "The two sides of line 6 are equal when $a_k = 2k + 5$, for $k = 1, 2, \\dots, 19$.",
                "reason": "Equality in AM-GM: the numbers $a_k$ and $\\dfrac{(2k + 5)^2}{a_k}$ are equal when $a_k^2 = (2k + 5)^2$, and $a_k$ is positive."
              },
              {
                "step": "At these values each sum $a_k + \\dfrac{(2k + 5)^2}{a_k}$ is twice $2k + 5$, and the expression is $2 \\cdot 475 = 950$.",
                "reason": "Attaining the bound: substituting the values gives the bound."
              },
              {
                "step": "The least value is $950$.",
                "reason": "Attaining the bound: a bound that is reached is the least value."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the least value of $\\left(a_1 + a_2 + \\dots + a_{14}\\right) + \\left(\\dfrac{5^2}{a_1} + \\dfrac{8^2}{a_2} + \\dfrac{11^2}{a_3} + \\dots + \\dfrac{44^2}{a_{14}}\\right)$ for positive numbers $a_1, a_2, \\dots, a_{14}$.",
              "form": "Answer as an integer.",
              "answer": "686",
              "lines": [
                {
                  "step": "Find the least value of $\\left(a_1 + a_2 + \\dots + a_{14}\\right) + \\left(\\dfrac{5^2}{a_1} + \\dfrac{8^2}{a_2} + \\dfrac{11^2}{a_3} + \\dots + \\dfrac{44^2}{a_{14}}\\right)$ for positive numbers $a_1, a_2, \\dots, a_{14}$.",
                  "reason": "AM-GM for two numbers: this is the problem as given; the $k$th term of the second bracket is $\\dfrac{(3k + 2)^2}{a_k}$."
                },
                {
                  "step": "For $k = 1, 2, \\dots, 14$, $\\dfrac{1}{2}\\left(a_k + \\dfrac{(3k + 2)^2}{a_k}\\right) \\ge \\sqrt{a_k \\cdot \\dfrac{(3k + 2)^2}{a_k}}$.",
                  "reason": "AM-GM for two numbers: both numbers are positive, since $a_k$ is positive."
                },
                {
                  "step": "$a_k \\cdot \\dfrac{(3k + 2)^2}{a_k} = (3k + 2)^2$",
                  "reason": "Cancelling a common factor: $a_k$ cancels."
                },
                {
                  "step": "$\\sqrt{a_k \\cdot \\dfrac{(3k + 2)^2}{a_k}} = 3k + 2$",
                  "reason": "Root of a square: by line 3 the number under the root is $(3k + 2)^2$, and $3k + 2$ is positive for every $k$ from $1$ up."
                },
                {
                  "step": "$a_k + \\dfrac{(3k + 2)^2}{a_k} \\ge 2\\sqrt{a_k \\cdot \\dfrac{(3k + 2)^2}{a_k}}$",
                  "reason": "Multiplying by a positive number: both sides of line 2 are multiplied by $2$."
                },
                {
                  "step": "$a_k + \\dfrac{(3k + 2)^2}{a_k} \\ge 2(3k + 2)$",
                  "reason": "Substituting a value: the root in line 5 is replaced by its value from line 4."
                },
                {
                  "step": "$\\left(a_1 + a_2 + \\dots + a_{14}\\right) + \\left(\\dfrac{5^2}{a_1} + \\dfrac{8^2}{a_2} + \\dfrac{11^2}{a_3} + \\dots + \\dfrac{44^2}{a_{14}}\\right) \\ge 2\\left(5 + 8 + 11 + \\dots + 44\\right)$",
                  "reason": "Adding two inequalities: line 6 for $k = 1, 2, \\dots, 14$, the $14$ inequalities added, with the common factor $2$ taken out on the right."
                },
                {
                  "step": "$5 + 8 + 11 + \\dots + 44 = \\dfrac{14(5 + 44)}{2} = 343$",
                  "reason": "Sum = number of terms × mean of the first and last term, with $14$ terms."
                },
                {
                  "step": "$\\left(a_1 + a_2 + \\dots + a_{14}\\right) + \\left(\\dfrac{5^2}{a_1} + \\dfrac{8^2}{a_2} + \\dfrac{11^2}{a_3} + \\dots + \\dfrac{44^2}{a_{14}}\\right) \\ge 686$",
                  "reason": "Substituting a value: line 8 goes into line 7, and $2 \\cdot 343 = 686$."
                },
                {
                  "step": "The two sides of line 6 are equal when $a_k = 3k + 2$, for $k = 1, 2, \\dots, 14$.",
                  "reason": "Equality in AM-GM: the numbers $a_k$ and $\\dfrac{(3k + 2)^2}{a_k}$ are equal when $a_k^2 = (3k + 2)^2$, and $a_k$ is positive."
                },
                {
                  "step": "At these values each sum $a_k + \\dfrac{(3k + 2)^2}{a_k}$ is twice $3k + 2$, and the expression is $2 \\cdot 343 = 686$.",
                  "reason": "Attaining the bound: substituting the values gives the bound."
                },
                {
                  "step": "The least value is $686$.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            },
            {
              "prompt": "Find the least value of $\\left(a_1 + a_2 + \\dots + a_{26}\\right) + \\left(\\dfrac{4^2}{a_1} + \\dfrac{5^2}{a_2} + \\dfrac{6^2}{a_3} + \\dots + \\dfrac{29^2}{a_{26}}\\right)$ for positive numbers $a_1, a_2, \\dots, a_{26}$.",
              "form": "Answer as an integer.",
              "answer": "858",
              "lines": [
                {
                  "step": "Find the least value of $\\left(a_1 + a_2 + \\dots + a_{26}\\right) + \\left(\\dfrac{4^2}{a_1} + \\dfrac{5^2}{a_2} + \\dfrac{6^2}{a_3} + \\dots + \\dfrac{29^2}{a_{26}}\\right)$ for positive numbers $a_1, a_2, \\dots, a_{26}$.",
                  "reason": "AM-GM for two numbers: this is the problem as given; the $k$th term of the second bracket is $\\dfrac{(k + 3)^2}{a_k}$."
                },
                {
                  "step": "For $k = 1, 2, \\dots, 26$, $\\dfrac{1}{2}\\left(a_k + \\dfrac{(k + 3)^2}{a_k}\\right) \\ge \\sqrt{a_k \\cdot \\dfrac{(k + 3)^2}{a_k}}$.",
                  "reason": "AM-GM for two numbers: both numbers are positive, since $a_k$ is positive."
                },
                {
                  "step": "$a_k \\cdot \\dfrac{(k + 3)^2}{a_k} = (k + 3)^2$",
                  "reason": "Cancelling a common factor: $a_k$ cancels."
                },
                {
                  "step": "$\\sqrt{a_k \\cdot \\dfrac{(k + 3)^2}{a_k}} = k + 3$",
                  "reason": "Root of a square: by line 3 the number under the root is $(k + 3)^2$, and $k + 3$ is positive for every $k$ from $1$ up."
                },
                {
                  "step": "$a_k + \\dfrac{(k + 3)^2}{a_k} \\ge 2\\sqrt{a_k \\cdot \\dfrac{(k + 3)^2}{a_k}}$",
                  "reason": "Multiplying by a positive number: both sides of line 2 are multiplied by $2$."
                },
                {
                  "step": "$a_k + \\dfrac{(k + 3)^2}{a_k} \\ge 2(k + 3)$",
                  "reason": "Substituting a value: the root in line 5 is replaced by its value from line 4."
                },
                {
                  "step": "$\\left(a_1 + a_2 + \\dots + a_{26}\\right) + \\left(\\dfrac{4^2}{a_1} + \\dfrac{5^2}{a_2} + \\dfrac{6^2}{a_3} + \\dots + \\dfrac{29^2}{a_{26}}\\right) \\ge 2\\left(4 + 5 + 6 + \\dots + 29\\right)$",
                  "reason": "Adding two inequalities: line 6 for $k = 1, 2, \\dots, 26$, the $26$ inequalities added, with the common factor $2$ taken out on the right."
                },
                {
                  "step": "$4 + 5 + 6 + \\dots + 29 = \\dfrac{26(4 + 29)}{2} = 429$",
                  "reason": "Sum = number of terms × mean of the first and last term, with $26$ terms."
                },
                {
                  "step": "$\\left(a_1 + a_2 + \\dots + a_{26}\\right) + \\left(\\dfrac{4^2}{a_1} + \\dfrac{5^2}{a_2} + \\dfrac{6^2}{a_3} + \\dots + \\dfrac{29^2}{a_{26}}\\right) \\ge 858$",
                  "reason": "Substituting a value: line 8 goes into line 7, and $2 \\cdot 429 = 858$."
                },
                {
                  "step": "The two sides of line 6 are equal when $a_k = k + 3$, for $k = 1, 2, \\dots, 26$.",
                  "reason": "Equality in AM-GM: the numbers $a_k$ and $\\dfrac{(k + 3)^2}{a_k}$ are equal when $a_k^2 = (k + 3)^2$, and $a_k$ is positive."
                },
                {
                  "step": "At these values each sum $a_k + \\dfrac{(k + 3)^2}{a_k}$ is twice $k + 3$, and the expression is $2 \\cdot 429 = 858$.",
                  "reason": "Attaining the bound: substituting the values gives the bound."
                },
                {
                  "step": "The least value is $858$.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            },
            {
              "prompt": "Find the least value of $\\left(a_1 + a_2 + \\dots + a_{22}\\right) + \\left(\\dfrac{1^2}{a_1} + \\dfrac{7^2}{a_2} + \\dfrac{13^2}{a_3} + \\dots + \\dfrac{127^2}{a_{22}}\\right)$ for positive numbers $a_1, a_2, \\dots, a_{22}$.",
              "form": "Answer as an integer.",
              "answer": "2816",
              "lines": [
                {
                  "step": "Find the least value of $\\left(a_1 + a_2 + \\dots + a_{22}\\right) + \\left(\\dfrac{1^2}{a_1} + \\dfrac{7^2}{a_2} + \\dfrac{13^2}{a_3} + \\dots + \\dfrac{127^2}{a_{22}}\\right)$ for positive numbers $a_1, a_2, \\dots, a_{22}$.",
                  "reason": "AM-GM for two numbers: this is the problem as given; the $k$th term of the second bracket is $\\dfrac{(6k - 5)^2}{a_k}$."
                },
                {
                  "step": "For $k = 1, 2, \\dots, 22$, $\\dfrac{1}{2}\\left(a_k + \\dfrac{(6k - 5)^2}{a_k}\\right) \\ge \\sqrt{a_k \\cdot \\dfrac{(6k - 5)^2}{a_k}}$.",
                  "reason": "AM-GM for two numbers: both numbers are positive, since $a_k$ is positive."
                },
                {
                  "step": "$a_k \\cdot \\dfrac{(6k - 5)^2}{a_k} = (6k - 5)^2$",
                  "reason": "Cancelling a common factor: $a_k$ cancels."
                },
                {
                  "step": "$\\sqrt{a_k \\cdot \\dfrac{(6k - 5)^2}{a_k}} = 6k - 5$",
                  "reason": "Root of a square: by line 3 the number under the root is $(6k - 5)^2$, and $6k - 5$ is positive for every $k$ from $1$ up."
                },
                {
                  "step": "$a_k + \\dfrac{(6k - 5)^2}{a_k} \\ge 2\\sqrt{a_k \\cdot \\dfrac{(6k - 5)^2}{a_k}}$",
                  "reason": "Multiplying by a positive number: both sides of line 2 are multiplied by $2$."
                },
                {
                  "step": "$a_k + \\dfrac{(6k - 5)^2}{a_k} \\ge 2(6k - 5)$",
                  "reason": "Substituting a value: the root in line 5 is replaced by its value from line 4."
                },
                {
                  "step": "$\\left(a_1 + a_2 + \\dots + a_{22}\\right) + \\left(\\dfrac{1^2}{a_1} + \\dfrac{7^2}{a_2} + \\dfrac{13^2}{a_3} + \\dots + \\dfrac{127^2}{a_{22}}\\right) \\ge 2\\left(1 + 7 + 13 + \\dots + 127\\right)$",
                  "reason": "Adding two inequalities: line 6 for $k = 1, 2, \\dots, 22$, the $22$ inequalities added, with the common factor $2$ taken out on the right."
                },
                {
                  "step": "$1 + 7 + 13 + \\dots + 127 = \\dfrac{22(1 + 127)}{2} = 1408$",
                  "reason": "Sum = number of terms × mean of the first and last term, with $22$ terms."
                },
                {
                  "step": "$\\left(a_1 + a_2 + \\dots + a_{22}\\right) + \\left(\\dfrac{1^2}{a_1} + \\dfrac{7^2}{a_2} + \\dfrac{13^2}{a_3} + \\dots + \\dfrac{127^2}{a_{22}}\\right) \\ge 2816$",
                  "reason": "Substituting a value: line 8 goes into line 7, and $2 \\cdot 1408 = 2816$."
                },
                {
                  "step": "The two sides of line 6 are equal when $a_k = 6k - 5$, for $k = 1, 2, \\dots, 22$.",
                  "reason": "Equality in AM-GM: the numbers $a_k$ and $\\dfrac{(6k - 5)^2}{a_k}$ are equal when $a_k^2 = (6k - 5)^2$, and $a_k$ is positive."
                },
                {
                  "step": "At these values each sum $a_k + \\dfrac{(6k - 5)^2}{a_k}$ is twice $6k - 5$, and the expression is $2 \\cdot 1408 = 2816$.",
                  "reason": "Attaining the bound: substituting the values gives the bound."
                },
                {
                  "step": "The least value is $2816$.",
                  "reason": "Attaining the bound: a bound that is reached is the least value."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t244-k4",
      "forms": [
        {
          "example": {
            "problem": "Find the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (17, 6)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 3)$, and a step of the second kind takes $(x, y)$ to $(x, y - 2)$.",
            "lines": [
              {
                "step": "Find the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (17, 6)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 3)$, and a step of the second kind takes $(x, y)$ to $(x, y - 2)$.",
                "reason": "Monovariant: this is the problem as given; whole numbers are never below $0$, so a step is possible only while it leaves both numbers of the pair at $0$ or above."
              },
              {
                "step": "A step of the first kind changes $zx + y$ by $-z + 3$, and a step of the second kind changes it by $-2$; the two changes are equal when $z = 5$.",
                "reason": "Isolating the variable: $z$ stands for a weight on $x$ still to be chosen, and $-z + 3 = -2$ gives $z = 3 + 2$."
              },
              {
                "step": "Let $d_k = 5x_k + y_k$ for $k = 0, 1, \\dots, n$.",
                "reason": "Monovariant: with the weight $5$ of line 2, both kinds of step change this number by the same amount."
              },
              {
                "step": "After a step of the first kind, $d_{k+1} = 5(x_k - 1) + (y_k + 3) = d_k - 2$.",
                "reason": "Multiplying out: $5(x_k - 1) = 5x_k - 5$, and $-5 + 3 = -2$."
              },
              {
                "step": "After a step of the second kind, $d_{k+1} = 5x_k + (y_k - 2) = d_k - 2$.",
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
                "step": "$d_0 = 5 \\cdot 17 + 6 = 91$",
                "reason": "Substituting a value: $x_0 = 17$ and $y_0 = 6$."
              },
              {
                "step": "$d_n \\ge 0$",
                "reason": "Adding two inequalities: $x_n$ and $y_n$ are whole numbers, so $5x_n \\ge 0$ and $y_n \\ge 0$."
              },
              {
                "step": "$91 - 2n \\ge 0$",
                "reason": "Substituting a value: by lines 7 and 8, $d_n = 91 - 2n$, which goes into line 9."
              },
              {
                "step": "$2n \\le 91$",
                "reason": "Adding the same number: $2n$ is added to both sides of line 10."
              },
              {
                "step": "$n \\le 45$",
                "reason": "Multiplying by a positive number: both sides of line 11 are multiplied by $\\dfrac{1}{2}$, which gives $n \\le \\dfrac{91}{2}$, and $n$ is a whole number."
              },
              {
                "step": "From $(17, 6)$, $17$ steps of the first kind lead to $(0, 57)$, and then $28$ steps of the second kind lead to $(0, 1)$; these are $45$ steps, and no number goes below $0$ on the way.",
                "reason": "Attaining the bound: $6 + 17 \\cdot 3 = 57$ and $57 - 28 \\cdot 2 = 1$."
              },
              {
                "step": "So the greatest $n$ is $45$.",
                "reason": "Attaining the bound: a bound that is reached is the greatest value."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (17, 4)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 5)$, and a step of the second kind takes $(x, y)$ to $(x, y - 6)$.",
              "form": "Answer as an integer.",
              "answer": "31",
              "lines": [
                {
                  "step": "Find the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (17, 4)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 5)$, and a step of the second kind takes $(x, y)$ to $(x, y - 6)$.",
                  "reason": "Monovariant: this is the problem as given; whole numbers are never below $0$, so a step is possible only while it leaves both numbers of the pair at $0$ or above."
                },
                {
                  "step": "A step of the first kind changes $zx + y$ by $-z + 5$, and a step of the second kind changes it by $-6$; the two changes are equal when $z = 11$.",
                  "reason": "Isolating the variable: $z$ stands for a weight on $x$ still to be chosen, and $-z + 5 = -6$ gives $z = 5 + 6$."
                },
                {
                  "step": "Let $d_k = 11x_k + y_k$ for $k = 0, 1, \\dots, n$.",
                  "reason": "Monovariant: with the weight $11$ of line 2, both kinds of step change this number by the same amount."
                },
                {
                  "step": "After a step of the first kind, $d_{k+1} = 11(x_k - 1) + (y_k + 5) = d_k - 6$.",
                  "reason": "Multiplying out: $11(x_k - 1) = 11x_k - 11$, and $-11 + 5 = -6$."
                },
                {
                  "step": "After a step of the second kind, $d_{k+1} = 11x_k + (y_k - 6) = d_k - 6$.",
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
                  "step": "$d_0 = 11 \\cdot 17 + 4 = 191$",
                  "reason": "Substituting a value: $x_0 = 17$ and $y_0 = 4$."
                },
                {
                  "step": "$d_n \\ge 0$",
                  "reason": "Adding two inequalities: $x_n$ and $y_n$ are whole numbers, so $11x_n \\ge 0$ and $y_n \\ge 0$."
                },
                {
                  "step": "$191 - 6n \\ge 0$",
                  "reason": "Substituting a value: by lines 7 and 8, $d_n = 191 - 6n$, which goes into line 9."
                },
                {
                  "step": "$6n \\le 191$",
                  "reason": "Adding the same number: $6n$ is added to both sides of line 10."
                },
                {
                  "step": "$n \\le 31$",
                  "reason": "Multiplying by a positive number: both sides of line 11 are multiplied by $\\dfrac{1}{6}$, which gives $n \\le \\dfrac{191}{6}$, and $n$ is a whole number."
                },
                {
                  "step": "From $(17, 4)$, $17$ steps of the first kind lead to $(0, 89)$, and then $14$ steps of the second kind lead to $(0, 5)$; these are $31$ steps, and no number goes below $0$ on the way.",
                  "reason": "Attaining the bound: $4 + 17 \\cdot 5 = 89$ and $89 - 14 \\cdot 6 = 5$."
                },
                {
                  "step": "So the greatest $n$ is $31$.",
                  "reason": "Attaining the bound: a bound that is reached is the greatest value."
                }
              ]
            },
            {
              "prompt": "Find the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (18, 9)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 2)$, and a step of the second kind takes $(x, y)$ to $(x, y - 3)$.",
              "form": "Answer as an integer.",
              "answer": "33",
              "lines": [
                {
                  "step": "Find the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (18, 9)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 2)$, and a step of the second kind takes $(x, y)$ to $(x, y - 3)$.",
                  "reason": "Monovariant: this is the problem as given; whole numbers are never below $0$, so a step is possible only while it leaves both numbers of the pair at $0$ or above."
                },
                {
                  "step": "A step of the first kind changes $zx + y$ by $-z + 2$, and a step of the second kind changes it by $-3$; the two changes are equal when $z = 5$.",
                  "reason": "Isolating the variable: $z$ stands for a weight on $x$ still to be chosen, and $-z + 2 = -3$ gives $z = 2 + 3$."
                },
                {
                  "step": "Let $d_k = 5x_k + y_k$ for $k = 0, 1, \\dots, n$.",
                  "reason": "Monovariant: with the weight $5$ of line 2, both kinds of step change this number by the same amount."
                },
                {
                  "step": "After a step of the first kind, $d_{k+1} = 5(x_k - 1) + (y_k + 2) = d_k - 3$.",
                  "reason": "Multiplying out: $5(x_k - 1) = 5x_k - 5$, and $-5 + 2 = -3$."
                },
                {
                  "step": "After a step of the second kind, $d_{k+1} = 5x_k + (y_k - 3) = d_k - 3$.",
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
                  "step": "$d_0 = 5 \\cdot 18 + 9 = 99$",
                  "reason": "Substituting a value: $x_0 = 18$ and $y_0 = 9$."
                },
                {
                  "step": "$d_n \\ge 0$",
                  "reason": "Adding two inequalities: $x_n$ and $y_n$ are whole numbers, so $5x_n \\ge 0$ and $y_n \\ge 0$."
                },
                {
                  "step": "$99 - 3n \\ge 0$",
                  "reason": "Substituting a value: by lines 7 and 8, $d_n = 99 - 3n$, which goes into line 9."
                },
                {
                  "step": "$3n \\le 99$",
                  "reason": "Adding the same number: $3n$ is added to both sides of line 10."
                },
                {
                  "step": "$n \\le 33$",
                  "reason": "Multiplying by a positive number: both sides of line 11 are multiplied by $\\dfrac{1}{3}$."
                },
                {
                  "step": "From $(18, 9)$, $18$ steps of the first kind lead to $(0, 45)$, and then $15$ steps of the second kind lead to $(0, 0)$; these are $33$ steps, and no number goes below $0$ on the way.",
                  "reason": "Attaining the bound: $9 + 18 \\cdot 2 = 45$ and $45 - 15 \\cdot 3 = 0$."
                },
                {
                  "step": "So the greatest $n$ is $33$.",
                  "reason": "Attaining the bound: a bound that is reached is the greatest value."
                }
              ]
            },
            {
              "prompt": "Find the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (8, 15)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 5)$, and a step of the second kind takes $(x, y)$ to $(x, y - 2)$.",
              "form": "Answer as an integer.",
              "answer": "35",
              "lines": [
                {
                  "step": "Find the greatest whole number $n$ for which there are pairs of whole numbers $(x_0, y_0)$, $(x_1, y_1)$ and so on to $(x_n, y_n)$ with $(x_0, y_0) = (8, 15)$, where each pair after the first comes from the pair before it by a step of one of two kinds: a step of the first kind takes $(x, y)$ to $(x - 1, y + 5)$, and a step of the second kind takes $(x, y)$ to $(x, y - 2)$.",
                  "reason": "Monovariant: this is the problem as given; whole numbers are never below $0$, so a step is possible only while it leaves both numbers of the pair at $0$ or above."
                },
                {
                  "step": "A step of the first kind changes $zx + y$ by $-z + 5$, and a step of the second kind changes it by $-2$; the two changes are equal when $z = 7$.",
                  "reason": "Isolating the variable: $z$ stands for a weight on $x$ still to be chosen, and $-z + 5 = -2$ gives $z = 5 + 2$."
                },
                {
                  "step": "Let $d_k = 7x_k + y_k$ for $k = 0, 1, \\dots, n$.",
                  "reason": "Monovariant: with the weight $7$ of line 2, both kinds of step change this number by the same amount."
                },
                {
                  "step": "After a step of the first kind, $d_{k+1} = 7(x_k - 1) + (y_k + 5) = d_k - 2$.",
                  "reason": "Multiplying out: $7(x_k - 1) = 7x_k - 7$, and $-7 + 5 = -2$."
                },
                {
                  "step": "After a step of the second kind, $d_{k+1} = 7x_k + (y_k - 2) = d_k - 2$.",
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
                  "step": "$d_0 = 7 \\cdot 8 + 15 = 71$",
                  "reason": "Substituting a value: $x_0 = 8$ and $y_0 = 15$."
                },
                {
                  "step": "$d_n \\ge 0$",
                  "reason": "Adding two inequalities: $x_n$ and $y_n$ are whole numbers, so $7x_n \\ge 0$ and $y_n \\ge 0$."
                },
                {
                  "step": "$71 - 2n \\ge 0$",
                  "reason": "Substituting a value: by lines 7 and 8, $d_n = 71 - 2n$, which goes into line 9."
                },
                {
                  "step": "$2n \\le 71$",
                  "reason": "Adding the same number: $2n$ is added to both sides of line 10."
                },
                {
                  "step": "$n \\le 35$",
                  "reason": "Multiplying by a positive number: both sides of line 11 are multiplied by $\\dfrac{1}{2}$, which gives $n \\le \\dfrac{71}{2}$, and $n$ is a whole number."
                },
                {
                  "step": "From $(8, 15)$, $8$ steps of the first kind lead to $(0, 55)$, and then $27$ steps of the second kind lead to $(0, 1)$; these are $35$ steps, and no number goes below $0$ on the way.",
                  "reason": "Attaining the bound: $15 + 8 \\cdot 5 = 55$ and $55 - 27 \\cdot 2 = 1$."
                },
                {
                  "step": "So the greatest $n$ is $35$.",
                  "reason": "Attaining the bound: a bound that is reached is the greatest value."
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "proofs": [],
  "prove": [
    {
      "id": "t244-s1",
      "method": "direct proof",
      "statement": "Let $a_0, a_1, a_2, \\dots$ be real numbers with $1 = a_0 \\le a_1 \\le a_2 \\le \\dots$, and for every whole number $n$ from $1$ up let $b_n = \\left(1 - \\dfrac{a_0}{a_1}\\right)\\dfrac{1}{\\sqrt{a_1}} + \\left(1 - \\dfrac{a_1}{a_2}\\right)\\dfrac{1}{\\sqrt{a_2}} + \\dots + \\left(1 - \\dfrac{a_{n-1}}{a_n}\\right)\\dfrac{1}{\\sqrt{a_n}}$. Prove that $0 \\le b_n < 2$ for every whole number $n$ from $1$ up. Facts it may use: telescoping bound, telescoping sum, difference of squares, single fraction, cancelling a common factor, the general subtraction formula, powers and roots of positive numbers keep the order, reciprocals of numbers of the same sign reverse the order, a product is positive when its factors have the same sign, multiplying by a positive number, adding the same number, adding two inequalities, transitivity.",
      "check": {
        "proof": [
          {
            "line": "Every $a_k$ is at least $1$, so it is positive.",
            "reason": "Transitivity: $a_k \\ge a_{k-1} \\ge \\dots \\ge a_0$, and $a_0 = 1$."
          },
          {
            "line": "Let $c_k = \\sqrt{a_k}$ for every whole number $k$; then $c_k$ is positive, $c_k^2 = a_k$, and $c_{k-1} \\le c_k$ for every whole number $k$ from $1$ up.",
            "reason": "Powers and roots of positive numbers keep the order: $a_{k-1} \\le a_k$, and both are positive by line 1."
          },
          {
            "line": "The $k$th term of $b_n$ is $\\left(1 - \\dfrac{c_{k-1}^2}{c_k^2}\\right)\\dfrac{1}{c_k} = \\dfrac{c_k^2 - c_{k-1}^2}{c_k^3}$.",
            "reason": "Single fraction: by line 2, $a_{k-1} = c_{k-1}^2$, $a_k = c_k^2$ and $\\sqrt{a_k} = c_k$, and $1 = \\dfrac{c_k^2}{c_k^2}$."
          },
          {
            "line": "$\\dfrac{c_k^2 - c_{k-1}^2}{c_k^3} = \\dfrac{(c_k - c_{k-1})(c_k + c_{k-1})}{c_k^3}$",
            "reason": "Difference of squares: the top is factored."
          },
          {
            "line": "The $k$th term of $b_n$ is at least $0$.",
            "reason": "A product is positive when its factors have the same sign and negative when they differ: by line 2, $c_k - c_{k-1}$ is at least $0$, and $c_k + c_{k-1}$ and $c_k^3$ are positive."
          },
          {
            "line": "$c_k + c_{k-1} \\le 2c_k$",
            "reason": "Adding the same number: $c_k$ is added to both sides of $c_{k-1} \\le c_k$."
          },
          {
            "line": "$\\dfrac{(c_k - c_{k-1})(c_k + c_{k-1})}{c_k^3} \\le \\dfrac{2c_k(c_k - c_{k-1})}{c_k^3}$",
            "reason": "Multiplying by a positive number: both sides of line 6 are multiplied by $\\dfrac{c_k - c_{k-1}}{c_k^3}$, which is positive or $0$; when it is $0$ the two sides are equal."
          },
          {
            "line": "$\\dfrac{2c_k(c_k - c_{k-1})}{c_k^3} = \\dfrac{2(c_k - c_{k-1})}{c_k^2}$",
            "reason": "Cancelling a common factor: $c_k$ cancels."
          },
          {
            "line": "$\\dfrac{2(c_k - c_{k-1})}{c_k^2} \\le \\dfrac{2(c_k - c_{k-1})}{c_{k-1}c_k}$",
            "reason": "Reciprocals of numbers of the same sign reverse the order: $c_k^2 \\ge c_{k-1}c_k$ and both are positive, and the top is positive or $0$."
          },
          {
            "line": "$\\dfrac{2(c_k - c_{k-1})}{c_{k-1}c_k} = \\dfrac{2}{c_{k-1}} - \\dfrac{2}{c_k}$",
            "reason": "The general subtraction formula, from arithmetic: read from right to left, over the common bottom $c_{k-1}c_k$."
          },
          {
            "line": "Put $b_0 = 0$. For $k = 1, 2, \\dots, n$, $b_k - b_{k-1} \\le \\dfrac{2}{c_{k-1}} - \\dfrac{2}{c_k}$.",
            "reason": "Transitivity: $b_k - b_{k-1}$ is the $k$th term, which by lines 3, 4, 7, 8, 9 and 10 is at most the right side."
          },
          {
            "line": "$b_n - b_0 \\le \\left(\\dfrac{2}{c_0} - \\dfrac{2}{c_1}\\right) + \\left(\\dfrac{2}{c_1} - \\dfrac{2}{c_2}\\right) + \\dots + \\left(\\dfrac{2}{c_{n-1}} - \\dfrac{2}{c_n}\\right)$",
            "reason": "Telescoping bound: line 11 bounds each of the $n$ differences from $b_1 - b_0$ to $b_n - b_{n-1}$."
          },
          {
            "line": "$b_n \\le \\dfrac{2}{c_0} - \\dfrac{2}{c_n}$",
            "reason": "Telescoping sum: each fraction taken away is added back in the next bracket, and $b_0 = 0$."
          },
          {
            "line": "$b_n < 2$",
            "reason": "Transitivity: $c_0 = \\sqrt{1} = 1$, so $\\dfrac{2}{c_0} = 2$, and $\\dfrac{2}{c_n}$ is positive."
          },
          {
            "line": "$b_n \\ge 0$",
            "reason": "Adding two inequalities: by line 5 each of the $n$ terms of $b_n$ is at least $0$."
          },
          {
            "line": "So $0 \\le b_n < 2$ for every whole number $n$ from $1$ up.",
            "reason": "Inequality chain: lines 15 and 14 are written as one chain."
          }
        ]
      }
    },
    {
      "id": "t244-s2",
      "method": "direct proof",
      "statement": "Let $a_0 < a_1 < a_2 < \\dots$ be whole numbers, all above $0$. Prove that there is exactly one whole number $n$ from $1$ up with $a_n < \\dfrac{a_0 + a_1 + \\dots + a_n}{n} \\le a_{n+1}$. Facts it may use: monovariant, telescoping bound, substituting a value, collecting like terms, multiplying by a positive number, adding the same number, transitivity, and a nonempty set of whole numbers has a least member from arithmetic.",
      "check": {
        "proof": [
          {
            "line": "Let $b_n = na_n - (a_1 + a_2 + \\dots + a_n)$ for every whole number $n$ from $1$ up; then $b_1 = 0$.",
            "reason": "Substituting a value: $b_1 = a_1 - a_1$."
          },
          {
            "line": "$b_{n+1} - b_n = n(a_{n+1} - a_n)$",
            "reason": "Collecting like terms: $b_{n+1} - b_n = (n + 1)a_{n+1} - a_{n+1} - na_n$, since the two sums differ by the term $a_{n+1}$."
          },
          {
            "line": "For every whole number $n$ from $1$ up, $b_{n+1} - b_n \\ge 1$.",
            "reason": "Multiplying by a positive number: $a_{n+1} - a_n$ is a whole number above $0$, so it is at least $1$, and it is multiplied by $n$, which is at least $1$."
          },
          {
            "line": "The numbers $b_1, b_2, b_3, \\dots$ are whole numbers that rise at every step.",
            "reason": "Monovariant: by line 3 the number $b_n$ never falls from one step to the next."
          },
          {
            "line": "The inequality $a_n < \\dfrac{a_0 + a_1 + \\dots + a_n}{n}$ holds exactly when $na_n < a_0 + a_1 + \\dots + a_n$.",
            "reason": "Multiplying by a positive number: both sides are multiplied by $n$, and multiplying by $\\dfrac{1}{n}$ leads back."
          },
          {
            "line": "The inequality $na_n < a_0 + a_1 + \\dots + a_n$ holds exactly when $b_n < a_0$.",
            "reason": "Adding the same number: $a_1 + a_2 + \\dots + a_n$ is taken from both sides, and the left side is then $b_n$ of line 1."
          },
          {
            "line": "The inequality $\\dfrac{a_0 + a_1 + \\dots + a_n}{n} \\le a_{n+1}$ holds exactly when $a_0 + a_1 + \\dots + a_n \\le na_{n+1}$.",
            "reason": "Multiplying by a positive number: both sides are multiplied by $n$, and multiplying by $\\dfrac{1}{n}$ leads back."
          },
          {
            "line": "The inequality $a_0 + a_1 + \\dots + a_n \\le na_{n+1}$ holds exactly when $a_0 \\le b_{n+1}$.",
            "reason": "Adding the same number: $a_{n+1}$ is added to both sides and $a_1 + a_2 + \\dots + a_{n+1}$ is taken from both, and the right side is then $b_{n+1}$ of line 1."
          },
          {
            "line": "So the claim is that exactly one whole number $n$ from $1$ up has $b_n < a_0 \\le b_{n+1}$.",
            "reason": "Substituting a value: lines 5, 6, 7 and 8 put the two inequalities of the statement in terms of the numbers $b_n$."
          },
          {
            "line": "For every whole number $n$ from $1$ up, $b_n \\ge n - 1$.",
            "reason": "Telescoping bound: by line 3 the $n - 1$ differences from $b_2 - b_1$ to $b_n - b_{n-1}$ are each at least $1$, and $b_1 = 0$; at $n = 1$ the line reads $b_1 \\ge 0$."
          },
          {
            "line": "So $b_{n+1} \\ge a_0$ for the whole number $n = a_0$.",
            "reason": "Substituting a value: $a_0 + 1$ goes in place of $n$ in line 10."
          },
          {
            "line": "Among the whole numbers $n$ from $1$ up with $b_{n+1} \\ge a_0$ there is a least one; call it $m$.",
            "reason": "A nonempty set of whole numbers has a least member, from arithmetic: by line 11 the number $a_0$ is one of them."
          },
          {
            "line": "Then $b_m < a_0 \\le b_{m+1}$.",
            "reason": "A nonempty set of whole numbers has a least member, from arithmetic: $m$ is the least number of line 12, so when $m$ is above $1$ the number $m - 1$ is not one of them and $b_m < a_0$; when $m = 1$, $b_1 = 0$ by line 1, which is below $a_0$."
          },
          {
            "line": "For a whole number $n$ from $1$ up that is below $m$, $b_{n+1} \\le b_m < a_0$, so $n$ does not have $a_0 \\le b_{n+1}$.",
            "reason": "Monovariant: by line 4, $b_{n+1}$ is at most $b_m$, since $n + 1 \\le m$."
          },
          {
            "line": "For a whole number $n$ above $m$, $b_n \\ge b_{m+1} \\ge a_0$, so $n$ does not have $b_n < a_0$.",
            "reason": "Monovariant: by line 4, $b_n$ is at least $b_{m+1}$, since $n \\ge m + 1$."
          },
          {
            "line": "So $m$ is the only whole number $n$ from $1$ up with $b_n < a_0 \\le b_{n+1}$, and there is exactly one whole number $n$ from $1$ up with $a_n < \\dfrac{a_0 + a_1 + \\dots + a_n}{n} \\le a_{n+1}$.",
            "reason": "Transitivity: lines 13, 14 and 15, with line 9."
          }
        ]
      }
    },
    {
      "id": "t244-s3",
      "method": "induction",
      "statement": "Let $x_0, x_1, \\dots, x_{1995}$ be positive numbers with $x_0 = x_{1995}$ and $x_{i-1} + \\dfrac{2}{x_{i-1}} = 2x_i + \\dfrac{1}{x_i}$ for $i = 1, 2, \\dots, 1995$. Prove that the greatest value $x_0$ can take is $2^{997}$. Facts it may use: induction, multiplying both sides by the same number, factoring by grouping, zero-product property, negative exponent, product law, equal powers of one base have equal exponents, exponential function is increasing, powers and roots of positive numbers keep the order, attaining the bound, and even whole numbers and absolute value from arithmetic.",
      "check": {
        "proof": [
          {
            "line": "For positive numbers $a$ and $b$, the equation $a + \\dfrac{2}{a} = 2b + \\dfrac{1}{b}$ holds exactly when $a^2b + 2b = 2ab^2 + a$.",
            "reason": "Multiplying both sides by the same number: both sides are multiplied by $ab$, which is not $0$."
          },
          {
            "line": "It holds exactly when $(a - 2b)(ab - 1) = 0$.",
            "reason": "Factoring by grouping: $a^2b - 2ab^2 - a + 2b = ab(a - 2b) - (a - 2b)$."
          },
          {
            "line": "So for each $i$ from $1$ to $1995$, $x_i = \\dfrac{x_{i-1}}{2}$ or $x_i = \\dfrac{1}{x_{i-1}}$, and each of the two gives the equation of the statement.",
            "reason": "Zero-product property: line 2 with $a = x_{i-1}$ and $b = x_i$."
          },
          {
            "line": "Claim: for each $i$ from $0$ to $1995$ there is an integer $k_i$ with $|k_i| \\le i$ for which $x_i = 2^{k_i}x_0$ and $i - k_i$ is even, or $x_i = \\dfrac{2^{k_i}}{x_0}$ and $i - k_i$ is odd.",
            "reason": "Induction: the claim on $i$ that lines 5 to 15 prove."
          },
          {
            "line": "At $i = 0$, $x_0 = 2^0x_0$, and $0 - 0$ is even.",
            "reason": "Base case: the first form with $k_0 = 0$."
          },
          {
            "line": "Assume the claim at $i$, for some whole number $i$ from $0$ to $1994$.",
            "reason": "Inductive assumption: one of the two forms holds for $x_i$."
          },
          {
            "line": "If $x_{i+1} = \\dfrac{x_i}{2}$, then $x_{i+1}$ has the form of $x_i$ with $k_i - 1$ in place of $k_i$.",
            "reason": "Product law: halving multiplies by $2^{-1}$, and $2^{-1} \\cdot 2^{k_i} = 2^{k_i - 1}$."
          },
          {
            "line": "The number $(i + 1) - (k_i - 1)$ is even when $i - k_i$ is even, and odd when $i - k_i$ is odd.",
            "reason": "Even whole numbers, from arithmetic: $(i + 1) - (k_i - 1)$ is $i - k_i$ plus $2$."
          },
          {
            "line": "$|k_i - 1| \\le i + 1$",
            "reason": "Absolute value, from arithmetic: by line 6, $k_i$ is from $-i$ to $i$, so $k_i - 1$ is from $-i - 1$ to $i - 1$."
          },
          {
            "line": "So if $x_{i+1} = \\dfrac{x_i}{2}$, the claim holds at $i + 1$ with $k_{i+1} = k_i - 1$ and the same form as at $i$.",
            "reason": "Inductive step: lines 7, 8 and 9 give the three parts of the claim."
          },
          {
            "line": "If $x_{i+1} = \\dfrac{1}{x_i}$, then $x_{i+1}$ has the other of the two forms, with $-k_i$ in place of $k_i$.",
            "reason": "Negative exponent: the reciprocal of $2^{k_i}x_0$ is $\\dfrac{2^{-k_i}}{x_0}$, and the reciprocal of $\\dfrac{2^{k_i}}{x_0}$ is $2^{-k_i}x_0$."
          },
          {
            "line": "The number $(i + 1) + k_i$ is odd when $i - k_i$ is even, and even when $i - k_i$ is odd.",
            "reason": "Even whole numbers, from arithmetic: $(i + 1) + k_i$ is $i - k_i$ plus the odd number $2k_i + 1$."
          },
          {
            "line": "$|-k_i| \\le i + 1$",
            "reason": "Absolute value, from arithmetic: $|-k_i| = |k_i|$, which is at most $i$ by line 6, and $i$ is below $i + 1$."
          },
          {
            "line": "So if $x_{i+1} = \\dfrac{1}{x_i}$, the claim holds at $i + 1$ with $k_{i+1} = -k_i$ and the other form.",
            "reason": "Inductive step: lines 11, 12 and 13 give the three parts of the claim."
          },
          {
            "line": "So the claim holds for every $i$ from $0$ to $1995$.",
            "reason": "Induction: the base case is line 5 and the inductive step is lines 6 to 14, with line 3."
          },
          {
            "line": "At $i = 1995$ the first form does not hold.",
            "reason": "Equal powers of one base have equal exponents: $x_0 = x_{1995} = 2^{k}x_0$ would give $2^{k} = 1 = 2^0$ and $k = 0$, but $1995 - 0$ is odd."
          },
          {
            "line": "So $x_0 = \\dfrac{2^{k}}{x_0}$ for an integer $k$ with $|k| \\le 1995$ and $1995 - k$ odd.",
            "reason": "Substituting a value: by lines 15 and 16 the second form holds at $i = 1995$, where $x_{1995} = x_0$."
          },
          {
            "line": "The integer $k$ is even.",
            "reason": "Even whole numbers, from arithmetic: $k = 1995 - (1995 - k)$ is the difference of two odd numbers."
          },
          {
            "line": "So $k \\le 1994$.",
            "reason": "Absolute value, from arithmetic: $k \\le |k| \\le 1995$ by line 17, and $k$ is not the odd number $1995$ by line 18."
          },
          {
            "line": "$x_0^2 = 2^{k}$",
            "reason": "Multiplying both sides by the same number: both sides of the equation of line 17 are multiplied by $x_0$."
          },
          {
            "line": "$x_0^2 \\le 2^{1994}$",
            "reason": "Exponential function is increasing: $k \\le 1994$ by line 19, so $2^{k} \\le 2^{1994}$, and line 20."
          },
          {
            "line": "$x_0 \\le 2^{997}$",
            "reason": "Powers and roots of positive numbers keep the order: $2^{1994} = \\left(2^{997}\\right)^2$, and $x_0$ is positive."
          },
          {
            "line": "The numbers $x_i = 2^{997 - i}$ for $i = 0, 1, \\dots, 1994$, with $x_{1995} = 2^{997}$, meet the conditions.",
            "reason": "Attaining the bound: each $x_i$ up to $x_{1994}$ is half the number before it, $x_{1995}$ is the reciprocal of $x_{1994} = 2^{-997}$, so by line 3 every equation holds, and $x_{1995} = x_0$."
          },
          {
            "line": "So the greatest value $x_0$ can take is $2^{997}$.",
            "reason": "Attaining the bound: a bound that is reached is the greatest value."
          }
        ]
      }
    }
  ]
}
