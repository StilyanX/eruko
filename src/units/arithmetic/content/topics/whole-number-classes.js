// Whole-Number Classes: the natural numbers embedded among the positive rational numbers, and Landau's closing theorems on fractions.
export default {
  "number": 58,
  "manyParts": false,
  "kinds": [
    {
      "id": "t58-k1",
      "forms": []
    }
  ],
  "ideas": [
    {
      "name": "Whole-number class",
      "concrete": "The positive rational number containing $\\frac{3}{1}$ has the symbol $3$, the whole-number class of the natural number 3.",
      "general": "For a natural number $x$, the symbol $x$ now denotes the positive rational number containing the fraction pair $\\frac{x}{1}$. This number is the **whole-number class** of $x$."
    }
  ],
  "proofs": [
    {
      "id": "landau-111",
      "method": "direct proof",
      "statement": "If $\\frac{x}{1}>\\frac{y}{1}$, or $\\frac{x}{1}\\sim\\frac{y}{1}$, or $\\frac{x}{1}<\\frac{y}{1}$, then $x>y$, or $x=y$, or $x<y$, respectively, and conversely.",
      "idea": "Each relation between the fraction pairs is a relation between $x\\cdot1$ and $y\\cdot1$. That relation also holds between $x$ and $y$.",
      "lines": [
        {
          "line": "The relation $\\frac{x}{1}>\\frac{y}{1}$ means $x\\cdot1>y\\cdot1$, $\\frac{x}{1}\\sim\\frac{y}{1}$ means $x\\cdot1=y\\cdot1$, and $\\frac{x}{1}<\\frac{y}{1}$ means $x\\cdot1<y\\cdot1$.",
          "reason": "the definitions of fraction pair order and fraction pair equivalence, with denominator 1"
        },
        {
          "line": "The products reduce: $x\\cdot1=x$ and $y\\cdot1=y$.",
          "reason": "the defining property $x\\cdot1=x$ of multiplication"
        },
        {
          "line": "So $x\\cdot1>y\\cdot1$, $x\\cdot1=y\\cdot1$, and $x\\cdot1<y\\cdot1$ are the same as $x>y$, $x=y$, and $x<y$, respectively.",
          "reason": "substituting $x\\cdot1=x$ and $y\\cdot1=y$"
        },
        {
          "line": "Therefore $\\frac{x}{1}>\\frac{y}{1}$, or $\\frac{x}{1}\\sim\\frac{y}{1}$, or $\\frac{x}{1}<\\frac{y}{1}$, holds exactly when $x>y$, or $x=y$, or $x<y$, respectively.",
          "reason": "combining the previous lines"
        }
      ]
    },
    {
      "id": "landau-112",
      "method": "direct proof",
      "statement": "For every $x$ and $y$, $\\frac{x}{1}+\\frac{y}{1}\\sim\\frac{x+y}{1}$ and $\\frac{x}{1}\\cdot\\frac{y}{1}\\sim\\frac{xy}{1}$.",
      "idea": "Add over the common denominator $1$, and multiply numerators and denominators, where $1\\cdot1=1$.",
      "lines": [
        {
          "line": "The fraction pairs add as $\\frac{x}{1}+\\frac{y}{1}\\sim\\frac{x+y}{1}$.",
          "reason": "fraction pairs with a common denominator add over that denominator"
        },
        {
          "line": "The product $\\frac{x}{1}\\cdot\\frac{y}{1}$ is the fraction pair $\\frac{xy}{1\\cdot1}$.",
          "reason": "the definition of fraction pair multiplication"
        },
        {
          "line": "The denominator reduces: $1\\cdot1=1$.",
          "reason": "the defining property $x\\cdot1=x$ of multiplication"
        },
        {
          "line": "So $\\frac{xy}{1\\cdot1}=\\frac{xy}{1}$.",
          "reason": "substituting $1\\cdot1=1$"
        },
        {
          "line": "Therefore $\\frac{x}{1}\\cdot\\frac{y}{1}\\sim\\frac{xy}{1}$.",
          "reason": "combining the previous two lines"
        }
      ]
    },
    {
      "id": "landau-113",
      "method": "induction",
      "statement": "The whole-number classes satisfy the five axioms of the natural numbers. The class of $\\frac{1}{1}$ plays the role of $1$. The class of $\\frac{x'}{1}$ plays the role of the successor of the class of $\\frac{x}{1}$.",
      "idea": "Check the five axioms one by one, and check the fifth by induction on the natural numbers themselves.",
      "lines": [
        {
          "line": "Let $Z$ be the set of all whole-number classes.",
          "reason": "the definition of a whole-number class"
        },
        {
          "line": "The class of $\\frac{1}{1}$ belongs to $Z$.",
          "reason": "the definition of a whole-number class as a class containing a fraction pair of the form $\\frac{x}{1}$"
        },
        {
          "line": "Each whole-number class is the class of some $\\frac{x}{1}$, and so has exactly one successor, the class of $\\frac{x'}{1}$.",
          "reason": "the definition of successor assigned to the whole-number classes"
        },
        {
          "line": "This successor differs from the class of $\\frac{1}{1}$, since $x'\\neq1$ for every $x$.",
          "reason": "by the axiom that no number has 1 as its successor"
        },
        {
          "line": "Suppose that the classes of $\\frac{x'}{1}$ and of $\\frac{y'}{1}$ coincide.",
          "reason": "the hypothesis of the fourth axiom, for the whole-number classes"
        },
        {
          "line": "Then $\\frac{x'}{1}\\sim\\frac{y'}{1}$, so $x'=y'$.",
          "reason": "the definition of a positive rational number, and that natural-number equality matches the equality of whole-number classes"
        },
        {
          "line": "So $x=y$.",
          "reason": "by the axiom that numbers with equal successors are equal"
        },
        {
          "line": "Therefore $\\frac{x}{1}\\sim\\frac{y}{1}$, so the classes of $\\frac{x}{1}$ and of $\\frac{y}{1}$ coincide.",
          "reason": "that natural-number equality matches the equality of whole-number classes, and the definition of a positive rational number"
        },
        {
          "line": "Let $C$ be a set of whole-number classes that contains the class of $\\frac{1}{1}$. Suppose that whenever the class of $\\frac{x}{1}$ belongs to $C$, so does the class of $\\frac{x'}{1}$.",
          "reason": "the hypothesis of the fifth axiom, for the whole-number classes"
        },
        {
          "line": "Let $M$ be the set of all natural numbers $x$ for which the class of $\\frac{x}{1}$ belongs to $C$.",
          "reason": "the correspondence between natural numbers and whole-number classes"
        },
        {
          "line": "The number $1$ belongs to $M$, and whenever $x$ belongs to $M$, its successor $x'$ also belongs to $M$.",
          "reason": "the hypothesis on $C$, translated by the definition of $M$"
        },
        {
          "line": "Every natural number belongs to $M$.",
          "reason": "by the axiom of induction"
        },
        {
          "line": "Therefore every whole-number class belongs to $C$.",
          "reason": "the definition of $M$"
        }
      ]
    },
    {
      "id": "landau-114",
      "method": "direct proof",
      "statement": "If $Z$ is the positive rational number corresponding to the fraction pair $\\frac{x}{y}$, then $yZ=x$.",
      "idea": "Multiply $\\frac{y}{1}$ by $\\frac{x}{y}$, then reduce the product to the pair $\\frac{x}{1}$.",
      "lines": [
        {
          "line": "The number $yZ$ contains $\\frac{y}{1}\\cdot\\frac{x}{y}$.",
          "reason": "the definition of positive-rational-number multiplication and of the whole-number class $y$"
        },
        {
          "line": "This product is the fraction pair $\\frac{yx}{1y}$.",
          "reason": "the definition of fraction pair multiplication"
        },
        {
          "line": "This fraction pair is equivalent to $\\frac{xy}{1y}$.",
          "reason": "the commutative law of natural-number multiplication, applied to the numerator"
        },
        {
          "line": "This fraction pair is equivalent to $\\frac{x}{1}$.",
          "reason": "the definition of fraction pair equivalence"
        },
        {
          "line": "Therefore $yZ$ contains $\\frac{x}{1}$, so $yZ=x$.",
          "reason": "the definition of a positive rational number, the definition of positive-rational-number equality, and the definition of the whole-number class $x$"
        }
      ]
    },
    {
      "id": "landau-115",
      "method": "proof of existence by construction",
      "statement": "For every positive rational number $X$ and every positive rational number $Y$, some whole-number class $z$ satisfies $zX > Y$.",
      "idea": "Pick whole-number classes $z$ and $v$ with $\\frac{z}{v}$ greater than $\\frac{Y}{X}$. Then $zX$ is at least $X\\frac{z}{v}$, which exceeds $Y$.",
      "lines": [
        {
          "line": "The quotient $\\frac{Y}{X}$ is a positive rational number.",
          "reason": "because the equation $XU = Y$ has exactly one solution $U$, and the quotient names it"
        },
        {
          "line": "There are whole-number classes $z$ and $v$ with $\\frac{z}{v} > \\frac{Y}{X}$.",
          "reason": "because some positive rational number exceeds $\\frac{Y}{X}$, and every positive rational number is a quotient of two whole-number classes"
        },
        {
          "line": "The class $v$ satisfies $v \\geq 1$.",
          "reason": "because every natural number is at least 1, and whole-number classes follow the order of their natural numbers"
        },
        {
          "line": "So $zX = Xz = X\\left(\\frac{z}{v}\\,v\\right) = \\left(X\\frac{z}{v}\\right)v$.",
          "reason": "by the commutative law of multiplication, because $\\frac{z}{v}\\,v = z$ by the definition of the quotient, and the associative law of multiplication"
        },
        {
          "line": "Then $\\left(X\\frac{z}{v}\\right)v \\geq \\left(X\\frac{z}{v}\\right)\\cdot1 = X\\frac{z}{v}$.",
          "reason": "because $v \\geq 1$, multiplying by a positive rational number keeps the order, and multiplying by the class of $\\frac{1}{1}$ changes nothing"
        },
        {
          "line": "Then $X\\frac{z}{v} > X\\frac{Y}{X} = Y$.",
          "reason": "because $\\frac{z}{v} > \\frac{Y}{X}$, multiplying both sides by $X$ keeps the order, and $X\\frac{Y}{X} = Y$ by the definition of the quotient"
        },
        {
          "line": "So $zX > Y$.",
          "reason": "because a number at least equal to some number greater than $Y$ is itself greater than $Y$"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t58-s1",
      "method": "direct proof",
      "statement": "For every natural number $x$, the whole-number class of $x'$ equals the whole-number class of $x$ plus that of $1$.",
      "check": {
        "proof": [
          {
            "line": "The successor $x'$ equals $x+1$.",
            "reason": "the successor of a number equals the number plus 1"
          },
          {
            "line": "So the whole-number class of $x'$ equals the whole-number class of $x+1$.",
            "reason": "substituting the equality"
          },
          {
            "line": "The whole-number class of $x+1$ equals the whole-number class of $x$ plus the whole-number class of $1$.",
            "reason": "whole-number classes add the same way their natural numbers do"
          },
          {
            "line": "So the whole-number class of $x'$ equals the whole-number class of $x$ plus the whole-number class of $1$.",
            "reason": "by the transitivity of equality"
          }
        ]
      }
    },
    {
      "id": "t58-s2",
      "method": "induction",
      "statement": "Every natural number $x$ satisfies: the whole-number class of $x$ is at least the whole-number class of $1$.",
      "check": {
        "proof": [
          {
            "line": "The whole-number class of $1$ is at least the whole-number class of $1$.",
            "reason": "by the reflexivity of positive-rational-number equality, which gives the second alternative of at-least"
          },
          {
            "line": "Suppose that the whole-number class of $x$ is at least the whole-number class of $1$.",
            "reason": "the inductive hypothesis"
          },
          {
            "line": "The whole-number class of $x'$ equals the whole-number class of $x$ plus the whole-number class of $1$.",
            "reason": "the whole-number class of a successor equals its own class plus the whole-number class of $1$"
          },
          {
            "line": "The whole-number class of $x$ plus the whole-number class of $1$ is greater than the whole-number class of $x$.",
            "reason": "a sum of two positive rational numbers exceeds the first addend"
          },
          {
            "line": "So the whole-number class of $x'$ is greater than the whole-number class of $x$.",
            "reason": "substituting the equality into the inequality"
          },
          {
            "line": "So the whole-number class of $x'$ is at least the whole-number class of $1$.",
            "reason": "combining the inductive hypothesis with the previous line, by the transitivity of positive-rational-number order with one non-strict hypothesis"
          },
          {
            "line": "Therefore every natural number $x$ satisfies: the whole-number class of $x$ is at least the whole-number class of $1$.",
            "reason": "by the axiom of induction"
          }
        ]
      }
    },
    {
      "id": "t58-s3",
      "method": "proof of existence by construction",
      "statement": "For every positive rational number $X$, there exists a whole-number class $z$ such that $z>X$.",
      "check": {
        "proof": [
          {
            "line": "There exists a whole-number class $z$ such that $z\\times1>X$.",
            "reason": "the result that $zX>Y$ for some whole-number class $z$, with the class of $1$ for $X$ and $X$ for $Y$"
          },
          {
            "line": "Then $z\\times1=z$.",
            "reason": "the defining property $x\\times1=x$ of multiplication"
          },
          {
            "line": "So $z>X$.",
            "reason": "substituting the equality into the inequality"
          }
        ]
      }
    }
  ]
}
