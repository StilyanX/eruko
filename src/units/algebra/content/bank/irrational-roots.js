export default [
  {
    "id": "t202-k1-p01",
    "topic": "irrational-roots",
    "kind": "t202-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a polynomial of degree $4$ with leading coefficient $1$ and rational coefficients that has $6 - 2\\sqrt{10}$ and $2 + 4\\sqrt{7}$ as roots.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^4-16*x^3-64*x^2+1312*x+432",
    "solution": [
      "Find a polynomial of degree $4$ with leading coefficient $1$ and rational coefficients that has $6 - 2\\sqrt{10}$ and $2 + 4\\sqrt{7}$ as roots.",
      "The conjugate $6 + 2\\sqrt{10}$ of $6 - 2\\sqrt{10}$ is also a root.",
      "The conjugate $2 - 4\\sqrt{7}$ of $2 + 4\\sqrt{7}$ is also a root.",
      "$\\left(x - (6 - 2\\sqrt{10})\\right)\\left(x - (6 + 2\\sqrt{10})\\right) = \\left(x - 6\\right)^2 - 40$",
      "$\\left(x - 6\\right)^2 - 40 = x^2 - 12x - 4$",
      "$\\left(x - (2 + 4\\sqrt{7})\\right)\\left(x - (2 - 4\\sqrt{7})\\right) = \\left(x - 2\\right)^2 - 112$",
      "$\\left(x - 2\\right)^2 - 112 = x^2 - 4x - 108$",
      "$f(x) = (x^2 - 12x - 4)(x^2 - 4x - 108)$",
      "$f(x) = x^4 - 16x^3 - 64x^2 + 1312x + 432$"
    ]
  },
  {
    "id": "t202-k1-p02",
    "topic": "irrational-roots",
    "kind": "t202-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the other two roots of $f(x) = x^3 + 4x^2 - 107x - 222$, given that $-1 + 4\\sqrt{7}$ is a root.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{-1-4*sqrt(7), -2}",
    "solution": [
      "Find the other two roots of $f(x) = x^3 + 4x^2 - 107x - 222$, given that $-1 + 4\\sqrt{7}$ is a root.",
      "The conjugate $-1 - 4\\sqrt{7}$ is also a root of $f(x)$.",
      "$(-1 + 4\\sqrt{7}) + (-1 - 4\\sqrt{7}) = -2$",
      "$(-1 + 4\\sqrt{7})(-1 - 4\\sqrt{7}) = 1 - 112 = -111$",
      "The numbers $-1 + 4\\sqrt{7}$ and $-1 - 4\\sqrt{7}$ are the roots of $x^2 + 2x - 111$.",
      "For a number $e$, $f(x) = (x^2 + 2x - 111)(x + e)$.",
      "$-111e = -222$",
      "$e = 2$",
      "So the other two roots are $-1 - 4\\sqrt{7}$ and $-2$."
    ]
  },
  {
    "id": "t202-k1-p03",
    "topic": "irrational-roots",
    "kind": "t202-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a polynomial of degree $4$ with leading coefficient $1$ and rational coefficients that has $5 - 3\\sqrt{6}$ and $-7 - 3\\sqrt{11}$ as roots.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^4+4*x^3-219*x^2+94*x+1450",
    "solution": [
      "Find a polynomial of degree $4$ with leading coefficient $1$ and rational coefficients that has $5 - 3\\sqrt{6}$ and $-7 - 3\\sqrt{11}$ as roots.",
      "The conjugate $5 + 3\\sqrt{6}$ of $5 - 3\\sqrt{6}$ is also a root.",
      "The conjugate $-7 + 3\\sqrt{11}$ of $-7 - 3\\sqrt{11}$ is also a root.",
      "$\\left(x - (5 - 3\\sqrt{6})\\right)\\left(x - (5 + 3\\sqrt{6})\\right) = \\left(x - 5\\right)^2 - 54$",
      "$\\left(x - 5\\right)^2 - 54 = x^2 - 10x - 29$",
      "$\\left(x - (-7 - 3\\sqrt{11})\\right)\\left(x - (-7 + 3\\sqrt{11})\\right) = \\left(x + 7\\right)^2 - 99$",
      "$\\left(x + 7\\right)^2 - 99 = x^2 + 14x - 50$",
      "$f(x) = (x^2 - 10x - 29)(x^2 + 14x - 50)$",
      "$f(x) = x^4 + 4x^3 - 219x^2 + 94x + 1450$"
    ]
  },
  {
    "id": "t202-k1-p04",
    "topic": "irrational-roots",
    "kind": "t202-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a polynomial of degree $4$ with leading coefficient $1$ and rational coefficients that has $4 + 2\\sqrt{19}$ and $-6 + 4\\sqrt{10}$ as roots.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^4+4*x^3-280*x^2+272*x+7440",
    "solution": [
      "Find a polynomial of degree $4$ with leading coefficient $1$ and rational coefficients that has $4 + 2\\sqrt{19}$ and $-6 + 4\\sqrt{10}$ as roots.",
      "The conjugate $4 - 2\\sqrt{19}$ of $4 + 2\\sqrt{19}$ is also a root.",
      "The conjugate $-6 - 4\\sqrt{10}$ of $-6 + 4\\sqrt{10}$ is also a root.",
      "$\\left(x - (4 + 2\\sqrt{19})\\right)\\left(x - (4 - 2\\sqrt{19})\\right) = \\left(x - 4\\right)^2 - 76$",
      "$\\left(x - 4\\right)^2 - 76 = x^2 - 8x - 60$",
      "$\\left(x - (-6 + 4\\sqrt{10})\\right)\\left(x - (-6 - 4\\sqrt{10})\\right) = \\left(x + 6\\right)^2 - 160$",
      "$\\left(x + 6\\right)^2 - 160 = x^2 + 12x - 124$",
      "$f(x) = (x^2 - 8x - 60)(x^2 + 12x - 124)$",
      "$f(x) = x^4 + 4x^3 - 280x^2 + 272x + 7440$"
    ]
  },
  {
    "id": "t202-k1-p05",
    "topic": "irrational-roots",
    "kind": "t202-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the other two roots of $f(x) = x^3 + 9x^2 - 60x + 72$, given that $-6 + 2\\sqrt{15}$ is a root.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{-6-2*sqrt(15), 3}",
    "solution": [
      "Find the other two roots of $f(x) = x^3 + 9x^2 - 60x + 72$, given that $-6 + 2\\sqrt{15}$ is a root.",
      "The conjugate $-6 - 2\\sqrt{15}$ is also a root of $f(x)$.",
      "$(-6 + 2\\sqrt{15}) + (-6 - 2\\sqrt{15}) = -12$",
      "$(-6 + 2\\sqrt{15})(-6 - 2\\sqrt{15}) = 36 - 60 = -24$",
      "The numbers $-6 + 2\\sqrt{15}$ and $-6 - 2\\sqrt{15}$ are the roots of $x^2 + 12x - 24$.",
      "For a number $e$, $f(x) = (x^2 + 12x - 24)(x + e)$.",
      "$-24e = 72$",
      "$e = -3$",
      "So the other two roots are $-6 - 2\\sqrt{15}$ and $3$."
    ]
  },
  {
    "id": "t202-k1-p06",
    "topic": "irrational-roots",
    "kind": "t202-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a polynomial of degree $4$ with leading coefficient $1$ and rational coefficients that has $-6 - 3\\sqrt{14}$ and $-3 + 3\\sqrt{7}$ as roots.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^4+18*x^3-72*x^2-1188*x+4860",
    "solution": [
      "Find a polynomial of degree $4$ with leading coefficient $1$ and rational coefficients that has $-6 - 3\\sqrt{14}$ and $-3 + 3\\sqrt{7}$ as roots.",
      "The conjugate $-6 + 3\\sqrt{14}$ of $-6 - 3\\sqrt{14}$ is also a root.",
      "The conjugate $-3 - 3\\sqrt{7}$ of $-3 + 3\\sqrt{7}$ is also a root.",
      "$\\left(x - (-6 - 3\\sqrt{14})\\right)\\left(x - (-6 + 3\\sqrt{14})\\right) = \\left(x + 6\\right)^2 - 126$",
      "$\\left(x + 6\\right)^2 - 126 = x^2 + 12x - 90$",
      "$\\left(x - (-3 + 3\\sqrt{7})\\right)\\left(x - (-3 - 3\\sqrt{7})\\right) = \\left(x + 3\\right)^2 - 63$",
      "$\\left(x + 3\\right)^2 - 63 = x^2 + 6x - 54$",
      "$f(x) = (x^2 + 12x - 90)(x^2 + 6x - 54)$",
      "$f(x) = x^4 + 18x^3 - 72x^2 - 1188x + 4860$"
    ]
  },
  {
    "id": "t202-k1-p07",
    "topic": "irrational-roots",
    "kind": "t202-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the other two roots of $f(x) = x^3 - 15x^2 - 144x + 1782$, given that $3 + 3\\sqrt{23}$ is a root.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{3-3*sqrt(23), 9}",
    "solution": [
      "Find the other two roots of $f(x) = x^3 - 15x^2 - 144x + 1782$, given that $3 + 3\\sqrt{23}$ is a root.",
      "The conjugate $3 - 3\\sqrt{23}$ is also a root of $f(x)$.",
      "$(3 + 3\\sqrt{23}) + (3 - 3\\sqrt{23}) = 6$",
      "$(3 + 3\\sqrt{23})(3 - 3\\sqrt{23}) = 9 - 207 = -198$",
      "The numbers $3 + 3\\sqrt{23}$ and $3 - 3\\sqrt{23}$ are the roots of $x^2 - 6x - 198$.",
      "For a number $e$, $f(x) = (x^2 - 6x - 198)(x + e)$.",
      "$-198e = 1782$",
      "$e = -9$",
      "So the other two roots are $3 - 3\\sqrt{23}$ and $9$."
    ]
  },
  {
    "id": "t202-k1-p08",
    "topic": "irrational-roots",
    "kind": "t202-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a polynomial of degree $4$ with leading coefficient $1$ and rational coefficients that has $-2 + 2\\sqrt{17}$ and $4 - 3\\sqrt{23}$ as roots.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^4-4*x^3-287*x^2-252*x+12224",
    "solution": [
      "Find a polynomial of degree $4$ with leading coefficient $1$ and rational coefficients that has $-2 + 2\\sqrt{17}$ and $4 - 3\\sqrt{23}$ as roots.",
      "The conjugate $-2 - 2\\sqrt{17}$ of $-2 + 2\\sqrt{17}$ is also a root.",
      "The conjugate $4 + 3\\sqrt{23}$ of $4 - 3\\sqrt{23}$ is also a root.",
      "$\\left(x - (-2 + 2\\sqrt{17})\\right)\\left(x - (-2 - 2\\sqrt{17})\\right) = \\left(x + 2\\right)^2 - 68$",
      "$\\left(x + 2\\right)^2 - 68 = x^2 + 4x - 64$",
      "$\\left(x - (4 - 3\\sqrt{23})\\right)\\left(x - (4 + 3\\sqrt{23})\\right) = \\left(x - 4\\right)^2 - 207$",
      "$\\left(x - 4\\right)^2 - 207 = x^2 - 8x - 191$",
      "$f(x) = (x^2 + 4x - 64)(x^2 - 8x - 191)$",
      "$f(x) = x^4 - 4x^3 - 287x^2 - 252x + 12{,}224$"
    ]
  },
  {
    "id": "t202-k1-p09",
    "topic": "irrational-roots",
    "kind": "t202-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the other two roots of $f(x) = x^3 + 6x^2 - 212x + 840$, given that $-6 + 4\\sqrt{11}$ is a root.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{-6-4*sqrt(11), 6}",
    "solution": [
      "Find the other two roots of $f(x) = x^3 + 6x^2 - 212x + 840$, given that $-6 + 4\\sqrt{11}$ is a root.",
      "The conjugate $-6 - 4\\sqrt{11}$ is also a root of $f(x)$.",
      "$(-6 + 4\\sqrt{11}) + (-6 - 4\\sqrt{11}) = -12$",
      "$(-6 + 4\\sqrt{11})(-6 - 4\\sqrt{11}) = 36 - 176 = -140$",
      "The numbers $-6 + 4\\sqrt{11}$ and $-6 - 4\\sqrt{11}$ are the roots of $x^2 + 12x - 140$.",
      "For a number $e$, $f(x) = (x^2 + 12x - 140)(x + e)$.",
      "$-140e = 840$",
      "$e = -6$",
      "So the other two roots are $-6 - 4\\sqrt{11}$ and $6$."
    ]
  },
  {
    "id": "t202-k1-p10",
    "topic": "irrational-roots",
    "kind": "t202-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the other two roots of $f(x) = x^3 - 15x^2 + 49x + 49$, given that $4 + \\sqrt{23}$ is a root.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{4-sqrt(23), 7}",
    "solution": [
      "Find the other two roots of $f(x) = x^3 - 15x^2 + 49x + 49$, given that $4 + \\sqrt{23}$ is a root.",
      "The conjugate $4 - \\sqrt{23}$ is also a root of $f(x)$.",
      "$(4 + \\sqrt{23}) + (4 - \\sqrt{23}) = 8$",
      "$(4 + \\sqrt{23})(4 - \\sqrt{23}) = 16 - 23 = -7$",
      "The numbers $4 + \\sqrt{23}$ and $4 - \\sqrt{23}$ are the roots of $x^2 - 8x - 7$.",
      "For a number $e$, $f(x) = (x^2 - 8x - 7)(x + e)$.",
      "$-7e = 49$",
      "$e = -7$",
      "So the other two roots are $4 - \\sqrt{23}$ and $7$."
    ]
  },
  {
    "id": "t202-k1-p11",
    "topic": "irrational-roots",
    "kind": "t202-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a polynomial of degree $4$ with leading coefficient $1$ and rational coefficients that has $-1 + 4\\sqrt{3}$ and $5 - 2\\sqrt{21}$ as roots.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^4-8*x^3-126*x^2+352*x+2773",
    "solution": [
      "Find a polynomial of degree $4$ with leading coefficient $1$ and rational coefficients that has $-1 + 4\\sqrt{3}$ and $5 - 2\\sqrt{21}$ as roots.",
      "The conjugate $-1 - 4\\sqrt{3}$ of $-1 + 4\\sqrt{3}$ is also a root.",
      "The conjugate $5 + 2\\sqrt{21}$ of $5 - 2\\sqrt{21}$ is also a root.",
      "$\\left(x - (-1 + 4\\sqrt{3})\\right)\\left(x - (-1 - 4\\sqrt{3})\\right) = \\left(x + 1\\right)^2 - 48$",
      "$\\left(x + 1\\right)^2 - 48 = x^2 + 2x - 47$",
      "$\\left(x - (5 - 2\\sqrt{21})\\right)\\left(x - (5 + 2\\sqrt{21})\\right) = \\left(x - 5\\right)^2 - 84$",
      "$\\left(x - 5\\right)^2 - 84 = x^2 - 10x - 59$",
      "$f(x) = (x^2 + 2x - 47)(x^2 - 10x - 59)$",
      "$f(x) = x^4 - 8x^3 - 126x^2 + 352x + 2773$"
    ]
  },
  {
    "id": "t202-k1-p12",
    "topic": "irrational-roots",
    "kind": "t202-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the other two roots of $f(x) = x^3 - 7x^2 - 34x + 220$, given that $1 - 3\\sqrt{5}$ is a root.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{1+3*sqrt(5), 5}",
    "solution": [
      "Find the other two roots of $f(x) = x^3 - 7x^2 - 34x + 220$, given that $1 - 3\\sqrt{5}$ is a root.",
      "The conjugate $1 + 3\\sqrt{5}$ is also a root of $f(x)$.",
      "$(1 - 3\\sqrt{5}) + (1 + 3\\sqrt{5}) = 2$",
      "$(1 - 3\\sqrt{5})(1 + 3\\sqrt{5}) = 1 - 45 = -44$",
      "The numbers $1 - 3\\sqrt{5}$ and $1 + 3\\sqrt{5}$ are the roots of $x^2 - 2x - 44$.",
      "For a number $e$, $f(x) = (x^2 - 2x - 44)(x + e)$.",
      "$-44e = 220$",
      "$e = -5$",
      "So the other two roots are $1 + 3\\sqrt{5}$ and $5$."
    ]
  },
  {
    "id": "t202-k1-p13",
    "topic": "irrational-roots",
    "kind": "t202-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the other two roots of $f(x) = x^3 - 2x^2 - 119x + 568$, given that $-3 - 4\\sqrt{5}$ is a root.",
    "form": "Answer as the set of values, as in {-1, 3}.",
    "answer": "{-3+4*sqrt(5), 8}",
    "solution": [
      "Find the other two roots of $f(x) = x^3 - 2x^2 - 119x + 568$, given that $-3 - 4\\sqrt{5}$ is a root.",
      "The conjugate $-3 + 4\\sqrt{5}$ is also a root of $f(x)$.",
      "$(-3 - 4\\sqrt{5}) + (-3 + 4\\sqrt{5}) = -6$",
      "$(-3 - 4\\sqrt{5})(-3 + 4\\sqrt{5}) = 9 - 80 = -71$",
      "The numbers $-3 - 4\\sqrt{5}$ and $-3 + 4\\sqrt{5}$ are the roots of $x^2 + 6x - 71$.",
      "For a number $e$, $f(x) = (x^2 + 6x - 71)(x + e)$.",
      "$-71e = 568$",
      "$e = -8$",
      "So the other two roots are $-3 + 4\\sqrt{5}$ and $8$."
    ]
  },
  {
    "id": "t202-k1-p14",
    "topic": "irrational-roots",
    "kind": "t202-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a polynomial of degree $4$ with leading coefficient $1$ and rational coefficients that has $-4 - 3\\sqrt{21}$ and $-5 - 2\\sqrt{13}$ as roots.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^4+18*x^3-120*x^2-1946*x+4671",
    "solution": [
      "Find a polynomial of degree $4$ with leading coefficient $1$ and rational coefficients that has $-4 - 3\\sqrt{21}$ and $-5 - 2\\sqrt{13}$ as roots.",
      "The conjugate $-4 + 3\\sqrt{21}$ of $-4 - 3\\sqrt{21}$ is also a root.",
      "The conjugate $-5 + 2\\sqrt{13}$ of $-5 - 2\\sqrt{13}$ is also a root.",
      "$\\left(x - (-4 - 3\\sqrt{21})\\right)\\left(x - (-4 + 3\\sqrt{21})\\right) = \\left(x + 4\\right)^2 - 189$",
      "$\\left(x + 4\\right)^2 - 189 = x^2 + 8x - 173$",
      "$\\left(x - (-5 - 2\\sqrt{13})\\right)\\left(x - (-5 + 2\\sqrt{13})\\right) = \\left(x + 5\\right)^2 - 52$",
      "$\\left(x + 5\\right)^2 - 52 = x^2 + 10x - 27$",
      "$f(x) = (x^2 + 8x - 173)(x^2 + 10x - 27)$",
      "$f(x) = x^4 + 18x^3 - 120x^2 - 1946x + 4671$"
    ]
  },
  {
    "id": "t202-k2-p01",
    "topic": "irrational-roots",
    "kind": "t202-k2",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find a polynomial of degree $3$ with integer coefficients and leading coefficient $1$ that has $2\\sqrt[3]{12} + \\sqrt[3]{18}$ as a root.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^3-36*x-114",
    "solution": [
      "Find a polynomial of degree $3$ with integer coefficients and leading coefficient $1$ that has $2\\sqrt[3]{12} + \\sqrt[3]{18}$ as a root.",
      "$x = 2\\sqrt[3]{12} + \\sqrt[3]{18}$",
      "$x^3 = 96 + 18 + 3 \\cdot 2\\sqrt[3]{12} \\cdot \\sqrt[3]{18} \\cdot x$",
      "$2\\sqrt[3]{12} \\cdot \\sqrt[3]{18} = 2\\sqrt[3]{216} = 12$",
      "$x^3 = 114 + 36x$",
      "$x^3 - 36x - 114 = 0$",
      "The polynomial $x^3 - 36x - 114$ has the root $2\\sqrt[3]{12} + \\sqrt[3]{18}$."
    ]
  },
  {
    "id": "t202-k2-p02",
    "topic": "irrational-roots",
    "kind": "t202-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $2\\sqrt{2} + 3\\sqrt{13}$ as a root.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^4-250*x^2+11881",
    "solution": [
      "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $2\\sqrt{2} + 3\\sqrt{13}$ as a root.",
      "$x = 2\\sqrt{2} + 3\\sqrt{13}$",
      "$x^2 = 8 + 12\\sqrt{26} + 117$",
      "$x^2 - 125 = 12\\sqrt{26}$",
      "$(x^2 - 125)^2 = 3744$",
      "$x^4 - 250x^2 + 15{,}625 = 3744$",
      "$x^4 - 250x^2 + 11{,}881 = 0$",
      "The polynomial $x^4 - 250x^2 + 11{,}881$ has the root $2\\sqrt{2} + 3\\sqrt{13}$."
    ]
  },
  {
    "id": "t202-k2-p03",
    "topic": "irrational-roots",
    "kind": "t202-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $\\sqrt{43 + \\sqrt{13}}$ as a root.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^4-86*x^2+1836",
    "solution": [
      "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $\\sqrt{43 + \\sqrt{13}}$ as a root.",
      "$x = \\sqrt{43 + \\sqrt{13}}$",
      "$x^2 = 43 + \\sqrt{13}$",
      "$x^2 - 43 = \\sqrt{13}$",
      "$(x^2 - 43)^2 = 13$",
      "$x^4 - 86x^2 + 1849 = 13$",
      "$x^4 - 86x^2 + 1836 = 0$",
      "The polynomial $x^4 - 86x^2 + 1836$ has the root $\\sqrt{43 + \\sqrt{13}}$."
    ]
  },
  {
    "id": "t202-k2-p04",
    "topic": "irrational-roots",
    "kind": "t202-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $\\sqrt{7} + 2\\sqrt{13}$ as a root.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^4-118*x^2+2025",
    "solution": [
      "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $\\sqrt{7} + 2\\sqrt{13}$ as a root.",
      "$x = \\sqrt{7} + 2\\sqrt{13}$",
      "$x^2 = 7 + 4\\sqrt{91} + 52$",
      "$x^2 - 59 = 4\\sqrt{91}$",
      "$(x^2 - 59)^2 = 1456$",
      "$x^4 - 118x^2 + 3481 = 1456$",
      "$x^4 - 118x^2 + 2025 = 0$",
      "The polynomial $x^4 - 118x^2 + 2025$ has the root $\\sqrt{7} + 2\\sqrt{13}$."
    ]
  },
  {
    "id": "t202-k2-p05",
    "topic": "irrational-roots",
    "kind": "t202-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $3\\sqrt{3} + 3\\sqrt{14}$ as a root.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^4-306*x^2+9801",
    "solution": [
      "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $3\\sqrt{3} + 3\\sqrt{14}$ as a root.",
      "$x = 3\\sqrt{3} + 3\\sqrt{14}$",
      "$x^2 = 27 + 18\\sqrt{42} + 126$",
      "$x^2 - 153 = 18\\sqrt{42}$",
      "$(x^2 - 153)^2 = 13{,}608$",
      "$x^4 - 306x^2 + 23{,}409 = 13{,}608$",
      "$x^4 - 306x^2 + 9801 = 0$",
      "The polynomial $x^4 - 306x^2 + 9801$ has the root $3\\sqrt{3} + 3\\sqrt{14}$."
    ]
  },
  {
    "id": "t202-k2-p06",
    "topic": "irrational-roots",
    "kind": "t202-k2",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find a polynomial of degree $3$ with integer coefficients and leading coefficient $1$ that has $\\sqrt[3]{44} - \\sqrt[3]{242}$ as a root.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^3+66*x+198",
    "solution": [
      "Find a polynomial of degree $3$ with integer coefficients and leading coefficient $1$ that has $\\sqrt[3]{44} - \\sqrt[3]{242}$ as a root.",
      "$x = \\sqrt[3]{44} - \\sqrt[3]{242}$",
      "$x^3 = 44 - 242 - 3 \\cdot \\sqrt[3]{44} \\cdot \\sqrt[3]{242} \\cdot x$",
      "$\\sqrt[3]{44} \\cdot \\sqrt[3]{242} = \\sqrt[3]{10{,}648} = 22$",
      "$x^3 = -198 - 66x$",
      "$x^3 + 66x + 198 = 0$",
      "The polynomial $x^3 + 66x + 198$ has the root $\\sqrt[3]{44} - \\sqrt[3]{242}$."
    ]
  },
  {
    "id": "t202-k2-p07",
    "topic": "irrational-roots",
    "kind": "t202-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $\\sqrt{80 - 6\\sqrt{3}}$ as a root.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^4-160*x^2+6292",
    "solution": [
      "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $\\sqrt{80 - 6\\sqrt{3}}$ as a root.",
      "$x = \\sqrt{80 - 6\\sqrt{3}}$",
      "$x^2 = 80 - 6\\sqrt{3}$",
      "$x^2 - 80 = -6\\sqrt{3}$",
      "$(x^2 - 80)^2 = 108$",
      "$x^4 - 160x^2 + 6400 = 108$",
      "$x^4 - 160x^2 + 6292 = 0$",
      "The polynomial $x^4 - 160x^2 + 6292$ has the root $\\sqrt{80 - 6\\sqrt{3}}$."
    ]
  },
  {
    "id": "t202-k2-p08",
    "topic": "irrational-roots",
    "kind": "t202-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $\\sqrt{79 - 5\\sqrt{14}}$ as a root.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^4-158*x^2+5891",
    "solution": [
      "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $\\sqrt{79 - 5\\sqrt{14}}$ as a root.",
      "$x = \\sqrt{79 - 5\\sqrt{14}}$",
      "$x^2 = 79 - 5\\sqrt{14}$",
      "$x^2 - 79 = -5\\sqrt{14}$",
      "$(x^2 - 79)^2 = 350$",
      "$x^4 - 158x^2 + 6241 = 350$",
      "$x^4 - 158x^2 + 5891 = 0$",
      "The polynomial $x^4 - 158x^2 + 5891$ has the root $\\sqrt{79 - 5\\sqrt{14}}$."
    ]
  },
  {
    "id": "t202-k2-p09",
    "topic": "irrational-roots",
    "kind": "t202-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $3\\sqrt{11} - 2\\sqrt{14}$ as a root.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^4-310*x^2+1849",
    "solution": [
      "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $3\\sqrt{11} - 2\\sqrt{14}$ as a root.",
      "$x = 3\\sqrt{11} - 2\\sqrt{14}$",
      "$x^2 = 99 - 12\\sqrt{154} + 56$",
      "$x^2 - 155 = -12\\sqrt{154}$",
      "$(x^2 - 155)^2 = 22{,}176$",
      "$x^4 - 310x^2 + 24{,}025 = 22{,}176$",
      "$x^4 - 310x^2 + 1849 = 0$",
      "The polynomial $x^4 - 310x^2 + 1849$ has the root $3\\sqrt{11} - 2\\sqrt{14}$."
    ]
  },
  {
    "id": "t202-k2-p10",
    "topic": "irrational-roots",
    "kind": "t202-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $\\sqrt{67 - \\sqrt{3}}$ as a root.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^4-134*x^2+4486",
    "solution": [
      "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $\\sqrt{67 - \\sqrt{3}}$ as a root.",
      "$x = \\sqrt{67 - \\sqrt{3}}$",
      "$x^2 = 67 - \\sqrt{3}$",
      "$x^2 - 67 = -\\sqrt{3}$",
      "$(x^2 - 67)^2 = 3$",
      "$x^4 - 134x^2 + 4489 = 3$",
      "$x^4 - 134x^2 + 4486 = 0$",
      "The polynomial $x^4 - 134x^2 + 4486$ has the root $\\sqrt{67 - \\sqrt{3}}$."
    ]
  },
  {
    "id": "t202-k2-p11",
    "topic": "irrational-roots",
    "kind": "t202-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $\\sqrt{73 + 6\\sqrt{10}}$ as a root.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^4-146*x^2+4969",
    "solution": [
      "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $\\sqrt{73 + 6\\sqrt{10}}$ as a root.",
      "$x = \\sqrt{73 + 6\\sqrt{10}}$",
      "$x^2 = 73 + 6\\sqrt{10}$",
      "$x^2 - 73 = 6\\sqrt{10}$",
      "$(x^2 - 73)^2 = 360$",
      "$x^4 - 146x^2 + 5329 = 360$",
      "$x^4 - 146x^2 + 4969 = 0$",
      "The polynomial $x^4 - 146x^2 + 4969$ has the root $\\sqrt{73 + 6\\sqrt{10}}$."
    ]
  },
  {
    "id": "t202-k2-p12",
    "topic": "irrational-roots",
    "kind": "t202-k2",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find a polynomial of degree $3$ with integer coefficients and leading coefficient $1$ that has $\\sqrt[3]{63} - \\sqrt[3]{147}$ as a root.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^3+63*x+84",
    "solution": [
      "Find a polynomial of degree $3$ with integer coefficients and leading coefficient $1$ that has $\\sqrt[3]{63} - \\sqrt[3]{147}$ as a root.",
      "$x = \\sqrt[3]{63} - \\sqrt[3]{147}$",
      "$x^3 = 63 - 147 - 3 \\cdot \\sqrt[3]{63} \\cdot \\sqrt[3]{147} \\cdot x$",
      "$\\sqrt[3]{63} \\cdot \\sqrt[3]{147} = \\sqrt[3]{9261} = 21$",
      "$x^3 = -84 - 63x$",
      "$x^3 + 63x + 84 = 0$",
      "The polynomial $x^3 + 63x + 84$ has the root $\\sqrt[3]{63} - \\sqrt[3]{147}$."
    ]
  },
  {
    "id": "t202-k2-p13",
    "topic": "irrational-roots",
    "kind": "t202-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $3\\sqrt{15} + 3\\sqrt{19}$ as a root.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^4-612*x^2+1296",
    "solution": [
      "Find a polynomial of degree $4$ with integer coefficients and leading coefficient $1$ that has $3\\sqrt{15} + 3\\sqrt{19}$ as a root.",
      "$x = 3\\sqrt{15} + 3\\sqrt{19}$",
      "$x^2 = 135 + 18\\sqrt{285} + 171$",
      "$x^2 - 306 = 18\\sqrt{285}$",
      "$(x^2 - 306)^2 = 92{,}340$",
      "$x^4 - 612x^2 + 93{,}636 = 92{,}340$",
      "$x^4 - 612x^2 + 1296 = 0$",
      "The polynomial $x^4 - 612x^2 + 1296$ has the root $3\\sqrt{15} + 3\\sqrt{19}$."
    ]
  },
  {
    "id": "t202-k2-p14",
    "topic": "irrational-roots",
    "kind": "t202-k2",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find a polynomial of degree $3$ with integer coefficients and leading coefficient $1$ that has $\\sqrt[3]{175} - 2\\sqrt[3]{245}$ as a root.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "x^3+210*x+1785",
    "solution": [
      "Find a polynomial of degree $3$ with integer coefficients and leading coefficient $1$ that has $\\sqrt[3]{175} - 2\\sqrt[3]{245}$ as a root.",
      "$x = \\sqrt[3]{175} - 2\\sqrt[3]{245}$",
      "$x^3 = 175 - 1960 - 3 \\cdot \\sqrt[3]{175} \\cdot 2\\sqrt[3]{245} \\cdot x$",
      "$\\sqrt[3]{175} \\cdot 2\\sqrt[3]{245} = 2\\sqrt[3]{42{,}875} = 70$",
      "$x^3 = -1785 - 210x$",
      "$x^3 + 210x + 1785 = 0$",
      "The polynomial $x^3 + 210x + 1785$ has the root $\\sqrt[3]{175} - 2\\sqrt[3]{245}$."
    ]
  },
  {
    "id": "t202-k3-p01",
    "topic": "irrational-roots",
    "kind": "t202-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether the number $r = \\sqrt[3]{47 + 80\\sqrt{5}} - \\sqrt[3]{80\\sqrt{5} - 47}$ is irrational.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether the number $r = \\sqrt[3]{47 + 80\\sqrt{5}} - \\sqrt[3]{80\\sqrt{5} - 47}$ is irrational.",
      "$r^3 = (47 + 80\\sqrt{5}) - (80\\sqrt{5} - 47) - 3\\sqrt[3]{47 + 80\\sqrt{5}}\\sqrt[3]{80\\sqrt{5} - 47}\\,r$",
      "$(47 + 80\\sqrt{5})(80\\sqrt{5} - 47) = 32{,}000 - 2209 = 29{,}791$",
      "$\\sqrt[3]{47 + 80\\sqrt{5}}\\sqrt[3]{80\\sqrt{5} - 47} = \\sqrt[3]{29{,}791} = 31$",
      "$r^3 = 94 - 93r$",
      "So $r$ is a root of $f(x) = x^3 + 93x - 94$.",
      "The number $r$ is positive.",
      "$47 + 80\\sqrt{5} < 343$",
      "So $r$ is less than $7$.",
      "If $r$ is rational, it is one of $1$ and $2$.",
      "$\\begin{array}{c|cc} x & 1 & 2 \\\\ \\hline f(x) & 0 & 100 \\end{array}$",
      "$f(x) = (x - 1)(x^2 + x + 94)$",
      "The discriminant of $x^2 + x + 94$ is $1^2 - 4 \\cdot 94 = -375$.",
      "So $r = 1$, a rational number, and the answer is No."
    ]
  },
  {
    "id": "t202-k3-p02",
    "topic": "irrational-roots",
    "kind": "t202-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether the number $r = \\sqrt[3]{8 + 2\\sqrt{70}} - \\sqrt[3]{2\\sqrt{70} - 8}$ is irrational.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether the number $r = \\sqrt[3]{8 + 2\\sqrt{70}} - \\sqrt[3]{2\\sqrt{70} - 8}$ is irrational.",
      "$r^3 = (8 + 2\\sqrt{70}) - (2\\sqrt{70} - 8) - 3\\sqrt[3]{8 + 2\\sqrt{70}}\\sqrt[3]{2\\sqrt{70} - 8}\\,r$",
      "$(8 + 2\\sqrt{70})(2\\sqrt{70} - 8) = 280 - 64 = 216$",
      "$\\sqrt[3]{8 + 2\\sqrt{70}}\\sqrt[3]{2\\sqrt{70} - 8} = \\sqrt[3]{216} = 6$",
      "$r^3 = 16 - 18r$",
      "So $r$ is a root of $f(x) = x^3 + 18x - 16$.",
      "The number $r$ is positive.",
      "$8 + 2\\sqrt{70} < 27$",
      "So $r$ is less than $3$.",
      "If $r$ is rational, it is one of $1$ and $2$.",
      "$\\begin{array}{c|cc} x & 1 & 2 \\\\ \\hline f(x) & 3 & 28 \\end{array}$",
      "No value in line 11 is $0$, so $r$ is not rational: $r$ is irrational, and the answer is Yes."
    ]
  },
  {
    "id": "t202-k3-p03",
    "topic": "irrational-roots",
    "kind": "t202-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether the number $r = \\sqrt[3]{140 + 34\\sqrt{22}} - \\sqrt[3]{34\\sqrt{22} - 140}$ is irrational.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether the number $r = \\sqrt[3]{140 + 34\\sqrt{22}} - \\sqrt[3]{34\\sqrt{22} - 140}$ is irrational.",
      "$r^3 = (140 + 34\\sqrt{22}) - (34\\sqrt{22} - 140) - 3\\sqrt[3]{140 + 34\\sqrt{22}}\\sqrt[3]{34\\sqrt{22} - 140}\\,r$",
      "$(140 + 34\\sqrt{22})(34\\sqrt{22} - 140) = 25{,}432 - 19{,}600 = 5832$",
      "$\\sqrt[3]{140 + 34\\sqrt{22}}\\sqrt[3]{34\\sqrt{22} - 140} = \\sqrt[3]{5832} = 18$",
      "$r^3 = 280 - 54r$",
      "So $r$ is a root of $f(x) = x^3 + 54x - 280$.",
      "The number $r$ is positive.",
      "$140 + 34\\sqrt{22} < 343$",
      "So $r$ is less than $7$.",
      "If $r$ is rational, it is one of $1$, $2$, $4$ and $5$.",
      "$\\begin{array}{c|cccc} x & 1 & 2 & 4 & 5 \\\\ \\hline f(x) & -225 & -164 & 0 & 115 \\end{array}$",
      "$f(x) = (x - 4)(x^2 + 4x + 70)$",
      "The discriminant of $x^2 + 4x + 70$ is $4^2 - 4 \\cdot 70 = -264$.",
      "So $r = 4$, a rational number, and the answer is No."
    ]
  },
  {
    "id": "t202-k3-p04",
    "topic": "irrational-roots",
    "kind": "t202-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether the number $r = \\sqrt[3]{145 + 18\\sqrt{69}} - \\sqrt[3]{18\\sqrt{69} - 145}$ is irrational.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether the number $r = \\sqrt[3]{145 + 18\\sqrt{69}} - \\sqrt[3]{18\\sqrt{69} - 145}$ is irrational.",
      "$r^3 = (145 + 18\\sqrt{69}) - (18\\sqrt{69} - 145) - 3\\sqrt[3]{145 + 18\\sqrt{69}}\\sqrt[3]{18\\sqrt{69} - 145}\\,r$",
      "$(145 + 18\\sqrt{69})(18\\sqrt{69} - 145) = 22{,}356 - 21{,}025 = 1331$",
      "$\\sqrt[3]{145 + 18\\sqrt{69}}\\sqrt[3]{18\\sqrt{69} - 145} = \\sqrt[3]{1331} = 11$",
      "$r^3 = 290 - 33r$",
      "So $r$ is a root of $f(x) = x^3 + 33x - 290$.",
      "The number $r$ is positive.",
      "$145 + 18\\sqrt{69} < 343$",
      "So $r$ is less than $7$.",
      "If $r$ is rational, it is one of $1$, $2$ and $5$.",
      "$\\begin{array}{c|ccc} x & 1 & 2 & 5 \\\\ \\hline f(x) & -256 & -216 & 0 \\end{array}$",
      "$f(x) = (x - 5)(x^2 + 5x + 58)$",
      "The discriminant of $x^2 + 5x + 58$ is $5^2 - 4 \\cdot 58 = -207$.",
      "So $r = 5$, a rational number, and the answer is No."
    ]
  },
  {
    "id": "t202-k3-p05",
    "topic": "irrational-roots",
    "kind": "t202-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether the number $r = \\sqrt[3]{40 + 32\\sqrt{23}} - \\sqrt[3]{32\\sqrt{23} - 40}$ is irrational.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether the number $r = \\sqrt[3]{40 + 32\\sqrt{23}} - \\sqrt[3]{32\\sqrt{23} - 40}$ is irrational.",
      "$r^3 = (40 + 32\\sqrt{23}) - (32\\sqrt{23} - 40) - 3\\sqrt[3]{40 + 32\\sqrt{23}}\\sqrt[3]{32\\sqrt{23} - 40}\\,r$",
      "$(40 + 32\\sqrt{23})(32\\sqrt{23} - 40) = 23{,}552 - 1600 = 21{,}952$",
      "$\\sqrt[3]{40 + 32\\sqrt{23}}\\sqrt[3]{32\\sqrt{23} - 40} = \\sqrt[3]{21{,}952} = 28$",
      "$r^3 = 80 - 84r$",
      "So $r$ is a root of $f(x) = x^3 + 84x - 80$.",
      "The number $r$ is positive.",
      "$40 + 32\\sqrt{23} < 216$",
      "So $r$ is less than $6$.",
      "If $r$ is rational, it is one of $1$, $2$, $4$ and $5$.",
      "$\\begin{array}{c|cccc} x & 1 & 2 & 4 & 5 \\\\ \\hline f(x) & 5 & 96 & 320 & 465 \\end{array}$",
      "No value in line 11 is $0$, so $r$ is not rational: $r$ is irrational, and the answer is Yes."
    ]
  },
  {
    "id": "t202-k3-p06",
    "topic": "irrational-roots",
    "kind": "t202-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether the number $r = \\sqrt[3]{35 + 12\\sqrt{93}} - \\sqrt[3]{12\\sqrt{93} - 35}$ is irrational.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether the number $r = \\sqrt[3]{35 + 12\\sqrt{93}} - \\sqrt[3]{12\\sqrt{93} - 35}$ is irrational.",
      "$r^3 = (35 + 12\\sqrt{93}) - (12\\sqrt{93} - 35) - 3\\sqrt[3]{35 + 12\\sqrt{93}}\\sqrt[3]{12\\sqrt{93} - 35}\\,r$",
      "$(35 + 12\\sqrt{93})(12\\sqrt{93} - 35) = 13{,}392 - 1225 = 12{,}167$",
      "$\\sqrt[3]{35 + 12\\sqrt{93}}\\sqrt[3]{12\\sqrt{93} - 35} = \\sqrt[3]{12{,}167} = 23$",
      "$r^3 = 70 - 69r$",
      "So $r$ is a root of $f(x) = x^3 + 69x - 70$.",
      "The number $r$ is positive.",
      "$35 + 12\\sqrt{93} < 216$",
      "So $r$ is less than $6$.",
      "If $r$ is rational, it is one of $1$, $2$ and $5$.",
      "$\\begin{array}{c|ccc} x & 1 & 2 & 5 \\\\ \\hline f(x) & 0 & 76 & 400 \\end{array}$",
      "$f(x) = (x - 1)(x^2 + x + 70)$",
      "The discriminant of $x^2 + x + 70$ is $1^2 - 4 \\cdot 70 = -279$.",
      "So $r = 1$, a rational number, and the answer is No."
    ]
  },
  {
    "id": "t202-k3-p07",
    "topic": "irrational-roots",
    "kind": "t202-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether the number $r = \\sqrt[3]{116 + 12\\sqrt{97}} - \\sqrt[3]{12\\sqrt{97} - 116}$ is irrational.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether the number $r = \\sqrt[3]{116 + 12\\sqrt{97}} - \\sqrt[3]{12\\sqrt{97} - 116}$ is irrational.",
      "$r^3 = (116 + 12\\sqrt{97}) - (12\\sqrt{97} - 116) - 3\\sqrt[3]{116 + 12\\sqrt{97}}\\sqrt[3]{12\\sqrt{97} - 116}\\,r$",
      "$(116 + 12\\sqrt{97})(12\\sqrt{97} - 116) = 13{,}968 - 13{,}456 = 512$",
      "$\\sqrt[3]{116 + 12\\sqrt{97}}\\sqrt[3]{12\\sqrt{97} - 116} = \\sqrt[3]{512} = 8$",
      "$r^3 = 232 - 24r$",
      "So $r$ is a root of $f(x) = x^3 + 24x - 232$.",
      "The number $r$ is positive.",
      "$116 + 12\\sqrt{97} < 343$",
      "So $r$ is less than $7$.",
      "If $r$ is rational, it is one of $1$, $2$ and $4$.",
      "$\\begin{array}{c|ccc} x & 1 & 2 & 4 \\\\ \\hline f(x) & -207 & -176 & -72 \\end{array}$",
      "No value in line 11 is $0$, so $r$ is not rational: $r$ is irrational, and the answer is Yes."
    ]
  },
  {
    "id": "t202-k3-p08",
    "topic": "irrational-roots",
    "kind": "t202-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether the number $r = \\sqrt[3]{81 + 27\\sqrt{73}} - \\sqrt[3]{27\\sqrt{73} - 81}$ is irrational.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether the number $r = \\sqrt[3]{81 + 27\\sqrt{73}} - \\sqrt[3]{27\\sqrt{73} - 81}$ is irrational.",
      "$r^3 = (81 + 27\\sqrt{73}) - (27\\sqrt{73} - 81) - 3\\sqrt[3]{81 + 27\\sqrt{73}}\\sqrt[3]{27\\sqrt{73} - 81}\\,r$",
      "$(81 + 27\\sqrt{73})(27\\sqrt{73} - 81) = 53{,}217 - 6561 = 46{,}656$",
      "$\\sqrt[3]{81 + 27\\sqrt{73}}\\sqrt[3]{27\\sqrt{73} - 81} = \\sqrt[3]{46{,}656} = 36$",
      "$r^3 = 162 - 108r$",
      "So $r$ is a root of $f(x) = x^3 + 108x - 162$.",
      "The number $r$ is positive.",
      "$81 + 27\\sqrt{73} < 343$",
      "So $r$ is less than $7$.",
      "If $r$ is rational, it is one of $1$, $2$, $3$ and $6$.",
      "$\\begin{array}{c|cccc} x & 1 & 2 & 3 & 6 \\\\ \\hline f(x) & -53 & 62 & 189 & 702 \\end{array}$",
      "No value in line 11 is $0$, so $r$ is not rational: $r$ is irrational, and the answer is Yes."
    ]
  },
  {
    "id": "t202-k3-p09",
    "topic": "irrational-roots",
    "kind": "t202-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether the number $r = \\sqrt[3]{52 + 20\\sqrt{17}} - \\sqrt[3]{20\\sqrt{17} - 52}$ is irrational.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether the number $r = \\sqrt[3]{52 + 20\\sqrt{17}} - \\sqrt[3]{20\\sqrt{17} - 52}$ is irrational.",
      "$r^3 = (52 + 20\\sqrt{17}) - (20\\sqrt{17} - 52) - 3\\sqrt[3]{52 + 20\\sqrt{17}}\\sqrt[3]{20\\sqrt{17} - 52}\\,r$",
      "$(52 + 20\\sqrt{17})(20\\sqrt{17} - 52) = 6800 - 2704 = 4096$",
      "$\\sqrt[3]{52 + 20\\sqrt{17}}\\sqrt[3]{20\\sqrt{17} - 52} = \\sqrt[3]{4096} = 16$",
      "$r^3 = 104 - 48r$",
      "So $r$ is a root of $f(x) = x^3 + 48x - 104$.",
      "The number $r$ is positive.",
      "$52 + 20\\sqrt{17} < 216$",
      "So $r$ is less than $6$.",
      "If $r$ is rational, it is one of $1$, $2$ and $4$.",
      "$\\begin{array}{c|ccc} x & 1 & 2 & 4 \\\\ \\hline f(x) & -55 & 0 & 152 \\end{array}$",
      "$f(x) = (x - 2)(x^2 + 2x + 52)$",
      "The discriminant of $x^2 + 2x + 52$ is $2^2 - 4 \\cdot 52 = -204$.",
      "So $r = 2$, a rational number, and the answer is No."
    ]
  },
  {
    "id": "t202-k3-p10",
    "topic": "irrational-roots",
    "kind": "t202-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether the number $r = \\sqrt[3]{91 + 39\\sqrt{17}} - \\sqrt[3]{39\\sqrt{17} - 91}$ is irrational.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether the number $r = \\sqrt[3]{91 + 39\\sqrt{17}} - \\sqrt[3]{39\\sqrt{17} - 91}$ is irrational.",
      "$r^3 = (91 + 39\\sqrt{17}) - (39\\sqrt{17} - 91) - 3\\sqrt[3]{91 + 39\\sqrt{17}}\\sqrt[3]{39\\sqrt{17} - 91}\\,r$",
      "$(91 + 39\\sqrt{17})(39\\sqrt{17} - 91) = 25{,}857 - 8281 = 17{,}576$",
      "$\\sqrt[3]{91 + 39\\sqrt{17}}\\sqrt[3]{39\\sqrt{17} - 91} = \\sqrt[3]{17{,}576} = 26$",
      "$r^3 = 182 - 78r$",
      "So $r$ is a root of $f(x) = x^3 + 78x - 182$.",
      "The number $r$ is positive.",
      "$91 + 39\\sqrt{17} < 343$",
      "So $r$ is less than $7$.",
      "If $r$ is rational, it is one of $1$ and $2$.",
      "$\\begin{array}{c|cc} x & 1 & 2 \\\\ \\hline f(x) & -103 & -18 \\end{array}$",
      "No value in line 11 is $0$, so $r$ is not rational: $r$ is irrational, and the answer is Yes."
    ]
  },
  {
    "id": "t202-k3-p11",
    "topic": "irrational-roots",
    "kind": "t202-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether the number $r = \\sqrt[3]{122 + 31\\sqrt{19}} - \\sqrt[3]{31\\sqrt{19} - 122}$ is irrational.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether the number $r = \\sqrt[3]{122 + 31\\sqrt{19}} - \\sqrt[3]{31\\sqrt{19} - 122}$ is irrational.",
      "$r^3 = (122 + 31\\sqrt{19}) - (31\\sqrt{19} - 122) - 3\\sqrt[3]{122 + 31\\sqrt{19}}\\sqrt[3]{31\\sqrt{19} - 122}\\,r$",
      "$(122 + 31\\sqrt{19})(31\\sqrt{19} - 122) = 18{,}259 - 14{,}884 = 3375$",
      "$\\sqrt[3]{122 + 31\\sqrt{19}}\\sqrt[3]{31\\sqrt{19} - 122} = \\sqrt[3]{3375} = 15$",
      "$r^3 = 244 - 45r$",
      "So $r$ is a root of $f(x) = x^3 + 45x - 244$.",
      "The number $r$ is positive.",
      "$122 + 31\\sqrt{19} < 343$",
      "So $r$ is less than $7$.",
      "If $r$ is rational, it is one of $1$, $2$ and $4$.",
      "$\\begin{array}{c|ccc} x & 1 & 2 & 4 \\\\ \\hline f(x) & -198 & -146 & 0 \\end{array}$",
      "$f(x) = (x - 4)(x^2 + 4x + 61)$",
      "The discriminant of $x^2 + 4x + 61$ is $4^2 - 4 \\cdot 61 = -228$.",
      "So $r = 4$, a rational number, and the answer is No."
    ]
  },
  {
    "id": "t202-k3-p12",
    "topic": "irrational-roots",
    "kind": "t202-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether the number $r = \\sqrt[3]{144 + 95\\sqrt{5}} - \\sqrt[3]{95\\sqrt{5} - 144}$ is irrational.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether the number $r = \\sqrt[3]{144 + 95\\sqrt{5}} - \\sqrt[3]{95\\sqrt{5} - 144}$ is irrational.",
      "$r^3 = (144 + 95\\sqrt{5}) - (95\\sqrt{5} - 144) - 3\\sqrt[3]{144 + 95\\sqrt{5}}\\sqrt[3]{95\\sqrt{5} - 144}\\,r$",
      "$(144 + 95\\sqrt{5})(95\\sqrt{5} - 144) = 45{,}125 - 20{,}736 = 24{,}389$",
      "$\\sqrt[3]{144 + 95\\sqrt{5}}\\sqrt[3]{95\\sqrt{5} - 144} = \\sqrt[3]{24{,}389} = 29$",
      "$r^3 = 288 - 87r$",
      "So $r$ is a root of $f(x) = x^3 + 87x - 288$.",
      "The number $r$ is positive.",
      "$144 + 95\\sqrt{5} < 512$",
      "So $r$ is less than $8$.",
      "If $r$ is rational, it is one of $1$, $2$, $3$, $4$ and $6$.",
      "$\\begin{array}{c|ccccc} x & 1 & 2 & 3 & 4 & 6 \\\\ \\hline f(x) & -200 & -106 & 0 & 124 & 450 \\end{array}$",
      "$f(x) = (x - 3)(x^2 + 3x + 96)$",
      "The discriminant of $x^2 + 3x + 96$ is $3^2 - 4 \\cdot 96 = -375$.",
      "So $r = 3$, a rational number, and the answer is No."
    ]
  },
  {
    "id": "t202-k3-p13",
    "topic": "irrational-roots",
    "kind": "t202-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether the number $r = \\sqrt[3]{114 + 19\\sqrt{55}} - \\sqrt[3]{19\\sqrt{55} - 114}$ is irrational.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether the number $r = \\sqrt[3]{114 + 19\\sqrt{55}} - \\sqrt[3]{19\\sqrt{55} - 114}$ is irrational.",
      "$r^3 = (114 + 19\\sqrt{55}) - (19\\sqrt{55} - 114) - 3\\sqrt[3]{114 + 19\\sqrt{55}}\\sqrt[3]{19\\sqrt{55} - 114}\\,r$",
      "$(114 + 19\\sqrt{55})(19\\sqrt{55} - 114) = 19{,}855 - 12{,}996 = 6859$",
      "$\\sqrt[3]{114 + 19\\sqrt{55}}\\sqrt[3]{19\\sqrt{55} - 114} = \\sqrt[3]{6859} = 19$",
      "$r^3 = 228 - 57r$",
      "So $r$ is a root of $f(x) = x^3 + 57x - 228$.",
      "The number $r$ is positive.",
      "$114 + 19\\sqrt{55} < 343$",
      "So $r$ is less than $7$.",
      "If $r$ is rational, it is one of $1$, $2$, $3$, $4$ and $6$.",
      "$\\begin{array}{c|ccccc} x & 1 & 2 & 3 & 4 & 6 \\\\ \\hline f(x) & -170 & -106 & -30 & 64 & 330 \\end{array}$",
      "No value in line 11 is $0$, so $r$ is not rational: $r$ is irrational, and the answer is Yes."
    ]
  },
  {
    "id": "t202-k3-p14",
    "topic": "irrational-roots",
    "kind": "t202-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether the number $r = \\sqrt[3]{60 + 10\\sqrt{46}} - \\sqrt[3]{10\\sqrt{46} - 60}$ is irrational.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether the number $r = \\sqrt[3]{60 + 10\\sqrt{46}} - \\sqrt[3]{10\\sqrt{46} - 60}$ is irrational.",
      "$r^3 = (60 + 10\\sqrt{46}) - (10\\sqrt{46} - 60) - 3\\sqrt[3]{60 + 10\\sqrt{46}}\\sqrt[3]{10\\sqrt{46} - 60}\\,r$",
      "$(60 + 10\\sqrt{46})(10\\sqrt{46} - 60) = 4600 - 3600 = 1000$",
      "$\\sqrt[3]{60 + 10\\sqrt{46}}\\sqrt[3]{10\\sqrt{46} - 60} = \\sqrt[3]{1000} = 10$",
      "$r^3 = 120 - 30r$",
      "So $r$ is a root of $f(x) = x^3 + 30x - 120$.",
      "The number $r$ is positive.",
      "$60 + 10\\sqrt{46} < 216$",
      "So $r$ is less than $6$.",
      "If $r$ is rational, it is one of $1$, $2$, $3$, $4$ and $5$.",
      "$\\begin{array}{c|ccccc} x & 1 & 2 & 3 & 4 & 5 \\\\ \\hline f(x) & -89 & -52 & -3 & 64 & 155 \\end{array}$",
      "No value in line 11 is $0$, so $r$ is not rational: $r$ is irrational, and the answer is Yes."
    ]
  },
  {
    "id": "t202-k4-p01",
    "topic": "irrational-roots",
    "kind": "t202-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 4x^3 - 15x^2 + 13x + 5$ has an irrational root between $-1$ and $0$.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $f(x) = 4x^3 - 15x^2 + 13x + 5$ has an irrational root between $-1$ and $0$.",
      "$f(-1) = 4 \\cdot (-1)^3 - 15 \\cdot (-1)^2 + 13 \\cdot (-1) + 5$",
      "$f(-1) = -27$",
      "$f(0) = 4 \\cdot 0^3 - 15 \\cdot 0^2 + 13 \\cdot 0 + 5$",
      "$f(0) = 5$",
      "So $f(x)$ has a root between $-1$ and $0$.",
      "A rational root between $-1$ and $0$ is one of $-\\dfrac{1}{2}$ and $-\\dfrac{1}{4}$.",
      "$\\begin{array}{c|cc} x & -\\dfrac{1}{2} & -\\dfrac{1}{4} \\\\ \\hline f(x) & -\\dfrac{23}{4} & \\dfrac{3}{4} \\end{array}$",
      "No value in line 8 is $0$, so the root of line 6 is not rational: it is irrational, and the answer is Yes."
    ]
  },
  {
    "id": "t202-k4-p02",
    "topic": "irrational-roots",
    "kind": "t202-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 12x^3 - 2x^2 + 16x + 27$ has an irrational root between $-1$ and $0$.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $f(x) = 12x^3 - 2x^2 + 16x + 27$ has an irrational root between $-1$ and $0$.",
      "$f(-1) = 12 \\cdot (-1)^3 - 2 \\cdot (-1)^2 + 16 \\cdot (-1) + 27$",
      "$f(-1) = -3$",
      "$f(0) = 12 \\cdot 0^3 - 2 \\cdot 0^2 + 16 \\cdot 0 + 27$",
      "$f(0) = 27$",
      "So $f(x)$ has a root between $-1$ and $0$.",
      "A rational root between $-1$ and $0$ is one of $-\\dfrac{3}{4}$, $-\\dfrac{1}{2}$, $-\\dfrac{1}{3}$, $-\\dfrac{1}{4}$, $-\\dfrac{1}{6}$ and $-\\dfrac{1}{12}$.",
      "$\\begin{array}{c|cccccc} x & -\\dfrac{3}{4} & -\\dfrac{1}{2} & -\\dfrac{1}{3} & -\\dfrac{1}{4} & -\\dfrac{1}{6} & -\\dfrac{1}{12} \\\\ \\hline f(x) & \\dfrac{141}{16} & 17 & 21 & \\dfrac{363}{16} & \\dfrac{218}{9} & \\dfrac{1231}{48} \\end{array}$",
      "No value in line 8 is $0$, so the root of line 6 is not rational: it is irrational, and the answer is Yes."
    ]
  },
  {
    "id": "t202-k4-p03",
    "topic": "irrational-roots",
    "kind": "t202-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 12x^3 - 69x^2 + 76x - 437$ has an irrational root between $5$ and $6$.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $f(x) = 12x^3 - 69x^2 + 76x - 437$ has an irrational root between $5$ and $6$.",
      "$f(5) = 12 \\cdot 5^3 - 69 \\cdot 5^2 + 76 \\cdot 5 - 437$",
      "$f(5) = -282$",
      "$f(6) = 12 \\cdot 6^3 - 69 \\cdot 6^2 + 76 \\cdot 6 - 437$",
      "$f(6) = 127$",
      "So $f(x)$ has a root between $5$ and $6$.",
      "A rational root between $5$ and $6$ can only be $\\dfrac{23}{4}$.",
      "$\\begin{array}{c|c} x & \\dfrac{23}{4} \\\\ \\hline f(x) & 0 \\end{array}$",
      "$f(x) = \\left(x - \\dfrac{23}{4}\\right)(12x^2 + 76)$",
      "The discriminant of $12x^2 + 76$ is $0 - 4 \\cdot 12 \\cdot 76 = -3648$.",
      "So $\\dfrac{23}{4}$ is the only real root of $f(x)$; it is rational, and the answer is No."
    ]
  },
  {
    "id": "t202-k4-p04",
    "topic": "irrational-roots",
    "kind": "t202-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 9x^3 + 3x^2 + 28x + 80$ has an irrational root between $-2$ and $-1$.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $f(x) = 9x^3 + 3x^2 + 28x + 80$ has an irrational root between $-2$ and $-1$.",
      "$f(-2) = 9 \\cdot (-2)^3 + 3 \\cdot (-2)^2 + 28 \\cdot (-2) + 80$",
      "$f(-2) = -36$",
      "$f(-1) = 9 \\cdot (-1)^3 + 3 \\cdot (-1)^2 + 28 \\cdot (-1) + 80$",
      "$f(-1) = 46$",
      "So $f(x)$ has a root between $-2$ and $-1$.",
      "A rational root between $-2$ and $-1$ is one of $-\\dfrac{16}{9}$, $-\\dfrac{5}{3}$, $-\\dfrac{4}{3}$ and $-\\dfrac{10}{9}$.",
      "$\\begin{array}{c|cccc} x & -\\dfrac{16}{9} & -\\dfrac{5}{3} & -\\dfrac{4}{3} & -\\dfrac{10}{9} \\\\ \\hline f(x) & -\\dfrac{880}{81} & 0 & \\dfrac{80}{3} & \\dfrac{3260}{81} \\end{array}$",
      "$f(x) = \\left(x + \\dfrac{5}{3}\\right)(9x^2 - 12x + 48)$",
      "The discriminant of $9x^2 - 12x + 48$ is $144 - 4 \\cdot 9 \\cdot 48 = -1584$.",
      "So $-\\dfrac{5}{3}$ is the only real root of $f(x)$; it is rational, and the answer is No."
    ]
  },
  {
    "id": "t202-k4-p05",
    "topic": "irrational-roots",
    "kind": "t202-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 8x^3 - 18x^2 - 6x - 54$ has an irrational root between $3$ and $4$.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $f(x) = 8x^3 - 18x^2 - 6x - 54$ has an irrational root between $3$ and $4$.",
      "$f(3) = 8 \\cdot 3^3 - 18 \\cdot 3^2 - 6 \\cdot 3 - 54$",
      "$f(3) = -18$",
      "$f(4) = 8 \\cdot 4^3 - 18 \\cdot 4^2 - 6 \\cdot 4 - 54$",
      "$f(4) = 146$",
      "So $f(x)$ has a root between $3$ and $4$.",
      "A rational root between $3$ and $4$ can only be $\\dfrac{27}{8}$.",
      "$\\begin{array}{c|c} x & \\dfrac{27}{8} \\\\ \\hline f(x) & \\dfrac{1809}{64} \\end{array}$",
      "No value in line 8 is $0$, so the root of line 6 is not rational: it is irrational, and the answer is Yes."
    ]
  },
  {
    "id": "t202-k4-p06",
    "topic": "irrational-roots",
    "kind": "t202-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 6x^3 - 11x^2 + 7x - 312$ has an irrational root between $4$ and $5$.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $f(x) = 6x^3 - 11x^2 + 7x - 312$ has an irrational root between $4$ and $5$.",
      "$f(4) = 6 \\cdot 4^3 - 11 \\cdot 4^2 + 7 \\cdot 4 - 312$",
      "$f(4) = -76$",
      "$f(5) = 6 \\cdot 5^3 - 11 \\cdot 5^2 + 7 \\cdot 5 - 312$",
      "$f(5) = 198$",
      "So $f(x)$ has a root between $4$ and $5$.",
      "A rational root between $4$ and $5$ can only be $\\dfrac{13}{3}$.",
      "$\\begin{array}{c|c} x & \\dfrac{13}{3} \\\\ \\hline f(x) & 0 \\end{array}$",
      "$f(x) = \\left(x - \\dfrac{13}{3}\\right)(6x^2 + 15x + 72)$",
      "The discriminant of $6x^2 + 15x + 72$ is $225 - 4 \\cdot 6 \\cdot 72 = -1503$.",
      "So $\\dfrac{13}{3}$ is the only real root of $f(x)$; it is rational, and the answer is No."
    ]
  },
  {
    "id": "t202-k4-p07",
    "topic": "irrational-roots",
    "kind": "t202-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 5x^3 - 8x^2 - 19x + 55$ has an irrational root between $-3$ and $-2$.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $f(x) = 5x^3 - 8x^2 - 19x + 55$ has an irrational root between $-3$ and $-2$.",
      "$f(-3) = 5 \\cdot (-3)^3 - 8 \\cdot (-3)^2 - 19 \\cdot (-3) + 55$",
      "$f(-3) = -95$",
      "$f(-2) = 5 \\cdot (-2)^3 - 8 \\cdot (-2)^2 - 19 \\cdot (-2) + 55$",
      "$f(-2) = 21$",
      "So $f(x)$ has a root between $-3$ and $-2$.",
      "A rational root between $-3$ and $-2$ can only be $-\\dfrac{11}{5}$.",
      "$\\begin{array}{c|c} x & -\\dfrac{11}{5} \\\\ \\hline f(x) & \\dfrac{121}{25} \\end{array}$",
      "No value in line 8 is $0$, so the root of line 6 is not rational: it is irrational, and the answer is Yes."
    ]
  },
  {
    "id": "t202-k4-p08",
    "topic": "irrational-roots",
    "kind": "t202-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 4x^3 - 16x^2 + 2x - 9$ has an irrational root between $4$ and $5$.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $f(x) = 4x^3 - 16x^2 + 2x - 9$ has an irrational root between $4$ and $5$.",
      "$f(4) = 4 \\cdot 4^3 - 16 \\cdot 4^2 + 2 \\cdot 4 - 9$",
      "$f(4) = -1$",
      "$f(5) = 4 \\cdot 5^3 - 16 \\cdot 5^2 + 2 \\cdot 5 - 9$",
      "$f(5) = 101$",
      "So $f(x)$ has a root between $4$ and $5$.",
      "A rational root between $4$ and $5$ can only be $\\dfrac{9}{2}$.",
      "$\\begin{array}{c|c} x & \\dfrac{9}{2} \\\\ \\hline f(x) & \\dfrac{81}{2} \\end{array}$",
      "No value in line 8 is $0$, so the root of line 6 is not rational: it is irrational, and the answer is Yes."
    ]
  },
  {
    "id": "t202-k4-p09",
    "topic": "irrational-roots",
    "kind": "t202-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 6x^3 + 25x^2 + 53x + 70$ has an irrational root between $-3$ and $-2$.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $f(x) = 6x^3 + 25x^2 + 53x + 70$ has an irrational root between $-3$ and $-2$.",
      "$f(-3) = 6 \\cdot (-3)^3 + 25 \\cdot (-3)^2 + 53 \\cdot (-3) + 70$",
      "$f(-3) = -26$",
      "$f(-2) = 6 \\cdot (-2)^3 + 25 \\cdot (-2)^2 + 53 \\cdot (-2) + 70$",
      "$f(-2) = 16$",
      "So $f(x)$ has a root between $-3$ and $-2$.",
      "A rational root between $-3$ and $-2$ is one of $-\\dfrac{5}{2}$ and $-\\dfrac{7}{3}$.",
      "$\\begin{array}{c|cc} x & -\\dfrac{5}{2} & -\\dfrac{7}{3} \\\\ \\hline f(x) & 0 & \\dfrac{56}{9} \\end{array}$",
      "$f(x) = \\left(x + \\dfrac{5}{2}\\right)(6x^2 + 10x + 28)$",
      "The discriminant of $6x^2 + 10x + 28$ is $100 - 4 \\cdot 6 \\cdot 28 = -572$.",
      "So $-\\dfrac{5}{2}$ is the only real root of $f(x)$; it is rational, and the answer is No."
    ]
  },
  {
    "id": "t202-k4-p10",
    "topic": "irrational-roots",
    "kind": "t202-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 11x^3 - 14x^2 + 10x - 45$ has an irrational root between $1$ and $2$.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $f(x) = 11x^3 - 14x^2 + 10x - 45$ has an irrational root between $1$ and $2$.",
      "$f(1) = 11 \\cdot 1^3 - 14 \\cdot 1^2 + 10 \\cdot 1 - 45$",
      "$f(1) = -38$",
      "$f(2) = 11 \\cdot 2^3 - 14 \\cdot 2^2 + 10 \\cdot 2 - 45$",
      "$f(2) = 7$",
      "So $f(x)$ has a root between $1$ and $2$.",
      "A rational root between $1$ and $2$ can only be $\\dfrac{15}{11}$.",
      "$\\begin{array}{c|c} x & \\dfrac{15}{11} \\\\ \\hline f(x) & -\\dfrac{3570}{121} \\end{array}$",
      "No value in line 8 is $0$, so the root of line 6 is not rational: it is irrational, and the answer is Yes."
    ]
  },
  {
    "id": "t202-k4-p11",
    "topic": "irrational-roots",
    "kind": "t202-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 5x^3 + 31x^2 + 121x + 494$ has an irrational root between $-6$ and $-5$.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $f(x) = 5x^3 + 31x^2 + 121x + 494$ has an irrational root between $-6$ and $-5$.",
      "$f(-6) = 5 \\cdot (-6)^3 + 31 \\cdot (-6)^2 + 121 \\cdot (-6) + 494$",
      "$f(-6) = -196$",
      "$f(-5) = 5 \\cdot (-5)^3 + 31 \\cdot (-5)^2 + 121 \\cdot (-5) + 494$",
      "$f(-5) = 39$",
      "So $f(x)$ has a root between $-6$ and $-5$.",
      "A rational root between $-6$ and $-5$ can only be $-\\dfrac{26}{5}$.",
      "$\\begin{array}{c|c} x & -\\dfrac{26}{5} \\\\ \\hline f(x) & 0 \\end{array}$",
      "$f(x) = \\left(x + \\dfrac{26}{5}\\right)(5x^2 + 5x + 95)$",
      "The discriminant of $5x^2 + 5x + 95$ is $25 - 4 \\cdot 5 \\cdot 95 = -1875$.",
      "So $-\\dfrac{26}{5}$ is the only real root of $f(x)$; it is rational, and the answer is No."
    ]
  },
  {
    "id": "t202-k4-p12",
    "topic": "irrational-roots",
    "kind": "t202-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 10x^3 + 28x^2 + 37x + 285$ has an irrational root between $-4$ and $-3$.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $f(x) = 10x^3 + 28x^2 + 37x + 285$ has an irrational root between $-4$ and $-3$.",
      "$f(-4) = 10 \\cdot (-4)^3 + 28 \\cdot (-4)^2 + 37 \\cdot (-4) + 285$",
      "$f(-4) = -55$",
      "$f(-3) = 10 \\cdot (-3)^3 + 28 \\cdot (-3)^2 + 37 \\cdot (-3) + 285$",
      "$f(-3) = 156$",
      "So $f(x)$ has a root between $-4$ and $-3$.",
      "A rational root between $-4$ and $-3$ can only be $-\\dfrac{19}{5}$.",
      "$\\begin{array}{c|c} x & -\\dfrac{19}{5} \\\\ \\hline f(x) & 0 \\end{array}$",
      "$f(x) = \\left(x + \\dfrac{19}{5}\\right)(10x^2 - 10x + 75)$",
      "The discriminant of $10x^2 - 10x + 75$ is $100 - 4 \\cdot 10 \\cdot 75 = -2900$.",
      "So $-\\dfrac{19}{5}$ is the only real root of $f(x)$; it is rational, and the answer is No."
    ]
  },
  {
    "id": "t202-k4-p13",
    "topic": "irrational-roots",
    "kind": "t202-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 3x^3 - 4x^2 - 17x - 20$ has an irrational root between $3$ and $4$.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $f(x) = 3x^3 - 4x^2 - 17x - 20$ has an irrational root between $3$ and $4$.",
      "$f(3) = 3 \\cdot 3^3 - 4 \\cdot 3^2 - 17 \\cdot 3 - 20$",
      "$f(3) = -26$",
      "$f(4) = 3 \\cdot 4^3 - 4 \\cdot 4^2 - 17 \\cdot 4 - 20$",
      "$f(4) = 40$",
      "So $f(x)$ has a root between $3$ and $4$.",
      "A rational root between $3$ and $4$ can only be $\\dfrac{10}{3}$.",
      "$\\begin{array}{c|c} x & \\dfrac{10}{3} \\\\ \\hline f(x) & -10 \\end{array}$",
      "No value in line 8 is $0$, so the root of line 6 is not rational: it is irrational, and the answer is Yes."
    ]
  },
  {
    "id": "t202-k4-p14",
    "topic": "irrational-roots",
    "kind": "t202-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $f(x) = 3x^3 + 19x^2 + 82x + 352$ has an irrational root between $-6$ and $-5$.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $f(x) = 3x^3 + 19x^2 + 82x + 352$ has an irrational root between $-6$ and $-5$.",
      "$f(-6) = 3 \\cdot (-6)^3 + 19 \\cdot (-6)^2 + 82 \\cdot (-6) + 352$",
      "$f(-6) = -104$",
      "$f(-5) = 3 \\cdot (-5)^3 + 19 \\cdot (-5)^2 + 82 \\cdot (-5) + 352$",
      "$f(-5) = 42$",
      "So $f(x)$ has a root between $-6$ and $-5$.",
      "A rational root between $-6$ and $-5$ can only be $-\\dfrac{16}{3}$.",
      "$\\begin{array}{c|c} x & -\\dfrac{16}{3} \\\\ \\hline f(x) & 0 \\end{array}$",
      "$f(x) = \\left(x + \\dfrac{16}{3}\\right)(3x^2 + 3x + 66)$",
      "The discriminant of $3x^2 + 3x + 66$ is $9 - 4 \\cdot 3 \\cdot 66 = -783$.",
      "So $-\\dfrac{16}{3}$ is the only real root of $f(x)$; it is rational, and the answer is No."
    ]
  },
  {
    "id": "t202-k5-p01",
    "topic": "irrational-roots",
    "kind": "t202-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the other two roots of $f(x) = x^3 + 3x^2 - 79x - 261$, given that $-6 + \\sqrt{7}$ is a root, and write that line right.",
    "given": [
      "The conjugate $-6 - \\sqrt{7}$ is also a root.",
      "$(-6 + \\sqrt{7}) + (-6 - \\sqrt{7}) = -12$",
      "$(-6 + \\sqrt{7})(-6 - \\sqrt{7}) = 36 - 7 = 29$",
      "For a number $e$, $f(x) = (x^2 + 12x + 29)(x + e)$.",
      "$29e = -261$",
      "$e = 9$",
      "The other two roots are $-6 - \\sqrt{7}$ and $-9$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 6: e = -9",
    "solution": [
      "Find the first wrong line in this working for the other two roots of $f(x) = x^3 + 3x^2 - 79x - 261$, given that $-6 + \\sqrt{7}$ is a root, and write that line right.",
      "Line 6 gives $e = 9$, but $-261 \\div 29 = -9$.",
      "The lines above line 6 are right, and each later line follows from line 6 as it is written, so line 6 is the first wrong line.",
      "Line 6 written right is $e = -9$."
    ]
  },
  {
    "id": "t202-k5-p02",
    "topic": "irrational-roots",
    "kind": "t202-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the other two roots of $f(x) = x^3 + 4x^2 - 164x - 912$, given that $1 + 3\\sqrt{17}$ is a root, and write that line right.",
    "given": [
      "The conjugate $1 - 3\\sqrt{17}$ is also a root.",
      "$(1 + 3\\sqrt{17}) + (1 - 3\\sqrt{17}) = 2$",
      "$(1 + 3\\sqrt{17})(1 - 3\\sqrt{17}) = 1 - 153 = -152$",
      "For a number $e$, $f(x) = (x^2 - 2x - 152)(x + e)$.",
      "$-152e = 912$",
      "$e = -6$",
      "The other two roots are $1 - 3\\sqrt{17}$ and $6$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 5: -152*e = -912",
    "solution": [
      "Find the first wrong line in this working for the other two roots of $f(x) = x^3 + 4x^2 - 164x - 912$, given that $1 + 3\\sqrt{17}$ is a root, and write that line right.",
      "Line 5 gives the constant term of $f(x)$ as $912$, but it is $-912$.",
      "The lines above line 5 are right, and each later line follows from line 5 as it is written, so line 5 is the first wrong line.",
      "Line 5 written right is $-152e = -912$."
    ]
  },
  {
    "id": "t202-k5-p03",
    "topic": "irrational-roots",
    "kind": "t202-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the other two roots of $f(x) = x^3 + 11x^2 - 53x - 415$, given that $-3 - 2\\sqrt{23}$ is a root, and write that line right.",
    "given": [
      "The conjugate $-3 + 2\\sqrt{23}$ is also a root.",
      "$(-3 - 2\\sqrt{23}) + (-3 + 2\\sqrt{23}) = -6$",
      "$(-3 - 2\\sqrt{23})(-3 + 2\\sqrt{23}) = 9 - 92 = -83$",
      "For a number $e$, $f(x) = (x^2 + 6x - 83)(x + e)$.",
      "$-83e = 415$",
      "$e = -5$",
      "The other two roots are $-3 + 2\\sqrt{23}$ and $5$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 5: -83*e = -415",
    "solution": [
      "Find the first wrong line in this working for the other two roots of $f(x) = x^3 + 11x^2 - 53x - 415$, given that $-3 - 2\\sqrt{23}$ is a root, and write that line right.",
      "Line 5 gives the constant term of $f(x)$ as $415$, but it is $-415$.",
      "The lines above line 5 are right, and each later line follows from line 5 as it is written, so line 5 is the first wrong line.",
      "Line 5 written right is $-83e = -415$."
    ]
  },
  {
    "id": "t202-k5-p04",
    "topic": "irrational-roots",
    "kind": "t202-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the other two roots of $f(x) = x^3 + 8x^2 - 147x + 396$, given that $-6 + 3\\sqrt{15}$ is a root, and write that line right.",
    "given": [
      "The conjugate $-6 - 3\\sqrt{15}$ is also a root.",
      "$(-6 + 3\\sqrt{15}) + (-6 - 3\\sqrt{15}) = -12$",
      "$(-6 + 3\\sqrt{15})(-6 - 3\\sqrt{15}) = 36 - 135 = -99$",
      "For a number $e$, $f(x) = (x^2 + 12x - 99)(x + e)$.",
      "$-99e = 396$",
      "$e = 4$",
      "The other two roots are $-6 - 3\\sqrt{15}$ and $-4$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 6: e = -4",
    "solution": [
      "Find the first wrong line in this working for the other two roots of $f(x) = x^3 + 8x^2 - 147x + 396$, given that $-6 + 3\\sqrt{15}$ is a root, and write that line right.",
      "Line 6 gives $e = 4$, but $396 \\div (-99) = -4$.",
      "The lines above line 6 are right, and each later line follows from line 6 as it is written, so line 6 is the first wrong line.",
      "Line 6 written right is $e = -4$."
    ]
  },
  {
    "id": "t202-k5-p05",
    "topic": "irrational-roots",
    "kind": "t202-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the other two roots of $f(x) = x^3 + 8x^2 - 331x - 686$, given that $-3 + 4\\sqrt{22}$ is a root, and write that line right.",
    "given": [
      "The conjugate $-3 - 4\\sqrt{22}$ is also a root.",
      "$(-3 + 4\\sqrt{22}) + (-3 - 4\\sqrt{22}) = -6$",
      "$(-3 + 4\\sqrt{22})(-3 - 4\\sqrt{22}) = 9 + 352 = 361$",
      "For a number $e$, $f(x) = (x^2 + 6x + 361)(x + e)$.",
      "$361e = -686$",
      "$e = -\\dfrac{686}{361}$",
      "The other two roots are $-3 - 4\\sqrt{22}$ and $\\dfrac{686}{361}$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: (-3+4*sqrt(22))*(-3-4*sqrt(22)) = 9-352 = -343",
    "solution": [
      "Find the first wrong line in this working for the other two roots of $f(x) = x^3 + 8x^2 - 331x - 686$, given that $-3 + 4\\sqrt{22}$ is a root, and write that line right.",
      "Line 3 writes the product as $9 + 352$, but the square of $4\\sqrt{22}$ is taken away.",
      "The lines above line 3 are right, and each later line follows from line 3 as it is written, so line 3 is the first wrong line.",
      "Line 3 written right is $(-3 + 4\\sqrt{22})(-3 - 4\\sqrt{22}) = 9 - 352 = -343$."
    ]
  },
  {
    "id": "t202-k5-p06",
    "topic": "irrational-roots",
    "kind": "t202-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the other two roots of $f(x) = x^3 + 15x^2 + 20x - 252$, given that $-4 - 2\\sqrt{13}$ is a root, and write that line right.",
    "given": [
      "The conjugate $-4 + 2\\sqrt{13}$ is also a root.",
      "$(-4 - 2\\sqrt{13}) + (-4 + 2\\sqrt{13}) = -8$",
      "$(-4 - 2\\sqrt{13})(-4 + 2\\sqrt{13}) = 16 - 52 = -36$",
      "For a number $e$, $f(x) = (x^2 + 8x - 36)(x + e)$.",
      "$-36e = 252$",
      "$e = -7$",
      "The other two roots are $-4 + 2\\sqrt{13}$ and $7$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 5: -36*e = -252",
    "solution": [
      "Find the first wrong line in this working for the other two roots of $f(x) = x^3 + 15x^2 + 20x - 252$, given that $-4 - 2\\sqrt{13}$ is a root, and write that line right.",
      "Line 5 gives the constant term of $f(x)$ as $252$, but it is $-252$.",
      "The lines above line 5 are right, and each later line follows from line 5 as it is written, so line 5 is the first wrong line.",
      "Line 5 written right is $-36e = -252$."
    ]
  },
  {
    "id": "t202-k5-p07",
    "topic": "irrational-roots",
    "kind": "t202-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the other two roots of $f(x) = x^3 + 9x^2 - 61x - 525$, given that $-1 - 2\\sqrt{19}$ is a root, and write that line right.",
    "given": [
      "The conjugate $-1 + 2\\sqrt{19}$ is also a root.",
      "$(-1 - 2\\sqrt{19}) + (-1 + 2\\sqrt{19}) = -2$",
      "$(-1 - 2\\sqrt{19})(-1 + 2\\sqrt{19}) = 1 + 76 = 77$",
      "For a number $e$, $f(x) = (x^2 + 2x + 77)(x + e)$.",
      "$77e = -525$",
      "$e = -\\dfrac{75}{11}$",
      "The other two roots are $-1 + 2\\sqrt{19}$ and $\\dfrac{75}{11}$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: (-1-2*sqrt(19))*(-1+2*sqrt(19)) = 1-76 = -75",
    "solution": [
      "Find the first wrong line in this working for the other two roots of $f(x) = x^3 + 9x^2 - 61x - 525$, given that $-1 - 2\\sqrt{19}$ is a root, and write that line right.",
      "Line 3 writes the product as $1 + 76$, but the square of $2\\sqrt{19}$ is taken away.",
      "The lines above line 3 are right, and each later line follows from line 3 as it is written, so line 3 is the first wrong line.",
      "Line 3 written right is $(-1 - 2\\sqrt{19})(-1 + 2\\sqrt{19}) = 1 - 76 = -75$."
    ]
  },
  {
    "id": "t202-k5-p08",
    "topic": "irrational-roots",
    "kind": "t202-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the other two roots of $f(x) = x^3 + 5x^2 - 85x - 273$, given that $-1 + 2\\sqrt{23}$ is a root, and write that line right.",
    "given": [
      "The conjugate $-1 - 2\\sqrt{23}$ is also a root.",
      "$(-1 + 2\\sqrt{23}) + (-1 - 2\\sqrt{23}) = -2$",
      "$(-1 + 2\\sqrt{23})(-1 - 2\\sqrt{23}) = 1 - 92 = -91$",
      "For a number $e$, $f(x) = (x^2 + 2x - 91)(x + e)$.",
      "$-91e = 273$",
      "$e = -3$",
      "The other two roots are $-1 - 2\\sqrt{23}$ and $3$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 5: -91*e = -273",
    "solution": [
      "Find the first wrong line in this working for the other two roots of $f(x) = x^3 + 5x^2 - 85x - 273$, given that $-1 + 2\\sqrt{23}$ is a root, and write that line right.",
      "Line 5 gives the constant term of $f(x)$ as $273$, but it is $-273$.",
      "The lines above line 5 are right, and each later line follows from line 5 as it is written, so line 5 is the first wrong line.",
      "Line 5 written right is $-91e = -273$."
    ]
  },
  {
    "id": "t202-k5-p09",
    "topic": "irrational-roots",
    "kind": "t202-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the other two roots of $f(x) = x^3 - 13x^2 - 71x + 303$, given that $5 + 3\\sqrt{14}$ is a root, and write that line right.",
    "given": [
      "The conjugate $5 - 3\\sqrt{14}$ is also a root.",
      "$(5 + 3\\sqrt{14}) + (5 - 3\\sqrt{14}) = 10$",
      "$(5 + 3\\sqrt{14})(5 - 3\\sqrt{14}) = 25 - 126 = -101$",
      "For a number $e$, $f(x) = (x^2 - 10x - 101)(x + e)$.",
      "$-101e = 303$",
      "$e = 3$",
      "The other two roots are $5 - 3\\sqrt{14}$ and $-3$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 6: e = -3",
    "solution": [
      "Find the first wrong line in this working for the other two roots of $f(x) = x^3 - 13x^2 - 71x + 303$, given that $5 + 3\\sqrt{14}$ is a root, and write that line right.",
      "Line 6 gives $e = 3$, but $303 \\div (-101) = -3$.",
      "The lines above line 6 are right, and each later line follows from line 6 as it is written, so line 6 is the first wrong line.",
      "Line 6 written right is $e = -3$."
    ]
  },
  {
    "id": "t202-k5-p10",
    "topic": "irrational-roots",
    "kind": "t202-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the other two roots of $f(x) = x^3 + 2x^2 - 130x + 244$, given that $-2 + 3\\sqrt{14}$ is a root, and write that line right.",
    "given": [
      "The conjugate $-2 - 3\\sqrt{14}$ is also a root.",
      "$(-2 + 3\\sqrt{14}) + (-2 - 3\\sqrt{14}) = -4$",
      "$(-2 + 3\\sqrt{14})(-2 - 3\\sqrt{14}) = 4 - 126 = -122$",
      "For a number $e$, $f(x) = (x^2 + 4x - 122)(x + e)$.",
      "$-122e = 244$",
      "$e = 2$",
      "The other two roots are $-2 - 3\\sqrt{14}$ and $-2$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 6: e = -2",
    "solution": [
      "Find the first wrong line in this working for the other two roots of $f(x) = x^3 + 2x^2 - 130x + 244$, given that $-2 + 3\\sqrt{14}$ is a root, and write that line right.",
      "Line 6 gives $e = 2$, but $244 \\div (-122) = -2$.",
      "The lines above line 6 are right, and each later line follows from line 6 as it is written, so line 6 is the first wrong line.",
      "Line 6 written right is $e = -2$."
    ]
  },
  {
    "id": "t202-k5-p11",
    "topic": "irrational-roots",
    "kind": "t202-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the other two roots of $f(x) = x^3 + 6x^2 - 76x - 168$, given that $-2 - 2\\sqrt{22}$ is a root, and write that line right.",
    "given": [
      "The conjugate $-2 + 2\\sqrt{22}$ is also a root.",
      "$(-2 - 2\\sqrt{22}) + (-2 + 2\\sqrt{22}) = -4$",
      "$(-2 - 2\\sqrt{22})(-2 + 2\\sqrt{22}) = 4 - 88 = -84$",
      "For a number $e$, $f(x) = (x^2 + 4x - 84)(x + e)$.",
      "$-84e = 168$",
      "$e = -2$",
      "The other two roots are $-2 + 2\\sqrt{22}$ and $2$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 5: -84*e = -168",
    "solution": [
      "Find the first wrong line in this working for the other two roots of $f(x) = x^3 + 6x^2 - 76x - 168$, given that $-2 - 2\\sqrt{22}$ is a root, and write that line right.",
      "Line 5 gives the constant term of $f(x)$ as $168$, but it is $-168$.",
      "The lines above line 5 are right, and each later line follows from line 5 as it is written, so line 5 is the first wrong line.",
      "Line 5 written right is $-84e = -168$."
    ]
  },
  {
    "id": "t202-k5-p12",
    "topic": "irrational-roots",
    "kind": "t202-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the other two roots of $f(x) = x^3 - 12x^2 - 69x + 404$, given that $4 + 3\\sqrt{13}$ is a root, and write that line right.",
    "given": [
      "The conjugate $4 - 3\\sqrt{13}$ is also a root.",
      "$(4 + 3\\sqrt{13}) + (4 - 3\\sqrt{13}) = 8$",
      "$(4 + 3\\sqrt{13})(4 - 3\\sqrt{13}) = 16 + 117 = 133$",
      "For a number $e$, $f(x) = (x^2 - 8x + 133)(x + e)$.",
      "$133e = 404$",
      "$e = \\dfrac{404}{133}$",
      "The other two roots are $4 - 3\\sqrt{13}$ and $-\\dfrac{404}{133}$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: (4+3*sqrt(13))*(4-3*sqrt(13)) = 16-117 = -101",
    "solution": [
      "Find the first wrong line in this working for the other two roots of $f(x) = x^3 - 12x^2 - 69x + 404$, given that $4 + 3\\sqrt{13}$ is a root, and write that line right.",
      "Line 3 writes the product as $16 + 117$, but the square of $3\\sqrt{13}$ is taken away.",
      "The lines above line 3 are right, and each later line follows from line 3 as it is written, so line 3 is the first wrong line.",
      "Line 3 written right is $(4 + 3\\sqrt{13})(4 - 3\\sqrt{13}) = 16 - 117 = -101$."
    ]
  },
  {
    "id": "t202-k5-p13",
    "topic": "irrational-roots",
    "kind": "t202-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the other two roots of $f(x) = x^3 + 3x^2 - 180x + 770$, given that $-5 - 3\\sqrt{15}$ is a root, and write that line right.",
    "given": [
      "The conjugate $-5 + 3\\sqrt{15}$ is also a root.",
      "$(-5 - 3\\sqrt{15}) + (-5 + 3\\sqrt{15}) = -10$",
      "$(-5 - 3\\sqrt{15})(-5 + 3\\sqrt{15}) = 25 - 135 = -110$",
      "For a number $e$, $f(x) = (x^2 + 10x - 110)(x + e)$.",
      "$-110e = 770$",
      "$e = 7$",
      "The other two roots are $-5 + 3\\sqrt{15}$ and $-7$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 6: e = -7",
    "solution": [
      "Find the first wrong line in this working for the other two roots of $f(x) = x^3 + 3x^2 - 180x + 770$, given that $-5 - 3\\sqrt{15}$ is a root, and write that line right.",
      "Line 6 gives $e = 7$, but $770 \\div (-110) = -7$.",
      "The lines above line 6 are right, and each later line follows from line 6 as it is written, so line 6 is the first wrong line.",
      "Line 6 written right is $e = -7$."
    ]
  },
  {
    "id": "t202-k5-p14",
    "topic": "irrational-roots",
    "kind": "t202-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the other two roots of $f(x) = x^3 + 20x^2 + 70x - 84$, given that $-7 + 3\\sqrt{7}$ is a root, and write that line right.",
    "given": [
      "The conjugate $-7 - 3\\sqrt{7}$ is also a root.",
      "$(-7 + 3\\sqrt{7}) + (-7 - 3\\sqrt{7}) = -14$",
      "$(-7 + 3\\sqrt{7})(-7 - 3\\sqrt{7}) = 49 + 63 = 112$",
      "For a number $e$, $f(x) = (x^2 + 14x + 112)(x + e)$.",
      "$112e = -84$",
      "$e = -\\dfrac{3}{4}$",
      "The other two roots are $-7 - 3\\sqrt{7}$ and $\\dfrac{3}{4}$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: (-7+3*sqrt(7))*(-7-3*sqrt(7)) = 49-63 = -14",
    "solution": [
      "Find the first wrong line in this working for the other two roots of $f(x) = x^3 + 20x^2 + 70x - 84$, given that $-7 + 3\\sqrt{7}$ is a root, and write that line right.",
      "Line 3 writes the product as $49 + 63$, but the square of $3\\sqrt{7}$ is taken away.",
      "The lines above line 3 are right, and each later line follows from line 3 as it is written, so line 3 is the first wrong line.",
      "Line 3 written right is $(-7 + 3\\sqrt{7})(-7 - 3\\sqrt{7}) = 49 - 63 = -14$."
    ]
  },
  {
    "id": "t202-k6-p01",
    "topic": "irrational-roots",
    "kind": "t202-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$, with $y$ alone on the left: the product of $x$ minus the number $-7 + 5\\sqrt{22}$ and $x$ minus its conjugate is a number $y$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (x-(-7+5*sqrt(22)))*(x-(-7-5*sqrt(22)))",
    "solution": [
      "Write this sentence as an equation in $x$, with $y$ alone on the left: the product of $x$ minus the number $-7 + 5\\sqrt{22}$ and $x$ minus its conjugate is a number $y$.",
      "The conjugate of $-7 + 5\\sqrt{22}$ is $-7 - 5\\sqrt{22}$.",
      "The first amount is $x - (-7 + 5\\sqrt{22})$.",
      "The second amount is $x - (-7 - 5\\sqrt{22})$.",
      "$y = \\left(x - (-7 + 5\\sqrt{22})\\right)\\left(x - (-7 - 5\\sqrt{22})\\right)$"
    ]
  },
  {
    "id": "t202-k6-p02",
    "topic": "irrational-roots",
    "kind": "t202-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$, with $y$ alone on the left: multiplying $x$ minus the number $9 + 4\\sqrt{13}$ by $x$ minus the conjugate of $9 + 4\\sqrt{13}$ gives a number $y$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (x-(9+4*sqrt(13)))*(x-(9-4*sqrt(13)))",
    "solution": [
      "Write this sentence as an equation in $x$, with $y$ alone on the left: multiplying $x$ minus the number $9 + 4\\sqrt{13}$ by $x$ minus the conjugate of $9 + 4\\sqrt{13}$ gives a number $y$.",
      "The conjugate of $9 + 4\\sqrt{13}$ is $9 - 4\\sqrt{13}$.",
      "The first amount is $x - (9 + 4\\sqrt{13})$.",
      "The second amount is $x - (9 - 4\\sqrt{13})$.",
      "$y = \\left(x - (9 + 4\\sqrt{13})\\right)\\left(x - (9 - 4\\sqrt{13})\\right)$"
    ]
  },
  {
    "id": "t202-k6-p03",
    "topic": "irrational-roots",
    "kind": "t202-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$, with $y$ alone on the left: the number $y$ is the product of $x$ minus the conjugate of $4 + 3\\sqrt{17}$ and $x$ minus the number $4 + 3\\sqrt{17}$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (x-(4-3*sqrt(17)))*(x-(4+3*sqrt(17)))",
    "solution": [
      "Write this sentence as an equation in $x$, with $y$ alone on the left: the number $y$ is the product of $x$ minus the conjugate of $4 + 3\\sqrt{17}$ and $x$ minus the number $4 + 3\\sqrt{17}$.",
      "The conjugate of $4 + 3\\sqrt{17}$ is $4 - 3\\sqrt{17}$.",
      "The first amount is $x - (4 - 3\\sqrt{17})$.",
      "The second amount is $x - (4 + 3\\sqrt{17})$.",
      "$y = \\left(x - (4 - 3\\sqrt{17})\\right)\\left(x - (4 + 3\\sqrt{17})\\right)$"
    ]
  },
  {
    "id": "t202-k6-p04",
    "topic": "irrational-roots",
    "kind": "t202-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$, with $y$ alone on the left: the number $y$ is the product of $x$ minus the number $5 - 2\\sqrt{23}$ and $x$ minus the conjugate of $5 - 2\\sqrt{23}$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (x-(5-2*sqrt(23)))*(x-(5+2*sqrt(23)))",
    "solution": [
      "Write this sentence as an equation in $x$, with $y$ alone on the left: the number $y$ is the product of $x$ minus the number $5 - 2\\sqrt{23}$ and $x$ minus the conjugate of $5 - 2\\sqrt{23}$.",
      "The conjugate of $5 - 2\\sqrt{23}$ is $5 + 2\\sqrt{23}$.",
      "The first amount is $x - (5 - 2\\sqrt{23})$.",
      "The second amount is $x - (5 + 2\\sqrt{23})$.",
      "$y = \\left(x - (5 - 2\\sqrt{23})\\right)\\left(x - (5 + 2\\sqrt{23})\\right)$"
    ]
  },
  {
    "id": "t202-k6-p05",
    "topic": "irrational-roots",
    "kind": "t202-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$, with $y$ alone on the left: multiplying $x$ minus the number $7 + 4\\sqrt{2}$ by $x$ minus the conjugate of $7 + 4\\sqrt{2}$ gives a number $y$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (x-(7+4*sqrt(2)))*(x-(7-4*sqrt(2)))",
    "solution": [
      "Write this sentence as an equation in $x$, with $y$ alone on the left: multiplying $x$ minus the number $7 + 4\\sqrt{2}$ by $x$ minus the conjugate of $7 + 4\\sqrt{2}$ gives a number $y$.",
      "The conjugate of $7 + 4\\sqrt{2}$ is $7 - 4\\sqrt{2}$.",
      "The first amount is $x - (7 + 4\\sqrt{2})$.",
      "The second amount is $x - (7 - 4\\sqrt{2})$.",
      "$y = \\left(x - (7 + 4\\sqrt{2})\\right)\\left(x - (7 - 4\\sqrt{2})\\right)$"
    ]
  },
  {
    "id": "t202-k6-p06",
    "topic": "irrational-roots",
    "kind": "t202-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$, with $y$ alone on the left: the number $y$ is the product of $x$ minus the number $8 - 2\\sqrt{3}$ and $x$ minus the conjugate of $8 - 2\\sqrt{3}$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (x-(8-2*sqrt(3)))*(x-(8+2*sqrt(3)))",
    "solution": [
      "Write this sentence as an equation in $x$, with $y$ alone on the left: the number $y$ is the product of $x$ minus the number $8 - 2\\sqrt{3}$ and $x$ minus the conjugate of $8 - 2\\sqrt{3}$.",
      "The conjugate of $8 - 2\\sqrt{3}$ is $8 + 2\\sqrt{3}$.",
      "The first amount is $x - (8 - 2\\sqrt{3})$.",
      "The second amount is $x - (8 + 2\\sqrt{3})$.",
      "$y = \\left(x - (8 - 2\\sqrt{3})\\right)\\left(x - (8 + 2\\sqrt{3})\\right)$"
    ]
  },
  {
    "id": "t202-k6-p07",
    "topic": "irrational-roots",
    "kind": "t202-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$, with $y$ alone on the left: the number $y$ is the product of $x$ minus the number $-9 + 4\\sqrt{15}$ and $x$ minus the conjugate of $-9 + 4\\sqrt{15}$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (x-(-9+4*sqrt(15)))*(x-(-9-4*sqrt(15)))",
    "solution": [
      "Write this sentence as an equation in $x$, with $y$ alone on the left: the number $y$ is the product of $x$ minus the number $-9 + 4\\sqrt{15}$ and $x$ minus the conjugate of $-9 + 4\\sqrt{15}$.",
      "The conjugate of $-9 + 4\\sqrt{15}$ is $-9 - 4\\sqrt{15}$.",
      "The first amount is $x - (-9 + 4\\sqrt{15})$.",
      "The second amount is $x - (-9 - 4\\sqrt{15})$.",
      "$y = \\left(x - (-9 + 4\\sqrt{15})\\right)\\left(x - (-9 - 4\\sqrt{15})\\right)$"
    ]
  },
  {
    "id": "t202-k6-p08",
    "topic": "irrational-roots",
    "kind": "t202-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$, with $y$ alone on the left: the product of $x$ minus the number $1 - 3\\sqrt{7}$ and $x$ minus its conjugate is a number $y$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (x-(1-3*sqrt(7)))*(x-(1+3*sqrt(7)))",
    "solution": [
      "Write this sentence as an equation in $x$, with $y$ alone on the left: the product of $x$ minus the number $1 - 3\\sqrt{7}$ and $x$ minus its conjugate is a number $y$.",
      "The conjugate of $1 - 3\\sqrt{7}$ is $1 + 3\\sqrt{7}$.",
      "The first amount is $x - (1 - 3\\sqrt{7})$.",
      "The second amount is $x - (1 + 3\\sqrt{7})$.",
      "$y = \\left(x - (1 - 3\\sqrt{7})\\right)\\left(x - (1 + 3\\sqrt{7})\\right)$"
    ]
  },
  {
    "id": "t202-k6-p09",
    "topic": "irrational-roots",
    "kind": "t202-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$, with $y$ alone on the left: the number $y$ is the product of $x$ minus the conjugate of $-1 + 2\\sqrt{22}$ and $x$ minus the number $-1 + 2\\sqrt{22}$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (x-(-1-2*sqrt(22)))*(x-(-1+2*sqrt(22)))",
    "solution": [
      "Write this sentence as an equation in $x$, with $y$ alone on the left: the number $y$ is the product of $x$ minus the conjugate of $-1 + 2\\sqrt{22}$ and $x$ minus the number $-1 + 2\\sqrt{22}$.",
      "The conjugate of $-1 + 2\\sqrt{22}$ is $-1 - 2\\sqrt{22}$.",
      "The first amount is $x - (-1 - 2\\sqrt{22})$.",
      "The second amount is $x - (-1 + 2\\sqrt{22})$.",
      "$y = \\left(x - (-1 - 2\\sqrt{22})\\right)\\left(x - (-1 + 2\\sqrt{22})\\right)$"
    ]
  },
  {
    "id": "t202-k6-p10",
    "topic": "irrational-roots",
    "kind": "t202-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$, with $y$ alone on the left: the number $y$ is the product of $x$ minus the number $3\\sqrt{13} - 9$ and $x$ minus the conjugate of $3\\sqrt{13} - 9$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (x-(3*sqrt(13)-9))*(x-(-3*sqrt(13)-9))",
    "solution": [
      "Write this sentence as an equation in $x$, with $y$ alone on the left: the number $y$ is the product of $x$ minus the number $3\\sqrt{13} - 9$ and $x$ minus the conjugate of $3\\sqrt{13} - 9$.",
      "The conjugate of $3\\sqrt{13} - 9$ is $-3\\sqrt{13} - 9$.",
      "The first amount is $x - (3\\sqrt{13} - 9)$.",
      "The second amount is $x - (-3\\sqrt{13} - 9)$.",
      "$y = \\left(x - (3\\sqrt{13} - 9)\\right)\\left(x - (-3\\sqrt{13} - 9)\\right)$"
    ]
  },
  {
    "id": "t202-k6-p11",
    "topic": "irrational-roots",
    "kind": "t202-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$, with $y$ alone on the left: the product of $x$ minus the number $2 + 3\\sqrt{7}$ and $x$ minus its conjugate is a number $y$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (x-(2+3*sqrt(7)))*(x-(2-3*sqrt(7)))",
    "solution": [
      "Write this sentence as an equation in $x$, with $y$ alone on the left: the product of $x$ minus the number $2 + 3\\sqrt{7}$ and $x$ minus its conjugate is a number $y$.",
      "The conjugate of $2 + 3\\sqrt{7}$ is $2 - 3\\sqrt{7}$.",
      "The first amount is $x - (2 + 3\\sqrt{7})$.",
      "The second amount is $x - (2 - 3\\sqrt{7})$.",
      "$y = \\left(x - (2 + 3\\sqrt{7})\\right)\\left(x - (2 - 3\\sqrt{7})\\right)$"
    ]
  },
  {
    "id": "t202-k6-p12",
    "topic": "irrational-roots",
    "kind": "t202-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$, with $y$ alone on the left: the number $y$ is the product of $x$ minus the conjugate of $2\\sqrt{15} - 5$ and $x$ minus the number $2\\sqrt{15} - 5$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (x-(-2*sqrt(15)-5))*(x-(2*sqrt(15)-5))",
    "solution": [
      "Write this sentence as an equation in $x$, with $y$ alone on the left: the number $y$ is the product of $x$ minus the conjugate of $2\\sqrt{15} - 5$ and $x$ minus the number $2\\sqrt{15} - 5$.",
      "The conjugate of $2\\sqrt{15} - 5$ is $-2\\sqrt{15} - 5$.",
      "The first amount is $x - (-2\\sqrt{15} - 5)$.",
      "The second amount is $x - (2\\sqrt{15} - 5)$.",
      "$y = \\left(x - (-2\\sqrt{15} - 5)\\right)\\left(x - (2\\sqrt{15} - 5)\\right)$"
    ]
  },
  {
    "id": "t202-k6-p13",
    "topic": "irrational-roots",
    "kind": "t202-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$, with $y$ alone on the left: multiplying $x$ minus the number $6 + 4\\sqrt{21}$ by $x$ minus the conjugate of $6 + 4\\sqrt{21}$ gives a number $y$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (x-(6+4*sqrt(21)))*(x-(6-4*sqrt(21)))",
    "solution": [
      "Write this sentence as an equation in $x$, with $y$ alone on the left: multiplying $x$ minus the number $6 + 4\\sqrt{21}$ by $x$ minus the conjugate of $6 + 4\\sqrt{21}$ gives a number $y$.",
      "The conjugate of $6 + 4\\sqrt{21}$ is $6 - 4\\sqrt{21}$.",
      "The first amount is $x - (6 + 4\\sqrt{21})$.",
      "The second amount is $x - (6 - 4\\sqrt{21})$.",
      "$y = \\left(x - (6 + 4\\sqrt{21})\\right)\\left(x - (6 - 4\\sqrt{21})\\right)$"
    ]
  },
  {
    "id": "t202-k6-p14",
    "topic": "irrational-roots",
    "kind": "t202-k6",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$, with $y$ alone on the left: the product of $x$ minus the number $8 + 3\\sqrt{14}$ and $x$ minus its conjugate is a number $y$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (x-(8+3*sqrt(14)))*(x-(8-3*sqrt(14)))",
    "solution": [
      "Write this sentence as an equation in $x$, with $y$ alone on the left: the product of $x$ minus the number $8 + 3\\sqrt{14}$ and $x$ minus its conjugate is a number $y$.",
      "The conjugate of $8 + 3\\sqrt{14}$ is $8 - 3\\sqrt{14}$.",
      "The first amount is $x - (8 + 3\\sqrt{14})$.",
      "The second amount is $x - (8 - 3\\sqrt{14})$.",
      "$y = \\left(x - (8 + 3\\sqrt{14})\\right)\\left(x - (8 - 3\\sqrt{14})\\right)$"
    ]
  },
  {
    "id": "t202-k7-p01",
    "topic": "irrational-roots",
    "kind": "t202-k7",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether every polynomial with rational coefficients that has the root $7 - 2\\sqrt{14}$ also has the root $7 + 2\\sqrt{14}$.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether every polynomial with rational coefficients that has the root $7 - 2\\sqrt{14}$ also has the root $7 + 2\\sqrt{14}$.",
      "The square root $\\sqrt{14}$ is irrational.",
      "The number $7 + 2\\sqrt{14}$ is the conjugate of $7 - 2\\sqrt{14}$.",
      "So every polynomial with rational coefficients that has the first root has the second, and the answer is Yes."
    ]
  },
  {
    "id": "t202-k7-p02",
    "topic": "irrational-roots",
    "kind": "t202-k7",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether every polynomial with rational coefficients that has the root $2 + 2\\sqrt{6}$ also has the root $2 - 2\\sqrt{6}$.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether every polynomial with rational coefficients that has the root $2 + 2\\sqrt{6}$ also has the root $2 - 2\\sqrt{6}$.",
      "The square root $\\sqrt{6}$ is irrational.",
      "The number $2 - 2\\sqrt{6}$ is the conjugate of $2 + 2\\sqrt{6}$.",
      "So every polynomial with rational coefficients that has the first root has the second, and the answer is Yes."
    ]
  },
  {
    "id": "t202-k7-p03",
    "topic": "irrational-roots",
    "kind": "t202-k7",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether every polynomial with rational coefficients that has the root $-6 + \\sqrt[3]{11}$ also has the root $-6 - \\sqrt[3]{11}$.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether every polynomial with rational coefficients that has the root $-6 + \\sqrt[3]{11}$ also has the root $-6 - \\sqrt[3]{11}$.",
      "The polynomial $g(x) = \\left(x + 6\\right)^3 - 11$ has rational coefficients.",
      "$g(-6 + \\sqrt[3]{11}) = (\\sqrt[3]{11})^3 - 11 = 0$",
      "$g(-6 - \\sqrt[3]{11}) = (-\\sqrt[3]{11})^3 - 11 = -22$",
      "So $g(x)$ has the first root and not the second, and the answer is No."
    ]
  },
  {
    "id": "t202-k7-p04",
    "topic": "irrational-roots",
    "kind": "t202-k7",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether every polynomial with rational coefficients that has the root $-2\\sqrt[3]{5}$ also has the root $2\\sqrt[3]{5}$.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether every polynomial with rational coefficients that has the root $-2\\sqrt[3]{5}$ also has the root $2\\sqrt[3]{5}$.",
      "The polynomial $g(x) = x^3 + 40$ has rational coefficients.",
      "$g(-2\\sqrt[3]{5}) = (-2\\sqrt[3]{5})^3 + 40 = 0$",
      "$g(2\\sqrt[3]{5}) = (2\\sqrt[3]{5})^3 + 40 = 80$",
      "So $g(x)$ has the first root and not the second, and the answer is No."
    ]
  },
  {
    "id": "t202-k7-p05",
    "topic": "irrational-roots",
    "kind": "t202-k7",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether every polynomial with rational coefficients that has the root $3 + 3\\sqrt{14}$ also has the root $3 - 3\\sqrt{14}$.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether every polynomial with rational coefficients that has the root $3 + 3\\sqrt{14}$ also has the root $3 - 3\\sqrt{14}$.",
      "The square root $\\sqrt{14}$ is irrational.",
      "The number $3 - 3\\sqrt{14}$ is the conjugate of $3 + 3\\sqrt{14}$.",
      "So every polynomial with rational coefficients that has the first root has the second, and the answer is Yes."
    ]
  },
  {
    "id": "t202-k7-p06",
    "topic": "irrational-roots",
    "kind": "t202-k7",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether every polynomial with rational coefficients that has the root $6 + 3\\sqrt{19}$ also has the root $-6 + 3\\sqrt{19}$.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether every polynomial with rational coefficients that has the root $6 + 3\\sqrt{19}$ also has the root $-6 + 3\\sqrt{19}$.",
      "The polynomial $g(x) = \\left(x - 6\\right)^2 - 171$ has rational coefficients.",
      "$g(6 + 3\\sqrt{19}) = (3\\sqrt{19})^2 - 171 = 0$",
      "$g(-6 + 3\\sqrt{19}) = (-12 + 3\\sqrt{19})^2 - 171 = 144 - 72\\sqrt{19}$",
      "So $g(x)$ has the first root and not the second, and the answer is No."
    ]
  },
  {
    "id": "t202-k7-p07",
    "topic": "irrational-roots",
    "kind": "t202-k7",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether every polynomial with rational coefficients that has the root $5 + 3\\sqrt{13}$ also has the root $-5 + 3\\sqrt{13}$.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether every polynomial with rational coefficients that has the root $5 + 3\\sqrt{13}$ also has the root $-5 + 3\\sqrt{13}$.",
      "The polynomial $g(x) = \\left(x - 5\\right)^2 - 117$ has rational coefficients.",
      "$g(5 + 3\\sqrt{13}) = (3\\sqrt{13})^2 - 117 = 0$",
      "$g(-5 + 3\\sqrt{13}) = (-10 + 3\\sqrt{13})^2 - 117 = 100 - 60\\sqrt{13}$",
      "So $g(x)$ has the first root and not the second, and the answer is No."
    ]
  },
  {
    "id": "t202-k7-p08",
    "topic": "irrational-roots",
    "kind": "t202-k7",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether every polynomial with rational coefficients that has the root $-5 + \\sqrt{21}$ also has the root $-5 - \\sqrt{21}$.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether every polynomial with rational coefficients that has the root $-5 + \\sqrt{21}$ also has the root $-5 - \\sqrt{21}$.",
      "The square root $\\sqrt{21}$ is irrational.",
      "The number $-5 - \\sqrt{21}$ is the conjugate of $-5 + \\sqrt{21}$.",
      "So every polynomial with rational coefficients that has the first root has the second, and the answer is Yes."
    ]
  },
  {
    "id": "t202-k7-p09",
    "topic": "irrational-roots",
    "kind": "t202-k7",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether every polynomial with rational coefficients that has the root $4 - 2\\sqrt{23}$ also has the root $4 + 2\\sqrt{23}$.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether every polynomial with rational coefficients that has the root $4 - 2\\sqrt{23}$ also has the root $4 + 2\\sqrt{23}$.",
      "The square root $\\sqrt{23}$ is irrational.",
      "The number $4 + 2\\sqrt{23}$ is the conjugate of $4 - 2\\sqrt{23}$.",
      "So every polynomial with rational coefficients that has the first root has the second, and the answer is Yes."
    ]
  },
  {
    "id": "t202-k7-p10",
    "topic": "irrational-roots",
    "kind": "t202-k7",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether every polynomial with rational coefficients that has the root $-7 - 3\\sqrt[3]{2}$ also has the root $-7 + 3\\sqrt[3]{2}$.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether every polynomial with rational coefficients that has the root $-7 - 3\\sqrt[3]{2}$ also has the root $-7 + 3\\sqrt[3]{2}$.",
      "The polynomial $g(x) = \\left(x + 7\\right)^3 + 54$ has rational coefficients.",
      "$g(-7 - 3\\sqrt[3]{2}) = (-3\\sqrt[3]{2})^3 + 54 = 0$",
      "$g(-7 + 3\\sqrt[3]{2}) = (3\\sqrt[3]{2})^3 + 54 = 108$",
      "So $g(x)$ has the first root and not the second, and the answer is No."
    ]
  },
  {
    "id": "t202-k7-p11",
    "topic": "irrational-roots",
    "kind": "t202-k7",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether every polynomial with rational coefficients that has the root $2 - \\sqrt{23}$ also has the root $2 + \\sqrt{23}$.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether every polynomial with rational coefficients that has the root $2 - \\sqrt{23}$ also has the root $2 + \\sqrt{23}$.",
      "The square root $\\sqrt{23}$ is irrational.",
      "The number $2 + \\sqrt{23}$ is the conjugate of $2 - \\sqrt{23}$.",
      "So every polynomial with rational coefficients that has the first root has the second, and the answer is Yes."
    ]
  },
  {
    "id": "t202-k7-p12",
    "topic": "irrational-roots",
    "kind": "t202-k7",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether every polynomial with rational coefficients that has the root $-1 - \\sqrt{10}$ also has the root $-1 + \\sqrt{10}$.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether every polynomial with rational coefficients that has the root $-1 - \\sqrt{10}$ also has the root $-1 + \\sqrt{10}$.",
      "The square root $\\sqrt{10}$ is irrational.",
      "The number $-1 + \\sqrt{10}$ is the conjugate of $-1 - \\sqrt{10}$.",
      "So every polynomial with rational coefficients that has the first root has the second, and the answer is Yes."
    ]
  },
  {
    "id": "t202-k7-p13",
    "topic": "irrational-roots",
    "kind": "t202-k7",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether every polynomial with rational coefficients that has the root $1 - 3\\sqrt{11}$ also has the root $-1 - 3\\sqrt{11}$.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether every polynomial with rational coefficients that has the root $1 - 3\\sqrt{11}$ also has the root $-1 - 3\\sqrt{11}$.",
      "The polynomial $g(x) = \\left(x - 1\\right)^2 - 99$ has rational coefficients.",
      "$g(1 - 3\\sqrt{11}) = (-3\\sqrt{11})^2 - 99 = 0$",
      "$g(-1 - 3\\sqrt{11}) = (-2 - 3\\sqrt{11})^2 - 99 = 4 + 12\\sqrt{11}$",
      "So $g(x)$ has the first root and not the second, and the answer is No."
    ]
  },
  {
    "id": "t202-k7-p14",
    "topic": "irrational-roots",
    "kind": "t202-k7",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether every polynomial with rational coefficients that has the root $2\\sqrt[3]{10}$ also has the root $-2\\sqrt[3]{10}$.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether every polynomial with rational coefficients that has the root $2\\sqrt[3]{10}$ also has the root $-2\\sqrt[3]{10}$.",
      "The polynomial $g(x) = x^3 - 80$ has rational coefficients.",
      "$g(2\\sqrt[3]{10}) = (2\\sqrt[3]{10})^3 - 80 = 0$",
      "$g(-2\\sqrt[3]{10}) = (-2\\sqrt[3]{10})^3 - 80 = -160$",
      "So $g(x)$ has the first root and not the second, and the answer is No."
    ]
  }
]
