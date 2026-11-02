export default {
  "number": 25,
  "manyParts": false,
  "ideas": [
    {
      "name": "Assumptions on multiplication",
      "concrete": "The product $3\\times\\frac25$ is a unique rational number equal to the usual product of fractions. Also $1\\times\\left(-\\frac23\\right)=-\\frac23$ and $0\\times(-7)=0$.",
      "general": "For rational numbers $x$ and $y$, there is a unique rational number $xy$. It matches ordinary fraction multiplication when $x$ and $y$ are fractions. This multiplication satisfies the associative, commutative, and distributive laws. Also $1\\cdot x=x$ and $0\\cdot x=x\\cdot0=0$ for every rational number $x$."
    },
    {
      "name": "Signs of products",
      "concrete": "$(-1)(-1)=1$, $(-1)\\times5=-5$, and $(-2)(-3)=6$.",
      "general": "For all rational numbers $x$ and $y$: $(-1)(-1)=1$, $(-1)x=-x$, $(-x)y=-xy$, and $(-x)(-y)=xy$."
    }
  ],
  "kinds": [
    {
      "id": "t25-k1",
      "forms": []
    }
  ],
  "proofs": [
    {
      "id": "t25-p1",
      "method": "direct proof",
      "statement": "For every rational number $x$, $0\\cdot x=x\\cdot0=0$.",
      "idea": "Write $x$ as $1\\cdot x$, add $0\\cdot x$ to it using the distributive law, and compare the result with $x$ itself. This shows that $0\\cdot x$ is $0$.",
      "lines": [
        {
          "line": "$x+0\\cdot x=1\\cdot x+0\\cdot x$.",
          "reason": "multiplying by $1$ leaves a number unchanged"
        },
        {
          "line": "$1\\cdot x+0\\cdot x=(1+0)x$.",
          "reason": "the distributive law"
        },
        {
          "line": "$(1+0)x=1\\cdot x=x$.",
          "reason": "the rule that $x+0=x$ for every rational number, and the rule that $1\\cdot x=x$ for every rational number"
        },
        {
          "line": "$x+0\\cdot x=x$.",
          "reason": "combining the equalities above"
        },
        {
          "line": "$0\\cdot x=0$.",
          "reason": "a number that added to $x$ gives $x$ back must itself be $0$"
        },
        {
          "line": "$x\\cdot0=0$.",
          "reason": "the commutative law of multiplication"
        }
      ]
    },
    {
      "id": "t25-p2",
      "method": "direct proof",
      "statement": "The product $(-1)(-1)$ equals $1$.",
      "idea": "Multiply the equation $(-1)+1=0$ through by $-1$ and expand with the distributive law. Then add $1$ to both sides to isolate $(-1)(-1)$.",
      "lines": [
        {
          "line": "$(-1)+1=0$.",
          "reason": "the rule that $x+(-x)=0$ for every rational number $x$"
        },
        {
          "line": "$(-1)\\big((-1)+1\\big)=(-1)\\cdot0$.",
          "reason": "multiplying two equal quantities by the same number keeps them equal"
        },
        {
          "line": "$(-1)(-1)+(-1)\\cdot1=(-1)\\cdot0$.",
          "reason": "the distributive law"
        },
        {
          "line": "$(-1)(-1)+(-1)=0$.",
          "reason": "the rule that $1\\cdot x=x$ for every rational number $x$, and the rule that $0$ times a number is $0$"
        },
        {
          "line": "$\\big((-1)(-1)+(-1)\\big)+1=0+1$.",
          "reason": "adding the same number to two equal quantities keeps them equal"
        },
        {
          "line": "$(-1)(-1)+\\big((-1)+1\\big)=1$.",
          "reason": "the associative law of addition, and $0+1=1$"
        },
        {
          "line": "$(-1)(-1)=1$.",
          "reason": "the rule that $x+(-x)=0$, then the rule that $x+0=x$, for every rational number $x$"
        }
      ]
    },
    {
      "id": "t25-p3",
      "method": "direct proof",
      "statement": "For every rational number $x$, $(-1)x=-x$.",
      "idea": "Add $x$ and $(-1)x$, apply the distributive law to $1+(-1)$, and compare the result with $0\\cdot x=0$. This shows that $(-1)x$ is the mirror reflection of $x$.",
      "lines": [
        {
          "line": "$x+(-1)x=1\\cdot x+(-1)x$.",
          "reason": "the rule that $1\\cdot x=x$ for every rational number $x$"
        },
        {
          "line": "$1\\cdot x+(-1)x=(1+(-1))x$.",
          "reason": "the distributive law"
        },
        {
          "line": "$(1+(-1))x=0\\cdot x$.",
          "reason": "the rule that $x+(-x)=0$ for every rational number $x$"
        },
        {
          "line": "$0\\cdot x=0$.",
          "reason": "the rule that $0$ times a number is $0$"
        },
        {
          "line": "$x+(-1)x=0$.",
          "reason": "combining the equalities above"
        },
        {
          "line": "$(-1)x=-x$.",
          "reason": "a number that added to $x$ gives $0$ is the mirror reflection of $x$"
        }
      ]
    },
    {
      "id": "t25-p4",
      "method": "direct proof",
      "statement": "For all rational numbers $x$ and $y$, $(-x)y=-xy$.",
      "idea": "Add $(-x)y$ to $xy$ and apply the distributive law to $(-x)+x$. This shows that $(-x)y$ is the mirror reflection of $xy$.",
      "lines": [
        {
          "line": "$(-x)y+xy=\\big((-x)+x\\big)y$.",
          "reason": "the distributive law"
        },
        {
          "line": "$\\big((-x)+x\\big)y=0\\cdot y$.",
          "reason": "the rule that $x+(-x)=0$ for every rational number $x$"
        },
        {
          "line": "$0\\cdot y=0$.",
          "reason": "the rule that $0$ times a number is $0$"
        },
        {
          "line": "$(-x)y+xy=0$.",
          "reason": "combining the equalities above"
        },
        {
          "line": "$(-x)y=-xy$.",
          "reason": "a number that added to $xy$ gives $0$ is the mirror reflection of $xy$"
        }
      ]
    },
    {
      "id": "t25-p5",
      "method": "direct proof",
      "statement": "For all rational numbers $x$ and $y$, $(-x)(-y)=xy$.",
      "idea": "Rewrite $-xy$ as $(-x)y$ by the rule that $(-x)y=-xy$, then apply the distributive law to $(-y)+y$. This shows that $(-x)(-y)$ equals $xy$.",
      "lines": [
        {
          "line": "$(-x)(-y)+(-xy)=(-x)(-y)+(-x)y$.",
          "reason": "the rule that $(-x)y=-xy$, proved above"
        },
        {
          "line": "$(-x)(-y)+(-x)y=(-x)\\big((-y)+y\\big)$.",
          "reason": "the distributive law"
        },
        {
          "line": "$(-x)\\big((-y)+y\\big)=(-x)\\cdot0$.",
          "reason": "the rule that $x+(-x)=0$ for every rational number $x$"
        },
        {
          "line": "$(-x)\\cdot0=0$.",
          "reason": "the rule that $0$ times a number is $0$"
        },
        {
          "line": "$(-x)(-y)+(-xy)=0$.",
          "reason": "combining the equalities above"
        },
        {
          "line": "So $(-x)(-y)$ is the mirror reflection of $-xy$.",
          "reason": "the mirror reflection of a number is the one number that added to it gives $0$"
        },
        {
          "line": "$(-x)(-y)=xy$.",
          "reason": "reflecting twice returns the original point, $p^{**}=p$"
        }
      ]
    },
    {
      "id": "t25-p6",
      "method": "direct proof",
      "statement": "For all rational numbers $x$, $y$, and $z$, $x(y-z)=xy-xz$.",
      "idea": "Rewrite $y-z$ as $y+(-z)$, apply the distributive law, then substitute the rule $(-x)z=-xz$ proved above.",
      "lines": [
        {
          "line": "$x(y-z)=x\\big(y+(-z)\\big)$.",
          "reason": "the definition of subtraction"
        },
        {
          "line": "$x\\big(y+(-z)\\big)=xy+x(-z)$.",
          "reason": "the distributive law"
        },
        {
          "line": "$x(-z)=-xz$.",
          "reason": "the rule that $(-x)z=-xz$ for all rational numbers $x$ and $z$, proved above"
        },
        {
          "line": "$x(y-z)=xy+(-xz)$.",
          "reason": "combining the previous lines"
        },
        {
          "line": "$xy+(-xz)=xy-xz$.",
          "reason": "the definition of subtraction"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t25-s1",
      "method": "direct proof",
      "statement": "Prove that $(-2)(-3)=6$ using only the rule for removing parentheses, the distributive law, and the rule that $(-1)(-1)=1$. Do not use the general rule that $(-x)(-y)=xy$.",
      "check": {
        "proof": [
          {
            "line": "Rewrite $-2$ and $-3$ as sums of copies of $-1$: $-2=(-1)+(-1)$ and $-3=(-1)+(-1)+(-1)$.",
            "reason": "the rule for removing parentheses"
          },
          {
            "line": "$(-2)(-3)=\\big((-1)+(-1)\\big)\\big((-1)+(-1)+(-1)\\big)$.",
            "reason": "substituting the previous line"
          },
          {
            "line": "This product expands into $6$ copies of $(-1)(-1)$.",
            "reason": "the distributive law applied to both sums"
          },
          {
            "line": "Each copy of $(-1)(-1)$ equals $1$, so the $6$ copies add to $6$.",
            "reason": "the rule that $(-1)(-1)=1$, proved above"
          },
          {
            "line": "So $(-2)(-3)=6$.",
            "reason": "combining the previous lines"
          }
        ]
      }
    },
    {
      "id": "t25-s2",
      "method": "direct proof",
      "statement": "For positive fractions $s$ and $t$, $(-s)t=-(st)$.",
      "check": {
        "proof": [
          {
            "line": "$(-s)t=((-1)s)t$.",
            "reason": "the rule that $(-1)x=-x$, applied to $x=s$"
          },
          {
            "line": "$((-1)s)t=(-1)(st)$.",
            "reason": "the associative law of multiplication"
          },
          {
            "line": "$(-1)(st)=-(st)$.",
            "reason": "the rule that $(-1)x=-x$, applied to $x=st$"
          },
          {
            "line": "So $(-s)t=-(st)$.",
            "reason": "combining the previous lines"
          }
        ]
      }
    },
    {
      "id": "t25-s3",
      "method": "direct proof",
      "statement": "Prove that $(-1\\,234)(-5\\,678)=1\\,234\\times5\\,678$. Use only the rule that $(-x)y=-xy$, the commutative law, and the fact that reflecting twice returns the original point. Do not use the general rule that $(-x)(-y)=xy$.",
      "check": {
        "proof": [
          {
            "line": "$(-1\\,234)(-5\\,678)=-\\big(1\\,234\\times(-5\\,678)\\big)$.",
            "reason": "the rule that $(-x)y=-xy$, with $x=1\\,234$ and $y=-5\\,678$"
          },
          {
            "line": "$1\\,234\\times(-5\\,678)=(-5\\,678)\\times1\\,234$.",
            "reason": "the commutative law of multiplication"
          },
          {
            "line": "$(-5\\,678)\\times1\\,234=-(5\\,678\\times1\\,234)$.",
            "reason": "the rule that $(-x)y=-xy$, with $x=5\\,678$ and $y=1\\,234$"
          },
          {
            "line": "$5\\,678\\times1\\,234=1\\,234\\times5\\,678$.",
            "reason": "the commutative law of multiplication"
          },
          {
            "line": "$(-1\\,234)(-5\\,678)=-\\big(-(1\\,234\\times5\\,678)\\big)$.",
            "reason": "combining the previous lines"
          },
          {
            "line": "$(-1\\,234)(-5\\,678)=1\\,234\\times5\\,678$.",
            "reason": "reflecting twice returns the original point, $p^{**}=p$"
          }
        ]
      }
    }
  ]
}
