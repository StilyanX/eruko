export default [
  {
    "id": "t193-k1-p01",
    "topic": "polynomial-long-division",
    "kind": "t193-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the remainder when $12x^4 + 2x^3 + 99x - 89$ is divided by $3x^2 - 4x + 12$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "-5*x+7",
    "solution": [
      "Find the remainder when $12x^4 + 2x^3 + 99x - 89$ is divided by $3x^2 - 4x + 12$.",
      "$12x^4 + 2x^3 + 99x - 89 = 12x^4 + 2x^3 + 0x^2 + 99x - 89$",
      "The divisor $3x^2 - 4x + 12$ has degree 2, so the remainder is 0 or has degree below 2.",
      "$(12x^4 + 2x^3 + 0x^2 + 99x - 89) - 4x^2(3x^2 - 4x + 12) = 18x^3 - 48x^2 + 99x - 89$",
      "$(18x^3 - 48x^2 + 99x - 89) - 6x(3x^2 - 4x + 12) = -24x^2 + 27x - 89$",
      "$(-24x^2 + 27x - 89) - (-8)(3x^2 - 4x + 12) = -5x + 7$",
      "$12x^4 + 2x^3 + 99x - 89 = (3x^2 - 4x + 12)(4x^2 + 6x - 8) - 5x + 7$",
      "The remainder is $-5x + 7$."
    ]
  },
  {
    "id": "t193-k1-p02",
    "topic": "polynomial-long-division",
    "kind": "t193-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the quotient when $-6x^4 + 52x^3 + 31x^2 - 59x - 37$ is divided by $x^2 - 8x - 10$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "-6*x^2+4*x+3",
    "solution": [
      "Find the quotient when $-6x^4 + 52x^3 + 31x^2 - 59x - 37$ is divided by $x^2 - 8x - 10$.",
      "The divisor $x^2 - 8x - 10$ has degree 2, so the remainder is 0 or has degree below 2.",
      "$(-6x^4 + 52x^3 + 31x^2 - 59x - 37) - (-6x^2)(x^2 - 8x - 10) = 4x^3 - 29x^2 - 59x - 37$",
      "$(4x^3 - 29x^2 - 59x - 37) - 4x(x^2 - 8x - 10) = 3x^2 - 19x - 37$",
      "$(3x^2 - 19x - 37) - 3(x^2 - 8x - 10) = 5x - 7$",
      "$-6x^4 + 52x^3 + 31x^2 - 59x - 37 = (x^2 - 8x - 10)(-6x^2 + 4x + 3) + 5x - 7$",
      "The quotient is $-6x^2 + 4x + 3$."
    ]
  },
  {
    "id": "t193-k1-p03",
    "topic": "polynomial-long-division",
    "kind": "t193-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the remainder when $15x^4 + 31x^3 - 86x^2 + 55$ is divided by $3x^2 + 8x - 10$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "2*x+15",
    "solution": [
      "Find the remainder when $15x^4 + 31x^3 - 86x^2 + 55$ is divided by $3x^2 + 8x - 10$.",
      "$15x^4 + 31x^3 - 86x^2 + 55 = 15x^4 + 31x^3 - 86x^2 + 0x + 55$",
      "The divisor $3x^2 + 8x - 10$ has degree 2, so the remainder is 0 or has degree below 2.",
      "$(15x^4 + 31x^3 - 86x^2 + 0x + 55) - 5x^2(3x^2 + 8x - 10) = -9x^3 - 36x^2 + 0x + 55$",
      "$(-9x^3 - 36x^2 + 0x + 55) - (-3x)(3x^2 + 8x - 10) = -12x^2 - 30x + 55$",
      "$(-12x^2 - 30x + 55) - (-4)(3x^2 + 8x - 10) = 2x + 15$",
      "$15x^4 + 31x^3 - 86x^2 + 55 = (3x^2 + 8x - 10)(5x^2 - 3x - 4) + 2x + 15$",
      "The remainder is $2x + 15$."
    ]
  },
  {
    "id": "t193-k1-p04",
    "topic": "polynomial-long-division",
    "kind": "t193-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the remainder when $-12x^4 - 24x^3 + 12x^2 + 35x - 28$ is divided by $2x^2 + 2x - 3$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "11*x-19",
    "solution": [
      "Find the remainder when $-12x^4 - 24x^3 + 12x^2 + 35x - 28$ is divided by $2x^2 + 2x - 3$.",
      "The divisor $2x^2 + 2x - 3$ has degree 2, so the remainder is 0 or has degree below 2.",
      "$(-12x^4 - 24x^3 + 12x^2 + 35x - 28) - (-6x^2)(2x^2 + 2x - 3) = -12x^3 - 6x^2 + 35x - 28$",
      "$(-12x^3 - 6x^2 + 35x - 28) - (-6x)(2x^2 + 2x - 3) = 6x^2 + 17x - 28$",
      "$(6x^2 + 17x - 28) - 3(2x^2 + 2x - 3) = 11x - 19$",
      "$-12x^4 - 24x^3 + 12x^2 + 35x - 28 = (2x^2 + 2x - 3)(-6x^2 - 6x + 3) + 11x - 19$",
      "The remainder is $11x - 19$."
    ]
  },
  {
    "id": "t193-k1-p05",
    "topic": "polynomial-long-division",
    "kind": "t193-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the remainder when $5x^4 - 30x^3 + 6x^2 + 84x - 29$ is divided by $x^2 - 7x + 9$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "11*x+7",
    "solution": [
      "Find the remainder when $5x^4 - 30x^3 + 6x^2 + 84x - 29$ is divided by $x^2 - 7x + 9$.",
      "The divisor $x^2 - 7x + 9$ has degree 2, so the remainder is 0 or has degree below 2.",
      "$(5x^4 - 30x^3 + 6x^2 + 84x - 29) - 5x^2(x^2 - 7x + 9) = 5x^3 - 39x^2 + 84x - 29$",
      "$(5x^3 - 39x^2 + 84x - 29) - 5x(x^2 - 7x + 9) = -4x^2 + 39x - 29$",
      "$(-4x^2 + 39x - 29) - (-4)(x^2 - 7x + 9) = 11x + 7$",
      "$5x^4 - 30x^3 + 6x^2 + 84x - 29 = (x^2 - 7x + 9)(5x^2 + 5x - 4) + 11x + 7$",
      "The remainder is $11x + 7$."
    ]
  },
  {
    "id": "t193-k1-p06",
    "topic": "polynomial-long-division",
    "kind": "t193-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the quotient when $-3x^3 - 13x^2 - 9x + 12$ is divided by $x + 2$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "-3*x^2-7*x+5",
    "solution": [
      "Find the quotient when $-3x^3 - 13x^2 - 9x + 12$ is divided by $x + 2$.",
      "The divisor $x + 2$ has degree 1, so the remainder is 0 or has degree below 1.",
      "$(-3x^3 - 13x^2 - 9x + 12) - (-3x^2)(x + 2) = -7x^2 - 9x + 12$",
      "$(-7x^2 - 9x + 12) - (-7x)(x + 2) = 5x + 12$",
      "$(5x + 12) - 5(x + 2) = 2$",
      "$-3x^3 - 13x^2 - 9x + 12 = (x + 2)(-3x^2 - 7x + 5) + 2$",
      "The quotient is $-3x^2 - 7x + 5$."
    ]
  },
  {
    "id": "t193-k1-p07",
    "topic": "polynomial-long-division",
    "kind": "t193-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the quotient when $6x^4 + 40x^3 - 84x^2 + 24$ is divided by $x^2 + 7x - 11$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "6*x^2-2*x-4",
    "solution": [
      "Find the quotient when $6x^4 + 40x^3 - 84x^2 + 24$ is divided by $x^2 + 7x - 11$.",
      "$6x^4 + 40x^3 - 84x^2 + 24 = 6x^4 + 40x^3 - 84x^2 + 0x + 24$",
      "The divisor $x^2 + 7x - 11$ has degree 2, so the remainder is 0 or has degree below 2.",
      "$(6x^4 + 40x^3 - 84x^2 + 0x + 24) - 6x^2(x^2 + 7x - 11) = -2x^3 - 18x^2 + 0x + 24$",
      "$(-2x^3 - 18x^2 + 0x + 24) - (-2x)(x^2 + 7x - 11) = -4x^2 - 22x + 24$",
      "$(-4x^2 - 22x + 24) - (-4)(x^2 + 7x - 11) = 6x - 20$",
      "$6x^4 + 40x^3 - 84x^2 + 24 = (x^2 + 7x - 11)(6x^2 - 2x - 4) + 6x - 20$",
      "The quotient is $6x^2 - 2x - 4$."
    ]
  },
  {
    "id": "t193-k1-p08",
    "topic": "polynomial-long-division",
    "kind": "t193-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the remainder when $3x^3 + 27x^2 + 30x + 31$ is divided by $x + 8$.",
    "form": "Answer as an integer.",
    "answer": "-17",
    "solution": [
      "Find the remainder when $3x^3 + 27x^2 + 30x + 31$ is divided by $x + 8$.",
      "The divisor $x + 8$ has degree 1, so the remainder is 0 or has degree below 1.",
      "$(3x^3 + 27x^2 + 30x + 31) - 3x^2(x + 8) = 3x^2 + 30x + 31$",
      "$(3x^2 + 30x + 31) - 3x(x + 8) = 6x + 31$",
      "$(6x + 31) - 6(x + 8) = -17$",
      "$3x^3 + 27x^2 + 30x + 31 = (x + 8)(3x^2 + 3x + 6) - 17$",
      "The remainder is $-17$."
    ]
  },
  {
    "id": "t193-k1-p09",
    "topic": "polynomial-long-division",
    "kind": "t193-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the remainder when $2x^3 - 12x + 38$ is divided by $x + 3$.",
    "form": "Answer as an integer.",
    "answer": "20",
    "solution": [
      "Find the remainder when $2x^3 - 12x + 38$ is divided by $x + 3$.",
      "$2x^3 - 12x + 38 = 2x^3 + 0x^2 - 12x + 38$",
      "The divisor $x + 3$ has degree 1, so the remainder is 0 or has degree below 1.",
      "$(2x^3 + 0x^2 - 12x + 38) - 2x^2(x + 3) = -6x^2 - 12x + 38$",
      "$(-6x^2 - 12x + 38) - (-6x)(x + 3) = 6x + 38$",
      "$(6x + 38) - 6(x + 3) = 20$",
      "$2x^3 - 12x + 38 = (x + 3)(2x^2 - 6x + 6) + 20$",
      "The remainder is $20$."
    ]
  },
  {
    "id": "t193-k1-p10",
    "topic": "polynomial-long-division",
    "kind": "t193-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the remainder when $15x^3 + 49x^2 - 40$ is divided by $3x + 8$.",
    "form": "Answer as an integer.",
    "answer": "24",
    "solution": [
      "Find the remainder when $15x^3 + 49x^2 - 40$ is divided by $3x + 8$.",
      "$15x^3 + 49x^2 - 40 = 15x^3 + 49x^2 + 0x - 40$",
      "The divisor $3x + 8$ has degree 1, so the remainder is 0 or has degree below 1.",
      "$(15x^3 + 49x^2 + 0x - 40) - 5x^2(3x + 8) = 9x^2 + 0x - 40$",
      "$(9x^2 + 0x - 40) - 3x(3x + 8) = -24x - 40$",
      "$(-24x - 40) - (-8)(3x + 8) = 24$",
      "$15x^3 + 49x^2 - 40 = (3x + 8)(5x^2 + 3x - 8) + 24$",
      "The remainder is $24$."
    ]
  },
  {
    "id": "t193-k1-p11",
    "topic": "polynomial-long-division",
    "kind": "t193-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the quotient when $5x^4 + 48x^3 + 76x^2 - 70$ is divided by $x^2 + 9x + 11$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "5*x^2+3*x-6",
    "solution": [
      "Find the quotient when $5x^4 + 48x^3 + 76x^2 - 70$ is divided by $x^2 + 9x + 11$.",
      "$5x^4 + 48x^3 + 76x^2 - 70 = 5x^4 + 48x^3 + 76x^2 + 0x - 70$",
      "The divisor $x^2 + 9x + 11$ has degree 2, so the remainder is 0 or has degree below 2.",
      "$(5x^4 + 48x^3 + 76x^2 + 0x - 70) - 5x^2(x^2 + 9x + 11) = 3x^3 + 21x^2 + 0x - 70$",
      "$(3x^3 + 21x^2 + 0x - 70) - 3x(x^2 + 9x + 11) = -6x^2 - 33x - 70$",
      "$(-6x^2 - 33x - 70) - (-6)(x^2 + 9x + 11) = 21x - 4$",
      "$5x^4 + 48x^3 + 76x^2 - 70 = (x^2 + 9x + 11)(5x^2 + 3x - 6) + 21x - 4$",
      "The quotient is $5x^2 + 3x - 6$."
    ]
  },
  {
    "id": "t193-k1-p12",
    "topic": "polynomial-long-division",
    "kind": "t193-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the remainder when $7x^4 - 53x^3 + 88x^2 - 26x - 10$ is divided by $x^2 - 7x + 9$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "-11*x+17",
    "solution": [
      "Find the remainder when $7x^4 - 53x^3 + 88x^2 - 26x - 10$ is divided by $x^2 - 7x + 9$.",
      "The divisor $x^2 - 7x + 9$ has degree 2, so the remainder is 0 or has degree below 2.",
      "$(7x^4 - 53x^3 + 88x^2 - 26x - 10) - 7x^2(x^2 - 7x + 9) = -4x^3 + 25x^2 - 26x - 10$",
      "$(-4x^3 + 25x^2 - 26x - 10) - (-4x)(x^2 - 7x + 9) = -3x^2 + 10x - 10$",
      "$(-3x^2 + 10x - 10) - (-3)(x^2 - 7x + 9) = -11x + 17$",
      "$7x^4 - 53x^3 + 88x^2 - 26x - 10 = (x^2 - 7x + 9)(7x^2 - 4x - 3) - 11x + 17$",
      "The remainder is $-11x + 17$."
    ]
  },
  {
    "id": "t193-k1-p13",
    "topic": "polynomial-long-division",
    "kind": "t193-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the quotient when $18x^4 - 21x^3 + 33x^2 + 49x - 25$ is divided by $3x^2 - 5x + 9$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "6*x^2+3*x-2",
    "solution": [
      "Find the quotient when $18x^4 - 21x^3 + 33x^2 + 49x - 25$ is divided by $3x^2 - 5x + 9$.",
      "The divisor $3x^2 - 5x + 9$ has degree 2, so the remainder is 0 or has degree below 2.",
      "$(18x^4 - 21x^3 + 33x^2 + 49x - 25) - 6x^2(3x^2 - 5x + 9) = 9x^3 - 21x^2 + 49x - 25$",
      "$(9x^3 - 21x^2 + 49x - 25) - 3x(3x^2 - 5x + 9) = -6x^2 + 22x - 25$",
      "$(-6x^2 + 22x - 25) - (-2)(3x^2 - 5x + 9) = 12x - 7$",
      "$18x^4 - 21x^3 + 33x^2 + 49x - 25 = (3x^2 - 5x + 9)(6x^2 + 3x - 2) + 12x - 7$",
      "The quotient is $6x^2 + 3x - 2$."
    ]
  },
  {
    "id": "t193-k1-p14",
    "topic": "polynomial-long-division",
    "kind": "t193-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the quotient when $-4x^4 + 22x^3 + 65x^2 - 3x - 80$ is divided by $x^2 - 6x - 12$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "-4*x^2-2*x+5",
    "solution": [
      "Find the quotient when $-4x^4 + 22x^3 + 65x^2 - 3x - 80$ is divided by $x^2 - 6x - 12$.",
      "The divisor $x^2 - 6x - 12$ has degree 2, so the remainder is 0 or has degree below 2.",
      "$(-4x^4 + 22x^3 + 65x^2 - 3x - 80) - (-4x^2)(x^2 - 6x - 12) = -2x^3 + 17x^2 - 3x - 80$",
      "$(-2x^3 + 17x^2 - 3x - 80) - (-2x)(x^2 - 6x - 12) = 5x^2 - 27x - 80$",
      "$(5x^2 - 27x - 80) - 5(x^2 - 6x - 12) = 3x - 20$",
      "$-4x^4 + 22x^3 + 65x^2 - 3x - 80 = (x^2 - 6x - 12)(-4x^2 - 2x + 5) + 3x - 20$",
      "The quotient is $-4x^2 - 2x + 5$."
    ]
  },
  {
    "id": "t193-k1-p15",
    "topic": "polynomial-long-division",
    "kind": "t193-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the quotient when $21x^4 - 34x^3 - 119x^2 + 75$ is divided by $3x^2 - 7x - 9$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "7*x^2+5*x-7",
    "solution": [
      "Find the quotient when $21x^4 - 34x^3 - 119x^2 + 75$ is divided by $3x^2 - 7x - 9$.",
      "$21x^4 - 34x^3 - 119x^2 + 75 = 21x^4 - 34x^3 - 119x^2 + 0x + 75$",
      "The divisor $3x^2 - 7x - 9$ has degree 2, so the remainder is 0 or has degree below 2.",
      "$(21x^4 - 34x^3 - 119x^2 + 0x + 75) - 7x^2(3x^2 - 7x - 9) = 15x^3 - 56x^2 + 0x + 75$",
      "$(15x^3 - 56x^2 + 0x + 75) - 5x(3x^2 - 7x - 9) = -21x^2 + 45x + 75$",
      "$(-21x^2 + 45x + 75) - (-7)(3x^2 - 7x - 9) = -4x + 12$",
      "$21x^4 - 34x^3 - 119x^2 + 75 = (3x^2 - 7x - 9)(7x^2 + 5x - 7) - 4x + 12$",
      "The quotient is $7x^2 + 5x - 7$."
    ]
  },
  {
    "id": "t193-k1-p16",
    "topic": "polynomial-long-division",
    "kind": "t193-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the quotient when $6x^3 + 33x^2 + 21x - 32$ is divided by $2x + 9$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "3*x^2+3*x-3",
    "solution": [
      "Find the quotient when $6x^3 + 33x^2 + 21x - 32$ is divided by $2x + 9$.",
      "The divisor $2x + 9$ has degree 1, so the remainder is 0 or has degree below 1.",
      "$(6x^3 + 33x^2 + 21x - 32) - 3x^2(2x + 9) = 6x^2 + 21x - 32$",
      "$(6x^2 + 21x - 32) - 3x(2x + 9) = -6x - 32$",
      "$(-6x - 32) - (-3)(2x + 9) = -5$",
      "$6x^3 + 33x^2 + 21x - 32 = (2x + 9)(3x^2 + 3x - 3) - 5$",
      "The quotient is $3x^2 + 3x - 3$."
    ]
  },
  {
    "id": "t193-k1-p17",
    "topic": "polynomial-long-division",
    "kind": "t193-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the remainder when $-7x^4 - 65x^3 + 61x^2 - 33$ is divided by $x^2 + 9x - 11$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "-40*x-11",
    "solution": [
      "Find the remainder when $-7x^4 - 65x^3 + 61x^2 - 33$ is divided by $x^2 + 9x - 11$.",
      "$-7x^4 - 65x^3 + 61x^2 - 33 = -7x^4 - 65x^3 + 61x^2 + 0x - 33$",
      "The divisor $x^2 + 9x - 11$ has degree 2, so the remainder is 0 or has degree below 2.",
      "$(-7x^4 - 65x^3 + 61x^2 + 0x - 33) - (-7x^2)(x^2 + 9x - 11) = -2x^3 - 16x^2 + 0x - 33$",
      "$(-2x^3 - 16x^2 + 0x - 33) - (-2x)(x^2 + 9x - 11) = 2x^2 - 22x - 33$",
      "$(2x^2 - 22x - 33) - 2(x^2 + 9x - 11) = -40x - 11$",
      "$-7x^4 - 65x^3 + 61x^2 - 33 = (x^2 + 9x - 11)(-7x^2 - 2x + 2) - 40x - 11$",
      "The remainder is $-40x - 11$."
    ]
  },
  {
    "id": "t193-k1-p18",
    "topic": "polynomial-long-division",
    "kind": "t193-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the quotient when $-7x^3 - 26x^2 - 53$ is divided by $x + 4$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "-7*x^2+2*x-8",
    "solution": [
      "Find the quotient when $-7x^3 - 26x^2 - 53$ is divided by $x + 4$.",
      "$-7x^3 - 26x^2 - 53 = -7x^3 - 26x^2 + 0x - 53$",
      "The divisor $x + 4$ has degree 1, so the remainder is 0 or has degree below 1.",
      "$(-7x^3 - 26x^2 + 0x - 53) - (-7x^2)(x + 4) = 2x^2 + 0x - 53$",
      "$(2x^2 + 0x - 53) - 2x(x + 4) = -8x - 53$",
      "$(-8x - 53) - (-8)(x + 4) = -21$",
      "$-7x^3 - 26x^2 - 53 = (x + 4)(-7x^2 + 2x - 8) - 21$",
      "The quotient is $-7x^2 + 2x - 8$."
    ]
  },
  {
    "id": "t193-k1-p19",
    "topic": "polynomial-long-division",
    "kind": "t193-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the quotient when $4x^3 - 9x^2 - 32x + 9$ is divided by $x - 4$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "4*x^2+7*x-4",
    "solution": [
      "Find the quotient when $4x^3 - 9x^2 - 32x + 9$ is divided by $x - 4$.",
      "The divisor $x - 4$ has degree 1, so the remainder is 0 or has degree below 1.",
      "$(4x^3 - 9x^2 - 32x + 9) - 4x^2(x - 4) = 7x^2 - 32x + 9$",
      "$(7x^2 - 32x + 9) - 7x(x - 4) = -4x + 9$",
      "$(-4x + 9) - (-4)(x - 4) = -7$",
      "$4x^3 - 9x^2 - 32x + 9 = (x - 4)(4x^2 + 7x - 4) - 7$",
      "The quotient is $4x^2 + 7x - 4$."
    ]
  },
  {
    "id": "t193-k1-p20",
    "topic": "polynomial-long-division",
    "kind": "t193-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the remainder when $8x^3 - 36x^2 + 32x - 42$ is divided by $2x - 7$.",
    "form": "Answer as an integer.",
    "answer": "-28",
    "solution": [
      "Find the remainder when $8x^3 - 36x^2 + 32x - 42$ is divided by $2x - 7$.",
      "The divisor $2x - 7$ has degree 1, so the remainder is 0 or has degree below 1.",
      "$(8x^3 - 36x^2 + 32x - 42) - 4x^2(2x - 7) = -8x^2 + 32x - 42$",
      "$(-8x^2 + 32x - 42) - (-4x)(2x - 7) = 4x - 42$",
      "$(4x - 42) - 2(2x - 7) = -28$",
      "$8x^3 - 36x^2 + 32x - 42 = (2x - 7)(4x^2 - 4x + 2) - 28$",
      "The remainder is $-28$."
    ]
  },
  {
    "id": "t193-k1-p21",
    "topic": "polynomial-long-division",
    "kind": "t193-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the quotient when $-7x^3 + 12x^2 + 34$ is divided by $x - 2$.",
    "form": "Answer with the brackets multiplied out and like terms collected, as in 2*x^2-5*x+3.",
    "answer": "-7*x^2-2*x-4",
    "solution": [
      "Find the quotient when $-7x^3 + 12x^2 + 34$ is divided by $x - 2$.",
      "$-7x^3 + 12x^2 + 34 = -7x^3 + 12x^2 + 0x + 34$",
      "The divisor $x - 2$ has degree 1, so the remainder is 0 or has degree below 1.",
      "$(-7x^3 + 12x^2 + 0x + 34) - (-7x^2)(x - 2) = -2x^2 + 0x + 34$",
      "$(-2x^2 + 0x + 34) - (-2x)(x - 2) = -4x + 34$",
      "$(-4x + 34) - (-4)(x - 2) = 26$",
      "$-7x^3 + 12x^2 + 34 = (x - 2)(-7x^2 - 2x - 4) + 26$",
      "The quotient is $-7x^2 - 2x - 4$."
    ]
  },
  {
    "id": "t193-k1-p22",
    "topic": "polynomial-long-division",
    "kind": "t193-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the remainder when $-21x^3 + 5x^2 + 30$ is divided by $3x - 2$.",
    "form": "Answer as an integer.",
    "answer": "26",
    "solution": [
      "Find the remainder when $-21x^3 + 5x^2 + 30$ is divided by $3x - 2$.",
      "$-21x^3 + 5x^2 + 30 = -21x^3 + 5x^2 + 0x + 30$",
      "The divisor $3x - 2$ has degree 1, so the remainder is 0 or has degree below 1.",
      "$(-21x^3 + 5x^2 + 0x + 30) - (-7x^2)(3x - 2) = -9x^2 + 0x + 30$",
      "$(-9x^2 + 0x + 30) - (-3x)(3x - 2) = -6x + 30$",
      "$(-6x + 30) - (-2)(3x - 2) = 26$",
      "$-21x^3 + 5x^2 + 30 = (3x - 2)(-7x^2 - 3x - 2) + 26$",
      "The remainder is $26$."
    ]
  },
  {
    "id": "t193-k2-p01",
    "topic": "polynomial-long-division",
    "kind": "t193-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this long division of $-4x^4 + 2x^3 + 2x^2 + 16x - 41$ by $2x - 3$, and write that line right.",
    "given": [
      "$(-4x^4 + 2x^3 + 2x^2 + 16x - 41) - (-2x^3)(2x - 3) = -4x^3 + 2x^2 + 16x - 41$",
      "$(-4x^3 + 2x^2 + 16x - 41) - (-2x^2)(2x - 3) = -4x^2 + 16x - 41$",
      "$(-4x^2 + 16x - 41) - (-2x)(2x - 3) = 22x - 41$",
      "$(22x - 41) - 11(2x - 3) = -8$",
      "$-4x^4 + 2x^3 + 2x^2 + 16x - 41 = (2x - 3)(-2x^3 - 2x^2 - 2x + 11) - 8$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: (-4*x^2+16*x-41)-(-2*x)*(2*x-3) = 10*x-41",
    "solution": [
      "Find the first wrong line in this long division of $-4x^4 + 2x^3 + 2x^2 + 16x - 41$ by $2x - 3$, and write that line right.",
      "Lines 1 and 2 are right.",
      "Line 3 takes away $(-2x)(2x - 3) = -4x^2 + 6x$, and writes $16x - 6x$ as $22x$.",
      "Lines 1 and 2 are right and line 3 is not, so line 3 is the first wrong line.",
      "Line 3 written right is $(-4x^2 + 16x - 41) - (-2x)(2x - 3) = 10x - 41$."
    ]
  },
  {
    "id": "t193-k2-p02",
    "topic": "polynomial-long-division",
    "kind": "t193-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this long division of $-6x^4 + 9x^3 + 9x - 9$ by $x - 2$, and write that line right.",
    "given": [
      "$(-6x^4 + 9x^3 + 0x^2 + 9x - 9) - (-6x^3)(x - 2) = -3x^3 + 0x^2 + 9x - 9$",
      "$(-3x^3 + 0x^2 + 9x - 9) - (-3x^2)(x - 2) = 6x^2 + 9x - 9$",
      "$(6x^2 + 9x - 9) - 6x(x - 2) = 21x - 9$",
      "$(21x - 9) - 21(x - 2) = 33$",
      "$-6x^4 + 9x^3 + 9x - 9 = (x - 2)(-6x^3 - 3x^2 + 6x + 21) + 33$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: (-3*x^3+0*x^2+9*x-9)-(-3*x^2)*(x-2) = -6*x^2+9*x-9",
    "solution": [
      "Find the first wrong line in this long division of $-6x^4 + 9x^3 + 9x - 9$ by $x - 2$, and write that line right.",
      "Line 1 is right.",
      "Line 2 takes away $(-3x^2)(x - 2) = -3x^3 + 6x^2$, and writes $0x^2 - 6x^2$ as $6x^2$.",
      "Line 1 is right and line 2 is not, so line 2 is the first wrong line.",
      "Line 2 written right is $(-3x^3 + 0x^2 + 9x - 9) - (-3x^2)(x - 2) = -6x^2 + 9x - 9$."
    ]
  },
  {
    "id": "t193-k2-p03",
    "topic": "polynomial-long-division",
    "kind": "t193-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this long division of $-3x^4 - 4x^3 + 9x^2 + 6x - 2$ by $x + 2$, and write that line right.",
    "given": [
      "$(-3x^4 - 4x^3 + 9x^2 + 6x - 2) - (-3x^3)(x + 2) = 2x^3 + 9x^2 + 6x - 2$",
      "$(2x^3 + 9x^2 + 6x - 2) - 2x^2(x + 2) = 13x^2 + 6x - 2$",
      "$(13x^2 + 6x - 2) - 13x(x + 2) = -20x - 2$",
      "$(-20x - 2) - (-20)(x + 2) = 38$",
      "$-3x^4 - 4x^3 + 9x^2 + 6x - 2 = (x + 2)(-3x^3 + 2x^2 + 13x - 20) + 38$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: (2*x^3+9*x^2+6*x-2)-(2*x^2)*(x+2) = 5*x^2+6*x-2",
    "solution": [
      "Find the first wrong line in this long division of $-3x^4 - 4x^3 + 9x^2 + 6x - 2$ by $x + 2$, and write that line right.",
      "Line 1 is right.",
      "Line 2 takes away $2x^2(x + 2) = 2x^3 + 4x^2$, and writes $9x^2 - 4x^2$ as $13x^2$.",
      "Line 1 is right and line 2 is not, so line 2 is the first wrong line.",
      "Line 2 written right is $(2x^3 + 9x^2 + 6x - 2) - 2x^2(x + 2) = 5x^2 + 6x - 2$."
    ]
  },
  {
    "id": "t193-k2-p04",
    "topic": "polynomial-long-division",
    "kind": "t193-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this long division of $12x^4 + 26x^3 - 20x^2 - 29x - 20$ by $2x + 5$, and write that line right.",
    "given": [
      "$(12x^4 + 26x^3 - 20x^2 - 29x - 20) - 6x^3(2x + 5) = -4x^3 - 20x^2 - 29x - 20$",
      "$(-4x^3 - 20x^2 - 29x - 20) - (-2x^2)(2x + 5) = -10x^2 - 29x - 20$",
      "$(-10x^2 - 29x - 20) - (-5x)(2x + 5) = -54x - 20$",
      "$(-54x - 20) - (-27)(2x + 5) = 115$",
      "$12x^4 + 26x^3 - 20x^2 - 29x - 20 = (2x + 5)(6x^3 - 2x^2 - 5x - 27) + 115$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: (-10*x^2-29*x-20)-(-5*x)*(2*x+5) = -4*x-20",
    "solution": [
      "Find the first wrong line in this long division of $12x^4 + 26x^3 - 20x^2 - 29x - 20$ by $2x + 5$, and write that line right.",
      "Lines 1 and 2 are right.",
      "Line 3 takes away $(-5x)(2x + 5) = -10x^2 - 25x$, and writes $-29x - (-25x)$ as $-54x$.",
      "Lines 1 and 2 are right and line 3 is not, so line 3 is the first wrong line.",
      "Line 3 written right is $(-10x^2 - 29x - 20) - (-5x)(2x + 5) = -4x - 20$."
    ]
  },
  {
    "id": "t193-k2-p05",
    "topic": "polynomial-long-division",
    "kind": "t193-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this long division of $5x^4 - 18x^3 + 12x^2 - 12x + 2$ by $x - 3$, and write that line right.",
    "given": [
      "$(5x^4 - 18x^3 + 12x^2 - 12x + 2) - 5x^3(x - 3) = -3x^3 + 12x^2 - 12x + 2$",
      "$(-3x^3 + 12x^2 - 12x + 2) - (-3x^2)(x - 3) = 3x^2 - 12x + 2$",
      "$(3x^2 - 12x + 2) - 3x(x - 3) = -21x + 2$",
      "$(-21x + 2) - (-21)(x - 3) = -61$",
      "$5x^4 - 18x^3 + 12x^2 - 12x + 2 = (x - 3)(5x^3 - 3x^2 + 3x - 21) - 61$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: (3*x^2-12*x+2)-(3*x)*(x-3) = -3*x+2",
    "solution": [
      "Find the first wrong line in this long division of $5x^4 - 18x^3 + 12x^2 - 12x + 2$ by $x - 3$, and write that line right.",
      "Lines 1 and 2 are right.",
      "Line 3 takes away $3x(x - 3) = 3x^2 - 9x$, and writes $-12x - (-9x)$ as $-21x$.",
      "Lines 1 and 2 are right and line 3 is not, so line 3 is the first wrong line.",
      "Line 3 written right is $(3x^2 - 12x + 2) - 3x(x - 3) = -3x + 2$."
    ]
  },
  {
    "id": "t193-k2-p06",
    "topic": "polynomial-long-division",
    "kind": "t193-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this long division of $-2x^4 + 22x^3 - 51x^2 + 29x - 75$ by $x - 8$, and write that line right.",
    "given": [
      "$(-2x^4 + 22x^3 - 51x^2 + 29x - 75) - (-2x^3)(x - 8) = 6x^3 - 51x^2 + 29x - 75$",
      "$(6x^3 - 51x^2 + 29x - 75) - 6x^2(x - 8) = -3x^2 + 29x - 75$",
      "$(-3x^2 + 29x - 75) - (-3x)(x - 8) = 5x - 75$",
      "$(5x - 75) - 5(x - 8) = -115$",
      "$-2x^4 + 22x^3 - 51x^2 + 29x - 75 = (x - 8)(-2x^3 + 6x^2 - 3x + 5) - 115$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: (5*x-75)-(5)*(x-8) = -35",
    "solution": [
      "Find the first wrong line in this long division of $-2x^4 + 22x^3 - 51x^2 + 29x - 75$ by $x - 8$, and write that line right.",
      "Lines 1 to 3 are right.",
      "Line 4 takes away $5(x - 8) = 5x - 40$, and writes $-75 - (-40)$ as $-115$.",
      "Lines 1 to 3 are right and line 4 is not, so line 4 is the first wrong line.",
      "Line 4 written right is $(5x - 75) - 5(x - 8) = -35$."
    ]
  },
  {
    "id": "t193-k2-p07",
    "topic": "polynomial-long-division",
    "kind": "t193-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this long division of $3x^4 - 15x^3 - 13x^2 - 25x + 3$ by $x - 6$, and write that line right.",
    "given": [
      "$(3x^4 - 15x^3 - 13x^2 - 25x + 3) - 3x^3(x - 6) = 3x^3 - 13x^2 - 25x + 3$",
      "$(3x^3 - 13x^2 - 25x + 3) - 3x^2(x - 6) = 5x^2 - 25x + 3$",
      "$(5x^2 - 25x + 3) - 5x(x - 6) = 5x + 3$",
      "$(5x + 3) - 5(x - 6) = -27$",
      "$3x^4 - 15x^3 - 13x^2 - 25x + 3 = (x - 6)(3x^3 + 3x^2 + 5x + 5) - 27$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: (5*x+3)-(5)*(x-6) = 33",
    "solution": [
      "Find the first wrong line in this long division of $3x^4 - 15x^3 - 13x^2 - 25x + 3$ by $x - 6$, and write that line right.",
      "Lines 1 to 3 are right.",
      "Line 4 takes away $5(x - 6) = 5x - 30$, and writes $3 - (-30)$ as $-27$.",
      "Lines 1 to 3 are right and line 4 is not, so line 4 is the first wrong line.",
      "Line 4 written right is $(5x + 3) - 5(x - 6) = 33$."
    ]
  },
  {
    "id": "t193-k2-p08",
    "topic": "polynomial-long-division",
    "kind": "t193-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this long division of $-6x^4 - 23x^3 - 28x^2 - 32x + 9$ by $2x + 5$, and write that line right.",
    "given": [
      "$(-6x^4 - 23x^3 - 28x^2 - 32x + 9) - (-3x^3)(2x + 5) = -8x^3 - 28x^2 - 32x + 9$",
      "$(-8x^3 - 28x^2 - 32x + 9) - (-4x^2)(2x + 5) = -8x^2 - 32x + 9$",
      "$(-8x^2 - 32x + 9) - (-4x)(2x + 5) = -12x + 9$",
      "$(-12x + 9) - (-6)(2x + 5) = -21$",
      "$-6x^4 - 23x^3 - 28x^2 - 32x + 9 = (2x + 5)(-3x^3 - 4x^2 - 4x - 6) - 21$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: (-12*x+9)-(-6)*(2*x+5) = 39",
    "solution": [
      "Find the first wrong line in this long division of $-6x^4 - 23x^3 - 28x^2 - 32x + 9$ by $2x + 5$, and write that line right.",
      "Lines 1 to 3 are right.",
      "Line 4 takes away $(-6)(2x + 5) = -12x - 30$, and writes $9 - (-30)$ as $-21$.",
      "Lines 1 to 3 are right and line 4 is not, so line 4 is the first wrong line.",
      "Line 4 written right is $(-12x + 9) - (-6)(2x + 5) = 39$."
    ]
  },
  {
    "id": "t193-k2-p09",
    "topic": "polynomial-long-division",
    "kind": "t193-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this long division of $-10x^4 - 41x^3 - 29x^2 - 38x - 54$ by $2x + 7$, and write that line right.",
    "given": [
      "$(-10x^4 - 41x^3 - 29x^2 - 38x - 54) - (-5x^3)(2x + 7) = -6x^3 - 29x^2 - 38x - 54$",
      "$(-6x^3 - 29x^2 - 38x - 54) - (-3x^2)(2x + 7) = -8x^2 - 38x - 54$",
      "$(-8x^2 - 38x - 54) - (-4x)(2x + 7) = -66x - 54$",
      "$(-66x - 54) - (-33)(2x + 7) = 177$",
      "$-10x^4 - 41x^3 - 29x^2 - 38x - 54 = (2x + 7)(-5x^3 - 3x^2 - 4x - 33) + 177$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: (-8*x^2-38*x-54)-(-4*x)*(2*x+7) = -10*x-54",
    "solution": [
      "Find the first wrong line in this long division of $-10x^4 - 41x^3 - 29x^2 - 38x - 54$ by $2x + 7$, and write that line right.",
      "Lines 1 and 2 are right.",
      "Line 3 takes away $(-4x)(2x + 7) = -8x^2 - 28x$, and writes $-38x - (-28x)$ as $-66x$.",
      "Lines 1 and 2 are right and line 3 is not, so line 3 is the first wrong line.",
      "Line 3 written right is $(-8x^2 - 38x - 54) - (-4x)(2x + 7) = -10x - 54$."
    ]
  },
  {
    "id": "t193-k2-p10",
    "topic": "polynomial-long-division",
    "kind": "t193-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this long division of $2x^4 + 8x^3 + 4x^2 - 3x + 23$ by $x + 3$, and write that line right.",
    "given": [
      "$(2x^4 + 8x^3 + 4x^2 - 3x + 23) - 2x^3(x + 3) = 2x^3 + 4x^2 - 3x + 23$",
      "$(2x^3 + 4x^2 - 3x + 23) - 2x^2(x + 3) = 10x^2 - 3x + 23$",
      "$(10x^2 - 3x + 23) - 10x(x + 3) = -33x + 23$",
      "$(-33x + 23) - (-33)(x + 3) = 122$",
      "$2x^4 + 8x^3 + 4x^2 - 3x + 23 = (x + 3)(2x^3 + 2x^2 + 10x - 33) + 122$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: (2*x^3+4*x^2-3*x+23)-(2*x^2)*(x+3) = -2*x^2-3*x+23",
    "solution": [
      "Find the first wrong line in this long division of $2x^4 + 8x^3 + 4x^2 - 3x + 23$ by $x + 3$, and write that line right.",
      "Line 1 is right.",
      "Line 2 takes away $2x^2(x + 3) = 2x^3 + 6x^2$, and writes $4x^2 - 6x^2$ as $10x^2$.",
      "Line 1 is right and line 2 is not, so line 2 is the first wrong line.",
      "Line 2 written right is $(2x^3 + 4x^2 - 3x + 23) - 2x^2(x + 3) = -2x^2 - 3x + 23$."
    ]
  },
  {
    "id": "t193-k2-p11",
    "topic": "polynomial-long-division",
    "kind": "t193-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this long division of $3x^4 - 26x^3 + 32x^2 + 19x - 6$ by $x - 7$, and write that line right.",
    "given": [
      "$(3x^4 - 26x^3 + 32x^2 + 19x - 6) - 3x^3(x - 7) = -5x^3 + 32x^2 + 19x - 6$",
      "$(-5x^3 + 32x^2 + 19x - 6) - (-5x^2)(x - 7) = -3x^2 + 19x - 6$",
      "$(-3x^2 + 19x - 6) - (-3x)(x - 7) = -2x - 6$",
      "$(-2x - 6) - (-2)(x - 7) = 8$",
      "$3x^4 - 26x^3 + 32x^2 + 19x - 6 = (x - 7)(3x^3 - 5x^2 - 3x - 2) + 8$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: (-2*x-6)-(-2)*(x-7) = -20",
    "solution": [
      "Find the first wrong line in this long division of $3x^4 - 26x^3 + 32x^2 + 19x - 6$ by $x - 7$, and write that line right.",
      "Lines 1 to 3 are right.",
      "Line 4 takes away $(-2)(x - 7) = -2x + 14$, and writes $-6 - 14$ as $8$.",
      "Lines 1 to 3 are right and line 4 is not, so line 4 is the first wrong line.",
      "Line 4 written right is $(-2x - 6) - (-2)(x - 7) = -20$."
    ]
  },
  {
    "id": "t193-k2-p12",
    "topic": "polynomial-long-division",
    "kind": "t193-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this long division of $12x^4 - 52x^3 + 43x^2 - 40x + 18$ by $2x - 7$, and write that line right.",
    "given": [
      "$(12x^4 - 52x^3 + 43x^2 - 40x + 18) - 6x^3(2x - 7) = -10x^3 + 43x^2 - 40x + 18$",
      "$(-10x^3 + 43x^2 - 40x + 18) - (-5x^2)(2x - 7) = 8x^2 - 40x + 18$",
      "$(8x^2 - 40x + 18) - 4x(2x - 7) = -12x + 18$",
      "$(-12x + 18) - (-6)(2x - 7) = 60$",
      "$12x^4 - 52x^3 + 43x^2 - 40x + 18 = (2x - 7)(6x^3 - 5x^2 + 4x - 6) + 60$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: (-12*x+18)-(-6)*(2*x-7) = -24",
    "solution": [
      "Find the first wrong line in this long division of $12x^4 - 52x^3 + 43x^2 - 40x + 18$ by $2x - 7$, and write that line right.",
      "Lines 1 to 3 are right.",
      "Line 4 takes away $(-6)(2x - 7) = -12x + 42$, and writes $18 - 42$ as $60$.",
      "Lines 1 to 3 are right and line 4 is not, so line 4 is the first wrong line.",
      "Line 4 written right is $(-12x + 18) - (-6)(2x - 7) = -24$."
    ]
  },
  {
    "id": "t193-k2-p13",
    "topic": "polynomial-long-division",
    "kind": "t193-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this long division of $12x^4 - 22x^3 + 12x^2 - 15x + 44$ by $2x - 3$, and write that line right.",
    "given": [
      "$(12x^4 - 22x^3 + 12x^2 - 15x + 44) - 6x^3(2x - 3) = -4x^3 + 12x^2 - 15x + 44$",
      "$(-4x^3 + 12x^2 - 15x + 44) - (-2x^2)(2x - 3) = 18x^2 - 15x + 44$",
      "$(18x^2 - 15x + 44) - 9x(2x - 3) = 12x + 44$",
      "$(12x + 44) - 6(2x - 3) = 62$",
      "$12x^4 - 22x^3 + 12x^2 - 15x + 44 = (2x - 3)(6x^3 - 2x^2 + 9x + 6) + 62$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: (-4*x^3+12*x^2-15*x+44)-(-2*x^2)*(2*x-3) = 6*x^2-15*x+44",
    "solution": [
      "Find the first wrong line in this long division of $12x^4 - 22x^3 + 12x^2 - 15x + 44$ by $2x - 3$, and write that line right.",
      "Line 1 is right.",
      "Line 2 takes away $(-2x^2)(2x - 3) = -4x^3 + 6x^2$, and writes $12x^2 - 6x^2$ as $18x^2$.",
      "Line 1 is right and line 2 is not, so line 2 is the first wrong line.",
      "Line 2 written right is $(-4x^3 + 12x^2 - 15x + 44) - (-2x^2)(2x - 3) = 6x^2 - 15x + 44$."
    ]
  },
  {
    "id": "t193-k2-p14",
    "topic": "polynomial-long-division",
    "kind": "t193-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this long division of $12x^4 - 26x^3 - 4x^2 - 19x - 3$ by $2x - 5$, and write that line right.",
    "given": [
      "$(12x^4 - 26x^3 - 4x^2 - 19x - 3) - 6x^3(2x - 5) = 4x^3 - 4x^2 - 19x - 3$",
      "$(4x^3 - 4x^2 - 19x - 3) - 2x^2(2x - 5) = -14x^2 - 19x - 3$",
      "$(-14x^2 - 19x - 3) - (-7x)(2x - 5) = -54x - 3$",
      "$(-54x - 3) - (-27)(2x - 5) = -138$",
      "$12x^4 - 26x^3 - 4x^2 - 19x - 3 = (2x - 5)(6x^3 + 2x^2 - 7x - 27) - 138$"
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: (4*x^3-4*x^2-19*x-3)-(2*x^2)*(2*x-5) = 6*x^2-19*x-3",
    "solution": [
      "Find the first wrong line in this long division of $12x^4 - 26x^3 - 4x^2 - 19x - 3$ by $2x - 5$, and write that line right.",
      "Line 1 is right.",
      "Line 2 takes away $2x^2(2x - 5) = 4x^3 - 10x^2$, and writes $-4x^2 - (-10x^2)$ as $-14x^2$.",
      "Line 1 is right and line 2 is not, so line 2 is the first wrong line.",
      "Line 2 written right is $(4x^3 - 4x^2 - 19x - 3) - 2x^2(2x - 5) = 6x^2 - 19x - 3$."
    ]
  },
  {
    "id": "t193-k3-p01",
    "topic": "polynomial-long-division",
    "kind": "t193-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find a number $a$ for which the division of $2x^3 + ax^2 + 7x - 30$ by $x + 6$ leaves the remainder $0$.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "a = 14",
    "solution": [
      "Find a number $a$ for which the division of $2x^3 + ax^2 + 7x - 30$ by $x + 6$ leaves the remainder $0$.",
      "$(2x^3 + ax^2 + 7x - 30) - 2x^2(x + 6) = (a - 12)x^2 + 7x - 30$",
      "$((a - 12)x^2 + 7x - 30) - (a - 12)x(x + 6) = (-6a + 79)x - 30$",
      "$((-6a + 79)x - 30) - (-6a + 79)(x + 6) = 36a - 504$",
      "$36a - 504 = 0$",
      "$a = 14$"
    ]
  },
  {
    "id": "t193-k3-p02",
    "topic": "polynomial-long-division",
    "kind": "t193-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find a number $a$ for which the division of $-2x^3 - 9x^2 + ax - 24$ by $x + 7$ leaves the remainder $0$.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "a = 221/7",
    "solution": [
      "Find a number $a$ for which the division of $-2x^3 - 9x^2 + ax - 24$ by $x + 7$ leaves the remainder $0$.",
      "$(-2x^3 - 9x^2 + ax - 24) - (-2x^2)(x + 7) = 5x^2 + ax - 24$",
      "$(5x^2 + ax - 24) - 5x(x + 7) = (a - 35)x - 24$",
      "$((a - 35)x - 24) - (a - 35)(x + 7) = -7a + 221$",
      "$-7a + 221 = 0$",
      "$a = \\dfrac{221}{7}$"
    ]
  },
  {
    "id": "t193-k3-p03",
    "topic": "polynomial-long-division",
    "kind": "t193-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find a number $a$ for which the division of $-4x^3 + ax^2 - 7x + 21$ by $x + 7$ leaves the remainder $0$.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "a = -206/7",
    "solution": [
      "Find a number $a$ for which the division of $-4x^3 + ax^2 - 7x + 21$ by $x + 7$ leaves the remainder $0$.",
      "$(-4x^3 + ax^2 - 7x + 21) - (-4x^2)(x + 7) = (a + 28)x^2 - 7x + 21$",
      "$((a + 28)x^2 - 7x + 21) - (a + 28)x(x + 7) = (-7a - 203)x + 21$",
      "$((-7a - 203)x + 21) - (-7a - 203)(x + 7) = 49a + 1442$",
      "$49a + 1442 = 0$",
      "$a = -\\dfrac{206}{7}$"
    ]
  },
  {
    "id": "t193-k3-p04",
    "topic": "polynomial-long-division",
    "kind": "t193-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a number $a$ for which the division of $-6x^3 + ax^2 + 4x - 15$ by $x^2 - 6x - 6$ leaves a remainder that is a number.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "a = 124/3",
    "solution": [
      "Find a number $a$ for which the division of $-6x^3 + ax^2 + 4x - 15$ by $x^2 - 6x - 6$ leaves a remainder that is a number.",
      "$(-6x^3 + ax^2 + 4x - 15) - (-6x)(x^2 - 6x - 6) = (a - 36)x^2 - 32x - 15$",
      "$((a - 36)x^2 - 32x - 15) - (a - 36)(x^2 - 6x - 6) = (6a - 248)x + 6a - 231$",
      "$6a - 248 = 0$",
      "$a = \\dfrac{124}{3}$"
    ]
  },
  {
    "id": "t193-k3-p05",
    "topic": "polynomial-long-division",
    "kind": "t193-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find a number $a$ for which the division of $-6x^3 + ax^2 + 10x + 25$ by $x - 5$ leaves the remainder $0$.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "a = 27",
    "solution": [
      "Find a number $a$ for which the division of $-6x^3 + ax^2 + 10x + 25$ by $x - 5$ leaves the remainder $0$.",
      "$(-6x^3 + ax^2 + 10x + 25) - (-6x^2)(x - 5) = (a - 30)x^2 + 10x + 25$",
      "$((a - 30)x^2 + 10x + 25) - (a - 30)x(x - 5) = (5a - 140)x + 25$",
      "$((5a - 140)x + 25) - (5a - 140)(x - 5) = 25a - 675$",
      "$25a - 675 = 0$",
      "$a = 27$"
    ]
  },
  {
    "id": "t193-k3-p06",
    "topic": "polynomial-long-division",
    "kind": "t193-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find a number $a$ for which the division of $-2x^3 + ax^2 + 2x - 8$ by $x - 8$ leaves the remainder $0$.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "a = 127/8",
    "solution": [
      "Find a number $a$ for which the division of $-2x^3 + ax^2 + 2x - 8$ by $x - 8$ leaves the remainder $0$.",
      "$(-2x^3 + ax^2 + 2x - 8) - (-2x^2)(x - 8) = (a - 16)x^2 + 2x - 8$",
      "$((a - 16)x^2 + 2x - 8) - (a - 16)x(x - 8) = (8a - 126)x - 8$",
      "$((8a - 126)x - 8) - (8a - 126)(x - 8) = 64a - 1016$",
      "$64a - 1016 = 0$",
      "$a = \\dfrac{127}{8}$"
    ]
  },
  {
    "id": "t193-k3-p07",
    "topic": "polynomial-long-division",
    "kind": "t193-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find a number $a$ for which the division of $-2x^3 + ax^2 + 6x - 19$ by $x + 3$ leaves the remainder $0$.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "a = -17/9",
    "solution": [
      "Find a number $a$ for which the division of $-2x^3 + ax^2 + 6x - 19$ by $x + 3$ leaves the remainder $0$.",
      "$(-2x^3 + ax^2 + 6x - 19) - (-2x^2)(x + 3) = (a + 6)x^2 + 6x - 19$",
      "$((a + 6)x^2 + 6x - 19) - (a + 6)x(x + 3) = (-3a - 12)x - 19$",
      "$((-3a - 12)x - 19) - (-3a - 12)(x + 3) = 9a + 17$",
      "$9a + 17 = 0$",
      "$a = -\\dfrac{17}{9}$"
    ]
  },
  {
    "id": "t193-k3-p08",
    "topic": "polynomial-long-division",
    "kind": "t193-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find a number $a$ for which the division of $-2x^3 + 6x^2 + ax - 27$ by $x - 5$ leaves the remainder $0$.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "a = 127/5",
    "solution": [
      "Find a number $a$ for which the division of $-2x^3 + 6x^2 + ax - 27$ by $x - 5$ leaves the remainder $0$.",
      "$(-2x^3 + 6x^2 + ax - 27) - (-2x^2)(x - 5) = -4x^2 + ax - 27$",
      "$(-4x^2 + ax - 27) - (-4x)(x - 5) = (a - 20)x - 27$",
      "$((a - 20)x - 27) - (a - 20)(x - 5) = 5a - 127$",
      "$5a - 127 = 0$",
      "$a = \\dfrac{127}{5}$"
    ]
  },
  {
    "id": "t193-k3-p09",
    "topic": "polynomial-long-division",
    "kind": "t193-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a number $a$ for which the division of $-3x^3 + ax^2 + 9x - 17$ by $x^2 + 9x - 11$ leaves a remainder that is a number.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "a = -89/3",
    "solution": [
      "Find a number $a$ for which the division of $-3x^3 + ax^2 + 9x - 17$ by $x^2 + 9x - 11$ leaves a remainder that is a number.",
      "$(-3x^3 + ax^2 + 9x - 17) - (-3x)(x^2 + 9x - 11) = (a + 27)x^2 - 24x - 17$",
      "$((a + 27)x^2 - 24x - 17) - (a + 27)(x^2 + 9x - 11) = (-9a - 267)x + 11a + 280$",
      "$-9a - 267 = 0$",
      "$a = -\\dfrac{89}{3}$"
    ]
  },
  {
    "id": "t193-k3-p10",
    "topic": "polynomial-long-division",
    "kind": "t193-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a number $a$ for which the division of $-4x^3 + ax^2 + 5x + 18$ by $x^2 + 9x + 7$ leaves a remainder that is a number.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "a = -97/3",
    "solution": [
      "Find a number $a$ for which the division of $-4x^3 + ax^2 + 5x + 18$ by $x^2 + 9x + 7$ leaves a remainder that is a number.",
      "$(-4x^3 + ax^2 + 5x + 18) - (-4x)(x^2 + 9x + 7) = (a + 36)x^2 + 33x + 18$",
      "$((a + 36)x^2 + 33x + 18) - (a + 36)(x^2 + 9x + 7) = (-9a - 291)x - 7a - 234$",
      "$-9a - 291 = 0$",
      "$a = -\\dfrac{97}{3}$"
    ]
  },
  {
    "id": "t193-k3-p11",
    "topic": "polynomial-long-division",
    "kind": "t193-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find a number $a$ for which the division of $2x^3 + 2x^2 + ax + 28$ by $x - 4$ leaves the remainder $0$.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "a = -47",
    "solution": [
      "Find a number $a$ for which the division of $2x^3 + 2x^2 + ax + 28$ by $x - 4$ leaves the remainder $0$.",
      "$(2x^3 + 2x^2 + ax + 28) - 2x^2(x - 4) = 10x^2 + ax + 28$",
      "$(10x^2 + ax + 28) - 10x(x - 4) = (a + 40)x + 28$",
      "$((a + 40)x + 28) - (a + 40)(x - 4) = 4a + 188$",
      "$4a + 188 = 0$",
      "$a = -47$"
    ]
  },
  {
    "id": "t193-k3-p12",
    "topic": "polynomial-long-division",
    "kind": "t193-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find a number $a$ for which the division of $5x^3 + ax^2 - 8x - 4$ by $x + 4$ leaves the remainder $0$.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "a = 73/4",
    "solution": [
      "Find a number $a$ for which the division of $5x^3 + ax^2 - 8x - 4$ by $x + 4$ leaves the remainder $0$.",
      "$(5x^3 + ax^2 - 8x - 4) - 5x^2(x + 4) = (a - 20)x^2 - 8x - 4$",
      "$((a - 20)x^2 - 8x - 4) - (a - 20)x(x + 4) = (-4a + 72)x - 4$",
      "$((-4a + 72)x - 4) - (-4a + 72)(x + 4) = 16a - 292$",
      "$16a - 292 = 0$",
      "$a = \\dfrac{73}{4}$"
    ]
  },
  {
    "id": "t193-k3-p13",
    "topic": "polynomial-long-division",
    "kind": "t193-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find a number $a$ for which the division of $-5x^3 + ax^2 - 2x - 30$ by $x + 6$ leaves the remainder $0$.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "a = -59/2",
    "solution": [
      "Find a number $a$ for which the division of $-5x^3 + ax^2 - 2x - 30$ by $x + 6$ leaves the remainder $0$.",
      "$(-5x^3 + ax^2 - 2x - 30) - (-5x^2)(x + 6) = (a + 30)x^2 - 2x - 30$",
      "$((a + 30)x^2 - 2x - 30) - (a + 30)x(x + 6) = (-6a - 182)x - 30$",
      "$((-6a - 182)x - 30) - (-6a - 182)(x + 6) = 36a + 1062$",
      "$36a + 1062 = 0$",
      "$a = -\\dfrac{59}{2}$"
    ]
  },
  {
    "id": "t193-k3-p14",
    "topic": "polynomial-long-division",
    "kind": "t193-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find a number $a$ for which the division of $-6x^3 + 4x^2 + ax + 26$ by $x - 2$ leaves the remainder $0$.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "a = 3",
    "solution": [
      "Find a number $a$ for which the division of $-6x^3 + 4x^2 + ax + 26$ by $x - 2$ leaves the remainder $0$.",
      "$(-6x^3 + 4x^2 + ax + 26) - (-6x^2)(x - 2) = -8x^2 + ax + 26$",
      "$(-8x^2 + ax + 26) - (-8x)(x - 2) = (a - 16)x + 26$",
      "$((a - 16)x + 26) - (a - 16)(x - 2) = 2a - 6$",
      "$2a - 6 = 0$",
      "$a = 3$"
    ]
  },
  {
    "id": "t193-k3-p15",
    "topic": "polynomial-long-division",
    "kind": "t193-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find a number $a$ for which the division of $-3x^3 + ax^2 - 11x + 21$ by $x^2 - 8x - 10$ leaves a remainder that is a number.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "a = 233/8",
    "solution": [
      "Find a number $a$ for which the division of $-3x^3 + ax^2 - 11x + 21$ by $x^2 - 8x - 10$ leaves a remainder that is a number.",
      "$(-3x^3 + ax^2 - 11x + 21) - (-3x)(x^2 - 8x - 10) = (a - 24)x^2 - 41x + 21$",
      "$((a - 24)x^2 - 41x + 21) - (a - 24)(x^2 - 8x - 10) = (8a - 233)x + 10a - 219$",
      "$8a - 233 = 0$",
      "$a = \\dfrac{233}{8}$"
    ]
  },
  {
    "id": "t193-k3-p16",
    "topic": "polynomial-long-division",
    "kind": "t193-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find a number $a$ for which the division of $3x^3 + ax^2 + 4x - 12$ by $x - 6$ leaves the remainder $0$.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "a = -55/3",
    "solution": [
      "Find a number $a$ for which the division of $3x^3 + ax^2 + 4x - 12$ by $x - 6$ leaves the remainder $0$.",
      "$(3x^3 + ax^2 + 4x - 12) - 3x^2(x - 6) = (a + 18)x^2 + 4x - 12$",
      "$((a + 18)x^2 + 4x - 12) - (a + 18)x(x - 6) = (6a + 112)x - 12$",
      "$((6a + 112)x - 12) - (6a + 112)(x - 6) = 36a + 660$",
      "$36a + 660 = 0$",
      "$a = -\\dfrac{55}{3}$"
    ]
  },
  {
    "id": "t193-k3-p17",
    "topic": "polynomial-long-division",
    "kind": "t193-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find a number $a$ for which the division of $4x^3 - 8x^2 + ax + 28$ by $x + 2$ leaves the remainder $0$.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "a = -18",
    "solution": [
      "Find a number $a$ for which the division of $4x^3 - 8x^2 + ax + 28$ by $x + 2$ leaves the remainder $0$.",
      "$(4x^3 - 8x^2 + ax + 28) - 4x^2(x + 2) = -16x^2 + ax + 28$",
      "$(-16x^2 + ax + 28) - (-16x)(x + 2) = (a + 32)x + 28$",
      "$((a + 32)x + 28) - (a + 32)(x + 2) = -2a - 36$",
      "$-2a - 36 = 0$",
      "$a = -18$"
    ]
  },
  {
    "id": "t193-k3-p18",
    "topic": "polynomial-long-division",
    "kind": "t193-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find a number $a$ for which the division of $-4x^3 + 9x^2 - 2x + a$ by $x - 3$ leaves the remainder $0$.",
    "form": "Answer as the unknown = a number, as in x = 6/7.",
    "answer": "a = 33",
    "solution": [
      "Find a number $a$ for which the division of $-4x^3 + 9x^2 - 2x + a$ by $x - 3$ leaves the remainder $0$.",
      "$(-4x^3 + 9x^2 - 2x + a) - (-4x^2)(x - 3) = -3x^2 - 2x + a$",
      "$(-3x^2 - 2x + a) - (-3x)(x - 3) = -11x + a$",
      "$(-11x + a) - (-11)(x - 3) = a - 33$",
      "$a - 33 = 0$",
      "$a = 33$"
    ]
  },
  {
    "id": "t193-k4-p01",
    "topic": "polynomial-long-division",
    "kind": "t193-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left and nothing multiplied out: The polynomial $y$ leaves the remainder $15$ when it is divided by $x - 9$, and the quotient is $7x + 4$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (x-9)*(7*x+4)+15",
    "solution": [
      "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left and nothing multiplied out: The polynomial $y$ leaves the remainder $15$ when it is divided by $x - 9$, and the quotient is $7x + 4$.",
      "The dividend is $y$, the divisor $x - 9$, the quotient $7x + 4$ and the remainder $15$.",
      "The divisor times the quotient is $(x - 9)(7x + 4)$.",
      "$y = (x - 9)(7x + 4) + 15$"
    ]
  },
  {
    "id": "t193-k4-p02",
    "topic": "polynomial-long-division",
    "kind": "t193-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$ and $y$, with the dividend alone on the left and nothing multiplied out: When $15x^2 + 31x - 6$ is divided by $3x + 2$, the quotient is $5x + 7$ and the remainder is $y$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "15*x^2+31*x-6 = (3*x+2)*(5*x+7)+y",
    "solution": [
      "Write this sentence as an equation in $x$ and $y$, with the dividend alone on the left and nothing multiplied out: When $15x^2 + 31x - 6$ is divided by $3x + 2$, the quotient is $5x + 7$ and the remainder is $y$.",
      "The dividend is $15x^2 + 31x - 6$, the divisor $3x + 2$, the quotient $5x + 7$ and the remainder $y$.",
      "The divisor times the quotient is $(3x + 2)(5x + 7)$.",
      "$15x^2 + 31x - 6 = (3x + 2)(5x + 7) + y$"
    ]
  },
  {
    "id": "t193-k4-p03",
    "topic": "polynomial-long-division",
    "kind": "t193-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left and nothing multiplied out: Dividing $y$ by $3x - 8$ gives the quotient $-6x^2 + 6x - 7$ and leaves the remainder $-15$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (3*x-8)*(-6*x^2+6*x-7)-15",
    "solution": [
      "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left and nothing multiplied out: Dividing $y$ by $3x - 8$ gives the quotient $-6x^2 + 6x - 7$ and leaves the remainder $-15$.",
      "The dividend is $y$, the divisor $3x - 8$, the quotient $-6x^2 + 6x - 7$ and the remainder $-15$.",
      "The divisor times the quotient is $(3x - 8)(-6x^2 + 6x - 7)$.",
      "$y = (3x - 8)(-6x^2 + 6x - 7) - 15$"
    ]
  },
  {
    "id": "t193-k4-p04",
    "topic": "polynomial-long-division",
    "kind": "t193-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$ and $y$, with the dividend alone on the left and nothing multiplied out: When $-3x^2 + 7x + 25$ is divided by $x - 3$, the quotient is $y$ and the remainder is $19$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "-3*x^2+7*x+25 = (x-3)*y+19",
    "solution": [
      "Write this sentence as an equation in $x$ and $y$, with the dividend alone on the left and nothing multiplied out: When $-3x^2 + 7x + 25$ is divided by $x - 3$, the quotient is $y$ and the remainder is $19$.",
      "The dividend is $-3x^2 + 7x + 25$, the divisor $x - 3$, the quotient $y$ and the remainder $19$.",
      "The divisor times the quotient is $(x - 3)y$.",
      "$-3x^2 + 7x + 25 = (x - 3)y + 19$"
    ]
  },
  {
    "id": "t193-k4-p05",
    "topic": "polynomial-long-division",
    "kind": "t193-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left and nothing multiplied out: Dividing $y$ by $3x + 8$ gives the quotient $-3x^2 + 5x - 7$ and leaves the remainder $-27$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (3*x+8)*(-3*x^2+5*x-7)-27",
    "solution": [
      "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left and nothing multiplied out: Dividing $y$ by $3x + 8$ gives the quotient $-3x^2 + 5x - 7$ and leaves the remainder $-27$.",
      "The dividend is $y$, the divisor $3x + 8$, the quotient $-3x^2 + 5x - 7$ and the remainder $-27$.",
      "The divisor times the quotient is $(3x + 8)(-3x^2 + 5x - 7)$.",
      "$y = (3x + 8)(-3x^2 + 5x - 7) - 27$"
    ]
  },
  {
    "id": "t193-k4-p06",
    "topic": "polynomial-long-division",
    "kind": "t193-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$ and $y$, with the dividend alone on the left and nothing multiplied out: When $-6x^3 - 20x^2 - 12x - 43$ is divided by $x + 3$, the quotient is $-6x^2 - 2x - 6$ and the remainder is $y$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "-6*x^3-20*x^2-12*x-43 = (x+3)*(-6*x^2-2*x-6)+y",
    "solution": [
      "Write this sentence as an equation in $x$ and $y$, with the dividend alone on the left and nothing multiplied out: When $-6x^3 - 20x^2 - 12x - 43$ is divided by $x + 3$, the quotient is $-6x^2 - 2x - 6$ and the remainder is $y$.",
      "The dividend is $-6x^3 - 20x^2 - 12x - 43$, the divisor $x + 3$, the quotient $-6x^2 - 2x - 6$ and the remainder $y$.",
      "The divisor times the quotient is $(x + 3)(-6x^2 - 2x - 6)$.",
      "$-6x^3 - 20x^2 - 12x - 43 = (x + 3)(-6x^2 - 2x - 6) + y$"
    ]
  },
  {
    "id": "t193-k4-p07",
    "topic": "polynomial-long-division",
    "kind": "t193-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left and nothing multiplied out: The polynomial $y$ leaves the remainder $11$ when it is divided by $x - 9$, and the quotient is $2x - 5$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (x-9)*(2*x-5)+11",
    "solution": [
      "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left and nothing multiplied out: The polynomial $y$ leaves the remainder $11$ when it is divided by $x - 9$, and the quotient is $2x - 5$.",
      "The dividend is $y$, the divisor $x - 9$, the quotient $2x - 5$ and the remainder $11$.",
      "The divisor times the quotient is $(x - 9)(2x - 5)$.",
      "$y = (x - 9)(2x - 5) + 11$"
    ]
  },
  {
    "id": "t193-k4-p08",
    "topic": "polynomial-long-division",
    "kind": "t193-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left and nothing multiplied out: When $y$ is divided by $x + 6$, the quotient is $6x - 2$ and the remainder is $3$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (x+6)*(6*x-2)+3",
    "solution": [
      "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left and nothing multiplied out: When $y$ is divided by $x + 6$, the quotient is $6x - 2$ and the remainder is $3$.",
      "The dividend is $y$, the divisor $x + 6$, the quotient $6x - 2$ and the remainder $3$.",
      "The divisor times the quotient is $(x + 6)(6x - 2)$.",
      "$y = (x + 6)(6x - 2) + 3$"
    ]
  },
  {
    "id": "t193-k4-p09",
    "topic": "polynomial-long-division",
    "kind": "t193-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left and nothing multiplied out: When $y$ is divided by $x - 6$, the quotient is $4x + 6$ and the remainder is $3$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (x-6)*(4*x+6)+3",
    "solution": [
      "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left and nothing multiplied out: When $y$ is divided by $x - 6$, the quotient is $4x + 6$ and the remainder is $3$.",
      "The dividend is $y$, the divisor $x - 6$, the quotient $4x + 6$ and the remainder $3$.",
      "The divisor times the quotient is $(x - 6)(4x + 6)$.",
      "$y = (x - 6)(4x + 6) + 3$"
    ]
  },
  {
    "id": "t193-k4-p10",
    "topic": "polynomial-long-division",
    "kind": "t193-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left and nothing multiplied out: The polynomial $y$ leaves the remainder $16$ when it is divided by $2x - 3$, and the quotient is $5x - 6$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (2*x-3)*(5*x-6)+16",
    "solution": [
      "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left and nothing multiplied out: The polynomial $y$ leaves the remainder $16$ when it is divided by $2x - 3$, and the quotient is $5x - 6$.",
      "The dividend is $y$, the divisor $2x - 3$, the quotient $5x - 6$ and the remainder $16$.",
      "The divisor times the quotient is $(2x - 3)(5x - 6)$.",
      "$y = (2x - 3)(5x - 6) + 16$"
    ]
  },
  {
    "id": "t193-k4-p11",
    "topic": "polynomial-long-division",
    "kind": "t193-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left and nothing multiplied out: The polynomial $y$ leaves the remainder $-6$ when it is divided by $x + 7$, and the quotient is $7x + 2$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (x+7)*(7*x+2)-6",
    "solution": [
      "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left and nothing multiplied out: The polynomial $y$ leaves the remainder $-6$ when it is divided by $x + 7$, and the quotient is $7x + 2$.",
      "The dividend is $y$, the divisor $x + 7$, the quotient $7x + 2$ and the remainder $-6$.",
      "The divisor times the quotient is $(x + 7)(7x + 2)$.",
      "$y = (x + 7)(7x + 2) - 6$"
    ]
  },
  {
    "id": "t193-k4-p12",
    "topic": "polynomial-long-division",
    "kind": "t193-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left and nothing multiplied out: When $y$ is divided by $x^2 + 6x - 12$, the quotient is $-2x + 7$ and the remainder is $3x - 11$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (x^2+6*x-12)*(-2*x+7)+3*x-11",
    "solution": [
      "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left and nothing multiplied out: When $y$ is divided by $x^2 + 6x - 12$, the quotient is $-2x + 7$ and the remainder is $3x - 11$.",
      "The dividend is $y$, the divisor $x^2 + 6x - 12$, the quotient $-2x + 7$ and the remainder $3x - 11$.",
      "The divisor times the quotient is $(x^2 + 6x - 12)(-2x + 7)$.",
      "$y = (x^2 + 6x - 12)(-2x + 7) + 3x - 11$"
    ]
  },
  {
    "id": "t193-k4-p13",
    "topic": "polynomial-long-division",
    "kind": "t193-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$ and $y$, with the dividend alone on the left and nothing multiplied out: When $-5x^2 + 28x - 25$ is divided by $x - 5$, the quotient is $y$ and the remainder is $-10$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "-5*x^2+28*x-25 = (x-5)*y-10",
    "solution": [
      "Write this sentence as an equation in $x$ and $y$, with the dividend alone on the left and nothing multiplied out: When $-5x^2 + 28x - 25$ is divided by $x - 5$, the quotient is $y$ and the remainder is $-10$.",
      "The dividend is $-5x^2 + 28x - 25$, the divisor $x - 5$, the quotient $y$ and the remainder $-10$.",
      "The divisor times the quotient is $(x - 5)y$.",
      "$-5x^2 + 28x - 25 = (x - 5)y - 10$"
    ]
  },
  {
    "id": "t193-k4-p14",
    "topic": "polynomial-long-division",
    "kind": "t193-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left and nothing multiplied out: Dividing $y$ by $3x + 7$ gives the quotient $7x + 3$ and leaves the remainder $17$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (3*x+7)*(7*x+3)+17",
    "solution": [
      "Write this sentence as an equation in $x$ and $y$, with $y$ alone on the left and nothing multiplied out: Dividing $y$ by $3x + 7$ gives the quotient $7x + 3$ and leaves the remainder $17$.",
      "The dividend is $y$, the divisor $3x + 7$, the quotient $7x + 3$ and the remainder $17$.",
      "The divisor times the quotient is $(3x + 7)(7x + 3)$.",
      "$y = (3x + 7)(7x + 3) + 17$"
    ]
  },
  {
    "id": "t193-k5-p01",
    "topic": "polynomial-long-division",
    "kind": "t193-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $5x^2 + 2x - 2$ and $11$ are the quotient and the remainder when $5x^3 - 18x^2 - 6x + 3$ is divided by $x - 4$.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $5x^2 + 2x - 2$ and $11$ are the quotient and the remainder when $5x^3 - 18x^2 - 6x + 3$ is divided by $x - 4$.",
      "$(x - 4)(5x^2 + 2x - 2) = 5x^3 - 18x^2 - 10x + 8$",
      "$5x^3 - 18x^2 - 10x + 8 + 11 = 5x^3 - 18x^2 - 10x + 19$",
      "The sum $5x^3 - 18x^2 - 10x + 19$ is not the dividend $5x^3 - 18x^2 - 6x + 3$: the coefficients of $x$ are $-10$ and $-6$.",
      "The remainder $11$ has degree 0, below the degree 1 of the divisor.",
      "So the pair is not the quotient and the remainder: No."
    ]
  },
  {
    "id": "t193-k5-p02",
    "topic": "polynomial-long-division",
    "kind": "t193-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $-6x - 3$ and $-9x + 10$ are the quotient and the remainder when $-18x^3 - 57x^2 - 69x - 8$ is divided by $3x^2 + 8x + 6$.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $-6x - 3$ and $-9x + 10$ are the quotient and the remainder when $-18x^3 - 57x^2 - 69x - 8$ is divided by $3x^2 + 8x + 6$.",
      "$(3x^2 + 8x + 6)(-6x - 3) = -18x^3 - 57x^2 - 60x - 18$",
      "$-18x^3 - 57x^2 - 60x - 18 - 9x + 10 = -18x^3 - 57x^2 - 69x - 8$",
      "The sum $-18x^3 - 57x^2 - 69x - 8$ is the dividend.",
      "The remainder $-9x + 10$ has degree 1, below the degree 2 of the divisor.",
      "So the pair is the quotient and the remainder: Yes."
    ]
  },
  {
    "id": "t193-k5-p03",
    "topic": "polynomial-long-division",
    "kind": "t193-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $4x^2 - 6x + 2$ and $25$ are the quotient and the remainder when $8x^3 - 16x^2 - 38x + 11$ is divided by $2x - 7$.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $4x^2 - 6x + 2$ and $25$ are the quotient and the remainder when $8x^3 - 16x^2 - 38x + 11$ is divided by $2x - 7$.",
      "$(2x - 7)(4x^2 - 6x + 2) = 8x^3 - 40x^2 + 46x - 14$",
      "$8x^3 - 40x^2 + 46x - 14 + 25 = 8x^3 - 40x^2 + 46x + 11$",
      "The sum $8x^3 - 40x^2 + 46x + 11$ is not the dividend $8x^3 - 16x^2 - 38x + 11$: the coefficients of $x^2$ are $-40$ and $-16$.",
      "The remainder $25$ has degree 0, below the degree 1 of the divisor.",
      "So the pair is not the quotient and the remainder: No."
    ]
  },
  {
    "id": "t193-k5-p04",
    "topic": "polynomial-long-division",
    "kind": "t193-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $2x^2 - 6x$ and $-21x - 22$ are the quotient and the remainder when $6x^3 - 8x^2 - 51x - 22$ is divided by $3x + 5$.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $2x^2 - 6x$ and $-21x - 22$ are the quotient and the remainder when $6x^3 - 8x^2 - 51x - 22$ is divided by $3x + 5$.",
      "$(3x + 5)(2x^2 - 6x) = 6x^3 - 8x^2 - 30x$",
      "$6x^3 - 8x^2 - 30x - 21x - 22 = 6x^3 - 8x^2 - 51x - 22$",
      "The sum $6x^3 - 8x^2 - 51x - 22$ is the dividend.",
      "The remainder $-21x - 22$ has degree 1, not below the degree 1 of the divisor.",
      "So the pair is not the quotient and the remainder: No."
    ]
  },
  {
    "id": "t193-k5-p05",
    "topic": "polynomial-long-division",
    "kind": "t193-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $5x^2 - 7x + 6$ and $-24$ are the quotient and the remainder when $5x^3 + 33x^2 - 50x + 24$ is divided by $x + 8$.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $5x^2 - 7x + 6$ and $-24$ are the quotient and the remainder when $5x^3 + 33x^2 - 50x + 24$ is divided by $x + 8$.",
      "$(x + 8)(5x^2 - 7x + 6) = 5x^3 + 33x^2 - 50x + 48$",
      "$5x^3 + 33x^2 - 50x + 48 - 24 = 5x^3 + 33x^2 - 50x + 24$",
      "The sum $5x^3 + 33x^2 - 50x + 24$ is the dividend.",
      "The remainder $-24$ has degree 0, below the degree 1 of the divisor.",
      "So the pair is the quotient and the remainder: Yes."
    ]
  },
  {
    "id": "t193-k5-p06",
    "topic": "polynomial-long-division",
    "kind": "t193-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $-6x^2 - 7x - 6$ and $-25$ are the quotient and the remainder when $-6x^3 - 19x^2 - 20x - 37$ is divided by $x + 2$.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $-6x^2 - 7x - 6$ and $-25$ are the quotient and the remainder when $-6x^3 - 19x^2 - 20x - 37$ is divided by $x + 2$.",
      "$(x + 2)(-6x^2 - 7x - 6) = -6x^3 - 19x^2 - 20x - 12$",
      "$-6x^3 - 19x^2 - 20x - 12 - 25 = -6x^3 - 19x^2 - 20x - 37$",
      "The sum $-6x^3 - 19x^2 - 20x - 37$ is the dividend.",
      "The remainder $-25$ has degree 0, below the degree 1 of the divisor.",
      "So the pair is the quotient and the remainder: Yes."
    ]
  },
  {
    "id": "t193-k5-p07",
    "topic": "polynomial-long-division",
    "kind": "t193-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $6x^2 + 3x - 3$ and $-27$ are the quotient and the remainder when $12x^3 + 48x^2 + 27x - 6$ is divided by $2x + 7$.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $6x^2 + 3x - 3$ and $-27$ are the quotient and the remainder when $12x^3 + 48x^2 + 27x - 6$ is divided by $2x + 7$.",
      "$(2x + 7)(6x^2 + 3x - 3) = 12x^3 + 48x^2 + 15x - 21$",
      "$12x^3 + 48x^2 + 15x - 21 - 27 = 12x^3 + 48x^2 + 15x - 48$",
      "The sum $12x^3 + 48x^2 + 15x - 48$ is not the dividend $12x^3 + 48x^2 + 27x - 6$: the coefficients of $x$ are $15$ and $27$.",
      "The remainder $-27$ has degree 0, below the degree 1 of the divisor.",
      "So the pair is not the quotient and the remainder: No."
    ]
  },
  {
    "id": "t193-k5-p08",
    "topic": "polynomial-long-division",
    "kind": "t193-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $-4x^2 - 2x + 6$ and $7$ are the quotient and the remainder when $-4x^3 - 38x^2 - 12x + 61$ is divided by $x + 9$.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $-4x^2 - 2x + 6$ and $7$ are the quotient and the remainder when $-4x^3 - 38x^2 - 12x + 61$ is divided by $x + 9$.",
      "$(x + 9)(-4x^2 - 2x + 6) = -4x^3 - 38x^2 - 12x + 54$",
      "$-4x^3 - 38x^2 - 12x + 54 + 7 = -4x^3 - 38x^2 - 12x + 61$",
      "The sum $-4x^3 - 38x^2 - 12x + 61$ is the dividend.",
      "The remainder $7$ has degree 0, below the degree 1 of the divisor.",
      "So the pair is the quotient and the remainder: Yes."
    ]
  },
  {
    "id": "t193-k5-p09",
    "topic": "polynomial-long-division",
    "kind": "t193-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $3x^2 + 7x - 5$ and $5$ are the quotient and the remainder when $3x^3 - 25x^2 + 37x + 35$ is divided by $x - 6$.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $3x^2 + 7x - 5$ and $5$ are the quotient and the remainder when $3x^3 - 25x^2 + 37x + 35$ is divided by $x - 6$.",
      "$(x - 6)(3x^2 + 7x - 5) = 3x^3 - 11x^2 - 47x + 30$",
      "$3x^3 - 11x^2 - 47x + 30 + 5 = 3x^3 - 11x^2 - 47x + 35$",
      "The sum $3x^3 - 11x^2 - 47x + 35$ is not the dividend $3x^3 - 25x^2 + 37x + 35$: the coefficients of $x^2$ are $-11$ and $-25$.",
      "The remainder $5$ has degree 0, below the degree 1 of the divisor.",
      "So the pair is not the quotient and the remainder: No."
    ]
  },
  {
    "id": "t193-k5-p10",
    "topic": "polynomial-long-division",
    "kind": "t193-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $-4x$ and $-2x^2 - 29x - 42$ are the quotient and the remainder when $-4x^3 - 38x^2 - 73x - 42$ is divided by $x^2 + 9x + 11$.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $-4x$ and $-2x^2 - 29x - 42$ are the quotient and the remainder when $-4x^3 - 38x^2 - 73x - 42$ is divided by $x^2 + 9x + 11$.",
      "$(x^2 + 9x + 11)(-4x) = -4x^3 - 36x^2 - 44x$",
      "$-4x^3 - 36x^2 - 44x - 2x^2 - 29x - 42 = -4x^3 - 38x^2 - 73x - 42$",
      "The sum $-4x^3 - 38x^2 - 73x - 42$ is the dividend.",
      "The remainder $-2x^2 - 29x - 42$ has degree 2, not below the degree 2 of the divisor.",
      "So the pair is not the quotient and the remainder: No."
    ]
  },
  {
    "id": "t193-k5-p11",
    "topic": "polynomial-long-division",
    "kind": "t193-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $3x^2 - 6x$ and $-12x + 10$ are the quotient and the remainder when $9x^3 - 3x^2 - 42x + 10$ is divided by $3x + 5$.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $3x^2 - 6x$ and $-12x + 10$ are the quotient and the remainder when $9x^3 - 3x^2 - 42x + 10$ is divided by $3x + 5$.",
      "$(3x + 5)(3x^2 - 6x) = 9x^3 - 3x^2 - 30x$",
      "$9x^3 - 3x^2 - 30x - 12x + 10 = 9x^3 - 3x^2 - 42x + 10$",
      "The sum $9x^3 - 3x^2 - 42x + 10$ is the dividend.",
      "The remainder $-12x + 10$ has degree 1, not below the degree 1 of the divisor.",
      "So the pair is not the quotient and the remainder: No."
    ]
  },
  {
    "id": "t193-k5-p12",
    "topic": "polynomial-long-division",
    "kind": "t193-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $4x + 3$ and $-7x - 19$ are the quotient and the remainder when $12x^3 + 37x^2 - 26x - 49$ is divided by $3x^2 + 7x - 10$.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $4x + 3$ and $-7x - 19$ are the quotient and the remainder when $12x^3 + 37x^2 - 26x - 49$ is divided by $3x^2 + 7x - 10$.",
      "$(3x^2 + 7x - 10)(4x + 3) = 12x^3 + 37x^2 - 19x - 30$",
      "$12x^3 + 37x^2 - 19x - 30 - 7x - 19 = 12x^3 + 37x^2 - 26x - 49$",
      "The sum $12x^3 + 37x^2 - 26x - 49$ is the dividend.",
      "The remainder $-7x - 19$ has degree 1, below the degree 2 of the divisor.",
      "So the pair is the quotient and the remainder: Yes."
    ]
  },
  {
    "id": "t193-k5-p13",
    "topic": "polynomial-long-division",
    "kind": "t193-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $-4x^2 - 4x + 4$ and $7$ are the quotient and the remainder when $-4x^3 - 8x^2 + 16x + 19$ is divided by $x + 3$.",
    "form": "Answer as Yes or No.",
    "answer": "No",
    "solution": [
      "Decide whether $-4x^2 - 4x + 4$ and $7$ are the quotient and the remainder when $-4x^3 - 8x^2 + 16x + 19$ is divided by $x + 3$.",
      "$(x + 3)(-4x^2 - 4x + 4) = -4x^3 - 16x^2 - 8x + 12$",
      "$-4x^3 - 16x^2 - 8x + 12 + 7 = -4x^3 - 16x^2 - 8x + 19$",
      "The sum $-4x^3 - 16x^2 - 8x + 19$ is not the dividend $-4x^3 - 8x^2 + 16x + 19$: the coefficients of $x^2$ are $-16$ and $-8$.",
      "The remainder $7$ has degree 0, below the degree 1 of the divisor.",
      "So the pair is not the quotient and the remainder: No."
    ]
  },
  {
    "id": "t193-k5-p14",
    "topic": "polynomial-long-division",
    "kind": "t193-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Decide whether $7x^2 + 6x - 6$ and $28$ are the quotient and the remainder when $14x^3 - 23x^2 - 42x + 58$ is divided by $2x - 5$.",
    "form": "Answer as Yes or No.",
    "answer": "Yes",
    "solution": [
      "Decide whether $7x^2 + 6x - 6$ and $28$ are the quotient and the remainder when $14x^3 - 23x^2 - 42x + 58$ is divided by $2x - 5$.",
      "$(2x - 5)(7x^2 + 6x - 6) = 14x^3 - 23x^2 - 42x + 30$",
      "$14x^3 - 23x^2 - 42x + 30 + 28 = 14x^3 - 23x^2 - 42x + 58$",
      "The sum $14x^3 - 23x^2 - 42x + 58$ is the dividend.",
      "The remainder $28$ has degree 0, below the degree 1 of the divisor.",
      "So the pair is the quotient and the remainder: Yes."
    ]
  }
]
