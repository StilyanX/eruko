export default [
  {
    "id": "t225-k1-p01",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find how many of the integers from $1$ to $90$ are values of $\\lfloor 3x\\rfloor + \\lfloor 5x\\rfloor + \\lfloor 7x\\rfloor$, where $x$ is a real number.",
    "form": "Answer as an integer.",
    "answer": "78",
    "solution": [
      "Find how many of the integers from $1$ to $90$ are values of $\\lfloor 3x\\rfloor + \\lfloor 5x\\rfloor + \\lfloor 7x\\rfloor$, where $x$ is a real number.",
      "For $0 < x \\le 1$, the term $\\lfloor 3x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{3}$, the term $\\lfloor 5x\\rfloor$ at each multiple of $\\dfrac{1}{5}$ and the term $\\lfloor 7x\\rfloor$ at each multiple of $\\dfrac{1}{7}$",
      "In order, the different points are $\\dfrac{1}{7}$, $\\dfrac{1}{5}$, $\\dfrac{2}{7}$, $\\dfrac{1}{3}$, $\\dfrac{2}{5}$, $\\dfrac{3}{7}$, $\\dfrac{4}{7}$, $\\dfrac{3}{5}$, $\\dfrac{2}{3}$, $\\dfrac{5}{7}$, $\\dfrac{4}{5}$, $\\dfrac{6}{7}$ and $1$: $13$ points",
      "$\\lfloor 3(x + 1)\\rfloor + \\lfloor 5(x + 1)\\rfloor + \\lfloor 7(x + 1)\\rfloor = \\lfloor 3x\\rfloor + \\lfloor 5x\\rfloor + \\lfloor 7x\\rfloor + 15$",
      "For each integer $n$, for $n < x \\le n + 1$ the sum takes $13$ of the $15$ integers from $15n + 1$ to $15n + 15$",
      "Since $90 = 6 \\cdot 15$, the integers from $1$ to $90$ are the $6$ runs with $n$ from $0$ to $5$",
      "$6 \\cdot 13 = 78$"
    ]
  },
  {
    "id": "t225-k1-p02",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find how many of the integers from $1$ to $60$ are values of $\\lfloor 3x\\rfloor + \\lfloor 7x\\rfloor$, where $x$ is a real number.",
    "form": "Answer as an integer.",
    "answer": "54",
    "solution": [
      "Find how many of the integers from $1$ to $60$ are values of $\\lfloor 3x\\rfloor + \\lfloor 7x\\rfloor$, where $x$ is a real number.",
      "For $0 < x \\le 1$, the term $\\lfloor 3x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{3}$, and the term $\\lfloor 7x\\rfloor$ at each multiple of $\\dfrac{1}{7}$",
      "In order, the different points are $\\dfrac{1}{7}$, $\\dfrac{2}{7}$, $\\dfrac{1}{3}$, $\\dfrac{3}{7}$, $\\dfrac{4}{7}$, $\\dfrac{2}{3}$, $\\dfrac{5}{7}$, $\\dfrac{6}{7}$ and $1$: $9$ points",
      "$\\lfloor 3(x + 1)\\rfloor + \\lfloor 7(x + 1)\\rfloor = \\lfloor 3x\\rfloor + \\lfloor 7x\\rfloor + 10$",
      "For each integer $n$, for $n < x \\le n + 1$ the sum takes $9$ of the $10$ integers from $10n + 1$ to $10n + 10$",
      "Since $60 = 6 \\cdot 10$, the integers from $1$ to $60$ are the $6$ runs with $n$ from $0$ to $5$",
      "$6 \\cdot 9 = 54$"
    ]
  },
  {
    "id": "t225-k1-p03",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find how many of the integers from $1$ to $39$ are values of $\\lfloor 3x\\rfloor + \\lfloor 4x\\rfloor + \\lfloor 6x\\rfloor$, where $x$ is a real number.",
    "form": "Answer as an integer.",
    "answer": "24",
    "solution": [
      "Find how many of the integers from $1$ to $39$ are values of $\\lfloor 3x\\rfloor + \\lfloor 4x\\rfloor + \\lfloor 6x\\rfloor$, where $x$ is a real number.",
      "For $0 < x \\le 1$, the term $\\lfloor 3x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{3}$, the term $\\lfloor 4x\\rfloor$ at each multiple of $\\dfrac{1}{4}$ and the term $\\lfloor 6x\\rfloor$ at each multiple of $\\dfrac{1}{6}$",
      "In order, the different points are $\\dfrac{1}{6}$, $\\dfrac{1}{4}$, $\\dfrac{1}{3}$, $\\dfrac{1}{2}$, $\\dfrac{2}{3}$, $\\dfrac{3}{4}$, $\\dfrac{5}{6}$ and $1$: $8$ points",
      "$\\lfloor 3(x + 1)\\rfloor + \\lfloor 4(x + 1)\\rfloor + \\lfloor 6(x + 1)\\rfloor = \\lfloor 3x\\rfloor + \\lfloor 4x\\rfloor + \\lfloor 6x\\rfloor + 13$",
      "For each integer $n$, for $n < x \\le n + 1$ the sum takes $8$ of the $13$ integers from $13n + 1$ to $13n + 13$",
      "Since $39 = 3 \\cdot 13$, the integers from $1$ to $39$ are the $3$ runs with $n$ from $0$ to $2$",
      "$3 \\cdot 8 = 24$"
    ]
  },
  {
    "id": "t225-k1-p04",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find how many of the integers from $1$ to $84$ are values of $\\lfloor 3x\\rfloor + \\lfloor 4x\\rfloor$, where $x$ is a real number.",
    "form": "Answer as an integer.",
    "answer": "72",
    "solution": [
      "Find how many of the integers from $1$ to $84$ are values of $\\lfloor 3x\\rfloor + \\lfloor 4x\\rfloor$, where $x$ is a real number.",
      "For $0 < x \\le 1$, the term $\\lfloor 3x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{3}$, and the term $\\lfloor 4x\\rfloor$ at each multiple of $\\dfrac{1}{4}$",
      "In order, the different points are $\\dfrac{1}{4}$, $\\dfrac{1}{3}$, $\\dfrac{1}{2}$, $\\dfrac{2}{3}$, $\\dfrac{3}{4}$ and $1$: $6$ points",
      "$\\lfloor 3(x + 1)\\rfloor + \\lfloor 4(x + 1)\\rfloor = \\lfloor 3x\\rfloor + \\lfloor 4x\\rfloor + 7$",
      "For each integer $n$, for $n < x \\le n + 1$ the sum takes $6$ of the $7$ integers from $7n + 1$ to $7n + 7$",
      "Since $84 = 12 \\cdot 7$, the integers from $1$ to $84$ are the $12$ runs with $n$ from $0$ to $11$",
      "$12 \\cdot 6 = 72$"
    ]
  },
  {
    "id": "t225-k1-p05",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find how many of the integers from $1$ to $144$ are values of $\\lfloor 4x\\rfloor + \\lfloor 5x\\rfloor + \\lfloor 7x\\rfloor$, where $x$ is a real number.",
    "form": "Answer as an integer.",
    "answer": "126",
    "solution": [
      "Find how many of the integers from $1$ to $144$ are values of $\\lfloor 4x\\rfloor + \\lfloor 5x\\rfloor + \\lfloor 7x\\rfloor$, where $x$ is a real number.",
      "For $0 < x \\le 1$, the term $\\lfloor 4x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{4}$, the term $\\lfloor 5x\\rfloor$ at each multiple of $\\dfrac{1}{5}$ and the term $\\lfloor 7x\\rfloor$ at each multiple of $\\dfrac{1}{7}$",
      "In order, the different points are $\\dfrac{1}{7}$, $\\dfrac{1}{5}$, $\\dfrac{1}{4}$, $\\dfrac{2}{7}$, $\\dfrac{2}{5}$, $\\dfrac{3}{7}$, $\\dfrac{1}{2}$, $\\dfrac{4}{7}$, $\\dfrac{3}{5}$, $\\dfrac{5}{7}$, $\\dfrac{3}{4}$, $\\dfrac{4}{5}$, $\\dfrac{6}{7}$ and $1$: $14$ points",
      "$\\lfloor 4(x + 1)\\rfloor + \\lfloor 5(x + 1)\\rfloor + \\lfloor 7(x + 1)\\rfloor = \\lfloor 4x\\rfloor + \\lfloor 5x\\rfloor + \\lfloor 7x\\rfloor + 16$",
      "For each integer $n$, for $n < x \\le n + 1$ the sum takes $14$ of the $16$ integers from $16n + 1$ to $16n + 16$",
      "Since $144 = 9 \\cdot 16$, the integers from $1$ to $144$ are the $9$ runs with $n$ from $0$ to $8$",
      "$9 \\cdot 14 = 126$"
    ]
  },
  {
    "id": "t225-k1-p06",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find how many of the integers from $1$ to $152$ are values of $\\lfloor 4x\\rfloor + \\lfloor 6x\\rfloor + \\lfloor 9x\\rfloor$, where $x$ is a real number.",
    "form": "Answer as an integer.",
    "answer": "112",
    "solution": [
      "Find how many of the integers from $1$ to $152$ are values of $\\lfloor 4x\\rfloor + \\lfloor 6x\\rfloor + \\lfloor 9x\\rfloor$, where $x$ is a real number.",
      "For $0 < x \\le 1$, the term $\\lfloor 4x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{4}$, the term $\\lfloor 6x\\rfloor$ at each multiple of $\\dfrac{1}{6}$ and the term $\\lfloor 9x\\rfloor$ at each multiple of $\\dfrac{1}{9}$",
      "In order, the different points are $\\dfrac{1}{9}$, $\\dfrac{1}{6}$, $\\dfrac{2}{9}$, $\\dfrac{1}{4}$, $\\dfrac{1}{3}$, $\\dfrac{4}{9}$, $\\dfrac{1}{2}$, $\\dfrac{5}{9}$, $\\dfrac{2}{3}$, $\\dfrac{3}{4}$, $\\dfrac{7}{9}$, $\\dfrac{5}{6}$, $\\dfrac{8}{9}$ and $1$: $14$ points",
      "$\\lfloor 4(x + 1)\\rfloor + \\lfloor 6(x + 1)\\rfloor + \\lfloor 9(x + 1)\\rfloor = \\lfloor 4x\\rfloor + \\lfloor 6x\\rfloor + \\lfloor 9x\\rfloor + 19$",
      "For each integer $n$, for $n < x \\le n + 1$ the sum takes $14$ of the $19$ integers from $19n + 1$ to $19n + 19$",
      "Since $152 = 8 \\cdot 19$, the integers from $1$ to $152$ are the $8$ runs with $n$ from $0$ to $7$",
      "$8 \\cdot 14 = 112$"
    ]
  },
  {
    "id": "t225-k1-p07",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find how many of the integers from $1$ to $120$ are values of $\\lfloor 5x\\rfloor + \\lfloor 7x\\rfloor$, where $x$ is a real number.",
    "form": "Answer as an integer.",
    "answer": "110",
    "solution": [
      "Find how many of the integers from $1$ to $120$ are values of $\\lfloor 5x\\rfloor + \\lfloor 7x\\rfloor$, where $x$ is a real number.",
      "For $0 < x \\le 1$, the term $\\lfloor 5x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{5}$, and the term $\\lfloor 7x\\rfloor$ at each multiple of $\\dfrac{1}{7}$",
      "In order, the different points are $\\dfrac{1}{7}$, $\\dfrac{1}{5}$, $\\dfrac{2}{7}$, $\\dfrac{2}{5}$, $\\dfrac{3}{7}$, $\\dfrac{4}{7}$, $\\dfrac{3}{5}$, $\\dfrac{5}{7}$, $\\dfrac{4}{5}$, $\\dfrac{6}{7}$ and $1$: $11$ points",
      "$\\lfloor 5(x + 1)\\rfloor + \\lfloor 7(x + 1)\\rfloor = \\lfloor 5x\\rfloor + \\lfloor 7x\\rfloor + 12$",
      "For each integer $n$, for $n < x \\le n + 1$ the sum takes $11$ of the $12$ integers from $12n + 1$ to $12n + 12$",
      "Since $120 = 10 \\cdot 12$, the integers from $1$ to $120$ are the $10$ runs with $n$ from $0$ to $9$",
      "$10 \\cdot 11 = 110$"
    ]
  },
  {
    "id": "t225-k1-p08",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find how many of the integers from $1$ to $130$ are values of $\\lfloor 2x\\rfloor + \\lfloor 11x\\rfloor$, where $x$ is a real number.",
    "form": "Answer as an integer.",
    "answer": "120",
    "solution": [
      "Find how many of the integers from $1$ to $130$ are values of $\\lfloor 2x\\rfloor + \\lfloor 11x\\rfloor$, where $x$ is a real number.",
      "For $0 < x \\le 1$, the term $\\lfloor 2x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{2}$, and the term $\\lfloor 11x\\rfloor$ at each multiple of $\\dfrac{1}{11}$",
      "In order, the different points are $\\dfrac{1}{11}$, $\\dfrac{2}{11}$, $\\dfrac{3}{11}$, $\\dfrac{4}{11}$, $\\dfrac{5}{11}$, $\\dfrac{1}{2}$, $\\dfrac{6}{11}$, $\\dfrac{7}{11}$, $\\dfrac{8}{11}$, $\\dfrac{9}{11}$, $\\dfrac{10}{11}$ and $1$: $12$ points",
      "$\\lfloor 2(x + 1)\\rfloor + \\lfloor 11(x + 1)\\rfloor = \\lfloor 2x\\rfloor + \\lfloor 11x\\rfloor + 13$",
      "For each integer $n$, for $n < x \\le n + 1$ the sum takes $12$ of the $13$ integers from $13n + 1$ to $13n + 13$",
      "Since $130 = 10 \\cdot 13$, the integers from $1$ to $130$ are the $10$ runs with $n$ from $0$ to $9$",
      "$10 \\cdot 12 = 120$"
    ]
  },
  {
    "id": "t225-k1-p09",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find how many of the integers from $1$ to $112$ are values of $\\lfloor 3x\\rfloor + \\lfloor 4x\\rfloor + \\lfloor 9x\\rfloor$, where $x$ is a real number.",
    "form": "Answer as an integer.",
    "answer": "84",
    "solution": [
      "Find how many of the integers from $1$ to $112$ are values of $\\lfloor 3x\\rfloor + \\lfloor 4x\\rfloor + \\lfloor 9x\\rfloor$, where $x$ is a real number.",
      "For $0 < x \\le 1$, the term $\\lfloor 3x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{3}$, the term $\\lfloor 4x\\rfloor$ at each multiple of $\\dfrac{1}{4}$ and the term $\\lfloor 9x\\rfloor$ at each multiple of $\\dfrac{1}{9}$",
      "In order, the different points are $\\dfrac{1}{9}$, $\\dfrac{2}{9}$, $\\dfrac{1}{4}$, $\\dfrac{1}{3}$, $\\dfrac{4}{9}$, $\\dfrac{1}{2}$, $\\dfrac{5}{9}$, $\\dfrac{2}{3}$, $\\dfrac{3}{4}$, $\\dfrac{7}{9}$, $\\dfrac{8}{9}$ and $1$: $12$ points",
      "$\\lfloor 3(x + 1)\\rfloor + \\lfloor 4(x + 1)\\rfloor + \\lfloor 9(x + 1)\\rfloor = \\lfloor 3x\\rfloor + \\lfloor 4x\\rfloor + \\lfloor 9x\\rfloor + 16$",
      "For each integer $n$, for $n < x \\le n + 1$ the sum takes $12$ of the $16$ integers from $16n + 1$ to $16n + 16$",
      "Since $112 = 7 \\cdot 16$, the integers from $1$ to $112$ are the $7$ runs with $n$ from $0$ to $6$",
      "$7 \\cdot 12 = 84$"
    ]
  },
  {
    "id": "t225-k1-p10",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find how many of the integers from $1$ to $44$ are values of $\\lfloor 2x\\rfloor + \\lfloor 4x\\rfloor + \\lfloor 5x\\rfloor$, where $x$ is a real number.",
    "form": "Answer as an integer.",
    "answer": "32",
    "solution": [
      "Find how many of the integers from $1$ to $44$ are values of $\\lfloor 2x\\rfloor + \\lfloor 4x\\rfloor + \\lfloor 5x\\rfloor$, where $x$ is a real number.",
      "For $0 < x \\le 1$, the term $\\lfloor 2x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{2}$, the term $\\lfloor 4x\\rfloor$ at each multiple of $\\dfrac{1}{4}$ and the term $\\lfloor 5x\\rfloor$ at each multiple of $\\dfrac{1}{5}$",
      "In order, the different points are $\\dfrac{1}{5}$, $\\dfrac{1}{4}$, $\\dfrac{2}{5}$, $\\dfrac{1}{2}$, $\\dfrac{3}{5}$, $\\dfrac{3}{4}$, $\\dfrac{4}{5}$ and $1$: $8$ points",
      "$\\lfloor 2(x + 1)\\rfloor + \\lfloor 4(x + 1)\\rfloor + \\lfloor 5(x + 1)\\rfloor = \\lfloor 2x\\rfloor + \\lfloor 4x\\rfloor + \\lfloor 5x\\rfloor + 11$",
      "For each integer $n$, for $n < x \\le n + 1$ the sum takes $8$ of the $11$ integers from $11n + 1$ to $11n + 11$",
      "Since $44 = 4 \\cdot 11$, the integers from $1$ to $44$ are the $4$ runs with $n$ from $0$ to $3$",
      "$4 \\cdot 8 = 32$"
    ]
  },
  {
    "id": "t225-k1-p11",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find how many of the integers from $1$ to $45$ are values of $\\lfloor 2x\\rfloor + \\lfloor 3x\\rfloor + \\lfloor 10x\\rfloor$, where $x$ is a real number.",
    "form": "Answer as an integer.",
    "answer": "36",
    "solution": [
      "Find how many of the integers from $1$ to $45$ are values of $\\lfloor 2x\\rfloor + \\lfloor 3x\\rfloor + \\lfloor 10x\\rfloor$, where $x$ is a real number.",
      "For $0 < x \\le 1$, the term $\\lfloor 2x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{2}$, the term $\\lfloor 3x\\rfloor$ at each multiple of $\\dfrac{1}{3}$ and the term $\\lfloor 10x\\rfloor$ at each multiple of $\\dfrac{1}{10}$",
      "In order, the different points are $\\dfrac{1}{10}$, $\\dfrac{1}{5}$, $\\dfrac{3}{10}$, $\\dfrac{1}{3}$, $\\dfrac{2}{5}$, $\\dfrac{1}{2}$, $\\dfrac{3}{5}$, $\\dfrac{2}{3}$, $\\dfrac{7}{10}$, $\\dfrac{4}{5}$, $\\dfrac{9}{10}$ and $1$: $12$ points",
      "$\\lfloor 2(x + 1)\\rfloor + \\lfloor 3(x + 1)\\rfloor + \\lfloor 10(x + 1)\\rfloor = \\lfloor 2x\\rfloor + \\lfloor 3x\\rfloor + \\lfloor 10x\\rfloor + 15$",
      "For each integer $n$, for $n < x \\le n + 1$ the sum takes $12$ of the $15$ integers from $15n + 1$ to $15n + 15$",
      "Since $45 = 3 \\cdot 15$, the integers from $1$ to $45$ are the $3$ runs with $n$ from $0$ to $2$",
      "$3 \\cdot 12 = 36$"
    ]
  },
  {
    "id": "t225-k1-p12",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find how many of the integers from $1$ to $104$ are values of $\\lfloor 5x\\rfloor + \\lfloor 8x\\rfloor$, where $x$ is a real number.",
    "form": "Answer as an integer.",
    "answer": "96",
    "solution": [
      "Find how many of the integers from $1$ to $104$ are values of $\\lfloor 5x\\rfloor + \\lfloor 8x\\rfloor$, where $x$ is a real number.",
      "For $0 < x \\le 1$, the term $\\lfloor 5x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{5}$, and the term $\\lfloor 8x\\rfloor$ at each multiple of $\\dfrac{1}{8}$",
      "In order, the different points are $\\dfrac{1}{8}$, $\\dfrac{1}{5}$, $\\dfrac{1}{4}$, $\\dfrac{3}{8}$, $\\dfrac{2}{5}$, $\\dfrac{1}{2}$, $\\dfrac{3}{5}$, $\\dfrac{5}{8}$, $\\dfrac{3}{4}$, $\\dfrac{4}{5}$, $\\dfrac{7}{8}$ and $1$: $12$ points",
      "$\\lfloor 5(x + 1)\\rfloor + \\lfloor 8(x + 1)\\rfloor = \\lfloor 5x\\rfloor + \\lfloor 8x\\rfloor + 13$",
      "For each integer $n$, for $n < x \\le n + 1$ the sum takes $12$ of the $13$ integers from $13n + 1$ to $13n + 13$",
      "Since $104 = 8 \\cdot 13$, the integers from $1$ to $104$ are the $8$ runs with $n$ from $0$ to $7$",
      "$8 \\cdot 12 = 96$"
    ]
  },
  {
    "id": "t225-k1-p13",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find how many of the integers from $1$ to $96$ are values of $\\lfloor 2x\\rfloor + \\lfloor 3x\\rfloor + \\lfloor 7x\\rfloor$, where $x$ is a real number.",
    "form": "Answer as an integer.",
    "answer": "80",
    "solution": [
      "Find how many of the integers from $1$ to $96$ are values of $\\lfloor 2x\\rfloor + \\lfloor 3x\\rfloor + \\lfloor 7x\\rfloor$, where $x$ is a real number.",
      "For $0 < x \\le 1$, the term $\\lfloor 2x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{2}$, the term $\\lfloor 3x\\rfloor$ at each multiple of $\\dfrac{1}{3}$ and the term $\\lfloor 7x\\rfloor$ at each multiple of $\\dfrac{1}{7}$",
      "In order, the different points are $\\dfrac{1}{7}$, $\\dfrac{2}{7}$, $\\dfrac{1}{3}$, $\\dfrac{3}{7}$, $\\dfrac{1}{2}$, $\\dfrac{4}{7}$, $\\dfrac{2}{3}$, $\\dfrac{5}{7}$, $\\dfrac{6}{7}$ and $1$: $10$ points",
      "$\\lfloor 2(x + 1)\\rfloor + \\lfloor 3(x + 1)\\rfloor + \\lfloor 7(x + 1)\\rfloor = \\lfloor 2x\\rfloor + \\lfloor 3x\\rfloor + \\lfloor 7x\\rfloor + 12$",
      "For each integer $n$, for $n < x \\le n + 1$ the sum takes $10$ of the $12$ integers from $12n + 1$ to $12n + 12$",
      "Since $96 = 8 \\cdot 12$, the integers from $1$ to $96$ are the $8$ runs with $n$ from $0$ to $7$",
      "$8 \\cdot 10 = 80$"
    ]
  },
  {
    "id": "t225-k1-p14",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find how many of the integers from $1$ to $68$ are values of $\\lfloor 2x\\rfloor + \\lfloor 6x\\rfloor + \\lfloor 9x\\rfloor$, where $x$ is a real number.",
    "form": "Answer as an integer.",
    "answer": "48",
    "solution": [
      "Find how many of the integers from $1$ to $68$ are values of $\\lfloor 2x\\rfloor + \\lfloor 6x\\rfloor + \\lfloor 9x\\rfloor$, where $x$ is a real number.",
      "For $0 < x \\le 1$, the term $\\lfloor 2x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{2}$, the term $\\lfloor 6x\\rfloor$ at each multiple of $\\dfrac{1}{6}$ and the term $\\lfloor 9x\\rfloor$ at each multiple of $\\dfrac{1}{9}$",
      "In order, the different points are $\\dfrac{1}{9}$, $\\dfrac{1}{6}$, $\\dfrac{2}{9}$, $\\dfrac{1}{3}$, $\\dfrac{4}{9}$, $\\dfrac{1}{2}$, $\\dfrac{5}{9}$, $\\dfrac{2}{3}$, $\\dfrac{7}{9}$, $\\dfrac{5}{6}$, $\\dfrac{8}{9}$ and $1$: $12$ points",
      "$\\lfloor 2(x + 1)\\rfloor + \\lfloor 6(x + 1)\\rfloor + \\lfloor 9(x + 1)\\rfloor = \\lfloor 2x\\rfloor + \\lfloor 6x\\rfloor + \\lfloor 9x\\rfloor + 17$",
      "For each integer $n$, for $n < x \\le n + 1$ the sum takes $12$ of the $17$ integers from $17n + 1$ to $17n + 17$",
      "Since $68 = 4 \\cdot 17$, the integers from $1$ to $68$ are the $4$ runs with $n$ from $0$ to $3$",
      "$4 \\cdot 12 = 48$"
    ]
  },
  {
    "id": "t225-k2-p01",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for how many of the integers from $1$ to $70$ are values of $\\lfloor 2x\\rfloor + \\lfloor 3x\\rfloor + \\lfloor 5x\\rfloor$, and write that line right.",
    "given": [
      "For $0 < x \\le 1$, the term $\\lfloor 2x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{2}$, the term $\\lfloor 3x\\rfloor$ at each multiple of $\\dfrac{1}{3}$ and the term $\\lfloor 5x\\rfloor$ at each multiple of $\\dfrac{1}{5}$.",
      "The different points are $\\dfrac{1}{5}$, $\\dfrac{1}{3}$, $\\dfrac{2}{5}$, $\\dfrac{1}{2}$, $\\dfrac{3}{5}$, $\\dfrac{2}{3}$, $\\dfrac{4}{5}$ and $1$: $8$ points.",
      "$\\lfloor 2(x + 1)\\rfloor + \\lfloor 3(x + 1)\\rfloor + \\lfloor 5(x + 1)\\rfloor = \\lfloor 2x\\rfloor + 2 + \\lfloor 3x\\rfloor + 3 + \\lfloor 5x\\rfloor + 5 = \\lfloor 2x\\rfloor + \\lfloor 3x\\rfloor + \\lfloor 5x\\rfloor + 10$",
      "For $n < x \\le n + 1$ the sum takes $8$ of the $10$ integers from $10n + 1$ to $10n + 10$.",
      "The run with $n = 6$ ends at $10 \\cdot 6 + 10 = 60 + 10 = 70$.",
      "$\\dfrac{70}{10} = 7 \\cdot 8 = 56$",
      "The sum takes $56$ of the integers from $1$ to $70$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 6: 70/10*8 = 7*8 = 56",
    "solution": [
      "Find the first wrong line in this working for how many of the integers from $1$ to $70$ are values of $\\lfloor 2x\\rfloor + \\lfloor 3x\\rfloor + \\lfloor 5x\\rfloor$, and write that line right.",
      "Line 6 writes $\\dfrac{70}{10}$, then times $8$, in one run of equals signs, so it states $\\dfrac{70}{10} = 56$.",
      "Every line other than line 6 follows by a rule that holds, from the data or from the lines above it as they are written, so line 6 is the first wrong line.",
      "Line 6 written right is \"$\\dfrac{70}{10} \\cdot 8 = 7 \\cdot 8 = 56$\"."
    ]
  },
  {
    "id": "t225-k2-p02",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for how many of the integers from $1$ to $150$ are values of $\\lfloor 2x\\rfloor + \\lfloor 4x\\rfloor + \\lfloor 9x\\rfloor$, and write that line right.",
    "given": [
      "For $0 < x \\le 1$, the term $\\lfloor 2x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{2}$, the term $\\lfloor 4x\\rfloor$ at each multiple of $\\dfrac{1}{4}$ and the term $\\lfloor 9x\\rfloor$ at each multiple of $\\dfrac{1}{9}$.",
      "The different points are $\\dfrac{1}{9}$, $\\dfrac{2}{9}$, $\\dfrac{1}{4}$, $\\dfrac{1}{3}$, $\\dfrac{4}{9}$, $\\dfrac{1}{2}$, $\\dfrac{5}{9}$, $\\dfrac{2}{3}$, $\\dfrac{3}{4}$, $\\dfrac{7}{9}$, $\\dfrac{8}{9}$ and $1$: $12$ points.",
      "$\\lfloor 2(x + 1)\\rfloor + \\lfloor 4(x + 1)\\rfloor + \\lfloor 9(x + 1)\\rfloor = \\lfloor 2x\\rfloor + 2 + \\lfloor 4x\\rfloor + 4 + \\lfloor 9x\\rfloor + 9 = \\lfloor 2x\\rfloor + \\lfloor 4x\\rfloor + \\lfloor 9x\\rfloor + 15$",
      "For $n < x \\le n + 1$ the sum takes $12$ of the $15$ integers from $15n + 1$ to $15n + 15$.",
      "The run with $n = 9$ ends at $15 \\cdot 9 = 135 + 15 = 150$.",
      "$\\dfrac{150}{15} \\cdot 12 = 10 \\cdot 12 = 120$",
      "The sum takes $120$ of the integers from $1$ to $150$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 5: 15*9+15 = 135+15 = 150",
    "solution": [
      "Find the first wrong line in this working for how many of the integers from $1$ to $150$ are values of $\\lfloor 2x\\rfloor + \\lfloor 4x\\rfloor + \\lfloor 9x\\rfloor$, and write that line right.",
      "Line 5 writes $15 \\cdot 9$, then adds $15$, in one run of equals signs, so it states $15 \\cdot 9 = 150$.",
      "Every line other than line 5 follows by a rule that holds, from the data or from the lines above it as they are written, so line 5 is the first wrong line.",
      "Line 5 written right is \"$15 \\cdot 9 + 15 = 135 + 15 = 150$\"."
    ]
  },
  {
    "id": "t225-k2-p03",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for how many of the integers from $1$ to $133$ are values of $\\lfloor 4x\\rfloor + \\lfloor 5x\\rfloor + \\lfloor 10x\\rfloor$, and write that line right.",
    "given": [
      "For $0 < x \\le 1$, the term $\\lfloor 4x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{4}$, the term $\\lfloor 5x\\rfloor$ at each multiple of $\\dfrac{1}{5}$ and the term $\\lfloor 10x\\rfloor$ at each multiple of $\\dfrac{1}{10}$.",
      "The different points are $\\dfrac{1}{10}$, $\\dfrac{1}{5}$, $\\dfrac{1}{4}$, $\\dfrac{3}{10}$, $\\dfrac{2}{5}$, $\\dfrac{1}{2}$, $\\dfrac{3}{5}$, $\\dfrac{7}{10}$, $\\dfrac{3}{4}$, $\\dfrac{4}{5}$, $\\dfrac{9}{10}$ and $1$: $12$ points.",
      "$\\lfloor 4(x + 1)\\rfloor + \\lfloor 5(x + 1)\\rfloor + \\lfloor 10(x + 1)\\rfloor = \\lfloor 4x\\rfloor + 4 + \\lfloor 5x\\rfloor + 5 + \\lfloor 10x\\rfloor + 10 = \\lfloor 4x\\rfloor + \\lfloor 5x\\rfloor + \\lfloor 10x\\rfloor + 19$",
      "For $n < x \\le n + 1$ the sum takes $12$ of the $19$ integers from $19n + 1$ to $19n + 19$.",
      "The run with $n = 6$ ends at $19 \\cdot 6 + 19 = 114 + 19 = 133$.",
      "$\\dfrac{133}{19} = 7 \\cdot 12 = 84$",
      "The sum takes $84$ of the integers from $1$ to $133$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 6: 133/19*12 = 7*12 = 84",
    "solution": [
      "Find the first wrong line in this working for how many of the integers from $1$ to $133$ are values of $\\lfloor 4x\\rfloor + \\lfloor 5x\\rfloor + \\lfloor 10x\\rfloor$, and write that line right.",
      "Line 6 writes $\\dfrac{133}{19}$, then times $12$, in one run of equals signs, so it states $\\dfrac{133}{19} = 84$.",
      "Every line other than line 6 follows by a rule that holds, from the data or from the lines above it as they are written, so line 6 is the first wrong line.",
      "Line 6 written right is \"$\\dfrac{133}{19} \\cdot 12 = 7 \\cdot 12 = 84$\"."
    ]
  },
  {
    "id": "t225-k2-p04",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for how many of the integers from $1$ to $36$ are values of $\\lfloor 4x\\rfloor + \\lfloor 5x\\rfloor$, and write that line right.",
    "given": [
      "For $0 < x \\le 1$, the term $\\lfloor 4x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{4}$, and the term $\\lfloor 5x\\rfloor$ at each multiple of $\\dfrac{1}{5}$.",
      "The different points are $\\dfrac{1}{5}$, $\\dfrac{1}{4}$, $\\dfrac{2}{5}$, $\\dfrac{1}{2}$, $\\dfrac{3}{5}$, $\\dfrac{3}{4}$, $\\dfrac{4}{5}$ and $1$: $8$ points.",
      "$\\lfloor 4(x + 1)\\rfloor + \\lfloor 5(x + 1)\\rfloor = \\lfloor 4x\\rfloor + 4 + \\lfloor 5x\\rfloor + 5 = \\lfloor 4x\\rfloor + \\lfloor 5x\\rfloor + 9$",
      "For $n < x \\le n + 1$ the sum takes $8$ of the $9$ integers from $9n + 1$ to $9n + 9$.",
      "The run with $n = 3$ ends at $9 \\cdot 3 + 9 = 27 + 9 = 36$.",
      "$\\dfrac{36}{9} = 4 \\cdot 8 = 32$",
      "The sum takes $32$ of the integers from $1$ to $36$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 6: 36/9*8 = 4*8 = 32",
    "solution": [
      "Find the first wrong line in this working for how many of the integers from $1$ to $36$ are values of $\\lfloor 4x\\rfloor + \\lfloor 5x\\rfloor$, and write that line right.",
      "Line 6 writes $\\dfrac{36}{9}$, then times $8$, in one run of equals signs, so it states $\\dfrac{36}{9} = 32$.",
      "Every line other than line 6 follows by a rule that holds, from the data or from the lines above it as they are written, so line 6 is the first wrong line.",
      "Line 6 written right is \"$\\dfrac{36}{9} \\cdot 8 = 4 \\cdot 8 = 32$\"."
    ]
  },
  {
    "id": "t225-k2-p05",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for how many of the integers from $1$ to $98$ are values of $\\lfloor 3x\\rfloor + \\lfloor 5x\\rfloor + \\lfloor 6x\\rfloor$, and write that line right.",
    "given": [
      "For $0 < x \\le 1$, the term $\\lfloor 3x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{3}$, the term $\\lfloor 5x\\rfloor$ at each multiple of $\\dfrac{1}{5}$ and the term $\\lfloor 6x\\rfloor$ at each multiple of $\\dfrac{1}{6}$.",
      "The different points are $\\dfrac{1}{6}$, $\\dfrac{1}{5}$, $\\dfrac{1}{3}$, $\\dfrac{2}{5}$, $\\dfrac{1}{2}$, $\\dfrac{3}{5}$, $\\dfrac{2}{3}$, $\\dfrac{4}{5}$, $\\dfrac{5}{6}$ and $1$: $10$ points.",
      "$\\lfloor 3(x + 1)\\rfloor + \\lfloor 5(x + 1)\\rfloor + \\lfloor 6(x + 1)\\rfloor = \\lfloor 3x\\rfloor + 3 + \\lfloor 5x\\rfloor + 5 + \\lfloor 6x\\rfloor + 6 = \\lfloor 3x\\rfloor + \\lfloor 5x\\rfloor + \\lfloor 6x\\rfloor + 14$",
      "For $n < x \\le n + 1$ the sum takes $10$ of the $14$ integers from $14n + 1$ to $14n + 14$.",
      "The run with $n = 6$ ends at $14 \\cdot 6 = 84 + 14 = 98$.",
      "$\\dfrac{98}{14} \\cdot 10 = 7 \\cdot 10 = 70$",
      "The sum takes $70$ of the integers from $1$ to $98$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 5: 14*6+14 = 84+14 = 98",
    "solution": [
      "Find the first wrong line in this working for how many of the integers from $1$ to $98$ are values of $\\lfloor 3x\\rfloor + \\lfloor 5x\\rfloor + \\lfloor 6x\\rfloor$, and write that line right.",
      "Line 5 writes $14 \\cdot 6$, then adds $14$, in one run of equals signs, so it states $14 \\cdot 6 = 98$.",
      "Every line other than line 5 follows by a rule that holds, from the data or from the lines above it as they are written, so line 5 is the first wrong line.",
      "Line 5 written right is \"$14 \\cdot 6 + 14 = 84 + 14 = 98$\"."
    ]
  },
  {
    "id": "t225-k2-p06",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for how many of the integers from $1$ to $55$ are values of $\\lfloor 5x\\rfloor + \\lfloor 6x\\rfloor$, and write that line right.",
    "given": [
      "For $0 < x \\le 1$, the term $\\lfloor 5x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{5}$, and the term $\\lfloor 6x\\rfloor$ at each multiple of $\\dfrac{1}{6}$.",
      "The different points are $\\dfrac{1}{6}$, $\\dfrac{1}{5}$, $\\dfrac{1}{3}$, $\\dfrac{2}{5}$, $\\dfrac{1}{2}$, $\\dfrac{3}{5}$, $\\dfrac{2}{3}$, $\\dfrac{4}{5}$, $\\dfrac{5}{6}$ and $1$: $10$ points.",
      "$\\lfloor 5(x + 1)\\rfloor + \\lfloor 6(x + 1)\\rfloor = \\lfloor 5x\\rfloor + 5 + \\lfloor 6x\\rfloor + 6 = \\lfloor 5x\\rfloor + \\lfloor 6x\\rfloor + 11$",
      "For $n < x \\le n + 1$ the sum takes $10$ of the $11$ integers from $11n + 1$ to $11n + 11$.",
      "The run with $n = 4$ ends at $11 \\cdot 4 = 44 + 11 = 55$.",
      "$\\dfrac{55}{11} \\cdot 10 = 5 \\cdot 10 = 50$",
      "The sum takes $50$ of the integers from $1$ to $55$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 5: 11*4+11 = 44+11 = 55",
    "solution": [
      "Find the first wrong line in this working for how many of the integers from $1$ to $55$ are values of $\\lfloor 5x\\rfloor + \\lfloor 6x\\rfloor$, and write that line right.",
      "Line 5 writes $11 \\cdot 4$, then adds $11$, in one run of equals signs, so it states $11 \\cdot 4 = 55$.",
      "Every line other than line 5 follows by a rule that holds, from the data or from the lines above it as they are written, so line 5 is the first wrong line.",
      "Line 5 written right is \"$11 \\cdot 4 + 11 = 44 + 11 = 55$\"."
    ]
  },
  {
    "id": "t225-k2-p07",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for how many of the integers from $1$ to $56$ are values of $\\lfloor 3x\\rfloor + \\lfloor 4x\\rfloor + \\lfloor 7x\\rfloor$, and write that line right.",
    "given": [
      "For $0 < x \\le 1$, the term $\\lfloor 3x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{3}$, the term $\\lfloor 4x\\rfloor$ at each multiple of $\\dfrac{1}{4}$ and the term $\\lfloor 7x\\rfloor$ at each multiple of $\\dfrac{1}{7}$.",
      "The different points are $\\dfrac{1}{7}$, $\\dfrac{1}{4}$, $\\dfrac{2}{7}$, $\\dfrac{1}{3}$, $\\dfrac{3}{7}$, $\\dfrac{1}{2}$, $\\dfrac{4}{7}$, $\\dfrac{2}{3}$, $\\dfrac{5}{7}$, $\\dfrac{3}{4}$, $\\dfrac{6}{7}$ and $1$: $12$ points.",
      "$\\lfloor 3(x + 1)\\rfloor + \\lfloor 4(x + 1)\\rfloor + \\lfloor 7(x + 1)\\rfloor = \\lfloor 3x\\rfloor + 3 + \\lfloor 4x\\rfloor + 4 + \\lfloor 7x\\rfloor + 7 = \\lfloor 3x\\rfloor + \\lfloor 4x\\rfloor + \\lfloor 7x\\rfloor + 14$",
      "For $n < x \\le n + 1$ the sum takes $12$ of the $14$ integers from $14n + 1$ to $14n + 14$.",
      "The run with $n = 3$ ends at $14 \\cdot 3 + 14 = 42 + 14 = 56$.",
      "$\\dfrac{56}{14} = 4 \\cdot 12 = 48$",
      "The sum takes $48$ of the integers from $1$ to $56$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 6: 56/14*12 = 4*12 = 48",
    "solution": [
      "Find the first wrong line in this working for how many of the integers from $1$ to $56$ are values of $\\lfloor 3x\\rfloor + \\lfloor 4x\\rfloor + \\lfloor 7x\\rfloor$, and write that line right.",
      "Line 6 writes $\\dfrac{56}{14}$, then times $12$, in one run of equals signs, so it states $\\dfrac{56}{14} = 48$.",
      "Every line other than line 6 follows by a rule that holds, from the data or from the lines above it as they are written, so line 6 is the first wrong line.",
      "Line 6 written right is \"$\\dfrac{56}{14} \\cdot 12 = 4 \\cdot 12 = 48$\"."
    ]
  },
  {
    "id": "t225-k2-p08",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for how many of the integers from $1$ to $63$ are values of $\\lfloor 2x\\rfloor + \\lfloor 5x\\rfloor$, and write that line right.",
    "given": [
      "For $0 < x \\le 1$, the term $\\lfloor 2x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{2}$, and the term $\\lfloor 5x\\rfloor$ at each multiple of $\\dfrac{1}{5}$.",
      "The different points are $\\dfrac{1}{5}$, $\\dfrac{2}{5}$, $\\dfrac{1}{2}$, $\\dfrac{3}{5}$, $\\dfrac{4}{5}$ and $1$: $6$ points.",
      "$\\lfloor 2(x + 1)\\rfloor + \\lfloor 5(x + 1)\\rfloor = \\lfloor 2x\\rfloor + 2 + \\lfloor 5x\\rfloor + 5 = \\lfloor 2x\\rfloor + \\lfloor 5x\\rfloor + 7$",
      "For $n < x \\le n + 1$ the sum takes $6$ of the $7$ integers from $7n + 1$ to $7n + 7$.",
      "The run with $n = 8$ ends at $7 \\cdot 8 = 56 + 7 = 63$.",
      "$\\dfrac{63}{7} \\cdot 6 = 9 \\cdot 6 = 54$",
      "The sum takes $54$ of the integers from $1$ to $63$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 5: 7*8+7 = 56+7 = 63",
    "solution": [
      "Find the first wrong line in this working for how many of the integers from $1$ to $63$ are values of $\\lfloor 2x\\rfloor + \\lfloor 5x\\rfloor$, and write that line right.",
      "Line 5 writes $7 \\cdot 8$, then adds $7$, in one run of equals signs, so it states $7 \\cdot 8 = 63$.",
      "Every line other than line 5 follows by a rule that holds, from the data or from the lines above it as they are written, so line 5 is the first wrong line.",
      "Line 5 written right is \"$7 \\cdot 8 + 7 = 56 + 7 = 63$\"."
    ]
  },
  {
    "id": "t225-k2-p09",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for how many of the integers from $1$ to $117$ are values of $\\lfloor 2x\\rfloor + \\lfloor 5x\\rfloor + \\lfloor 6x\\rfloor$, and write that line right.",
    "given": [
      "For $0 < x \\le 1$, the term $\\lfloor 2x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{2}$, the term $\\lfloor 5x\\rfloor$ at each multiple of $\\dfrac{1}{5}$ and the term $\\lfloor 6x\\rfloor$ at each multiple of $\\dfrac{1}{6}$.",
      "The different points are $\\dfrac{1}{6}$, $\\dfrac{1}{5}$, $\\dfrac{1}{3}$, $\\dfrac{2}{5}$, $\\dfrac{1}{2}$, $\\dfrac{3}{5}$, $\\dfrac{2}{3}$, $\\dfrac{4}{5}$, $\\dfrac{5}{6}$ and $1$: $10$ points.",
      "$\\lfloor 2(x + 1)\\rfloor + \\lfloor 5(x + 1)\\rfloor + \\lfloor 6(x + 1)\\rfloor = \\lfloor 2x\\rfloor + 2 + \\lfloor 5x\\rfloor + 5 + \\lfloor 6x\\rfloor + 6 = \\lfloor 2x\\rfloor + \\lfloor 5x\\rfloor + \\lfloor 6x\\rfloor + 13$",
      "For $n < x \\le n + 1$ the sum takes $10$ of the $13$ integers from $13n + 1$ to $13n + 13$.",
      "The run with $n = 8$ ends at $13 \\cdot 8 = 104 + 13 = 117$.",
      "$\\dfrac{117}{13} \\cdot 10 = 9 \\cdot 10 = 90$",
      "The sum takes $90$ of the integers from $1$ to $117$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 5: 13*8+13 = 104+13 = 117",
    "solution": [
      "Find the first wrong line in this working for how many of the integers from $1$ to $117$ are values of $\\lfloor 2x\\rfloor + \\lfloor 5x\\rfloor + \\lfloor 6x\\rfloor$, and write that line right.",
      "Line 5 writes $13 \\cdot 8$, then adds $13$, in one run of equals signs, so it states $13 \\cdot 8 = 117$.",
      "Every line other than line 5 follows by a rule that holds, from the data or from the lines above it as they are written, so line 5 is the first wrong line.",
      "Line 5 written right is \"$13 \\cdot 8 + 13 = 104 + 13 = 117$\"."
    ]
  },
  {
    "id": "t225-k2-p10",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for how many of the integers from $1$ to $78$ are values of $\\lfloor 3x\\rfloor + \\lfloor 10x\\rfloor$, and write that line right.",
    "given": [
      "For $0 < x \\le 1$, the term $\\lfloor 3x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{3}$, and the term $\\lfloor 10x\\rfloor$ at each multiple of $\\dfrac{1}{10}$.",
      "The different points are $\\dfrac{1}{10}$, $\\dfrac{1}{5}$, $\\dfrac{3}{10}$, $\\dfrac{1}{3}$, $\\dfrac{2}{5}$, $\\dfrac{1}{2}$, $\\dfrac{3}{5}$, $\\dfrac{2}{3}$, $\\dfrac{7}{10}$, $\\dfrac{4}{5}$, $\\dfrac{9}{10}$ and $1$: $12$ points.",
      "$\\lfloor 3(x + 1)\\rfloor + \\lfloor 10(x + 1)\\rfloor = \\lfloor 3x\\rfloor + 3 + \\lfloor 10x\\rfloor + 10 = \\lfloor 3x\\rfloor + \\lfloor 10x\\rfloor + 13$",
      "For $n < x \\le n + 1$ the sum takes $12$ of the $13$ integers from $13n + 1$ to $13n + 13$.",
      "The run with $n = 5$ ends at $13 \\cdot 5 + 13 = 65 + 13 = 78$.",
      "$\\dfrac{78}{13} = 6 \\cdot 12 = 72$",
      "The sum takes $72$ of the integers from $1$ to $78$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 6: 78/13*12 = 6*12 = 72",
    "solution": [
      "Find the first wrong line in this working for how many of the integers from $1$ to $78$ are values of $\\lfloor 3x\\rfloor + \\lfloor 10x\\rfloor$, and write that line right.",
      "Line 6 writes $\\dfrac{78}{13}$, then times $12$, in one run of equals signs, so it states $\\dfrac{78}{13} = 72$.",
      "Every line other than line 6 follows by a rule that holds, from the data or from the lines above it as they are written, so line 6 is the first wrong line.",
      "Line 6 written right is \"$\\dfrac{78}{13} \\cdot 12 = 6 \\cdot 12 = 72$\"."
    ]
  },
  {
    "id": "t225-k2-p11",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for how many of the integers from $1$ to $65$ are values of $\\lfloor 4x\\rfloor + \\lfloor 9x\\rfloor$, and write that line right.",
    "given": [
      "For $0 < x \\le 1$, the term $\\lfloor 4x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{4}$, and the term $\\lfloor 9x\\rfloor$ at each multiple of $\\dfrac{1}{9}$.",
      "The different points are $\\dfrac{1}{9}$, $\\dfrac{2}{9}$, $\\dfrac{1}{4}$, $\\dfrac{1}{3}$, $\\dfrac{4}{9}$, $\\dfrac{1}{2}$, $\\dfrac{5}{9}$, $\\dfrac{2}{3}$, $\\dfrac{3}{4}$, $\\dfrac{7}{9}$, $\\dfrac{8}{9}$ and $1$: $12$ points.",
      "$\\lfloor 4(x + 1)\\rfloor + \\lfloor 9(x + 1)\\rfloor = \\lfloor 4x\\rfloor + 4 + \\lfloor 9x\\rfloor + 9 = \\lfloor 4x\\rfloor + \\lfloor 9x\\rfloor + 13$",
      "For $n < x \\le n + 1$ the sum takes $12$ of the $13$ integers from $13n + 1$ to $13n + 13$.",
      "The run with $n = 4$ ends at $13 \\cdot 4 = 52 + 13 = 65$.",
      "$\\dfrac{65}{13} \\cdot 12 = 5 \\cdot 12 = 60$",
      "The sum takes $60$ of the integers from $1$ to $65$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 5: 13*4+13 = 52+13 = 65",
    "solution": [
      "Find the first wrong line in this working for how many of the integers from $1$ to $65$ are values of $\\lfloor 4x\\rfloor + \\lfloor 9x\\rfloor$, and write that line right.",
      "Line 5 writes $13 \\cdot 4$, then adds $13$, in one run of equals signs, so it states $13 \\cdot 4 = 65$.",
      "Every line other than line 5 follows by a rule that holds, from the data or from the lines above it as they are written, so line 5 is the first wrong line.",
      "Line 5 written right is \"$13 \\cdot 4 + 13 = 52 + 13 = 65$\"."
    ]
  },
  {
    "id": "t225-k2-p12",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for how many of the integers from $1$ to $128$ are values of $\\lfloor 3x\\rfloor + \\lfloor 6x\\rfloor + \\lfloor 7x\\rfloor$, and write that line right.",
    "given": [
      "For $0 < x \\le 1$, the term $\\lfloor 3x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{3}$, the term $\\lfloor 6x\\rfloor$ at each multiple of $\\dfrac{1}{6}$ and the term $\\lfloor 7x\\rfloor$ at each multiple of $\\dfrac{1}{7}$.",
      "The different points are $\\dfrac{1}{7}$, $\\dfrac{1}{6}$, $\\dfrac{2}{7}$, $\\dfrac{1}{3}$, $\\dfrac{3}{7}$, $\\dfrac{1}{2}$, $\\dfrac{4}{7}$, $\\dfrac{2}{3}$, $\\dfrac{5}{7}$, $\\dfrac{5}{6}$, $\\dfrac{6}{7}$ and $1$: $12$ points.",
      "$\\lfloor 3(x + 1)\\rfloor + \\lfloor 6(x + 1)\\rfloor + \\lfloor 7(x + 1)\\rfloor = \\lfloor 3x\\rfloor + 3 + \\lfloor 6x\\rfloor + 6 + \\lfloor 7x\\rfloor + 7 = \\lfloor 3x\\rfloor + \\lfloor 6x\\rfloor + \\lfloor 7x\\rfloor + 16$",
      "For $n < x \\le n + 1$ the sum takes $12$ of the $16$ integers from $16n + 1$ to $16n + 16$.",
      "The run with $n = 7$ ends at $16 \\cdot 7 = 112 + 16 = 128$.",
      "$\\dfrac{128}{16} \\cdot 12 = 8 \\cdot 12 = 96$",
      "The sum takes $96$ of the integers from $1$ to $128$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 5: 16*7+16 = 112+16 = 128",
    "solution": [
      "Find the first wrong line in this working for how many of the integers from $1$ to $128$ are values of $\\lfloor 3x\\rfloor + \\lfloor 6x\\rfloor + \\lfloor 7x\\rfloor$, and write that line right.",
      "Line 5 writes $16 \\cdot 7$, then adds $16$, in one run of equals signs, so it states $16 \\cdot 7 = 128$.",
      "Every line other than line 5 follows by a rule that holds, from the data or from the lines above it as they are written, so line 5 is the first wrong line.",
      "Line 5 written right is \"$16 \\cdot 7 + 16 = 112 + 16 = 128$\"."
    ]
  },
  {
    "id": "t225-k2-p13",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for how many of the integers from $1$ to $48$ are values of $\\lfloor 3x\\rfloor + \\lfloor 4x\\rfloor + \\lfloor 5x\\rfloor$, and write that line right.",
    "given": [
      "For $0 < x \\le 1$, the term $\\lfloor 3x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{3}$, the term $\\lfloor 4x\\rfloor$ at each multiple of $\\dfrac{1}{4}$ and the term $\\lfloor 5x\\rfloor$ at each multiple of $\\dfrac{1}{5}$.",
      "The different points are $\\dfrac{1}{5}$, $\\dfrac{1}{4}$, $\\dfrac{1}{3}$, $\\dfrac{2}{5}$, $\\dfrac{1}{2}$, $\\dfrac{3}{5}$, $\\dfrac{2}{3}$, $\\dfrac{3}{4}$, $\\dfrac{4}{5}$ and $1$: $10$ points.",
      "$\\lfloor 3(x + 1)\\rfloor + \\lfloor 4(x + 1)\\rfloor + \\lfloor 5(x + 1)\\rfloor = \\lfloor 3x\\rfloor + 3 + \\lfloor 4x\\rfloor + 4 + \\lfloor 5x\\rfloor + 5 = \\lfloor 3x\\rfloor + \\lfloor 4x\\rfloor + \\lfloor 5x\\rfloor + 12$",
      "For $n < x \\le n + 1$ the sum takes $10$ of the $12$ integers from $12n + 1$ to $12n + 12$.",
      "The run with $n = 3$ ends at $12 \\cdot 3 + 12 = 36 + 12 = 48$.",
      "$\\dfrac{48}{12} = 4 \\cdot 10 = 40$",
      "The sum takes $40$ of the integers from $1$ to $48$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 6: 48/12*10 = 4*10 = 40",
    "solution": [
      "Find the first wrong line in this working for how many of the integers from $1$ to $48$ are values of $\\lfloor 3x\\rfloor + \\lfloor 4x\\rfloor + \\lfloor 5x\\rfloor$, and write that line right.",
      "Line 6 writes $\\dfrac{48}{12}$, then times $10$, in one run of equals signs, so it states $\\dfrac{48}{12} = 40$.",
      "Every line other than line 6 follows by a rule that holds, from the data or from the lines above it as they are written, so line 6 is the first wrong line.",
      "Line 6 written right is \"$\\dfrac{48}{12} \\cdot 10 = 4 \\cdot 10 = 40$\"."
    ]
  },
  {
    "id": "t225-k2-p14",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for how many of the integers from $1$ to $143$ are values of $\\lfloor 6x\\rfloor + \\lfloor 7x\\rfloor$, and write that line right.",
    "given": [
      "For $0 < x \\le 1$, the term $\\lfloor 6x\\rfloor$ steps up by $1$ at each multiple of $\\dfrac{1}{6}$, and the term $\\lfloor 7x\\rfloor$ at each multiple of $\\dfrac{1}{7}$.",
      "The different points are $\\dfrac{1}{7}$, $\\dfrac{1}{6}$, $\\dfrac{2}{7}$, $\\dfrac{1}{3}$, $\\dfrac{3}{7}$, $\\dfrac{1}{2}$, $\\dfrac{4}{7}$, $\\dfrac{2}{3}$, $\\dfrac{5}{7}$, $\\dfrac{5}{6}$, $\\dfrac{6}{7}$ and $1$: $12$ points.",
      "$\\lfloor 6(x + 1)\\rfloor + \\lfloor 7(x + 1)\\rfloor = \\lfloor 6x\\rfloor + 6 + \\lfloor 7x\\rfloor + 7 = \\lfloor 6x\\rfloor + \\lfloor 7x\\rfloor + 13$",
      "For $n < x \\le n + 1$ the sum takes $12$ of the $13$ integers from $13n + 1$ to $13n + 13$.",
      "The run with $n = 10$ ends at $13 \\cdot 10 + 13 = 130 + 13 = 143$.",
      "$\\dfrac{143}{13} = 11 \\cdot 12 = 132$",
      "The sum takes $132$ of the integers from $1$ to $143$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 6: 143/13*12 = 11*12 = 132",
    "solution": [
      "Find the first wrong line in this working for how many of the integers from $1$ to $143$ are values of $\\lfloor 6x\\rfloor + \\lfloor 7x\\rfloor$, and write that line right.",
      "Line 6 writes $\\dfrac{143}{13}$, then times $12$, in one run of equals signs, so it states $\\dfrac{143}{13} = 132$.",
      "Every line other than line 6 follows by a rule that holds, from the data or from the lines above it as they are written, so line 6 is the first wrong line.",
      "Line 6 written right is \"$\\dfrac{143}{13} \\cdot 12 = 11 \\cdot 12 = 132$\"."
    ]
  },
  {
    "id": "t225-k3-p01",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Sketch the part of the graph of $y = 2\\lfloor \\dfrac{x}{3} \\rfloor + 2\\lfloor \\dfrac{x}{5} \\rfloor + 2$ that has $-5 \\le x < 5$.",
    "form": "Sketch the graph on your own axes.",
    "features": {
      "intercepts": [
        "$(0, 2)$"
      ],
      "turning": [
        "Step $y = -4$: filled dot at $(-5, -4)$, open circle at $(-3, -4)$",
        "Step $y = -2$: filled dot at $(-3, -2)$, open circle at $(0, -2)$",
        "Step $y = 2$: filled dot at $(0, 2)$, open circle at $(3, 2)$",
        "Step $y = 4$: filled dot at $(3, 4)$, open circle at $(5, 4)$"
      ],
      "asymptotes": []
    },
    "solution": [
      "Sketch the part of the graph of $y = 2\\lfloor \\dfrac{x}{3} \\rfloor + 2\\lfloor \\dfrac{x}{5} \\rfloor + 2$ that has $-5 \\le x < 5$.",
      "Inside $-5 \\le x < 5$, the term $\\lfloor \\dfrac{x}{3} \\rfloor$ steps up where $x$ is $-3$, $0$ or $3$, and the term $\\lfloor \\dfrac{x}{5} \\rfloor$ where $x$ is $0$",
      "For $-5 \\le x < -3$: $\\lfloor \\dfrac{x}{3} \\rfloor = -2$ and $\\lfloor \\dfrac{x}{5} \\rfloor = -1$, so $y = -4$",
      "At a step point of the first term $y$ goes up $2$, at one of the second term up $2$, and at $x = 0$, where both terms step up, $4$: the steps have the heights $-4$, $-2$, $2$ and $4$",
      "Each step starts with a filled dot and ends with an open circle where the next step starts",
      "The graph meets the $y$-axis at $(0, 2)$",
      {
        "step": "The graph does not meet the $x$-axis",
        "figure": {
          "file": "floor-and-fractional-part-equations-12.svg",
          "alt": "Steps: y = −4 from x = −5 to −3; y = −2 from x = −3 to 0; y = 2 from x = 0 to 3; y = 4 from x = 3 to 5; filled dot at the left end of each step, open circle at the right end."
        }
      }
    ]
  },
  {
    "id": "t225-k3-p02",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Sketch the graph of $y = \\lfloor \\dfrac{x}{3} \\rfloor + 2\\lfloor \\dfrac{x}{4} \\rfloor + 5$ for $-4 \\le x < 4$.",
    "form": "Sketch the graph on your own axes.",
    "features": {
      "intercepts": [
        "$(0, 5)$"
      ],
      "turning": [
        "Step $y = 1$: filled dot at $(-4, 1)$, open circle at $(-3, 1)$",
        "Step $y = 2$: filled dot at $(-3, 2)$, open circle at $(0, 2)$",
        "Step $y = 5$: filled dot at $(0, 5)$, open circle at $(3, 5)$",
        "Step $y = 6$: filled dot at $(3, 6)$, open circle at $(4, 6)$"
      ],
      "asymptotes": []
    },
    "solution": [
      "Sketch the graph of $y = \\lfloor \\dfrac{x}{3} \\rfloor + 2\\lfloor \\dfrac{x}{4} \\rfloor + 5$ for $-4 \\le x < 4$.",
      "Inside $-4 \\le x < 4$, the term $\\lfloor \\dfrac{x}{3} \\rfloor$ steps up where $x$ is $-3$, $0$ or $3$, and the term $\\lfloor \\dfrac{x}{4} \\rfloor$ where $x$ is $0$",
      "For $-4 \\le x < -3$: $\\lfloor \\dfrac{x}{3} \\rfloor = -2$ and $\\lfloor \\dfrac{x}{4} \\rfloor = -1$, so $y = 1$",
      "At a step point of the first term $y$ goes up $1$, at one of the second term up $2$, and at $x = 0$, where both terms step up, $3$: the steps have the heights $1$, $2$, $5$ and $6$",
      "Each step starts with a filled dot and ends with an open circle where the next step starts",
      "The graph meets the $y$-axis at $(0, 5)$",
      {
        "step": "The graph does not meet the $x$-axis",
        "figure": {
          "file": "floor-and-fractional-part-equations-9.svg",
          "alt": "Steps: y = 1 from x = −4 to −3; y = 2 from x = −3 to 0; y = 5 from x = 0 to 3; y = 6 from x = 3 to 4; filled dot at the left end of each step, open circle at the right end."
        }
      }
    ]
  },
  {
    "id": "t225-k3-p03",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Sketch the part of the graph of $y = 3\\lfloor \\dfrac{x}{3} \\rfloor + \\lfloor \\dfrac{x}{4} \\rfloor$ that has $-6 \\le x < 3$.",
    "form": "Sketch the graph on your own axes.",
    "features": {
      "intercepts": [
        "$(0, 0)$",
        "on the $x$-axis: $0 \\le x < 3$"
      ],
      "turning": [
        "Step $y = -8$: filled dot at $(-6, -8)$, open circle at $(-4, -8)$",
        "Step $y = -7$: filled dot at $(-4, -7)$, open circle at $(-3, -7)$",
        "Step $y = -4$: filled dot at $(-3, -4)$, open circle at $(0, -4)$",
        "Step $y = 0$: filled dot at $(0, 0)$, open circle at $(3, 0)$"
      ],
      "asymptotes": []
    },
    "solution": [
      "Sketch the part of the graph of $y = 3\\lfloor \\dfrac{x}{3} \\rfloor + \\lfloor \\dfrac{x}{4} \\rfloor$ that has $-6 \\le x < 3$.",
      "Inside $-6 \\le x < 3$, the term $\\lfloor \\dfrac{x}{3} \\rfloor$ steps up where $x$ is $-3$ or $0$, and the term $\\lfloor \\dfrac{x}{4} \\rfloor$ where $x$ is $-4$ or $0$",
      "For $-6 \\le x < -4$: $\\lfloor \\dfrac{x}{3} \\rfloor = -2$ and $\\lfloor \\dfrac{x}{4} \\rfloor = -2$, so $y = -8$",
      "At a step point of the first term $y$ goes up $3$, at one of the second term up $1$, and at $x = 0$, where both terms step up, $4$: the steps have the heights $-8$, $-7$, $-4$ and $0$",
      "Each step starts with a filled dot and ends with an open circle where the next step starts",
      "The graph meets the $y$-axis at $(0, 0)$",
      {
        "step": "The graph lies on the $x$-axis for $0 \\le x < 3$",
        "figure": {
          "file": "floor-and-fractional-part-equations-10.svg",
          "alt": "Steps: y = −8 from x = −6 to −4; y = −7 from x = −4 to −3; y = −4 from x = −3 to 0; y = 0 from x = 0 to 3; filled dot at the left end of each step, open circle at the right end."
        }
      }
    ]
  },
  {
    "id": "t225-k3-p04",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Sketch the graph of $y = 3\\lfloor \\dfrac{x}{3} \\rfloor + \\lfloor \\dfrac{x}{5} \\rfloor + 3$ for $-3 \\le x < 6$.",
    "form": "Sketch the graph on your own axes.",
    "features": {
      "intercepts": [
        "$(0, 3)$"
      ],
      "turning": [
        "Step $y = -1$: filled dot at $(-3, -1)$, open circle at $(0, -1)$",
        "Step $y = 3$: filled dot at $(0, 3)$, open circle at $(3, 3)$",
        "Step $y = 6$: filled dot at $(3, 6)$, open circle at $(5, 6)$",
        "Step $y = 7$: filled dot at $(5, 7)$, open circle at $(6, 7)$"
      ],
      "asymptotes": []
    },
    "solution": [
      "Sketch the graph of $y = 3\\lfloor \\dfrac{x}{3} \\rfloor + \\lfloor \\dfrac{x}{5} \\rfloor + 3$ for $-3 \\le x < 6$.",
      "Inside $-3 \\le x < 6$, the term $\\lfloor \\dfrac{x}{3} \\rfloor$ steps up where $x$ is $0$ or $3$, and the term $\\lfloor \\dfrac{x}{5} \\rfloor$ where $x$ is $0$ or $5$",
      "For $-3 \\le x < 0$: $\\lfloor \\dfrac{x}{3} \\rfloor = -1$ and $\\lfloor \\dfrac{x}{5} \\rfloor = -1$, so $y = -1$",
      "At a step point of the first term $y$ goes up $3$, at one of the second term up $1$, and at $x = 0$, where both terms step up, $4$: the steps have the heights $-1$, $3$, $6$ and $7$",
      "Each step starts with a filled dot and ends with an open circle where the next step starts",
      "The graph meets the $y$-axis at $(0, 3)$",
      {
        "step": "The graph does not meet the $x$-axis",
        "figure": {
          "file": "floor-and-fractional-part-equations-15.svg",
          "alt": "Steps: y = −1 from x = −3 to 0; y = 3 from x = 0 to 3; y = 6 from x = 3 to 5; y = 7 from x = 5 to 6; filled dot at the left end of each step, open circle at the right end."
        }
      }
    ]
  },
  {
    "id": "t225-k3-p05",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Sketch the graph of $y = \\lfloor \\dfrac{x}{2} \\rfloor + \\lfloor \\dfrac{x}{3} \\rfloor - 4$ for $-3 \\le x < 3$.",
    "form": "Sketch the graph on your own axes.",
    "features": {
      "intercepts": [
        "$(0, -4)$"
      ],
      "turning": [
        "Step $y = -7$: filled dot at $(-3, -7)$, open circle at $(-2, -7)$",
        "Step $y = -6$: filled dot at $(-2, -6)$, open circle at $(0, -6)$",
        "Step $y = -4$: filled dot at $(0, -4)$, open circle at $(2, -4)$",
        "Step $y = -3$: filled dot at $(2, -3)$, open circle at $(3, -3)$"
      ],
      "asymptotes": []
    },
    "solution": [
      "Sketch the graph of $y = \\lfloor \\dfrac{x}{2} \\rfloor + \\lfloor \\dfrac{x}{3} \\rfloor - 4$ for $-3 \\le x < 3$.",
      "Inside $-3 \\le x < 3$, the term $\\lfloor \\dfrac{x}{2} \\rfloor$ steps up where $x$ is $-2$, $0$ or $2$, and the term $\\lfloor \\dfrac{x}{3} \\rfloor$ where $x$ is $0$",
      "For $-3 \\le x < -2$: $\\lfloor \\dfrac{x}{2} \\rfloor = -2$ and $\\lfloor \\dfrac{x}{3} \\rfloor = -1$, so $y = -7$",
      "At a step point of the first term $y$ goes up $1$, at one of the second term up $1$, and at $x = 0$, where both terms step up, $2$: the steps have the heights $-7$, $-6$, $-4$ and $-3$",
      "Each step starts with a filled dot and ends with an open circle where the next step starts",
      "The graph meets the $y$-axis at $(0, -4)$",
      {
        "step": "The graph does not meet the $x$-axis",
        "figure": {
          "file": "floor-and-fractional-part-equations-5.svg",
          "alt": "Steps: y = −7 from x = −3 to −2; y = −6 from x = −2 to 0; y = −4 from x = 0 to 2; y = −3 from x = 2 to 3; filled dot at the left end of each step, open circle at the right end."
        }
      }
    ]
  },
  {
    "id": "t225-k3-p06",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Sketch the part of the graph of $y = 2\\lfloor \\dfrac{x}{3} \\rfloor + \\lfloor \\dfrac{x}{4} \\rfloor - 4$ that has $-3 \\le x < 6$.",
    "form": "Sketch the graph on your own axes.",
    "features": {
      "intercepts": [
        "$(0, -4)$"
      ],
      "turning": [
        "Step $y = -7$: filled dot at $(-3, -7)$, open circle at $(0, -7)$",
        "Step $y = -4$: filled dot at $(0, -4)$, open circle at $(3, -4)$",
        "Step $y = -2$: filled dot at $(3, -2)$, open circle at $(4, -2)$",
        "Step $y = -1$: filled dot at $(4, -1)$, open circle at $(6, -1)$"
      ],
      "asymptotes": []
    },
    "solution": [
      "Sketch the part of the graph of $y = 2\\lfloor \\dfrac{x}{3} \\rfloor + \\lfloor \\dfrac{x}{4} \\rfloor - 4$ that has $-3 \\le x < 6$.",
      "Inside $-3 \\le x < 6$, the term $\\lfloor \\dfrac{x}{3} \\rfloor$ steps up where $x$ is $0$ or $3$, and the term $\\lfloor \\dfrac{x}{4} \\rfloor$ where $x$ is $0$ or $4$",
      "For $-3 \\le x < 0$: $\\lfloor \\dfrac{x}{3} \\rfloor = -1$ and $\\lfloor \\dfrac{x}{4} \\rfloor = -1$, so $y = -7$",
      "At a step point of the first term $y$ goes up $2$, at one of the second term up $1$, and at $x = 0$, where both terms step up, $3$: the steps have the heights $-7$, $-4$, $-2$ and $-1$",
      "Each step starts with a filled dot and ends with an open circle where the next step starts",
      "The graph meets the $y$-axis at $(0, -4)$",
      {
        "step": "The graph does not meet the $x$-axis",
        "figure": {
          "file": "floor-and-fractional-part-equations-16.svg",
          "alt": "Steps: y = −7 from x = −3 to 0; y = −4 from x = 0 to 3; y = −2 from x = 3 to 4; y = −1 from x = 4 to 6; filled dot at the left end of each step, open circle at the right end."
        }
      }
    ]
  },
  {
    "id": "t225-k3-p07",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Sketch the part of the graph of $y = \\lfloor \\dfrac{x}{2} \\rfloor + 2\\lfloor \\dfrac{x}{6} \\rfloor + 2$ that has $-6 \\le x < 4$.",
    "form": "Sketch the graph on your own axes.",
    "features": {
      "intercepts": [
        "$(0, 2)$"
      ],
      "turning": [
        "Step $y = -3$: filled dot at $(-6, -3)$, open circle at $(-4, -3)$",
        "Step $y = -2$: filled dot at $(-4, -2)$, open circle at $(-2, -2)$",
        "Step $y = -1$: filled dot at $(-2, -1)$, open circle at $(0, -1)$",
        "Step $y = 2$: filled dot at $(0, 2)$, open circle at $(2, 2)$",
        "Step $y = 3$: filled dot at $(2, 3)$, open circle at $(4, 3)$"
      ],
      "asymptotes": []
    },
    "solution": [
      "Sketch the part of the graph of $y = \\lfloor \\dfrac{x}{2} \\rfloor + 2\\lfloor \\dfrac{x}{6} \\rfloor + 2$ that has $-6 \\le x < 4$.",
      "Inside $-6 \\le x < 4$, the term $\\lfloor \\dfrac{x}{2} \\rfloor$ steps up where $x$ is $-4$, $-2$, $0$ or $2$, and the term $\\lfloor \\dfrac{x}{6} \\rfloor$ where $x$ is $0$",
      "For $-6 \\le x < -4$: $\\lfloor \\dfrac{x}{2} \\rfloor = -3$ and $\\lfloor \\dfrac{x}{6} \\rfloor = -1$, so $y = -3$",
      "At a step point of the first term $y$ goes up $1$, at one of the second term up $2$, and at $x = 0$, where both terms step up, $3$: the steps have the heights $-3$, $-2$, $-1$, $2$ and $3$",
      "Each step starts with a filled dot and ends with an open circle where the next step starts",
      "The graph meets the $y$-axis at $(0, 2)$",
      {
        "step": "The graph does not meet the $x$-axis",
        "figure": {
          "file": "floor-and-fractional-part-equations-14.svg",
          "alt": "Steps: y = −3 from x = −6 to −4; y = −2 from x = −4 to −2; y = −1 from x = −2 to 0; y = 2 from x = 0 to 2; y = 3 from x = 2 to 4; filled dot at the left end of each step, open circle at the right end."
        }
      }
    ]
  },
  {
    "id": "t225-k3-p08",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Sketch the graph of $y = \\lfloor \\dfrac{x}{2} \\rfloor + \\lfloor \\dfrac{x}{6} \\rfloor + 1$ for $-2 \\le x < 6$.",
    "form": "Sketch the graph on your own axes.",
    "features": {
      "intercepts": [
        "$(0, 1)$"
      ],
      "turning": [
        "Step $y = -1$: filled dot at $(-2, -1)$, open circle at $(0, -1)$",
        "Step $y = 1$: filled dot at $(0, 1)$, open circle at $(2, 1)$",
        "Step $y = 2$: filled dot at $(2, 2)$, open circle at $(4, 2)$",
        "Step $y = 3$: filled dot at $(4, 3)$, open circle at $(6, 3)$"
      ],
      "asymptotes": []
    },
    "solution": [
      "Sketch the graph of $y = \\lfloor \\dfrac{x}{2} \\rfloor + \\lfloor \\dfrac{x}{6} \\rfloor + 1$ for $-2 \\le x < 6$.",
      "Inside $-2 \\le x < 6$, the term $\\lfloor \\dfrac{x}{2} \\rfloor$ steps up where $x$ is $0$, $2$ or $4$, and the term $\\lfloor \\dfrac{x}{6} \\rfloor$ where $x$ is $0$",
      "For $-2 \\le x < 0$: $\\lfloor \\dfrac{x}{2} \\rfloor = -1$ and $\\lfloor \\dfrac{x}{6} \\rfloor = -1$, so $y = -1$",
      "At a step point of the first term $y$ goes up $1$, at one of the second term up $1$, and at $x = 0$, where both terms step up, $2$: the steps have the heights $-1$, $1$, $2$ and $3$",
      "Each step starts with a filled dot and ends with an open circle where the next step starts",
      "The graph meets the $y$-axis at $(0, 1)$",
      {
        "step": "The graph does not meet the $x$-axis",
        "figure": {
          "file": "floor-and-fractional-part-equations-7.svg",
          "alt": "Steps: y = −1 from x = −2 to 0; y = 1 from x = 0 to 2; y = 2 from x = 2 to 4; y = 3 from x = 4 to 6; filled dot at the left end of each step, open circle at the right end."
        }
      }
    ]
  },
  {
    "id": "t225-k3-p09",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Sketch the part of the graph of $y = \\lfloor \\dfrac{x}{4} \\rfloor + \\lfloor \\dfrac{x}{5} \\rfloor + 1$ that has $-5 \\le x < 5$.",
    "form": "Sketch the graph on your own axes.",
    "features": {
      "intercepts": [
        "$(0, 1)$"
      ],
      "turning": [
        "Step $y = -2$: filled dot at $(-5, -2)$, open circle at $(-4, -2)$",
        "Step $y = -1$: filled dot at $(-4, -1)$, open circle at $(0, -1)$",
        "Step $y = 1$: filled dot at $(0, 1)$, open circle at $(4, 1)$",
        "Step $y = 2$: filled dot at $(4, 2)$, open circle at $(5, 2)$"
      ],
      "asymptotes": []
    },
    "solution": [
      "Sketch the part of the graph of $y = \\lfloor \\dfrac{x}{4} \\rfloor + \\lfloor \\dfrac{x}{5} \\rfloor + 1$ that has $-5 \\le x < 5$.",
      "Inside $-5 \\le x < 5$, the term $\\lfloor \\dfrac{x}{4} \\rfloor$ steps up where $x$ is $-4$, $0$ or $4$, and the term $\\lfloor \\dfrac{x}{5} \\rfloor$ where $x$ is $0$",
      "For $-5 \\le x < -4$: $\\lfloor \\dfrac{x}{4} \\rfloor = -2$ and $\\lfloor \\dfrac{x}{5} \\rfloor = -1$, so $y = -2$",
      "At a step point of the first term $y$ goes up $1$, at one of the second term up $1$, and at $x = 0$, where both terms step up, $2$: the steps have the heights $-2$, $-1$, $1$ and $2$",
      "Each step starts with a filled dot and ends with an open circle where the next step starts",
      "The graph meets the $y$-axis at $(0, 1)$",
      {
        "step": "The graph does not meet the $x$-axis",
        "figure": {
          "file": "floor-and-fractional-part-equations-8.svg",
          "alt": "Steps: y = −2 from x = −5 to −4; y = −1 from x = −4 to 0; y = 1 from x = 0 to 4; y = 2 from x = 4 to 5; filled dot at the left end of each step, open circle at the right end."
        }
      }
    ]
  },
  {
    "id": "t225-k3-p10",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Sketch the part of the graph of $y = 3\\lfloor \\dfrac{x}{2} \\rfloor + \\lfloor \\dfrac{x}{6} \\rfloor + 1$ that has $-4 \\le x < 4$.",
    "form": "Sketch the graph on your own axes.",
    "features": {
      "intercepts": [
        "$(0, 1)$"
      ],
      "turning": [
        "Step $y = -6$: filled dot at $(-4, -6)$, open circle at $(-2, -6)$",
        "Step $y = -3$: filled dot at $(-2, -3)$, open circle at $(0, -3)$",
        "Step $y = 1$: filled dot at $(0, 1)$, open circle at $(2, 1)$",
        "Step $y = 4$: filled dot at $(2, 4)$, open circle at $(4, 4)$"
      ],
      "asymptotes": []
    },
    "solution": [
      "Sketch the part of the graph of $y = 3\\lfloor \\dfrac{x}{2} \\rfloor + \\lfloor \\dfrac{x}{6} \\rfloor + 1$ that has $-4 \\le x < 4$.",
      "Inside $-4 \\le x < 4$, the term $\\lfloor \\dfrac{x}{2} \\rfloor$ steps up where $x$ is $-2$, $0$ or $2$, and the term $\\lfloor \\dfrac{x}{6} \\rfloor$ where $x$ is $0$",
      "For $-4 \\le x < -2$: $\\lfloor \\dfrac{x}{2} \\rfloor = -2$ and $\\lfloor \\dfrac{x}{6} \\rfloor = -1$, so $y = -6$",
      "At a step point of the first term $y$ goes up $3$, at one of the second term up $1$, and at $x = 0$, where both terms step up, $4$: the steps have the heights $-6$, $-3$, $1$ and $4$",
      "Each step starts with a filled dot and ends with an open circle where the next step starts",
      "The graph meets the $y$-axis at $(0, 1)$",
      {
        "step": "The graph does not meet the $x$-axis",
        "figure": {
          "file": "floor-and-fractional-part-equations-18.svg",
          "alt": "Steps: y = −6 from x = −4 to −2; y = −3 from x = −2 to 0; y = 1 from x = 0 to 2; y = 4 from x = 2 to 4; filled dot at the left end of each step, open circle at the right end."
        }
      }
    ]
  },
  {
    "id": "t225-k3-p11",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Sketch the part of the graph of $y = \\lfloor \\dfrac{x}{2} \\rfloor + 2\\lfloor \\dfrac{x}{3} \\rfloor - 2$ that has $-4 \\le x < 2$.",
    "form": "Sketch the graph on your own axes.",
    "features": {
      "intercepts": [
        "$(0, -2)$"
      ],
      "turning": [
        "Step $y = -8$: filled dot at $(-4, -8)$, open circle at $(-3, -8)$",
        "Step $y = -6$: filled dot at $(-3, -6)$, open circle at $(-2, -6)$",
        "Step $y = -5$: filled dot at $(-2, -5)$, open circle at $(0, -5)$",
        "Step $y = -2$: filled dot at $(0, -2)$, open circle at $(2, -2)$"
      ],
      "asymptotes": []
    },
    "solution": [
      "Sketch the part of the graph of $y = \\lfloor \\dfrac{x}{2} \\rfloor + 2\\lfloor \\dfrac{x}{3} \\rfloor - 2$ that has $-4 \\le x < 2$.",
      "Inside $-4 \\le x < 2$, the term $\\lfloor \\dfrac{x}{2} \\rfloor$ steps up where $x$ is $-2$ or $0$, and the term $\\lfloor \\dfrac{x}{3} \\rfloor$ where $x$ is $-3$ or $0$",
      "For $-4 \\le x < -3$: $\\lfloor \\dfrac{x}{2} \\rfloor = -2$ and $\\lfloor \\dfrac{x}{3} \\rfloor = -2$, so $y = -8$",
      "At a step point of the first term $y$ goes up $1$, at one of the second term up $2$, and at $x = 0$, where both terms step up, $3$: the steps have the heights $-8$, $-6$, $-5$ and $-2$",
      "Each step starts with a filled dot and ends with an open circle where the next step starts",
      "The graph meets the $y$-axis at $(0, -2)$",
      {
        "step": "The graph does not meet the $x$-axis",
        "figure": {
          "file": "floor-and-fractional-part-equations-6.svg",
          "alt": "Steps: y = −8 from x = −4 to −3; y = −6 from x = −3 to −2; y = −5 from x = −2 to 0; y = −2 from x = 0 to 2; filled dot at the left end of each step, open circle at the right end."
        }
      }
    ]
  },
  {
    "id": "t225-k3-p12",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Sketch the graph of $y = 2\\lfloor \\dfrac{x}{2} \\rfloor + 3\\lfloor \\dfrac{x}{5} \\rfloor + 2$ for $-4 \\le x < 4$.",
    "form": "Sketch the graph on your own axes.",
    "features": {
      "intercepts": [
        "$(0, 2)$"
      ],
      "turning": [
        "Step $y = -5$: filled dot at $(-4, -5)$, open circle at $(-2, -5)$",
        "Step $y = -3$: filled dot at $(-2, -3)$, open circle at $(0, -3)$",
        "Step $y = 2$: filled dot at $(0, 2)$, open circle at $(2, 2)$",
        "Step $y = 4$: filled dot at $(2, 4)$, open circle at $(4, 4)$"
      ],
      "asymptotes": []
    },
    "solution": [
      "Sketch the graph of $y = 2\\lfloor \\dfrac{x}{2} \\rfloor + 3\\lfloor \\dfrac{x}{5} \\rfloor + 2$ for $-4 \\le x < 4$.",
      "Inside $-4 \\le x < 4$, the term $\\lfloor \\dfrac{x}{2} \\rfloor$ steps up where $x$ is $-2$, $0$ or $2$, and the term $\\lfloor \\dfrac{x}{5} \\rfloor$ where $x$ is $0$",
      "For $-4 \\le x < -2$: $\\lfloor \\dfrac{x}{2} \\rfloor = -2$ and $\\lfloor \\dfrac{x}{5} \\rfloor = -1$, so $y = -5$",
      "At a step point of the first term $y$ goes up $2$, at one of the second term up $3$, and at $x = 0$, where both terms step up, $5$: the steps have the heights $-5$, $-3$, $2$ and $4$",
      "Each step starts with a filled dot and ends with an open circle where the next step starts",
      "The graph meets the $y$-axis at $(0, 2)$",
      {
        "step": "The graph does not meet the $x$-axis",
        "figure": {
          "file": "floor-and-fractional-part-equations-13.svg",
          "alt": "Steps: y = −5 from x = −4 to −2; y = −3 from x = −2 to 0; y = 2 from x = 0 to 2; y = 4 from x = 2 to 4; filled dot at the left end of each step, open circle at the right end."
        }
      }
    ]
  },
  {
    "id": "t225-k3-p13",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Sketch the graph of $y = 2\\lfloor \\dfrac{x}{4} \\rfloor + \\lfloor \\dfrac{x}{5} \\rfloor + 1$ for $-8 \\le x < 4$.",
    "form": "Sketch the graph on your own axes.",
    "features": {
      "intercepts": [
        "$(0, 1)$"
      ],
      "turning": [
        "Step $y = -5$: filled dot at $(-8, -5)$, open circle at $(-5, -5)$",
        "Step $y = -4$: filled dot at $(-5, -4)$, open circle at $(-4, -4)$",
        "Step $y = -2$: filled dot at $(-4, -2)$, open circle at $(0, -2)$",
        "Step $y = 1$: filled dot at $(0, 1)$, open circle at $(4, 1)$"
      ],
      "asymptotes": []
    },
    "solution": [
      "Sketch the graph of $y = 2\\lfloor \\dfrac{x}{4} \\rfloor + \\lfloor \\dfrac{x}{5} \\rfloor + 1$ for $-8 \\le x < 4$.",
      "Inside $-8 \\le x < 4$, the term $\\lfloor \\dfrac{x}{4} \\rfloor$ steps up where $x$ is $-4$ or $0$, and the term $\\lfloor \\dfrac{x}{5} \\rfloor$ where $x$ is $-5$ or $0$",
      "For $-8 \\le x < -5$: $\\lfloor \\dfrac{x}{4} \\rfloor = -2$ and $\\lfloor \\dfrac{x}{5} \\rfloor = -2$, so $y = -5$",
      "At a step point of the first term $y$ goes up $2$, at one of the second term up $1$, and at $x = 0$, where both terms step up, $3$: the steps have the heights $-5$, $-4$, $-2$ and $1$",
      "Each step starts with a filled dot and ends with an open circle where the next step starts",
      "The graph meets the $y$-axis at $(0, 1)$",
      {
        "step": "The graph does not meet the $x$-axis",
        "figure": {
          "file": "floor-and-fractional-part-equations-11.svg",
          "alt": "Steps: y = −5 from x = −8 to −5; y = −4 from x = −5 to −4; y = −2 from x = −4 to 0; y = 1 from x = 0 to 4; filled dot at the left end of each step, open circle at the right end."
        }
      }
    ]
  },
  {
    "id": "t225-k3-p14",
    "topic": "floor-and-fractional-part-equations",
    "kind": "t225-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Sketch the graph of $y = 3\\lfloor \\dfrac{x}{3} \\rfloor + \\lfloor \\dfrac{x}{6} \\rfloor + 5$ for $-6 \\le x < 6$.",
    "form": "Sketch the graph on your own axes.",
    "features": {
      "intercepts": [
        "$(0, 5)$"
      ],
      "turning": [
        "Step $y = -2$: filled dot at $(-6, -2)$, open circle at $(-3, -2)$",
        "Step $y = 1$: filled dot at $(-3, 1)$, open circle at $(0, 1)$",
        "Step $y = 5$: filled dot at $(0, 5)$, open circle at $(3, 5)$",
        "Step $y = 8$: filled dot at $(3, 8)$, open circle at $(6, 8)$"
      ],
      "asymptotes": []
    },
    "solution": [
      "Sketch the graph of $y = 3\\lfloor \\dfrac{x}{3} \\rfloor + \\lfloor \\dfrac{x}{6} \\rfloor + 5$ for $-6 \\le x < 6$.",
      "Inside $-6 \\le x < 6$, the term $\\lfloor \\dfrac{x}{3} \\rfloor$ steps up where $x$ is $-3$, $0$ or $3$, and the term $\\lfloor \\dfrac{x}{6} \\rfloor$ where $x$ is $0$",
      "For $-6 \\le x < -3$: $\\lfloor \\dfrac{x}{3} \\rfloor = -2$ and $\\lfloor \\dfrac{x}{6} \\rfloor = -1$, so $y = -2$",
      "At a step point of the first term $y$ goes up $3$, at one of the second term up $1$, and at $x = 0$, where both terms step up, $4$: the steps have the heights $-2$, $1$, $5$ and $8$",
      "Each step starts with a filled dot and ends with an open circle where the next step starts",
      "The graph meets the $y$-axis at $(0, 5)$",
      {
        "step": "The graph does not meet the $x$-axis",
        "figure": {
          "file": "floor-and-fractional-part-equations-17.svg",
          "alt": "Steps: y = −2 from x = −6 to −3; y = 1 from x = −3 to 0; y = 5 from x = 0 to 3; y = 8 from x = 3 to 6; filled dot at the left end of each step, open circle at the right end."
        }
      }
    ]
  }
]
