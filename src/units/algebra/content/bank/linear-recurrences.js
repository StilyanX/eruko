export default [
  {
    "id": "t238-k1-p01",
    "topic": "linear-recurrences",
    "kind": "t238-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $a_n = (5 + 2n) \\cdot 3^n$ for every whole number $n$, where $a_0 = 5$, $a_1 = 21$ and $a_{n+2} = 6a_{n+1} - 9a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n = (5 + 2n) \\cdot 3^n$ for every whole number $n$, where $a_0 = 5$, $a_1 = 21$ and $a_{n+2} = 6a_{n+1} - 9a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$x^2 = 6x - 9$",
        "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$x^2 - 6x + 9 = 0$",
        "reason": "Adding the same number to both sides: $6x - 9$ is taken from both sides."
      },
      {
        "step": "$(x - 3)^2 = 0$",
        "reason": "Square of a binomial: $(x - 3)^2 = x^2 - 6x + 9$."
      },
      {
        "step": "$x = 3$",
        "reason": "Double root: the one root is $3$, counted twice."
      },
      {
        "step": "$a_n = (y + zn) \\cdot 3^n$",
        "reason": "General solution (double root): the root $3$ is a double root, so two numbers $y$ and $z$ give every term."
      },
      {
        "step": "$y = 5$",
        "reason": "Substituting a value: $n = 0$ in line 6, with $3^0 = 1$ and $a_0 = 5$."
      },
      {
        "step": "$(y + z) \\cdot 3 = 21$",
        "reason": "Substituting a value: $n = 1$ in line 6, with $3^1 = 3$ and $a_1 = 21$."
      },
      {
        "step": "$3y + 3z = 21$",
        "reason": "Multiplying out: the factor in front multiplies each term of the bracket."
      },
      {
        "step": "$3 \\cdot 5 + 3z = 21$",
        "reason": "Back-substitution: $y = 5$ goes into line 9."
      },
      {
        "step": "$3z = 6$",
        "reason": "Adding the same number to both sides: $15$ is taken from both sides."
      },
      {
        "step": "$z = 2$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
      },
      {
        "step": "$a_n = (5 + 2n) \\cdot 3^n$",
        "reason": "Substituting a value: the numbers $y$ and $z$ go into line 6."
      }
    ]
  },
  {
    "id": "t238-k1-p02",
    "topic": "linear-recurrences",
    "kind": "t238-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n = -7 \\cdot 2^n + 9 \\cdot 4^n$ for every whole number $n$, where $a_0 = 2$, $a_1 = 22$ and $a_{n+2} = 6a_{n+1} - 8a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n = -7 \\cdot 2^n + 9 \\cdot 4^n$ for every whole number $n$, where $a_0 = 2$, $a_1 = 22$ and $a_{n+2} = 6a_{n+1} - 8a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$x^2 = 6x - 8$",
        "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$x^2 - 6x + 8 = 0$",
        "reason": "Adding the same number to both sides: $6x - 8$ is taken from both sides."
      },
      {
        "step": "$(x - 2)(x - 4) = 0$",
        "reason": "Factoring a quadratic: $-2$ and $-4$ have sum $-6$ and product $8$."
      },
      {
        "step": "The roots are $2$ and $4$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$a_n = y \\cdot 2^n + z \\cdot 4^n$",
        "reason": "General solution (distinct roots): the roots $2$ and $4$ are different, so two numbers $y$ and $z$ give every term."
      },
      {
        "step": "$y + z = 2$",
        "reason": "Substituting a value: $n = 0$ in line 6, with $2^0 = 4^0 = 1$ and $a_0 = 2$."
      },
      {
        "step": "$2y + 4z = 22$",
        "reason": "Substituting a value: $n = 1$ in line 6, with $a_1 = 22$."
      },
      {
        "step": "$2z = 18$",
        "reason": "Elimination: $2$ times line 7 is taken from line 8."
      },
      {
        "step": "$z = 9$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
      },
      {
        "step": "$y = -7$",
        "reason": "Back-substitution: $z = 9$ goes into line 7."
      },
      {
        "step": "$a_n = -7 \\cdot 2^n + 9 \\cdot 4^n$",
        "reason": "Substituting a value: the numbers $y$ and $z$ go into line 6."
      }
    ]
  },
  {
    "id": "t238-k1-p03",
    "topic": "linear-recurrences",
    "kind": "t238-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n = -3 \\cdot 4^n - 5 \\cdot 8^n$ for every whole number $n$, where $a_0 = -8$, $a_1 = -52$ and $a_{n+2} = 12a_{n+1} - 32a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n = -3 \\cdot 4^n - 5 \\cdot 8^n$ for every whole number $n$, where $a_0 = -8$, $a_1 = -52$ and $a_{n+2} = 12a_{n+1} - 32a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$x^2 = 12x - 32$",
        "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$x^2 - 12x + 32 = 0$",
        "reason": "Adding the same number to both sides: $12x - 32$ is taken from both sides."
      },
      {
        "step": "$(x - 4)(x - 8) = 0$",
        "reason": "Factoring a quadratic: $-4$ and $-8$ have sum $-12$ and product $32$."
      },
      {
        "step": "The roots are $4$ and $8$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$a_n = y \\cdot 4^n + z \\cdot 8^n$",
        "reason": "General solution (distinct roots): the roots $4$ and $8$ are different, so two numbers $y$ and $z$ give every term."
      },
      {
        "step": "$y + z = -8$",
        "reason": "Substituting a value: $n = 0$ in line 6, with $4^0 = 8^0 = 1$ and $a_0 = -8$."
      },
      {
        "step": "$4y + 8z = -52$",
        "reason": "Substituting a value: $n = 1$ in line 6, with $a_1 = -52$."
      },
      {
        "step": "$4z = -20$",
        "reason": "Elimination: $4$ times line 7 is taken from line 8."
      },
      {
        "step": "$z = -5$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
      },
      {
        "step": "$y = -3$",
        "reason": "Back-substitution: $z = -5$ goes into line 7."
      },
      {
        "step": "$a_n = -3 \\cdot 4^n - 5 \\cdot 8^n$",
        "reason": "Substituting a value: the numbers $y$ and $z$ go into line 6."
      }
    ]
  },
  {
    "id": "t238-k1-p04",
    "topic": "linear-recurrences",
    "kind": "t238-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n = -8 \\cdot 2^n - 7 \\cdot 8^n$ for every whole number $n$, where $a_0 = -15$, $a_1 = -72$ and $a_{n+2} = 10a_{n+1} - 16a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n = -8 \\cdot 2^n - 7 \\cdot 8^n$ for every whole number $n$, where $a_0 = -15$, $a_1 = -72$ and $a_{n+2} = 10a_{n+1} - 16a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$x^2 = 10x - 16$",
        "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$x^2 - 10x + 16 = 0$",
        "reason": "Adding the same number to both sides: $10x - 16$ is taken from both sides."
      },
      {
        "step": "$(x - 2)(x - 8) = 0$",
        "reason": "Factoring a quadratic: $-2$ and $-8$ have sum $-10$ and product $16$."
      },
      {
        "step": "The roots are $2$ and $8$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$a_n = y \\cdot 2^n + z \\cdot 8^n$",
        "reason": "General solution (distinct roots): the roots $2$ and $8$ are different, so two numbers $y$ and $z$ give every term."
      },
      {
        "step": "$y + z = -15$",
        "reason": "Substituting a value: $n = 0$ in line 6, with $2^0 = 8^0 = 1$ and $a_0 = -15$."
      },
      {
        "step": "$2y + 8z = -72$",
        "reason": "Substituting a value: $n = 1$ in line 6, with $a_1 = -72$."
      },
      {
        "step": "$6z = -42$",
        "reason": "Elimination: $2$ times line 7 is taken from line 8."
      },
      {
        "step": "$z = -7$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $6$."
      },
      {
        "step": "$y = -8$",
        "reason": "Back-substitution: $z = -7$ goes into line 7."
      },
      {
        "step": "$a_n = -8 \\cdot 2^n - 7 \\cdot 8^n$",
        "reason": "Substituting a value: the numbers $y$ and $z$ go into line 6."
      }
    ]
  },
  {
    "id": "t238-k1-p05",
    "topic": "linear-recurrences",
    "kind": "t238-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n = 7 \\cdot 6^n - 8 \\cdot 8^n$ for every whole number $n$, where $a_0 = -1$, $a_1 = -22$ and $a_{n+2} = 14a_{n+1} - 48a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n = 7 \\cdot 6^n - 8 \\cdot 8^n$ for every whole number $n$, where $a_0 = -1$, $a_1 = -22$ and $a_{n+2} = 14a_{n+1} - 48a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$x^2 = 14x - 48$",
        "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$x^2 - 14x + 48 = 0$",
        "reason": "Adding the same number to both sides: $14x - 48$ is taken from both sides."
      },
      {
        "step": "$(x - 6)(x - 8) = 0$",
        "reason": "Factoring a quadratic: $-6$ and $-8$ have sum $-14$ and product $48$."
      },
      {
        "step": "The roots are $6$ and $8$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$a_n = y \\cdot 6^n + z \\cdot 8^n$",
        "reason": "General solution (distinct roots): the roots $6$ and $8$ are different, so two numbers $y$ and $z$ give every term."
      },
      {
        "step": "$y + z = -1$",
        "reason": "Substituting a value: $n = 0$ in line 6, with $6^0 = 8^0 = 1$ and $a_0 = -1$."
      },
      {
        "step": "$6y + 8z = -22$",
        "reason": "Substituting a value: $n = 1$ in line 6, with $a_1 = -22$."
      },
      {
        "step": "$2z = -16$",
        "reason": "Elimination: $6$ times line 7 is taken from line 8."
      },
      {
        "step": "$z = -8$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
      },
      {
        "step": "$y = 7$",
        "reason": "Back-substitution: $z = -8$ goes into line 7."
      },
      {
        "step": "$a_n = 7 \\cdot 6^n - 8 \\cdot 8^n$",
        "reason": "Substituting a value: the numbers $y$ and $z$ go into line 6."
      }
    ]
  },
  {
    "id": "t238-k1-p06",
    "topic": "linear-recurrences",
    "kind": "t238-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $a_n = (6 + 2n) \\cdot 12^n$ for every whole number $n$, where $a_0 = 6$, $a_1 = 96$ and $a_{n+2} = 24a_{n+1} - 144a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n = (6 + 2n) \\cdot 12^n$ for every whole number $n$, where $a_0 = 6$, $a_1 = 96$ and $a_{n+2} = 24a_{n+1} - 144a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$x^2 = 24x - 144$",
        "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$x^2 - 24x + 144 = 0$",
        "reason": "Adding the same number to both sides: $24x - 144$ is taken from both sides."
      },
      {
        "step": "$(x - 12)^2 = 0$",
        "reason": "Square of a binomial: $(x - 12)^2 = x^2 - 24x + 144$."
      },
      {
        "step": "$x = 12$",
        "reason": "Double root: the one root is $12$, counted twice."
      },
      {
        "step": "$a_n = (y + zn) \\cdot 12^n$",
        "reason": "General solution (double root): the root $12$ is a double root, so two numbers $y$ and $z$ give every term."
      },
      {
        "step": "$y = 6$",
        "reason": "Substituting a value: $n = 0$ in line 6, with $12^0 = 1$ and $a_0 = 6$."
      },
      {
        "step": "$(y + z) \\cdot 12 = 96$",
        "reason": "Substituting a value: $n = 1$ in line 6, with $12^1 = 12$ and $a_1 = 96$."
      },
      {
        "step": "$12y + 12z = 96$",
        "reason": "Multiplying out: the factor in front multiplies each term of the bracket."
      },
      {
        "step": "$12 \\cdot 6 + 12z = 96$",
        "reason": "Back-substitution: $y = 6$ goes into line 9."
      },
      {
        "step": "$12z = 24$",
        "reason": "Adding the same number to both sides: $72$ is taken from both sides."
      },
      {
        "step": "$z = 2$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $12$."
      },
      {
        "step": "$a_n = (6 + 2n) \\cdot 12^n$",
        "reason": "Substituting a value: the numbers $y$ and $z$ go into line 6."
      }
    ]
  },
  {
    "id": "t238-k1-p07",
    "topic": "linear-recurrences",
    "kind": "t238-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Prove that $y = 3 - 2i$, where $a_n = yr^n + z\\overline{r}^n$ for every whole number $n$, $r$ is the root of the characteristic equation with imaginary part above $0$, and $a_0 = 6$, $a_1 = 55$ and $2a_{n+2} = 22a_{n+1} - 121a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $y = 3 - 2i$, where $a_n = yr^n + z\\overline{r}^n$ for every whole number $n$, $r$ is the root of the characteristic equation with imaginary part above $0$, and $a_0 = 6$, $a_1 = 55$ and $2a_{n+2} = 22a_{n+1} - 121a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$2x^2 = 22x - 121$",
        "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$2x^2 - 22x + 121 = 0$",
        "reason": "Adding the same number to both sides: $22x - 121$ is taken from both sides."
      },
      {
        "step": "$x = \\dfrac{22 \\pm \\sqrt{484 - 968}}{4}$",
        "reason": "Quadratic formula: the discriminant is $484 - 968 = -484$, below $0$."
      },
      {
        "step": "$x = \\dfrac{22 \\pm 22i}{4}$",
        "reason": "Imaginary numbers, $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$: $\\sqrt{-484} = 22i$."
      },
      {
        "step": "The roots are $\\dfrac{11}{2} + \\dfrac{11}{2}i$ and $\\dfrac{11}{2} - \\dfrac{11}{2}i$.",
        "reason": "Conjugate roots: the two roots of a real quadratic with a negative discriminant are complex conjugates."
      },
      {
        "step": "$a_n = y\\left(\\dfrac{11}{2} + \\dfrac{11}{2}i\\right)^n + z\\left(\\dfrac{11}{2} - \\dfrac{11}{2}i\\right)^n$",
        "reason": "General solution (distinct roots): the two roots are different, so two numbers $y$ and $z$ give every term."
      },
      {
        "step": "$y + z = 6$",
        "reason": "Substituting a value: $n = 0$ in line 7, with $a_0 = 6$."
      },
      {
        "step": "$y\\left(\\dfrac{11}{2} + \\dfrac{11}{2}i\\right) + z\\left(\\dfrac{11}{2} - \\dfrac{11}{2}i\\right) = 55$",
        "reason": "Substituting a value: $n = 1$ in line 7, with $a_1 = 55$."
      },
      {
        "step": "$\\dfrac{11}{2}i(y - z) = 22$",
        "reason": "Elimination: $\\dfrac{11}{2}$ times line 8 is taken from line 9."
      },
      {
        "step": "$i(y - z) = 4$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $\\dfrac{11}{2}$."
      },
      {
        "step": "$y - z = -4i$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $i$, and $\\dfrac{1}{i} = -i$, since $i \\cdot (-i) = 1$."
      },
      {
        "step": "$2y = 6 - 4i$",
        "reason": "Adding two equations: lines 8 and 12 are added."
      },
      {
        "step": "$y = 3 - 2i$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
      }
    ]
  },
  {
    "id": "t238-k1-p08",
    "topic": "linear-recurrences",
    "kind": "t238-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Prove that $y = 2 - \\dfrac{3}{2}i$, where $a_n = yr^n + z\\overline{r}^n$ for every whole number $n$, $r$ is the root of the characteristic equation with imaginary part above $0$, and $a_0 = 4$, $a_1 = 21$ and $a_{n+2} = 6a_{n+1} - 18a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $y = 2 - \\dfrac{3}{2}i$, where $a_n = yr^n + z\\overline{r}^n$ for every whole number $n$, $r$ is the root of the characteristic equation with imaginary part above $0$, and $a_0 = 4$, $a_1 = 21$ and $a_{n+2} = 6a_{n+1} - 18a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$x^2 = 6x - 18$",
        "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$x^2 - 6x + 18 = 0$",
        "reason": "Adding the same number to both sides: $6x - 18$ is taken from both sides."
      },
      {
        "step": "$x = \\dfrac{6 \\pm \\sqrt{36 - 72}}{2}$",
        "reason": "Quadratic formula: the discriminant is $36 - 72 = -36$, below $0$."
      },
      {
        "step": "$x = \\dfrac{6 \\pm 6i}{2}$",
        "reason": "Imaginary numbers, $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$: $\\sqrt{-36} = 6i$."
      },
      {
        "step": "The roots are $3 + 3i$ and $3 - 3i$.",
        "reason": "Conjugate roots: the two roots of a real quadratic with a negative discriminant are complex conjugates."
      },
      {
        "step": "$a_n = y(3 + 3i)^n + z(3 - 3i)^n$",
        "reason": "General solution (distinct roots): the two roots are different, so two numbers $y$ and $z$ give every term."
      },
      {
        "step": "$y + z = 4$",
        "reason": "Substituting a value: $n = 0$ in line 7, with $a_0 = 4$."
      },
      {
        "step": "$y(3 + 3i) + z(3 - 3i) = 21$",
        "reason": "Substituting a value: $n = 1$ in line 7, with $a_1 = 21$."
      },
      {
        "step": "$3i(y - z) = 9$",
        "reason": "Elimination: $3$ times line 8 is taken from line 9."
      },
      {
        "step": "$i(y - z) = 3$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
      },
      {
        "step": "$y - z = -3i$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $i$, and $\\dfrac{1}{i} = -i$, since $i \\cdot (-i) = 1$."
      },
      {
        "step": "$2y = 4 - 3i$",
        "reason": "Adding two equations: lines 8 and 12 are added."
      },
      {
        "step": "$y = 2 - \\dfrac{3}{2}i$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
      }
    ]
  },
  {
    "id": "t238-k1-p09",
    "topic": "linear-recurrences",
    "kind": "t238-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n = -3 \\cdot 5^n + 7 \\cdot 9^n$ for every whole number $n$, where $a_0 = 4$, $a_1 = 48$ and $a_{n+2} = 14a_{n+1} - 45a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n = -3 \\cdot 5^n + 7 \\cdot 9^n$ for every whole number $n$, where $a_0 = 4$, $a_1 = 48$ and $a_{n+2} = 14a_{n+1} - 45a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$x^2 = 14x - 45$",
        "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$x^2 - 14x + 45 = 0$",
        "reason": "Adding the same number to both sides: $14x - 45$ is taken from both sides."
      },
      {
        "step": "$(x - 5)(x - 9) = 0$",
        "reason": "Factoring a quadratic: $-5$ and $-9$ have sum $-14$ and product $45$."
      },
      {
        "step": "The roots are $5$ and $9$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$a_n = y \\cdot 5^n + z \\cdot 9^n$",
        "reason": "General solution (distinct roots): the roots $5$ and $9$ are different, so two numbers $y$ and $z$ give every term."
      },
      {
        "step": "$y + z = 4$",
        "reason": "Substituting a value: $n = 0$ in line 6, with $5^0 = 9^0 = 1$ and $a_0 = 4$."
      },
      {
        "step": "$5y + 9z = 48$",
        "reason": "Substituting a value: $n = 1$ in line 6, with $a_1 = 48$."
      },
      {
        "step": "$4z = 28$",
        "reason": "Elimination: $5$ times line 7 is taken from line 8."
      },
      {
        "step": "$z = 7$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $4$."
      },
      {
        "step": "$y = -3$",
        "reason": "Back-substitution: $z = 7$ goes into line 7."
      },
      {
        "step": "$a_n = -3 \\cdot 5^n + 7 \\cdot 9^n$",
        "reason": "Substituting a value: the numbers $y$ and $z$ go into line 6."
      }
    ]
  },
  {
    "id": "t238-k1-p10",
    "topic": "linear-recurrences",
    "kind": "t238-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n = -9 \\cdot 3^n - 3 \\cdot 8^n$ for every whole number $n$, where $a_0 = -12$, $a_1 = -51$ and $a_{n+2} = 11a_{n+1} - 24a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n = -9 \\cdot 3^n - 3 \\cdot 8^n$ for every whole number $n$, where $a_0 = -12$, $a_1 = -51$ and $a_{n+2} = 11a_{n+1} - 24a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$x^2 = 11x - 24$",
        "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$x^2 - 11x + 24 = 0$",
        "reason": "Adding the same number to both sides: $11x - 24$ is taken from both sides."
      },
      {
        "step": "$(x - 3)(x - 8) = 0$",
        "reason": "Factoring a quadratic: $-3$ and $-8$ have sum $-11$ and product $24$."
      },
      {
        "step": "The roots are $3$ and $8$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$a_n = y \\cdot 3^n + z \\cdot 8^n$",
        "reason": "General solution (distinct roots): the roots $3$ and $8$ are different, so two numbers $y$ and $z$ give every term."
      },
      {
        "step": "$y + z = -12$",
        "reason": "Substituting a value: $n = 0$ in line 6, with $3^0 = 8^0 = 1$ and $a_0 = -12$."
      },
      {
        "step": "$3y + 8z = -51$",
        "reason": "Substituting a value: $n = 1$ in line 6, with $a_1 = -51$."
      },
      {
        "step": "$5z = -15$",
        "reason": "Elimination: $3$ times line 7 is taken from line 8."
      },
      {
        "step": "$z = -3$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
      },
      {
        "step": "$y = -9$",
        "reason": "Back-substitution: $z = -3$ goes into line 7."
      },
      {
        "step": "$a_n = -9 \\cdot 3^n - 3 \\cdot 8^n$",
        "reason": "Substituting a value: the numbers $y$ and $z$ go into line 6."
      }
    ]
  },
  {
    "id": "t238-k1-p11",
    "topic": "linear-recurrences",
    "kind": "t238-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n = -5 \\cdot 3^n + 7 \\cdot 5^n$ for every whole number $n$, where $a_0 = 2$, $a_1 = 20$ and $a_{n+2} = 8a_{n+1} - 15a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n = -5 \\cdot 3^n + 7 \\cdot 5^n$ for every whole number $n$, where $a_0 = 2$, $a_1 = 20$ and $a_{n+2} = 8a_{n+1} - 15a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$x^2 = 8x - 15$",
        "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$x^2 - 8x + 15 = 0$",
        "reason": "Adding the same number to both sides: $8x - 15$ is taken from both sides."
      },
      {
        "step": "$(x - 3)(x - 5) = 0$",
        "reason": "Factoring a quadratic: $-3$ and $-5$ have sum $-8$ and product $15$."
      },
      {
        "step": "The roots are $3$ and $5$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$a_n = y \\cdot 3^n + z \\cdot 5^n$",
        "reason": "General solution (distinct roots): the roots $3$ and $5$ are different, so two numbers $y$ and $z$ give every term."
      },
      {
        "step": "$y + z = 2$",
        "reason": "Substituting a value: $n = 0$ in line 6, with $3^0 = 5^0 = 1$ and $a_0 = 2$."
      },
      {
        "step": "$3y + 5z = 20$",
        "reason": "Substituting a value: $n = 1$ in line 6, with $a_1 = 20$."
      },
      {
        "step": "$2z = 14$",
        "reason": "Elimination: $3$ times line 7 is taken from line 8."
      },
      {
        "step": "$z = 7$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
      },
      {
        "step": "$y = -5$",
        "reason": "Back-substitution: $z = 7$ goes into line 7."
      },
      {
        "step": "$a_n = -5 \\cdot 3^n + 7 \\cdot 5^n$",
        "reason": "Substituting a value: the numbers $y$ and $z$ go into line 6."
      }
    ]
  },
  {
    "id": "t238-k1-p12",
    "topic": "linear-recurrences",
    "kind": "t238-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that $a_n = (-4 - 8n) \\cdot 10^n$ for every whole number $n$, where $a_0 = -4$, $a_1 = -120$ and $a_{n+2} = 20a_{n+1} - 100a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n = (-4 - 8n) \\cdot 10^n$ for every whole number $n$, where $a_0 = -4$, $a_1 = -120$ and $a_{n+2} = 20a_{n+1} - 100a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$x^2 = 20x - 100$",
        "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$x^2 - 20x + 100 = 0$",
        "reason": "Adding the same number to both sides: $20x - 100$ is taken from both sides."
      },
      {
        "step": "$(x - 10)^2 = 0$",
        "reason": "Square of a binomial: $(x - 10)^2 = x^2 - 20x + 100$."
      },
      {
        "step": "$x = 10$",
        "reason": "Double root: the one root is $10$, counted twice."
      },
      {
        "step": "$a_n = (y + zn) \\cdot 10^n$",
        "reason": "General solution (double root): the root $10$ is a double root, so two numbers $y$ and $z$ give every term."
      },
      {
        "step": "$y = -4$",
        "reason": "Substituting a value: $n = 0$ in line 6, with $10^0 = 1$ and $a_0 = -4$."
      },
      {
        "step": "$(y + z) \\cdot 10 = -120$",
        "reason": "Substituting a value: $n = 1$ in line 6, with $10^1 = 10$ and $a_1 = -120$."
      },
      {
        "step": "$10y + 10z = -120$",
        "reason": "Multiplying out: the factor in front multiplies each term of the bracket."
      },
      {
        "step": "$10 \\cdot (-4) + 10z = -120$",
        "reason": "Back-substitution: $y = -4$ goes into line 9."
      },
      {
        "step": "$10z = -80$",
        "reason": "Adding the same number to both sides: $40$ is added to both sides."
      },
      {
        "step": "$z = -8$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $10$."
      },
      {
        "step": "$a_n = (-4 - 8n) \\cdot 10^n$",
        "reason": "Substituting a value: the numbers $y$ and $z$ go into line 6."
      }
    ]
  },
  {
    "id": "t238-k1-p13",
    "topic": "linear-recurrences",
    "kind": "t238-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Prove that $y = -1 - \\dfrac{9}{2}i$, where $a_n = yr^n + z\\overline{r}^n$ for every whole number $n$, $r$ is the root of the characteristic equation with imaginary part above $0$, and $a_0 = -2$, $a_1 = 35$ and $a_{n+2} = 10a_{n+1} - 50a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $y = -1 - \\dfrac{9}{2}i$, where $a_n = yr^n + z\\overline{r}^n$ for every whole number $n$, $r$ is the root of the characteristic equation with imaginary part above $0$, and $a_0 = -2$, $a_1 = 35$ and $a_{n+2} = 10a_{n+1} - 50a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$x^2 = 10x - 50$",
        "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$x^2 - 10x + 50 = 0$",
        "reason": "Adding the same number to both sides: $10x - 50$ is taken from both sides."
      },
      {
        "step": "$x = \\dfrac{10 \\pm \\sqrt{100 - 200}}{2}$",
        "reason": "Quadratic formula: the discriminant is $100 - 200 = -100$, below $0$."
      },
      {
        "step": "$x = \\dfrac{10 \\pm 10i}{2}$",
        "reason": "Imaginary numbers, $\\sqrt{-n} = i\\sqrt{n}$ for positive $n$: $\\sqrt{-100} = 10i$."
      },
      {
        "step": "The roots are $5 + 5i$ and $5 - 5i$.",
        "reason": "Conjugate roots: the two roots of a real quadratic with a negative discriminant are complex conjugates."
      },
      {
        "step": "$a_n = y(5 + 5i)^n + z(5 - 5i)^n$",
        "reason": "General solution (distinct roots): the two roots are different, so two numbers $y$ and $z$ give every term."
      },
      {
        "step": "$y + z = -2$",
        "reason": "Substituting a value: $n = 0$ in line 7, with $a_0 = -2$."
      },
      {
        "step": "$y(5 + 5i) + z(5 - 5i) = 35$",
        "reason": "Substituting a value: $n = 1$ in line 7, with $a_1 = 35$."
      },
      {
        "step": "$5i(y - z) = 45$",
        "reason": "Elimination: $5$ times line 8 is taken from line 9."
      },
      {
        "step": "$i(y - z) = 9$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
      },
      {
        "step": "$y - z = -9i$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $i$, and $\\dfrac{1}{i} = -i$, since $i \\cdot (-i) = 1$."
      },
      {
        "step": "$2y = -2 - 9i$",
        "reason": "Adding two equations: lines 8 and 12 are added."
      },
      {
        "step": "$y = -1 - \\dfrac{9}{2}i$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
      }
    ]
  },
  {
    "id": "t238-k1-p14",
    "topic": "linear-recurrences",
    "kind": "t238-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_n = -3 \\cdot 6^n + 4 \\cdot 9^n$ for every whole number $n$, where $a_0 = 1$, $a_1 = 18$ and $a_{n+2} = 15a_{n+1} - 54a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_n = -3 \\cdot 6^n + 4 \\cdot 9^n$ for every whole number $n$, where $a_0 = 1$, $a_1 = 18$ and $a_{n+2} = 15a_{n+1} - 54a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$x^2 = 15x - 54$",
        "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$x^2 - 15x + 54 = 0$",
        "reason": "Adding the same number to both sides: $15x - 54$ is taken from both sides."
      },
      {
        "step": "$(x - 6)(x - 9) = 0$",
        "reason": "Factoring a quadratic: $-6$ and $-9$ have sum $-15$ and product $54$."
      },
      {
        "step": "The roots are $6$ and $9$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$a_n = y \\cdot 6^n + z \\cdot 9^n$",
        "reason": "General solution (distinct roots): the roots $6$ and $9$ are different, so two numbers $y$ and $z$ give every term."
      },
      {
        "step": "$y + z = 1$",
        "reason": "Substituting a value: $n = 0$ in line 6, with $6^0 = 9^0 = 1$ and $a_0 = 1$."
      },
      {
        "step": "$6y + 9z = 18$",
        "reason": "Substituting a value: $n = 1$ in line 6, with $a_1 = 18$."
      },
      {
        "step": "$3z = 12$",
        "reason": "Elimination: $6$ times line 7 is taken from line 8."
      },
      {
        "step": "$z = 4$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $3$."
      },
      {
        "step": "$y = -3$",
        "reason": "Back-substitution: $z = 4$ goes into line 7."
      },
      {
        "step": "$a_n = -3 \\cdot 6^n + 4 \\cdot 9^n$",
        "reason": "Substituting a value: the numbers $y$ and $z$ go into line 6."
      }
    ]
  },
  {
    "id": "t238-k2-p01",
    "topic": "linear-recurrences",
    "kind": "t238-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{n+1} + 2a_n = -45 \\cdot 7^n$ for every whole number $n$, where $a_0 = 12$, $a_1 = -69$ and $a_{n+2} = 5a_{n+1} + 14a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{n+1} + 2a_n = -45 \\cdot 7^n$ for every whole number $n$, where $a_0 = 12$, $a_1 = -69$ and $a_{n+2} = 5a_{n+1} + 14a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$a_{n+2} + 2a_{n+1} = 5a_{n+1} + 14a_n + 2a_{n+1}$",
        "reason": "Linear recurrence of order 2: $a_{n+2} = 5a_{n+1} + 14a_n$ goes in for $a_{n+2}$."
      },
      {
        "step": "$a_{n+2} + 2a_{n+1} = 7a_{n+1} + 14a_n$",
        "reason": "Collecting like terms: $5a_{n+1} + 2a_{n+1} = 7a_{n+1}$."
      },
      {
        "step": "$a_{n+2} + 2a_{n+1} = 7(a_{n+1} + 2a_n)$",
        "reason": "Common factor: $7$ is taken out; this holds for every whole number $n$."
      },
      {
        "step": "$a_1 + 2a_0 = -69 + 2 \\cdot 12 = -45$",
        "reason": "Substituting a value: $a_0 = 12$ and $a_1 = -69$."
      },
      {
        "step": "So the numbers $a_{n+1} + 2a_n$ form a geometric sequence with first term $-45$ and common ratio $7$.",
        "reason": "Geometric sequence: by line 4 each term is $7$ times the one before, and line 5 gives the first."
      },
      {
        "step": "$a_{n+1} + 2a_n = -45 \\cdot 7^n$",
        "reason": "The $n$th term of a geometric sequence: counted from $n = 0$, the term is $-45 \\cdot 7^n$."
      }
    ]
  },
  {
    "id": "t238-k2-p02",
    "topic": "linear-recurrences",
    "kind": "t238-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that the limit of $a_n$ is $-17$, where $a_0 = -35$, $a_1 = -7$ and $9a_{n+2} = 4a_{n+1} + 5a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the limit of $a_n$ is $-17$, where $a_0 = -35$, $a_1 = -7$ and $9a_{n+2} = 4a_{n+1} + 5a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$9x^2 = 4x + 5$",
        "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$9x^2 - 4x - 5 = 0$",
        "reason": "Adding the same number to both sides: $4x + 5$ is taken from both sides."
      },
      {
        "step": "$(x - 1)(9x + 5) = 0$",
        "reason": "Factoring a quadratic: $(x - 1)(9x + 5) = 9x^2 - 4x - 5$."
      },
      {
        "step": "The roots are $1$ and $-\\dfrac{5}{9}$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$a_n = y + z\\left(-\\dfrac{5}{9}\\right)^n$",
        "reason": "General solution (distinct roots): the roots $1$ and $-\\dfrac{5}{9}$ are different, and $1^n = 1$."
      },
      {
        "step": "$y + z = -35$",
        "reason": "Substituting a value: $n = 0$ in line 6, with $a_0 = -35$."
      },
      {
        "step": "$y - \\dfrac{5}{9}z = -7$",
        "reason": "Substituting a value: $n = 1$ in line 6, with $a_1 = -7$."
      },
      {
        "step": "$9y - 5z = -63$",
        "reason": "Multiplying both sides by the same number: line 8 is multiplied by $9$."
      },
      {
        "step": "$14y = -238$",
        "reason": "Elimination: $5$ times line 7 is added to line 9."
      },
      {
        "step": "$y = -17$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $14$."
      },
      {
        "step": "The powers $\\left(-\\dfrac{5}{9}\\right)^n$ have the limit $0$.",
        "reason": "Powers of a number between $-1$ and $1$ shrink to $0$: $-\\dfrac{5}{9}$ lies between $-1$ and $1$."
      },
      {
        "step": "The limit of $a_n$ is $-17 + z \\cdot 0 = -17$.",
        "reason": "A limit passes through sums, products and quotients: line 6 with lines 11 and 12."
      }
    ]
  },
  {
    "id": "t238-k2-p03",
    "topic": "linear-recurrences",
    "kind": "t238-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that the limit of $a_n$ is $50$, where $a_0 = 42$, $a_1 = 47$ and $8a_{n+2} = 11a_{n+1} - 3a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the limit of $a_n$ is $50$, where $a_0 = 42$, $a_1 = 47$ and $8a_{n+2} = 11a_{n+1} - 3a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$8x^2 = 11x - 3$",
        "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$8x^2 - 11x + 3 = 0$",
        "reason": "Adding the same number to both sides: $11x - 3$ is taken from both sides."
      },
      {
        "step": "$(x - 1)(8x - 3) = 0$",
        "reason": "Factoring a quadratic: $(x - 1)(8x - 3) = 8x^2 - 11x + 3$."
      },
      {
        "step": "The roots are $1$ and $\\dfrac{3}{8}$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$a_n = y + z\\left(\\dfrac{3}{8}\\right)^n$",
        "reason": "General solution (distinct roots): the roots $1$ and $\\dfrac{3}{8}$ are different, and $1^n = 1$."
      },
      {
        "step": "$y + z = 42$",
        "reason": "Substituting a value: $n = 0$ in line 6, with $a_0 = 42$."
      },
      {
        "step": "$y + \\dfrac{3}{8}z = 47$",
        "reason": "Substituting a value: $n = 1$ in line 6, with $a_1 = 47$."
      },
      {
        "step": "$8y + 3z = 376$",
        "reason": "Multiplying both sides by the same number: line 8 is multiplied by $8$."
      },
      {
        "step": "$5y = 250$",
        "reason": "Elimination: $3$ times line 7 is taken from line 9."
      },
      {
        "step": "$y = 50$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $5$."
      },
      {
        "step": "The powers $\\left(\\dfrac{3}{8}\\right)^n$ have the limit $0$.",
        "reason": "Powers of a number between $-1$ and $1$ shrink to $0$: $\\dfrac{3}{8}$ lies between $-1$ and $1$."
      },
      {
        "step": "The limit of $a_n$ is $50 + z \\cdot 0 = 50$.",
        "reason": "A limit passes through sums, products and quotients: line 6 with lines 11 and 12."
      }
    ]
  },
  {
    "id": "t238-k2-p04",
    "topic": "linear-recurrences",
    "kind": "t238-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{n+1} - 9a_n = 20 \\cdot 7^n$ for every whole number $n$, where $a_0 = 8$, $a_1 = 92$ and $a_{n+2} = 16a_{n+1} - 63a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{n+1} - 9a_n = 20 \\cdot 7^n$ for every whole number $n$, where $a_0 = 8$, $a_1 = 92$ and $a_{n+2} = 16a_{n+1} - 63a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$a_{n+2} - 9a_{n+1} = 16a_{n+1} - 63a_n - 9a_{n+1}$",
        "reason": "Linear recurrence of order 2: $a_{n+2} = 16a_{n+1} - 63a_n$ goes in for $a_{n+2}$."
      },
      {
        "step": "$a_{n+2} - 9a_{n+1} = 7a_{n+1} - 63a_n$",
        "reason": "Collecting like terms: $16a_{n+1} - 9a_{n+1} = 7a_{n+1}$."
      },
      {
        "step": "$a_{n+2} - 9a_{n+1} = 7(a_{n+1} - 9a_n)$",
        "reason": "Common factor: $7$ is taken out; this holds for every whole number $n$."
      },
      {
        "step": "$a_1 - 9a_0 = 92 - 9 \\cdot 8 = 20$",
        "reason": "Substituting a value: $a_0 = 8$ and $a_1 = 92$."
      },
      {
        "step": "So the numbers $a_{n+1} - 9a_n$ form a geometric sequence with first term $20$ and common ratio $7$.",
        "reason": "Geometric sequence: by line 4 each term is $7$ times the one before, and line 5 gives the first."
      },
      {
        "step": "$a_{n+1} - 9a_n = 20 \\cdot 7^n$",
        "reason": "The $n$th term of a geometric sequence: counted from $n = 0$, the term is $20 \\cdot 7^n$."
      }
    ]
  },
  {
    "id": "t238-k2-p05",
    "topic": "linear-recurrences",
    "kind": "t238-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that the limit of $a_n$ is $14$, where $a_0 = -10$, $a_1 = 29$ and $8a_{n+2} = 3a_{n+1} + 5a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the limit of $a_n$ is $14$, where $a_0 = -10$, $a_1 = 29$ and $8a_{n+2} = 3a_{n+1} + 5a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$8x^2 = 3x + 5$",
        "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$8x^2 - 3x - 5 = 0$",
        "reason": "Adding the same number to both sides: $3x + 5$ is taken from both sides."
      },
      {
        "step": "$(x - 1)(8x + 5) = 0$",
        "reason": "Factoring a quadratic: $(x - 1)(8x + 5) = 8x^2 - 3x - 5$."
      },
      {
        "step": "The roots are $1$ and $-\\dfrac{5}{8}$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$a_n = y + z\\left(-\\dfrac{5}{8}\\right)^n$",
        "reason": "General solution (distinct roots): the roots $1$ and $-\\dfrac{5}{8}$ are different, and $1^n = 1$."
      },
      {
        "step": "$y + z = -10$",
        "reason": "Substituting a value: $n = 0$ in line 6, with $a_0 = -10$."
      },
      {
        "step": "$y - \\dfrac{5}{8}z = 29$",
        "reason": "Substituting a value: $n = 1$ in line 6, with $a_1 = 29$."
      },
      {
        "step": "$8y - 5z = 232$",
        "reason": "Multiplying both sides by the same number: line 8 is multiplied by $8$."
      },
      {
        "step": "$13y = 182$",
        "reason": "Elimination: $5$ times line 7 is added to line 9."
      },
      {
        "step": "$y = 14$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $13$."
      },
      {
        "step": "The powers $\\left(-\\dfrac{5}{8}\\right)^n$ have the limit $0$.",
        "reason": "Powers of a number between $-1$ and $1$ shrink to $0$: $-\\dfrac{5}{8}$ lies between $-1$ and $1$."
      },
      {
        "step": "The limit of $a_n$ is $14 + z \\cdot 0 = 14$.",
        "reason": "A limit passes through sums, products and quotients: line 6 with lines 11 and 12."
      }
    ]
  },
  {
    "id": "t238-k2-p06",
    "topic": "linear-recurrences",
    "kind": "t238-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{n+1} - 9a_n = 32 \\cdot 8^n$ for every whole number $n$, where $a_0 = -2$, $a_1 = 14$ and $a_{n+2} = 17a_{n+1} - 72a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{n+1} - 9a_n = 32 \\cdot 8^n$ for every whole number $n$, where $a_0 = -2$, $a_1 = 14$ and $a_{n+2} = 17a_{n+1} - 72a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$a_{n+2} - 9a_{n+1} = 17a_{n+1} - 72a_n - 9a_{n+1}$",
        "reason": "Linear recurrence of order 2: $a_{n+2} = 17a_{n+1} - 72a_n$ goes in for $a_{n+2}$."
      },
      {
        "step": "$a_{n+2} - 9a_{n+1} = 8a_{n+1} - 72a_n$",
        "reason": "Collecting like terms: $17a_{n+1} - 9a_{n+1} = 8a_{n+1}$."
      },
      {
        "step": "$a_{n+2} - 9a_{n+1} = 8(a_{n+1} - 9a_n)$",
        "reason": "Common factor: $8$ is taken out; this holds for every whole number $n$."
      },
      {
        "step": "$a_1 - 9a_0 = 14 - 9 \\cdot (-2) = 32$",
        "reason": "Substituting a value: $a_0 = -2$ and $a_1 = 14$."
      },
      {
        "step": "So the numbers $a_{n+1} - 9a_n$ form a geometric sequence with first term $32$ and common ratio $8$.",
        "reason": "Geometric sequence: by line 4 each term is $8$ times the one before, and line 5 gives the first."
      },
      {
        "step": "$a_{n+1} - 9a_n = 32 \\cdot 8^n$",
        "reason": "The $n$th term of a geometric sequence: counted from $n = 0$, the term is $32 \\cdot 8^n$."
      }
    ]
  },
  {
    "id": "t238-k2-p07",
    "topic": "linear-recurrences",
    "kind": "t238-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that the limit of $a_n$ is $19$, where $a_0 = 37$, $a_1 = 23$ and $9a_{n+2} = 11a_{n+1} - 2a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the limit of $a_n$ is $19$, where $a_0 = 37$, $a_1 = 23$ and $9a_{n+2} = 11a_{n+1} - 2a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$9x^2 = 11x - 2$",
        "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$9x^2 - 11x + 2 = 0$",
        "reason": "Adding the same number to both sides: $11x - 2$ is taken from both sides."
      },
      {
        "step": "$(x - 1)(9x - 2) = 0$",
        "reason": "Factoring a quadratic: $(x - 1)(9x - 2) = 9x^2 - 11x + 2$."
      },
      {
        "step": "The roots are $1$ and $\\dfrac{2}{9}$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$a_n = y + z\\left(\\dfrac{2}{9}\\right)^n$",
        "reason": "General solution (distinct roots): the roots $1$ and $\\dfrac{2}{9}$ are different, and $1^n = 1$."
      },
      {
        "step": "$y + z = 37$",
        "reason": "Substituting a value: $n = 0$ in line 6, with $a_0 = 37$."
      },
      {
        "step": "$y + \\dfrac{2}{9}z = 23$",
        "reason": "Substituting a value: $n = 1$ in line 6, with $a_1 = 23$."
      },
      {
        "step": "$9y + 2z = 207$",
        "reason": "Multiplying both sides by the same number: line 8 is multiplied by $9$."
      },
      {
        "step": "$7y = 133$",
        "reason": "Elimination: $2$ times line 7 is taken from line 9."
      },
      {
        "step": "$y = 19$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $7$."
      },
      {
        "step": "The powers $\\left(\\dfrac{2}{9}\\right)^n$ have the limit $0$.",
        "reason": "Powers of a number between $-1$ and $1$ shrink to $0$: $\\dfrac{2}{9}$ lies between $-1$ and $1$."
      },
      {
        "step": "The limit of $a_n$ is $19 + z \\cdot 0 = 19$.",
        "reason": "A limit passes through sums, products and quotients: line 6 with lines 11 and 12."
      }
    ]
  },
  {
    "id": "t238-k2-p08",
    "topic": "linear-recurrences",
    "kind": "t238-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{n+1} - 7a_n = -18 \\cdot 3^n$ for every whole number $n$, where $a_0 = -5$, $a_1 = -53$ and $a_{n+2} = 10a_{n+1} - 21a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{n+1} - 7a_n = -18 \\cdot 3^n$ for every whole number $n$, where $a_0 = -5$, $a_1 = -53$ and $a_{n+2} = 10a_{n+1} - 21a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$a_{n+2} - 7a_{n+1} = 10a_{n+1} - 21a_n - 7a_{n+1}$",
        "reason": "Linear recurrence of order 2: $a_{n+2} = 10a_{n+1} - 21a_n$ goes in for $a_{n+2}$."
      },
      {
        "step": "$a_{n+2} - 7a_{n+1} = 3a_{n+1} - 21a_n$",
        "reason": "Collecting like terms: $10a_{n+1} - 7a_{n+1} = 3a_{n+1}$."
      },
      {
        "step": "$a_{n+2} - 7a_{n+1} = 3(a_{n+1} - 7a_n)$",
        "reason": "Common factor: $3$ is taken out; this holds for every whole number $n$."
      },
      {
        "step": "$a_1 - 7a_0 = -53 - 7 \\cdot (-5) = -18$",
        "reason": "Substituting a value: $a_0 = -5$ and $a_1 = -53$."
      },
      {
        "step": "So the numbers $a_{n+1} - 7a_n$ form a geometric sequence with first term $-18$ and common ratio $3$.",
        "reason": "Geometric sequence: by line 4 each term is $3$ times the one before, and line 5 gives the first."
      },
      {
        "step": "$a_{n+1} - 7a_n = -18 \\cdot 3^n$",
        "reason": "The $n$th term of a geometric sequence: counted from $n = 0$, the term is $-18 \\cdot 3^n$."
      }
    ]
  },
  {
    "id": "t238-k2-p09",
    "topic": "linear-recurrences",
    "kind": "t238-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that the limit of $a_n$ is $-57$, where $a_0 = -43$, $a_1 = -61$ and $7a_{n+2} = 5a_{n+1} + 2a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the limit of $a_n$ is $-57$, where $a_0 = -43$, $a_1 = -61$ and $7a_{n+2} = 5a_{n+1} + 2a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$7x^2 = 5x + 2$",
        "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$7x^2 - 5x - 2 = 0$",
        "reason": "Adding the same number to both sides: $5x + 2$ is taken from both sides."
      },
      {
        "step": "$(x - 1)(7x + 2) = 0$",
        "reason": "Factoring a quadratic: $(x - 1)(7x + 2) = 7x^2 - 5x - 2$."
      },
      {
        "step": "The roots are $1$ and $-\\dfrac{2}{7}$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$a_n = y + z\\left(-\\dfrac{2}{7}\\right)^n$",
        "reason": "General solution (distinct roots): the roots $1$ and $-\\dfrac{2}{7}$ are different, and $1^n = 1$."
      },
      {
        "step": "$y + z = -43$",
        "reason": "Substituting a value: $n = 0$ in line 6, with $a_0 = -43$."
      },
      {
        "step": "$y - \\dfrac{2}{7}z = -61$",
        "reason": "Substituting a value: $n = 1$ in line 6, with $a_1 = -61$."
      },
      {
        "step": "$7y - 2z = -427$",
        "reason": "Multiplying both sides by the same number: line 8 is multiplied by $7$."
      },
      {
        "step": "$9y = -513$",
        "reason": "Elimination: $2$ times line 7 is added to line 9."
      },
      {
        "step": "$y = -57$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $9$."
      },
      {
        "step": "The powers $\\left(-\\dfrac{2}{7}\\right)^n$ have the limit $0$.",
        "reason": "Powers of a number between $-1$ and $1$ shrink to $0$: $-\\dfrac{2}{7}$ lies between $-1$ and $1$."
      },
      {
        "step": "The limit of $a_n$ is $-57 + z \\cdot 0 = -57$.",
        "reason": "A limit passes through sums, products and quotients: line 6 with lines 11 and 12."
      }
    ]
  },
  {
    "id": "t238-k2-p10",
    "topic": "linear-recurrences",
    "kind": "t238-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{n+1} + 4a_n = -57 \\cdot 9^n$ for every whole number $n$, where $a_0 = -7$, $a_1 = -29$ and $a_{n+2} = 5a_{n+1} + 36a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{n+1} + 4a_n = -57 \\cdot 9^n$ for every whole number $n$, where $a_0 = -7$, $a_1 = -29$ and $a_{n+2} = 5a_{n+1} + 36a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$a_{n+2} + 4a_{n+1} = 5a_{n+1} + 36a_n + 4a_{n+1}$",
        "reason": "Linear recurrence of order 2: $a_{n+2} = 5a_{n+1} + 36a_n$ goes in for $a_{n+2}$."
      },
      {
        "step": "$a_{n+2} + 4a_{n+1} = 9a_{n+1} + 36a_n$",
        "reason": "Collecting like terms: $5a_{n+1} + 4a_{n+1} = 9a_{n+1}$."
      },
      {
        "step": "$a_{n+2} + 4a_{n+1} = 9(a_{n+1} + 4a_n)$",
        "reason": "Common factor: $9$ is taken out; this holds for every whole number $n$."
      },
      {
        "step": "$a_1 + 4a_0 = -29 + 4 \\cdot (-7) = -57$",
        "reason": "Substituting a value: $a_0 = -7$ and $a_1 = -29$."
      },
      {
        "step": "So the numbers $a_{n+1} + 4a_n$ form a geometric sequence with first term $-57$ and common ratio $9$.",
        "reason": "Geometric sequence: by line 4 each term is $9$ times the one before, and line 5 gives the first."
      },
      {
        "step": "$a_{n+1} + 4a_n = -57 \\cdot 9^n$",
        "reason": "The $n$th term of a geometric sequence: counted from $n = 0$, the term is $-57 \\cdot 9^n$."
      }
    ]
  },
  {
    "id": "t238-k2-p11",
    "topic": "linear-recurrences",
    "kind": "t238-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that the limit of $a_n$ is $-52$, where $a_0 = -32$, $a_1 = -40$ and $5a_{n+2} = 8a_{n+1} - 3a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the limit of $a_n$ is $-52$, where $a_0 = -32$, $a_1 = -40$ and $5a_{n+2} = 8a_{n+1} - 3a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$5x^2 = 8x - 3$",
        "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$5x^2 - 8x + 3 = 0$",
        "reason": "Adding the same number to both sides: $8x - 3$ is taken from both sides."
      },
      {
        "step": "$(x - 1)(5x - 3) = 0$",
        "reason": "Factoring a quadratic: $(x - 1)(5x - 3) = 5x^2 - 8x + 3$."
      },
      {
        "step": "The roots are $1$ and $\\dfrac{3}{5}$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$a_n = y + z\\left(\\dfrac{3}{5}\\right)^n$",
        "reason": "General solution (distinct roots): the roots $1$ and $\\dfrac{3}{5}$ are different, and $1^n = 1$."
      },
      {
        "step": "$y + z = -32$",
        "reason": "Substituting a value: $n = 0$ in line 6, with $a_0 = -32$."
      },
      {
        "step": "$y + \\dfrac{3}{5}z = -40$",
        "reason": "Substituting a value: $n = 1$ in line 6, with $a_1 = -40$."
      },
      {
        "step": "$5y + 3z = -200$",
        "reason": "Multiplying both sides by the same number: line 8 is multiplied by $5$."
      },
      {
        "step": "$2y = -104$",
        "reason": "Elimination: $3$ times line 7 is taken from line 9."
      },
      {
        "step": "$y = -52$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
      },
      {
        "step": "The powers $\\left(\\dfrac{3}{5}\\right)^n$ have the limit $0$.",
        "reason": "Powers of a number between $-1$ and $1$ shrink to $0$: $\\dfrac{3}{5}$ lies between $-1$ and $1$."
      },
      {
        "step": "The limit of $a_n$ is $-52 + z \\cdot 0 = -52$.",
        "reason": "A limit passes through sums, products and quotients: line 6 with lines 11 and 12."
      }
    ]
  },
  {
    "id": "t238-k2-p12",
    "topic": "linear-recurrences",
    "kind": "t238-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Prove that the limit of $a_n$ is $11$, where $a_0 = 47$, $a_1 = 39$ and $9a_{n+2} = 16a_{n+1} - 7a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that the limit of $a_n$ is $11$, where $a_0 = 47$, $a_1 = 39$ and $9a_{n+2} = 16a_{n+1} - 7a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$9x^2 = 16x - 7$",
        "reason": "Characteristic equation: $a_{n+2}$, $a_{n+1}$ and $a_n$ become $x^2$, $x$ and $1$."
      },
      {
        "step": "$9x^2 - 16x + 7 = 0$",
        "reason": "Adding the same number to both sides: $16x - 7$ is taken from both sides."
      },
      {
        "step": "$(x - 1)(9x - 7) = 0$",
        "reason": "Factoring a quadratic: $(x - 1)(9x - 7) = 9x^2 - 16x + 7$."
      },
      {
        "step": "The roots are $1$ and $\\dfrac{7}{9}$.",
        "reason": "Zero-product property: one of the two brackets is $0$."
      },
      {
        "step": "$a_n = y + z\\left(\\dfrac{7}{9}\\right)^n$",
        "reason": "General solution (distinct roots): the roots $1$ and $\\dfrac{7}{9}$ are different, and $1^n = 1$."
      },
      {
        "step": "$y + z = 47$",
        "reason": "Substituting a value: $n = 0$ in line 6, with $a_0 = 47$."
      },
      {
        "step": "$y + \\dfrac{7}{9}z = 39$",
        "reason": "Substituting a value: $n = 1$ in line 6, with $a_1 = 39$."
      },
      {
        "step": "$9y + 7z = 351$",
        "reason": "Multiplying both sides by the same number: line 8 is multiplied by $9$."
      },
      {
        "step": "$2y = 22$",
        "reason": "Elimination: $7$ times line 7 is taken from line 9."
      },
      {
        "step": "$y = 11$",
        "reason": "Dividing both sides by a nonzero number: both sides are divided by $2$."
      },
      {
        "step": "The powers $\\left(\\dfrac{7}{9}\\right)^n$ have the limit $0$.",
        "reason": "Powers of a number between $-1$ and $1$ shrink to $0$: $\\dfrac{7}{9}$ lies between $-1$ and $1$."
      },
      {
        "step": "The limit of $a_n$ is $11 + z \\cdot 0 = 11$.",
        "reason": "A limit passes through sums, products and quotients: line 6 with lines 11 and 12."
      }
    ]
  },
  {
    "id": "t238-k2-p13",
    "topic": "linear-recurrences",
    "kind": "t238-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{n+1} - 3a_n = -52 \\cdot 9^n$ for every whole number $n$, where $a_0 = 10$, $a_1 = -22$ and $a_{n+2} = 12a_{n+1} - 27a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{n+1} - 3a_n = -52 \\cdot 9^n$ for every whole number $n$, where $a_0 = 10$, $a_1 = -22$ and $a_{n+2} = 12a_{n+1} - 27a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$a_{n+2} - 3a_{n+1} = 12a_{n+1} - 27a_n - 3a_{n+1}$",
        "reason": "Linear recurrence of order 2: $a_{n+2} = 12a_{n+1} - 27a_n$ goes in for $a_{n+2}$."
      },
      {
        "step": "$a_{n+2} - 3a_{n+1} = 9a_{n+1} - 27a_n$",
        "reason": "Collecting like terms: $12a_{n+1} - 3a_{n+1} = 9a_{n+1}$."
      },
      {
        "step": "$a_{n+2} - 3a_{n+1} = 9(a_{n+1} - 3a_n)$",
        "reason": "Common factor: $9$ is taken out; this holds for every whole number $n$."
      },
      {
        "step": "$a_1 - 3a_0 = -22 - 3 \\cdot 10 = -52$",
        "reason": "Substituting a value: $a_0 = 10$ and $a_1 = -22$."
      },
      {
        "step": "So the numbers $a_{n+1} - 3a_n$ form a geometric sequence with first term $-52$ and common ratio $9$.",
        "reason": "Geometric sequence: by line 4 each term is $9$ times the one before, and line 5 gives the first."
      },
      {
        "step": "$a_{n+1} - 3a_n = -52 \\cdot 9^n$",
        "reason": "The $n$th term of a geometric sequence: counted from $n = 0$, the term is $-52 \\cdot 9^n$."
      }
    ]
  },
  {
    "id": "t238-k2-p14",
    "topic": "linear-recurrences",
    "kind": "t238-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Prove that $a_{n+1} + 9a_n = 47 \\cdot 3^n$ for every whole number $n$, where $a_0 = 2$, $a_1 = 29$ and $a_{n+2} = -6a_{n+1} + 27a_n$ for every whole number $n$.",
    "form": "Write the proof.",
    "solution": [
      {
        "step": "Prove that $a_{n+1} + 9a_n = 47 \\cdot 3^n$ for every whole number $n$, where $a_0 = 2$, $a_1 = 29$ and $a_{n+2} = -6a_{n+1} + 27a_n$ for every whole number $n$.",
        "reason": "Linear recurrence of order 2: this is the problem as given; $a_0$ and $a_1$ start the sequence and the recurrence gives every later term."
      },
      {
        "step": "$a_{n+2} + 9a_{n+1} = -6a_{n+1} + 27a_n + 9a_{n+1}$",
        "reason": "Linear recurrence of order 2: $a_{n+2} = -6a_{n+1} + 27a_n$ goes in for $a_{n+2}$."
      },
      {
        "step": "$a_{n+2} + 9a_{n+1} = 3a_{n+1} + 27a_n$",
        "reason": "Collecting like terms: $-6a_{n+1} + 9a_{n+1} = 3a_{n+1}$."
      },
      {
        "step": "$a_{n+2} + 9a_{n+1} = 3(a_{n+1} + 9a_n)$",
        "reason": "Common factor: $3$ is taken out; this holds for every whole number $n$."
      },
      {
        "step": "$a_1 + 9a_0 = 29 + 9 \\cdot 2 = 47$",
        "reason": "Substituting a value: $a_0 = 2$ and $a_1 = 29$."
      },
      {
        "step": "So the numbers $a_{n+1} + 9a_n$ form a geometric sequence with first term $47$ and common ratio $3$.",
        "reason": "Geometric sequence: by line 4 each term is $3$ times the one before, and line 5 gives the first."
      },
      {
        "step": "$a_{n+1} + 9a_n = 47 \\cdot 3^n$",
        "reason": "The $n$th term of a geometric sequence: counted from $n = 0$, the term is $47 \\cdot 3^n$."
      }
    ]
  }
]
