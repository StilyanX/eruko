export default {
  "number": 213,
  "title": "Proving an inequality by manipulation",
  "section": 22,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "371-378, 600-605"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the product of two brackets equal to the left side minus the right side of $yz + 342 \\ge 18y + 19z$; its sign proves the inequality for real numbers $y$ and $z$ with $y \\ge 21$ and $z \\ge 24$.",
    "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
    "answer": "(y-19)*(z-18)",
    "solution": [
      "Find the product of two brackets equal to the left side minus the right side of $yz + 342 \\ge 18y + 19z$; its sign proves the inequality for real numbers $y$ and $z$ with $y \\ge 21$ and $z \\ge 24$.",
      "The left side minus the right side is $yz - 18y - 19z + 342$.",
      "$yz - 18y - 19z + 342 = y(z - 18) - 19(z - 18)$",
      "$y(z - 18) - 19(z - 18) = (y - 19)(z - 18)$",
      "Here $y - 19 \\ge 2$ and $z - 18 \\ge 6$, so neither is below $0$.",
      "So $(y - 19)(z - 18) \\ge 0$.",
      "So $yz - 18y - 19z + 342 \\ge 0$.",
      "So $yz + 342 \\ge 18y + 19z$.",
      "The product is $(y - 19)(z - 18)$."
    ]
  },
  "ideas": [],
  "kinds": [
    {
      "id": "t213-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the product of two brackets equal to the left side minus the right side of $yz + 128 \\ge 16y + 8z$; its sign proves the inequality for real numbers $y$ and $z$ with $y \\ge 14$ and $z \\ge 18$.",
            "lines": [
              {
                "step": "Find the product of two brackets equal to the left side minus the right side of $yz + 128 \\ge 16y + 8z$; its sign proves the inequality for real numbers $y$ and $z$ with $y \\ge 14$ and $z \\ge 18$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The left side minus the right side is $yz - 16y - 8z + 128$.",
                "reason": "Working backwards and then writing forwards: the inequality says that this difference is at least $0$, so the difference is studied first."
              },
              {
                "step": "$yz - 16y - 8z + 128 = y(z - 16) - 8(z - 16)$",
                "reason": "Factoring by grouping: the first two terms have the common factor $y$, and the last two the common factor $-8$."
              },
              {
                "step": "$y(z - 16) - 8(z - 16) = (y - 8)(z - 16)$",
                "reason": "Factoring out a bracket: both parts have the bracket $z - 16$."
              },
              {
                "step": "Here $y - 8 \\ge 6$ and $z - 16 \\ge 2$, so neither is below $0$.",
                "reason": "A proof is written forwards: the proof starts here, from the conditions. Adding the same number: $8$ is taken from both sides of $y \\ge 14$, and $16$ from both sides of $z \\ge 18$."
              },
              {
                "step": "So $(y - 8)(z - 16) \\ge 0$.",
                "reason": "A product is positive when its factors have the same sign and negative when they differ: neither factor is below $0$, so the product is positive, or $0$ when a factor is $0$."
              },
              {
                "step": "So $yz - 16y - 8z + 128 \\ge 0$.",
                "reason": "Multiplying out: by the third and fourth lines the product equals the difference in the second line."
              },
              {
                "step": "So $yz + 128 \\ge 16y + 8z$.",
                "reason": "Adding the same number: $16y + 8z$ is added to both sides."
              },
              {
                "step": "The product is $(y - 8)(z - 16)$.",
                "reason": "Answering the question asked: the product of two brackets equal to the difference is asked for."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the product of two brackets equal to the left side minus the right side of $yz + 38 \\le 2y + 19z$; its sign proves the inequality for real numbers $y$ and $z$ with $y \\ge 21$ and $z \\le 1$.",
              "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
              "answer": "(y-19)*(z-2)",
              "lines": [
                {
                  "step": "Find the product of two brackets equal to the left side minus the right side of $yz + 38 \\le 2y + 19z$; its sign proves the inequality for real numbers $y$ and $z$ with $y \\ge 21$ and $z \\le 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The left side minus the right side is $yz - 2y - 19z + 38$.",
                  "reason": "Working backwards and then writing forwards: the inequality says that this difference is at most $0$, so the difference is studied first."
                },
                {
                  "step": "$yz - 2y - 19z + 38 = y(z - 2) - 19(z - 2)$",
                  "reason": "Factoring by grouping: the first two terms have the common factor $y$, and the last two the common factor $-19$."
                },
                {
                  "step": "$y(z - 2) - 19(z - 2) = (y - 19)(z - 2)$",
                  "reason": "Factoring out a bracket: both parts have the bracket $z - 2$."
                },
                {
                  "step": "Here $y - 19 \\ge 2$ and $z - 2 \\le -1$, so the first is not below $0$ and the second is not above $0$.",
                  "reason": "A proof is written forwards: the proof starts here, from the conditions. Adding the same number: $19$ is taken from both sides of $y \\ge 21$, and $2$ from both sides of $z \\le 1$."
                },
                {
                  "step": "So $(y - 19)(z - 2) \\le 0$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: the factors differ in sign unless one of them is $0$, so the product is negative, or $0$ when a factor is $0$."
                },
                {
                  "step": "So $yz - 2y - 19z + 38 \\le 0$.",
                  "reason": "Multiplying out: by the third and fourth lines the product equals the difference in the second line."
                },
                {
                  "step": "So $yz + 38 \\le 2y + 19z$.",
                  "reason": "Adding the same number: $2y + 19z$ is added to both sides."
                },
                {
                  "step": "The product is $(y - 19)(z - 2)$.",
                  "reason": "Answering the question asked: the product of two brackets equal to the difference is asked for."
                }
              ]
            },
            {
              "prompt": "Find the product of two brackets equal to the left side minus the right side of $20xy + 12 \\ge 16x + 15y$; its sign proves the inequality for real numbers $x$ and $y$ with $4x \\le 1$ and $5y \\le 1$.",
              "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
              "answer": "(4*x-3)*(5*y-4)",
              "lines": [
                {
                  "step": "Find the product of two brackets equal to the left side minus the right side of $20xy + 12 \\ge 16x + 15y$; its sign proves the inequality for real numbers $x$ and $y$ with $4x \\le 1$ and $5y \\le 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The left side minus the right side is $20xy - 16x - 15y + 12$.",
                  "reason": "Working backwards and then writing forwards: the inequality says that this difference is at least $0$, so the difference is studied first."
                },
                {
                  "step": "$20xy - 16x - 15y + 12 = 4x(5y - 4) - 3(5y - 4)$",
                  "reason": "Factoring by grouping: the first two terms have the common factor $4x$, and the last two the common factor $-3$."
                },
                {
                  "step": "$4x(5y - 4) - 3(5y - 4) = (4x - 3)(5y - 4)$",
                  "reason": "Factoring out a bracket: both parts have the bracket $5y - 4$."
                },
                {
                  "step": "Here $4x - 3 \\le -2$ and $5y - 4 \\le -3$, so neither is above $0$.",
                  "reason": "A proof is written forwards: the proof starts here, from the conditions. Adding the same number: $3$ is taken from both sides of $4x \\le 1$, and $4$ from both sides of $5y \\le 1$."
                },
                {
                  "step": "So $(4x - 3)(5y - 4) \\ge 0$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: neither factor is above $0$, so the product is positive, or $0$ when a factor is $0$."
                },
                {
                  "step": "So $20xy - 16x - 15y + 12 \\ge 0$.",
                  "reason": "Multiplying out: by the third and fourth lines the product equals the difference in the second line."
                },
                {
                  "step": "So $20xy + 12 \\ge 16x + 15y$.",
                  "reason": "Adding the same number: $16x + 15y$ is added to both sides."
                },
                {
                  "step": "The product is $(4x - 3)(5y - 4)$.",
                  "reason": "Answering the question asked: the product of two brackets equal to the difference is asked for."
                }
              ]
            },
            {
              "prompt": "Find the product of two brackets equal to the left side minus the right side of $xy + 204 \\le 12x + 17y$; its sign proves the inequality for real numbers $x$ and $y$ with $x \\le 15$ and $y \\ge 13$.",
              "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
              "answer": "(x-17)*(y-12)",
              "lines": [
                {
                  "step": "Find the product of two brackets equal to the left side minus the right side of $xy + 204 \\le 12x + 17y$; its sign proves the inequality for real numbers $x$ and $y$ with $x \\le 15$ and $y \\ge 13$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The left side minus the right side is $xy - 12x - 17y + 204$.",
                  "reason": "Working backwards and then writing forwards: the inequality says that this difference is at most $0$, so the difference is studied first."
                },
                {
                  "step": "$xy - 12x - 17y + 204 = x(y - 12) - 17(y - 12)$",
                  "reason": "Factoring by grouping: the first two terms have the common factor $x$, and the last two the common factor $-17$."
                },
                {
                  "step": "$x(y - 12) - 17(y - 12) = (x - 17)(y - 12)$",
                  "reason": "Factoring out a bracket: both parts have the bracket $y - 12$."
                },
                {
                  "step": "Here $x - 17 \\le -2$ and $y - 12 \\ge 1$, so the first is not above $0$ and the second is not below $0$.",
                  "reason": "A proof is written forwards: the proof starts here, from the conditions. Adding the same number: $17$ is taken from both sides of $x \\le 15$, and $12$ from both sides of $y \\ge 13$."
                },
                {
                  "step": "So $(x - 17)(y - 12) \\le 0$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: the factors differ in sign unless one of them is $0$, so the product is negative, or $0$ when a factor is $0$."
                },
                {
                  "step": "So $xy - 12x - 17y + 204 \\le 0$.",
                  "reason": "Multiplying out: by the third and fourth lines the product equals the difference in the second line."
                },
                {
                  "step": "So $xy + 204 \\le 12x + 17y$.",
                  "reason": "Adding the same number: $12x + 17y$ is added to both sides."
                },
                {
                  "step": "The product is $(x - 17)(y - 12)$.",
                  "reason": "Answering the question asked: the product of two brackets equal to the difference is asked for."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the product of a bracket and the square of a bracket equal to the left side minus the right side of $y^3 + 1000z^3 \\ge 10y^2z + 100yz^2$; its sign proves the inequality for real numbers $y$ and $z$ with $y \\ge 0$ and $z \\ge 0$.",
            "lines": [
              {
                "step": "Find the product of a bracket and the square of a bracket equal to the left side minus the right side of $y^3 + 1000z^3 \\ge 10y^2z + 100yz^2$; its sign proves the inequality for real numbers $y$ and $z$ with $y \\ge 0$ and $z \\ge 0$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The left side minus the right side is $y^3 - 10y^2z - 100yz^2 + 1000z^3$.",
                "reason": "Working backwards and then writing forwards: the inequality says that this difference is at least $0$, so the difference is studied first."
              },
              {
                "step": "$y^3 - 10y^2z - 100yz^2 + 1000z^3 = y^2(y - 10z) - 100z^2(y - 10z)$",
                "reason": "Factoring by grouping: the first two terms have the common factor $y^2$, and the last two the common factor $-100z^2$."
              },
              {
                "step": "$y^2(y - 10z) - 100z^2(y - 10z) = (y^2 - 100z^2)(y - 10z)$",
                "reason": "Factoring out a bracket: both parts have the bracket $y - 10z$."
              },
              {
                "step": "$(y^2 - 100z^2)(y - 10z) = (y + 10z)(y - 10z)^2$",
                "reason": "Difference of squares: $y^2 - 100z^2 = (y + 10z)(y - 10z)$, and the two equal brackets are written as a square."
              },
              {
                "step": "Here $y + 10z \\ge 0$ and $(y - 10z)^2 \\ge 0$.",
                "reason": "A proof is written forwards: the proof starts here, from the conditions. Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$. The first bracket is a sum of two numbers that are never below $0$."
              },
              {
                "step": "So $(y + 10z)(y - 10z)^2 \\ge 0$.",
                "reason": "A product is positive when its factors have the same sign and negative when they differ: neither factor is below $0$, so the product is positive, or $0$ when a factor is $0$."
              },
              {
                "step": "So $y^3 - 10y^2z - 100yz^2 + 1000z^3 \\ge 0$.",
                "reason": "Multiplying out: by the third, fourth and fifth lines the product equals the difference in the second line."
              },
              {
                "step": "So $y^3 + 1000z^3 \\ge 10y^2z + 100yz^2$.",
                "reason": "Adding the same number: $10y^2z + 100yz^2$ is added to both sides."
              },
              {
                "step": "The product is $(y + 10z)(y - 10z)^2$.",
                "reason": "Answering the question asked: the product of a bracket and the square of a bracket equal to the difference is asked for."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the product of a bracket and the square of a bracket equal to the left side minus the right side of $y^3 + 343 \\ge 7y^2 + 49y$; its sign proves the inequality for real numbers $y$ with $y \\ge 0$.",
              "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
              "answer": "(y+7)*(y-7)^2",
              "lines": [
                {
                  "step": "Find the product of a bracket and the square of a bracket equal to the left side minus the right side of $y^3 + 343 \\ge 7y^2 + 49y$; its sign proves the inequality for real numbers $y$ with $y \\ge 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The left side minus the right side is $y^3 - 7y^2 - 49y + 343$.",
                  "reason": "Working backwards and then writing forwards: the inequality says that this difference is at least $0$, so the difference is studied first."
                },
                {
                  "step": "$y^3 - 7y^2 - 49y + 343 = y^2(y - 7) - 49(y - 7)$",
                  "reason": "Factoring by grouping: the first two terms have the common factor $y^2$, and the last two the common factor $-49$."
                },
                {
                  "step": "$y^2(y - 7) - 49(y - 7) = (y^2 - 49)(y - 7)$",
                  "reason": "Factoring out a bracket: both parts have the bracket $y - 7$."
                },
                {
                  "step": "$(y^2 - 49)(y - 7) = (y + 7)(y - 7)^2$",
                  "reason": "Difference of squares: $y^2 - 49 = (y + 7)(y - 7)$, and the two equal brackets are written as a square."
                },
                {
                  "step": "Here $y + 7 \\ge 0$ and $(y - 7)^2 \\ge 0$.",
                  "reason": "A proof is written forwards: the proof starts here, from the conditions. Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$. The first bracket is a sum of two numbers that are never below $0$."
                },
                {
                  "step": "So $(y + 7)(y - 7)^2 \\ge 0$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: neither factor is below $0$, so the product is positive, or $0$ when a factor is $0$."
                },
                {
                  "step": "So $y^3 - 7y^2 - 49y + 343 \\ge 0$.",
                  "reason": "Multiplying out: by the third, fourth and fifth lines the product equals the difference in the second line."
                },
                {
                  "step": "So $y^3 + 343 \\ge 7y^2 + 49y$.",
                  "reason": "Adding the same number: $7y^2 + 49y$ is added to both sides."
                },
                {
                  "step": "The product is $(y + 7)(y - 7)^2$.",
                  "reason": "Answering the question asked: the product of a bracket and the square of a bracket equal to the difference is asked for."
                }
              ]
            },
            {
              "prompt": "Find the product of a bracket and the square of a bracket equal to the left side minus the right side of $x^3 + 8z^3 \\le 2x^2z + 4xz^2$; its sign proves the inequality for real numbers $x$ and $z$ with $x \\le 0$ and $z \\le 0$.",
              "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
              "answer": "(x+2*z)*(x-2*z)^2",
              "lines": [
                {
                  "step": "Find the product of a bracket and the square of a bracket equal to the left side minus the right side of $x^3 + 8z^3 \\le 2x^2z + 4xz^2$; its sign proves the inequality for real numbers $x$ and $z$ with $x \\le 0$ and $z \\le 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The left side minus the right side is $x^3 - 2x^2z - 4xz^2 + 8z^3$.",
                  "reason": "Working backwards and then writing forwards: the inequality says that this difference is at most $0$, so the difference is studied first."
                },
                {
                  "step": "$x^3 - 2x^2z - 4xz^2 + 8z^3 = x^2(x - 2z) - 4z^2(x - 2z)$",
                  "reason": "Factoring by grouping: the first two terms have the common factor $x^2$, and the last two the common factor $-4z^2$."
                },
                {
                  "step": "$x^2(x - 2z) - 4z^2(x - 2z) = (x^2 - 4z^2)(x - 2z)$",
                  "reason": "Factoring out a bracket: both parts have the bracket $x - 2z$."
                },
                {
                  "step": "$(x^2 - 4z^2)(x - 2z) = (x + 2z)(x - 2z)^2$",
                  "reason": "Difference of squares: $x^2 - 4z^2 = (x + 2z)(x - 2z)$, and the two equal brackets are written as a square."
                },
                {
                  "step": "Here $x + 2z \\le 0$ and $(x - 2z)^2 \\ge 0$.",
                  "reason": "A proof is written forwards: the proof starts here, from the conditions. Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$. The first bracket is a sum of two numbers that are never above $0$."
                },
                {
                  "step": "So $(x + 2z)(x - 2z)^2 \\le 0$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: the factors differ in sign unless one of them is $0$, so the product is negative, or $0$ when a factor is $0$."
                },
                {
                  "step": "So $x^3 - 2x^2z - 4xz^2 + 8z^3 \\le 0$.",
                  "reason": "Multiplying out: by the third, fourth and fifth lines the product equals the difference in the second line."
                },
                {
                  "step": "So $x^3 + 8z^3 \\le 2x^2z + 4xz^2$.",
                  "reason": "Adding the same number: $2x^2z + 4xz^2$ is added to both sides."
                },
                {
                  "step": "The product is $(x + 2z)(x - 2z)^2$.",
                  "reason": "Answering the question asked: the product of a bracket and the square of a bracket equal to the difference is asked for."
                }
              ]
            },
            {
              "prompt": "Find the product of a bracket and the square of a bracket equal to the left side minus the right side of $y^3 + 64z^3 \\ge 4y^2z + 16yz^2$; its sign proves the inequality for real numbers $y$ and $z$ with $y \\ge 0$ and $z \\ge 0$.",
              "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
              "answer": "(y+4*z)*(y-4*z)^2",
              "lines": [
                {
                  "step": "Find the product of a bracket and the square of a bracket equal to the left side minus the right side of $y^3 + 64z^3 \\ge 4y^2z + 16yz^2$; its sign proves the inequality for real numbers $y$ and $z$ with $y \\ge 0$ and $z \\ge 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The left side minus the right side is $y^3 - 4y^2z - 16yz^2 + 64z^3$.",
                  "reason": "Working backwards and then writing forwards: the inequality says that this difference is at least $0$, so the difference is studied first."
                },
                {
                  "step": "$y^3 - 4y^2z - 16yz^2 + 64z^3 = y^2(y - 4z) - 16z^2(y - 4z)$",
                  "reason": "Factoring by grouping: the first two terms have the common factor $y^2$, and the last two the common factor $-16z^2$."
                },
                {
                  "step": "$y^2(y - 4z) - 16z^2(y - 4z) = (y^2 - 16z^2)(y - 4z)$",
                  "reason": "Factoring out a bracket: both parts have the bracket $y - 4z$."
                },
                {
                  "step": "$(y^2 - 16z^2)(y - 4z) = (y + 4z)(y - 4z)^2$",
                  "reason": "Difference of squares: $y^2 - 16z^2 = (y + 4z)(y - 4z)$, and the two equal brackets are written as a square."
                },
                {
                  "step": "Here $y + 4z \\ge 0$ and $(y - 4z)^2 \\ge 0$.",
                  "reason": "A proof is written forwards: the proof starts here, from the conditions. Trivial Inequality: the square of a real number is at least $0$, and is $0$ only when the number is $0$. The first bracket is a sum of two numbers that are never below $0$."
                },
                {
                  "step": "So $(y + 4z)(y - 4z)^2 \\ge 0$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: neither factor is below $0$, so the product is positive, or $0$ when a factor is $0$."
                },
                {
                  "step": "So $y^3 - 4y^2z - 16yz^2 + 64z^3 \\ge 0$.",
                  "reason": "Multiplying out: by the third, fourth and fifth lines the product equals the difference in the second line."
                },
                {
                  "step": "So $y^3 + 64z^3 \\ge 4y^2z + 16yz^2$.",
                  "reason": "Adding the same number: $4y^2z + 16yz^2$ is added to both sides."
                },
                {
                  "step": "The product is $(y + 4z)(y - 4z)^2$.",
                  "reason": "Answering the question asked: the product of a bracket and the square of a bracket equal to the difference is asked for."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t213-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the greater of $\\dfrac{8827}{7523}$ and $\\dfrac{8803}{7507}$.",
            "lines": [
              {
                "step": "Find the greater of $\\dfrac{8827}{7523}$ and $\\dfrac{8803}{7507}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "With $a = 8803$, $b = 7507$ and $c = 8$, the fractions are $\\dfrac{a}{b}$ and $\\dfrac{a + 3c}{b + 2c}$.",
                "reason": "Variable: a letter stands for each number, and one fraction has $3c$ more than the other on the top and $2c$ more on the bottom."
              },
              {
                "step": "$a(b + 2c) - b(a + 3c) = 2ac - 3bc$",
                "reason": "Working backwards and then writing forwards: cross-multiplying the two fractions gives the products $a(b + 2c)$ and $b(a + 3c)$, and in their difference, multiplied out, $ab$ cancels."
              },
              {
                "step": "$2ac - 3bc = (2a - 3b)c$",
                "reason": "Taking out a common factor: both terms have the factor $c$."
              },
              {
                "step": "Here $2a - 3b < 0$ and $c > 0$.",
                "reason": "A proof is written forwards: the proof starts here, from the numbers. Substituting a value: $2 \\cdot 8803 - 3 \\cdot 7507$ is negative, and $c = 8$."
              },
              {
                "step": "So $(2a - 3b)c < 0$.",
                "reason": "A product is positive when its factors have the same sign and negative when they differ: one factor is negative and the other positive."
              },
              {
                "step": "So $a(b + 2c) < b(a + 3c)$.",
                "reason": "Adding the same number: by the third and fourth lines the product is $a(b + 2c) - b(a + 3c)$, and $b(a + 3c)$ is added to both sides."
              },
              {
                "step": "So $\\dfrac{a}{b} < \\dfrac{a + 3c}{b + 2c}$.",
                "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{b(b + 2c)}$, positive since $b$ and $b + 2c$ are positive."
              },
              {
                "step": "The greater is $\\dfrac{8827}{7523}$.",
                "reason": "Answering the question asked: $\\dfrac{a}{b}$ is $\\dfrac{8803}{7507}$ and $\\dfrac{a + 3c}{b + 2c}$ is $\\dfrac{8827}{7523}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greater of $\\dfrac{6636}{5878}$ and $\\dfrac{6626}{5873}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "6636/5878",
              "lines": [
                {
                  "step": "Find the greater of $\\dfrac{6636}{5878}$ and $\\dfrac{6626}{5873}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $a = 6626$, $b = 5873$ and $c = 5$, the fractions are $\\dfrac{a}{b}$ and $\\dfrac{a + 2c}{b + c}$.",
                  "reason": "Variable: a letter stands for each number, and one fraction has $2c$ more than the other on the top and $c$ more on the bottom."
                },
                {
                  "step": "$a(b + c) - b(a + 2c) = ac - 2bc$",
                  "reason": "Working backwards and then writing forwards: cross-multiplying the two fractions gives the products $a(b + c)$ and $b(a + 2c)$, and in their difference, multiplied out, $ab$ cancels."
                },
                {
                  "step": "$ac - 2bc = (a - 2b)c$",
                  "reason": "Taking out a common factor: both terms have the factor $c$."
                },
                {
                  "step": "Here $a - 2b < 0$ and $c > 0$.",
                  "reason": "A proof is written forwards: the proof starts here, from the numbers. Substituting a value: $6626 - 2 \\cdot 5873$ is negative, and $c = 5$."
                },
                {
                  "step": "So $(a - 2b)c < 0$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: one factor is negative and the other positive."
                },
                {
                  "step": "So $a(b + c) < b(a + 2c)$.",
                  "reason": "Adding the same number: by the third and fourth lines the product is $a(b + c) - b(a + 2c)$, and $b(a + 2c)$ is added to both sides."
                },
                {
                  "step": "So $\\dfrac{a}{b} < \\dfrac{a + 2c}{b + c}$.",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{b(b + c)}$, positive since $b$ and $b + c$ are positive."
                },
                {
                  "step": "The greater is $\\dfrac{6636}{5878}$.",
                  "reason": "Answering the question asked: $\\dfrac{a}{b}$ is $\\dfrac{6626}{5873}$ and $\\dfrac{a + 2c}{b + c}$ is $\\dfrac{6636}{5878}$."
                }
              ]
            },
            {
              "prompt": "Find the greater of $\\dfrac{9470}{3968}$ and $\\dfrac{9468}{3962}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "9468/3962",
              "lines": [
                {
                  "step": "Find the greater of $\\dfrac{9470}{3968}$ and $\\dfrac{9468}{3962}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $a = 9468$, $b = 3962$ and $c = 2$, the fractions are $\\dfrac{a}{b}$ and $\\dfrac{a + c}{b + 3c}$.",
                  "reason": "Variable: a letter stands for each number, and one fraction has $c$ more than the other on the top and $3c$ more on the bottom."
                },
                {
                  "step": "$a(b + 3c) - b(a + c) = 3ac - bc$",
                  "reason": "Working backwards and then writing forwards: cross-multiplying the two fractions gives the products $a(b + 3c)$ and $b(a + c)$, and in their difference, multiplied out, $ab$ cancels."
                },
                {
                  "step": "$3ac - bc = (3a - b)c$",
                  "reason": "Taking out a common factor: both terms have the factor $c$."
                },
                {
                  "step": "Here $3a - b > 0$ and $c > 0$.",
                  "reason": "A proof is written forwards: the proof starts here, from the numbers. Substituting a value: $3 \\cdot 9468 - 3962$ is positive, and $c = 2$."
                },
                {
                  "step": "So $(3a - b)c > 0$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: both factors are positive."
                },
                {
                  "step": "So $a(b + 3c) > b(a + c)$.",
                  "reason": "Adding the same number: by the third and fourth lines the product is $a(b + 3c) - b(a + c)$, and $b(a + c)$ is added to both sides."
                },
                {
                  "step": "So $\\dfrac{a}{b} > \\dfrac{a + c}{b + 3c}$.",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{b(b + 3c)}$, positive since $b$ and $b + 3c$ are positive."
                },
                {
                  "step": "The greater is $\\dfrac{9468}{3962}$.",
                  "reason": "Answering the question asked: $\\dfrac{a}{b}$ is $\\dfrac{9468}{3962}$ and $\\dfrac{a + c}{b + 3c}$ is $\\dfrac{9470}{3968}$."
                }
              ]
            },
            {
              "prompt": "Find the greater of $\\dfrac{6775}{4222}$ and $\\dfrac{6766}{4219}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "6775/4222",
              "lines": [
                {
                  "step": "Find the greater of $\\dfrac{6775}{4222}$ and $\\dfrac{6766}{4219}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "With $a = 6766$, $b = 4219$ and $c = 3$, the fractions are $\\dfrac{a}{b}$ and $\\dfrac{a + 3c}{b + c}$.",
                  "reason": "Variable: a letter stands for each number, and one fraction has $3c$ more than the other on the top and $c$ more on the bottom."
                },
                {
                  "step": "$a(b + c) - b(a + 3c) = ac - 3bc$",
                  "reason": "Working backwards and then writing forwards: cross-multiplying the two fractions gives the products $a(b + c)$ and $b(a + 3c)$, and in their difference, multiplied out, $ab$ cancels."
                },
                {
                  "step": "$ac - 3bc = (a - 3b)c$",
                  "reason": "Taking out a common factor: both terms have the factor $c$."
                },
                {
                  "step": "Here $a - 3b < 0$ and $c > 0$.",
                  "reason": "A proof is written forwards: the proof starts here, from the numbers. Substituting a value: $6766 - 3 \\cdot 4219$ is negative, and $c = 3$."
                },
                {
                  "step": "So $(a - 3b)c < 0$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: one factor is negative and the other positive."
                },
                {
                  "step": "So $a(b + c) < b(a + 3c)$.",
                  "reason": "Adding the same number: by the third and fourth lines the product is $a(b + c) - b(a + 3c)$, and $b(a + 3c)$ is added to both sides."
                },
                {
                  "step": "So $\\dfrac{a}{b} < \\dfrac{a + 3c}{b + c}$.",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{b(b + c)}$, positive since $b$ and $b + c$ are positive."
                },
                {
                  "step": "The greater is $\\dfrac{6775}{4222}$.",
                  "reason": "Answering the question asked: $\\dfrac{a}{b}$ is $\\dfrac{6766}{4219}$ and $\\dfrac{a + 3c}{b + c}$ is $\\dfrac{6775}{4222}$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t213-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the number $E$ that multiplying the given inequalities gives in $\\dfrac{xy^2}{z} > E$, for numbers with $x > 9$, $y > 3$ and $0 < z < 12$.",
            "lines": [
              {
                "step": "Find the number $E$ that multiplying the given inequalities gives in $\\dfrac{xy^2}{z} > E$, for numbers with $x > 9$, $y > 3$ and $0 < z < 12$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$y^2 > 9$",
                "reason": "Multiplying two inequalities of positive numbers: $y > 3 > 0$ is multiplied by itself."
              },
              {
                "step": "$xy^2 > 81$",
                "reason": "Multiplying two inequalities of positive numbers: the second line and $x > 9 > 0$."
              },
              {
                "step": "$\\dfrac{1}{z} > \\dfrac{1}{12}$",
                "reason": "Reciprocals of numbers of the same sign reverse the order: $0 < z < 12$."
              },
              {
                "step": "$\\dfrac{xy^2}{z} > \\dfrac{81}{12}$",
                "reason": "Multiplying two inequalities of positive numbers: the third and fourth lines, since $xy^2$ times $\\dfrac{1}{z}$ is $\\dfrac{xy^2}{z}$."
              },
              {
                "step": "$E = \\dfrac{27}{4}$",
                "reason": "Cancelling a common factor: the top and the bottom of $\\dfrac{81}{12}$ are divided by $3$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the number $E$ that multiplying the given inequalities gives in $\\dfrac{x^2y}{z} > E$, for numbers with $x > 7$, $y > 6$ and $0 < z < 16$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "147/8",
              "lines": [
                {
                  "step": "Find the number $E$ that multiplying the given inequalities gives in $\\dfrac{x^2y}{z} > E$, for numbers with $x > 7$, $y > 6$ and $0 < z < 16$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 > 49$",
                  "reason": "Multiplying two inequalities of positive numbers: $x > 7 > 0$ is multiplied by itself."
                },
                {
                  "step": "$x^2y > 294$",
                  "reason": "Multiplying two inequalities of positive numbers: the second line and $y > 6 > 0$."
                },
                {
                  "step": "$\\dfrac{1}{z} > \\dfrac{1}{16}$",
                  "reason": "Reciprocals of numbers of the same sign reverse the order: $0 < z < 16$."
                },
                {
                  "step": "$\\dfrac{x^2y}{z} > \\dfrac{294}{16}$",
                  "reason": "Multiplying two inequalities of positive numbers: the third and fourth lines, since $x^2y$ times $\\dfrac{1}{z}$ is $\\dfrac{x^2y}{z}$."
                },
                {
                  "step": "$E = \\dfrac{147}{8}$",
                  "reason": "Cancelling a common factor: the top and the bottom of $\\dfrac{294}{16}$ are divided by $2$."
                }
              ]
            },
            {
              "prompt": "Find the number $E$ that multiplying the given inequalities gives in $\\dfrac{x^2y}{z} < E$, for numbers with $0 < x < 5$, $0 < y < 3$ and $z > 6$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "25/2",
              "lines": [
                {
                  "step": "Find the number $E$ that multiplying the given inequalities gives in $\\dfrac{x^2y}{z} < E$, for numbers with $0 < x < 5$, $0 < y < 3$ and $z > 6$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 < 25$",
                  "reason": "Multiplying two inequalities of positive numbers: $0 < x < 5$ is multiplied by itself."
                },
                {
                  "step": "$x^2y < 75$",
                  "reason": "Multiplying two inequalities of positive numbers: the second line and $0 < y < 3$."
                },
                {
                  "step": "$\\dfrac{1}{z} < \\dfrac{1}{6}$",
                  "reason": "Reciprocals of numbers of the same sign reverse the order: $z > 6 > 0$."
                },
                {
                  "step": "$\\dfrac{x^2y}{z} < \\dfrac{75}{6}$",
                  "reason": "Multiplying two inequalities of positive numbers: the third and fourth lines, since $x^2y$ times $\\dfrac{1}{z}$ is $\\dfrac{x^2y}{z}$."
                },
                {
                  "step": "$E = \\dfrac{25}{2}$",
                  "reason": "Cancelling a common factor: the top and the bottom of $\\dfrac{75}{6}$ are divided by $3$."
                }
              ]
            },
            {
              "prompt": "Find the number $E$ that multiplying the given inequalities gives in $\\dfrac{xy^2}{z} > E$, for numbers with $x > 9$, $y > 6$ and $0 < z < 10$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "162/5",
              "lines": [
                {
                  "step": "Find the number $E$ that multiplying the given inequalities gives in $\\dfrac{xy^2}{z} > E$, for numbers with $x > 9$, $y > 6$ and $0 < z < 10$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$y^2 > 36$",
                  "reason": "Multiplying two inequalities of positive numbers: $y > 6 > 0$ is multiplied by itself."
                },
                {
                  "step": "$xy^2 > 324$",
                  "reason": "Multiplying two inequalities of positive numbers: the second line and $x > 9 > 0$."
                },
                {
                  "step": "$\\dfrac{1}{z} > \\dfrac{1}{10}$",
                  "reason": "Reciprocals of numbers of the same sign reverse the order: $0 < z < 10$."
                },
                {
                  "step": "$\\dfrac{xy^2}{z} > \\dfrac{324}{10}$",
                  "reason": "Multiplying two inequalities of positive numbers: the third and fourth lines, since $xy^2$ times $\\dfrac{1}{z}$ is $\\dfrac{xy^2}{z}$."
                },
                {
                  "step": "$E = \\dfrac{162}{5}$",
                  "reason": "Cancelling a common factor: the top and the bottom of $\\dfrac{324}{10}$ are divided by $2$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the product of two brackets that working backwards reaches for $x + \\dfrac{35}{x} \\ge 12$; its sign proves the inequality for real numbers $x$ with $x \\ge 8$.",
            "lines": [
              {
                "step": "Find the product of two brackets that working backwards reaches for $x + \\dfrac{35}{x} \\ge 12$; its sign proves the inequality for real numbers $x$ with $x \\ge 8$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^2 + 35 \\ge 12x$",
                "reason": "Working backwards and then writing forwards: both sides of the inequality to be proved are multiplied by $x$, which is positive, so the sign stays."
              },
              {
                "step": "$x^2 - 12x + 35 \\ge 0$",
                "reason": "Adding the same number: $12x$ is taken from both sides."
              },
              {
                "step": "$(x - 5)(x - 7) \\ge 0$",
                "reason": "Factoring a quadratic: $-5$ and $-7$ have the sum $-12$ and the product $35$."
              },
              {
                "step": "Here $x - 5 \\ge 3$ and $x - 7 \\ge 1$.",
                "reason": "A proof is written forwards: the proof starts here, from the condition. Adding the same number: $5$ is taken from both sides of $x \\ge 8$, and so is $7$. So neither bracket is below $0$."
              },
              {
                "step": "So $(x - 5)(x - 7) \\ge 0$.",
                "reason": "A product is positive when its factors have the same sign and negative when they differ: neither factor is below $0$, so the product is positive, or $0$ when a factor is $0$."
              },
              {
                "step": "So $x^2 - 12x + 35 \\ge 0$.",
                "reason": "Multiplying out: the product of the two brackets is the quadratic of the third line."
              },
              {
                "step": "So $x^2 + 35 \\ge 12x$.",
                "reason": "Adding the same number: $12x$ is added to both sides."
              },
              {
                "step": "So $x + \\dfrac{35}{x} \\ge 12$.",
                "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{x}$, positive since $x$ is positive."
              },
              {
                "step": "The product is $(x - 5)(x - 7)$.",
                "reason": "Answering the question asked: the product of two brackets that working backwards reaches is asked for."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the product of two brackets that working backwards reaches for $x + \\dfrac{60}{x} \\le 19$; its sign proves the inequality for real numbers $x$ with $6 \\le x \\le 11$.",
              "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
              "answer": "(x-4)*(x-15)",
              "lines": [
                {
                  "step": "Find the product of two brackets that working backwards reaches for $x + \\dfrac{60}{x} \\le 19$; its sign proves the inequality for real numbers $x$ with $6 \\le x \\le 11$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + 60 \\le 19x$",
                  "reason": "Working backwards and then writing forwards: both sides of the inequality to be proved are multiplied by $x$, which is positive, so the sign stays."
                },
                {
                  "step": "$x^2 - 19x + 60 \\le 0$",
                  "reason": "Adding the same number: $19x$ is taken from both sides."
                },
                {
                  "step": "$(x - 4)(x - 15) \\le 0$",
                  "reason": "Factoring a quadratic: $-4$ and $-15$ have the sum $-19$ and the product $60$."
                },
                {
                  "step": "Here $x - 4 \\ge 2$ and $x - 15 \\le -4$.",
                  "reason": "A proof is written forwards: the proof starts here, from the condition. Adding the same number: $4$ is taken from both sides of $x \\ge 6$, and $15$ from both sides of $x \\le 11$. So the first bracket is not below $0$ and the second is not above $0$."
                },
                {
                  "step": "So $(x - 4)(x - 15) \\le 0$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: the factors differ in sign unless one of them is $0$, so the product is negative, or $0$ when a factor is $0$."
                },
                {
                  "step": "So $x^2 - 19x + 60 \\le 0$.",
                  "reason": "Multiplying out: the product of the two brackets is the quadratic of the third line."
                },
                {
                  "step": "So $x^2 + 60 \\le 19x$.",
                  "reason": "Adding the same number: $19x$ is added to both sides."
                },
                {
                  "step": "So $x + \\dfrac{60}{x} \\le 19$.",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{x}$, positive since $x$ is positive."
                },
                {
                  "step": "The product is $(x - 4)(x - 15)$.",
                  "reason": "Answering the question asked: the product of two brackets that working backwards reaches is asked for."
                }
              ]
            },
            {
              "prompt": "Find the product of two brackets that working backwards reaches for $x + \\dfrac{204}{x} \\ge 29$; its sign proves the inequality for real numbers $x$ with $0 < x \\le 8$.",
              "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
              "answer": "(x-12)*(x-17)",
              "lines": [
                {
                  "step": "Find the product of two brackets that working backwards reaches for $x + \\dfrac{204}{x} \\ge 29$; its sign proves the inequality for real numbers $x$ with $0 < x \\le 8$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + 204 \\ge 29x$",
                  "reason": "Working backwards and then writing forwards: both sides of the inequality to be proved are multiplied by $x$, which is positive, so the sign stays."
                },
                {
                  "step": "$x^2 - 29x + 204 \\ge 0$",
                  "reason": "Adding the same number: $29x$ is taken from both sides."
                },
                {
                  "step": "$(x - 12)(x - 17) \\ge 0$",
                  "reason": "Factoring a quadratic: $-12$ and $-17$ have the sum $-29$ and the product $204$."
                },
                {
                  "step": "Here $x - 12 \\le -4$ and $x - 17 \\le -9$.",
                  "reason": "A proof is written forwards: the proof starts here, from the condition. Adding the same number: $12$ is taken from both sides of $x \\le 8$, and so is $17$. So neither bracket is above $0$."
                },
                {
                  "step": "So $(x - 12)(x - 17) \\ge 0$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: neither factor is above $0$, so the product is positive, or $0$ when a factor is $0$."
                },
                {
                  "step": "So $x^2 - 29x + 204 \\ge 0$.",
                  "reason": "Multiplying out: the product of the two brackets is the quadratic of the third line."
                },
                {
                  "step": "So $x^2 + 204 \\ge 29x$.",
                  "reason": "Adding the same number: $29x$ is added to both sides."
                },
                {
                  "step": "So $x + \\dfrac{204}{x} \\ge 29$.",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{x}$, positive since $x$ is positive."
                },
                {
                  "step": "The product is $(x - 12)(x - 17)$.",
                  "reason": "Answering the question asked: the product of two brackets that working backwards reaches is asked for."
                }
              ]
            },
            {
              "prompt": "Find the product of two brackets that working backwards reaches for $x + \\dfrac{130}{x} \\ge 23$; its sign proves the inequality for real numbers $x$ with $x \\ge 14$.",
              "form": "Answer as a product of brackets, as in (x+2)*(x-3).",
              "answer": "(x-10)*(x-13)",
              "lines": [
                {
                  "step": "Find the product of two brackets that working backwards reaches for $x + \\dfrac{130}{x} \\ge 23$; its sign proves the inequality for real numbers $x$ with $x \\ge 14$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$x^2 + 130 \\ge 23x$",
                  "reason": "Working backwards and then writing forwards: both sides of the inequality to be proved are multiplied by $x$, which is positive, so the sign stays."
                },
                {
                  "step": "$x^2 - 23x + 130 \\ge 0$",
                  "reason": "Adding the same number: $23x$ is taken from both sides."
                },
                {
                  "step": "$(x - 10)(x - 13) \\ge 0$",
                  "reason": "Factoring a quadratic: $-10$ and $-13$ have the sum $-23$ and the product $130$."
                },
                {
                  "step": "Here $x - 10 \\ge 4$ and $x - 13 \\ge 1$.",
                  "reason": "A proof is written forwards: the proof starts here, from the condition. Adding the same number: $10$ is taken from both sides of $x \\ge 14$, and so is $13$. So neither bracket is below $0$."
                },
                {
                  "step": "So $(x - 10)(x - 13) \\ge 0$.",
                  "reason": "A product is positive when its factors have the same sign and negative when they differ: neither factor is below $0$, so the product is positive, or $0$ when a factor is $0$."
                },
                {
                  "step": "So $x^2 - 23x + 130 \\ge 0$.",
                  "reason": "Multiplying out: the product of the two brackets is the quadratic of the third line."
                },
                {
                  "step": "So $x^2 + 130 \\ge 23x$.",
                  "reason": "Adding the same number: $23x$ is added to both sides."
                },
                {
                  "step": "So $x + \\dfrac{130}{x} \\ge 23$.",
                  "reason": "Multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{x}$, positive since $x$ is positive."
                },
                {
                  "step": "The product is $(x - 10)(x - 13)$.",
                  "reason": "Answering the question asked: the product of two brackets that working backwards reaches is asked for."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t213-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working backwards from $x + \\dfrac{170}{x} \\ge 27$, for real numbers $x$ with $x \\ge 22$, and write that line right.",
            "given": [
              "$x^2 + 170 \\ge 27x$",
              "$x^2 + 27x + 170 \\ge 0$",
              "$(x + 10)(x + 17) \\ge 0$",
              "The two brackets have the same sign for real numbers $x$ with $x \\ge 22$, so the product is at least $0$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working backwards from $x + \\dfrac{170}{x} \\ge 27$, for real numbers $x$ with $x \\ge 22$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 takes $27x$ from the right side and writes $+27x$ on the left.",
                "reason": "A sign lost: taking $27x$ from both sides leaves $-27x$ on the left, by adding the same number."
              },
              {
                "step": "Line 2 written right is $x^2 - 27x + 170 \\ge 0$.",
                "reason": "The same step with the sign kept: the later lines then change with it."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working backwards from $\\dfrac{x}{y} + \\dfrac{3y}{x} \\ge 4$, for positive numbers $x$ and $y$ with $x \\ge 5y$, and write that line right.",
              "given": [
                "$x^2 + 3y^2 \\ge 4xy$",
                "$x^2 - 4xy + 3y^2 \\ge 0$",
                "$(x + y)(x - 3y) \\ge 0$",
                "The two brackets have the same sign for positive numbers $x$ and $y$ with $x \\ge 5y$, so the product is at least $0$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: (x-y)*(x-3*y) >= 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this working backwards from $\\dfrac{x}{y} + \\dfrac{3y}{x} \\ge 4$, for positive numbers $x$ and $y$ with $x \\ge 5y$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 factors $x^2 - 4xy + 3y^2$ with $+y$ in the first bracket.",
                  "reason": "A sign lost: the two numbers of the brackets have the sum $-4y$ and the product $3y^2$, so both carry a minus sign, by factoring a quadratic."
                },
                {
                  "step": "Line 3 written right is $(x - y)(x - 3y) \\ge 0$.",
                  "reason": "The same step with the sign kept: the later lines then change with it."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working backwards from $x + \\dfrac{150}{x} \\ge 25$, for real numbers $x$ with $x \\ge 21$, and write that line right.",
              "given": [
                "$x + \\dfrac{150}{x} \\ge 25$",
                "$x^2 + 150 \\ge 25x$",
                "$x^2 - 25x + 150 \\ge 0$",
                "$(x + 10)(x - 15) \\ge 0$",
                "The two brackets have the same sign for real numbers $x$ with $x \\ge 21$, so the product is at least $0$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: (x-10)*(x-15) >= 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this working backwards from $x + \\dfrac{150}{x} \\ge 25$, for real numbers $x$ with $x \\ge 21$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 factors $x^2 - 25x + 150$ with $+10$ in the first bracket.",
                  "reason": "A sign lost: the two numbers of the brackets have the sum $-25$ and the product $150$, so both carry a minus sign, by factoring a quadratic."
                },
                {
                  "step": "Line 4 written right is $(x - 10)(x - 15) \\ge 0$.",
                  "reason": "The same step with the sign kept: the later lines then change with it."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working backwards from $x + \\dfrac{128}{x} \\ge 24$, for real numbers $x$ with $x \\ge 21$, and write that line right.",
              "given": [
                "$x + \\dfrac{128}{x} \\ge 24$",
                "$x^2 + 128 \\ge 24x$",
                "$x^2 + 24x + 128 \\ge 0$",
                "$(x + 8)(x + 16) \\ge 0$",
                "The two brackets have the same sign for real numbers $x$ with $x \\ge 21$, so the product is at least $0$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x^2-24*x+128 >= 0",
              "lines": [
                {
                  "step": "Find the first wrong line in this working backwards from $x + \\dfrac{128}{x} \\ge 24$, for real numbers $x$ with $x \\ge 21$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 takes $24x$ from the right side and writes $+24x$ on the left.",
                  "reason": "A sign lost: taking $24x$ from both sides leaves $-24x$ on the left, by adding the same number."
                },
                {
                  "step": "Line 3 written right is $x^2 - 24x + 128 \\ge 0$.",
                  "reason": "The same step with the sign kept: the later lines then change with it."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t213-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an inequality in $x$ and $y$, with its two sides in the sentence's order: The product of $x$ and $y$, increased by $43$, is at least the sum of $5x$ and $2y$.",
            "lines": [
              {
                "step": "Write this sentence as an inequality in $x$ and $y$, with its two sides in the sentence's order: The product of $x$ and $y$, increased by $43$, is at least the sum of $5x$ and $2y$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The product of $x$ and $y$, increased by $43$, is $xy + 43$.",
                "reason": "Writing a sentence as an equation: each phrase of the left side becomes its operation, in the sentence's order."
              },
              {
                "step": "The sum of $5x$ and $2y$ is $5x + 2y$.",
                "reason": "Writing a sentence as an equation: each phrase of the right side becomes its operation, in the sentence's order."
              },
              {
                "step": "$xy + 43 \\ge 5x + 2y$",
                "reason": "Writing a sentence as an equation: the phrase \"is at least\" stands where the sign $\\ge$ goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an inequality in $x$ and $y$, with its two sides in the sentence's order: The sum of $\\dfrac{x}{y}$ and $\\dfrac{21y}{x}$ exceeds $14$.",
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "x/y+21*y/x > 14",
              "lines": [
                {
                  "step": "Write this sentence as an inequality in $x$ and $y$, with its two sides in the sentence's order: The sum of $\\dfrac{x}{y}$ and $\\dfrac{21y}{x}$ exceeds $14$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of $\\dfrac{x}{y}$ and $\\dfrac{21y}{x}$ is $\\dfrac{x}{y} + \\dfrac{21y}{x}$.",
                  "reason": "Writing a sentence as an equation: each phrase of the left side becomes its operation, in the sentence's order."
                },
                {
                  "step": "The right side is the number $14$.",
                  "reason": "Writing a sentence as an equation: each phrase of the right side becomes its operation, in the sentence's order."
                },
                {
                  "step": "$\\dfrac{x}{y} + \\dfrac{21y}{x} > 14$",
                  "reason": "Writing a sentence as an equation: the phrase \"exceeds\" stands where the sign $>$ goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an inequality in $x$ and $y$, with its two sides in the sentence's order: The product of $x - 19$ and $y - 12$ is at most $0$.",
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "(x-19)*(y-12) <= 0",
              "lines": [
                {
                  "step": "Write this sentence as an inequality in $x$ and $y$, with its two sides in the sentence's order: The product of $x - 19$ and $y - 12$ is at most $0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The product of $x - 19$ and $y - 12$ is $(x - 19)(y - 12)$.",
                  "reason": "Writing a sentence as an equation: each phrase of the left side becomes its operation, in the sentence's order."
                },
                {
                  "step": "The right side is the number $0$.",
                  "reason": "Writing a sentence as an equation: each phrase of the right side becomes its operation, in the sentence's order."
                },
                {
                  "step": "$(x - 19)(y - 12) \\le 0$",
                  "reason": "Writing a sentence as an equation: the phrase \"is at most\" stands where the sign $\\le$ goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an inequality in $x$, with its two sides in the sentence's order: The sum of $x$ and $\\dfrac{54}{x}$ is less than $14$.",
              "form": "Answer as an inequality, or two joined by and, or equivalent, as in y >= 2*x-3.",
              "answer": "x+54/x < 14",
              "lines": [
                {
                  "step": "Write this sentence as an inequality in $x$, with its two sides in the sentence's order: The sum of $x$ and $\\dfrac{54}{x}$ is less than $14$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The sum of $x$ and $\\dfrac{54}{x}$ is $x + \\dfrac{54}{x}$.",
                  "reason": "Writing a sentence as an equation: each phrase of the left side becomes its operation, in the sentence's order."
                },
                {
                  "step": "The right side is the number $14$.",
                  "reason": "Writing a sentence as an equation: each phrase of the right side becomes its operation, in the sentence's order."
                },
                {
                  "step": "$x + \\dfrac{54}{x} < 14$",
                  "reason": "Writing a sentence as an equation: the phrase \"is less than\" stands where the sign $<$ goes."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t213-k6",
      "forms": [
        {
          "example": {
            "problem": "Find the greatest of $484$, $-22x$ and $x^2$ for real numbers $x$ with $x < -22$.",
            "lines": [
              {
                "step": "Find the greatest of $484$, $-22x$ and $x^2$ for real numbers $x$ with $x < -22$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$x^2 > -22x$",
                "reason": "Multiplying by a negative number reverses the sign: both sides of $x < -22$ are multiplied by $x$, which is negative since it is below $-22$."
              },
              {
                "step": "$-22x > 484$",
                "reason": "Multiplying by a negative number reverses the sign: both sides of $x < -22$ are multiplied by $-22$."
              },
              {
                "step": "$x^2 > -22x > 484$",
                "reason": "Inequality chain: the second and third lines share $-22x$, so the two are written as one chain."
              },
              {
                "step": "The greatest is $x^2$.",
                "reason": "Answering the question asked: the greatest of the three is asked for."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greatest of $-13y$, $169$ and $y^2$ for real numbers $y$ with $-13 < y < 0$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "169",
              "lines": [
                {
                  "step": "Find the greatest of $-13y$, $169$ and $y^2$ for real numbers $y$ with $-13 < y < 0$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-13y > y^2$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides of $-13 < y$ are multiplied by $y$, which is negative since it is below $0$."
                },
                {
                  "step": "$169 > -13y$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides of $-13 < y$ are multiplied by $-13$."
                },
                {
                  "step": "$169 > -13y > y^2$",
                  "reason": "Inequality chain: the second and third lines share $-13y$, so the two are written as one chain."
                },
                {
                  "step": "The greatest is $169$.",
                  "reason": "Answering the question asked: the greatest of the three is asked for."
                }
              ]
            },
            {
              "prompt": "Find the least of $-x^2$, $-14x$ and $-196$ for real numbers $x$ with $x > 14$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "-x^2",
              "lines": [
                {
                  "step": "Find the least of $-x^2$, $-14x$ and $-196$ for real numbers $x$ with $x > 14$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-x^2 < -14x$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides of $x > 14$ are multiplied by $-x$, which is negative since $x$ is above $14$."
                },
                {
                  "step": "$-14x < -196$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides of $x > 14$ are multiplied by $-14$."
                },
                {
                  "step": "$-x^2 < -14x < -196$",
                  "reason": "Inequality chain: the second and third lines share $-14x$, so the two are written as one chain."
                },
                {
                  "step": "The least is $-x^2$.",
                  "reason": "Answering the question asked: the least of the three is asked for."
                }
              ]
            },
            {
              "prompt": "Find the least of $-9$, $-z^2$ and $-3z$ for real numbers $z$ with $0 < z < 3$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "-9",
              "lines": [
                {
                  "step": "Find the least of $-9$, $-z^2$ and $-3z$ for real numbers $z$ with $0 < z < 3$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-z^2 > -3z$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides of $z < 3$ are multiplied by $-z$, which is negative since $z$ is above $0$."
                },
                {
                  "step": "$-3z > -9$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides of $z < 3$ are multiplied by $-3$."
                },
                {
                  "step": "$-z^2 > -3z > -9$",
                  "reason": "Inequality chain: the second and third lines share $-3z$, so the two are written as one chain."
                },
                {
                  "step": "The least is $-9$.",
                  "reason": "Answering the question asked: the least of the three is asked for."
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
      "id": "t213-p1",
      "method": "direct proof",
      "statement": "Let $a$, $b$, $c$ and $d$ be real numbers with $a \\ge b$ and $c \\ge d$. Then $ac + bd \\ge ad + bc$.",
      "idea": "Working backwards, the difference of the two sides factors as $(a - b)(c - d)$, a product of two numbers that are at least $0$. The proof is written forwards from those two numbers; it never multiplies $a \\ge b$ by $c \\ge d$, since the four numbers may be negative.",
      "lines": [
        {
          "line": "Let $a$, $b$, $c$ and $d$ be real numbers with $a \\ge b$ and $c \\ge d$.",
          "reason": "the hypothesis"
        },
        {
          "line": "Then $a - b \\ge 0$.",
          "reason": "adding the same number $-b$ to both sides of $a \\ge b$"
        },
        {
          "line": "Also $c - d \\ge 0$.",
          "reason": "adding the same number $-d$ to both sides of $c \\ge d$"
        },
        {
          "line": "So $(a - b)(c - d) \\ge 0$.",
          "reason": "a product is positive when its factors have the same sign, and a product with the factor $0$ is $0$"
        },
        {
          "line": "So $ac - ad - bc + bd \\ge 0$.",
          "reason": "multiplying out the two brackets"
        },
        {
          "line": "Therefore $ac + bd \\ge ad + bc$.",
          "reason": "adding the same number $ad + bc$ to both sides"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t213-s1",
      "method": "direct proof",
      "statement": "Prove that $\\dfrac{x}{1 + x} < \\dfrac{y}{1 + y}$ for all numbers $x$ and $y$ with $0 < x < y$.",
      "check": {
        "proof": [
          {
            "line": "Suppose $0 < x < y$.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $x + xy < y + xy$.",
            "reason": "adding the same number $xy$ to both sides of $x < y$"
          },
          {
            "line": "So $x(1 + y) < y(1 + x)$.",
            "reason": "taking out a common factor on each side"
          },
          {
            "line": "Also $(1 + x)(1 + y) > 0$.",
            "reason": "product of two positive numbers (arithmetic's): $1 + x$ and $1 + y$ are positive, since $x$ and $y$ are"
          },
          {
            "line": "So $\\dfrac{x(1 + y)}{(1 + x)(1 + y)} < \\dfrac{y(1 + x)}{(1 + x)(1 + y)}$.",
            "reason": "multiplying by a positive number: both sides are multiplied by $\\dfrac{1}{(1 + x)(1 + y)}$"
          },
          {
            "line": "Therefore $\\dfrac{x}{1 + x} < \\dfrac{y}{1 + y}$.",
            "reason": "cancelling a common factor: $1 + y$ on the left side and $1 + x$ on the right side"
          }
        ]
      }
    },
    {
      "id": "t213-s2",
      "method": "direct proof",
      "statement": "Prove that $xy^2 + 18 > 9x + 6y$ for all numbers $x$ and $y$ with $x > 2$ and $y > 3$.",
      "check": {
        "proof": [
          {
            "line": "Suppose $x > 2$ and $y > 3$.",
            "reason": "the hypothesis"
          },
          {
            "line": "Then $x > 0$.",
            "reason": "transitivity: $x > 2$ and $2 > 0$"
          },
          {
            "line": "Also $y > 0$.",
            "reason": "transitivity: $y > 3$ and $3 > 0$"
          },
          {
            "line": "So $xy > 0$.",
            "reason": "product of two positive numbers (arithmetic's)"
          },
          {
            "line": "So $xy^2 > 3xy$.",
            "reason": "multiplying by a positive number: both sides of $y > 3$ are multiplied by $xy$"
          },
          {
            "line": "So $xy^2 + 18 > 3xy + 18$.",
            "reason": "adding the same number $18$ to both sides"
          },
          {
            "line": "Also $x - 2 > 0$.",
            "reason": "adding the same number $-2$ to both sides of $x > 2$"
          },
          {
            "line": "Also $y - 3 > 0$.",
            "reason": "adding the same number $-3$ to both sides of $y > 3$"
          },
          {
            "line": "So $(x - 2)(y - 3) > 0$.",
            "reason": "product of two positive numbers (arithmetic's)"
          },
          {
            "line": "So $xy - 3x - 2y + 6 > 0$.",
            "reason": "multiplying out the two brackets"
          },
          {
            "line": "So $xy + 6 > 3x + 2y$.",
            "reason": "adding the same number $3x + 2y$ to both sides"
          },
          {
            "line": "So $3xy + 18 > 9x + 6y$.",
            "reason": "multiplying by a positive number: both sides are multiplied by $3$"
          },
          {
            "line": "Therefore $xy^2 + 18 > 9x + 6y$.",
            "reason": "comparing through a third number: transitivity joins the sixth and twelfth lines through $3xy + 18$"
          }
        ]
      }
    },
    {
      "id": "t213-s4",
      "method": "disproof by counterexample",
      "statement": "The claim \"for all real numbers $a$, $b$, $c$ and $d$, if $a \\ge b$ and $c \\ge d$, then $ac \\ge bd$\" is false.",
      "check": {
        "proof": [
          {
            "line": "Take $a = 3$, $b = -5$, $c = -2$ and $d = -6$.",
            "reason": "one set of numbers to test the claim on"
          },
          {
            "line": "Then $a \\ge b$, since $3 \\ge -5$.",
            "reason": "substituting a value"
          },
          {
            "line": "Also $c \\ge d$, since $-2 \\ge -6$.",
            "reason": "substituting a value"
          },
          {
            "line": "Here $ac = 3 \\cdot (-2) = -6$ and $bd = (-5) \\cdot (-6) = 30$.",
            "reason": "substituting a value"
          },
          {
            "line": "So $ac \\ge bd$ reads $-6 \\ge 30$, which is false.",
            "reason": "strict and nonstrict inequality: $-6$ is less than $30$"
          },
          {
            "line": "Therefore the claim is false.",
            "reason": "one set of numbers meets both conditions and fails the conclusion"
          }
        ]
      }
    }
  ]
}
