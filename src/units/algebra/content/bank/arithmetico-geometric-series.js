export default [
  {
    "id": "t228-k1-p01",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a closed form for $\\sum_{k=1}^{n} (7k - 1) \\cdot 6^{k}$, for a whole number $n$ from $3$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "((7*n-1)*6^(n+1)-36)/5-(7*6^(n+1)-252)/25",
    "solution": [
      "Find a closed form for $\\sum_{k=1}^{n} (7k - 1) \\cdot 6^{k}$, for a whole number $n$ from $3$ up.",
      "Write $y$ for the sum: $y = 6 \\cdot 6 + 13 \\cdot 6^{2} + 20 \\cdot 6^{3} + \\dots + (7n - 1) \\cdot 6^{n}$.",
      "$6y = 6 \\cdot 6^{2} + 13 \\cdot 6^{3} + \\dots + (7n - 8) \\cdot 6^{n} + (7n - 1) \\cdot 6^{n+1}$",
      "$6y - y = -6 \\cdot 6 - 7 \\cdot 6^{2} - 7 \\cdot 6^{3} - \\dots - 7 \\cdot 6^{n} + (7n - 1) \\cdot 6^{n+1}$",
      "$7 \\cdot 6^{2} + 7 \\cdot 6^{3} + \\dots + 7 \\cdot 6^{n} = \\dfrac{7 \\cdot 6^{2}(6^{n-1} - 1)}{6 - 1}$",
      "$\\dfrac{7 \\cdot 6^{2}(6^{n-1} - 1)}{6 - 1} = \\dfrac{7 \\cdot 6^{n+1} - 252}{5}$",
      "$6y - y = (7n - 1) \\cdot 6^{n+1} - 36 - \\dfrac{7 \\cdot 6^{n+1} - 252}{5}$",
      "$5y = (7n - 1) \\cdot 6^{n+1} - 36 - \\dfrac{7 \\cdot 6^{n+1} - 252}{5}$",
      "$y = \\dfrac{(7n - 1) \\cdot 6^{n+1} - 36}{5} - \\dfrac{7 \\cdot 6^{n+1} - 252}{25}$"
    ]
  },
  {
    "id": "t228-k1-p02",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the value of $\\sum_{k=1}^{3} (4k - 1) \\cdot 6^{k}$.",
    "form": "Answer as an integer.",
    "answer": "2646",
    "solution": [
      "Find the value of $\\sum_{k=1}^{3} (4k - 1) \\cdot 6^{k}$.",
      "Write $y$ for the sum: $y = 3 \\cdot 6 + 7 \\cdot 6^{2} + 11 \\cdot 6^{3}$.",
      "$6y = 3 \\cdot 6^{2} + 7 \\cdot 6^{3} + 11 \\cdot 6^{4}$",
      "$6y - y = -3 \\cdot 6 - 4 \\cdot 6^{2} - 4 \\cdot 6^{3} + 11 \\cdot 6^{4}$",
      "$4 \\cdot 6^{2} + 4 \\cdot 6^{3} = \\dfrac{4 \\cdot 6^{2}(6^{2} - 1)}{6 - 1}$",
      "$\\dfrac{4 \\cdot 6^{2}(6^{2} - 1)}{6 - 1} = 1008$",
      "$6y - y = 13{,}230$",
      "$5y = 13{,}230$",
      "$y = 2646$"
    ]
  },
  {
    "id": "t228-k1-p03",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the value of $\\sum_{k=1}^{3} (6k + 1) \\cdot 9^{k}$.",
    "form": "Answer as an integer.",
    "answer": "14967",
    "solution": [
      "Find the value of $\\sum_{k=1}^{3} (6k + 1) \\cdot 9^{k}$.",
      "Write $y$ for the sum: $y = 7 \\cdot 9 + 13 \\cdot 9^{2} + 19 \\cdot 9^{3}$.",
      "$9y = 7 \\cdot 9^{2} + 13 \\cdot 9^{3} + 19 \\cdot 9^{4}$",
      "$9y - y = -7 \\cdot 9 - 6 \\cdot 9^{2} - 6 \\cdot 9^{3} + 19 \\cdot 9^{4}$",
      "$6 \\cdot 9^{2} + 6 \\cdot 9^{3} = \\dfrac{6 \\cdot 9^{2}(9^{2} - 1)}{9 - 1}$",
      "$\\dfrac{6 \\cdot 9^{2}(9^{2} - 1)}{9 - 1} = 4860$",
      "$9y - y = 119{,}736$",
      "$8y = 119{,}736$",
      "$y = 14{,}967$"
    ]
  },
  {
    "id": "t228-k1-p04",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the value of $\\sum_{k=1}^{3} (7k + 4) \\cdot 7^{k}$.",
    "form": "Answer as an integer.",
    "answer": "9534",
    "solution": [
      "Find the value of $\\sum_{k=1}^{3} (7k + 4) \\cdot 7^{k}$.",
      "Write $y$ for the sum: $y = 11 \\cdot 7 + 18 \\cdot 7^{2} + 25 \\cdot 7^{3}$.",
      "$7y = 11 \\cdot 7^{2} + 18 \\cdot 7^{3} + 25 \\cdot 7^{4}$",
      "$7y - y = -11 \\cdot 7 - 7 \\cdot 7^{2} - 7 \\cdot 7^{3} + 25 \\cdot 7^{4}$",
      "$7 \\cdot 7^{2} + 7 \\cdot 7^{3} = \\dfrac{7 \\cdot 7^{2}(7^{2} - 1)}{7 - 1}$",
      "$\\dfrac{7 \\cdot 7^{2}(7^{2} - 1)}{7 - 1} = 2744$",
      "$7y - y = 57{,}204$",
      "$6y = 57{,}204$",
      "$y = 9534$"
    ]
  },
  {
    "id": "t228-k1-p05",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the value of $\\sum_{k=1}^{3} (6k + 5) \\cdot 7^{k}$.",
    "form": "Answer as an integer.",
    "answer": "8799",
    "solution": [
      "Find the value of $\\sum_{k=1}^{3} (6k + 5) \\cdot 7^{k}$.",
      "Write $y$ for the sum: $y = 11 \\cdot 7 + 17 \\cdot 7^{2} + 23 \\cdot 7^{3}$.",
      "$7y = 11 \\cdot 7^{2} + 17 \\cdot 7^{3} + 23 \\cdot 7^{4}$",
      "$7y - y = -11 \\cdot 7 - 6 \\cdot 7^{2} - 6 \\cdot 7^{3} + 23 \\cdot 7^{4}$",
      "$6 \\cdot 7^{2} + 6 \\cdot 7^{3} = \\dfrac{6 \\cdot 7^{2}(7^{2} - 1)}{7 - 1}$",
      "$\\dfrac{6 \\cdot 7^{2}(7^{2} - 1)}{7 - 1} = 2352$",
      "$7y - y = 52{,}794$",
      "$6y = 52{,}794$",
      "$y = 8799$"
    ]
  },
  {
    "id": "t228-k1-p06",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a closed form for $\\sum_{k=1}^{n} (6k + 6) \\cdot 8^{k}$, for a whole number $n$ from $3$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "((6*n+6)*8^(n+1)-96)/7-(6*8^(n+1)-384)/49",
    "solution": [
      "Find a closed form for $\\sum_{k=1}^{n} (6k + 6) \\cdot 8^{k}$, for a whole number $n$ from $3$ up.",
      "Write $y$ for the sum: $y = 12 \\cdot 8 + 18 \\cdot 8^{2} + 24 \\cdot 8^{3} + \\dots + (6n + 6) \\cdot 8^{n}$.",
      "$8y = 12 \\cdot 8^{2} + 18 \\cdot 8^{3} + \\dots + (6n) \\cdot 8^{n} + (6n + 6) \\cdot 8^{n+1}$",
      "$8y - y = -12 \\cdot 8 - 6 \\cdot 8^{2} - 6 \\cdot 8^{3} - \\dots - 6 \\cdot 8^{n} + (6n + 6) \\cdot 8^{n+1}$",
      "$6 \\cdot 8^{2} + 6 \\cdot 8^{3} + \\dots + 6 \\cdot 8^{n} = \\dfrac{6 \\cdot 8^{2}(8^{n-1} - 1)}{8 - 1}$",
      "$\\dfrac{6 \\cdot 8^{2}(8^{n-1} - 1)}{8 - 1} = \\dfrac{6 \\cdot 8^{n+1} - 384}{7}$",
      "$8y - y = (6n + 6) \\cdot 8^{n+1} - 96 - \\dfrac{6 \\cdot 8^{n+1} - 384}{7}$",
      "$7y = (6n + 6) \\cdot 8^{n+1} - 96 - \\dfrac{6 \\cdot 8^{n+1} - 384}{7}$",
      "$y = \\dfrac{(6n + 6) \\cdot 8^{n+1} - 96}{7} - \\dfrac{6 \\cdot 8^{n+1} - 384}{49}$"
    ]
  },
  {
    "id": "t228-k1-p07",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a closed form for $\\sum_{k=1}^{n} (4k + 2) \\cdot 6^{k}$, for a whole number $n$ from $3$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "((4*n+2)*6^(n+1)-36)/5-(4*6^(n+1)-144)/25",
    "solution": [
      "Find a closed form for $\\sum_{k=1}^{n} (4k + 2) \\cdot 6^{k}$, for a whole number $n$ from $3$ up.",
      "Write $y$ for the sum: $y = 6 \\cdot 6 + 10 \\cdot 6^{2} + 14 \\cdot 6^{3} + \\dots + (4n + 2) \\cdot 6^{n}$.",
      "$6y = 6 \\cdot 6^{2} + 10 \\cdot 6^{3} + \\dots + (4n - 2) \\cdot 6^{n} + (4n + 2) \\cdot 6^{n+1}$",
      "$6y - y = -6 \\cdot 6 - 4 \\cdot 6^{2} - 4 \\cdot 6^{3} - \\dots - 4 \\cdot 6^{n} + (4n + 2) \\cdot 6^{n+1}$",
      "$4 \\cdot 6^{2} + 4 \\cdot 6^{3} + \\dots + 4 \\cdot 6^{n} = \\dfrac{4 \\cdot 6^{2}(6^{n-1} - 1)}{6 - 1}$",
      "$\\dfrac{4 \\cdot 6^{2}(6^{n-1} - 1)}{6 - 1} = \\dfrac{4 \\cdot 6^{n+1} - 144}{5}$",
      "$6y - y = (4n + 2) \\cdot 6^{n+1} - 36 - \\dfrac{4 \\cdot 6^{n+1} - 144}{5}$",
      "$5y = (4n + 2) \\cdot 6^{n+1} - 36 - \\dfrac{4 \\cdot 6^{n+1} - 144}{5}$",
      "$y = \\dfrac{(4n + 2) \\cdot 6^{n+1} - 36}{5} - \\dfrac{4 \\cdot 6^{n+1} - 144}{25}$"
    ]
  },
  {
    "id": "t228-k1-p08",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the value of $\\sum_{k=1}^{4} (2k + 6) \\cdot 7^{k}$.",
    "form": "Answer as an integer.",
    "answer": "38276",
    "solution": [
      "Find the value of $\\sum_{k=1}^{4} (2k + 6) \\cdot 7^{k}$.",
      "Write $y$ for the sum: $y = 8 \\cdot 7 + 10 \\cdot 7^{2} + 12 \\cdot 7^{3} + 14 \\cdot 7^{4}$.",
      "$7y = 8 \\cdot 7^{2} + 10 \\cdot 7^{3} + 12 \\cdot 7^{4} + 14 \\cdot 7^{5}$",
      "$7y - y = -8 \\cdot 7 - 2 \\cdot 7^{2} - 2 \\cdot 7^{3} - 2 \\cdot 7^{4} + 14 \\cdot 7^{5}$",
      "$2 \\cdot 7^{2} + 2 \\cdot 7^{3} + 2 \\cdot 7^{4} = \\dfrac{2 \\cdot 7^{2}(7^{3} - 1)}{7 - 1}$",
      "$\\dfrac{2 \\cdot 7^{2}(7^{3} - 1)}{7 - 1} = 5586$",
      "$7y - y = 229{,}656$",
      "$6y = 229{,}656$",
      "$y = 38{,}276$"
    ]
  },
  {
    "id": "t228-k1-p09",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a closed form for $\\sum_{k=1}^{n} (4k + 1) \\cdot 5^{k}$, for a whole number $n$ from $3$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "((4*n+1)*5^(n+1)-25)/4-(4*5^(n+1)-100)/16",
    "solution": [
      "Find a closed form for $\\sum_{k=1}^{n} (4k + 1) \\cdot 5^{k}$, for a whole number $n$ from $3$ up.",
      "Write $y$ for the sum: $y = 5 \\cdot 5 + 9 \\cdot 5^{2} + 13 \\cdot 5^{3} + \\dots + (4n + 1) \\cdot 5^{n}$.",
      "$5y = 5 \\cdot 5^{2} + 9 \\cdot 5^{3} + \\dots + (4n - 3) \\cdot 5^{n} + (4n + 1) \\cdot 5^{n+1}$",
      "$5y - y = -5 \\cdot 5 - 4 \\cdot 5^{2} - 4 \\cdot 5^{3} - \\dots - 4 \\cdot 5^{n} + (4n + 1) \\cdot 5^{n+1}$",
      "$4 \\cdot 5^{2} + 4 \\cdot 5^{3} + \\dots + 4 \\cdot 5^{n} = \\dfrac{4 \\cdot 5^{2}(5^{n-1} - 1)}{5 - 1}$",
      "$\\dfrac{4 \\cdot 5^{2}(5^{n-1} - 1)}{5 - 1} = \\dfrac{4 \\cdot 5^{n+1} - 100}{4}$",
      "$5y - y = (4n + 1) \\cdot 5^{n+1} - 25 - \\dfrac{4 \\cdot 5^{n+1} - 100}{4}$",
      "$4y = (4n + 1) \\cdot 5^{n+1} - 25 - \\dfrac{4 \\cdot 5^{n+1} - 100}{4}$",
      "$y = \\dfrac{(4n + 1) \\cdot 5^{n+1} - 25}{4} - \\dfrac{4 \\cdot 5^{n+1} - 100}{16}$"
    ]
  },
  {
    "id": "t228-k1-p10",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the value of $\\sum_{k=1}^{3} (2k + 1) \\cdot 4^{k}$.",
    "form": "Answer as an integer.",
    "answer": "540",
    "solution": [
      "Find the value of $\\sum_{k=1}^{3} (2k + 1) \\cdot 4^{k}$.",
      "Write $y$ for the sum: $y = 3 \\cdot 4 + 5 \\cdot 4^{2} + 7 \\cdot 4^{3}$.",
      "$4y = 3 \\cdot 4^{2} + 5 \\cdot 4^{3} + 7 \\cdot 4^{4}$",
      "$4y - y = -3 \\cdot 4 - 2 \\cdot 4^{2} - 2 \\cdot 4^{3} + 7 \\cdot 4^{4}$",
      "$2 \\cdot 4^{2} + 2 \\cdot 4^{3} = \\dfrac{2 \\cdot 4^{2}(4^{2} - 1)}{4 - 1}$",
      "$\\dfrac{2 \\cdot 4^{2}(4^{2} - 1)}{4 - 1} = 160$",
      "$4y - y = 1620$",
      "$3y = 1620$",
      "$y = 540$"
    ]
  },
  {
    "id": "t228-k1-p11",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a closed form for $\\sum_{k=1}^{n} (3k + 6) \\cdot 6^{k}$, for a whole number $n$ from $3$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "((3*n+6)*6^(n+1)-54)/5-(3*6^(n+1)-108)/25",
    "solution": [
      "Find a closed form for $\\sum_{k=1}^{n} (3k + 6) \\cdot 6^{k}$, for a whole number $n$ from $3$ up.",
      "Write $y$ for the sum: $y = 9 \\cdot 6 + 12 \\cdot 6^{2} + 15 \\cdot 6^{3} + \\dots + (3n + 6) \\cdot 6^{n}$.",
      "$6y = 9 \\cdot 6^{2} + 12 \\cdot 6^{3} + \\dots + (3n + 3) \\cdot 6^{n} + (3n + 6) \\cdot 6^{n+1}$",
      "$6y - y = -9 \\cdot 6 - 3 \\cdot 6^{2} - 3 \\cdot 6^{3} - \\dots - 3 \\cdot 6^{n} + (3n + 6) \\cdot 6^{n+1}$",
      "$3 \\cdot 6^{2} + 3 \\cdot 6^{3} + \\dots + 3 \\cdot 6^{n} = \\dfrac{3 \\cdot 6^{2}(6^{n-1} - 1)}{6 - 1}$",
      "$\\dfrac{3 \\cdot 6^{2}(6^{n-1} - 1)}{6 - 1} = \\dfrac{3 \\cdot 6^{n+1} - 108}{5}$",
      "$6y - y = (3n + 6) \\cdot 6^{n+1} - 54 - \\dfrac{3 \\cdot 6^{n+1} - 108}{5}$",
      "$5y = (3n + 6) \\cdot 6^{n+1} - 54 - \\dfrac{3 \\cdot 6^{n+1} - 108}{5}$",
      "$y = \\dfrac{(3n + 6) \\cdot 6^{n+1} - 54}{5} - \\dfrac{3 \\cdot 6^{n+1} - 108}{25}$"
    ]
  },
  {
    "id": "t228-k1-p12",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a closed form for $\\sum_{k=1}^{n} (2k + 3) \\cdot 7^{k}$, for a whole number $n$ from $3$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "((2*n+3)*7^(n+1)-35)/6-(2*7^(n+1)-98)/36",
    "solution": [
      "Find a closed form for $\\sum_{k=1}^{n} (2k + 3) \\cdot 7^{k}$, for a whole number $n$ from $3$ up.",
      "Write $y$ for the sum: $y = 5 \\cdot 7 + 7 \\cdot 7^{2} + 9 \\cdot 7^{3} + \\dots + (2n + 3) \\cdot 7^{n}$.",
      "$7y = 5 \\cdot 7^{2} + 7 \\cdot 7^{3} + \\dots + (2n + 1) \\cdot 7^{n} + (2n + 3) \\cdot 7^{n+1}$",
      "$7y - y = -5 \\cdot 7 - 2 \\cdot 7^{2} - 2 \\cdot 7^{3} - \\dots - 2 \\cdot 7^{n} + (2n + 3) \\cdot 7^{n+1}$",
      "$2 \\cdot 7^{2} + 2 \\cdot 7^{3} + \\dots + 2 \\cdot 7^{n} = \\dfrac{2 \\cdot 7^{2}(7^{n-1} - 1)}{7 - 1}$",
      "$\\dfrac{2 \\cdot 7^{2}(7^{n-1} - 1)}{7 - 1} = \\dfrac{2 \\cdot 7^{n+1} - 98}{6}$",
      "$7y - y = (2n + 3) \\cdot 7^{n+1} - 35 - \\dfrac{2 \\cdot 7^{n+1} - 98}{6}$",
      "$6y = (2n + 3) \\cdot 7^{n+1} - 35 - \\dfrac{2 \\cdot 7^{n+1} - 98}{6}$",
      "$y = \\dfrac{(2n + 3) \\cdot 7^{n+1} - 35}{6} - \\dfrac{2 \\cdot 7^{n+1} - 98}{36}$"
    ]
  },
  {
    "id": "t228-k1-p13",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a closed form for $\\sum_{k=1}^{n} (3k + 4) \\cdot 5^{k}$, for a whole number $n$ from $3$ up.",
    "form": "Answer as an expression, or equivalent.",
    "answer": "((3*n+4)*5^(n+1)-35)/4-(3*5^(n+1)-75)/16",
    "solution": [
      "Find a closed form for $\\sum_{k=1}^{n} (3k + 4) \\cdot 5^{k}$, for a whole number $n$ from $3$ up.",
      "Write $y$ for the sum: $y = 7 \\cdot 5 + 10 \\cdot 5^{2} + 13 \\cdot 5^{3} + \\dots + (3n + 4) \\cdot 5^{n}$.",
      "$5y = 7 \\cdot 5^{2} + 10 \\cdot 5^{3} + \\dots + (3n + 1) \\cdot 5^{n} + (3n + 4) \\cdot 5^{n+1}$",
      "$5y - y = -7 \\cdot 5 - 3 \\cdot 5^{2} - 3 \\cdot 5^{3} - \\dots - 3 \\cdot 5^{n} + (3n + 4) \\cdot 5^{n+1}$",
      "$3 \\cdot 5^{2} + 3 \\cdot 5^{3} + \\dots + 3 \\cdot 5^{n} = \\dfrac{3 \\cdot 5^{2}(5^{n-1} - 1)}{5 - 1}$",
      "$\\dfrac{3 \\cdot 5^{2}(5^{n-1} - 1)}{5 - 1} = \\dfrac{3 \\cdot 5^{n+1} - 75}{4}$",
      "$5y - y = (3n + 4) \\cdot 5^{n+1} - 35 - \\dfrac{3 \\cdot 5^{n+1} - 75}{4}$",
      "$4y = (3n + 4) \\cdot 5^{n+1} - 35 - \\dfrac{3 \\cdot 5^{n+1} - 75}{4}$",
      "$y = \\dfrac{(3n + 4) \\cdot 5^{n+1} - 35}{4} - \\dfrac{3 \\cdot 5^{n+1} - 75}{16}$"
    ]
  },
  {
    "id": "t228-k1-p14",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the value of $\\sum_{k=1}^{3} (6k + 2) \\cdot 6^{k}$.",
    "form": "Answer as an integer.",
    "answer": "4872",
    "solution": [
      "Find the value of $\\sum_{k=1}^{3} (6k + 2) \\cdot 6^{k}$.",
      "Write $y$ for the sum: $y = 8 \\cdot 6 + 14 \\cdot 6^{2} + 20 \\cdot 6^{3}$.",
      "$6y = 8 \\cdot 6^{2} + 14 \\cdot 6^{3} + 20 \\cdot 6^{4}$",
      "$6y - y = -8 \\cdot 6 - 6 \\cdot 6^{2} - 6 \\cdot 6^{3} + 20 \\cdot 6^{4}$",
      "$6 \\cdot 6^{2} + 6 \\cdot 6^{3} = \\dfrac{6 \\cdot 6^{2}(6^{2} - 1)}{6 - 1}$",
      "$\\dfrac{6 \\cdot 6^{2}(6^{2} - 1)}{6 - 1} = 1512$",
      "$6y - y = 24{,}360$",
      "$5y = 24{,}360$",
      "$y = 4872$"
    ]
  },
  {
    "id": "t228-k2-p01",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (7k + 6)\\left(\\dfrac{4}{11}\\right)^{k}$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "68/7",
    "solution": [
      "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (7k + 6)\\left(\\dfrac{4}{11}\\right)^{k}$.",
      "Write $y$ for the sum: $y = 13 \\cdot \\dfrac{4}{11} + 20 \\cdot \\left(\\dfrac{4}{11}\\right)^{2} + 27 \\cdot \\left(\\dfrac{4}{11}\\right)^{3} + 34 \\cdot \\left(\\dfrac{4}{11}\\right)^{4} + \\dots$.",
      "$\\dfrac{4}{11}y = 13 \\cdot \\left(\\dfrac{4}{11}\\right)^{2} + 20 \\cdot \\left(\\dfrac{4}{11}\\right)^{3} + 27 \\cdot \\left(\\dfrac{4}{11}\\right)^{4} + \\dots$",
      "$y - \\dfrac{4}{11}y = 13 \\cdot \\dfrac{4}{11} + 7 \\cdot \\left(\\dfrac{4}{11}\\right)^{2} + 7 \\cdot \\left(\\dfrac{4}{11}\\right)^{3} + \\dots$",
      "$7 \\cdot \\left(\\dfrac{4}{11}\\right)^{2} + 7 \\cdot \\left(\\dfrac{4}{11}\\right)^{3} + \\dots = \\dfrac{\\frac{112}{121}}{1 - \\frac{4}{11}}$",
      "$\\dfrac{\\frac{112}{121}}{1 - \\frac{4}{11}} = \\dfrac{16}{11}$",
      "$y - \\dfrac{4}{11}y = \\dfrac{68}{11}$",
      "$\\dfrac{7}{11}y = \\dfrac{68}{11}$",
      "$y = \\dfrac{68}{7}$"
    ]
  },
  {
    "id": "t228-k2-p02",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a closed form for $\\sum_{k=1}^{\\infty} (17k + 9)x^{k}$, where $|x| < 1$.",
    "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
    "answer": "(26*x-9*x^2)/(1-x)^2",
    "solution": [
      "Find a closed form for $\\sum_{k=1}^{\\infty} (17k + 9)x^{k}$, where $|x| < 1$.",
      "Write $y$ for the sum: $y = 26x + 43x^{2} + 60x^{3} + 77x^{4} + \\dots$.",
      "$xy = 26x^{2} + 43x^{3} + 60x^{4} + \\dots$",
      "$y - xy = 26x + 17x^{2} + 17x^{3} + \\dots$",
      "$17x^{2} + 17x^{3} + \\dots = \\dfrac{17x^{2}}{1 - x}$",
      "$y - xy = 26x + \\dfrac{17x^{2}}{1 - x}$",
      "$y - xy = \\dfrac{26x - 9x^{2}}{1 - x}$",
      "$(1 - x)y = \\dfrac{26x - 9x^{2}}{1 - x}$",
      "$y = \\dfrac{26x - 9x^{2}}{(1 - x)^{2}}$"
    ]
  },
  {
    "id": "t228-k2-p03",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (7k + 4)\\left(\\dfrac{3}{4}\\right)^{k}$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "96",
    "solution": [
      "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (7k + 4)\\left(\\dfrac{3}{4}\\right)^{k}$.",
      "Write $y$ for the sum: $y = 11 \\cdot \\dfrac{3}{4} + 18 \\cdot \\left(\\dfrac{3}{4}\\right)^{2} + 25 \\cdot \\left(\\dfrac{3}{4}\\right)^{3} + 32 \\cdot \\left(\\dfrac{3}{4}\\right)^{4} + \\dots$.",
      "$\\dfrac{3}{4}y = 11 \\cdot \\left(\\dfrac{3}{4}\\right)^{2} + 18 \\cdot \\left(\\dfrac{3}{4}\\right)^{3} + 25 \\cdot \\left(\\dfrac{3}{4}\\right)^{4} + \\dots$",
      "$y - \\dfrac{3}{4}y = 11 \\cdot \\dfrac{3}{4} + 7 \\cdot \\left(\\dfrac{3}{4}\\right)^{2} + 7 \\cdot \\left(\\dfrac{3}{4}\\right)^{3} + \\dots$",
      "$7 \\cdot \\left(\\dfrac{3}{4}\\right)^{2} + 7 \\cdot \\left(\\dfrac{3}{4}\\right)^{3} + \\dots = \\dfrac{\\frac{63}{16}}{1 - \\frac{3}{4}}$",
      "$\\dfrac{\\frac{63}{16}}{1 - \\frac{3}{4}} = \\dfrac{63}{4}$",
      "$y - \\dfrac{3}{4}y = 24$",
      "$\\dfrac{1}{4}y = 24$",
      "$y = 96$"
    ]
  },
  {
    "id": "t228-k2-p04",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a closed form for $\\sum_{k=1}^{\\infty} (15k + 8)x^{k}$, where $|x| < 1$.",
    "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
    "answer": "(23*x-8*x^2)/(1-x)^2",
    "solution": [
      "Find a closed form for $\\sum_{k=1}^{\\infty} (15k + 8)x^{k}$, where $|x| < 1$.",
      "Write $y$ for the sum: $y = 23x + 38x^{2} + 53x^{3} + 68x^{4} + \\dots$.",
      "$xy = 23x^{2} + 38x^{3} + 53x^{4} + \\dots$",
      "$y - xy = 23x + 15x^{2} + 15x^{3} + \\dots$",
      "$15x^{2} + 15x^{3} + \\dots = \\dfrac{15x^{2}}{1 - x}$",
      "$y - xy = 23x + \\dfrac{15x^{2}}{1 - x}$",
      "$y - xy = \\dfrac{23x - 8x^{2}}{1 - x}$",
      "$(1 - x)y = \\dfrac{23x - 8x^{2}}{1 - x}$",
      "$y = \\dfrac{23x - 8x^{2}}{(1 - x)^{2}}$"
    ]
  },
  {
    "id": "t228-k2-p05",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (5k + 6)\\left(\\dfrac{7}{8}\\right)^{k}$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "322",
    "solution": [
      "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (5k + 6)\\left(\\dfrac{7}{8}\\right)^{k}$.",
      "Write $y$ for the sum: $y = 11 \\cdot \\dfrac{7}{8} + 16 \\cdot \\left(\\dfrac{7}{8}\\right)^{2} + 21 \\cdot \\left(\\dfrac{7}{8}\\right)^{3} + 26 \\cdot \\left(\\dfrac{7}{8}\\right)^{4} + \\dots$.",
      "$\\dfrac{7}{8}y = 11 \\cdot \\left(\\dfrac{7}{8}\\right)^{2} + 16 \\cdot \\left(\\dfrac{7}{8}\\right)^{3} + 21 \\cdot \\left(\\dfrac{7}{8}\\right)^{4} + \\dots$",
      "$y - \\dfrac{7}{8}y = 11 \\cdot \\dfrac{7}{8} + 5 \\cdot \\left(\\dfrac{7}{8}\\right)^{2} + 5 \\cdot \\left(\\dfrac{7}{8}\\right)^{3} + \\dots$",
      "$5 \\cdot \\left(\\dfrac{7}{8}\\right)^{2} + 5 \\cdot \\left(\\dfrac{7}{8}\\right)^{3} + \\dots = \\dfrac{\\frac{245}{64}}{1 - \\frac{7}{8}}$",
      "$\\dfrac{\\frac{245}{64}}{1 - \\frac{7}{8}} = \\dfrac{245}{8}$",
      "$y - \\dfrac{7}{8}y = \\dfrac{161}{4}$",
      "$\\dfrac{1}{8}y = \\dfrac{161}{4}$",
      "$y = 322$"
    ]
  },
  {
    "id": "t228-k2-p06",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a closed form for $\\sum_{k=1}^{\\infty} (23k - 16)x^{k}$, where $|x| < 1$.",
    "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
    "answer": "(7*x+16*x^2)/(1-x)^2",
    "solution": [
      "Find a closed form for $\\sum_{k=1}^{\\infty} (23k - 16)x^{k}$, where $|x| < 1$.",
      "Write $y$ for the sum: $y = 7x + 30x^{2} + 53x^{3} + 76x^{4} + \\dots$.",
      "$xy = 7x^{2} + 30x^{3} + 53x^{4} + \\dots$",
      "$y - xy = 7x + 23x^{2} + 23x^{3} + \\dots$",
      "$23x^{2} + 23x^{3} + \\dots = \\dfrac{23x^{2}}{1 - x}$",
      "$y - xy = 7x + \\dfrac{23x^{2}}{1 - x}$",
      "$y - xy = \\dfrac{7x + 16x^{2}}{1 - x}$",
      "$(1 - x)y = \\dfrac{7x + 16x^{2}}{1 - x}$",
      "$y = \\dfrac{7x + 16x^{2}}{(1 - x)^{2}}$"
    ]
  },
  {
    "id": "t228-k2-p07",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a closed form for $\\sum_{k=1}^{\\infty} (6k - 11)x^{k}$, where $|x| < 1$.",
    "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
    "answer": "(-5*x+11*x^2)/(1-x)^2",
    "solution": [
      "Find a closed form for $\\sum_{k=1}^{\\infty} (6k - 11)x^{k}$, where $|x| < 1$.",
      "Write $y$ for the sum: $y = -5x + x^{2} + 7x^{3} + 13x^{4} + \\dots$.",
      "$xy = -5x^{2} + x^{3} + 7x^{4} + \\dots$",
      "$y - xy = -5x + 6x^{2} + 6x^{3} + \\dots$",
      "$6x^{2} + 6x^{3} + \\dots = \\dfrac{6x^{2}}{1 - x}$",
      "$y - xy = -5x + \\dfrac{6x^{2}}{1 - x}$",
      "$y - xy = \\dfrac{-5x + 11x^{2}}{1 - x}$",
      "$(1 - x)y = \\dfrac{-5x + 11x^{2}}{1 - x}$",
      "$y = \\dfrac{-5x + 11x^{2}}{(1 - x)^{2}}$"
    ]
  },
  {
    "id": "t228-k2-p08",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a closed form for $\\sum_{k=1}^{\\infty} (10k + 7)x^{k}$, where $|x| < 1$.",
    "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
    "answer": "(17*x-7*x^2)/(1-x)^2",
    "solution": [
      "Find a closed form for $\\sum_{k=1}^{\\infty} (10k + 7)x^{k}$, where $|x| < 1$.",
      "Write $y$ for the sum: $y = 17x + 27x^{2} + 37x^{3} + 47x^{4} + \\dots$.",
      "$xy = 17x^{2} + 27x^{3} + 37x^{4} + \\dots$",
      "$y - xy = 17x + 10x^{2} + 10x^{3} + \\dots$",
      "$10x^{2} + 10x^{3} + \\dots = \\dfrac{10x^{2}}{1 - x}$",
      "$y - xy = 17x + \\dfrac{10x^{2}}{1 - x}$",
      "$y - xy = \\dfrac{17x - 7x^{2}}{1 - x}$",
      "$(1 - x)y = \\dfrac{17x - 7x^{2}}{1 - x}$",
      "$y = \\dfrac{17x - 7x^{2}}{(1 - x)^{2}}$"
    ]
  },
  {
    "id": "t228-k2-p09",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a closed form for $\\sum_{k=1}^{\\infty} (3k - 10)x^{k}$, where $|x| < 1$.",
    "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
    "answer": "(-7*x+10*x^2)/(1-x)^2",
    "solution": [
      "Find a closed form for $\\sum_{k=1}^{\\infty} (3k - 10)x^{k}$, where $|x| < 1$.",
      "Write $y$ for the sum: $y = -7x - 4x^{2} - x^{3} + 2x^{4} + \\dots$.",
      "$xy = -7x^{2} - 4x^{3} - x^{4} + \\dots$",
      "$y - xy = -7x + 3x^{2} + 3x^{3} + \\dots$",
      "$3x^{2} + 3x^{3} + \\dots = \\dfrac{3x^{2}}{1 - x}$",
      "$y - xy = -7x + \\dfrac{3x^{2}}{1 - x}$",
      "$y - xy = \\dfrac{-7x + 10x^{2}}{1 - x}$",
      "$(1 - x)y = \\dfrac{-7x + 10x^{2}}{1 - x}$",
      "$y = \\dfrac{-7x + 10x^{2}}{(1 - x)^{2}}$"
    ]
  },
  {
    "id": "t228-k2-p10",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (3k + 6)\\left(\\dfrac{5}{8}\\right)^{k}$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "70/3",
    "solution": [
      "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (3k + 6)\\left(\\dfrac{5}{8}\\right)^{k}$.",
      "Write $y$ for the sum: $y = 9 \\cdot \\dfrac{5}{8} + 12 \\cdot \\left(\\dfrac{5}{8}\\right)^{2} + 15 \\cdot \\left(\\dfrac{5}{8}\\right)^{3} + 18 \\cdot \\left(\\dfrac{5}{8}\\right)^{4} + \\dots$.",
      "$\\dfrac{5}{8}y = 9 \\cdot \\left(\\dfrac{5}{8}\\right)^{2} + 12 \\cdot \\left(\\dfrac{5}{8}\\right)^{3} + 15 \\cdot \\left(\\dfrac{5}{8}\\right)^{4} + \\dots$",
      "$y - \\dfrac{5}{8}y = 9 \\cdot \\dfrac{5}{8} + 3 \\cdot \\left(\\dfrac{5}{8}\\right)^{2} + 3 \\cdot \\left(\\dfrac{5}{8}\\right)^{3} + \\dots$",
      "$3 \\cdot \\left(\\dfrac{5}{8}\\right)^{2} + 3 \\cdot \\left(\\dfrac{5}{8}\\right)^{3} + \\dots = \\dfrac{\\frac{75}{64}}{1 - \\frac{5}{8}}$",
      "$\\dfrac{\\frac{75}{64}}{1 - \\frac{5}{8}} = \\dfrac{25}{8}$",
      "$y - \\dfrac{5}{8}y = \\dfrac{35}{4}$",
      "$\\dfrac{3}{8}y = \\dfrac{35}{4}$",
      "$y = \\dfrac{70}{3}$"
    ]
  },
  {
    "id": "t228-k2-p11",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (6k + 1)\\left(\\dfrac{5}{11}\\right)^{k}$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "10",
    "solution": [
      "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (6k + 1)\\left(\\dfrac{5}{11}\\right)^{k}$.",
      "Write $y$ for the sum: $y = 7 \\cdot \\dfrac{5}{11} + 13 \\cdot \\left(\\dfrac{5}{11}\\right)^{2} + 19 \\cdot \\left(\\dfrac{5}{11}\\right)^{3} + 25 \\cdot \\left(\\dfrac{5}{11}\\right)^{4} + \\dots$.",
      "$\\dfrac{5}{11}y = 7 \\cdot \\left(\\dfrac{5}{11}\\right)^{2} + 13 \\cdot \\left(\\dfrac{5}{11}\\right)^{3} + 19 \\cdot \\left(\\dfrac{5}{11}\\right)^{4} + \\dots$",
      "$y - \\dfrac{5}{11}y = 7 \\cdot \\dfrac{5}{11} + 6 \\cdot \\left(\\dfrac{5}{11}\\right)^{2} + 6 \\cdot \\left(\\dfrac{5}{11}\\right)^{3} + \\dots$",
      "$6 \\cdot \\left(\\dfrac{5}{11}\\right)^{2} + 6 \\cdot \\left(\\dfrac{5}{11}\\right)^{3} + \\dots = \\dfrac{\\frac{150}{121}}{1 - \\frac{5}{11}}$",
      "$\\dfrac{\\frac{150}{121}}{1 - \\frac{5}{11}} = \\dfrac{25}{11}$",
      "$y - \\dfrac{5}{11}y = \\dfrac{60}{11}$",
      "$\\dfrac{6}{11}y = \\dfrac{60}{11}$",
      "$y = 10$"
    ]
  },
  {
    "id": "t228-k2-p12",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a closed form for $\\sum_{k=1}^{\\infty} (9k + 4)x^{k}$, where $|x| < 1$.",
    "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
    "answer": "(13*x-4*x^2)/(1-x)^2",
    "solution": [
      "Find a closed form for $\\sum_{k=1}^{\\infty} (9k + 4)x^{k}$, where $|x| < 1$.",
      "Write $y$ for the sum: $y = 13x + 22x^{2} + 31x^{3} + 40x^{4} + \\dots$.",
      "$xy = 13x^{2} + 22x^{3} + 31x^{4} + \\dots$",
      "$y - xy = 13x + 9x^{2} + 9x^{3} + \\dots$",
      "$9x^{2} + 9x^{3} + \\dots = \\dfrac{9x^{2}}{1 - x}$",
      "$y - xy = 13x + \\dfrac{9x^{2}}{1 - x}$",
      "$y - xy = \\dfrac{13x - 4x^{2}}{1 - x}$",
      "$(1 - x)y = \\dfrac{13x - 4x^{2}}{1 - x}$",
      "$y = \\dfrac{13x - 4x^{2}}{(1 - x)^{2}}$"
    ]
  },
  {
    "id": "t228-k2-p13",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (3k + 3)\\left(\\dfrac{7}{10}\\right)^{k}$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "91/3",
    "solution": [
      "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (3k + 3)\\left(\\dfrac{7}{10}\\right)^{k}$.",
      "Write $y$ for the sum: $y = 6 \\cdot \\dfrac{7}{10} + 9 \\cdot \\left(\\dfrac{7}{10}\\right)^{2} + 12 \\cdot \\left(\\dfrac{7}{10}\\right)^{3} + 15 \\cdot \\left(\\dfrac{7}{10}\\right)^{4} + \\dots$.",
      "$\\dfrac{7}{10}y = 6 \\cdot \\left(\\dfrac{7}{10}\\right)^{2} + 9 \\cdot \\left(\\dfrac{7}{10}\\right)^{3} + 12 \\cdot \\left(\\dfrac{7}{10}\\right)^{4} + \\dots$",
      "$y - \\dfrac{7}{10}y = 6 \\cdot \\dfrac{7}{10} + 3 \\cdot \\left(\\dfrac{7}{10}\\right)^{2} + 3 \\cdot \\left(\\dfrac{7}{10}\\right)^{3} + \\dots$",
      "$3 \\cdot \\left(\\dfrac{7}{10}\\right)^{2} + 3 \\cdot \\left(\\dfrac{7}{10}\\right)^{3} + \\dots = \\dfrac{\\frac{147}{100}}{1 - \\frac{7}{10}}$",
      "$\\dfrac{\\frac{147}{100}}{1 - \\frac{7}{10}} = \\dfrac{49}{10}$",
      "$y - \\dfrac{7}{10}y = \\dfrac{91}{10}$",
      "$\\dfrac{3}{10}y = \\dfrac{91}{10}$",
      "$y = \\dfrac{91}{3}$"
    ]
  },
  {
    "id": "t228-k2-p14",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (6k + 5)\\left(\\dfrac{5}{7}\\right)^{k}$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "65",
    "solution": [
      "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (6k + 5)\\left(\\dfrac{5}{7}\\right)^{k}$.",
      "Write $y$ for the sum: $y = 11 \\cdot \\dfrac{5}{7} + 17 \\cdot \\left(\\dfrac{5}{7}\\right)^{2} + 23 \\cdot \\left(\\dfrac{5}{7}\\right)^{3} + 29 \\cdot \\left(\\dfrac{5}{7}\\right)^{4} + \\dots$.",
      "$\\dfrac{5}{7}y = 11 \\cdot \\left(\\dfrac{5}{7}\\right)^{2} + 17 \\cdot \\left(\\dfrac{5}{7}\\right)^{3} + 23 \\cdot \\left(\\dfrac{5}{7}\\right)^{4} + \\dots$",
      "$y - \\dfrac{5}{7}y = 11 \\cdot \\dfrac{5}{7} + 6 \\cdot \\left(\\dfrac{5}{7}\\right)^{2} + 6 \\cdot \\left(\\dfrac{5}{7}\\right)^{3} + \\dots$",
      "$6 \\cdot \\left(\\dfrac{5}{7}\\right)^{2} + 6 \\cdot \\left(\\dfrac{5}{7}\\right)^{3} + \\dots = \\dfrac{\\frac{150}{49}}{1 - \\frac{5}{7}}$",
      "$\\dfrac{\\frac{150}{49}}{1 - \\frac{5}{7}} = \\dfrac{75}{7}$",
      "$y - \\dfrac{5}{7}y = \\dfrac{130}{7}$",
      "$\\dfrac{2}{7}y = \\dfrac{130}{7}$",
      "$y = 65$"
    ]
  },
  {
    "id": "t228-k3-p01",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (7k + 1)^{2}\\left(\\dfrac{9}{10}\\right)^{k}$, given that the series converges.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "85059",
    "solution": [
      "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (7k + 1)^{2}\\left(\\dfrac{9}{10}\\right)^{k}$, given that the series converges.",
      "Write $y$ for the sum: $y = 64 \\cdot \\dfrac{9}{10} + 225 \\cdot \\left(\\dfrac{9}{10}\\right)^{2} + 484 \\cdot \\left(\\dfrac{9}{10}\\right)^{3} + 841 \\cdot \\left(\\dfrac{9}{10}\\right)^{4} + \\dots$.",
      "$\\dfrac{9}{10}y = 64 \\cdot \\left(\\dfrac{9}{10}\\right)^{2} + 225 \\cdot \\left(\\dfrac{9}{10}\\right)^{3} + 484 \\cdot \\left(\\dfrac{9}{10}\\right)^{4} + \\dots$",
      "$y - \\dfrac{9}{10}y = 64 \\cdot \\dfrac{9}{10} + 161 \\cdot \\left(\\dfrac{9}{10}\\right)^{2} + 259 \\cdot \\left(\\dfrac{9}{10}\\right)^{3} + 357 \\cdot \\left(\\dfrac{9}{10}\\right)^{4} + \\dots$",
      "$\\dfrac{9}{10}\\left(y - \\dfrac{9}{10}y\\right) = 64 \\cdot \\left(\\dfrac{9}{10}\\right)^{2} + 161 \\cdot \\left(\\dfrac{9}{10}\\right)^{3} + 259 \\cdot \\left(\\dfrac{9}{10}\\right)^{4} + \\dots$",
      "$\\left(y - \\dfrac{9}{10}y\\right) - \\dfrac{9}{10}\\left(y - \\dfrac{9}{10}y\\right) = 64 \\cdot \\dfrac{9}{10} + 97 \\cdot \\left(\\dfrac{9}{10}\\right)^{2} + 98 \\cdot \\left(\\dfrac{9}{10}\\right)^{3} + 98 \\cdot \\left(\\dfrac{9}{10}\\right)^{4} + \\dots$",
      "$98 \\cdot \\left(\\dfrac{9}{10}\\right)^{3} + 98 \\cdot \\left(\\dfrac{9}{10}\\right)^{4} + \\dots = \\dfrac{\\frac{35{,}721}{500}}{1 - \\frac{9}{10}}$",
      "$\\dfrac{\\frac{35{,}721}{500}}{1 - \\frac{9}{10}} = \\dfrac{35{,}721}{50}$",
      "$\\left(y - \\dfrac{9}{10}y\\right) - \\dfrac{9}{10}\\left(y - \\dfrac{9}{10}y\\right) = \\dfrac{85{,}059}{100}$",
      "$\\left(1 - \\dfrac{9}{10}\\right)\\left(y - \\dfrac{9}{10}y\\right) = \\dfrac{85{,}059}{100}$",
      "$\\left(1 - \\dfrac{9}{10}\\right)\\left(1 - \\dfrac{9}{10}\\right)y = \\dfrac{85{,}059}{100}$",
      "$y = 85{,}059$"
    ]
  },
  {
    "id": "t228-k3-p02",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (7k + 5)^{2}\\left(\\dfrac{10}{11}\\right)^{k}$, given that the series converges.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "121140",
    "solution": [
      "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (7k + 5)^{2}\\left(\\dfrac{10}{11}\\right)^{k}$, given that the series converges.",
      "Write $y$ for the sum: $y = 144 \\cdot \\dfrac{10}{11} + 361 \\cdot \\left(\\dfrac{10}{11}\\right)^{2} + 676 \\cdot \\left(\\dfrac{10}{11}\\right)^{3} + 1089 \\cdot \\left(\\dfrac{10}{11}\\right)^{4} + \\dots$.",
      "$\\dfrac{10}{11}y = 144 \\cdot \\left(\\dfrac{10}{11}\\right)^{2} + 361 \\cdot \\left(\\dfrac{10}{11}\\right)^{3} + 676 \\cdot \\left(\\dfrac{10}{11}\\right)^{4} + \\dots$",
      "$y - \\dfrac{10}{11}y = 144 \\cdot \\dfrac{10}{11} + 217 \\cdot \\left(\\dfrac{10}{11}\\right)^{2} + 315 \\cdot \\left(\\dfrac{10}{11}\\right)^{3} + 413 \\cdot \\left(\\dfrac{10}{11}\\right)^{4} + \\dots$",
      "$\\dfrac{10}{11}\\left(y - \\dfrac{10}{11}y\\right) = 144 \\cdot \\left(\\dfrac{10}{11}\\right)^{2} + 217 \\cdot \\left(\\dfrac{10}{11}\\right)^{3} + 315 \\cdot \\left(\\dfrac{10}{11}\\right)^{4} + \\dots$",
      "$\\left(y - \\dfrac{10}{11}y\\right) - \\dfrac{10}{11}\\left(y - \\dfrac{10}{11}y\\right) = 144 \\cdot \\dfrac{10}{11} + 73 \\cdot \\left(\\dfrac{10}{11}\\right)^{2} + 98 \\cdot \\left(\\dfrac{10}{11}\\right)^{3} + 98 \\cdot \\left(\\dfrac{10}{11}\\right)^{4} + \\dots$",
      "$98 \\cdot \\left(\\dfrac{10}{11}\\right)^{3} + 98 \\cdot \\left(\\dfrac{10}{11}\\right)^{4} + \\dots = \\dfrac{\\frac{98{,}000}{1331}}{1 - \\frac{10}{11}}$",
      "$\\dfrac{\\frac{98{,}000}{1331}}{1 - \\frac{10}{11}} = \\dfrac{98{,}000}{121}$",
      "$\\left(y - \\dfrac{10}{11}y\\right) - \\dfrac{10}{11}\\left(y - \\dfrac{10}{11}y\\right) = \\dfrac{121{,}140}{121}$",
      "$\\left(1 - \\dfrac{10}{11}\\right)\\left(y - \\dfrac{10}{11}y\\right) = \\dfrac{121{,}140}{121}$",
      "$\\left(1 - \\dfrac{10}{11}\\right)\\left(1 - \\dfrac{10}{11}\\right)y = \\dfrac{121{,}140}{121}$",
      "$y = 121{,}140$"
    ]
  },
  {
    "id": "t228-k3-p03",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} \\dfrac{(6k + 1)^{2}}{10^{k}}$, given that the series converges.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "569/81",
    "solution": [
      "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} \\dfrac{(6k + 1)^{2}}{10^{k}}$, given that the series converges.",
      "Write $y$ for the sum: $y = \\dfrac{49}{10} + \\dfrac{169}{10^{2}} + \\dfrac{361}{10^{3}} + \\dfrac{625}{10^{4}} + \\dots$.",
      "$\\dfrac{y}{10} = \\dfrac{49}{10^{2}} + \\dfrac{169}{10^{3}} + \\dfrac{361}{10^{4}} + \\dots$",
      "$y - \\dfrac{y}{10} = \\dfrac{49}{10} + \\dfrac{120}{10^{2}} + \\dfrac{192}{10^{3}} + \\dfrac{264}{10^{4}} + \\dots$",
      "$\\dfrac{1}{10}\\left(y - \\dfrac{y}{10}\\right) = \\dfrac{49}{10^{2}} + \\dfrac{120}{10^{3}} + \\dfrac{192}{10^{4}} + \\dots$",
      "$\\left(y - \\dfrac{y}{10}\\right) - \\dfrac{1}{10}\\left(y - \\dfrac{y}{10}\\right) = \\dfrac{49}{10} + \\dfrac{71}{10^{2}} + \\dfrac{72}{10^{3}} + \\dfrac{72}{10^{4}} + \\dots$",
      "$\\dfrac{72}{10^{3}} + \\dfrac{72}{10^{4}} + \\dots = \\dfrac{\\frac{9}{125}}{1 - \\frac{1}{10}}$",
      "$\\dfrac{\\frac{9}{125}}{1 - \\frac{1}{10}} = \\dfrac{2}{25}$",
      "$\\left(y - \\dfrac{y}{10}\\right) - \\dfrac{1}{10}\\left(y - \\dfrac{y}{10}\\right) = \\dfrac{569}{100}$",
      "$\\left(1 - \\dfrac{1}{10}\\right)\\left(y - \\dfrac{y}{10}\\right) = \\dfrac{569}{100}$",
      "$\\left(1 - \\dfrac{1}{10}\\right)\\left(1 - \\dfrac{1}{10}\\right)y = \\dfrac{569}{100}$",
      "$y = \\dfrac{569}{81}$"
    ]
  },
  {
    "id": "t228-k3-p04",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (4k + 3)^{2}\\left(\\dfrac{5}{8}\\right)^{k}$, given that the series converges.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "11605/27",
    "solution": [
      "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (4k + 3)^{2}\\left(\\dfrac{5}{8}\\right)^{k}$, given that the series converges.",
      "Write $y$ for the sum: $y = 49 \\cdot \\dfrac{5}{8} + 121 \\cdot \\left(\\dfrac{5}{8}\\right)^{2} + 225 \\cdot \\left(\\dfrac{5}{8}\\right)^{3} + 361 \\cdot \\left(\\dfrac{5}{8}\\right)^{4} + \\dots$.",
      "$\\dfrac{5}{8}y = 49 \\cdot \\left(\\dfrac{5}{8}\\right)^{2} + 121 \\cdot \\left(\\dfrac{5}{8}\\right)^{3} + 225 \\cdot \\left(\\dfrac{5}{8}\\right)^{4} + \\dots$",
      "$y - \\dfrac{5}{8}y = 49 \\cdot \\dfrac{5}{8} + 72 \\cdot \\left(\\dfrac{5}{8}\\right)^{2} + 104 \\cdot \\left(\\dfrac{5}{8}\\right)^{3} + 136 \\cdot \\left(\\dfrac{5}{8}\\right)^{4} + \\dots$",
      "$\\dfrac{5}{8}\\left(y - \\dfrac{5}{8}y\\right) = 49 \\cdot \\left(\\dfrac{5}{8}\\right)^{2} + 72 \\cdot \\left(\\dfrac{5}{8}\\right)^{3} + 104 \\cdot \\left(\\dfrac{5}{8}\\right)^{4} + \\dots$",
      "$\\left(y - \\dfrac{5}{8}y\\right) - \\dfrac{5}{8}\\left(y - \\dfrac{5}{8}y\\right) = 49 \\cdot \\dfrac{5}{8} + 23 \\cdot \\left(\\dfrac{5}{8}\\right)^{2} + 32 \\cdot \\left(\\dfrac{5}{8}\\right)^{3} + 32 \\cdot \\left(\\dfrac{5}{8}\\right)^{4} + \\dots$",
      "$32 \\cdot \\left(\\dfrac{5}{8}\\right)^{3} + 32 \\cdot \\left(\\dfrac{5}{8}\\right)^{4} + \\dots = \\dfrac{\\frac{125}{16}}{1 - \\frac{5}{8}}$",
      "$\\dfrac{\\frac{125}{16}}{1 - \\frac{5}{8}} = \\dfrac{125}{6}$",
      "$\\left(y - \\dfrac{5}{8}y\\right) - \\dfrac{5}{8}\\left(y - \\dfrac{5}{8}y\\right) = \\dfrac{11{,}605}{192}$",
      "$\\left(1 - \\dfrac{5}{8}\\right)\\left(y - \\dfrac{5}{8}y\\right) = \\dfrac{11{,}605}{192}$",
      "$\\left(1 - \\dfrac{5}{8}\\right)\\left(1 - \\dfrac{5}{8}\\right)y = \\dfrac{11{,}605}{192}$",
      "$y = \\dfrac{11{,}605}{27}$"
    ]
  },
  {
    "id": "t228-k3-p05",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (7k + 2)^{2}\\left(\\dfrac{6}{11}\\right)^{k}$, given that the series converges.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "64818/125",
    "solution": [
      "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (7k + 2)^{2}\\left(\\dfrac{6}{11}\\right)^{k}$, given that the series converges.",
      "Write $y$ for the sum: $y = 81 \\cdot \\dfrac{6}{11} + 256 \\cdot \\left(\\dfrac{6}{11}\\right)^{2} + 529 \\cdot \\left(\\dfrac{6}{11}\\right)^{3} + 900 \\cdot \\left(\\dfrac{6}{11}\\right)^{4} + \\dots$.",
      "$\\dfrac{6}{11}y = 81 \\cdot \\left(\\dfrac{6}{11}\\right)^{2} + 256 \\cdot \\left(\\dfrac{6}{11}\\right)^{3} + 529 \\cdot \\left(\\dfrac{6}{11}\\right)^{4} + \\dots$",
      "$y - \\dfrac{6}{11}y = 81 \\cdot \\dfrac{6}{11} + 175 \\cdot \\left(\\dfrac{6}{11}\\right)^{2} + 273 \\cdot \\left(\\dfrac{6}{11}\\right)^{3} + 371 \\cdot \\left(\\dfrac{6}{11}\\right)^{4} + \\dots$",
      "$\\dfrac{6}{11}\\left(y - \\dfrac{6}{11}y\\right) = 81 \\cdot \\left(\\dfrac{6}{11}\\right)^{2} + 175 \\cdot \\left(\\dfrac{6}{11}\\right)^{3} + 273 \\cdot \\left(\\dfrac{6}{11}\\right)^{4} + \\dots$",
      "$\\left(y - \\dfrac{6}{11}y\\right) - \\dfrac{6}{11}\\left(y - \\dfrac{6}{11}y\\right) = 81 \\cdot \\dfrac{6}{11} + 94 \\cdot \\left(\\dfrac{6}{11}\\right)^{2} + 98 \\cdot \\left(\\dfrac{6}{11}\\right)^{3} + 98 \\cdot \\left(\\dfrac{6}{11}\\right)^{4} + \\dots$",
      "$98 \\cdot \\left(\\dfrac{6}{11}\\right)^{3} + 98 \\cdot \\left(\\dfrac{6}{11}\\right)^{4} + \\dots = \\dfrac{\\frac{21{,}168}{1331}}{1 - \\frac{6}{11}}$",
      "$\\dfrac{\\frac{21{,}168}{1331}}{1 - \\frac{6}{11}} = \\dfrac{21{,}168}{605}$",
      "$\\left(y - \\dfrac{6}{11}y\\right) - \\dfrac{6}{11}\\left(y - \\dfrac{6}{11}y\\right) = \\dfrac{64{,}818}{605}$",
      "$\\left(1 - \\dfrac{6}{11}\\right)\\left(y - \\dfrac{6}{11}y\\right) = \\dfrac{64{,}818}{605}$",
      "$\\left(1 - \\dfrac{6}{11}\\right)\\left(1 - \\dfrac{6}{11}\\right)y = \\dfrac{64{,}818}{605}$",
      "$y = \\dfrac{64{,}818}{125}$"
    ]
  },
  {
    "id": "t228-k3-p06",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (3k + 1)^{2}\\left(\\dfrac{4}{5}\\right)^{k}$, given that the series converges.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "1744",
    "solution": [
      "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (3k + 1)^{2}\\left(\\dfrac{4}{5}\\right)^{k}$, given that the series converges.",
      "Write $y$ for the sum: $y = 16 \\cdot \\dfrac{4}{5} + 49 \\cdot \\left(\\dfrac{4}{5}\\right)^{2} + 100 \\cdot \\left(\\dfrac{4}{5}\\right)^{3} + 169 \\cdot \\left(\\dfrac{4}{5}\\right)^{4} + \\dots$.",
      "$\\dfrac{4}{5}y = 16 \\cdot \\left(\\dfrac{4}{5}\\right)^{2} + 49 \\cdot \\left(\\dfrac{4}{5}\\right)^{3} + 100 \\cdot \\left(\\dfrac{4}{5}\\right)^{4} + \\dots$",
      "$y - \\dfrac{4}{5}y = 16 \\cdot \\dfrac{4}{5} + 33 \\cdot \\left(\\dfrac{4}{5}\\right)^{2} + 51 \\cdot \\left(\\dfrac{4}{5}\\right)^{3} + 69 \\cdot \\left(\\dfrac{4}{5}\\right)^{4} + \\dots$",
      "$\\dfrac{4}{5}\\left(y - \\dfrac{4}{5}y\\right) = 16 \\cdot \\left(\\dfrac{4}{5}\\right)^{2} + 33 \\cdot \\left(\\dfrac{4}{5}\\right)^{3} + 51 \\cdot \\left(\\dfrac{4}{5}\\right)^{4} + \\dots$",
      "$\\left(y - \\dfrac{4}{5}y\\right) - \\dfrac{4}{5}\\left(y - \\dfrac{4}{5}y\\right) = 16 \\cdot \\dfrac{4}{5} + 17 \\cdot \\left(\\dfrac{4}{5}\\right)^{2} + 18 \\cdot \\left(\\dfrac{4}{5}\\right)^{3} + 18 \\cdot \\left(\\dfrac{4}{5}\\right)^{4} + \\dots$",
      "$18 \\cdot \\left(\\dfrac{4}{5}\\right)^{3} + 18 \\cdot \\left(\\dfrac{4}{5}\\right)^{4} + \\dots = \\dfrac{\\frac{1152}{125}}{1 - \\frac{4}{5}}$",
      "$\\dfrac{\\frac{1152}{125}}{1 - \\frac{4}{5}} = \\dfrac{1152}{25}$",
      "$\\left(y - \\dfrac{4}{5}y\\right) - \\dfrac{4}{5}\\left(y - \\dfrac{4}{5}y\\right) = \\dfrac{1744}{25}$",
      "$\\left(1 - \\dfrac{4}{5}\\right)\\left(y - \\dfrac{4}{5}y\\right) = \\dfrac{1744}{25}$",
      "$\\left(1 - \\dfrac{4}{5}\\right)\\left(1 - \\dfrac{4}{5}\\right)y = \\dfrac{1744}{25}$",
      "$y = 1744$"
    ]
  },
  {
    "id": "t228-k3-p07",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (4k - 1)^{2}\\left(\\dfrac{7}{8}\\right)^{k}$, given that the series converges.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "12999",
    "solution": [
      "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (4k - 1)^{2}\\left(\\dfrac{7}{8}\\right)^{k}$, given that the series converges.",
      "Write $y$ for the sum: $y = 9 \\cdot \\dfrac{7}{8} + 49 \\cdot \\left(\\dfrac{7}{8}\\right)^{2} + 121 \\cdot \\left(\\dfrac{7}{8}\\right)^{3} + 225 \\cdot \\left(\\dfrac{7}{8}\\right)^{4} + \\dots$.",
      "$\\dfrac{7}{8}y = 9 \\cdot \\left(\\dfrac{7}{8}\\right)^{2} + 49 \\cdot \\left(\\dfrac{7}{8}\\right)^{3} + 121 \\cdot \\left(\\dfrac{7}{8}\\right)^{4} + \\dots$",
      "$y - \\dfrac{7}{8}y = 9 \\cdot \\dfrac{7}{8} + 40 \\cdot \\left(\\dfrac{7}{8}\\right)^{2} + 72 \\cdot \\left(\\dfrac{7}{8}\\right)^{3} + 104 \\cdot \\left(\\dfrac{7}{8}\\right)^{4} + \\dots$",
      "$\\dfrac{7}{8}\\left(y - \\dfrac{7}{8}y\\right) = 9 \\cdot \\left(\\dfrac{7}{8}\\right)^{2} + 40 \\cdot \\left(\\dfrac{7}{8}\\right)^{3} + 72 \\cdot \\left(\\dfrac{7}{8}\\right)^{4} + \\dots$",
      "$\\left(y - \\dfrac{7}{8}y\\right) - \\dfrac{7}{8}\\left(y - \\dfrac{7}{8}y\\right) = 9 \\cdot \\dfrac{7}{8} + 31 \\cdot \\left(\\dfrac{7}{8}\\right)^{2} + 32 \\cdot \\left(\\dfrac{7}{8}\\right)^{3} + 32 \\cdot \\left(\\dfrac{7}{8}\\right)^{4} + \\dots$",
      "$32 \\cdot \\left(\\dfrac{7}{8}\\right)^{3} + 32 \\cdot \\left(\\dfrac{7}{8}\\right)^{4} + \\dots = \\dfrac{\\frac{343}{16}}{1 - \\frac{7}{8}}$",
      "$\\dfrac{\\frac{343}{16}}{1 - \\frac{7}{8}} = \\dfrac{343}{2}$",
      "$\\left(y - \\dfrac{7}{8}y\\right) - \\dfrac{7}{8}\\left(y - \\dfrac{7}{8}y\\right) = \\dfrac{12{,}999}{64}$",
      "$\\left(1 - \\dfrac{7}{8}\\right)\\left(y - \\dfrac{7}{8}y\\right) = \\dfrac{12{,}999}{64}$",
      "$\\left(1 - \\dfrac{7}{8}\\right)\\left(1 - \\dfrac{7}{8}\\right)y = \\dfrac{12{,}999}{64}$",
      "$y = 12{,}999$"
    ]
  },
  {
    "id": "t228-k3-p08",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} \\dfrac{(5k + 3)^{2}}{9^{k}}$, given that the series converges.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "2493/256",
    "solution": [
      "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} \\dfrac{(5k + 3)^{2}}{9^{k}}$, given that the series converges.",
      "Write $y$ for the sum: $y = \\dfrac{64}{9} + \\dfrac{169}{9^{2}} + \\dfrac{324}{9^{3}} + \\dfrac{529}{9^{4}} + \\dots$.",
      "$\\dfrac{y}{9} = \\dfrac{64}{9^{2}} + \\dfrac{169}{9^{3}} + \\dfrac{324}{9^{4}} + \\dots$",
      "$y - \\dfrac{y}{9} = \\dfrac{64}{9} + \\dfrac{105}{9^{2}} + \\dfrac{155}{9^{3}} + \\dfrac{205}{9^{4}} + \\dots$",
      "$\\dfrac{1}{9}\\left(y - \\dfrac{y}{9}\\right) = \\dfrac{64}{9^{2}} + \\dfrac{105}{9^{3}} + \\dfrac{155}{9^{4}} + \\dots$",
      "$\\left(y - \\dfrac{y}{9}\\right) - \\dfrac{1}{9}\\left(y - \\dfrac{y}{9}\\right) = \\dfrac{64}{9} + \\dfrac{41}{9^{2}} + \\dfrac{50}{9^{3}} + \\dfrac{50}{9^{4}} + \\dots$",
      "$\\dfrac{50}{9^{3}} + \\dfrac{50}{9^{4}} + \\dots = \\dfrac{\\frac{50}{729}}{1 - \\frac{1}{9}}$",
      "$\\dfrac{\\frac{50}{729}}{1 - \\frac{1}{9}} = \\dfrac{25}{324}$",
      "$\\left(y - \\dfrac{y}{9}\\right) - \\dfrac{1}{9}\\left(y - \\dfrac{y}{9}\\right) = \\dfrac{277}{36}$",
      "$\\left(1 - \\dfrac{1}{9}\\right)\\left(y - \\dfrac{y}{9}\\right) = \\dfrac{277}{36}$",
      "$\\left(1 - \\dfrac{1}{9}\\right)\\left(1 - \\dfrac{1}{9}\\right)y = \\dfrac{277}{36}$",
      "$y = \\dfrac{2493}{256}$"
    ]
  },
  {
    "id": "t228-k3-p09",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (7k + 6)^{2}\\left(\\dfrac{2}{11}\\right)^{k}$, given that the series converges.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "36478/729",
    "solution": [
      "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (7k + 6)^{2}\\left(\\dfrac{2}{11}\\right)^{k}$, given that the series converges.",
      "Write $y$ for the sum: $y = 169 \\cdot \\dfrac{2}{11} + 400 \\cdot \\left(\\dfrac{2}{11}\\right)^{2} + 729 \\cdot \\left(\\dfrac{2}{11}\\right)^{3} + 1156 \\cdot \\left(\\dfrac{2}{11}\\right)^{4} + \\dots$.",
      "$\\dfrac{2}{11}y = 169 \\cdot \\left(\\dfrac{2}{11}\\right)^{2} + 400 \\cdot \\left(\\dfrac{2}{11}\\right)^{3} + 729 \\cdot \\left(\\dfrac{2}{11}\\right)^{4} + \\dots$",
      "$y - \\dfrac{2}{11}y = 169 \\cdot \\dfrac{2}{11} + 231 \\cdot \\left(\\dfrac{2}{11}\\right)^{2} + 329 \\cdot \\left(\\dfrac{2}{11}\\right)^{3} + 427 \\cdot \\left(\\dfrac{2}{11}\\right)^{4} + \\dots$",
      "$\\dfrac{2}{11}\\left(y - \\dfrac{2}{11}y\\right) = 169 \\cdot \\left(\\dfrac{2}{11}\\right)^{2} + 231 \\cdot \\left(\\dfrac{2}{11}\\right)^{3} + 329 \\cdot \\left(\\dfrac{2}{11}\\right)^{4} + \\dots$",
      "$\\left(y - \\dfrac{2}{11}y\\right) - \\dfrac{2}{11}\\left(y - \\dfrac{2}{11}y\\right) = 169 \\cdot \\dfrac{2}{11} + 62 \\cdot \\left(\\dfrac{2}{11}\\right)^{2} + 98 \\cdot \\left(\\dfrac{2}{11}\\right)^{3} + 98 \\cdot \\left(\\dfrac{2}{11}\\right)^{4} + \\dots$",
      "$98 \\cdot \\left(\\dfrac{2}{11}\\right)^{3} + 98 \\cdot \\left(\\dfrac{2}{11}\\right)^{4} + \\dots = \\dfrac{\\frac{784}{1331}}{1 - \\frac{2}{11}}$",
      "$\\dfrac{\\frac{784}{1331}}{1 - \\frac{2}{11}} = \\dfrac{784}{1089}$",
      "$\\left(y - \\dfrac{2}{11}y\\right) - \\dfrac{2}{11}\\left(y - \\dfrac{2}{11}y\\right) = \\dfrac{36{,}478}{1089}$",
      "$\\left(1 - \\dfrac{2}{11}\\right)\\left(y - \\dfrac{2}{11}y\\right) = \\dfrac{36{,}478}{1089}$",
      "$\\left(1 - \\dfrac{2}{11}\\right)\\left(1 - \\dfrac{2}{11}\\right)y = \\dfrac{36{,}478}{1089}$",
      "$y = \\dfrac{36{,}478}{729}$"
    ]
  },
  {
    "id": "t228-k3-p10",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (4k + 5)^{2}\\left(\\dfrac{3}{4}\\right)^{k}$, given that the series converges.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "1899",
    "solution": [
      "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (4k + 5)^{2}\\left(\\dfrac{3}{4}\\right)^{k}$, given that the series converges.",
      "Write $y$ for the sum: $y = 81 \\cdot \\dfrac{3}{4} + 169 \\cdot \\left(\\dfrac{3}{4}\\right)^{2} + 289 \\cdot \\left(\\dfrac{3}{4}\\right)^{3} + 441 \\cdot \\left(\\dfrac{3}{4}\\right)^{4} + \\dots$.",
      "$\\dfrac{3}{4}y = 81 \\cdot \\left(\\dfrac{3}{4}\\right)^{2} + 169 \\cdot \\left(\\dfrac{3}{4}\\right)^{3} + 289 \\cdot \\left(\\dfrac{3}{4}\\right)^{4} + \\dots$",
      "$y - \\dfrac{3}{4}y = 81 \\cdot \\dfrac{3}{4} + 88 \\cdot \\left(\\dfrac{3}{4}\\right)^{2} + 120 \\cdot \\left(\\dfrac{3}{4}\\right)^{3} + 152 \\cdot \\left(\\dfrac{3}{4}\\right)^{4} + \\dots$",
      "$\\dfrac{3}{4}\\left(y - \\dfrac{3}{4}y\\right) = 81 \\cdot \\left(\\dfrac{3}{4}\\right)^{2} + 88 \\cdot \\left(\\dfrac{3}{4}\\right)^{3} + 120 \\cdot \\left(\\dfrac{3}{4}\\right)^{4} + \\dots$",
      "$\\left(y - \\dfrac{3}{4}y\\right) - \\dfrac{3}{4}\\left(y - \\dfrac{3}{4}y\\right) = 81 \\cdot \\dfrac{3}{4} + 7 \\cdot \\left(\\dfrac{3}{4}\\right)^{2} + 32 \\cdot \\left(\\dfrac{3}{4}\\right)^{3} + 32 \\cdot \\left(\\dfrac{3}{4}\\right)^{4} + \\dots$",
      "$32 \\cdot \\left(\\dfrac{3}{4}\\right)^{3} + 32 \\cdot \\left(\\dfrac{3}{4}\\right)^{4} + \\dots = \\dfrac{\\frac{27}{2}}{1 - \\frac{3}{4}}$",
      "$\\dfrac{\\frac{27}{2}}{1 - \\frac{3}{4}} = 54$",
      "$\\left(y - \\dfrac{3}{4}y\\right) - \\dfrac{3}{4}\\left(y - \\dfrac{3}{4}y\\right) = \\dfrac{1899}{16}$",
      "$\\left(1 - \\dfrac{3}{4}\\right)\\left(y - \\dfrac{3}{4}y\\right) = \\dfrac{1899}{16}$",
      "$\\left(1 - \\dfrac{3}{4}\\right)\\left(1 - \\dfrac{3}{4}\\right)y = \\dfrac{1899}{16}$",
      "$y = 1899$"
    ]
  },
  {
    "id": "t228-k3-p11",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} \\dfrac{(6k + 5)^{2}}{8^{k}}$, given that the series converges.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "7177/343",
    "solution": [
      "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} \\dfrac{(6k + 5)^{2}}{8^{k}}$, given that the series converges.",
      "Write $y$ for the sum: $y = \\dfrac{121}{8} + \\dfrac{289}{8^{2}} + \\dfrac{529}{8^{3}} + \\dfrac{841}{8^{4}} + \\dots$.",
      "$\\dfrac{y}{8} = \\dfrac{121}{8^{2}} + \\dfrac{289}{8^{3}} + \\dfrac{529}{8^{4}} + \\dots$",
      "$y - \\dfrac{y}{8} = \\dfrac{121}{8} + \\dfrac{168}{8^{2}} + \\dfrac{240}{8^{3}} + \\dfrac{312}{8^{4}} + \\dots$",
      "$\\dfrac{1}{8}\\left(y - \\dfrac{y}{8}\\right) = \\dfrac{121}{8^{2}} + \\dfrac{168}{8^{3}} + \\dfrac{240}{8^{4}} + \\dots$",
      "$\\left(y - \\dfrac{y}{8}\\right) - \\dfrac{1}{8}\\left(y - \\dfrac{y}{8}\\right) = \\dfrac{121}{8} + \\dfrac{47}{8^{2}} + \\dfrac{72}{8^{3}} + \\dfrac{72}{8^{4}} + \\dots$",
      "$\\dfrac{72}{8^{3}} + \\dfrac{72}{8^{4}} + \\dots = \\dfrac{\\frac{9}{64}}{1 - \\frac{1}{8}}$",
      "$\\dfrac{\\frac{9}{64}}{1 - \\frac{1}{8}} = \\dfrac{9}{56}$",
      "$\\left(y - \\dfrac{y}{8}\\right) - \\dfrac{1}{8}\\left(y - \\dfrac{y}{8}\\right) = \\dfrac{7177}{448}$",
      "$\\left(1 - \\dfrac{1}{8}\\right)\\left(y - \\dfrac{y}{8}\\right) = \\dfrac{7177}{448}$",
      "$\\left(1 - \\dfrac{1}{8}\\right)\\left(1 - \\dfrac{1}{8}\\right)y = \\dfrac{7177}{448}$",
      "$y = \\dfrac{7177}{343}$"
    ]
  },
  {
    "id": "t228-k3-p12",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (5k + 4)^{2}\\left(\\dfrac{4}{11}\\right)^{k}$, given that the series converges.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "31956/343",
    "solution": [
      "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (5k + 4)^{2}\\left(\\dfrac{4}{11}\\right)^{k}$, given that the series converges.",
      "Write $y$ for the sum: $y = 81 \\cdot \\dfrac{4}{11} + 196 \\cdot \\left(\\dfrac{4}{11}\\right)^{2} + 361 \\cdot \\left(\\dfrac{4}{11}\\right)^{3} + 576 \\cdot \\left(\\dfrac{4}{11}\\right)^{4} + \\dots$.",
      "$\\dfrac{4}{11}y = 81 \\cdot \\left(\\dfrac{4}{11}\\right)^{2} + 196 \\cdot \\left(\\dfrac{4}{11}\\right)^{3} + 361 \\cdot \\left(\\dfrac{4}{11}\\right)^{4} + \\dots$",
      "$y - \\dfrac{4}{11}y = 81 \\cdot \\dfrac{4}{11} + 115 \\cdot \\left(\\dfrac{4}{11}\\right)^{2} + 165 \\cdot \\left(\\dfrac{4}{11}\\right)^{3} + 215 \\cdot \\left(\\dfrac{4}{11}\\right)^{4} + \\dots$",
      "$\\dfrac{4}{11}\\left(y - \\dfrac{4}{11}y\\right) = 81 \\cdot \\left(\\dfrac{4}{11}\\right)^{2} + 115 \\cdot \\left(\\dfrac{4}{11}\\right)^{3} + 165 \\cdot \\left(\\dfrac{4}{11}\\right)^{4} + \\dots$",
      "$\\left(y - \\dfrac{4}{11}y\\right) - \\dfrac{4}{11}\\left(y - \\dfrac{4}{11}y\\right) = 81 \\cdot \\dfrac{4}{11} + 34 \\cdot \\left(\\dfrac{4}{11}\\right)^{2} + 50 \\cdot \\left(\\dfrac{4}{11}\\right)^{3} + 50 \\cdot \\left(\\dfrac{4}{11}\\right)^{4} + \\dots$",
      "$50 \\cdot \\left(\\dfrac{4}{11}\\right)^{3} + 50 \\cdot \\left(\\dfrac{4}{11}\\right)^{4} + \\dots = \\dfrac{\\frac{3200}{1331}}{1 - \\frac{4}{11}}$",
      "$\\dfrac{\\frac{3200}{1331}}{1 - \\frac{4}{11}} = \\dfrac{3200}{847}$",
      "$\\left(y - \\dfrac{4}{11}y\\right) - \\dfrac{4}{11}\\left(y - \\dfrac{4}{11}y\\right) = \\dfrac{31{,}956}{847}$",
      "$\\left(1 - \\dfrac{4}{11}\\right)\\left(y - \\dfrac{4}{11}y\\right) = \\dfrac{31{,}956}{847}$",
      "$\\left(1 - \\dfrac{4}{11}\\right)\\left(1 - \\dfrac{4}{11}\\right)y = \\dfrac{31{,}956}{847}$",
      "$y = \\dfrac{31{,}956}{343}$"
    ]
  },
  {
    "id": "t228-k3-p13",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (3k + 4)^{2}\\left(\\dfrac{2}{9}\\right)^{k}$, given that the series converges.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "6374/343",
    "solution": [
      "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (3k + 4)^{2}\\left(\\dfrac{2}{9}\\right)^{k}$, given that the series converges.",
      "Write $y$ for the sum: $y = 49 \\cdot \\dfrac{2}{9} + 100 \\cdot \\left(\\dfrac{2}{9}\\right)^{2} + 169 \\cdot \\left(\\dfrac{2}{9}\\right)^{3} + 256 \\cdot \\left(\\dfrac{2}{9}\\right)^{4} + \\dots$.",
      "$\\dfrac{2}{9}y = 49 \\cdot \\left(\\dfrac{2}{9}\\right)^{2} + 100 \\cdot \\left(\\dfrac{2}{9}\\right)^{3} + 169 \\cdot \\left(\\dfrac{2}{9}\\right)^{4} + \\dots$",
      "$y - \\dfrac{2}{9}y = 49 \\cdot \\dfrac{2}{9} + 51 \\cdot \\left(\\dfrac{2}{9}\\right)^{2} + 69 \\cdot \\left(\\dfrac{2}{9}\\right)^{3} + 87 \\cdot \\left(\\dfrac{2}{9}\\right)^{4} + \\dots$",
      "$\\dfrac{2}{9}\\left(y - \\dfrac{2}{9}y\\right) = 49 \\cdot \\left(\\dfrac{2}{9}\\right)^{2} + 51 \\cdot \\left(\\dfrac{2}{9}\\right)^{3} + 69 \\cdot \\left(\\dfrac{2}{9}\\right)^{4} + \\dots$",
      "$\\left(y - \\dfrac{2}{9}y\\right) - \\dfrac{2}{9}\\left(y - \\dfrac{2}{9}y\\right) = 49 \\cdot \\dfrac{2}{9} + 2 \\cdot \\left(\\dfrac{2}{9}\\right)^{2} + 18 \\cdot \\left(\\dfrac{2}{9}\\right)^{3} + 18 \\cdot \\left(\\dfrac{2}{9}\\right)^{4} + \\dots$",
      "$18 \\cdot \\left(\\dfrac{2}{9}\\right)^{3} + 18 \\cdot \\left(\\dfrac{2}{9}\\right)^{4} + \\dots = \\dfrac{\\frac{16}{81}}{1 - \\frac{2}{9}}$",
      "$\\dfrac{\\frac{16}{81}}{1 - \\frac{2}{9}} = \\dfrac{16}{63}$",
      "$\\left(y - \\dfrac{2}{9}y\\right) - \\dfrac{2}{9}\\left(y - \\dfrac{2}{9}y\\right) = \\dfrac{6374}{567}$",
      "$\\left(1 - \\dfrac{2}{9}\\right)\\left(y - \\dfrac{2}{9}y\\right) = \\dfrac{6374}{567}$",
      "$\\left(1 - \\dfrac{2}{9}\\right)\\left(1 - \\dfrac{2}{9}\\right)y = \\dfrac{6374}{567}$",
      "$y = \\dfrac{6374}{343}$"
    ]
  },
  {
    "id": "t228-k3-p14",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (3k + 5)^{2}\\left(\\dfrac{3}{10}\\right)^{k}$, given that the series converges.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "13485/343",
    "solution": [
      "Find the sum of the infinite series $\\sum_{k=1}^{\\infty} (3k + 5)^{2}\\left(\\dfrac{3}{10}\\right)^{k}$, given that the series converges.",
      "Write $y$ for the sum: $y = 64 \\cdot \\dfrac{3}{10} + 121 \\cdot \\left(\\dfrac{3}{10}\\right)^{2} + 196 \\cdot \\left(\\dfrac{3}{10}\\right)^{3} + 289 \\cdot \\left(\\dfrac{3}{10}\\right)^{4} + \\dots$.",
      "$\\dfrac{3}{10}y = 64 \\cdot \\left(\\dfrac{3}{10}\\right)^{2} + 121 \\cdot \\left(\\dfrac{3}{10}\\right)^{3} + 196 \\cdot \\left(\\dfrac{3}{10}\\right)^{4} + \\dots$",
      "$y - \\dfrac{3}{10}y = 64 \\cdot \\dfrac{3}{10} + 57 \\cdot \\left(\\dfrac{3}{10}\\right)^{2} + 75 \\cdot \\left(\\dfrac{3}{10}\\right)^{3} + 93 \\cdot \\left(\\dfrac{3}{10}\\right)^{4} + \\dots$",
      "$\\dfrac{3}{10}\\left(y - \\dfrac{3}{10}y\\right) = 64 \\cdot \\left(\\dfrac{3}{10}\\right)^{2} + 57 \\cdot \\left(\\dfrac{3}{10}\\right)^{3} + 75 \\cdot \\left(\\dfrac{3}{10}\\right)^{4} + \\dots$",
      "$\\left(y - \\dfrac{3}{10}y\\right) - \\dfrac{3}{10}\\left(y - \\dfrac{3}{10}y\\right) = 64 \\cdot \\dfrac{3}{10} - 7 \\cdot \\left(\\dfrac{3}{10}\\right)^{2} + 18 \\cdot \\left(\\dfrac{3}{10}\\right)^{3} + 18 \\cdot \\left(\\dfrac{3}{10}\\right)^{4} + \\dots$",
      "$18 \\cdot \\left(\\dfrac{3}{10}\\right)^{3} + 18 \\cdot \\left(\\dfrac{3}{10}\\right)^{4} + \\dots = \\dfrac{\\frac{243}{500}}{1 - \\frac{3}{10}}$",
      "$\\dfrac{\\frac{243}{500}}{1 - \\frac{3}{10}} = \\dfrac{243}{350}$",
      "$\\left(y - \\dfrac{3}{10}y\\right) - \\dfrac{3}{10}\\left(y - \\dfrac{3}{10}y\\right) = \\dfrac{2697}{140}$",
      "$\\left(1 - \\dfrac{3}{10}\\right)\\left(y - \\dfrac{3}{10}y\\right) = \\dfrac{2697}{140}$",
      "$\\left(1 - \\dfrac{3}{10}\\right)\\left(1 - \\dfrac{3}{10}\\right)y = \\dfrac{2697}{140}$",
      "$y = \\dfrac{13{,}485}{343}$"
    ]
  },
  {
    "id": "t228-k4-p01",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the value of $\\log_{14} \\sqrt[27]{14^{8}} + \\log_{14} \\sqrt[729]{14^{16}} + \\log_{14} \\sqrt[19{,}683]{14^{24}} + \\dots$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "54/169",
    "solution": [
      "Find the value of $\\log_{14} \\sqrt[27]{14^{8}} + \\log_{14} \\sqrt[729]{14^{16}} + \\log_{14} \\sqrt[19{,}683]{14^{24}} + \\dots$.",
      "The $k$th term is $\\log_{14} \\sqrt[27^{k}]{14^{8k}} = \\log_{14} 14^{8k/27^{k}}$.",
      "The $k$th term is $\\dfrac{8k}{27^{k}}$.",
      "Write $y$ for the sum: $y = \\dfrac{8}{27} + \\dfrac{16}{27^{2}} + \\dfrac{24}{27^{3}} + \\dfrac{32}{27^{4}} + \\dots$.",
      "$\\dfrac{y}{27} = \\dfrac{8}{27^{2}} + \\dfrac{16}{27^{3}} + \\dfrac{24}{27^{4}} + \\dots$",
      "$y - \\dfrac{y}{27} = \\dfrac{8}{27} + \\dfrac{8}{27^{2}} + \\dfrac{8}{27^{3}} + \\dots$",
      "$\\dfrac{8}{27} + \\dfrac{8}{27^{2}} + \\dots = \\dfrac{\\frac{8}{27}}{1 - \\frac{1}{27}}$",
      "$\\dfrac{\\frac{8}{27}}{1 - \\frac{1}{27}} = \\dfrac{4}{13}$",
      "$y - \\dfrac{y}{27} = \\dfrac{4}{13}$",
      "$\\dfrac{26}{27}y = \\dfrac{4}{13}$",
      "$y = \\dfrac{54}{169}$"
    ]
  },
  {
    "id": "t228-k4-p02",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the value of $\\log_{19} \\sqrt[29]{19^{2}} + \\log_{19} \\sqrt[841]{19^{4}} + \\log_{19} \\sqrt[24{,}389]{19^{6}} + \\dots$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "29/392",
    "solution": [
      "Find the value of $\\log_{19} \\sqrt[29]{19^{2}} + \\log_{19} \\sqrt[841]{19^{4}} + \\log_{19} \\sqrt[24{,}389]{19^{6}} + \\dots$.",
      "The $k$th term is $\\log_{19} \\sqrt[29^{k}]{19^{2k}} = \\log_{19} 19^{2k/29^{k}}$.",
      "The $k$th term is $\\dfrac{2k}{29^{k}}$.",
      "Write $y$ for the sum: $y = \\dfrac{2}{29} + \\dfrac{4}{29^{2}} + \\dfrac{6}{29^{3}} + \\dfrac{8}{29^{4}} + \\dots$.",
      "$\\dfrac{y}{29} = \\dfrac{2}{29^{2}} + \\dfrac{4}{29^{3}} + \\dfrac{6}{29^{4}} + \\dots$",
      "$y - \\dfrac{y}{29} = \\dfrac{2}{29} + \\dfrac{2}{29^{2}} + \\dfrac{2}{29^{3}} + \\dots$",
      "$\\dfrac{2}{29} + \\dfrac{2}{29^{2}} + \\dots = \\dfrac{\\frac{2}{29}}{1 - \\frac{1}{29}}$",
      "$\\dfrac{\\frac{2}{29}}{1 - \\frac{1}{29}} = \\dfrac{1}{14}$",
      "$y - \\dfrac{y}{29} = \\dfrac{1}{14}$",
      "$\\dfrac{28}{29}y = \\dfrac{1}{14}$",
      "$y = \\dfrac{29}{392}$"
    ]
  },
  {
    "id": "t228-k4-p03",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the value of $\\log_{14} \\sqrt[28]{14^{3}} + \\log_{14} \\sqrt[784]{14^{6}} + \\log_{14} \\sqrt[21{,}952]{14^{9}} + \\dots$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "28/243",
    "solution": [
      "Find the value of $\\log_{14} \\sqrt[28]{14^{3}} + \\log_{14} \\sqrt[784]{14^{6}} + \\log_{14} \\sqrt[21{,}952]{14^{9}} + \\dots$.",
      "The $k$th term is $\\log_{14} \\sqrt[28^{k}]{14^{3k}} = \\log_{14} 14^{3k/28^{k}}$.",
      "The $k$th term is $\\dfrac{3k}{28^{k}}$.",
      "Write $y$ for the sum: $y = \\dfrac{3}{28} + \\dfrac{6}{28^{2}} + \\dfrac{9}{28^{3}} + \\dfrac{12}{28^{4}} + \\dots$.",
      "$\\dfrac{y}{28} = \\dfrac{3}{28^{2}} + \\dfrac{6}{28^{3}} + \\dfrac{9}{28^{4}} + \\dots$",
      "$y - \\dfrac{y}{28} = \\dfrac{3}{28} + \\dfrac{3}{28^{2}} + \\dfrac{3}{28^{3}} + \\dots$",
      "$\\dfrac{3}{28} + \\dfrac{3}{28^{2}} + \\dots = \\dfrac{\\frac{3}{28}}{1 - \\frac{1}{28}}$",
      "$\\dfrac{\\frac{3}{28}}{1 - \\frac{1}{28}} = \\dfrac{1}{9}$",
      "$y - \\dfrac{y}{28} = \\dfrac{1}{9}$",
      "$\\dfrac{27}{28}y = \\dfrac{1}{9}$",
      "$y = \\dfrac{28}{243}$"
    ]
  },
  {
    "id": "t228-k4-p04",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the value of $\\log_{5} \\sqrt[22]{5^{5}} + \\log_{5} \\sqrt[484]{5^{10}} + \\log_{5} \\sqrt[10{,}648]{5^{15}} + \\dots$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "110/441",
    "solution": [
      "Find the value of $\\log_{5} \\sqrt[22]{5^{5}} + \\log_{5} \\sqrt[484]{5^{10}} + \\log_{5} \\sqrt[10{,}648]{5^{15}} + \\dots$.",
      "The $k$th term is $\\log_{5} \\sqrt[22^{k}]{5^{5k}} = \\log_{5} 5^{5k/22^{k}}$.",
      "The $k$th term is $\\dfrac{5k}{22^{k}}$.",
      "Write $y$ for the sum: $y = \\dfrac{5}{22} + \\dfrac{10}{22^{2}} + \\dfrac{15}{22^{3}} + \\dfrac{20}{22^{4}} + \\dots$.",
      "$\\dfrac{y}{22} = \\dfrac{5}{22^{2}} + \\dfrac{10}{22^{3}} + \\dfrac{15}{22^{4}} + \\dots$",
      "$y - \\dfrac{y}{22} = \\dfrac{5}{22} + \\dfrac{5}{22^{2}} + \\dfrac{5}{22^{3}} + \\dots$",
      "$\\dfrac{5}{22} + \\dfrac{5}{22^{2}} + \\dots = \\dfrac{\\frac{5}{22}}{1 - \\frac{1}{22}}$",
      "$\\dfrac{\\frac{5}{22}}{1 - \\frac{1}{22}} = \\dfrac{5}{21}$",
      "$y - \\dfrac{y}{22} = \\dfrac{5}{21}$",
      "$\\dfrac{21}{22}y = \\dfrac{5}{21}$",
      "$y = \\dfrac{110}{441}$"
    ]
  },
  {
    "id": "t228-k4-p05",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the value of $\\log_{17} \\sqrt[25]{17^{2}} + \\log_{17} \\sqrt[625]{17^{4}} + \\log_{17} \\sqrt[15{,}625]{17^{6}} + \\dots$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "25/288",
    "solution": [
      "Find the value of $\\log_{17} \\sqrt[25]{17^{2}} + \\log_{17} \\sqrt[625]{17^{4}} + \\log_{17} \\sqrt[15{,}625]{17^{6}} + \\dots$.",
      "The $k$th term is $\\log_{17} \\sqrt[25^{k}]{17^{2k}} = \\log_{17} 17^{2k/25^{k}}$.",
      "The $k$th term is $\\dfrac{2k}{25^{k}}$.",
      "Write $y$ for the sum: $y = \\dfrac{2}{25} + \\dfrac{4}{25^{2}} + \\dfrac{6}{25^{3}} + \\dfrac{8}{25^{4}} + \\dots$.",
      "$\\dfrac{y}{25} = \\dfrac{2}{25^{2}} + \\dfrac{4}{25^{3}} + \\dfrac{6}{25^{4}} + \\dots$",
      "$y - \\dfrac{y}{25} = \\dfrac{2}{25} + \\dfrac{2}{25^{2}} + \\dfrac{2}{25^{3}} + \\dots$",
      "$\\dfrac{2}{25} + \\dfrac{2}{25^{2}} + \\dots = \\dfrac{\\frac{2}{25}}{1 - \\frac{1}{25}}$",
      "$\\dfrac{\\frac{2}{25}}{1 - \\frac{1}{25}} = \\dfrac{1}{12}$",
      "$y - \\dfrac{y}{25} = \\dfrac{1}{12}$",
      "$\\dfrac{24}{25}y = \\dfrac{1}{12}$",
      "$y = \\dfrac{25}{288}$"
    ]
  },
  {
    "id": "t228-k4-p06",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the value of $\\log_{10} \\sqrt[15]{10^{7}} + \\log_{10} \\sqrt[225]{10^{14}} + \\log_{10} \\sqrt[3375]{10^{21}} + \\dots$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "15/28",
    "solution": [
      "Find the value of $\\log_{10} \\sqrt[15]{10^{7}} + \\log_{10} \\sqrt[225]{10^{14}} + \\log_{10} \\sqrt[3375]{10^{21}} + \\dots$.",
      "The $k$th term is $\\log_{10} \\sqrt[15^{k}]{10^{7k}} = \\log_{10} 10^{7k/15^{k}}$.",
      "The $k$th term is $\\dfrac{7k}{15^{k}}$.",
      "Write $y$ for the sum: $y = \\dfrac{7}{15} + \\dfrac{14}{15^{2}} + \\dfrac{21}{15^{3}} + \\dfrac{28}{15^{4}} + \\dots$.",
      "$\\dfrac{y}{15} = \\dfrac{7}{15^{2}} + \\dfrac{14}{15^{3}} + \\dfrac{21}{15^{4}} + \\dots$",
      "$y - \\dfrac{y}{15} = \\dfrac{7}{15} + \\dfrac{7}{15^{2}} + \\dfrac{7}{15^{3}} + \\dots$",
      "$\\dfrac{7}{15} + \\dfrac{7}{15^{2}} + \\dots = \\dfrac{\\frac{7}{15}}{1 - \\frac{1}{15}}$",
      "$\\dfrac{\\frac{7}{15}}{1 - \\frac{1}{15}} = \\dfrac{1}{2}$",
      "$y - \\dfrac{y}{15} = \\dfrac{1}{2}$",
      "$\\dfrac{14}{15}y = \\dfrac{1}{2}$",
      "$y = \\dfrac{15}{28}$"
    ]
  },
  {
    "id": "t228-k4-p07",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the value of $\\log_{11} \\sqrt[24]{11^{7}} + \\log_{11} \\sqrt[576]{11^{14}} + \\log_{11} \\sqrt[13{,}824]{11^{21}} + \\dots$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "168/529",
    "solution": [
      "Find the value of $\\log_{11} \\sqrt[24]{11^{7}} + \\log_{11} \\sqrt[576]{11^{14}} + \\log_{11} \\sqrt[13{,}824]{11^{21}} + \\dots$.",
      "The $k$th term is $\\log_{11} \\sqrt[24^{k}]{11^{7k}} = \\log_{11} 11^{7k/24^{k}}$.",
      "The $k$th term is $\\dfrac{7k}{24^{k}}$.",
      "Write $y$ for the sum: $y = \\dfrac{7}{24} + \\dfrac{14}{24^{2}} + \\dfrac{21}{24^{3}} + \\dfrac{28}{24^{4}} + \\dots$.",
      "$\\dfrac{y}{24} = \\dfrac{7}{24^{2}} + \\dfrac{14}{24^{3}} + \\dfrac{21}{24^{4}} + \\dots$",
      "$y - \\dfrac{y}{24} = \\dfrac{7}{24} + \\dfrac{7}{24^{2}} + \\dfrac{7}{24^{3}} + \\dots$",
      "$\\dfrac{7}{24} + \\dfrac{7}{24^{2}} + \\dots = \\dfrac{\\frac{7}{24}}{1 - \\frac{1}{24}}$",
      "$\\dfrac{\\frac{7}{24}}{1 - \\frac{1}{24}} = \\dfrac{7}{23}$",
      "$y - \\dfrac{y}{24} = \\dfrac{7}{23}$",
      "$\\dfrac{23}{24}y = \\dfrac{7}{23}$",
      "$y = \\dfrac{168}{529}$"
    ]
  },
  {
    "id": "t228-k4-p08",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the value of $\\log_{11} \\sqrt[17]{11^{6}} + \\log_{11} \\sqrt[289]{11^{12}} + \\log_{11} \\sqrt[4913]{11^{18}} + \\dots$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "51/128",
    "solution": [
      "Find the value of $\\log_{11} \\sqrt[17]{11^{6}} + \\log_{11} \\sqrt[289]{11^{12}} + \\log_{11} \\sqrt[4913]{11^{18}} + \\dots$.",
      "The $k$th term is $\\log_{11} \\sqrt[17^{k}]{11^{6k}} = \\log_{11} 11^{6k/17^{k}}$.",
      "The $k$th term is $\\dfrac{6k}{17^{k}}$.",
      "Write $y$ for the sum: $y = \\dfrac{6}{17} + \\dfrac{12}{17^{2}} + \\dfrac{18}{17^{3}} + \\dfrac{24}{17^{4}} + \\dots$.",
      "$\\dfrac{y}{17} = \\dfrac{6}{17^{2}} + \\dfrac{12}{17^{3}} + \\dfrac{18}{17^{4}} + \\dots$",
      "$y - \\dfrac{y}{17} = \\dfrac{6}{17} + \\dfrac{6}{17^{2}} + \\dfrac{6}{17^{3}} + \\dots$",
      "$\\dfrac{6}{17} + \\dfrac{6}{17^{2}} + \\dots = \\dfrac{\\frac{6}{17}}{1 - \\frac{1}{17}}$",
      "$\\dfrac{\\frac{6}{17}}{1 - \\frac{1}{17}} = \\dfrac{3}{8}$",
      "$y - \\dfrac{y}{17} = \\dfrac{3}{8}$",
      "$\\dfrac{16}{17}y = \\dfrac{3}{8}$",
      "$y = \\dfrac{51}{128}$"
    ]
  },
  {
    "id": "t228-k4-p09",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the value of $\\log_{11} \\sqrt[8]{11^{3}} + \\log_{11} \\sqrt[64]{11^{6}} + \\log_{11} \\sqrt[512]{11^{9}} + \\dots$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "24/49",
    "solution": [
      "Find the value of $\\log_{11} \\sqrt[8]{11^{3}} + \\log_{11} \\sqrt[64]{11^{6}} + \\log_{11} \\sqrt[512]{11^{9}} + \\dots$.",
      "The $k$th term is $\\log_{11} \\sqrt[8^{k}]{11^{3k}} = \\log_{11} 11^{3k/8^{k}}$.",
      "The $k$th term is $\\dfrac{3k}{8^{k}}$.",
      "Write $y$ for the sum: $y = \\dfrac{3}{8} + \\dfrac{6}{8^{2}} + \\dfrac{9}{8^{3}} + \\dfrac{12}{8^{4}} + \\dots$.",
      "$\\dfrac{y}{8} = \\dfrac{3}{8^{2}} + \\dfrac{6}{8^{3}} + \\dfrac{9}{8^{4}} + \\dots$",
      "$y - \\dfrac{y}{8} = \\dfrac{3}{8} + \\dfrac{3}{8^{2}} + \\dfrac{3}{8^{3}} + \\dots$",
      "$\\dfrac{3}{8} + \\dfrac{3}{8^{2}} + \\dots = \\dfrac{\\frac{3}{8}}{1 - \\frac{1}{8}}$",
      "$\\dfrac{\\frac{3}{8}}{1 - \\frac{1}{8}} = \\dfrac{3}{7}$",
      "$y - \\dfrac{y}{8} = \\dfrac{3}{7}$",
      "$\\dfrac{7}{8}y = \\dfrac{3}{7}$",
      "$y = \\dfrac{24}{49}$"
    ]
  },
  {
    "id": "t228-k4-p10",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the value of $\\log_{5} \\sqrt[23]{5^{8}} + \\log_{5} \\sqrt[529]{5^{16}} + \\log_{5} \\sqrt[12{,}167]{5^{24}} + \\dots$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "46/121",
    "solution": [
      "Find the value of $\\log_{5} \\sqrt[23]{5^{8}} + \\log_{5} \\sqrt[529]{5^{16}} + \\log_{5} \\sqrt[12{,}167]{5^{24}} + \\dots$.",
      "The $k$th term is $\\log_{5} \\sqrt[23^{k}]{5^{8k}} = \\log_{5} 5^{8k/23^{k}}$.",
      "The $k$th term is $\\dfrac{8k}{23^{k}}$.",
      "Write $y$ for the sum: $y = \\dfrac{8}{23} + \\dfrac{16}{23^{2}} + \\dfrac{24}{23^{3}} + \\dfrac{32}{23^{4}} + \\dots$.",
      "$\\dfrac{y}{23} = \\dfrac{8}{23^{2}} + \\dfrac{16}{23^{3}} + \\dfrac{24}{23^{4}} + \\dots$",
      "$y - \\dfrac{y}{23} = \\dfrac{8}{23} + \\dfrac{8}{23^{2}} + \\dfrac{8}{23^{3}} + \\dots$",
      "$\\dfrac{8}{23} + \\dfrac{8}{23^{2}} + \\dots = \\dfrac{\\frac{8}{23}}{1 - \\frac{1}{23}}$",
      "$\\dfrac{\\frac{8}{23}}{1 - \\frac{1}{23}} = \\dfrac{4}{11}$",
      "$y - \\dfrac{y}{23} = \\dfrac{4}{11}$",
      "$\\dfrac{22}{23}y = \\dfrac{4}{11}$",
      "$y = \\dfrac{46}{121}$"
    ]
  },
  {
    "id": "t228-k4-p11",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the value of $\\log_{6} \\sqrt[10]{6^{7}} + \\log_{6} \\sqrt[100]{6^{14}} + \\log_{6} \\sqrt[1000]{6^{21}} + \\dots$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "70/81",
    "solution": [
      "Find the value of $\\log_{6} \\sqrt[10]{6^{7}} + \\log_{6} \\sqrt[100]{6^{14}} + \\log_{6} \\sqrt[1000]{6^{21}} + \\dots$.",
      "The $k$th term is $\\log_{6} \\sqrt[10^{k}]{6^{7k}} = \\log_{6} 6^{7k/10^{k}}$.",
      "The $k$th term is $\\dfrac{7k}{10^{k}}$.",
      "Write $y$ for the sum: $y = \\dfrac{7}{10} + \\dfrac{14}{10^{2}} + \\dfrac{21}{10^{3}} + \\dfrac{28}{10^{4}} + \\dots$.",
      "$\\dfrac{y}{10} = \\dfrac{7}{10^{2}} + \\dfrac{14}{10^{3}} + \\dfrac{21}{10^{4}} + \\dots$",
      "$y - \\dfrac{y}{10} = \\dfrac{7}{10} + \\dfrac{7}{10^{2}} + \\dfrac{7}{10^{3}} + \\dots$",
      "$\\dfrac{7}{10} + \\dfrac{7}{10^{2}} + \\dots = \\dfrac{\\frac{7}{10}}{1 - \\frac{1}{10}}$",
      "$\\dfrac{\\frac{7}{10}}{1 - \\frac{1}{10}} = \\dfrac{7}{9}$",
      "$y - \\dfrac{y}{10} = \\dfrac{7}{9}$",
      "$\\dfrac{9}{10}y = \\dfrac{7}{9}$",
      "$y = \\dfrac{70}{81}$"
    ]
  },
  {
    "id": "t228-k4-p12",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the value of $\\log_{10} \\sqrt[20]{10^{3}} + \\log_{10} \\sqrt[400]{10^{6}} + \\log_{10} \\sqrt[8000]{10^{9}} + \\dots$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "60/361",
    "solution": [
      "Find the value of $\\log_{10} \\sqrt[20]{10^{3}} + \\log_{10} \\sqrt[400]{10^{6}} + \\log_{10} \\sqrt[8000]{10^{9}} + \\dots$.",
      "The $k$th term is $\\log_{10} \\sqrt[20^{k}]{10^{3k}} = \\log_{10} 10^{3k/20^{k}}$.",
      "The $k$th term is $\\dfrac{3k}{20^{k}}$.",
      "Write $y$ for the sum: $y = \\dfrac{3}{20} + \\dfrac{6}{20^{2}} + \\dfrac{9}{20^{3}} + \\dfrac{12}{20^{4}} + \\dots$.",
      "$\\dfrac{y}{20} = \\dfrac{3}{20^{2}} + \\dfrac{6}{20^{3}} + \\dfrac{9}{20^{4}} + \\dots$",
      "$y - \\dfrac{y}{20} = \\dfrac{3}{20} + \\dfrac{3}{20^{2}} + \\dfrac{3}{20^{3}} + \\dots$",
      "$\\dfrac{3}{20} + \\dfrac{3}{20^{2}} + \\dots = \\dfrac{\\frac{3}{20}}{1 - \\frac{1}{20}}$",
      "$\\dfrac{\\frac{3}{20}}{1 - \\frac{1}{20}} = \\dfrac{3}{19}$",
      "$y - \\dfrac{y}{20} = \\dfrac{3}{19}$",
      "$\\dfrac{19}{20}y = \\dfrac{3}{19}$",
      "$y = \\dfrac{60}{361}$"
    ]
  },
  {
    "id": "t228-k4-p13",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the value of $\\log_{12} \\sqrt[21]{12^{2}} + \\log_{12} \\sqrt[441]{12^{4}} + \\log_{12} \\sqrt[9261]{12^{6}} + \\dots$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "21/200",
    "solution": [
      "Find the value of $\\log_{12} \\sqrt[21]{12^{2}} + \\log_{12} \\sqrt[441]{12^{4}} + \\log_{12} \\sqrt[9261]{12^{6}} + \\dots$.",
      "The $k$th term is $\\log_{12} \\sqrt[21^{k}]{12^{2k}} = \\log_{12} 12^{2k/21^{k}}$.",
      "The $k$th term is $\\dfrac{2k}{21^{k}}$.",
      "Write $y$ for the sum: $y = \\dfrac{2}{21} + \\dfrac{4}{21^{2}} + \\dfrac{6}{21^{3}} + \\dfrac{8}{21^{4}} + \\dots$.",
      "$\\dfrac{y}{21} = \\dfrac{2}{21^{2}} + \\dfrac{4}{21^{3}} + \\dfrac{6}{21^{4}} + \\dots$",
      "$y - \\dfrac{y}{21} = \\dfrac{2}{21} + \\dfrac{2}{21^{2}} + \\dfrac{2}{21^{3}} + \\dots$",
      "$\\dfrac{2}{21} + \\dfrac{2}{21^{2}} + \\dots = \\dfrac{\\frac{2}{21}}{1 - \\frac{1}{21}}$",
      "$\\dfrac{\\frac{2}{21}}{1 - \\frac{1}{21}} = \\dfrac{1}{10}$",
      "$y - \\dfrac{y}{21} = \\dfrac{1}{10}$",
      "$\\dfrac{20}{21}y = \\dfrac{1}{10}$",
      "$y = \\dfrac{21}{200}$"
    ]
  },
  {
    "id": "t228-k4-p14",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the value of $\\log_{13} \\sqrt[12]{13^{5}} + \\log_{13} \\sqrt[144]{13^{10}} + \\log_{13} \\sqrt[1728]{13^{15}} + \\dots$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "60/121",
    "solution": [
      "Find the value of $\\log_{13} \\sqrt[12]{13^{5}} + \\log_{13} \\sqrt[144]{13^{10}} + \\log_{13} \\sqrt[1728]{13^{15}} + \\dots$.",
      "The $k$th term is $\\log_{13} \\sqrt[12^{k}]{13^{5k}} = \\log_{13} 13^{5k/12^{k}}$.",
      "The $k$th term is $\\dfrac{5k}{12^{k}}$.",
      "Write $y$ for the sum: $y = \\dfrac{5}{12} + \\dfrac{10}{12^{2}} + \\dfrac{15}{12^{3}} + \\dfrac{20}{12^{4}} + \\dots$.",
      "$\\dfrac{y}{12} = \\dfrac{5}{12^{2}} + \\dfrac{10}{12^{3}} + \\dfrac{15}{12^{4}} + \\dots$",
      "$y - \\dfrac{y}{12} = \\dfrac{5}{12} + \\dfrac{5}{12^{2}} + \\dfrac{5}{12^{3}} + \\dots$",
      "$\\dfrac{5}{12} + \\dfrac{5}{12^{2}} + \\dots = \\dfrac{\\frac{5}{12}}{1 - \\frac{1}{12}}$",
      "$\\dfrac{\\frac{5}{12}}{1 - \\frac{1}{12}} = \\dfrac{5}{11}$",
      "$y - \\dfrac{y}{12} = \\dfrac{5}{11}$",
      "$\\dfrac{11}{12}y = \\dfrac{5}{11}$",
      "$y = \\dfrac{60}{121}$"
    ]
  },
  {
    "id": "t228-k5-p01",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for $\\sum_{k=1}^{3} (3k + 1) \\cdot 9^{k}$, and write that line right.",
    "given": [
      "$y = 4 \\cdot 9 + 7 \\cdot 9^{2} + 10 \\cdot 9^{3}$",
      "$9y = 4 \\cdot 9^{2} + 7 \\cdot 9^{3} + 10 \\cdot 9^{4}$",
      "$9y - y = -4 \\cdot 9 - 3 \\cdot 9^{2} - 3 \\cdot 9^{3} + 10 \\cdot 9^{4}$",
      "$3 \\cdot 9^{2} + 3 \\cdot 9^{3} = 2430$",
      "$9y - y = -36 - 2430 + 65{,}610$",
      "$8y = 63{,}216$",
      "$y = 7902$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 6: 8*y = 63144",
    "solution": [
      "Find the first wrong line in this working for $\\sum_{k=1}^{3} (3k + 1) \\cdot 9^{k}$, and write that line right.",
      "Line 6 adds up the right side of line 5 as $63{,}216$, although $-36 - 2430 + 65{,}610 = 63{,}144$.",
      "Lines 1 to 5 are right, and each line after line 6 follows from the line before it as it is written, so line 6 is the first wrong line.",
      "Line 6 written right is $8y = 63{,}144$."
    ]
  },
  {
    "id": "t228-k5-p02",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for $\\sum_{k=1}^{4} (6k - 1) \\cdot 6^{k}$, and write that line right.",
    "given": [
      "$y = 5 \\cdot 6 + 11 \\cdot 6^{2} + 17 \\cdot 6^{3} + 23 \\cdot 6^{4}$",
      "$6y = 5 \\cdot 6^{2} + 11 \\cdot 6^{3} + 17 \\cdot 6^{4} + 23 \\cdot 6^{5}$",
      "$6y - y = 5 \\cdot 6 - 6 \\cdot 6^{2} - 6 \\cdot 6^{3} - 6 \\cdot 6^{4} + 23 \\cdot 6^{5}$",
      "$6 \\cdot 6^{2} + 6 \\cdot 6^{3} + 6 \\cdot 6^{4} = 9288$",
      "$6y - y = 30 - 9288 + 178{,}848$",
      "$5y = 169{,}590$",
      "$y = 33{,}918$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: 6*y-y = -5*6-6*6^2-6*6^3-6*6^4+23*6^5",
    "solution": [
      "Find the first wrong line in this working for $\\sum_{k=1}^{4} (6k - 1) \\cdot 6^{k}$, and write that line right.",
      "Line 3 gives the first term $5 \\cdot 6$ a plus sign, although it comes from line 2 alone, which is taken away.",
      "Lines 1 and 2 are right, and each line after line 3 follows from the line before it as it is written, so line 3 is the first wrong line.",
      "Line 3 written right is $6y - y = -5 \\cdot 6 - 6 \\cdot 6^{2} - 6 \\cdot 6^{3} - 6 \\cdot 6^{4} + 23 \\cdot 6^{5}$."
    ]
  },
  {
    "id": "t228-k5-p03",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for $\\sum_{k=1}^{4} (5k + 3) \\cdot 9^{k}$, and write that line right.",
    "given": [
      "$y = 8 \\cdot 9 + 13 \\cdot 9^{2} + 18 \\cdot 9^{3} + 23 \\cdot 9^{4}$",
      "$9y = 8 \\cdot 9^{2} + 13 \\cdot 9^{3} + 18 \\cdot 9^{4} + 23 \\cdot 9^{5}$",
      "$9y - y = 8 \\cdot 9 - 5 \\cdot 9^{2} - 5 \\cdot 9^{3} - 5 \\cdot 9^{4} + 23 \\cdot 9^{5}$",
      "$5 \\cdot 9^{2} + 5 \\cdot 9^{3} + 5 \\cdot 9^{4} = 36{,}855$",
      "$9y - y = 72 - 36{,}855 + 1{,}358{,}127$",
      "$8y = 1{,}321{,}344$",
      "$y = 165{,}168$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: 9*y-y = -8*9-5*9^2-5*9^3-5*9^4+23*9^5",
    "solution": [
      "Find the first wrong line in this working for $\\sum_{k=1}^{4} (5k + 3) \\cdot 9^{k}$, and write that line right.",
      "Line 3 gives the first term $8 \\cdot 9$ a plus sign, although it comes from line 2 alone, which is taken away.",
      "Lines 1 and 2 are right, and each line after line 3 follows from the line before it as it is written, so line 3 is the first wrong line.",
      "Line 3 written right is $9y - y = -8 \\cdot 9 - 5 \\cdot 9^{2} - 5 \\cdot 9^{3} - 5 \\cdot 9^{4} + 23 \\cdot 9^{5}$."
    ]
  },
  {
    "id": "t228-k5-p04",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for $\\sum_{k=1}^{3} (6k + 1) \\cdot 8^{k}$, and write that line right.",
    "given": [
      "$y = 7 \\cdot 8 + 13 \\cdot 8^{2} + 19 \\cdot 8^{3}$",
      "$8y = 7 \\cdot 8^{2} + 13 \\cdot 8^{3} + 19 \\cdot 8^{4}$",
      "$8y - y = 7 \\cdot 8 - 6 \\cdot 8^{2} - 6 \\cdot 8^{3} + 19 \\cdot 8^{4}$",
      "$6 \\cdot 8^{2} + 6 \\cdot 8^{3} = 3456$",
      "$8y - y = 56 - 3456 + 77{,}824$",
      "$7y = 74{,}424$",
      "$y = 10{,}632$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: 8*y-y = -7*8-6*8^2-6*8^3+19*8^4",
    "solution": [
      "Find the first wrong line in this working for $\\sum_{k=1}^{3} (6k + 1) \\cdot 8^{k}$, and write that line right.",
      "Line 3 gives the first term $7 \\cdot 8$ a plus sign, although it comes from line 2 alone, which is taken away.",
      "Lines 1 and 2 are right, and each line after line 3 follows from the line before it as it is written, so line 3 is the first wrong line.",
      "Line 3 written right is $8y - y = -7 \\cdot 8 - 6 \\cdot 8^{2} - 6 \\cdot 8^{3} + 19 \\cdot 8^{4}$."
    ]
  },
  {
    "id": "t228-k5-p05",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for $\\sum_{k=1}^{3} (4k + 1) \\cdot 6^{k}$, and write that line right.",
    "given": [
      "$y = 5 \\cdot 6 + 9 \\cdot 6^{2} + 13 \\cdot 6^{3}$",
      "$6y = 5 \\cdot 6^{2} + 9 \\cdot 6^{3} + 13 \\cdot 6^{4}$",
      "$6y - y = -5 \\cdot 6 - 4 \\cdot 6^{2} - 4 \\cdot 6^{3} + 13 \\cdot 6^{4}$",
      "$4 \\cdot 6^{2} + 4 \\cdot 6^{3} = 1008$",
      "$6y - y = -30 - 1008 + 16{,}848$",
      "$5y = 15{,}870$",
      "$y = 3174$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 6: 5*y = 15810",
    "solution": [
      "Find the first wrong line in this working for $\\sum_{k=1}^{3} (4k + 1) \\cdot 6^{k}$, and write that line right.",
      "Line 6 adds up the right side of line 5 as $15{,}870$, although $-30 - 1008 + 16{,}848 = 15{,}810$.",
      "Lines 1 to 5 are right, and each line after line 6 follows from the line before it as it is written, so line 6 is the first wrong line.",
      "Line 6 written right is $5y = 15{,}810$."
    ]
  },
  {
    "id": "t228-k5-p06",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for $\\sum_{k=1}^{4} (5k + 6) \\cdot 7^{k}$, and write that line right.",
    "given": [
      "$y = 11 \\cdot 7 + 16 \\cdot 7^{2} + 21 \\cdot 7^{3} + 26 \\cdot 7^{4}$",
      "$7y = 11 \\cdot 7^{2} + 16 \\cdot 7^{3} + 21 \\cdot 7^{4} + 26 \\cdot 7^{5}$",
      "$7y - y = -11 \\cdot 7 + 5 \\cdot 7^{2} + 5 \\cdot 7^{3} + 5 \\cdot 7^{4} + 26 \\cdot 7^{5}$",
      "$5 \\cdot 7^{2} + 5 \\cdot 7^{3} + 5 \\cdot 7^{4} = 13{,}965$",
      "$7y - y = -77 + 13{,}965 + 436{,}982$",
      "$6y = 450{,}870$",
      "$y = 75{,}145$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: 7*y-y = -11*7-5*7^2-5*7^3-5*7^4+26*7^5",
    "solution": [
      "Find the first wrong line in this working for $\\sum_{k=1}^{4} (5k + 6) \\cdot 7^{k}$, and write that line right.",
      "Line 3 gives the powers from $7^{2}$ to $7^{4}$ the coefficient $5$, although taking line 2 from line 3 leaves $-5$.",
      "Lines 1 and 2 are right, and each line after line 3 follows from the line before it as it is written, so line 3 is the first wrong line.",
      "Line 3 written right is $7y - y = -11 \\cdot 7 - 5 \\cdot 7^{2} - 5 \\cdot 7^{3} - 5 \\cdot 7^{4} + 26 \\cdot 7^{5}$."
    ]
  },
  {
    "id": "t228-k5-p07",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for $\\sum_{k=1}^{4} (5k + 5) \\cdot 4^{k}$, and write that line right.",
    "given": [
      "$y = 10 \\cdot 4 + 15 \\cdot 4^{2} + 20 \\cdot 4^{3} + 25 \\cdot 4^{4}$",
      "$4y = 10 \\cdot 4^{2} + 15 \\cdot 4^{3} + 20 \\cdot 4^{4} + 25 \\cdot 4^{5}$",
      "$4y - y = -10 \\cdot 4 + 5 \\cdot 4^{2} + 5 \\cdot 4^{3} + 5 \\cdot 4^{4} + 25 \\cdot 4^{5}$",
      "$5 \\cdot 4^{2} + 5 \\cdot 4^{3} + 5 \\cdot 4^{4} = 1680$",
      "$4y - y = -40 + 1680 + 25{,}600$",
      "$3y = 27{,}240$",
      "$y = 9080$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: 4*y-y = -10*4-5*4^2-5*4^3-5*4^4+25*4^5",
    "solution": [
      "Find the first wrong line in this working for $\\sum_{k=1}^{4} (5k + 5) \\cdot 4^{k}$, and write that line right.",
      "Line 3 gives the powers from $4^{2}$ to $4^{4}$ the coefficient $5$, although taking line 2 from line 3 leaves $-5$.",
      "Lines 1 and 2 are right, and each line after line 3 follows from the line before it as it is written, so line 3 is the first wrong line.",
      "Line 3 written right is $4y - y = -10 \\cdot 4 - 5 \\cdot 4^{2} - 5 \\cdot 4^{3} - 5 \\cdot 4^{4} + 25 \\cdot 4^{5}$."
    ]
  },
  {
    "id": "t228-k5-p08",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for $\\sum_{k=1}^{3} (7k + 5) \\cdot 4^{k}$, and write that line right.",
    "given": [
      "$y = 12 \\cdot 4 + 19 \\cdot 4^{2} + 26 \\cdot 4^{3}$",
      "$4y = 12 \\cdot 4^{2} + 19 \\cdot 4^{3} + 26 \\cdot 4^{4}$",
      "$4y - y = -12 \\cdot 4 - 7 \\cdot 4^{2} - 7 \\cdot 4^{3} + 26 \\cdot 4^{4}$",
      "$7 \\cdot 4^{2} + 7 \\cdot 4^{3} = 560$",
      "$4y - y = -48 - 560 + 6656$",
      "$3y = 6144$",
      "$y = 2048$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 6: 3*y = 6048",
    "solution": [
      "Find the first wrong line in this working for $\\sum_{k=1}^{3} (7k + 5) \\cdot 4^{k}$, and write that line right.",
      "Line 6 adds up the right side of line 5 as $6144$, although $-48 - 560 + 6656 = 6048$.",
      "Lines 1 to 5 are right, and each line after line 6 follows from the line before it as it is written, so line 6 is the first wrong line.",
      "Line 6 written right is $3y = 6048$."
    ]
  },
  {
    "id": "t228-k5-p09",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for $\\sum_{k=1}^{4} (7k + 2) \\cdot 7^{k}$, and write that line right.",
    "given": [
      "$y = 9 \\cdot 7 + 16 \\cdot 7^{2} + 23 \\cdot 7^{3} + 30 \\cdot 7^{4}$",
      "$7y = 9 \\cdot 7^{2} + 16 \\cdot 7^{3} + 23 \\cdot 7^{4} + 30 \\cdot 7^{5}$",
      "$7y - y = -9 \\cdot 7 - 7 \\cdot 7^{2} - 7 \\cdot 7^{3} - 7 \\cdot 7^{4} + 30 \\cdot 7^{5}$",
      "$7 \\cdot 7^{2} + 7 \\cdot 7^{3} + 7 \\cdot 7^{4} = 19{,}551$",
      "$7y - y = -63 - 19{,}551 + 504{,}210$",
      "$6y = 484{,}722$",
      "$y = 80{,}787$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 6: 6*y = 484596",
    "solution": [
      "Find the first wrong line in this working for $\\sum_{k=1}^{4} (7k + 2) \\cdot 7^{k}$, and write that line right.",
      "Line 6 adds up the right side of line 5 as $484{,}722$, although $-63 - 19{,}551 + 504{,}210 = 484{,}596$.",
      "Lines 1 to 5 are right, and each line after line 6 follows from the line before it as it is written, so line 6 is the first wrong line.",
      "Line 6 written right is $6y = 484{,}596$."
    ]
  },
  {
    "id": "t228-k5-p10",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for $\\sum_{k=1}^{3} (7k + 3) \\cdot 5^{k}$, and write that line right.",
    "given": [
      "$y = 10 \\cdot 5 + 17 \\cdot 5^{2} + 24 \\cdot 5^{3}$",
      "$5y = 10 \\cdot 5^{2} + 17 \\cdot 5^{3} + 24 \\cdot 5^{4}$",
      "$5y - y = -10 \\cdot 5 - 7 \\cdot 5^{2} - 7 \\cdot 5^{3} + 24 \\cdot 5^{4}$",
      "$7 \\cdot 5^{2} + 7 \\cdot 5^{3} = 1050$",
      "$5y - y = -50 + 1050 + 15{,}000$",
      "$4y = 16{,}000$",
      "$y = 4000$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 5: 5*y-y = -50-1050+15000",
    "solution": [
      "Find the first wrong line in this working for $\\sum_{k=1}^{3} (7k + 3) \\cdot 5^{k}$, and write that line right.",
      "Line 5 adds $1050$, although line 3 takes the middle terms away.",
      "Lines 1 to 4 are right, and each line after line 5 follows from the line before it as it is written, so line 5 is the first wrong line.",
      "Line 5 written right is $5y - y = -50 - 1050 + 15{,}000$."
    ]
  },
  {
    "id": "t228-k5-p11",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for $\\sum_{k=1}^{4} (7k + 4) \\cdot 8^{k}$, and write that line right.",
    "given": [
      "$y = 11 \\cdot 8 + 18 \\cdot 8^{2} + 25 \\cdot 8^{3} + 32 \\cdot 8^{4}$",
      "$8y = 11 \\cdot 8^{2} + 18 \\cdot 8^{3} + 25 \\cdot 8^{4} + 32 \\cdot 8^{5}$",
      "$8y - y = -11 \\cdot 8 - 7 \\cdot 8^{2} - 7 \\cdot 8^{3} - 7 \\cdot 8^{4} + 32 \\cdot 8^{5}$",
      "$7 \\cdot 8^{2} + 7 \\cdot 8^{3} + 7 \\cdot 8^{4} = 32{,}704$",
      "$8y - y = -88 + 32{,}704 + 1{,}048{,}576$",
      "$7y = 1{,}081{,}192$",
      "$y = 154{,}456$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 5: 8*y-y = -88-32704+1048576",
    "solution": [
      "Find the first wrong line in this working for $\\sum_{k=1}^{4} (7k + 4) \\cdot 8^{k}$, and write that line right.",
      "Line 5 adds $32{,}704$, although line 3 takes the middle terms away.",
      "Lines 1 to 4 are right, and each line after line 5 follows from the line before it as it is written, so line 5 is the first wrong line.",
      "Line 5 written right is $8y - y = -88 - 32{,}704 + 1{,}048{,}576$."
    ]
  },
  {
    "id": "t228-k5-p12",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for $\\sum_{k=1}^{4} (4k + 3) \\cdot 7^{k}$, and write that line right.",
    "given": [
      "$y = 7 \\cdot 7 + 11 \\cdot 7^{2} + 15 \\cdot 7^{3} + 19 \\cdot 7^{4}$",
      "$7y = 7 \\cdot 7^{2} + 11 \\cdot 7^{3} + 15 \\cdot 7^{4} + 19 \\cdot 7^{5}$",
      "$7y - y = -7 \\cdot 7 - 4 \\cdot 7^{2} - 4 \\cdot 7^{3} - 4 \\cdot 7^{4} + 19 \\cdot 7^{5}$",
      "$4 \\cdot 7^{2} + 4 \\cdot 7^{3} + 4 \\cdot 7^{4} = 11{,}172$",
      "$7y - y = -49 + 11{,}172 + 319{,}333$",
      "$6y = 330{,}456$",
      "$y = 55{,}076$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 5: 7*y-y = -49-11172+319333",
    "solution": [
      "Find the first wrong line in this working for $\\sum_{k=1}^{4} (4k + 3) \\cdot 7^{k}$, and write that line right.",
      "Line 5 adds $11{,}172$, although line 3 takes the middle terms away.",
      "Lines 1 to 4 are right, and each line after line 5 follows from the line before it as it is written, so line 5 is the first wrong line.",
      "Line 5 written right is $7y - y = -49 - 11{,}172 + 319{,}333$."
    ]
  },
  {
    "id": "t228-k5-p13",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for $\\sum_{k=1}^{3} (6k + 3) \\cdot 4^{k}$, and write that line right.",
    "given": [
      "$y = 9 \\cdot 4 + 15 \\cdot 4^{2} + 21 \\cdot 4^{3}$",
      "$4y = 9 \\cdot 4^{2} + 15 \\cdot 4^{3} + 21 \\cdot 4^{4}$",
      "$4y - y = -9 \\cdot 4 - 6 \\cdot 4^{2} - 6 \\cdot 4^{3} + 21 \\cdot 4^{4}$",
      "$6 \\cdot 4^{2} + 6 \\cdot 4^{3} = 480$",
      "$4y - y = -36 + 480 + 5376$",
      "$3y = 5820$",
      "$y = 1940$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 5: 4*y-y = -36-480+5376",
    "solution": [
      "Find the first wrong line in this working for $\\sum_{k=1}^{3} (6k + 3) \\cdot 4^{k}$, and write that line right.",
      "Line 5 adds $480$, although line 3 takes the middle terms away.",
      "Lines 1 to 4 are right, and each line after line 5 follows from the line before it as it is written, so line 5 is the first wrong line.",
      "Line 5 written right is $4y - y = -36 - 480 + 5376$."
    ]
  },
  {
    "id": "t228-k5-p14",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for $\\sum_{k=1}^{3} (3k + 5) \\cdot 5^{k}$, and write that line right.",
    "given": [
      "$y = 8 \\cdot 5 + 11 \\cdot 5^{2} + 14 \\cdot 5^{3}$",
      "$5y = 8 \\cdot 5^{2} + 11 \\cdot 5^{3} + 14 \\cdot 5^{4}$",
      "$5y - y = -8 \\cdot 5 + 3 \\cdot 5^{2} + 3 \\cdot 5^{3} + 14 \\cdot 5^{4}$",
      "$3 \\cdot 5^{2} + 3 \\cdot 5^{3} = 450$",
      "$5y - y = -40 + 450 + 8750$",
      "$4y = 9160$",
      "$y = 2290$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: 5*y-y = -8*5-3*5^2-3*5^3+14*5^4",
    "solution": [
      "Find the first wrong line in this working for $\\sum_{k=1}^{3} (3k + 5) \\cdot 5^{k}$, and write that line right.",
      "Line 3 gives the powers from $5^{2}$ to $5^{3}$ the coefficient $3$, although taking line 2 from line 3 leaves $-3$.",
      "Lines 1 and 2 are right, and each line after line 3 follows from the line before it as it is written, so line 3 is the first wrong line.",
      "Line 3 written right is $5y - y = -8 \\cdot 5 - 3 \\cdot 5^{2} - 3 \\cdot 5^{3} + 14 \\cdot 5^{4}$."
    ]
  },
  {
    "id": "t228-k6-p01",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation with $y$ alone on the left: The number $y$ is the sum of $5$ products, whose first factors start at $11$ and go up by $4$ each time, and whose second factors start at $9$ and are multiplied by $6$ each time.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = 11*9+15*54+19*324+23*1944+27*11664",
    "solution": [
      "Write this sentence as an equation with $y$ alone on the left: The number $y$ is the sum of $5$ products, whose first factors start at $11$ and go up by $4$ each time, and whose second factors start at $9$ and are multiplied by $6$ each time.",
      "The first factors are $11$, $15$, $19$, $23$, $27$.",
      "The second factors are $9$, $54$, $324$, $1944$, $11{,}664$.",
      "The terms are $11 \\cdot 9$, $15 \\cdot 54$, $19 \\cdot 324$, $23 \\cdot 1944$, $27 \\cdot 11{,}664$.",
      "$y = 11 \\cdot 9 + 15 \\cdot 54 + 19 \\cdot 324 + 23 \\cdot 1944 + 27 \\cdot 11{,}664$"
    ]
  },
  {
    "id": "t228-k6-p02",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation with $y$ alone on the left: Adding the first $4$ terms of the arithmetico-geometric series whose terms are the terms of the arithmetic sequence that starts at $15$ and goes up by $6$, times the matching terms of the geometric sequence that starts at $9$ with common ratio $6$, gives a total, and the number $y$ is that total.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = 15*9+21*54+27*324+33*1944",
    "solution": [
      "Write this sentence as an equation with $y$ alone on the left: Adding the first $4$ terms of the arithmetico-geometric series whose terms are the terms of the arithmetic sequence that starts at $15$ and goes up by $6$, times the matching terms of the geometric sequence that starts at $9$ with common ratio $6$, gives a total, and the number $y$ is that total.",
      "The first factors are $15$, $21$, $27$, $33$.",
      "The second factors are $9$, $54$, $324$, $1944$.",
      "The terms are $15 \\cdot 9$, $21 \\cdot 54$, $27 \\cdot 324$, $33 \\cdot 1944$.",
      "$y = 15 \\cdot 9 + 21 \\cdot 54 + 27 \\cdot 324 + 33 \\cdot 1944$"
    ]
  },
  {
    "id": "t228-k6-p03",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation with $y$ alone on the left: Adding the first $3$ terms of the arithmetico-geometric series whose terms are the terms of the arithmetic sequence that starts at $4$ and goes up by $6$, times the matching terms of the geometric sequence that starts at $5$ with common ratio $3$, gives a total, and the number $y$ is that total.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = 4*5+10*15+16*45",
    "solution": [
      "Write this sentence as an equation with $y$ alone on the left: Adding the first $3$ terms of the arithmetico-geometric series whose terms are the terms of the arithmetic sequence that starts at $4$ and goes up by $6$, times the matching terms of the geometric sequence that starts at $5$ with common ratio $3$, gives a total, and the number $y$ is that total.",
      "The first factors are $4$, $10$, $16$.",
      "The second factors are $5$, $15$, $45$.",
      "The terms are $4 \\cdot 5$, $10 \\cdot 15$, $16 \\cdot 45$.",
      "$y = 4 \\cdot 5 + 10 \\cdot 15 + 16 \\cdot 45$"
    ]
  },
  {
    "id": "t228-k6-p04",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation with $y$ alone on the left: The number $y$ is the sum of the first $4$ terms of the series made by multiplying each term of the arithmetic series $9 + 7 + 5 + \\dots$ by the matching term of the geometric series $4 + 8 + 16 + \\dots$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = 9*4+7*8+5*16+3*32",
    "solution": [
      "Write this sentence as an equation with $y$ alone on the left: The number $y$ is the sum of the first $4$ terms of the series made by multiplying each term of the arithmetic series $9 + 7 + 5 + \\dots$ by the matching term of the geometric series $4 + 8 + 16 + \\dots$.",
      "The first factors are $9$, $7$, $5$, $3$.",
      "The second factors are $4$, $8$, $16$, $32$.",
      "The terms are $9 \\cdot 4$, $7 \\cdot 8$, $5 \\cdot 16$, $3 \\cdot 32$.",
      "$y = 9 \\cdot 4 + 7 \\cdot 8 + 5 \\cdot 16 + 3 \\cdot 32$"
    ]
  },
  {
    "id": "t228-k6-p05",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation with $y$ alone on the left: Adding the first $3$ terms of the arithmetico-geometric series whose terms are the terms of the arithmetic sequence that starts at $6$ and goes up by $7$, times the matching terms of the geometric sequence that starts at $9$ with common ratio $4$, gives a total, and the number $y$ is that total.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = 6*9+13*36+20*144",
    "solution": [
      "Write this sentence as an equation with $y$ alone on the left: Adding the first $3$ terms of the arithmetico-geometric series whose terms are the terms of the arithmetic sequence that starts at $6$ and goes up by $7$, times the matching terms of the geometric sequence that starts at $9$ with common ratio $4$, gives a total, and the number $y$ is that total.",
      "The first factors are $6$, $13$, $20$.",
      "The second factors are $9$, $36$, $144$.",
      "The terms are $6 \\cdot 9$, $13 \\cdot 36$, $20 \\cdot 144$.",
      "$y = 6 \\cdot 9 + 13 \\cdot 36 + 20 \\cdot 144$"
    ]
  },
  {
    "id": "t228-k6-p06",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation with $y$ alone on the left: The number $y$ is the sum of $3$ products, whose first factors start at $5$ and go up by $2$ each time, and whose second factors start at $7$ and are multiplied by $2$ each time.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = 5*7+7*14+9*28",
    "solution": [
      "Write this sentence as an equation with $y$ alone on the left: The number $y$ is the sum of $3$ products, whose first factors start at $5$ and go up by $2$ each time, and whose second factors start at $7$ and are multiplied by $2$ each time.",
      "The first factors are $5$, $7$, $9$.",
      "The second factors are $7$, $14$, $28$.",
      "The terms are $5 \\cdot 7$, $7 \\cdot 14$, $9 \\cdot 28$.",
      "$y = 5 \\cdot 7 + 7 \\cdot 14 + 9 \\cdot 28$"
    ]
  },
  {
    "id": "t228-k6-p07",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation with $y$ alone on the left: The number $y$ is the sum of $5$ products, whose first factors start at $10$ and go up by $3$ each time, and whose second factors start at $6$ and are multiplied by $7$ each time.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = 10*6+13*42+16*294+19*2058+22*14406",
    "solution": [
      "Write this sentence as an equation with $y$ alone on the left: The number $y$ is the sum of $5$ products, whose first factors start at $10$ and go up by $3$ each time, and whose second factors start at $6$ and are multiplied by $7$ each time.",
      "The first factors are $10$, $13$, $16$, $19$, $22$.",
      "The second factors are $6$, $42$, $294$, $2058$, $14{,}406$.",
      "The terms are $10 \\cdot 6$, $13 \\cdot 42$, $16 \\cdot 294$, $19 \\cdot 2058$, $22 \\cdot 14{,}406$.",
      "$y = 10 \\cdot 6 + 13 \\cdot 42 + 16 \\cdot 294 + 19 \\cdot 2058 + 22 \\cdot 14{,}406$"
    ]
  },
  {
    "id": "t228-k6-p08",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation with $y$ alone on the left: The number $y$ is the sum of $5$ products, whose first factors start at $8$ and go up by $3$ each time, and whose second factors start at $8$ and are multiplied by $4$ each time.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = 8*8+11*32+14*128+17*512+20*2048",
    "solution": [
      "Write this sentence as an equation with $y$ alone on the left: The number $y$ is the sum of $5$ products, whose first factors start at $8$ and go up by $3$ each time, and whose second factors start at $8$ and are multiplied by $4$ each time.",
      "The first factors are $8$, $11$, $14$, $17$, $20$.",
      "The second factors are $8$, $32$, $128$, $512$, $2048$.",
      "The terms are $8 \\cdot 8$, $11 \\cdot 32$, $14 \\cdot 128$, $17 \\cdot 512$, $20 \\cdot 2048$.",
      "$y = 8 \\cdot 8 + 11 \\cdot 32 + 14 \\cdot 128 + 17 \\cdot 512 + 20 \\cdot 2048$"
    ]
  },
  {
    "id": "t228-k6-p09",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation with $y$ alone on the left: Adding the first $3$ terms of the arithmetico-geometric series whose terms are the terms of the arithmetic sequence that starts at $4$ and goes up by $2$, times the matching terms of the geometric sequence that starts at $5$ with common ratio $4$, gives a total, and the number $y$ is that total.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = 4*5+6*20+8*80",
    "solution": [
      "Write this sentence as an equation with $y$ alone on the left: Adding the first $3$ terms of the arithmetico-geometric series whose terms are the terms of the arithmetic sequence that starts at $4$ and goes up by $2$, times the matching terms of the geometric sequence that starts at $5$ with common ratio $4$, gives a total, and the number $y$ is that total.",
      "The first factors are $4$, $6$, $8$.",
      "The second factors are $5$, $20$, $80$.",
      "The terms are $4 \\cdot 5$, $6 \\cdot 20$, $8 \\cdot 80$.",
      "$y = 4 \\cdot 5 + 6 \\cdot 20 + 8 \\cdot 80$"
    ]
  },
  {
    "id": "t228-k6-p10",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation with $y$ alone on the left: Adding the first $3$ terms of the arithmetico-geometric series whose terms are the terms of the arithmetic sequence that starts at $3$ and goes up by $6$, times the matching terms of the geometric sequence that starts at $7$ with common ratio $3$, gives a total, and the number $y$ is that total.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = 3*7+9*21+15*63",
    "solution": [
      "Write this sentence as an equation with $y$ alone on the left: Adding the first $3$ terms of the arithmetico-geometric series whose terms are the terms of the arithmetic sequence that starts at $3$ and goes up by $6$, times the matching terms of the geometric sequence that starts at $7$ with common ratio $3$, gives a total, and the number $y$ is that total.",
      "The first factors are $3$, $9$, $15$.",
      "The second factors are $7$, $21$, $63$.",
      "The terms are $3 \\cdot 7$, $9 \\cdot 21$, $15 \\cdot 63$.",
      "$y = 3 \\cdot 7 + 9 \\cdot 21 + 15 \\cdot 63$"
    ]
  },
  {
    "id": "t228-k6-p11",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation with $y$ alone on the left: The number $y$ is the sum of the first $4$ terms of the series made by multiplying each term of the arithmetic series $7 + 9 + 11 + \\dots$ by the matching term of the geometric series $5 + 30 + 180 + \\dots$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = 7*5+9*30+11*180+13*1080",
    "solution": [
      "Write this sentence as an equation with $y$ alone on the left: The number $y$ is the sum of the first $4$ terms of the series made by multiplying each term of the arithmetic series $7 + 9 + 11 + \\dots$ by the matching term of the geometric series $5 + 30 + 180 + \\dots$.",
      "The first factors are $7$, $9$, $11$, $13$.",
      "The second factors are $5$, $30$, $180$, $1080$.",
      "The terms are $7 \\cdot 5$, $9 \\cdot 30$, $11 \\cdot 180$, $13 \\cdot 1080$.",
      "$y = 7 \\cdot 5 + 9 \\cdot 30 + 11 \\cdot 180 + 13 \\cdot 1080$"
    ]
  },
  {
    "id": "t228-k6-p12",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation with $y$ alone on the left: The number $y$ is the sum of the first $5$ terms of the series made by multiplying each term of the arithmetic series $13 + 16 + 19 + \\dots$ by the matching term of the geometric series $4 + 20 + 100 + \\dots$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = 13*4+16*20+19*100+22*500+25*2500",
    "solution": [
      "Write this sentence as an equation with $y$ alone on the left: The number $y$ is the sum of the first $5$ terms of the series made by multiplying each term of the arithmetic series $13 + 16 + 19 + \\dots$ by the matching term of the geometric series $4 + 20 + 100 + \\dots$.",
      "The first factors are $13$, $16$, $19$, $22$, $25$.",
      "The second factors are $4$, $20$, $100$, $500$, $2500$.",
      "The terms are $13 \\cdot 4$, $16 \\cdot 20$, $19 \\cdot 100$, $22 \\cdot 500$, $25 \\cdot 2500$.",
      "$y = 13 \\cdot 4 + 16 \\cdot 20 + 19 \\cdot 100 + 22 \\cdot 500 + 25 \\cdot 2500$"
    ]
  },
  {
    "id": "t228-k6-p13",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation with $y$ alone on the left: The number $y$ is the sum of the first $5$ terms of the series made by multiplying each term of the arithmetic series $3 + 6 + 9 + \\dots$ by the matching term of the geometric series $9 + 36 + 144 + \\dots$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = 3*9+6*36+9*144+12*576+15*2304",
    "solution": [
      "Write this sentence as an equation with $y$ alone on the left: The number $y$ is the sum of the first $5$ terms of the series made by multiplying each term of the arithmetic series $3 + 6 + 9 + \\dots$ by the matching term of the geometric series $9 + 36 + 144 + \\dots$.",
      "The first factors are $3$, $6$, $9$, $12$, $15$.",
      "The second factors are $9$, $36$, $144$, $576$, $2304$.",
      "The terms are $3 \\cdot 9$, $6 \\cdot 36$, $9 \\cdot 144$, $12 \\cdot 576$, $15 \\cdot 2304$.",
      "$y = 3 \\cdot 9 + 6 \\cdot 36 + 9 \\cdot 144 + 12 \\cdot 576 + 15 \\cdot 2304$"
    ]
  },
  {
    "id": "t228-k6-p14",
    "topic": "arithmetico-geometric-series",
    "kind": "t228-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation with $y$ alone on the left: The number $y$ is the sum of $3$ products, whose first factors start at $2$ and go up by $3$ each time, and whose second factors start at $7$ and are multiplied by $6$ each time.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = 2*7+5*42+8*252",
    "solution": [
      "Write this sentence as an equation with $y$ alone on the left: The number $y$ is the sum of $3$ products, whose first factors start at $2$ and go up by $3$ each time, and whose second factors start at $7$ and are multiplied by $6$ each time.",
      "The first factors are $2$, $5$, $8$.",
      "The second factors are $7$, $42$, $252$.",
      "The terms are $2 \\cdot 7$, $5 \\cdot 42$, $8 \\cdot 252$.",
      "$y = 2 \\cdot 7 + 5 \\cdot 42 + 8 \\cdot 252$"
    ]
  }
]
