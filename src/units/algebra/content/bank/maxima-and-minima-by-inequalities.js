export default [
  {
    "id": "t216-k1-p01",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the greatest value of $3x + 5y$ for real numbers $x$, $y$ and $z$ with $3x + 6y \\le 2z - 4$ and $2z - y \\le 17$.",
    "form": "Answer as an integer.",
    "answer": "13",
    "solution": [
      "Find the greatest value of $3x + 5y$ for real numbers $x$, $y$ and $z$ with $3x + 6y \\le 2z - 4$ and $2z - y \\le 17$.",
      "$(3x + 6y) + (2z - y) \\le (2z - 4) + 17$",
      "$3x + 5y + 2z \\le 2z + 13$",
      "$3x + 5y \\le 13$",
      "The values $x = 6$, $y = -1$ and $z = 8$ meet both conditions with equality, since $3 \\cdot 6 + 6 \\cdot \\left(-1\\right) = 2 \\cdot 8 - 4$ and $2 \\cdot 8 - \\left(-1\\right) = 17$, and they give $3 \\cdot 6 + 5 \\cdot \\left(-1\\right) = 13$.",
      "The greatest value is $13$."
    ]
  },
  {
    "id": "t216-k1-p02",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k1",
    "formNo": 4,
    "calc": "no",
    "prompt": "Find the least value of $4x + 5y + 10z$ for positive numbers $x$, $y$ and $z$ with $xyz = 40$.",
    "form": "Answer as an integer.",
    "answer": "60",
    "solution": [
      "Find the least value of $4x + 5y + 10z$ for positive numbers $x$, $y$ and $z$ with $xyz = 40$.",
      "$\\dfrac{4x + 5y + 10z}{3} \\ge \\sqrt[3]{4x \\cdot 5y \\cdot 10z}$",
      "$\\sqrt[3]{4x \\cdot 5y \\cdot 10z} = 20$",
      "$4x + 5y + 10z \\ge 60$",
      "Equality holds only when $4x = 5y = 10z$.",
      "The values $x = 5$, $y = 4$ and $z = 2$ have $4 \\cdot 5 = 5 \\cdot 4 = 10 \\cdot 2$ and $5 \\cdot 4 \\cdot 2 = 40$, and they give $4 \\cdot 5 + 5 \\cdot 4 + 10 \\cdot 2 = 60$.",
      "The least value is $60$."
    ]
  },
  {
    "id": "t216-k1-p03",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k1",
    "formNo": 6,
    "calc": "no",
    "prompt": "Find the greatest value of $xy$ for real numbers $x$ and $y$ with $x^2 + 7xy + y^2 = 144$.",
    "form": "Answer as an integer.",
    "answer": "16",
    "solution": [
      "Find the greatest value of $xy$ for real numbers $x$ and $y$ with $x^2 + 7xy + y^2 = 144$.",
      "$(x - y)^2 \\ge 0$",
      "$x^2 - 2xy + y^2 \\ge 0$",
      "$x^2 + 7xy + y^2 \\ge 9xy$",
      "$144 \\ge 9xy$",
      "$xy \\le 16$",
      "The values $x = 4$ and $y = 4$ meet the condition, since $4^2 + 7 \\cdot 4 \\cdot 4 + 4^2 = 144$, and they give $xy = 4 \\cdot 4 = 16$.",
      "The greatest value is $16$."
    ]
  },
  {
    "id": "t216-k1-p04",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k1",
    "formNo": 5,
    "calc": "no",
    "prompt": "Find the least value of $8x + \\dfrac{108}{x^2}$ for a positive number $x$.",
    "form": "Answer as an integer.",
    "answer": "36",
    "solution": [
      "Find the least value of $8x + \\dfrac{108}{x^2}$ for a positive number $x$.",
      "$8x + \\dfrac{108}{x^2} = 4x + 4x + \\dfrac{108}{x^2}$",
      "$\\dfrac{1}{3}\\left(4x + 4x + \\dfrac{108}{x^2}\\right) \\ge \\sqrt[3]{4x \\cdot 4x \\cdot \\dfrac{108}{x^2}}$",
      "$\\sqrt[3]{4x \\cdot 4x \\cdot \\dfrac{108}{x^2}} = 12$",
      "$8x + \\dfrac{108}{x^2} \\ge 36$",
      "Equality holds only when $4x = \\dfrac{108}{x^2}$, that is when $x^3 = 27$, so at $x = 3$.",
      "At $x = 3$ the expression is $8 \\cdot 3 + \\dfrac{108}{3^2} = 36$.",
      "The least value is $36$."
    ]
  },
  {
    "id": "t216-k1-p05",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k1",
    "formNo": 8,
    "calc": "no",
    "prompt": "Find the greatest value of $4x + 5y$ for real numbers $x$ and $y$ with $x^2 + y^2 = 369$.",
    "form": "Answer as an integer.",
    "answer": "123",
    "solution": [
      "Find the greatest value of $4x + 5y$ for real numbers $x$ and $y$ with $x^2 + y^2 = 369$.",
      "$(4^2 + 5^2)(x^2 + y^2) \\ge (4x + 5y)^2$",
      "$(4x + 5y)^2 \\le 41 \\cdot 369$",
      "$|4x + 5y| \\le 123$",
      "$4x + 5y \\le 123$",
      "Equality holds only when $x = 4c$ and $y = 5c$ for some real number $c$.",
      "The condition then reads $(4c)^2 + (5c)^2 = 369$, so $c^2 = 9$; with $c = 3$ this gives $x = 12$ and $y = 15$.",
      "These values give $4 \\cdot 12 + 5 \\cdot 15 = 123$.",
      "The greatest value is $123$."
    ]
  },
  {
    "id": "t216-k1-p06",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k1",
    "formNo": 8,
    "calc": "no",
    "prompt": "Find the greatest value of $2x + 7y$ for real numbers $x$ and $y$ with $x^2 + y^2 = 212$.",
    "form": "Answer as an integer.",
    "answer": "106",
    "solution": [
      "Find the greatest value of $2x + 7y$ for real numbers $x$ and $y$ with $x^2 + y^2 = 212$.",
      "$(2^2 + 7^2)(x^2 + y^2) \\ge (2x + 7y)^2$",
      "$(2x + 7y)^2 \\le 53 \\cdot 212$",
      "$|2x + 7y| \\le 106$",
      "$2x + 7y \\le 106$",
      "Equality holds only when $x = 2c$ and $y = 7c$ for some real number $c$.",
      "The condition then reads $(2c)^2 + (7c)^2 = 212$, so $c^2 = 4$; with $c = 2$ this gives $x = 4$ and $y = 14$.",
      "These values give $2 \\cdot 4 + 7 \\cdot 14 = 106$.",
      "The greatest value is $106$."
    ]
  },
  {
    "id": "t216-k1-p07",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k1",
    "formNo": 4,
    "calc": "no",
    "prompt": "Find the least value of $x + 5y + 25z$ for positive numbers $x$, $y$ and $z$ with $xyz = 125$.",
    "form": "Answer as an integer.",
    "answer": "75",
    "solution": [
      "Find the least value of $x + 5y + 25z$ for positive numbers $x$, $y$ and $z$ with $xyz = 125$.",
      "$\\dfrac{x + 5y + 25z}{3} \\ge \\sqrt[3]{x \\cdot 5y \\cdot 25z}$",
      "$\\sqrt[3]{x \\cdot 5y \\cdot 25z} = 25$",
      "$x + 5y + 25z \\ge 75$",
      "Equality holds only when $x = 5y = 25z$.",
      "The values $x = 25$, $y = 5$ and $z = 1$ have $25 = 5 \\cdot 5 = 25 \\cdot 1$ and $25 \\cdot 5 \\cdot 1 = 125$, and they give $25 + 5 \\cdot 5 + 25 \\cdot 1 = 75$.",
      "The least value is $75$."
    ]
  },
  {
    "id": "t216-k1-p08",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k1",
    "formNo": 6,
    "calc": "no",
    "prompt": "Find the greatest value of $xy$ for real numbers $x$ and $y$ with $x^2 + 8xy + y^2 = 70$.",
    "form": "Answer as an integer.",
    "answer": "7",
    "solution": [
      "Find the greatest value of $xy$ for real numbers $x$ and $y$ with $x^2 + 8xy + y^2 = 70$.",
      "$(x - y)^2 \\ge 0$",
      "$x^2 - 2xy + y^2 \\ge 0$",
      "$x^2 + 8xy + y^2 \\ge 10xy$",
      "$70 \\ge 10xy$",
      "$xy \\le 7$",
      "The values $x = \\sqrt{7}$ and $y = \\sqrt{7}$ meet the condition, since $(\\sqrt{7})^2 + 8 \\cdot \\sqrt{7} \\cdot \\sqrt{7} + (\\sqrt{7})^2 = 70$, and they give $xy = \\sqrt{7} \\cdot \\sqrt{7} = 7$.",
      "The greatest value is $7$."
    ]
  },
  {
    "id": "t216-k1-p09",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k1",
    "formNo": 5,
    "calc": "no",
    "prompt": "Find the least value of $10x + \\dfrac{320}{x^2}$ for a positive number $x$.",
    "form": "Answer as an integer.",
    "answer": "60",
    "solution": [
      "Find the least value of $10x + \\dfrac{320}{x^2}$ for a positive number $x$.",
      "$10x + \\dfrac{320}{x^2} = 5x + 5x + \\dfrac{320}{x^2}$",
      "$\\dfrac{1}{3}\\left(5x + 5x + \\dfrac{320}{x^2}\\right) \\ge \\sqrt[3]{5x \\cdot 5x \\cdot \\dfrac{320}{x^2}}$",
      "$\\sqrt[3]{5x \\cdot 5x \\cdot \\dfrac{320}{x^2}} = 20$",
      "$10x + \\dfrac{320}{x^2} \\ge 60$",
      "Equality holds only when $5x = \\dfrac{320}{x^2}$, that is when $x^3 = 64$, so at $x = 4$.",
      "At $x = 4$ the expression is $10 \\cdot 4 + \\dfrac{320}{4^2} = 60$.",
      "The least value is $60$."
    ]
  },
  {
    "id": "t216-k1-p10",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k1",
    "formNo": 6,
    "calc": "no",
    "prompt": "Find the greatest value of $xy$ for real numbers $x$ and $y$ with $x^2 + 5xy + 4y^2 = 18$.",
    "form": "Answer as an integer.",
    "answer": "2",
    "solution": [
      "Find the greatest value of $xy$ for real numbers $x$ and $y$ with $x^2 + 5xy + 4y^2 = 18$.",
      "$(x - 2y)^2 \\ge 0$",
      "$x^2 - 4xy + 4y^2 \\ge 0$",
      "$x^2 + 5xy + 4y^2 \\ge 9xy$",
      "$18 \\ge 9xy$",
      "$xy \\le 2$",
      "The values $x = 2$ and $y = 1$ meet the condition, since $2^2 + 5 \\cdot 2 \\cdot 1 + 4 \\cdot 1^2 = 18$, and they give $xy = 2 \\cdot 1 = 2$.",
      "The greatest value is $2$."
    ]
  },
  {
    "id": "t216-k1-p11",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the least value of $\\dfrac{9x^2 + 25}{8x}$ for a positive number $x$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "15/4",
    "solution": [
      "Find the least value of $\\dfrac{9x^2 + 25}{8x}$ for a positive number $x$.",
      "$\\dfrac{9x^2 + 25}{8x} = \\dfrac{9x}{8} + \\dfrac{25}{8x}$",
      "$\\dfrac{1}{2}\\left(\\dfrac{9x}{8} + \\dfrac{25}{8x}\\right) \\ge \\sqrt{\\dfrac{9x}{8} \\cdot \\dfrac{25}{8x}}$",
      "$\\sqrt{\\dfrac{9x}{8} \\cdot \\dfrac{25}{8x}} = \\dfrac{15}{8}$",
      "$\\dfrac{9x}{8} + \\dfrac{25}{8x} \\ge \\dfrac{15}{4}$",
      "Equality holds only when $\\dfrac{9x}{8} = \\dfrac{25}{8x}$, that is at $x = \\dfrac{5}{3}$.",
      "At $x = \\dfrac{5}{3}$ the expression is $\\dfrac{9 \\cdot \\left(\\dfrac{5}{3}\\right)^2 + 25}{8 \\cdot \\dfrac{5}{3}} = \\dfrac{15}{4}$.",
      "The least value is $\\dfrac{15}{4}$."
    ]
  },
  {
    "id": "t216-k1-p12",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k1",
    "formNo": 9,
    "calc": "no",
    "prompt": "Find the greatest value of $n$ for whole numbers $n$, $m$ and $k$ with $n < 2m$, $m < 7k$ and $k < 11$.",
    "form": "Answer as an integer.",
    "answer": "137",
    "solution": [
      "Find the greatest value of $n$ for whole numbers $n$, $m$ and $k$ with $n < 2m$, $m < 7k$ and $k < 11$.",
      "Since $k$ is a whole number, $7k \\le 70$.",
      "Since $m$ is a whole number, $m \\le 69$.",
      "$2m \\le 138$",
      "Since $n$ is a whole number, $n \\le 137$.",
      "The values $n = 137$, $m = 69$ and $k = 10$ meet the three conditions, since $2 \\cdot 69 = 138$ is above $137$, $7 \\cdot 10 = 70$ is above $69$, and $10$ is below $11$.",
      "The greatest value is $137$."
    ]
  },
  {
    "id": "t216-k1-p13",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k1",
    "formNo": 8,
    "calc": "no",
    "prompt": "Find the greatest value of $2x + 6y + 9z$ for real numbers $x$, $y$ and $z$ with $x^2 + y^2 + z^2 = 4$.",
    "form": "Answer as an integer.",
    "answer": "22",
    "solution": [
      "Find the greatest value of $2x + 6y + 9z$ for real numbers $x$, $y$ and $z$ with $x^2 + y^2 + z^2 = 4$.",
      "$(2^2 + 6^2 + 9^2)(x^2 + y^2 + z^2) \\ge (2x + 6y + 9z)^2$",
      "$(2x + 6y + 9z)^2 \\le 121 \\cdot 4$",
      "$|2x + 6y + 9z| \\le 22$",
      "$2x + 6y + 9z \\le 22$",
      "Equality holds only when $x = 2c$, $y = 6c$ and $z = 9c$ for some real number $c$.",
      "The condition then reads $(2c)^2 + (6c)^2 + (9c)^2 = 4$, so $c^2 = \\dfrac{4}{121}$; with $c = \\dfrac{2}{11}$ this gives $x = \\dfrac{4}{11}$, $y = \\dfrac{12}{11}$ and $z = \\dfrac{18}{11}$.",
      "These values give $2 \\cdot \\dfrac{4}{11} + 6 \\cdot \\dfrac{12}{11} + 9 \\cdot \\dfrac{18}{11} = 22$.",
      "The greatest value is $22$."
    ]
  },
  {
    "id": "t216-k1-p14",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find the least value of $\\dfrac{x^2 - 12x + 40}{5x - 30}$ for a number $x$ greater than $6$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "4/5",
    "solution": [
      "Find the least value of $\\dfrac{x^2 - 12x + 40}{5x - 30}$ for a number $x$ greater than $6$.",
      "$x^2 - 12x + 40 = (x - 6)^2 + 4$",
      "$\\dfrac{x^2 - 12x + 40}{5x - 30} = \\dfrac{x - 6}{5} + \\dfrac{4}{5(x - 6)}$",
      "$\\dfrac{1}{2}\\left(\\dfrac{x - 6}{5} + \\dfrac{4}{5(x - 6)}\\right) \\ge \\sqrt{\\dfrac{x - 6}{5} \\cdot \\dfrac{4}{5(x - 6)}}$",
      "$\\sqrt{\\dfrac{x - 6}{5} \\cdot \\dfrac{4}{5(x - 6)}} = \\dfrac{2}{5}$",
      "$\\dfrac{x - 6}{5} + \\dfrac{4}{5(x - 6)} \\ge \\dfrac{4}{5}$",
      "Equality holds only when $\\dfrac{x - 6}{5} = \\dfrac{4}{5(x - 6)}$, that is at $x = 8$.",
      "At $x = 8$ the expression is $\\dfrac{8^2 - 12 \\cdot 8 + 40}{5 \\cdot 8 - 30} = \\dfrac{4}{5}$.",
      "The least value is $\\dfrac{4}{5}$."
    ]
  },
  {
    "id": "t216-k1-p15",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k1",
    "formNo": 9,
    "calc": "no",
    "prompt": "Find the greatest value of $n$ for whole numbers $n$, $m$ and $k$ with $n < 4m$, $m < 2k$ and $k < 15$.",
    "form": "Answer as an integer.",
    "answer": "107",
    "solution": [
      "Find the greatest value of $n$ for whole numbers $n$, $m$ and $k$ with $n < 4m$, $m < 2k$ and $k < 15$.",
      "Since $k$ is a whole number, $2k \\le 28$.",
      "Since $m$ is a whole number, $m \\le 27$.",
      "$4m \\le 108$",
      "Since $n$ is a whole number, $n \\le 107$.",
      "The values $n = 107$, $m = 27$ and $k = 14$ meet the three conditions, since $4 \\cdot 27 = 108$ is above $107$, $2 \\cdot 14 = 28$ is above $27$, and $14$ is below $15$.",
      "The greatest value is $107$."
    ]
  },
  {
    "id": "t216-k1-p16",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the least value of $6x - 3y$ for real numbers $x$, $y$ and $z$ with $6x + y \\ge 3z - 7$ and $3z - 4y \\ge -5$.",
    "form": "Answer as an integer.",
    "answer": "-12",
    "solution": [
      "Find the least value of $6x - 3y$ for real numbers $x$, $y$ and $z$ with $6x + y \\ge 3z - 7$ and $3z - 4y \\ge -5$.",
      "$(6x + y) + (3z - 4y) \\ge (3z - 7) + \\left(-5\\right)$",
      "$6x - 3y + 3z \\ge 3z - 12$",
      "$6x - 3y \\ge -12$",
      "The values $x = -1$, $y = 2$ and $z = 1$ meet both conditions with equality, since $6 \\cdot \\left(-1\\right) + 2 = 3 \\cdot 1 - 7$ and $3 \\cdot 1 - 4 \\cdot 2 = -5$, and they give $6 \\cdot \\left(-1\\right) - 3 \\cdot 2 = -12$.",
      "The least value is $-12$."
    ]
  },
  {
    "id": "t216-k1-p17",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k1",
    "formNo": 5,
    "calc": "no",
    "prompt": "Find the least value of $12x^2 + \\dfrac{3}{x}$ for a positive number $x$.",
    "form": "Answer as an integer.",
    "answer": "9",
    "solution": [
      "Find the least value of $12x^2 + \\dfrac{3}{x}$ for a positive number $x$.",
      "$12x^2 + \\dfrac{3}{x} = 12x^2 + \\dfrac{3}{2x} + \\dfrac{3}{2x}$",
      "$\\dfrac{1}{3}\\left(12x^2 + \\dfrac{3}{2x} + \\dfrac{3}{2x}\\right) \\ge \\sqrt[3]{12x^2 \\cdot \\dfrac{3}{2x} \\cdot \\dfrac{3}{2x}}$",
      "$\\sqrt[3]{12x^2 \\cdot \\dfrac{3}{2x} \\cdot \\dfrac{3}{2x}} = 3$",
      "$12x^2 + \\dfrac{3}{x} \\ge 9$",
      "Equality holds only when $12x^2 = \\dfrac{3}{2x}$, that is when $x^3 = \\dfrac{1}{8}$, so at $x = \\dfrac{1}{2}$.",
      "At $x = \\dfrac{1}{2}$ the expression is $12 \\cdot \\left(\\dfrac{1}{2}\\right)^2 + \\dfrac{3}{\\dfrac{1}{2}} = 9$.",
      "The least value is $9$."
    ]
  },
  {
    "id": "t216-k1-p18",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k1",
    "formNo": 7,
    "calc": "no",
    "prompt": "Find the least value of $x^2 + y^2 + z^2$ for real numbers $x$, $y$ and $z$ with $2x + y + 2z = 27$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "81",
    "solution": [
      "Find the least value of $x^2 + y^2 + z^2$ for real numbers $x$, $y$ and $z$ with $2x + y + 2z = 27$.",
      "$(2^2 + 1^2 + 2^2)(x^2 + y^2 + z^2) \\ge (2x + y + 2z)^2$",
      "$9(x^2 + y^2 + z^2) \\ge 27^2$",
      "$x^2 + y^2 + z^2 \\ge 81$",
      "Equality holds only when $x = 2c$, $y = c$ and $z = 2c$ for some real number $c$.",
      "The condition then reads $2 \\cdot 2c + c + 2 \\cdot 2c = 27$, so $c = 3$, which gives $x = 6$, $y = 3$ and $z = 6$.",
      "These values give $x^2 + y^2 + z^2 = 6^2 + 3^2 + 6^2 = 81$.",
      "The least value is $81$."
    ]
  },
  {
    "id": "t216-k1-p19",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k1",
    "formNo": 4,
    "calc": "no",
    "prompt": "Find the least value of $3x + 5y + 15z$ for positive numbers $x$, $y$ and $z$ with $xyz = 15$.",
    "form": "Answer as an integer.",
    "answer": "45",
    "solution": [
      "Find the least value of $3x + 5y + 15z$ for positive numbers $x$, $y$ and $z$ with $xyz = 15$.",
      "$\\dfrac{3x + 5y + 15z}{3} \\ge \\sqrt[3]{3x \\cdot 5y \\cdot 15z}$",
      "$\\sqrt[3]{3x \\cdot 5y \\cdot 15z} = 15$",
      "$3x + 5y + 15z \\ge 45$",
      "Equality holds only when $3x = 5y = 15z$.",
      "The values $x = 5$, $y = 3$ and $z = 1$ have $3 \\cdot 5 = 5 \\cdot 3 = 15 \\cdot 1$ and $5 \\cdot 3 \\cdot 1 = 15$, and they give $3 \\cdot 5 + 5 \\cdot 3 + 15 \\cdot 1 = 45$.",
      "The least value is $45$."
    ]
  },
  {
    "id": "t216-k1-p20",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find the least value of $\\dfrac{9x^2 - 18x + 25}{7x - 7}$ for a number $x$ greater than $1$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "24/7",
    "solution": [
      "Find the least value of $\\dfrac{9x^2 - 18x + 25}{7x - 7}$ for a number $x$ greater than $1$.",
      "$9x^2 - 18x + 25 = 9(x - 1)^2 + 16$",
      "$\\dfrac{9x^2 - 18x + 25}{7x - 7} = \\dfrac{9(x - 1)}{7} + \\dfrac{16}{7(x - 1)}$",
      "$\\dfrac{1}{2}\\left(\\dfrac{9(x - 1)}{7} + \\dfrac{16}{7(x - 1)}\\right) \\ge \\sqrt{\\dfrac{9(x - 1)}{7} \\cdot \\dfrac{16}{7(x - 1)}}$",
      "$\\sqrt{\\dfrac{9(x - 1)}{7} \\cdot \\dfrac{16}{7(x - 1)}} = \\dfrac{12}{7}$",
      "$\\dfrac{9(x - 1)}{7} + \\dfrac{16}{7(x - 1)} \\ge \\dfrac{24}{7}$",
      "Equality holds only when $\\dfrac{9(x - 1)}{7} = \\dfrac{16}{7(x - 1)}$, that is at $x = \\dfrac{7}{3}$.",
      "At $x = \\dfrac{7}{3}$ the expression is $\\dfrac{9 \\cdot \\left(\\dfrac{7}{3}\\right)^2 - 18 \\cdot \\dfrac{7}{3} + 25}{7 \\cdot \\dfrac{7}{3} - 7} = \\dfrac{24}{7}$.",
      "The least value is $\\dfrac{24}{7}$."
    ]
  },
  {
    "id": "t216-k1-p21",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k1",
    "formNo": 7,
    "calc": "no",
    "prompt": "Find the least value of $x^2 + y^2 + z^2$ for real numbers $x$, $y$ and $z$ with $x + 2y + 3z = 7$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "7/2",
    "solution": [
      "Find the least value of $x^2 + y^2 + z^2$ for real numbers $x$, $y$ and $z$ with $x + 2y + 3z = 7$.",
      "$(1^2 + 2^2 + 3^2)(x^2 + y^2 + z^2) \\ge (x + 2y + 3z)^2$",
      "$14(x^2 + y^2 + z^2) \\ge 7^2$",
      "$x^2 + y^2 + z^2 \\ge \\dfrac{7}{2}$",
      "Equality holds only when $x = c$, $y = 2c$ and $z = 3c$ for some real number $c$.",
      "The condition then reads $c + 2 \\cdot 2c + 3 \\cdot 3c = 7$, so $c = \\dfrac{1}{2}$, which gives $x = \\dfrac{1}{2}$, $y = 1$ and $z = \\dfrac{3}{2}$.",
      "These values give $x^2 + y^2 + z^2 = \\left(\\dfrac{1}{2}\\right)^2 + 1^2 + \\left(\\dfrac{3}{2}\\right)^2 = \\dfrac{7}{2}$.",
      "The least value is $\\dfrac{7}{2}$."
    ]
  },
  {
    "id": "t216-k1-p22",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k1",
    "formNo": 6,
    "calc": "no",
    "prompt": "Find the greatest value of $xy$ for real numbers $x$ and $y$ with $x^2 + 4xy + 9y^2 = 30$.",
    "form": "Answer as an integer.",
    "answer": "3",
    "solution": [
      "Find the greatest value of $xy$ for real numbers $x$ and $y$ with $x^2 + 4xy + 9y^2 = 30$.",
      "$(x - 3y)^2 \\ge 0$",
      "$x^2 - 6xy + 9y^2 \\ge 0$",
      "$x^2 + 4xy + 9y^2 \\ge 10xy$",
      "$30 \\ge 10xy$",
      "$xy \\le 3$",
      "The values $x = 3$ and $y = 1$ meet the condition, since $3^2 + 4 \\cdot 3 \\cdot 1 + 9 \\cdot 1^2 = 30$, and they give $xy = 3 \\cdot 1 = 3$.",
      "The greatest value is $3$."
    ]
  },
  {
    "id": "t216-k1-p23",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the least value of $\\dfrac{x^2 + 25}{4x}$ for a positive number $x$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "5/2",
    "solution": [
      "Find the least value of $\\dfrac{x^2 + 25}{4x}$ for a positive number $x$.",
      "$\\dfrac{x^2 + 25}{4x} = \\dfrac{x}{4} + \\dfrac{25}{4x}$",
      "$\\dfrac{1}{2}\\left(\\dfrac{x}{4} + \\dfrac{25}{4x}\\right) \\ge \\sqrt{\\dfrac{x}{4} \\cdot \\dfrac{25}{4x}}$",
      "$\\sqrt{\\dfrac{x}{4} \\cdot \\dfrac{25}{4x}} = \\dfrac{5}{4}$",
      "$\\dfrac{x}{4} + \\dfrac{25}{4x} \\ge \\dfrac{5}{2}$",
      "Equality holds only when $\\dfrac{x}{4} = \\dfrac{25}{4x}$, that is at $x = 5$.",
      "At $x = 5$ the expression is $\\dfrac{5^2 + 25}{4 \\cdot 5} = \\dfrac{5}{2}$.",
      "The least value is $\\dfrac{5}{2}$."
    ]
  },
  {
    "id": "t216-k1-p24",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k1",
    "formNo": 4,
    "calc": "no",
    "prompt": "Find the least value of $2x + 3y + 9z$ for positive numbers $x$, $y$ and $z$ with $xyz = 108$.",
    "form": "Answer as an integer.",
    "answer": "54",
    "solution": [
      "Find the least value of $2x + 3y + 9z$ for positive numbers $x$, $y$ and $z$ with $xyz = 108$.",
      "$\\dfrac{2x + 3y + 9z}{3} \\ge \\sqrt[3]{2x \\cdot 3y \\cdot 9z}$",
      "$\\sqrt[3]{2x \\cdot 3y \\cdot 9z} = 18$",
      "$2x + 3y + 9z \\ge 54$",
      "Equality holds only when $2x = 3y = 9z$.",
      "The values $x = 9$, $y = 6$ and $z = 2$ have $2 \\cdot 9 = 3 \\cdot 6 = 9 \\cdot 2$ and $9 \\cdot 6 \\cdot 2 = 108$, and they give $2 \\cdot 9 + 3 \\cdot 6 + 9 \\cdot 2 = 54$.",
      "The least value is $54$."
    ]
  },
  {
    "id": "t216-k1-p25",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the greatest value of $5x - 4y$ for real numbers $x$, $y$ and $z$ with $5x + 2y \\le 4z + 9$ and $4z - 6y \\le -6$.",
    "form": "Answer as an integer.",
    "answer": "3",
    "solution": [
      "Find the greatest value of $5x - 4y$ for real numbers $x$, $y$ and $z$ with $5x + 2y \\le 4z + 9$ and $4z - 6y \\le -6$.",
      "$(5x + 2y) + (4z - 6y) \\le (4z + 9) + \\left(-6\\right)$",
      "$5x - 4y + 4z \\le 4z + 3$",
      "$5x - 4y \\le 3$",
      "The values $x = 3$, $y = 3$ and $z = 3$ meet both conditions with equality, since $5 \\cdot 3 + 2 \\cdot 3 = 4 \\cdot 3 + 9$ and $4 \\cdot 3 - 6 \\cdot 3 = -6$, and they give $5 \\cdot 3 - 4 \\cdot 3 = 3$.",
      "The greatest value is $3$."
    ]
  },
  {
    "id": "t216-k1-p26",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k1",
    "formNo": 7,
    "calc": "no",
    "prompt": "Find the least value of $x^2 + y^2$ for real numbers $x$ and $y$ with $6x + 7y = 17$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "17/5",
    "solution": [
      "Find the least value of $x^2 + y^2$ for real numbers $x$ and $y$ with $6x + 7y = 17$.",
      "$(6^2 + 7^2)(x^2 + y^2) \\ge (6x + 7y)^2$",
      "$85(x^2 + y^2) \\ge 17^2$",
      "$x^2 + y^2 \\ge \\dfrac{17}{5}$",
      "Equality holds only when $x = 6c$ and $y = 7c$ for some real number $c$.",
      "The condition then reads $6 \\cdot 6c + 7 \\cdot 7c = 17$, so $c = \\dfrac{1}{5}$, which gives $x = \\dfrac{6}{5}$ and $y = \\dfrac{7}{5}$.",
      "These values give $x^2 + y^2 = \\left(\\dfrac{6}{5}\\right)^2 + \\left(\\dfrac{7}{5}\\right)^2 = \\dfrac{17}{5}$.",
      "The least value is $\\dfrac{17}{5}$."
    ]
  },
  {
    "id": "t216-k1-p27",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k1",
    "formNo": 9,
    "calc": "no",
    "prompt": "Find the greatest value of $n$ for whole numbers $n$, $m$ and $k$ with $n < 6m$, $m < 4k$ and $k < 5$.",
    "form": "Answer as an integer.",
    "answer": "89",
    "solution": [
      "Find the greatest value of $n$ for whole numbers $n$, $m$ and $k$ with $n < 6m$, $m < 4k$ and $k < 5$.",
      "Since $k$ is a whole number, $4k \\le 16$.",
      "Since $m$ is a whole number, $m \\le 15$.",
      "$6m \\le 90$",
      "Since $n$ is a whole number, $n \\le 89$.",
      "The values $n = 89$, $m = 15$ and $k = 4$ meet the three conditions, since $6 \\cdot 15 = 90$ is above $89$, $4 \\cdot 4 = 16$ is above $15$, and $4$ is below $5$.",
      "The greatest value is $89$."
    ]
  },
  {
    "id": "t216-k1-p28",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k1",
    "formNo": 5,
    "calc": "no",
    "prompt": "Find the least value of $5x^2 + \\dfrac{10}{x}$ for a positive number $x$.",
    "form": "Answer as an integer.",
    "answer": "15",
    "solution": [
      "Find the least value of $5x^2 + \\dfrac{10}{x}$ for a positive number $x$.",
      "$5x^2 + \\dfrac{10}{x} = 5x^2 + \\dfrac{5}{x} + \\dfrac{5}{x}$",
      "$\\dfrac{1}{3}\\left(5x^2 + \\dfrac{5}{x} + \\dfrac{5}{x}\\right) \\ge \\sqrt[3]{5x^2 \\cdot \\dfrac{5}{x} \\cdot \\dfrac{5}{x}}$",
      "$\\sqrt[3]{5x^2 \\cdot \\dfrac{5}{x} \\cdot \\dfrac{5}{x}} = 5$",
      "$5x^2 + \\dfrac{10}{x} \\ge 15$",
      "Equality holds only when $5x^2 = \\dfrac{5}{x}$, that is when $x^3 = 1$, so at $x = 1$.",
      "At $x = 1$ the expression is $5 \\cdot 1^2 + \\dfrac{10}{1} = 15$.",
      "The least value is $15$."
    ]
  },
  {
    "id": "t216-k1-p29",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k1",
    "formNo": 7,
    "calc": "no",
    "prompt": "Find the least value of $x^2 + y^2$ for real numbers $x$ and $y$ with $x + 3y = 20$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "40",
    "solution": [
      "Find the least value of $x^2 + y^2$ for real numbers $x$ and $y$ with $x + 3y = 20$.",
      "$(1^2 + 3^2)(x^2 + y^2) \\ge (x + 3y)^2$",
      "$10(x^2 + y^2) \\ge 20^2$",
      "$x^2 + y^2 \\ge 40$",
      "Equality holds only when $x = c$ and $y = 3c$ for some real number $c$.",
      "The condition then reads $c + 3 \\cdot 3c = 20$, so $c = 2$, which gives $x = 2$ and $y = 6$.",
      "These values give $x^2 + y^2 = 2^2 + 6^2 = 40$.",
      "The least value is $40$."
    ]
  },
  {
    "id": "t216-k1-p30",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the least value of $\\dfrac{16x^2 + 9}{13x}$ for a positive number $x$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "24/13",
    "solution": [
      "Find the least value of $\\dfrac{16x^2 + 9}{13x}$ for a positive number $x$.",
      "$\\dfrac{16x^2 + 9}{13x} = \\dfrac{16x}{13} + \\dfrac{9}{13x}$",
      "$\\dfrac{1}{2}\\left(\\dfrac{16x}{13} + \\dfrac{9}{13x}\\right) \\ge \\sqrt{\\dfrac{16x}{13} \\cdot \\dfrac{9}{13x}}$",
      "$\\sqrt{\\dfrac{16x}{13} \\cdot \\dfrac{9}{13x}} = \\dfrac{12}{13}$",
      "$\\dfrac{16x}{13} + \\dfrac{9}{13x} \\ge \\dfrac{24}{13}$",
      "Equality holds only when $\\dfrac{16x}{13} = \\dfrac{9}{13x}$, that is at $x = \\dfrac{3}{4}$.",
      "At $x = \\dfrac{3}{4}$ the expression is $\\dfrac{16 \\cdot \\left(\\dfrac{3}{4}\\right)^2 + 9}{13 \\cdot \\dfrac{3}{4}} = \\dfrac{24}{13}$.",
      "The least value is $\\dfrac{24}{13}$."
    ]
  },
  {
    "id": "t216-k1-p31",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k1",
    "formNo": 6,
    "calc": "no",
    "prompt": "Find the greatest value of $xy$ for real numbers $x$ and $y$ with $x^2 + 10xy + y^2 = 300$.",
    "form": "Answer as an integer.",
    "answer": "25",
    "solution": [
      "Find the greatest value of $xy$ for real numbers $x$ and $y$ with $x^2 + 10xy + y^2 = 300$.",
      "$(x - y)^2 \\ge 0$",
      "$x^2 - 2xy + y^2 \\ge 0$",
      "$x^2 + 10xy + y^2 \\ge 12xy$",
      "$300 \\ge 12xy$",
      "$xy \\le 25$",
      "The values $x = 5$ and $y = 5$ meet the condition, since $5^2 + 10 \\cdot 5 \\cdot 5 + 5^2 = 300$, and they give $xy = 5 \\cdot 5 = 25$.",
      "The greatest value is $25$."
    ]
  },
  {
    "id": "t216-k1-p32",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find the least value of $\\dfrac{4x^2 - 16x + 17}{3x - 6}$ for a number $x$ greater than $2$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "4/3",
    "solution": [
      "Find the least value of $\\dfrac{4x^2 - 16x + 17}{3x - 6}$ for a number $x$ greater than $2$.",
      "$4x^2 - 16x + 17 = 4(x - 2)^2 + 1$",
      "$\\dfrac{4x^2 - 16x + 17}{3x - 6} = \\dfrac{4(x - 2)}{3} + \\dfrac{1}{3(x - 2)}$",
      "$\\dfrac{1}{2}\\left(\\dfrac{4(x - 2)}{3} + \\dfrac{1}{3(x - 2)}\\right) \\ge \\sqrt{\\dfrac{4(x - 2)}{3} \\cdot \\dfrac{1}{3(x - 2)}}$",
      "$\\sqrt{\\dfrac{4(x - 2)}{3} \\cdot \\dfrac{1}{3(x - 2)}} = \\dfrac{2}{3}$",
      "$\\dfrac{4(x - 2)}{3} + \\dfrac{1}{3(x - 2)} \\ge \\dfrac{4}{3}$",
      "Equality holds only when $\\dfrac{4(x - 2)}{3} = \\dfrac{1}{3(x - 2)}$, that is at $x = \\dfrac{5}{2}$.",
      "At $x = \\dfrac{5}{2}$ the expression is $\\dfrac{4 \\cdot \\left(\\dfrac{5}{2}\\right)^2 - 16 \\cdot \\dfrac{5}{2} + 17}{3 \\cdot \\dfrac{5}{2} - 6} = \\dfrac{4}{3}$.",
      "The least value is $\\dfrac{4}{3}$."
    ]
  },
  {
    "id": "t216-k1-p33",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k1",
    "formNo": 8,
    "calc": "no",
    "prompt": "Find the greatest value of $7x + 24y$ for real numbers $x$ and $y$ with $x^2 + y^2 = 4$.",
    "form": "Answer as an integer.",
    "answer": "50",
    "solution": [
      "Find the greatest value of $7x + 24y$ for real numbers $x$ and $y$ with $x^2 + y^2 = 4$.",
      "$(7^2 + 24^2)(x^2 + y^2) \\ge (7x + 24y)^2$",
      "$(7x + 24y)^2 \\le 625 \\cdot 4$",
      "$|7x + 24y| \\le 50$",
      "$7x + 24y \\le 50$",
      "Equality holds only when $x = 7c$ and $y = 24c$ for some real number $c$.",
      "The condition then reads $(7c)^2 + (24c)^2 = 4$, so $c^2 = \\dfrac{4}{625}$; with $c = \\dfrac{2}{25}$ this gives $x = \\dfrac{14}{25}$ and $y = \\dfrac{48}{25}$.",
      "These values give $7 \\cdot \\dfrac{14}{25} + 24 \\cdot \\dfrac{48}{25} = 50$.",
      "The greatest value is $50$."
    ]
  },
  {
    "id": "t216-k2-p01",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k2",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find the least area of sheet, in square centimetres, that makes an open crate with volume $1372$ cubic centimetres: a bottom and four sides, all rectangles, and no top.",
    "form": "Answer as an integer.",
    "answer": "588",
    "solution": [
      "Find the least area of sheet, in square centimetres, that makes an open crate with volume $1372$ cubic centimetres: a bottom and four sides, all rectangles, and no top.",
      "With a height of $x$ centimetres and a bottom of $y$ by $z$ centimetres, the volume gives $xyz = 1372$, and the area of sheet is $2xy + 2xz + yz$.",
      "$\\dfrac{2xy + 2xz + yz}{3} \\ge \\sqrt[3]{2xy \\cdot 2xz \\cdot yz}$",
      "$\\sqrt[3]{2xy \\cdot 2xz \\cdot yz} = 196$",
      "$2xy + 2xz + yz \\ge 588$",
      "Equality holds only when $2xy = 2xz = yz$, that is when $y = z = 2x$.",
      "The box of height $7$ centimetres on a square bottom of side $14$ centimetres has volume $7 \\cdot 14 \\cdot 14 = 1372$ cubic centimetres and uses $2 \\cdot 7 \\cdot 14 + 2 \\cdot 7 \\cdot 14 + 14 \\cdot 14 = 588$ square centimetres of sheet.",
      "The least area of sheet is $588$ square centimetres."
    ]
  },
  {
    "id": "t216-k2-p02",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the greatest area, in square centimetres, of a rectangular rug with perimeter $84$ centimetres.",
    "form": "Answer as an integer.",
    "answer": "441",
    "solution": [
      "Find the greatest area, in square centimetres, of a rectangular rug with perimeter $84$ centimetres.",
      "With sides of $x$ and $y$ centimetres, the perimeter gives $2x + 2y = 84$, so $x + y = 42$, and the area is $xy$.",
      "$\\sqrt{xy} \\le \\dfrac{x + y}{2}$",
      "$\\sqrt{xy} \\le 21$",
      "$xy \\le 441$",
      "Equality holds only when $x = y$, that is for the square of side $21$ centimetres.",
      "The square of side $21$ centimetres has perimeter $4 \\cdot 21 = 84$ centimetres and area $21^2 = 441$ square centimetres.",
      "The greatest area is $441$ square centimetres."
    ]
  },
  {
    "id": "t216-k2-p03",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k2",
    "formNo": 4,
    "calc": "no",
    "prompt": "Find the greatest volume, in cubic centimetres, of a closed trunk with surface area $1734$ square centimetres: a top, a bottom and four sides, all rectangles.",
    "form": "Answer as an integer.",
    "answer": "4913",
    "solution": [
      "Find the greatest volume, in cubic centimetres, of a closed trunk with surface area $1734$ square centimetres: a top, a bottom and four sides, all rectangles.",
      "With edges of $x$, $y$ and $z$ centimetres, the surface area gives $2xy + 2yz + 2zx = 1734$, so $xy + yz + zx = 867$, and the volume is $xyz$.",
      "$\\sqrt[3]{xy \\cdot yz \\cdot zx} \\le \\dfrac{xy + yz + zx}{3}$",
      "$\\sqrt[3]{(xyz)^2} \\le 289$",
      "$(xyz)^2 \\le 289^3$",
      "$xyz \\le 4913$",
      "Equality holds only when $xy = yz = zx$, that is when $x = y = z$.",
      "The cube of edge $17$ centimetres has surface area $6 \\cdot 17^2 = 1734$ square centimetres and volume $17^3 = 4913$ cubic centimetres.",
      "The greatest volume is $4913$ cubic centimetres."
    ]
  },
  {
    "id": "t216-k2-p04",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k2",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find the least area of sheet, in square centimetres, that makes an open basin with volume $2048$ cubic centimetres: a bottom and four sides, all rectangles, and no top.",
    "form": "Answer as an integer.",
    "answer": "768",
    "solution": [
      "Find the least area of sheet, in square centimetres, that makes an open basin with volume $2048$ cubic centimetres: a bottom and four sides, all rectangles, and no top.",
      "With a height of $x$ centimetres and a bottom of $y$ by $z$ centimetres, the volume gives $xyz = 2048$, and the area of sheet is $2xy + 2xz + yz$.",
      "$\\dfrac{2xy + 2xz + yz}{3} \\ge \\sqrt[3]{2xy \\cdot 2xz \\cdot yz}$",
      "$\\sqrt[3]{2xy \\cdot 2xz \\cdot yz} = 256$",
      "$2xy + 2xz + yz \\ge 768$",
      "Equality holds only when $2xy = 2xz = yz$, that is when $y = z = 2x$.",
      "The box of height $8$ centimetres on a square bottom of side $16$ centimetres has volume $8 \\cdot 16 \\cdot 16 = 2048$ cubic centimetres and uses $2 \\cdot 8 \\cdot 16 + 2 \\cdot 8 \\cdot 16 + 16 \\cdot 16 = 768$ square centimetres of sheet.",
      "The least area of sheet is $768$ square centimetres."
    ]
  },
  {
    "id": "t216-k2-p05",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k2",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find the least area of sheet, in square centimetres, that makes an open trough with volume $2916$ cubic centimetres: a bottom and four sides, all rectangles, and no top.",
    "form": "Answer as an integer.",
    "answer": "972",
    "solution": [
      "Find the least area of sheet, in square centimetres, that makes an open trough with volume $2916$ cubic centimetres: a bottom and four sides, all rectangles, and no top.",
      "With a height of $x$ centimetres and a bottom of $y$ by $z$ centimetres, the volume gives $xyz = 2916$, and the area of sheet is $2xy + 2xz + yz$.",
      "$\\dfrac{2xy + 2xz + yz}{3} \\ge \\sqrt[3]{2xy \\cdot 2xz \\cdot yz}$",
      "$\\sqrt[3]{2xy \\cdot 2xz \\cdot yz} = 324$",
      "$2xy + 2xz + yz \\ge 972$",
      "Equality holds only when $2xy = 2xz = yz$, that is when $y = z = 2x$.",
      "The box of height $9$ centimetres on a square bottom of side $18$ centimetres has volume $9 \\cdot 18 \\cdot 18 = 2916$ cubic centimetres and uses $2 \\cdot 9 \\cdot 18 + 2 \\cdot 9 \\cdot 18 + 18 \\cdot 18 = 972$ square centimetres of sheet.",
      "The least area of sheet is $972$ square centimetres."
    ]
  },
  {
    "id": "t216-k2-p06",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the greatest area, in square centimetres, of a rectangular card with perimeter $76$ centimetres.",
    "form": "Answer as an integer.",
    "answer": "361",
    "solution": [
      "Find the greatest area, in square centimetres, of a rectangular card with perimeter $76$ centimetres.",
      "With sides of $x$ and $y$ centimetres, the perimeter gives $2x + 2y = 76$, so $x + y = 38$, and the area is $xy$.",
      "$\\sqrt{xy} \\le \\dfrac{x + y}{2}$",
      "$\\sqrt{xy} \\le 19$",
      "$xy \\le 361$",
      "Equality holds only when $x = y$, that is for the square of side $19$ centimetres.",
      "The square of side $19$ centimetres has perimeter $4 \\cdot 19 = 76$ centimetres and area $19^2 = 361$ square centimetres.",
      "The greatest area is $361$ square centimetres."
    ]
  },
  {
    "id": "t216-k2-p07",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the least surface area, in square centimetres, of a closed chest with volume $729$ cubic centimetres: a top, a bottom and four sides, all rectangles.",
    "form": "Answer as an integer.",
    "answer": "486",
    "solution": [
      "Find the least surface area, in square centimetres, of a closed chest with volume $729$ cubic centimetres: a top, a bottom and four sides, all rectangles.",
      "With edges of $x$, $y$ and $z$ centimetres, the volume gives $xyz = 729$, and the surface area is $2xy + 2yz + 2zx$.",
      "$\\dfrac{xy + yz + zx}{3} \\ge \\sqrt[3]{xy \\cdot yz \\cdot zx}$",
      "$\\sqrt[3]{xy \\cdot yz \\cdot zx} = 81$",
      "$2xy + 2yz + 2zx \\ge 486$",
      "Equality holds only when $xy = yz = zx$, that is when $x = y = z$.",
      "The cube of edge $9$ centimetres has volume $9^3 = 729$ cubic centimetres and surface area $6 \\cdot 9^2 = 486$ square centimetres.",
      "The least surface area is $486$ square centimetres."
    ]
  },
  {
    "id": "t216-k2-p08",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the greatest area, in square metres, of a rectangular garden bed edged by a border of length $68$ metres.",
    "form": "Answer as an integer.",
    "answer": "289",
    "solution": [
      "Find the greatest area, in square metres, of a rectangular garden bed edged by a border of length $68$ metres.",
      "With sides of $x$ and $y$ metres, the perimeter gives $2x + 2y = 68$, so $x + y = 34$, and the area is $xy$.",
      "$\\sqrt{xy} \\le \\dfrac{x + y}{2}$",
      "$\\sqrt{xy} \\le 17$",
      "$xy \\le 289$",
      "Equality holds only when $x = y$, that is for the square of side $17$ metres.",
      "The square of side $17$ metres has perimeter $4 \\cdot 17 = 68$ metres and area $17^2 = 289$ square metres.",
      "The greatest area is $289$ square metres."
    ]
  },
  {
    "id": "t216-k2-p09",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the least surface area, in square centimetres, of a closed trunk with volume $8000$ cubic centimetres: a top, a bottom and four sides, all rectangles.",
    "form": "Answer as an integer.",
    "answer": "2400",
    "solution": [
      "Find the least surface area, in square centimetres, of a closed trunk with volume $8000$ cubic centimetres: a top, a bottom and four sides, all rectangles.",
      "With edges of $x$, $y$ and $z$ centimetres, the volume gives $xyz = 8000$, and the surface area is $2xy + 2yz + 2zx$.",
      "$\\dfrac{xy + yz + zx}{3} \\ge \\sqrt[3]{xy \\cdot yz \\cdot zx}$",
      "$\\sqrt[3]{xy \\cdot yz \\cdot zx} = 400$",
      "$2xy + 2yz + 2zx \\ge 2400$",
      "Equality holds only when $xy = yz = zx$, that is when $x = y = z$.",
      "The cube of edge $20$ centimetres has volume $20^3 = 8000$ cubic centimetres and surface area $6 \\cdot 20^2 = 2400$ square centimetres.",
      "The least surface area is $2400$ square centimetres."
    ]
  },
  {
    "id": "t216-k2-p10",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k2",
    "formNo": 4,
    "calc": "no",
    "prompt": "Find the greatest volume, in cubic centimetres, of a closed container with surface area $1350$ square centimetres: a top, a bottom and four sides, all rectangles.",
    "form": "Answer as an integer.",
    "answer": "3375",
    "solution": [
      "Find the greatest volume, in cubic centimetres, of a closed container with surface area $1350$ square centimetres: a top, a bottom and four sides, all rectangles.",
      "With edges of $x$, $y$ and $z$ centimetres, the surface area gives $2xy + 2yz + 2zx = 1350$, so $xy + yz + zx = 675$, and the volume is $xyz$.",
      "$\\sqrt[3]{xy \\cdot yz \\cdot zx} \\le \\dfrac{xy + yz + zx}{3}$",
      "$\\sqrt[3]{(xyz)^2} \\le 225$",
      "$(xyz)^2 \\le 225^3$",
      "$xyz \\le 3375$",
      "Equality holds only when $xy = yz = zx$, that is when $x = y = z$.",
      "The cube of edge $15$ centimetres has surface area $6 \\cdot 15^2 = 1350$ square centimetres and volume $15^3 = 3375$ cubic centimetres.",
      "The greatest volume is $3375$ cubic centimetres."
    ]
  },
  {
    "id": "t216-k2-p11",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k2",
    "formNo": 4,
    "calc": "no",
    "prompt": "Find the greatest volume, in cubic centimetres, of a closed case with surface area $1014$ square centimetres: a top, a bottom and four sides, all rectangles.",
    "form": "Answer as an integer.",
    "answer": "2197",
    "solution": [
      "Find the greatest volume, in cubic centimetres, of a closed case with surface area $1014$ square centimetres: a top, a bottom and four sides, all rectangles.",
      "With edges of $x$, $y$ and $z$ centimetres, the surface area gives $2xy + 2yz + 2zx = 1014$, so $xy + yz + zx = 507$, and the volume is $xyz$.",
      "$\\sqrt[3]{xy \\cdot yz \\cdot zx} \\le \\dfrac{xy + yz + zx}{3}$",
      "$\\sqrt[3]{(xyz)^2} \\le 169$",
      "$(xyz)^2 \\le 169^3$",
      "$xyz \\le 2197$",
      "Equality holds only when $xy = yz = zx$, that is when $x = y = z$.",
      "The cube of edge $13$ centimetres has surface area $6 \\cdot 13^2 = 1014$ square centimetres and volume $13^3 = 2197$ cubic centimetres.",
      "The greatest volume is $2197$ cubic centimetres."
    ]
  },
  {
    "id": "t216-k2-p12",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k2",
    "formNo": 4,
    "calc": "no",
    "prompt": "Find the greatest volume, in cubic centimetres, of a closed chest with surface area $1176$ square centimetres: a top, a bottom and four sides, all rectangles.",
    "form": "Answer as an integer.",
    "answer": "2744",
    "solution": [
      "Find the greatest volume, in cubic centimetres, of a closed chest with surface area $1176$ square centimetres: a top, a bottom and four sides, all rectangles.",
      "With edges of $x$, $y$ and $z$ centimetres, the surface area gives $2xy + 2yz + 2zx = 1176$, so $xy + yz + zx = 588$, and the volume is $xyz$.",
      "$\\sqrt[3]{xy \\cdot yz \\cdot zx} \\le \\dfrac{xy + yz + zx}{3}$",
      "$\\sqrt[3]{(xyz)^2} \\le 196$",
      "$(xyz)^2 \\le 196^3$",
      "$xyz \\le 2744$",
      "Equality holds only when $xy = yz = zx$, that is when $x = y = z$.",
      "The cube of edge $14$ centimetres has surface area $6 \\cdot 14^2 = 1176$ square centimetres and volume $14^3 = 2744$ cubic centimetres.",
      "The greatest volume is $2744$ cubic centimetres."
    ]
  },
  {
    "id": "t216-k2-p13",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the least surface area, in square centimetres, of a closed case with volume $512$ cubic centimetres: a top, a bottom and four sides, all rectangles.",
    "form": "Answer as an integer.",
    "answer": "384",
    "solution": [
      "Find the least surface area, in square centimetres, of a closed case with volume $512$ cubic centimetres: a top, a bottom and four sides, all rectangles.",
      "With edges of $x$, $y$ and $z$ centimetres, the volume gives $xyz = 512$, and the surface area is $2xy + 2yz + 2zx$.",
      "$\\dfrac{xy + yz + zx}{3} \\ge \\sqrt[3]{xy \\cdot yz \\cdot zx}$",
      "$\\sqrt[3]{xy \\cdot yz \\cdot zx} = 64$",
      "$2xy + 2yz + 2zx \\ge 384$",
      "Equality holds only when $xy = yz = zx$, that is when $x = y = z$.",
      "The cube of edge $8$ centimetres has volume $8^3 = 512$ cubic centimetres and surface area $6 \\cdot 8^2 = 384$ square centimetres.",
      "The least surface area is $384$ square centimetres."
    ]
  },
  {
    "id": "t216-k2-p14",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k2",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find the least area of sheet, in square centimetres, that makes an open planter with volume $500$ cubic centimetres: a bottom and four sides, all rectangles, and no top.",
    "form": "Answer as an integer.",
    "answer": "300",
    "solution": [
      "Find the least area of sheet, in square centimetres, that makes an open planter with volume $500$ cubic centimetres: a bottom and four sides, all rectangles, and no top.",
      "With a height of $x$ centimetres and a bottom of $y$ by $z$ centimetres, the volume gives $xyz = 500$, and the area of sheet is $2xy + 2xz + yz$.",
      "$\\dfrac{2xy + 2xz + yz}{3} \\ge \\sqrt[3]{2xy \\cdot 2xz \\cdot yz}$",
      "$\\sqrt[3]{2xy \\cdot 2xz \\cdot yz} = 100$",
      "$2xy + 2xz + yz \\ge 300$",
      "Equality holds only when $2xy = 2xz = yz$, that is when $y = z = 2x$.",
      "The box of height $5$ centimetres on a square bottom of side $10$ centimetres has volume $5 \\cdot 10 \\cdot 10 = 500$ cubic centimetres and uses $2 \\cdot 5 \\cdot 10 + 2 \\cdot 5 \\cdot 10 + 10 \\cdot 10 = 300$ square centimetres of sheet.",
      "The least area of sheet is $300$ square centimetres."
    ]
  },
  {
    "id": "t216-k2-p15",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the least surface area, in square centimetres, of a closed container with volume $1331$ cubic centimetres: a top, a bottom and four sides, all rectangles.",
    "form": "Answer as an integer.",
    "answer": "726",
    "solution": [
      "Find the least surface area, in square centimetres, of a closed container with volume $1331$ cubic centimetres: a top, a bottom and four sides, all rectangles.",
      "With edges of $x$, $y$ and $z$ centimetres, the volume gives $xyz = 1331$, and the surface area is $2xy + 2yz + 2zx$.",
      "$\\dfrac{xy + yz + zx}{3} \\ge \\sqrt[3]{xy \\cdot yz \\cdot zx}$",
      "$\\sqrt[3]{xy \\cdot yz \\cdot zx} = 121$",
      "$2xy + 2yz + 2zx \\ge 726$",
      "Equality holds only when $xy = yz = zx$, that is when $x = y = z$.",
      "The cube of edge $11$ centimetres has volume $11^3 = 1331$ cubic centimetres and surface area $6 \\cdot 11^2 = 726$ square centimetres.",
      "The least surface area is $726$ square centimetres."
    ]
  },
  {
    "id": "t216-k2-p16",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the greatest area, in square centimetres, of a rectangular tile with perimeter $60$ centimetres.",
    "form": "Answer as an integer.",
    "answer": "225",
    "solution": [
      "Find the greatest area, in square centimetres, of a rectangular tile with perimeter $60$ centimetres.",
      "With sides of $x$ and $y$ centimetres, the perimeter gives $2x + 2y = 60$, so $x + y = 30$, and the area is $xy$.",
      "$\\sqrt{xy} \\le \\dfrac{x + y}{2}$",
      "$\\sqrt{xy} \\le 15$",
      "$xy \\le 225$",
      "Equality holds only when $x = y$, that is for the square of side $15$ centimetres.",
      "The square of side $15$ centimetres has perimeter $4 \\cdot 15 = 60$ centimetres and area $15^2 = 225$ square centimetres.",
      "The greatest area is $225$ square centimetres."
    ]
  },
  {
    "id": "t216-k3-p01",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, and write that line right. Real numbers $x$ and $y$ have $x^2 + y^2 = 340$; the working bounds $9x - 2y$ from above.",
    "given": [
      "$(9x - 2y)^2 \\le (9 + (-2))^2(x^2 + y^2)$",
      "$(9 + (-2))^2(x^2 + y^2) = 49 \\cdot 340$",
      "$(9x - 2y)^2 \\le 49 \\cdot 340$",
      "$9x - 2y \\le 14\\sqrt{85}$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 1: (9*x-2*y)^2 <= (9^2+(-2)^2)*(x^2+y^2)",
    "solution": [
      "Find the first wrong line in this working, and write that line right. Real numbers $x$ and $y$ have $x^2 + y^2 = 340$; the working bounds $9x - 2y$ from above.",
      "For the first sequence $9$, $-2$ and the second sequence $x$, $y$, the inequality reads $(9x - 2y)^2 \\le (9^2 + (-2)^2)(x^2 + y^2)$, and $9^2 + (-2)^2 = 85$.",
      "Line 1 writes $(9 + (-2))^2$ where the inequality has $9^2 + (-2)^2$.",
      "Line 1 written right is $(9x - 2y)^2 \\le (9^2 + (-2)^2)(x^2 + y^2)$."
    ]
  },
  {
    "id": "t216-k3-p02",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, and write that line right. Real numbers $x$, $y$ and $z$ have $2x + 9y \\le 4z + 3$ and $4z - 5y \\le 10$; the working adds the two conditions.",
    "given": [
      "$(2x + 9y) + (4z - 5y) \\le (4z + 3) + 10$",
      "$2x + 14y + 4z \\le 4z + 13$",
      "$2x + 14y \\le 13$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: 2*x+4*y+4*z <= 4*z+13",
    "solution": [
      "Find the first wrong line in this working, and write that line right. Real numbers $x$, $y$ and $z$ have $2x + 9y \\le 4z + 3$ and $4z - 5y \\le 10$; the working adds the two conditions.",
      "Adding the two conditions gives $(2x + 9y) + (4z - 5y) \\le (4z + 3) + 10$, and collecting like terms gives $2x + 4y + 4z \\le 4z + 13$.",
      "Line 1 agrees with this. Line 2 collects $9y - 5y$ as $14y$.",
      "Line 2 written right is $2x + 4y + 4z \\le 4z + 13$."
    ]
  },
  {
    "id": "t216-k3-p03",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, and write that line right. Real numbers $x$, $y$ and $z$ have $4x + 3y \\ge z + 7$ and $z - 8y \\ge -2$; the working adds the two conditions.",
    "given": [
      "$(4x + 3y) + (z - 8y) \\ge (z + 7) - 2$",
      "$4x - 5y + z \\ge z + 9$",
      "$4x - 5y \\ge 9$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: 4*x-5*y+z >= z+5",
    "solution": [
      "Find the first wrong line in this working, and write that line right. Real numbers $x$, $y$ and $z$ have $4x + 3y \\ge z + 7$ and $z - 8y \\ge -2$; the working adds the two conditions.",
      "Adding the two conditions gives $(4x + 3y) + (z - 8y) \\ge (z + 7) - 2$, and collecting like terms gives $4x - 5y + z \\ge z + 5$.",
      "Line 1 agrees with this. Line 2 works out $7 - 2$ on the right as $9$.",
      "Line 2 written right is $4x - 5y + z \\ge z + 5$."
    ]
  },
  {
    "id": "t216-k3-p04",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, and write that line right. Real numbers $x$, $y$ and $z$ have $4x + 7y \\le 3z - 6$ and $3z - 2y \\le 8$; the working adds the two conditions.",
    "given": [
      "$(4x + 7y) + (3z + 2y) \\le (3z - 6) + 8$",
      "$4x + 9y + 3z \\le 3z + 2$",
      "$4x + 9y \\le 2$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 1: (4*x+7*y)+(3*z-2*y) <= (3*z-6)+8",
    "solution": [
      "Find the first wrong line in this working, and write that line right. Real numbers $x$, $y$ and $z$ have $4x + 7y \\le 3z - 6$ and $3z - 2y \\le 8$; the working adds the two conditions.",
      "Adding the two conditions gives $(4x + 7y) + (3z - 2y) \\le (3z - 6) + 8$, and collecting like terms gives $4x + 5y + 3z \\le 3z + 2$.",
      "Line 1 copies the left side of the second condition, $3z - 2y$, as $3z + 2y$.",
      "Line 1 written right is $(4x + 7y) + (3z - 2y) \\le (3z - 6) + 8$."
    ]
  },
  {
    "id": "t216-k3-p05",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, and write that line right. Real numbers $x$, $y$ and $z$ have $5x + 6y \\ge 3z + 4$ and $3z - 2y \\ge 11$; the working adds the two conditions.",
    "given": [
      "$(5x + 6y) + (3z + 2y) \\ge (3z + 4) + 11$",
      "$5x + 8y + 3z \\ge 3z + 15$",
      "$5x + 8y \\ge 15$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 1: (5*x+6*y)+(3*z-2*y) >= (3*z+4)+11",
    "solution": [
      "Find the first wrong line in this working, and write that line right. Real numbers $x$, $y$ and $z$ have $5x + 6y \\ge 3z + 4$ and $3z - 2y \\ge 11$; the working adds the two conditions.",
      "Adding the two conditions gives $(5x + 6y) + (3z - 2y) \\ge (3z + 4) + 11$, and collecting like terms gives $5x + 4y + 3z \\ge 3z + 15$.",
      "Line 1 copies the left side of the second condition, $3z - 2y$, as $3z + 2y$.",
      "Line 1 written right is $(5x + 6y) + (3z - 2y) \\ge (3z + 4) + 11$."
    ]
  },
  {
    "id": "t216-k3-p06",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, and write that line right. Real numbers $x$ and $y$ have $x^2 + y^2 = 34$; the working bounds $5x - 3y$ from above.",
    "given": [
      "$(5x - 3y)^2 \\le (5 + (-3))^2(x^2 + y^2)$",
      "$(5 + (-3))^2(x^2 + y^2) = 4 \\cdot 34$",
      "$(5x - 3y)^2 \\le 4 \\cdot 34$",
      "$5x - 3y \\le 2\\sqrt{34}$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 1: (5*x-3*y)^2 <= (5^2+(-3)^2)*(x^2+y^2)",
    "solution": [
      "Find the first wrong line in this working, and write that line right. Real numbers $x$ and $y$ have $x^2 + y^2 = 34$; the working bounds $5x - 3y$ from above.",
      "For the first sequence $5$, $-3$ and the second sequence $x$, $y$, the inequality reads $(5x - 3y)^2 \\le (5^2 + (-3)^2)(x^2 + y^2)$, and $5^2 + (-3)^2 = 34$.",
      "Line 1 writes $(5 + (-3))^2$ where the inequality has $5^2 + (-3)^2$.",
      "Line 1 written right is $(5x - 3y)^2 \\le (5^2 + (-3)^2)(x^2 + y^2)$."
    ]
  },
  {
    "id": "t216-k3-p07",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, and write that line right. Real numbers $x$ and $y$ have $x^2 + y^2 = 477$; the working bounds $7x - 2y$ from above.",
    "given": [
      "$(7x - 2y)^2 \\le (7^2 + (-2)^2)(x^2 + y^2)$",
      "$(7^2 + (-2)^2)(x^2 + y^2) = 25 \\cdot 477$",
      "$(7x - 2y)^2 \\le 25 \\cdot 477$",
      "$7x - 2y \\le 15\\sqrt{53}$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: (7^2+(-2)^2)*(x^2+y^2) = 53*477",
    "solution": [
      "Find the first wrong line in this working, and write that line right. Real numbers $x$ and $y$ have $x^2 + y^2 = 477$; the working bounds $7x - 2y$ from above.",
      "For the first sequence $7$, $-2$ and the second sequence $x$, $y$, the inequality reads $(7x - 2y)^2 \\le (7^2 + (-2)^2)(x^2 + y^2)$, and $7^2 + (-2)^2 = 53$.",
      "Line 1 agrees with this. Line 2 works out $7^2 + (-2)^2$ as $(7 + (-2))^2 = 25$.",
      "Line 2 written right is $(7^2 + (-2)^2)(x^2 + y^2) = 53 \\cdot 477$."
    ]
  },
  {
    "id": "t216-k3-p08",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, and write that line right. Real numbers $x$, $y$ and $z$ have $3x + 8y \\ge 5z + 10$ and $5z - 3y \\ge -6$; the working adds the two conditions.",
    "given": [
      "$(3x + 8y) + (5z - 3y) \\ge (5z + 10) - 6$",
      "$3x + 5y + 5z \\ge 5z + 16$",
      "$3x + 5y \\ge 16$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: 3*x+5*y+5*z >= 5*z+4",
    "solution": [
      "Find the first wrong line in this working, and write that line right. Real numbers $x$, $y$ and $z$ have $3x + 8y \\ge 5z + 10$ and $5z - 3y \\ge -6$; the working adds the two conditions.",
      "Adding the two conditions gives $(3x + 8y) + (5z - 3y) \\ge (5z + 10) - 6$, and collecting like terms gives $3x + 5y + 5z \\ge 5z + 4$.",
      "Line 1 agrees with this. Line 2 works out $10 - 6$ on the right as $16$.",
      "Line 2 written right is $3x + 5y + 5z \\ge 5z + 4$."
    ]
  },
  {
    "id": "t216-k3-p09",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, and write that line right. Real numbers $x$ and $y$ have $x^2 + y^2 = 90$; the working bounds $3x - y$ from above.",
    "given": [
      "$(3x - y)^2 \\le (3 + (-1))^2(x^2 + y^2)$",
      "$(3 + (-1))^2(x^2 + y^2) = 4 \\cdot 90$",
      "$(3x - y)^2 \\le 4 \\cdot 90$",
      "$3x - y \\le 6\\sqrt{10}$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 1: (3*x-y)^2 <= (3^2+(-1)^2)*(x^2+y^2)",
    "solution": [
      "Find the first wrong line in this working, and write that line right. Real numbers $x$ and $y$ have $x^2 + y^2 = 90$; the working bounds $3x - y$ from above.",
      "For the first sequence $3$, $-1$ and the second sequence $x$, $y$, the inequality reads $(3x - y)^2 \\le (3^2 + (-1)^2)(x^2 + y^2)$, and $3^2 + (-1)^2 = 10$.",
      "Line 1 writes $(3 + (-1))^2$ where the inequality has $3^2 + (-1)^2$.",
      "Line 1 written right is $(3x - y)^2 \\le (3^2 + (-1)^2)(x^2 + y^2)$."
    ]
  },
  {
    "id": "t216-k3-p10",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, and write that line right. Real numbers $x$ and $y$ have $x^2 + y^2 = 388$; the working bounds $9x - 4y$ from above.",
    "given": [
      "$(9x - 4y)^2 \\le (9 + (-4))^2(x^2 + y^2)$",
      "$(9 + (-4))^2(x^2 + y^2) = 25 \\cdot 388$",
      "$(9x - 4y)^2 \\le 25 \\cdot 388$",
      "$9x - 4y \\le 10\\sqrt{97}$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 1: (9*x-4*y)^2 <= (9^2+(-4)^2)*(x^2+y^2)",
    "solution": [
      "Find the first wrong line in this working, and write that line right. Real numbers $x$ and $y$ have $x^2 + y^2 = 388$; the working bounds $9x - 4y$ from above.",
      "For the first sequence $9$, $-4$ and the second sequence $x$, $y$, the inequality reads $(9x - 4y)^2 \\le (9^2 + (-4)^2)(x^2 + y^2)$, and $9^2 + (-4)^2 = 97$.",
      "Line 1 writes $(9 + (-4))^2$ where the inequality has $9^2 + (-4)^2$.",
      "Line 1 written right is $(9x - 4y)^2 \\le (9^2 + (-4)^2)(x^2 + y^2)$."
    ]
  },
  {
    "id": "t216-k3-p11",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, and write that line right. Real numbers $x$, $y$ and $z$ have $2x + 4y \\ge 7z + 13$ and $7z - 9y \\ge -5$; the working adds the two conditions.",
    "given": [
      "$(2x + 4y) + (7z - 9y) \\ge (7z + 13) - 5$",
      "$2x - 5y + 7z \\ge 7z + 18$",
      "$2x - 5y \\ge 18$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: 2*x-5*y+7*z >= 7*z+8",
    "solution": [
      "Find the first wrong line in this working, and write that line right. Real numbers $x$, $y$ and $z$ have $2x + 4y \\ge 7z + 13$ and $7z - 9y \\ge -5$; the working adds the two conditions.",
      "Adding the two conditions gives $(2x + 4y) + (7z - 9y) \\ge (7z + 13) - 5$, and collecting like terms gives $2x - 5y + 7z \\ge 7z + 8$.",
      "Line 1 agrees with this. Line 2 works out $13 - 5$ on the right as $18$.",
      "Line 2 written right is $2x - 5y + 7z \\ge 7z + 8$."
    ]
  },
  {
    "id": "t216-k3-p12",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, and write that line right. Real numbers $x$ and $y$ have $x^2 + y^2 = 296$; the working bounds $7x - 5y$ from above.",
    "given": [
      "$(7x - 5y)^2 \\le (7^2 + (-5)^2)(x^2 + y^2)$",
      "$(7^2 + (-5)^2)(x^2 + y^2) = 4 \\cdot 296$",
      "$(7x - 5y)^2 \\le 4 \\cdot 296$",
      "$7x - 5y \\le 4\\sqrt{74}$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: (7^2+(-5)^2)*(x^2+y^2) = 74*296",
    "solution": [
      "Find the first wrong line in this working, and write that line right. Real numbers $x$ and $y$ have $x^2 + y^2 = 296$; the working bounds $7x - 5y$ from above.",
      "For the first sequence $7$, $-5$ and the second sequence $x$, $y$, the inequality reads $(7x - 5y)^2 \\le (7^2 + (-5)^2)(x^2 + y^2)$, and $7^2 + (-5)^2 = 74$.",
      "Line 1 agrees with this. Line 2 works out $7^2 + (-5)^2$ as $(7 + (-5))^2 = 4$.",
      "Line 2 written right is $(7^2 + (-5)^2)(x^2 + y^2) = 74 \\cdot 296$."
    ]
  },
  {
    "id": "t216-k3-p13",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, and write that line right. Real numbers $x$ and $y$ have $x^2 + y^2 = 292$; the working bounds $8x - 3y$ from above.",
    "given": [
      "$(8x - 3y)^2 \\le (8^2 + (-3)^2)(x^2 + y^2)$",
      "$(8^2 + (-3)^2)(x^2 + y^2) = 25 \\cdot 292$",
      "$(8x - 3y)^2 \\le 25 \\cdot 292$",
      "$8x - 3y \\le 10\\sqrt{73}$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: (8^2+(-3)^2)*(x^2+y^2) = 73*292",
    "solution": [
      "Find the first wrong line in this working, and write that line right. Real numbers $x$ and $y$ have $x^2 + y^2 = 292$; the working bounds $8x - 3y$ from above.",
      "For the first sequence $8$, $-3$ and the second sequence $x$, $y$, the inequality reads $(8x - 3y)^2 \\le (8^2 + (-3)^2)(x^2 + y^2)$, and $8^2 + (-3)^2 = 73$.",
      "Line 1 agrees with this. Line 2 works out $8^2 + (-3)^2$ as $(8 + (-3))^2 = 25$.",
      "Line 2 written right is $(8^2 + (-3)^2)(x^2 + y^2) = 73 \\cdot 292$."
    ]
  },
  {
    "id": "t216-k3-p14",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, and write that line right. Real numbers $x$, $y$ and $z$ have $6x + 5y \\ge 2z - 8$ and $2z - 9y \\ge 3$; the working adds the two conditions.",
    "given": [
      "$(6x + 5y) + (2z - 9y) \\ge (2z - 8) + 3$",
      "$6x + 14y + 2z \\ge 2z - 5$",
      "$6x + 14y \\ge -5$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: 6*x-4*y+2*z >= 2*z-5",
    "solution": [
      "Find the first wrong line in this working, and write that line right. Real numbers $x$, $y$ and $z$ have $6x + 5y \\ge 2z - 8$ and $2z - 9y \\ge 3$; the working adds the two conditions.",
      "Adding the two conditions gives $(6x + 5y) + (2z - 9y) \\ge (2z - 8) + 3$, and collecting like terms gives $6x - 4y + 2z \\ge 2z - 5$.",
      "Line 1 agrees with this. Line 2 collects $5y - 9y$ as $14y$.",
      "Line 2 written right is $6x - 4y + 2z \\ge 2z - 5$."
    ]
  },
  {
    "id": "t216-k4-p01",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: A rectangle with area $35$ square metres has one side of $x$ metres and perimeter $z$ metres.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "z = 2*x+70/x",
    "solution": [
      "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: A rectangle with area $35$ square metres has one side of $x$ metres and perimeter $z$ metres.",
      "With $y$ metres for the other side, the area gives $xy = 35$.",
      "So $y = \\dfrac{35}{x}$.",
      "The perimeter gives $z = 2x + 2y$.",
      "$z = 2x + \\dfrac{70}{x}$"
    ]
  },
  {
    "id": "t216-k4-p02",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: A rectangle with perimeter $64$ metres has one side of $x$ metres and area $z$ square metres.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "z = x*(32-x)",
    "solution": [
      "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: A rectangle with perimeter $64$ metres has one side of $x$ metres and area $z$ square metres.",
      "With $y$ metres for the other side, the perimeter gives $2x + 2y = 64$.",
      "So $y = 32 - x$.",
      "The area gives $z = xy$.",
      "$z = x(32 - x)$"
    ]
  },
  {
    "id": "t216-k4-p03",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: A rectangular pen against a long wall has $90$ metres of fence on its other three sides, the two sides that meet the wall $x$ metres each, and area $z$ square metres.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "z = x*(90-2*x)",
    "solution": [
      "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: A rectangular pen against a long wall has $90$ metres of fence on its other three sides, the two sides that meet the wall $x$ metres each, and area $z$ square metres.",
      "With $y$ metres for the side opposite the wall, the fence gives $2x + y = 90$.",
      "So $y = 90 - 2x$.",
      "The area gives $z = xy$.",
      "$z = x(90 - 2x)$"
    ]
  },
  {
    "id": "t216-k4-p04",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: A rectangle with area $12$ square metres has one side of $x$ metres and perimeter $z$ metres.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "z = 2*x+24/x",
    "solution": [
      "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: A rectangle with area $12$ square metres has one side of $x$ metres and perimeter $z$ metres.",
      "With $y$ metres for the other side, the area gives $xy = 12$.",
      "So $y = \\dfrac{12}{x}$.",
      "The perimeter gives $z = 2x + 2y$.",
      "$z = 2x + \\dfrac{24}{x}$"
    ]
  },
  {
    "id": "t216-k4-p05",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: A rectangle with area $48$ square metres has one side of $x$ metres and perimeter $z$ metres.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "z = 2*x+96/x",
    "solution": [
      "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: A rectangle with area $48$ square metres has one side of $x$ metres and perimeter $z$ metres.",
      "With $y$ metres for the other side, the area gives $xy = 48$.",
      "So $y = \\dfrac{48}{x}$.",
      "The perimeter gives $z = 2x + 2y$.",
      "$z = 2x + \\dfrac{96}{x}$"
    ]
  },
  {
    "id": "t216-k4-p06",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: An open box with a square bottom of side $x$ centimetres and no top has volume $18$ cubic centimetres, and its bottom and four sides have total area $z$ square centimetres.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "z = x^2+72/x",
    "solution": [
      "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: An open box with a square bottom of side $x$ centimetres and no top has volume $18$ cubic centimetres, and its bottom and four sides have total area $z$ square centimetres.",
      "With $y$ centimetres for the height, the volume gives $x^2y = 18$.",
      "So $y = \\dfrac{18}{x^2}$.",
      "The area gives $z = x^2 + 4xy$.",
      "$z = x^2 + \\dfrac{72}{x}$"
    ]
  },
  {
    "id": "t216-k4-p07",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: A closed box with a square bottom of side $x$ centimetres has volume $45$ cubic centimetres and surface area $z$ square centimetres.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "z = 2*x^2+180/x",
    "solution": [
      "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: A closed box with a square bottom of side $x$ centimetres has volume $45$ cubic centimetres and surface area $z$ square centimetres.",
      "With $y$ centimetres for the height, the volume gives $x^2y = 45$.",
      "So $y = \\dfrac{45}{x^2}$.",
      "The area gives $z = 2x^2 + 4xy$.",
      "$z = 2x^2 + \\dfrac{180}{x}$"
    ]
  },
  {
    "id": "t216-k4-p08",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: The number $z$ is the sum of $3$ times a positive number $x$ and $7$ times a second positive number, where the product of the two numbers is $30$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "z = 3*x+210/x",
    "solution": [
      "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: The number $z$ is the sum of $3$ times a positive number $x$ and $7$ times a second positive number, where the product of the two numbers is $30$.",
      "With $y$ for the second number, the product gives $xy = 30$.",
      "So $y = \\dfrac{30}{x}$.",
      "The sum gives $z = 3x + 7y$.",
      "$z = 3x + \\dfrac{210}{x}$"
    ]
  },
  {
    "id": "t216-k4-p09",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: A rectangle with perimeter $100$ metres has one side of $x$ metres and area $z$ square metres.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "z = x*(50-x)",
    "solution": [
      "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: A rectangle with perimeter $100$ metres has one side of $x$ metres and area $z$ square metres.",
      "With $y$ metres for the other side, the perimeter gives $2x + 2y = 100$.",
      "So $y = 50 - x$.",
      "The area gives $z = xy$.",
      "$z = x(50 - x)$"
    ]
  },
  {
    "id": "t216-k4-p10",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: A closed box with a square bottom of side $x$ centimetres has volume $80$ cubic centimetres and surface area $z$ square centimetres.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "z = 2*x^2+320/x",
    "solution": [
      "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: A closed box with a square bottom of side $x$ centimetres has volume $80$ cubic centimetres and surface area $z$ square centimetres.",
      "With $y$ centimetres for the height, the volume gives $x^2y = 80$.",
      "So $y = \\dfrac{80}{x^2}$.",
      "The area gives $z = 2x^2 + 4xy$.",
      "$z = 2x^2 + \\dfrac{320}{x}$"
    ]
  },
  {
    "id": "t216-k4-p11",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: An open box with a square bottom of side $x$ centimetres and no top has volume $50$ cubic centimetres, and its bottom and four sides have total area $z$ square centimetres.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "z = x^2+200/x",
    "solution": [
      "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: An open box with a square bottom of side $x$ centimetres and no top has volume $50$ cubic centimetres, and its bottom and four sides have total area $z$ square centimetres.",
      "With $y$ centimetres for the height, the volume gives $x^2y = 50$.",
      "So $y = \\dfrac{50}{x^2}$.",
      "The area gives $z = x^2 + 4xy$.",
      "$z = x^2 + \\dfrac{200}{x}$"
    ]
  },
  {
    "id": "t216-k4-p12",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: An open box with a square bottom of side $x$ centimetres and no top has volume $6$ cubic centimetres, and its bottom and four sides have total area $z$ square centimetres.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "z = x^2+24/x",
    "solution": [
      "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: An open box with a square bottom of side $x$ centimetres and no top has volume $6$ cubic centimetres, and its bottom and four sides have total area $z$ square centimetres.",
      "With $y$ centimetres for the height, the volume gives $x^2y = 6$.",
      "So $y = \\dfrac{6}{x^2}$.",
      "The area gives $z = x^2 + 4xy$.",
      "$z = x^2 + \\dfrac{24}{x}$"
    ]
  },
  {
    "id": "t216-k4-p13",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: The number $z$ is the sum of $4$ times a positive number $x$ and $5$ times a second positive number, where the product of the two numbers is $12$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "z = 4*x+60/x",
    "solution": [
      "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: The number $z$ is the sum of $4$ times a positive number $x$ and $5$ times a second positive number, where the product of the two numbers is $12$.",
      "With $y$ for the second number, the product gives $xy = 12$.",
      "So $y = \\dfrac{12}{x}$.",
      "The sum gives $z = 4x + 5y$.",
      "$z = 4x + \\dfrac{60}{x}$"
    ]
  },
  {
    "id": "t216-k4-p14",
    "topic": "maxima-and-minima-by-inequalities",
    "kind": "t216-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: A rectangular pen against a long wall has $50$ metres of fence on its other three sides, the two sides that meet the wall $x$ metres each, and area $z$ square metres.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "z = x*(50-2*x)",
    "solution": [
      "Write this sentence as an equation for $z$ in terms of $x$ alone, with $z$ alone on the left: A rectangular pen against a long wall has $50$ metres of fence on its other three sides, the two sides that meet the wall $x$ metres each, and area $z$ square metres.",
      "With $y$ metres for the side opposite the wall, the fence gives $2x + y = 50$.",
      "So $y = 50 - 2x$.",
      "The area gives $z = xy$.",
      "$z = x(50 - 2x)$"
    ]
  }
]
