export default {
  "number": 231,
  "title": "The Rearrangement Inequality",
  "section": 22,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "593-600"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the greatest sum that can be made by pairing each of the numbers $9$, $-5$ and $2$ with one of the numbers $4$, $8$ and $-3$, each number used once, multiplying each pair and adding the products.",
    "form": "Answer as an integer.",
    "answer": "95",
    "solution": [
      "The lists are $9$, $-5$ and $2$, and $4$, $8$ and $-3$; the greatest sum of the products is wanted.",
      "In increasing order the lists are $-5 \\le 2 \\le 9$ and $-3 \\le 4 \\le 8$.",
      "The greatest sum pairs them in the same order: $(-5) \\cdot (-3) + 2 \\cdot 4 + 9 \\cdot 8$.",
      "$(-5) \\cdot (-3) + 2 \\cdot 4 + 9 \\cdot 8 = 95$"
    ]
  },
  "ideas": [
    {
      "name": "Rearrangement Inequality",
      "concrete": "Pair each of $2$, $6$, $7$ with one of $3$, $4$, $9$ and add the products. The six sums are $2 \\cdot 3 + 6 \\cdot 4 + 7 \\cdot 9 = 93$, $2 \\cdot 4 + 6 \\cdot 3 + 7 \\cdot 9 = 89$, $2 \\cdot 3 + 6 \\cdot 9 + 7 \\cdot 4 = 88$, $2 \\cdot 4 + 6 \\cdot 9 + 7 \\cdot 3 = 83$, $2 \\cdot 9 + 6 \\cdot 3 + 7 \\cdot 4 = 64$ and $2 \\cdot 9 + 6 \\cdot 4 + 7 \\cdot 3 = 63$. The greatest pairs the lists in the same order, the least in opposite orders.",
      "general": "For real numbers $x_1 \\le x_2 \\le \\cdots \\le x_n$ and $y_1 \\le y_2 \\le \\cdots \\le y_n$, every sum that pairs each $x_k$ with one $y_k$, each used once, and adds the products lies between the sum in opposite orders and the sum in the same order: the **Rearrangement Inequality** $x_1y_n + x_2y_{n-1} + \\cdots + x_ny_1 \\le$ (every such sum) $\\le x_1y_1 + x_2y_2 + \\cdots + x_ny_n$.",
      "definitions": [
        "Rearrangement Inequality"
      ]
    }
  ],
  "kinds": [
    {
      "id": "t231-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the greatest sum that can be made by pairing each of the numbers $-8$, $3$, $15$ and $-12$ with one of the numbers $16$, $2$, $10$ and $-4$, each number used once, multiplying each pair and adding the products.",
            "lines": [
              {
                "step": "The lists are $-8$, $3$, $15$ and $-12$, and $16$, $2$, $10$ and $-4$; the greatest sum of the products is wanted.",
                "reason": "This is the problem as given."
              },
              {
                "step": "In increasing order the lists are $-12 \\le -8 \\le 3 \\le 15$ and $-4 \\le 2 \\le 10 \\le 16$.",
                "reason": "Rearrangement Inequality: it compares the pairings of two lists written in increasing order."
              },
              {
                "step": "The greatest sum pairs them in the same order: $(-12) \\cdot (-4) + (-8) \\cdot 2 + 3 \\cdot 10 + 15 \\cdot 16$.",
                "reason": "Rearrangement Inequality: two lists in the same order give the greatest sum of products."
              },
              {
                "step": "$(-12) \\cdot (-4) + (-8) \\cdot 2 + 3 \\cdot 10 + 15 \\cdot 16 = 302$",
                "reason": "order of operations (arithmetic's): each product first, then the sum."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the least sum that can be made by pairing each of the numbers $-9$, $9$ and $-12$ with one of the numbers $-6$, $16$ and $3$, each number used once, multiplying each pair and adding the products.",
              "form": "Answer as an integer.",
              "answer": "-273",
              "lines": [
                {
                  "step": "The lists are $-9$, $9$ and $-12$, and $-6$, $16$ and $3$; the least sum of the products is wanted.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In increasing order the lists are $-12 \\le -9 \\le 9$ and $-6 \\le 3 \\le 16$.",
                  "reason": "Rearrangement Inequality: it compares the pairings of two lists written in increasing order."
                },
                {
                  "step": "The least sum pairs them in opposite orders: $(-12) \\cdot 16 + (-9) \\cdot 3 + 9 \\cdot (-6)$.",
                  "reason": "Rearrangement Inequality: two lists in opposite orders give the least sum of products."
                },
                {
                  "step": "$(-12) \\cdot 16 + (-9) \\cdot 3 + 9 \\cdot (-6) = -273$",
                  "reason": "order of operations (arithmetic's): each product first, then the sum."
                }
              ]
            },
            {
              "prompt": "Find the greatest sum that can be made by pairing each of the numbers $13$, $-11$ and $12$ with one of the numbers $-10$, $6$ and $12$, each number used once, multiplying each pair and adding the products.",
              "form": "Answer as an integer.",
              "answer": "338",
              "lines": [
                {
                  "step": "The lists are $13$, $-11$ and $12$, and $-10$, $6$ and $12$; the greatest sum of the products is wanted.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In increasing order the lists are $-11 \\le 12 \\le 13$ and $-10 \\le 6 \\le 12$.",
                  "reason": "Rearrangement Inequality: it compares the pairings of two lists written in increasing order."
                },
                {
                  "step": "The greatest sum pairs them in the same order: $(-11) \\cdot (-10) + 12 \\cdot 6 + 13 \\cdot 12$.",
                  "reason": "Rearrangement Inequality: two lists in the same order give the greatest sum of products."
                },
                {
                  "step": "$(-11) \\cdot (-10) + 12 \\cdot 6 + 13 \\cdot 12 = 338$",
                  "reason": "order of operations (arithmetic's): each product first, then the sum."
                }
              ]
            },
            {
              "prompt": "Find the least sum that can be made by pairing each of the numbers $-11$, $-5$, $-9$ and $3$ with one of the numbers $16$, $8$, $2$ and $3$, each number used once, multiplying each pair and adding the products.",
              "form": "Answer as an integer.",
              "answer": "-257",
              "lines": [
                {
                  "step": "The lists are $-11$, $-5$, $-9$ and $3$, and $16$, $8$, $2$ and $3$; the least sum of the products is wanted.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "In increasing order the lists are $-11 \\le -9 \\le -5 \\le 3$ and $2 \\le 3 \\le 8 \\le 16$.",
                  "reason": "Rearrangement Inequality: it compares the pairings of two lists written in increasing order."
                },
                {
                  "step": "The least sum pairs them in opposite orders: $(-11) \\cdot 16 + (-9) \\cdot 8 + (-5) \\cdot 3 + 3 \\cdot 2$.",
                  "reason": "Rearrangement Inequality: two lists in opposite orders give the least sum of products."
                },
                {
                  "step": "$(-11) \\cdot 16 + (-9) \\cdot 8 + (-5) \\cdot 3 + 3 \\cdot 2 = -257$",
                  "reason": "order of operations (arithmetic's): each product first, then the sum."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the greatest number of parts three machines can make, where the machines make $4$, $18$ and $11$ parts an hour, three shifts last $23$, $13$ and $19$ hours, and each machine runs for exactly one shift.",
            "lines": [
              {
                "step": "The numbers are $4$, $18$ and $11$, and $23$, $13$ and $19$; the greatest total is wanted.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The total is a sum of three products, parts made by a machine = parts an hour $\\times$ hours of its shift, one for each pair.",
                "reason": "rate (arithmetic's): an amount for each unit times the units."
              },
              {
                "step": "In increasing order the lists are $4 \\le 11 \\le 18$ and $13 \\le 19 \\le 23$.",
                "reason": "Rearrangement Inequality: it compares the pairings of two lists written in increasing order."
              },
              {
                "step": "The greatest total pairs them in the same order: $4 \\cdot 13 + 11 \\cdot 19 + 18 \\cdot 23$.",
                "reason": "Rearrangement Inequality: two lists in the same order give the greatest sum of products."
              },
              {
                "step": "$4 \\cdot 13 + 11 \\cdot 19 + 18 \\cdot 23 = 675$",
                "reason": "order of operations (arithmetic's): each product first, then the sum."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the least number of litres of fuel three vans can burn, where the vans burn $6$, $10$ and $16$ litres for each hour of driving, three routes take $4$, $21$ and $16$ hours, and each van drives exactly one route.",
              "form": "Answer as an integer.",
              "answer": "350",
              "lines": [
                {
                  "step": "The numbers are $6$, $10$ and $16$, and $4$, $21$ and $16$; the least total is wanted.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The total is a sum of three products, fuel burnt by a van = litres an hour $\\times$ hours of its route, one for each pair.",
                  "reason": "rate (arithmetic's): an amount for each unit times the units."
                },
                {
                  "step": "In increasing order the lists are $6 \\le 10 \\le 16$ and $4 \\le 16 \\le 21$.",
                  "reason": "Rearrangement Inequality: it compares the pairings of two lists written in increasing order."
                },
                {
                  "step": "The least total pairs them in opposite orders: $6 \\cdot 21 + 10 \\cdot 16 + 16 \\cdot 4$.",
                  "reason": "Rearrangement Inequality: two lists in opposite orders give the least sum of products."
                },
                {
                  "step": "$6 \\cdot 21 + 10 \\cdot 16 + 16 \\cdot 4 = 350$",
                  "reason": "order of operations (arithmetic's): each product first, then the sum."
                }
              ]
            },
            {
              "prompt": "Find the greatest takings, in pounds, of a hall with three rows of $20$, $8$ and $28$ seats, where the prices $2$, $6$ and $11$ pounds a seat are each given to one row and every seat is sold.",
              "form": "Answer as an integer.",
              "answer": "444",
              "lines": [
                {
                  "step": "The numbers are $2$, $6$ and $11$, and $20$, $8$ and $28$; the greatest total is wanted.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The total is a sum of three products, takings of a row = price of a seat $\\times$ seats in the row, one for each pair.",
                  "reason": "rate (arithmetic's): an amount for each unit times the units."
                },
                {
                  "step": "In increasing order the lists are $2 \\le 6 \\le 11$ and $8 \\le 20 \\le 28$.",
                  "reason": "Rearrangement Inequality: it compares the pairings of two lists written in increasing order."
                },
                {
                  "step": "The greatest total pairs them in the same order: $2 \\cdot 8 + 6 \\cdot 20 + 11 \\cdot 28$.",
                  "reason": "Rearrangement Inequality: two lists in the same order give the greatest sum of products."
                },
                {
                  "step": "$2 \\cdot 8 + 6 \\cdot 20 + 11 \\cdot 28 = 444$",
                  "reason": "order of operations (arithmetic's): each product first, then the sum."
                }
              ]
            },
            {
              "prompt": "Find the least total number of minutes three painters spend painting, where they take $12$, $13$ and $15$ minutes to paint one square metre, three walls measure $22$, $21$ and $4$ square metres, and each painter paints exactly one wall.",
              "form": "Answer as an integer.",
              "answer": "597",
              "lines": [
                {
                  "step": "The numbers are $12$, $13$ and $15$, and $22$, $21$ and $4$; the least total is wanted.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The total is a sum of three products, minutes on a wall = minutes a square metre $\\times$ square metres of the wall, one for each pair.",
                  "reason": "rate (arithmetic's): an amount for each unit times the units."
                },
                {
                  "step": "In increasing order the lists are $12 \\le 13 \\le 15$ and $4 \\le 21 \\le 22$.",
                  "reason": "Rearrangement Inequality: it compares the pairings of two lists written in increasing order."
                },
                {
                  "step": "The least total pairs them in opposite orders: $12 \\cdot 22 + 13 \\cdot 21 + 15 \\cdot 4$.",
                  "reason": "Rearrangement Inequality: two lists in opposite orders give the least sum of products."
                },
                {
                  "step": "$12 \\cdot 22 + 13 \\cdot 21 + 15 \\cdot 4 = 597$",
                  "reason": "order of operations (arithmetic's): each product first, then the sum."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t231-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the greatest of the six sums that pair each of the numbers $-10$, $7$ and $13$ with one of $x$, $y$ and $z$ and add the products, for real numbers with $x \\ge y \\ge z$.",
            "lines": [
              {
                "step": "The letters are in the order $x \\ge y \\ge z$ and the numbers are $-10$, $7$ and $13$; the greatest sum is wanted.",
                "reason": "This is the problem as given."
              },
              {
                "step": "From greatest to least the numbers are $13 \\ge 7 \\ge -10$, the order of $x$, $y$, $z$.",
                "reason": "Rearrangement Inequality: it compares pairings of two lists put in the same order."
              },
              {
                "step": "The greatest sum pairs $13$ with $x$, $7$ with $y$ and $-10$ with $z$.",
                "reason": "Rearrangement Inequality: two lists in the same order give the greatest sum of products."
              },
              {
                "step": "The sum is $13x + 7y - 10z$.",
                "reason": "laws of addition and multiplication (arithmetic's): the products written in the order $x$, $y$, $z$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greatest of the six sums that pair each of the numbers $-4$, $4$ and $7$ with one of $x$, $y$ and $z$ and add the products, for real numbers with $y \\ge z \\ge x$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "-4*x+7*y+4*z",
              "lines": [
                {
                  "step": "The letters are in the order $y \\ge z \\ge x$ and the numbers are $-4$, $4$ and $7$; the greatest sum is wanted.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "From greatest to least the numbers are $7 \\ge 4 \\ge -4$, the order of $y$, $z$, $x$.",
                  "reason": "Rearrangement Inequality: it compares pairings of two lists put in the same order."
                },
                {
                  "step": "The greatest sum pairs $7$ with $y$, $4$ with $z$ and $-4$ with $x$.",
                  "reason": "Rearrangement Inequality: two lists in the same order give the greatest sum of products."
                },
                {
                  "step": "The sum is $-4x + 7y + 4z$.",
                  "reason": "laws of addition and multiplication (arithmetic's): the products written in the order $x$, $y$, $z$."
                }
              ]
            },
            {
              "prompt": "Find the least of the six sums that pair each of the numbers $-5$, $13$ and $3$ with one of $x$, $y$ and $z$ and add the products, for real numbers with $z \\ge x \\ge y$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "3*x+13*y-5*z",
              "lines": [
                {
                  "step": "The letters are in the order $z \\ge x \\ge y$ and the numbers are $-5$, $13$ and $3$; the least sum is wanted.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "From greatest to least the numbers are $13 \\ge 3 \\ge -5$, the order of $z$, $x$, $y$.",
                  "reason": "Rearrangement Inequality: it compares pairings of two lists put in the same order."
                },
                {
                  "step": "The least sum pairs $-5$ with $z$, $3$ with $x$ and $13$ with $y$.",
                  "reason": "Rearrangement Inequality: two lists in opposite orders give the least sum of products."
                },
                {
                  "step": "The sum is $3x + 13y - 5z$.",
                  "reason": "laws of addition and multiplication (arithmetic's): the products written in the order $x$, $y$, $z$."
                }
              ]
            },
            {
              "prompt": "Find the least of the six sums that pair each of the numbers $-14$, $12$ and $-10$ with one of $x$, $y$ and $z$ and add the products, for real numbers with $x \\ge z \\ge y$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "-14*x+12*y-10*z",
              "lines": [
                {
                  "step": "The letters are in the order $x \\ge z \\ge y$ and the numbers are $-14$, $12$ and $-10$; the least sum is wanted.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "From greatest to least the numbers are $12 \\ge -10 \\ge -14$, the order of $x$, $z$, $y$.",
                  "reason": "Rearrangement Inequality: it compares pairings of two lists put in the same order."
                },
                {
                  "step": "The least sum pairs $-14$ with $x$, $-10$ with $z$ and $12$ with $y$.",
                  "reason": "Rearrangement Inequality: two lists in opposite orders give the least sum of products."
                },
                {
                  "step": "The sum is $-14x + 12y - 10z$.",
                  "reason": "laws of addition and multiplication (arithmetic's): the products written in the order $x$, $y$, $z$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the least value of $8x - 12y - 13z$ for real numbers $x \\ge y \\ge z$ with $x + y + z = 51$.",
            "lines": [
              {
                "step": "The sum is $8x - 12y - 13z$, with $x \\ge y \\ge z$ and $x + y + z = 51$; its least value is wanted.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The numbers $8 \\ge -12 \\ge -13$ and the letters $x \\ge y \\ge z$ are in the same order.",
                "reason": "Rearrangement Inequality: the common order of the two lists is stated first."
              },
              {
                "step": "$8x - 12y - 13z \\ge 8y - 12z - 13x$",
                "reason": "Rearrangement Inequality: the numbers moved one place along the letters give a second pairing."
              },
              {
                "step": "$8x - 12y - 13z \\ge 8z - 12x - 13y$",
                "reason": "Rearrangement Inequality: the numbers moved two places along the letters give a third pairing."
              },
              {
                "step": "$3(8x - 12y - 13z) \\ge (8x - 12y - 13z) + (8y - 12z - 13x) + (8z - 12x - 13y)$",
                "reason": "adding two inequalities (arithmetic's): the third and fourth lines and the sum itself added."
              },
              {
                "step": "$3(8x - 12y - 13z) \\ge (8 - 12 - 13)(x + y + z)$",
                "reason": "distributive law (arithmetic's): the right side collected, each letter taking all three numbers."
              },
              {
                "step": "$3(8x - 12y - 13z) \\ge -17 \\cdot 51$",
                "reason": "Substituting a value: $x + y + z$ is replaced by its value."
              },
              {
                "step": "$3(8x - 12y - 13z) \\ge -867$",
                "reason": "order of operations (arithmetic's): the product worked out."
              },
              {
                "step": "$8x - 12y - 13z \\ge -289$",
                "reason": "multiplying by a positive number (arithmetic's): both sides multiplied by $\\dfrac{1}{3}$."
              },
              {
                "step": "The bound is reached at $x = y = z = 17$, so the least value is $-289$.",
                "reason": "Attaining the bound: at equal letters the lists stay in the same order and the sum equals the bound."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the least value of $-10y + 2x - 14z$ for real numbers $x \\ge y \\ge z$ with $x + y + z = -51$.",
              "form": "Answer as an integer.",
              "answer": "374",
              "lines": [
                {
                  "step": "The sum is $-10y + 2x - 14z$, with $x \\ge y \\ge z$ and $x + y + z = -51$; its least value is wanted.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The numbers $2 \\ge -10 \\ge -14$ and the letters $x \\ge y \\ge z$ are in the same order.",
                  "reason": "Rearrangement Inequality: the common order of the two lists is stated first."
                },
                {
                  "step": "$2x - 10y - 14z \\ge 2y - 10z - 14x$",
                  "reason": "Rearrangement Inequality: the numbers moved one place along the letters give a second pairing."
                },
                {
                  "step": "$2x - 10y - 14z \\ge 2z - 10x - 14y$",
                  "reason": "Rearrangement Inequality: the numbers moved two places along the letters give a third pairing."
                },
                {
                  "step": "$3(2x - 10y - 14z) \\ge (2x - 10y - 14z) + (2y - 10z - 14x) + (2z - 10x - 14y)$",
                  "reason": "adding two inequalities (arithmetic's): the third and fourth lines and the sum itself added."
                },
                {
                  "step": "$3(2x - 10y - 14z) \\ge (2 - 10 - 14)(x + y + z)$",
                  "reason": "distributive law (arithmetic's): the right side collected, each letter taking all three numbers."
                },
                {
                  "step": "$3(2x - 10y - 14z) \\ge -22 \\cdot (-51)$",
                  "reason": "Substituting a value: $x + y + z$ is replaced by its value."
                },
                {
                  "step": "$3(2x - 10y - 14z) \\ge 1122$",
                  "reason": "order of operations (arithmetic's): the product worked out."
                },
                {
                  "step": "$2x - 10y - 14z \\ge 374$",
                  "reason": "multiplying by a positive number (arithmetic's): both sides multiplied by $\\dfrac{1}{3}$."
                },
                {
                  "step": "The bound is reached at $x = y = z = -17$, so the least value is $374$.",
                  "reason": "Attaining the bound: at equal letters the lists stay in the same order and the sum equals the bound."
                }
              ]
            },
            {
              "prompt": "Find the least value of $11x + 6y - 7z$ for real numbers $x \\ge y \\ge z$ with $x + y + z = -39$.",
              "form": "Answer as an integer.",
              "answer": "-130",
              "lines": [
                {
                  "step": "The sum is $11x + 6y - 7z$, with $x \\ge y \\ge z$ and $x + y + z = -39$; its least value is wanted.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The numbers $11 \\ge 6 \\ge -7$ and the letters $x \\ge y \\ge z$ are in the same order.",
                  "reason": "Rearrangement Inequality: the common order of the two lists is stated first."
                },
                {
                  "step": "$11x + 6y - 7z \\ge 11y + 6z - 7x$",
                  "reason": "Rearrangement Inequality: the numbers moved one place along the letters give a second pairing."
                },
                {
                  "step": "$11x + 6y - 7z \\ge 11z + 6x - 7y$",
                  "reason": "Rearrangement Inequality: the numbers moved two places along the letters give a third pairing."
                },
                {
                  "step": "$3(11x + 6y - 7z) \\ge (11x + 6y - 7z) + (11y + 6z - 7x) + (11z + 6x - 7y)$",
                  "reason": "adding two inequalities (arithmetic's): the third and fourth lines and the sum itself added."
                },
                {
                  "step": "$3(11x + 6y - 7z) \\ge (11 + 6 - 7)(x + y + z)$",
                  "reason": "distributive law (arithmetic's): the right side collected, each letter taking all three numbers."
                },
                {
                  "step": "$3(11x + 6y - 7z) \\ge 10 \\cdot (-39)$",
                  "reason": "Substituting a value: $x + y + z$ is replaced by its value."
                },
                {
                  "step": "$3(11x + 6y - 7z) \\ge -390$",
                  "reason": "order of operations (arithmetic's): the product worked out."
                },
                {
                  "step": "$11x + 6y - 7z \\ge -130$",
                  "reason": "multiplying by a positive number (arithmetic's): both sides multiplied by $\\dfrac{1}{3}$."
                },
                {
                  "step": "The bound is reached at $x = y = z = -13$, so the least value is $-130$.",
                  "reason": "Attaining the bound: at equal letters the lists stay in the same order and the sum equals the bound."
                }
              ]
            },
            {
              "prompt": "Find the least value of $8y + 14x - 8z$ for real numbers $x \\ge y \\ge z$ with $x + y + z = 48$.",
              "form": "Answer as an integer.",
              "answer": "224",
              "lines": [
                {
                  "step": "The sum is $8y + 14x - 8z$, with $x \\ge y \\ge z$ and $x + y + z = 48$; its least value is wanted.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The numbers $14 \\ge 8 \\ge -8$ and the letters $x \\ge y \\ge z$ are in the same order.",
                  "reason": "Rearrangement Inequality: the common order of the two lists is stated first."
                },
                {
                  "step": "$14x + 8y - 8z \\ge 14y + 8z - 8x$",
                  "reason": "Rearrangement Inequality: the numbers moved one place along the letters give a second pairing."
                },
                {
                  "step": "$14x + 8y - 8z \\ge 14z + 8x - 8y$",
                  "reason": "Rearrangement Inequality: the numbers moved two places along the letters give a third pairing."
                },
                {
                  "step": "$3(14x + 8y - 8z) \\ge (14x + 8y - 8z) + (14y + 8z - 8x) + (14z + 8x - 8y)$",
                  "reason": "adding two inequalities (arithmetic's): the third and fourth lines and the sum itself added."
                },
                {
                  "step": "$3(14x + 8y - 8z) \\ge (14 + 8 - 8)(x + y + z)$",
                  "reason": "distributive law (arithmetic's): the right side collected, each letter taking all three numbers."
                },
                {
                  "step": "$3(14x + 8y - 8z) \\ge 14 \\cdot 48$",
                  "reason": "Substituting a value: $x + y + z$ is replaced by its value."
                },
                {
                  "step": "$3(14x + 8y - 8z) \\ge 672$",
                  "reason": "order of operations (arithmetic's): the product worked out."
                },
                {
                  "step": "$14x + 8y - 8z \\ge 224$",
                  "reason": "multiplying by a positive number (arithmetic's): both sides multiplied by $\\dfrac{1}{3}$."
                },
                {
                  "step": "The bound is reached at $x = y = z = 16$, so the least value is $224$.",
                  "reason": "Attaining the bound: at equal letters the lists stay in the same order and the sum equals the bound."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t231-k3",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the least value of $9x - 4y - 9z$ for real numbers $x \\ge y \\ge z$ with $x + y + z = 84$, and write that line right.",
            "given": [
              "The numbers $9 \\ge -4 \\ge -9$ and the letters $x \\ge y \\ge z$ are in the same order.",
              "$9x - 4y - 9z \\ge 9y - 4z - 9x$",
              "$9x - 4y - 9z \\ge 9z - 4x - 9y$",
              "$3(9x - 4y - 9z) \\ge (9x - 4y - 9z) + (9y - 4z - 9x) + (9z - 4x - 9y)$",
              "$3(9x - 4y - 9z) \\ge (9 - 4 - 9)(x + y + z)$",
              "$3(9x - 4y - 9z) \\ge -4 \\cdot 84$",
              "$3(9x - 4y - 9z) \\ge 336$",
              "$9x - 4y - 9z \\ge 112$",
              "The bound is reached at $x = y = z = 28$, so the least value is $112$."
            ],
            "lines": [
              {
                "step": "The working finds the least value of $9x - 4y - 9z$ for $x \\ge y \\ge z$ with $x + y + z = 84$; its first wrong line is wanted.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 1 to 6 are right: the common order, the two moved pairings, their sum, the right side collected and the value substituted.",
                "reason": "Rearrangement Inequality, adding two inequalities (arithmetic's), distributive law (arithmetic's) and Substituting a value: each of these lines follows from those before it."
              },
              {
                "step": "Line 7 works out $-4 \\cdot 84$ with the sign of the product lost.",
                "reason": "a sign lost: a positive number times a negative number is negative (arithmetic's)."
              },
              {
                "step": "Line 7 written right is $3(9x - 4y - 9z) \\ge -336$.",
                "reason": "the line worked again with every sign kept."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the least value of $13x - 3y - 13z$ for real numbers $x \\ge y \\ge z$ with $x + y + z = 114$, and write that line right.",
              "given": [
                "The numbers $13 \\ge -3 \\ge -13$ and the letters $x \\ge y \\ge z$ are in the same order.",
                "$13x - 3y - 13z \\ge 13y - 3z - 13x$",
                "$13x - 3y - 13z \\ge 13z - 3x - 13y$",
                "$3(13x - 3y - 13z) \\ge (13x - 3y - 13z) + (13y - 3z - 13x) + (13z - 3x - 13y)$",
                "$3(13x - 3y - 13z) \\ge (13 - 3 + 13)(x + y + z)$",
                "$3(13x - 3y - 13z) \\ge 23 \\cdot 114$",
                "$3(13x - 3y - 13z) \\ge 2622$",
                "$13x - 3y - 13z \\ge 874$",
                "The bound is reached at $x = y = z = 38$, so the least value is $874$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: 3*(13*x-3*y-13*z) >= (13-3-13)*(x+y+z)",
              "lines": [
                {
                  "step": "The working finds the least value of $13x - 3y - 13z$ for $x \\ge y \\ge z$ with $x + y + z = 114$; its first wrong line is wanted.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 4 are right: the common order, the two moved pairings and their sum.",
                  "reason": "Rearrangement Inequality and adding two inequalities (arithmetic's): each of these lines follows from those before it."
                },
                {
                  "step": "Line 5 adds the numbers $13$, $-3$ and $-13$ but writes $13$ for $-13$: the sign of $-13$ is lost.",
                  "reason": "a sign lost: the sum of the numbers keeps each sign."
                },
                {
                  "step": "Line 5 written right is $3(13x - 3y - 13z) \\ge (13 - 3 - 13)(x + y + z)$.",
                  "reason": "the line worked again with every sign kept."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the least value of $7x - 6y - 14z$ for real numbers $x \\ge y \\ge z$ with $x + y + z = 108$, and write that line right.",
              "given": [
                "The numbers $7 \\ge -6 \\ge -14$ and the letters $x \\ge y \\ge z$ are in the same order.",
                "$7x - 6y - 14z \\ge 7y - 6z - 14x$",
                "$7x - 6y - 14z \\ge 7z - 6x - 14y$",
                "$3(7x - 6y - 14z) \\ge (7x - 6y - 14z) + (7y - 6z - 14x) + (7z - 6x - 14y)$",
                "$3(7x - 6y - 14z) \\ge (7 - 6 - 14)(x + y + z)$",
                "$3(7x - 6y - 14z) \\ge -13 \\cdot 108$",
                "$3(7x - 6y - 14z) \\ge -1404$",
                "$7x - 6y - 14z \\ge 468$",
                "The bound is reached at $x = y = z = 36$, so the least value is $468$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 8: 7*x-6*y-14*z >= -468",
              "lines": [
                {
                  "step": "The working finds the least value of $7x - 6y - 14z$ for $x \\ge y \\ge z$ with $x + y + z = 108$; its first wrong line is wanted.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 7 are right: the common order, the two moved pairings, their sum, the right side collected, the value substituted and the product.",
                  "reason": "Rearrangement Inequality, adding two inequalities (arithmetic's), distributive law (arithmetic's), Substituting a value and order of operations (arithmetic's): each of these lines follows from those before it."
                },
                {
                  "step": "Line 8 divides Line 7 by $3$ and loses the sign.",
                  "reason": "a sign lost: multiplying by a positive number (arithmetic's) keeps the sign of each side."
                },
                {
                  "step": "Line 8 written right is $7x - 6y - 14z \\ge -468$.",
                  "reason": "the line worked again with every sign kept."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the least value of $9x - 6y - 11z$ for real numbers $x \\ge y \\ge z$ with $x + y + z = 63$, and write that line right.",
              "given": [
                "The numbers $9 \\ge -6 \\ge -11$ and the letters $x \\ge y \\ge z$ are in the same order.",
                "$9x - 6y - 11z \\ge 9y - 6z - 11x$",
                "$9x - 6y - 11z \\ge 9z - 6x - 11y$",
                "$3(9x - 6y - 11z) \\ge (9x - 6y - 11z) + (9y - 6z - 11x) + (9z - 6x - 11y)$",
                "$3(9x - 6y - 11z) \\ge (9 - 6 + 11)(x + y + z)$",
                "$3(9x - 6y - 11z) \\ge 14 \\cdot 63$",
                "$3(9x - 6y - 11z) \\ge 882$",
                "$9x - 6y - 11z \\ge 294$",
                "The bound is reached at $x = y = z = 21$, so the least value is $294$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: 3*(9*x-6*y-11*z) >= (9-6-11)*(x+y+z)",
              "lines": [
                {
                  "step": "The working finds the least value of $9x - 6y - 11z$ for $x \\ge y \\ge z$ with $x + y + z = 63$; its first wrong line is wanted.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 4 are right: the common order, the two moved pairings and their sum.",
                  "reason": "Rearrangement Inequality and adding two inequalities (arithmetic's): each of these lines follows from those before it."
                },
                {
                  "step": "Line 5 adds the numbers $9$, $-6$ and $-11$ but writes $11$ for $-11$: the sign of $-11$ is lost.",
                  "reason": "a sign lost: the sum of the numbers keeps each sign."
                },
                {
                  "step": "Line 5 written right is $3(9x - 6y - 11z) \\ge (9 - 6 - 11)(x + y + z)$.",
                  "reason": "the line worked again with every sign kept."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t231-k4",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: pairing the numbers $11$, $8$ and $9$ with $x$, $x + 5$ and $x + 7$ in the order written, multiplying each pair and adding the products gives $y$.",
            "lines": [
              {
                "step": "The sentence is: Pairing the numbers $11$, $8$ and $9$ with $x$, $x + 5$ and $x + 7$ in the order written, multiplying each pair and adding the products gives $y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The pairs are $11$ with $x$, $8$ with $x + 5$, $9$ with $x + 7$.",
                "reason": "Writing a sentence as an equation: each pairing is read in the order the sentence gives."
              },
              {
                "step": "The sum of the products is $11x + 8(x + 5) + 9(x + 7)$.",
                "reason": "Writing a sentence as an equation: each pair becomes a product, and the products are added."
              },
              {
                "step": "$y = 11x + 8(x + 5) + 9(x + 7)$",
                "reason": "Writing a sentence as an equation: the sum is $y$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: pairing the first of the numbers $-11$, $-9$ and $12$ with the last of $x$, $x + 7$ and $x + 9$, the second with the second and the last with the first, then multiplying each pair and adding the products, gives $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = -11*(x+9)-9*(x+7)+12*x",
              "lines": [
                {
                  "step": "The sentence is: Pairing the first of the numbers $-11$, $-9$ and $12$ with the last of $x$, $x + 7$ and $x + 9$, the second with the second and the last with the first, then multiplying each pair and adding the products, gives $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The pairs are $-11$ with $x + 9$, $-9$ with $x + 7$, $12$ with $x$.",
                  "reason": "Writing a sentence as an equation: each pairing is read in the order the sentence gives."
                },
                {
                  "step": "The sum of the products is $-11(x + 9) - 9(x + 7) + 12x$.",
                  "reason": "Writing a sentence as an equation: each pair becomes a product, and the products are added."
                },
                {
                  "step": "$y = -11(x + 9) - 9(x + 7) + 12x$",
                  "reason": "Writing a sentence as an equation: the sum is $y$."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: pairing the numbers $-5$, $8$ and $14$ with $x$, $x + 4$ and $x + 8$ in the order written, multiplying each pair and adding the products gives $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = -5*x+8*(x+4)+14*(x+8)",
              "lines": [
                {
                  "step": "The sentence is: Pairing the numbers $-5$, $8$ and $14$ with $x$, $x + 4$ and $x + 8$ in the order written, multiplying each pair and adding the products gives $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The pairs are $-5$ with $x$, $8$ with $x + 4$, $14$ with $x + 8$.",
                  "reason": "Writing a sentence as an equation: each pairing is read in the order the sentence gives."
                },
                {
                  "step": "The sum of the products is $-5x + 8(x + 4) + 14(x + 8)$.",
                  "reason": "Writing a sentence as an equation: each pair becomes a product, and the products are added."
                },
                {
                  "step": "$y = -5x + 8(x + 4) + 14(x + 8)$",
                  "reason": "Writing a sentence as an equation: the sum is $y$."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: pairing the first of the numbers $9$, $-6$ and $-8$ with the last of $x$, $x + 5$ and $x + 9$, the second with the second and the last with the first, then multiplying each pair and adding the products, gives $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 9*(x+9)-6*(x+5)-8*x",
              "lines": [
                {
                  "step": "The sentence is: Pairing the first of the numbers $9$, $-6$ and $-8$ with the last of $x$, $x + 5$ and $x + 9$, the second with the second and the last with the first, then multiplying each pair and adding the products, gives $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The pairs are $9$ with $x + 9$, $-6$ with $x + 5$, $-8$ with $x$.",
                  "reason": "Writing a sentence as an equation: each pairing is read in the order the sentence gives."
                },
                {
                  "step": "The sum of the products is $9(x + 9) - 6(x + 5) - 8x$.",
                  "reason": "Writing a sentence as an equation: each pair becomes a product, and the products are added."
                },
                {
                  "step": "$y = 9(x + 9) - 6(x + 5) - 8x$",
                  "reason": "Writing a sentence as an equation: the sum is $y$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: the number $y$ is $4$ more than the sum of the products of $-7$, $8$ and $-4$ with $x$, $x + 6$ and $x + 8$, paired in the order written.",
            "lines": [
              {
                "step": "The sentence is: The number $y$ is $4$ more than the sum of the products of $-7$, $8$ and $-4$ with $x$, $x + 6$ and $x + 8$, paired in the order written.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The pairs are $-7$ with $x$, $8$ with $x + 6$, $-4$ with $x + 8$.",
                "reason": "Writing a sentence as an equation: each pairing is read in the order the sentence gives."
              },
              {
                "step": "The sum of the products is $-7x + 8(x + 6) - 4(x + 8)$.",
                "reason": "Writing a sentence as an equation: each pair becomes a product, and the products are added."
              },
              {
                "step": "$y = -7x + 8(x + 6) - 4(x + 8) + 4$",
                "reason": "Writing a sentence as an equation: $4$ more than the sum is the sum plus $4$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: the number $y$ is $7$ more than the sum of the products of $-6$, $11$ and $12$ with $x$, $x + 6$ and $x + 7$, paired in the order written.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = -6*x+11*(x+6)+12*(x+7)+7",
              "lines": [
                {
                  "step": "The sentence is: The number $y$ is $7$ more than the sum of the products of $-6$, $11$ and $12$ with $x$, $x + 6$ and $x + 7$, paired in the order written.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The pairs are $-6$ with $x$, $11$ with $x + 6$, $12$ with $x + 7$.",
                  "reason": "Writing a sentence as an equation: each pairing is read in the order the sentence gives."
                },
                {
                  "step": "The sum of the products is $-6x + 11(x + 6) + 12(x + 7)$.",
                  "reason": "Writing a sentence as an equation: each pair becomes a product, and the products are added."
                },
                {
                  "step": "$y = -6x + 11(x + 6) + 12(x + 7) + 7$",
                  "reason": "Writing a sentence as an equation: $7$ more than the sum is the sum plus $7$."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: the number $y$ is $9$ more than the sum of the products of $7$, $-7$ and $11$ with $x$, $x + 2$ and $x + 7$, paired in the order written.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 7*x-7*(x+2)+11*(x+7)+9",
              "lines": [
                {
                  "step": "The sentence is: The number $y$ is $9$ more than the sum of the products of $7$, $-7$ and $11$ with $x$, $x + 2$ and $x + 7$, paired in the order written.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The pairs are $7$ with $x$, $-7$ with $x + 2$, $11$ with $x + 7$.",
                  "reason": "Writing a sentence as an equation: each pairing is read in the order the sentence gives."
                },
                {
                  "step": "The sum of the products is $7x - 7(x + 2) + 11(x + 7)$.",
                  "reason": "Writing a sentence as an equation: each pair becomes a product, and the products are added."
                },
                {
                  "step": "$y = 7x - 7(x + 2) + 11(x + 7) + 9$",
                  "reason": "Writing a sentence as an equation: $9$ more than the sum is the sum plus $9$."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: the number $y$ is $9$ more than the sum of the products of $2$, $-14$ and $-12$ with $x$, $x + 8$ and $x + 9$, paired in the order written.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 2*x-14*(x+8)-12*(x+9)+9",
              "lines": [
                {
                  "step": "The sentence is: The number $y$ is $9$ more than the sum of the products of $2$, $-14$ and $-12$ with $x$, $x + 8$ and $x + 9$, paired in the order written.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The pairs are $2$ with $x$, $-14$ with $x + 8$, $-12$ with $x + 9$.",
                  "reason": "Writing a sentence as an equation: each pairing is read in the order the sentence gives."
                },
                {
                  "step": "The sum of the products is $2x - 14(x + 8) - 12(x + 9)$.",
                  "reason": "Writing a sentence as an equation: each pair becomes a product, and the products are added."
                },
                {
                  "step": "$y = 2x - 14(x + 8) - 12(x + 9) + 9$",
                  "reason": "Writing a sentence as an equation: $9$ more than the sum is the sum plus $9$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: the number $y$ is $8$ times the sum of the products of $-5$, $-12$ and $-7$ with $x$, $x + 2$ and $x + 3$, paired in the order written.",
            "lines": [
              {
                "step": "The sentence is: The number $y$ is $8$ times the sum of the products of $-5$, $-12$ and $-7$ with $x$, $x + 2$ and $x + 3$, paired in the order written.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The pairs are $-5$ with $x$, $-12$ with $x + 2$, $-7$ with $x + 3$.",
                "reason": "Writing a sentence as an equation: each pairing is read in the order the sentence gives."
              },
              {
                "step": "The sum of the products is $-5x - 12(x + 2) - 7(x + 3)$.",
                "reason": "Writing a sentence as an equation: each pair becomes a product, and the products are added."
              },
              {
                "step": "$y = 8(-5x - 12(x + 2) - 7(x + 3))$",
                "reason": "Writing a sentence as an equation: $8$ times the sum multiplies the whole sum."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: the number $y$ is $9$ times the sum of the products of $5$, $9$ and $-12$ with $x$, $x + 5$ and $x + 8$, paired in the order written.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 9*(5*x+9*(x+5)-12*(x+8))",
              "lines": [
                {
                  "step": "The sentence is: The number $y$ is $9$ times the sum of the products of $5$, $9$ and $-12$ with $x$, $x + 5$ and $x + 8$, paired in the order written.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The pairs are $5$ with $x$, $9$ with $x + 5$, $-12$ with $x + 8$.",
                  "reason": "Writing a sentence as an equation: each pairing is read in the order the sentence gives."
                },
                {
                  "step": "The sum of the products is $5x + 9(x + 5) - 12(x + 8)$.",
                  "reason": "Writing a sentence as an equation: each pair becomes a product, and the products are added."
                },
                {
                  "step": "$y = 9(5x + 9(x + 5) - 12(x + 8))$",
                  "reason": "Writing a sentence as an equation: $9$ times the sum multiplies the whole sum."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: the number $y$ is $6$ times the sum of the products of $-11$, $3$ and $-12$ with $x$, $x + 3$ and $x + 6$, paired in the order written.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 6*(-11*x+3*(x+3)-12*(x+6))",
              "lines": [
                {
                  "step": "The sentence is: The number $y$ is $6$ times the sum of the products of $-11$, $3$ and $-12$ with $x$, $x + 3$ and $x + 6$, paired in the order written.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The pairs are $-11$ with $x$, $3$ with $x + 3$, $-12$ with $x + 6$.",
                  "reason": "Writing a sentence as an equation: each pairing is read in the order the sentence gives."
                },
                {
                  "step": "The sum of the products is $-11x + 3(x + 3) - 12(x + 6)$.",
                  "reason": "Writing a sentence as an equation: each pair becomes a product, and the products are added."
                },
                {
                  "step": "$y = 6(-11x + 3(x + 3) - 12(x + 6))$",
                  "reason": "Writing a sentence as an equation: $6$ times the sum multiplies the whole sum."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: the number $y$ is $8$ times the sum of the products of $14$, $7$ and $-8$ with $x$, $x + 2$ and $x + 8$, paired in the order written.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 8*(14*x+7*(x+2)-8*(x+8))",
              "lines": [
                {
                  "step": "The sentence is: The number $y$ is $8$ times the sum of the products of $14$, $7$ and $-8$ with $x$, $x + 2$ and $x + 8$, paired in the order written.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The pairs are $14$ with $x$, $7$ with $x + 2$, $-8$ with $x + 8$.",
                  "reason": "Writing a sentence as an equation: each pairing is read in the order the sentence gives."
                },
                {
                  "step": "The sum of the products is $14x + 7(x + 2) - 8(x + 8)$.",
                  "reason": "Writing a sentence as an equation: each pair becomes a product, and the products are added."
                },
                {
                  "step": "$y = 8(14x + 7(x + 2) - 8(x + 8))$",
                  "reason": "Writing a sentence as an equation: $8$ times the sum multiplies the whole sum."
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
      "id": "t231-p1",
      "method": "direct proof",
      "statement": "Let $x_1 \\le x_2$ and $y_1 \\le y_2$ be real numbers. Then $x_1y_1 + x_2y_2 \\ge x_1y_2 + x_2y_1$.",
      "idea": "The difference of the two sums factors as a product of two differences, and both differences are nonnegative.",
      "lines": [
        {
          "line": "Let $x_1 \\le x_2$ and $y_1 \\le y_2$ be real numbers.",
          "reason": "the hypothesis"
        },
        {
          "line": "Then $x_2 - x_1 \\ge 0$.",
          "reason": "adding the same number (arithmetic's): $-x_1$ is added to both sides of $x_1 \\le x_2$"
        },
        {
          "line": "Also $y_2 - y_1 \\ge 0$.",
          "reason": "adding the same number (arithmetic's): $-y_1$ is added to both sides of $y_1 \\le y_2$"
        },
        {
          "line": "So $(x_2 - x_1)(y_2 - y_1) \\ge 0$.",
          "reason": "product of two positives or two negatives (arithmetic's): two positive factors give a positive product, and a factor $0$ gives $0$"
        },
        {
          "line": "So $x_1y_1 + x_2y_2 - x_1y_2 - x_2y_1 \\ge 0$.",
          "reason": "distributive law (arithmetic's): the brackets multiplied out"
        },
        {
          "line": "Therefore $x_1y_1 + x_2y_2 \\ge x_1y_2 + x_2y_1$.",
          "reason": "adding the same number (arithmetic's): $x_1y_2 + x_2y_1$ is added to both sides"
        }
      ]
    },
    {
      "id": "t231-p2",
      "method": "induction",
      "statement": "Let $x_1 \\le x_2 \\le \\cdots \\le x_n$ and $y_1 \\le y_2 \\le \\cdots \\le y_n$ be real numbers, with $n \\ge 2$. Then every sum that pairs each $x_k$ with one $y_k$, each used once, and adds the products is at most $x_1y_1 + x_2y_2 + \\cdots + x_ny_n$.",
      "idea": "A pairing that matches the two last terms is a shorter pairing plus their product; a pairing that does not is made no smaller by swapping two of its partners so that the last terms meet, by the two-term case.",
      "lines": [
        {
          "line": "For $n = 2$ the only other pairing is $x_1y_2 + x_2y_1$.",
          "reason": "Base case: with two terms, $x_1$ is paired with $y_1$ or with $y_2$"
        },
        {
          "line": "So for $n = 2$, $x_1y_1 + x_2y_2 \\ge x_1y_2 + x_2y_1$.",
          "reason": "Base case: the first proof read"
        },
        {
          "line": "Suppose that for some $k \\ge 2$ every pairing of two lists of $k$ terms in increasing order is at most the pairing in the same order.",
          "reason": "Inductive assumption"
        },
        {
          "line": "Take lists $x_1 \\le \\cdots \\le x_{k+1}$ and $y_1 \\le \\cdots \\le y_{k+1}$ and a pairing $P$ of them.",
          "reason": "Inductive step: the case $k + 1$ is set up"
        },
        {
          "line": "If $P$ pairs $x_{k+1}$ with $y_{k+1}$, then $P = Q + x_{k+1}y_{k+1}$, where $Q$ is a pairing of the first $k$ terms of each list.",
          "reason": "laws of addition and multiplication (arithmetic's): the sum is split into the last product and the rest"
        },
        {
          "line": "In that case $Q \\le x_1y_1 + \\cdots + x_ky_k$.",
          "reason": "Inductive assumption"
        },
        {
          "line": "So in that case $P \\le x_1y_1 + \\cdots + x_{k+1}y_{k+1}$.",
          "reason": "adding the same number (arithmetic's): $x_{k+1}y_{k+1}$ is added to both sides"
        },
        {
          "line": "Otherwise $P$ pairs $x_{k+1}$ with some $y_i$ and some $x_j$ with $y_{k+1}$, so $P = R + x_jy_{k+1} + x_{k+1}y_i$ for a sum $R$ of the other products.",
          "reason": "laws of addition and multiplication (arithmetic's): the two products are taken out of the sum"
        },
        {
          "line": "Since $x_j \\le x_{k+1}$ and $y_i \\le y_{k+1}$, $x_jy_i + x_{k+1}y_{k+1} \\ge x_jy_{k+1} + x_{k+1}y_i$.",
          "reason": "the first proof read, on $x_j \\le x_{k+1}$ and $y_i \\le y_{k+1}$"
        },
        {
          "line": "So $P \\le R + x_jy_i + x_{k+1}y_{k+1}$.",
          "reason": "adding the same number (arithmetic's): $R$ is added to both sides"
        },
        {
          "line": "The sum $R + x_jy_i + x_{k+1}y_{k+1}$ is a pairing that pairs $x_{k+1}$ with $y_{k+1}$, so it is at most $x_1y_1 + \\cdots + x_{k+1}y_{k+1}$.",
          "reason": "the seventh line, applied to this pairing"
        },
        {
          "line": "So in both cases $P \\le x_1y_1 + \\cdots + x_{k+1}y_{k+1}$.",
          "reason": "transitivity (arithmetic's): the tenth and eleventh lines; the seventh line gives the first case"
        },
        {
          "line": "Therefore every pairing is at most $x_1y_1 + x_2y_2 + \\cdots + x_ny_n$ for every $n \\ge 2$.",
          "reason": "Induction: the base case and the inductive step"
        }
      ]
    },
    {
      "id": "t231-p3",
      "method": "direct proof",
      "statement": "Let $x_1 \\le x_2 \\le \\cdots \\le x_n$ and $y_1 \\le y_2 \\le \\cdots \\le y_n$ be real numbers. Then every sum that pairs each $x_k$ with one $y_k$, each used once, and adds the products is at least $x_1y_n + x_2y_{n-1} + \\cdots + x_ny_1$.",
      "idea": "Changing the sign of every $y_k$ turns the opposite order into the same order and reverses every comparison of sums.",
      "lines": [
        {
          "line": "Let $x_1 \\le x_2 \\le \\cdots \\le x_n$ and $y_1 \\le y_2 \\le \\cdots \\le y_n$ be real numbers, and take a pairing $x_1z_1 + x_2z_2 + \\cdots + x_nz_n$, where $z_1, \\ldots, z_n$ are $y_1, \\ldots, y_n$ in some order.",
          "reason": "the hypothesis"
        },
        {
          "line": "Then $-y_n \\le -y_{n-1} \\le \\cdots \\le -y_1$.",
          "reason": "multiplying by a negative number reverses the sign (arithmetic's): the chain is multiplied by $-1$"
        },
        {
          "line": "So $x_1(-y_n) + x_2(-y_{n-1}) + \\cdots + x_n(-y_1) \\ge x_1(-z_1) + x_2(-z_2) + \\cdots + x_n(-z_n)$.",
          "reason": "Rearrangement Inequality, greatest sum: the second proof read, on the lists $x_k$ and $-y_{n+1-k}$, with $-z_1, \\ldots, -z_n$ a pairing of the second list"
        },
        {
          "line": "Therefore $x_1y_n + x_2y_{n-1} + \\cdots + x_ny_1 \\le x_1z_1 + x_2z_2 + \\cdots + x_nz_n$.",
          "reason": "multiplying by a negative number reverses the sign (arithmetic's): both sides are multiplied by $-1$"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t231-s1",
      "method": "direct proof",
      "statement": "Prove that $n(x_1y_1 + x_2y_2 + \\cdots + x_ny_n) \\ge (x_1 + x_2 + \\cdots + x_n)(y_1 + y_2 + \\cdots + y_n)$ for real numbers $x_1 \\le x_2 \\le \\cdots \\le x_n$ and $y_1 \\le y_2 \\le \\cdots \\le y_n$.",
      "check": {
        "proof": [
          {
            "line": "Let $x_1 \\le x_2 \\le \\cdots \\le x_n$ and $y_1 \\le y_2 \\le \\cdots \\le y_n$ be real numbers, and count the indices of $y$ past $n$ from $1$ again, so that $y_{n+1} = y_1$.",
            "reason": "the hypothesis"
          },
          {
            "line": "For each $j = 0, 1, \\ldots, n - 1$, the sum $\\sum_{k=1}^{n} x_ky_{k+j}$ pairs each $x_k$ with one $y$, each used once.",
            "reason": "Shifting the index: moving every index of $y$ by $j$ uses each $y$ once"
          },
          {
            "line": "So $\\sum_{k=1}^{n} x_ky_{k+j} \\le x_1y_1 + x_2y_2 + \\cdots + x_ny_n$ for each $j$.",
            "reason": "Rearrangement Inequality"
          },
          {
            "line": "So $\\sum_{j=0}^{n-1} \\sum_{k=1}^{n} x_ky_{k+j} \\le n(x_1y_1 + x_2y_2 + \\cdots + x_ny_n)$.",
            "reason": "adding two inequalities (arithmetic's): the $n$ inequalities of the third line added"
          },
          {
            "line": "Also $\\sum_{j=0}^{n-1} \\sum_{k=1}^{n} x_ky_{k+j} = \\sum_{k=1}^{n} \\sum_{j=0}^{n-1} x_ky_{k+j}$.",
            "reason": "Swapping the order"
          },
          {
            "line": "Also $\\sum_{k=1}^{n} \\sum_{j=0}^{n-1} x_ky_{k+j} = \\sum_{k=1}^{n} x_k \\sum_{j=0}^{n-1} y_{k+j}$.",
            "reason": "Sums split and constants come out: $x_k$ comes out of the inner sum"
          },
          {
            "line": "For each $k$, $\\sum_{j=0}^{n-1} y_{k+j} = y_1 + y_2 + \\cdots + y_n$.",
            "reason": "laws of addition and multiplication (arithmetic's): the sum holds each $y$ once"
          },
          {
            "line": "So $\\sum_{k=1}^{n} x_k \\sum_{j=0}^{n-1} y_{k+j} = (x_1 + \\cdots + x_n)(y_1 + \\cdots + y_n)$.",
            "reason": "Sums split and constants come out: the sum of the $y$ comes out"
          },
          {
            "line": "Therefore $n(x_1y_1 + x_2y_2 + \\cdots + x_ny_n) \\ge (x_1 + x_2 + \\cdots + x_n)(y_1 + y_2 + \\cdots + y_n)$.",
            "reason": "the fourth line, its left side equal to the product by the fifth, sixth and eighth lines"
          }
        ]
      }
    },
    {
      "id": "t231-s2",
      "method": "induction",
      "statement": "Prove that $(x + y)^n \\le 2^{n-1}(x^n + y^n)$ for nonnegative numbers $x$ and $y$ and every whole number $n \\ge 1$.",
      "check": {
        "proof": [
          {
            "line": "For $n = 1$ both sides are $x + y$, since $2^0 = 1$.",
            "reason": "Base case"
          },
          {
            "line": "Suppose $(x + y)^k \\le 2^{k-1}(x^k + y^k)$ for some whole number $k \\ge 1$.",
            "reason": "Inductive assumption"
          },
          {
            "line": "Then $(x + y)^{k+1} \\le 2^{k-1}(x^k + y^k)(x + y)$.",
            "reason": "multiplying by a positive number (arithmetic's): both sides multiplied by $x + y \\ge 0$"
          },
          {
            "line": "Also $(x^k + y^k)(x + y) = x^{k+1} + y^{k+1} + x^ky + xy^k$.",
            "reason": "distributive law (arithmetic's)"
          },
          {
            "line": "The lists $x^k, y^k$ and $x, y$ are in the same order.",
            "reason": "powers and roots of positive numbers keep the order: the greater of $x$ and $y$ has the greater $k$th power; where one of them is $0$, its power $0^k = 0$ is the lesser"
          },
          {
            "line": "So $x^ky + xy^k \\le x^{k+1} + y^{k+1}$.",
            "reason": "Rearrangement Inequality: the cross pairing is at most the pairing in the same order"
          },
          {
            "line": "So $x^{k+1} + y^{k+1} + x^ky + xy^k \\le 2(x^{k+1} + y^{k+1})$.",
            "reason": "adding the same number (arithmetic's): $x^{k+1} + y^{k+1}$ added to both sides"
          },
          {
            "line": "So $(x^k + y^k)(x + y) \\le 2(x^{k+1} + y^{k+1})$.",
            "reason": "the fourth line: the left side of the line before equals $(x^k + y^k)(x + y)$"
          },
          {
            "line": "So $2^{k-1}(x^k + y^k)(x + y) \\le 2^{k-1} \\cdot 2(x^{k+1} + y^{k+1})$.",
            "reason": "multiplying by a positive number (arithmetic's): both sides multiplied by $2^{k-1}$"
          },
          {
            "line": "So $2^{k-1}(x^k + y^k)(x + y) \\le 2^k(x^{k+1} + y^{k+1})$.",
            "reason": "product law (arithmetic's): $2^{k-1} \\cdot 2 = 2^k$"
          },
          {
            "line": "So $(x + y)^{k+1} \\le 2^k(x^{k+1} + y^{k+1})$.",
            "reason": "transitivity (arithmetic's): the third and tenth lines"
          },
          {
            "line": "Therefore $(x + y)^n \\le 2^{n-1}(x^n + y^n)$ for every whole number $n \\ge 1$.",
            "reason": "Induction: the base case and the inductive step"
          }
        ]
      }
    }
  ]
}
