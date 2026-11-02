export default {
  "number": 24,
  "manyParts": false,
  "ideas": [
    {
      "name": "Assumptions on addition",
      "concrete": "The sum $\\frac{2}{3}+(-5)$ is a unique rational number, and $\\left(\\frac{2}{3}+(-5)\\right)+1=\\frac{2}{3}+((-5)+1)$.",
      "general": "For rational numbers $x$ and $y$, there is a unique rational number $x+y$. This sum matches ordinary fraction addition when $x$ and $y$ are fractions. This addition is associative and commutative. Also $x+(-x)=0$ and $x+0=x$ for every rational number $x$."
    }
  ],
  "kinds": [
    {
      "id": "t24-k1",
      "forms": []
    }
  ],
  "proofs": [
    {
      "id": "t24-p1",
      "method": "direct proof",
      "statement": "For all rational numbers $x$ and $y$, if $x+y=x$, then $y=0$.",
      "idea": "Add the mirror reflection of $x$ to both sides. This leaves $y$ alone on the left and $0$ on the right.",
      "lines": [
        {
          "line": "Add $-x$ to both sides of $x+y=x$: $(-x)+(x+y)=(-x)+x$.",
          "reason": "adding the same number to two equal quantities keeps them equal"
        },
        {
          "line": "The left side regroups as $((-x)+x)+y$, so $((-x)+x)+y=(-x)+x$.",
          "reason": "the associative law of addition"
        },
        {
          "line": "Both occurrences of $(-x)+x$ equal $0$.",
          "reason": "the rule that $x+(-x)=0$ for every rational number $x$"
        },
        {
          "line": "So $0+y=0$.",
          "reason": "combining the previous lines"
        },
        {
          "line": "So $y=0$.",
          "reason": "the rule that $0+x=x$ for every rational number $x$"
        }
      ]
    },
    {
      "id": "t24-p2",
      "method": "direct proof",
      "statement": "For all rational numbers $x$ and $y$, if $x+y=0$, then $y=-x$ and $x=-y$.",
      "idea": "Add the mirror reflection of $x$ to both sides of $x+y=0$. This leaves $y$ alone on the left and $-x$ on the right.",
      "lines": [
        {
          "line": "Add $-x$ to both sides of $x+y=0$: $(-x)+(x+y)=(-x)+0$.",
          "reason": "adding the same number to two equal quantities keeps them equal"
        },
        {
          "line": "The left side regroups as $((-x)+x)+y$.",
          "reason": "the associative law of addition"
        },
        {
          "line": "The number $(-x)+x$ equals $0$ on the left, and $(-x)+0$ equals $-x$ on the right, so $0+y=-x$.",
          "reason": "the rule that $x+(-x)=0$ and the rule that $x+0=x$, for every rational number $x$"
        },
        {
          "line": "So $y=-x$.",
          "reason": "the rule that $0+x=x$ for every rational number $x$"
        },
        {
          "line": "Reflecting both sides of $y=-x$ gives $x=-y$.",
          "reason": "reflecting twice returns the original point, $p^{**}=p$, for every point $p$ on the number line"
        }
      ]
    },
    {
      "id": "t24-p3",
      "method": "direct proof",
      "statement": "For all rational numbers $x$ and $y$, $-(x+y)=-x-y$, and $-(x-y)=-x+y$.",
      "idea": "The number $(-x)+(-y)$ added to $x+y$ gives $0$, so it is the mirror reflection of $x+y$.",
      "lines": [
        {
          "line": "The sum $(x+y)+((-x)+(-y))$ regroups as $(x+(-x))+(y+(-y))$.",
          "reason": "the associative and commutative laws of addition"
        },
        {
          "line": "Both $x+(-x)$ and $y+(-y)$ equal $0$, so $(x+(-x))+(y+(-y))=0$.",
          "reason": "the rule that $x+(-x)=0$ for every rational number $x$"
        },
        {
          "line": "So $(x+y)+((-x)+(-y))=0$, and therefore $(-x)+(-y)$ is the mirror reflection of $x+y$: $-(x+y)=-x-y$.",
          "reason": "a number that added to $x+y$ gives $0$ is the mirror reflection of $x+y$"
        },
        {
          "line": "Rewrite $-(x-y)$ as $-(x+(-y))$ and apply the previous line to $x$ and $-y$: $-(x+(-y))=-x-(-y)$.",
          "reason": "the definition of subtraction, and the rule that $-(x+y)=-x-y$ proved above"
        },
        {
          "line": "So $-(-y)=y$, and therefore $-(x-y)=-x+y$.",
          "reason": "reflecting twice returns the original point, $p^{**}=p$, for every point $p$ on the number line"
        }
      ]
    },
    {
      "id": "t24-p4",
      "method": "direct proof",
      "statement": "For positive rational numbers $s$ and $t$ (nonzero fractions), $s+(-t)=s-t$ when $s\\geq t$.",
      "idea": "Start from the fraction equation $(s-t)+t=s$ and add $-t$ to both sides. This shows that $s+(-t)$ equals $s-t$.",
      "lines": [
        {
          "line": "Since $s\\geq t$, the fraction $s-t$ is defined, and $(s-t)+t=s$.",
          "reason": "ordinary fraction subtraction, valid because $s\\geq t$"
        },
        {
          "line": "Add $-t$ to both sides: $(s-t)+t+(-t)=s+(-t)$.",
          "reason": "adding the same number to two equal quantities keeps them equal"
        },
        {
          "line": "The left side regroups as $(s-t)+(t+(-t))=(s-t)+0=s-t$.",
          "reason": "the associative law of addition, and $t+(-t)=0$"
        },
        {
          "line": "So $s-t=s+(-t)$ when $s\\geq t$.",
          "reason": "combining the previous lines"
        }
      ]
    },
    {
      "id": "t24-p5",
      "method": "direct proof",
      "statement": "For positive rational numbers $s$ and $t$ (nonzero fractions), $s+(-t)=-(t-s)$ when $s<t$.",
      "idea": "When $s<t$, swapping $s$ and $t$ reduces this case to the case already proved.",
      "lines": [
        {
          "line": "Since $t>s$, the previous rule with $s$ and $t$ exchanged gives $t+(-s)=t-s$.",
          "reason": "the rule already proved, applied to $t$ and $s$"
        },
        {
          "line": "Reflect both sides: $-(t+(-s))=-(t-s)$.",
          "reason": "reflecting equal numbers gives equal reflections"
        },
        {
          "line": "Then $-(t+(-s))=(-t)+s$.",
          "reason": "the rule that $-(x+y)=-x-y$, and the rule that $p^{**}=p$ for every point $p$"
        },
        {
          "line": "So $-(t+(-s))=s+(-t)$.",
          "reason": "the commutative law of addition"
        },
        {
          "line": "So $s+(-t)=-(t-s)$ when $s<t$.",
          "reason": "combining the previous lines"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t24-s1",
      "method": "direct proof",
      "statement": "For all rational numbers $x$, $y$, and $z$, if $x+y=0$ and $x+z=0$, then $y=z$.",
      "check": {
        "proof": [
          {
            "line": "$y=0+y$.",
            "reason": "the rule that $0+x=x$ for every rational number $x$"
          },
          {
            "line": "Since $x+z=0$, substitute to write $0+y=(x+z)+y$.",
            "reason": "substituting an expression equal to $0$"
          },
          {
            "line": "$(x+z)+y=z+(x+y)$.",
            "reason": "the commutative and associative laws of addition"
          },
          {
            "line": "Since $x+y=0$, this gives $z+(x+y)=z+0=z$.",
            "reason": "the rule that $x+0=x$ for every rational number $x$"
          },
          {
            "line": "So $y=z$.",
            "reason": "combining the previous lines"
          }
        ]
      }
    },
    {
      "id": "t24-s2",
      "method": "proof of existence by construction",
      "statement": "For all rational numbers $A$ and $B$, there is a rational number $x$ such that $A+x=B$. Use only the addition assumptions.",
      "check": {
        "proof": [
          {
            "line": "Let $x=B+(-A)$.",
            "reason": "the sum of two rational numbers is a rational number"
          },
          {
            "line": "Compute $A+x=A+(B+(-A))=A+((-A)+B)$.",
            "reason": "the commutative law of addition"
          },
          {
            "line": "$A+((-A)+B)=(A+(-A))+B=0+B=B$.",
            "reason": "the associative law of addition, and $x+(-x)=0$"
          },
          {
            "line": "So $A+x=B$, and therefore $x=B+(-A)$ is a rational number that solves the equation.",
            "reason": "combining the previous lines"
          }
        ]
      }
    }
  ]
}

