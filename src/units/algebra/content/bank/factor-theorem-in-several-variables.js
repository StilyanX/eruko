export default [
  {
    "id": "t207-k1-p01",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Factor $(x + y)^3 + (y + z)^3 + (z + x)^3 + (x + y + z)(x^2 + y^2 + z^2) - 7(x^3 + y^3 + z^3) - 8xyz$.",
    "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
    "answer": "-4*(x-y-z)*(y-x-z)*(z-y-x)",
    "solution": [
      "Factor $(x + y)^3 + (y + z)^3 + (z + x)^3 + (x + y + z)(x^2 + y^2 + z^2) - 7(x^3 + y^3 + z^3) - 8xyz$.",
      "The polynomial is a symmetric polynomial.",
      "Putting $y + z$ for $x$ gives $((y + z) + y)^3 + (y + z)^3 + (z + (y + z))^3 + ((y + z) + y + z)((y + z)^2 + y^2 + z^2) - 7((y + z)^3 + y^3 + z^3) - 8(y + z)yz$. With like terms collected inside the brackets, this is $(2y + z)^3 + (y + z)^3 + (y + 2z)^3 + 4(y + z)(y^2 + yz + z^2) - 7(2y^3 + 3y^2z + 3yz^2 + 2z^3) - 8yz(y + z)$. Multiplied out, it is $(8y^3 + 12y^2z + 6yz^2 + z^3) + (y^3 + 3y^2z + 3yz^2 + z^3) + (y^3 + 6y^2z + 12yz^2 + 8z^3) + (4y^3 + 8y^2z + 8yz^2 + 4z^3) - (14y^3 + 21y^2z + 21yz^2 + 14z^3) - (8y^2z + 8yz^2)$, which is $0$.",
      "So $x - y - z$ is a factor of the polynomial.",
      "So $y - x - z$ and $z - y - x$ are factors of the polynomial too.",
      "The polynomial is $(x - y - z)(y - x - z)(z - y - x)$ times a polynomial $g$.",
      "The polynomial $g$ is a number $a$, so the polynomial is $a(x - y - z)(y - x - z)(z - y - x)$.",
      "At $x = 3$, $y = 1$ and $z = 1$ the polynomial is $(3 + 1)^3 + (1 + 1)^3 + (1 + 3)^3 + (3 + 1 + 1)(3^2 + 1^2 + 1^2) - 7 \\cdot (3^3 + 1^3 + 1^3) - 8 \\cdot 3 \\cdot 1 \\cdot 1 = 4^3 + 2^3 + 4^3 + 5 \\cdot 11 - 7 \\cdot 29 - 8 \\cdot 3 \\cdot 1 \\cdot 1 = 64 + 8 + 64 + 55 - 203 - 24 = -36$, and the product of line 7 is $a(3 - 1 - 1)(1 - 3 - 1)(1 - 1 - 3) = a \\cdot 1 \\cdot (-3) \\cdot (-3) = 9a$.",
      "So $9a = -36$.",
      "So $a = -4$.",
      "$(x + y)^3 + (y + z)^3 + (z + x)^3 + (x + y + z)(x^2 + y^2 + z^2) - 7(x^3 + y^3 + z^3) - 8xyz = -4(x - y - z)(y - x - z)(z - y - x)$"
    ]
  },
  {
    "id": "t207-k1-p02",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Factor $(x + y + z)^3 + x(y - z)^2 + y(x - z)^2 + z(x - y)^2 - x^3 - y^3 - z^3 + 8xyz$.",
    "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
    "answer": "4*(x+y)*(z+y)*(x+z)",
    "solution": [
      "Factor $(x + y + z)^3 + x(y - z)^2 + y(x - z)^2 + z(x - y)^2 - x^3 - y^3 - z^3 + 8xyz$.",
      "The polynomial is a symmetric polynomial.",
      "Putting $-y$ for $x$ gives $((-y) + y + z)^3 + (-y)(y - z)^2 + y((-y) - z)^2 + z((-y) - y)^2 - (-y)^3 - y^3 - z^3 + 8(-y)yz$. With like terms collected inside the brackets, this is $z^3 - y(y - z)^2 + y(y + z)^2 + 4y^2z + y^3 - y^3 - z^3 - 8y^2z$. Multiplied out, it is $z^3 - (y^3 - 2y^2z + yz^2) + (y^3 + 2y^2z + yz^2) + 4y^2z + y^3 - y^3 - z^3 - 8y^2z$, which is $0$.",
      "So $x + y$ is a factor of the polynomial.",
      "So $z + y$ and $x + z$ are factors of the polynomial too.",
      "The polynomial is $(x + y)(z + y)(x + z)$ times a polynomial $g$.",
      "The polynomial $g$ is a number $a$, so the polynomial is $a(x + y)(z + y)(x + z)$.",
      "At $x = 2$, $y = 1$ and $z = 0$ the polynomial is $(2 + 1 + 0)^3 + 2 \\cdot (1 - 0)^2 + 1 \\cdot (2 - 0)^2 + 0 \\cdot (2 - 1)^2 - 2^3 - 1^3 - 0^3 + 8 \\cdot 2 \\cdot 1 \\cdot 0 = 3^3 + 2 \\cdot 1^2 + 1 \\cdot 2^2 + 0 - 2^3 - 1^3 - 0 + 0 = 27 + 2 + 4 + 0 - 8 - 1 - 0 + 0 = 24$, and the product of line 7 is $a(2 + 1)(0 + 1)(2 + 0) = a \\cdot 3 \\cdot 1 \\cdot 2 = 6a$.",
      "So $6a = 24$.",
      "So $a = 4$.",
      "$(x + y + z)^3 + x(y - z)^2 + y(x - z)^2 + z(x - y)^2 - x^3 - y^3 - z^3 + 8xyz = 4(x + y)(z + y)(x + z)$"
    ]
  },
  {
    "id": "t207-k1-p03",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Factor $x(y - z)(2x + y + z)^2 + y(z - x)(2y + z + x)^2 + z(x - y)(2z + x + y)^2$.",
    "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
    "answer": "-3*(x-y)*(y-z)*(z-x)*(x+y+z)",
    "solution": [
      "Factor $x(y - z)(2x + y + z)^2 + y(z - x)(2y + z + x)^2 + z(x - y)(2z + x + y)^2$.",
      "Putting $y$ for $x$ gives $y(y - z)(2y + y + z)^2 + y(z - y)(2y + z + y)^2 + z(y - y)(2z + y + y)^2$. With like terms collected inside the brackets, this is $y(3y + z)^2(y - z) - y(3y + z)^2(y - z) + 0$, which is $0$.",
      "So $x - y$ is a factor of the polynomial.",
      "Putting $z$ for $y$ gives $x(z - z)(2x + z + z)^2 + z(z - x)(2z + z + x)^2 + z(x - z)(2z + x + z)^2$. With like terms collected inside the brackets, this is $0 - z(x + 3z)^2(x - z) + z(x + 3z)^2(x - z)$, which is $0$.",
      "Putting $x$ for $z$ gives $x(y - x)(2x + y + x)^2 + y(x - x)(2y + x + x)^2 + x(x - y)(2x + x + y)^2$. With like terms collected inside the brackets, this is $-x(3x + y)^2(x - y) + 0 + x(3x + y)^2(x - y)$, which is $0$.",
      "So $y - z$ and $z - x$ are factors of the polynomial too.",
      "Putting $-y - z$ for $x$ gives $(-y - z)(y - z)(2(-y - z) + y + z)^2 + y(z - (-y - z))(2y + z + (-y - z))^2 + z((-y - z) - y)(2z + (-y - z) + y)^2$. With like terms collected inside the brackets, this is $-(y + z)^3(y - z) + y^3(y + 2z) - z^3(2y + z)$. Multiplied out, it is $-(y^4 + 2y^3z - 2yz^3 - z^4) + (y^4 + 2y^3z) - (2yz^3 + z^4)$, which is $0$.",
      "So $x + y + z$ is a factor of the polynomial.",
      "The polynomial is $(x - y)(y - z)(z - x)(x + y + z)$ times a polynomial $g$.",
      "The polynomial $g$ is a number $a$, so the polynomial is $a(x - y)(y - z)(z - x)(x + y + z)$.",
      "At $x = 1$, $y = 0$ and $z = 2$ the polynomial is $1 \\cdot (0 - 2)(2 \\cdot 1 + 0 + 2)^2 + 0 \\cdot (2 - 1)(2 \\cdot 0 + 2 + 1)^2 + 2 \\cdot (1 - 0)(2 \\cdot 2 + 1 + 0)^2 = 1 \\cdot (-2) \\cdot 4^2 + 0 + 2 \\cdot 1 \\cdot 5^2 = -32 + 0 + 50 = 18$, and the product of line 10 is $a(1 - 0)(0 - 2)(2 - 1)(1 + 0 + 2) = a \\cdot 1 \\cdot (-2) \\cdot 1 \\cdot 3 = -6a$.",
      "So $-6a = 18$.",
      "So $a = -3$.",
      "$x(y - z)(2x + y + z)^2 + y(z - x)(2y + z + x)^2 + z(x - y)(2z + x + y)^2 = -3(x - y)(y - z)(z - x)(x + y + z)$"
    ]
  },
  {
    "id": "t207-k1-p04",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Factor $(y - z)(2x + y + z)^3 + (z - x)(2y + z + x)^3 + (x - y)(2z + x + y)^3$.",
    "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
    "answer": "-4*(x-y)*(y-z)*(z-x)*(x+y+z)",
    "solution": [
      "Factor $(y - z)(2x + y + z)^3 + (z - x)(2y + z + x)^3 + (x - y)(2z + x + y)^3$.",
      "Putting $y$ for $x$ gives $(y - z)(2y + y + z)^3 + (z - y)(2y + z + y)^3 + (y - y)(2z + y + y)^3$. With like terms collected inside the brackets, this is $(3y + z)^3(y - z) - (3y + z)^3(y - z) + 0$, which is $0$.",
      "So $x - y$ is a factor of the polynomial.",
      "Putting $z$ for $y$ gives $(z - z)(2x + z + z)^3 + (z - x)(2z + z + x)^3 + (x - z)(2z + x + z)^3$. With like terms collected inside the brackets, this is $0 - (x + 3z)^3(x - z) + (x + 3z)^3(x - z)$, which is $0$.",
      "Putting $x$ for $z$ gives $(y - x)(2x + y + x)^3 + (x - x)(2y + x + x)^3 + (x - y)(2x + x + y)^3$. With like terms collected inside the brackets, this is $-(3x + y)^3(x - y) + 0 + (3x + y)^3(x - y)$, which is $0$.",
      "So $y - z$ and $z - x$ are factors of the polynomial too.",
      "Putting $-y - z$ for $x$ gives $(y - z)(2(-y - z) + y + z)^3 + (z - (-y - z))(2y + z + (-y - z))^3 + ((-y - z) - y)(2z + (-y - z) + y)^3$. With like terms collected inside the brackets, this is $-(y + z)^3(y - z) + y^3(y + 2z) - z^3(2y + z)$. Multiplied out, it is $-(y^4 + 2y^3z - 2yz^3 - z^4) + (y^4 + 2y^3z) - (2yz^3 + z^4)$, which is $0$.",
      "So $x + y + z$ is a factor of the polynomial.",
      "The polynomial is $(x - y)(y - z)(z - x)(x + y + z)$ times a polynomial $g$.",
      "The polynomial $g$ is a number $a$, so the polynomial is $a(x - y)(y - z)(z - x)(x + y + z)$.",
      "At $x = 2$, $y = 1$ and $z = 0$ the polynomial is $(1 - 0)(2 \\cdot 2 + 1 + 0)^3 + (0 - 2)(2 \\cdot 1 + 0 + 2)^3 + (2 - 1)(2 \\cdot 0 + 2 + 1)^3 = 1 \\cdot 5^3 + (-2) \\cdot 4^3 + 1 \\cdot 3^3 = 125 - 128 + 27 = 24$, and the product of line 10 is $a(2 - 1)(1 - 0)(0 - 2)(2 + 1 + 0) = a \\cdot 1 \\cdot 1 \\cdot (-2) \\cdot 3 = -6a$.",
      "So $-6a = 24$.",
      "So $a = -4$.",
      "$(y - z)(2x + y + z)^3 + (z - x)(2y + z + x)^3 + (x - y)(2z + x + y)^3 = -4(x - y)(y - z)(z - x)(x + y + z)$"
    ]
  },
  {
    "id": "t207-k1-p05",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Factor $(x + 3y)^3 + (y + 3z)^3 + (z + 3x)^3 - (3x + y)^3 - (3y + z)^3 - (3z + x)^3$.",
    "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
    "answer": "18*(x-y)*(y-z)*(z-x)",
    "solution": [
      "Factor $(x + 3y)^3 + (y + 3z)^3 + (z + 3x)^3 - (3x + y)^3 - (3y + z)^3 - (3z + x)^3$.",
      "Putting $y$ for $x$ gives $(y + 3y)^3 + (y + 3z)^3 + (z + 3y)^3 - (3y + y)^3 - (3y + z)^3 - (3z + y)^3$. With like terms collected inside the brackets, this is $64y^3 + (y + 3z)^3 + (3y + z)^3 - 64y^3 - (3y + z)^3 - (y + 3z)^3$, which is $0$.",
      "So $x - y$ is a factor of the polynomial.",
      "Putting $z$ for $y$ gives $(x + 3z)^3 + (z + 3z)^3 + (z + 3x)^3 - (3x + z)^3 - (3z + z)^3 - (3z + x)^3$. With like terms collected inside the brackets, this is $(x + 3z)^3 + 64z^3 + (3x + z)^3 - (3x + z)^3 - 64z^3 - (x + 3z)^3$, which is $0$.",
      "Putting $x$ for $z$ gives $(x + 3y)^3 + (y + 3x)^3 + (x + 3x)^3 - (3x + y)^3 - (3y + x)^3 - (3x + x)^3$. With like terms collected inside the brackets, this is $(x + 3y)^3 + (3x + y)^3 + 64x^3 - (3x + y)^3 - (x + 3y)^3 - 64x^3$, which is $0$.",
      "So $y - z$ and $z - x$ are factors of the polynomial too.",
      "The polynomial is $(x - y)(y - z)(z - x)$ times a polynomial $g$.",
      "The polynomial $g$ is a number $a$, so the polynomial is $a(x - y)(y - z)(z - x)$.",
      "At $x = 2$, $y = 1$ and $z = 0$ the polynomial is $(2 + 3 \\cdot 1)^3 + (1 + 3 \\cdot 0)^3 + (0 + 3 \\cdot 2)^3 - (3 \\cdot 2 + 1)^3 - (3 \\cdot 1 + 0)^3 - (3 \\cdot 0 + 2)^3 = 5^3 + 1^3 + 6^3 - 7^3 - 3^3 - 2^3 = 125 + 1 + 216 - 343 - 27 - 8 = -36$, and the product of line 8 is $a(2 - 1)(1 - 0)(0 - 2) = a \\cdot 1 \\cdot 1 \\cdot (-2) = -2a$.",
      "So $-2a = -36$.",
      "So $a = 18$.",
      "$(x + 3y)^3 + (y + 3z)^3 + (z + 3x)^3 - (3x + y)^3 - (3y + z)^3 - (3z + x)^3 = 18(x - y)(y - z)(z - x)$"
    ]
  },
  {
    "id": "t207-k1-p06",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Factor $(x + y - z)^3 + (y + z - x)^3 + (x + z - y)^3 - 4(x^3 + y^3 + z^3) + 12xyz$.",
    "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
    "answer": "-3*(x-y-z)*(y-x-z)*(z-y-x)",
    "solution": [
      "Factor $(x + y - z)^3 + (y + z - x)^3 + (x + z - y)^3 - 4(x^3 + y^3 + z^3) + 12xyz$.",
      "The polynomial is a symmetric polynomial.",
      "Putting $y + z$ for $x$ gives $((y + z) + y - z)^3 + (y + z - (y + z))^3 + ((y + z) + z - y)^3 - 4((y + z)^3 + y^3 + z^3) + 12(y + z)yz$. With like terms collected inside the brackets, this is $8y^3 + 0 + 8z^3 - 4(2y^3 + 3y^2z + 3yz^2 + 2z^3) + 12yz(y + z)$. Multiplied out, it is $8y^3 + 8z^3 - (8y^3 + 12y^2z + 12yz^2 + 8z^3) + (12y^2z + 12yz^2)$, which is $0$.",
      "So $x - y - z$ is a factor of the polynomial.",
      "So $y - x - z$ and $z - y - x$ are factors of the polynomial too.",
      "The polynomial is $(x - y - z)(y - x - z)(z - y - x)$ times a polynomial $g$.",
      "The polynomial $g$ is a number $a$, so the polynomial is $a(x - y - z)(y - x - z)(z - y - x)$.",
      "At $x = 1$, $y = 2$ and $z = 2$ the polynomial is $(1 + 2 - 2)^3 + (2 + 2 - 1)^3 + (1 + 2 - 2)^3 - 4 \\cdot (1^3 + 2^3 + 2^3) + 12 \\cdot 1 \\cdot 2 \\cdot 2 = 1^3 + 3^3 + 1^3 - 4 \\cdot 17 + 12 \\cdot 1 \\cdot 2 \\cdot 2 = 1 + 27 + 1 - 68 + 48 = 9$, and the product of line 7 is $a(1 - 2 - 2)(2 - 1 - 2)(2 - 2 - 1) = a \\cdot (-3) \\cdot (-1) \\cdot (-1) = -3a$.",
      "So $-3a = 9$.",
      "So $a = -3$.",
      "$(x + y - z)^3 + (y + z - x)^3 + (x + z - y)^3 - 4(x^3 + y^3 + z^3) + 12xyz = -3(x - y - z)(y - x - z)(z - y - x)$"
    ]
  },
  {
    "id": "t207-k1-p07",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Factor $(y - z)(5x + y + z)^2 + (z - x)(5y + z + x)^2 + (x - y)(5z + x + y)^2$.",
    "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
    "answer": "-16*(x-y)*(y-z)*(z-x)",
    "solution": [
      "Factor $(y - z)(5x + y + z)^2 + (z - x)(5y + z + x)^2 + (x - y)(5z + x + y)^2$.",
      "Putting $y$ for $x$ gives $(y - z)(5y + y + z)^2 + (z - y)(5y + z + y)^2 + (y - y)(5z + y + y)^2$. With like terms collected inside the brackets, this is $(6y + z)^2(y - z) - (6y + z)^2(y - z) + 0$, which is $0$.",
      "So $x - y$ is a factor of the polynomial.",
      "Putting $z$ for $y$ gives $(z - z)(5x + z + z)^2 + (z - x)(5z + z + x)^2 + (x - z)(5z + x + z)^2$. With like terms collected inside the brackets, this is $0 - (x + 6z)^2(x - z) + (x + 6z)^2(x - z)$, which is $0$.",
      "Putting $x$ for $z$ gives $(y - x)(5x + y + x)^2 + (x - x)(5y + x + x)^2 + (x - y)(5x + x + y)^2$. With like terms collected inside the brackets, this is $-(6x + y)^2(x - y) + 0 + (6x + y)^2(x - y)$, which is $0$.",
      "So $y - z$ and $z - x$ are factors of the polynomial too.",
      "The polynomial is $(x - y)(y - z)(z - x)$ times a polynomial $g$.",
      "The polynomial $g$ is a number $a$, so the polynomial is $a(x - y)(y - z)(z - x)$.",
      "At $x = 0$, $y = 1$ and $z = 3$ the polynomial is $(1 - 3)(5 \\cdot 0 + 1 + 3)^2 + (3 - 0)(5 \\cdot 1 + 3 + 0)^2 + (0 - 1)(5 \\cdot 3 + 0 + 1)^2 = (-2) \\cdot 4^2 + 3 \\cdot 8^2 + (-1) \\cdot 16^2 = -32 + 192 - 256 = -96$, and the product of line 8 is $a(0 - 1)(1 - 3)(3 - 0) = a \\cdot (-1) \\cdot (-2) \\cdot 3 = 6a$.",
      "So $6a = -96$.",
      "So $a = -16$.",
      "$(y - z)(5x + y + z)^2 + (z - x)(5y + z + x)^2 + (x - y)(5z + x + y)^2 = -16(x - y)(y - z)(z - x)$"
    ]
  },
  {
    "id": "t207-k1-p08",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Factor $(x + 4y)(y + 4z)(z + 4x) - (4x + y)(4y + z)(4z + x)$.",
    "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
    "answer": "12*(x-y)*(y-z)*(z-x)",
    "solution": [
      "Factor $(x + 4y)(y + 4z)(z + 4x) - (4x + y)(4y + z)(4z + x)$.",
      "Putting $y$ for $x$ gives $(y + 4y)(y + 4z)(z + 4y) - (4y + y)(4y + z)(4z + y)$. With like terms collected inside the brackets, this is $5y(4y + z)(y + 4z) - 5y(4y + z)(y + 4z)$, which is $0$.",
      "So $x - y$ is a factor of the polynomial.",
      "Putting $z$ for $y$ gives $(x + 4z)(z + 4z)(z + 4x) - (4x + z)(4z + z)(4z + x)$. With like terms collected inside the brackets, this is $5z(4x + z)(x + 4z) - 5z(4x + z)(x + 4z)$, which is $0$.",
      "Putting $x$ for $z$ gives $(x + 4y)(y + 4x)(x + 4x) - (4x + y)(4y + x)(4x + x)$. With like terms collected inside the brackets, this is $5x(4x + y)(x + 4y) - 5x(4x + y)(x + 4y)$, which is $0$.",
      "So $y - z$ and $z - x$ are factors of the polynomial too.",
      "The polynomial is $(x - y)(y - z)(z - x)$ times a polynomial $g$.",
      "The polynomial $g$ is a number $a$, so the polynomial is $a(x - y)(y - z)(z - x)$.",
      "At $x = 1$, $y = 3$ and $z = 0$ the polynomial is $(1 + 4 \\cdot 3)(3 + 4 \\cdot 0)(0 + 4 \\cdot 1) - (4 \\cdot 1 + 3)(4 \\cdot 3 + 0)(4 \\cdot 0 + 1) = 13 \\cdot 3 \\cdot 4 - 7 \\cdot 12 \\cdot 1 = 156 - 84 = 72$, and the product of line 8 is $a(1 - 3)(3 - 0)(0 - 1) = a \\cdot (-2) \\cdot 3 \\cdot (-1) = 6a$.",
      "So $6a = 72$.",
      "So $a = 12$.",
      "$(x + 4y)(y + 4z)(z + 4x) - (4x + y)(4y + z)(4z + x) = 12(x - y)(y - z)(z - x)$"
    ]
  },
  {
    "id": "t207-k1-p09",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Factor $(x - y)^2(x + y) + (y - z)^2(y + z) + (x - z)^2(x + z) - 2(x + y + z)(x^2 + y^2 + z^2) - 6xyz$.",
    "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
    "answer": "-3*(x+y)*(z+y)*(x+z)",
    "solution": [
      "Factor $(x - y)^2(x + y) + (y - z)^2(y + z) + (x - z)^2(x + z) - 2(x + y + z)(x^2 + y^2 + z^2) - 6xyz$.",
      "The polynomial is a symmetric polynomial.",
      "Putting $-y$ for $x$ gives $((-y) - y)^2((-y) + y) + (y - z)^2(y + z) + ((-y) - z)^2((-y) + z) - 2((-y) + y + z)((-y)^2 + y^2 + z^2) - 6(-y)yz$. With like terms collected inside the brackets, this is $0 + (y + z)(y - z)^2 - (y + z)^2(y - z) - 2z(2y^2 + z^2) + 6y^2z$. Multiplied out, it is $(y^3 - y^2z - yz^2 + z^3) - (y^3 + y^2z - yz^2 - z^3) - (4y^2z + 2z^3) + 6y^2z$, which is $0$.",
      "So $x + y$ is a factor of the polynomial.",
      "So $z + y$ and $x + z$ are factors of the polynomial too.",
      "The polynomial is $(x + y)(z + y)(x + z)$ times a polynomial $g$.",
      "The polynomial $g$ is a number $a$, so the polynomial is $a(x + y)(z + y)(x + z)$.",
      "At $x = 1$, $y = 2$ and $z = 1$ the polynomial is $(1 - 2)^2(1 + 2) + (2 - 1)^2(2 + 1) + (1 - 1)^2(1 + 1) - 2 \\cdot (1 + 2 + 1)(1^2 + 2^2 + 1^2) - 6 \\cdot 1 \\cdot 2 \\cdot 1 = (-1)^2 \\cdot 3 + 1^2 \\cdot 3 + 0 - 2 \\cdot 4 \\cdot 6 - 6 \\cdot 1 \\cdot 2 \\cdot 1 = 3 + 3 + 0 - 48 - 12 = -54$, and the product of line 7 is $a(1 + 2)(1 + 2)(1 + 1) = a \\cdot 3 \\cdot 3 \\cdot 2 = 18a$.",
      "So $18a = -54$.",
      "So $a = -3$.",
      "$(x - y)^2(x + y) + (y - z)^2(y + z) + (x - z)^2(x + z) - 2(x + y + z)(x^2 + y^2 + z^2) - 6xyz = -3(x + y)(z + y)(x + z)$"
    ]
  },
  {
    "id": "t207-k1-p10",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Factor $(y - z)^3(y + z) + (z - x)^3(z + x) + (x - y)^3(x + y)$.",
    "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
    "answer": "2*(x-y)*(y-z)*(z-x)*(x+y+z)",
    "solution": [
      "Factor $(y - z)^3(y + z) + (z - x)^3(z + x) + (x - y)^3(x + y)$.",
      "Putting $y$ for $x$ gives $(y - z)^3(y + z) + (z - y)^3(z + y) + (y - y)^3(y + y)$. With like terms collected inside the brackets, this is $(y + z)(y - z)^3 - (y + z)(y - z)^3 + 0$, which is $0$.",
      "So $x - y$ is a factor of the polynomial.",
      "Putting $z$ for $y$ gives $(z - z)^3(z + z) + (z - x)^3(z + x) + (x - z)^3(x + z)$. With like terms collected inside the brackets, this is $0 - (x + z)(x - z)^3 + (x + z)(x - z)^3$, which is $0$.",
      "Putting $x$ for $z$ gives $(y - x)^3(y + x) + (x - x)^3(x + x) + (x - y)^3(x + y)$. With like terms collected inside the brackets, this is $-(x + y)(x - y)^3 + 0 + (x + y)(x - y)^3$, which is $0$.",
      "So $y - z$ and $z - x$ are factors of the polynomial too.",
      "Putting $-y - z$ for $x$ gives $(y - z)^3(y + z) + (z - (-y - z))^3(z + (-y - z)) + ((-y - z) - y)^3((-y - z) + y)$. With like terms collected inside the brackets, this is $(y + z)(y - z)^3 - y(y + 2z)^3 + z(2y + z)^3$. Multiplied out, it is $(y^4 - 2y^3z + 2yz^3 - z^4) - (y^4 + 6y^3z + 12y^2z^2 + 8yz^3) + (8y^3z + 12y^2z^2 + 6yz^3 + z^4)$, which is $0$.",
      "So $x + y + z$ is a factor of the polynomial.",
      "The polynomial is $(x - y)(y - z)(z - x)(x + y + z)$ times a polynomial $g$.",
      "The polynomial $g$ is a number $a$, so the polynomial is $a(x - y)(y - z)(z - x)(x + y + z)$.",
      "At $x = 0$, $y = 2$ and $z = 1$ the polynomial is $(2 - 1)^3(2 + 1) + (1 - 0)^3(1 + 0) + (0 - 2)^3(0 + 2) = 1^3 \\cdot 3 + 1^3 \\cdot 1 + (-2)^3 \\cdot 2 = 3 + 1 - 16 = -12$, and the product of line 10 is $a(0 - 2)(2 - 1)(1 - 0)(0 + 2 + 1) = a \\cdot (-2) \\cdot 1 \\cdot 1 \\cdot 3 = -6a$.",
      "So $-6a = -12$.",
      "So $a = 2$.",
      "$(y - z)^3(y + z) + (z - x)^3(z + x) + (x - y)^3(x + y) = 2(x - y)(y - z)(z - x)(x + y + z)$"
    ]
  },
  {
    "id": "t207-k1-p11",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Factor $x(y + z)^2 + y(x + z)^2 + z(x + y)^2 + 6(x + y + z)(xy + yz + zx) - 10xyz$.",
    "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
    "answer": "7*(x+y)*(z+y)*(x+z)",
    "solution": [
      "Factor $x(y + z)^2 + y(x + z)^2 + z(x + y)^2 + 6(x + y + z)(xy + yz + zx) - 10xyz$.",
      "The polynomial is a symmetric polynomial.",
      "Putting $-y$ for $x$ gives $(-y)(y + z)^2 + y((-y) + z)^2 + z((-y) + y)^2 + 6((-y) + y + z)((-y)y + yz + z(-y)) - 10(-y)yz$. With like terms collected inside the brackets, this is $-y(y + z)^2 + y(y - z)^2 + 0 - 6y^2z + 10y^2z$. Multiplied out, it is $-(y^3 + 2y^2z + yz^2) + (y^3 - 2y^2z + yz^2) - 6y^2z + 10y^2z$, which is $0$.",
      "So $x + y$ is a factor of the polynomial.",
      "So $z + y$ and $x + z$ are factors of the polynomial too.",
      "The polynomial is $(x + y)(z + y)(x + z)$ times a polynomial $g$.",
      "The polynomial $g$ is a number $a$, so the polynomial is $a(x + y)(z + y)(x + z)$.",
      "At $x = 1$, $y = 2$ and $z = 1$ the polynomial is $1 \\cdot (2 + 1)^2 + 2 \\cdot (1 + 1)^2 + 1 \\cdot (1 + 2)^2 + 6 \\cdot (1 + 2 + 1)(1 \\cdot 2 + 2 \\cdot 1 + 1 \\cdot 1) - 10 \\cdot 1 \\cdot 2 \\cdot 1 = 1 \\cdot 3^2 + 2 \\cdot 2^2 + 1 \\cdot 3^2 + 6 \\cdot 4 \\cdot 5 - 10 \\cdot 1 \\cdot 2 \\cdot 1 = 9 + 8 + 9 + 120 - 20 = 126$, and the product of line 7 is $a(1 + 2)(1 + 2)(1 + 1) = a \\cdot 3 \\cdot 3 \\cdot 2 = 18a$.",
      "So $18a = 126$.",
      "So $a = 7$.",
      "$x(y + z)^2 + y(x + z)^2 + z(x + y)^2 + 6(x + y + z)(xy + yz + zx) - 10xyz = 7(x + y)(z + y)(x + z)$"
    ]
  },
  {
    "id": "t207-k1-p12",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Factor $(y - z)(2x - y - z)^2 + (z - x)(2y - z - x)^2 + (x - y)(2z - x - y)^2$.",
    "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
    "answer": "-9*(x-y)*(y-z)*(z-x)",
    "solution": [
      "Factor $(y - z)(2x - y - z)^2 + (z - x)(2y - z - x)^2 + (x - y)(2z - x - y)^2$.",
      "Putting $y$ for $x$ gives $(y - z)(2y - y - z)^2 + (z - y)(2y - z - y)^2 + (y - y)(2z - y - y)^2$. With like terms collected inside the brackets, this is $(y - z)^3 - (y - z)^3 + 0$, which is $0$.",
      "So $x - y$ is a factor of the polynomial.",
      "Putting $z$ for $y$ gives $(z - z)(2x - z - z)^2 + (z - x)(2z - z - x)^2 + (x - z)(2z - x - z)^2$. With like terms collected inside the brackets, this is $0 - (x - z)^3 + (x - z)^3$, which is $0$.",
      "Putting $x$ for $z$ gives $(y - x)(2x - y - x)^2 + (x - x)(2y - x - x)^2 + (x - y)(2x - x - y)^2$. With like terms collected inside the brackets, this is $-(x - y)^3 + 0 + (x - y)^3$, which is $0$.",
      "So $y - z$ and $z - x$ are factors of the polynomial too.",
      "The polynomial is $(x - y)(y - z)(z - x)$ times a polynomial $g$.",
      "The polynomial $g$ is a number $a$, so the polynomial is $a(x - y)(y - z)(z - x)$.",
      "At $x = 2$, $y = 1$ and $z = 0$ the polynomial is $(1 - 0)(2 \\cdot 2 - 1 - 0)^2 + (0 - 2)(2 \\cdot 1 - 0 - 2)^2 + (2 - 1)(2 \\cdot 0 - 2 - 1)^2 = 1 \\cdot 3^2 + 0 + 1 \\cdot (-3)^2 = 9 + 0 + 9 = 18$, and the product of line 8 is $a(2 - 1)(1 - 0)(0 - 2) = a \\cdot 1 \\cdot 1 \\cdot (-2) = -2a$.",
      "So $-2a = 18$.",
      "So $a = -9$.",
      "$(y - z)(2x - y - z)^2 + (z - x)(2y - z - x)^2 + (x - y)(2z - x - y)^2 = -9(x - y)(y - z)(z - x)$"
    ]
  },
  {
    "id": "t207-k1-p13",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Factor $(y - z)^3(2x + y + z) + (z - x)^3(2y + z + x) + (x - y)^3(2z + x + y)$.",
    "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
    "answer": "4*(x-y)*(y-z)*(z-x)*(x+y+z)",
    "solution": [
      "Factor $(y - z)^3(2x + y + z) + (z - x)^3(2y + z + x) + (x - y)^3(2z + x + y)$.",
      "Putting $y$ for $x$ gives $(y - z)^3(2y + y + z) + (z - y)^3(2y + z + y) + (y - y)^3(2z + y + y)$. With like terms collected inside the brackets, this is $(3y + z)(y - z)^3 - (3y + z)(y - z)^3 + 0$, which is $0$.",
      "So $x - y$ is a factor of the polynomial.",
      "Putting $z$ for $y$ gives $(z - z)^3(2x + z + z) + (z - x)^3(2z + z + x) + (x - z)^3(2z + x + z)$. With like terms collected inside the brackets, this is $0 - (x + 3z)(x - z)^3 + (x + 3z)(x - z)^3$, which is $0$.",
      "Putting $x$ for $z$ gives $(y - x)^3(2x + y + x) + (x - x)^3(2y + x + x) + (x - y)^3(2x + x + y)$. With like terms collected inside the brackets, this is $-(3x + y)(x - y)^3 + 0 + (3x + y)(x - y)^3$, which is $0$.",
      "So $y - z$ and $z - x$ are factors of the polynomial too.",
      "Putting $-y - z$ for $x$ gives $(y - z)^3(2(-y - z) + y + z) + (z - (-y - z))^3(2y + z + (-y - z)) + ((-y - z) - y)^3(2z + (-y - z) + y)$. With like terms collected inside the brackets, this is $-(y + z)(y - z)^3 + y(y + 2z)^3 - z(2y + z)^3$. Multiplied out, it is $-(y^4 - 2y^3z + 2yz^3 - z^4) + (y^4 + 6y^3z + 12y^2z^2 + 8yz^3) - (8y^3z + 12y^2z^2 + 6yz^3 + z^4)$, which is $0$.",
      "So $x + y + z$ is a factor of the polynomial.",
      "The polynomial is $(x - y)(y - z)(z - x)(x + y + z)$ times a polynomial $g$.",
      "The polynomial $g$ is a number $a$, so the polynomial is $a(x - y)(y - z)(z - x)(x + y + z)$.",
      "At $x = 3$, $y = 0$ and $z = 1$ the polynomial is $(0 - 1)^3(2 \\cdot 3 + 0 + 1) + (1 - 3)^3(2 \\cdot 0 + 1 + 3) + (3 - 0)^3(2 \\cdot 1 + 3 + 0) = (-1)^3 \\cdot 7 + (-2)^3 \\cdot 4 + 3^3 \\cdot 5 = -7 - 32 + 135 = 96$, and the product of line 10 is $a(3 - 0)(0 - 1)(1 - 3)(3 + 0 + 1) = a \\cdot 3 \\cdot (-1) \\cdot (-2) \\cdot 4 = 24a$.",
      "So $24a = 96$.",
      "So $a = 4$.",
      "$(y - z)^3(2x + y + z) + (z - x)^3(2y + z + x) + (x - y)^3(2z + x + y) = 4(x - y)(y - z)(z - x)(x + y + z)$"
    ]
  },
  {
    "id": "t207-k1-p14",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Factor $(x + y + z)^3 + (x + y)^3 + (y + z)^3 + (x + z)^3 - 3(x^3 + y^3 + z^3) + 6xyz$.",
    "form": "Answer as a product of brackets, no bracket with a common factor, as in 2*(2*x+3)*(x+5).",
    "answer": "6*(x+y)*(z+y)*(x+z)",
    "solution": [
      "Factor $(x + y + z)^3 + (x + y)^3 + (y + z)^3 + (x + z)^3 - 3(x^3 + y^3 + z^3) + 6xyz$.",
      "The polynomial is a symmetric polynomial.",
      "Putting $-y$ for $x$ gives $((-y) + y + z)^3 + ((-y) + y)^3 + (y + z)^3 + ((-y) + z)^3 - 3((-y)^3 + y^3 + z^3) + 6(-y)yz$. With like terms collected inside the brackets, this is $z^3 + 0 + (y + z)^3 - (y - z)^3 - 3z^3 - 6y^2z$. Multiplied out, it is $z^3 + (y^3 + 3y^2z + 3yz^2 + z^3) - (y^3 - 3y^2z + 3yz^2 - z^3) - 3z^3 - 6y^2z$, which is $0$.",
      "So $x + y$ is a factor of the polynomial.",
      "So $z + y$ and $x + z$ are factors of the polynomial too.",
      "The polynomial is $(x + y)(z + y)(x + z)$ times a polynomial $g$.",
      "The polynomial $g$ is a number $a$, so the polynomial is $a(x + y)(z + y)(x + z)$.",
      "At $x = 1$, $y = 1$ and $z = 1$ the polynomial is $(1 + 1 + 1)^3 + (1 + 1)^3 + (1 + 1)^3 + (1 + 1)^3 - 3 \\cdot (1^3 + 1^3 + 1^3) + 6 \\cdot 1 \\cdot 1 \\cdot 1 = 3^3 + 2^3 + 2^3 + 2^3 - 3 \\cdot 3 + 6 \\cdot 1 \\cdot 1 \\cdot 1 = 27 + 8 + 8 + 8 - 9 + 6 = 48$, and the product of line 7 is $a(1 + 1)(1 + 1)(1 + 1) = a \\cdot 2 \\cdot 2 \\cdot 2 = 8a$.",
      "So $8a = 48$.",
      "So $a = 6$.",
      "$(x + y + z)^3 + (x + y)^3 + (y + z)^3 + (x + z)^3 - 3(x^3 + y^3 + z^3) + 6xyz = 6(x + y)(z + y)(x + z)$"
    ]
  },
  {
    "id": "t207-k2-p01",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the product alone on the left and nothing multiplied out: The product of $x$, $y$ and $z$ is 8 more than the sum of $x$, $y$ and $z$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "x*y*z = x+y+z+8",
    "solution": [
      "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the product alone on the left and nothing multiplied out: The product of $x$, $y$ and $z$ is 8 more than the sum of $x$, $y$ and $z$.",
      "The product of $x$, $y$ and $z$ is $xyz$.",
      "The sum of $x$, $y$ and $z$ is $x + y + z$, and 8 more than it is $x + y + z + 8$.",
      "$xyz = x + y + z + 8$"
    ]
  },
  {
    "id": "t207-k2-p02",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the sum of the cubes and the number 14 on the left and nothing multiplied out: Adding 14 to the sum of the cubes of $x$, $y$ and $z$ gives 5 times the sum of the squares of $x$, $y$ and $z$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "x^3+y^3+z^3+14 = 5*(x^2+y^2+z^2)",
    "solution": [
      "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the sum of the cubes and the number 14 on the left and nothing multiplied out: Adding 14 to the sum of the cubes of $x$, $y$ and $z$ gives 5 times the sum of the squares of $x$, $y$ and $z$.",
      "The sum of the cubes of $x$, $y$ and $z$ is $x^3 + y^3 + z^3$.",
      "The sum of the squares of $x$, $y$ and $z$ is $x^2 + y^2 + z^2$, and 5 times it is $5(x^2 + y^2 + z^2)$.",
      "$x^3 + y^3 + z^3 + 14 = 5(x^2 + y^2 + z^2)$"
    ]
  },
  {
    "id": "t207-k2-p03",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the square of the sum alone on the left and nothing multiplied out: The square of the sum of $x$, $y$ and $z$ is 20 times the sum of $x$, $y$ and $z$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "(x+y+z)^2 = 20*(x+y+z)",
    "solution": [
      "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the square of the sum alone on the left and nothing multiplied out: The square of the sum of $x$, $y$ and $z$ is 20 times the sum of $x$, $y$ and $z$.",
      "The square of the sum of $x$, $y$ and $z$ is $(x + y + z)^2$.",
      "The sum of $x$, $y$ and $z$ is $x + y + z$, and 20 times it is $20(x + y + z)$.",
      "$(x + y + z)^2 = 20(x + y + z)$"
    ]
  },
  {
    "id": "t207-k2-p04",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the sum of the cubes alone on the left and nothing multiplied out: The sum of the cubes of $x$, $y$ and $z$ is 2 more than the sum of $x$, $y$ and $z$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "x^3+y^3+z^3 = x+y+z+2",
    "solution": [
      "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the sum of the cubes alone on the left and nothing multiplied out: The sum of the cubes of $x$, $y$ and $z$ is 2 more than the sum of $x$, $y$ and $z$.",
      "The sum of the cubes of $x$, $y$ and $z$ is $x^3 + y^3 + z^3$.",
      "The sum of $x$, $y$ and $z$ is $x + y + z$, and 2 more than it is $x + y + z + 2$.",
      "$x^3 + y^3 + z^3 = x + y + z + 2$"
    ]
  },
  {
    "id": "t207-k2-p05",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the square of the sum alone on the left and nothing multiplied out: The square of the sum of $x$, $y$ and $z$ is 4 times the product of $x$, $y$ and $z$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "(x+y+z)^2 = 4*x*y*z",
    "solution": [
      "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the square of the sum alone on the left and nothing multiplied out: The square of the sum of $x$, $y$ and $z$ is 4 times the product of $x$, $y$ and $z$.",
      "The square of the sum of $x$, $y$ and $z$ is $(x + y + z)^2$.",
      "The product of $x$, $y$ and $z$ is $xyz$, and 4 times it is $4xyz$.",
      "$(x + y + z)^2 = 4xyz$"
    ]
  },
  {
    "id": "t207-k2-p06",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the sum of the cubes and the number 15 on the left and nothing multiplied out: Adding 15 to the sum of the cubes of $x$, $y$ and $z$ gives 11 times the sum of the products of $x$, $y$ and $z$ taken two at a time.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "x^3+y^3+z^3+15 = 11*(x*y+y*z+z*x)",
    "solution": [
      "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the sum of the cubes and the number 15 on the left and nothing multiplied out: Adding 15 to the sum of the cubes of $x$, $y$ and $z$ gives 11 times the sum of the products of $x$, $y$ and $z$ taken two at a time.",
      "The sum of the cubes of $x$, $y$ and $z$ is $x^3 + y^3 + z^3$.",
      "The sum of the products of $x$, $y$ and $z$ taken two at a time is $xy + yz + zx$, and 11 times it is $11(xy + yz + zx)$.",
      "$x^3 + y^3 + z^3 + 15 = 11(xy + yz + zx)$"
    ]
  },
  {
    "id": "t207-k2-p07",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the cube of the sum alone on the left and nothing multiplied out: The cube of the sum of $x$, $y$ and $z$ is 26 less than 2 times the sum of $x$, $y$ and $z$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "(x+y+z)^3 = 2*(x+y+z)-26",
    "solution": [
      "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the cube of the sum alone on the left and nothing multiplied out: The cube of the sum of $x$, $y$ and $z$ is 26 less than 2 times the sum of $x$, $y$ and $z$.",
      "The cube of the sum of $x$, $y$ and $z$ is $(x + y + z)^3$.",
      "The sum of $x$, $y$ and $z$ is $x + y + z$, 2 times it is $2(x + y + z)$, and 26 less than that is $2(x + y + z) - 26$.",
      "$(x + y + z)^3 = 2(x + y + z) - 26$"
    ]
  },
  {
    "id": "t207-k2-p08",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the cube of the sum and the number 11 on the left and nothing multiplied out: Adding 11 to the cube of the sum of $x$, $y$ and $z$ gives 12 times the product of $x$, $y$ and $z$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "(x+y+z)^3+11 = 12*x*y*z",
    "solution": [
      "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the cube of the sum and the number 11 on the left and nothing multiplied out: Adding 11 to the cube of the sum of $x$, $y$ and $z$ gives 12 times the product of $x$, $y$ and $z$.",
      "The cube of the sum of $x$, $y$ and $z$ is $(x + y + z)^3$.",
      "The product of $x$, $y$ and $z$ is $xyz$, and 12 times it is $12xyz$.",
      "$(x + y + z)^3 + 11 = 12xyz$"
    ]
  },
  {
    "id": "t207-k2-p09",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the sum of the squares alone on the left and nothing multiplied out: The sum of the squares of $x$, $y$ and $z$ is 25 more than the sum of $x$, $y$ and $z$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "x^2+y^2+z^2 = x+y+z+25",
    "solution": [
      "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the sum of the squares alone on the left and nothing multiplied out: The sum of the squares of $x$, $y$ and $z$ is 25 more than the sum of $x$, $y$ and $z$.",
      "The sum of the squares of $x$, $y$ and $z$ is $x^2 + y^2 + z^2$.",
      "The sum of $x$, $y$ and $z$ is $x + y + z$, and 25 more than it is $x + y + z + 25$.",
      "$x^2 + y^2 + z^2 = x + y + z + 25$"
    ]
  },
  {
    "id": "t207-k2-p10",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the sum of the squares alone on the left and nothing multiplied out: The sum of the squares of $x$, $y$ and $z$ is 7 less than 10 times the product of $x$, $y$ and $z$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "x^2+y^2+z^2 = 10*x*y*z-7",
    "solution": [
      "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the sum of the squares alone on the left and nothing multiplied out: The sum of the squares of $x$, $y$ and $z$ is 7 less than 10 times the product of $x$, $y$ and $z$.",
      "The sum of the squares of $x$, $y$ and $z$ is $x^2 + y^2 + z^2$.",
      "The product of $x$, $y$ and $z$ is $xyz$, 10 times it is $10xyz$, and 7 less than that is $10xyz - 7$.",
      "$x^2 + y^2 + z^2 = 10xyz - 7$"
    ]
  },
  {
    "id": "t207-k2-p11",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the square of the sum alone on the left and nothing multiplied out: The square of the sum of $x$, $y$ and $z$ is 9 times the sum of the products of $x$, $y$ and $z$ taken two at a time.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "(x+y+z)^2 = 9*(x*y+y*z+z*x)",
    "solution": [
      "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the square of the sum alone on the left and nothing multiplied out: The square of the sum of $x$, $y$ and $z$ is 9 times the sum of the products of $x$, $y$ and $z$ taken two at a time.",
      "The square of the sum of $x$, $y$ and $z$ is $(x + y + z)^2$.",
      "The sum of the products of $x$, $y$ and $z$ taken two at a time is $xy + yz + zx$, and 9 times it is $9(xy + yz + zx)$.",
      "$(x + y + z)^2 = 9(xy + yz + zx)$"
    ]
  },
  {
    "id": "t207-k2-p12",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the cube of the sum alone on the left and nothing multiplied out: The cube of the sum of $x$, $y$ and $z$ is 22 less than 4 times the sum of the squares of $x$, $y$ and $z$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "(x+y+z)^3 = 4*(x^2+y^2+z^2)-22",
    "solution": [
      "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the cube of the sum alone on the left and nothing multiplied out: The cube of the sum of $x$, $y$ and $z$ is 22 less than 4 times the sum of the squares of $x$, $y$ and $z$.",
      "The cube of the sum of $x$, $y$ and $z$ is $(x + y + z)^3$.",
      "The sum of the squares of $x$, $y$ and $z$ is $x^2 + y^2 + z^2$, 4 times it is $4(x^2 + y^2 + z^2)$, and 22 less than that is $4(x^2 + y^2 + z^2) - 22$.",
      "$(x + y + z)^3 = 4(x^2 + y^2 + z^2) - 22$"
    ]
  },
  {
    "id": "t207-k2-p13",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the number 10 alone on the right and nothing multiplied out: Taking 23 times the product of $x$, $y$ and $z$ from the sum of the products of $x$, $y$ and $z$ taken two at a time leaves 10.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "x*y+y*z+z*x-23*x*y*z = 10",
    "solution": [
      "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the number 10 alone on the right and nothing multiplied out: Taking 23 times the product of $x$, $y$ and $z$ from the sum of the products of $x$, $y$ and $z$ taken two at a time leaves 10.",
      "The sum of the products of $x$, $y$ and $z$ taken two at a time is $xy + yz + zx$.",
      "The product of $x$, $y$ and $z$ is $xyz$, and taking 23 times it from $xy + yz + zx$ leaves $xy + yz + zx - 23xyz$.",
      "$xy + yz + zx - 23xyz = 10$"
    ]
  },
  {
    "id": "t207-k2-p14",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the number 9 alone on the right and nothing multiplied out: Taking 3 times the sum of the products of $x$, $y$ and $z$ taken two at a time from the cube of the sum of $x$, $y$ and $z$ leaves 9.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "(x+y+z)^3-3*(x*y+y*z+z*x) = 9",
    "solution": [
      "Write this sentence about three numbers $x$, $y$ and $z$ as an equation, with the number 9 alone on the right and nothing multiplied out: Taking 3 times the sum of the products of $x$, $y$ and $z$ taken two at a time from the cube of the sum of $x$, $y$ and $z$ leaves 9.",
      "The cube of the sum of $x$, $y$ and $z$ is $(x + y + z)^3$.",
      "The sum of the products of $x$, $y$ and $z$ taken two at a time is $xy + yz + zx$, and taking 3 times it from $(x + y + z)^3$ leaves $(x + y + z)^3 - 3(xy + yz + zx)$.",
      "$(x + y + z)^3 - 3(xy + yz + zx) = 9$"
    ]
  },
  {
    "id": "t207-k3-p01",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, which finds the number $a$ in $(x + 6y)(y + 6z)(z + 6x) - (6x + y)(6y + z)(6z + x) = a(x - y)(y - z)(z - x)$ from the values at $x = 1$, $y = 0$ and $z = 3$, and write that line right.",
    "given": [
      "$(x + 6y)(y + 6z)(z + 6x) - (6x + y)(6y + z)(6z + x) = a(x - y)(y - z)(z - x)$",
      "$(1 + 6 \\cdot 0)(0 + 6 \\cdot 3)(3 + 6 \\cdot 1) - (6 \\cdot 1 + 0)(6 \\cdot 0 + 3)(6 \\cdot 3 + 1) = a(1 - 0)(0 - 3)(3 - 1)$",
      "$1 \\cdot 18 \\cdot 9 - 6 \\cdot 3 \\cdot 19 = a \\cdot 1 \\cdot (-3) \\cdot 2$",
      "$162 - 342 = 6a$",
      "$-180 = 6a$",
      "$a = -30$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: 162-342 = -6*a",
    "solution": [
      "Find the first wrong line in this working, which finds the number $a$ in $(x + 6y)(y + 6z)(z + 6x) - (6x + y)(6y + z)(6z + x) = a(x - y)(y - z)(z - x)$ from the values at $x = 1$, $y = 0$ and $z = 3$, and write that line right.",
      "Lines 1 to 3 are right.",
      "Line 4 writes $a \\cdot 1 \\cdot (-3) \\cdot 2$ as $6a$.",
      "So line 4 is the first wrong line.",
      "Line 4 written right is $162 - 342 = -6a$."
    ]
  },
  {
    "id": "t207-k3-p02",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, which finds the number $a$ in $(y^2 - z^2)(3x + y + z) + (z^2 - x^2)(3y + z + x) + (x^2 - y^2)(3z + x + y) = a(x - y)(y - z)(z - x)$ from the values at $x = 2$, $y = 3$ and $z = 0$, and write that line right.",
    "given": [
      "$(y^2 - z^2)(3x + y + z) + (z^2 - x^2)(3y + z + x) + (x^2 - y^2)(3z + x + y) = a(x - y)(y - z)(z - x)$",
      "$(3^2 - 0^2)(3 \\cdot 2 + 3 + 0) + (0^2 - 2^2)(3 \\cdot 3 + 0 + 2) + (2^2 - 3^2)(3 \\cdot 0 + 2 + 3) = a(2 - 3)(3 - 0)(0 - 2)$",
      "$9 \\cdot 9 + (-4) \\cdot 11 + (-5) \\cdot 5 = a \\cdot (-1) \\cdot 3 \\cdot (-2)$",
      "$81 + 44 - 25 = 6a$",
      "$100 = 6a$",
      "$a = \\dfrac{50}{3}$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: 81-44-25 = 6*a",
    "solution": [
      "Find the first wrong line in this working, which finds the number $a$ in $(y^2 - z^2)(3x + y + z) + (z^2 - x^2)(3y + z + x) + (x^2 - y^2)(3z + x + y) = a(x - y)(y - z)(z - x)$ from the values at $x = 2$, $y = 3$ and $z = 0$, and write that line right.",
      "Lines 1 to 3 are right.",
      "Line 4 writes the term $(-4) \\cdot 11$ of line 3 as $44$.",
      "So line 4 is the first wrong line.",
      "Line 4 written right is $81 - 44 - 25 = 6a$."
    ]
  },
  {
    "id": "t207-k3-p03",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, which finds the number $a$ in $(x - 2y)(y - 2z)(z - 2x) - (y - 2x)(z - 2y)(x - 2z) = a(x - y)(y - z)(z - x)$ from the values at $x = 1$, $y = 0$ and $z = 3$, and write that line right.",
    "given": [
      "$(x - 2y)(y - 2z)(z - 2x) - (y - 2x)(z - 2y)(x - 2z) = a(x - y)(y - z)(z - x)$",
      "$(1 - 2 \\cdot 0)(0 - 2 \\cdot 3)(3 - 2 \\cdot 1) - (0 - 2 \\cdot 1)(3 - 2 \\cdot 0)(1 - 2 \\cdot 3) = a(1 - 0)(0 - 3)(3 - 1)$",
      "$1 \\cdot (-6) \\cdot 1 - (-2) \\cdot 3 \\cdot (-5) = a \\cdot 1 \\cdot (-3) \\cdot 2$",
      "$-6 - 30 = -6a$",
      "$36 = -6a$",
      "$a = -6$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 5: -36 = -6*a",
    "solution": [
      "Find the first wrong line in this working, which finds the number $a$ in $(x - 2y)(y - 2z)(z - 2x) - (y - 2x)(z - 2y)(x - 2z) = a(x - y)(y - z)(z - x)$ from the values at $x = 1$, $y = 0$ and $z = 3$, and write that line right.",
      "Lines 1 to 4 are right.",
      "Line 5 writes the sum $-6 - 30$ as $36$.",
      "So line 5 is the first wrong line.",
      "Line 5 written right is $-36 = -6a$."
    ]
  },
  {
    "id": "t207-k3-p04",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, which finds the number $a$ in $x(y - z)(2x + 7y + 7z) + y(z - x)(2y + 7z + 7x) + z(x - y)(2z + 7x + 7y) = a(x - y)(y - z)(z - x)$ from the values at $x = 3$, $y = 2$ and $z = 1$, and write that line right.",
    "given": [
      "$x(y - z)(2x + 7y + 7z) + y(z - x)(2y + 7z + 7x) + z(x - y)(2z + 7x + 7y) = a(x - y)(y - z)(z - x)$",
      "$3 \\cdot (2 - 1)(2 \\cdot 3 + 7 \\cdot 2 + 7 \\cdot 1) + 2 \\cdot (1 - 3)(2 \\cdot 2 + 7 \\cdot 1 + 7 \\cdot 3) + 1 \\cdot (3 - 2)(2 \\cdot 1 + 7 \\cdot 3 + 7 \\cdot 2) = a(3 - 2)(2 - 1)(1 - 3)$",
      "$3 \\cdot 1 \\cdot 27 + 2 \\cdot (-2) \\cdot 32 + 1 \\cdot 1 \\cdot 37 = a \\cdot 1 \\cdot 1 \\cdot (-2)$",
      "$81 - 128 + 37 = -2a$",
      "$10 = -2a$",
      "$a = -5$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 5: -10 = -2*a",
    "solution": [
      "Find the first wrong line in this working, which finds the number $a$ in $x(y - z)(2x + 7y + 7z) + y(z - x)(2y + 7z + 7x) + z(x - y)(2z + 7x + 7y) = a(x - y)(y - z)(z - x)$ from the values at $x = 3$, $y = 2$ and $z = 1$, and write that line right.",
      "Lines 1 to 4 are right.",
      "Line 5 writes the sum $81 - 128 + 37$ as $10$.",
      "So line 5 is the first wrong line.",
      "Line 5 written right is $-10 = -2a$."
    ]
  },
  {
    "id": "t207-k3-p05",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, which finds the number $a$ in $(y - z)(6x + y + z)^2 + (z - x)(6y + z + x)^2 + (x - y)(6z + x + y)^2 = a(x - y)(y - z)(z - x)$ from the values at $x = 3$, $y = 1$ and $z = 2$, and write that line right.",
    "given": [
      "$(y - z)(6x + y + z)^2 + (z - x)(6y + z + x)^2 + (x - y)(6z + x + y)^2 = a(x - y)(y - z)(z - x)$",
      "$(1 - 2)(6 \\cdot 3 + 1 + 2)^2 + (2 - 3)(6 \\cdot 1 + 2 + 3)^2 + (3 - 1)(6 \\cdot 2 + 3 + 1)^2 = a(3 - 1)(1 - 2)(2 - 3)$",
      "$1 \\cdot 21^2 + (-1) \\cdot 11^2 + 2 \\cdot 16^2 = a \\cdot 2 \\cdot (-1) \\cdot (-1)$",
      "$441 - 121 + 512 = 2a$",
      "$832 = 2a$",
      "$a = 416$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: (-1)*21^2+(-1)*11^2+2*16^2 = a*2*(-1)*(-1)",
    "solution": [
      "Find the first wrong line in this working, which finds the number $a$ in $(y - z)(6x + y + z)^2 + (z - x)(6y + z + x)^2 + (x - y)(6z + x + y)^2 = a(x - y)(y - z)(z - x)$ from the values at $x = 3$, $y = 1$ and $z = 2$, and write that line right.",
      "Lines 1 and 2 are right.",
      "Line 3 writes the value of the bracket $1 - 2$ as $1$.",
      "So line 3 is the first wrong line.",
      "Line 3 written right is $(-1) \\cdot 21^2 + (-1) \\cdot 11^2 + 2 \\cdot 16^2 = a \\cdot 2 \\cdot (-1) \\cdot (-1)$."
    ]
  },
  {
    "id": "t207-k3-p06",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, which finds the number $a$ in $(y^2 - z^2)(5x + y + z) + (z^2 - x^2)(5y + z + x) + (x^2 - y^2)(5z + x + y) = a(x - y)(y - z)(z - x)$ from the values at $x = 2$, $y = 1$ and $z = 3$, and write that line right.",
    "given": [
      "$(y^2 - z^2)(5x + y + z) + (z^2 - x^2)(5y + z + x) + (x^2 - y^2)(5z + x + y) = a(x - y)(y - z)(z - x)$",
      "$(1^2 - 3^2)(5 \\cdot 2 + 1 + 3) + (3^2 - 2^2)(5 \\cdot 1 + 3 + 2) + (2^2 - 1^2)(5 \\cdot 3 + 2 + 1) = a(2 - 1)(1 - 3)(3 - 2)$",
      "$(-8) \\cdot 14 + 5 \\cdot 10 + 3 \\cdot 18 = a \\cdot 1 \\cdot (-2) \\cdot 1$",
      "$-112 + 50 + 54 = 2a$",
      "$-8 = 2a$",
      "$a = -4$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: -112+50+54 = -2*a",
    "solution": [
      "Find the first wrong line in this working, which finds the number $a$ in $(y^2 - z^2)(5x + y + z) + (z^2 - x^2)(5y + z + x) + (x^2 - y^2)(5z + x + y) = a(x - y)(y - z)(z - x)$ from the values at $x = 2$, $y = 1$ and $z = 3$, and write that line right.",
      "Lines 1 to 3 are right.",
      "Line 4 writes $a \\cdot 1 \\cdot (-2) \\cdot 1$ as $2a$.",
      "So line 4 is the first wrong line.",
      "Line 4 written right is $-112 + 50 + 54 = -2a$."
    ]
  },
  {
    "id": "t207-k3-p07",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, which finds the number $a$ in $(x - 3y)(y - 3z)(z - 3x) - (y - 3x)(z - 3y)(x - 3z) = a(x - y)(y - z)(z - x)$ from the values at $x = 2$, $y = 0$ and $z = 1$, and write that line right.",
    "given": [
      "$(x - 3y)(y - 3z)(z - 3x) - (y - 3x)(z - 3y)(x - 3z) = a(x - y)(y - z)(z - x)$",
      "$(2 - 3 \\cdot 0)(0 - 3 \\cdot 1)(1 - 3 \\cdot 2) - (0 - 3 \\cdot 2)(1 - 3 \\cdot 0)(2 - 3 \\cdot 1) = a(2 - 0)(0 - 1)(1 - 2)$",
      "$2 \\cdot (-3) \\cdot (-5) - (-6) \\cdot 1 \\cdot (-1) = a \\cdot 2 \\cdot (-1) \\cdot (-1)$",
      "$30 + 6 = 2a$",
      "$36 = 2a$",
      "$a = 18$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: 30-6 = 2*a",
    "solution": [
      "Find the first wrong line in this working, which finds the number $a$ in $(x - 3y)(y - 3z)(z - 3x) - (y - 3x)(z - 3y)(x - 3z) = a(x - y)(y - z)(z - x)$ from the values at $x = 2$, $y = 0$ and $z = 1$, and write that line right.",
      "Lines 1 to 3 are right.",
      "Line 4 writes the term $-(-6) \\cdot 1 \\cdot (-1)$ of line 3 as $6$.",
      "So line 4 is the first wrong line.",
      "Line 4 written right is $30 - 6 = 2a$."
    ]
  },
  {
    "id": "t207-k3-p08",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, which finds the number $a$ in $x(y - z)(x + 3y + 3z) + y(z - x)(y + 3z + 3x) + z(x - y)(z + 3x + 3y) = a(x - y)(y - z)(z - x)$ from the values at $x = 3$, $y = 2$ and $z = 0$, and write that line right.",
    "given": [
      "$x(y - z)(x + 3y + 3z) + y(z - x)(y + 3z + 3x) + z(x - y)(z + 3x + 3y) = a(x - y)(y - z)(z - x)$",
      "$3 \\cdot (2 - 0)(3 + 3 \\cdot 2 + 3 \\cdot 0) + 2 \\cdot (0 - 3)(2 + 3 \\cdot 0 + 3 \\cdot 3) + 0 \\cdot (3 - 2)(0 + 3 \\cdot 3 + 3 \\cdot 2) = a(3 - 2)(2 - 0)(0 - 3)$",
      "$3 \\cdot 2 \\cdot 9 + 2 \\cdot 3 \\cdot 11 + 0 = a \\cdot 1 \\cdot 2 \\cdot (-3)$",
      "$54 + 66 + 0 = -6a$",
      "$120 = -6a$",
      "$a = -20$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: 3*2*9+2*(-3)*11+0 = a*1*2*(-3)",
    "solution": [
      "Find the first wrong line in this working, which finds the number $a$ in $x(y - z)(x + 3y + 3z) + y(z - x)(y + 3z + 3x) + z(x - y)(z + 3x + 3y) = a(x - y)(y - z)(z - x)$ from the values at $x = 3$, $y = 2$ and $z = 0$, and write that line right.",
      "Lines 1 and 2 are right.",
      "Line 3 writes the value of the bracket $0 - 3$ as $3$.",
      "So line 3 is the first wrong line.",
      "Line 3 written right is $3 \\cdot 2 \\cdot 9 + 2 \\cdot (-3) \\cdot 11 + 0 = a \\cdot 1 \\cdot 2 \\cdot (-3)$."
    ]
  },
  {
    "id": "t207-k3-p09",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, which finds the number $a$ in $(y - z)(4x - y - z)^2 + (z - x)(4y - z - x)^2 + (x - y)(4z - x - y)^2 = a(x - y)(y - z)(z - x)$ from the values at $x = 3$, $y = 1$ and $z = 0$, and write that line right.",
    "given": [
      "$(y - z)(4x - y - z)^2 + (z - x)(4y - z - x)^2 + (x - y)(4z - x - y)^2 = a(x - y)(y - z)(z - x)$",
      "$(1 - 0)(4 \\cdot 3 - 1 - 0)^2 + (0 - 3)(4 \\cdot 1 - 0 - 3)^2 + (3 - 1)(4 \\cdot 0 - 3 - 1)^2 = a(3 - 1)(1 - 0)(0 - 3)$",
      "$1 \\cdot 11^2 + (-3) \\cdot 1^2 + 2 \\cdot (-4)^2 = a \\cdot 2 \\cdot 1 \\cdot (-3)$",
      "$121 - 3 + 32 = -6a$",
      "$150 = -6a$",
      "$a = 25$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 6: a = -25",
    "solution": [
      "Find the first wrong line in this working, which finds the number $a$ in $(y - z)(4x - y - z)^2 + (z - x)(4y - z - x)^2 + (x - y)(4z - x - y)^2 = a(x - y)(y - z)(z - x)$ from the values at $x = 3$, $y = 1$ and $z = 0$, and write that line right.",
      "Lines 1 to 5 are right.",
      "Line 6 divides $150$ by $-6$ and writes $25$.",
      "So line 6 is the first wrong line.",
      "Line 6 written right is $a = -25$."
    ]
  },
  {
    "id": "t207-k3-p10",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, which finds the number $a$ in $x(y - z)(5x + y + z) + y(z - x)(5y + z + x) + z(x - y)(5z + x + y) = a(x - y)(y - z)(z - x)$ from the values at $x = 2$, $y = 3$ and $z = 1$, and write that line right.",
    "given": [
      "$x(y - z)(5x + y + z) + y(z - x)(5y + z + x) + z(x - y)(5z + x + y) = a(x - y)(y - z)(z - x)$",
      "$2 \\cdot (3 - 1)(5 \\cdot 2 + 3 + 1) + 3 \\cdot (1 - 2)(5 \\cdot 3 + 1 + 2) + 1 \\cdot (2 - 3)(5 \\cdot 1 + 2 + 3) = a(2 - 3)(3 - 1)(1 - 2)$",
      "$2 \\cdot 2 \\cdot 14 + 3 \\cdot (-1) \\cdot 18 + 1 \\cdot (-1) \\cdot 10 = a \\cdot (-1) \\cdot 2 \\cdot 1$",
      "$56 - 54 - 10 = -2a$",
      "$-8 = -2a$",
      "$a = 4$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: 2*2*14+3*(-1)*18+1*(-1)*10 = a*(-1)*2*(-1)",
    "solution": [
      "Find the first wrong line in this working, which finds the number $a$ in $x(y - z)(5x + y + z) + y(z - x)(5y + z + x) + z(x - y)(5z + x + y) = a(x - y)(y - z)(z - x)$ from the values at $x = 2$, $y = 3$ and $z = 1$, and write that line right.",
      "Lines 1 and 2 are right.",
      "Line 3 writes the value of the bracket $1 - 2$ as $1$.",
      "So line 3 is the first wrong line.",
      "Line 3 written right is $2 \\cdot 2 \\cdot 14 + 3 \\cdot (-1) \\cdot 18 + 1 \\cdot (-1) \\cdot 10 = a \\cdot (-1) \\cdot 2 \\cdot (-1)$."
    ]
  },
  {
    "id": "t207-k3-p11",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, which finds the number $a$ in $(x + 5y)(y + 5z)(z + 5x) - (5x + y)(5y + z)(5z + x) = a(x - y)(y - z)(z - x)$ from the values at $x = 1$, $y = 0$ and $z = 2$, and write that line right.",
    "given": [
      "$(x + 5y)(y + 5z)(z + 5x) - (5x + y)(5y + z)(5z + x) = a(x - y)(y - z)(z - x)$",
      "$(1 + 5 \\cdot 0)(0 + 5 \\cdot 2)(2 + 5 \\cdot 1) - (5 \\cdot 1 + 0)(5 \\cdot 0 + 2)(5 \\cdot 2 + 1) = a(1 - 0)(0 - 2)(2 - 1)$",
      "$1 \\cdot 10 \\cdot 7 - 5 \\cdot 2 \\cdot 11 = a \\cdot 1 \\cdot (-2) \\cdot 1$",
      "$70 + 110 = -2a$",
      "$180 = -2a$",
      "$a = -90$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: 70-110 = -2*a",
    "solution": [
      "Find the first wrong line in this working, which finds the number $a$ in $(x + 5y)(y + 5z)(z + 5x) - (5x + y)(5y + z)(5z + x) = a(x - y)(y - z)(z - x)$ from the values at $x = 1$, $y = 0$ and $z = 2$, and write that line right.",
      "Lines 1 to 3 are right.",
      "Line 4 writes the term $-5 \\cdot 2 \\cdot 11$ of line 3 as $110$.",
      "So line 4 is the first wrong line.",
      "Line 4 written right is $70 - 110 = -2a$."
    ]
  },
  {
    "id": "t207-k3-p12",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, which finds the number $a$ in $(y - z)(5x - y - z)^2 + (z - x)(5y - z - x)^2 + (x - y)(5z - x - y)^2 = a(x - y)(y - z)(z - x)$ from the values at $x = 1$, $y = 3$ and $z = 0$, and write that line right.",
    "given": [
      "$(y - z)(5x - y - z)^2 + (z - x)(5y - z - x)^2 + (x - y)(5z - x - y)^2 = a(x - y)(y - z)(z - x)$",
      "$(3 - 0)(5 \\cdot 1 - 3 - 0)^2 + (0 - 1)(5 \\cdot 3 - 0 - 1)^2 + (1 - 3)(5 \\cdot 0 - 1 - 3)^2 = a(1 - 3)(3 - 0)(0 - 1)$",
      "$3 \\cdot 2^2 + (-1) \\cdot 14^2 + (-2) \\cdot (-4)^2 = a \\cdot (-2) \\cdot 3 \\cdot 1$",
      "$12 - 196 - 32 = -6a$",
      "$-216 = -6a$",
      "$a = 36$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: 3*2^2+(-1)*14^2+(-2)*(-4)^2 = a*(-2)*3*(-1)",
    "solution": [
      "Find the first wrong line in this working, which finds the number $a$ in $(y - z)(5x - y - z)^2 + (z - x)(5y - z - x)^2 + (x - y)(5z - x - y)^2 = a(x - y)(y - z)(z - x)$ from the values at $x = 1$, $y = 3$ and $z = 0$, and write that line right.",
      "Lines 1 and 2 are right.",
      "Line 3 writes the value of the bracket $0 - 1$ as $1$.",
      "So line 3 is the first wrong line.",
      "Line 3 written right is $3 \\cdot 2^2 + (-1) \\cdot 14^2 + (-2) \\cdot (-4)^2 = a \\cdot (-2) \\cdot 3 \\cdot (-1)$."
    ]
  },
  {
    "id": "t207-k3-p13",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, which finds the number $a$ in $(x + 3y)(y + 3z)(z + 3x) - (3x + y)(3y + z)(3z + x) = a(x - y)(y - z)(z - x)$ from the values at $x = 3$, $y = 0$ and $z = 1$, and write that line right.",
    "given": [
      "$(x + 3y)(y + 3z)(z + 3x) - (3x + y)(3y + z)(3z + x) = a(x - y)(y - z)(z - x)$",
      "$(3 + 3 \\cdot 0)(0 + 3 \\cdot 1)(1 + 3 \\cdot 3) - (3 \\cdot 3 + 0)(3 \\cdot 0 + 1)(3 \\cdot 1 + 3) = a(3 - 0)(0 - 1)(1 - 3)$",
      "$3 \\cdot 3 \\cdot 10 - 9 \\cdot 1 \\cdot 6 = a \\cdot 3 \\cdot (-1) \\cdot (-2)$",
      "$90 + 54 = 6a$",
      "$144 = 6a$",
      "$a = 24$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: 90-54 = 6*a",
    "solution": [
      "Find the first wrong line in this working, which finds the number $a$ in $(x + 3y)(y + 3z)(z + 3x) - (3x + y)(3y + z)(3z + x) = a(x - y)(y - z)(z - x)$ from the values at $x = 3$, $y = 0$ and $z = 1$, and write that line right.",
      "Lines 1 to 3 are right.",
      "Line 4 writes the term $-9 \\cdot 1 \\cdot 6$ of line 3 as $54$.",
      "So line 4 is the first wrong line.",
      "Line 4 written right is $90 - 54 = 6a$."
    ]
  },
  {
    "id": "t207-k3-p14",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working, which finds the number $a$ in $x(y - z)(6x + y + z) + y(z - x)(6y + z + x) + z(x - y)(6z + x + y) = a(x - y)(y - z)(z - x)$ from the values at $x = 1$, $y = 2$ and $z = 0$, and write that line right.",
    "given": [
      "$x(y - z)(6x + y + z) + y(z - x)(6y + z + x) + z(x - y)(6z + x + y) = a(x - y)(y - z)(z - x)$",
      "$1 \\cdot (2 - 0)(6 \\cdot 1 + 2 + 0) + 2 \\cdot (0 - 1)(6 \\cdot 2 + 0 + 1) + 0 \\cdot (1 - 2)(6 \\cdot 0 + 1 + 2) = a(1 - 2)(2 - 0)(0 - 1)$",
      "$1 \\cdot 2 \\cdot 8 + 2 \\cdot (-1) \\cdot 13 + 0 = a \\cdot (-1) \\cdot 2 \\cdot (-1)$",
      "$16 - 26 + 0 = 2a$",
      "$-10 = 2a$",
      "$a = 5$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 6: a = -5",
    "solution": [
      "Find the first wrong line in this working, which finds the number $a$ in $x(y - z)(6x + y + z) + y(z - x)(6y + z + x) + z(x - y)(6z + x + y) = a(x - y)(y - z)(z - x)$ from the values at $x = 1$, $y = 2$ and $z = 0$, and write that line right.",
      "Lines 1 to 5 are right.",
      "Line 6 divides $-10$ by $2$ and writes $5$.",
      "So line 6 is the first wrong line.",
      "Line 6 written right is $a = -5$."
    ]
  },
  {
    "id": "t207-k4-p01",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $x - 2y$ is a factor of $x^3 - 2x^2y + xy - 2y^2 + 3y$.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $x - 2y$ is a factor of $x^3 - 2x^2y + xy - 2y^2 + 3y$.",
      "Putting $2y$ for $x$ in the polynomial gives $(2y)^3 - 2(2y)^2y + (2y)y - 2y^2 + 3y$.",
      "Multiplied out, this is $8y^3 - 8y^3 + 2y^2 - 2y^2 + 3y$, which is $3y$.",
      "At $y = 1$ the result is $3$, which is not $0$.",
      "So $x - 2y$ is not a factor of the polynomial, and the answer is No."
    ]
  },
  {
    "id": "t207-k4-p02",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $x - yz$ is a factor of $x^2 - xyz + xz - yz^2 + z^2$.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $x - yz$ is a factor of $x^2 - xyz + xz - yz^2 + z^2$.",
      "Putting $yz$ for $x$ in the polynomial gives $(yz)^2 - (yz)yz + (yz)z - yz^2 + z^2$.",
      "Multiplied out, this is $y^2z^2 - y^2z^2 + yz^2 - yz^2 + z^2$, which is $z^2$.",
      "At $z = 1$ the result is $1$, which is not $0$.",
      "So $x - yz$ is not a factor of the polynomial, and the answer is No."
    ]
  },
  {
    "id": "t207-k4-p03",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $x - yz$ is a factor of $x^2 - xyz + xy - xz - y^2z + yz^2$.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $x - yz$ is a factor of $x^2 - xyz + xy - xz - y^2z + yz^2$.",
      "Putting $yz$ for $x$ in the polynomial gives $(yz)^2 - (yz)yz + (yz)y - (yz)z - y^2z + yz^2$.",
      "Multiplied out, this is $y^2z^2 - y^2z^2 + y^2z - yz^2 - y^2z + yz^2$, which is $0$.",
      "The result is $0$ for all numbers $y$ and $z$.",
      "So $x - yz$ is a factor of the polynomial, and the answer is Yes."
    ]
  },
  {
    "id": "t207-k4-p04",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $x - 2y$ is a factor of $x^3 + 3x^2y + 2xy^2 - x - 2y$.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $x - 2y$ is a factor of $x^3 + 3x^2y + 2xy^2 - x - 2y$.",
      "Putting $2y$ for $x$ in the polynomial gives $(2y)^3 + 3(2y)^2y + 2(2y)y^2 - (2y) - 2y$.",
      "Multiplied out, this is $8y^3 + 12y^3 + 4y^3 - 2y - 2y$, which is $24y^3 - 4y$.",
      "At $y = 1$ the result is $20$, which is not $0$.",
      "So $x - 2y$ is not a factor of the polynomial, and the answer is No."
    ]
  },
  {
    "id": "t207-k4-p05",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $x - y$ is a factor of $2x^3 - x^2y - 2xy^2 + 4x + y^3 - 4y$.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $x - y$ is a factor of $2x^3 - x^2y - 2xy^2 + 4x + y^3 - 4y$.",
      "Putting $y$ for $x$ in the polynomial gives $2y^3 - y^2 \\cdot y - 2y \\cdot y^2 + 4y + y^3 - 4y$.",
      "Multiplied out, this is $2y^3 - y^3 - 2y^3 + 4y + y^3 - 4y$, which is $0$.",
      "The result is $0$ for every number $y$.",
      "So $x - y$ is a factor of the polynomial, and the answer is Yes."
    ]
  },
  {
    "id": "t207-k4-p06",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $x + y + z$ is a factor of $x^2 + 3xz - y^2 + 2yz + 2z^2$.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $x + y + z$ is a factor of $x^2 + 3xz - y^2 + 2yz + 2z^2$.",
      "Putting $-y - z$ for $x$ in the polynomial gives $(-y - z)^2 + 3(-y - z)z - y^2 + 2yz + 2z^2$.",
      "Multiplied out, this is $(y^2 + 2yz + z^2) - (3yz + 3z^2) - y^2 + 2yz + 2z^2$, which is $yz$.",
      "At $y = 1$ and $z = 1$ the result is $1$, which is not $0$.",
      "So $x + y + z$ is not a factor of the polynomial, and the answer is No."
    ]
  },
  {
    "id": "t207-k4-p07",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $x + 3y$ is a factor of $x^3 + 3x^2y - xy + 2x - 3y^2 + 6y$.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $x + 3y$ is a factor of $x^3 + 3x^2y - xy + 2x - 3y^2 + 6y$.",
      "Putting $-3y$ for $x$ in the polynomial gives $(-3y)^3 + 3(-3y)^2y - (-3y)y + 2(-3y) - 3y^2 + 6y$.",
      "Multiplied out, this is $-27y^3 + 27y^3 + 3y^2 - 6y - 3y^2 + 6y$, which is $0$.",
      "The result is $0$ for every number $y$.",
      "So $x + 3y$ is a factor of the polynomial, and the answer is Yes."
    ]
  },
  {
    "id": "t207-k4-p08",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $x + y + z$ is a factor of $x^2 - xy + 4xz - 2y^2 + yz + 3z^2$.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $x + y + z$ is a factor of $x^2 - xy + 4xz - 2y^2 + yz + 3z^2$.",
      "Putting $-y - z$ for $x$ in the polynomial gives $(-y - z)^2 - (-y - z)y + 4(-y - z)z - 2y^2 + yz + 3z^2$.",
      "Multiplied out, this is $(y^2 + 2yz + z^2) + (y^2 + yz) - (4yz + 4z^2) - 2y^2 + yz + 3z^2$, which is $0$.",
      "The result is $0$ for all numbers $y$ and $z$.",
      "So $x + y + z$ is a factor of the polynomial, and the answer is Yes."
    ]
  },
  {
    "id": "t207-k4-p09",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $x - y + 1$ is a factor of $x^2 + xy - x - 2y^2 - 2y$.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $x - y + 1$ is a factor of $x^2 + xy - x - 2y^2 - 2y$.",
      "Putting $y - 1$ for $x$ in the polynomial gives $(y - 1)^2 + (y - 1)y - (y - 1) - 2y^2 - 2y$.",
      "Multiplied out, this is $(y^2 - 2y + 1) + (y^2 - y) - (y - 1) - 2y^2 - 2y$, which is $-6y + 2$.",
      "At $y = 1$ the result is $-4$, which is not $0$.",
      "So $x - y + 1$ is not a factor of the polynomial, and the answer is No."
    ]
  },
  {
    "id": "t207-k4-p10",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $y - 2x$ is a factor of $-2x^2y - xy^2 + 10x + y^3 - 5y$.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $y - 2x$ is a factor of $-2x^2y - xy^2 + 10x + y^3 - 5y$.",
      "Putting $2x$ for $y$ in the polynomial gives $-2x^2(2x) - x(2x)^2 + 10x + (2x)^3 - 5(2x)$.",
      "Multiplied out, this is $-4x^3 - 4x^3 + 10x + 8x^3 - 10x$, which is $0$.",
      "The result is $0$ for every number $x$.",
      "So $y - 2x$ is a factor of the polynomial, and the answer is Yes."
    ]
  },
  {
    "id": "t207-k4-p11",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $z - x - y$ is a factor of $-x^2z - xyz - 2xy + xz^2 - 2y^2 + 2yz$.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $z - x - y$ is a factor of $-x^2z - xyz - 2xy + xz^2 - 2y^2 + 2yz$.",
      "Putting $x + y$ for $z$ in the polynomial gives $-x^2(x + y) - xy(x + y) - 2xy + x(x + y)^2 - 2y^2 + 2y(x + y)$.",
      "Multiplied out, this is $-(x^3 + x^2y) - (x^2y + xy^2) - 2xy + (x^3 + 2x^2y + xy^2) - 2y^2 + (2xy + 2y^2)$, which is $0$.",
      "The result is $0$ for all numbers $x$ and $y$.",
      "So $z - x - y$ is a factor of the polynomial, and the answer is Yes."
    ]
  },
  {
    "id": "t207-k4-p12",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $x + y$ is a factor of $x^3 - xy^2 + 2x - y$.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $x + y$ is a factor of $x^3 - xy^2 + 2x - y$.",
      "Putting $-y$ for $x$ in the polynomial gives $(-y)^3 - (-y)y^2 + 2(-y) - y$.",
      "Multiplied out, this is $-y^3 + y^3 - 2y - y$, which is $-3y$.",
      "At $y = 1$ the result is $-3$, which is not $0$.",
      "So $x + y$ is not a factor of the polynomial, and the answer is No."
    ]
  },
  {
    "id": "t207-k4-p13",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $x + y^2$ is a factor of $x^2 + xy^2 - 3xy + x - 3y^3 + y^2$.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $x + y^2$ is a factor of $x^2 + xy^2 - 3xy + x - 3y^3 + y^2$.",
      "Putting $-y^2$ for $x$ in the polynomial gives $(-y^2)^2 + (-y^2)y^2 - 3(-y^2)y + (-y^2) - 3y^3 + y^2$.",
      "Multiplied out, this is $y^4 - y^4 + 3y^3 - y^2 - 3y^3 + y^2$, which is $0$.",
      "The result is $0$ for every number $y$.",
      "So $x + y^2$ is a factor of the polynomial, and the answer is Yes."
    ]
  },
  {
    "id": "t207-k4-p14",
    "topic": "factor-theorem-in-several-variables",
    "kind": "t207-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $y - 3x$ is a factor of $-2x^2 - 3xy^2 + xy + y^3$.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $y - 3x$ is a factor of $-2x^2 - 3xy^2 + xy + y^3$.",
      "Putting $3x$ for $y$ in the polynomial gives $-2x^2 - 3x(3x)^2 + x(3x) + (3x)^3$.",
      "Multiplied out, this is $-2x^2 - 27x^3 + 3x^2 + 27x^3$, which is $x^2$.",
      "At $x = 1$ the result is $1$, which is not $0$.",
      "So $y - 3x$ is not a factor of the polynomial, and the answer is No."
    ]
  }
]
