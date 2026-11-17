export default [
  {
    "id": "t215-k1-p01",
    "topic": "cauchy-schwarz",
    "kind": "t215-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $(12x + 20y)\\left(\\dfrac{12}{x} + \\dfrac{5}{y}\\right) \\ge E$, for positive numbers $x$ and $y$.",
    "form": "Answer as an integer.",
    "answer": "484",
    "solution": [
      "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $(12x + 20y)\\left(\\dfrac{12}{x} + \\dfrac{5}{y}\\right) \\ge E$, for positive numbers $x$ and $y$.",
      "The first sequence is $\\sqrt{12x}$, $\\sqrt{20y}$ and the second is $\\sqrt{\\dfrac{12}{x}}$, $\\sqrt{\\dfrac{5}{y}}$.",
      "$(12x + 20y)\\left(\\dfrac{12}{x} + \\dfrac{5}{y}\\right) \\ge \\left(\\sqrt{12x} \\cdot \\sqrt{\\dfrac{12}{x}} + \\sqrt{20y} \\cdot \\sqrt{\\dfrac{5}{y}}\\right)^2$",
      "The products are $\\sqrt{144} = 12$ and $\\sqrt{100} = 10$.",
      "$(12x + 20y)\\left(\\dfrac{12}{x} + \\dfrac{5}{y}\\right) \\ge (12 + 10)^2$",
      "$(12 + 10)^2 = 484$",
      "$E = 484$"
    ]
  },
  {
    "id": "t215-k1-p02",
    "topic": "cauchy-schwarz",
    "kind": "t215-k1",
    "formNo": 4,
    "calc": "no",
    "prompt": "Find the number $E$ for which the Cauchy-Schwarz Inequality gives $\\dfrac{64}{7x} + \\dfrac{49}{3y} \\ge \\dfrac{E}{7x + 3y}$ for all positive numbers $x$ and $y$.",
    "form": "Answer as an integer.",
    "answer": "225",
    "solution": [
      "Find the number $E$ for which the Cauchy-Schwarz Inequality gives $\\dfrac{64}{7x} + \\dfrac{49}{3y} \\ge \\dfrac{E}{7x + 3y}$ for all positive numbers $x$ and $y$.",
      "The first sequence is $\\sqrt{7x}$, $\\sqrt{3y}$ and the second is $\\dfrac{8}{\\sqrt{7x}}$, $\\dfrac{7}{\\sqrt{3y}}$.",
      "$(7x + 3y)\\left(\\dfrac{64}{7x} + \\dfrac{49}{3y}\\right) \\ge \\left(\\sqrt{7x} \\cdot \\dfrac{8}{\\sqrt{7x}} + \\sqrt{3y} \\cdot \\dfrac{7}{\\sqrt{3y}}\\right)^2$",
      "$(7x + 3y)\\left(\\dfrac{64}{7x} + \\dfrac{49}{3y}\\right) \\ge (8 + 7)^2$",
      "$(8 + 7)^2 = 225$",
      "$\\dfrac{64}{7x} + \\dfrac{49}{3y} \\ge \\dfrac{225}{7x + 3y}$",
      "$E = 225$"
    ]
  },
  {
    "id": "t215-k1-p03",
    "topic": "cauchy-schwarz",
    "kind": "t215-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $\\sqrt{2x + 4} + \\sqrt{2y + 2} + \\sqrt{5z + 6} \\le E$, for positive numbers $x$, $y$ and $z$ with $2x + 2y + 5z = 37$.",
    "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
    "answer": "7*sqrt(3)",
    "solution": [
      "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $\\sqrt{2x + 4} + \\sqrt{2y + 2} + \\sqrt{5z + 6} \\le E$, for positive numbers $x$, $y$ and $z$ with $2x + 2y + 5z = 37$.",
      "$\\left(\\sqrt{2x + 4} \\cdot 1 + \\sqrt{2y + 2} \\cdot 1 + \\sqrt{5z + 6} \\cdot 1\\right)^2 \\le \\left((\\sqrt{2x + 4})^2 + (\\sqrt{2y + 2})^2 + (\\sqrt{5z + 6})^2\\right)\\left(1^2 + 1^2 + 1^2\\right)$",
      "$\\left(\\sqrt{2x + 4} + \\sqrt{2y + 2} + \\sqrt{5z + 6}\\right)^2 \\le 3\\left((2x + 4) + (2y + 2) + (5z + 6)\\right)$",
      "$(2x + 4) + (2y + 2) + (5z + 6) = 2x + 2y + 5z + 12$",
      "$2x + 2y + 5z + 12 = 49$",
      "$\\left(\\sqrt{2x + 4} + \\sqrt{2y + 2} + \\sqrt{5z + 6}\\right)^2 \\le 147$",
      "$\\sqrt{2x + 4} + \\sqrt{2y + 2} + \\sqrt{5z + 6} \\le \\sqrt{147}$",
      "$E = \\sqrt{147} = 7\\sqrt{3}$"
    ]
  },
  {
    "id": "t215-k1-p04",
    "topic": "cauchy-schwarz",
    "kind": "t215-k1",
    "formNo": 5,
    "calc": "no",
    "prompt": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $\\dfrac{x^2}{x + 5} + \\dfrac{y^2}{y + 8} + \\dfrac{z^2}{z + 1} \\ge E$, for positive numbers $x$, $y$ and $z$ with $x + y + z = 10$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "25/6",
    "solution": [
      "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $\\dfrac{x^2}{x + 5} + \\dfrac{y^2}{y + 8} + \\dfrac{z^2}{z + 1} \\ge E$, for positive numbers $x$, $y$ and $z$ with $x + y + z = 10$.",
      "The first sequence is $\\sqrt{x + 5}$, $\\sqrt{y + 8}$, $\\sqrt{z + 1}$ and the second is $\\dfrac{x}{\\sqrt{x + 5}}$, $\\dfrac{y}{\\sqrt{y + 8}}$, $\\dfrac{z}{\\sqrt{z + 1}}$.",
      "$\\left((x + 5) + (y + 8) + (z + 1)\\right)\\left(\\dfrac{x^2}{x + 5} + \\dfrac{y^2}{y + 8} + \\dfrac{z^2}{z + 1}\\right) \\ge \\left(\\sqrt{x + 5} \\cdot \\dfrac{x}{\\sqrt{x + 5}} + \\sqrt{y + 8} \\cdot \\dfrac{y}{\\sqrt{y + 8}} + \\sqrt{z + 1} \\cdot \\dfrac{z}{\\sqrt{z + 1}}\\right)^2$",
      "$\\left((x + 5) + (y + 8) + (z + 1)\\right)\\left(\\dfrac{x^2}{x + 5} + \\dfrac{y^2}{y + 8} + \\dfrac{z^2}{z + 1}\\right) \\ge (x + y + z)^2$",
      "$(x + 5) + (y + 8) + (z + 1) = x + y + z + 14$",
      "$24\\left(\\dfrac{x^2}{x + 5} + \\dfrac{y^2}{y + 8} + \\dfrac{z^2}{z + 1}\\right) \\ge 100$",
      "$\\dfrac{x^2}{x + 5} + \\dfrac{y^2}{y + 8} + \\dfrac{z^2}{z + 1} \\ge \\dfrac{25}{6}$",
      "$E = \\dfrac{25}{6}$"
    ]
  },
  {
    "id": "t215-k1-p05",
    "topic": "cauchy-schwarz",
    "kind": "t215-k1",
    "formNo": 4,
    "calc": "no",
    "prompt": "Find the number $E$ for which the Cauchy-Schwarz Inequality gives $\\dfrac{9}{x} + \\dfrac{49}{6y} + \\dfrac{1}{3z} \\ge \\dfrac{E}{x + 6y + 3z}$ for all positive numbers $x$, $y$ and $z$.",
    "form": "Answer as an integer.",
    "answer": "121",
    "solution": [
      "Find the number $E$ for which the Cauchy-Schwarz Inequality gives $\\dfrac{9}{x} + \\dfrac{49}{6y} + \\dfrac{1}{3z} \\ge \\dfrac{E}{x + 6y + 3z}$ for all positive numbers $x$, $y$ and $z$.",
      "The first sequence is $\\sqrt{x}$, $\\sqrt{6y}$, $\\sqrt{3z}$ and the second is $\\dfrac{3}{\\sqrt{x}}$, $\\dfrac{7}{\\sqrt{6y}}$, $\\dfrac{1}{\\sqrt{3z}}$.",
      "$(x + 6y + 3z)\\left(\\dfrac{9}{x} + \\dfrac{49}{6y} + \\dfrac{1}{3z}\\right) \\ge \\left(\\sqrt{x} \\cdot \\dfrac{3}{\\sqrt{x}} + \\sqrt{6y} \\cdot \\dfrac{7}{\\sqrt{6y}} + \\sqrt{3z} \\cdot \\dfrac{1}{\\sqrt{3z}}\\right)^2$",
      "$(x + 6y + 3z)\\left(\\dfrac{9}{x} + \\dfrac{49}{6y} + \\dfrac{1}{3z}\\right) \\ge (3 + 7 + 1)^2$",
      "$(3 + 7 + 1)^2 = 121$",
      "$\\dfrac{9}{x} + \\dfrac{49}{6y} + \\dfrac{1}{3z} \\ge \\dfrac{121}{x + 6y + 3z}$",
      "$E = 121$"
    ]
  },
  {
    "id": "t215-k1-p06",
    "topic": "cauchy-schwarz",
    "kind": "t215-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $(12x + 9y + 11z)\\left(\\dfrac{3}{x} + \\dfrac{16}{y} + \\dfrac{11}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$.",
    "form": "Answer as an integer.",
    "answer": "841",
    "solution": [
      "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $(12x + 9y + 11z)\\left(\\dfrac{3}{x} + \\dfrac{16}{y} + \\dfrac{11}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$.",
      "The first sequence is $\\sqrt{12x}$, $\\sqrt{9y}$, $\\sqrt{11z}$ and the second is $\\sqrt{\\dfrac{3}{x}}$, $\\sqrt{\\dfrac{16}{y}}$, $\\sqrt{\\dfrac{11}{z}}$.",
      "$(12x + 9y + 11z)\\left(\\dfrac{3}{x} + \\dfrac{16}{y} + \\dfrac{11}{z}\\right) \\ge \\left(\\sqrt{12x} \\cdot \\sqrt{\\dfrac{3}{x}} + \\sqrt{9y} \\cdot \\sqrt{\\dfrac{16}{y}} + \\sqrt{11z} \\cdot \\sqrt{\\dfrac{11}{z}}\\right)^2$",
      "The products are $\\sqrt{36} = 6$, $\\sqrt{144} = 12$ and $\\sqrt{121} = 11$.",
      "$(12x + 9y + 11z)\\left(\\dfrac{3}{x} + \\dfrac{16}{y} + \\dfrac{11}{z}\\right) \\ge (6 + 12 + 11)^2$",
      "$(6 + 12 + 11)^2 = 841$",
      "$E = 841$"
    ]
  },
  {
    "id": "t215-k1-p07",
    "topic": "cauchy-schwarz",
    "kind": "t215-k1",
    "formNo": 5,
    "calc": "no",
    "prompt": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $\\dfrac{x^2}{x + 9} + \\dfrac{y^2}{y + 5} \\ge E$, for positive numbers $x$ and $y$ with $x + y = 8$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "32/11",
    "solution": [
      "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $\\dfrac{x^2}{x + 9} + \\dfrac{y^2}{y + 5} \\ge E$, for positive numbers $x$ and $y$ with $x + y = 8$.",
      "The first sequence is $\\sqrt{x + 9}$, $\\sqrt{y + 5}$ and the second is $\\dfrac{x}{\\sqrt{x + 9}}$, $\\dfrac{y}{\\sqrt{y + 5}}$.",
      "$\\left((x + 9) + (y + 5)\\right)\\left(\\dfrac{x^2}{x + 9} + \\dfrac{y^2}{y + 5}\\right) \\ge \\left(\\sqrt{x + 9} \\cdot \\dfrac{x}{\\sqrt{x + 9}} + \\sqrt{y + 5} \\cdot \\dfrac{y}{\\sqrt{y + 5}}\\right)^2$",
      "$\\left((x + 9) + (y + 5)\\right)\\left(\\dfrac{x^2}{x + 9} + \\dfrac{y^2}{y + 5}\\right) \\ge (x + y)^2$",
      "$(x + 9) + (y + 5) = x + y + 14$",
      "$22\\left(\\dfrac{x^2}{x + 9} + \\dfrac{y^2}{y + 5}\\right) \\ge 64$",
      "$\\dfrac{x^2}{x + 9} + \\dfrac{y^2}{y + 5} \\ge \\dfrac{32}{11}$",
      "$E = \\dfrac{32}{11}$"
    ]
  },
  {
    "id": "t215-k1-p08",
    "topic": "cauchy-schwarz",
    "kind": "t215-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the number $E$ for which the Cauchy-Schwarz Inequality gives $(2x + 11y)^2 \\le E(16x^2 + 9y^2)$ for all real numbers $x$ and $y$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "493/36",
    "solution": [
      "Find the number $E$ for which the Cauchy-Schwarz Inequality gives $(2x + 11y)^2 \\le E(16x^2 + 9y^2)$ for all real numbers $x$ and $y$.",
      "The first sequence is $\\dfrac{1}{2}$, $\\dfrac{11}{3}$ and the second is $4x$, $3y$.",
      "$\\left(\\left(\\dfrac{1}{2}\\right)^2 + \\left(\\dfrac{11}{3}\\right)^2\\right)\\left((4x)^2 + (3y)^2\\right) \\ge \\left(\\dfrac{1}{2} \\cdot 4x + \\dfrac{11}{3} \\cdot 3y\\right)^2$",
      "$\\left(\\dfrac{1}{2}\\right)^2 + \\left(\\dfrac{11}{3}\\right)^2 = \\dfrac{493}{36}$",
      "$\\dfrac{493}{36}(16x^2 + 9y^2) \\ge (2x + 11y)^2$",
      "$E = \\dfrac{493}{36}$"
    ]
  },
  {
    "id": "t215-k1-p09",
    "topic": "cauchy-schwarz",
    "kind": "t215-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $\\sqrt{6x + 5} + \\sqrt{5y + 9} + \\sqrt{6z + 1} \\le E$, for positive numbers $x$, $y$ and $z$ with $6x + 5y + 6z = 49$.",
    "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
    "answer": "8*sqrt(3)",
    "solution": [
      "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $\\sqrt{6x + 5} + \\sqrt{5y + 9} + \\sqrt{6z + 1} \\le E$, for positive numbers $x$, $y$ and $z$ with $6x + 5y + 6z = 49$.",
      "$\\left(\\sqrt{6x + 5} \\cdot 1 + \\sqrt{5y + 9} \\cdot 1 + \\sqrt{6z + 1} \\cdot 1\\right)^2 \\le \\left((\\sqrt{6x + 5})^2 + (\\sqrt{5y + 9})^2 + (\\sqrt{6z + 1})^2\\right)\\left(1^2 + 1^2 + 1^2\\right)$",
      "$\\left(\\sqrt{6x + 5} + \\sqrt{5y + 9} + \\sqrt{6z + 1}\\right)^2 \\le 3\\left((6x + 5) + (5y + 9) + (6z + 1)\\right)$",
      "$(6x + 5) + (5y + 9) + (6z + 1) = 6x + 5y + 6z + 15$",
      "$6x + 5y + 6z + 15 = 64$",
      "$\\left(\\sqrt{6x + 5} + \\sqrt{5y + 9} + \\sqrt{6z + 1}\\right)^2 \\le 192$",
      "$\\sqrt{6x + 5} + \\sqrt{5y + 9} + \\sqrt{6z + 1} \\le \\sqrt{192}$",
      "$E = \\sqrt{192} = 8\\sqrt{3}$"
    ]
  },
  {
    "id": "t215-k1-p10",
    "topic": "cauchy-schwarz",
    "kind": "t215-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the number $E$ for which the Cauchy-Schwarz Inequality gives $(2x + 8y)^2 \\le E(25x^2 + y^2)$ for all real numbers $x$ and $y$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "1604/25",
    "solution": [
      "Find the number $E$ for which the Cauchy-Schwarz Inequality gives $(2x + 8y)^2 \\le E(25x^2 + y^2)$ for all real numbers $x$ and $y$.",
      "The first sequence is $\\dfrac{2}{5}$, $8$ and the second is $5x$, $y$.",
      "$\\left(\\left(\\dfrac{2}{5}\\right)^2 + 8^2\\right)\\left((5x)^2 + y^2\\right) \\ge \\left(\\dfrac{2}{5} \\cdot 5x + 8 \\cdot y\\right)^2$",
      "$\\left(\\dfrac{2}{5}\\right)^2 + 8^2 = \\dfrac{1604}{25}$",
      "$\\dfrac{1604}{25}(25x^2 + y^2) \\ge (2x + 8y)^2$",
      "$E = \\dfrac{1604}{25}$"
    ]
  },
  {
    "id": "t215-k1-p11",
    "topic": "cauchy-schwarz",
    "kind": "t215-k1",
    "formNo": 4,
    "calc": "no",
    "prompt": "Find the number $E$ for which the Cauchy-Schwarz Inequality gives $\\dfrac{64}{3x} + \\dfrac{81}{y} \\ge \\dfrac{E}{3x + y}$ for all positive numbers $x$ and $y$.",
    "form": "Answer as an integer.",
    "answer": "289",
    "solution": [
      "Find the number $E$ for which the Cauchy-Schwarz Inequality gives $\\dfrac{64}{3x} + \\dfrac{81}{y} \\ge \\dfrac{E}{3x + y}$ for all positive numbers $x$ and $y$.",
      "The first sequence is $\\sqrt{3x}$, $\\sqrt{y}$ and the second is $\\dfrac{8}{\\sqrt{3x}}$, $\\dfrac{9}{\\sqrt{y}}$.",
      "$(3x + y)\\left(\\dfrac{64}{3x} + \\dfrac{81}{y}\\right) \\ge \\left(\\sqrt{3x} \\cdot \\dfrac{8}{\\sqrt{3x}} + \\sqrt{y} \\cdot \\dfrac{9}{\\sqrt{y}}\\right)^2$",
      "$(3x + y)\\left(\\dfrac{64}{3x} + \\dfrac{81}{y}\\right) \\ge (8 + 9)^2$",
      "$(8 + 9)^2 = 289$",
      "$\\dfrac{64}{3x} + \\dfrac{81}{y} \\ge \\dfrac{289}{3x + y}$",
      "$E = 289$"
    ]
  },
  {
    "id": "t215-k1-p12",
    "topic": "cauchy-schwarz",
    "kind": "t215-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $(8x + 32y)\\left(\\dfrac{18}{x} + \\dfrac{2}{y}\\right) \\ge E$, for positive numbers $x$ and $y$.",
    "form": "Answer as an integer.",
    "answer": "400",
    "solution": [
      "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $(8x + 32y)\\left(\\dfrac{18}{x} + \\dfrac{2}{y}\\right) \\ge E$, for positive numbers $x$ and $y$.",
      "The first sequence is $\\sqrt{8x}$, $\\sqrt{32y}$ and the second is $\\sqrt{\\dfrac{18}{x}}$, $\\sqrt{\\dfrac{2}{y}}$.",
      "$(8x + 32y)\\left(\\dfrac{18}{x} + \\dfrac{2}{y}\\right) \\ge \\left(\\sqrt{8x} \\cdot \\sqrt{\\dfrac{18}{x}} + \\sqrt{32y} \\cdot \\sqrt{\\dfrac{2}{y}}\\right)^2$",
      "The products are $\\sqrt{144} = 12$ and $\\sqrt{64} = 8$.",
      "$(8x + 32y)\\left(\\dfrac{18}{x} + \\dfrac{2}{y}\\right) \\ge (12 + 8)^2$",
      "$(12 + 8)^2 = 400$",
      "$E = 400$"
    ]
  },
  {
    "id": "t215-k1-p13",
    "topic": "cauchy-schwarz",
    "kind": "t215-k1",
    "formNo": 5,
    "calc": "no",
    "prompt": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $\\dfrac{x^2}{x + 8} + \\dfrac{y^2}{y + 9} + \\dfrac{z^2}{z + 7} \\ge E$, for positive numbers $x$, $y$ and $z$ with $x + y + z = 10$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "50/17",
    "solution": [
      "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $\\dfrac{x^2}{x + 8} + \\dfrac{y^2}{y + 9} + \\dfrac{z^2}{z + 7} \\ge E$, for positive numbers $x$, $y$ and $z$ with $x + y + z = 10$.",
      "The first sequence is $\\sqrt{x + 8}$, $\\sqrt{y + 9}$, $\\sqrt{z + 7}$ and the second is $\\dfrac{x}{\\sqrt{x + 8}}$, $\\dfrac{y}{\\sqrt{y + 9}}$, $\\dfrac{z}{\\sqrt{z + 7}}$.",
      "$\\left((x + 8) + (y + 9) + (z + 7)\\right)\\left(\\dfrac{x^2}{x + 8} + \\dfrac{y^2}{y + 9} + \\dfrac{z^2}{z + 7}\\right) \\ge \\left(\\sqrt{x + 8} \\cdot \\dfrac{x}{\\sqrt{x + 8}} + \\sqrt{y + 9} \\cdot \\dfrac{y}{\\sqrt{y + 9}} + \\sqrt{z + 7} \\cdot \\dfrac{z}{\\sqrt{z + 7}}\\right)^2$",
      "$\\left((x + 8) + (y + 9) + (z + 7)\\right)\\left(\\dfrac{x^2}{x + 8} + \\dfrac{y^2}{y + 9} + \\dfrac{z^2}{z + 7}\\right) \\ge (x + y + z)^2$",
      "$(x + 8) + (y + 9) + (z + 7) = x + y + z + 24$",
      "$34\\left(\\dfrac{x^2}{x + 8} + \\dfrac{y^2}{y + 9} + \\dfrac{z^2}{z + 7}\\right) \\ge 100$",
      "$\\dfrac{x^2}{x + 8} + \\dfrac{y^2}{y + 9} + \\dfrac{z^2}{z + 7} \\ge \\dfrac{50}{17}$",
      "$E = \\dfrac{50}{17}$"
    ]
  },
  {
    "id": "t215-k1-p14",
    "topic": "cauchy-schwarz",
    "kind": "t215-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $(32x + 25y)\\left(\\dfrac{2}{x} + \\dfrac{1}{y}\\right) \\ge E$, for positive numbers $x$ and $y$.",
    "form": "Answer as an integer.",
    "answer": "169",
    "solution": [
      "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $(32x + 25y)\\left(\\dfrac{2}{x} + \\dfrac{1}{y}\\right) \\ge E$, for positive numbers $x$ and $y$.",
      "The first sequence is $\\sqrt{32x}$, $\\sqrt{25y}$ and the second is $\\sqrt{\\dfrac{2}{x}}$, $\\sqrt{\\dfrac{1}{y}}$.",
      "$(32x + 25y)\\left(\\dfrac{2}{x} + \\dfrac{1}{y}\\right) \\ge \\left(\\sqrt{32x} \\cdot \\sqrt{\\dfrac{2}{x}} + \\sqrt{25y} \\cdot \\sqrt{\\dfrac{1}{y}}\\right)^2$",
      "The products are $\\sqrt{64} = 8$ and $\\sqrt{25} = 5$.",
      "$(32x + 25y)\\left(\\dfrac{2}{x} + \\dfrac{1}{y}\\right) \\ge (8 + 5)^2$",
      "$(8 + 5)^2 = 169$",
      "$E = 169$"
    ]
  },
  {
    "id": "t215-k1-p15",
    "topic": "cauchy-schwarz",
    "kind": "t215-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $\\sqrt{x + 5} + \\sqrt{2y + 4} \\le E$, for positive numbers $x$ and $y$ with $x + 2y = 53$.",
    "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
    "answer": "2*sqrt(31)",
    "solution": [
      "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $\\sqrt{x + 5} + \\sqrt{2y + 4} \\le E$, for positive numbers $x$ and $y$ with $x + 2y = 53$.",
      "$\\left(\\sqrt{x + 5} \\cdot 1 + \\sqrt{2y + 4} \\cdot 1\\right)^2 \\le \\left((\\sqrt{x + 5})^2 + (\\sqrt{2y + 4})^2\\right)\\left(1^2 + 1^2\\right)$",
      "$\\left(\\sqrt{x + 5} + \\sqrt{2y + 4}\\right)^2 \\le 2\\left((x + 5) + (2y + 4)\\right)$",
      "$(x + 5) + (2y + 4) = x + 2y + 9$",
      "$x + 2y + 9 = 62$",
      "$\\left(\\sqrt{x + 5} + \\sqrt{2y + 4}\\right)^2 \\le 124$",
      "$\\sqrt{x + 5} + \\sqrt{2y + 4} \\le \\sqrt{124}$",
      "$E = \\sqrt{124} = 2\\sqrt{31}$"
    ]
  },
  {
    "id": "t215-k1-p16",
    "topic": "cauchy-schwarz",
    "kind": "t215-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the number $E$ for which the Cauchy-Schwarz Inequality gives $(10x + 11y)^2 \\le E(25x^2 + 9y^2)$ for all real numbers $x$ and $y$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "157/9",
    "solution": [
      "Find the number $E$ for which the Cauchy-Schwarz Inequality gives $(10x + 11y)^2 \\le E(25x^2 + 9y^2)$ for all real numbers $x$ and $y$.",
      "The first sequence is $2$, $\\dfrac{11}{3}$ and the second is $5x$, $3y$.",
      "$\\left(2^2 + \\left(\\dfrac{11}{3}\\right)^2\\right)\\left((5x)^2 + (3y)^2\\right) \\ge \\left(2 \\cdot 5x + \\dfrac{11}{3} \\cdot 3y\\right)^2$",
      "$2^2 + \\left(\\dfrac{11}{3}\\right)^2 = \\dfrac{157}{9}$",
      "$\\dfrac{157}{9}(25x^2 + 9y^2) \\ge (10x + 11y)^2$",
      "$E = \\dfrac{157}{9}$"
    ]
  },
  {
    "id": "t215-k1-p17",
    "topic": "cauchy-schwarz",
    "kind": "t215-k1",
    "formNo": 4,
    "calc": "no",
    "prompt": "Find the number $E$ for which the Cauchy-Schwarz Inequality gives $\\dfrac{81}{7x} + \\dfrac{16}{5y} + \\dfrac{49}{4z} \\ge \\dfrac{E}{7x + 5y + 4z}$ for all positive numbers $x$, $y$ and $z$.",
    "form": "Answer as an integer.",
    "answer": "400",
    "solution": [
      "Find the number $E$ for which the Cauchy-Schwarz Inequality gives $\\dfrac{81}{7x} + \\dfrac{16}{5y} + \\dfrac{49}{4z} \\ge \\dfrac{E}{7x + 5y + 4z}$ for all positive numbers $x$, $y$ and $z$.",
      "The first sequence is $\\sqrt{7x}$, $\\sqrt{5y}$, $\\sqrt{4z}$ and the second is $\\dfrac{9}{\\sqrt{7x}}$, $\\dfrac{4}{\\sqrt{5y}}$, $\\dfrac{7}{\\sqrt{4z}}$.",
      "$(7x + 5y + 4z)\\left(\\dfrac{81}{7x} + \\dfrac{16}{5y} + \\dfrac{49}{4z}\\right) \\ge \\left(\\sqrt{7x} \\cdot \\dfrac{9}{\\sqrt{7x}} + \\sqrt{5y} \\cdot \\dfrac{4}{\\sqrt{5y}} + \\sqrt{4z} \\cdot \\dfrac{7}{\\sqrt{4z}}\\right)^2$",
      "$(7x + 5y + 4z)\\left(\\dfrac{81}{7x} + \\dfrac{16}{5y} + \\dfrac{49}{4z}\\right) \\ge (9 + 4 + 7)^2$",
      "$(9 + 4 + 7)^2 = 400$",
      "$\\dfrac{81}{7x} + \\dfrac{16}{5y} + \\dfrac{49}{4z} \\ge \\dfrac{400}{7x + 5y + 4z}$",
      "$E = 400$"
    ]
  },
  {
    "id": "t215-k1-p18",
    "topic": "cauchy-schwarz",
    "kind": "t215-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $\\sqrt{6x + 7} + \\sqrt{5y + 7} + \\sqrt{z + 7} \\le E$, for positive numbers $x$, $y$ and $z$ with $6x + 5y + z = 19$.",
    "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
    "answer": "2*sqrt(30)",
    "solution": [
      "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $\\sqrt{6x + 7} + \\sqrt{5y + 7} + \\sqrt{z + 7} \\le E$, for positive numbers $x$, $y$ and $z$ with $6x + 5y + z = 19$.",
      "$\\left(\\sqrt{6x + 7} \\cdot 1 + \\sqrt{5y + 7} \\cdot 1 + \\sqrt{z + 7} \\cdot 1\\right)^2 \\le \\left((\\sqrt{6x + 7})^2 + (\\sqrt{5y + 7})^2 + (\\sqrt{z + 7})^2\\right)\\left(1^2 + 1^2 + 1^2\\right)$",
      "$\\left(\\sqrt{6x + 7} + \\sqrt{5y + 7} + \\sqrt{z + 7}\\right)^2 \\le 3\\left((6x + 7) + (5y + 7) + (z + 7)\\right)$",
      "$(6x + 7) + (5y + 7) + (z + 7) = 6x + 5y + z + 21$",
      "$6x + 5y + z + 21 = 40$",
      "$\\left(\\sqrt{6x + 7} + \\sqrt{5y + 7} + \\sqrt{z + 7}\\right)^2 \\le 120$",
      "$\\sqrt{6x + 7} + \\sqrt{5y + 7} + \\sqrt{z + 7} \\le \\sqrt{120}$",
      "$E = \\sqrt{120} = 2\\sqrt{30}$"
    ]
  },
  {
    "id": "t215-k1-p19",
    "topic": "cauchy-schwarz",
    "kind": "t215-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the number $E$ for which the Cauchy-Schwarz Inequality gives $(10x + 4y + 9z)^2 \\le E(x^2 + y^2 + 16z^2)$ for all real numbers $x$, $y$ and $z$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "1937/16",
    "solution": [
      "Find the number $E$ for which the Cauchy-Schwarz Inequality gives $(10x + 4y + 9z)^2 \\le E(x^2 + y^2 + 16z^2)$ for all real numbers $x$, $y$ and $z$.",
      "The first sequence is $10$, $4$, $\\dfrac{9}{4}$ and the second is $x$, $y$, $4z$.",
      "$\\left(10^2 + 4^2 + \\left(\\dfrac{9}{4}\\right)^2\\right)\\left(x^2 + y^2 + (4z)^2\\right) \\ge \\left(10 \\cdot x + 4 \\cdot y + \\dfrac{9}{4} \\cdot 4z\\right)^2$",
      "$10^2 + 4^2 + \\left(\\dfrac{9}{4}\\right)^2 = \\dfrac{1937}{16}$",
      "$\\dfrac{1937}{16}(x^2 + y^2 + 16z^2) \\ge (10x + 4y + 9z)^2$",
      "$E = \\dfrac{1937}{16}$"
    ]
  },
  {
    "id": "t215-k1-p20",
    "topic": "cauchy-schwarz",
    "kind": "t215-k1",
    "formNo": 5,
    "calc": "no",
    "prompt": "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $\\dfrac{x^2}{x + 1} + \\dfrac{y^2}{y + 6} \\ge E$, for positive numbers $x$ and $y$ with $x + y = 11$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "121/18",
    "solution": [
      "Find the number $E$ that the Cauchy-Schwarz Inequality gives in $\\dfrac{x^2}{x + 1} + \\dfrac{y^2}{y + 6} \\ge E$, for positive numbers $x$ and $y$ with $x + y = 11$.",
      "The first sequence is $\\sqrt{x + 1}$, $\\sqrt{y + 6}$ and the second is $\\dfrac{x}{\\sqrt{x + 1}}$, $\\dfrac{y}{\\sqrt{y + 6}}$.",
      "$\\left((x + 1) + (y + 6)\\right)\\left(\\dfrac{x^2}{x + 1} + \\dfrac{y^2}{y + 6}\\right) \\ge \\left(\\sqrt{x + 1} \\cdot \\dfrac{x}{\\sqrt{x + 1}} + \\sqrt{y + 6} \\cdot \\dfrac{y}{\\sqrt{y + 6}}\\right)^2$",
      "$\\left((x + 1) + (y + 6)\\right)\\left(\\dfrac{x^2}{x + 1} + \\dfrac{y^2}{y + 6}\\right) \\ge (x + y)^2$",
      "$(x + 1) + (y + 6) = x + y + 7$",
      "$18\\left(\\dfrac{x^2}{x + 1} + \\dfrac{y^2}{y + 6}\\right) \\ge 121$",
      "$\\dfrac{x^2}{x + 1} + \\dfrac{y^2}{y + 6} \\ge \\dfrac{121}{18}$",
      "$E = \\dfrac{121}{18}$"
    ]
  },
  {
    "id": "t215-k2-p01",
    "topic": "cauchy-schwarz",
    "kind": "t215-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $y$, for real numbers $x$ and $y$ with $7x - 4y = \\dfrac{65}{2}$ and $x^2 + y^2 = \\dfrac{65}{4}$.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "y = -2",
    "solution": [
      "Find $y$, for real numbers $x$ and $y$ with $7x - 4y = \\dfrac{65}{2}$ and $x^2 + y^2 = \\dfrac{65}{4}$.",
      "$\\left(7^2 + (-4)^2\\right)(x^2 + y^2) \\ge (7x - 4y)^2$",
      "The left side is $65 \\cdot \\dfrac{65}{4} = \\dfrac{4225}{4}$ and the right side is $\\left(\\dfrac{65}{2}\\right)^2 = \\dfrac{4225}{4}$, so the two sides are equal.",
      "There is a number $c$ with $x = 7c$ and $y = -4c$.",
      "$7(7c) - 4(-4c) = \\dfrac{65}{2}$",
      "$65c = \\dfrac{65}{2}$",
      "$c = \\dfrac{1}{2}$",
      "$y = -2$"
    ]
  },
  {
    "id": "t215-k2-p02",
    "topic": "cauchy-schwarz",
    "kind": "t215-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $z$, for real numbers $x$, $y$ and $z$ with $2x + 6y - 7z = \\dfrac{89}{2}$ and $x^2 + y^2 + z^2 = \\dfrac{89}{4}$.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "z = -7/2",
    "solution": [
      "Find $z$, for real numbers $x$, $y$ and $z$ with $2x + 6y - 7z = \\dfrac{89}{2}$ and $x^2 + y^2 + z^2 = \\dfrac{89}{4}$.",
      "$\\left(2^2 + 6^2 + (-7)^2\\right)(x^2 + y^2 + z^2) \\ge (2x + 6y - 7z)^2$",
      "The left side is $89 \\cdot \\dfrac{89}{4} = \\dfrac{7921}{4}$ and the right side is $\\left(\\dfrac{89}{2}\\right)^2 = \\dfrac{7921}{4}$, so the two sides are equal.",
      "There is a number $c$ with $x = 2c$, $y = 6c$ and $z = -7c$.",
      "$2(2c) + 6(6c) - 7(-7c) = \\dfrac{89}{2}$",
      "$89c = \\dfrac{89}{2}$",
      "$c = \\dfrac{1}{2}$",
      "$z = -\\dfrac{7}{2}$"
    ]
  },
  {
    "id": "t215-k2-p03",
    "topic": "cauchy-schwarz",
    "kind": "t215-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $y$, for real numbers $x$, $y$ and $z$ with $4x - 7y + 2z = \\dfrac{69}{2}$ and $x^2 + y^2 + z^2 = \\dfrac{69}{4}$.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "y = -7/2",
    "solution": [
      "Find $y$, for real numbers $x$, $y$ and $z$ with $4x - 7y + 2z = \\dfrac{69}{2}$ and $x^2 + y^2 + z^2 = \\dfrac{69}{4}$.",
      "$\\left(4^2 + (-7)^2 + 2^2\\right)(x^2 + y^2 + z^2) \\ge (4x - 7y + 2z)^2$",
      "The left side is $69 \\cdot \\dfrac{69}{4} = \\dfrac{4761}{4}$ and the right side is $\\left(\\dfrac{69}{2}\\right)^2 = \\dfrac{4761}{4}$, so the two sides are equal.",
      "There is a number $c$ with $x = 4c$, $y = -7c$ and $z = 2c$.",
      "$4(4c) - 7(-7c) + 2(2c) = \\dfrac{69}{2}$",
      "$69c = \\dfrac{69}{2}$",
      "$c = \\dfrac{1}{2}$",
      "$y = -\\dfrac{7}{2}$"
    ]
  },
  {
    "id": "t215-k2-p04",
    "topic": "cauchy-schwarz",
    "kind": "t215-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $x$, for real numbers $x$ and $y$ with $5x - 8y = \\dfrac{89}{3}$ and $x^2 + y^2 = \\dfrac{89}{9}$.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "x = 5/3",
    "solution": [
      "Find $x$, for real numbers $x$ and $y$ with $5x - 8y = \\dfrac{89}{3}$ and $x^2 + y^2 = \\dfrac{89}{9}$.",
      "$\\left(5^2 + (-8)^2\\right)(x^2 + y^2) \\ge (5x - 8y)^2$",
      "The left side is $89 \\cdot \\dfrac{89}{9} = \\dfrac{7921}{9}$ and the right side is $\\left(\\dfrac{89}{3}\\right)^2 = \\dfrac{7921}{9}$, so the two sides are equal.",
      "There is a number $c$ with $x = 5c$ and $y = -8c$.",
      "$5(5c) - 8(-8c) = \\dfrac{89}{3}$",
      "$89c = \\dfrac{89}{3}$",
      "$c = \\dfrac{1}{3}$",
      "$x = \\dfrac{5}{3}$"
    ]
  },
  {
    "id": "t215-k2-p05",
    "topic": "cauchy-schwarz",
    "kind": "t215-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $x$, for real numbers $x$ and $y$ with $7x + 2y = -\\dfrac{53}{2}$ and $x^2 + y^2 = \\dfrac{53}{4}$.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "x = -7/2",
    "solution": [
      "Find $x$, for real numbers $x$ and $y$ with $7x + 2y = -\\dfrac{53}{2}$ and $x^2 + y^2 = \\dfrac{53}{4}$.",
      "$\\left(7^2 + 2^2\\right)(x^2 + y^2) \\ge (7x + 2y)^2$",
      "The left side is $53 \\cdot \\dfrac{53}{4} = \\dfrac{2809}{4}$ and the right side is $\\left(-\\dfrac{53}{2}\\right)^2 = \\dfrac{2809}{4}$, so the two sides are equal.",
      "There is a number $c$ with $x = 7c$ and $y = 2c$.",
      "$7(7c) + 2(2c) = -\\dfrac{53}{2}$",
      "$53c = -\\dfrac{53}{2}$",
      "$c = -\\dfrac{1}{2}$",
      "$x = -\\dfrac{7}{2}$"
    ]
  },
  {
    "id": "t215-k2-p06",
    "topic": "cauchy-schwarz",
    "kind": "t215-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $y$, for real numbers $x$ and $y$ with $9x + 2y = -\\dfrac{85}{3}$ and $x^2 + y^2 = \\dfrac{85}{9}$.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "y = -2/3",
    "solution": [
      "Find $y$, for real numbers $x$ and $y$ with $9x + 2y = -\\dfrac{85}{3}$ and $x^2 + y^2 = \\dfrac{85}{9}$.",
      "$\\left(9^2 + 2^2\\right)(x^2 + y^2) \\ge (9x + 2y)^2$",
      "The left side is $85 \\cdot \\dfrac{85}{9} = \\dfrac{7225}{9}$ and the right side is $\\left(-\\dfrac{85}{3}\\right)^2 = \\dfrac{7225}{9}$, so the two sides are equal.",
      "There is a number $c$ with $x = 9c$ and $y = 2c$.",
      "$9(9c) + 2(2c) = -\\dfrac{85}{3}$",
      "$85c = -\\dfrac{85}{3}$",
      "$c = -\\dfrac{1}{3}$",
      "$y = -\\dfrac{2}{3}$"
    ]
  },
  {
    "id": "t215-k2-p07",
    "topic": "cauchy-schwarz",
    "kind": "t215-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $x$, for real numbers $x$, $y$ and $z$ with $2x + 4y + 5z = -30$ and $x^2 + y^2 + z^2 = 20$.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "x = -4/3",
    "solution": [
      "Find $x$, for real numbers $x$, $y$ and $z$ with $2x + 4y + 5z = -30$ and $x^2 + y^2 + z^2 = 20$.",
      "$\\left(2^2 + 4^2 + 5^2\\right)(x^2 + y^2 + z^2) \\ge (2x + 4y + 5z)^2$",
      "The left side is $45 \\cdot 20 = 900$ and the right side is $(-30)^2 = 900$, so the two sides are equal.",
      "There is a number $c$ with $x = 2c$, $y = 4c$ and $z = 5c$.",
      "$2(2c) + 4(4c) + 5(5c) = -30$",
      "$45c = -30$",
      "$c = -\\dfrac{2}{3}$",
      "$x = -\\dfrac{4}{3}$"
    ]
  },
  {
    "id": "t215-k2-p08",
    "topic": "cauchy-schwarz",
    "kind": "t215-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $z$, for real numbers $x$, $y$ and $z$ with $5x - 6y + 4z = \\dfrac{77}{3}$ and $x^2 + y^2 + z^2 = \\dfrac{77}{9}$.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "z = 4/3",
    "solution": [
      "Find $z$, for real numbers $x$, $y$ and $z$ with $5x - 6y + 4z = \\dfrac{77}{3}$ and $x^2 + y^2 + z^2 = \\dfrac{77}{9}$.",
      "$\\left(5^2 + (-6)^2 + 4^2\\right)(x^2 + y^2 + z^2) \\ge (5x - 6y + 4z)^2$",
      "The left side is $77 \\cdot \\dfrac{77}{9} = \\dfrac{5929}{9}$ and the right side is $\\left(\\dfrac{77}{3}\\right)^2 = \\dfrac{5929}{9}$, so the two sides are equal.",
      "There is a number $c$ with $x = 5c$, $y = -6c$ and $z = 4c$.",
      "$5(5c) - 6(-6c) + 4(4c) = \\dfrac{77}{3}$",
      "$77c = \\dfrac{77}{3}$",
      "$c = \\dfrac{1}{3}$",
      "$z = \\dfrac{4}{3}$"
    ]
  },
  {
    "id": "t215-k2-p09",
    "topic": "cauchy-schwarz",
    "kind": "t215-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $x$, for real numbers $x$ and $y$ with $8x - 3y = \\dfrac{73}{3}$ and $x^2 + y^2 = \\dfrac{73}{9}$.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "x = 8/3",
    "solution": [
      "Find $x$, for real numbers $x$ and $y$ with $8x - 3y = \\dfrac{73}{3}$ and $x^2 + y^2 = \\dfrac{73}{9}$.",
      "$\\left(8^2 + (-3)^2\\right)(x^2 + y^2) \\ge (8x - 3y)^2$",
      "The left side is $73 \\cdot \\dfrac{73}{9} = \\dfrac{5329}{9}$ and the right side is $\\left(\\dfrac{73}{3}\\right)^2 = \\dfrac{5329}{9}$, so the two sides are equal.",
      "There is a number $c$ with $x = 8c$ and $y = -3c$.",
      "$8(8c) - 3(-3c) = \\dfrac{73}{3}$",
      "$73c = \\dfrac{73}{3}$",
      "$c = \\dfrac{1}{3}$",
      "$x = \\dfrac{8}{3}$"
    ]
  },
  {
    "id": "t215-k2-p10",
    "topic": "cauchy-schwarz",
    "kind": "t215-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $x$, for real numbers $x$ and $y$ with $4x + 9y = -\\dfrac{97}{2}$ and $x^2 + y^2 = \\dfrac{97}{4}$.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "x = -2",
    "solution": [
      "Find $x$, for real numbers $x$ and $y$ with $4x + 9y = -\\dfrac{97}{2}$ and $x^2 + y^2 = \\dfrac{97}{4}$.",
      "$\\left(4^2 + 9^2\\right)(x^2 + y^2) \\ge (4x + 9y)^2$",
      "The left side is $97 \\cdot \\dfrac{97}{4} = \\dfrac{9409}{4}$ and the right side is $\\left(-\\dfrac{97}{2}\\right)^2 = \\dfrac{9409}{4}$, so the two sides are equal.",
      "There is a number $c$ with $x = 4c$ and $y = 9c$.",
      "$4(4c) + 9(9c) = -\\dfrac{97}{2}$",
      "$97c = -\\dfrac{97}{2}$",
      "$c = -\\dfrac{1}{2}$",
      "$x = -2$"
    ]
  },
  {
    "id": "t215-k2-p11",
    "topic": "cauchy-schwarz",
    "kind": "t215-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $x$, for real numbers $x$, $y$ and $z$ with $4x + 7y - 5z = -60$ and $x^2 + y^2 + z^2 = 40$.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "x = -8/3",
    "solution": [
      "Find $x$, for real numbers $x$, $y$ and $z$ with $4x + 7y - 5z = -60$ and $x^2 + y^2 + z^2 = 40$.",
      "$\\left(4^2 + 7^2 + (-5)^2\\right)(x^2 + y^2 + z^2) \\ge (4x + 7y - 5z)^2$",
      "The left side is $90 \\cdot 40 = 3600$ and the right side is $(-60)^2 = 3600$, so the two sides are equal.",
      "There is a number $c$ with $x = 4c$, $y = 7c$ and $z = -5c$.",
      "$4(4c) + 7(7c) - 5(-5c) = -60$",
      "$90c = -60$",
      "$c = -\\dfrac{2}{3}$",
      "$x = -\\dfrac{8}{3}$"
    ]
  },
  {
    "id": "t215-k2-p12",
    "topic": "cauchy-schwarz",
    "kind": "t215-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $z$, for real numbers $x$, $y$ and $z$ with $2x + 3y - 9z = -\\dfrac{94}{3}$ and $x^2 + y^2 + z^2 = \\dfrac{94}{9}$.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "z = 3",
    "solution": [
      "Find $z$, for real numbers $x$, $y$ and $z$ with $2x + 3y - 9z = -\\dfrac{94}{3}$ and $x^2 + y^2 + z^2 = \\dfrac{94}{9}$.",
      "$\\left(2^2 + 3^2 + (-9)^2\\right)(x^2 + y^2 + z^2) \\ge (2x + 3y - 9z)^2$",
      "The left side is $94 \\cdot \\dfrac{94}{9} = \\dfrac{8836}{9}$ and the right side is $\\left(-\\dfrac{94}{3}\\right)^2 = \\dfrac{8836}{9}$, so the two sides are equal.",
      "There is a number $c$ with $x = 2c$, $y = 3c$ and $z = -9c$.",
      "$2(2c) + 3(3c) - 9(-9c) = -\\dfrac{94}{3}$",
      "$94c = -\\dfrac{94}{3}$",
      "$c = -\\dfrac{1}{3}$",
      "$z = 3$"
    ]
  },
  {
    "id": "t215-k2-p13",
    "topic": "cauchy-schwarz",
    "kind": "t215-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $y$, for real numbers $x$ and $y$ with $5x - 4y = -\\dfrac{41}{3}$ and $x^2 + y^2 = \\dfrac{41}{9}$.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "y = 4/3",
    "solution": [
      "Find $y$, for real numbers $x$ and $y$ with $5x - 4y = -\\dfrac{41}{3}$ and $x^2 + y^2 = \\dfrac{41}{9}$.",
      "$\\left(5^2 + (-4)^2\\right)(x^2 + y^2) \\ge (5x - 4y)^2$",
      "The left side is $41 \\cdot \\dfrac{41}{9} = \\dfrac{1681}{9}$ and the right side is $\\left(-\\dfrac{41}{3}\\right)^2 = \\dfrac{1681}{9}$, so the two sides are equal.",
      "There is a number $c$ with $x = 5c$ and $y = -4c$.",
      "$5(5c) - 4(-4c) = -\\dfrac{41}{3}$",
      "$41c = -\\dfrac{41}{3}$",
      "$c = -\\dfrac{1}{3}$",
      "$y = \\dfrac{4}{3}$"
    ]
  },
  {
    "id": "t215-k2-p14",
    "topic": "cauchy-schwarz",
    "kind": "t215-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find $y$, for real numbers $x$ and $y$ with $2x + 5y = -\\dfrac{87}{2}$ and $x^2 + y^2 = \\dfrac{261}{4}$.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "y = -15/2",
    "solution": [
      "Find $y$, for real numbers $x$ and $y$ with $2x + 5y = -\\dfrac{87}{2}$ and $x^2 + y^2 = \\dfrac{261}{4}$.",
      "$\\left(2^2 + 5^2\\right)(x^2 + y^2) \\ge (2x + 5y)^2$",
      "The left side is $29 \\cdot \\dfrac{261}{4} = \\dfrac{7569}{4}$ and the right side is $\\left(-\\dfrac{87}{2}\\right)^2 = \\dfrac{7569}{4}$, so the two sides are equal.",
      "There is a number $c$ with $x = 2c$ and $y = 5c$.",
      "$2(2c) + 5(5c) = -\\dfrac{87}{2}$",
      "$29c = -\\dfrac{87}{2}$",
      "$c = -\\dfrac{3}{2}$",
      "$y = -\\dfrac{15}{2}$"
    ]
  },
  {
    "id": "t215-k3-p01",
    "topic": "cauchy-schwarz",
    "kind": "t215-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(27x + 16y + 4z)\\left(\\dfrac{3}{x} + \\dfrac{4}{y} + \\dfrac{1}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
    "given": [
      "$(27x + 16y + 4z)\\left(\\dfrac{3}{x} + \\dfrac{4}{y} + \\dfrac{1}{z}\\right) \\ge \\left(\\sqrt{27x} \\cdot \\sqrt{\\dfrac{3}{x}} + \\sqrt{16y} \\cdot \\sqrt{\\dfrac{4}{y}} + \\sqrt{4z} \\cdot \\sqrt{\\dfrac{1}{z}}\\right)^2$",
      "$\\sqrt{27x} \\cdot \\sqrt{\\dfrac{3}{x}} = 9$",
      "$\\sqrt{16y} \\cdot \\sqrt{\\dfrac{4}{y}} = 8 + 9 = 17$",
      "$\\sqrt{4z} \\cdot \\sqrt{\\dfrac{1}{z}} = 2$",
      "$E = (17 + 2)^2 = 361$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: sqrt(16*y)*sqrt(4/y) = 8",
    "solution": [
      "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(27x + 16y + 4z)\\left(\\dfrac{3}{x} + \\dfrac{4}{y} + \\dfrac{1}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
      "Lines 1 and 2 are right: the Cauchy-Schwarz Inequality for the two sequences of square roots, and the first product.",
      "Line 3 runs on from the product, which is $8$, to the total so far, $17$, with a second equals sign.",
      "Line 3 written right is $\\sqrt{16y} \\cdot \\sqrt{\\dfrac{4}{y}} = 8$."
    ]
  },
  {
    "id": "t215-k3-p02",
    "topic": "cauchy-schwarz",
    "kind": "t215-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(18x + y + 4z)\\left(\\dfrac{2}{x} + \\dfrac{16}{y} + \\dfrac{1}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
    "given": [
      "$(18x + y + 4z)\\left(\\dfrac{2}{x} + \\dfrac{16}{y} + \\dfrac{1}{z}\\right) \\ge \\left(\\sqrt{18x} \\cdot \\sqrt{\\dfrac{2}{x}} + \\sqrt{y} \\cdot \\sqrt{\\dfrac{16}{y}} + \\sqrt{4z} \\cdot \\sqrt{\\dfrac{1}{z}}\\right)^2$",
      "$\\sqrt{18x} \\cdot \\sqrt{\\dfrac{2}{x}} = \\sqrt{36}$",
      "$\\sqrt{y} \\cdot \\sqrt{\\dfrac{16}{y}} = \\sqrt{16}$",
      "$\\sqrt{4z} \\cdot \\sqrt{\\dfrac{1}{z}} = \\sqrt{4}$",
      "$\\left(\\sqrt{36} + \\sqrt{16} + \\sqrt{4}\\right)^2 = (6 + 4 + 2)^2$",
      "$(6 + 4 + 2)^2 = 36 + 16 + 4$",
      "$E = 56$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 6: (6+4+2)^2 = 144",
    "solution": [
      "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(18x + y + 4z)\\left(\\dfrac{2}{x} + \\dfrac{16}{y} + \\dfrac{1}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
      "Lines 1 to 5 are right: the Cauchy-Schwarz Inequality for the two sequences of square roots, the three products, and the roots worked out.",
      "Line 6 squares the sum $6 + 4 + 2$ one term at a time.",
      "Line 6 written right is $(6 + 4 + 2)^2 = 144$."
    ]
  },
  {
    "id": "t215-k3-p03",
    "topic": "cauchy-schwarz",
    "kind": "t215-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(27x + y + 2z)\\left(\\dfrac{3}{x} + \\dfrac{9}{y} + \\dfrac{2}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
    "given": [
      "$(27x + y + 2z)\\left(\\dfrac{3}{x} + \\dfrac{9}{y} + \\dfrac{2}{z}\\right) \\ge \\left(\\sqrt{27x} \\cdot \\sqrt{\\dfrac{3}{x}} + \\sqrt{y} \\cdot \\sqrt{\\dfrac{9}{y}} + \\sqrt{2z} \\cdot \\sqrt{\\dfrac{2}{z}}\\right)^2$",
      "$\\sqrt{27x} \\cdot \\sqrt{\\dfrac{3}{x}} = \\sqrt{81}$",
      "$\\sqrt{y} \\cdot \\sqrt{\\dfrac{9}{y}} = \\sqrt{9}$",
      "$\\sqrt{2z} \\cdot \\sqrt{\\dfrac{2}{z}} = \\sqrt{4}$",
      "$\\left(\\sqrt{81} + \\sqrt{9} + \\sqrt{4}\\right)^2 = (9 + 3 + 2)^2$",
      "$(9 + 3 + 2)^2 = 81 + 9 + 4$",
      "$E = 94$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 6: (9+3+2)^2 = 196",
    "solution": [
      "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(27x + y + 2z)\\left(\\dfrac{3}{x} + \\dfrac{9}{y} + \\dfrac{2}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
      "Lines 1 to 5 are right: the Cauchy-Schwarz Inequality for the two sequences of square roots, the three products, and the roots worked out.",
      "Line 6 squares the sum $9 + 3 + 2$ one term at a time.",
      "Line 6 written right is $(9 + 3 + 2)^2 = 196$."
    ]
  },
  {
    "id": "t215-k3-p04",
    "topic": "cauchy-schwarz",
    "kind": "t215-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(8x + 27y + 9z)\\left(\\dfrac{2}{x} + \\dfrac{3}{y} + \\dfrac{16}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
    "given": [
      "$(8x + 27y + 9z)\\left(\\dfrac{2}{x} + \\dfrac{3}{y} + \\dfrac{16}{z}\\right) \\ge \\left(\\sqrt{8x} \\cdot \\sqrt{\\dfrac{2}{x}} + \\sqrt{27y} \\cdot \\sqrt{\\dfrac{3}{y}} + \\sqrt{9z} \\cdot \\sqrt{\\dfrac{16}{z}}\\right)^2$",
      "$\\sqrt{8x} \\cdot \\sqrt{\\dfrac{2}{x}} = 4$",
      "$\\sqrt{27y} \\cdot \\sqrt{\\dfrac{3}{y}} = 9$",
      "$\\sqrt{9z} \\cdot \\sqrt{\\dfrac{16}{z}} = 12$",
      "$(4 + 9 + 12)^2 = 16 + 81 + 144$",
      "$16 + 81 + 144 = 241$",
      "$E = 241$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 5: (4+9+12)^2 = 625",
    "solution": [
      "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(8x + 27y + 9z)\\left(\\dfrac{2}{x} + \\dfrac{3}{y} + \\dfrac{16}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
      "Lines 1 to 4 are right: the Cauchy-Schwarz Inequality for the two sequences of square roots, and the three products.",
      "Line 5 squares the sum $4 + 9 + 12$ one term at a time.",
      "Line 5 written right is $(4 + 9 + 12)^2 = 625$."
    ]
  },
  {
    "id": "t215-k3-p05",
    "topic": "cauchy-schwarz",
    "kind": "t215-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(20x + 8y + 11z)\\left(\\dfrac{5}{x} + \\dfrac{18}{y} + \\dfrac{11}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
    "given": [
      "$(20x + 8y + 11z)\\left(\\dfrac{5}{x} + \\dfrac{18}{y} + \\dfrac{11}{z}\\right) \\ge \\left(\\sqrt{20x} \\cdot \\sqrt{\\dfrac{5}{x}} + \\sqrt{8y} \\cdot \\sqrt{\\dfrac{18}{y}} + \\sqrt{11z} \\cdot \\sqrt{\\dfrac{11}{z}}\\right)^2$",
      "$\\sqrt{20x} \\cdot \\sqrt{\\dfrac{5}{x}} = 10$",
      "$\\sqrt{8y} \\cdot \\sqrt{\\dfrac{18}{y}} = 12$",
      "$\\sqrt{11z} \\cdot \\sqrt{\\dfrac{11}{z}} = 11 + 10 + 12 = 33$",
      "$E = 33^2 = 1089$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: sqrt(11*z)*sqrt(11/z) = 11",
    "solution": [
      "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(20x + 8y + 11z)\\left(\\dfrac{5}{x} + \\dfrac{18}{y} + \\dfrac{11}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
      "Lines 1 to 3 are right: the Cauchy-Schwarz Inequality for the two sequences of square roots, and the first two products.",
      "Line 4 runs on from the product, which is $11$, to the total, $33$, with a second equals sign.",
      "Line 4 written right is $\\sqrt{11z} \\cdot \\sqrt{\\dfrac{11}{z}} = 11$."
    ]
  },
  {
    "id": "t215-k3-p06",
    "topic": "cauchy-schwarz",
    "kind": "t215-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(10x + 9y + 24z)\\left(\\dfrac{10}{x} + \\dfrac{4}{y} + \\dfrac{6}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
    "given": [
      "$(10x + 9y + 24z)\\left(\\dfrac{10}{x} + \\dfrac{4}{y} + \\dfrac{6}{z}\\right) \\ge \\left(\\sqrt{10x} \\cdot \\sqrt{\\dfrac{10}{x}} + \\sqrt{9y} \\cdot \\sqrt{\\dfrac{4}{y}} + \\sqrt{24z} \\cdot \\sqrt{\\dfrac{6}{z}}\\right)^2$",
      "$\\sqrt{10x} \\cdot \\sqrt{\\dfrac{10}{x}} = \\sqrt{100}$",
      "$\\sqrt{9y} \\cdot \\sqrt{\\dfrac{4}{y}} = \\sqrt{36}$",
      "$\\sqrt{24z} \\cdot \\sqrt{\\dfrac{6}{z}} = \\sqrt{144}$",
      "$\\left(\\sqrt{100} + \\sqrt{36} + \\sqrt{144}\\right)^2 = (10 + 6 + 12)^2$",
      "$(10 + 6 + 12)^2 = 100 + 36 + 144$",
      "$E = 280$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 6: (10+6+12)^2 = 784",
    "solution": [
      "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(10x + 9y + 24z)\\left(\\dfrac{10}{x} + \\dfrac{4}{y} + \\dfrac{6}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
      "Lines 1 to 5 are right: the Cauchy-Schwarz Inequality for the two sequences of square roots, the three products, and the roots worked out.",
      "Line 6 squares the sum $10 + 6 + 12$ one term at a time.",
      "Line 6 written right is $(10 + 6 + 12)^2 = 784$."
    ]
  },
  {
    "id": "t215-k3-p07",
    "topic": "cauchy-schwarz",
    "kind": "t215-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(3x + 11y + 5z)\\left(\\dfrac{27}{x} + \\dfrac{11}{y} + \\dfrac{20}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
    "given": [
      "$(3x + 11y + 5z)\\left(\\dfrac{27}{x} + \\dfrac{11}{y} + \\dfrac{20}{z}\\right) \\ge \\left(\\sqrt{3x} \\cdot \\sqrt{\\dfrac{27}{x}} + \\sqrt{11y} \\cdot \\sqrt{\\dfrac{11}{y}} + \\sqrt{5z} \\cdot \\sqrt{\\dfrac{20}{z}}\\right)^2$",
      "$\\sqrt{3x} \\cdot \\sqrt{\\dfrac{27}{x}} = 9$",
      "$\\sqrt{11y} \\cdot \\sqrt{\\dfrac{11}{y}} = 11$",
      "$\\sqrt{5z} \\cdot \\sqrt{\\dfrac{20}{z}} = 10 + 9 + 11 = 30$",
      "$E = 30^2 = 900$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: sqrt(5*z)*sqrt(20/z) = 10",
    "solution": [
      "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(3x + 11y + 5z)\\left(\\dfrac{27}{x} + \\dfrac{11}{y} + \\dfrac{20}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
      "Lines 1 to 3 are right: the Cauchy-Schwarz Inequality for the two sequences of square roots, and the first two products.",
      "Line 4 runs on from the product, which is $10$, to the total, $30$, with a second equals sign.",
      "Line 4 written right is $\\sqrt{5z} \\cdot \\sqrt{\\dfrac{20}{z}} = 10$."
    ]
  },
  {
    "id": "t215-k3-p08",
    "topic": "cauchy-schwarz",
    "kind": "t215-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(27x + 4y + 24z)\\left(\\dfrac{3}{x} + \\dfrac{1}{y} + \\dfrac{6}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
    "given": [
      "$(27x + 4y + 24z)\\left(\\dfrac{3}{x} + \\dfrac{1}{y} + \\dfrac{6}{z}\\right) \\ge \\left(\\sqrt{27x} \\cdot \\sqrt{\\dfrac{3}{x}} + \\sqrt{4y} \\cdot \\sqrt{\\dfrac{1}{y}} + \\sqrt{24z} \\cdot \\sqrt{\\dfrac{6}{z}}\\right)^2$",
      "$\\sqrt{27x} \\cdot \\sqrt{\\dfrac{3}{x}} = 9$",
      "$\\sqrt{4y} \\cdot \\sqrt{\\dfrac{1}{y}} = 2$",
      "$\\sqrt{24z} \\cdot \\sqrt{\\dfrac{6}{z}} = 12 + 9 + 2 = 23$",
      "$E = 23^2 = 529$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: sqrt(24*z)*sqrt(6/z) = 12",
    "solution": [
      "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(27x + 4y + 24z)\\left(\\dfrac{3}{x} + \\dfrac{1}{y} + \\dfrac{6}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
      "Lines 1 to 3 are right: the Cauchy-Schwarz Inequality for the two sequences of square roots, and the first two products.",
      "Line 4 runs on from the product, which is $12$, to the total, $23$, with a second equals sign.",
      "Line 4 written right is $\\sqrt{24z} \\cdot \\sqrt{\\dfrac{6}{z}} = 12$."
    ]
  },
  {
    "id": "t215-k3-p09",
    "topic": "cauchy-schwarz",
    "kind": "t215-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(6x + 10y + 32z)\\left(\\dfrac{24}{x} + \\dfrac{10}{y} + \\dfrac{2}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
    "given": [
      "$(6x + 10y + 32z)\\left(\\dfrac{24}{x} + \\dfrac{10}{y} + \\dfrac{2}{z}\\right) \\ge \\left(\\sqrt{6x} \\cdot \\sqrt{\\dfrac{24}{x}} + \\sqrt{10y} \\cdot \\sqrt{\\dfrac{10}{y}} + \\sqrt{32z} \\cdot \\sqrt{\\dfrac{2}{z}}\\right)^2$",
      "$\\sqrt{6x} \\cdot \\sqrt{\\dfrac{24}{x}} = 12$",
      "$\\sqrt{10y} \\cdot \\sqrt{\\dfrac{10}{y}} = 10 + 12 = 22$",
      "$\\sqrt{32z} \\cdot \\sqrt{\\dfrac{2}{z}} = 8$",
      "$E = (22 + 8)^2 = 900$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: sqrt(10*y)*sqrt(10/y) = 10",
    "solution": [
      "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(6x + 10y + 32z)\\left(\\dfrac{24}{x} + \\dfrac{10}{y} + \\dfrac{2}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
      "Lines 1 and 2 are right: the Cauchy-Schwarz Inequality for the two sequences of square roots, and the first product.",
      "Line 3 runs on from the product, which is $10$, to the total so far, $22$, with a second equals sign.",
      "Line 3 written right is $\\sqrt{10y} \\cdot \\sqrt{\\dfrac{10}{y}} = 10$."
    ]
  },
  {
    "id": "t215-k3-p10",
    "topic": "cauchy-schwarz",
    "kind": "t215-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(8x + 25y + 4z)\\left(\\dfrac{8}{x} + \\dfrac{1}{y} + \\dfrac{25}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
    "given": [
      "$(8x + 25y + 4z)\\left(\\dfrac{8}{x} + \\dfrac{1}{y} + \\dfrac{25}{z}\\right) \\ge \\left(\\sqrt{8x} \\cdot \\sqrt{\\dfrac{8}{x}} + \\sqrt{25y} \\cdot \\sqrt{\\dfrac{1}{y}} + \\sqrt{4z} \\cdot \\sqrt{\\dfrac{25}{z}}\\right)^2$",
      "$\\sqrt{8x} \\cdot \\sqrt{\\dfrac{8}{x}} = 8$",
      "$\\sqrt{25y} \\cdot \\sqrt{\\dfrac{1}{y}} = 5$",
      "$\\sqrt{4z} \\cdot \\sqrt{\\dfrac{25}{z}} = 10$",
      "$(8 + 5 + 10)^2 = 64 + 25 + 100$",
      "$64 + 25 + 100 = 189$",
      "$E = 189$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 5: (8+5+10)^2 = 529",
    "solution": [
      "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(8x + 25y + 4z)\\left(\\dfrac{8}{x} + \\dfrac{1}{y} + \\dfrac{25}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
      "Lines 1 to 4 are right: the Cauchy-Schwarz Inequality for the two sequences of square roots, and the three products.",
      "Line 5 squares the sum $8 + 5 + 10$ one term at a time.",
      "Line 5 written right is $(8 + 5 + 10)^2 = 529$."
    ]
  },
  {
    "id": "t215-k3-p11",
    "topic": "cauchy-schwarz",
    "kind": "t215-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(20x + 27y + 16z)\\left(\\dfrac{5}{x} + \\dfrac{3}{y} + \\dfrac{1}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
    "given": [
      "$(20x + 27y + 16z)\\left(\\dfrac{5}{x} + \\dfrac{3}{y} + \\dfrac{1}{z}\\right) \\ge \\left(\\sqrt{20x} \\cdot \\sqrt{\\dfrac{5}{x}} + \\sqrt{27y} \\cdot \\sqrt{\\dfrac{3}{y}} + \\sqrt{16z} \\cdot \\sqrt{\\dfrac{1}{z}}\\right)^2$",
      "$\\sqrt{20x} \\cdot \\sqrt{\\dfrac{5}{x}} = \\sqrt{100}$",
      "$\\sqrt{27y} \\cdot \\sqrt{\\dfrac{3}{y}} = \\sqrt{81}$",
      "$\\sqrt{16z} \\cdot \\sqrt{\\dfrac{1}{z}} = \\sqrt{16}$",
      "$\\left(\\sqrt{100} + \\sqrt{81} + \\sqrt{16}\\right)^2 = (10 + 9 + 4)^2$",
      "$(10 + 9 + 4)^2 = 100 + 81 + 16$",
      "$E = 197$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 6: (10+9+4)^2 = 529",
    "solution": [
      "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(20x + 27y + 16z)\\left(\\dfrac{5}{x} + \\dfrac{3}{y} + \\dfrac{1}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
      "Lines 1 to 5 are right: the Cauchy-Schwarz Inequality for the two sequences of square roots, the three products, and the roots worked out.",
      "Line 6 squares the sum $10 + 9 + 4$ one term at a time.",
      "Line 6 written right is $(10 + 9 + 4)^2 = 529$."
    ]
  },
  {
    "id": "t215-k3-p12",
    "topic": "cauchy-schwarz",
    "kind": "t215-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(x + 2y + 12z)\\left(\\dfrac{4}{x} + \\dfrac{8}{y} + \\dfrac{12}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
    "given": [
      "$(x + 2y + 12z)\\left(\\dfrac{4}{x} + \\dfrac{8}{y} + \\dfrac{12}{z}\\right) \\ge \\left(\\sqrt{x} \\cdot \\sqrt{\\dfrac{4}{x}} + \\sqrt{2y} \\cdot \\sqrt{\\dfrac{8}{y}} + \\sqrt{12z} \\cdot \\sqrt{\\dfrac{12}{z}}\\right)^2$",
      "$\\sqrt{x} \\cdot \\sqrt{\\dfrac{4}{x}} = 2$",
      "$\\sqrt{2y} \\cdot \\sqrt{\\dfrac{8}{y}} = 4$",
      "$\\sqrt{12z} \\cdot \\sqrt{\\dfrac{12}{z}} = 12$",
      "$(2 + 4 + 12)^2 = 4 + 16 + 144$",
      "$4 + 16 + 144 = 164$",
      "$E = 164$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 5: (2+4+12)^2 = 324",
    "solution": [
      "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(x + 2y + 12z)\\left(\\dfrac{4}{x} + \\dfrac{8}{y} + \\dfrac{12}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
      "Lines 1 to 4 are right: the Cauchy-Schwarz Inequality for the two sequences of square roots, and the three products.",
      "Line 5 squares the sum $2 + 4 + 12$ one term at a time.",
      "Line 5 written right is $(2 + 4 + 12)^2 = 324$."
    ]
  },
  {
    "id": "t215-k3-p13",
    "topic": "cauchy-schwarz",
    "kind": "t215-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(25x + 7y + z)\\left(\\dfrac{1}{x} + \\dfrac{7}{y} + \\dfrac{9}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
    "given": [
      "$(25x + 7y + z)\\left(\\dfrac{1}{x} + \\dfrac{7}{y} + \\dfrac{9}{z}\\right) \\ge \\left(\\sqrt{25x} \\cdot \\sqrt{\\dfrac{1}{x}} + \\sqrt{7y} \\cdot \\sqrt{\\dfrac{7}{y}} + \\sqrt{z} \\cdot \\sqrt{\\dfrac{9}{z}}\\right)^2$",
      "$\\sqrt{25x} \\cdot \\sqrt{\\dfrac{1}{x}} = 5$",
      "$\\sqrt{7y} \\cdot \\sqrt{\\dfrac{7}{y}} = 7$",
      "$\\sqrt{z} \\cdot \\sqrt{\\dfrac{9}{z}} = 3 + 5 + 7 = 15$",
      "$E = 15^2 = 225$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: sqrt(z)*sqrt(9/z) = 3",
    "solution": [
      "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(25x + 7y + z)\\left(\\dfrac{1}{x} + \\dfrac{7}{y} + \\dfrac{9}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
      "Lines 1 to 3 are right: the Cauchy-Schwarz Inequality for the two sequences of square roots, and the first two products.",
      "Line 4 runs on from the product, which is $3$, to the total, $15$, with a second equals sign.",
      "Line 4 written right is $\\sqrt{z} \\cdot \\sqrt{\\dfrac{9}{z}} = 3$."
    ]
  },
  {
    "id": "t215-k3-p14",
    "topic": "cauchy-schwarz",
    "kind": "t215-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(16x + 3y + 4z)\\left(\\dfrac{9}{x} + \\dfrac{3}{y} + \\dfrac{25}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
    "given": [
      "$(16x + 3y + 4z)\\left(\\dfrac{9}{x} + \\dfrac{3}{y} + \\dfrac{25}{z}\\right) \\ge \\left(\\sqrt{16x} \\cdot \\sqrt{\\dfrac{9}{x}} + \\sqrt{3y} \\cdot \\sqrt{\\dfrac{3}{y}} + \\sqrt{4z} \\cdot \\sqrt{\\dfrac{25}{z}}\\right)^2$",
      "$\\sqrt{16x} \\cdot \\sqrt{\\dfrac{9}{x}} = 12$",
      "$\\sqrt{3y} \\cdot \\sqrt{\\dfrac{3}{y}} = 3$",
      "$\\sqrt{4z} \\cdot \\sqrt{\\dfrac{25}{z}} = 10$",
      "$(12 + 3 + 10)^2 = 144 + 9 + 100$",
      "$144 + 9 + 100 = 253$",
      "$E = 253$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 5: (12+3+10)^2 = 625",
    "solution": [
      "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(16x + 3y + 4z)\\left(\\dfrac{9}{x} + \\dfrac{3}{y} + \\dfrac{25}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
      "Lines 1 to 4 are right: the Cauchy-Schwarz Inequality for the two sequences of square roots, and the three products.",
      "Line 5 squares the sum $12 + 3 + 10$ one term at a time.",
      "Line 5 written right is $(12 + 3 + 10)^2 = 625$."
    ]
  },
  {
    "id": "t215-k3-p15",
    "topic": "cauchy-schwarz",
    "kind": "t215-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(2x + 3y + 25z)\\left(\\dfrac{32}{x} + \\dfrac{3}{y} + \\dfrac{1}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
    "given": [
      "$(2x + 3y + 25z)\\left(\\dfrac{32}{x} + \\dfrac{3}{y} + \\dfrac{1}{z}\\right) \\ge \\left(\\sqrt{2x} \\cdot \\sqrt{\\dfrac{32}{x}} + \\sqrt{3y} \\cdot \\sqrt{\\dfrac{3}{y}} + \\sqrt{25z} \\cdot \\sqrt{\\dfrac{1}{z}}\\right)^2$",
      "$\\sqrt{2x} \\cdot \\sqrt{\\dfrac{32}{x}} = 8$",
      "$\\sqrt{3y} \\cdot \\sqrt{\\dfrac{3}{y}} = 3 + 8 = 11$",
      "$\\sqrt{25z} \\cdot \\sqrt{\\dfrac{1}{z}} = 5$",
      "$E = (11 + 5)^2 = 256$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: sqrt(3*y)*sqrt(3/y) = 3",
    "solution": [
      "Find the first wrong line in this working for the number $E$ that the Cauchy-Schwarz Inequality gives in $(2x + 3y + 25z)\\left(\\dfrac{32}{x} + \\dfrac{3}{y} + \\dfrac{1}{z}\\right) \\ge E$, for positive numbers $x$, $y$ and $z$, and write that line right.",
      "Lines 1 and 2 are right: the Cauchy-Schwarz Inequality for the two sequences of square roots, and the first product.",
      "Line 3 runs on from the product, which is $3$, to the total so far, $11$, with a second equals sign.",
      "Line 3 written right is $\\sqrt{3y} \\cdot \\sqrt{\\dfrac{3}{y}} = 3$."
    ]
  },
  {
    "id": "t215-k4-p01",
    "topic": "cauchy-schwarz",
    "kind": "t215-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $6$, $8$, $9$ and the second sequence $x$, $7$, $8$, the product of the sum of the squares of the first sequence and the sum of the squares of the second is the number $y$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (6^2+8^2+9^2)*(x^2+7^2+8^2)",
    "solution": [
      "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $6$, $8$, $9$ and the second sequence $x$, $7$, $8$, the product of the sum of the squares of the first sequence and the sum of the squares of the second is the number $y$.",
      "The sum of the squares of the first sequence is $6^2 + 8^2 + 9^2$.",
      "The sum of the squares of the second sequence is $x^2 + 7^2 + 8^2$.",
      "$y = (6^2 + 8^2 + 9^2)(x^2 + 7^2 + 8^2)$"
    ]
  },
  {
    "id": "t215-k4-p02",
    "topic": "cauchy-schwarz",
    "kind": "t215-k4",
    "formNo": 3,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$, with the product of the two sums of squares on the left: For the first sequence $2$, $5$, $4$ and the second sequence $8$, $x + 4$, $16$, equality holds in the Cauchy-Schwarz Inequality.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "(2^2+5^2+4^2)*(8^2+(x+4)^2+16^2) = (2*8+5*(x+4)+4*16)^2",
    "solution": [
      "Write this sentence as an equation in $x$, with the product of the two sums of squares on the left: For the first sequence $2$, $5$, $4$ and the second sequence $8$, $x + 4$, $16$, equality holds in the Cauchy-Schwarz Inequality.",
      "The side with the sums of squares is $(2^2 + 5^2 + 4^2)(8^2 + (x + 4)^2 + 16^2)$.",
      "The other side is $(2 \\cdot 8 + 5(x + 4) + 4 \\cdot 16)^2$.",
      "$(2^2 + 5^2 + 4^2)(8^2 + (x + 4)^2 + 16^2) = (2 \\cdot 8 + 5(x + 4) + 4 \\cdot 16)^2$"
    ]
  },
  {
    "id": "t215-k4-p03",
    "topic": "cauchy-schwarz",
    "kind": "t215-k4",
    "formNo": 3,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$, with the product of the two sums of squares on the left: For the first sequence $8$, $2$ and the second sequence $x$, $10$, the two sides of the Cauchy-Schwarz Inequality are equal.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "(8^2+2^2)*(x^2+10^2) = (8*x+2*10)^2",
    "solution": [
      "Write this sentence as an equation in $x$, with the product of the two sums of squares on the left: For the first sequence $8$, $2$ and the second sequence $x$, $10$, the two sides of the Cauchy-Schwarz Inequality are equal.",
      "The side with the sums of squares is $(8^2 + 2^2)(x^2 + 10^2)$.",
      "The other side is $(8x + 2 \\cdot 10)^2$.",
      "$(8^2 + 2^2)(x^2 + 10^2) = (8x + 2 \\cdot 10)^2$"
    ]
  },
  {
    "id": "t215-k4-p04",
    "topic": "cauchy-schwarz",
    "kind": "t215-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $2$, $3$ and the second sequence $x + 3$, $x$, the product of the sum of the squares of the first sequence and the sum of the squares of the second is the number $y$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (2^2+3^2)*((x+3)^2+x^2)",
    "solution": [
      "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $2$, $3$ and the second sequence $x + 3$, $x$, the product of the sum of the squares of the first sequence and the sum of the squares of the second is the number $y$.",
      "The sum of the squares of the first sequence is $2^2 + 3^2$.",
      "The sum of the squares of the second sequence is $(x + 3)^2 + x^2$.",
      "$y = (2^2 + 3^2)((x + 3)^2 + x^2)$"
    ]
  },
  {
    "id": "t215-k4-p05",
    "topic": "cauchy-schwarz",
    "kind": "t215-k4",
    "formNo": 3,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$, with the product of the two sums of squares on the left: For the first sequence $7$, $5$, $6$ and the second sequence $21$, $15$, $x$, equality holds in the Cauchy-Schwarz Inequality.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "(7^2+5^2+6^2)*(21^2+15^2+x^2) = (7*21+5*15+6*x)^2",
    "solution": [
      "Write this sentence as an equation in $x$, with the product of the two sums of squares on the left: For the first sequence $7$, $5$, $6$ and the second sequence $21$, $15$, $x$, equality holds in the Cauchy-Schwarz Inequality.",
      "The side with the sums of squares is $(7^2 + 5^2 + 6^2)(21^2 + 15^2 + x^2)$.",
      "The other side is $(7 \\cdot 21 + 5 \\cdot 15 + 6x)^2$.",
      "$(7^2 + 5^2 + 6^2)(21^2 + 15^2 + x^2) = (7 \\cdot 21 + 5 \\cdot 15 + 6x)^2$"
    ]
  },
  {
    "id": "t215-k4-p06",
    "topic": "cauchy-schwarz",
    "kind": "t215-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $5$, $2$ and the second sequence $x$, $x + 5$, the terms in the same places are multiplied, the products are added, and the square of that sum is the number $y$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (5*x+2*(x+5))^2",
    "solution": [
      "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $5$, $2$ and the second sequence $x$, $x + 5$, the terms in the same places are multiplied, the products are added, and the square of that sum is the number $y$.",
      "The products of the terms in the same places are $5x$ and $2(x + 5)$.",
      "The sum of the products is $5x + 2(x + 5)$.",
      "$y = (5x + 2(x + 5))^2$"
    ]
  },
  {
    "id": "t215-k4-p07",
    "topic": "cauchy-schwarz",
    "kind": "t215-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $5$, $9$, $6$ and the second sequence $x$, $9$, $6$, the product of the sum of the squares of the first sequence and the sum of the squares of the second is the number $y$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (5^2+9^2+6^2)*(x^2+9^2+6^2)",
    "solution": [
      "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $5$, $9$, $6$ and the second sequence $x$, $9$, $6$, the product of the sum of the squares of the first sequence and the sum of the squares of the second is the number $y$.",
      "The sum of the squares of the first sequence is $5^2 + 9^2 + 6^2$.",
      "The sum of the squares of the second sequence is $x^2 + 9^2 + 6^2$.",
      "$y = (5^2 + 9^2 + 6^2)(x^2 + 9^2 + 6^2)$"
    ]
  },
  {
    "id": "t215-k4-p08",
    "topic": "cauchy-schwarz",
    "kind": "t215-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $4$, $6$, $3$ and the second sequence $x$, $4$, $5$, the terms in the same places are multiplied, the products are added, and the square of that sum is the number $y$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (4*x+6*4+3*5)^2",
    "solution": [
      "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $4$, $6$, $3$ and the second sequence $x$, $4$, $5$, the terms in the same places are multiplied, the products are added, and the square of that sum is the number $y$.",
      "The products of the terms in the same places are $4x$, $6 \\cdot 4$ and $3 \\cdot 5$.",
      "The sum of the products is $4x + 6 \\cdot 4 + 3 \\cdot 5$.",
      "$y = (4x + 6 \\cdot 4 + 3 \\cdot 5)^2$"
    ]
  },
  {
    "id": "t215-k4-p09",
    "topic": "cauchy-schwarz",
    "kind": "t215-k4",
    "formNo": 3,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$, with the product of the two sums of squares on the left: For the first sequence $5$, $4$ and the second sequence $x$, $16$, equality holds in the Cauchy-Schwarz Inequality.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "(5^2+4^2)*(x^2+16^2) = (5*x+4*16)^2",
    "solution": [
      "Write this sentence as an equation in $x$, with the product of the two sums of squares on the left: For the first sequence $5$, $4$ and the second sequence $x$, $16$, equality holds in the Cauchy-Schwarz Inequality.",
      "The side with the sums of squares is $(5^2 + 4^2)(x^2 + 16^2)$.",
      "The other side is $(5x + 4 \\cdot 16)^2$.",
      "$(5^2 + 4^2)(x^2 + 16^2) = (5x + 4 \\cdot 16)^2$"
    ]
  },
  {
    "id": "t215-k4-p10",
    "topic": "cauchy-schwarz",
    "kind": "t215-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $9$, $6$ and the second sequence $3$, $x$, the number $y$ is the sum of the squares of the first sequence times the sum of the squares of the second.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (9^2+6^2)*(3^2+x^2)",
    "solution": [
      "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $9$, $6$ and the second sequence $3$, $x$, the number $y$ is the sum of the squares of the first sequence times the sum of the squares of the second.",
      "The sum of the squares of the first sequence is $9^2 + 6^2$.",
      "The sum of the squares of the second sequence is $3^2 + x^2$.",
      "$y = (9^2 + 6^2)(3^2 + x^2)$"
    ]
  },
  {
    "id": "t215-k4-p11",
    "topic": "cauchy-schwarz",
    "kind": "t215-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $7$, $9$, $3$ and the second sequence $x + 7$, $x$, $5$, the number $y$ is the sum of the squares of the first sequence times the sum of the squares of the second.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (7^2+9^2+3^2)*((x+7)^2+x^2+5^2)",
    "solution": [
      "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $7$, $9$, $3$ and the second sequence $x + 7$, $x$, $5$, the number $y$ is the sum of the squares of the first sequence times the sum of the squares of the second.",
      "The sum of the squares of the first sequence is $7^2 + 9^2 + 3^2$.",
      "The sum of the squares of the second sequence is $(x + 7)^2 + x^2 + 5^2$.",
      "$y = (7^2 + 9^2 + 3^2)((x + 7)^2 + x^2 + 5^2)$"
    ]
  },
  {
    "id": "t215-k4-p12",
    "topic": "cauchy-schwarz",
    "kind": "t215-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $3$, $9$, $8$ and the second sequence $9$, $x$, $x + 6$, the terms in the same places are multiplied, the products are added, and the square of that sum is the number $y$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (3*9+9*x+8*(x+6))^2",
    "solution": [
      "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $3$, $9$, $8$ and the second sequence $9$, $x$, $x + 6$, the terms in the same places are multiplied, the products are added, and the square of that sum is the number $y$.",
      "The products of the terms in the same places are $3 \\cdot 9$, $9x$ and $8(x + 6)$.",
      "The sum of the products is $3 \\cdot 9 + 9x + 8(x + 6)$.",
      "$y = (3 \\cdot 9 + 9x + 8(x + 6))^2$"
    ]
  },
  {
    "id": "t215-k4-p13",
    "topic": "cauchy-schwarz",
    "kind": "t215-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $6$, $8$ and the second sequence $x + 9$, $x$, the number $y$ is the square of the sum of the products of the terms in the same places.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (6*(x+9)+8*x)^2",
    "solution": [
      "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $6$, $8$ and the second sequence $x + 9$, $x$, the number $y$ is the square of the sum of the products of the terms in the same places.",
      "The products of the terms in the same places are $6(x + 9)$ and $8x$.",
      "The sum of the products is $6(x + 9) + 8x$.",
      "$y = (6(x + 9) + 8x)^2$"
    ]
  },
  {
    "id": "t215-k4-p14",
    "topic": "cauchy-schwarz",
    "kind": "t215-k4",
    "formNo": 3,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$, with the product of the two sums of squares on the left: For the first sequence $3$, $2$, $4$ and the second sequence $15$, $x$, $20$, the two sides of the Cauchy-Schwarz Inequality are equal.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "(3^2+2^2+4^2)*(15^2+x^2+20^2) = (3*15+2*x+4*20)^2",
    "solution": [
      "Write this sentence as an equation in $x$, with the product of the two sums of squares on the left: For the first sequence $3$, $2$, $4$ and the second sequence $15$, $x$, $20$, the two sides of the Cauchy-Schwarz Inequality are equal.",
      "The side with the sums of squares is $(3^2 + 2^2 + 4^2)(15^2 + x^2 + 20^2)$.",
      "The other side is $(3 \\cdot 15 + 2x + 4 \\cdot 20)^2$.",
      "$(3^2 + 2^2 + 4^2)(15^2 + x^2 + 20^2) = (3 \\cdot 15 + 2x + 4 \\cdot 20)^2$"
    ]
  },
  {
    "id": "t215-k4-p15",
    "topic": "cauchy-schwarz",
    "kind": "t215-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $2$, $9$, $3$ and the second sequence $x$, $6$, $x + 9$, the number $y$ is the square of the sum of the products of the terms in the same places.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (2*x+9*6+3*(x+9))^2",
    "solution": [
      "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left: For the first sequence $2$, $9$, $3$ and the second sequence $x$, $6$, $x + 9$, the number $y$ is the square of the sum of the products of the terms in the same places.",
      "The products of the terms in the same places are $2x$, $9 \\cdot 6$ and $3(x + 9)$.",
      "The sum of the products is $2x + 9 \\cdot 6 + 3(x + 9)$.",
      "$y = (2x + 9 \\cdot 6 + 3(x + 9))^2$"
    ]
  }
]
