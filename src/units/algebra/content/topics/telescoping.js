export default {
  "number": 182,
  "title": "Sums and products that collapse",
  "section": 19,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "617-620"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Evaluate $\\dfrac{11}{7 \\cdot 13} + \\dfrac{11}{13 \\cdot 19} + \\dfrac{11}{19 \\cdot 25} + \\dots + \\dfrac{11}{91 \\cdot 97}$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "165/679",
    "solution": [
      "Evaluate $\\dfrac{11}{7 \\cdot 13} + \\dfrac{11}{13 \\cdot 19} + \\dfrac{11}{19 \\cdot 25} + \\dots + \\dfrac{11}{91 \\cdot 97}$.",
      "Each term is $\\dfrac{11}{k(k + 6)}$, for $k = 7, 13, \\dots, 91$.",
      "$\\dfrac{11}{k(k + 6)} = \\dfrac{a}{k} + \\dfrac{b}{k + 6}$",
      "$11 = a(k + 6) + bk$",
      "$a = \\dfrac{11}{6}$",
      "$b = -\\dfrac{11}{6}$",
      "The sum is $\\dfrac{11}{6}\\left(\\dfrac{1}{7} - \\dfrac{1}{13}\\right) + \\dfrac{11}{6}\\left(\\dfrac{1}{13} - \\dfrac{1}{19}\\right) + \\dots + \\dfrac{11}{6}\\left(\\dfrac{1}{91} - \\dfrac{1}{97}\\right)$.",
      "The sum is $\\dfrac{11}{6}\\left(\\dfrac{1}{7} - \\dfrac{1}{13} + \\dfrac{1}{13} - \\dfrac{1}{19} + \\dots + \\dfrac{1}{91} - \\dfrac{1}{97}\\right)$.",
      "The sum is $\\dfrac{11}{6}\\left(\\dfrac{1}{7} - \\dfrac{1}{97}\\right)$.",
      "$\\dfrac{1}{7} - \\dfrac{1}{97} = \\dfrac{90}{679}$",
      "$\\dfrac{11}{6} \\cdot \\dfrac{90}{679} = \\dfrac{165}{679}$"
    ]
  },
  "ideas": [],
  "kinds": [
    {
      "id": "t182-k1",
      "forms": [
        {
          "example": {
            "problem": "Evaluate $(105 - 110) + (110 - 115) + (115 - 120) + \\dots + (190 - 195)$.",
            "lines": [
              {
                "step": "Evaluate $(105 - 110) + (110 - 115) + (115 - 120) + \\dots + (190 - 195)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Without brackets the sum is $105 - 110 + 110 - 115 + 115 - \\dots + 190 - 195$.",
                "reason": "The associative law of addition, from arithmetic: the brackets of a sum can be dropped."
              },
              {
                "step": "The sum is $105 + (-110 + 110) + (-115 + 115) + \\dots + (-190 + 190) - 195$.",
                "reason": "The associative law of addition, from arithmetic: each number taken away is grouped with the same number added in the next bracket."
              },
              {
                "step": "The sum is $105 - 195$.",
                "reason": "Telescoping sum: a number and its opposite add to $0$, so every pair in brackets is $0$, and the first number $105$ and the last number $195$ are left."
              },
              {
                "step": "$105 - 195 = -90$",
                "reason": "The subtraction of integers, from arithmetic."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $(84 - 93) + (93 - 102) + (102 - 111) + \\dots + (219 - 228)$.",
              "form": "Answer as an integer.",
              "answer": "-144",
              "lines": [
                {
                  "step": "Evaluate $(84 - 93) + (93 - 102) + (102 - 111) + \\dots + (219 - 228)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Without brackets the sum is $84 - 93 + 93 - 102 + 102 - \\dots + 219 - 228$.",
                  "reason": "The associative law of addition, from arithmetic: the brackets of a sum can be dropped."
                },
                {
                  "step": "The sum is $84 + (-93 + 93) + (-102 + 102) + \\dots + (-219 + 219) - 228$.",
                  "reason": "The associative law of addition, from arithmetic: each number taken away is grouped with the same number added in the next bracket."
                },
                {
                  "step": "The sum is $84 - 228$.",
                  "reason": "Telescoping sum: a number and its opposite add to $0$, so every pair in brackets is $0$, and the first number $84$ and the last number $228$ are left."
                },
                {
                  "step": "$84 - 228 = -144$",
                  "reason": "The subtraction of integers, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Evaluate $(343 - 350) + (350 - 357) + (357 - 364) + \\dots + (504 - 511)$.",
              "form": "Answer as an integer.",
              "answer": "-168",
              "lines": [
                {
                  "step": "Evaluate $(343 - 350) + (350 - 357) + (357 - 364) + \\dots + (504 - 511)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Without brackets the sum is $343 - 350 + 350 - 357 + 357 - \\dots + 504 - 511$.",
                  "reason": "The associative law of addition, from arithmetic: the brackets of a sum can be dropped."
                },
                {
                  "step": "The sum is $343 + (-350 + 350) + (-357 + 357) + \\dots + (-504 + 504) - 511$.",
                  "reason": "The associative law of addition, from arithmetic: each number taken away is grouped with the same number added in the next bracket."
                },
                {
                  "step": "The sum is $343 - 511$.",
                  "reason": "Telescoping sum: a number and its opposite add to $0$, so every pair in brackets is $0$, and the first number $343$ and the last number $511$ are left."
                },
                {
                  "step": "$343 - 511 = -168$",
                  "reason": "The subtraction of integers, from arithmetic."
                }
              ]
            },
            {
              "prompt": "Evaluate $(199 - 191) + (191 - 183) + (183 - 175) + \\dots + (31 - 23)$.",
              "form": "Answer as an integer.",
              "answer": "176",
              "lines": [
                {
                  "step": "Evaluate $(199 - 191) + (191 - 183) + (183 - 175) + \\dots + (31 - 23)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Without brackets the sum is $199 - 191 + 191 - 183 + 183 - \\dots + 31 - 23$.",
                  "reason": "The associative law of addition, from arithmetic: the brackets of a sum can be dropped."
                },
                {
                  "step": "The sum is $199 + (-191 + 191) + (-183 + 183) + \\dots + (-31 + 31) - 23$.",
                  "reason": "The associative law of addition, from arithmetic: each number taken away is grouped with the same number added in the next bracket."
                },
                {
                  "step": "The sum is $199 - 23$.",
                  "reason": "Telescoping sum: a number and its opposite add to $0$, so every pair in brackets is $0$, and the first number $199$ and the last number $23$ are left."
                },
                {
                  "step": "$199 - 23 = 176$",
                  "reason": "The subtraction of integers, from arithmetic."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\dfrac{5}{2 \\cdot 4} + \\dfrac{5}{4 \\cdot 6} + \\dfrac{5}{6 \\cdot 8} + \\dots + \\dfrac{5}{24 \\cdot 26}$.",
            "lines": [
              {
                "step": "Evaluate $\\dfrac{5}{2 \\cdot 4} + \\dfrac{5}{4 \\cdot 6} + \\dfrac{5}{6 \\cdot 8} + \\dots + \\dfrac{5}{24 \\cdot 26}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Each term is $\\dfrac{5}{k(k + 2)}$, for $k = 2, 4, \\dots, 24$.",
                "reason": "Arithmetic sequence: the first factors of the bottoms go up by the common difference $2$, and each second factor is its first factor plus $2$."
              },
              {
                "step": "$\\dfrac{5}{k(k + 2)} = \\dfrac{a}{k} + \\dfrac{b}{k + 2}$",
                "reason": "Partial fractions: the bottom is the product of the two linear factors $k$ and $k + 2$."
              },
              {
                "step": "$5 = a(k + 2) + bk$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $k(k + 2)$."
              },
              {
                "step": "$a = \\dfrac{5}{2}$",
                "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = 0$ gives $5 = 2a$."
              },
              {
                "step": "$b = -\\dfrac{5}{2}$",
                "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = -2$ gives $5 = -2b$."
              },
              {
                "step": "The sum is $\\dfrac{5}{2}\\left(\\dfrac{1}{2} - \\dfrac{1}{4}\\right) + \\dfrac{5}{2}\\left(\\dfrac{1}{4} - \\dfrac{1}{6}\\right) + \\dots + \\dfrac{5}{2}\\left(\\dfrac{1}{24} - \\dfrac{1}{26}\\right)$.",
                "reason": "Substituting a value: by lines 3, 5 and 6, each term $\\dfrac{5}{k(k + 2)}$ is $\\dfrac{5}{2}\\left(\\dfrac{1}{k} - \\dfrac{1}{k + 2}\\right)$, with its own value of $k$."
              },
              {
                "step": "The sum is $\\dfrac{5}{2}\\left(\\dfrac{1}{2} - \\dfrac{1}{4} + \\dfrac{1}{4} - \\dfrac{1}{6} + \\dots + \\dfrac{1}{24} - \\dfrac{1}{26}\\right)$.",
                "reason": "The distributive law, from arithmetic: the common factor $\\dfrac{5}{2}$ is taken out."
              },
              {
                "step": "The sum is $\\dfrac{5}{2}\\left(\\dfrac{1}{2} - \\dfrac{1}{26}\\right)$.",
                "reason": "Telescoping sum: each fraction taken away is added back in the next bracket, so every fraction but the first and the last cancels."
              },
              {
                "step": "$\\dfrac{1}{2} - \\dfrac{1}{26} = \\dfrac{24}{52}$",
                "reason": "The general subtraction formula, from arithmetic: over the common bottom $52$."
              },
              {
                "step": "$\\dfrac{5}{2} \\cdot \\dfrac{24}{52} = \\dfrac{15}{13}$",
                "reason": "The product formula, from arithmetic, with cancelling a common factor."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\dfrac{5}{18 \\cdot 21} + \\dfrac{5}{21 \\cdot 24} + \\dfrac{5}{24 \\cdot 27} + \\dots + \\dfrac{5}{78 \\cdot 81}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "35/486",
              "lines": [
                {
                  "step": "Evaluate $\\dfrac{5}{18 \\cdot 21} + \\dfrac{5}{21 \\cdot 24} + \\dfrac{5}{24 \\cdot 27} + \\dots + \\dfrac{5}{78 \\cdot 81}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each term is $\\dfrac{5}{k(k + 3)}$, for $k = 18, 21, \\dots, 78$.",
                  "reason": "Arithmetic sequence: the first factors of the bottoms go up by the common difference $3$, and each second factor is its first factor plus $3$."
                },
                {
                  "step": "$\\dfrac{5}{k(k + 3)} = \\dfrac{a}{k} + \\dfrac{b}{k + 3}$",
                  "reason": "Partial fractions: the bottom is the product of the two linear factors $k$ and $k + 3$."
                },
                {
                  "step": "$5 = a(k + 3) + bk$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $k(k + 3)$."
                },
                {
                  "step": "$a = \\dfrac{5}{3}$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = 0$ gives $5 = 3a$."
                },
                {
                  "step": "$b = -\\dfrac{5}{3}$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = -3$ gives $5 = -3b$."
                },
                {
                  "step": "The sum is $\\dfrac{5}{3}\\left(\\dfrac{1}{18} - \\dfrac{1}{21}\\right) + \\dfrac{5}{3}\\left(\\dfrac{1}{21} - \\dfrac{1}{24}\\right) + \\dots + \\dfrac{5}{3}\\left(\\dfrac{1}{78} - \\dfrac{1}{81}\\right)$.",
                  "reason": "Substituting a value: by lines 3, 5 and 6, each term $\\dfrac{5}{k(k + 3)}$ is $\\dfrac{5}{3}\\left(\\dfrac{1}{k} - \\dfrac{1}{k + 3}\\right)$, with its own value of $k$."
                },
                {
                  "step": "The sum is $\\dfrac{5}{3}\\left(\\dfrac{1}{18} - \\dfrac{1}{21} + \\dfrac{1}{21} - \\dfrac{1}{24} + \\dots + \\dfrac{1}{78} - \\dfrac{1}{81}\\right)$.",
                  "reason": "The distributive law, from arithmetic: the common factor $\\dfrac{5}{3}$ is taken out."
                },
                {
                  "step": "The sum is $\\dfrac{5}{3}\\left(\\dfrac{1}{18} - \\dfrac{1}{81}\\right)$.",
                  "reason": "Telescoping sum: each fraction taken away is added back in the next bracket, so every fraction but the first and the last cancels."
                },
                {
                  "step": "$\\dfrac{1}{18} - \\dfrac{1}{81} = \\dfrac{63}{1458}$",
                  "reason": "The general subtraction formula, from arithmetic: over the common bottom $1458$."
                },
                {
                  "step": "$\\dfrac{5}{3} \\cdot \\dfrac{63}{1458} = \\dfrac{35}{486}$",
                  "reason": "The product formula, from arithmetic, with cancelling a common factor."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\dfrac{5}{8 \\cdot 12} + \\dfrac{5}{12 \\cdot 16} + \\dfrac{5}{16 \\cdot 20} + \\dots + \\dfrac{5}{96 \\cdot 100}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "23/160",
              "lines": [
                {
                  "step": "Evaluate $\\dfrac{5}{8 \\cdot 12} + \\dfrac{5}{12 \\cdot 16} + \\dfrac{5}{16 \\cdot 20} + \\dots + \\dfrac{5}{96 \\cdot 100}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each term is $\\dfrac{5}{k(k + 4)}$, for $k = 8, 12, \\dots, 96$.",
                  "reason": "Arithmetic sequence: the first factors of the bottoms go up by the common difference $4$, and each second factor is its first factor plus $4$."
                },
                {
                  "step": "$\\dfrac{5}{k(k + 4)} = \\dfrac{a}{k} + \\dfrac{b}{k + 4}$",
                  "reason": "Partial fractions: the bottom is the product of the two linear factors $k$ and $k + 4$."
                },
                {
                  "step": "$5 = a(k + 4) + bk$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $k(k + 4)$."
                },
                {
                  "step": "$a = \\dfrac{5}{4}$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = 0$ gives $5 = 4a$."
                },
                {
                  "step": "$b = -\\dfrac{5}{4}$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = -4$ gives $5 = -4b$."
                },
                {
                  "step": "The sum is $\\dfrac{5}{4}\\left(\\dfrac{1}{8} - \\dfrac{1}{12}\\right) + \\dfrac{5}{4}\\left(\\dfrac{1}{12} - \\dfrac{1}{16}\\right) + \\dots + \\dfrac{5}{4}\\left(\\dfrac{1}{96} - \\dfrac{1}{100}\\right)$.",
                  "reason": "Substituting a value: by lines 3, 5 and 6, each term $\\dfrac{5}{k(k + 4)}$ is $\\dfrac{5}{4}\\left(\\dfrac{1}{k} - \\dfrac{1}{k + 4}\\right)$, with its own value of $k$."
                },
                {
                  "step": "The sum is $\\dfrac{5}{4}\\left(\\dfrac{1}{8} - \\dfrac{1}{12} + \\dfrac{1}{12} - \\dfrac{1}{16} + \\dots + \\dfrac{1}{96} - \\dfrac{1}{100}\\right)$.",
                  "reason": "The distributive law, from arithmetic: the common factor $\\dfrac{5}{4}$ is taken out."
                },
                {
                  "step": "The sum is $\\dfrac{5}{4}\\left(\\dfrac{1}{8} - \\dfrac{1}{100}\\right)$.",
                  "reason": "Telescoping sum: each fraction taken away is added back in the next bracket, so every fraction but the first and the last cancels."
                },
                {
                  "step": "$\\dfrac{1}{8} - \\dfrac{1}{100} = \\dfrac{92}{800}$",
                  "reason": "The general subtraction formula, from arithmetic: over the common bottom $800$."
                },
                {
                  "step": "$\\dfrac{5}{4} \\cdot \\dfrac{92}{800} = \\dfrac{23}{160}$",
                  "reason": "The product formula, from arithmetic, with cancelling a common factor."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\dfrac{4}{3 \\cdot 5} + \\dfrac{4}{5 \\cdot 7} + \\dfrac{4}{7 \\cdot 9} + \\dots + \\dfrac{4}{27 \\cdot 29}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "52/87",
              "lines": [
                {
                  "step": "Evaluate $\\dfrac{4}{3 \\cdot 5} + \\dfrac{4}{5 \\cdot 7} + \\dfrac{4}{7 \\cdot 9} + \\dots + \\dfrac{4}{27 \\cdot 29}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each term is $\\dfrac{4}{k(k + 2)}$, for $k = 3, 5, \\dots, 27$.",
                  "reason": "Arithmetic sequence: the first factors of the bottoms go up by the common difference $2$, and each second factor is its first factor plus $2$."
                },
                {
                  "step": "$\\dfrac{4}{k(k + 2)} = \\dfrac{a}{k} + \\dfrac{b}{k + 2}$",
                  "reason": "Partial fractions: the bottom is the product of the two linear factors $k$ and $k + 2$."
                },
                {
                  "step": "$4 = a(k + 2) + bk$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $k(k + 2)$."
                },
                {
                  "step": "$a = 2$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = 0$ gives $4 = 2a$."
                },
                {
                  "step": "$b = -2$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = -2$ gives $4 = -2b$."
                },
                {
                  "step": "The sum is $2\\left(\\dfrac{1}{3} - \\dfrac{1}{5}\\right) + 2\\left(\\dfrac{1}{5} - \\dfrac{1}{7}\\right) + \\dots + 2\\left(\\dfrac{1}{27} - \\dfrac{1}{29}\\right)$.",
                  "reason": "Substituting a value: by lines 3, 5 and 6, each term $\\dfrac{4}{k(k + 2)}$ is $2\\left(\\dfrac{1}{k} - \\dfrac{1}{k + 2}\\right)$, with its own value of $k$."
                },
                {
                  "step": "The sum is $2\\left(\\dfrac{1}{3} - \\dfrac{1}{5} + \\dfrac{1}{5} - \\dfrac{1}{7} + \\dots + \\dfrac{1}{27} - \\dfrac{1}{29}\\right)$.",
                  "reason": "The distributive law, from arithmetic: the common factor $2$ is taken out."
                },
                {
                  "step": "The sum is $2\\left(\\dfrac{1}{3} - \\dfrac{1}{29}\\right)$.",
                  "reason": "Telescoping sum: each fraction taken away is added back in the next bracket, so every fraction but the first and the last cancels."
                },
                {
                  "step": "$\\dfrac{1}{3} - \\dfrac{1}{29} = \\dfrac{26}{87}$",
                  "reason": "The general subtraction formula, from arithmetic: over the common bottom $87$."
                },
                {
                  "step": "$2 \\cdot \\dfrac{26}{87} = \\dfrac{52}{87}$",
                  "reason": "The product formula, from arithmetic, with cancelling a common factor."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\dfrac{8}{3 \\cdot 5} + \\dfrac{8}{4 \\cdot 6} + \\dfrac{8}{5 \\cdot 7} + \\dots + \\dfrac{8}{24 \\cdot 26}$.",
            "lines": [
              {
                "step": "Evaluate $\\dfrac{8}{3 \\cdot 5} + \\dfrac{8}{4 \\cdot 6} + \\dfrac{8}{5 \\cdot 7} + \\dots + \\dfrac{8}{24 \\cdot 26}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Each term is $\\dfrac{8}{k(k + 2)}$, for $k = 3, 4, \\dots, 24$.",
                "reason": "Arithmetic sequence: the first factors of the bottoms go up by the common difference $1$, and each second factor is its first factor plus $2$."
              },
              {
                "step": "$\\dfrac{8}{k(k + 2)} = \\dfrac{a}{k} + \\dfrac{b}{k + 2}$",
                "reason": "Partial fractions: the bottom is the product of the two linear factors $k$ and $k + 2$."
              },
              {
                "step": "$8 = a(k + 2) + bk$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $k(k + 2)$."
              },
              {
                "step": "$a = 4$",
                "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = 0$ gives $8 = 2a$."
              },
              {
                "step": "$b = -4$",
                "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = -2$ gives $8 = -2b$."
              },
              {
                "step": "The sum is $4\\left(\\dfrac{1}{3} - \\dfrac{1}{5}\\right) + 4\\left(\\dfrac{1}{4} - \\dfrac{1}{6}\\right) + 4\\left(\\dfrac{1}{5} - \\dfrac{1}{7}\\right) + \\dots + 4\\left(\\dfrac{1}{24} - \\dfrac{1}{26}\\right)$.",
                "reason": "Substituting a value: by lines 3, 5 and 6, each term $\\dfrac{8}{k(k + 2)}$ is $4\\left(\\dfrac{1}{k} - \\dfrac{1}{k + 2}\\right)$, with its own value of $k$."
              },
              {
                "step": "The sum is $4\\left(\\dfrac{1}{3} - \\dfrac{1}{5} + \\dfrac{1}{4} - \\dfrac{1}{6} + \\dfrac{1}{5} - \\dfrac{1}{7} + \\dots + \\dfrac{1}{24} - \\dfrac{1}{26}\\right)$.",
                "reason": "The distributive law, from arithmetic: the common factor $4$ is taken out."
              },
              {
                "step": "The sum is $4\\left(\\dfrac{1}{3} + \\dfrac{1}{4} - \\dfrac{1}{25} - \\dfrac{1}{26}\\right)$.",
                "reason": "Telescoping sum: each fraction taken away is added back two brackets later, so the first fractions of the first two brackets and the last fractions of the last two brackets are left."
              },
              {
                "step": "$\\dfrac{1}{3} + \\dfrac{1}{4} - \\dfrac{1}{25} - \\dfrac{1}{26} = \\dfrac{1969}{3900}$",
                "reason": "The general addition formula and the general subtraction formula, from arithmetic: over a common bottom."
              },
              {
                "step": "$4 \\cdot \\dfrac{1969}{3900} = \\dfrac{1969}{975}$",
                "reason": "The product formula, from arithmetic, with cancelling a common factor."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\dfrac{12}{5 \\cdot 7} + \\dfrac{12}{6 \\cdot 8} + \\dfrac{12}{7 \\cdot 9} + \\dots + \\dfrac{12}{19 \\cdot 21}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "113/70",
              "lines": [
                {
                  "step": "Evaluate $\\dfrac{12}{5 \\cdot 7} + \\dfrac{12}{6 \\cdot 8} + \\dfrac{12}{7 \\cdot 9} + \\dots + \\dfrac{12}{19 \\cdot 21}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each term is $\\dfrac{12}{k(k + 2)}$, for $k = 5, 6, \\dots, 19$.",
                  "reason": "Arithmetic sequence: the first factors of the bottoms go up by the common difference $1$, and each second factor is its first factor plus $2$."
                },
                {
                  "step": "$\\dfrac{12}{k(k + 2)} = \\dfrac{a}{k} + \\dfrac{b}{k + 2}$",
                  "reason": "Partial fractions: the bottom is the product of the two linear factors $k$ and $k + 2$."
                },
                {
                  "step": "$12 = a(k + 2) + bk$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $k(k + 2)$."
                },
                {
                  "step": "$a = 6$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = 0$ gives $12 = 2a$."
                },
                {
                  "step": "$b = -6$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = -2$ gives $12 = -2b$."
                },
                {
                  "step": "The sum is $6\\left(\\dfrac{1}{5} - \\dfrac{1}{7}\\right) + 6\\left(\\dfrac{1}{6} - \\dfrac{1}{8}\\right) + 6\\left(\\dfrac{1}{7} - \\dfrac{1}{9}\\right) + \\dots + 6\\left(\\dfrac{1}{19} - \\dfrac{1}{21}\\right)$.",
                  "reason": "Substituting a value: by lines 3, 5 and 6, each term $\\dfrac{12}{k(k + 2)}$ is $6\\left(\\dfrac{1}{k} - \\dfrac{1}{k + 2}\\right)$, with its own value of $k$."
                },
                {
                  "step": "The sum is $6\\left(\\dfrac{1}{5} - \\dfrac{1}{7} + \\dfrac{1}{6} - \\dfrac{1}{8} + \\dfrac{1}{7} - \\dfrac{1}{9} + \\dots + \\dfrac{1}{19} - \\dfrac{1}{21}\\right)$.",
                  "reason": "The distributive law, from arithmetic: the common factor $6$ is taken out."
                },
                {
                  "step": "The sum is $6\\left(\\dfrac{1}{5} + \\dfrac{1}{6} - \\dfrac{1}{20} - \\dfrac{1}{21}\\right)$.",
                  "reason": "Telescoping sum: each fraction taken away is added back two brackets later, so the first fractions of the first two brackets and the last fractions of the last two brackets are left."
                },
                {
                  "step": "$\\dfrac{1}{5} + \\dfrac{1}{6} - \\dfrac{1}{20} - \\dfrac{1}{21} = \\dfrac{113}{420}$",
                  "reason": "The general addition formula and the general subtraction formula, from arithmetic: over a common bottom."
                },
                {
                  "step": "$6 \\cdot \\dfrac{113}{420} = \\dfrac{113}{70}$",
                  "reason": "The product formula, from arithmetic, with cancelling a common factor."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\dfrac{10}{9 \\cdot 11} + \\dfrac{10}{10 \\cdot 12} + \\dfrac{10}{11 \\cdot 13} + \\dots + \\dfrac{10}{23 \\cdot 25}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "233/360",
              "lines": [
                {
                  "step": "Evaluate $\\dfrac{10}{9 \\cdot 11} + \\dfrac{10}{10 \\cdot 12} + \\dfrac{10}{11 \\cdot 13} + \\dots + \\dfrac{10}{23 \\cdot 25}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each term is $\\dfrac{10}{k(k + 2)}$, for $k = 9, 10, \\dots, 23$.",
                  "reason": "Arithmetic sequence: the first factors of the bottoms go up by the common difference $1$, and each second factor is its first factor plus $2$."
                },
                {
                  "step": "$\\dfrac{10}{k(k + 2)} = \\dfrac{a}{k} + \\dfrac{b}{k + 2}$",
                  "reason": "Partial fractions: the bottom is the product of the two linear factors $k$ and $k + 2$."
                },
                {
                  "step": "$10 = a(k + 2) + bk$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $k(k + 2)$."
                },
                {
                  "step": "$a = 5$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = 0$ gives $10 = 2a$."
                },
                {
                  "step": "$b = -5$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = -2$ gives $10 = -2b$."
                },
                {
                  "step": "The sum is $5\\left(\\dfrac{1}{9} - \\dfrac{1}{11}\\right) + 5\\left(\\dfrac{1}{10} - \\dfrac{1}{12}\\right) + 5\\left(\\dfrac{1}{11} - \\dfrac{1}{13}\\right) + \\dots + 5\\left(\\dfrac{1}{23} - \\dfrac{1}{25}\\right)$.",
                  "reason": "Substituting a value: by lines 3, 5 and 6, each term $\\dfrac{10}{k(k + 2)}$ is $5\\left(\\dfrac{1}{k} - \\dfrac{1}{k + 2}\\right)$, with its own value of $k$."
                },
                {
                  "step": "The sum is $5\\left(\\dfrac{1}{9} - \\dfrac{1}{11} + \\dfrac{1}{10} - \\dfrac{1}{12} + \\dfrac{1}{11} - \\dfrac{1}{13} + \\dots + \\dfrac{1}{23} - \\dfrac{1}{25}\\right)$.",
                  "reason": "The distributive law, from arithmetic: the common factor $5$ is taken out."
                },
                {
                  "step": "The sum is $5\\left(\\dfrac{1}{9} + \\dfrac{1}{10} - \\dfrac{1}{24} - \\dfrac{1}{25}\\right)$.",
                  "reason": "Telescoping sum: each fraction taken away is added back two brackets later, so the first fractions of the first two brackets and the last fractions of the last two brackets are left."
                },
                {
                  "step": "$\\dfrac{1}{9} + \\dfrac{1}{10} - \\dfrac{1}{24} - \\dfrac{1}{25} = \\dfrac{233}{1800}$",
                  "reason": "The general addition formula and the general subtraction formula, from arithmetic: over a common bottom."
                },
                {
                  "step": "$5 \\cdot \\dfrac{233}{1800} = \\dfrac{233}{360}$",
                  "reason": "The product formula, from arithmetic, with cancelling a common factor."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\dfrac{14}{13 \\cdot 15} + \\dfrac{14}{14 \\cdot 16} + \\dfrac{14}{15 \\cdot 17} + \\dots + \\dfrac{14}{38 \\cdot 40}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "1067/1560",
              "lines": [
                {
                  "step": "Evaluate $\\dfrac{14}{13 \\cdot 15} + \\dfrac{14}{14 \\cdot 16} + \\dfrac{14}{15 \\cdot 17} + \\dots + \\dfrac{14}{38 \\cdot 40}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each term is $\\dfrac{14}{k(k + 2)}$, for $k = 13, 14, \\dots, 38$.",
                  "reason": "Arithmetic sequence: the first factors of the bottoms go up by the common difference $1$, and each second factor is its first factor plus $2$."
                },
                {
                  "step": "$\\dfrac{14}{k(k + 2)} = \\dfrac{a}{k} + \\dfrac{b}{k + 2}$",
                  "reason": "Partial fractions: the bottom is the product of the two linear factors $k$ and $k + 2$."
                },
                {
                  "step": "$14 = a(k + 2) + bk$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $k(k + 2)$."
                },
                {
                  "step": "$a = 7$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = 0$ gives $14 = 2a$."
                },
                {
                  "step": "$b = -7$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $k = -2$ gives $14 = -2b$."
                },
                {
                  "step": "The sum is $7\\left(\\dfrac{1}{13} - \\dfrac{1}{15}\\right) + 7\\left(\\dfrac{1}{14} - \\dfrac{1}{16}\\right) + 7\\left(\\dfrac{1}{15} - \\dfrac{1}{17}\\right) + \\dots + 7\\left(\\dfrac{1}{38} - \\dfrac{1}{40}\\right)$.",
                  "reason": "Substituting a value: by lines 3, 5 and 6, each term $\\dfrac{14}{k(k + 2)}$ is $7\\left(\\dfrac{1}{k} - \\dfrac{1}{k + 2}\\right)$, with its own value of $k$."
                },
                {
                  "step": "The sum is $7\\left(\\dfrac{1}{13} - \\dfrac{1}{15} + \\dfrac{1}{14} - \\dfrac{1}{16} + \\dfrac{1}{15} - \\dfrac{1}{17} + \\dots + \\dfrac{1}{38} - \\dfrac{1}{40}\\right)$.",
                  "reason": "The distributive law, from arithmetic: the common factor $7$ is taken out."
                },
                {
                  "step": "The sum is $7\\left(\\dfrac{1}{13} + \\dfrac{1}{14} - \\dfrac{1}{39} - \\dfrac{1}{40}\\right)$.",
                  "reason": "Telescoping sum: each fraction taken away is added back two brackets later, so the first fractions of the first two brackets and the last fractions of the last two brackets are left."
                },
                {
                  "step": "$\\dfrac{1}{13} + \\dfrac{1}{14} - \\dfrac{1}{39} - \\dfrac{1}{40} = \\dfrac{1067}{10{,}920}$",
                  "reason": "The general addition formula and the general subtraction formula, from arithmetic: over a common bottom."
                },
                {
                  "step": "$7 \\cdot \\dfrac{1067}{10{,}920} = \\dfrac{1067}{1560}$",
                  "reason": "The product formula, from arithmetic, with cancelling a common factor."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\dfrac{1}{\\sqrt{46} + \\sqrt{52}} + \\dfrac{1}{\\sqrt{52} + \\sqrt{58}} + \\dfrac{1}{\\sqrt{58} + \\sqrt{64}} + \\dots + \\dfrac{1}{\\sqrt{190} + \\sqrt{196}}$.",
            "lines": [
              {
                "step": "Evaluate $\\dfrac{1}{\\sqrt{46} + \\sqrt{52}} + \\dfrac{1}{\\sqrt{52} + \\sqrt{58}} + \\dfrac{1}{\\sqrt{58} + \\sqrt{64}} + \\dots + \\dfrac{1}{\\sqrt{190} + \\sqrt{196}}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Each term is $\\dfrac{1}{\\sqrt{k} + \\sqrt{k + 6}}$, for $k = 46, 52, \\dots, 190$.",
                "reason": "Arithmetic sequence: the numbers under the first roots go up by the common difference $6$, and each number under the second root is the first plus $6$."
              },
              {
                "step": "$\\dfrac{1}{\\sqrt{k} + \\sqrt{k + 6}} = \\dfrac{\\sqrt{k + 6} - \\sqrt{k}}{(\\sqrt{k + 6} + \\sqrt{k})(\\sqrt{k + 6} - \\sqrt{k})}$",
                "reason": "Rationalising the denominator: top and bottom are multiplied by $\\sqrt{k + 6} - \\sqrt{k}$."
              },
              {
                "step": "$(\\sqrt{k + 6} + \\sqrt{k})(\\sqrt{k + 6} - \\sqrt{k}) = (k + 6) - k$",
                "reason": "Difference of squares $a^2-b^2=(a-b)(a+b)$, with the positive square root, from arithmetic: $(\\sqrt{k + 6})^2 = k + 6$ and $(\\sqrt{k})^2 = k$."
              },
              {
                "step": "$\\dfrac{1}{\\sqrt{k} + \\sqrt{k + 6}} = \\dfrac{\\sqrt{k + 6} - \\sqrt{k}}{6}$",
                "reason": "Collecting like terms: $(k + 6) - k = 6$."
              },
              {
                "step": "The sum is $\\dfrac{\\sqrt{52} - \\sqrt{46}}{6} + \\dfrac{\\sqrt{58} - \\sqrt{52}}{6} + \\dots + \\dfrac{\\sqrt{196} - \\sqrt{190}}{6}$.",
                "reason": "Substituting a value: by line 5, with its own value of $k$ in each term."
              },
              {
                "step": "The sum is $\\dfrac{1}{6}\\left(\\sqrt{52} - \\sqrt{46} + \\sqrt{58} - \\sqrt{52} + \\dots + \\sqrt{196} - \\sqrt{190}\\right)$.",
                "reason": "The distributive law, from arithmetic: the common factor $\\dfrac{1}{6}$ is taken out."
              },
              {
                "step": "The sum is $\\dfrac{1}{6}\\left(\\sqrt{196} - \\sqrt{46}\\right)$.",
                "reason": "Telescoping sum: each root taken away is added back in the next term, so every root but the first taken away and the last added cancels."
              },
              {
                "step": "$\\sqrt{196} = 14$",
                "reason": "Positive square root, from arithmetic: $14^2 = 196$."
              },
              {
                "step": "The sum is $\\dfrac{14 - \\sqrt{46}}{6}$.",
                "reason": "The product formula, from arithmetic, with line 9."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\dfrac{1}{\\sqrt{49} + \\sqrt{52}} + \\dfrac{1}{\\sqrt{52} + \\sqrt{55}} + \\dfrac{1}{\\sqrt{55} + \\sqrt{58}} + \\dots + \\dfrac{1}{\\sqrt{70} + \\sqrt{73}}$.",
              "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
              "answer": "(sqrt(73)-7)/3",
              "lines": [
                {
                  "step": "Evaluate $\\dfrac{1}{\\sqrt{49} + \\sqrt{52}} + \\dfrac{1}{\\sqrt{52} + \\sqrt{55}} + \\dfrac{1}{\\sqrt{55} + \\sqrt{58}} + \\dots + \\dfrac{1}{\\sqrt{70} + \\sqrt{73}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each term is $\\dfrac{1}{\\sqrt{k} + \\sqrt{k + 3}}$, for $k = 49, 52, \\dots, 70$.",
                  "reason": "Arithmetic sequence: the numbers under the first roots go up by the common difference $3$, and each number under the second root is the first plus $3$."
                },
                {
                  "step": "$\\dfrac{1}{\\sqrt{k} + \\sqrt{k + 3}} = \\dfrac{\\sqrt{k + 3} - \\sqrt{k}}{(\\sqrt{k + 3} + \\sqrt{k})(\\sqrt{k + 3} - \\sqrt{k})}$",
                  "reason": "Rationalising the denominator: top and bottom are multiplied by $\\sqrt{k + 3} - \\sqrt{k}$."
                },
                {
                  "step": "$(\\sqrt{k + 3} + \\sqrt{k})(\\sqrt{k + 3} - \\sqrt{k}) = (k + 3) - k$",
                  "reason": "Difference of squares $a^2-b^2=(a-b)(a+b)$, with the positive square root, from arithmetic: $(\\sqrt{k + 3})^2 = k + 3$ and $(\\sqrt{k})^2 = k$."
                },
                {
                  "step": "$\\dfrac{1}{\\sqrt{k} + \\sqrt{k + 3}} = \\dfrac{\\sqrt{k + 3} - \\sqrt{k}}{3}$",
                  "reason": "Collecting like terms: $(k + 3) - k = 3$."
                },
                {
                  "step": "The sum is $\\dfrac{\\sqrt{52} - \\sqrt{49}}{3} + \\dfrac{\\sqrt{55} - \\sqrt{52}}{3} + \\dots + \\dfrac{\\sqrt{73} - \\sqrt{70}}{3}$.",
                  "reason": "Substituting a value: by line 5, with its own value of $k$ in each term."
                },
                {
                  "step": "The sum is $\\dfrac{1}{3}\\left(\\sqrt{52} - \\sqrt{49} + \\sqrt{55} - \\sqrt{52} + \\dots + \\sqrt{73} - \\sqrt{70}\\right)$.",
                  "reason": "The distributive law, from arithmetic: the common factor $\\dfrac{1}{3}$ is taken out."
                },
                {
                  "step": "The sum is $\\dfrac{1}{3}\\left(\\sqrt{73} - \\sqrt{49}\\right)$.",
                  "reason": "Telescoping sum: each root taken away is added back in the next term, so every root but the first taken away and the last added cancels."
                },
                {
                  "step": "$\\sqrt{49} = 7$",
                  "reason": "Positive square root, from arithmetic: $7^2 = 49$."
                },
                {
                  "step": "The sum is $\\dfrac{\\sqrt{73} - 7}{3}$.",
                  "reason": "The product formula, from arithmetic, with line 9."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\dfrac{1}{\\sqrt{9} + \\sqrt{11}} + \\dfrac{1}{\\sqrt{11} + \\sqrt{13}} + \\dfrac{1}{\\sqrt{13} + \\sqrt{15}} + \\dots + \\dfrac{1}{\\sqrt{45} + \\sqrt{47}}$.",
              "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
              "answer": "(sqrt(47)-3)/2",
              "lines": [
                {
                  "step": "Evaluate $\\dfrac{1}{\\sqrt{9} + \\sqrt{11}} + \\dfrac{1}{\\sqrt{11} + \\sqrt{13}} + \\dfrac{1}{\\sqrt{13} + \\sqrt{15}} + \\dots + \\dfrac{1}{\\sqrt{45} + \\sqrt{47}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each term is $\\dfrac{1}{\\sqrt{k} + \\sqrt{k + 2}}$, for $k = 9, 11, \\dots, 45$.",
                  "reason": "Arithmetic sequence: the numbers under the first roots go up by the common difference $2$, and each number under the second root is the first plus $2$."
                },
                {
                  "step": "$\\dfrac{1}{\\sqrt{k} + \\sqrt{k + 2}} = \\dfrac{\\sqrt{k + 2} - \\sqrt{k}}{(\\sqrt{k + 2} + \\sqrt{k})(\\sqrt{k + 2} - \\sqrt{k})}$",
                  "reason": "Rationalising the denominator: top and bottom are multiplied by $\\sqrt{k + 2} - \\sqrt{k}$."
                },
                {
                  "step": "$(\\sqrt{k + 2} + \\sqrt{k})(\\sqrt{k + 2} - \\sqrt{k}) = (k + 2) - k$",
                  "reason": "Difference of squares $a^2-b^2=(a-b)(a+b)$, with the positive square root, from arithmetic: $(\\sqrt{k + 2})^2 = k + 2$ and $(\\sqrt{k})^2 = k$."
                },
                {
                  "step": "$\\dfrac{1}{\\sqrt{k} + \\sqrt{k + 2}} = \\dfrac{\\sqrt{k + 2} - \\sqrt{k}}{2}$",
                  "reason": "Collecting like terms: $(k + 2) - k = 2$."
                },
                {
                  "step": "The sum is $\\dfrac{\\sqrt{11} - \\sqrt{9}}{2} + \\dfrac{\\sqrt{13} - \\sqrt{11}}{2} + \\dots + \\dfrac{\\sqrt{47} - \\sqrt{45}}{2}$.",
                  "reason": "Substituting a value: by line 5, with its own value of $k$ in each term."
                },
                {
                  "step": "The sum is $\\dfrac{1}{2}\\left(\\sqrt{11} - \\sqrt{9} + \\sqrt{13} - \\sqrt{11} + \\dots + \\sqrt{47} - \\sqrt{45}\\right)$.",
                  "reason": "The distributive law, from arithmetic: the common factor $\\dfrac{1}{2}$ is taken out."
                },
                {
                  "step": "The sum is $\\dfrac{1}{2}\\left(\\sqrt{47} - \\sqrt{9}\\right)$.",
                  "reason": "Telescoping sum: each root taken away is added back in the next term, so every root but the first taken away and the last added cancels."
                },
                {
                  "step": "$\\sqrt{9} = 3$",
                  "reason": "Positive square root, from arithmetic: $3^2 = 9$."
                },
                {
                  "step": "The sum is $\\dfrac{\\sqrt{47} - 3}{2}$.",
                  "reason": "The product formula, from arithmetic, with line 9."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\dfrac{1}{\\sqrt{9} + \\sqrt{17}} + \\dfrac{1}{\\sqrt{17} + \\sqrt{25}} + \\dfrac{1}{\\sqrt{25} + \\sqrt{33}} + \\dots + \\dfrac{1}{\\sqrt{193} + \\sqrt{201}}$.",
              "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
              "answer": "(sqrt(201)-3)/8",
              "lines": [
                {
                  "step": "Evaluate $\\dfrac{1}{\\sqrt{9} + \\sqrt{17}} + \\dfrac{1}{\\sqrt{17} + \\sqrt{25}} + \\dfrac{1}{\\sqrt{25} + \\sqrt{33}} + \\dots + \\dfrac{1}{\\sqrt{193} + \\sqrt{201}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each term is $\\dfrac{1}{\\sqrt{k} + \\sqrt{k + 8}}$, for $k = 9, 17, \\dots, 193$.",
                  "reason": "Arithmetic sequence: the numbers under the first roots go up by the common difference $8$, and each number under the second root is the first plus $8$."
                },
                {
                  "step": "$\\dfrac{1}{\\sqrt{k} + \\sqrt{k + 8}} = \\dfrac{\\sqrt{k + 8} - \\sqrt{k}}{(\\sqrt{k + 8} + \\sqrt{k})(\\sqrt{k + 8} - \\sqrt{k})}$",
                  "reason": "Rationalising the denominator: top and bottom are multiplied by $\\sqrt{k + 8} - \\sqrt{k}$."
                },
                {
                  "step": "$(\\sqrt{k + 8} + \\sqrt{k})(\\sqrt{k + 8} - \\sqrt{k}) = (k + 8) - k$",
                  "reason": "Difference of squares $a^2-b^2=(a-b)(a+b)$, with the positive square root, from arithmetic: $(\\sqrt{k + 8})^2 = k + 8$ and $(\\sqrt{k})^2 = k$."
                },
                {
                  "step": "$\\dfrac{1}{\\sqrt{k} + \\sqrt{k + 8}} = \\dfrac{\\sqrt{k + 8} - \\sqrt{k}}{8}$",
                  "reason": "Collecting like terms: $(k + 8) - k = 8$."
                },
                {
                  "step": "The sum is $\\dfrac{\\sqrt{17} - \\sqrt{9}}{8} + \\dfrac{\\sqrt{25} - \\sqrt{17}}{8} + \\dots + \\dfrac{\\sqrt{201} - \\sqrt{193}}{8}$.",
                  "reason": "Substituting a value: by line 5, with its own value of $k$ in each term."
                },
                {
                  "step": "The sum is $\\dfrac{1}{8}\\left(\\sqrt{17} - \\sqrt{9} + \\sqrt{25} - \\sqrt{17} + \\dots + \\sqrt{201} - \\sqrt{193}\\right)$.",
                  "reason": "The distributive law, from arithmetic: the common factor $\\dfrac{1}{8}$ is taken out."
                },
                {
                  "step": "The sum is $\\dfrac{1}{8}\\left(\\sqrt{201} - \\sqrt{9}\\right)$.",
                  "reason": "Telescoping sum: each root taken away is added back in the next term, so every root but the first taken away and the last added cancels."
                },
                {
                  "step": "$\\sqrt{9} = 3$",
                  "reason": "Positive square root, from arithmetic: $3^2 = 9$."
                },
                {
                  "step": "The sum is $\\dfrac{\\sqrt{201} - 3}{8}$.",
                  "reason": "The product formula, from arithmetic, with line 9."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t182-k2",
      "forms": [
        {
          "example": {
            "problem": "Evaluate $\\dfrac{11}{6} \\cdot \\dfrac{16}{11} \\cdot \\dfrac{21}{16} \\cdots \\dfrac{36}{31}$.",
            "lines": [
              {
                "step": "Evaluate $\\dfrac{11}{6} \\cdot \\dfrac{16}{11} \\cdot \\dfrac{21}{16} \\cdots \\dfrac{36}{31}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The product is $\\dfrac{11 \\cdot 16 \\cdot 21 \\cdots 36}{6 \\cdot 11 \\cdot 16 \\cdots 31}$.",
                "reason": "The product formula, from arithmetic: the tops multiply and the bottoms multiply."
              },
              {
                "step": "The product is $\\dfrac{36}{6}$.",
                "reason": "Telescoping product: each top from $11$ to $31$ is also a bottom, and cancelling a common factor removes it, so the last top and the first bottom are left."
              },
              {
                "step": "$\\dfrac{36}{6} = 6$",
                "reason": "Cancelling a common factor: $6$ divides the top and the bottom."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\dfrac{8}{6} \\cdot \\dfrac{10}{8} \\cdot \\dfrac{12}{10} \\cdots \\dfrac{24}{22}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "4",
              "lines": [
                {
                  "step": "Evaluate $\\dfrac{8}{6} \\cdot \\dfrac{10}{8} \\cdot \\dfrac{12}{10} \\cdots \\dfrac{24}{22}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The product is $\\dfrac{8 \\cdot 10 \\cdot 12 \\cdots 24}{6 \\cdot 8 \\cdot 10 \\cdots 22}$.",
                  "reason": "The product formula, from arithmetic: the tops multiply and the bottoms multiply."
                },
                {
                  "step": "The product is $\\dfrac{24}{6}$.",
                  "reason": "Telescoping product: each top from $8$ to $22$ is also a bottom, and cancelling a common factor removes it, so the last top and the first bottom are left."
                },
                {
                  "step": "$\\dfrac{24}{6} = 4$",
                  "reason": "Cancelling a common factor: $6$ divides the top and the bottom."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\dfrac{22}{14} \\cdot \\dfrac{30}{22} \\cdot \\dfrac{38}{30} \\cdots \\dfrac{134}{126}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "67/7",
              "lines": [
                {
                  "step": "Evaluate $\\dfrac{22}{14} \\cdot \\dfrac{30}{22} \\cdot \\dfrac{38}{30} \\cdots \\dfrac{134}{126}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The product is $\\dfrac{22 \\cdot 30 \\cdot 38 \\cdots 134}{14 \\cdot 22 \\cdot 30 \\cdots 126}$.",
                  "reason": "The product formula, from arithmetic: the tops multiply and the bottoms multiply."
                },
                {
                  "step": "The product is $\\dfrac{134}{14}$.",
                  "reason": "Telescoping product: each top from $22$ to $126$ is also a bottom, and cancelling a common factor removes it, so the last top and the first bottom are left."
                },
                {
                  "step": "$\\dfrac{134}{14} = \\dfrac{67}{7}$",
                  "reason": "Cancelling a common factor: $2$ divides the top and the bottom."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\dfrac{22}{18} \\cdot \\dfrac{26}{22} \\cdot \\dfrac{30}{26} \\cdots \\dfrac{54}{50}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "3",
              "lines": [
                {
                  "step": "Evaluate $\\dfrac{22}{18} \\cdot \\dfrac{26}{22} \\cdot \\dfrac{30}{26} \\cdots \\dfrac{54}{50}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The product is $\\dfrac{22 \\cdot 26 \\cdot 30 \\cdots 54}{18 \\cdot 22 \\cdot 26 \\cdots 50}$.",
                  "reason": "The product formula, from arithmetic: the tops multiply and the bottoms multiply."
                },
                {
                  "step": "The product is $\\dfrac{54}{18}$.",
                  "reason": "Telescoping product: each top from $22$ to $50$ is also a bottom, and cancelling a common factor removes it, so the last top and the first bottom are left."
                },
                {
                  "step": "$\\dfrac{54}{18} = 3$",
                  "reason": "Cancelling a common factor: $18$ divides the top and the bottom."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\left(1 - \\dfrac{6}{8}\\right)\\left(1 - \\dfrac{6}{14}\\right)\\left(1 - \\dfrac{6}{20}\\right) \\cdots \\left(1 - \\dfrac{6}{38}\\right)$.",
            "lines": [
              {
                "step": "Evaluate $\\left(1 - \\dfrac{6}{8}\\right)\\left(1 - \\dfrac{6}{14}\\right)\\left(1 - \\dfrac{6}{20}\\right) \\cdots \\left(1 - \\dfrac{6}{38}\\right)$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Each factor is $1 - \\dfrac{6}{k}$, for $k = 8, 14, \\dots, 38$.",
                "reason": "Arithmetic sequence: the bottoms go up by the common difference $6$, and each top is $6$."
              },
              {
                "step": "$1 - \\dfrac{6}{k} = \\dfrac{k - 6}{k}$",
                "reason": "The general subtraction formula, from arithmetic: $1 = \\dfrac{k}{k}$."
              },
              {
                "step": "The product is $\\dfrac{2}{8} \\cdot \\dfrac{8}{14} \\cdot \\dfrac{14}{20} \\cdots \\dfrac{32}{38}$.",
                "reason": "Substituting a value: by line 3, with its own value of $k$ in each factor."
              },
              {
                "step": "The product is $\\dfrac{2 \\cdot 8 \\cdot 14 \\cdots 32}{8 \\cdot 14 \\cdot 20 \\cdots 38}$.",
                "reason": "The product formula, from arithmetic: the tops multiply and the bottoms multiply."
              },
              {
                "step": "The product is $\\dfrac{2}{38}$.",
                "reason": "Telescoping product: each top from $8$ to $32$ is also a bottom, and cancelling a common factor removes it, so the first top and the last bottom are left."
              },
              {
                "step": "$\\dfrac{2}{38} = \\dfrac{1}{19}$",
                "reason": "Cancelling a common factor: $2$ divides the top and the bottom."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\left(1 - \\dfrac{4}{10}\\right)\\left(1 - \\dfrac{4}{14}\\right)\\left(1 - \\dfrac{4}{18}\\right) \\cdots \\left(1 - \\dfrac{4}{74}\\right)$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "3/37",
              "lines": [
                {
                  "step": "Evaluate $\\left(1 - \\dfrac{4}{10}\\right)\\left(1 - \\dfrac{4}{14}\\right)\\left(1 - \\dfrac{4}{18}\\right) \\cdots \\left(1 - \\dfrac{4}{74}\\right)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each factor is $1 - \\dfrac{4}{k}$, for $k = 10, 14, \\dots, 74$.",
                  "reason": "Arithmetic sequence: the bottoms go up by the common difference $4$, and each top is $4$."
                },
                {
                  "step": "$1 - \\dfrac{4}{k} = \\dfrac{k - 4}{k}$",
                  "reason": "The general subtraction formula, from arithmetic: $1 = \\dfrac{k}{k}$."
                },
                {
                  "step": "The product is $\\dfrac{6}{10} \\cdot \\dfrac{10}{14} \\cdot \\dfrac{14}{18} \\cdots \\dfrac{70}{74}$.",
                  "reason": "Substituting a value: by line 3, with its own value of $k$ in each factor."
                },
                {
                  "step": "The product is $\\dfrac{6 \\cdot 10 \\cdot 14 \\cdots 70}{10 \\cdot 14 \\cdot 18 \\cdots 74}$.",
                  "reason": "The product formula, from arithmetic: the tops multiply and the bottoms multiply."
                },
                {
                  "step": "The product is $\\dfrac{6}{74}$.",
                  "reason": "Telescoping product: each top from $10$ to $70$ is also a bottom, and cancelling a common factor removes it, so the first top and the last bottom are left."
                },
                {
                  "step": "$\\dfrac{6}{74} = \\dfrac{3}{37}$",
                  "reason": "Cancelling a common factor: $2$ divides the top and the bottom."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\left(1 - \\dfrac{7}{27}\\right)\\left(1 - \\dfrac{7}{34}\\right)\\left(1 - \\dfrac{7}{41}\\right) \\cdots \\left(1 - \\dfrac{7}{76}\\right)$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "5/19",
              "lines": [
                {
                  "step": "Evaluate $\\left(1 - \\dfrac{7}{27}\\right)\\left(1 - \\dfrac{7}{34}\\right)\\left(1 - \\dfrac{7}{41}\\right) \\cdots \\left(1 - \\dfrac{7}{76}\\right)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each factor is $1 - \\dfrac{7}{k}$, for $k = 27, 34, \\dots, 76$.",
                  "reason": "Arithmetic sequence: the bottoms go up by the common difference $7$, and each top is $7$."
                },
                {
                  "step": "$1 - \\dfrac{7}{k} = \\dfrac{k - 7}{k}$",
                  "reason": "The general subtraction formula, from arithmetic: $1 = \\dfrac{k}{k}$."
                },
                {
                  "step": "The product is $\\dfrac{20}{27} \\cdot \\dfrac{27}{34} \\cdot \\dfrac{34}{41} \\cdots \\dfrac{69}{76}$.",
                  "reason": "Substituting a value: by line 3, with its own value of $k$ in each factor."
                },
                {
                  "step": "The product is $\\dfrac{20 \\cdot 27 \\cdot 34 \\cdots 69}{27 \\cdot 34 \\cdot 41 \\cdots 76}$.",
                  "reason": "The product formula, from arithmetic: the tops multiply and the bottoms multiply."
                },
                {
                  "step": "The product is $\\dfrac{20}{76}$.",
                  "reason": "Telescoping product: each top from $27$ to $69$ is also a bottom, and cancelling a common factor removes it, so the first top and the last bottom are left."
                },
                {
                  "step": "$\\dfrac{20}{76} = \\dfrac{5}{19}$",
                  "reason": "Cancelling a common factor: $4$ divides the top and the bottom."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\left(1 - \\dfrac{3}{30}\\right)\\left(1 - \\dfrac{3}{33}\\right)\\left(1 - \\dfrac{3}{36}\\right) \\cdots \\left(1 - \\dfrac{3}{57}\\right)$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "9/19",
              "lines": [
                {
                  "step": "Evaluate $\\left(1 - \\dfrac{3}{30}\\right)\\left(1 - \\dfrac{3}{33}\\right)\\left(1 - \\dfrac{3}{36}\\right) \\cdots \\left(1 - \\dfrac{3}{57}\\right)$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each factor is $1 - \\dfrac{3}{k}$, for $k = 30, 33, \\dots, 57$.",
                  "reason": "Arithmetic sequence: the bottoms go up by the common difference $3$, and each top is $3$."
                },
                {
                  "step": "$1 - \\dfrac{3}{k} = \\dfrac{k - 3}{k}$",
                  "reason": "The general subtraction formula, from arithmetic: $1 = \\dfrac{k}{k}$."
                },
                {
                  "step": "The product is $\\dfrac{27}{30} \\cdot \\dfrac{30}{33} \\cdot \\dfrac{33}{36} \\cdots \\dfrac{54}{57}$.",
                  "reason": "Substituting a value: by line 3, with its own value of $k$ in each factor."
                },
                {
                  "step": "The product is $\\dfrac{27 \\cdot 30 \\cdot 33 \\cdots 54}{30 \\cdot 33 \\cdot 36 \\cdots 57}$.",
                  "reason": "The product formula, from arithmetic: the tops multiply and the bottoms multiply."
                },
                {
                  "step": "The product is $\\dfrac{27}{57}$.",
                  "reason": "Telescoping product: each top from $30$ to $54$ is also a bottom, and cancelling a common factor removes it, so the first top and the last bottom are left."
                },
                {
                  "step": "$\\dfrac{27}{57} = \\dfrac{9}{19}$",
                  "reason": "Cancelling a common factor: $3$ divides the top and the bottom."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\dfrac{7^2 - 4}{7^2} \\cdot \\dfrac{8^2 - 4}{8^2} \\cdot \\dfrac{9^2 - 4}{9^2} \\cdots \\dfrac{35^2 - 4}{35^2}$.",
            "lines": [
              {
                "step": "Evaluate $\\dfrac{7^2 - 4}{7^2} \\cdot \\dfrac{8^2 - 4}{8^2} \\cdot \\dfrac{9^2 - 4}{9^2} \\cdots \\dfrac{35^2 - 4}{35^2}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Each factor is $\\dfrac{k^2 - 4}{k^2}$, for $k = 7, 8, \\dots, 35$.",
                "reason": "Arithmetic sequence: the numbers squared go up by the common difference $1$, and each top takes $4$ from the bottom."
              },
              {
                "step": "$\\dfrac{k^2 - 4}{k^2} = \\dfrac{(k - 2)(k + 2)}{k \\cdot k}$",
                "reason": "Difference of squares $a^2-b^2=(a-b)(a+b)$: $4 = 2^2$."
              },
              {
                "step": "$\\dfrac{(k - 2)(k + 2)}{k \\cdot k} = \\dfrac{k - 2}{k} \\cdot \\dfrac{k + 2}{k}$",
                "reason": "The product formula, from arithmetic, read from right to left."
              },
              {
                "step": "The product is $\\left(\\dfrac{5}{7} \\cdot \\dfrac{6}{8} \\cdot \\dfrac{7}{9} \\cdots \\dfrac{33}{35}\\right)\\left(\\dfrac{9}{7} \\cdot \\dfrac{10}{8} \\cdot \\dfrac{11}{9} \\cdots \\dfrac{37}{35}\\right)$.",
                "reason": "The commutative and associative laws of multiplication, from arithmetic: the first parts of the factors are gathered, and so are the second parts."
              },
              {
                "step": "$\\dfrac{5}{7} \\cdot \\dfrac{6}{8} \\cdot \\dfrac{7}{9} \\cdots \\dfrac{33}{35} = \\dfrac{5 \\cdot 6}{34 \\cdot 35}$",
                "reason": "Telescoping product: each number from $7$ to $33$ is a top and a bottom and cancels, so the first tops and the last bottoms are left."
              },
              {
                "step": "$\\dfrac{9}{7} \\cdot \\dfrac{10}{8} \\cdot \\dfrac{11}{9} \\cdots \\dfrac{37}{35} = \\dfrac{36 \\cdot 37}{7 \\cdot 8}$",
                "reason": "Telescoping product: each number from $9$ to $35$ is a top and a bottom and cancels, so the last tops and the first bottoms are left."
              },
              {
                "step": "The product is $\\dfrac{5 \\cdot 6}{34 \\cdot 35} \\cdot \\dfrac{36 \\cdot 37}{7 \\cdot 8} = \\dfrac{999}{1666}$",
                "reason": "The product formula, from arithmetic, with cancelling a common factor."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\dfrac{6^2 - 1}{6^2} \\cdot \\dfrac{7^2 - 1}{7^2} \\cdot \\dfrac{8^2 - 1}{8^2} \\cdots \\dfrac{30^2 - 1}{30^2}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "31/36",
              "lines": [
                {
                  "step": "Evaluate $\\dfrac{6^2 - 1}{6^2} \\cdot \\dfrac{7^2 - 1}{7^2} \\cdot \\dfrac{8^2 - 1}{8^2} \\cdots \\dfrac{30^2 - 1}{30^2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each factor is $\\dfrac{k^2 - 1}{k^2}$, for $k = 6, 7, \\dots, 30$.",
                  "reason": "Arithmetic sequence: the numbers squared go up by the common difference $1$, and each top takes $1$ from the bottom."
                },
                {
                  "step": "$\\dfrac{k^2 - 1}{k^2} = \\dfrac{(k - 1)(k + 1)}{k \\cdot k}$",
                  "reason": "Difference of squares $a^2-b^2=(a-b)(a+b)$: $1 = 1^2$."
                },
                {
                  "step": "$\\dfrac{(k - 1)(k + 1)}{k \\cdot k} = \\dfrac{k - 1}{k} \\cdot \\dfrac{k + 1}{k}$",
                  "reason": "The product formula, from arithmetic, read from right to left."
                },
                {
                  "step": "The product is $\\left(\\dfrac{5}{6} \\cdot \\dfrac{6}{7} \\cdot \\dfrac{7}{8} \\cdots \\dfrac{29}{30}\\right)\\left(\\dfrac{7}{6} \\cdot \\dfrac{8}{7} \\cdot \\dfrac{9}{8} \\cdots \\dfrac{31}{30}\\right)$.",
                  "reason": "The commutative and associative laws of multiplication, from arithmetic: the first parts of the factors are gathered, and so are the second parts."
                },
                {
                  "step": "$\\dfrac{5}{6} \\cdot \\dfrac{6}{7} \\cdot \\dfrac{7}{8} \\cdots \\dfrac{29}{30} = \\dfrac{5}{30}$",
                  "reason": "Telescoping product: each number from $6$ to $29$ is a top and a bottom and cancels, so the first tops and the last bottoms are left."
                },
                {
                  "step": "$\\dfrac{7}{6} \\cdot \\dfrac{8}{7} \\cdot \\dfrac{9}{8} \\cdots \\dfrac{31}{30} = \\dfrac{31}{6}$",
                  "reason": "Telescoping product: each number from $7$ to $30$ is a top and a bottom and cancels, so the last tops and the first bottoms are left."
                },
                {
                  "step": "The product is $\\dfrac{5}{30} \\cdot \\dfrac{31}{6} = \\dfrac{31}{36}$",
                  "reason": "The product formula, from arithmetic, with cancelling a common factor."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\dfrac{10^2 - 9}{10^2} \\cdot \\dfrac{11^2 - 9}{11^2} \\cdot \\dfrac{12^2 - 9}{12^2} \\cdots \\dfrac{21^2 - 9}{21^2}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "276/475",
              "lines": [
                {
                  "step": "Evaluate $\\dfrac{10^2 - 9}{10^2} \\cdot \\dfrac{11^2 - 9}{11^2} \\cdot \\dfrac{12^2 - 9}{12^2} \\cdots \\dfrac{21^2 - 9}{21^2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each factor is $\\dfrac{k^2 - 9}{k^2}$, for $k = 10, 11, \\dots, 21$.",
                  "reason": "Arithmetic sequence: the numbers squared go up by the common difference $1$, and each top takes $9$ from the bottom."
                },
                {
                  "step": "$\\dfrac{k^2 - 9}{k^2} = \\dfrac{(k - 3)(k + 3)}{k \\cdot k}$",
                  "reason": "Difference of squares $a^2-b^2=(a-b)(a+b)$: $9 = 3^2$."
                },
                {
                  "step": "$\\dfrac{(k - 3)(k + 3)}{k \\cdot k} = \\dfrac{k - 3}{k} \\cdot \\dfrac{k + 3}{k}$",
                  "reason": "The product formula, from arithmetic, read from right to left."
                },
                {
                  "step": "The product is $\\left(\\dfrac{7}{10} \\cdot \\dfrac{8}{11} \\cdot \\dfrac{9}{12} \\cdots \\dfrac{18}{21}\\right)\\left(\\dfrac{13}{10} \\cdot \\dfrac{14}{11} \\cdot \\dfrac{15}{12} \\cdots \\dfrac{24}{21}\\right)$.",
                  "reason": "The commutative and associative laws of multiplication, from arithmetic: the first parts of the factors are gathered, and so are the second parts."
                },
                {
                  "step": "$\\dfrac{7}{10} \\cdot \\dfrac{8}{11} \\cdot \\dfrac{9}{12} \\cdots \\dfrac{18}{21} = \\dfrac{7 \\cdot 8 \\cdot 9}{19 \\cdot 20 \\cdot 21}$",
                  "reason": "Telescoping product: each number from $10$ to $18$ is a top and a bottom and cancels, so the first tops and the last bottoms are left."
                },
                {
                  "step": "$\\dfrac{13}{10} \\cdot \\dfrac{14}{11} \\cdot \\dfrac{15}{12} \\cdots \\dfrac{24}{21} = \\dfrac{22 \\cdot 23 \\cdot 24}{10 \\cdot 11 \\cdot 12}$",
                  "reason": "Telescoping product: each number from $13$ to $21$ is a top and a bottom and cancels, so the last tops and the first bottoms are left."
                },
                {
                  "step": "The product is $\\dfrac{7 \\cdot 8 \\cdot 9}{19 \\cdot 20 \\cdot 21} \\cdot \\dfrac{22 \\cdot 23 \\cdot 24}{10 \\cdot 11 \\cdot 12} = \\dfrac{276}{475}$",
                  "reason": "The product formula, from arithmetic, with cancelling a common factor."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\dfrac{4^2 - 9}{4^2} \\cdot \\dfrac{5^2 - 9}{5^2} \\cdot \\dfrac{6^2 - 9}{6^2} \\cdots \\dfrac{9^2 - 9}{9^2}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "11/84",
              "lines": [
                {
                  "step": "Evaluate $\\dfrac{4^2 - 9}{4^2} \\cdot \\dfrac{5^2 - 9}{5^2} \\cdot \\dfrac{6^2 - 9}{6^2} \\cdots \\dfrac{9^2 - 9}{9^2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each factor is $\\dfrac{k^2 - 9}{k^2}$, for $k = 4, 5, \\dots, 9$.",
                  "reason": "Arithmetic sequence: the numbers squared go up by the common difference $1$, and each top takes $9$ from the bottom."
                },
                {
                  "step": "$\\dfrac{k^2 - 9}{k^2} = \\dfrac{(k - 3)(k + 3)}{k \\cdot k}$",
                  "reason": "Difference of squares $a^2-b^2=(a-b)(a+b)$: $9 = 3^2$."
                },
                {
                  "step": "$\\dfrac{(k - 3)(k + 3)}{k \\cdot k} = \\dfrac{k - 3}{k} \\cdot \\dfrac{k + 3}{k}$",
                  "reason": "The product formula, from arithmetic, read from right to left."
                },
                {
                  "step": "The product is $\\left(\\dfrac{1}{4} \\cdot \\dfrac{2}{5} \\cdot \\dfrac{3}{6} \\cdots \\dfrac{6}{9}\\right)\\left(\\dfrac{7}{4} \\cdot \\dfrac{8}{5} \\cdot \\dfrac{9}{6} \\cdots \\dfrac{12}{9}\\right)$.",
                  "reason": "The commutative and associative laws of multiplication, from arithmetic: the first parts of the factors are gathered, and so are the second parts."
                },
                {
                  "step": "$\\dfrac{1}{4} \\cdot \\dfrac{2}{5} \\cdot \\dfrac{3}{6} \\cdots \\dfrac{6}{9} = \\dfrac{1 \\cdot 2 \\cdot 3}{7 \\cdot 8 \\cdot 9}$",
                  "reason": "Telescoping product: each number from $4$ to $6$ is a top and a bottom and cancels, so the first tops and the last bottoms are left."
                },
                {
                  "step": "$\\dfrac{7}{4} \\cdot \\dfrac{8}{5} \\cdot \\dfrac{9}{6} \\cdots \\dfrac{12}{9} = \\dfrac{10 \\cdot 11 \\cdot 12}{4 \\cdot 5 \\cdot 6}$",
                  "reason": "Telescoping product: each number from $7$ to $9$ is a top and a bottom and cancels, so the last tops and the first bottoms are left."
                },
                {
                  "step": "The product is $\\dfrac{1 \\cdot 2 \\cdot 3}{7 \\cdot 8 \\cdot 9} \\cdot \\dfrac{10 \\cdot 11 \\cdot 12}{4 \\cdot 5 \\cdot 6} = \\dfrac{11}{84}$",
                  "reason": "The product formula, from arithmetic, with cancelling a common factor."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $\\dfrac{5 \\cdot 13}{8^2} \\cdot \\dfrac{6 \\cdot 14}{9^2} \\cdot \\dfrac{7 \\cdot 15}{10^2} \\cdots \\dfrac{26 \\cdot 34}{29^2}$.",
            "lines": [
              {
                "step": "Evaluate $\\dfrac{5 \\cdot 13}{8^2} \\cdot \\dfrac{6 \\cdot 14}{9^2} \\cdot \\dfrac{7 \\cdot 15}{10^2} \\cdots \\dfrac{26 \\cdot 34}{29^2}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Each factor is $\\dfrac{k(k + 8)}{(k + 3)^2}$, for $k = 5, 6, \\dots, 26$.",
                "reason": "Arithmetic sequence: the first factors of the tops go up by the common difference $1$, and each second factor of a top is the first plus $8$, and each bottom is the square of the first factor plus $3$."
              },
              {
                "step": "$\\dfrac{k(k + 8)}{(k + 3)^2} = \\dfrac{k(k + 8)}{(k + 3)(k + 3)}$",
                "reason": "The definition of a power, from arithmetic: a square is a number times itself."
              },
              {
                "step": "$\\dfrac{k(k + 8)}{(k + 3)(k + 3)} = \\dfrac{k}{k + 3} \\cdot \\dfrac{k + 8}{k + 3}$",
                "reason": "The product formula, from arithmetic, read from right to left."
              },
              {
                "step": "The product is $\\left(\\dfrac{5}{8} \\cdot \\dfrac{6}{9} \\cdot \\dfrac{7}{10} \\cdots \\dfrac{26}{29}\\right)\\left(\\dfrac{13}{8} \\cdot \\dfrac{14}{9} \\cdot \\dfrac{15}{10} \\cdots \\dfrac{34}{29}\\right)$.",
                "reason": "The commutative and associative laws of multiplication, from arithmetic: the first parts of the factors are gathered, and so are the second parts."
              },
              {
                "step": "$\\dfrac{5}{8} \\cdot \\dfrac{6}{9} \\cdot \\dfrac{7}{10} \\cdots \\dfrac{26}{29} = \\dfrac{5 \\cdot 6 \\cdot 7}{27 \\cdot 28 \\cdot 29}$",
                "reason": "Telescoping product: each number from $8$ to $26$ is a top and a bottom and cancels, so the first tops and the last bottoms are left."
              },
              {
                "step": "$\\dfrac{13}{8} \\cdot \\dfrac{14}{9} \\cdot \\dfrac{15}{10} \\cdots \\dfrac{34}{29} = \\dfrac{30 \\cdot 31 \\cdot 32 \\cdot 33 \\cdot 34}{8 \\cdot 9 \\cdot 10 \\cdot 11 \\cdot 12}$",
                "reason": "Telescoping product: each number from $13$ to $29$ is a top and a bottom and cancels, so the last tops and the first bottoms are left."
              },
              {
                "step": "The product is $\\dfrac{5 \\cdot 6 \\cdot 7}{27 \\cdot 28 \\cdot 29} \\cdot \\dfrac{30 \\cdot 31 \\cdot 32 \\cdot 33 \\cdot 34}{8 \\cdot 9 \\cdot 10 \\cdot 11 \\cdot 12} = \\dfrac{2635}{783}$",
                "reason": "The product formula, from arithmetic, with cancelling a common factor."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $\\dfrac{4 \\cdot 11}{8^2} \\cdot \\dfrac{5 \\cdot 12}{9^2} \\cdot \\dfrac{6 \\cdot 13}{10^2} \\cdots \\dfrac{19 \\cdot 26}{23^2}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "65/759",
              "lines": [
                {
                  "step": "Evaluate $\\dfrac{4 \\cdot 11}{8^2} \\cdot \\dfrac{5 \\cdot 12}{9^2} \\cdot \\dfrac{6 \\cdot 13}{10^2} \\cdots \\dfrac{19 \\cdot 26}{23^2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each factor is $\\dfrac{k(k + 7)}{(k + 4)^2}$, for $k = 4, 5, \\dots, 19$.",
                  "reason": "Arithmetic sequence: the first factors of the tops go up by the common difference $1$, and each second factor of a top is the first plus $7$, and each bottom is the square of the first factor plus $4$."
                },
                {
                  "step": "$\\dfrac{k(k + 7)}{(k + 4)^2} = \\dfrac{k(k + 7)}{(k + 4)(k + 4)}$",
                  "reason": "The definition of a power, from arithmetic: a square is a number times itself."
                },
                {
                  "step": "$\\dfrac{k(k + 7)}{(k + 4)(k + 4)} = \\dfrac{k}{k + 4} \\cdot \\dfrac{k + 7}{k + 4}$",
                  "reason": "The product formula, from arithmetic, read from right to left."
                },
                {
                  "step": "The product is $\\left(\\dfrac{4}{8} \\cdot \\dfrac{5}{9} \\cdot \\dfrac{6}{10} \\cdots \\dfrac{19}{23}\\right)\\left(\\dfrac{11}{8} \\cdot \\dfrac{12}{9} \\cdot \\dfrac{13}{10} \\cdots \\dfrac{26}{23}\\right)$.",
                  "reason": "The commutative and associative laws of multiplication, from arithmetic: the first parts of the factors are gathered, and so are the second parts."
                },
                {
                  "step": "$\\dfrac{4}{8} \\cdot \\dfrac{5}{9} \\cdot \\dfrac{6}{10} \\cdots \\dfrac{19}{23} = \\dfrac{4 \\cdot 5 \\cdot 6 \\cdot 7}{20 \\cdot 21 \\cdot 22 \\cdot 23}$",
                  "reason": "Telescoping product: each number from $8$ to $19$ is a top and a bottom and cancels, so the first tops and the last bottoms are left."
                },
                {
                  "step": "$\\dfrac{11}{8} \\cdot \\dfrac{12}{9} \\cdot \\dfrac{13}{10} \\cdots \\dfrac{26}{23} = \\dfrac{24 \\cdot 25 \\cdot 26}{8 \\cdot 9 \\cdot 10}$",
                  "reason": "Telescoping product: each number from $11$ to $23$ is a top and a bottom and cancels, so the last tops and the first bottoms are left."
                },
                {
                  "step": "The product is $\\dfrac{4 \\cdot 5 \\cdot 6 \\cdot 7}{20 \\cdot 21 \\cdot 22 \\cdot 23} \\cdot \\dfrac{24 \\cdot 25 \\cdot 26}{8 \\cdot 9 \\cdot 10} = \\dfrac{65}{759}$",
                  "reason": "The product formula, from arithmetic, with cancelling a common factor."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\dfrac{12 \\cdot 17}{16^2} \\cdot \\dfrac{13 \\cdot 18}{17^2} \\cdot \\dfrac{14 \\cdot 19}{18^2} \\cdots \\dfrac{24 \\cdot 29}{28^2}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "29/240",
              "lines": [
                {
                  "step": "Evaluate $\\dfrac{12 \\cdot 17}{16^2} \\cdot \\dfrac{13 \\cdot 18}{17^2} \\cdot \\dfrac{14 \\cdot 19}{18^2} \\cdots \\dfrac{24 \\cdot 29}{28^2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each factor is $\\dfrac{k(k + 5)}{(k + 4)^2}$, for $k = 12, 13, \\dots, 24$.",
                  "reason": "Arithmetic sequence: the first factors of the tops go up by the common difference $1$, and each second factor of a top is the first plus $5$, and each bottom is the square of the first factor plus $4$."
                },
                {
                  "step": "$\\dfrac{k(k + 5)}{(k + 4)^2} = \\dfrac{k(k + 5)}{(k + 4)(k + 4)}$",
                  "reason": "The definition of a power, from arithmetic: a square is a number times itself."
                },
                {
                  "step": "$\\dfrac{k(k + 5)}{(k + 4)(k + 4)} = \\dfrac{k}{k + 4} \\cdot \\dfrac{k + 5}{k + 4}$",
                  "reason": "The product formula, from arithmetic, read from right to left."
                },
                {
                  "step": "The product is $\\left(\\dfrac{12}{16} \\cdot \\dfrac{13}{17} \\cdot \\dfrac{14}{18} \\cdots \\dfrac{24}{28}\\right)\\left(\\dfrac{17}{16} \\cdot \\dfrac{18}{17} \\cdot \\dfrac{19}{18} \\cdots \\dfrac{29}{28}\\right)$.",
                  "reason": "The commutative and associative laws of multiplication, from arithmetic: the first parts of the factors are gathered, and so are the second parts."
                },
                {
                  "step": "$\\dfrac{12}{16} \\cdot \\dfrac{13}{17} \\cdot \\dfrac{14}{18} \\cdots \\dfrac{24}{28} = \\dfrac{12 \\cdot 13 \\cdot 14 \\cdot 15}{25 \\cdot 26 \\cdot 27 \\cdot 28}$",
                  "reason": "Telescoping product: each number from $16$ to $24$ is a top and a bottom and cancels, so the first tops and the last bottoms are left."
                },
                {
                  "step": "$\\dfrac{17}{16} \\cdot \\dfrac{18}{17} \\cdot \\dfrac{19}{18} \\cdots \\dfrac{29}{28} = \\dfrac{29}{16}$",
                  "reason": "Telescoping product: each number from $17$ to $28$ is a top and a bottom and cancels, so the last tops and the first bottoms are left."
                },
                {
                  "step": "The product is $\\dfrac{12 \\cdot 13 \\cdot 14 \\cdot 15}{25 \\cdot 26 \\cdot 27 \\cdot 28} \\cdot \\dfrac{29}{16} = \\dfrac{29}{240}$",
                  "reason": "The product formula, from arithmetic, with cancelling a common factor."
                }
              ]
            },
            {
              "prompt": "Evaluate $\\dfrac{11 \\cdot 19}{13^2} \\cdot \\dfrac{12 \\cdot 20}{14^2} \\cdot \\dfrac{13 \\cdot 21}{15^2} \\cdots \\dfrac{31 \\cdot 39}{33^2}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "703/32",
              "lines": [
                {
                  "step": "Evaluate $\\dfrac{11 \\cdot 19}{13^2} \\cdot \\dfrac{12 \\cdot 20}{14^2} \\cdot \\dfrac{13 \\cdot 21}{15^2} \\cdots \\dfrac{31 \\cdot 39}{33^2}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each factor is $\\dfrac{k(k + 8)}{(k + 2)^2}$, for $k = 11, 12, \\dots, 31$.",
                  "reason": "Arithmetic sequence: the first factors of the tops go up by the common difference $1$, and each second factor of a top is the first plus $8$, and each bottom is the square of the first factor plus $2$."
                },
                {
                  "step": "$\\dfrac{k(k + 8)}{(k + 2)^2} = \\dfrac{k(k + 8)}{(k + 2)(k + 2)}$",
                  "reason": "The definition of a power, from arithmetic: a square is a number times itself."
                },
                {
                  "step": "$\\dfrac{k(k + 8)}{(k + 2)(k + 2)} = \\dfrac{k}{k + 2} \\cdot \\dfrac{k + 8}{k + 2}$",
                  "reason": "The product formula, from arithmetic, read from right to left."
                },
                {
                  "step": "The product is $\\left(\\dfrac{11}{13} \\cdot \\dfrac{12}{14} \\cdot \\dfrac{13}{15} \\cdots \\dfrac{31}{33}\\right)\\left(\\dfrac{19}{13} \\cdot \\dfrac{20}{14} \\cdot \\dfrac{21}{15} \\cdots \\dfrac{39}{33}\\right)$.",
                  "reason": "The commutative and associative laws of multiplication, from arithmetic: the first parts of the factors are gathered, and so are the second parts."
                },
                {
                  "step": "$\\dfrac{11}{13} \\cdot \\dfrac{12}{14} \\cdot \\dfrac{13}{15} \\cdots \\dfrac{31}{33} = \\dfrac{11 \\cdot 12}{32 \\cdot 33}$",
                  "reason": "Telescoping product: each number from $13$ to $31$ is a top and a bottom and cancels, so the first tops and the last bottoms are left."
                },
                {
                  "step": "$\\dfrac{19}{13} \\cdot \\dfrac{20}{14} \\cdot \\dfrac{21}{15} \\cdots \\dfrac{39}{33} = \\dfrac{34 \\cdot 35 \\cdot 36 \\cdot 37 \\cdot 38 \\cdot 39}{13 \\cdot 14 \\cdot 15 \\cdot 16 \\cdot 17 \\cdot 18}$",
                  "reason": "Telescoping product: each number from $19$ to $33$ is a top and a bottom and cancels, so the last tops and the first bottoms are left."
                },
                {
                  "step": "The product is $\\dfrac{11 \\cdot 12}{32 \\cdot 33} \\cdot \\dfrac{34 \\cdot 35 \\cdot 36 \\cdot 37 \\cdot 38 \\cdot 39}{13 \\cdot 14 \\cdot 15 \\cdot 16 \\cdot 17 \\cdot 18} = \\dfrac{703}{32}$",
                  "reason": "The product formula, from arithmetic, with cancelling a common factor."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t182-k3",
      "forms": [
        {
          "example": {
            "problem": "Find the sum of the infinite series $\\dfrac{13}{24 \\cdot 29} + \\dfrac{13}{29 \\cdot 34} + \\dfrac{13}{34 \\cdot 39} + \\dots$.",
            "lines": [
              {
                "step": "Find the sum of the infinite series $\\dfrac{13}{24 \\cdot 29} + \\dfrac{13}{29 \\cdot 34} + \\dfrac{13}{34 \\cdot 39} + \\dots$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Each term is $\\dfrac{13}{m(m + 5)}$, for $m = 24, 29, 34, \\dots$",
                "reason": "Arithmetic sequence: the first factors of the bottoms go up by the common difference $5$, and each second factor is its first factor plus $5$."
              },
              {
                "step": "$\\dfrac{13}{m(m + 5)} = \\dfrac{a}{m} + \\dfrac{b}{m + 5}$",
                "reason": "Partial fractions: the bottom is the product of the two linear factors $m$ and $m + 5$."
              },
              {
                "step": "$13 = a(m + 5) + bm$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $m(m + 5)$."
              },
              {
                "step": "$a = \\dfrac{13}{5}$",
                "reason": "Finding the constants by equal coefficients or by putting in the roots: $m = 0$ gives $13 = 5a$."
              },
              {
                "step": "$b = -\\dfrac{13}{5}$",
                "reason": "Finding the constants by equal coefficients or by putting in the roots: $m = -5$ gives $13 = -5b$."
              },
              {
                "step": "The $n$th first factor is $24 + 5(n - 1)$.",
                "reason": "The $n$th term $a+(n-1)d$: the first factors have first term $24$ and common difference $5$."
              },
              {
                "step": "$24 + 5(n - 1) = 5n + 19$",
                "reason": "Multiplying out and collecting like terms: $5(n - 1) = 5n - 5$."
              },
              {
                "step": "The sum of the first $n$ terms is $\\dfrac{13}{5}\\left(\\dfrac{1}{24} - \\dfrac{1}{29}\\right) + \\dfrac{13}{5}\\left(\\dfrac{1}{29} - \\dfrac{1}{34}\\right) + \\dots + \\dfrac{13}{5}\\left(\\dfrac{1}{5n + 19} - \\dfrac{1}{5n + 24}\\right)$.",
                "reason": "Substituting a value: by lines 3, 5 and 6, each term is $\\dfrac{13}{5}\\left(\\dfrac{1}{m} - \\dfrac{1}{m + 5}\\right)$, with its own value of $m$, and the last first factor is $5n + 19$ by line 8."
              },
              {
                "step": "The sum of the first $n$ terms is $\\dfrac{13}{5}\\left(\\dfrac{1}{24} - \\dfrac{1}{29} + \\dfrac{1}{29} - \\dots + \\dfrac{1}{5n + 19} - \\dfrac{1}{5n + 24}\\right)$.",
                "reason": "The distributive law, from arithmetic: the common factor $\\dfrac{13}{5}$ is taken out."
              },
              {
                "step": "The sum of the first $n$ terms is $\\dfrac{13}{5}\\left(\\dfrac{1}{24} - \\dfrac{1}{5n + 24}\\right)$.",
                "reason": "Telescoping sum: each fraction taken away is added back in the next bracket, so every fraction but the first and the last cancels."
              },
              {
                "step": "As $n$ grows, $\\dfrac{1}{5n + 24}$ has limit $0$.",
                "reason": "The definition of the limit of a sequence, from arithmetic: for a positive number $\\varepsilon$, the number $\\dfrac{1}{5n + 24}$ lies within $\\varepsilon$ of $0$ once $5n + 24$ is above $\\dfrac{1}{\\varepsilon}$."
              },
              {
                "step": "The partial sums have limit $\\dfrac{13}{5}\\left(\\dfrac{1}{24} - 0\\right) = \\dfrac{13}{120}$.",
                "reason": "A limit passes through sums, products and quotients: a fixed number minus a number with limit $0$, times the fixed number $\\dfrac{13}{5}$."
              },
              {
                "step": "The sum of the series is $\\dfrac{13}{120}$.",
                "reason": "Sum of an infinite collapsing series: the sum is the limit of its partial sums, found in line 13."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the sum of the infinite series $\\dfrac{15}{22 \\cdot 26} + \\dfrac{15}{26 \\cdot 30} + \\dfrac{15}{30 \\cdot 34} + \\dots$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "15/88",
              "lines": [
                {
                  "step": "Find the sum of the infinite series $\\dfrac{15}{22 \\cdot 26} + \\dfrac{15}{26 \\cdot 30} + \\dfrac{15}{30 \\cdot 34} + \\dots$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each term is $\\dfrac{15}{m(m + 4)}$, for $m = 22, 26, 30, \\dots$",
                  "reason": "Arithmetic sequence: the first factors of the bottoms go up by the common difference $4$, and each second factor is its first factor plus $4$."
                },
                {
                  "step": "$\\dfrac{15}{m(m + 4)} = \\dfrac{a}{m} + \\dfrac{b}{m + 4}$",
                  "reason": "Partial fractions: the bottom is the product of the two linear factors $m$ and $m + 4$."
                },
                {
                  "step": "$15 = a(m + 4) + bm$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $m(m + 4)$."
                },
                {
                  "step": "$a = \\dfrac{15}{4}$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $m = 0$ gives $15 = 4a$."
                },
                {
                  "step": "$b = -\\dfrac{15}{4}$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $m = -4$ gives $15 = -4b$."
                },
                {
                  "step": "The $n$th first factor is $22 + 4(n - 1)$.",
                  "reason": "The $n$th term $a+(n-1)d$: the first factors have first term $22$ and common difference $4$."
                },
                {
                  "step": "$22 + 4(n - 1) = 4n + 18$",
                  "reason": "Multiplying out and collecting like terms: $4(n - 1) = 4n - 4$."
                },
                {
                  "step": "The sum of the first $n$ terms is $\\dfrac{15}{4}\\left(\\dfrac{1}{22} - \\dfrac{1}{26}\\right) + \\dfrac{15}{4}\\left(\\dfrac{1}{26} - \\dfrac{1}{30}\\right) + \\dots + \\dfrac{15}{4}\\left(\\dfrac{1}{4n + 18} - \\dfrac{1}{4n + 22}\\right)$.",
                  "reason": "Substituting a value: by lines 3, 5 and 6, each term is $\\dfrac{15}{4}\\left(\\dfrac{1}{m} - \\dfrac{1}{m + 4}\\right)$, with its own value of $m$, and the last first factor is $4n + 18$ by line 8."
                },
                {
                  "step": "The sum of the first $n$ terms is $\\dfrac{15}{4}\\left(\\dfrac{1}{22} - \\dfrac{1}{26} + \\dfrac{1}{26} - \\dots + \\dfrac{1}{4n + 18} - \\dfrac{1}{4n + 22}\\right)$.",
                  "reason": "The distributive law, from arithmetic: the common factor $\\dfrac{15}{4}$ is taken out."
                },
                {
                  "step": "The sum of the first $n$ terms is $\\dfrac{15}{4}\\left(\\dfrac{1}{22} - \\dfrac{1}{4n + 22}\\right)$.",
                  "reason": "Telescoping sum: each fraction taken away is added back in the next bracket, so every fraction but the first and the last cancels."
                },
                {
                  "step": "As $n$ grows, $\\dfrac{1}{4n + 22}$ has limit $0$.",
                  "reason": "The definition of the limit of a sequence, from arithmetic: for a positive number $\\varepsilon$, the number $\\dfrac{1}{4n + 22}$ lies within $\\varepsilon$ of $0$ once $4n + 22$ is above $\\dfrac{1}{\\varepsilon}$."
                },
                {
                  "step": "The partial sums have limit $\\dfrac{15}{4}\\left(\\dfrac{1}{22} - 0\\right) = \\dfrac{15}{88}$.",
                  "reason": "A limit passes through sums, products and quotients: a fixed number minus a number with limit $0$, times the fixed number $\\dfrac{15}{4}$."
                },
                {
                  "step": "The sum of the series is $\\dfrac{15}{88}$.",
                  "reason": "Sum of an infinite collapsing series: the sum is the limit of its partial sums, found in line 13."
                }
              ]
            },
            {
              "prompt": "Find the sum of the infinite series $\\dfrac{9}{14 \\cdot 16} + \\dfrac{9}{16 \\cdot 18} + \\dfrac{9}{18 \\cdot 20} + \\dots$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "9/28",
              "lines": [
                {
                  "step": "Find the sum of the infinite series $\\dfrac{9}{14 \\cdot 16} + \\dfrac{9}{16 \\cdot 18} + \\dfrac{9}{18 \\cdot 20} + \\dots$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each term is $\\dfrac{9}{m(m + 2)}$, for $m = 14, 16, 18, \\dots$",
                  "reason": "Arithmetic sequence: the first factors of the bottoms go up by the common difference $2$, and each second factor is its first factor plus $2$."
                },
                {
                  "step": "$\\dfrac{9}{m(m + 2)} = \\dfrac{a}{m} + \\dfrac{b}{m + 2}$",
                  "reason": "Partial fractions: the bottom is the product of the two linear factors $m$ and $m + 2$."
                },
                {
                  "step": "$9 = a(m + 2) + bm$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $m(m + 2)$."
                },
                {
                  "step": "$a = \\dfrac{9}{2}$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $m = 0$ gives $9 = 2a$."
                },
                {
                  "step": "$b = -\\dfrac{9}{2}$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $m = -2$ gives $9 = -2b$."
                },
                {
                  "step": "The $n$th first factor is $14 + 2(n - 1)$.",
                  "reason": "The $n$th term $a+(n-1)d$: the first factors have first term $14$ and common difference $2$."
                },
                {
                  "step": "$14 + 2(n - 1) = 2n + 12$",
                  "reason": "Multiplying out and collecting like terms: $2(n - 1) = 2n - 2$."
                },
                {
                  "step": "The sum of the first $n$ terms is $\\dfrac{9}{2}\\left(\\dfrac{1}{14} - \\dfrac{1}{16}\\right) + \\dfrac{9}{2}\\left(\\dfrac{1}{16} - \\dfrac{1}{18}\\right) + \\dots + \\dfrac{9}{2}\\left(\\dfrac{1}{2n + 12} - \\dfrac{1}{2n + 14}\\right)$.",
                  "reason": "Substituting a value: by lines 3, 5 and 6, each term is $\\dfrac{9}{2}\\left(\\dfrac{1}{m} - \\dfrac{1}{m + 2}\\right)$, with its own value of $m$, and the last first factor is $2n + 12$ by line 8."
                },
                {
                  "step": "The sum of the first $n$ terms is $\\dfrac{9}{2}\\left(\\dfrac{1}{14} - \\dfrac{1}{16} + \\dfrac{1}{16} - \\dots + \\dfrac{1}{2n + 12} - \\dfrac{1}{2n + 14}\\right)$.",
                  "reason": "The distributive law, from arithmetic: the common factor $\\dfrac{9}{2}$ is taken out."
                },
                {
                  "step": "The sum of the first $n$ terms is $\\dfrac{9}{2}\\left(\\dfrac{1}{14} - \\dfrac{1}{2n + 14}\\right)$.",
                  "reason": "Telescoping sum: each fraction taken away is added back in the next bracket, so every fraction but the first and the last cancels."
                },
                {
                  "step": "As $n$ grows, $\\dfrac{1}{2n + 14}$ has limit $0$.",
                  "reason": "The definition of the limit of a sequence, from arithmetic: for a positive number $\\varepsilon$, the number $\\dfrac{1}{2n + 14}$ lies within $\\varepsilon$ of $0$ once $2n + 14$ is above $\\dfrac{1}{\\varepsilon}$."
                },
                {
                  "step": "The partial sums have limit $\\dfrac{9}{2}\\left(\\dfrac{1}{14} - 0\\right) = \\dfrac{9}{28}$.",
                  "reason": "A limit passes through sums, products and quotients: a fixed number minus a number with limit $0$, times the fixed number $\\dfrac{9}{2}$."
                },
                {
                  "step": "The sum of the series is $\\dfrac{9}{28}$.",
                  "reason": "Sum of an infinite collapsing series: the sum is the limit of its partial sums, found in line 13."
                }
              ]
            },
            {
              "prompt": "Find the sum of the infinite series $\\dfrac{12}{23 \\cdot 29} + \\dfrac{12}{29 \\cdot 35} + \\dfrac{12}{35 \\cdot 41} + \\dots$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "2/23",
              "lines": [
                {
                  "step": "Find the sum of the infinite series $\\dfrac{12}{23 \\cdot 29} + \\dfrac{12}{29 \\cdot 35} + \\dfrac{12}{35 \\cdot 41} + \\dots$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each term is $\\dfrac{12}{m(m + 6)}$, for $m = 23, 29, 35, \\dots$",
                  "reason": "Arithmetic sequence: the first factors of the bottoms go up by the common difference $6$, and each second factor is its first factor plus $6$."
                },
                {
                  "step": "$\\dfrac{12}{m(m + 6)} = \\dfrac{a}{m} + \\dfrac{b}{m + 6}$",
                  "reason": "Partial fractions: the bottom is the product of the two linear factors $m$ and $m + 6$."
                },
                {
                  "step": "$12 = a(m + 6) + bm$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $m(m + 6)$."
                },
                {
                  "step": "$a = 2$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $m = 0$ gives $12 = 6a$."
                },
                {
                  "step": "$b = -2$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $m = -6$ gives $12 = -6b$."
                },
                {
                  "step": "The $n$th first factor is $23 + 6(n - 1)$.",
                  "reason": "The $n$th term $a+(n-1)d$: the first factors have first term $23$ and common difference $6$."
                },
                {
                  "step": "$23 + 6(n - 1) = 6n + 17$",
                  "reason": "Multiplying out and collecting like terms: $6(n - 1) = 6n - 6$."
                },
                {
                  "step": "The sum of the first $n$ terms is $2\\left(\\dfrac{1}{23} - \\dfrac{1}{29}\\right) + 2\\left(\\dfrac{1}{29} - \\dfrac{1}{35}\\right) + \\dots + 2\\left(\\dfrac{1}{6n + 17} - \\dfrac{1}{6n + 23}\\right)$.",
                  "reason": "Substituting a value: by lines 3, 5 and 6, each term is $2\\left(\\dfrac{1}{m} - \\dfrac{1}{m + 6}\\right)$, with its own value of $m$, and the last first factor is $6n + 17$ by line 8."
                },
                {
                  "step": "The sum of the first $n$ terms is $2\\left(\\dfrac{1}{23} - \\dfrac{1}{29} + \\dfrac{1}{29} - \\dots + \\dfrac{1}{6n + 17} - \\dfrac{1}{6n + 23}\\right)$.",
                  "reason": "The distributive law, from arithmetic: the common factor $2$ is taken out."
                },
                {
                  "step": "The sum of the first $n$ terms is $2\\left(\\dfrac{1}{23} - \\dfrac{1}{6n + 23}\\right)$.",
                  "reason": "Telescoping sum: each fraction taken away is added back in the next bracket, so every fraction but the first and the last cancels."
                },
                {
                  "step": "As $n$ grows, $\\dfrac{1}{6n + 23}$ has limit $0$.",
                  "reason": "The definition of the limit of a sequence, from arithmetic: for a positive number $\\varepsilon$, the number $\\dfrac{1}{6n + 23}$ lies within $\\varepsilon$ of $0$ once $6n + 23$ is above $\\dfrac{1}{\\varepsilon}$."
                },
                {
                  "step": "The partial sums have limit $2\\left(\\dfrac{1}{23} - 0\\right) = \\dfrac{2}{23}$.",
                  "reason": "A limit passes through sums, products and quotients: a fixed number minus a number with limit $0$, times the fixed number $2$."
                },
                {
                  "step": "The sum of the series is $\\dfrac{2}{23}$.",
                  "reason": "Sum of an infinite collapsing series: the sum is the limit of its partial sums, found in line 13."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the sum of the infinite series $\\dfrac{18}{11 \\cdot 13} + \\dfrac{18}{12 \\cdot 14} + \\dfrac{18}{13 \\cdot 15} + \\dots$.",
            "lines": [
              {
                "step": "Find the sum of the infinite series $\\dfrac{18}{11 \\cdot 13} + \\dfrac{18}{12 \\cdot 14} + \\dfrac{18}{13 \\cdot 15} + \\dots$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Each term is $\\dfrac{18}{m(m + 2)}$, for $m = 11, 12, 13, \\dots$",
                "reason": "Arithmetic sequence: the first factors of the bottoms go up by the common difference $1$, and each second factor is its first factor plus $2$."
              },
              {
                "step": "$\\dfrac{18}{m(m + 2)} = \\dfrac{a}{m} + \\dfrac{b}{m + 2}$",
                "reason": "Partial fractions: the bottom is the product of the two linear factors $m$ and $m + 2$."
              },
              {
                "step": "$18 = a(m + 2) + bm$",
                "reason": "Multiplying both sides by the same number: both sides are multiplied by $m(m + 2)$."
              },
              {
                "step": "$a = 9$",
                "reason": "Finding the constants by equal coefficients or by putting in the roots: $m = 0$ gives $18 = 2a$."
              },
              {
                "step": "$b = -9$",
                "reason": "Finding the constants by equal coefficients or by putting in the roots: $m = -2$ gives $18 = -2b$."
              },
              {
                "step": "The $n$th first factor is $11 + (n - 1)$.",
                "reason": "The $n$th term $a+(n-1)d$: the first factors have first term $11$ and common difference $1$."
              },
              {
                "step": "$11 + (n - 1) = n + 10$",
                "reason": "Collecting like terms."
              },
              {
                "step": "The sum of the first $n$ terms is $9\\left(\\dfrac{1}{11} - \\dfrac{1}{13}\\right) + 9\\left(\\dfrac{1}{12} - \\dfrac{1}{14}\\right) + 9\\left(\\dfrac{1}{13} - \\dfrac{1}{15}\\right) + \\dots + 9\\left(\\dfrac{1}{n + 10} - \\dfrac{1}{n + 12}\\right)$.",
                "reason": "Substituting a value: by lines 3, 5 and 6, each term is $9\\left(\\dfrac{1}{m} - \\dfrac{1}{m + 2}\\right)$, with its own value of $m$, and the last first factor is $n + 10$ by line 8."
              },
              {
                "step": "The sum of the first $n$ terms is $9\\left(\\dfrac{1}{11} - \\dfrac{1}{13} + \\dfrac{1}{12} - \\dfrac{1}{14} + \\dfrac{1}{13} - \\dots + \\dfrac{1}{n + 10} - \\dfrac{1}{n + 12}\\right)$.",
                "reason": "The distributive law, from arithmetic: the common factor $9$ is taken out."
              },
              {
                "step": "The sum of the first $n$ terms is $9\\left(\\dfrac{1}{11} + \\dfrac{1}{12} - \\dfrac{1}{n + 11} - \\dfrac{1}{n + 12}\\right)$.",
                "reason": "Telescoping sum: each fraction taken away is added back two brackets later, so the first fractions of the first two brackets and the last fractions of the last two brackets are left."
              },
              {
                "step": "As $n$ grows, $\\dfrac{1}{n + 11}$ has limit $0$.",
                "reason": "The definition of the limit of a sequence, from arithmetic: for a positive number $\\varepsilon$, the number $\\dfrac{1}{n + 11}$ lies within $\\varepsilon$ of $0$ once $n + 11$ is above $\\dfrac{1}{\\varepsilon}$."
              },
              {
                "step": "As $n$ grows, $\\dfrac{1}{n + 12}$ has limit $0$.",
                "reason": "The definition of the limit of a sequence, from arithmetic: for a positive number $\\varepsilon$, the number $\\dfrac{1}{n + 12}$ lies within $\\varepsilon$ of $0$ once $n + 12$ is above $\\dfrac{1}{\\varepsilon}$."
              },
              {
                "step": "The partial sums have limit $9\\left(\\dfrac{1}{11} + \\dfrac{1}{12} - 0 - 0\\right) = \\dfrac{69}{44}$.",
                "reason": "A limit passes through sums, products and quotients: fixed numbers minus two numbers with limit $0$, times the fixed number $9$."
              },
              {
                "step": "The sum of the series is $\\dfrac{69}{44}$.",
                "reason": "Sum of an infinite collapsing series: the sum is the limit of its partial sums, found in line 14."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the sum of the infinite series $\\dfrac{19}{22 \\cdot 24} + \\dfrac{19}{23 \\cdot 25} + \\dfrac{19}{24 \\cdot 26} + \\dots$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "855/1012",
              "lines": [
                {
                  "step": "Find the sum of the infinite series $\\dfrac{19}{22 \\cdot 24} + \\dfrac{19}{23 \\cdot 25} + \\dfrac{19}{24 \\cdot 26} + \\dots$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each term is $\\dfrac{19}{m(m + 2)}$, for $m = 22, 23, 24, \\dots$",
                  "reason": "Arithmetic sequence: the first factors of the bottoms go up by the common difference $1$, and each second factor is its first factor plus $2$."
                },
                {
                  "step": "$\\dfrac{19}{m(m + 2)} = \\dfrac{a}{m} + \\dfrac{b}{m + 2}$",
                  "reason": "Partial fractions: the bottom is the product of the two linear factors $m$ and $m + 2$."
                },
                {
                  "step": "$19 = a(m + 2) + bm$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $m(m + 2)$."
                },
                {
                  "step": "$a = \\dfrac{19}{2}$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $m = 0$ gives $19 = 2a$."
                },
                {
                  "step": "$b = -\\dfrac{19}{2}$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $m = -2$ gives $19 = -2b$."
                },
                {
                  "step": "The $n$th first factor is $22 + (n - 1)$.",
                  "reason": "The $n$th term $a+(n-1)d$: the first factors have first term $22$ and common difference $1$."
                },
                {
                  "step": "$22 + (n - 1) = n + 21$",
                  "reason": "Collecting like terms."
                },
                {
                  "step": "The sum of the first $n$ terms is $\\dfrac{19}{2}\\left(\\dfrac{1}{22} - \\dfrac{1}{24}\\right) + \\dfrac{19}{2}\\left(\\dfrac{1}{23} - \\dfrac{1}{25}\\right) + \\dfrac{19}{2}\\left(\\dfrac{1}{24} - \\dfrac{1}{26}\\right) + \\dots + \\dfrac{19}{2}\\left(\\dfrac{1}{n + 21} - \\dfrac{1}{n + 23}\\right)$.",
                  "reason": "Substituting a value: by lines 3, 5 and 6, each term is $\\dfrac{19}{2}\\left(\\dfrac{1}{m} - \\dfrac{1}{m + 2}\\right)$, with its own value of $m$, and the last first factor is $n + 21$ by line 8."
                },
                {
                  "step": "The sum of the first $n$ terms is $\\dfrac{19}{2}\\left(\\dfrac{1}{22} - \\dfrac{1}{24} + \\dfrac{1}{23} - \\dfrac{1}{25} + \\dfrac{1}{24} - \\dots + \\dfrac{1}{n + 21} - \\dfrac{1}{n + 23}\\right)$.",
                  "reason": "The distributive law, from arithmetic: the common factor $\\dfrac{19}{2}$ is taken out."
                },
                {
                  "step": "The sum of the first $n$ terms is $\\dfrac{19}{2}\\left(\\dfrac{1}{22} + \\dfrac{1}{23} - \\dfrac{1}{n + 22} - \\dfrac{1}{n + 23}\\right)$.",
                  "reason": "Telescoping sum: each fraction taken away is added back two brackets later, so the first fractions of the first two brackets and the last fractions of the last two brackets are left."
                },
                {
                  "step": "As $n$ grows, $\\dfrac{1}{n + 22}$ has limit $0$.",
                  "reason": "The definition of the limit of a sequence, from arithmetic: for a positive number $\\varepsilon$, the number $\\dfrac{1}{n + 22}$ lies within $\\varepsilon$ of $0$ once $n + 22$ is above $\\dfrac{1}{\\varepsilon}$."
                },
                {
                  "step": "As $n$ grows, $\\dfrac{1}{n + 23}$ has limit $0$.",
                  "reason": "The definition of the limit of a sequence, from arithmetic: for a positive number $\\varepsilon$, the number $\\dfrac{1}{n + 23}$ lies within $\\varepsilon$ of $0$ once $n + 23$ is above $\\dfrac{1}{\\varepsilon}$."
                },
                {
                  "step": "The partial sums have limit $\\dfrac{19}{2}\\left(\\dfrac{1}{22} + \\dfrac{1}{23} - 0 - 0\\right) = \\dfrac{855}{1012}$.",
                  "reason": "A limit passes through sums, products and quotients: fixed numbers minus two numbers with limit $0$, times the fixed number $\\dfrac{19}{2}$."
                },
                {
                  "step": "The sum of the series is $\\dfrac{855}{1012}$.",
                  "reason": "Sum of an infinite collapsing series: the sum is the limit of its partial sums, found in line 14."
                }
              ]
            },
            {
              "prompt": "Find the sum of the infinite series $\\dfrac{29}{24 \\cdot 26} + \\dfrac{29}{25 \\cdot 27} + \\dfrac{29}{26 \\cdot 28} + \\dots$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "1421/1200",
              "lines": [
                {
                  "step": "Find the sum of the infinite series $\\dfrac{29}{24 \\cdot 26} + \\dfrac{29}{25 \\cdot 27} + \\dfrac{29}{26 \\cdot 28} + \\dots$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each term is $\\dfrac{29}{m(m + 2)}$, for $m = 24, 25, 26, \\dots$",
                  "reason": "Arithmetic sequence: the first factors of the bottoms go up by the common difference $1$, and each second factor is its first factor plus $2$."
                },
                {
                  "step": "$\\dfrac{29}{m(m + 2)} = \\dfrac{a}{m} + \\dfrac{b}{m + 2}$",
                  "reason": "Partial fractions: the bottom is the product of the two linear factors $m$ and $m + 2$."
                },
                {
                  "step": "$29 = a(m + 2) + bm$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $m(m + 2)$."
                },
                {
                  "step": "$a = \\dfrac{29}{2}$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $m = 0$ gives $29 = 2a$."
                },
                {
                  "step": "$b = -\\dfrac{29}{2}$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $m = -2$ gives $29 = -2b$."
                },
                {
                  "step": "The $n$th first factor is $24 + (n - 1)$.",
                  "reason": "The $n$th term $a+(n-1)d$: the first factors have first term $24$ and common difference $1$."
                },
                {
                  "step": "$24 + (n - 1) = n + 23$",
                  "reason": "Collecting like terms."
                },
                {
                  "step": "The sum of the first $n$ terms is $\\dfrac{29}{2}\\left(\\dfrac{1}{24} - \\dfrac{1}{26}\\right) + \\dfrac{29}{2}\\left(\\dfrac{1}{25} - \\dfrac{1}{27}\\right) + \\dfrac{29}{2}\\left(\\dfrac{1}{26} - \\dfrac{1}{28}\\right) + \\dots + \\dfrac{29}{2}\\left(\\dfrac{1}{n + 23} - \\dfrac{1}{n + 25}\\right)$.",
                  "reason": "Substituting a value: by lines 3, 5 and 6, each term is $\\dfrac{29}{2}\\left(\\dfrac{1}{m} - \\dfrac{1}{m + 2}\\right)$, with its own value of $m$, and the last first factor is $n + 23$ by line 8."
                },
                {
                  "step": "The sum of the first $n$ terms is $\\dfrac{29}{2}\\left(\\dfrac{1}{24} - \\dfrac{1}{26} + \\dfrac{1}{25} - \\dfrac{1}{27} + \\dfrac{1}{26} - \\dots + \\dfrac{1}{n + 23} - \\dfrac{1}{n + 25}\\right)$.",
                  "reason": "The distributive law, from arithmetic: the common factor $\\dfrac{29}{2}$ is taken out."
                },
                {
                  "step": "The sum of the first $n$ terms is $\\dfrac{29}{2}\\left(\\dfrac{1}{24} + \\dfrac{1}{25} - \\dfrac{1}{n + 24} - \\dfrac{1}{n + 25}\\right)$.",
                  "reason": "Telescoping sum: each fraction taken away is added back two brackets later, so the first fractions of the first two brackets and the last fractions of the last two brackets are left."
                },
                {
                  "step": "As $n$ grows, $\\dfrac{1}{n + 24}$ has limit $0$.",
                  "reason": "The definition of the limit of a sequence, from arithmetic: for a positive number $\\varepsilon$, the number $\\dfrac{1}{n + 24}$ lies within $\\varepsilon$ of $0$ once $n + 24$ is above $\\dfrac{1}{\\varepsilon}$."
                },
                {
                  "step": "As $n$ grows, $\\dfrac{1}{n + 25}$ has limit $0$.",
                  "reason": "The definition of the limit of a sequence, from arithmetic: for a positive number $\\varepsilon$, the number $\\dfrac{1}{n + 25}$ lies within $\\varepsilon$ of $0$ once $n + 25$ is above $\\dfrac{1}{\\varepsilon}$."
                },
                {
                  "step": "The partial sums have limit $\\dfrac{29}{2}\\left(\\dfrac{1}{24} + \\dfrac{1}{25} - 0 - 0\\right) = \\dfrac{1421}{1200}$.",
                  "reason": "A limit passes through sums, products and quotients: fixed numbers minus two numbers with limit $0$, times the fixed number $\\dfrac{29}{2}$."
                },
                {
                  "step": "The sum of the series is $\\dfrac{1421}{1200}$.",
                  "reason": "Sum of an infinite collapsing series: the sum is the limit of its partial sums, found in line 14."
                }
              ]
            },
            {
              "prompt": "Find the sum of the infinite series $\\dfrac{17}{29 \\cdot 31} + \\dfrac{17}{30 \\cdot 32} + \\dfrac{17}{31 \\cdot 33} + \\dots$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "1003/1740",
              "lines": [
                {
                  "step": "Find the sum of the infinite series $\\dfrac{17}{29 \\cdot 31} + \\dfrac{17}{30 \\cdot 32} + \\dfrac{17}{31 \\cdot 33} + \\dots$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each term is $\\dfrac{17}{m(m + 2)}$, for $m = 29, 30, 31, \\dots$",
                  "reason": "Arithmetic sequence: the first factors of the bottoms go up by the common difference $1$, and each second factor is its first factor plus $2$."
                },
                {
                  "step": "$\\dfrac{17}{m(m + 2)} = \\dfrac{a}{m} + \\dfrac{b}{m + 2}$",
                  "reason": "Partial fractions: the bottom is the product of the two linear factors $m$ and $m + 2$."
                },
                {
                  "step": "$17 = a(m + 2) + bm$",
                  "reason": "Multiplying both sides by the same number: both sides are multiplied by $m(m + 2)$."
                },
                {
                  "step": "$a = \\dfrac{17}{2}$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $m = 0$ gives $17 = 2a$."
                },
                {
                  "step": "$b = -\\dfrac{17}{2}$",
                  "reason": "Finding the constants by equal coefficients or by putting in the roots: $m = -2$ gives $17 = -2b$."
                },
                {
                  "step": "The $n$th first factor is $29 + (n - 1)$.",
                  "reason": "The $n$th term $a+(n-1)d$: the first factors have first term $29$ and common difference $1$."
                },
                {
                  "step": "$29 + (n - 1) = n + 28$",
                  "reason": "Collecting like terms."
                },
                {
                  "step": "The sum of the first $n$ terms is $\\dfrac{17}{2}\\left(\\dfrac{1}{29} - \\dfrac{1}{31}\\right) + \\dfrac{17}{2}\\left(\\dfrac{1}{30} - \\dfrac{1}{32}\\right) + \\dfrac{17}{2}\\left(\\dfrac{1}{31} - \\dfrac{1}{33}\\right) + \\dots + \\dfrac{17}{2}\\left(\\dfrac{1}{n + 28} - \\dfrac{1}{n + 30}\\right)$.",
                  "reason": "Substituting a value: by lines 3, 5 and 6, each term is $\\dfrac{17}{2}\\left(\\dfrac{1}{m} - \\dfrac{1}{m + 2}\\right)$, with its own value of $m$, and the last first factor is $n + 28$ by line 8."
                },
                {
                  "step": "The sum of the first $n$ terms is $\\dfrac{17}{2}\\left(\\dfrac{1}{29} - \\dfrac{1}{31} + \\dfrac{1}{30} - \\dfrac{1}{32} + \\dfrac{1}{31} - \\dots + \\dfrac{1}{n + 28} - \\dfrac{1}{n + 30}\\right)$.",
                  "reason": "The distributive law, from arithmetic: the common factor $\\dfrac{17}{2}$ is taken out."
                },
                {
                  "step": "The sum of the first $n$ terms is $\\dfrac{17}{2}\\left(\\dfrac{1}{29} + \\dfrac{1}{30} - \\dfrac{1}{n + 29} - \\dfrac{1}{n + 30}\\right)$.",
                  "reason": "Telescoping sum: each fraction taken away is added back two brackets later, so the first fractions of the first two brackets and the last fractions of the last two brackets are left."
                },
                {
                  "step": "As $n$ grows, $\\dfrac{1}{n + 29}$ has limit $0$.",
                  "reason": "The definition of the limit of a sequence, from arithmetic: for a positive number $\\varepsilon$, the number $\\dfrac{1}{n + 29}$ lies within $\\varepsilon$ of $0$ once $n + 29$ is above $\\dfrac{1}{\\varepsilon}$."
                },
                {
                  "step": "As $n$ grows, $\\dfrac{1}{n + 30}$ has limit $0$.",
                  "reason": "The definition of the limit of a sequence, from arithmetic: for a positive number $\\varepsilon$, the number $\\dfrac{1}{n + 30}$ lies within $\\varepsilon$ of $0$ once $n + 30$ is above $\\dfrac{1}{\\varepsilon}$."
                },
                {
                  "step": "The partial sums have limit $\\dfrac{17}{2}\\left(\\dfrac{1}{29} + \\dfrac{1}{30} - 0 - 0\\right) = \\dfrac{1003}{1740}$.",
                  "reason": "A limit passes through sums, products and quotients: fixed numbers minus two numbers with limit $0$, times the fixed number $\\dfrac{17}{2}$."
                },
                {
                  "step": "The sum of the series is $\\dfrac{1003}{1740}$.",
                  "reason": "Sum of an infinite collapsing series: the sum is the limit of its partial sums, found in line 14."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t182-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for the sum $\\dfrac{15}{13 \\cdot 17} + \\dfrac{15}{17 \\cdot 21} + \\dfrac{15}{21 \\cdot 25} + \\dots + \\dfrac{15}{77 \\cdot 81}$, and write that line right.",
            "given": [
              "$\\dfrac{15}{k(k + 4)} = \\dfrac{15}{4}\\left(\\dfrac{1}{k} - \\dfrac{1}{k + 4}\\right)$",
              "The sum is $\\dfrac{15}{4}\\left(\\dfrac{1}{13} + \\dfrac{1}{81}\\right)$.",
              "$\\dfrac{1}{13} + \\dfrac{1}{81} = \\dfrac{94}{1053}$",
              "$\\dfrac{15}{4} \\cdot \\dfrac{94}{1053} = \\dfrac{235}{702}$",
              "The sum is $\\dfrac{235}{702}$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the sum $\\dfrac{15}{13 \\cdot 17} + \\dfrac{15}{17 \\cdot 21} + \\dfrac{15}{21 \\cdot 25} + \\dots + \\dfrac{15}{77 \\cdot 81}$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 adds the last fraction $\\dfrac{1}{81}$.",
                "reason": "A sign lost: each bracket takes its second fraction away, so the last fraction left is taken away."
              },
              {
                "step": "Every line other than line 2 follows by a rule that holds, from the data or from the line before it as it is written, so line 2 is the first wrong line.",
                "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
              },
              {
                "step": "Line 2 written right is \"The sum is $\\dfrac{15}{4}\\left(\\dfrac{1}{13} - \\dfrac{1}{81}\\right)$\".",
                "reason": "Each number keeps its own sign through the working, and the signs of products and quotients give each result its sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the sum $\\dfrac{7}{3 \\cdot 8} + \\dfrac{7}{8 \\cdot 13} + \\dfrac{7}{13 \\cdot 18} + \\dots + \\dfrac{7}{28 \\cdot 33}$, and write that line right.",
              "given": [
                "$\\dfrac{1}{k} - \\dfrac{1}{k + 5} = \\dfrac{(k + 5) - k}{k(k + 5)} = \\dfrac{5}{k(k + 5)}$",
                "$\\dfrac{7}{k(k + 5)} = \\dfrac{7}{5}\\left(\\dfrac{1}{k} - \\dfrac{1}{k + 5}\\right)$",
                "The sum is $\\dfrac{7}{5}\\left(\\dfrac{1}{3} - \\dfrac{1}{33}\\right)$.",
                "$\\dfrac{1}{3} - \\dfrac{1}{33} = -\\dfrac{10}{33}$",
                "$\\dfrac{7}{5} \\cdot -\\dfrac{10}{33} = -\\dfrac{14}{33}$",
                "The sum is $-\\dfrac{14}{33}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 1/3-1/33 = 10/33",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the sum $\\dfrac{7}{3 \\cdot 8} + \\dfrac{7}{8 \\cdot 13} + \\dfrac{7}{13 \\cdot 18} + \\dots + \\dfrac{7}{28 \\cdot 33}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 gives a negative value for $\\dfrac{1}{3} - \\dfrac{1}{33}$.",
                  "reason": "A sign lost: $\\dfrac{1}{3}$ is greater than $\\dfrac{1}{33}$, so their difference is positive."
                },
                {
                  "step": "Every line other than line 4 follows by a rule that holds, from the data or from the line before it as it is written, so line 4 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
                },
                {
                  "step": "Line 4 written right is $\\dfrac{1}{3} - \\dfrac{1}{33} = \\dfrac{10}{33}$.",
                  "reason": "Each number keeps its own sign through the working, and the signs of products and quotients give each result its sign."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the sum $-\\dfrac{13}{6 \\cdot 14} - \\dfrac{13}{14 \\cdot 22} - \\dfrac{13}{22 \\cdot 30} - \\dots - \\dfrac{13}{94 \\cdot 102}$, and write that line right.",
              "given": [
                "$\\dfrac{1}{k} - \\dfrac{1}{k + 8} = \\dfrac{(k + 8) - k}{k(k + 8)} = \\dfrac{8}{k(k + 8)}$",
                "$-\\dfrac{13}{k(k + 8)} = \\dfrac{13}{8}\\left(\\dfrac{1}{k} - \\dfrac{1}{k + 8}\\right)$",
                "The sum is $\\dfrac{13}{8}\\left(\\dfrac{1}{6} - \\dfrac{1}{102}\\right)$.",
                "$\\dfrac{1}{6} - \\dfrac{1}{102} = \\dfrac{8}{51}$",
                "$\\dfrac{13}{8} \\cdot \\dfrac{8}{51} = \\dfrac{13}{51}$",
                "The sum is $\\dfrac{13}{51}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: -13/(k*(k+8)) = -13/8*(1/k-1/(k+8))",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the sum $-\\dfrac{13}{6 \\cdot 14} - \\dfrac{13}{14 \\cdot 22} - \\dfrac{13}{22 \\cdot 30} - \\dots - \\dfrac{13}{94 \\cdot 102}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 gives the factor in front as $\\dfrac{13}{8}$.",
                  "reason": "A sign lost: the top $-13$ is negative, so the factor is $-13 \\div 8 = -\\dfrac{13}{8}$."
                },
                {
                  "step": "Every line other than line 2 follows by a rule that holds, from the data or from the line before it as it is written, so line 2 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
                },
                {
                  "step": "Line 2 written right is $-\\dfrac{13}{k(k + 8)} = -\\dfrac{13}{8}\\left(\\dfrac{1}{k} - \\dfrac{1}{k + 8}\\right)$.",
                  "reason": "Each number keeps its own sign through the working, and the signs of products and quotients give each result its sign."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the sum $-\\dfrac{11}{10 \\cdot 13} - \\dfrac{11}{13 \\cdot 16} - \\dfrac{11}{16 \\cdot 19} - \\dots - \\dfrac{11}{22 \\cdot 25}$, and write that line right.",
              "given": [
                "$-\\dfrac{11}{k(k + 3)} = -\\dfrac{11}{3}\\left(\\dfrac{1}{k} - \\dfrac{1}{k + 3}\\right)$",
                "The sum is $-\\dfrac{11}{3}\\left(\\dfrac{1}{10} - \\dfrac{1}{25}\\right)$.",
                "$\\dfrac{1}{10} - \\dfrac{1}{25} = \\dfrac{3}{50}$",
                "$-\\dfrac{11}{3} \\cdot \\dfrac{3}{50} = \\dfrac{11}{50}$",
                "The sum is $\\dfrac{11}{50}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: -11/3*3/50 = -11/50",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the sum $-\\dfrac{11}{10 \\cdot 13} - \\dfrac{11}{13 \\cdot 16} - \\dfrac{11}{16 \\cdot 19} - \\dots - \\dfrac{11}{22 \\cdot 25}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 gives a positive value for the product of $-\\dfrac{11}{3}$ and $\\dfrac{3}{50}$.",
                  "reason": "A sign lost: a product of a negative and a positive number is negative."
                },
                {
                  "step": "Every line other than line 4 follows by a rule that holds, from the data or from the line before it as it is written, so line 4 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
                },
                {
                  "step": "Line 4 written right is $-\\dfrac{11}{3} \\cdot \\dfrac{3}{50} = -\\dfrac{11}{50}$.",
                  "reason": "Each number keeps its own sign through the working, and the signs of products and quotients give each result its sign."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for the sum $\\dfrac{7}{2 \\cdot 8} + \\dfrac{7}{8 \\cdot 14} + \\dfrac{7}{14 \\cdot 20} + \\dots + \\dfrac{7}{80 \\cdot 86}$, and write that line right.",
            "given": [
              "$\\dfrac{1}{k} - \\dfrac{1}{k + 6} = \\dfrac{(k + 6) - k}{k(k + 6)} = \\dfrac{6}{k(k + 6)}$",
              "$\\dfrac{7}{k(k + 6)} = \\dfrac{7}{6}\\left(\\dfrac{1}{k} - \\dfrac{1}{k + 6}\\right)$",
              "The sum is $\\dfrac{7}{6}\\left(\\dfrac{1}{2} - \\dfrac{1}{86}\\right)$.",
              "$\\dfrac{1}{2} - \\dfrac{1}{86} = \\dfrac{84}{172} \\cdot \\dfrac{7}{6} = \\dfrac{588}{1032}$",
              "$\\dfrac{588}{1032} = \\dfrac{49}{86}$",
              "The sum is $\\dfrac{49}{86}$."
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for the sum $\\dfrac{7}{2 \\cdot 8} + \\dfrac{7}{8 \\cdot 14} + \\dfrac{7}{14 \\cdot 20} + \\dots + \\dfrac{7}{80 \\cdot 86}$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 4 writes $\\dfrac{1}{2} - \\dfrac{1}{86}$, then times $\\dfrac{7}{6}$, in one run of equals signs, so it states $\\dfrac{1}{2} - \\dfrac{1}{86} = \\dfrac{588}{1032}$.",
                "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and $\\dfrac{1}{2} - \\dfrac{1}{86}$ is $\\dfrac{21}{43}$."
              },
              {
                "step": "Every line other than line 4 follows by a rule that holds, from the data or from the line before it as it is written, so line 4 is the first wrong line.",
                "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
              },
              {
                "step": "Line 4 written right is $\\dfrac{7}{6}\\left(\\dfrac{1}{2} - \\dfrac{1}{86}\\right) = \\dfrac{588}{1032}$.",
                "reason": "An equals sign stands only between two things that are equal, so the line states one true equation."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for the sum $\\dfrac{15}{29 \\cdot 31} + \\dfrac{15}{31 \\cdot 33} + \\dfrac{15}{33 \\cdot 35} + \\dots + \\dfrac{15}{53 \\cdot 55}$, and write that line right.",
              "given": [
                "$\\dfrac{1}{k} - \\dfrac{1}{k + 2} = \\dfrac{(k + 2) - k}{k(k + 2)} = \\dfrac{2}{k(k + 2)}$",
                "The sum is $\\dfrac{15}{2}\\left(\\dfrac{1}{29} - \\dfrac{1}{55}\\right)$.",
                "$\\dfrac{1}{29} - \\dfrac{1}{55} = \\dfrac{26}{1595} \\cdot \\dfrac{15}{2} = \\dfrac{390}{3190}$",
                "$\\dfrac{390}{3190} = \\dfrac{39}{319}$",
                "The sum is $\\dfrac{39}{319}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 15/2*(1/29-1/55) = 390/3190",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the sum $\\dfrac{15}{29 \\cdot 31} + \\dfrac{15}{31 \\cdot 33} + \\dfrac{15}{33 \\cdot 35} + \\dots + \\dfrac{15}{53 \\cdot 55}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 writes $\\dfrac{1}{29} - \\dfrac{1}{55}$, then times $\\dfrac{15}{2}$, in one run of equals signs, so it states $\\dfrac{1}{29} - \\dfrac{1}{55} = \\dfrac{390}{3190}$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and $\\dfrac{1}{29} - \\dfrac{1}{55}$ is $\\dfrac{26}{1595}$."
                },
                {
                  "step": "Every line other than line 3 follows by a rule that holds, from the data or from the line before it as it is written, so line 3 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
                },
                {
                  "step": "Line 3 written right is $\\dfrac{15}{2}\\left(\\dfrac{1}{29} - \\dfrac{1}{55}\\right) = \\dfrac{390}{3190}$.",
                  "reason": "An equals sign stands only between two things that are equal, so the line states one true equation."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the sum $\\dfrac{5}{4 \\cdot 12} + \\dfrac{5}{12 \\cdot 20} + \\dfrac{5}{20 \\cdot 28} + \\dots + \\dfrac{5}{84 \\cdot 92}$, and write that line right.",
              "given": [
                "$\\dfrac{1}{k} - \\dfrac{1}{k + 8} = \\dfrac{(k + 8) - k}{k(k + 8)} = \\dfrac{8}{k(k + 8)}$",
                "$\\dfrac{5}{k(k + 8)} = \\dfrac{5}{8}\\left(\\dfrac{1}{k} - \\dfrac{1}{k + 8}\\right)$",
                "The sum is $\\dfrac{5}{8}\\left(\\dfrac{1}{4} - \\dfrac{1}{92}\\right)$.",
                "$\\dfrac{1}{4} - \\dfrac{1}{92} = \\dfrac{92}{368} - \\dfrac{4}{368} = \\dfrac{88}{368}$",
                "$5 \\cdot 88 = \\dfrac{440}{8 \\cdot 368} = \\dfrac{55}{368}$",
                "The sum is $\\dfrac{55}{368}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 5: 5*88/(8*368) = 55/368",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the sum $\\dfrac{5}{4 \\cdot 12} + \\dfrac{5}{12 \\cdot 20} + \\dfrac{5}{20 \\cdot 28} + \\dots + \\dfrac{5}{84 \\cdot 92}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 5 writes $5 \\cdot 88$, then divided by $8 \\cdot 368$, in one run of equals signs, so it states $5 \\cdot 88 = \\dfrac{55}{368}$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and $5 \\cdot 88$ is $440$."
                },
                {
                  "step": "Every line other than line 5 follows by a rule that holds, from the data or from the line before it as it is written, so line 5 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
                },
                {
                  "step": "Line 5 written right is $\\dfrac{5 \\cdot 88}{8 \\cdot 368} = \\dfrac{55}{368}$.",
                  "reason": "An equals sign stands only between two things that are equal, so the line states one true equation."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for the sum $\\dfrac{19}{24 \\cdot 28} + \\dfrac{19}{28 \\cdot 32} + \\dfrac{19}{32 \\cdot 36} + \\dots + \\dfrac{19}{52 \\cdot 56}$, and write that line right.",
              "given": [
                "$\\dfrac{19}{k(k + 4)} = \\dfrac{19}{4}\\left(\\dfrac{1}{k} - \\dfrac{1}{k + 4}\\right)$",
                "The sum is $\\dfrac{19}{4}\\left(\\dfrac{1}{24} - \\dfrac{1}{56}\\right)$.",
                "$\\dfrac{1}{24} - \\dfrac{1}{56} = \\dfrac{56}{1344} - \\dfrac{24}{1344} = \\dfrac{32}{1344}$",
                "$19 \\cdot 32 = \\dfrac{608}{4 \\cdot 1344} = \\dfrac{608}{5376}$",
                "$\\dfrac{608}{5376} = \\dfrac{19}{168}$",
                "The sum is $\\dfrac{19}{168}$."
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 19*32/(4*1344) = 608/5376",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for the sum $\\dfrac{19}{24 \\cdot 28} + \\dfrac{19}{28 \\cdot 32} + \\dfrac{19}{32 \\cdot 36} + \\dots + \\dfrac{19}{52 \\cdot 56}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 writes $19 \\cdot 32$, then divided by $4 \\cdot 1344$, in one run of equals signs, so it states $19 \\cdot 32 = \\dfrac{608}{5376}$.",
                  "reason": "The equals sign read as \"work out the answer\": an equals sign states that the two sides are the same number, and $19 \\cdot 32$ is $608$."
                },
                {
                  "step": "Every line other than line 4 follows by a rule that holds, from the data or from the line before it as it is written, so line 4 is the first wrong line.",
                  "reason": "Each line is checked alone against what comes before it: the data for line 1, the line before it for every later line."
                },
                {
                  "step": "Line 4 written right is $\\dfrac{19 \\cdot 32}{4 \\cdot 1344} = \\dfrac{608}{5376}$.",
                  "reason": "An equals sign stands only between two things that are equal, so the line states one true equation."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t182-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation, with $y$ alone on the left: The product $\\dfrac{13}{9} \\cdot \\dfrac{17}{13} \\cdot \\dfrac{21}{17} \\cdots \\dfrac{89}{85}$ has the number $y$ as its $k$th factor.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with $y$ alone on the left: The product $\\dfrac{13}{9} \\cdot \\dfrac{17}{13} \\cdot \\dfrac{21}{17} \\cdots \\dfrac{89}{85}$ has the number $y$ as its $k$th factor.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The bottoms of the factors, $9, 13, 17, \\dots$, form an arithmetic sequence with first term $9$ and common difference $4$.",
                "reason": "Arithmetic sequence: each of them is the one before it plus $4$."
              },
              {
                "step": "The $k$th of them is $9 + 4(k - 1)$.",
                "reason": "The $n$th term $a+(n-1)d$, with $a = 9$, $d = 4$ and $k$ in place of $n$."
              },
              {
                "step": "$9 + 4(k - 1) = 4k + 5$",
                "reason": "Multiplying out and collecting like terms: $4(k - 1) = 4k - 4$."
              },
              {
                "step": "The $k$th factor is $\\dfrac{4k + 9}{4k + 5}$.",
                "reason": "Substituting a value: the top is the bottom plus $4$, so it is $4k + 9$."
              },
              {
                "step": "$y = \\dfrac{4k + 9}{4k + 5}$",
                "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the $k$th factor of the product $\\dfrac{29}{23} \\cdot \\dfrac{35}{29} \\cdot \\dfrac{41}{35} \\cdots \\dfrac{167}{161}$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (6*k+23)/(6*k+17)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the $k$th factor of the product $\\dfrac{29}{23} \\cdot \\dfrac{35}{29} \\cdot \\dfrac{41}{35} \\cdots \\dfrac{167}{161}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The bottoms of the factors, $23, 29, 35, \\dots$, form an arithmetic sequence with first term $23$ and common difference $6$.",
                  "reason": "Arithmetic sequence: each of them is the one before it plus $6$."
                },
                {
                  "step": "The $k$th of them is $23 + 6(k - 1)$.",
                  "reason": "The $n$th term $a+(n-1)d$, with $a = 23$, $d = 6$ and $k$ in place of $n$."
                },
                {
                  "step": "$23 + 6(k - 1) = 6k + 17$",
                  "reason": "Multiplying out and collecting like terms: $6(k - 1) = 6k - 6$."
                },
                {
                  "step": "The $k$th factor is $\\dfrac{6k + 23}{6k + 17}$.",
                  "reason": "Substituting a value: the top is the bottom plus $6$, so it is $6k + 23$."
                },
                {
                  "step": "$y = \\dfrac{6k + 23}{6k + 17}$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: Counted from the left, the $k$th factor of the product $\\dfrac{15}{9} \\cdot \\dfrac{21}{15} \\cdot \\dfrac{27}{21} \\cdots \\dfrac{153}{147}$ is the number $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (6*k+9)/(6*k+3)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: Counted from the left, the $k$th factor of the product $\\dfrac{15}{9} \\cdot \\dfrac{21}{15} \\cdot \\dfrac{27}{21} \\cdots \\dfrac{153}{147}$ is the number $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The bottoms of the factors, $9, 15, 21, \\dots$, form an arithmetic sequence with first term $9$ and common difference $6$.",
                  "reason": "Arithmetic sequence: each of them is the one before it plus $6$."
                },
                {
                  "step": "The $k$th of them is $9 + 6(k - 1)$.",
                  "reason": "The $n$th term $a+(n-1)d$, with $a = 9$, $d = 6$ and $k$ in place of $n$."
                },
                {
                  "step": "$9 + 6(k - 1) = 6k + 3$",
                  "reason": "Multiplying out and collecting like terms: $6(k - 1) = 6k - 6$."
                },
                {
                  "step": "The $k$th factor is $\\dfrac{6k + 9}{6k + 3}$.",
                  "reason": "Substituting a value: the top is the bottom plus $6$, so it is $6k + 9$."
                },
                {
                  "step": "$y = \\dfrac{6k + 9}{6k + 3}$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: Counted from the left, the $k$th term of the sum $\\dfrac{1}{\\sqrt{5} + \\sqrt{9}} + \\dfrac{1}{\\sqrt{9} + \\sqrt{13}} + \\dfrac{1}{\\sqrt{13} + \\sqrt{17}} + \\dots + \\dfrac{1}{\\sqrt{37} + \\sqrt{41}}$ is the number $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 1/(sqrt(4*k+1)+sqrt(4*k+5))",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: Counted from the left, the $k$th term of the sum $\\dfrac{1}{\\sqrt{5} + \\sqrt{9}} + \\dfrac{1}{\\sqrt{9} + \\sqrt{13}} + \\dfrac{1}{\\sqrt{13} + \\sqrt{17}} + \\dots + \\dfrac{1}{\\sqrt{37} + \\sqrt{41}}$ is the number $y$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The numbers under the first roots, $5, 9, 13, \\dots$, form an arithmetic sequence with first term $5$ and common difference $4$.",
                  "reason": "Arithmetic sequence: each of them is the one before it plus $4$."
                },
                {
                  "step": "The $k$th of them is $5 + 4(k - 1)$.",
                  "reason": "The $n$th term $a+(n-1)d$, with $a = 5$, $d = 4$ and $k$ in place of $n$."
                },
                {
                  "step": "$5 + 4(k - 1) = 4k + 1$",
                  "reason": "Multiplying out and collecting like terms: $4(k - 1) = 4k - 4$."
                },
                {
                  "step": "The $k$th term is $\\dfrac{1}{\\sqrt{4k + 1} + \\sqrt{4k + 5}}$.",
                  "reason": "Substituting a value: the number under the second root is the first plus $4$, so it is $4k + 5$."
                },
                {
                  "step": "$y = \\dfrac{1}{\\sqrt{4k + 1} + \\sqrt{4k + 5}}$",
                  "reason": "Writing a sentence as an equation: the word \"is\" marks the place of the equals sign."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation in $k$, with the bottom of the $k$th factor on the left and no solving: The product $\\dfrac{12}{8} \\cdot \\dfrac{16}{12} \\cdot \\dfrac{20}{16} \\cdots \\dfrac{80}{76}$ ends on its $k$th factor.",
            "lines": [
              {
                "step": "Write this sentence as an equation in $k$, with the bottom of the $k$th factor on the left and no solving: The product $\\dfrac{12}{8} \\cdot \\dfrac{16}{12} \\cdot \\dfrac{20}{16} \\cdots \\dfrac{80}{76}$ ends on its $k$th factor.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The bottoms of the factors, $8, 12, 16, \\dots$, form an arithmetic sequence with first term $8$ and common difference $4$.",
                "reason": "Arithmetic sequence: each of them is the one before it plus $4$."
              },
              {
                "step": "The $k$th of them is $8 + 4(k - 1)$.",
                "reason": "The $n$th term $a+(n-1)d$, with $a = 8$, $d = 4$ and $k$ in place of $n$."
              },
              {
                "step": "$8 + 4(k - 1) = 4k + 4$",
                "reason": "Multiplying out and collecting like terms: $4(k - 1) = 4k - 4$."
              },
              {
                "step": "The last factor is $\\dfrac{80}{76}$, so its bottom is $76$.",
                "reason": "Writing a sentence as an equation: the sentence names the last factor as the $k$th."
              },
              {
                "step": "$4k + 4 = 76$",
                "reason": "Writing a sentence as an equation: the $k$th factor and the last factor are the same, so the equals sign stands between them."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation in $k$, with the number under the first root of the $k$th term on the left and no solving: The sum $\\dfrac{1}{\\sqrt{14} + \\sqrt{17}} + \\dfrac{1}{\\sqrt{17} + \\sqrt{20}} + \\dfrac{1}{\\sqrt{20} + \\sqrt{23}} + \\dots + \\dfrac{1}{\\sqrt{74} + \\sqrt{77}}$ ends on its $k$th term.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "3*k+11 = 74",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $k$, with the number under the first root of the $k$th term on the left and no solving: The sum $\\dfrac{1}{\\sqrt{14} + \\sqrt{17}} + \\dfrac{1}{\\sqrt{17} + \\sqrt{20}} + \\dfrac{1}{\\sqrt{20} + \\sqrt{23}} + \\dots + \\dfrac{1}{\\sqrt{74} + \\sqrt{77}}$ ends on its $k$th term.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The numbers under the first roots, $14, 17, 20, \\dots$, form an arithmetic sequence with first term $14$ and common difference $3$.",
                  "reason": "Arithmetic sequence: each of them is the one before it plus $3$."
                },
                {
                  "step": "The $k$th of them is $14 + 3(k - 1)$.",
                  "reason": "The $n$th term $a+(n-1)d$, with $a = 14$, $d = 3$ and $k$ in place of $n$."
                },
                {
                  "step": "$14 + 3(k - 1) = 3k + 11$",
                  "reason": "Multiplying out and collecting like terms: $3(k - 1) = 3k - 3$."
                },
                {
                  "step": "The last term is $\\dfrac{1}{\\sqrt{74} + \\sqrt{77}}$, so the number under its first root is $74$.",
                  "reason": "Writing a sentence as an equation: the sentence names the last term as the $k$th."
                },
                {
                  "step": "$3k + 11 = 74$",
                  "reason": "Writing a sentence as an equation: the $k$th term and the last term are the same, so the equals sign stands between them."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $k$, with the number under the first root of the $k$th term on the left and no solving: The sum $\\dfrac{1}{\\sqrt{25} + \\sqrt{32}} + \\dfrac{1}{\\sqrt{32} + \\sqrt{39}} + \\dfrac{1}{\\sqrt{39} + \\sqrt{46}} + \\dots + \\dfrac{1}{\\sqrt{74} + \\sqrt{81}}$ ends on its $k$th term.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "7*k+18 = 74",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $k$, with the number under the first root of the $k$th term on the left and no solving: The sum $\\dfrac{1}{\\sqrt{25} + \\sqrt{32}} + \\dfrac{1}{\\sqrt{32} + \\sqrt{39}} + \\dfrac{1}{\\sqrt{39} + \\sqrt{46}} + \\dots + \\dfrac{1}{\\sqrt{74} + \\sqrt{81}}$ ends on its $k$th term.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The numbers under the first roots, $25, 32, 39, \\dots$, form an arithmetic sequence with first term $25$ and common difference $7$.",
                  "reason": "Arithmetic sequence: each of them is the one before it plus $7$."
                },
                {
                  "step": "The $k$th of them is $25 + 7(k - 1)$.",
                  "reason": "The $n$th term $a+(n-1)d$, with $a = 25$, $d = 7$ and $k$ in place of $n$."
                },
                {
                  "step": "$25 + 7(k - 1) = 7k + 18$",
                  "reason": "Multiplying out and collecting like terms: $7(k - 1) = 7k - 7$."
                },
                {
                  "step": "The last term is $\\dfrac{1}{\\sqrt{74} + \\sqrt{81}}$, so the number under its first root is $74$.",
                  "reason": "Writing a sentence as an equation: the sentence names the last term as the $k$th."
                },
                {
                  "step": "$7k + 18 = 74$",
                  "reason": "Writing a sentence as an equation: the $k$th term and the last term are the same, so the equals sign stands between them."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation in $k$, with the bottom of the $k$th factor on the left and no solving: The $k$th factor of the product $\\dfrac{13}{7} \\cdot \\dfrac{19}{13} \\cdot \\dfrac{25}{19} \\cdots \\dfrac{67}{61}$ is its last factor.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "6*k+1 = 61",
              "lines": [
                {
                  "step": "Write this sentence as an equation in $k$, with the bottom of the $k$th factor on the left and no solving: The $k$th factor of the product $\\dfrac{13}{7} \\cdot \\dfrac{19}{13} \\cdot \\dfrac{25}{19} \\cdots \\dfrac{67}{61}$ is its last factor.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The bottoms of the factors, $7, 13, 19, \\dots$, form an arithmetic sequence with first term $7$ and common difference $6$.",
                  "reason": "Arithmetic sequence: each of them is the one before it plus $6$."
                },
                {
                  "step": "The $k$th of them is $7 + 6(k - 1)$.",
                  "reason": "The $n$th term $a+(n-1)d$, with $a = 7$, $d = 6$ and $k$ in place of $n$."
                },
                {
                  "step": "$7 + 6(k - 1) = 6k + 1$",
                  "reason": "Multiplying out and collecting like terms: $6(k - 1) = 6k - 6$."
                },
                {
                  "step": "The last factor is $\\dfrac{67}{61}$, so its bottom is $61$.",
                  "reason": "Writing a sentence as an equation: the sentence names the last factor as the $k$th."
                },
                {
                  "step": "$6k + 1 = 61$",
                  "reason": "Writing a sentence as an equation: the $k$th factor and the last factor are the same, so the equals sign stands between them."
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
      "id": "t182-s1",
      "method": "direct proof",
      "statement": "Prove that for a whole number $n$ from $2$ up and numbers $a_0, a_1, \\dots, a_n$, $(a_1 - a_0) + (a_2 - a_1) + \\dots + (a_n - a_{n-1}) = a_n - a_0$. Facts it may use: the associative and commutative laws of addition, a number minus itself is $0$, the assumptions on addition, the transitive property.",
      "check": {
        "proof": [
          {
            "line": "The sum $(a_1 - a_0) + (a_2 - a_1) + \\dots + (a_n - a_{n-1})$ equals $a_1 - a_0 + a_2 - a_1 + \\dots + a_n - a_{n-1}$.",
            "reason": "The associative law of addition, from arithmetic: the brackets of a sum can be dropped."
          },
          {
            "line": "That sum equals $-a_0 + a_1 - a_1 + a_2 - \\dots - a_{n-1} + a_n$.",
            "reason": "The commutative law of addition, from arithmetic: in each pair the number taken away is written first."
          },
          {
            "line": "That sum equals $-a_0 + (a_1 - a_1) + (a_2 - a_2) + \\dots + (a_{n-1} - a_{n-1}) + a_n$.",
            "reason": "The associative law of addition, from arithmetic: each number added is grouped with the same number taken away next to it."
          },
          {
            "line": "Each bracket $a_i - a_i$ is $0$.",
            "reason": "A number minus itself is $0$, from arithmetic."
          },
          {
            "line": "So the sum equals $-a_0 + a_n$.",
            "reason": "Assumptions on addition, from arithmetic: adding $0$ leaves a number as it is."
          },
          {
            "line": "So the sum equals $a_n - a_0$.",
            "reason": "The commutative law of addition, from arithmetic."
          },
          {
            "line": "Therefore $(a_1 - a_0) + (a_2 - a_1) + \\dots + (a_n - a_{n-1}) = a_n - a_0$.",
            "reason": "Lines 1 to 6, with the transitive property."
          }
        ]
      }
    },
    {
      "id": "t182-s2",
      "method": "direct proof",
      "statement": "Prove that for a whole number $n$ from $2$ up and numbers $a_0, a_1, \\dots, a_n$, none of them $0$, $\\dfrac{a_1}{a_0} \\cdot \\dfrac{a_2}{a_1} \\cdots \\dfrac{a_n}{a_{n-1}} = \\dfrac{a_n}{a_0}$. Facts it may use: the product formula, the commutative and associative laws of multiplication, zero-product property, cancelling a common factor, the transitive property.",
      "check": {
        "proof": [
          {
            "line": "The product $\\dfrac{a_1}{a_0} \\cdot \\dfrac{a_2}{a_1} \\cdots \\dfrac{a_n}{a_{n-1}}$ equals $\\dfrac{a_1 a_2 \\cdots a_n}{a_0 a_1 \\cdots a_{n-1}}$.",
            "reason": "The product formula, from arithmetic: the tops multiply and the bottoms multiply."
          },
          {
            "line": "That fraction equals $\\dfrac{(a_1 a_2 \\cdots a_{n-1}) a_n}{a_0 (a_1 a_2 \\cdots a_{n-1})}$.",
            "reason": "The commutative and associative laws of multiplication, from arithmetic."
          },
          {
            "line": "The number $a_1 a_2 \\cdots a_{n-1}$ is not $0$.",
            "reason": "Zero-product property: a product is $0$ only when one of its factors is $0$, and none of $a_1, \\dots, a_{n-1}$ is $0$."
          },
          {
            "line": "So the product equals $\\dfrac{a_n}{a_0}$.",
            "reason": "Cancelling a common factor: $a_1 a_2 \\cdots a_{n-1}$ is not $0$, by line 3."
          },
          {
            "line": "Therefore $\\dfrac{a_1}{a_0} \\cdot \\dfrac{a_2}{a_1} \\cdots \\dfrac{a_n}{a_{n-1}} = \\dfrac{a_n}{a_0}$.",
            "reason": "Lines 1, 2 and 4, with the transitive property."
          }
        ]
      }
    },
    {
      "id": "t182-s3",
      "method": "direct proof",
      "statement": "Prove that for whole numbers $m$ and $k$ from $1$ up, the infinite series $\\dfrac{k}{m(m + k)} + \\dfrac{k}{(m + k)(m + 2k)} + \\dfrac{k}{(m + 2k)(m + 3k)} + \\dots$ has sum $\\dfrac{1}{m}$. Facts it may use: the $n$th term $a+(n-1)d$, the general subtraction formula, subtracting a bracket changes every sign in it, collecting like terms, substituting a value, the transitive property, telescoping sum, multiplying by a positive number, adding the same number, transitivity, reciprocals of numbers of the same sign reverse the order, the definition of the limit of a sequence, a limit passes through sums, products and quotients, sum of an infinite collapsing series.",
      "check": {
        "proof": [
          {
            "line": "The $j$th term is $\\dfrac{k}{(m + (j - 1)k)(m + jk)}$.",
            "reason": "The $n$th term $a+(n-1)d$: the first factors $m, m + k, m + 2k, \\dots$ form an arithmetic sequence with first term $m$ and common difference $k$, and each second factor is its first factor plus $k$."
          },
          {
            "line": "$\\dfrac{1}{m + (j - 1)k} - \\dfrac{1}{m + jk} = \\dfrac{(m + jk) - (m + (j - 1)k)}{(m + (j - 1)k)(m + jk)}$",
            "reason": "The general subtraction formula, from arithmetic: over the common bottom $(m + (j - 1)k)(m + jk)$."
          },
          {
            "line": "$(m + jk) - (m + (j - 1)k) = m + jk - m - (j - 1)k$",
            "reason": "Subtracting a bracket changes every sign in it."
          },
          {
            "line": "$m + jk - m - (j - 1)k = k$",
            "reason": "Collecting like terms."
          },
          {
            "line": "So the $j$th term is $\\dfrac{1}{m + (j - 1)k} - \\dfrac{1}{m + jk}$.",
            "reason": "Lines 1 to 4, with the transitive property."
          },
          {
            "line": "The sum of the first $n$ terms is $\\left(\\dfrac{1}{m} - \\dfrac{1}{m + k}\\right) + \\left(\\dfrac{1}{m + k} - \\dfrac{1}{m + 2k}\\right) + \\dots + \\left(\\dfrac{1}{m + (n - 1)k} - \\dfrac{1}{m + nk}\\right)$.",
            "reason": "Substituting a value: line 5 with $j = 1, 2, \\dots, n$."
          },
          {
            "line": "So the sum of the first $n$ terms is $\\dfrac{1}{m} - \\dfrac{1}{m + nk}$.",
            "reason": "Telescoping sum: each fraction taken away is added back in the next bracket."
          },
          {
            "line": "Take a positive number $\\varepsilon$ and a whole number $n$ above $\\dfrac{1}{k\\varepsilon}$. Then $nk$ is above $\\dfrac{1}{\\varepsilon}$.",
            "reason": "Multiplying by a positive number, from arithmetic: both sides are multiplied by $k$."
          },
          {
            "line": "The number $m + nk$ is above $nk$.",
            "reason": "Adding the same number, from arithmetic: $nk$ is added to both sides of $m > 0$."
          },
          {
            "line": "So $m + nk$ is above $\\dfrac{1}{\\varepsilon}$.",
            "reason": "Transitivity, from arithmetic."
          },
          {
            "line": "So $\\dfrac{1}{m + nk}$ is below $\\varepsilon$.",
            "reason": "Reciprocals of numbers of the same sign reverse the order: both are positive."
          },
          {
            "line": "So $\\dfrac{1}{m + nk}$ has limit $0$ as $n$ grows.",
            "reason": "The definition of the limit of a sequence, from arithmetic: the number is above $0$ and, by line 11, within $\\varepsilon$ of $0$ once $n$ is large enough."
          },
          {
            "line": "So the partial sums have limit $\\dfrac{1}{m} - 0 = \\dfrac{1}{m}$.",
            "reason": "A limit passes through sums, products and quotients: a fixed number minus a number with limit $0$."
          },
          {
            "line": "Therefore the series has sum $\\dfrac{1}{m}$.",
            "reason": "Sum of an infinite collapsing series: the sum is the limit of its partial sums."
          }
        ]
      }
    }
  ]
}
