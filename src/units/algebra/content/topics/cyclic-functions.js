export default {
  "number": 233,
  "title": "Cyclic functions",
  "section": 21,
  "book": {
    "title": "Intermediate Algebra",
    "pages": "621-627"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Find $f^{26}(x)$, where $f(x) = \\dfrac{4x - 19}{7x - 13}$.",
    "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
    "answer": "(13*x-19)/(7*x-4)",
    "solution": [
      "Find $f^{26}(x)$, where $f(x) = \\dfrac{4x - 19}{7x - 13}$.",
      "$f^2(x) = \\dfrac{4 \\cdot \\dfrac{4x - 19}{7x - 13} - 19}{7 \\cdot \\dfrac{4x - 19}{7x - 13} - 13}$",
      "$f^2(x) = \\dfrac{4(4x - 19) - 19(7x - 13)}{7(4x - 19) - 13(7x - 13)}$",
      "$f^2(x) = \\dfrac{-117x + 171}{-63x + 36}$",
      "$f^2(x) = \\dfrac{-13x + 19}{-7x + 4}$",
      "$f^3(x) = \\dfrac{4 \\cdot \\dfrac{-13x + 19}{-7x + 4} - 19}{7 \\cdot \\dfrac{-13x + 19}{-7x + 4} - 13}$",
      "$f^3(x) = \\dfrac{4(-13x + 19) - 19(-7x + 4)}{7(-13x + 19) - 13(-7x + 4)}$",
      "$f^3(x) = x$",
      "$f^{26}(x) = f^2(x)$",
      "$f^{26}(x) = \\dfrac{-13x + 19}{-7x + 4}$"
    ]
  },
  "ideas": [
    {
      "name": "Cyclic function of order k",
      "concrete": "For $g(x) = \\dfrac{5x + 7}{-7x + 3}$, putting the rule into itself gives $g(g(x)) = \\dfrac{3x - 7}{7x + 5}$, and putting it in once more gives $g(g(g(x))) = x$, while $g(x)$ and $g(g(x))$ are not $x$. So $g$ has order $3$: $g^4(x) = g(x)$, $g^5(x) = g^2(x)$, $g^6(x) = x$, and the inverse of $g$ is $g^2$. In an equation that holds for every input and holds $f(x)$ beside $f(g(x))$, putting $g(x)$ and then $g(g(x))$ in place of $x$ gives three equations in $f(x)$, $f(g(x))$ and $f(g(g(x)))$.",
      "general": "A function $f$ is **cyclic** when $f^k(x) = x$ for every $x$ in its domain, for some whole number $k$ from $1$ up; the least such $k$ is the **order** of $f$. For $f$ of order $k$ and every whole number $n$ from $1$ up, $f^{n + k}(x) = f^n(x)$, so $f^n(x)$ is $f^r(x)$ where $r$ is the remainder of $n$ on division by $k$ ($f^0(x)$ standing for $x$), and for $k$ from $2$ up the inverse of $f$ is $f^{k - 1}$. An equation that holds for every input and holds $f(x)$ beside $f(g(x))$, with $g$ of order $k$, gives $k$ equations in $f(x), f(g(x)), \\ldots, f(g^{k - 1}(x))$ when $x, g(x), \\ldots, g^{k - 1}(x)$ are put in place of $x$; elimination then leaves $f(x)$."
    }
  ],
  "kinds": [
    {
      "id": "t233-k1",
      "forms": [
        {
          "example": {
            "problem": "Find $f^{125}(x)$, where $f(x) = \\dfrac{-19x + 43}{-7x + 4}$.",
            "lines": [
              {
                "step": "Find $f^{125}(x)$, where $f(x) = \\dfrac{-19x + 43}{-7x + 4}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f^2(x) = \\dfrac{-19 \\cdot \\dfrac{-19x + 43}{-7x + 4} + 43}{-7 \\cdot \\dfrac{-19x + 43}{-7x + 4} + 4}$",
                "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^2(x)$ is $f(f(x))$, so the rule for $f(x)$ goes in each place where $x$ stands."
              },
              {
                "step": "$f^2(x) = \\dfrac{-19(-19x + 43) + 43(-7x + 4)}{-7(-19x + 43) + 4(-7x + 4)}$",
                "reason": "Complex fraction: the top and the bottom are each multiplied by $-7x + 4$."
              },
              {
                "step": "$f^2(x) = \\dfrac{60x - 645}{105x - 285}$",
                "reason": "Multiplying out and collecting like terms."
              },
              {
                "step": "$f^2(x) = \\dfrac{4x - 43}{7x - 19}$",
                "reason": "Cancelling a common factor: the top and the bottom share the factor $15$."
              },
              {
                "step": "$f^3(x) = \\dfrac{-19 \\cdot \\dfrac{4x - 43}{7x - 19} + 43}{-7 \\cdot \\dfrac{4x - 43}{7x - 19} + 4}$",
                "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^3(x)$ is $f(f^2(x))$, so the rule for $f^2(x)$ goes in each place where $x$ stands in the rule for $f$."
              },
              {
                "step": "$f^3(x) = \\dfrac{-19(4x - 43) + 43(7x - 19)}{-7(4x - 43) + 4(7x - 19)}$",
                "reason": "Complex fraction: the top and the bottom are each multiplied by $7x - 19$."
              },
              {
                "step": "$f^3(x) = x$",
                "reason": "Multiplying out and collecting like terms: the numbers on the top cancel, the terms in $x$ on the bottom cancel, and both are left as $225$ times $x$ and $225$, whose common factor $225$ cancels."
              },
              {
                "step": "$f^{125}(x) = f^2(x)$",
                "reason": "Cyclic function of order k: line 8 gives $f^3(x) = x$, while $f(x)$ and $f^2(x)$ are not $x$, so $f$ has order $3$; and $125 = 3 \\cdot 41 + 2$, so $f^{125}(x) = f^2(x)$."
              },
              {
                "step": "$f^{125}(x) = \\dfrac{4x - 43}{7x - 19}$",
                "reason": "Transitive property: line 5 gives $f^2(x)$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f^{50}(x)$, where $f(x) = \\dfrac{8x - 16}{19x - 20}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(20*x-16)/(19*x-8)",
              "lines": [
                {
                  "step": "Find $f^{50}(x)$, where $f(x) = \\dfrac{8x - 16}{19x - 20}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f^2(x) = \\dfrac{8 \\cdot \\dfrac{8x - 16}{19x - 20} - 16}{19 \\cdot \\dfrac{8x - 16}{19x - 20} - 20}$",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^2(x)$ is $f(f(x))$, so the rule for $f(x)$ goes in each place where $x$ stands."
                },
                {
                  "step": "$f^2(x) = \\dfrac{8(8x - 16) - 16(19x - 20)}{19(8x - 16) - 20(19x - 20)}$",
                  "reason": "Complex fraction: the top and the bottom are each multiplied by $19x - 20$."
                },
                {
                  "step": "$f^2(x) = \\dfrac{-240x + 192}{-228x + 96}$",
                  "reason": "Multiplying out and collecting like terms."
                },
                {
                  "step": "$f^2(x) = \\dfrac{-20x + 16}{-19x + 8}$",
                  "reason": "Cancelling a common factor: the top and the bottom share the factor $12$."
                },
                {
                  "step": "$f^3(x) = \\dfrac{8 \\cdot \\dfrac{-20x + 16}{-19x + 8} - 16}{19 \\cdot \\dfrac{-20x + 16}{-19x + 8} - 20}$",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^3(x)$ is $f(f^2(x))$, so the rule for $f^2(x)$ goes in each place where $x$ stands in the rule for $f$."
                },
                {
                  "step": "$f^3(x) = \\dfrac{8(-20x + 16) - 16(-19x + 8)}{19(-20x + 16) - 20(-19x + 8)}$",
                  "reason": "Complex fraction: the top and the bottom are each multiplied by $-19x + 8$."
                },
                {
                  "step": "$f^3(x) = x$",
                  "reason": "Multiplying out and collecting like terms: the numbers on the top cancel, the terms in $x$ on the bottom cancel, and both are left as $144$ times $x$ and $144$, whose common factor $144$ cancels."
                },
                {
                  "step": "$f^{50}(x) = f^2(x)$",
                  "reason": "Cyclic function of order k: line 8 gives $f^3(x) = x$, while $f(x)$ and $f^2(x)$ are not $x$, so $f$ has order $3$; and $50 = 3 \\cdot 16 + 2$, so $f^{50}(x) = f^2(x)$."
                },
                {
                  "step": "$f^{50}(x) = \\dfrac{-20x + 16}{-19x + 8}$",
                  "reason": "Transitive property: line 5 gives $f^2(x)$."
                }
              ]
            },
            {
              "prompt": "Find $f^{146}(x)$, where $f(x) = \\dfrac{-6x + 9}{-28x - 12}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(-12*x-9)/(28*x-6)",
              "lines": [
                {
                  "step": "Find $f^{146}(x)$, where $f(x) = \\dfrac{-6x + 9}{-28x - 12}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f^2(x) = \\dfrac{-6 \\cdot \\dfrac{-6x + 9}{-28x - 12} + 9}{-28 \\cdot \\dfrac{-6x + 9}{-28x - 12} - 12}$",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^2(x)$ is $f(f(x))$, so the rule for $f(x)$ goes in each place where $x$ stands."
                },
                {
                  "step": "$f^2(x) = \\dfrac{-6(-6x + 9) + 9(-28x - 12)}{-28(-6x + 9) - 12(-28x - 12)}$",
                  "reason": "Complex fraction: the top and the bottom are each multiplied by $-28x - 12$."
                },
                {
                  "step": "$f^2(x) = \\dfrac{-216x - 162}{504x - 108}$",
                  "reason": "Multiplying out and collecting like terms."
                },
                {
                  "step": "$f^2(x) = \\dfrac{-12x - 9}{28x - 6}$",
                  "reason": "Cancelling a common factor: the top and the bottom share the factor $18$."
                },
                {
                  "step": "$f^3(x) = \\dfrac{-6 \\cdot \\dfrac{-12x - 9}{28x - 6} + 9}{-28 \\cdot \\dfrac{-12x - 9}{28x - 6} - 12}$",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^3(x)$ is $f(f^2(x))$, so the rule for $f^2(x)$ goes in each place where $x$ stands in the rule for $f$."
                },
                {
                  "step": "$f^3(x) = \\dfrac{-6(-12x - 9) + 9(28x - 6)}{-28(-12x - 9) - 12(28x - 6)}$",
                  "reason": "Complex fraction: the top and the bottom are each multiplied by $28x - 6$."
                },
                {
                  "step": "$f^3(x) = x$",
                  "reason": "Multiplying out and collecting like terms: the numbers on the top cancel, the terms in $x$ on the bottom cancel, and both are left as $324$ times $x$ and $324$, whose common factor $324$ cancels."
                },
                {
                  "step": "$f^{146}(x) = f^2(x)$",
                  "reason": "Cyclic function of order k: line 8 gives $f^3(x) = x$, while $f(x)$ and $f^2(x)$ are not $x$, so $f$ has order $3$; and $146 = 3 \\cdot 48 + 2$, so $f^{146}(x) = f^2(x)$."
                },
                {
                  "step": "$f^{146}(x) = \\dfrac{-12x - 9}{28x - 6}$",
                  "reason": "Transitive property: line 5 gives $f^2(x)$."
                }
              ]
            },
            {
              "prompt": "Find $f^{86}(x)$, where $f(x) = \\dfrac{-13x - 7}{31x - 3}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(3*x-7)/(31*x+13)",
              "lines": [
                {
                  "step": "Find $f^{86}(x)$, where $f(x) = \\dfrac{-13x - 7}{31x - 3}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f^2(x) = \\dfrac{-13 \\cdot \\dfrac{-13x - 7}{31x - 3} - 7}{31 \\cdot \\dfrac{-13x - 7}{31x - 3} - 3}$",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^2(x)$ is $f(f(x))$, so the rule for $f(x)$ goes in each place where $x$ stands."
                },
                {
                  "step": "$f^2(x) = \\dfrac{-13(-13x - 7) - 7(31x - 3)}{31(-13x - 7) - 3(31x - 3)}$",
                  "reason": "Complex fraction: the top and the bottom are each multiplied by $31x - 3$."
                },
                {
                  "step": "$f^2(x) = \\dfrac{-48x + 112}{-496x - 208}$",
                  "reason": "Multiplying out and collecting like terms."
                },
                {
                  "step": "$f^2(x) = \\dfrac{-3x + 7}{-31x - 13}$",
                  "reason": "Cancelling a common factor: the top and the bottom share the factor $16$."
                },
                {
                  "step": "$f^3(x) = \\dfrac{-13 \\cdot \\dfrac{-3x + 7}{-31x - 13} - 7}{31 \\cdot \\dfrac{-3x + 7}{-31x - 13} - 3}$",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^3(x)$ is $f(f^2(x))$, so the rule for $f^2(x)$ goes in each place where $x$ stands in the rule for $f$."
                },
                {
                  "step": "$f^3(x) = \\dfrac{-13(-3x + 7) - 7(-31x - 13)}{31(-3x + 7) - 3(-31x - 13)}$",
                  "reason": "Complex fraction: the top and the bottom are each multiplied by $-31x - 13$."
                },
                {
                  "step": "$f^3(x) = x$",
                  "reason": "Multiplying out and collecting like terms: the numbers on the top cancel, the terms in $x$ on the bottom cancel, and both are left as $256$ times $x$ and $256$, whose common factor $256$ cancels."
                },
                {
                  "step": "$f^{86}(x) = f^2(x)$",
                  "reason": "Cyclic function of order k: line 8 gives $f^3(x) = x$, while $f(x)$ and $f^2(x)$ are not $x$, so $f$ has order $3$; and $86 = 3 \\cdot 28 + 2$, so $f^{86}(x) = f^2(x)$."
                },
                {
                  "step": "$f^{86}(x) = \\dfrac{-3x + 7}{-31x - 13}$",
                  "reason": "Transitive property: line 5 gives $f^2(x)$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $f^{-1}(x)$, where $f(x) = \\dfrac{8x + 21}{-13x + 11}$.",
            "lines": [
              {
                "step": "Find $f^{-1}(x)$, where $f(x) = \\dfrac{8x + 21}{-13x + 11}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f^2(x) = \\dfrac{8 \\cdot \\dfrac{8x + 21}{-13x + 11} + 21}{-13 \\cdot \\dfrac{8x + 21}{-13x + 11} + 11}$",
                "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^2(x)$ is $f(f(x))$, so the rule for $f(x)$ goes in each place where $x$ stands."
              },
              {
                "step": "$f^2(x) = \\dfrac{8(8x + 21) + 21(-13x + 11)}{-13(8x + 21) + 11(-13x + 11)}$",
                "reason": "Complex fraction: the top and the bottom are each multiplied by $-13x + 11$."
              },
              {
                "step": "$f^2(x) = \\dfrac{-209x + 399}{-247x - 152}$",
                "reason": "Multiplying out and collecting like terms."
              },
              {
                "step": "$f^2(x) = \\dfrac{11x - 21}{13x + 8}$",
                "reason": "Cancelling a common factor: the top and the bottom share the factor $-19$."
              },
              {
                "step": "$f^3(x) = \\dfrac{8 \\cdot \\dfrac{11x - 21}{13x + 8} + 21}{-13 \\cdot \\dfrac{11x - 21}{13x + 8} + 11}$",
                "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^3(x)$ is $f(f^2(x))$, so the rule for $f^2(x)$ goes in each place where $x$ stands in the rule for $f$."
              },
              {
                "step": "$f^3(x) = \\dfrac{8(11x - 21) + 21(13x + 8)}{-13(11x - 21) + 11(13x + 8)}$",
                "reason": "Complex fraction: the top and the bottom are each multiplied by $13x + 8$."
              },
              {
                "step": "$f^3(x) = x$",
                "reason": "Multiplying out and collecting like terms: the numbers on the top cancel, the terms in $x$ on the bottom cancel, and both are left as $361$ times $x$ and $361$, whose common factor $361$ cancels."
              },
              {
                "step": "Both $f(f^2(x)) = x$ and $f^2(f(x)) = x$.",
                "reason": "Cyclic function of order k: line 8 gives $f$ order $3$, and $f^3(x)$ is both $f(f^2(x))$ and $f^2(f(x))$."
              },
              {
                "step": "$f^{-1}(x) = f^2(x)$",
                "reason": "Inverse function: $f^2$ undoes $f$, and $f$ undoes $f^2$."
              },
              {
                "step": "$f^{-1}(x) = \\dfrac{11x - 21}{13x + 8}$",
                "reason": "Transitive property: line 5 gives $f^2(x)$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f^{-1}(x)$, where $f(x) = \\dfrac{-9x + 31}{-13x - 14}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(-14*x-31)/(13*x-9)",
              "lines": [
                {
                  "step": "Find $f^{-1}(x)$, where $f(x) = \\dfrac{-9x + 31}{-13x - 14}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f^2(x) = \\dfrac{-9 \\cdot \\dfrac{-9x + 31}{-13x - 14} + 31}{-13 \\cdot \\dfrac{-9x + 31}{-13x - 14} - 14}$",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^2(x)$ is $f(f(x))$, so the rule for $f(x)$ goes in each place where $x$ stands."
                },
                {
                  "step": "$f^2(x) = \\dfrac{-9(-9x + 31) + 31(-13x - 14)}{-13(-9x + 31) - 14(-13x - 14)}$",
                  "reason": "Complex fraction: the top and the bottom are each multiplied by $-13x - 14$."
                },
                {
                  "step": "$f^2(x) = \\dfrac{-322x - 713}{299x - 207}$",
                  "reason": "Multiplying out and collecting like terms."
                },
                {
                  "step": "$f^2(x) = \\dfrac{-14x - 31}{13x - 9}$",
                  "reason": "Cancelling a common factor: the top and the bottom share the factor $23$."
                },
                {
                  "step": "$f^3(x) = \\dfrac{-9 \\cdot \\dfrac{-14x - 31}{13x - 9} + 31}{-13 \\cdot \\dfrac{-14x - 31}{13x - 9} - 14}$",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^3(x)$ is $f(f^2(x))$, so the rule for $f^2(x)$ goes in each place where $x$ stands in the rule for $f$."
                },
                {
                  "step": "$f^3(x) = \\dfrac{-9(-14x - 31) + 31(13x - 9)}{-13(-14x - 31) - 14(13x - 9)}$",
                  "reason": "Complex fraction: the top and the bottom are each multiplied by $13x - 9$."
                },
                {
                  "step": "$f^3(x) = x$",
                  "reason": "Multiplying out and collecting like terms: the numbers on the top cancel, the terms in $x$ on the bottom cancel, and both are left as $529$ times $x$ and $529$, whose common factor $529$ cancels."
                },
                {
                  "step": "Both $f(f^2(x)) = x$ and $f^2(f(x)) = x$.",
                  "reason": "Cyclic function of order k: line 8 gives $f$ order $3$, and $f^3(x)$ is both $f(f^2(x))$ and $f^2(f(x))$."
                },
                {
                  "step": "$f^{-1}(x) = f^2(x)$",
                  "reason": "Inverse function: $f^2$ undoes $f$, and $f$ undoes $f^2$."
                },
                {
                  "step": "$f^{-1}(x) = \\dfrac{-14x - 31}{13x - 9}$",
                  "reason": "Transitive property: line 5 gives $f^2(x)$."
                }
              ]
            },
            {
              "prompt": "Find $f^{-1}(x)$, where $f(x) = \\dfrac{-17x + 37}{-7x + 15}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(15*x-37)/(7*x-17)",
              "lines": [
                {
                  "step": "Find $f^{-1}(x)$, where $f(x) = \\dfrac{-17x + 37}{-7x + 15}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f^2(x) = \\dfrac{-17 \\cdot \\dfrac{-17x + 37}{-7x + 15} + 37}{-7 \\cdot \\dfrac{-17x + 37}{-7x + 15} + 15}$",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^2(x)$ is $f(f(x))$, so the rule for $f(x)$ goes in each place where $x$ stands."
                },
                {
                  "step": "$f^2(x) = \\dfrac{-17(-17x + 37) + 37(-7x + 15)}{-7(-17x + 37) + 15(-7x + 15)}$",
                  "reason": "Complex fraction: the top and the bottom are each multiplied by $-7x + 15$."
                },
                {
                  "step": "$f^2(x) = \\dfrac{30x - 74}{14x - 34}$",
                  "reason": "Multiplying out and collecting like terms."
                },
                {
                  "step": "$f^2(x) = \\dfrac{15x - 37}{7x - 17}$",
                  "reason": "Cancelling a common factor: the top and the bottom share the factor $2$."
                },
                {
                  "step": "$f^3(x) = \\dfrac{-17 \\cdot \\dfrac{15x - 37}{7x - 17} + 37}{-7 \\cdot \\dfrac{15x - 37}{7x - 17} + 15}$",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^3(x)$ is $f(f^2(x))$, so the rule for $f^2(x)$ goes in each place where $x$ stands in the rule for $f$."
                },
                {
                  "step": "$f^3(x) = \\dfrac{-17(15x - 37) + 37(7x - 17)}{-7(15x - 37) + 15(7x - 17)}$",
                  "reason": "Complex fraction: the top and the bottom are each multiplied by $7x - 17$."
                },
                {
                  "step": "$f^3(x) = x$",
                  "reason": "Multiplying out and collecting like terms: the numbers on the top cancel, the terms in $x$ on the bottom cancel, and both are left as $4$ times $x$ and $4$, whose common factor $4$ cancels."
                },
                {
                  "step": "Both $f(f^2(x)) = x$ and $f^2(f(x)) = x$.",
                  "reason": "Cyclic function of order k: line 8 gives $f$ order $3$, and $f^3(x)$ is both $f(f^2(x))$ and $f^2(f(x))$."
                },
                {
                  "step": "$f^{-1}(x) = f^2(x)$",
                  "reason": "Inverse function: $f^2$ undoes $f$, and $f$ undoes $f^2$."
                },
                {
                  "step": "$f^{-1}(x) = \\dfrac{15x - 37}{7x - 17}$",
                  "reason": "Transitive property: line 5 gives $f^2(x)$."
                }
              ]
            },
            {
              "prompt": "Find $f^{-1}(x)$, where $f(x) = \\dfrac{-8x + 4}{-13x + 6}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(6*x-4)/(13*x-8)",
              "lines": [
                {
                  "step": "Find $f^{-1}(x)$, where $f(x) = \\dfrac{-8x + 4}{-13x + 6}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f^2(x) = \\dfrac{-8 \\cdot \\dfrac{-8x + 4}{-13x + 6} + 4}{-13 \\cdot \\dfrac{-8x + 4}{-13x + 6} + 6}$",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^2(x)$ is $f(f(x))$, so the rule for $f(x)$ goes in each place where $x$ stands."
                },
                {
                  "step": "$f^2(x) = \\dfrac{-8(-8x + 4) + 4(-13x + 6)}{-13(-8x + 4) + 6(-13x + 6)}$",
                  "reason": "Complex fraction: the top and the bottom are each multiplied by $-13x + 6$."
                },
                {
                  "step": "$f^2(x) = \\dfrac{12x - 8}{26x - 16}$",
                  "reason": "Multiplying out and collecting like terms."
                },
                {
                  "step": "$f^2(x) = \\dfrac{6x - 4}{13x - 8}$",
                  "reason": "Cancelling a common factor: the top and the bottom share the factor $2$."
                },
                {
                  "step": "$f^3(x) = \\dfrac{-8 \\cdot \\dfrac{6x - 4}{13x - 8} + 4}{-13 \\cdot \\dfrac{6x - 4}{13x - 8} + 6}$",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^3(x)$ is $f(f^2(x))$, so the rule for $f^2(x)$ goes in each place where $x$ stands in the rule for $f$."
                },
                {
                  "step": "$f^3(x) = \\dfrac{-8(6x - 4) + 4(13x - 8)}{-13(6x - 4) + 6(13x - 8)}$",
                  "reason": "Complex fraction: the top and the bottom are each multiplied by $13x - 8$."
                },
                {
                  "step": "$f^3(x) = x$",
                  "reason": "Multiplying out and collecting like terms: the numbers on the top cancel, the terms in $x$ on the bottom cancel, and both are left as $4$ times $x$ and $4$, whose common factor $4$ cancels."
                },
                {
                  "step": "Both $f(f^2(x)) = x$ and $f^2(f(x)) = x$.",
                  "reason": "Cyclic function of order k: line 8 gives $f$ order $3$, and $f^3(x)$ is both $f(f^2(x))$ and $f^2(f(x))$."
                },
                {
                  "step": "$f^{-1}(x) = f^2(x)$",
                  "reason": "Inverse function: $f^2$ undoes $f$, and $f$ undoes $f^2$."
                },
                {
                  "step": "$f^{-1}(x) = \\dfrac{6x - 4}{13x - 8}$",
                  "reason": "Transitive property: line 5 gives $f^2(x)$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $f^{119}(x)$, where $f(x) = \\dfrac{-6x + 20}{-9x + 18}$.",
            "lines": [
              {
                "step": "Find $f^{119}(x)$, where $f(x) = \\dfrac{-6x + 20}{-9x + 18}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$f^2(x) = \\dfrac{-6 \\cdot \\dfrac{-6x + 20}{-9x + 18} + 20}{-9 \\cdot \\dfrac{-6x + 20}{-9x + 18} + 18}$",
                "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^2(x)$ is $f(f(x))$, so the rule for $f(x)$ goes in each place where $x$ stands."
              },
              {
                "step": "$f^2(x) = \\dfrac{-6(-6x + 20) + 20(-9x + 18)}{-9(-6x + 20) + 18(-9x + 18)}$",
                "reason": "Complex fraction: the top and the bottom are each multiplied by $-9x + 18$."
              },
              {
                "step": "$f^2(x) = \\dfrac{-144x + 240}{-108x + 144}$",
                "reason": "Multiplying out and collecting like terms."
              },
              {
                "step": "$f^2(x) = \\dfrac{-12x + 20}{-9x + 12}$",
                "reason": "Cancelling a common factor: the top and the bottom share the factor $12$."
              },
              {
                "step": "$f^3(x) = \\dfrac{-6 \\cdot \\dfrac{-12x + 20}{-9x + 12} + 20}{-9 \\cdot \\dfrac{-12x + 20}{-9x + 12} + 18}$",
                "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^3(x)$ is $f(f^2(x))$, so the rule for $f^2(x)$ goes in each place where $x$ stands in the rule for $f$."
              },
              {
                "step": "$f^3(x) = \\dfrac{-6(-12x + 20) + 20(-9x + 12)}{-9(-12x + 20) + 18(-9x + 12)}$",
                "reason": "Complex fraction: the top and the bottom are each multiplied by $-9x + 12$."
              },
              {
                "step": "$f^3(x) = \\dfrac{-108x + 120}{-54x + 36}$",
                "reason": "Multiplying out and collecting like terms."
              },
              {
                "step": "$f^3(x) = \\dfrac{-18x + 20}{-9x + 6}$",
                "reason": "Cancelling a common factor: the top and the bottom share the factor $6$."
              },
              {
                "step": "$f^4(x) = \\dfrac{-6 \\cdot \\dfrac{-18x + 20}{-9x + 6} + 20}{-9 \\cdot \\dfrac{-18x + 20}{-9x + 6} + 18}$",
                "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^4(x)$ is $f(f^3(x))$, so the rule for $f^3(x)$ goes in each place where $x$ stands in the rule for $f$."
              },
              {
                "step": "$f^4(x) = \\dfrac{-6(-18x + 20) + 20(-9x + 6)}{-9(-18x + 20) + 18(-9x + 6)}$",
                "reason": "Complex fraction: the top and the bottom are each multiplied by $-9x + 6$."
              },
              {
                "step": "$f^4(x) = x$",
                "reason": "Multiplying out and collecting like terms: the numbers on the top cancel, the terms in $x$ on the bottom cancel, and both are left as $-72$ times $x$ and $-72$, whose common factor $-72$ cancels."
              },
              {
                "step": "$f^{119}(x) = f^3(x)$",
                "reason": "Cyclic function of order k: line 12 gives $f^4(x) = x$, while $f(x)$, $f^2(x)$ and $f^3(x)$ are not $x$, so $f$ has order $4$; and $119 = 4 \\cdot 29 + 3$, so $f^{119}(x) = f^3(x)$."
              },
              {
                "step": "$f^{119}(x) = \\dfrac{-18x + 20}{-9x + 6}$",
                "reason": "Transitive property: line 9 gives $f^3(x)$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f^{146}(x)$, where $f(x) = \\dfrac{-9x + 17}{-13x + 19}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(14*x-17)/(13*x-14)",
              "lines": [
                {
                  "step": "Find $f^{146}(x)$, where $f(x) = \\dfrac{-9x + 17}{-13x + 19}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f^2(x) = \\dfrac{-9 \\cdot \\dfrac{-9x + 17}{-13x + 19} + 17}{-13 \\cdot \\dfrac{-9x + 17}{-13x + 19} + 19}$",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^2(x)$ is $f(f(x))$, so the rule for $f(x)$ goes in each place where $x$ stands."
                },
                {
                  "step": "$f^2(x) = \\dfrac{-9(-9x + 17) + 17(-13x + 19)}{-13(-9x + 17) + 19(-13x + 19)}$",
                  "reason": "Complex fraction: the top and the bottom are each multiplied by $-13x + 19$."
                },
                {
                  "step": "$f^2(x) = \\dfrac{-140x + 170}{-130x + 140}$",
                  "reason": "Multiplying out and collecting like terms."
                },
                {
                  "step": "$f^2(x) = \\dfrac{-14x + 17}{-13x + 14}$",
                  "reason": "Cancelling a common factor: the top and the bottom share the factor $10$."
                },
                {
                  "step": "$f^3(x) = \\dfrac{-9 \\cdot \\dfrac{-14x + 17}{-13x + 14} + 17}{-13 \\cdot \\dfrac{-14x + 17}{-13x + 14} + 19}$",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^3(x)$ is $f(f^2(x))$, so the rule for $f^2(x)$ goes in each place where $x$ stands in the rule for $f$."
                },
                {
                  "step": "$f^3(x) = \\dfrac{-9(-14x + 17) + 17(-13x + 14)}{-13(-14x + 17) + 19(-13x + 14)}$",
                  "reason": "Complex fraction: the top and the bottom are each multiplied by $-13x + 14$."
                },
                {
                  "step": "$f^3(x) = \\dfrac{-95x + 85}{-65x + 45}$",
                  "reason": "Multiplying out and collecting like terms."
                },
                {
                  "step": "$f^3(x) = \\dfrac{-19x + 17}{-13x + 9}$",
                  "reason": "Cancelling a common factor: the top and the bottom share the factor $5$."
                },
                {
                  "step": "$f^4(x) = \\dfrac{-9 \\cdot \\dfrac{-19x + 17}{-13x + 9} + 17}{-13 \\cdot \\dfrac{-19x + 17}{-13x + 9} + 19}$",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^4(x)$ is $f(f^3(x))$, so the rule for $f^3(x)$ goes in each place where $x$ stands in the rule for $f$."
                },
                {
                  "step": "$f^4(x) = \\dfrac{-9(-19x + 17) + 17(-13x + 9)}{-13(-19x + 17) + 19(-13x + 9)}$",
                  "reason": "Complex fraction: the top and the bottom are each multiplied by $-13x + 9$."
                },
                {
                  "step": "$f^4(x) = x$",
                  "reason": "Multiplying out and collecting like terms: the numbers on the top cancel, the terms in $x$ on the bottom cancel, and both are left as $-50$ times $x$ and $-50$, whose common factor $-50$ cancels."
                },
                {
                  "step": "$f^{146}(x) = f^2(x)$",
                  "reason": "Cyclic function of order k: line 12 gives $f^4(x) = x$, while $f(x)$, $f^2(x)$ and $f^3(x)$ are not $x$, so $f$ has order $4$; and $146 = 4 \\cdot 36 + 2$, so $f^{146}(x) = f^2(x)$."
                },
                {
                  "step": "$f^{146}(x) = \\dfrac{-14x + 17}{-13x + 14}$",
                  "reason": "Transitive property: line 5 gives $f^2(x)$."
                }
              ]
            },
            {
              "prompt": "Find $f^{143}(x)$, where $f(x) = \\dfrac{7x + 5}{-41x - 19}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(-19*x-5)/(41*x+7)",
              "lines": [
                {
                  "step": "Find $f^{143}(x)$, where $f(x) = \\dfrac{7x + 5}{-41x - 19}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f^2(x) = \\dfrac{7 \\cdot \\dfrac{7x + 5}{-41x - 19} + 5}{-41 \\cdot \\dfrac{7x + 5}{-41x - 19} - 19}$",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^2(x)$ is $f(f(x))$, so the rule for $f(x)$ goes in each place where $x$ stands."
                },
                {
                  "step": "$f^2(x) = \\dfrac{7(7x + 5) + 5(-41x - 19)}{-41(7x + 5) - 19(-41x - 19)}$",
                  "reason": "Complex fraction: the top and the bottom are each multiplied by $-41x - 19$."
                },
                {
                  "step": "$f^2(x) = \\dfrac{-156x - 60}{492x + 156}$",
                  "reason": "Multiplying out and collecting like terms."
                },
                {
                  "step": "$f^2(x) = \\dfrac{13x + 5}{-41x - 13}$",
                  "reason": "Cancelling a common factor: the top and the bottom share the factor $-12$."
                },
                {
                  "step": "$f^3(x) = \\dfrac{7 \\cdot \\dfrac{13x + 5}{-41x - 13} + 5}{-41 \\cdot \\dfrac{13x + 5}{-41x - 13} - 19}$",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^3(x)$ is $f(f^2(x))$, so the rule for $f^2(x)$ goes in each place where $x$ stands in the rule for $f$."
                },
                {
                  "step": "$f^3(x) = \\dfrac{7(13x + 5) + 5(-41x - 13)}{-41(13x + 5) - 19(-41x - 13)}$",
                  "reason": "Complex fraction: the top and the bottom are each multiplied by $-41x - 13$."
                },
                {
                  "step": "$f^3(x) = \\dfrac{-114x - 30}{246x + 42}$",
                  "reason": "Multiplying out and collecting like terms."
                },
                {
                  "step": "$f^3(x) = \\dfrac{19x + 5}{-41x - 7}$",
                  "reason": "Cancelling a common factor: the top and the bottom share the factor $-6$."
                },
                {
                  "step": "$f^4(x) = \\dfrac{7 \\cdot \\dfrac{19x + 5}{-41x - 7} + 5}{-41 \\cdot \\dfrac{19x + 5}{-41x - 7} - 19}$",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^4(x)$ is $f(f^3(x))$, so the rule for $f^3(x)$ goes in each place where $x$ stands in the rule for $f$."
                },
                {
                  "step": "$f^4(x) = \\dfrac{7(19x + 5) + 5(-41x - 7)}{-41(19x + 5) - 19(-41x - 7)}$",
                  "reason": "Complex fraction: the top and the bottom are each multiplied by $-41x - 7$."
                },
                {
                  "step": "$f^4(x) = x$",
                  "reason": "Multiplying out and collecting like terms: the numbers on the top cancel, the terms in $x$ on the bottom cancel, and both are left as $-72$ times $x$ and $-72$, whose common factor $-72$ cancels."
                },
                {
                  "step": "$f^{143}(x) = f^3(x)$",
                  "reason": "Cyclic function of order k: line 12 gives $f^4(x) = x$, while $f(x)$, $f^2(x)$ and $f^3(x)$ are not $x$, so $f$ has order $4$; and $143 = 4 \\cdot 35 + 3$, so $f^{143}(x) = f^3(x)$."
                },
                {
                  "step": "$f^{143}(x) = \\dfrac{19x + 5}{-41x - 7}$",
                  "reason": "Transitive property: line 9 gives $f^3(x)$."
                }
              ]
            },
            {
              "prompt": "Find $f^{110}(x)$, where $f(x) = \\dfrac{-12x - 8}{25x - 16}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(2*x-8)/(25*x-2)",
              "lines": [
                {
                  "step": "Find $f^{110}(x)$, where $f(x) = \\dfrac{-12x - 8}{25x - 16}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$f^2(x) = \\dfrac{-12 \\cdot \\dfrac{-12x - 8}{25x - 16} - 8}{25 \\cdot \\dfrac{-12x - 8}{25x - 16} - 16}$",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^2(x)$ is $f(f(x))$, so the rule for $f(x)$ goes in each place where $x$ stands."
                },
                {
                  "step": "$f^2(x) = \\dfrac{-12(-12x - 8) - 8(25x - 16)}{25(-12x - 8) - 16(25x - 16)}$",
                  "reason": "Complex fraction: the top and the bottom are each multiplied by $25x - 16$."
                },
                {
                  "step": "$f^2(x) = \\dfrac{-56x + 224}{-700x + 56}$",
                  "reason": "Multiplying out and collecting like terms."
                },
                {
                  "step": "$f^2(x) = \\dfrac{2x - 8}{25x - 2}$",
                  "reason": "Cancelling a common factor: the top and the bottom share the factor $-28$."
                },
                {
                  "step": "$f^3(x) = \\dfrac{-12 \\cdot \\dfrac{2x - 8}{25x - 2} - 8}{25 \\cdot \\dfrac{2x - 8}{25x - 2} - 16}$",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^3(x)$ is $f(f^2(x))$, so the rule for $f^2(x)$ goes in each place where $x$ stands in the rule for $f$."
                },
                {
                  "step": "$f^3(x) = \\dfrac{-12(2x - 8) - 8(25x - 2)}{25(2x - 8) - 16(25x - 2)}$",
                  "reason": "Complex fraction: the top and the bottom are each multiplied by $25x - 2$."
                },
                {
                  "step": "$f^3(x) = \\dfrac{-224x + 112}{-350x - 168}$",
                  "reason": "Multiplying out and collecting like terms."
                },
                {
                  "step": "$f^3(x) = \\dfrac{16x - 8}{25x + 12}$",
                  "reason": "Cancelling a common factor: the top and the bottom share the factor $-14$."
                },
                {
                  "step": "$f^4(x) = \\dfrac{-12 \\cdot \\dfrac{16x - 8}{25x + 12} - 8}{25 \\cdot \\dfrac{16x - 8}{25x + 12} - 16}$",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^4(x)$ is $f(f^3(x))$, so the rule for $f^3(x)$ goes in each place where $x$ stands in the rule for $f$."
                },
                {
                  "step": "$f^4(x) = \\dfrac{-12(16x - 8) - 8(25x + 12)}{25(16x - 8) - 16(25x + 12)}$",
                  "reason": "Complex fraction: the top and the bottom are each multiplied by $25x + 12$."
                },
                {
                  "step": "$f^4(x) = x$",
                  "reason": "Multiplying out and collecting like terms: the numbers on the top cancel, the terms in $x$ on the bottom cancel, and both are left as $-392$ times $x$ and $-392$, whose common factor $-392$ cancels."
                },
                {
                  "step": "$f^{110}(x) = f^2(x)$",
                  "reason": "Cyclic function of order k: line 12 gives $f^4(x) = x$, while $f(x)$, $f^2(x)$ and $f^3(x)$ are not $x$, so $f$ has order $4$; and $110 = 4 \\cdot 27 + 2$, so $f^{110}(x) = f^2(x)$."
                },
                {
                  "step": "$f^{110}(x) = \\dfrac{2x - 8}{25x - 2}$",
                  "reason": "Transitive property: line 5 gives $f^2(x)$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t233-k2",
      "forms": [
        {
          "example": {
            "problem": "Find $f(x)$, where $f(x) + 2f\\left(\\dfrac{-10x - 7}{12x + 2}\\right) = 2x - 4$ for every $x$ except $x = -\\dfrac{5}{6}$ and $x = -\\dfrac{1}{6}$.",
            "lines": [
              {
                "step": "Find $f(x)$, where $f(x) + 2f\\left(\\dfrac{-10x - 7}{12x + 2}\\right) = 2x - 4$ for every $x$ except $x = -\\dfrac{5}{6}$ and $x = -\\dfrac{1}{6}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{-10 \\cdot \\dfrac{-10x - 7}{12x + 2} - 7}{12 \\cdot \\dfrac{-10x - 7}{12x + 2} + 2} = \\dfrac{2x + 7}{-12x - 10}$",
                "reason": "Composition $f(g(x))$ and complex fraction: the rule is put into itself, the top and the bottom are each multiplied by $12x + 2$, and the common factor $8$ is cancelled."
              },
              {
                "step": "$\\dfrac{-10 \\cdot \\dfrac{2x + 7}{-12x - 10} - 7}{12 \\cdot \\dfrac{2x + 7}{-12x - 10} + 2} = x$",
                "reason": "Cyclic function of order k: the rule applied to the result of line 2 gives back $x$, so the rule has order $3$."
              },
              {
                "step": "$f\\left(\\dfrac{-10x - 7}{12x + 2}\\right) + 2f\\left(\\dfrac{2x + 7}{-12x - 10}\\right) = 2 \\cdot \\dfrac{-10x - 7}{12x + 2} - 4$",
                "reason": "An equation that holds for every input: $\\dfrac{-10x - 7}{12x + 2}$ is put in place of $x$, and line 2 gives the rule applied twice."
              },
              {
                "step": "$f\\left(\\dfrac{2x + 7}{-12x - 10}\\right) + 2f(x) = 2 \\cdot \\dfrac{2x + 7}{-12x - 10} - 4$",
                "reason": "An equation that holds for every input: $\\dfrac{2x + 7}{-12x - 10}$ is put in place of $x$, and line 3 turns the rule applied three times into $x$."
              },
              {
                "step": "$9f(x) = 2x - 4 - 2(2 \\cdot \\dfrac{-10x - 7}{12x + 2} - 4) + 4(2 \\cdot \\dfrac{2x + 7}{-12x - 10} - 4)$",
                "reason": "Elimination: $-2$ times line 4 and $4$ times line 5 are added to the equation as given, so the terms in $f\\left(\\dfrac{-10x - 7}{12x + 2}\\right)$ and $f\\left(\\dfrac{2x + 7}{-12x - 10}\\right)$ cancel."
              },
              {
                "step": "$9f(x) = \\dfrac{72x^3 - 288x^2 - 414x - 18}{36x^2 + 36x + 5}$",
                "reason": "Single fraction: the fractions are written over their simplest common denominator and collected."
              },
              {
                "step": "$f(x) = \\dfrac{8x^3 - 32x^2 - 46x - 2}{36x^2 + 36x + 5}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $9$, and the fraction is put in lowest terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f(x)$, where $f(x) + 2f\\left(\\dfrac{9x + 9}{-7x - 3}\\right) = -6x + 3$ for every $x$ except $x = -\\dfrac{9}{7}$ and $x = -\\dfrac{3}{7}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(-98*x^3-105*x^2+198*x-27)/(147*x^2+252*x+81)",
              "lines": [
                {
                  "step": "Find $f(x)$, where $f(x) + 2f\\left(\\dfrac{9x + 9}{-7x - 3}\\right) = -6x + 3$ for every $x$ except $x = -\\dfrac{9}{7}$ and $x = -\\dfrac{3}{7}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{9 \\cdot \\dfrac{9x + 9}{-7x - 3} + 9}{-7 \\cdot \\dfrac{9x + 9}{-7x - 3} - 3} = \\dfrac{-3x - 9}{7x + 9}$",
                  "reason": "Composition $f(g(x))$ and complex fraction: the rule is put into itself, the top and the bottom are each multiplied by $-7x - 3$, and the common factor $-6$ is cancelled."
                },
                {
                  "step": "$\\dfrac{9 \\cdot \\dfrac{-3x - 9}{7x + 9} + 9}{-7 \\cdot \\dfrac{-3x - 9}{7x + 9} - 3} = x$",
                  "reason": "Cyclic function of order k: the rule applied to the result of line 2 gives back $x$, so the rule has order $3$."
                },
                {
                  "step": "$f\\left(\\dfrac{9x + 9}{-7x - 3}\\right) + 2f\\left(\\dfrac{-3x - 9}{7x + 9}\\right) = -6 \\cdot \\dfrac{9x + 9}{-7x - 3} + 3$",
                  "reason": "An equation that holds for every input: $\\dfrac{9x + 9}{-7x - 3}$ is put in place of $x$, and line 2 gives the rule applied twice."
                },
                {
                  "step": "$f\\left(\\dfrac{-3x - 9}{7x + 9}\\right) + 2f(x) = -6 \\cdot \\dfrac{-3x - 9}{7x + 9} + 3$",
                  "reason": "An equation that holds for every input: $\\dfrac{-3x - 9}{7x + 9}$ is put in place of $x$, and line 3 turns the rule applied three times into $x$."
                },
                {
                  "step": "$9f(x) = -6x + 3 - 2(-6 \\cdot \\dfrac{9x + 9}{-7x - 3} + 3) + 4(-6 \\cdot \\dfrac{-3x - 9}{7x + 9} + 3)$",
                  "reason": "Elimination: $-2$ times line 4 and $4$ times line 5 are added to the equation as given, so the terms in $f\\left(\\dfrac{9x + 9}{-7x - 3}\\right)$ and $f\\left(\\dfrac{-3x - 9}{7x + 9}\\right)$ cancel."
                },
                {
                  "step": "$9f(x) = \\dfrac{-294x^3 - 315x^2 + 594x - 81}{49x^2 + 84x + 27}$",
                  "reason": "Single fraction: the fractions are written over their simplest common denominator and collected."
                },
                {
                  "step": "$f(x) = \\dfrac{-98x^3 - 105x^2 + 198x - 27}{147x^2 + 252x + 81}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $9$, and the fraction is put in lowest terms."
                }
              ]
            },
            {
              "prompt": "Find $f(x)$, where $f(x) - 2f\\left(\\dfrac{-8x - 7}{16x - 4}\\right) = 2x + 9$ for every $x$ except $x = -\\dfrac{1}{2}$ and $x = \\dfrac{1}{4}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(-16*x^3-508*x^2-70*x+63)/(56*x^2+14*x-7)",
              "lines": [
                {
                  "step": "Find $f(x)$, where $f(x) - 2f\\left(\\dfrac{-8x - 7}{16x - 4}\\right) = 2x + 9$ for every $x$ except $x = -\\dfrac{1}{2}$ and $x = \\dfrac{1}{4}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{-8 \\cdot \\dfrac{-8x - 7}{16x - 4} - 7}{16 \\cdot \\dfrac{-8x - 7}{16x - 4} - 4} = \\dfrac{-4x + 7}{-16x - 8}$",
                  "reason": "Composition $f(g(x))$ and complex fraction: the rule is put into itself, the top and the bottom are each multiplied by $16x - 4$, and the common factor $12$ is cancelled."
                },
                {
                  "step": "$\\dfrac{-8 \\cdot \\dfrac{-4x + 7}{-16x - 8} - 7}{16 \\cdot \\dfrac{-4x + 7}{-16x - 8} - 4} = x$",
                  "reason": "Cyclic function of order k: the rule applied to the result of line 2 gives back $x$, so the rule has order $3$."
                },
                {
                  "step": "$f\\left(\\dfrac{-8x - 7}{16x - 4}\\right) - 2f\\left(\\dfrac{-4x + 7}{-16x - 8}\\right) = 2 \\cdot \\dfrac{-8x - 7}{16x - 4} + 9$",
                  "reason": "An equation that holds for every input: $\\dfrac{-8x - 7}{16x - 4}$ is put in place of $x$, and line 2 gives the rule applied twice."
                },
                {
                  "step": "$f\\left(\\dfrac{-4x + 7}{-16x - 8}\\right) - 2f(x) = 2 \\cdot \\dfrac{-4x + 7}{-16x - 8} + 9$",
                  "reason": "An equation that holds for every input: $\\dfrac{-4x + 7}{-16x - 8}$ is put in place of $x$, and line 3 turns the rule applied three times into $x$."
                },
                {
                  "step": "$-7f(x) = 2x + 9 + 2(2 \\cdot \\dfrac{-8x - 7}{16x - 4} + 9) + 4(2 \\cdot \\dfrac{-4x + 7}{-16x - 8} + 9)$",
                  "reason": "Elimination: $2$ times line 4 and $4$ times line 5 are added to the equation as given, so the terms in $f\\left(\\dfrac{-8x - 7}{16x - 4}\\right)$ and $f\\left(\\dfrac{-4x + 7}{-16x - 8}\\right)$ cancel."
                },
                {
                  "step": "$-7f(x) = \\dfrac{16x^3 + 508x^2 + 70x - 63}{8x^2 + 2x - 1}$",
                  "reason": "Single fraction: the fractions are written over their simplest common denominator and collected."
                },
                {
                  "step": "$f(x) = \\dfrac{-16x^3 - 508x^2 - 70x + 63}{56x^2 + 14x - 7}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-7$, and the fraction is put in lowest terms."
                }
              ]
            },
            {
              "prompt": "Find $f(x)$, where $f(x) + 2f\\left(\\dfrac{-10x + 12}{-13x - 4}\\right) = -9x - 15$ for every $x$ except $x = -\\dfrac{4}{13}$ and $x = \\dfrac{10}{13}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(-169*x^3-299*x^2+606*x+632)/(169*x^2-78*x-40)",
              "lines": [
                {
                  "step": "Find $f(x)$, where $f(x) + 2f\\left(\\dfrac{-10x + 12}{-13x - 4}\\right) = -9x - 15$ for every $x$ except $x = -\\dfrac{4}{13}$ and $x = \\dfrac{10}{13}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{-10 \\cdot \\dfrac{-10x + 12}{-13x - 4} + 12}{-13 \\cdot \\dfrac{-10x + 12}{-13x - 4} - 4} = \\dfrac{-4x - 12}{13x - 10}$",
                  "reason": "Composition $f(g(x))$ and complex fraction: the rule is put into itself, the top and the bottom are each multiplied by $-13x - 4$, and the common factor $14$ is cancelled."
                },
                {
                  "step": "$\\dfrac{-10 \\cdot \\dfrac{-4x - 12}{13x - 10} + 12}{-13 \\cdot \\dfrac{-4x - 12}{13x - 10} - 4} = x$",
                  "reason": "Cyclic function of order k: the rule applied to the result of line 2 gives back $x$, so the rule has order $3$."
                },
                {
                  "step": "$f\\left(\\dfrac{-10x + 12}{-13x - 4}\\right) + 2f\\left(\\dfrac{-4x - 12}{13x - 10}\\right) = -9 \\cdot \\dfrac{-10x + 12}{-13x - 4} - 15$",
                  "reason": "An equation that holds for every input: $\\dfrac{-10x + 12}{-13x - 4}$ is put in place of $x$, and line 2 gives the rule applied twice."
                },
                {
                  "step": "$f\\left(\\dfrac{-4x - 12}{13x - 10}\\right) + 2f(x) = -9 \\cdot \\dfrac{-4x - 12}{13x - 10} - 15$",
                  "reason": "An equation that holds for every input: $\\dfrac{-4x - 12}{13x - 10}$ is put in place of $x$, and line 3 turns the rule applied three times into $x$."
                },
                {
                  "step": "$9f(x) = -9x - 15 - 2(-9 \\cdot \\dfrac{-10x + 12}{-13x - 4} - 15) + 4(-9 \\cdot \\dfrac{-4x - 12}{13x - 10} - 15)$",
                  "reason": "Elimination: $-2$ times line 4 and $4$ times line 5 are added to the equation as given, so the terms in $f\\left(\\dfrac{-10x + 12}{-13x - 4}\\right)$ and $f\\left(\\dfrac{-4x - 12}{13x - 10}\\right)$ cancel."
                },
                {
                  "step": "$9f(x) = \\dfrac{-1521x^3 - 2691x^2 + 5454x + 5688}{169x^2 - 78x - 40}$",
                  "reason": "Single fraction: the fractions are written over their simplest common denominator and collected."
                },
                {
                  "step": "$f(x) = \\dfrac{-169x^3 - 299x^2 + 606x + 632}{169x^2 - 78x - 40}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $9$, and the fraction is put in lowest terms."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $f(x)$, where $xf(x) - 8f(-11 - x) = -2x + 15$ for every $x$.",
            "lines": [
              {
                "step": "Find $f(x)$, where $xf(x) - 8f(-11 - x) = -2x + 15$ for every $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$-11 - (-11 - x) = x$",
                "reason": "Cyclic function of order k: the rule that sends $x$ to $-11 - x$, applied twice, gives back $x$, so it has order $2$."
              },
              {
                "step": "$(-11 - x)f(-11 - x) - 8f(x) = -2(-11 - x) + 15$",
                "reason": "An equation that holds for every input: $-11 - x$ is put in place of $x$, and line 2 turns $f(-11 - (-11 - x))$ into $f(x)$."
              },
              {
                "step": "$x(-11 - x)f(x) - 8(-11 - x)f(-11 - x) = 2x^2 + 7x - 165$",
                "reason": "Multiplying both sides by the same number: the equation as given is multiplied by $-11 - x$, a number for each $x$."
              },
              {
                "step": "$-8(-11 - x)f(-11 - x) + 64f(x) = -16x - 296$",
                "reason": "Multiplying both sides by the same number: line 3 is multiplied by $-8$."
              },
              {
                "step": "$(-x^2 - 11x - 64)f(x) = 2x^2 + 23x + 131$",
                "reason": "Elimination: line 5 is taken from line 4, so the terms in $f(-11 - x)$ cancel."
              },
              {
                "step": "$f(x) = \\dfrac{2x^2 + 23x + 131}{-x^2 - 11x - 64}$",
                "reason": "Dividing both sides by a nonzero number: the discriminant of $-x^2 - 11x - 64$ is $(-11)^2 - 4 \\cdot (-1) \\cdot (-64) = -135$, a negative discriminant, so it is never $0$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f(x)$, where $xf(x) - 8f(9 - x) = 8x - 15$ for every $x$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(-8*x^2+23*x+321)/(-x^2+9*x-64)",
              "lines": [
                {
                  "step": "Find $f(x)$, where $xf(x) - 8f(9 - x) = 8x - 15$ for every $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$9 - (9 - x) = x$",
                  "reason": "Cyclic function of order k: the rule that sends $x$ to $9 - x$, applied twice, gives back $x$, so it has order $2$."
                },
                {
                  "step": "$(9 - x)f(9 - x) - 8f(x) = 8(9 - x) - 15$",
                  "reason": "An equation that holds for every input: $9 - x$ is put in place of $x$, and line 2 turns $f(9 - (9 - x))$ into $f(x)$."
                },
                {
                  "step": "$x(9 - x)f(x) - 8(9 - x)f(9 - x) = -8x^2 + 87x - 135$",
                  "reason": "Multiplying both sides by the same number: the equation as given is multiplied by $9 - x$, a number for each $x$."
                },
                {
                  "step": "$-8(9 - x)f(9 - x) + 64f(x) = 64x - 456$",
                  "reason": "Multiplying both sides by the same number: line 3 is multiplied by $-8$."
                },
                {
                  "step": "$(-x^2 + 9x - 64)f(x) = -8x^2 + 23x + 321$",
                  "reason": "Elimination: line 5 is taken from line 4, so the terms in $f(9 - x)$ cancel."
                },
                {
                  "step": "$f(x) = \\dfrac{-8x^2 + 23x + 321}{-x^2 + 9x - 64}$",
                  "reason": "Dividing both sides by a nonzero number: the discriminant of $-x^2 + 9x - 64$ is $9^2 - 4 \\cdot (-1) \\cdot (-64) = -175$, a negative discriminant, so it is never $0$."
                }
              ]
            },
            {
              "prompt": "Find $f(x)$, where $xf(x) + 9f(-8 - x) = -11x - 19$ for every $x$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(11*x^2+8*x-469)/(-x^2-8*x-81)",
              "lines": [
                {
                  "step": "Find $f(x)$, where $xf(x) + 9f(-8 - x) = -11x - 19$ for every $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$-8 - (-8 - x) = x$",
                  "reason": "Cyclic function of order k: the rule that sends $x$ to $-8 - x$, applied twice, gives back $x$, so it has order $2$."
                },
                {
                  "step": "$(-8 - x)f(-8 - x) + 9f(x) = -11(-8 - x) - 19$",
                  "reason": "An equation that holds for every input: $-8 - x$ is put in place of $x$, and line 2 turns $f(-8 - (-8 - x))$ into $f(x)$."
                },
                {
                  "step": "$x(-8 - x)f(x) + 9(-8 - x)f(-8 - x) = 11x^2 + 107x + 152$",
                  "reason": "Multiplying both sides by the same number: the equation as given is multiplied by $-8 - x$, a number for each $x$."
                },
                {
                  "step": "$9(-8 - x)f(-8 - x) + 81f(x) = 99x + 621$",
                  "reason": "Multiplying both sides by the same number: line 3 is multiplied by $9$."
                },
                {
                  "step": "$(-x^2 - 8x - 81)f(x) = 11x^2 + 8x - 469$",
                  "reason": "Elimination: line 5 is taken from line 4, so the terms in $f(-8 - x)$ cancel."
                },
                {
                  "step": "$f(x) = \\dfrac{11x^2 + 8x - 469}{-x^2 - 8x - 81}$",
                  "reason": "Dividing both sides by a nonzero number: the discriminant of $-x^2 - 8x - 81$ is $(-8)^2 - 4 \\cdot (-1) \\cdot (-81) = -260$, a negative discriminant, so it is never $0$."
                }
              ]
            },
            {
              "prompt": "Find $f(x)$, where $xf(x) - 9f(4 - x) = 8x - 11$ for every $x$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(-8*x^2-29*x+145)/(-x^2+4*x-81)",
              "lines": [
                {
                  "step": "Find $f(x)$, where $xf(x) - 9f(4 - x) = 8x - 11$ for every $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$4 - (4 - x) = x$",
                  "reason": "Cyclic function of order k: the rule that sends $x$ to $4 - x$, applied twice, gives back $x$, so it has order $2$."
                },
                {
                  "step": "$(4 - x)f(4 - x) - 9f(x) = 8(4 - x) - 11$",
                  "reason": "An equation that holds for every input: $4 - x$ is put in place of $x$, and line 2 turns $f(4 - (4 - x))$ into $f(x)$."
                },
                {
                  "step": "$x(4 - x)f(x) - 9(4 - x)f(4 - x) = -8x^2 + 43x - 44$",
                  "reason": "Multiplying both sides by the same number: the equation as given is multiplied by $4 - x$, a number for each $x$."
                },
                {
                  "step": "$-9(4 - x)f(4 - x) + 81f(x) = 72x - 189$",
                  "reason": "Multiplying both sides by the same number: line 3 is multiplied by $-9$."
                },
                {
                  "step": "$(-x^2 + 4x - 81)f(x) = -8x^2 - 29x + 145$",
                  "reason": "Elimination: line 5 is taken from line 4, so the terms in $f(4 - x)$ cancel."
                },
                {
                  "step": "$f(x) = \\dfrac{-8x^2 - 29x + 145}{-x^2 + 4x - 81}$",
                  "reason": "Dividing both sides by a nonzero number: the discriminant of $-x^2 + 4x - 81$ is $4^2 - 4 \\cdot (-1) \\cdot (-81) = -308$, a negative discriminant, so it is never $0$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find $f(x)$, where $f(x) + 3f\\left(\\dfrac{6x + 19}{8x - 6}\\right) = -5x - 3$ for every $x$ except $x = \\dfrac{3}{4}$.",
            "lines": [
              {
                "step": "Find $f(x)$, where $f(x) + 3f\\left(\\dfrac{6x + 19}{8x - 6}\\right) = -5x - 3$ for every $x$ except $x = \\dfrac{3}{4}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{6 \\cdot \\dfrac{6x + 19}{8x - 6} + 19}{8 \\cdot \\dfrac{6x + 19}{8x - 6} - 6} = x$",
                "reason": "Cyclic function of order k: the rule is put into itself, the top and the bottom are each multiplied by $8x - 6$, and both are left as $188$ times $x$ and $188$, so the rule applied twice gives back $x$ and has order $2$."
              },
              {
                "step": "$f\\left(\\dfrac{6x + 19}{8x - 6}\\right) + 3f(x) = -5 \\cdot \\dfrac{6x + 19}{8x - 6} - 3$",
                "reason": "An equation that holds for every input: $\\dfrac{6x + 19}{8x - 6}$ is put in place of $x$, and line 2 turns the rule applied twice into $x$."
              },
              {
                "step": "$-8f(x) = -5x - 3 - 3(-5 \\cdot \\dfrac{6x + 19}{8x - 6} - 3)$",
                "reason": "Elimination: $3$ times line 3 is taken from the equation as given, so the terms in $f\\left(\\dfrac{6x + 19}{8x - 6}\\right)$ cancel."
              },
              {
                "step": "$-8f(x) = \\dfrac{-40x^2 + 168x + 249}{8x - 6}$",
                "reason": "Single fraction: the fractions are written over their simplest common denominator and collected."
              },
              {
                "step": "$f(x) = \\dfrac{40x^2 - 168x - 249}{64x - 48}$",
                "reason": "Dividing both sides by a nonzero number: both sides are divided by $-8$, and the fraction is put in lowest terms."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find $f(x)$, where $f(x) + 4f\\left(\\dfrac{-6x + 9}{-10x + 6}\\right) = 7x - 10$ for every $x$ except $x = \\dfrac{3}{5}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(-35*x^2-45*x-36)/(75*x-45)",
              "lines": [
                {
                  "step": "Find $f(x)$, where $f(x) + 4f\\left(\\dfrac{-6x + 9}{-10x + 6}\\right) = 7x - 10$ for every $x$ except $x = \\dfrac{3}{5}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{-6 \\cdot \\dfrac{-6x + 9}{-10x + 6} + 9}{-10 \\cdot \\dfrac{-6x + 9}{-10x + 6} + 6} = x$",
                  "reason": "Cyclic function of order k: the rule is put into itself, the top and the bottom are each multiplied by $-10x + 6$, and both are left as $-54$ times $x$ and $-54$, so the rule applied twice gives back $x$ and has order $2$."
                },
                {
                  "step": "$f\\left(\\dfrac{-6x + 9}{-10x + 6}\\right) + 4f(x) = 7 \\cdot \\dfrac{-6x + 9}{-10x + 6} - 10$",
                  "reason": "An equation that holds for every input: $\\dfrac{-6x + 9}{-10x + 6}$ is put in place of $x$, and line 2 turns the rule applied twice into $x$."
                },
                {
                  "step": "$-15f(x) = 7x - 10 - 4(7 \\cdot \\dfrac{-6x + 9}{-10x + 6} - 10)$",
                  "reason": "Elimination: $4$ times line 3 is taken from the equation as given, so the terms in $f\\left(\\dfrac{-6x + 9}{-10x + 6}\\right)$ cancel."
                },
                {
                  "step": "$-15f(x) = \\dfrac{35x^2 + 45x + 36}{5x - 3}$",
                  "reason": "Single fraction: the fractions are written over their simplest common denominator and collected."
                },
                {
                  "step": "$f(x) = \\dfrac{-35x^2 - 45x - 36}{75x - 45}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-15$, and the fraction is put in lowest terms."
                }
              ]
            },
            {
              "prompt": "Find $f(x)$, where $f(x) - 5f\\left(\\dfrac{-7x + 16}{8x + 7}\\right) = -2x + 13$ for every $x$ except $x = -\\dfrac{7}{8}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(8*x^2-340*x-193)/(96*x+84)",
              "lines": [
                {
                  "step": "Find $f(x)$, where $f(x) - 5f\\left(\\dfrac{-7x + 16}{8x + 7}\\right) = -2x + 13$ for every $x$ except $x = -\\dfrac{7}{8}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{-7 \\cdot \\dfrac{-7x + 16}{8x + 7} + 16}{8 \\cdot \\dfrac{-7x + 16}{8x + 7} + 7} = x$",
                  "reason": "Cyclic function of order k: the rule is put into itself, the top and the bottom are each multiplied by $8x + 7$, and both are left as $177$ times $x$ and $177$, so the rule applied twice gives back $x$ and has order $2$."
                },
                {
                  "step": "$f\\left(\\dfrac{-7x + 16}{8x + 7}\\right) - 5f(x) = -2 \\cdot \\dfrac{-7x + 16}{8x + 7} + 13$",
                  "reason": "An equation that holds for every input: $\\dfrac{-7x + 16}{8x + 7}$ is put in place of $x$, and line 2 turns the rule applied twice into $x$."
                },
                {
                  "step": "$-24f(x) = -2x + 13 + 5(-2 \\cdot \\dfrac{-7x + 16}{8x + 7} + 13)$",
                  "reason": "Elimination: $-5$ times line 3 is taken from the equation as given, so the terms in $f\\left(\\dfrac{-7x + 16}{8x + 7}\\right)$ cancel."
                },
                {
                  "step": "$-24f(x) = \\dfrac{-16x^2 + 680x + 386}{8x + 7}$",
                  "reason": "Single fraction: the fractions are written over their simplest common denominator and collected."
                },
                {
                  "step": "$f(x) = \\dfrac{8x^2 - 340x - 193}{96x + 84}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-24$, and the fraction is put in lowest terms."
                }
              ]
            },
            {
              "prompt": "Find $f(x)$, where $f(x) + 5f\\left(\\dfrac{6x + 13}{5x - 6}\\right) = -8x - 5$ for every $x$ except $x = \\dfrac{6}{5}$.",
              "form": "Answer as a single fraction in lowest terms, as in (x+1)/(x-2).",
              "answer": "(10*x^2-97*x-100)/(30*x-36)",
              "lines": [
                {
                  "step": "Find $f(x)$, where $f(x) + 5f\\left(\\dfrac{6x + 13}{5x - 6}\\right) = -8x - 5$ for every $x$ except $x = \\dfrac{6}{5}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{6 \\cdot \\dfrac{6x + 13}{5x - 6} + 13}{5 \\cdot \\dfrac{6x + 13}{5x - 6} - 6} = x$",
                  "reason": "Cyclic function of order k: the rule is put into itself, the top and the bottom are each multiplied by $5x - 6$, and both are left as $101$ times $x$ and $101$, so the rule applied twice gives back $x$ and has order $2$."
                },
                {
                  "step": "$f\\left(\\dfrac{6x + 13}{5x - 6}\\right) + 5f(x) = -8 \\cdot \\dfrac{6x + 13}{5x - 6} - 5$",
                  "reason": "An equation that holds for every input: $\\dfrac{6x + 13}{5x - 6}$ is put in place of $x$, and line 2 turns the rule applied twice into $x$."
                },
                {
                  "step": "$-24f(x) = -8x - 5 - 5(-8 \\cdot \\dfrac{6x + 13}{5x - 6} - 5)$",
                  "reason": "Elimination: $5$ times line 3 is taken from the equation as given, so the terms in $f\\left(\\dfrac{6x + 13}{5x - 6}\\right)$ cancel."
                },
                {
                  "step": "$-24f(x) = \\dfrac{-40x^2 + 388x + 400}{5x - 6}$",
                  "reason": "Single fraction: the fractions are written over their simplest common denominator and collected."
                },
                {
                  "step": "$f(x) = \\dfrac{10x^2 - 97x - 100}{30x - 36}$",
                  "reason": "Dividing both sides by a nonzero number: both sides are divided by $-24$, and the fraction is put in lowest terms."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t233-k3",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for $f^{77}(-2)$, where $f(x) = \\dfrac{17x + 13}{-19x - 3}$ has order $3$, and write that line right.",
            "given": [
              "$f^{77}(-2) = f^2(-2)$",
              "$f^2(-2) = (f(-2))^2$",
              "$f(-2) = \\dfrac{17 \\cdot (-2) + 13}{-19 \\cdot (-2) - 3} = -\\dfrac{3}{5}$",
              "$(f(-2))^2 = \\left(-\\dfrac{3}{5}\\right)^2 = \\dfrac{9}{25}$",
              "$f^{77}(-2) = \\dfrac{9}{25}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $f^{77}(-2)$, where $f(x) = \\dfrac{17x + 13}{-19x - 3}$ has order $3$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 2 writes $f$ applied twice to $-2$ as the square of $f(-2)$.",
                "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^2(-2)$ is $f(f(-2))$, $f$ applied twice, never the power $(f(-2))^2$."
              },
              {
                "step": "Line 2 written right is $f^2(-2) = f(f(-2))$",
                "reason": "Cyclic function of order k: $f$ has order $3$ and $77 = 3 \\cdot 25 + 2$, so the value wanted is $f$ applied twice to $-2$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $f^{77}(-4)$, where $f(x) = \\dfrac{4x + 4}{-19x - 10}$ has order $3$, and write that line right.",
              "given": [
                "$f(-4) = \\dfrac{4 \\cdot (-4) + 4}{-19 \\cdot (-4) - 10} = -\\dfrac{2}{11}$",
                "$f(-\\dfrac{2}{11}) = \\dfrac{4 \\cdot (-\\dfrac{2}{11}) + 4}{-19 \\cdot (-\\dfrac{2}{11}) - 10} = -\\dfrac{1}{2}$",
                "$f(-\\dfrac{1}{2}) = \\dfrac{4 \\cdot (-\\dfrac{1}{2}) + 4}{-19 \\cdot (-\\dfrac{1}{2}) - 10} = -4$",
                "$f^{77}(-4) = (f(-4))^2$",
                "$f^{77}(-4) = \\left(-\\dfrac{2}{11}\\right)^2 = \\dfrac{4}{121}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: f^77(-4) = f^2(-4)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f^{77}(-4)$, where $f(x) = \\dfrac{4x + 4}{-19x - 10}$ has order $3$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 writes $f$ applied twice to $-4$ as the square of $f(-4)$.",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^2(-4)$ is $f(f(-4))$, $f$ applied twice, never the power $(f(-4))^2$."
                },
                {
                  "step": "Line 4 written right is $f^{77}(-4) = f^2(-4) = -\\dfrac{1}{2}$",
                  "reason": "Cyclic function of order k: $f$ has order $3$ and $77 = 3 \\cdot 25 + 2$, so the value wanted is $f$ applied twice to $-4$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $f^{56}(20)$, where $f(x) = \\dfrac{-8x - 48}{13x - 20}$ has order $3$, and write that line right.",
              "given": [
                "$f(20) = \\dfrac{-8 \\cdot 20 - 48}{13 \\cdot 20 - 20} = -\\dfrac{13}{15}$",
                "$f^{56}(20) = f^2(20)$",
                "$f^2(20) = \\left(-\\dfrac{13}{15}\\right)^2$",
                "$\\left(-\\dfrac{13}{15}\\right)^2 = \\dfrac{169}{225}$",
                "$f^{56}(20) = \\dfrac{169}{225}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: f^2(20) = f(-13/15)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f^{56}(20)$, where $f(x) = \\dfrac{-8x - 48}{13x - 20}$ has order $3$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 writes $f$ applied twice to $20$ as the square of $f(20)$.",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^2(20)$ is $f(f(20))$, $f$ applied twice, never the power $(f(20))^2$."
                },
                {
                  "step": "Line 3 written right is $f^2(20) = f(f(20)) = f\\left(-\\dfrac{13}{15}\\right)$",
                  "reason": "Cyclic function of order k: $f$ has order $3$ and $56 = 3 \\cdot 18 + 2$, so the value wanted is $f$ applied twice to $20$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $f^{32}(2)$, where $f(x) = \\dfrac{12x + 4}{-27x - 6}$ has order $3$, and write that line right.",
              "given": [
                "$f^{32}(2) = f^2(2)$",
                "$f^2(2) = (f(2))^2$",
                "$f(2) = \\dfrac{12 \\cdot 2 + 4}{-27 \\cdot 2 - 6} = -\\dfrac{7}{15}$",
                "$(f(2))^2 = \\left(-\\dfrac{7}{15}\\right)^2 = \\dfrac{49}{225}$",
                "$f^{32}(2) = \\dfrac{49}{225}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: f^2(2) = f(f(2))",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f^{32}(2)$, where $f(x) = \\dfrac{12x + 4}{-27x - 6}$ has order $3$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 writes $f$ applied twice to $2$ as the square of $f(2)$.",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^2(2)$ is $f(f(2))$, $f$ applied twice, never the power $(f(2))^2$."
                },
                {
                  "step": "Line 2 written right is $f^2(2) = f(f(2))$",
                  "reason": "Cyclic function of order k: $f$ has order $3$ and $32 = 3 \\cdot 10 + 2$, so the value wanted is $f$ applied twice to $2$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for $f^{115}(-13)$, where $f(x) = \\dfrac{-16x + 8}{-41x - 20}$ has order $4$, and write that line right.",
            "given": [
              "$f(-13) = \\dfrac{-16 \\cdot (-13) + 8}{-41 \\cdot (-13) - 20} = \\dfrac{8}{19}$",
              "$f(\\dfrac{8}{19}) = \\dfrac{-16 \\cdot (\\dfrac{8}{19}) + 8}{-41 \\cdot (\\dfrac{8}{19}) - 20} = -\\dfrac{2}{59}$",
              "$f(-\\dfrac{2}{59}) = \\dfrac{-16 \\cdot (-\\dfrac{2}{59}) + 8}{-41 \\cdot (-\\dfrac{2}{59}) - 20} = -\\dfrac{28}{61}$",
              "$f(-\\dfrac{28}{61}) = \\dfrac{-16 \\cdot (-\\dfrac{28}{61}) + 8}{-41 \\cdot (-\\dfrac{28}{61}) - 20} = -13$",
              "$f^{115}(-13) = (f(-13))^3$",
              "$f^{115}(-13) = \\left(\\dfrac{8}{19}\\right)^3 = \\dfrac{512}{6859}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $f^{115}(-13)$, where $f(x) = \\dfrac{-16x + 8}{-41x - 20}$ has order $4$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 5 writes $f$ applied three times to $-13$ as the cube of $f(-13)$.",
                "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^3(-13)$ is $f(f(f(-13)))$, $f$ applied three times, never the power $(f(-13))^3$."
              },
              {
                "step": "Line 5 written right is $f^{115}(-13) = f^3(-13) = -\\dfrac{28}{61}$",
                "reason": "Cyclic function of order k: $f$ has order $4$ and $115 = 4 \\cdot 28 + 3$, so the value wanted is $f$ applied three times to $-13$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $f^{127}(26)$, where $f(x) = \\dfrac{12x + 13}{-18x + 18}$ has order $4$, and write that line right.",
              "given": [
                "$f^{127}(26) = f^3(26)$",
                "$f^3(26) = (f(26))^3$",
                "$f(26) = \\dfrac{12 \\cdot 26 + 13}{-18 \\cdot 26 + 18} = -\\dfrac{13}{18}$",
                "$(f(26))^3 = \\left(-\\dfrac{13}{18}\\right)^3 = -\\dfrac{2197}{5832}$",
                "$f^{127}(26) = -\\dfrac{2197}{5832}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: f^3(26) = f(f(f(26)))",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f^{127}(26)$, where $f(x) = \\dfrac{12x + 13}{-18x + 18}$ has order $4$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 2 writes $f$ applied three times to $26$ as the cube of $f(26)$.",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^3(26)$ is $f(f(f(26)))$, $f$ applied three times, never the power $(f(26))^3$."
                },
                {
                  "step": "Line 2 written right is $f^3(26) = f(f(f(26)))$",
                  "reason": "Cyclic function of order k: $f$ has order $4$ and $127 = 4 \\cdot 31 + 3$, so the value wanted is $f$ applied three times to $26$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $f^{27}(-11)$, where $f(x) = \\dfrac{16x + 32}{-5x + 8}$ has order $4$, and write that line right.",
              "given": [
                "$f(-11) = \\dfrac{16 \\cdot (-11) + 32}{-5 \\cdot (-11) + 8} = -\\dfrac{16}{7}$",
                "$f(-\\dfrac{16}{7}) = \\dfrac{16 \\cdot (-\\dfrac{16}{7}) + 32}{-5 \\cdot (-\\dfrac{16}{7}) + 8} = -\\dfrac{4}{17}$",
                "$f^{27}(-11) = f^3(-11)$",
                "$f^3(-11) = \\left(-\\dfrac{16}{7}\\right)^3$",
                "$\\left(-\\dfrac{16}{7}\\right)^3 = -\\dfrac{4096}{343}$",
                "$f^{27}(-11) = -\\dfrac{4096}{343}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: f^3(-11) = f(-4/17)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f^{27}(-11)$, where $f(x) = \\dfrac{16x + 32}{-5x + 8}$ has order $4$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 4 writes $f$ applied three times to $-11$ as the cube of $f(-11)$.",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^3(-11)$ is $f(f(f(-11)))$, $f$ applied three times, never the power $(f(-11))^3$."
                },
                {
                  "step": "Line 4 written right is $f^3(-11) = f(f(f(-11))) = f\\left(-\\dfrac{4}{17}\\right)$",
                  "reason": "Cyclic function of order k: $f$ has order $4$ and $27 = 4 \\cdot 6 + 3$, so the value wanted is $f$ applied three times to $-11$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $f^{63}(24)$, where $f(x) = \\dfrac{-12x - 37}{2x + 2}$ has order $4$, and write that line right.",
              "given": [
                "$f(24) = \\dfrac{-12 \\cdot 24 - 37}{2 \\cdot 24 + 2} = -\\dfrac{13}{2}$",
                "$f^{63}(24) = f^3(24)$",
                "$f^3(24) = \\left(-\\dfrac{13}{2}\\right)^3$",
                "$\\left(-\\dfrac{13}{2}\\right)^3 = -\\dfrac{2197}{8}$",
                "$f^{63}(24) = -\\dfrac{2197}{8}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: f^3(24) = f(f(-13/2))",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $f^{63}(24)$, where $f(x) = \\dfrac{-12x - 37}{2x + 2}$ has order $4$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 3 writes $f$ applied three times to $24$ as the cube of $f(24)$.",
                  "reason": "The notation $f^n$ for $f$ applied $n$ times: $f^3(24)$ is $f(f(f(24)))$, $f$ applied three times, never the power $(f(24))^3$."
                },
                {
                  "step": "Line 3 written right is $f^3(24) = f(f(f(24))) = f\\left(f\\left(-\\dfrac{13}{2}\\right)\\right)$",
                  "reason": "Cyclic function of order k: $f$ has order $4$ and $63 = 4 \\cdot 15 + 3$, so the value wanted is $f$ applied three times to $24$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t233-k4",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation, with the values of $f$ on the left: The value of $f$ at $x$, minus 5 times its value at $15 - x$, is 17 times the square of $x$.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with the values of $f$ on the left: The value of $f$ at $x$, minus 5 times its value at $15 - x$, is 17 times the square of $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The value of $f$ at $x$ is $f(x)$, and its value at $15 - x$ is $f(15 - x)$.",
                "reason": "Function notation: the input goes in the brackets after $f$."
              },
              {
                "step": "5 times the second value, taken from the first, is $f(x) - 5f(15 - x)$.",
                "reason": "Writing a sentence as an equation: \"times\" means the number multiplies, and \"minus\" means the amount is taken away."
              },
              {
                "step": "$f(x) - 5f(15 - x) = 17x^2$",
                "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with the values of $f$ on the left: The sum of the value of $f$ at $x$ and 3 times its value at $14 - x$ equals the square of $x$, times 14.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "f(x)+3*f(14-x) = 14*x^2",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the values of $f$ on the left: The sum of the value of $f$ at $x$ and 3 times its value at $14 - x$ equals the square of $x$, times 14.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The value of $f$ at $x$ is $f(x)$, and its value at $14 - x$ is $f(14 - x)$.",
                  "reason": "Function notation: the input goes in the brackets after $f$."
                },
                {
                  "step": "3 times the second value, added to the first, is $f(x) + 3f(14 - x)$.",
                  "reason": "Writing a sentence as an equation: \"times\" means the number multiplies, and \"sum\" means the amount is added."
                },
                {
                  "step": "$f(x) + 3f(14 - x) = 14x^2$",
                  "reason": "Writing a sentence as an equation: \"equals\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with the values of $f$ on the left: Taking 7 times the value of $f$ at $15 - x$ from its value at $x$ gives 9 times the square of $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "f(x)-7*f(15-x) = 9*x^2",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the values of $f$ on the left: Taking 7 times the value of $f$ at $15 - x$ from its value at $x$ gives 9 times the square of $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The value of $f$ at $x$ is $f(x)$, and its value at $15 - x$ is $f(15 - x)$.",
                  "reason": "Function notation: the input goes in the brackets after $f$."
                },
                {
                  "step": "7 times the second value, taken from the first, is $f(x) - 7f(15 - x)$.",
                  "reason": "Writing a sentence as an equation: \"times\" means the number multiplies, and \"taking from\" means the amount is taken away."
                },
                {
                  "step": "$f(x) - 7f(15 - x) = 9x^2$",
                  "reason": "Writing a sentence as an equation: \"gives\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with the values of $f$ on the left: The value of $f$ at $x$, plus 8 times its value at $8 - x$, is 11 times the square of $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "f(x)+8*f(8-x) = 11*x^2",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the values of $f$ on the left: The value of $f$ at $x$, plus 8 times its value at $8 - x$, is 11 times the square of $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The value of $f$ at $x$ is $f(x)$, and its value at $8 - x$ is $f(8 - x)$.",
                  "reason": "Function notation: the input goes in the brackets after $f$."
                },
                {
                  "step": "8 times the second value, added to the first, is $f(x) + 8f(8 - x)$.",
                  "reason": "Writing a sentence as an equation: \"times\" means the number multiplies, and \"plus\" means the amount is added."
                },
                {
                  "step": "$f(x) + 8f(8 - x) = 11x^2$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation, with the values of $f$ on the left: Two times the value of $f$ at $x$, less its value at $\\dfrac{-13x - 31}{19x - 15}$, is 12 more than $x$.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with the values of $f$ on the left: Two times the value of $f$ at $x$, less its value at $\\dfrac{-13x - 31}{19x - 15}$, is 12 more than $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The value of $f$ at $x$ is $f(x)$, and its value at $\\dfrac{-13x - 31}{19x - 15}$ is $f\\left(\\dfrac{-13x - 31}{19x - 15}\\right)$.",
                "reason": "Function notation: the input goes in the brackets after $f$."
              },
              {
                "step": "2 times the first value, less the second, is $2f(x) - f\\left(\\dfrac{-13x - 31}{19x - 15}\\right)$.",
                "reason": "Writing a sentence as an equation: \"times\" means the number multiplies, and \"less\" means the amount is taken away."
              },
              {
                "step": "$2f(x) - f\\left(\\dfrac{-13x - 31}{19x - 15}\\right) = x + 12$",
                "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes, and 12 more than $x$ is $x + 12$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with the values of $f$ on the left: Taking 2 times the value of $f$ at $\\dfrac{-12x - 37}{9x - 9}$ from 9 times its value at $x$ gives 4 less than $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "9*f(x)-2*f((-12*x-37)/(9*x-9)) = x-4",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the values of $f$ on the left: Taking 2 times the value of $f$ at $\\dfrac{-12x - 37}{9x - 9}$ from 9 times its value at $x$ gives 4 less than $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The value of $f$ at $x$ is $f(x)$, and its value at $\\dfrac{-12x - 37}{9x - 9}$ is $f\\left(\\dfrac{-12x - 37}{9x - 9}\\right)$.",
                  "reason": "Function notation: the input goes in the brackets after $f$."
                },
                {
                  "step": "9 times the first value, less 2 times the second, is $9f(x) - 2f\\left(\\dfrac{-12x - 37}{9x - 9}\\right)$.",
                  "reason": "Writing a sentence as an equation: \"times\" means the number multiplies, and \"taking from\" means the amount is taken away."
                },
                {
                  "step": "$9f(x) - 2f\\left(\\dfrac{-12x - 37}{9x - 9}\\right) = x - 4$",
                  "reason": "Writing a sentence as an equation: \"gives\" stands where the equals sign goes, and 4 less than $x$ is $x - 4$."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with the values of $f$ on the left: The difference of 10 times the value of $f$ at $x$ and 6 times its value at $\\dfrac{-8x - 4}{37x + 14}$ equals the sum of $x$ and 6.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "10*f(x)-6*f((-8*x-4)/(37*x+14)) = x+6",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the values of $f$ on the left: The difference of 10 times the value of $f$ at $x$ and 6 times its value at $\\dfrac{-8x - 4}{37x + 14}$ equals the sum of $x$ and 6.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The value of $f$ at $x$ is $f(x)$, and its value at $\\dfrac{-8x - 4}{37x + 14}$ is $f\\left(\\dfrac{-8x - 4}{37x + 14}\\right)$.",
                  "reason": "Function notation: the input goes in the brackets after $f$."
                },
                {
                  "step": "10 times the first value, less 6 times the second, is $10f(x) - 6f\\left(\\dfrac{-8x - 4}{37x + 14}\\right)$.",
                  "reason": "Writing a sentence as an equation: \"times\" means the number multiplies, and \"difference\" means the amount is taken away."
                },
                {
                  "step": "$10f(x) - 6f\\left(\\dfrac{-8x - 4}{37x + 14}\\right) = x + 6$",
                  "reason": "Writing a sentence as an equation: \"equals\" stands where the equals sign goes, and the sum of $x$ and 6 is $x + 6$."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with the values of $f$ on the left: Nine times the value of $f$ at $x$, less its value at $\\dfrac{-20x - 39}{16x - 8}$, is 8 more than $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "9*f(x)-f((-20*x-39)/(16*x-8)) = x+8",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with the values of $f$ on the left: Nine times the value of $f$ at $x$, less its value at $\\dfrac{-20x - 39}{16x - 8}$, is 8 more than $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The value of $f$ at $x$ is $f(x)$, and its value at $\\dfrac{-20x - 39}{16x - 8}$ is $f\\left(\\dfrac{-20x - 39}{16x - 8}\\right)$.",
                  "reason": "Function notation: the input goes in the brackets after $f$."
                },
                {
                  "step": "9 times the first value, less the second, is $9f(x) - f\\left(\\dfrac{-20x - 39}{16x - 8}\\right)$.",
                  "reason": "Writing a sentence as an equation: \"times\" means the number multiplies, and \"less\" means the amount is taken away."
                },
                {
                  "step": "$9f(x) - f\\left(\\dfrac{-20x - 39}{16x - 8}\\right) = x + 8$",
                  "reason": "Writing a sentence as an equation: \"is\" stands where the equals sign goes, and 8 more than $x$ is $x + 8$."
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "proofs": [],
  "prove": []
}
