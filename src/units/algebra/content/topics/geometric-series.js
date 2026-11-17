export default {
  "number": 180,
  "title": "Geometric series",
  "section": 17,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "605-609, 621-627"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find the sum $7 + 42 + 252 + \\dots + 9072$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "10885",
    "solution": [
      "Find the sum $7 + 42 + 252 + \\dots + 9072$.",
      "The common ratio is $r = \\dfrac{42}{7} = 6$.",
      "$7 \\cdot 6^{n - 1} = 9072$",
      "$6^{n - 1} = 1296$",
      "$6^{n - 1} = 6^{4}$",
      "$n - 1 = 4$",
      "$n = 5$",
      "The sum is $\\dfrac{7(6^{5} - 1)}{6 - 1}$.",
      "$\\dfrac{7(6^{5} - 1)}{6 - 1} = \\dfrac{7(7776 - 1)}{6 - 1}$",
      "$\\dfrac{7(7776 - 1)}{6 - 1} = \\dfrac{7 \\cdot 7775}{6 - 1}$",
      "$\\dfrac{7 \\cdot 7775}{6 - 1} = \\dfrac{7 \\cdot 7775}{5}$",
      "$\\dfrac{7 \\cdot 7775}{5} = 10{,}885$"
    ]
  },
  "ideas": [
    {
      "name": "Geometric series",
      "concrete": "Write $y = 6 + 30 + 150 + 750$. Each term is the one before it times $5$, so $5y = 30 + 150 + 750 + 3750$. The two sums share $30 + 150 + 750$, and taking the first sum from the second leaves $5y - y = 3750 - 6$, so $4y = 3744$ and $y = 936$.",
      "general": "A **geometric series** is a sum of consecutive terms of a geometric sequence. For a whole number $n$ from $1$ up and numbers $a$ and $r$ with $r \\neq 1$, the geometric series $a + ar + \\dots + ar^{n-1}$ of $n$ terms has sum $\\dfrac{a(r^n - 1)}{r - 1}$. The way to it is to **multiply by the ratio and subtract**: the series times $r$ shares every term but two with the series itself. With $r = 1$ every term is $a$, and the sum is $na$."
    }
  ],
  "kinds": [
    {
      "id": "t180-k1",
      "forms": [
        {
          "example": {
            "problem": "Find the sum of the first $4$ terms of the geometric series $-14 - 98 - 686 - \\dots$.",
            "lines": [
              {
                "step": "Find the sum of the first $4$ terms of the geometric series $-14 - 98 - 686 - \\dots$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The common ratio is $r = \\dfrac{-98}{-14} = 7$.",
                "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{-686}{-98} = 7$ as well."
              },
              {
                "step": "The sum is $\\dfrac{-14(7^{4} - 1)}{7 - 1}$.",
                "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = -14$, $r = 7$ and $n = 4$, as $r \\neq 1$."
              },
              {
                "step": "$\\dfrac{-14(7^{4} - 1)}{7 - 1} = \\dfrac{-14(2401 - 1)}{7 - 1}$",
                "reason": "The definition of a power, from arithmetic: $7^{4} = 2401$."
              },
              {
                "step": "$\\dfrac{-14(2401 - 1)}{7 - 1} = \\dfrac{-14 \\cdot 2400}{7 - 1}$",
                "reason": "Order of operations, from arithmetic: the bracket on top is worked out first, $2401 - 1 = 2400$."
              },
              {
                "step": "$\\dfrac{-14 \\cdot 2400}{7 - 1} = \\dfrac{-14 \\cdot 2400}{6}$",
                "reason": "The subtraction of integers, from arithmetic: $7 - 1 = 6$."
              },
              {
                "step": "$\\dfrac{-14 \\cdot 2400}{6} = -5600$",
                "reason": "The multiplication and division of integers, from arithmetic, with the signs of products and quotients."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the sum of the first $6$ terms of the geometric series $2430 + 810 + 270 + \\dots$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "3640",
              "lines": [
                {
                  "step": "Find the sum of the first $6$ terms of the geometric series $2430 + 810 + 270 + \\dots$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = \\dfrac{810}{2430} = \\dfrac{1}{3}$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{270}{810} = \\dfrac{1}{3}$ as well."
                },
                {
                  "step": "The sum is $\\dfrac{2430(\\left(\\dfrac{1}{3}\\right)^{6} - 1)}{\\dfrac{1}{3} - 1}$.",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 2430$, $r = \\dfrac{1}{3}$ and $n = 6$, as $r \\neq 1$."
                },
                {
                  "step": "$\\dfrac{2430(\\left(\\dfrac{1}{3}\\right)^{6} - 1)}{\\dfrac{1}{3} - 1} = \\dfrac{2430(\\dfrac{1}{729} - 1)}{\\dfrac{1}{3} - 1}$",
                  "reason": "The definition of a power, from arithmetic: $\\left(\\dfrac{1}{3}\\right)^{6} = \\dfrac{1}{729}$."
                },
                {
                  "step": "$\\dfrac{2430(\\dfrac{1}{729} - 1)}{\\dfrac{1}{3} - 1} = \\dfrac{2430 \\cdot \\left(-\\dfrac{728}{729}\\right)}{\\dfrac{1}{3} - 1}$",
                  "reason": "Order of operations, from arithmetic: the bracket on top is worked out first, $\\dfrac{1}{729} - 1 = -\\dfrac{728}{729}$."
                },
                {
                  "step": "$\\dfrac{2430 \\cdot \\left(-\\dfrac{728}{729}\\right)}{\\dfrac{1}{3} - 1} = \\dfrac{2430 \\cdot \\left(-\\dfrac{728}{729}\\right)}{-\\dfrac{2}{3}}$",
                  "reason": "The general subtraction formula, from arithmetic: $\\dfrac{1}{3} - 1 = -\\dfrac{2}{3}$."
                },
                {
                  "step": "$\\dfrac{2430 \\cdot \\left(-\\dfrac{728}{729}\\right)}{-\\dfrac{2}{3}} = 3640$",
                  "reason": "The product formula and invert-and-multiply, from arithmetic, with the signs of products and quotients."
                }
              ]
            },
            {
              "prompt": "Find the sum of the first $5$ terms of the geometric series $-1250 - 1750 - 2450 - \\dots$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-13682",
              "lines": [
                {
                  "step": "Find the sum of the first $5$ terms of the geometric series $-1250 - 1750 - 2450 - \\dots$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = \\dfrac{-1750}{-1250} = \\dfrac{7}{5}$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{-2450}{-1750} = \\dfrac{7}{5}$ as well."
                },
                {
                  "step": "The sum is $\\dfrac{-1250(\\left(\\dfrac{7}{5}\\right)^{5} - 1)}{\\dfrac{7}{5} - 1}$.",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = -1250$, $r = \\dfrac{7}{5}$ and $n = 5$, as $r \\neq 1$."
                },
                {
                  "step": "$\\dfrac{-1250(\\left(\\dfrac{7}{5}\\right)^{5} - 1)}{\\dfrac{7}{5} - 1} = \\dfrac{-1250(\\dfrac{16{,}807}{3125} - 1)}{\\dfrac{7}{5} - 1}$",
                  "reason": "The definition of a power, from arithmetic: $\\left(\\dfrac{7}{5}\\right)^{5} = \\dfrac{16{,}807}{3125}$."
                },
                {
                  "step": "$\\dfrac{-1250(\\dfrac{16{,}807}{3125} - 1)}{\\dfrac{7}{5} - 1} = \\dfrac{-1250 \\cdot \\left(\\dfrac{13{,}682}{3125}\\right)}{\\dfrac{7}{5} - 1}$",
                  "reason": "Order of operations, from arithmetic: the bracket on top is worked out first, $\\dfrac{16{,}807}{3125} - 1 = \\dfrac{13{,}682}{3125}$."
                },
                {
                  "step": "$\\dfrac{-1250 \\cdot \\left(\\dfrac{13{,}682}{3125}\\right)}{\\dfrac{7}{5} - 1} = \\dfrac{-1250 \\cdot \\left(\\dfrac{13{,}682}{3125}\\right)}{\\dfrac{2}{5}}$",
                  "reason": "The general subtraction formula, from arithmetic: $\\dfrac{7}{5} - 1 = \\dfrac{2}{5}$."
                },
                {
                  "step": "$\\dfrac{-1250 \\cdot \\left(\\dfrac{13{,}682}{3125}\\right)}{\\dfrac{2}{5}} = -13{,}682$",
                  "reason": "The product formula and invert-and-multiply, from arithmetic, with the signs of products and quotients."
                }
              ]
            },
            {
              "prompt": "Find the sum of the first $5$ terms of the geometric series $-96 - 336 - 1176 - \\dots$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-20130",
              "lines": [
                {
                  "step": "Find the sum of the first $5$ terms of the geometric series $-96 - 336 - 1176 - \\dots$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = \\dfrac{-336}{-96} = \\dfrac{7}{2}$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{-1176}{-336} = \\dfrac{7}{2}$ as well."
                },
                {
                  "step": "The sum is $\\dfrac{-96(\\left(\\dfrac{7}{2}\\right)^{5} - 1)}{\\dfrac{7}{2} - 1}$.",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = -96$, $r = \\dfrac{7}{2}$ and $n = 5$, as $r \\neq 1$."
                },
                {
                  "step": "$\\dfrac{-96(\\left(\\dfrac{7}{2}\\right)^{5} - 1)}{\\dfrac{7}{2} - 1} = \\dfrac{-96(\\dfrac{16{,}807}{32} - 1)}{\\dfrac{7}{2} - 1}$",
                  "reason": "The definition of a power, from arithmetic: $\\left(\\dfrac{7}{2}\\right)^{5} = \\dfrac{16{,}807}{32}$."
                },
                {
                  "step": "$\\dfrac{-96(\\dfrac{16{,}807}{32} - 1)}{\\dfrac{7}{2} - 1} = \\dfrac{-96 \\cdot \\left(\\dfrac{16{,}775}{32}\\right)}{\\dfrac{7}{2} - 1}$",
                  "reason": "Order of operations, from arithmetic: the bracket on top is worked out first, $\\dfrac{16{,}807}{32} - 1 = \\dfrac{16{,}775}{32}$."
                },
                {
                  "step": "$\\dfrac{-96 \\cdot \\left(\\dfrac{16{,}775}{32}\\right)}{\\dfrac{7}{2} - 1} = \\dfrac{-96 \\cdot \\left(\\dfrac{16{,}775}{32}\\right)}{\\dfrac{5}{2}}$",
                  "reason": "The general subtraction formula, from arithmetic: $\\dfrac{7}{2} - 1 = \\dfrac{5}{2}$."
                },
                {
                  "step": "$\\dfrac{-96 \\cdot \\left(\\dfrac{16{,}775}{32}\\right)}{\\dfrac{5}{2}} = -20{,}130$",
                  "reason": "The product formula and invert-and-multiply, from arithmetic, with the signs of products and quotients."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the sum $15 + 120 + 960 + \\dots + 7680$.",
            "lines": [
              {
                "step": "Find the sum $15 + 120 + 960 + \\dots + 7680$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The common ratio is $r = \\dfrac{120}{15} = 8$.",
                "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{960}{120} = 8$ as well."
              },
              {
                "step": "$15 \\cdot 8^{n - 1} = 7680$",
                "reason": "The $n$th term $ar^{n-1}$, with $a = 15$ and $r = 8$, set equal to the last term."
              },
              {
                "step": "$8^{n - 1} = 512$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $15$."
              },
              {
                "step": "$8^{n - 1} = 8^{3}$",
                "reason": "The definition of a power, from arithmetic: $8^{3} = 512$."
              },
              {
                "step": "$n - 1 = 3$",
                "reason": "Equal powers of one base have equal exponents: the base $8$ is above $0$ and is not $1$."
              },
              {
                "step": "$n = 4$",
                "reason": "Adding the same number to both sides: $1$ is added to both sides."
              },
              {
                "step": "The sum is $\\dfrac{15(8^{4} - 1)}{8 - 1}$.",
                "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 15$, $r = 8$ and $n = 4$, as $r \\neq 1$."
              },
              {
                "step": "$\\dfrac{15(8^{4} - 1)}{8 - 1} = \\dfrac{15(4096 - 1)}{8 - 1}$",
                "reason": "The definition of a power, from arithmetic: $8^{4} = 4096$."
              },
              {
                "step": "$\\dfrac{15(4096 - 1)}{8 - 1} = \\dfrac{15 \\cdot 4095}{8 - 1}$",
                "reason": "Order of operations, from arithmetic: the bracket on top is worked out first, $4096 - 1 = 4095$."
              },
              {
                "step": "$\\dfrac{15 \\cdot 4095}{8 - 1} = \\dfrac{15 \\cdot 4095}{7}$",
                "reason": "The subtraction of integers, from arithmetic: $8 - 1 = 7$."
              },
              {
                "step": "$\\dfrac{15 \\cdot 4095}{7} = 8775$",
                "reason": "The multiplication and division of integers, from arithmetic, with the signs of products and quotients."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the sum $-7168 - 3584 - 1792 - \\dots - 14$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-14322",
              "lines": [
                {
                  "step": "Find the sum $-7168 - 3584 - 1792 - \\dots - 14$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = \\dfrac{-3584}{-7168} = \\dfrac{1}{2}$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{-1792}{-3584} = \\dfrac{1}{2}$ as well."
                },
                {
                  "step": "$-7168 \\cdot \\left(\\dfrac{1}{2}\\right)^{n - 1} = -14$",
                  "reason": "The $n$th term $ar^{n-1}$, with $a = -7168$ and $r = \\dfrac{1}{2}$, set equal to the last term."
                },
                {
                  "step": "$\\left(\\dfrac{1}{2}\\right)^{n - 1} = \\dfrac{1}{512}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-7168$."
                },
                {
                  "step": "$\\left(\\dfrac{1}{2}\\right)^{n - 1} = \\left(\\dfrac{1}{2}\\right)^{9}$",
                  "reason": "The definition of a power, from arithmetic: $\\left(\\dfrac{1}{2}\\right)^{9} = \\dfrac{1}{512}$."
                },
                {
                  "step": "$n - 1 = 9$",
                  "reason": "Equal powers of one base have equal exponents: the base $\\dfrac{1}{2}$ is above $0$ and is not $1$."
                },
                {
                  "step": "$n = 10$",
                  "reason": "Adding the same number to both sides: $1$ is added to both sides."
                },
                {
                  "step": "The sum is $\\dfrac{-7168(\\left(\\dfrac{1}{2}\\right)^{10} - 1)}{\\dfrac{1}{2} - 1}$.",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = -7168$, $r = \\dfrac{1}{2}$ and $n = 10$, as $r \\neq 1$."
                },
                {
                  "step": "$\\dfrac{-7168(\\left(\\dfrac{1}{2}\\right)^{10} - 1)}{\\dfrac{1}{2} - 1} = \\dfrac{-7168(\\dfrac{1}{1024} - 1)}{\\dfrac{1}{2} - 1}$",
                  "reason": "The definition of a power, from arithmetic: $\\left(\\dfrac{1}{2}\\right)^{10} = \\dfrac{1}{1024}$."
                },
                {
                  "step": "$\\dfrac{-7168(\\dfrac{1}{1024} - 1)}{\\dfrac{1}{2} - 1} = \\dfrac{-7168 \\cdot \\left(-\\dfrac{1023}{1024}\\right)}{\\dfrac{1}{2} - 1}$",
                  "reason": "Order of operations, from arithmetic: the bracket on top is worked out first, $\\dfrac{1}{1024} - 1 = -\\dfrac{1023}{1024}$."
                },
                {
                  "step": "$\\dfrac{-7168 \\cdot \\left(-\\dfrac{1023}{1024}\\right)}{\\dfrac{1}{2} - 1} = \\dfrac{-7168 \\cdot \\left(-\\dfrac{1023}{1024}\\right)}{-\\dfrac{1}{2}}$",
                  "reason": "The general subtraction formula, from arithmetic: $\\dfrac{1}{2} - 1 = -\\dfrac{1}{2}$."
                },
                {
                  "step": "$\\dfrac{-7168 \\cdot \\left(-\\dfrac{1023}{1024}\\right)}{-\\dfrac{1}{2}} = -14{,}322$",
                  "reason": "The product formula and invert-and-multiply, from arithmetic, with the signs of products and quotients."
                }
              ]
            },
            {
              "prompt": "Find the sum $-875 - 1225 - 1715 - \\dots - 2401$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-6216",
              "lines": [
                {
                  "step": "Find the sum $-875 - 1225 - 1715 - \\dots - 2401$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = \\dfrac{-1225}{-875} = \\dfrac{7}{5}$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{-1715}{-1225} = \\dfrac{7}{5}$ as well."
                },
                {
                  "step": "$-875 \\cdot \\left(\\dfrac{7}{5}\\right)^{n - 1} = -2401$",
                  "reason": "The $n$th term $ar^{n-1}$, with $a = -875$ and $r = \\dfrac{7}{5}$, set equal to the last term."
                },
                {
                  "step": "$\\left(\\dfrac{7}{5}\\right)^{n - 1} = \\dfrac{343}{125}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-875$."
                },
                {
                  "step": "$\\left(\\dfrac{7}{5}\\right)^{n - 1} = \\left(\\dfrac{7}{5}\\right)^{3}$",
                  "reason": "The definition of a power, from arithmetic: $\\left(\\dfrac{7}{5}\\right)^{3} = \\dfrac{343}{125}$."
                },
                {
                  "step": "$n - 1 = 3$",
                  "reason": "Equal powers of one base have equal exponents: the base $\\dfrac{7}{5}$ is above $0$ and is not $1$."
                },
                {
                  "step": "$n = 4$",
                  "reason": "Adding the same number to both sides: $1$ is added to both sides."
                },
                {
                  "step": "The sum is $\\dfrac{-875(\\left(\\dfrac{7}{5}\\right)^{4} - 1)}{\\dfrac{7}{5} - 1}$.",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = -875$, $r = \\dfrac{7}{5}$ and $n = 4$, as $r \\neq 1$."
                },
                {
                  "step": "$\\dfrac{-875(\\left(\\dfrac{7}{5}\\right)^{4} - 1)}{\\dfrac{7}{5} - 1} = \\dfrac{-875(\\dfrac{2401}{625} - 1)}{\\dfrac{7}{5} - 1}$",
                  "reason": "The definition of a power, from arithmetic: $\\left(\\dfrac{7}{5}\\right)^{4} = \\dfrac{2401}{625}$."
                },
                {
                  "step": "$\\dfrac{-875(\\dfrac{2401}{625} - 1)}{\\dfrac{7}{5} - 1} = \\dfrac{-875 \\cdot \\left(\\dfrac{1776}{625}\\right)}{\\dfrac{7}{5} - 1}$",
                  "reason": "Order of operations, from arithmetic: the bracket on top is worked out first, $\\dfrac{2401}{625} - 1 = \\dfrac{1776}{625}$."
                },
                {
                  "step": "$\\dfrac{-875 \\cdot \\left(\\dfrac{1776}{625}\\right)}{\\dfrac{7}{5} - 1} = \\dfrac{-875 \\cdot \\left(\\dfrac{1776}{625}\\right)}{\\dfrac{2}{5}}$",
                  "reason": "The general subtraction formula, from arithmetic: $\\dfrac{7}{5} - 1 = \\dfrac{2}{5}$."
                },
                {
                  "step": "$\\dfrac{-875 \\cdot \\left(\\dfrac{1776}{625}\\right)}{\\dfrac{2}{5}} = -6216$",
                  "reason": "The product formula and invert-and-multiply, from arithmetic, with the signs of products and quotients."
                }
              ]
            },
            {
              "prompt": "Find the sum $-320 - 560 - 980 - \\dots - 1715$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-3575",
              "lines": [
                {
                  "step": "Find the sum $-320 - 560 - 980 - \\dots - 1715$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = \\dfrac{-560}{-320} = \\dfrac{7}{4}$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{-980}{-560} = \\dfrac{7}{4}$ as well."
                },
                {
                  "step": "$-320 \\cdot \\left(\\dfrac{7}{4}\\right)^{n - 1} = -1715$",
                  "reason": "The $n$th term $ar^{n-1}$, with $a = -320$ and $r = \\dfrac{7}{4}$, set equal to the last term."
                },
                {
                  "step": "$\\left(\\dfrac{7}{4}\\right)^{n - 1} = \\dfrac{343}{64}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-320$."
                },
                {
                  "step": "$\\left(\\dfrac{7}{4}\\right)^{n - 1} = \\left(\\dfrac{7}{4}\\right)^{3}$",
                  "reason": "The definition of a power, from arithmetic: $\\left(\\dfrac{7}{4}\\right)^{3} = \\dfrac{343}{64}$."
                },
                {
                  "step": "$n - 1 = 3$",
                  "reason": "Equal powers of one base have equal exponents: the base $\\dfrac{7}{4}$ is above $0$ and is not $1$."
                },
                {
                  "step": "$n = 4$",
                  "reason": "Adding the same number to both sides: $1$ is added to both sides."
                },
                {
                  "step": "The sum is $\\dfrac{-320(\\left(\\dfrac{7}{4}\\right)^{4} - 1)}{\\dfrac{7}{4} - 1}$.",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = -320$, $r = \\dfrac{7}{4}$ and $n = 4$, as $r \\neq 1$."
                },
                {
                  "step": "$\\dfrac{-320(\\left(\\dfrac{7}{4}\\right)^{4} - 1)}{\\dfrac{7}{4} - 1} = \\dfrac{-320(\\dfrac{2401}{256} - 1)}{\\dfrac{7}{4} - 1}$",
                  "reason": "The definition of a power, from arithmetic: $\\left(\\dfrac{7}{4}\\right)^{4} = \\dfrac{2401}{256}$."
                },
                {
                  "step": "$\\dfrac{-320(\\dfrac{2401}{256} - 1)}{\\dfrac{7}{4} - 1} = \\dfrac{-320 \\cdot \\left(\\dfrac{2145}{256}\\right)}{\\dfrac{7}{4} - 1}$",
                  "reason": "Order of operations, from arithmetic: the bracket on top is worked out first, $\\dfrac{2401}{256} - 1 = \\dfrac{2145}{256}$."
                },
                {
                  "step": "$\\dfrac{-320 \\cdot \\left(\\dfrac{2145}{256}\\right)}{\\dfrac{7}{4} - 1} = \\dfrac{-320 \\cdot \\left(\\dfrac{2145}{256}\\right)}{\\dfrac{3}{4}}$",
                  "reason": "The general subtraction formula, from arithmetic: $\\dfrac{7}{4} - 1 = \\dfrac{3}{4}$."
                },
                {
                  "step": "$\\dfrac{-320 \\cdot \\left(\\dfrac{2145}{256}\\right)}{\\dfrac{3}{4}} = -3575$",
                  "reason": "The product formula and invert-and-multiply, from arithmetic, with the signs of products and quotients."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the sum of the first $4$ terms of the geometric series $11 - 99 + 891 - \\dots$.",
            "lines": [
              {
                "step": "Find the sum of the first $4$ terms of the geometric series $11 - 99 + 891 - \\dots$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The common ratio is $r = \\dfrac{-99}{11} = -9$.",
                "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{891}{-99} = -9$ as well."
              },
              {
                "step": "The sum is $\\dfrac{11(\\left(-9\\right)^{4} - 1)}{-9 - 1}$.",
                "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 11$, $r = -9$ and $n = 4$, as $r \\neq 1$."
              },
              {
                "step": "$\\dfrac{11(\\left(-9\\right)^{4} - 1)}{-9 - 1} = \\dfrac{11(6561 - 1)}{-9 - 1}$",
                "reason": "The sign of a power of a negative number: an even power of a negative number is positive, and $9^{4} = 6561$."
              },
              {
                "step": "$\\dfrac{11(6561 - 1)}{-9 - 1} = \\dfrac{11 \\cdot 6560}{-9 - 1}$",
                "reason": "Order of operations, from arithmetic: the bracket on top is worked out first, $6561 - 1 = 6560$."
              },
              {
                "step": "$\\dfrac{11 \\cdot 6560}{-9 - 1} = \\dfrac{11 \\cdot 6560}{-10}$",
                "reason": "The subtraction of integers, from arithmetic: $-9 - 1 = -10$."
              },
              {
                "step": "$\\dfrac{11 \\cdot 6560}{-10} = -7216$",
                "reason": "The multiplication and division of integers, from arithmetic, with the signs of products and quotients."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the sum of the first $6$ terms of the geometric series $15{,}625 - 12{,}500 + 10{,}000 - \\dots$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "6405",
              "lines": [
                {
                  "step": "Find the sum of the first $6$ terms of the geometric series $15{,}625 - 12{,}500 + 10{,}000 - \\dots$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = \\dfrac{-12{,}500}{15{,}625} = -\\dfrac{4}{5}$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{10{,}000}{-12{,}500} = -\\dfrac{4}{5}$ as well."
                },
                {
                  "step": "The sum is $\\dfrac{15{,}625(\\left(-\\dfrac{4}{5}\\right)^{6} - 1)}{-\\dfrac{4}{5} - 1}$.",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 15{,}625$, $r = -\\dfrac{4}{5}$ and $n = 6$, as $r \\neq 1$."
                },
                {
                  "step": "$\\dfrac{15{,}625(\\left(-\\dfrac{4}{5}\\right)^{6} - 1)}{-\\dfrac{4}{5} - 1} = \\dfrac{15{,}625(\\dfrac{4096}{15{,}625} - 1)}{-\\dfrac{4}{5} - 1}$",
                  "reason": "The sign of a power of a negative number: an even power of a negative number is positive, and $\\left(\\dfrac{4}{5}\\right)^{6} = \\dfrac{4096}{15{,}625}$."
                },
                {
                  "step": "$\\dfrac{15{,}625(\\dfrac{4096}{15{,}625} - 1)}{-\\dfrac{4}{5} - 1} = \\dfrac{15{,}625 \\cdot \\left(-\\dfrac{11{,}529}{15{,}625}\\right)}{-\\dfrac{4}{5} - 1}$",
                  "reason": "Order of operations, from arithmetic: the bracket on top is worked out first, $\\dfrac{4096}{15{,}625} - 1 = -\\dfrac{11{,}529}{15{,}625}$."
                },
                {
                  "step": "$\\dfrac{15{,}625 \\cdot \\left(-\\dfrac{11{,}529}{15{,}625}\\right)}{-\\dfrac{4}{5} - 1} = \\dfrac{15{,}625 \\cdot \\left(-\\dfrac{11{,}529}{15{,}625}\\right)}{-\\dfrac{9}{5}}$",
                  "reason": "The general subtraction formula, from arithmetic: $-\\dfrac{4}{5} - 1 = -\\dfrac{9}{5}$."
                },
                {
                  "step": "$\\dfrac{15{,}625 \\cdot \\left(-\\dfrac{11{,}529}{15{,}625}\\right)}{-\\dfrac{9}{5}} = 6405$",
                  "reason": "The product formula and invert-and-multiply, from arithmetic, with the signs of products and quotients."
                }
              ]
            },
            {
              "prompt": "Find the sum of the first $5$ terms of the geometric series $208 - 104 + 52 - \\dots$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "143",
              "lines": [
                {
                  "step": "Find the sum of the first $5$ terms of the geometric series $208 - 104 + 52 - \\dots$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = \\dfrac{-104}{208} = -\\dfrac{1}{2}$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{52}{-104} = -\\dfrac{1}{2}$ as well."
                },
                {
                  "step": "The sum is $\\dfrac{208(\\left(-\\dfrac{1}{2}\\right)^{5} - 1)}{-\\dfrac{1}{2} - 1}$.",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 208$, $r = -\\dfrac{1}{2}$ and $n = 5$, as $r \\neq 1$."
                },
                {
                  "step": "$\\dfrac{208(\\left(-\\dfrac{1}{2}\\right)^{5} - 1)}{-\\dfrac{1}{2} - 1} = \\dfrac{208(-\\dfrac{1}{32} - 1)}{-\\dfrac{1}{2} - 1}$",
                  "reason": "The sign of a power of a negative number: an odd power of a negative number is negative, and $\\left(\\dfrac{1}{2}\\right)^{5} = \\dfrac{1}{32}$."
                },
                {
                  "step": "$\\dfrac{208(-\\dfrac{1}{32} - 1)}{-\\dfrac{1}{2} - 1} = \\dfrac{208 \\cdot \\left(-\\dfrac{33}{32}\\right)}{-\\dfrac{1}{2} - 1}$",
                  "reason": "Order of operations, from arithmetic: the bracket on top is worked out first, $-\\dfrac{1}{32} - 1 = -\\dfrac{33}{32}$."
                },
                {
                  "step": "$\\dfrac{208 \\cdot \\left(-\\dfrac{33}{32}\\right)}{-\\dfrac{1}{2} - 1} = \\dfrac{208 \\cdot \\left(-\\dfrac{33}{32}\\right)}{-\\dfrac{3}{2}}$",
                  "reason": "The general subtraction formula, from arithmetic: $-\\dfrac{1}{2} - 1 = -\\dfrac{3}{2}$."
                },
                {
                  "step": "$\\dfrac{208 \\cdot \\left(-\\dfrac{33}{32}\\right)}{-\\dfrac{3}{2}} = 143$",
                  "reason": "The product formula and invert-and-multiply, from arithmetic, with the signs of products and quotients."
                }
              ]
            },
            {
              "prompt": "Find the sum of the first $8$ terms of the geometric series $-1664 + 832 - 416 + \\dots$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-1105",
              "lines": [
                {
                  "step": "Find the sum of the first $8$ terms of the geometric series $-1664 + 832 - 416 + \\dots$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = \\dfrac{832}{-1664} = -\\dfrac{1}{2}$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{-416}{832} = -\\dfrac{1}{2}$ as well."
                },
                {
                  "step": "The sum is $\\dfrac{-1664(\\left(-\\dfrac{1}{2}\\right)^{8} - 1)}{-\\dfrac{1}{2} - 1}$.",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = -1664$, $r = -\\dfrac{1}{2}$ and $n = 8$, as $r \\neq 1$."
                },
                {
                  "step": "$\\dfrac{-1664(\\left(-\\dfrac{1}{2}\\right)^{8} - 1)}{-\\dfrac{1}{2} - 1} = \\dfrac{-1664(\\dfrac{1}{256} - 1)}{-\\dfrac{1}{2} - 1}$",
                  "reason": "The sign of a power of a negative number: an even power of a negative number is positive, and $\\left(\\dfrac{1}{2}\\right)^{8} = \\dfrac{1}{256}$."
                },
                {
                  "step": "$\\dfrac{-1664(\\dfrac{1}{256} - 1)}{-\\dfrac{1}{2} - 1} = \\dfrac{-1664 \\cdot \\left(-\\dfrac{255}{256}\\right)}{-\\dfrac{1}{2} - 1}$",
                  "reason": "Order of operations, from arithmetic: the bracket on top is worked out first, $\\dfrac{1}{256} - 1 = -\\dfrac{255}{256}$."
                },
                {
                  "step": "$\\dfrac{-1664 \\cdot \\left(-\\dfrac{255}{256}\\right)}{-\\dfrac{1}{2} - 1} = \\dfrac{-1664 \\cdot \\left(-\\dfrac{255}{256}\\right)}{-\\dfrac{3}{2}}$",
                  "reason": "The general subtraction formula, from arithmetic: $-\\dfrac{1}{2} - 1 = -\\dfrac{3}{2}$."
                },
                {
                  "step": "$\\dfrac{-1664 \\cdot \\left(-\\dfrac{255}{256}\\right)}{-\\dfrac{3}{2}} = -1105$",
                  "reason": "The product formula and invert-and-multiply, from arithmetic, with the signs of products and quotients."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the sum $3 + 18 + 108 + \\dots + 3 \\cdot 6^{n + 1}$ as an expression in $n$.",
            "lines": [
              {
                "step": "Find the sum $3 + 18 + 108 + \\dots + 3 \\cdot 6^{n + 1}$ as an expression in $n$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The common ratio is $r = \\dfrac{18}{3} = 6$.",
                "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{108}{18} = 6$ as well."
              },
              {
                "step": "The last term $3 \\cdot 6^{n + 1}$ is the $(n + 2)$th term, so the series has $n + 2$ terms.",
                "reason": "The $n$th term $ar^{n-1}$: the $k$th term carries the power $r^{k-1}$, and $k - 1 = n + 1$ gives $k = n + 2$."
              },
              {
                "step": "The sum is $\\dfrac{3(6^{n + 2} - 1)}{6 - 1}$.",
                "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 3$, $r = 6$ and $n + 2$ in place of $n$, as $r \\neq 1$."
              },
              {
                "step": "$\\dfrac{3(6^{n + 2} - 1)}{6 - 1} = \\dfrac{3(6^{n + 2} - 1)}{5}$",
                "reason": "The subtraction of integers, from arithmetic: $6 - 1 = 5$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the sum $15 + 135 + 1215 + \\dots + 15 \\cdot 9^{2n + 1}$ as an expression in $n$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "15*(9^(2*n+2)-1)/8",
              "lines": [
                {
                  "step": "Find the sum $15 + 135 + 1215 + \\dots + 15 \\cdot 9^{2n + 1}$ as an expression in $n$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = \\dfrac{135}{15} = 9$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{1215}{135} = 9$ as well."
                },
                {
                  "step": "The last term $15 \\cdot 9^{2n + 1}$ is the $(2n + 2)$th term, so the series has $2n + 2$ terms.",
                  "reason": "The $n$th term $ar^{n-1}$: the $k$th term carries the power $r^{k-1}$, and $k - 1 = 2n + 1$ gives $k = 2n + 2$."
                },
                {
                  "step": "The sum is $\\dfrac{15(9^{2n + 2} - 1)}{9 - 1}$.",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 15$, $r = 9$ and $2n + 2$ in place of $n$, as $r \\neq 1$."
                },
                {
                  "step": "$\\dfrac{15(9^{2n + 2} - 1)}{9 - 1} = \\dfrac{15(9^{2n + 2} - 1)}{8}$",
                  "reason": "The subtraction of integers, from arithmetic: $9 - 1 = 8$."
                }
              ]
            },
            {
              "prompt": "Find the sum $13 + 52 + 208 + \\dots + 13 \\cdot 4^{n}$ as an expression in $n$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "13*(4^(n+1)-1)/3",
              "lines": [
                {
                  "step": "Find the sum $13 + 52 + 208 + \\dots + 13 \\cdot 4^{n}$ as an expression in $n$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = \\dfrac{52}{13} = 4$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{208}{52} = 4$ as well."
                },
                {
                  "step": "The last term $13 \\cdot 4^{n}$ is the $(n + 1)$th term, so the series has $n + 1$ terms.",
                  "reason": "The $n$th term $ar^{n-1}$: the $k$th term carries the power $r^{k-1}$, and $k - 1 = n$ gives $k = n + 1$."
                },
                {
                  "step": "The sum is $\\dfrac{13(4^{n + 1} - 1)}{4 - 1}$.",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 13$, $r = 4$ and $n + 1$ in place of $n$, as $r \\neq 1$."
                },
                {
                  "step": "$\\dfrac{13(4^{n + 1} - 1)}{4 - 1} = \\dfrac{13(4^{n + 1} - 1)}{3}$",
                  "reason": "The subtraction of integers, from arithmetic: $4 - 1 = 3$."
                }
              ]
            },
            {
              "prompt": "Find the sum $15 + 45 + 135 + \\dots + 15 \\cdot 3^{n + 1}$ as an expression in $n$.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "15*(3^(n+2)-1)/2",
              "lines": [
                {
                  "step": "Find the sum $15 + 45 + 135 + \\dots + 15 \\cdot 3^{n + 1}$ as an expression in $n$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = \\dfrac{45}{15} = 3$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{135}{45} = 3$ as well."
                },
                {
                  "step": "The last term $15 \\cdot 3^{n + 1}$ is the $(n + 2)$th term, so the series has $n + 2$ terms.",
                  "reason": "The $n$th term $ar^{n-1}$: the $k$th term carries the power $r^{k-1}$, and $k - 1 = n + 1$ gives $k = n + 2$."
                },
                {
                  "step": "The sum is $\\dfrac{15(3^{n + 2} - 1)}{3 - 1}$.",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 15$, $r = 3$ and $n + 2$ in place of $n$, as $r \\neq 1$."
                },
                {
                  "step": "$\\dfrac{15(3^{n + 2} - 1)}{3 - 1} = \\dfrac{15(3^{n + 2} - 1)}{2}$",
                  "reason": "The subtraction of integers, from arithmetic: $3 - 1 = 2$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the sum $81 - 135 + 225 - \\dots + 625$.",
            "lines": [
              {
                "step": "Find the sum $81 - 135 + 225 - \\dots + 625$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The common ratio is $r = \\dfrac{-135}{81} = -\\dfrac{5}{3}$.",
                "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{225}{-135} = -\\dfrac{5}{3}$ as well."
              },
              {
                "step": "$81 \\cdot \\left(-\\dfrac{5}{3}\\right)^{n - 1} = 625$",
                "reason": "The $n$th term $ar^{n-1}$, with $a = 81$ and $r = -\\dfrac{5}{3}$, set equal to the last term."
              },
              {
                "step": "$\\left(-\\dfrac{5}{3}\\right)^{n - 1} = \\dfrac{625}{81}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $81$."
              },
              {
                "step": "The exponent $n - 1$ is even.",
                "reason": "The sign of a power of a negative number: an odd power of a negative number is negative, and $\\dfrac{625}{81} > 0$."
              },
              {
                "step": "$\\left(\\dfrac{5}{3}\\right)^{n - 1} = \\dfrac{625}{81}$",
                "reason": "The sign of a power of a negative number: an even power of a negative number equals the same power of its size."
              },
              {
                "step": "$\\left(\\dfrac{5}{3}\\right)^{n - 1} = \\left(\\dfrac{5}{3}\\right)^{4}$",
                "reason": "The definition of a power, from arithmetic: $\\left(\\dfrac{5}{3}\\right)^{4} = \\dfrac{625}{81}$."
              },
              {
                "step": "$n - 1 = 4$",
                "reason": "Equal powers of one base have equal exponents: the base $\\dfrac{5}{3}$ is above $0$ and is not $1$."
              },
              {
                "step": "$n = 5$",
                "reason": "Adding the same number to both sides: $1$ is added to both sides."
              },
              {
                "step": "The sum is $\\dfrac{81(\\left(-\\dfrac{5}{3}\\right)^{5} - 1)}{-\\dfrac{5}{3} - 1}$.",
                "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 81$, $r = -\\dfrac{5}{3}$ and $n = 5$, as $r \\neq 1$."
              },
              {
                "step": "$\\dfrac{81(\\left(-\\dfrac{5}{3}\\right)^{5} - 1)}{-\\dfrac{5}{3} - 1} = \\dfrac{81(-\\dfrac{3125}{243} - 1)}{-\\dfrac{5}{3} - 1}$",
                "reason": "The sign of a power of a negative number: an odd power of a negative number is negative, and $\\left(\\dfrac{5}{3}\\right)^{5} = \\dfrac{3125}{243}$."
              },
              {
                "step": "$\\dfrac{81(-\\dfrac{3125}{243} - 1)}{-\\dfrac{5}{3} - 1} = \\dfrac{81 \\cdot \\left(-\\dfrac{3368}{243}\\right)}{-\\dfrac{5}{3} - 1}$",
                "reason": "Order of operations, from arithmetic: the bracket on top is worked out first, $-\\dfrac{3125}{243} - 1 = -\\dfrac{3368}{243}$."
              },
              {
                "step": "$\\dfrac{81 \\cdot \\left(-\\dfrac{3368}{243}\\right)}{-\\dfrac{5}{3} - 1} = \\dfrac{81 \\cdot \\left(-\\dfrac{3368}{243}\\right)}{-\\dfrac{8}{3}}$",
                "reason": "The general subtraction formula, from arithmetic: $-\\dfrac{5}{3} - 1 = -\\dfrac{8}{3}$."
              },
              {
                "step": "$\\dfrac{81 \\cdot \\left(-\\dfrac{3368}{243}\\right)}{-\\dfrac{8}{3}} = 421$",
                "reason": "The product formula and invert-and-multiply, from arithmetic, with the signs of products and quotients."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the sum $8 - 28 + 98 - \\dots - 343$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-265",
              "lines": [
                {
                  "step": "Find the sum $8 - 28 + 98 - \\dots - 343$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = \\dfrac{-28}{8} = -\\dfrac{7}{2}$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{98}{-28} = -\\dfrac{7}{2}$ as well."
                },
                {
                  "step": "$8 \\cdot \\left(-\\dfrac{7}{2}\\right)^{n - 1} = -343$",
                  "reason": "The $n$th term $ar^{n-1}$, with $a = 8$ and $r = -\\dfrac{7}{2}$, set equal to the last term."
                },
                {
                  "step": "$\\left(-\\dfrac{7}{2}\\right)^{n - 1} = -\\dfrac{343}{8}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $8$."
                },
                {
                  "step": "The exponent $n - 1$ is odd.",
                  "reason": "The sign of a power of a negative number: an even power of a negative number is positive, and $-\\dfrac{343}{8} < 0$."
                },
                {
                  "step": "$\\left(\\dfrac{7}{2}\\right)^{n - 1} = \\dfrac{343}{8}$",
                  "reason": "The sign of a power of a negative number: an odd power of a negative number is minus the same power of its size."
                },
                {
                  "step": "$\\left(\\dfrac{7}{2}\\right)^{n - 1} = \\left(\\dfrac{7}{2}\\right)^{3}$",
                  "reason": "The definition of a power, from arithmetic: $\\left(\\dfrac{7}{2}\\right)^{3} = \\dfrac{343}{8}$."
                },
                {
                  "step": "$n - 1 = 3$",
                  "reason": "Equal powers of one base have equal exponents: the base $\\dfrac{7}{2}$ is above $0$ and is not $1$."
                },
                {
                  "step": "$n = 4$",
                  "reason": "Adding the same number to both sides: $1$ is added to both sides."
                },
                {
                  "step": "The sum is $\\dfrac{8(\\left(-\\dfrac{7}{2}\\right)^{4} - 1)}{-\\dfrac{7}{2} - 1}$.",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 8$, $r = -\\dfrac{7}{2}$ and $n = 4$, as $r \\neq 1$."
                },
                {
                  "step": "$\\dfrac{8(\\left(-\\dfrac{7}{2}\\right)^{4} - 1)}{-\\dfrac{7}{2} - 1} = \\dfrac{8(\\dfrac{2401}{16} - 1)}{-\\dfrac{7}{2} - 1}$",
                  "reason": "The sign of a power of a negative number: an even power of a negative number is positive, and $\\left(\\dfrac{7}{2}\\right)^{4} = \\dfrac{2401}{16}$."
                },
                {
                  "step": "$\\dfrac{8(\\dfrac{2401}{16} - 1)}{-\\dfrac{7}{2} - 1} = \\dfrac{8 \\cdot \\left(\\dfrac{2385}{16}\\right)}{-\\dfrac{7}{2} - 1}$",
                  "reason": "Order of operations, from arithmetic: the bracket on top is worked out first, $\\dfrac{2401}{16} - 1 = \\dfrac{2385}{16}$."
                },
                {
                  "step": "$\\dfrac{8 \\cdot \\left(\\dfrac{2385}{16}\\right)}{-\\dfrac{7}{2} - 1} = \\dfrac{8 \\cdot \\left(\\dfrac{2385}{16}\\right)}{-\\dfrac{9}{2}}$",
                  "reason": "The general subtraction formula, from arithmetic: $-\\dfrac{7}{2} - 1 = -\\dfrac{9}{2}$."
                },
                {
                  "step": "$\\dfrac{8 \\cdot \\left(\\dfrac{2385}{16}\\right)}{-\\dfrac{9}{2}} = -265$",
                  "reason": "The product formula and invert-and-multiply, from arithmetic, with the signs of products and quotients."
                }
              ]
            },
            {
              "prompt": "Find the sum $256 - 128 + 64 - \\dots + 4$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "172",
              "lines": [
                {
                  "step": "Find the sum $256 - 128 + 64 - \\dots + 4$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = \\dfrac{-128}{256} = -\\dfrac{1}{2}$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{64}{-128} = -\\dfrac{1}{2}$ as well."
                },
                {
                  "step": "$256 \\cdot \\left(-\\dfrac{1}{2}\\right)^{n - 1} = 4$",
                  "reason": "The $n$th term $ar^{n-1}$, with $a = 256$ and $r = -\\dfrac{1}{2}$, set equal to the last term."
                },
                {
                  "step": "$\\left(-\\dfrac{1}{2}\\right)^{n - 1} = \\dfrac{1}{64}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $256$."
                },
                {
                  "step": "The exponent $n - 1$ is even.",
                  "reason": "The sign of a power of a negative number: an odd power of a negative number is negative, and $\\dfrac{1}{64} > 0$."
                },
                {
                  "step": "$\\left(\\dfrac{1}{2}\\right)^{n - 1} = \\dfrac{1}{64}$",
                  "reason": "The sign of a power of a negative number: an even power of a negative number equals the same power of its size."
                },
                {
                  "step": "$\\left(\\dfrac{1}{2}\\right)^{n - 1} = \\left(\\dfrac{1}{2}\\right)^{6}$",
                  "reason": "The definition of a power, from arithmetic: $\\left(\\dfrac{1}{2}\\right)^{6} = \\dfrac{1}{64}$."
                },
                {
                  "step": "$n - 1 = 6$",
                  "reason": "Equal powers of one base have equal exponents: the base $\\dfrac{1}{2}$ is above $0$ and is not $1$."
                },
                {
                  "step": "$n = 7$",
                  "reason": "Adding the same number to both sides: $1$ is added to both sides."
                },
                {
                  "step": "The sum is $\\dfrac{256(\\left(-\\dfrac{1}{2}\\right)^{7} - 1)}{-\\dfrac{1}{2} - 1}$.",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 256$, $r = -\\dfrac{1}{2}$ and $n = 7$, as $r \\neq 1$."
                },
                {
                  "step": "$\\dfrac{256(\\left(-\\dfrac{1}{2}\\right)^{7} - 1)}{-\\dfrac{1}{2} - 1} = \\dfrac{256(-\\dfrac{1}{128} - 1)}{-\\dfrac{1}{2} - 1}$",
                  "reason": "The sign of a power of a negative number: an odd power of a negative number is negative, and $\\left(\\dfrac{1}{2}\\right)^{7} = \\dfrac{1}{128}$."
                },
                {
                  "step": "$\\dfrac{256(-\\dfrac{1}{128} - 1)}{-\\dfrac{1}{2} - 1} = \\dfrac{256 \\cdot \\left(-\\dfrac{129}{128}\\right)}{-\\dfrac{1}{2} - 1}$",
                  "reason": "Order of operations, from arithmetic: the bracket on top is worked out first, $-\\dfrac{1}{128} - 1 = -\\dfrac{129}{128}$."
                },
                {
                  "step": "$\\dfrac{256 \\cdot \\left(-\\dfrac{129}{128}\\right)}{-\\dfrac{1}{2} - 1} = \\dfrac{256 \\cdot \\left(-\\dfrac{129}{128}\\right)}{-\\dfrac{3}{2}}$",
                  "reason": "The general subtraction formula, from arithmetic: $-\\dfrac{1}{2} - 1 = -\\dfrac{3}{2}$."
                },
                {
                  "step": "$\\dfrac{256 \\cdot \\left(-\\dfrac{129}{128}\\right)}{-\\dfrac{3}{2}} = 172$",
                  "reason": "The product formula and invert-and-multiply, from arithmetic, with the signs of products and quotients."
                }
              ]
            },
            {
              "prompt": "Find the sum $64 - 80 + 100 - \\dots - 125$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-41",
              "lines": [
                {
                  "step": "Find the sum $64 - 80 + 100 - \\dots - 125$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The common ratio is $r = \\dfrac{-80}{64} = -\\dfrac{5}{4}$.",
                  "reason": "Common ratio: each term is the term before it times $r$, so $r$ is a term divided by the term before it, and $\\dfrac{100}{-80} = -\\dfrac{5}{4}$ as well."
                },
                {
                  "step": "$64 \\cdot \\left(-\\dfrac{5}{4}\\right)^{n - 1} = -125$",
                  "reason": "The $n$th term $ar^{n-1}$, with $a = 64$ and $r = -\\dfrac{5}{4}$, set equal to the last term."
                },
                {
                  "step": "$\\left(-\\dfrac{5}{4}\\right)^{n - 1} = -\\dfrac{125}{64}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $64$."
                },
                {
                  "step": "The exponent $n - 1$ is odd.",
                  "reason": "The sign of a power of a negative number: an even power of a negative number is positive, and $-\\dfrac{125}{64} < 0$."
                },
                {
                  "step": "$\\left(\\dfrac{5}{4}\\right)^{n - 1} = \\dfrac{125}{64}$",
                  "reason": "The sign of a power of a negative number: an odd power of a negative number is minus the same power of its size."
                },
                {
                  "step": "$\\left(\\dfrac{5}{4}\\right)^{n - 1} = \\left(\\dfrac{5}{4}\\right)^{3}$",
                  "reason": "The definition of a power, from arithmetic: $\\left(\\dfrac{5}{4}\\right)^{3} = \\dfrac{125}{64}$."
                },
                {
                  "step": "$n - 1 = 3$",
                  "reason": "Equal powers of one base have equal exponents: the base $\\dfrac{5}{4}$ is above $0$ and is not $1$."
                },
                {
                  "step": "$n = 4$",
                  "reason": "Adding the same number to both sides: $1$ is added to both sides."
                },
                {
                  "step": "The sum is $\\dfrac{64(\\left(-\\dfrac{5}{4}\\right)^{4} - 1)}{-\\dfrac{5}{4} - 1}$.",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 64$, $r = -\\dfrac{5}{4}$ and $n = 4$, as $r \\neq 1$."
                },
                {
                  "step": "$\\dfrac{64(\\left(-\\dfrac{5}{4}\\right)^{4} - 1)}{-\\dfrac{5}{4} - 1} = \\dfrac{64(\\dfrac{625}{256} - 1)}{-\\dfrac{5}{4} - 1}$",
                  "reason": "The sign of a power of a negative number: an even power of a negative number is positive, and $\\left(\\dfrac{5}{4}\\right)^{4} = \\dfrac{625}{256}$."
                },
                {
                  "step": "$\\dfrac{64(\\dfrac{625}{256} - 1)}{-\\dfrac{5}{4} - 1} = \\dfrac{64 \\cdot \\left(\\dfrac{369}{256}\\right)}{-\\dfrac{5}{4} - 1}$",
                  "reason": "Order of operations, from arithmetic: the bracket on top is worked out first, $\\dfrac{625}{256} - 1 = \\dfrac{369}{256}$."
                },
                {
                  "step": "$\\dfrac{64 \\cdot \\left(\\dfrac{369}{256}\\right)}{-\\dfrac{5}{4} - 1} = \\dfrac{64 \\cdot \\left(\\dfrac{369}{256}\\right)}{-\\dfrac{9}{4}}$",
                  "reason": "The general subtraction formula, from arithmetic: $-\\dfrac{5}{4} - 1 = -\\dfrac{9}{4}$."
                },
                {
                  "step": "$\\dfrac{64 \\cdot \\left(\\dfrac{369}{256}\\right)}{-\\dfrac{9}{4}} = -41$",
                  "reason": "The product formula and invert-and-multiply, from arithmetic, with the signs of products and quotients."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t180-k2",
      "forms": [
        {
          "example": {
            "problem": "Simplify $\\dfrac{(1 + x + x^{2})(1 + x^{3} + x^{6} + \\dots + x^{42})}{1 + x^{9} + x^{18} + \\dots + x^{36}}$.",
            "lines": [
              {
                "step": "Simplify $\\dfrac{(1 + x + x^{2})(1 + x^{3} + x^{6} + \\dots + x^{42})}{1 + x^{9} + x^{18} + \\dots + x^{36}}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "For $x \\neq 1$, $1 + x + x^{2} = \\dfrac{x^{3} - 1}{x - 1}$.",
                "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 1$, $r = x$ and $n = 3$, as $x \\neq 1$."
              },
              {
                "step": "For $x \\neq 1$, none of $x^{3}$, $x^{9}$ and $x^{45}$ is $1$.",
                "reason": "The definition of $x^{1/n}$ for odd $n$: the one real $n$th root of $1$ is $1$, and $3$, $9$ and $45$ are odd."
              },
              {
                "step": "$1 + x^{3} + x^{6} + \\dots + x^{42} = \\dfrac{(x^{3})^{15} - 1}{x^{3} - 1}$",
                "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 1$, $r = x^{3}$ and $n = 15$, as $x^{3} \\neq 1$ by line 3."
              },
              {
                "step": "$\\dfrac{(x^{3})^{15} - 1}{x^{3} - 1} = \\dfrac{x^{45} - 1}{x^{3} - 1}$",
                "reason": "Power law: $(x^{3})^{15} = x^{45}$."
              },
              {
                "step": "$1 + x^{9} + x^{18} + \\dots + x^{36} = \\dfrac{(x^{9})^{5} - 1}{x^{9} - 1}$",
                "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 1$, $r = x^{9}$ and $n = 5$, as $x^{9} \\neq 1$ by line 3."
              },
              {
                "step": "$\\dfrac{(x^{9})^{5} - 1}{x^{9} - 1} = \\dfrac{x^{45} - 1}{x^{9} - 1}$",
                "reason": "Power law: $(x^{9})^{5} = x^{45}$."
              },
              {
                "step": "The top is $\\dfrac{x^{3} - 1}{x - 1} \\cdot \\dfrac{x^{45} - 1}{x^{3} - 1} = \\dfrac{(x^{3} - 1)(x^{45} - 1)}{(x - 1)(x^{3} - 1)}$.",
                "reason": "The product formula, from arithmetic: the tops multiply and the bottoms multiply."
              },
              {
                "step": "$\\dfrac{(x^{3} - 1)(x^{45} - 1)}{(x - 1)(x^{3} - 1)} = \\dfrac{x^{45} - 1}{x - 1}$",
                "reason": "Cancelling a common factor: $x^{3} - 1$ is not $0$, by line 3."
              },
              {
                "step": "The expression is $\\dfrac{x^{45} - 1}{x - 1} \\cdot \\dfrac{x^{9} - 1}{x^{45} - 1}$.",
                "reason": "Invert-and-multiply, from arithmetic: dividing by the bottom $\\dfrac{x^{45} - 1}{x^{9} - 1}$, which is not $0$ by line 3, is multiplying by its reciprocal."
              },
              {
                "step": "$\\dfrac{x^{45} - 1}{x - 1} \\cdot \\dfrac{x^{9} - 1}{x^{45} - 1} = \\dfrac{x^{9} - 1}{x - 1}$",
                "reason": "Cancelling a common factor: $x^{45} - 1$ is not $0$, by line 3."
              },
              {
                "step": "$\\dfrac{x^{9} - 1}{x - 1} = x^{8} + x^{7} + x^{6} + x^{5} + x^{4} + x^{3} + x^{2} + x + 1$",
                "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, read from right to left, with $a = 1$, $r = x$ and $n = 9$: the sum of the $9$ terms from $1$ to $x^{8}$."
              },
              {
                "step": "At $x = 1$ the expression is $\\dfrac{3 \\cdot 15}{5} = 9$, and $x^{8} + x^{7} + x^{6} + x^{5} + x^{4} + x^{3} + x^{2} + x + 1$ is $9$ as well.",
                "reason": "Substituting a value: at $x = 1$ every term of each sum is $1$, so each sum is its number of terms."
              },
              {
                "step": "So the expression equals $x^{8} + x^{7} + x^{6} + x^{5} + x^{4} + x^{3} + x^{2} + x + 1$ for every real number $x$.",
                "reason": "Lines 12 and 13: line 12 holds for every $x \\neq 1$, and line 13 for $x = 1$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\dfrac{(1 + x^{5} + x^{10} + \\dots + x^{40})(1 + x + x^{2} + \\dots + x^{4})}{1 + x^{15} + x^{30}}$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^14+x^13+x^12+x^11+x^10+x^9+x^8+x^7+x^6+x^5+x^4+x^3+x^2+x+1",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{(1 + x^{5} + x^{10} + \\dots + x^{40})(1 + x + x^{2} + \\dots + x^{4})}{1 + x^{15} + x^{30}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $x \\neq 1$, $1 + x + x^{2} + \\dots + x^{4} = \\dfrac{x^{5} - 1}{x - 1}$.",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 1$, $r = x$ and $n = 5$, as $x \\neq 1$."
                },
                {
                  "step": "For $x \\neq 1$, none of $x^{5}$, $x^{15}$ and $x^{45}$ is $1$.",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: the one real $n$th root of $1$ is $1$, and $5$, $15$ and $45$ are odd."
                },
                {
                  "step": "$1 + x^{5} + x^{10} + \\dots + x^{40} = \\dfrac{(x^{5})^{9} - 1}{x^{5} - 1}$",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 1$, $r = x^{5}$ and $n = 9$, as $x^{5} \\neq 1$ by line 3."
                },
                {
                  "step": "$\\dfrac{(x^{5})^{9} - 1}{x^{5} - 1} = \\dfrac{x^{45} - 1}{x^{5} - 1}$",
                  "reason": "Power law: $(x^{5})^{9} = x^{45}$."
                },
                {
                  "step": "$1 + x^{15} + x^{30} = \\dfrac{(x^{15})^{3} - 1}{x^{15} - 1}$",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 1$, $r = x^{15}$ and $n = 3$, as $x^{15} \\neq 1$ by line 3."
                },
                {
                  "step": "$\\dfrac{(x^{15})^{3} - 1}{x^{15} - 1} = \\dfrac{x^{45} - 1}{x^{15} - 1}$",
                  "reason": "Power law: $(x^{15})^{3} = x^{45}$."
                },
                {
                  "step": "The top is $\\dfrac{x^{5} - 1}{x - 1} \\cdot \\dfrac{x^{45} - 1}{x^{5} - 1} = \\dfrac{(x^{5} - 1)(x^{45} - 1)}{(x - 1)(x^{5} - 1)}$.",
                  "reason": "The product formula, from arithmetic: the tops multiply and the bottoms multiply."
                },
                {
                  "step": "$\\dfrac{(x^{5} - 1)(x^{45} - 1)}{(x - 1)(x^{5} - 1)} = \\dfrac{x^{45} - 1}{x - 1}$",
                  "reason": "Cancelling a common factor: $x^{5} - 1$ is not $0$, by line 3."
                },
                {
                  "step": "The expression is $\\dfrac{x^{45} - 1}{x - 1} \\cdot \\dfrac{x^{15} - 1}{x^{45} - 1}$.",
                  "reason": "Invert-and-multiply, from arithmetic: dividing by the bottom $\\dfrac{x^{45} - 1}{x^{15} - 1}$, which is not $0$ by line 3, is multiplying by its reciprocal."
                },
                {
                  "step": "$\\dfrac{x^{45} - 1}{x - 1} \\cdot \\dfrac{x^{15} - 1}{x^{45} - 1} = \\dfrac{x^{15} - 1}{x - 1}$",
                  "reason": "Cancelling a common factor: $x^{45} - 1$ is not $0$, by line 3."
                },
                {
                  "step": "$\\dfrac{x^{15} - 1}{x - 1} = x^{14} + x^{13} + x^{12} + x^{11} + x^{10} + x^{9} + x^{8} + x^{7} + x^{6} + x^{5} + x^{4} + x^{3} + x^{2} + x + 1$",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, read from right to left, with $a = 1$, $r = x$ and $n = 15$: the sum of the $15$ terms from $1$ to $x^{14}$."
                },
                {
                  "step": "At $x = 1$ the expression is $\\dfrac{5 \\cdot 9}{3} = 15$, and $x^{14} + x^{13} + x^{12} + x^{11} + x^{10} + x^{9} + x^{8} + x^{7} + x^{6} + x^{5} + x^{4} + x^{3} + x^{2} + x + 1$ is $15$ as well.",
                  "reason": "Substituting a value: at $x = 1$ every term of each sum is $1$, so each sum is its number of terms."
                },
                {
                  "step": "So the expression equals $x^{14} + x^{13} + x^{12} + x^{11} + x^{10} + x^{9} + x^{8} + x^{7} + x^{6} + x^{5} + x^{4} + x^{3} + x^{2} + x + 1$ for every real number $x$.",
                  "reason": "Lines 12 and 13: line 12 holds for every $x \\neq 1$, and line 13 for $x = 1$."
                }
              ]
            },
            {
              "prompt": "Simplify $\\dfrac{(1 + x + x^{2})(1 + x^{3} + x^{6} + \\dots + x^{60})}{1 + x^{7} + x^{14} + \\dots + x^{56}}$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^6+x^5+x^4+x^3+x^2+x+1",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{(1 + x + x^{2})(1 + x^{3} + x^{6} + \\dots + x^{60})}{1 + x^{7} + x^{14} + \\dots + x^{56}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $x \\neq 1$, $1 + x + x^{2} = \\dfrac{x^{3} - 1}{x - 1}$.",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 1$, $r = x$ and $n = 3$, as $x \\neq 1$."
                },
                {
                  "step": "For $x \\neq 1$, none of $x^{3}$, $x^{7}$ and $x^{63}$ is $1$.",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: the one real $n$th root of $1$ is $1$, and $3$, $7$ and $63$ are odd."
                },
                {
                  "step": "$1 + x^{3} + x^{6} + \\dots + x^{60} = \\dfrac{(x^{3})^{21} - 1}{x^{3} - 1}$",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 1$, $r = x^{3}$ and $n = 21$, as $x^{3} \\neq 1$ by line 3."
                },
                {
                  "step": "$\\dfrac{(x^{3})^{21} - 1}{x^{3} - 1} = \\dfrac{x^{63} - 1}{x^{3} - 1}$",
                  "reason": "Power law: $(x^{3})^{21} = x^{63}$."
                },
                {
                  "step": "$1 + x^{7} + x^{14} + \\dots + x^{56} = \\dfrac{(x^{7})^{9} - 1}{x^{7} - 1}$",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 1$, $r = x^{7}$ and $n = 9$, as $x^{7} \\neq 1$ by line 3."
                },
                {
                  "step": "$\\dfrac{(x^{7})^{9} - 1}{x^{7} - 1} = \\dfrac{x^{63} - 1}{x^{7} - 1}$",
                  "reason": "Power law: $(x^{7})^{9} = x^{63}$."
                },
                {
                  "step": "The top is $\\dfrac{x^{3} - 1}{x - 1} \\cdot \\dfrac{x^{63} - 1}{x^{3} - 1} = \\dfrac{(x^{3} - 1)(x^{63} - 1)}{(x - 1)(x^{3} - 1)}$.",
                  "reason": "The product formula, from arithmetic: the tops multiply and the bottoms multiply."
                },
                {
                  "step": "$\\dfrac{(x^{3} - 1)(x^{63} - 1)}{(x - 1)(x^{3} - 1)} = \\dfrac{x^{63} - 1}{x - 1}$",
                  "reason": "Cancelling a common factor: $x^{3} - 1$ is not $0$, by line 3."
                },
                {
                  "step": "The expression is $\\dfrac{x^{63} - 1}{x - 1} \\cdot \\dfrac{x^{7} - 1}{x^{63} - 1}$.",
                  "reason": "Invert-and-multiply, from arithmetic: dividing by the bottom $\\dfrac{x^{63} - 1}{x^{7} - 1}$, which is not $0$ by line 3, is multiplying by its reciprocal."
                },
                {
                  "step": "$\\dfrac{x^{63} - 1}{x - 1} \\cdot \\dfrac{x^{7} - 1}{x^{63} - 1} = \\dfrac{x^{7} - 1}{x - 1}$",
                  "reason": "Cancelling a common factor: $x^{63} - 1$ is not $0$, by line 3."
                },
                {
                  "step": "$\\dfrac{x^{7} - 1}{x - 1} = x^{6} + x^{5} + x^{4} + x^{3} + x^{2} + x + 1$",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, read from right to left, with $a = 1$, $r = x$ and $n = 7$: the sum of the $7$ terms from $1$ to $x^{6}$."
                },
                {
                  "step": "At $x = 1$ the expression is $\\dfrac{3 \\cdot 21}{9} = 7$, and $x^{6} + x^{5} + x^{4} + x^{3} + x^{2} + x + 1$ is $7$ as well.",
                  "reason": "Substituting a value: at $x = 1$ every term of each sum is $1$, so each sum is its number of terms."
                },
                {
                  "step": "So the expression equals $x^{6} + x^{5} + x^{4} + x^{3} + x^{2} + x + 1$ for every real number $x$.",
                  "reason": "Lines 12 and 13: line 12 holds for every $x \\neq 1$, and line 13 for $x = 1$."
                }
              ]
            },
            {
              "prompt": "Simplify $\\dfrac{(1 + x^{9} + x^{18} + \\dots + x^{54})(1 + x + x^{2} + \\dots + x^{8})}{1 + x^{21} + x^{42}}$.",
              "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
              "answer": "x^20+x^19+x^18+x^17+x^16+x^15+x^14+x^13+x^12+x^11+x^10+x^9+x^8+x^7+x^6+x^5+x^4+x^3+x^2+x+1",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{(1 + x^{9} + x^{18} + \\dots + x^{54})(1 + x + x^{2} + \\dots + x^{8})}{1 + x^{21} + x^{42}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "For $x \\neq 1$, $1 + x + x^{2} + \\dots + x^{8} = \\dfrac{x^{9} - 1}{x - 1}$.",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 1$, $r = x$ and $n = 9$, as $x \\neq 1$."
                },
                {
                  "step": "For $x \\neq 1$, none of $x^{9}$, $x^{21}$ and $x^{63}$ is $1$.",
                  "reason": "The definition of $x^{1/n}$ for odd $n$: the one real $n$th root of $1$ is $1$, and $9$, $21$ and $63$ are odd."
                },
                {
                  "step": "$1 + x^{9} + x^{18} + \\dots + x^{54} = \\dfrac{(x^{9})^{7} - 1}{x^{9} - 1}$",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 1$, $r = x^{9}$ and $n = 7$, as $x^{9} \\neq 1$ by line 3."
                },
                {
                  "step": "$\\dfrac{(x^{9})^{7} - 1}{x^{9} - 1} = \\dfrac{x^{63} - 1}{x^{9} - 1}$",
                  "reason": "Power law: $(x^{9})^{7} = x^{63}$."
                },
                {
                  "step": "$1 + x^{21} + x^{42} = \\dfrac{(x^{21})^{3} - 1}{x^{21} - 1}$",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 1$, $r = x^{21}$ and $n = 3$, as $x^{21} \\neq 1$ by line 3."
                },
                {
                  "step": "$\\dfrac{(x^{21})^{3} - 1}{x^{21} - 1} = \\dfrac{x^{63} - 1}{x^{21} - 1}$",
                  "reason": "Power law: $(x^{21})^{3} = x^{63}$."
                },
                {
                  "step": "The top is $\\dfrac{x^{9} - 1}{x - 1} \\cdot \\dfrac{x^{63} - 1}{x^{9} - 1} = \\dfrac{(x^{9} - 1)(x^{63} - 1)}{(x - 1)(x^{9} - 1)}$.",
                  "reason": "The product formula, from arithmetic: the tops multiply and the bottoms multiply."
                },
                {
                  "step": "$\\dfrac{(x^{9} - 1)(x^{63} - 1)}{(x - 1)(x^{9} - 1)} = \\dfrac{x^{63} - 1}{x - 1}$",
                  "reason": "Cancelling a common factor: $x^{9} - 1$ is not $0$, by line 3."
                },
                {
                  "step": "The expression is $\\dfrac{x^{63} - 1}{x - 1} \\cdot \\dfrac{x^{21} - 1}{x^{63} - 1}$.",
                  "reason": "Invert-and-multiply, from arithmetic: dividing by the bottom $\\dfrac{x^{63} - 1}{x^{21} - 1}$, which is not $0$ by line 3, is multiplying by its reciprocal."
                },
                {
                  "step": "$\\dfrac{x^{63} - 1}{x - 1} \\cdot \\dfrac{x^{21} - 1}{x^{63} - 1} = \\dfrac{x^{21} - 1}{x - 1}$",
                  "reason": "Cancelling a common factor: $x^{63} - 1$ is not $0$, by line 3."
                },
                {
                  "step": "$\\dfrac{x^{21} - 1}{x - 1} = x^{20} + x^{19} + x^{18} + x^{17} + x^{16} + x^{15} + x^{14} + x^{13} + x^{12} + x^{11} + x^{10} + x^{9} + x^{8} + x^{7} + x^{6} + x^{5} + x^{4} + x^{3} + x^{2} + x + 1$",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, read from right to left, with $a = 1$, $r = x$ and $n = 21$: the sum of the $21$ terms from $1$ to $x^{20}$."
                },
                {
                  "step": "At $x = 1$ the expression is $\\dfrac{9 \\cdot 7}{3} = 21$, and $x^{20} + x^{19} + x^{18} + x^{17} + x^{16} + x^{15} + x^{14} + x^{13} + x^{12} + x^{11} + x^{10} + x^{9} + x^{8} + x^{7} + x^{6} + x^{5} + x^{4} + x^{3} + x^{2} + x + 1$ is $21$ as well.",
                  "reason": "Substituting a value: at $x = 1$ every term of each sum is $1$, so each sum is its number of terms."
                },
                {
                  "step": "So the expression equals $x^{20} + x^{19} + x^{18} + x^{17} + x^{16} + x^{15} + x^{14} + x^{13} + x^{12} + x^{11} + x^{10} + x^{9} + x^{8} + x^{7} + x^{6} + x^{5} + x^{4} + x^{3} + x^{2} + x + 1$ for every real number $x$.",
                  "reason": "Lines 12 and 13: line 12 holds for every $x \\neq 1$, and line 13 for $x = 1$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t180-k3",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the sum of the first $3$ terms of the geometric series $54 - 90 + 150 - \\dots$, and write that line right.",
            "given": [
              "$r = \\dfrac{-90}{54} = -\\dfrac{5}{3}$",
              "The sum is $\\dfrac{54(\\left(-\\dfrac{5}{3}\\right)^{3} - 1)}{-\\dfrac{5}{3} - 1}$.",
              "$\\left(-\\dfrac{5}{3}\\right)^{3} = \\dfrac{125}{27}$",
              "$\\dfrac{54(\\dfrac{125}{27} - 1)}{-\\dfrac{5}{3} - 1} = \\dfrac{54 \\cdot \\left(\\dfrac{98}{27}\\right)}{-\\dfrac{8}{3}}$",
              "$\\dfrac{54 \\cdot \\left(\\dfrac{98}{27}\\right)}{-\\dfrac{8}{3}} = -\\dfrac{147}{2}$",
              "The sum is $-\\dfrac{147}{2}$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the sum of the first $3$ terms of the geometric series $54 - 90 + 150 - \\dots$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 gives a positive value for an odd power of $-\\dfrac{5}{3}$.",
                "reason": "A sign lost: an odd power of a negative number is negative, so $\\left(-\\dfrac{5}{3}\\right)^{3} = -\\dfrac{125}{27}$."
              },
              {
                "step": "Every line other than line 3 follows by a rule that holds, from the data or from the line before it as it is written, so line 3 is the first wrong line.",
                "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
              },
              {
                "step": "Line 3 written right is $\\left(-\\dfrac{5}{3}\\right)^{3} = -\\dfrac{125}{27}$.",
                "reason": "Each number keeps its own sign through the working, and the signs of products and quotients give each result its sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the sum of the first $4$ terms of the geometric series $-136 + 204 - 306 + \\dots$, and write that line right.",
              "given": [
                "$r = \\dfrac{204}{-136} = -\\dfrac{3}{2}$",
                "The sum is $\\dfrac{-136(\\left(-\\dfrac{3}{2}\\right)^{4} - 1)}{-\\dfrac{3}{2} - 1}$.",
                "$\\left(-\\dfrac{3}{2}\\right)^{4} = \\dfrac{81}{16}$",
                "$\\dfrac{-136(\\dfrac{81}{16} - 1)}{-\\dfrac{3}{2} - 1} = \\dfrac{-136 \\cdot \\left(\\dfrac{65}{16}\\right)}{\\dfrac{5}{2}}$",
                "$\\dfrac{-136 \\cdot \\left(\\dfrac{65}{16}\\right)}{\\dfrac{5}{2}} = -221$",
                "The sum is $-221$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: -136*(81/16-1)/(-3/2-1) = -136*(65/16)/(-5/2)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the sum of the first $4$ terms of the geometric series $-136 + 204 - 306 + \\dots$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 writes $-\\dfrac{3}{2} - 1$ as $\\dfrac{5}{2}$.",
                  "reason": "A sign lost: taking $1$ from $-\\dfrac{3}{2}$ gives $-\\dfrac{5}{2}$."
                },
                {
                  "step": "Every line other than line 4 follows by a rule that holds, from the data or from the line before it as it is written, so line 4 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
                },
                {
                  "step": "Line 4 written right is $\\dfrac{-136(\\dfrac{81}{16} - 1)}{-\\dfrac{3}{2} - 1} = \\dfrac{-136 \\cdot \\left(\\dfrac{65}{16}\\right)}{-\\dfrac{5}{2}}$.",
                  "reason": "Each number keeps its own sign through the working, and the signs of products and quotients give each result its sign."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the sum of the first $4$ terms of the geometric series $12 - 48 + 192 - \\dots$, and write that line right.",
              "given": [
                "$r = \\dfrac{-48}{12} = 4$",
                "The sum is $\\dfrac{12(4^{4} - 1)}{4 - 1}$.",
                "$4^{4} = 256$",
                "$\\dfrac{12(256 - 1)}{4 - 1} = \\dfrac{12 \\cdot 255}{3}$",
                "$\\dfrac{12 \\cdot 255}{3} = 1020$",
                "The sum is $1020$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: r = -48/12 = -4",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the sum of the first $4$ terms of the geometric series $12 - 48 + 192 - \\dots$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 divides $-48$ by $12$ and gives a positive ratio.",
                  "reason": "A sign lost: a quotient of two numbers of different signs is negative, so $r = -4$."
                },
                {
                  "step": "Every line other than line 1 follows by a rule that holds, from the data or from the line before it as it is written, so line 1 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
                },
                {
                  "step": "Line 1 written right is $r = \\dfrac{-48}{12} = -4$.",
                  "reason": "Each number keeps its own sign through the working, and the signs of products and quotients give each result its sign."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the sum of the first $5$ terms of the geometric series $-3584 - 4480 - 5600 - \\dots$, and write that line right.",
              "given": [
                "$r = \\dfrac{-4480}{-3584} = \\dfrac{5}{4}$",
                "The sum is $\\dfrac{-3584(\\left(\\dfrac{5}{4}\\right)^{5} - 1)}{\\dfrac{5}{4} - 1}$.",
                "$\\left(\\dfrac{5}{4}\\right)^{5} = \\dfrac{3125}{1024}$",
                "$\\dfrac{-3584(\\dfrac{3125}{1024} - 1)}{\\dfrac{5}{4} - 1} = \\dfrac{-3584 \\cdot \\left(\\dfrac{2101}{1024}\\right)}{\\dfrac{1}{4}}$",
                "$\\dfrac{-3584 \\cdot \\left(\\dfrac{2101}{1024}\\right)}{\\dfrac{1}{4}} = 29{,}414$",
                "The sum is $29{,}414$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: -3584*(2101/1024)/(1/4) = -29414",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the sum of the first $5$ terms of the geometric series $-3584 - 4480 - 5600 - \\dots$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 gives $29{,}414$ for a quotient whose top and bottom have different signs.",
                  "reason": "A sign lost: a quotient of a positive and a negative number is negative."
                },
                {
                  "step": "Every line other than line 5 follows by a rule that holds, from the data or from the line before it as it is written, so line 5 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
                },
                {
                  "step": "Line 5 written right is $\\dfrac{-3584 \\cdot \\left(\\dfrac{2101}{1024}\\right)}{\\dfrac{1}{4}} = -29{,}414$.",
                  "reason": "Each number keeps its own sign through the working, and the signs of products and quotients give each result its sign."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for the sum of the first $3$ terms of the geometric series $38 + 342 + 3078 + \\dots$, and write that line right.",
            "given": [
              "$r = \\dfrac{342}{38} = 9$",
              "$9^{3} = 9 \\cdot 81 = 729$",
              "$729 - 1 = 728 \\cdot 38 = 27{,}664$",
              "$\\dfrac{27{,}664}{9 - 1} = \\dfrac{27{,}664}{8} = 3458$",
              "The sum is $3458$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the sum of the first $3$ terms of the geometric series $38 + 342 + 3078 + \\dots$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 3 writes $729 - 1$, then times $38$, in one run of equals signs, so it states $729 - 1 = 27{,}664$.",
                "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and $729 - 1$ is $728$."
              },
              {
                "step": "Every line other than line 3 follows by a rule that holds, from the data or from the line before it as it is written, so line 3 is the first wrong line.",
                "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
              },
              {
                "step": "Line 3 written right is $38(729 - 1) = 27{,}664$.",
                "reason": "An equals sign stands only between two things that are equal, so the line states one true equation."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the sum of the first $3$ terms of the geometric series $35 + 245 + 1715 + \\dots$, and write that line right.",
              "given": [
                "$r = \\dfrac{245}{35} = 7$",
                "$7^{3} - 1 = 7 \\cdot 49 - 1 = 342$",
                "The sum is $\\dfrac{35 \\cdot 342}{7 - 1}$.",
                "$35 \\cdot 342 = \\dfrac{11{,}970}{6} = 1995$",
                "The sum is $1995$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 35*342/6 = 1995",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the sum of the first $3$ terms of the geometric series $35 + 245 + 1715 + \\dots$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 writes $35 \\cdot 342$, then divided by $6$, in one run of equals signs, so it states $35 \\cdot 342 = 1995$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and $35 \\cdot 342$ is $11{,}970$."
                },
                {
                  "step": "Every line other than line 4 follows by a rule that holds, from the data or from the line before it as it is written, so line 4 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
                },
                {
                  "step": "Line 4 written right is $\\dfrac{35 \\cdot 342}{6} = 1995$.",
                  "reason": "An equals sign stands only between two things that are equal, so the line states one true equation."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the sum of the first $3$ terms of the geometric series $19 + 114 + 684 + \\dots$, and write that line right.",
              "given": [
                "$6^{3} = 6 \\cdot 36 = 216$",
                "$216 - 1 = 215 \\cdot 19 = 4085$",
                "$\\dfrac{4085}{6 - 1} = \\dfrac{4085}{5} = 817$",
                "The sum is $817$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 19*(216-1) = 4085",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the sum of the first $3$ terms of the geometric series $19 + 114 + 684 + \\dots$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 writes $216 - 1$, then times $19$, in one run of equals signs, so it states $216 - 1 = 4085$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and $216 - 1$ is $215$."
                },
                {
                  "step": "Every line other than line 2 follows by a rule that holds, from the data or from the line before it as it is written, so line 2 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
                },
                {
                  "step": "Line 2 written right is $19(216 - 1) = 4085$.",
                  "reason": "An equals sign stands only between two things that are equal, so the line states one true equation."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the sum of the first $3$ terms of the geometric series $40 + 200 + 1000 + \\dots$, and write that line right.",
              "given": [
                "$r = \\dfrac{200}{40} = 5$",
                "$5^{3} - 1 = 5 \\cdot 25 - 1 = 124$",
                "$40 \\cdot 124 = \\dfrac{4960}{4} = 1240$",
                "The sum is $1240$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 40*124/4 = 1240",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the sum of the first $3$ terms of the geometric series $40 + 200 + 1000 + \\dots$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 writes $40 \\cdot 124$, then divided by $4$, in one run of equals signs, so it states $40 \\cdot 124 = 1240$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and $40 \\cdot 124$ is $4960$."
                },
                {
                  "step": "Every line other than line 3 follows by a rule that holds, from the data or from the line before it as it is written, so line 3 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
                },
                {
                  "step": "Line 3 written right is $\\dfrac{40 \\cdot 124}{4} = 1240$.",
                  "reason": "An equals sign stands only between two things that are equal, so the line states one true equation."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t180-k4",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation, with $y$ alone on the left and no power worked out: The number $y$ is the sum of $5$ terms, the first of them $14$ and each term after it $5$ times the term before it.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with $y$ alone on the left and no power worked out: The number $y$ is the sum of $5$ terms, the first of them $14$ and each term after it $5$ times the term before it.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The first term is $a = 14$.",
                "reason": "Writing a sentence as an equation: the sentence names the first term."
              },
              {
                "step": "The common ratio is $r = 5$.",
                "reason": "Writing a sentence as an equation: the sentence says what each term after the first is times the term before it."
              },
              {
                "step": "The series has $5$ terms.",
                "reason": "Writing a sentence as an equation: the sentence names the number of terms."
              },
              {
                "step": "The sum is $\\dfrac{14(5^{5} - 1)}{5 - 1}$.",
                "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 14$, $r = 5$ and $5$ terms, as $r \\neq 1$."
              },
              {
                "step": "$y = \\dfrac{14(5^{5} - 1)}{5 - 1}$",
                "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left and no power worked out: The number $y$ is the sum of the first $4$ terms of the geometric sequence with first term $15$ and common ratio $-5$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 15*((-5)^4-1)/(-5-1)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left and no power worked out: The number $y$ is the sum of the first $4$ terms of the geometric sequence with first term $15$ and common ratio $-5$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first term is $a = 15$.",
                  "reason": "Writing a sentence as an equation: the sentence names the first term."
                },
                {
                  "step": "The common ratio is $r = -5$.",
                  "reason": "Writing a sentence as an equation: the sentence says what each term after the first is times the term before it."
                },
                {
                  "step": "The series has $4$ terms.",
                  "reason": "Writing a sentence as an equation: the sentence names the number of terms."
                },
                {
                  "step": "The sum is $\\dfrac{15(\\left(-5\\right)^{4} - 1)}{-5 - 1}$.",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 15$, $r = -5$ and $4$ terms, as $r \\neq 1$."
                },
                {
                  "step": "$y = \\dfrac{15(\\left(-5\\right)^{4} - 1)}{-5 - 1}$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with the sum on the left and no power worked out: The sum of the first $n$ terms of the geometric sequence that starts at $5$, each term after it $4$ times the term before it, is $425$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "5*(4^n-1)/(4-1) = 425",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the sum on the left and no power worked out: The sum of the first $n$ terms of the geometric sequence that starts at $5$, each term after it $4$ times the term before it, is $425$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first term is $a = 5$.",
                  "reason": "Writing a sentence as an equation: the sentence names the first term."
                },
                {
                  "step": "The common ratio is $r = 4$.",
                  "reason": "Writing a sentence as an equation: the sentence says what each term after the first is times the term before it."
                },
                {
                  "step": "The series has $n$ terms.",
                  "reason": "Writing a sentence as an equation: the sentence names the number of terms."
                },
                {
                  "step": "The sum is $\\dfrac{5(4^{n} - 1)}{4 - 1}$.",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 5$, $r = 4$ and $n$ terms, as $r \\neq 1$."
                },
                {
                  "step": "$\\dfrac{5(4^{n} - 1)}{4 - 1} = 425$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left and no power worked out: The number $y$ is the sum of the first $5$ terms of the geometric sequence with first term $2$ and common ratio $x$, where $x$ is not $1$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 2*(x^5-1)/(x-1)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left and no power worked out: The number $y$ is the sum of the first $5$ terms of the geometric sequence with first term $2$ and common ratio $x$, where $x$ is not $1$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The first term is $a = 2$.",
                  "reason": "Writing a sentence as an equation: the sentence names the first term."
                },
                {
                  "step": "The common ratio is $r = x$.",
                  "reason": "Writing a sentence as an equation: the sentence says what each term after the first is times the term before it."
                },
                {
                  "step": "The series has $5$ terms.",
                  "reason": "Writing a sentence as an equation: the sentence names the number of terms."
                },
                {
                  "step": "The sum is $\\dfrac{2(x^{5} - 1)}{x - 1}$.",
                  "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with $a = 2$, $r = x$ and $5$ terms, as $r \\neq 1$."
                },
                {
                  "step": "$y = \\dfrac{2(x^{5} - 1)}{x - 1}$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
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
      "id": "t180-p1",
      "method": "direct proof",
      "statement": "For a whole number $n$ from $1$ up and numbers $a$ and $r$ with $r \\neq 1$, the geometric series $a + ar + ar^2 + \\dots + ar^{n-1}$ of $n$ terms has sum $\\dfrac{a(r^n - 1)}{r - 1}$.",
      "idea": "Multiply the series by its ratio. The new series is the old one moved one place along: it has every term of the old one but the first, and one new term at the end. Taking one from the other leaves two terms, and dividing by $r - 1$ gives the sum.",
      "lines": [
        {
          "line": "Write $y$ for the sum: $y = a + ar + ar^2 + \\dots + ar^{n-1}$.",
          "reason": "The $n$th term $ar^{n-1}$: the $n$ terms carry the powers $r^0, r^1, \\dots, r^{n-1}$."
        },
        {
          "line": "So $ry = r(a + ar + ar^2 + \\dots + ar^{n-1})$.",
          "reason": "Multiplying both sides by the same number: both sides are multiplied by $r$."
        },
        {
          "line": "So $ry = r \\cdot a + r \\cdot ar + r \\cdot ar^2 + \\dots + r \\cdot ar^{n-1}$.",
          "reason": "The distributive law, from arithmetic: $r$ multiplies each term of the bracket."
        },
        {
          "line": "So $ry = a \\cdot r + a \\cdot r \\cdot r + a \\cdot r \\cdot r^2 + \\dots + a \\cdot r \\cdot r^{n-1}$.",
          "reason": "The commutative law of multiplication, from arithmetic: $r \\cdot ar^k = a \\cdot r \\cdot r^k$."
        },
        {
          "line": "So $ry = ar + ar^2 + ar^3 + \\dots + ar^{n}$.",
          "reason": "Product law: $r \\cdot r^k = r^{k+1}$."
        },
        {
          "line": "So $ry - y = ar + ar^2 + \\dots + ar^{n} - y$.",
          "reason": "Adding the same number to both sides: $y$ is taken from both sides."
        },
        {
          "line": "So $ry - y = ar + ar^2 + \\dots + ar^{n} - (a + ar + \\dots + ar^{n-1})$.",
          "reason": "Substitution: line 1 gives $y$."
        },
        {
          "line": "So $ry - y = ar + ar^2 + \\dots + ar^{n} - a - ar - \\dots - ar^{n-1}$.",
          "reason": "Subtracting a bracket changes every sign in it."
        },
        {
          "line": "So $ry - y = ar^n - a$.",
          "reason": "The associative and commutative laws of addition, from arithmetic, with a number minus itself is $0$: each of $ar, ar^2, \\dots, ar^{n-1}$ is added once and taken away once."
        },
        {
          "line": "So $y(r - 1) = a(r^n - 1)$.",
          "reason": "Taking out a common factor: $y$ on the left and $a$ on the right."
        },
        {
          "line": "The number $r - 1$ is not $0$.",
          "reason": "Adding the same number to both sides: $r \\neq 1$ gives $r - 1 \\neq 0$."
        },
        {
          "line": "Therefore $y = \\dfrac{a(r^n - 1)}{r - 1}$.",
          "reason": "Dividing both sides by a nonzero number: both sides are divided by $r - 1$, by line 11."
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t180-s1",
      "method": "direct proof",
      "statement": "Prove that for numbers $a > 0$ and $r > 0$ with $r \\neq 1$ and a whole number $n$ from $1$ up, if $y = a + ar + \\dots + ar^{n-1}$ and $z = \\dfrac{1}{a} + \\dfrac{1}{ar} + \\dots + \\dfrac{1}{ar^{n-1}}$, then $(a \\cdot ar \\cdots ar^{n-1})^2 = \\left(\\dfrac{y}{z}\\right)^n$. Facts it may use: geometric series; the sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$; product law, quotient law, power law, power of a product; powers and roots of positive numbers keep the order; taking out a common factor; cancelling a common factor; substitution; the distributive law, the commutative and associative laws of multiplication, the definition of a power, the reciprocal, the multiplicative inverse, the cancellation law, the product formula, invert-and-multiply and $1 + 2 + \\dots + m = \\dfrac{m(m + 1)}{2}$, from arithmetic; transitive property.",
      "check": {
        "proof": [
          {
            "line": "The sum is $y = \\dfrac{a(r^n - 1)}{r - 1}$.",
            "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, as $r \\neq 1$."
          },
          {
            "line": "The sum $z$ is a geometric series with first term $\\dfrac{1}{a}$ and common ratio $\\dfrac{1}{r}$.",
            "reason": "Geometric series: each term $\\dfrac{1}{ar^k}$ after the first is the term before it, $\\dfrac{1}{ar^{k-1}}$, times $\\dfrac{1}{r}$."
          },
          {
            "line": "The number $\\dfrac{1}{r}$ is not $1$.",
            "reason": "The reciprocal of $1$ is $1$, from arithmetic, and $r \\neq 1$."
          },
          {
            "line": "So $z = \\dfrac{\\frac{1}{a}\\left(\\left(\\frac{1}{r}\\right)^n - 1\\right)}{\\frac{1}{r} - 1}$.",
            "reason": "The sum of $n$ terms $\\dfrac{a(r^n - 1)}{r - 1}$, with first term $\\dfrac{1}{a}$ and common ratio $\\dfrac{1}{r}$, as $\\dfrac{1}{r} \\neq 1$ by line 3."
          },
          {
            "line": "So $z = \\dfrac{\\frac{1}{a}\\left(\\left(\\frac{1}{r}\\right)^n - 1\\right) \\cdot r^n}{\\left(\\frac{1}{r} - 1\\right) \\cdot r^n}$.",
            "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $r^n$, which is not $0$ as $r > 0$."
          },
          {
            "line": "So $z = \\dfrac{\\frac{1}{a}\\left(\\left(\\frac{1}{r}\\right)^n \\cdot r^n - r^n\\right)}{\\frac{1}{r} \\cdot r^n - r^n}$.",
            "reason": "The distributive law, from arithmetic: $r^n$ multiplies each term of each bracket."
          },
          {
            "line": "So $z = \\dfrac{\\frac{1}{a}\\left(\\left(\\frac{1}{r} \\cdot r\\right)^n - r^n\\right)}{\\frac{1}{r} \\cdot r^n - r^n}$.",
            "reason": "Power of a product: $\\left(\\dfrac{1}{r}\\right)^n \\cdot r^n = \\left(\\dfrac{1}{r} \\cdot r\\right)^n$."
          },
          {
            "line": "So $z = \\dfrac{\\frac{1}{a}\\left(1^n - r^n\\right)}{\\frac{1}{r} \\cdot r^n - r^n}$.",
            "reason": "Multiplicative inverse, from arithmetic: $\\dfrac{1}{r}$ is the multiplicative inverse of $r$, so $\\dfrac{1}{r} \\cdot r = 1$."
          },
          {
            "line": "So $z = \\dfrac{\\frac{1}{a}\\left(1 - r^n\\right)}{\\frac{1}{r} \\cdot r^n - r^n}$.",
            "reason": "The definition of a power, from arithmetic: $1^n = 1$."
          },
          {
            "line": "So $z = \\dfrac{\\frac{1}{a}\\left(1 - r^n\\right)}{\\frac{r^n}{r} - r^n}$.",
            "reason": "The product formula, from arithmetic: $\\dfrac{1}{r} \\cdot r^n = \\dfrac{r^n}{r}$."
          },
          {
            "line": "So $z = \\dfrac{\\frac{1}{a}\\left(1 - r^n\\right)}{r^{n-1} - r^n}$.",
            "reason": "Quotient law: $\\dfrac{r^n}{r^1} = r^{n-1}$."
          },
          {
            "line": "So $z = \\dfrac{\\frac{1}{a}\\left(1 - r^n\\right)}{r^{n-1} - r^{n-1} \\cdot r}$.",
            "reason": "Product law: $r^{n-1} \\cdot r = r^n$."
          },
          {
            "line": "So $z = \\dfrac{\\frac{1}{a}\\left(1 - r^n\\right)}{r^{n-1}(1 - r)}$.",
            "reason": "Taking out a common factor: $r^{n-1}$ comes out of the bottom."
          },
          {
            "line": "So $z = \\dfrac{1 - r^n}{ar^{n-1}(1 - r)}$.",
            "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $a$."
          },
          {
            "line": "So $z = \\dfrac{r^n - 1}{ar^{n-1}(r - 1)}$.",
            "reason": "The cancellation law, from arithmetic: the top and the bottom are multiplied by $-1$."
          },
          {
            "line": "The number $r^n$ is not $1$.",
            "reason": "Powers and roots of positive numbers keep the order: $r > 1$ gives $r^n > 1^n = 1$, and $r < 1$ gives $r^n < 1^n = 1$."
          },
          {
            "line": "So $\\dfrac{y}{z} = \\dfrac{a(r^n - 1)}{r - 1} \\div \\dfrac{r^n - 1}{ar^{n-1}(r - 1)}$.",
            "reason": "Substitution: lines 1 and 15, the lines of $y$ and $z$."
          },
          {
            "line": "So $\\dfrac{y}{z} = \\dfrac{a(r^n - 1)}{r - 1} \\cdot \\dfrac{ar^{n-1}(r - 1)}{r^n - 1}$.",
            "reason": "Invert-and-multiply, from arithmetic: dividing by $z$, which is not $0$ by line 16, is multiplying by its reciprocal."
          },
          {
            "line": "So $\\dfrac{y}{z} = a \\cdot ar^{n-1}$.",
            "reason": "Cancelling a common factor: $r^n - 1$ is not $0$ by line 16, and $r - 1$ is not $0$ as $r \\neq 1$."
          },
          {
            "line": "So $\\dfrac{y}{z} = a^2r^{n-1}$.",
            "reason": "Product law: $a \\cdot a = a^2$."
          },
          {
            "line": "So $a \\cdot ar \\cdots ar^{n-1} = (a \\cdot a \\cdots a)(r^0 \\cdot r^1 \\cdots r^{n-1})$, with $n$ factors $a$.",
            "reason": "The commutative and associative laws of multiplication, from arithmetic: the factors are put in a new order."
          },
          {
            "line": "So $a \\cdot ar \\cdots ar^{n-1} = a^n(r^0 \\cdot r^1 \\cdots r^{n-1})$.",
            "reason": "The definition of a power, from arithmetic: $n$ factors $a$ make $a^n$."
          },
          {
            "line": "So $a \\cdot ar \\cdots ar^{n-1} = a^n r^{0 + 1 + \\dots + (n - 1)}$.",
            "reason": "Product law: the exponents of the powers of $r$ are added."
          },
          {
            "line": "The exponent is $0 + 1 + \\dots + (n - 1) = \\dfrac{n(n - 1)}{2}$.",
            "reason": "The sum $1 + 2 + \\dots + m = \\dfrac{m(m + 1)}{2}$, from arithmetic, with $m = n - 1$; for $n = 1$ both sides are $0$."
          },
          {
            "line": "So $a \\cdot ar \\cdots ar^{n-1} = a^n r^{n(n - 1)/2}$.",
            "reason": "Substitution: line 24 gives the exponent of $r$ in line 23."
          },
          {
            "line": "So $(a \\cdot ar \\cdots ar^{n-1})^2 = (a^n)^2(r^{n(n - 1)/2})^2$.",
            "reason": "Power of a product."
          },
          {
            "line": "So $(a \\cdot ar \\cdots ar^{n-1})^2 = a^{2n}r^{n(n - 1)}$.",
            "reason": "Power law: $n \\cdot 2 = 2n$ and $\\dfrac{n(n - 1)}{2} \\cdot 2 = n(n - 1)$."
          },
          {
            "line": "So $\\left(\\dfrac{y}{z}\\right)^n = (a^2)^n(r^{n-1})^n$.",
            "reason": "Power of a product, with line 20."
          },
          {
            "line": "So $\\left(\\dfrac{y}{z}\\right)^n = a^{2n}r^{n(n - 1)}$.",
            "reason": "Power law: $2 \\cdot n = 2n$ and $(n - 1) \\cdot n = n(n - 1)$."
          },
          {
            "line": "Therefore $(a \\cdot ar \\cdots ar^{n-1})^2 = \\left(\\dfrac{y}{z}\\right)^n$.",
            "reason": "Transitive property: lines 27 and 29 have the same right side."
          }
        ]
      }
    },
    {
      "id": "t180-s2",
      "method": "proof of the contrapositive",
      "statement": "Prove that if a geometric series of $n$ real numbers has a first term $a > 0$ and a sum below $0$, then $n$ is even. Facts it may use: geometric series, multiply by the ratio and subtract, the sign of a power of a negative number, taking out a common factor, dividing both sides by a nonzero number; the signs of products, the signs of products and quotients, adding the same number, multiplying by a negative number reverses the sign and transitivity, from arithmetic.",
      "check": {
        "proof": [
          {
            "line": "With $a > 0$, the contrapositive to prove is: if $n$ is odd, then the sum is not below $0$.",
            "reason": "Proof of the contrapositive: a statement and its contrapositive are true together, and a whole number that is not even is odd."
          },
          {
            "line": "Assume that $a > 0$ and that $n$ is odd, and write $y = a + ar + \\dots + ar^{n-1}$.",
            "reason": "The hypothesis of the contrapositive."
          },
          {
            "line": "If $r \\ge 0$, every power $r^k$ is at least $0$.",
            "reason": "Signs of products, from arithmetic: a product of numbers at least $0$ is at least $0$."
          },
          {
            "line": "If $r \\ge 0$, every term $ar^k$ is at least $0$.",
            "reason": "Signs of products, from arithmetic: $a > 0$ and $r^k \\ge 0$."
          },
          {
            "line": "If $r \\ge 0$, then $y \\ge a$.",
            "reason": "Adding the same number, from arithmetic: the terms after the first add a number at least $0$ to $a$."
          },
          {
            "line": "If $r \\ge 0$, then $y > 0$.",
            "reason": "Transitivity, from arithmetic: $y \\ge a$ by line 5, and $a > 0$ by line 2."
          },
          {
            "line": "If $r < 0$, then $ry = ar + ar^2 + \\dots + ar^{n}$.",
            "reason": "Multiply by the ratio and subtract: the series times $r$ is the series moved one place along."
          },
          {
            "line": "If $r < 0$, then $y - ry = a - ar^n$.",
            "reason": "Multiply by the ratio and subtract: line 7 is taken from line 2, and every term but $a$ and $ar^n$ is added once and taken away once."
          },
          {
            "line": "If $r < 0$, then $y(1 - r) = a(1 - r^n)$.",
            "reason": "Taking out a common factor: $y$ on the left and $a$ on the right."
          },
          {
            "line": "If $r < 0$, then $r^n < 0$.",
            "reason": "The sign of a power of a negative number: an odd power of a negative number is negative."
          },
          {
            "line": "If $r < 0$, then $-r > 0$.",
            "reason": "Multiplying by a negative number reverses the sign, from arithmetic: both sides of $r < 0$ are multiplied by $-1$."
          },
          {
            "line": "If $r < 0$, then $1 - r > 1$.",
            "reason": "Adding the same number, from arithmetic: $1$ is added to both sides of line 11."
          },
          {
            "line": "If $r < 0$, then $1 - r > 0$.",
            "reason": "Transitivity, from arithmetic: $1 - r > 1$ by line 12, and $1 > 0$."
          },
          {
            "line": "If $r < 0$, then $-r^n > 0$.",
            "reason": "Multiplying by a negative number reverses the sign, from arithmetic: both sides of line 10 are multiplied by $-1$."
          },
          {
            "line": "If $r < 0$, then $1 - r^n > 1$.",
            "reason": "Adding the same number, from arithmetic: $1$ is added to both sides of line 14."
          },
          {
            "line": "If $r < 0$, then $1 - r^n > 0$.",
            "reason": "Transitivity, from arithmetic: $1 - r^n > 1$ by line 15, and $1 > 0$."
          },
          {
            "line": "If $r < 0$, then $a(1 - r^n) > 0$.",
            "reason": "Signs of products, from arithmetic: $a > 0$ and $1 - r^n > 0$ by line 16, and a product of two positive numbers is positive."
          },
          {
            "line": "If $r < 0$, then $y = \\dfrac{a(1 - r^n)}{1 - r}$.",
            "reason": "Dividing both sides by a nonzero number: both sides of line 9 are divided by $1 - r$, which is not $0$ by line 13."
          },
          {
            "line": "If $r < 0$, then $y > 0$.",
            "reason": "The signs of products and quotients, from arithmetic: the top is above $0$ by line 17 and the bottom by line 13."
          },
          {
            "line": "In both cases $y > 0$, so the sum is not below $0$.",
            "reason": "Lines 6 and 19: every real number $r$ has $r \\ge 0$ or $r < 0$."
          },
          {
            "line": "Therefore a first term above $0$ and a sum below $0$ give an even number of terms.",
            "reason": "Line 1: the contrapositive is proved."
          }
        ]
      }
    }
  ]
}
