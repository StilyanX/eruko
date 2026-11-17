export default {
  "number": 129,
  "title": "Comparing numbers without a calculator",
  "section": 6,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "260-264, 280-285"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the greater of $\\sqrt{2\\sqrt{7}}$ and $\\sqrt{3\\sqrt{3}}$.",
    "form": "Answer as a number, or equivalent.",
    "answer": "sqrt(2*sqrt(7))",
    "solution": [
      "Find the greater of $\\sqrt{2\\sqrt{7}}$ and $\\sqrt{3\\sqrt{3}}$.",
      "Squaring both numbers gives $(\\sqrt{2\\sqrt{7}})^2 = 2\\sqrt{7}$ and $(\\sqrt{3\\sqrt{3}})^2 = 3\\sqrt{3}$.",
      "Squaring again gives $(2\\sqrt{7})^2 = 28$ and $(3\\sqrt{3})^2 = 27$.",
      "$28 > 27$",
      "$2\\sqrt{7} > 3\\sqrt{3}$",
      "$\\sqrt{2\\sqrt{7}} > \\sqrt{3\\sqrt{3}}$",
      "The greater is $\\sqrt{2\\sqrt{7}}$."
    ]
  },
  "ideas": [
    {
      "name": "Working backwards and then writing forwards",
      "concrete": "To compare $2\\sqrt{6}$ and $5$, squaring both gives $24$ and $25$, which compare at once. The solution is then written forwards: from $24 < 25$, taking positive square roots gives $2\\sqrt{6} < 5$.",
      "general": "To compare two positive numbers, apply to both only steps that keep the order (adding the same number, multiplying by a positive number, taking a positive power or root of positive numbers) until the two results compare at once. The solution is then written forwards: it starts from the comparison of the results and undoes the steps in reverse order, each step keeping the order, and ends on the comparison asked for."
    },
    {
      "name": "Comparing through a third number",
      "concrete": "Since $15^4 < 16^4 = 2^{16}$ and $9^6 > 8^6 = 2^{18}$, and $2^{16} < 2^{18}$, the number $15^4$ is less than $9^6$.",
      "general": "Two numbers that do not compare at once are each compared with a third number $c$ that compares at once with both; transitivity (arithmetic's) joins them."
    },
    {
      "name": "Comparing reciprocals",
      "concrete": "The reciprocals of $\\dfrac{8}{17}$ and $\\dfrac{10}{21}$ are $2 + \\dfrac{1}{8}$ and $2 + \\dfrac{1}{10}$. The first reciprocal is the greater, so $\\dfrac{8}{17} < \\dfrac{10}{21}$.",
      "general": "A positive fraction $\\dfrac{a}{b}$ with $a < b$ is compared through its reciprocal written as a whole number plus a part; reciprocals of numbers of the same sign reverse the order (t128)."
    }
  ],
  "kinds": [
    {
      "id": "t129-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the greater of $5\\sqrt{3}$ and $4\\sqrt{5}$.",
            "lines": [
              {
                "step": "Find the greater of $5\\sqrt{3}$ and $4\\sqrt{5}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(5\\sqrt{3})^2 = 25 \\cdot 3 = 75$",
                "reason": "Power of a product: the square of $5\\sqrt{3}$ is $5^2$ times the square of $\\sqrt{3}$, and the square of $\\sqrt{3}$ is $3$ by the positive square root."
              },
              {
                "step": "$(4\\sqrt{5})^2 = 16 \\cdot 5 = 80$",
                "reason": "Power of a product: the square of $4\\sqrt{5}$ is $4^2$ times the square of $\\sqrt{5}$, and the square of $\\sqrt{5}$ is $5$ by the positive square root."
              },
              {
                "step": "$80 > 75$",
                "reason": "Working backwards and then writing forwards: the two squares are whole numbers that compare at once, so the forwards solution starts from them."
              },
              {
                "step": "$4\\sqrt{5} > 5\\sqrt{3}$",
                "reason": "Powers and roots of positive numbers keep the order: both numbers are positive, and taking positive square roots of both sides of $80 > 75$ gives them back."
              },
              {
                "step": "The greater is $4\\sqrt{5}$.",
                "reason": "Answering the question asked: the greater of the two numbers is asked for."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greater of $3\\sqrt{7}$ and $2\\sqrt{15}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "3*sqrt(7)",
              "lines": [
                {
                  "step": "Find the greater of $3\\sqrt{7}$ and $2\\sqrt{15}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(3\\sqrt{7})^2 = 9 \\cdot 7 = 63$",
                  "reason": "Power of a product: the square of $3\\sqrt{7}$ is $3^2$ times the square of $\\sqrt{7}$, and the square of $\\sqrt{7}$ is $7$ by the positive square root."
                },
                {
                  "step": "$(2\\sqrt{15})^2 = 4 \\cdot 15 = 60$",
                  "reason": "Power of a product: the square of $2\\sqrt{15}$ is $2^2$ times the square of $\\sqrt{15}$, and the square of $\\sqrt{15}$ is $15$ by the positive square root."
                },
                {
                  "step": "$63 > 60$",
                  "reason": "Working backwards and then writing forwards: the two squares are whole numbers that compare at once, so the forwards solution starts from them."
                },
                {
                  "step": "$3\\sqrt{7} > 2\\sqrt{15}$",
                  "reason": "Powers and roots of positive numbers keep the order: both numbers are positive, and taking positive square roots of both sides of $63 > 60$ gives them back."
                },
                {
                  "step": "The greater is $3\\sqrt{7}$.",
                  "reason": "Answering the question asked: the greater of the two numbers is asked for."
                }
              ]
            },
            {
              "prompt": "Find the greater of $7\\sqrt{2}$ and $4\\sqrt{6}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "7*sqrt(2)",
              "lines": [
                {
                  "step": "Find the greater of $7\\sqrt{2}$ and $4\\sqrt{6}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(7\\sqrt{2})^2 = 49 \\cdot 2 = 98$",
                  "reason": "Power of a product: the square of $7\\sqrt{2}$ is $7^2$ times the square of $\\sqrt{2}$, and the square of $\\sqrt{2}$ is $2$ by the positive square root."
                },
                {
                  "step": "$(4\\sqrt{6})^2 = 16 \\cdot 6 = 96$",
                  "reason": "Power of a product: the square of $4\\sqrt{6}$ is $4^2$ times the square of $\\sqrt{6}$, and the square of $\\sqrt{6}$ is $6$ by the positive square root."
                },
                {
                  "step": "$98 > 96$",
                  "reason": "Working backwards and then writing forwards: the two squares are whole numbers that compare at once, so the forwards solution starts from them."
                },
                {
                  "step": "$7\\sqrt{2} > 4\\sqrt{6}$",
                  "reason": "Powers and roots of positive numbers keep the order: both numbers are positive, and taking positive square roots of both sides of $98 > 96$ gives them back."
                },
                {
                  "step": "The greater is $7\\sqrt{2}$.",
                  "reason": "Answering the question asked: the greater of the two numbers is asked for."
                }
              ]
            },
            {
              "prompt": "Find the greater of $2\\sqrt{13}$ and $3\\sqrt{6}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "3*sqrt(6)",
              "lines": [
                {
                  "step": "Find the greater of $2\\sqrt{13}$ and $3\\sqrt{6}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(2\\sqrt{13})^2 = 4 \\cdot 13 = 52$",
                  "reason": "Power of a product: the square of $2\\sqrt{13}$ is $2^2$ times the square of $\\sqrt{13}$, and the square of $\\sqrt{13}$ is $13$ by the positive square root."
                },
                {
                  "step": "$(3\\sqrt{6})^2 = 9 \\cdot 6 = 54$",
                  "reason": "Power of a product: the square of $3\\sqrt{6}$ is $3^2$ times the square of $\\sqrt{6}$, and the square of $\\sqrt{6}$ is $6$ by the positive square root."
                },
                {
                  "step": "$54 > 52$",
                  "reason": "Working backwards and then writing forwards: the two squares are whole numbers that compare at once, so the forwards solution starts from them."
                },
                {
                  "step": "$3\\sqrt{6} > 2\\sqrt{13}$",
                  "reason": "Powers and roots of positive numbers keep the order: both numbers are positive, and taking positive square roots of both sides of $54 > 52$ gives them back."
                },
                {
                  "step": "The greater is $3\\sqrt{6}$.",
                  "reason": "Answering the question asked: the greater of the two numbers is asked for."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the greater of $\\sqrt[3]{11}$ and $\\sqrt{5}$.",
            "lines": [
              {
                "step": "Find the greater of $\\sqrt[3]{11}$ and $\\sqrt{5}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(\\sqrt[3]{11})^{6} = 11^{2} = 121$",
                "reason": "Power law, with fractional exponents: $(11^{1/3})^{6} = 11^{6/3} = 11^{2}$."
              },
              {
                "step": "$(\\sqrt{5})^{6} = 5^{3} = 125$",
                "reason": "Power law, with fractional exponents: $(5^{1/2})^{6} = 5^{6/2} = 5^{3}$."
              },
              {
                "step": "$125 > 121$",
                "reason": "Working backwards and then writing forwards: the sixth powers are whole numbers that compare at once, so the forwards solution starts from them."
              },
              {
                "step": "$\\sqrt{5} > \\sqrt[3]{11}$",
                "reason": "Powers and roots of positive numbers keep the order: both numbers are positive, and taking sixth roots of both sides of $125 > 121$ gives them back."
              },
              {
                "step": "The greater is $\\sqrt{5}$.",
                "reason": "Answering the question asked: the greater of the two numbers is asked for."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greater of $\\sqrt[3]{5}$ and $\\sqrt{3}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "sqrt(3)",
              "lines": [
                {
                  "step": "Find the greater of $\\sqrt[3]{5}$ and $\\sqrt{3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(\\sqrt[3]{5})^{6} = 5^{2} = 25$",
                  "reason": "Power law, with fractional exponents: $(5^{1/3})^{6} = 5^{6/3} = 5^{2}$."
                },
                {
                  "step": "$(\\sqrt{3})^{6} = 3^{3} = 27$",
                  "reason": "Power law, with fractional exponents: $(3^{1/2})^{6} = 3^{6/2} = 3^{3}$."
                },
                {
                  "step": "$27 > 25$",
                  "reason": "Working backwards and then writing forwards: the sixth powers are whole numbers that compare at once, so the forwards solution starts from them."
                },
                {
                  "step": "$\\sqrt{3} > \\sqrt[3]{5}$",
                  "reason": "Powers and roots of positive numbers keep the order: both numbers are positive, and taking sixth roots of both sides of $27 > 25$ gives them back."
                },
                {
                  "step": "The greater is $\\sqrt{3}$.",
                  "reason": "Answering the question asked: the greater of the two numbers is asked for."
                }
              ]
            },
            {
              "prompt": "Find the greater of $\\sqrt[4]{10}$ and $\\sqrt[3]{6}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "6^(1/3)",
              "lines": [
                {
                  "step": "Find the greater of $\\sqrt[4]{10}$ and $\\sqrt[3]{6}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(\\sqrt[4]{10})^{12} = 10^{3} = 1000$",
                  "reason": "Power law, with fractional exponents: $(10^{1/4})^{12} = 10^{12/4} = 10^{3}$."
                },
                {
                  "step": "$(\\sqrt[3]{6})^{12} = 6^{4} = 1296$",
                  "reason": "Power law, with fractional exponents: $(6^{1/3})^{12} = 6^{12/3} = 6^{4}$."
                },
                {
                  "step": "$1296 > 1000$",
                  "reason": "Working backwards and then writing forwards: the twelfth powers are whole numbers that compare at once, so the forwards solution starts from them."
                },
                {
                  "step": "$\\sqrt[3]{6} > \\sqrt[4]{10}$",
                  "reason": "Powers and roots of positive numbers keep the order: both numbers are positive, and taking twelfth roots of both sides of $1296 > 1000$ gives them back."
                },
                {
                  "step": "The greater is $\\sqrt[3]{6}$.",
                  "reason": "Answering the question asked: the greater of the two numbers is asked for."
                }
              ]
            },
            {
              "prompt": "Find the greater of $\\sqrt{7}$ and $\\sqrt[3]{19}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "19^(1/3)",
              "lines": [
                {
                  "step": "Find the greater of $\\sqrt{7}$ and $\\sqrt[3]{19}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(\\sqrt{7})^{6} = 7^{3} = 343$",
                  "reason": "Power law, with fractional exponents: $(7^{1/2})^{6} = 7^{6/2} = 7^{3}$."
                },
                {
                  "step": "$(\\sqrt[3]{19})^{6} = 19^{2} = 361$",
                  "reason": "Power law, with fractional exponents: $(19^{1/3})^{6} = 19^{6/3} = 19^{2}$."
                },
                {
                  "step": "$361 > 343$",
                  "reason": "Working backwards and then writing forwards: the sixth powers are whole numbers that compare at once, so the forwards solution starts from them."
                },
                {
                  "step": "$\\sqrt[3]{19} > \\sqrt{7}$",
                  "reason": "Powers and roots of positive numbers keep the order: both numbers are positive, and taking sixth roots of both sides of $361 > 343$ gives them back."
                },
                {
                  "step": "The greater is $\\sqrt[3]{19}$.",
                  "reason": "Answering the question asked: the greater of the two numbers is asked for."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the greater of $\\sqrt{4\\sqrt{3}}$ and $\\sqrt{5\\sqrt{2}}$.",
            "lines": [
              {
                "step": "Find the greater of $\\sqrt{4\\sqrt{3}}$ and $\\sqrt{5\\sqrt{2}}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Squaring both numbers gives $(\\sqrt{4\\sqrt{3}})^2 = 4\\sqrt{3}$ and $(\\sqrt{5\\sqrt{2}})^2 = 5\\sqrt{2}$.",
                "reason": "Positive square root: the square of the positive square root of a positive number is that number."
              },
              {
                "step": "Squaring again gives $(4\\sqrt{3})^2 = 48$ and $(5\\sqrt{2})^2 = 50$.",
                "reason": "Power of a product: $4^2 \\cdot 3 = 48$ and $5^2 \\cdot 2 = 50$."
              },
              {
                "step": "$50 > 48$",
                "reason": "Working backwards and then writing forwards: squaring twice gives whole numbers that compare at once, so the forwards solution starts from them."
              },
              {
                "step": "$5\\sqrt{2} > 4\\sqrt{3}$",
                "reason": "Powers and roots of positive numbers keep the order: positive square roots of both sides of $50 > 48$."
              },
              {
                "step": "$\\sqrt{5\\sqrt{2}} > \\sqrt{4\\sqrt{3}}$",
                "reason": "Powers and roots of positive numbers keep the order: positive square roots of both sides of the line before."
              },
              {
                "step": "The greater is $\\sqrt{5\\sqrt{2}}$.",
                "reason": "Answering the question asked: the greater of the two numbers is asked for."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greater of $\\sqrt{5\\sqrt{7}}$ and $\\sqrt{4\\sqrt{11}}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "sqrt(4*sqrt(11))",
              "lines": [
                {
                  "step": "Find the greater of $\\sqrt{5\\sqrt{7}}$ and $\\sqrt{4\\sqrt{11}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Squaring both numbers gives $(\\sqrt{5\\sqrt{7}})^2 = 5\\sqrt{7}$ and $(\\sqrt{4\\sqrt{11}})^2 = 4\\sqrt{11}$.",
                  "reason": "Positive square root: the square of the positive square root of a positive number is that number."
                },
                {
                  "step": "Squaring again gives $(5\\sqrt{7})^2 = 175$ and $(4\\sqrt{11})^2 = 176$.",
                  "reason": "Power of a product: $5^2 \\cdot 7 = 175$ and $4^2 \\cdot 11 = 176$."
                },
                {
                  "step": "$176 > 175$",
                  "reason": "Working backwards and then writing forwards: squaring twice gives whole numbers that compare at once, so the forwards solution starts from them."
                },
                {
                  "step": "$4\\sqrt{11} > 5\\sqrt{7}$",
                  "reason": "Powers and roots of positive numbers keep the order: positive square roots of both sides of $176 > 175$."
                },
                {
                  "step": "$\\sqrt{4\\sqrt{11}} > \\sqrt{5\\sqrt{7}}$",
                  "reason": "Powers and roots of positive numbers keep the order: positive square roots of both sides of the line before."
                },
                {
                  "step": "The greater is $\\sqrt{4\\sqrt{11}}$.",
                  "reason": "Answering the question asked: the greater of the two numbers is asked for."
                }
              ]
            },
            {
              "prompt": "Find the greater of $\\sqrt{3\\sqrt{11}}$ and $\\sqrt{7\\sqrt{2}}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "sqrt(3*sqrt(11))",
              "lines": [
                {
                  "step": "Find the greater of $\\sqrt{3\\sqrt{11}}$ and $\\sqrt{7\\sqrt{2}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Squaring both numbers gives $(\\sqrt{3\\sqrt{11}})^2 = 3\\sqrt{11}$ and $(\\sqrt{7\\sqrt{2}})^2 = 7\\sqrt{2}$.",
                  "reason": "Positive square root: the square of the positive square root of a positive number is that number."
                },
                {
                  "step": "Squaring again gives $(3\\sqrt{11})^2 = 99$ and $(7\\sqrt{2})^2 = 98$.",
                  "reason": "Power of a product: $3^2 \\cdot 11 = 99$ and $7^2 \\cdot 2 = 98$."
                },
                {
                  "step": "$99 > 98$",
                  "reason": "Working backwards and then writing forwards: squaring twice gives whole numbers that compare at once, so the forwards solution starts from them."
                },
                {
                  "step": "$3\\sqrt{11} > 7\\sqrt{2}$",
                  "reason": "Powers and roots of positive numbers keep the order: positive square roots of both sides of $99 > 98$."
                },
                {
                  "step": "$\\sqrt{3\\sqrt{11}} > \\sqrt{7\\sqrt{2}}$",
                  "reason": "Powers and roots of positive numbers keep the order: positive square roots of both sides of the line before."
                },
                {
                  "step": "The greater is $\\sqrt{3\\sqrt{11}}$.",
                  "reason": "Answering the question asked: the greater of the two numbers is asked for."
                }
              ]
            },
            {
              "prompt": "Find the greater of $\\sqrt{2\\sqrt{19}}$ and $\\sqrt{5\\sqrt{3}}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "sqrt(2*sqrt(19))",
              "lines": [
                {
                  "step": "Find the greater of $\\sqrt{2\\sqrt{19}}$ and $\\sqrt{5\\sqrt{3}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Squaring both numbers gives $(\\sqrt{2\\sqrt{19}})^2 = 2\\sqrt{19}$ and $(\\sqrt{5\\sqrt{3}})^2 = 5\\sqrt{3}$.",
                  "reason": "Positive square root: the square of the positive square root of a positive number is that number."
                },
                {
                  "step": "Squaring again gives $(2\\sqrt{19})^2 = 76$ and $(5\\sqrt{3})^2 = 75$.",
                  "reason": "Power of a product: $2^2 \\cdot 19 = 76$ and $5^2 \\cdot 3 = 75$."
                },
                {
                  "step": "$76 > 75$",
                  "reason": "Working backwards and then writing forwards: squaring twice gives whole numbers that compare at once, so the forwards solution starts from them."
                },
                {
                  "step": "$2\\sqrt{19} > 5\\sqrt{3}$",
                  "reason": "Powers and roots of positive numbers keep the order: positive square roots of both sides of $76 > 75$."
                },
                {
                  "step": "$\\sqrt{2\\sqrt{19}} > \\sqrt{5\\sqrt{3}}$",
                  "reason": "Powers and roots of positive numbers keep the order: positive square roots of both sides of the line before."
                },
                {
                  "step": "The greater is $\\sqrt{2\\sqrt{19}}$.",
                  "reason": "Answering the question asked: the greater of the two numbers is asked for."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the whole number $n$ with $n < \\sqrt{3} + \\sqrt{13} < n + 1$.",
            "lines": [
              {
                "step": "Find the whole number $n$ with $n < \\sqrt{3} + \\sqrt{13} < n + 1$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(\\sqrt{3} + \\sqrt{13})^2 = 16 + 2\\sqrt{39}$",
                "reason": "Multiplying out: the square of the sum is $3 + 2\\sqrt{3}\\sqrt{13} + 13$, and the root of a product gives $\\sqrt{3}\\sqrt{13} = \\sqrt{39}$."
              },
              {
                "step": "$6 < \\sqrt{39} < 7$",
                "reason": "Powers and roots of positive numbers keep the order: $6^2 = 36$ and $7^2 = 49$, with $36 < 39 < 49$, and positive square roots keep the order."
              },
              {
                "step": "$28 < 16 + 2\\sqrt{39} < 30$",
                "reason": "Multiplying by a positive number and adding the same number: each part of the line before is doubled, and $16$ is added to each part."
              },
              {
                "step": "$5^2 < (\\sqrt{3} + \\sqrt{13})^2 < 6^2$",
                "reason": "Comparing through a third number: $5^2 = 25$ is less than $28$, and $30$ is less than $6^2 = 36$, so transitivity joins the three lines."
              },
              {
                "step": "$5 < \\sqrt{3} + \\sqrt{13} < 6$",
                "reason": "Powers and roots of positive numbers keep the order: positive square roots of each part of the line before."
              },
              {
                "step": "$n = 5$",
                "reason": "Answering the question asked: $5$ and $6$ are consecutive whole numbers with the sum between them."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the whole number $n$ with $n < \\sqrt{5} + \\sqrt{42} < n + 1$.",
              "form": "Answer as an integer.",
              "answer": "8",
              "lines": [
                {
                  "step": "Find the whole number $n$ with $n < \\sqrt{5} + \\sqrt{42} < n + 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(\\sqrt{5} + \\sqrt{42})^2 = 47 + 2\\sqrt{210}$",
                  "reason": "Multiplying out: the square of the sum is $5 + 2\\sqrt{5}\\sqrt{42} + 42$, and the root of a product gives $\\sqrt{5}\\sqrt{42} = \\sqrt{210}$."
                },
                {
                  "step": "$14 < \\sqrt{210} < 15$",
                  "reason": "Powers and roots of positive numbers keep the order: $14^2 = 196$ and $15^2 = 225$, with $196 < 210 < 225$, and positive square roots keep the order."
                },
                {
                  "step": "$75 < 47 + 2\\sqrt{210} < 77$",
                  "reason": "Multiplying by a positive number and adding the same number: each part of the line before is doubled, and $47$ is added to each part."
                },
                {
                  "step": "$8^2 < (\\sqrt{5} + \\sqrt{42})^2 < 9^2$",
                  "reason": "Comparing through a third number: $8^2 = 64$ is less than $75$, and $77$ is less than $9^2 = 81$, so transitivity joins the three lines."
                },
                {
                  "step": "$8 < \\sqrt{5} + \\sqrt{42} < 9$",
                  "reason": "Powers and roots of positive numbers keep the order: positive square roots of each part of the line before."
                },
                {
                  "step": "$n = 8$",
                  "reason": "Answering the question asked: $8$ and $9$ are consecutive whole numbers with the sum between them."
                }
              ]
            },
            {
              "prompt": "Find the whole number $n$ with $n < \\sqrt{10} + \\sqrt{41} < n + 1$.",
              "form": "Answer as an integer.",
              "answer": "9",
              "lines": [
                {
                  "step": "Find the whole number $n$ with $n < \\sqrt{10} + \\sqrt{41} < n + 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(\\sqrt{10} + \\sqrt{41})^2 = 51 + 2\\sqrt{410}$",
                  "reason": "Multiplying out: the square of the sum is $10 + 2\\sqrt{10}\\sqrt{41} + 41$, and the root of a product gives $\\sqrt{10}\\sqrt{41} = \\sqrt{410}$."
                },
                {
                  "step": "$20 < \\sqrt{410} < 21$",
                  "reason": "Powers and roots of positive numbers keep the order: $20^2 = 400$ and $21^2 = 441$, with $400 < 410 < 441$, and positive square roots keep the order."
                },
                {
                  "step": "$91 < 51 + 2\\sqrt{410} < 93$",
                  "reason": "Multiplying by a positive number and adding the same number: each part of the line before is doubled, and $51$ is added to each part."
                },
                {
                  "step": "$9^2 < (\\sqrt{10} + \\sqrt{41})^2 < 10^2$",
                  "reason": "Comparing through a third number: $9^2 = 81$ is less than $91$, and $93$ is less than $10^2 = 100$, so transitivity joins the three lines."
                },
                {
                  "step": "$9 < \\sqrt{10} + \\sqrt{41} < 10$",
                  "reason": "Powers and roots of positive numbers keep the order: positive square roots of each part of the line before."
                },
                {
                  "step": "$n = 9$",
                  "reason": "Answering the question asked: $9$ and $10$ are consecutive whole numbers with the sum between them."
                }
              ]
            },
            {
              "prompt": "Find the whole number $n$ with $n < \\sqrt{13} + \\sqrt{46} < n + 1$.",
              "form": "Answer as an integer.",
              "answer": "10",
              "lines": [
                {
                  "step": "Find the whole number $n$ with $n < \\sqrt{13} + \\sqrt{46} < n + 1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(\\sqrt{13} + \\sqrt{46})^2 = 59 + 2\\sqrt{598}$",
                  "reason": "Multiplying out: the square of the sum is $13 + 2\\sqrt{13}\\sqrt{46} + 46$, and the root of a product gives $\\sqrt{13}\\sqrt{46} = \\sqrt{598}$."
                },
                {
                  "step": "$24 < \\sqrt{598} < 25$",
                  "reason": "Powers and roots of positive numbers keep the order: $24^2 = 576$ and $25^2 = 625$, with $576 < 598 < 625$, and positive square roots keep the order."
                },
                {
                  "step": "$107 < 59 + 2\\sqrt{598} < 109$",
                  "reason": "Multiplying by a positive number and adding the same number: each part of the line before is doubled, and $59$ is added to each part."
                },
                {
                  "step": "$10^2 < (\\sqrt{13} + \\sqrt{46})^2 < 11^2$",
                  "reason": "Comparing through a third number: $10^2 = 100$ is less than $107$, and $109$ is less than $11^2 = 121$, so transitivity joins the three lines."
                },
                {
                  "step": "$10 < \\sqrt{13} + \\sqrt{46} < 11$",
                  "reason": "Powers and roots of positive numbers keep the order: positive square roots of each part of the line before."
                },
                {
                  "step": "$n = 10$",
                  "reason": "Answering the question asked: $10$ and $11$ are consecutive whole numbers with the sum between them."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the greatest of $\\sqrt{6}$, $\\sqrt[3]{15}$ and $\\sqrt[6]{220}$.",
            "lines": [
              {
                "step": "Find the greatest of $\\sqrt{6}$, $\\sqrt[3]{15}$ and $\\sqrt[6]{220}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(\\sqrt{6})^{6} = 6^{3} = 216$",
                "reason": "Power law, with fractional exponents: $(6^{1/2})^{6} = 6^{6/2} = 6^{3}$."
              },
              {
                "step": "$(\\sqrt[3]{15})^{6} = 15^{2} = 225$",
                "reason": "Power law, with fractional exponents: $(15^{1/3})^{6} = 15^{6/3} = 15^{2}$."
              },
              {
                "step": "$(\\sqrt[6]{220})^{6} = 220$",
                "reason": "Power law, with fractional exponents: $(220^{1/6})^{6} = 220^{6/6} = 220$."
              },
              {
                "step": "$225 > 220 > 216$",
                "reason": "Working backwards and then writing forwards: the sixth powers are whole numbers that compare at once, so the forwards solution starts from them."
              },
              {
                "step": "$\\sqrt[3]{15} > \\sqrt[6]{220} > \\sqrt{6}$",
                "reason": "Powers and roots of positive numbers keep the order: all three numbers are positive, and taking sixth roots of each part of the line before gives them back."
              },
              {
                "step": "The greatest is $\\sqrt[3]{15}$.",
                "reason": "Answering the question asked: the first number of the chain is the greatest."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greatest of $\\sqrt{7}$, $\\sqrt[3]{18}$ and $\\sqrt[6]{330}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "sqrt(7)",
              "lines": [
                {
                  "step": "Find the greatest of $\\sqrt{7}$, $\\sqrt[3]{18}$ and $\\sqrt[6]{330}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(\\sqrt{7})^{6} = 7^{3} = 343$",
                  "reason": "Power law, with fractional exponents: $(7^{1/2})^{6} = 7^{6/2} = 7^{3}$."
                },
                {
                  "step": "$(\\sqrt[3]{18})^{6} = 18^{2} = 324$",
                  "reason": "Power law, with fractional exponents: $(18^{1/3})^{6} = 18^{6/3} = 18^{2}$."
                },
                {
                  "step": "$(\\sqrt[6]{330})^{6} = 330$",
                  "reason": "Power law, with fractional exponents: $(330^{1/6})^{6} = 330^{6/6} = 330$."
                },
                {
                  "step": "$343 > 330 > 324$",
                  "reason": "Working backwards and then writing forwards: the sixth powers are whole numbers that compare at once, so the forwards solution starts from them."
                },
                {
                  "step": "$\\sqrt{7} > \\sqrt[6]{330} > \\sqrt[3]{18}$",
                  "reason": "Powers and roots of positive numbers keep the order: all three numbers are positive, and taking sixth roots of each part of the line before gives them back."
                },
                {
                  "step": "The greatest is $\\sqrt{7}$.",
                  "reason": "Answering the question asked: the first number of the chain is the greatest."
                }
              ]
            },
            {
              "prompt": "Find the greatest of $\\sqrt{10}$, $\\sqrt[3]{31}$ and $\\sqrt[6]{980}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "sqrt(10)",
              "lines": [
                {
                  "step": "Find the greatest of $\\sqrt{10}$, $\\sqrt[3]{31}$ and $\\sqrt[6]{980}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(\\sqrt{10})^{6} = 10^{3} = 1000$",
                  "reason": "Power law, with fractional exponents: $(10^{1/2})^{6} = 10^{6/2} = 10^{3}$."
                },
                {
                  "step": "$(\\sqrt[3]{31})^{6} = 31^{2} = 961$",
                  "reason": "Power law, with fractional exponents: $(31^{1/3})^{6} = 31^{6/3} = 31^{2}$."
                },
                {
                  "step": "$(\\sqrt[6]{980})^{6} = 980$",
                  "reason": "Power law, with fractional exponents: $(980^{1/6})^{6} = 980^{6/6} = 980$."
                },
                {
                  "step": "$1000 > 980 > 961$",
                  "reason": "Working backwards and then writing forwards: the sixth powers are whole numbers that compare at once, so the forwards solution starts from them."
                },
                {
                  "step": "$\\sqrt{10} > \\sqrt[6]{980} > \\sqrt[3]{31}$",
                  "reason": "Powers and roots of positive numbers keep the order: all three numbers are positive, and taking sixth roots of each part of the line before gives them back."
                },
                {
                  "step": "The greatest is $\\sqrt{10}$.",
                  "reason": "Answering the question asked: the first number of the chain is the greatest."
                }
              ]
            },
            {
              "prompt": "Find the greatest of $\\sqrt{11}$, $\\sqrt[3]{37}$ and $\\sqrt[6]{1350}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "37^(1/3)",
              "lines": [
                {
                  "step": "Find the greatest of $\\sqrt{11}$, $\\sqrt[3]{37}$ and $\\sqrt[6]{1350}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(\\sqrt{11})^{6} = 11^{3} = 1331$",
                  "reason": "Power law, with fractional exponents: $(11^{1/2})^{6} = 11^{6/2} = 11^{3}$."
                },
                {
                  "step": "$(\\sqrt[3]{37})^{6} = 37^{2} = 1369$",
                  "reason": "Power law, with fractional exponents: $(37^{1/3})^{6} = 37^{6/3} = 37^{2}$."
                },
                {
                  "step": "$(\\sqrt[6]{1350})^{6} = 1350$",
                  "reason": "Power law, with fractional exponents: $(1350^{1/6})^{6} = 1350^{6/6} = 1350$."
                },
                {
                  "step": "$1369 > 1350 > 1331$",
                  "reason": "Working backwards and then writing forwards: the sixth powers are whole numbers that compare at once, so the forwards solution starts from them."
                },
                {
                  "step": "$\\sqrt[3]{37} > \\sqrt[6]{1350} > \\sqrt{11}$",
                  "reason": "Powers and roots of positive numbers keep the order: all three numbers are positive, and taking sixth roots of each part of the line before gives them back."
                },
                {
                  "step": "The greatest is $\\sqrt[3]{37}$.",
                  "reason": "Answering the question asked: the first number of the chain is the greatest."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the greater of $\\sqrt{5} + \\sqrt{11}$ and $\\sqrt{30}$.",
            "lines": [
              {
                "step": "Find the greater of $\\sqrt{5} + \\sqrt{11}$ and $\\sqrt{30}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$(\\sqrt{5} + \\sqrt{11})^2 = 16 + 2\\sqrt{55}$",
                "reason": "Multiplying out: the square of the sum is $5 + 2\\sqrt{5}\\sqrt{11} + 11$, and the root of a product gives $\\sqrt{5}\\sqrt{11} = \\sqrt{55}$."
              },
              {
                "step": "$(\\sqrt{30})^2 = 30$",
                "reason": "Positive square root: the square of the positive square root of $30$ is $30$."
              },
              {
                "step": "$55 > 49$",
                "reason": "Working backwards and then writing forwards: taking $16$ away from both squares and halving leaves $\\sqrt{55}$ and $7$, whose squares $55$ and $7^2 = 49$ compare at once, so the forwards solution starts from them."
              },
              {
                "step": "$\\sqrt{55} > 7$",
                "reason": "Powers and roots of positive numbers keep the order: positive square roots of both sides of the line before."
              },
              {
                "step": "$16 + 2\\sqrt{55} > 30$",
                "reason": "Multiplying by a positive number and adding the same number: both sides of the line before are doubled, and $16$ is added to both sides."
              },
              {
                "step": "$\\sqrt{16 + 2\\sqrt{55}} > \\sqrt{30}$",
                "reason": "Powers and roots of positive numbers keep the order: positive square roots of both sides of the line before."
              },
              {
                "step": "$\\sqrt{5} + \\sqrt{11} > \\sqrt{30}$",
                "reason": "Positive square root: $\\sqrt{5} + \\sqrt{11}$ is positive and its square is $16 + 2\\sqrt{55}$ by the first line, so it is $\\sqrt{16 + 2\\sqrt{55}}$."
              },
              {
                "step": "The greater is $\\sqrt{5} + \\sqrt{11}$.",
                "reason": "Answering the question asked: the greater of the two numbers is asked for."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greater of $\\sqrt{3} + \\sqrt{14}$ and $\\sqrt{31}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "sqrt(31)",
              "lines": [
                {
                  "step": "Find the greater of $\\sqrt{3} + \\sqrt{14}$ and $\\sqrt{31}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(\\sqrt{3} + \\sqrt{14})^2 = 17 + 2\\sqrt{42}$",
                  "reason": "Multiplying out: the square of the sum is $3 + 2\\sqrt{3}\\sqrt{14} + 14$, and the root of a product gives $\\sqrt{3}\\sqrt{14} = \\sqrt{42}$."
                },
                {
                  "step": "$(\\sqrt{31})^2 = 31$",
                  "reason": "Positive square root: the square of the positive square root of $31$ is $31$."
                },
                {
                  "step": "$42 < 49$",
                  "reason": "Working backwards and then writing forwards: taking $17$ away from both squares and halving leaves $\\sqrt{42}$ and $7$, whose squares $42$ and $7^2 = 49$ compare at once, so the forwards solution starts from them."
                },
                {
                  "step": "$\\sqrt{42} < 7$",
                  "reason": "Powers and roots of positive numbers keep the order: positive square roots of both sides of the line before."
                },
                {
                  "step": "$17 + 2\\sqrt{42} < 31$",
                  "reason": "Multiplying by a positive number and adding the same number: both sides of the line before are doubled, and $17$ is added to both sides."
                },
                {
                  "step": "$\\sqrt{17 + 2\\sqrt{42}} < \\sqrt{31}$",
                  "reason": "Powers and roots of positive numbers keep the order: positive square roots of both sides of the line before."
                },
                {
                  "step": "$\\sqrt{3} + \\sqrt{14} < \\sqrt{31}$",
                  "reason": "Positive square root: $\\sqrt{3} + \\sqrt{14}$ is positive and its square is $17 + 2\\sqrt{42}$ by the first line, so it is $\\sqrt{17 + 2\\sqrt{42}}$."
                },
                {
                  "step": "The greater is $\\sqrt{31}$.",
                  "reason": "Answering the question asked: the greater of the two numbers is asked for."
                }
              ]
            },
            {
              "prompt": "Find the greater of $\\sqrt{6} + \\sqrt{10}$ and $\\sqrt{32}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "sqrt(32)",
              "lines": [
                {
                  "step": "Find the greater of $\\sqrt{6} + \\sqrt{10}$ and $\\sqrt{32}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(\\sqrt{6} + \\sqrt{10})^2 = 16 + 2\\sqrt{60}$",
                  "reason": "Multiplying out: the square of the sum is $6 + 2\\sqrt{6}\\sqrt{10} + 10$, and the root of a product gives $\\sqrt{6}\\sqrt{10} = \\sqrt{60}$."
                },
                {
                  "step": "$(\\sqrt{32})^2 = 32$",
                  "reason": "Positive square root: the square of the positive square root of $32$ is $32$."
                },
                {
                  "step": "$60 < 64$",
                  "reason": "Working backwards and then writing forwards: taking $16$ away from both squares and halving leaves $\\sqrt{60}$ and $8$, whose squares $60$ and $8^2 = 64$ compare at once, so the forwards solution starts from them."
                },
                {
                  "step": "$\\sqrt{60} < 8$",
                  "reason": "Powers and roots of positive numbers keep the order: positive square roots of both sides of the line before."
                },
                {
                  "step": "$16 + 2\\sqrt{60} < 32$",
                  "reason": "Multiplying by a positive number and adding the same number: both sides of the line before are doubled, and $16$ is added to both sides."
                },
                {
                  "step": "$\\sqrt{16 + 2\\sqrt{60}} < \\sqrt{32}$",
                  "reason": "Powers and roots of positive numbers keep the order: positive square roots of both sides of the line before."
                },
                {
                  "step": "$\\sqrt{6} + \\sqrt{10} < \\sqrt{32}$",
                  "reason": "Positive square root: $\\sqrt{6} + \\sqrt{10}$ is positive and its square is $16 + 2\\sqrt{60}$ by the first line, so it is $\\sqrt{16 + 2\\sqrt{60}}$."
                },
                {
                  "step": "The greater is $\\sqrt{32}$.",
                  "reason": "Answering the question asked: the greater of the two numbers is asked for."
                }
              ]
            },
            {
              "prompt": "Find the greater of $\\sqrt{7} + \\sqrt{10}$ and $\\sqrt{33}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "sqrt(7)+sqrt(10)",
              "lines": [
                {
                  "step": "Find the greater of $\\sqrt{7} + \\sqrt{10}$ and $\\sqrt{33}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$(\\sqrt{7} + \\sqrt{10})^2 = 17 + 2\\sqrt{70}$",
                  "reason": "Multiplying out: the square of the sum is $7 + 2\\sqrt{7}\\sqrt{10} + 10$, and the root of a product gives $\\sqrt{7}\\sqrt{10} = \\sqrt{70}$."
                },
                {
                  "step": "$(\\sqrt{33})^2 = 33$",
                  "reason": "Positive square root: the square of the positive square root of $33$ is $33$."
                },
                {
                  "step": "$70 > 64$",
                  "reason": "Working backwards and then writing forwards: taking $17$ away from both squares and halving leaves $\\sqrt{70}$ and $8$, whose squares $70$ and $8^2 = 64$ compare at once, so the forwards solution starts from them."
                },
                {
                  "step": "$\\sqrt{70} > 8$",
                  "reason": "Powers and roots of positive numbers keep the order: positive square roots of both sides of the line before."
                },
                {
                  "step": "$17 + 2\\sqrt{70} > 33$",
                  "reason": "Multiplying by a positive number and adding the same number: both sides of the line before are doubled, and $17$ is added to both sides."
                },
                {
                  "step": "$\\sqrt{17 + 2\\sqrt{70}} > \\sqrt{33}$",
                  "reason": "Powers and roots of positive numbers keep the order: positive square roots of both sides of the line before."
                },
                {
                  "step": "$\\sqrt{7} + \\sqrt{10} > \\sqrt{33}$",
                  "reason": "Positive square root: $\\sqrt{7} + \\sqrt{10}$ is positive and its square is $17 + 2\\sqrt{70}$ by the first line, so it is $\\sqrt{17 + 2\\sqrt{70}}$."
                },
                {
                  "step": "The greater is $\\sqrt{7} + \\sqrt{10}$.",
                  "reason": "Answering the question asked: the greater of the two numbers is asked for."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t129-k2",
      "forms": [
        {
          "example": {
            "problem": "Find the greater of $5^{30}$ and $11^{20}$.",
            "lines": [
              {
                "step": "Find the greater of $5^{30}$ and $11^{20}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$5^{30} = 125^{10}$",
                "reason": "Power law: $5^{30} = (5^{3})^{10}$, and $5^{3} = 125$."
              },
              {
                "step": "$11^{20} = 121^{10}$",
                "reason": "Power law: $11^{20} = (11^{2})^{10}$, and $11^{2} = 121$."
              },
              {
                "step": "$125^{10} > 121^{10}$",
                "reason": "Powers and roots of positive numbers keep the order: $125 > 121$, and taking the power $10$ of both sides keeps the order."
              },
              {
                "step": "$5^{30} > 11^{20}$",
                "reason": "Power law: $125^{10} = 5^{30}$ and $121^{10} = 11^{20}$, so the line before is the comparison asked for."
              },
              {
                "step": "The greater is $5^{30}$.",
                "reason": "Answering the question asked: the greater of the two numbers is asked for."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greater of $6^{30}$ and $14^{20}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "6^30",
              "lines": [
                {
                  "step": "Find the greater of $6^{30}$ and $14^{20}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6^{30} = 216^{10}$",
                  "reason": "Power law: $6^{30} = (6^{3})^{10}$, and $6^{3} = 216$."
                },
                {
                  "step": "$14^{20} = 196^{10}$",
                  "reason": "Power law: $14^{20} = (14^{2})^{10}$, and $14^{2} = 196$."
                },
                {
                  "step": "$216^{10} > 196^{10}$",
                  "reason": "Powers and roots of positive numbers keep the order: $216 > 196$, and taking the power $10$ of both sides keeps the order."
                },
                {
                  "step": "$6^{30} > 14^{20}$",
                  "reason": "Power law: $216^{10} = 6^{30}$ and $196^{10} = 14^{20}$, so the line before is the comparison asked for."
                },
                {
                  "step": "The greater is $6^{30}$.",
                  "reason": "Answering the question asked: the greater of the two numbers is asked for."
                }
              ]
            },
            {
              "prompt": "Find the greater of $3^{44}$ and $5^{33}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "5^33",
              "lines": [
                {
                  "step": "Find the greater of $3^{44}$ and $5^{33}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3^{44} = 81^{11}$",
                  "reason": "Power law: $3^{44} = (3^{4})^{11}$, and $3^{4} = 81$."
                },
                {
                  "step": "$5^{33} = 125^{11}$",
                  "reason": "Power law: $5^{33} = (5^{3})^{11}$, and $5^{3} = 125$."
                },
                {
                  "step": "$125^{11} > 81^{11}$",
                  "reason": "Powers and roots of positive numbers keep the order: $125 > 81$, and taking the power $11$ of both sides keeps the order."
                },
                {
                  "step": "$5^{33} > 3^{44}$",
                  "reason": "Power law: $125^{11} = 5^{33}$ and $81^{11} = 3^{44}$, so the line before is the comparison asked for."
                },
                {
                  "step": "The greater is $5^{33}$.",
                  "reason": "Answering the question asked: the greater of the two numbers is asked for."
                }
              ]
            },
            {
              "prompt": "Find the greater of $7^{30}$ and $3^{50}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "7^30",
              "lines": [
                {
                  "step": "Find the greater of $7^{30}$ and $3^{50}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$7^{30} = 343^{10}$",
                  "reason": "Power law: $7^{30} = (7^{3})^{10}$, and $7^{3} = 343$."
                },
                {
                  "step": "$3^{50} = 243^{10}$",
                  "reason": "Power law: $3^{50} = (3^{5})^{10}$, and $3^{5} = 243$."
                },
                {
                  "step": "$343^{10} > 243^{10}$",
                  "reason": "Powers and roots of positive numbers keep the order: $343 > 243$, and taking the power $10$ of both sides keeps the order."
                },
                {
                  "step": "$7^{30} > 3^{50}$",
                  "reason": "Power law: $343^{10} = 7^{30}$ and $243^{10} = 3^{50}$, so the line before is the comparison asked for."
                },
                {
                  "step": "The greater is $7^{30}$.",
                  "reason": "Answering the question asked: the greater of the two numbers is asked for."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the greater of $255^{5}$ and $17^{11}$.",
            "lines": [
              {
                "step": "Find the greater of $255^{5}$ and $17^{11}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$255^{5} < 2^{40}$",
                "reason": "Powers and roots of positive numbers keep the order: $255 < 256 = 2^{8}$, so taking the power $5$ of both sides keeps the order, and the power law gives $(2^{8})^{5} = 2^{40}$."
              },
              {
                "step": "$17^{11} > 2^{44}$",
                "reason": "Powers and roots of positive numbers keep the order: $17 > 16 = 2^{4}$, so taking the power $11$ of both sides keeps the order, and the power law gives $(2^{4})^{11} = 2^{44}$."
              },
              {
                "step": "$2^{40} < 2^{44}$",
                "reason": "Multiplying by a positive number: $2^{44}$ is $2^{40}$ times $2^{4}$, a number greater than $1$."
              },
              {
                "step": "$255^{5} < 17^{11}$",
                "reason": "Comparing through a third number: transitivity joins the three lines before."
              },
              {
                "step": "The greater is $17^{11}$.",
                "reason": "Answering the question asked: the greater of the two numbers is asked for."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greater of $80^{5}$ and $28^{7}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "28^7",
              "lines": [
                {
                  "step": "Find the greater of $80^{5}$ and $28^{7}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$80^{5} < 3^{20}$",
                  "reason": "Powers and roots of positive numbers keep the order: $80 < 81 = 3^{4}$, so taking the power $5$ of both sides keeps the order, and the power law gives $(3^{4})^{5} = 3^{20}$."
                },
                {
                  "step": "$28^{7} > 3^{21}$",
                  "reason": "Powers and roots of positive numbers keep the order: $28 > 27 = 3^{3}$, so taking the power $7$ of both sides keeps the order, and the power law gives $(3^{3})^{7} = 3^{21}$."
                },
                {
                  "step": "$3^{20} < 3^{21}$",
                  "reason": "Multiplying by a positive number: $3^{21}$ is $3^{20}$ times $3^{1}$, a number greater than $1$."
                },
                {
                  "step": "$80^{5} < 28^{7}$",
                  "reason": "Comparing through a third number: transitivity joins the three lines before."
                },
                {
                  "step": "The greater is $28^{7}$.",
                  "reason": "Answering the question asked: the greater of the two numbers is asked for."
                }
              ]
            },
            {
              "prompt": "Find the greater of $124^{8}$ and $26^{13}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "26^13",
              "lines": [
                {
                  "step": "Find the greater of $124^{8}$ and $26^{13}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$124^{8} < 5^{24}$",
                  "reason": "Powers and roots of positive numbers keep the order: $124 < 125 = 5^{3}$, so taking the power $8$ of both sides keeps the order, and the power law gives $(5^{3})^{8} = 5^{24}$."
                },
                {
                  "step": "$26^{13} > 5^{26}$",
                  "reason": "Powers and roots of positive numbers keep the order: $26 > 25 = 5^{2}$, so taking the power $13$ of both sides keeps the order, and the power law gives $(5^{2})^{13} = 5^{26}$."
                },
                {
                  "step": "$5^{24} < 5^{26}$",
                  "reason": "Multiplying by a positive number: $5^{26}$ is $5^{24}$ times $5^{2}$, a number greater than $1$."
                },
                {
                  "step": "$124^{8} < 26^{13}$",
                  "reason": "Comparing through a third number: transitivity joins the three lines before."
                },
                {
                  "step": "The greater is $26^{13}$.",
                  "reason": "Answering the question asked: the greater of the two numbers is asked for."
                }
              ]
            },
            {
              "prompt": "Find the greater of $9^{19}$ and $31^{11}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "9^19",
              "lines": [
                {
                  "step": "Find the greater of $9^{19}$ and $31^{11}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$9^{19} > 2^{57}$",
                  "reason": "Powers and roots of positive numbers keep the order: $9 > 8 = 2^{3}$, so taking the power $19$ of both sides keeps the order, and the power law gives $(2^{3})^{19} = 2^{57}$."
                },
                {
                  "step": "$31^{11} < 2^{55}$",
                  "reason": "Powers and roots of positive numbers keep the order: $31 < 32 = 2^{5}$, so taking the power $11$ of both sides keeps the order, and the power law gives $(2^{5})^{11} = 2^{55}$."
                },
                {
                  "step": "$2^{57} > 2^{55}$",
                  "reason": "Multiplying by a positive number: $2^{57}$ is $2^{55}$ times $2^{2}$, a number greater than $1$."
                },
                {
                  "step": "$9^{19} > 31^{11}$",
                  "reason": "Comparing through a third number: transitivity joins the three lines before."
                },
                {
                  "step": "The greater is $9^{19}$.",
                  "reason": "Answering the question asked: the greater of the two numbers is asked for."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the greatest of $2^{60}$, $7^{20}$ and $5^{20}$.",
            "lines": [
              {
                "step": "Find the greatest of $2^{60}$, $7^{20}$ and $5^{20}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$2^{60} = 64^{10}$",
                "reason": "Power law: $2^{60} = (2^{6})^{10}$, and $2^{6} = 64$."
              },
              {
                "step": "$7^{20} = 49^{10}$",
                "reason": "Power law: $7^{20} = (7^{2})^{10}$, and $7^{2} = 49$."
              },
              {
                "step": "$5^{20} = 25^{10}$",
                "reason": "Power law: $5^{20} = (5^{2})^{10}$, and $5^{2} = 25$."
              },
              {
                "step": "$64^{10} > 49^{10} > 25^{10}$",
                "reason": "Powers and roots of positive numbers keep the order: $64 > 49 > 25$, and taking the power $10$ of each keeps the order."
              },
              {
                "step": "The greatest is $2^{60}$.",
                "reason": "Answering the question asked: the first number of the chain is the greatest."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greatest of $10^{24}$, $3^{48}$ and $2^{84}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "2^84",
              "lines": [
                {
                  "step": "Find the greatest of $10^{24}$, $3^{48}$ and $2^{84}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$10^{24} = 100^{12}$",
                  "reason": "Power law: $10^{24} = (10^{2})^{12}$, and $10^{2} = 100$."
                },
                {
                  "step": "$3^{48} = 81^{12}$",
                  "reason": "Power law: $3^{48} = (3^{4})^{12}$, and $3^{4} = 81$."
                },
                {
                  "step": "$2^{84} = 128^{12}$",
                  "reason": "Power law: $2^{84} = (2^{7})^{12}$, and $2^{7} = 128$."
                },
                {
                  "step": "$128^{12} > 100^{12} > 81^{12}$",
                  "reason": "Powers and roots of positive numbers keep the order: $128 > 100 > 81$, and taking the power $12$ of each keeps the order."
                },
                {
                  "step": "The greatest is $2^{84}$.",
                  "reason": "Answering the question asked: the first number of the chain is the greatest."
                }
              ]
            },
            {
              "prompt": "Find the greatest of $3^{32}$, $7^{16}$ and $2^{40}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "3^32",
              "lines": [
                {
                  "step": "Find the greatest of $3^{32}$, $7^{16}$ and $2^{40}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$3^{32} = 81^{8}$",
                  "reason": "Power law: $3^{32} = (3^{4})^{8}$, and $3^{4} = 81$."
                },
                {
                  "step": "$7^{16} = 49^{8}$",
                  "reason": "Power law: $7^{16} = (7^{2})^{8}$, and $7^{2} = 49$."
                },
                {
                  "step": "$2^{40} = 32^{8}$",
                  "reason": "Power law: $2^{40} = (2^{5})^{8}$, and $2^{5} = 32$."
                },
                {
                  "step": "$81^{8} > 49^{8} > 32^{8}$",
                  "reason": "Powers and roots of positive numbers keep the order: $81 > 49 > 32$, and taking the power $8$ of each keeps the order."
                },
                {
                  "step": "The greatest is $3^{32}$.",
                  "reason": "Answering the question asked: the first number of the chain is the greatest."
                }
              ]
            },
            {
              "prompt": "Find the greatest of $6^{20}$, $3^{20}$ and $2^{50}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "6^20",
              "lines": [
                {
                  "step": "Find the greatest of $6^{20}$, $3^{20}$ and $2^{50}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$6^{20} = 36^{10}$",
                  "reason": "Power law: $6^{20} = (6^{2})^{10}$, and $6^{2} = 36$."
                },
                {
                  "step": "$3^{20} = 9^{10}$",
                  "reason": "Power law: $3^{20} = (3^{2})^{10}$, and $3^{2} = 9$."
                },
                {
                  "step": "$2^{50} = 32^{10}$",
                  "reason": "Power law: $2^{50} = (2^{5})^{10}$, and $2^{5} = 32$."
                },
                {
                  "step": "$36^{10} > 32^{10} > 9^{10}$",
                  "reason": "Powers and roots of positive numbers keep the order: $36 > 32 > 9$, and taking the power $10$ of each keeps the order."
                },
                {
                  "step": "The greatest is $6^{20}$.",
                  "reason": "Answering the question asked: the first number of the chain is the greatest."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the greater of $3^{31}$ and $5^{19}$.",
            "lines": [
              {
                "step": "Find the greater of $3^{31}$ and $5^{19}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$3^{31} > 3^{30}$",
                "reason": "Multiplying by a positive number: $3^{31}$ is $3^{30}$ times $3^{1}$, a number greater than $1$."
              },
              {
                "step": "$3^{30} = 27^{10}$",
                "reason": "Power law: $3^{30} = (3^{3})^{10}$, and $3^{3} = 27$."
              },
              {
                "step": "$5^{20} = 25^{10}$",
                "reason": "Power law: $5^{20} = (5^{2})^{10}$, and $5^{2} = 25$."
              },
              {
                "step": "$27^{10} > 25^{10}$",
                "reason": "Powers and roots of positive numbers keep the order: $27 > 25$, and taking the power $10$ of both sides keeps the order."
              },
              {
                "step": "$5^{20} > 5^{19}$",
                "reason": "Multiplying by a positive number: $5^{20}$ is $5^{19}$ times $5^{1}$, a number greater than $1$."
              },
              {
                "step": "$3^{31} > 3^{30} > 5^{20} > 5^{19}$",
                "reason": "Comparing through a third number: transitivity (arithmetic's) joins the first, fourth and fifth lines, with the second and third lines giving the powers in the middle."
              },
              {
                "step": "The greater is $3^{31}$.",
                "reason": "Answering the question asked: the greater of the two numbers is asked for."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greater of $2^{71}$ and $11^{19}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "2^71",
              "lines": [
                {
                  "step": "Find the greater of $2^{71}$ and $11^{19}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$2^{71} > 2^{70}$",
                  "reason": "Multiplying by a positive number: $2^{71}$ is $2^{70}$ times $2^{1}$, a number greater than $1$."
                },
                {
                  "step": "$2^{70} = 128^{10}$",
                  "reason": "Power law: $2^{70} = (2^{7})^{10}$, and $2^{7} = 128$."
                },
                {
                  "step": "$11^{20} = 121^{10}$",
                  "reason": "Power law: $11^{20} = (11^{2})^{10}$, and $11^{2} = 121$."
                },
                {
                  "step": "$128^{10} > 121^{10}$",
                  "reason": "Powers and roots of positive numbers keep the order: $128 > 121$, and taking the power $10$ of both sides keeps the order."
                },
                {
                  "step": "$11^{20} > 11^{19}$",
                  "reason": "Multiplying by a positive number: $11^{20}$ is $11^{19}$ times $11^{1}$, a number greater than $1$."
                },
                {
                  "step": "$2^{71} > 2^{70} > 11^{20} > 11^{19}$",
                  "reason": "Comparing through a third number: transitivity (arithmetic's) joins the first, fourth and fifth lines, with the second and third lines giving the powers in the middle."
                },
                {
                  "step": "The greater is $2^{71}$.",
                  "reason": "Answering the question asked: the greater of the two numbers is asked for."
                }
              ]
            },
            {
              "prompt": "Find the greater of $2^{69}$ and $13^{21}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "13^21",
              "lines": [
                {
                  "step": "Find the greater of $2^{69}$ and $13^{21}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$13^{21} > 13^{20}$",
                  "reason": "Multiplying by a positive number: $13^{21}$ is $13^{20}$ times $13^{1}$, a number greater than $1$."
                },
                {
                  "step": "$13^{20} = 169^{10}$",
                  "reason": "Power law: $13^{20} = (13^{2})^{10}$, and $13^{2} = 169$."
                },
                {
                  "step": "$2^{70} = 128^{10}$",
                  "reason": "Power law: $2^{70} = (2^{7})^{10}$, and $2^{7} = 128$."
                },
                {
                  "step": "$169^{10} > 128^{10}$",
                  "reason": "Powers and roots of positive numbers keep the order: $169 > 128$, and taking the power $10$ of both sides keeps the order."
                },
                {
                  "step": "$2^{70} > 2^{69}$",
                  "reason": "Multiplying by a positive number: $2^{70}$ is $2^{69}$ times $2^{1}$, a number greater than $1$."
                },
                {
                  "step": "$13^{21} > 13^{20} > 2^{70} > 2^{69}$",
                  "reason": "Comparing through a third number: transitivity (arithmetic's) joins the first, fourth and fifth lines, with the second and third lines giving the powers in the middle."
                },
                {
                  "step": "The greater is $13^{21}$.",
                  "reason": "Answering the question asked: the greater of the two numbers is asked for."
                }
              ]
            },
            {
              "prompt": "Find the greater of $6^{29}$ and $15^{21}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "15^21",
              "lines": [
                {
                  "step": "Find the greater of $6^{29}$ and $15^{21}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$15^{21} > 15^{20}$",
                  "reason": "Multiplying by a positive number: $15^{21}$ is $15^{20}$ times $15^{1}$, a number greater than $1$."
                },
                {
                  "step": "$15^{20} = 225^{10}$",
                  "reason": "Power law: $15^{20} = (15^{2})^{10}$, and $15^{2} = 225$."
                },
                {
                  "step": "$6^{30} = 216^{10}$",
                  "reason": "Power law: $6^{30} = (6^{3})^{10}$, and $6^{3} = 216$."
                },
                {
                  "step": "$225^{10} > 216^{10}$",
                  "reason": "Powers and roots of positive numbers keep the order: $225 > 216$, and taking the power $10$ of both sides keeps the order."
                },
                {
                  "step": "$6^{30} > 6^{29}$",
                  "reason": "Multiplying by a positive number: $6^{30}$ is $6^{29}$ times $6^{1}$, a number greater than $1$."
                },
                {
                  "step": "$15^{21} > 15^{20} > 6^{30} > 6^{29}$",
                  "reason": "Comparing through a third number: transitivity (arithmetic's) joins the first, fourth and fifth lines, with the second and third lines giving the powers in the middle."
                },
                {
                  "step": "The greater is $15^{21}$.",
                  "reason": "Answering the question asked: the greater of the two numbers is asked for."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t129-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the greater of $\\dfrac{3998}{4001}$ and $\\dfrac{2998}{3001}$.",
            "lines": [
              {
                "step": "Find the greater of $\\dfrac{3998}{4001}$ and $\\dfrac{2998}{3001}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{3998}{4001} = 1 - \\dfrac{3}{4001}$",
                "reason": "Subtracting fractions with the same denominator: $1 - \\dfrac{3}{4001} = \\dfrac{4001}{4001} - \\dfrac{3}{4001} = \\dfrac{3998}{4001}$."
              },
              {
                "step": "$\\dfrac{2998}{3001} = 1 - \\dfrac{3}{3001}$",
                "reason": "Subtracting fractions with the same denominator: $1 - \\dfrac{3}{3001} = \\dfrac{3001}{3001} - \\dfrac{3}{3001} = \\dfrac{2998}{3001}$."
              },
              {
                "step": "$\\dfrac{3}{3001} > \\dfrac{3}{4001}$",
                "reason": "Reciprocals of numbers of the same sign reverse the order: $3001 < 4001$, both positive, gives $\\dfrac{1}{3001} > \\dfrac{1}{4001}$, and multiplying both sides by the positive number $3$ keeps the order."
              },
              {
                "step": "$1 - \\dfrac{3}{3001} < 1 - \\dfrac{3}{4001}$",
                "reason": "Multiplying by a negative number reverses the sign: both sides are multiplied by $-1$, and adding the same number $1$ to both sides keeps the new order."
              },
              {
                "step": "The greater is $\\dfrac{3998}{4001}$.",
                "reason": "Comparing through a third number: each fraction is measured against $1$, and $\\dfrac{3998}{4001}$ falls short of $1$ by the smaller part."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greater of $\\dfrac{772}{777}$ and $\\dfrac{883}{888}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "883/888",
              "lines": [
                {
                  "step": "Find the greater of $\\dfrac{772}{777}$ and $\\dfrac{883}{888}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{772}{777} = 1 - \\dfrac{5}{777}$",
                  "reason": "Subtracting fractions with the same denominator: $1 - \\dfrac{5}{777} = \\dfrac{777}{777} - \\dfrac{5}{777} = \\dfrac{772}{777}$."
                },
                {
                  "step": "$\\dfrac{883}{888} = 1 - \\dfrac{5}{888}$",
                  "reason": "Subtracting fractions with the same denominator: $1 - \\dfrac{5}{888} = \\dfrac{888}{888} - \\dfrac{5}{888} = \\dfrac{883}{888}$."
                },
                {
                  "step": "$\\dfrac{5}{777} > \\dfrac{5}{888}$",
                  "reason": "Reciprocals of numbers of the same sign reverse the order: $777 < 888$, both positive, gives $\\dfrac{1}{777} > \\dfrac{1}{888}$, and multiplying both sides by the positive number $5$ keeps the order."
                },
                {
                  "step": "$1 - \\dfrac{5}{777} < 1 - \\dfrac{5}{888}$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides are multiplied by $-1$, and adding the same number $1$ to both sides keeps the new order."
                },
                {
                  "step": "The greater is $\\dfrac{883}{888}$.",
                  "reason": "Comparing through a third number: each fraction is measured against $1$, and $\\dfrac{883}{888}$ falls short of $1$ by the smaller part."
                }
              ]
            },
            {
              "prompt": "Find the greater of $\\dfrac{2019}{2026}$ and $\\dfrac{3019}{3026}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "3019/3026",
              "lines": [
                {
                  "step": "Find the greater of $\\dfrac{2019}{2026}$ and $\\dfrac{3019}{3026}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{2019}{2026} = 1 - \\dfrac{7}{2026}$",
                  "reason": "Subtracting fractions with the same denominator: $1 - \\dfrac{7}{2026} = \\dfrac{2026}{2026} - \\dfrac{7}{2026} = \\dfrac{2019}{2026}$."
                },
                {
                  "step": "$\\dfrac{3019}{3026} = 1 - \\dfrac{7}{3026}$",
                  "reason": "Subtracting fractions with the same denominator: $1 - \\dfrac{7}{3026} = \\dfrac{3026}{3026} - \\dfrac{7}{3026} = \\dfrac{3019}{3026}$."
                },
                {
                  "step": "$\\dfrac{7}{2026} > \\dfrac{7}{3026}$",
                  "reason": "Reciprocals of numbers of the same sign reverse the order: $2026 < 3026$, both positive, gives $\\dfrac{1}{2026} > \\dfrac{1}{3026}$, and multiplying both sides by the positive number $7$ keeps the order."
                },
                {
                  "step": "$1 - \\dfrac{7}{2026} < 1 - \\dfrac{7}{3026}$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides are multiplied by $-1$, and adding the same number $1$ to both sides keeps the new order."
                },
                {
                  "step": "The greater is $\\dfrac{3019}{3026}$.",
                  "reason": "Comparing through a third number: each fraction is measured against $1$, and $\\dfrac{3019}{3026}$ falls short of $1$ by the smaller part."
                }
              ]
            },
            {
              "prompt": "Find the greater of $\\dfrac{5432}{5435}$ and $\\dfrac{1234}{1237}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "5432/5435",
              "lines": [
                {
                  "step": "Find the greater of $\\dfrac{5432}{5435}$ and $\\dfrac{1234}{1237}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{5432}{5435} = 1 - \\dfrac{3}{5435}$",
                  "reason": "Subtracting fractions with the same denominator: $1 - \\dfrac{3}{5435} = \\dfrac{5435}{5435} - \\dfrac{3}{5435} = \\dfrac{5432}{5435}$."
                },
                {
                  "step": "$\\dfrac{1234}{1237} = 1 - \\dfrac{3}{1237}$",
                  "reason": "Subtracting fractions with the same denominator: $1 - \\dfrac{3}{1237} = \\dfrac{1237}{1237} - \\dfrac{3}{1237} = \\dfrac{1234}{1237}$."
                },
                {
                  "step": "$\\dfrac{3}{1237} > \\dfrac{3}{5435}$",
                  "reason": "Reciprocals of numbers of the same sign reverse the order: $1237 < 5435$, both positive, gives $\\dfrac{1}{1237} > \\dfrac{1}{5435}$, and multiplying both sides by the positive number $3$ keeps the order."
                },
                {
                  "step": "$1 - \\dfrac{3}{1237} < 1 - \\dfrac{3}{5435}$",
                  "reason": "Multiplying by a negative number reverses the sign: both sides are multiplied by $-1$, and adding the same number $1$ to both sides keeps the new order."
                },
                {
                  "step": "The greater is $\\dfrac{5432}{5435}$.",
                  "reason": "Comparing through a third number: each fraction is measured against $1$, and $\\dfrac{5432}{5435}$ falls short of $1$ by the smaller part."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the greater of $\\dfrac{13}{40}$ and $\\dfrac{17}{52}$.",
            "lines": [
              {
                "step": "Find the greater of $\\dfrac{13}{40}$ and $\\dfrac{17}{52}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{40}{13} = 3 + \\dfrac{1}{13}$",
                "reason": "Comparing reciprocals: the reciprocal of $\\dfrac{13}{40}$ is $\\dfrac{40}{13}$, which is $3$ and a small part."
              },
              {
                "step": "$\\dfrac{52}{17} = 3 + \\dfrac{1}{17}$",
                "reason": "Comparing reciprocals: the reciprocal of $\\dfrac{17}{52}$ is $\\dfrac{52}{17}$, which is $3$ and a small part."
              },
              {
                "step": "$\\dfrac{1}{13} > \\dfrac{1}{17}$",
                "reason": "Reciprocals of numbers of the same sign reverse the order: $13 < 17$, both positive, gives $\\dfrac{1}{13} > \\dfrac{1}{17}$."
              },
              {
                "step": "$3 + \\dfrac{1}{13} > 3 + \\dfrac{1}{17}$",
                "reason": "Adding the same number: $3$ is added to both sides."
              },
              {
                "step": "$\\dfrac{13}{40} < \\dfrac{17}{52}$",
                "reason": "Reciprocals of numbers of the same sign reverse the order: both fractions are positive, and the line before compares their reciprocals."
              },
              {
                "step": "The greater is $\\dfrac{17}{52}$.",
                "reason": "Answering the question asked: the fraction with the smaller reciprocal is the greater."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the greater of $\\dfrac{9}{19}$ and $\\dfrac{14}{29}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "14/29",
              "lines": [
                {
                  "step": "Find the greater of $\\dfrac{9}{19}$ and $\\dfrac{14}{29}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{19}{9} = 2 + \\dfrac{1}{9}$",
                  "reason": "Comparing reciprocals: the reciprocal of $\\dfrac{9}{19}$ is $\\dfrac{19}{9}$, which is $2$ and a small part."
                },
                {
                  "step": "$\\dfrac{29}{14} = 2 + \\dfrac{1}{14}$",
                  "reason": "Comparing reciprocals: the reciprocal of $\\dfrac{14}{29}$ is $\\dfrac{29}{14}$, which is $2$ and a small part."
                },
                {
                  "step": "$\\dfrac{1}{9} > \\dfrac{1}{14}$",
                  "reason": "Reciprocals of numbers of the same sign reverse the order: $9 < 14$, both positive, gives $\\dfrac{1}{9} > \\dfrac{1}{14}$."
                },
                {
                  "step": "$2 + \\dfrac{1}{9} > 2 + \\dfrac{1}{14}$",
                  "reason": "Adding the same number: $2$ is added to both sides."
                },
                {
                  "step": "$\\dfrac{9}{19} < \\dfrac{14}{29}$",
                  "reason": "Reciprocals of numbers of the same sign reverse the order: both fractions are positive, and the line before compares their reciprocals."
                },
                {
                  "step": "The greater is $\\dfrac{14}{29}$.",
                  "reason": "Answering the question asked: the fraction with the smaller reciprocal is the greater."
                }
              ]
            },
            {
              "prompt": "Find the greater of $\\dfrac{11}{23}$ and $\\dfrac{16}{33}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "16/33",
              "lines": [
                {
                  "step": "Find the greater of $\\dfrac{11}{23}$ and $\\dfrac{16}{33}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{23}{11} = 2 + \\dfrac{1}{11}$",
                  "reason": "Comparing reciprocals: the reciprocal of $\\dfrac{11}{23}$ is $\\dfrac{23}{11}$, which is $2$ and a small part."
                },
                {
                  "step": "$\\dfrac{33}{16} = 2 + \\dfrac{1}{16}$",
                  "reason": "Comparing reciprocals: the reciprocal of $\\dfrac{16}{33}$ is $\\dfrac{33}{16}$, which is $2$ and a small part."
                },
                {
                  "step": "$\\dfrac{1}{11} > \\dfrac{1}{16}$",
                  "reason": "Reciprocals of numbers of the same sign reverse the order: $11 < 16$, both positive, gives $\\dfrac{1}{11} > \\dfrac{1}{16}$."
                },
                {
                  "step": "$2 + \\dfrac{1}{11} > 2 + \\dfrac{1}{16}$",
                  "reason": "Adding the same number: $2$ is added to both sides."
                },
                {
                  "step": "$\\dfrac{11}{23} < \\dfrac{16}{33}$",
                  "reason": "Reciprocals of numbers of the same sign reverse the order: both fractions are positive, and the line before compares their reciprocals."
                },
                {
                  "step": "The greater is $\\dfrac{16}{33}$.",
                  "reason": "Answering the question asked: the fraction with the smaller reciprocal is the greater."
                }
              ]
            },
            {
              "prompt": "Find the greater of $\\dfrac{7}{36}$ and $\\dfrac{9}{46}$.",
              "form": "Answer as a number, or equivalent.",
              "answer": "9/46",
              "lines": [
                {
                  "step": "Find the greater of $\\dfrac{7}{36}$ and $\\dfrac{9}{46}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{36}{7} = 5 + \\dfrac{1}{7}$",
                  "reason": "Comparing reciprocals: the reciprocal of $\\dfrac{7}{36}$ is $\\dfrac{36}{7}$, which is $5$ and a small part."
                },
                {
                  "step": "$\\dfrac{46}{9} = 5 + \\dfrac{1}{9}$",
                  "reason": "Comparing reciprocals: the reciprocal of $\\dfrac{9}{46}$ is $\\dfrac{46}{9}$, which is $5$ and a small part."
                },
                {
                  "step": "$\\dfrac{1}{7} > \\dfrac{1}{9}$",
                  "reason": "Reciprocals of numbers of the same sign reverse the order: $7 < 9$, both positive, gives $\\dfrac{1}{7} > \\dfrac{1}{9}$."
                },
                {
                  "step": "$5 + \\dfrac{1}{7} > 5 + \\dfrac{1}{9}$",
                  "reason": "Adding the same number: $5$ is added to both sides."
                },
                {
                  "step": "$\\dfrac{7}{36} < \\dfrac{9}{46}$",
                  "reason": "Reciprocals of numbers of the same sign reverse the order: both fractions are positive, and the line before compares their reciprocals."
                },
                {
                  "step": "The greater is $\\dfrac{9}{46}$.",
                  "reason": "Answering the question asked: the fraction with the smaller reciprocal is the greater."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t129-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this comparison of $\\sqrt{3} + \\sqrt{10}$ and $\\sqrt{21}$, and write that line right.",
            "given": [
              "$(\\sqrt{3} + \\sqrt{10})^2 = 13$",
              "$(\\sqrt{21})^2 = 21$",
              "$13 < 21$",
              "$\\sqrt{13} < \\sqrt{21}$",
              "$\\sqrt{3} + \\sqrt{10} < \\sqrt{21}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this comparison of $\\sqrt{3} + \\sqrt{10}$ and $\\sqrt{21}$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 squares each root on its own and leaves out the term $2\\sqrt{3}\\sqrt{10}$.",
                "reason": "Multiplying out: $(\\sqrt{3} + \\sqrt{10})(\\sqrt{3} + \\sqrt{10})$ gives four products, and the two middle products add to $2\\sqrt{3}\\sqrt{10}$."
              },
              {
                "step": "Line 1 written right is $(\\sqrt{3} + \\sqrt{10})^2 = 13 + 2\\sqrt{30}$.",
                "reason": "Root of a product: $\\sqrt{3}\\sqrt{10} = \\sqrt{30}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this comparison of $\\sqrt{22}$ and $\\sqrt{2} + \\sqrt{15}$, and write that line right.",
              "given": [
                "$(\\sqrt{22})^2 = 22$",
                "$(\\sqrt{2} + \\sqrt{15})^2 = 17$",
                "$22 > 17$",
                "$\\sqrt{22} > \\sqrt{17}$",
                "$\\sqrt{22} > \\sqrt{2} + \\sqrt{15}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: (sqrt(2)+sqrt(15))^2 = 17+2*sqrt(30)",
              "lines": [
                {
                  "step": "Find the first wrong line in this comparison of $\\sqrt{22}$ and $\\sqrt{2} + \\sqrt{15}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 squares each root on its own and leaves out the term $2\\sqrt{2}\\sqrt{15}$.",
                  "reason": "Multiplying out: $(\\sqrt{2} + \\sqrt{15})(\\sqrt{2} + \\sqrt{15})$ gives four products, and the two middle products add to $2\\sqrt{2}\\sqrt{15}$."
                },
                {
                  "step": "Line 2 written right is $(\\sqrt{2} + \\sqrt{15})^2 = 17 + 2\\sqrt{30}$.",
                  "reason": "Root of a product: $\\sqrt{2}\\sqrt{15} = \\sqrt{30}$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this comparison of $\\sqrt{2} + \\sqrt{11}$ and $\\sqrt{29}$, and write that line right.",
              "given": [
                "$(\\sqrt{2} + \\sqrt{11})^2 = 13 + 2\\sqrt{22}$",
                "$(\\sqrt{29})^2 = 29$",
                "$13 + 2\\sqrt{22} < 29$",
                "$\\sqrt{13 + 2\\sqrt{22}} < \\sqrt{29}$",
                "$\\sqrt{13} + \\sqrt{2\\sqrt{22}} < \\sqrt{29}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: sqrt(2)+sqrt(11) < sqrt(29)",
              "lines": [
                {
                  "step": "Find the first wrong line in this comparison of $\\sqrt{2} + \\sqrt{11}$ and $\\sqrt{29}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 takes the square root of $13 + 2\\sqrt{22}$ term by term.",
                  "reason": "Positive square root: the line squaring $\\sqrt{2} + \\sqrt{11}$ gives $13 + 2\\sqrt{22}$ as its square, and $\\sqrt{2} + \\sqrt{11}$ is positive, so its positive square root is $\\sqrt{2} + \\sqrt{11}$, not a root taken of each term."
                },
                {
                  "step": "Line 5 written right is $\\sqrt{2} + \\sqrt{11} < \\sqrt{29}$.",
                  "reason": "Powers and roots of positive numbers keep the order: line 4 with $\\sqrt{13 + 2\\sqrt{22}}$ written as $\\sqrt{2} + \\sqrt{11}$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this comparison of $\\sqrt{5} + \\sqrt{13}$ and $\\sqrt{15}$, and write that line right.",
              "given": [
                "$(\\sqrt{5} + \\sqrt{13})^2 = 18$",
                "$(\\sqrt{15})^2 = 15$",
                "$18 > 15$",
                "$\\sqrt{18} > \\sqrt{15}$",
                "$\\sqrt{5} + \\sqrt{13} > \\sqrt{15}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: (sqrt(5)+sqrt(13))^2 = 18+2*sqrt(65)",
              "lines": [
                {
                  "step": "Find the first wrong line in this comparison of $\\sqrt{5} + \\sqrt{13}$ and $\\sqrt{15}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 squares each root on its own and leaves out the term $2\\sqrt{5}\\sqrt{13}$.",
                  "reason": "Multiplying out: $(\\sqrt{5} + \\sqrt{13})(\\sqrt{5} + \\sqrt{13})$ gives four products, and the two middle products add to $2\\sqrt{5}\\sqrt{13}$."
                },
                {
                  "step": "Line 1 written right is $(\\sqrt{5} + \\sqrt{13})^2 = 18 + 2\\sqrt{65}$.",
                  "reason": "Root of a product: $\\sqrt{5}\\sqrt{13} = \\sqrt{65}$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t129-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an inequality, with its two sides in the sentence's order: The cube root of 7 exceeds the square root of 3.",
            "lines": [
              {
                "step": "Write this sentence as an inequality, with its two sides in the sentence's order: The cube root of 7 exceeds the square root of 3.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The cube root of 7 is $\\sqrt[3]{7}$.",
                "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
              },
              {
                "step": "The square root of 3 is $\\sqrt{3}$.",
                "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
              },
              {
                "step": "The words \"exceeds\" give the sign $>$.",
                "reason": "Strict and nonstrict inequality: \"exceeds\" rules out the two sides being equal, so the sign is strict."
              },
              {
                "step": "$\\sqrt[3]{7} > \\sqrt{3}$",
                "reason": "Writing a sentence as an equation: the sign stands where the words \"exceeds\" stand."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an inequality, with its two sides in the sentence's order: The square root of 10 is greater than 3.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "sqrt(10) > 3",
              "lines": [
                {
                  "step": "Write this sentence as an inequality, with its two sides in the sentence's order: The square root of 10 is greater than 3.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The square root of 10 is $\\sqrt{10}$.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "The number 3 is $3$.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "The words \"is greater than\" give the sign $>$.",
                  "reason": "Strict and nonstrict inequality: \"is greater than\" rules out the two sides being equal, so the sign is strict."
                },
                {
                  "step": "$\\sqrt{10} > 3$",
                  "reason": "Writing a sentence as an equation: the sign stands where the words \"is greater than\" stand."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an inequality, with its two sides in the sentence's order: The fourth root of 15 is less than 2.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "15^(1/4) < 2",
              "lines": [
                {
                  "step": "Write this sentence as an inequality, with its two sides in the sentence's order: The fourth root of 15 is less than 2.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The fourth root of 15 is $\\sqrt[4]{15}$.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "The number 2 is $2$.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "The words \"is less than\" give the sign $<$.",
                  "reason": "Strict and nonstrict inequality: \"is less than\" rules out the two sides being equal, so the sign is strict."
                },
                {
                  "step": "$\\sqrt[4]{15} < 2$",
                  "reason": "Writing a sentence as an equation: the sign stands where the words \"is less than\" stand."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an inequality, with its two sides in the sentence's order: Twice the square root of 7 is less than 6.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "2*sqrt(7) < 6",
              "lines": [
                {
                  "step": "Write this sentence as an inequality, with its two sides in the sentence's order: Twice the square root of 7 is less than 6.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Twice the square root of 7 is $2\\sqrt{7}$.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "The number 6 is $6$.",
                  "reason": "Writing a sentence as an equation: each phrase of the sentence becomes its operation, in the sentence's order."
                },
                {
                  "step": "The words \"is less than\" give the sign $<$.",
                  "reason": "Strict and nonstrict inequality: \"is less than\" rules out the two sides being equal, so the sign is strict."
                },
                {
                  "step": "$2\\sqrt{7} < 6$",
                  "reason": "Writing a sentence as an equation: the sign stands where the words \"is less than\" stand."
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "proofs": [],
  "prove": []
}
