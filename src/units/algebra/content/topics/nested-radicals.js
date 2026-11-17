export default {
  "number": 142,
  "title": "Square roots of a + b√c",
  "section": 8,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "316-317, 628-630"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Write $\\sqrt{11 + 6\\sqrt{2}}$ in the form $a + b\\sqrt{2}$ with integers $a$ and $b$.",
    "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
    "answer": "3+sqrt(2)",
    "solution": [
      "Write $\\sqrt{11 + 6\\sqrt{2}}$ in the form $a + b\\sqrt{2}$ with integers $a$ and $b$.",
      "$a^2 + 2b^2 + 2ab\\sqrt{2} = 11 + 6\\sqrt{2}$",
      "So $a^2 + 2b^2 = 11$ and $ab = 3$.",
      "So $(a, b) = (3, 1)$ or $(a, b) = (-3, -1)$.",
      "$\\sqrt{11 + 6\\sqrt{2}} = 3 + \\sqrt{2}$"
    ]
  },
  "ideas": [
    {
      "name": "Equal rational parts and equal irrational parts",
      "concrete": "If $a$ and $b$ are rational numbers with $a + b\\sqrt{7} = 4 - 3\\sqrt{7}$, then $a = 4$ and $b = -3$. Were $b$ not $-3$, then $\\sqrt{7} = \\dfrac{a - 4}{-3 - b}$ would be a fraction, and $\\sqrt{7}$ is irrational.",
      "general": "For rational numbers $a$, $b$, $p$ and $q$ and a whole number $c$ that is not the square of a whole number, $a + b\\sqrt{c} = p + q\\sqrt{c}$ exactly when $a = p$ and $b = q$: the **rational parts** are equal and the **irrational parts** are equal. The reason is that $\\sqrt{c}$ is irrational, which arithmetic proves for $\\sqrt{2}$ and for every whole number that is not a square."
    }
  ],
  "kinds": [
    {
      "id": "t142-k1",
      "forms": [
        {
          "example": {
            "problem": "Write $\\sqrt{9 - 4\\sqrt{5}}$ in the form $a + b\\sqrt{5}$ with integers $a$ and $b$.",
            "lines": [
              {
                "step": "Write $\\sqrt{9 - 4\\sqrt{5}}$ in the form $a + b\\sqrt{5}$ with integers $a$ and $b$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$a^2 + 5b^2 + 2ab\\sqrt{5} = 9 - 4\\sqrt{5}$",
                "reason": "Square of a binomial: with $\\sqrt{9 - 4\\sqrt{5}} = a + b\\sqrt{5}$ for integers $a$ and $b$, squaring both sides gives $(a + b\\sqrt{5})^2 = a^2 + 2ab\\sqrt{5} + 5b^2$, since the power of a product gives $(b\\sqrt{5})^2 = 5b^2$."
              },
              {
                "step": "So $a^2 + 5b^2 = 9$ and $ab = -2$.",
                "reason": "Equal rational parts and equal irrational parts: $a^2 + 5b^2$ and $2ab$ are integers and $\\sqrt{5}$ is irrational, so $a^2 + 5b^2 = 9$ and $2ab = -4$, which is $ab = -2$."
              },
              {
                "step": "So $(a, b) = (-2, 1)$ or $(a, b) = (2, -1)$.",
                "reason": "Factor pairs of the constant: $a$ and $b$ have opposite signs, the pairs of whole numbers with product $2$ are $(1, 2)$ and $(2, 1)$, and they give $a^2 + 5b^2$ the values $21$ and $9$, so only $(2, 1)$ fits."
              },
              {
                "step": "$\\sqrt{9 - 4\\sqrt{5}} = \\sqrt{5} - 2$",
                "reason": "Positive square root: the root is the one of the two at least 0; $2^2 = 4$ is below $(\\sqrt{5})^2 = 5$, so $\\sqrt{5} - 2$ is above 0 and $2 - \\sqrt{5}$ is below 0, since powers and roots of positive numbers keep the order."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $\\sqrt{19 + 8\\sqrt{3}}$ in the form $a + b\\sqrt{3}$ with integers $a$ and $b$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "4+sqrt(3)",
              "lines": [
                {
                  "step": "Write $\\sqrt{19 + 8\\sqrt{3}}$ in the form $a + b\\sqrt{3}$ with integers $a$ and $b$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$a^2 + 3b^2 + 2ab\\sqrt{3} = 19 + 8\\sqrt{3}$",
                  "reason": "Square of a binomial: with $\\sqrt{19 + 8\\sqrt{3}} = a + b\\sqrt{3}$ for integers $a$ and $b$, squaring both sides gives $(a + b\\sqrt{3})^2 = a^2 + 2ab\\sqrt{3} + 3b^2$, since the power of a product gives $(b\\sqrt{3})^2 = 3b^2$."
                },
                {
                  "step": "So $a^2 + 3b^2 = 19$ and $ab = 4$.",
                  "reason": "Equal rational parts and equal irrational parts: $a^2 + 3b^2$ and $2ab$ are integers and $\\sqrt{3}$ is irrational, so $a^2 + 3b^2 = 19$ and $2ab = 8$, which is $ab = 4$."
                },
                {
                  "step": "So $(a, b) = (4, 1)$ or $(a, b) = (-4, -1)$.",
                  "reason": "Factor pairs of the constant: $a$ and $b$ have the same sign, the pairs of whole numbers with product $4$ are $(1, 4)$, $(2, 2)$ and $(4, 1)$, and they give $a^2 + 3b^2$ the values $49$, $16$ and $19$, so only $(4, 1)$ fits."
                },
                {
                  "step": "$\\sqrt{19 + 8\\sqrt{3}} = 4 + \\sqrt{3}$",
                  "reason": "Positive square root: the root is the one of the two at least 0, and $4 + \\sqrt{3}$ is above 0 and $-4 - \\sqrt{3}$ is below 0."
                }
              ]
            },
            {
              "prompt": "Write $\\sqrt{37 - 20\\sqrt{3}}$ in the form $a + b\\sqrt{3}$ with integers $a$ and $b$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "5-2*sqrt(3)",
              "lines": [
                {
                  "step": "Write $\\sqrt{37 - 20\\sqrt{3}}$ in the form $a + b\\sqrt{3}$ with integers $a$ and $b$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$a^2 + 3b^2 + 2ab\\sqrt{3} = 37 - 20\\sqrt{3}$",
                  "reason": "Square of a binomial: with $\\sqrt{37 - 20\\sqrt{3}} = a + b\\sqrt{3}$ for integers $a$ and $b$, squaring both sides gives $(a + b\\sqrt{3})^2 = a^2 + 2ab\\sqrt{3} + 3b^2$, since the power of a product gives $(b\\sqrt{3})^2 = 3b^2$."
                },
                {
                  "step": "So $a^2 + 3b^2 = 37$ and $ab = -10$.",
                  "reason": "Equal rational parts and equal irrational parts: $a^2 + 3b^2$ and $2ab$ are integers and $\\sqrt{3}$ is irrational, so $a^2 + 3b^2 = 37$ and $2ab = -20$, which is $ab = -10$."
                },
                {
                  "step": "So $(a, b) = (5, -2)$ or $(a, b) = (-5, 2)$.",
                  "reason": "Factor pairs of the constant: $a$ and $b$ have opposite signs, the pairs of whole numbers with product $10$ are $(1, 10)$, $(2, 5)$, $(5, 2)$ and $(10, 1)$, and they give $a^2 + 3b^2$ the values $301$, $79$, $37$ and $103$, so only $(5, 2)$ fits."
                },
                {
                  "step": "$\\sqrt{37 - 20\\sqrt{3}} = 5 - 2\\sqrt{3}$",
                  "reason": "Positive square root: the root is the one of the two at least 0; $5^2 = 25$ is above $(2\\sqrt{3})^2 = 12$, so $5 - 2\\sqrt{3}$ is above 0 and $2\\sqrt{3} - 5$ is below 0, since powers and roots of positive numbers keep the order."
                }
              ]
            },
            {
              "prompt": "Write $\\sqrt{37 + 12\\sqrt{7}}$ in the form $a + b\\sqrt{7}$ with integers $a$ and $b$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "3+2*sqrt(7)",
              "lines": [
                {
                  "step": "Write $\\sqrt{37 + 12\\sqrt{7}}$ in the form $a + b\\sqrt{7}$ with integers $a$ and $b$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$a^2 + 7b^2 + 2ab\\sqrt{7} = 37 + 12\\sqrt{7}$",
                  "reason": "Square of a binomial: with $\\sqrt{37 + 12\\sqrt{7}} = a + b\\sqrt{7}$ for integers $a$ and $b$, squaring both sides gives $(a + b\\sqrt{7})^2 = a^2 + 2ab\\sqrt{7} + 7b^2$, since the power of a product gives $(b\\sqrt{7})^2 = 7b^2$."
                },
                {
                  "step": "So $a^2 + 7b^2 = 37$ and $ab = 6$.",
                  "reason": "Equal rational parts and equal irrational parts: $a^2 + 7b^2$ and $2ab$ are integers and $\\sqrt{7}$ is irrational, so $a^2 + 7b^2 = 37$ and $2ab = 12$, which is $ab = 6$."
                },
                {
                  "step": "So $(a, b) = (3, 2)$ or $(a, b) = (-3, -2)$.",
                  "reason": "Factor pairs of the constant: $a$ and $b$ have the same sign, the pairs of whole numbers with product $6$ are $(1, 6)$, $(2, 3)$, $(3, 2)$ and $(6, 1)$, and they give $a^2 + 7b^2$ the values $253$, $67$, $37$ and $43$, so only $(3, 2)$ fits."
                },
                {
                  "step": "$\\sqrt{37 + 12\\sqrt{7}} = 3 + 2\\sqrt{7}$",
                  "reason": "Positive square root: the root is the one of the two at least 0, and $3 + 2\\sqrt{7}$ is above 0 and $-3 - 2\\sqrt{7}$ is below 0."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write $\\sqrt{52 - 30\\sqrt{3}}$ in the form $a + b\\sqrt{3}$ with integers $a$ and $b$, solving, by substitution, the two equations that the equal parts give.",
            "lines": [
              {
                "step": "Write $\\sqrt{52 - 30\\sqrt{3}}$ in the form $a + b\\sqrt{3}$ with integers $a$ and $b$, solving, by substitution, the two equations that the equal parts give.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$a^2 + 3b^2 + 2ab\\sqrt{3} = 52 - 30\\sqrt{3}$",
                "reason": "Square of a binomial: with $\\sqrt{52 - 30\\sqrt{3}} = a + b\\sqrt{3}$ for integers $a$ and $b$, squaring both sides gives $(a + b\\sqrt{3})^2 = a^2 + 2ab\\sqrt{3} + 3b^2$, since the power of a product gives $(b\\sqrt{3})^2 = 3b^2$."
              },
              {
                "step": "So $a^2 + 3b^2 = 52$ and $ab = -15$.",
                "reason": "Equal rational parts and equal irrational parts: $a^2 + 3b^2$ and $2ab$ are integers and $\\sqrt{3}$ is irrational, so $a^2 + 3b^2 = 52$ and $2ab = -30$, which is $ab = -15$."
              },
              {
                "step": "$a^2 + \\dfrac{675}{a^2} = 52$",
                "reason": "Substitution: $ab = -15$ gives $b = \\dfrac{-15}{a}$, as $a$ is not 0, and this value in brackets takes the place of $b$ in the first equation, with $3 \\cdot (-15)^2 = 675$."
              },
              {
                "step": "$a^4 - 52a^2 + 675 = 0$",
                "reason": "Clearing fractions: both sides are multiplied by $a^2$, which is not 0, and $52a^2$ is taken from both sides."
              },
              {
                "step": "$(a^2 - 25)(a^2 - 27) = 0$",
                "reason": "Substitution for a repeated expression: with $y = a^2$ the left side is $y^2 - 52y + 675$, and factoring a quadratic gives the two numbers $-25$ and $-27$, with sum $-52$ and product $675$."
              },
              {
                "step": "So $a^2 = 25$ or $a^2 = 27$.",
                "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
              },
              {
                "step": "So $(a, b) = (-5, 3)$ or $(a, b) = (5, -3)$.",
                "reason": "Square roots of both sides: $a^2 = 25$ gives $a = 5$ or $a = -5$, and $b = \\dfrac{-15}{a}$; the other equation $a^2 = 27$ is cut, since $27$ is not the square of an integer."
              },
              {
                "step": "$\\sqrt{52 - 30\\sqrt{3}} = 3\\sqrt{3} - 5$",
                "reason": "Positive square root: the root is the one of the two at least 0; $5^2 = 25$ is below $(3\\sqrt{3})^2 = 27$, so $3\\sqrt{3} - 5$ is above 0 and $5 - 3\\sqrt{3}$ is below 0, since powers and roots of positive numbers keep the order."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $\\sqrt{34 + 24\\sqrt{2}}$ in the form $a + b\\sqrt{2}$ with integers $a$ and $b$, solving, by substitution, the two equations that the equal parts give.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "4+3*sqrt(2)",
              "lines": [
                {
                  "step": "Write $\\sqrt{34 + 24\\sqrt{2}}$ in the form $a + b\\sqrt{2}$ with integers $a$ and $b$, solving, by substitution, the two equations that the equal parts give.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$a^2 + 2b^2 + 2ab\\sqrt{2} = 34 + 24\\sqrt{2}$",
                  "reason": "Square of a binomial: with $\\sqrt{34 + 24\\sqrt{2}} = a + b\\sqrt{2}$ for integers $a$ and $b$, squaring both sides gives $(a + b\\sqrt{2})^2 = a^2 + 2ab\\sqrt{2} + 2b^2$, since the power of a product gives $(b\\sqrt{2})^2 = 2b^2$."
                },
                {
                  "step": "So $a^2 + 2b^2 = 34$ and $ab = 12$.",
                  "reason": "Equal rational parts and equal irrational parts: $a^2 + 2b^2$ and $2ab$ are integers and $\\sqrt{2}$ is irrational, so $a^2 + 2b^2 = 34$ and $2ab = 24$, which is $ab = 12$."
                },
                {
                  "step": "$a^2 + \\dfrac{288}{a^2} = 34$",
                  "reason": "Substitution: $ab = 12$ gives $b = \\dfrac{12}{a}$, as $a$ is not 0, and this value in brackets takes the place of $b$ in the first equation, with $2 \\cdot 12^2 = 288$."
                },
                {
                  "step": "$a^4 - 34a^2 + 288 = 0$",
                  "reason": "Clearing fractions: both sides are multiplied by $a^2$, which is not 0, and $34a^2$ is taken from both sides."
                },
                {
                  "step": "$(a^2 - 16)(a^2 - 18) = 0$",
                  "reason": "Substitution for a repeated expression: with $y = a^2$ the left side is $y^2 - 34y + 288$, and factoring a quadratic gives the two numbers $-16$ and $-18$, with sum $-34$ and product $288$."
                },
                {
                  "step": "So $a^2 = 16$ or $a^2 = 18$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "So $(a, b) = (4, 3)$ or $(a, b) = (-4, -3)$.",
                  "reason": "Square roots of both sides: $a^2 = 16$ gives $a = 4$ or $a = -4$, and $b = \\dfrac{12}{a}$; the other equation $a^2 = 18$ is cut, since $18$ is not the square of an integer."
                },
                {
                  "step": "$\\sqrt{34 + 24\\sqrt{2}} = 4 + 3\\sqrt{2}$",
                  "reason": "Positive square root: the root is the one of the two at least 0, and $4 + 3\\sqrt{2}$ is above 0 and $-4 - 3\\sqrt{2}$ is below 0."
                }
              ]
            },
            {
              "prompt": "Write $\\sqrt{41 + 12\\sqrt{5}}$ in the form $a + b\\sqrt{5}$ with integers $a$ and $b$, solving, by substitution, the two equations that the equal parts give.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "6+sqrt(5)",
              "lines": [
                {
                  "step": "Write $\\sqrt{41 + 12\\sqrt{5}}$ in the form $a + b\\sqrt{5}$ with integers $a$ and $b$, solving, by substitution, the two equations that the equal parts give.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$a^2 + 5b^2 + 2ab\\sqrt{5} = 41 + 12\\sqrt{5}$",
                  "reason": "Square of a binomial: with $\\sqrt{41 + 12\\sqrt{5}} = a + b\\sqrt{5}$ for integers $a$ and $b$, squaring both sides gives $(a + b\\sqrt{5})^2 = a^2 + 2ab\\sqrt{5} + 5b^2$, since the power of a product gives $(b\\sqrt{5})^2 = 5b^2$."
                },
                {
                  "step": "So $a^2 + 5b^2 = 41$ and $ab = 6$.",
                  "reason": "Equal rational parts and equal irrational parts: $a^2 + 5b^2$ and $2ab$ are integers and $\\sqrt{5}$ is irrational, so $a^2 + 5b^2 = 41$ and $2ab = 12$, which is $ab = 6$."
                },
                {
                  "step": "$a^2 + \\dfrac{180}{a^2} = 41$",
                  "reason": "Substitution: $ab = 6$ gives $b = \\dfrac{6}{a}$, as $a$ is not 0, and this value in brackets takes the place of $b$ in the first equation, with $5 \\cdot 6^2 = 180$."
                },
                {
                  "step": "$a^4 - 41a^2 + 180 = 0$",
                  "reason": "Clearing fractions: both sides are multiplied by $a^2$, which is not 0, and $41a^2$ is taken from both sides."
                },
                {
                  "step": "$(a^2 - 5)(a^2 - 36) = 0$",
                  "reason": "Substitution for a repeated expression: with $y = a^2$ the left side is $y^2 - 41y + 180$, and factoring a quadratic gives the two numbers $-5$ and $-36$, with sum $-41$ and product $180$."
                },
                {
                  "step": "So $a^2 = 5$ or $a^2 = 36$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "So $(a, b) = (6, 1)$ or $(a, b) = (-6, -1)$.",
                  "reason": "Square roots of both sides: $a^2 = 36$ gives $a = 6$ or $a = -6$, and $b = \\dfrac{6}{a}$; the other equation $a^2 = 5$ is cut, since $5$ is not the square of an integer."
                },
                {
                  "step": "$\\sqrt{41 + 12\\sqrt{5}} = 6 + \\sqrt{5}$",
                  "reason": "Positive square root: the root is the one of the two at least 0, and $6 + \\sqrt{5}$ is above 0 and $-6 - \\sqrt{5}$ is below 0."
                }
              ]
            },
            {
              "prompt": "Write $\\sqrt{71 - 16\\sqrt{7}}$ in the form $a + b\\sqrt{7}$ with integers $a$ and $b$, solving, by substitution, the two equations that the equal parts give.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "8-sqrt(7)",
              "lines": [
                {
                  "step": "Write $\\sqrt{71 - 16\\sqrt{7}}$ in the form $a + b\\sqrt{7}$ with integers $a$ and $b$, solving, by substitution, the two equations that the equal parts give.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$a^2 + 7b^2 + 2ab\\sqrt{7} = 71 - 16\\sqrt{7}$",
                  "reason": "Square of a binomial: with $\\sqrt{71 - 16\\sqrt{7}} = a + b\\sqrt{7}$ for integers $a$ and $b$, squaring both sides gives $(a + b\\sqrt{7})^2 = a^2 + 2ab\\sqrt{7} + 7b^2$, since the power of a product gives $(b\\sqrt{7})^2 = 7b^2$."
                },
                {
                  "step": "So $a^2 + 7b^2 = 71$ and $ab = -8$.",
                  "reason": "Equal rational parts and equal irrational parts: $a^2 + 7b^2$ and $2ab$ are integers and $\\sqrt{7}$ is irrational, so $a^2 + 7b^2 = 71$ and $2ab = -16$, which is $ab = -8$."
                },
                {
                  "step": "$a^2 + \\dfrac{448}{a^2} = 71$",
                  "reason": "Substitution: $ab = -8$ gives $b = \\dfrac{-8}{a}$, as $a$ is not 0, and this value in brackets takes the place of $b$ in the first equation, with $7 \\cdot (-8)^2 = 448$."
                },
                {
                  "step": "$a^4 - 71a^2 + 448 = 0$",
                  "reason": "Clearing fractions: both sides are multiplied by $a^2$, which is not 0, and $71a^2$ is taken from both sides."
                },
                {
                  "step": "$(a^2 - 7)(a^2 - 64) = 0$",
                  "reason": "Substitution for a repeated expression: with $y = a^2$ the left side is $y^2 - 71y + 448$, and factoring a quadratic gives the two numbers $-7$ and $-64$, with sum $-71$ and product $448$."
                },
                {
                  "step": "So $a^2 = 7$ or $a^2 = 64$.",
                  "reason": "Zero-product property: a product is 0 exactly when one of its factors is 0."
                },
                {
                  "step": "So $(a, b) = (8, -1)$ or $(a, b) = (-8, 1)$.",
                  "reason": "Square roots of both sides: $a^2 = 64$ gives $a = 8$ or $a = -8$, and $b = \\dfrac{-8}{a}$; the other equation $a^2 = 7$ is cut, since $7$ is not the square of an integer."
                },
                {
                  "step": "$\\sqrt{71 - 16\\sqrt{7}} = 8 - \\sqrt{7}$",
                  "reason": "Positive square root: the root is the one of the two at least 0; $8^2 = 64$ is above $(\\sqrt{7})^2 = 7$, so $8 - \\sqrt{7}$ is above 0 and $\\sqrt{7} - 8$ is below 0, since powers and roots of positive numbers keep the order."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write $\\sqrt{19 - 4\\sqrt{21}}$ in simplest surd form, first as $\\sqrt{m} - \\sqrt{n}$ with whole numbers $m$ greater than $n$.",
            "lines": [
              {
                "step": "Write $\\sqrt{19 - 4\\sqrt{21}}$ in simplest surd form, first as $\\sqrt{m} - \\sqrt{n}$ with whole numbers $m$ greater than $n$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$m + n - 2\\sqrt{mn} = 19 - 4\\sqrt{21}$",
                "reason": "Square of a binomial: squaring $\\sqrt{19 - 4\\sqrt{21}} = \\sqrt{m} - \\sqrt{n}$ gives $m - 2\\sqrt{m}\\sqrt{n} + n$, and the root of a product gives $\\sqrt{m}\\sqrt{n} = \\sqrt{mn}$."
              },
              {
                "step": "So $m + n = 19$ and $mn = 84$.",
                "reason": "Equal rational parts and equal irrational parts: $m + n = 19$, and $2\\sqrt{mn} = 4\\sqrt{21} = 2\\sqrt{84}$ by the root of a product, so $mn = 84$."
              },
              {
                "step": "The numbers $m$ and $n$ are the roots of $x^2 - 19x + 84 = 0$.",
                "reason": "Sum of roots $-b/a$ and product of roots $c/a$: a quadratic $x^2 + bx + c$ whose roots have sum $19$ and product $84$ has $b = -19$ and $c = 84$."
              },
              {
                "step": "Since $x^2 - 19x + 84 = (x - 7)(x - 12)$, the roots are $7$ and $12$.",
                "reason": "Factoring a quadratic: the two numbers $-7$ and $-12$ have sum $-19$ and product $84$, and the zero-product property gives the roots."
              },
              {
                "step": "$\\sqrt{19 - 4\\sqrt{21}} = \\sqrt{12} - \\sqrt{7}$",
                "reason": "Positive square root: with $m$ above $n$, $\\sqrt{m} - \\sqrt{n}$ is above 0, since powers and roots of positive numbers keep the order, so $m = 12$ and $n = 7$."
              },
              {
                "step": "$\\sqrt{12} - \\sqrt{7} = 2\\sqrt{3} - \\sqrt{7}$",
                "reason": "Simplest radical form: $12 = 4 \\cdot 3$, and the root of a product takes each square factor out of its root."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $\\sqrt{25 + 6\\sqrt{14}}$ in simplest surd form, first as $\\sqrt{m} + \\sqrt{n}$ with whole numbers $m$ greater than $n$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "3*sqrt(2)+sqrt(7)",
              "lines": [
                {
                  "step": "Write $\\sqrt{25 + 6\\sqrt{14}}$ in simplest surd form, first as $\\sqrt{m} + \\sqrt{n}$ with whole numbers $m$ greater than $n$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$m + n + 2\\sqrt{mn} = 25 + 6\\sqrt{14}$",
                  "reason": "Square of a binomial: squaring $\\sqrt{25 + 6\\sqrt{14}} = \\sqrt{m} + \\sqrt{n}$ gives $m + 2\\sqrt{m}\\sqrt{n} + n$, and the root of a product gives $\\sqrt{m}\\sqrt{n} = \\sqrt{mn}$."
                },
                {
                  "step": "So $m + n = 25$ and $mn = 126$.",
                  "reason": "Equal rational parts and equal irrational parts: $m + n = 25$, and $2\\sqrt{mn} = 6\\sqrt{14} = 2\\sqrt{126}$ by the root of a product, so $mn = 126$."
                },
                {
                  "step": "The numbers $m$ and $n$ are the roots of $x^2 - 25x + 126 = 0$.",
                  "reason": "Sum of roots $-b/a$ and product of roots $c/a$: a quadratic $x^2 + bx + c$ whose roots have sum $25$ and product $126$ has $b = -25$ and $c = 126$."
                },
                {
                  "step": "Since $x^2 - 25x + 126 = (x - 7)(x - 18)$, the roots are $7$ and $18$.",
                  "reason": "Factoring a quadratic: the two numbers $-7$ and $-18$ have sum $-25$ and product $126$, and the zero-product property gives the roots."
                },
                {
                  "step": "$\\sqrt{25 + 6\\sqrt{14}} = \\sqrt{18} + \\sqrt{7}$",
                  "reason": "Positive square root: with $m$ above $n$, $\\sqrt{m} + \\sqrt{n}$ is above 0, since powers and roots of positive numbers keep the order, so $m = 18$ and $n = 7$."
                },
                {
                  "step": "$\\sqrt{18} + \\sqrt{7} = 3\\sqrt{2} + \\sqrt{7}$",
                  "reason": "Simplest radical form: $18 = 9 \\cdot 2$, and the root of a product takes each square factor out of its root."
                }
              ]
            },
            {
              "prompt": "Write $\\sqrt{27 - 4\\sqrt{35}}$ in simplest surd form, first as $\\sqrt{m} - \\sqrt{n}$ with whole numbers $m$ greater than $n$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "2*sqrt(5)-sqrt(7)",
              "lines": [
                {
                  "step": "Write $\\sqrt{27 - 4\\sqrt{35}}$ in simplest surd form, first as $\\sqrt{m} - \\sqrt{n}$ with whole numbers $m$ greater than $n$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$m + n - 2\\sqrt{mn} = 27 - 4\\sqrt{35}$",
                  "reason": "Square of a binomial: squaring $\\sqrt{27 - 4\\sqrt{35}} = \\sqrt{m} - \\sqrt{n}$ gives $m - 2\\sqrt{m}\\sqrt{n} + n$, and the root of a product gives $\\sqrt{m}\\sqrt{n} = \\sqrt{mn}$."
                },
                {
                  "step": "So $m + n = 27$ and $mn = 140$.",
                  "reason": "Equal rational parts and equal irrational parts: $m + n = 27$, and $2\\sqrt{mn} = 4\\sqrt{35} = 2\\sqrt{140}$ by the root of a product, so $mn = 140$."
                },
                {
                  "step": "The numbers $m$ and $n$ are the roots of $x^2 - 27x + 140 = 0$.",
                  "reason": "Sum of roots $-b/a$ and product of roots $c/a$: a quadratic $x^2 + bx + c$ whose roots have sum $27$ and product $140$ has $b = -27$ and $c = 140$."
                },
                {
                  "step": "Since $x^2 - 27x + 140 = (x - 7)(x - 20)$, the roots are $7$ and $20$.",
                  "reason": "Factoring a quadratic: the two numbers $-7$ and $-20$ have sum $-27$ and product $140$, and the zero-product property gives the roots."
                },
                {
                  "step": "$\\sqrt{27 - 4\\sqrt{35}} = \\sqrt{20} - \\sqrt{7}$",
                  "reason": "Positive square root: with $m$ above $n$, $\\sqrt{m} - \\sqrt{n}$ is above 0, since powers and roots of positive numbers keep the order, so $m = 20$ and $n = 7$."
                },
                {
                  "step": "$\\sqrt{20} - \\sqrt{7} = 2\\sqrt{5} - \\sqrt{7}$",
                  "reason": "Simplest radical form: $20 = 4 \\cdot 5$, and the root of a product takes each square factor out of its root."
                }
              ]
            },
            {
              "prompt": "Write $\\sqrt{23 + 4\\sqrt{30}}$ in simplest surd form, first as $\\sqrt{m} + \\sqrt{n}$ with whole numbers $m$ greater than $n$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "sqrt(15)+2*sqrt(2)",
              "lines": [
                {
                  "step": "Write $\\sqrt{23 + 4\\sqrt{30}}$ in simplest surd form, first as $\\sqrt{m} + \\sqrt{n}$ with whole numbers $m$ greater than $n$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$m + n + 2\\sqrt{mn} = 23 + 4\\sqrt{30}$",
                  "reason": "Square of a binomial: squaring $\\sqrt{23 + 4\\sqrt{30}} = \\sqrt{m} + \\sqrt{n}$ gives $m + 2\\sqrt{m}\\sqrt{n} + n$, and the root of a product gives $\\sqrt{m}\\sqrt{n} = \\sqrt{mn}$."
                },
                {
                  "step": "So $m + n = 23$ and $mn = 120$.",
                  "reason": "Equal rational parts and equal irrational parts: $m + n = 23$, and $2\\sqrt{mn} = 4\\sqrt{30} = 2\\sqrt{120}$ by the root of a product, so $mn = 120$."
                },
                {
                  "step": "The numbers $m$ and $n$ are the roots of $x^2 - 23x + 120 = 0$.",
                  "reason": "Sum of roots $-b/a$ and product of roots $c/a$: a quadratic $x^2 + bx + c$ whose roots have sum $23$ and product $120$ has $b = -23$ and $c = 120$."
                },
                {
                  "step": "Since $x^2 - 23x + 120 = (x - 8)(x - 15)$, the roots are $8$ and $15$.",
                  "reason": "Factoring a quadratic: the two numbers $-8$ and $-15$ have sum $-23$ and product $120$, and the zero-product property gives the roots."
                },
                {
                  "step": "$\\sqrt{23 + 4\\sqrt{30}} = \\sqrt{15} + \\sqrt{8}$",
                  "reason": "Positive square root: with $m$ above $n$, $\\sqrt{m} + \\sqrt{n}$ is above 0, since powers and roots of positive numbers keep the order, so $m = 15$ and $n = 8$."
                },
                {
                  "step": "$\\sqrt{15} + \\sqrt{8} = \\sqrt{15} + 2\\sqrt{2}$",
                  "reason": "Simplest radical form: $8 = 4 \\cdot 2$, and the root of a product takes each square factor out of its root."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write $\\sqrt[4]{184 - 40\\sqrt{21}}$ in simplest surd form.",
            "lines": [
              {
                "step": "Write $\\sqrt[4]{184 - 40\\sqrt{21}}$ in simplest surd form.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\sqrt[4]{184 - 40\\sqrt{21}} = \\sqrt{\\sqrt{184 - 40\\sqrt{21}}}$",
                "reason": "Power law: $\\left(x^{1/2}\\right)^{1/2} = x^{1/4}$ for $x$ at least 0, so a fourth root is the square root of the square root."
              },
              {
                "step": "$a^2 + 21b^2 + 2ab\\sqrt{21} = 184 - 40\\sqrt{21}$",
                "reason": "Square of a binomial: with $\\sqrt{184 - 40\\sqrt{21}} = a + b\\sqrt{21}$ for integers $a$ and $b$, squaring both sides gives $(a + b\\sqrt{21})^2 = a^2 + 2ab\\sqrt{21} + 21b^2$, since the power of a product gives $(b\\sqrt{21})^2 = 21b^2$."
              },
              {
                "step": "So $a^2 + 21b^2 = 184$ and $ab = -20$.",
                "reason": "Equal rational parts and equal irrational parts: $a^2 + 21b^2$ and $2ab$ are integers and $\\sqrt{21}$ is irrational, so $a^2 + 21b^2 = 184$ and $2ab = -40$, which is $ab = -20$."
              },
              {
                "step": "So $(a, b) = (10, -2)$ or $(a, b) = (-10, 2)$.",
                "reason": "Factor pairs of the constant: $a$ and $b$ have opposite signs, the pairs of whole numbers with product $20$ are $(1, 20)$, $(2, 10)$, $(4, 5)$, $(5, 4)$, $(10, 2)$ and $(20, 1)$, and they give $a^2 + 21b^2$ the values $8{,}401$, $2{,}104$, $541$, $361$, $184$ and $421$, so only $(10, 2)$ fits."
              },
              {
                "step": "$\\sqrt{184 - 40\\sqrt{21}} = 10 - 2\\sqrt{21}$",
                "reason": "Positive square root: the root is the one of the two at least 0; $10^2 = 100$ is above $(2\\sqrt{21})^2 = 84$, so $10 - 2\\sqrt{21}$ is above 0 and $2\\sqrt{21} - 10$ is below 0, since powers and roots of positive numbers keep the order."
              },
              {
                "step": "$10 - 2\\sqrt{21} = \\left(\\sqrt{7} - \\sqrt{3}\\right)^2$",
                "reason": "Square of a binomial: $\\left(\\sqrt{7} - \\sqrt{3}\\right)^2 = 7 - 2\\sqrt{7}\\sqrt{3} + 3 = 10 - 2\\sqrt{21}$ by the root of a product; of the ways to write $21$ as a product, $1 \\cdot 21$, $3 \\cdot 7$, only $7$ and $3$ add to $10$."
              },
              {
                "step": "$\\sqrt[4]{184 - 40\\sqrt{21}} = \\sqrt{7} - \\sqrt{3}$",
                "reason": "Root of a square: by lines 2, 6 and 7 the fourth root is $\\sqrt{\\left(\\sqrt{7} - \\sqrt{3}\\right)^2} = \\left|\\sqrt{7} - \\sqrt{3}\\right|$, and $\\sqrt{7} - \\sqrt{3}$ is above 0, since $7$ is above $3$ and powers and roots of positive numbers keep the order."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $\\sqrt[4]{137 + 36\\sqrt{14}}$ in simplest surd form.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "sqrt(2)+sqrt(7)",
              "lines": [
                {
                  "step": "Write $\\sqrt[4]{137 + 36\\sqrt{14}}$ in simplest surd form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt[4]{137 + 36\\sqrt{14}} = \\sqrt{\\sqrt{137 + 36\\sqrt{14}}}$",
                  "reason": "Power law: $\\left(x^{1/2}\\right)^{1/2} = x^{1/4}$ for $x$ at least 0, so a fourth root is the square root of the square root."
                },
                {
                  "step": "$a^2 + 14b^2 + 2ab\\sqrt{14} = 137 + 36\\sqrt{14}$",
                  "reason": "Square of a binomial: with $\\sqrt{137 + 36\\sqrt{14}} = a + b\\sqrt{14}$ for integers $a$ and $b$, squaring both sides gives $(a + b\\sqrt{14})^2 = a^2 + 2ab\\sqrt{14} + 14b^2$, since the power of a product gives $(b\\sqrt{14})^2 = 14b^2$."
                },
                {
                  "step": "So $a^2 + 14b^2 = 137$ and $ab = 18$.",
                  "reason": "Equal rational parts and equal irrational parts: $a^2 + 14b^2$ and $2ab$ are integers and $\\sqrt{14}$ is irrational, so $a^2 + 14b^2 = 137$ and $2ab = 36$, which is $ab = 18$."
                },
                {
                  "step": "So $(a, b) = (9, 2)$ or $(a, b) = (-9, -2)$.",
                  "reason": "Factor pairs of the constant: $a$ and $b$ have the same sign, the pairs of whole numbers with product $18$ are $(1, 18)$, $(2, 9)$, $(3, 6)$, $(6, 3)$, $(9, 2)$ and $(18, 1)$, and they give $a^2 + 14b^2$ the values $4{,}537$, $1{,}138$, $513$, $162$, $137$ and $338$, so only $(9, 2)$ fits."
                },
                {
                  "step": "$\\sqrt{137 + 36\\sqrt{14}} = 9 + 2\\sqrt{14}$",
                  "reason": "Positive square root: the root is the one of the two at least 0, and $9 + 2\\sqrt{14}$ is above 0 and $-9 - 2\\sqrt{14}$ is below 0."
                },
                {
                  "step": "$9 + 2\\sqrt{14} = \\left(\\sqrt{2} + \\sqrt{7}\\right)^2$",
                  "reason": "Square of a binomial: $\\left(\\sqrt{2} + \\sqrt{7}\\right)^2 = 2 + 2\\sqrt{2}\\sqrt{7} + 7 = 9 + 2\\sqrt{14}$ by the root of a product; of the ways to write $14$ as a product, $1 \\cdot 14$, $2 \\cdot 7$, only $2$ and $7$ add to $9$."
                },
                {
                  "step": "$\\sqrt[4]{137 + 36\\sqrt{14}} = \\sqrt{2} + \\sqrt{7}$",
                  "reason": "Root of a square: by lines 2, 6 and 7 the fourth root is $\\sqrt{\\left(\\sqrt{2} + \\sqrt{7}\\right)^2} = \\left|\\sqrt{2} + \\sqrt{7}\\right|$, and $\\sqrt{2} + \\sqrt{7}$ is above 0."
                }
              ]
            },
            {
              "prompt": "Write $\\sqrt[4]{124 + 32\\sqrt{15}}$ in simplest surd form.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "sqrt(3)+sqrt(5)",
              "lines": [
                {
                  "step": "Write $\\sqrt[4]{124 + 32\\sqrt{15}}$ in simplest surd form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt[4]{124 + 32\\sqrt{15}} = \\sqrt{\\sqrt{124 + 32\\sqrt{15}}}$",
                  "reason": "Power law: $\\left(x^{1/2}\\right)^{1/2} = x^{1/4}$ for $x$ at least 0, so a fourth root is the square root of the square root."
                },
                {
                  "step": "$a^2 + 15b^2 + 2ab\\sqrt{15} = 124 + 32\\sqrt{15}$",
                  "reason": "Square of a binomial: with $\\sqrt{124 + 32\\sqrt{15}} = a + b\\sqrt{15}$ for integers $a$ and $b$, squaring both sides gives $(a + b\\sqrt{15})^2 = a^2 + 2ab\\sqrt{15} + 15b^2$, since the power of a product gives $(b\\sqrt{15})^2 = 15b^2$."
                },
                {
                  "step": "So $a^2 + 15b^2 = 124$ and $ab = 16$.",
                  "reason": "Equal rational parts and equal irrational parts: $a^2 + 15b^2$ and $2ab$ are integers and $\\sqrt{15}$ is irrational, so $a^2 + 15b^2 = 124$ and $2ab = 32$, which is $ab = 16$."
                },
                {
                  "step": "So $(a, b) = (8, 2)$ or $(a, b) = (-8, -2)$.",
                  "reason": "Factor pairs of the constant: $a$ and $b$ have the same sign, the pairs of whole numbers with product $16$ are $(1, 16)$, $(2, 8)$, $(4, 4)$, $(8, 2)$ and $(16, 1)$, and they give $a^2 + 15b^2$ the values $3{,}841$, $964$, $256$, $124$ and $271$, so only $(8, 2)$ fits."
                },
                {
                  "step": "$\\sqrt{124 + 32\\sqrt{15}} = 8 + 2\\sqrt{15}$",
                  "reason": "Positive square root: the root is the one of the two at least 0, and $8 + 2\\sqrt{15}$ is above 0 and $-8 - 2\\sqrt{15}$ is below 0."
                },
                {
                  "step": "$8 + 2\\sqrt{15} = \\left(\\sqrt{3} + \\sqrt{5}\\right)^2$",
                  "reason": "Square of a binomial: $\\left(\\sqrt{3} + \\sqrt{5}\\right)^2 = 3 + 2\\sqrt{3}\\sqrt{5} + 5 = 8 + 2\\sqrt{15}$ by the root of a product; of the ways to write $15$ as a product, $1 \\cdot 15$, $3 \\cdot 5$, only $3$ and $5$ add to $8$."
                },
                {
                  "step": "$\\sqrt[4]{124 + 32\\sqrt{15}} = \\sqrt{3} + \\sqrt{5}$",
                  "reason": "Root of a square: by lines 2, 6 and 7 the fourth root is $\\sqrt{\\left(\\sqrt{3} + \\sqrt{5}\\right)^2} = \\left|\\sqrt{3} + \\sqrt{5}\\right|$, and $\\sqrt{3} + \\sqrt{5}$ is above 0."
                }
              ]
            },
            {
              "prompt": "Write $\\sqrt[4]{241 - 44\\sqrt{30}}$ in simplest surd form.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "sqrt(6)-sqrt(5)",
              "lines": [
                {
                  "step": "Write $\\sqrt[4]{241 - 44\\sqrt{30}}$ in simplest surd form.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\sqrt[4]{241 - 44\\sqrt{30}} = \\sqrt{\\sqrt{241 - 44\\sqrt{30}}}$",
                  "reason": "Power law: $\\left(x^{1/2}\\right)^{1/2} = x^{1/4}$ for $x$ at least 0, so a fourth root is the square root of the square root."
                },
                {
                  "step": "$a^2 + 30b^2 + 2ab\\sqrt{30} = 241 - 44\\sqrt{30}$",
                  "reason": "Square of a binomial: with $\\sqrt{241 - 44\\sqrt{30}} = a + b\\sqrt{30}$ for integers $a$ and $b$, squaring both sides gives $(a + b\\sqrt{30})^2 = a^2 + 2ab\\sqrt{30} + 30b^2$, since the power of a product gives $(b\\sqrt{30})^2 = 30b^2$."
                },
                {
                  "step": "So $a^2 + 30b^2 = 241$ and $ab = -22$.",
                  "reason": "Equal rational parts and equal irrational parts: $a^2 + 30b^2$ and $2ab$ are integers and $\\sqrt{30}$ is irrational, so $a^2 + 30b^2 = 241$ and $2ab = -44$, which is $ab = -22$."
                },
                {
                  "step": "So $(a, b) = (11, -2)$ or $(a, b) = (-11, 2)$.",
                  "reason": "Factor pairs of the constant: $a$ and $b$ have opposite signs, the pairs of whole numbers with product $22$ are $(1, 22)$, $(2, 11)$, $(11, 2)$ and $(22, 1)$, and they give $a^2 + 30b^2$ the values $14{,}521$, $3{,}634$, $241$ and $514$, so only $(11, 2)$ fits."
                },
                {
                  "step": "$\\sqrt{241 - 44\\sqrt{30}} = 11 - 2\\sqrt{30}$",
                  "reason": "Positive square root: the root is the one of the two at least 0; $11^2 = 121$ is above $(2\\sqrt{30})^2 = 120$, so $11 - 2\\sqrt{30}$ is above 0 and $2\\sqrt{30} - 11$ is below 0, since powers and roots of positive numbers keep the order."
                },
                {
                  "step": "$11 - 2\\sqrt{30} = \\left(\\sqrt{6} - \\sqrt{5}\\right)^2$",
                  "reason": "Square of a binomial: $\\left(\\sqrt{6} - \\sqrt{5}\\right)^2 = 6 - 2\\sqrt{6}\\sqrt{5} + 5 = 11 - 2\\sqrt{30}$ by the root of a product; of the ways to write $30$ as a product, $1 \\cdot 30$, $2 \\cdot 15$, $3 \\cdot 10$, $5 \\cdot 6$, only $6$ and $5$ add to $11$."
                },
                {
                  "step": "$\\sqrt[4]{241 - 44\\sqrt{30}} = \\sqrt{6} - \\sqrt{5}$",
                  "reason": "Root of a square: by lines 2, 6 and 7 the fourth root is $\\sqrt{\\left(\\sqrt{6} - \\sqrt{5}\\right)^2} = \\left|\\sqrt{6} - \\sqrt{5}\\right|$, and $\\sqrt{6} - \\sqrt{5}$ is above 0, since $6$ is above $5$ and powers and roots of positive numbers keep the order."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write $\\sqrt{x + 4 - 6\\sqrt{x - 5}}$, for $x$ at least $14$, as an expression with one square root.",
            "lines": [
              {
                "step": "Write $\\sqrt{x + 4 - 6\\sqrt{x - 5}}$, for $x$ at least $14$, as an expression with one square root.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $y = \\sqrt{x - 5}$. Then $y^2 = x - 5$, so $x = y^2 + 5$.",
                "reason": "Positive square root: $x - 5$ is at least 0, so its root $y$ is at least 0 (0 when $x = 5$) and $y^2 = x - 5$."
              },
              {
                "step": "$x + 4 - 6\\sqrt{x - 5} = y^2 - 6y + 9$",
                "reason": "Substitution for a repeated expression: $y$ takes the place of $\\sqrt{x - 5}$, and $y^2 + 5$ in brackets takes the place of $x$; $5 + 4 = 9$."
              },
              {
                "step": "$y^2 - 6y + 9 = (y - 3)^2$",
                "reason": "Square of a binomial: $(y - 3)^2 = y^2 - 2 \\cdot 3y + 3^2$."
              },
              {
                "step": "$\\sqrt{x + 4 - 6\\sqrt{x - 5}} = |y - 3|$",
                "reason": "Root of a square: $\\sqrt{(y - 3)^2} = |y - 3|$."
              },
              {
                "step": "$\\sqrt{x + 4 - 6\\sqrt{x - 5}} = \\sqrt{x - 5} - 3$",
                "reason": "Absolute value: $x - 5$ is at least $9$, so $y = \\sqrt{x - 5}$ is at least $3$, since powers and roots of positive numbers keep the order; so $y - 3$ is at least 0 and is its own absolute value; then $\\sqrt{x - 5}$ takes the place of $y$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $\\sqrt{x + 9 + 8\\sqrt{x - 7}}$, for $x$ at least $7$, as an expression with one square root.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "sqrt(x-7)+4",
              "lines": [
                {
                  "step": "Write $\\sqrt{x + 9 + 8\\sqrt{x - 7}}$, for $x$ at least $7$, as an expression with one square root.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $y = \\sqrt{x - 7}$. Then $y^2 = x - 7$, so $x = y^2 + 7$.",
                  "reason": "Positive square root: $x - 7$ is at least 0, so its root $y$ is at least 0 (0 when $x = 7$) and $y^2 = x - 7$."
                },
                {
                  "step": "$x + 9 + 8\\sqrt{x - 7} = y^2 + 8y + 16$",
                  "reason": "Substitution for a repeated expression: $y$ takes the place of $\\sqrt{x - 7}$, and $y^2 + 7$ in brackets takes the place of $x$; $7 + 9 = 16$."
                },
                {
                  "step": "$y^2 + 8y + 16 = (y + 4)^2$",
                  "reason": "Square of a binomial: $(y + 4)^2 = y^2 + 2 \\cdot 4y + 4^2$."
                },
                {
                  "step": "$\\sqrt{x + 9 + 8\\sqrt{x - 7}} = |y + 4|$",
                  "reason": "Root of a square: $\\sqrt{(y + 4)^2} = |y + 4|$."
                },
                {
                  "step": "$\\sqrt{x + 9 + 8\\sqrt{x - 7}} = \\sqrt{x - 7} + 4$",
                  "reason": "Absolute value: $y$ is at least 0 and $4$ is above 0, so $y + 4$ is above 0 and is its own absolute value; then $\\sqrt{x - 7}$ takes the place of $y$."
                }
              ]
            },
            {
              "prompt": "Write $\\sqrt{x + 3 - 4\\sqrt{x - 1}}$, for $x$ at least $5$, as an expression with one square root.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "sqrt(x-1)-2",
              "lines": [
                {
                  "step": "Write $\\sqrt{x + 3 - 4\\sqrt{x - 1}}$, for $x$ at least $5$, as an expression with one square root.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $y = \\sqrt{x - 1}$. Then $y^2 = x - 1$, so $x = y^2 + 1$.",
                  "reason": "Positive square root: $x - 1$ is at least 0, so its root $y$ is at least 0 (0 when $x = 1$) and $y^2 = x - 1$."
                },
                {
                  "step": "$x + 3 - 4\\sqrt{x - 1} = y^2 - 4y + 4$",
                  "reason": "Substitution for a repeated expression: $y$ takes the place of $\\sqrt{x - 1}$, and $y^2 + 1$ in brackets takes the place of $x$; $1 + 3 = 4$."
                },
                {
                  "step": "$y^2 - 4y + 4 = (y - 2)^2$",
                  "reason": "Square of a binomial: $(y - 2)^2 = y^2 - 2 \\cdot 2y + 2^2$."
                },
                {
                  "step": "$\\sqrt{x + 3 - 4\\sqrt{x - 1}} = |y - 2|$",
                  "reason": "Root of a square: $\\sqrt{(y - 2)^2} = |y - 2|$."
                },
                {
                  "step": "$\\sqrt{x + 3 - 4\\sqrt{x - 1}} = \\sqrt{x - 1} - 2$",
                  "reason": "Absolute value: $x - 1$ is at least $4$, so $y = \\sqrt{x - 1}$ is at least $2$, since powers and roots of positive numbers keep the order; so $y - 2$ is at least 0 and is its own absolute value; then $\\sqrt{x - 1}$ takes the place of $y$."
                }
              ]
            },
            {
              "prompt": "Write $\\sqrt{x + 14 + 10\\sqrt{x - 11}}$, for $x$ at least $11$, as an expression with one square root.",
              "form": "Answer as an expression, or equivalent.",
              "answer": "sqrt(x-11)+5",
              "lines": [
                {
                  "step": "Write $\\sqrt{x + 14 + 10\\sqrt{x - 11}}$, for $x$ at least $11$, as an expression with one square root.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $y = \\sqrt{x - 11}$. Then $y^2 = x - 11$, so $x = y^2 + 11$.",
                  "reason": "Positive square root: $x - 11$ is at least 0, so its root $y$ is at least 0 (0 when $x = 11$) and $y^2 = x - 11$."
                },
                {
                  "step": "$x + 14 + 10\\sqrt{x - 11} = y^2 + 10y + 25$",
                  "reason": "Substitution for a repeated expression: $y$ takes the place of $\\sqrt{x - 11}$, and $y^2 + 11$ in brackets takes the place of $x$; $11 + 14 = 25$."
                },
                {
                  "step": "$y^2 + 10y + 25 = (y + 5)^2$",
                  "reason": "Square of a binomial: $(y + 5)^2 = y^2 + 2 \\cdot 5y + 5^2$."
                },
                {
                  "step": "$\\sqrt{x + 14 + 10\\sqrt{x - 11}} = |y + 5|$",
                  "reason": "Root of a square: $\\sqrt{(y + 5)^2} = |y + 5|$."
                },
                {
                  "step": "$\\sqrt{x + 14 + 10\\sqrt{x - 11}} = \\sqrt{x - 11} + 5$",
                  "reason": "Absolute value: $y$ is at least 0 and $5$ is above 0, so $y + 5$ is above 0 and is its own absolute value; then $\\sqrt{x - 11}$ takes the place of $y$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t142-k2",
      "forms": [
        {
          "example": {
            "problem": "Simplify $\\sqrt{4 + \\sqrt{15}} + \\sqrt{4 - \\sqrt{15}}$.",
            "lines": [
              {
                "step": "Simplify $\\sqrt{4 + \\sqrt{15}} + \\sqrt{4 - \\sqrt{15}}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x = \\sqrt{4 + \\sqrt{15}} + \\sqrt{4 - \\sqrt{15}}$. Then $x^2 = (4 + \\sqrt{15}) + 2\\sqrt{4 + \\sqrt{15}}\\sqrt{4 - \\sqrt{15}} + (4 - \\sqrt{15})$.",
                "reason": "Square of a binomial: the square of the two roots is the first squared, plus twice their product, plus the second squared, and the power law gives $(\\sqrt{y})^2 = y$ for $y$ at least 0."
              },
              {
                "step": "$x^2 = 8 + 2\\sqrt{(4 + \\sqrt{15})(4 - \\sqrt{15})}$",
                "reason": "Root of a product joins the two roots into one, and collecting like terms cancels $\\sqrt{15}$ against $-\\sqrt{15}$."
              },
              {
                "step": "$x^2 = 8 + 2\\sqrt{16 - 15}$",
                "reason": "Conjugate of $a + b\\sqrt{c}$: $(4 + \\sqrt{15})(4 - \\sqrt{15}) = 4^2 - 15$ by difference of squares."
              },
              {
                "step": "$x^2 = 8 + 2 \\cdot 1 = 10$",
                "reason": "Root of a square: $16 - 15 = 1 = 1^2$, and $\\sqrt{1^2} = 1$."
              },
              {
                "step": "$x = \\sqrt{10}$",
                "reason": "Square roots of both sides: $x = \\sqrt{10}$ or $x = -\\sqrt{10}$, and $x$, a sum of two square roots, is at least 0, since each positive square root is above 0."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\sqrt{5 + \\sqrt{21}} + \\sqrt{5 - \\sqrt{21}}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "sqrt(14)",
              "lines": [
                {
                  "step": "Simplify $\\sqrt{5 + \\sqrt{21}} + \\sqrt{5 - \\sqrt{21}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x = \\sqrt{5 + \\sqrt{21}} + \\sqrt{5 - \\sqrt{21}}$. Then $x^2 = (5 + \\sqrt{21}) + 2\\sqrt{5 + \\sqrt{21}}\\sqrt{5 - \\sqrt{21}} + (5 - \\sqrt{21})$.",
                  "reason": "Square of a binomial: the square of the two roots is the first squared, plus twice their product, plus the second squared, and the power law gives $(\\sqrt{y})^2 = y$ for $y$ at least 0."
                },
                {
                  "step": "$x^2 = 10 + 2\\sqrt{(5 + \\sqrt{21})(5 - \\sqrt{21})}$",
                  "reason": "Root of a product joins the two roots into one, and collecting like terms cancels $\\sqrt{21}$ against $-\\sqrt{21}$."
                },
                {
                  "step": "$x^2 = 10 + 2\\sqrt{25 - 21}$",
                  "reason": "Conjugate of $a + b\\sqrt{c}$: $(5 + \\sqrt{21})(5 - \\sqrt{21}) = 5^2 - 21$ by difference of squares."
                },
                {
                  "step": "$x^2 = 10 + 2 \\cdot 2 = 14$",
                  "reason": "Root of a square: $25 - 21 = 4 = 2^2$, and $\\sqrt{2^2} = 2$."
                },
                {
                  "step": "$x = \\sqrt{14}$",
                  "reason": "Square roots of both sides: $x = \\sqrt{14}$ or $x = -\\sqrt{14}$, and $x$, a sum of two square roots, is at least 0, since each positive square root is above 0."
                }
              ]
            },
            {
              "prompt": "Simplify $\\sqrt{8 + \\sqrt{39}} + \\sqrt{8 - \\sqrt{39}}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "sqrt(26)",
              "lines": [
                {
                  "step": "Simplify $\\sqrt{8 + \\sqrt{39}} + \\sqrt{8 - \\sqrt{39}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x = \\sqrt{8 + \\sqrt{39}} + \\sqrt{8 - \\sqrt{39}}$. Then $x^2 = (8 + \\sqrt{39}) + 2\\sqrt{8 + \\sqrt{39}}\\sqrt{8 - \\sqrt{39}} + (8 - \\sqrt{39})$.",
                  "reason": "Square of a binomial: the square of the two roots is the first squared, plus twice their product, plus the second squared, and the power law gives $(\\sqrt{y})^2 = y$ for $y$ at least 0."
                },
                {
                  "step": "$x^2 = 16 + 2\\sqrt{(8 + \\sqrt{39})(8 - \\sqrt{39})}$",
                  "reason": "Root of a product joins the two roots into one, and collecting like terms cancels $\\sqrt{39}$ against $-\\sqrt{39}$."
                },
                {
                  "step": "$x^2 = 16 + 2\\sqrt{64 - 39}$",
                  "reason": "Conjugate of $a + b\\sqrt{c}$: $(8 + \\sqrt{39})(8 - \\sqrt{39}) = 8^2 - 39$ by difference of squares."
                },
                {
                  "step": "$x^2 = 16 + 2 \\cdot 5 = 26$",
                  "reason": "Root of a square: $64 - 39 = 25 = 5^2$, and $\\sqrt{5^2} = 5$."
                },
                {
                  "step": "$x = \\sqrt{26}$",
                  "reason": "Square roots of both sides: $x = \\sqrt{26}$ or $x = -\\sqrt{26}$, and $x$, a sum of two square roots, is at least 0, since each positive square root is above 0."
                }
              ]
            },
            {
              "prompt": "Simplify $\\sqrt{11 + \\sqrt{105}} + \\sqrt{11 - \\sqrt{105}}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "sqrt(30)",
              "lines": [
                {
                  "step": "Simplify $\\sqrt{11 + \\sqrt{105}} + \\sqrt{11 - \\sqrt{105}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x = \\sqrt{11 + \\sqrt{105}} + \\sqrt{11 - \\sqrt{105}}$. Then $x^2 = (11 + \\sqrt{105}) + 2\\sqrt{11 + \\sqrt{105}}\\sqrt{11 - \\sqrt{105}} + (11 - \\sqrt{105})$.",
                  "reason": "Square of a binomial: the square of the two roots is the first squared, plus twice their product, plus the second squared, and the power law gives $(\\sqrt{y})^2 = y$ for $y$ at least 0."
                },
                {
                  "step": "$x^2 = 22 + 2\\sqrt{(11 + \\sqrt{105})(11 - \\sqrt{105})}$",
                  "reason": "Root of a product joins the two roots into one, and collecting like terms cancels $\\sqrt{105}$ against $-\\sqrt{105}$."
                },
                {
                  "step": "$x^2 = 22 + 2\\sqrt{121 - 105}$",
                  "reason": "Conjugate of $a + b\\sqrt{c}$: $(11 + \\sqrt{105})(11 - \\sqrt{105}) = 11^2 - 105$ by difference of squares."
                },
                {
                  "step": "$x^2 = 22 + 2 \\cdot 4 = 30$",
                  "reason": "Root of a square: $121 - 105 = 16 = 4^2$, and $\\sqrt{4^2} = 4$."
                },
                {
                  "step": "$x = \\sqrt{30}$",
                  "reason": "Square roots of both sides: $x = \\sqrt{30}$ or $x = -\\sqrt{30}$, and $x$, a sum of two square roots, is at least 0, since each positive square root is above 0."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $\\sqrt{9 + \\sqrt{65}} - \\sqrt{9 - \\sqrt{65}}$.",
            "lines": [
              {
                "step": "Simplify $\\sqrt{9 + \\sqrt{65}} - \\sqrt{9 - \\sqrt{65}}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Let $x = \\sqrt{9 + \\sqrt{65}} - \\sqrt{9 - \\sqrt{65}}$. Then $x^2 = (9 + \\sqrt{65}) - 2\\sqrt{9 + \\sqrt{65}}\\sqrt{9 - \\sqrt{65}} + (9 - \\sqrt{65})$.",
                "reason": "Square of a binomial: the square of the two roots is the first squared, minus twice their product, plus the second squared, and the power law gives $(\\sqrt{y})^2 = y$ for $y$ at least 0."
              },
              {
                "step": "$x^2 = 18 - 2\\sqrt{(9 + \\sqrt{65})(9 - \\sqrt{65})}$",
                "reason": "Root of a product joins the two roots into one, and collecting like terms cancels $\\sqrt{65}$ against $-\\sqrt{65}$."
              },
              {
                "step": "$x^2 = 18 - 2\\sqrt{81 - 65}$",
                "reason": "Conjugate of $a + b\\sqrt{c}$: $(9 + \\sqrt{65})(9 - \\sqrt{65}) = 9^2 - 65$ by difference of squares."
              },
              {
                "step": "$x^2 = 18 - 2 \\cdot 4 = 10$",
                "reason": "Root of a square: $81 - 65 = 16 = 4^2$, and $\\sqrt{4^2} = 4$."
              },
              {
                "step": "$x = \\sqrt{10}$",
                "reason": "Square roots of both sides: $x = \\sqrt{10}$ or $x = -\\sqrt{10}$. Since powers and roots of positive numbers keep the order, the root of $9 - \\sqrt{65}$ is below the root of $9 + \\sqrt{65}$, so the first root of $x$ is the larger and $x$ is above 0."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\sqrt{10 - \\sqrt{91}} - \\sqrt{10 + \\sqrt{91}}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "-sqrt(14)",
              "lines": [
                {
                  "step": "Simplify $\\sqrt{10 - \\sqrt{91}} - \\sqrt{10 + \\sqrt{91}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x = \\sqrt{10 - \\sqrt{91}} - \\sqrt{10 + \\sqrt{91}}$. Then $x^2 = (10 - \\sqrt{91}) - 2\\sqrt{10 + \\sqrt{91}}\\sqrt{10 - \\sqrt{91}} + (10 + \\sqrt{91})$.",
                  "reason": "Square of a binomial: the square of the two roots is the first squared, minus twice their product, plus the second squared, and the power law gives $(\\sqrt{y})^2 = y$ for $y$ at least 0."
                },
                {
                  "step": "$x^2 = 20 - 2\\sqrt{(10 + \\sqrt{91})(10 - \\sqrt{91})}$",
                  "reason": "Root of a product joins the two roots into one, and collecting like terms cancels $\\sqrt{91}$ against $-\\sqrt{91}$."
                },
                {
                  "step": "$x^2 = 20 - 2\\sqrt{100 - 91}$",
                  "reason": "Conjugate of $a + b\\sqrt{c}$: $(10 + \\sqrt{91})(10 - \\sqrt{91}) = 10^2 - 91$ by difference of squares."
                },
                {
                  "step": "$x^2 = 20 - 2 \\cdot 3 = 14$",
                  "reason": "Root of a square: $100 - 91 = 9 = 3^2$, and $\\sqrt{3^2} = 3$."
                },
                {
                  "step": "$x = -\\sqrt{14}$",
                  "reason": "Square roots of both sides: $x = \\sqrt{14}$ or $x = -\\sqrt{14}$. Since powers and roots of positive numbers keep the order, the root of $10 - \\sqrt{91}$ is below the root of $10 + \\sqrt{91}$, so the first root of $x$ is the smaller and $x$ is below 0."
                }
              ]
            },
            {
              "prompt": "Simplify $\\sqrt{11 + \\sqrt{57}} - \\sqrt{11 - \\sqrt{57}}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "sqrt(6)",
              "lines": [
                {
                  "step": "Simplify $\\sqrt{11 + \\sqrt{57}} - \\sqrt{11 - \\sqrt{57}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x = \\sqrt{11 + \\sqrt{57}} - \\sqrt{11 - \\sqrt{57}}$. Then $x^2 = (11 + \\sqrt{57}) - 2\\sqrt{11 + \\sqrt{57}}\\sqrt{11 - \\sqrt{57}} + (11 - \\sqrt{57})$.",
                  "reason": "Square of a binomial: the square of the two roots is the first squared, minus twice their product, plus the second squared, and the power law gives $(\\sqrt{y})^2 = y$ for $y$ at least 0."
                },
                {
                  "step": "$x^2 = 22 - 2\\sqrt{(11 + \\sqrt{57})(11 - \\sqrt{57})}$",
                  "reason": "Root of a product joins the two roots into one, and collecting like terms cancels $\\sqrt{57}$ against $-\\sqrt{57}$."
                },
                {
                  "step": "$x^2 = 22 - 2\\sqrt{121 - 57}$",
                  "reason": "Conjugate of $a + b\\sqrt{c}$: $(11 + \\sqrt{57})(11 - \\sqrt{57}) = 11^2 - 57$ by difference of squares."
                },
                {
                  "step": "$x^2 = 22 - 2 \\cdot 8 = 6$",
                  "reason": "Root of a square: $121 - 57 = 64 = 8^2$, and $\\sqrt{8^2} = 8$."
                },
                {
                  "step": "$x = \\sqrt{6}$",
                  "reason": "Square roots of both sides: $x = \\sqrt{6}$ or $x = -\\sqrt{6}$. Since powers and roots of positive numbers keep the order, the root of $11 - \\sqrt{57}$ is below the root of $11 + \\sqrt{57}$, so the first root of $x$ is the larger and $x$ is above 0."
                }
              ]
            },
            {
              "prompt": "Simplify $\\sqrt{13 - \\sqrt{69}} - \\sqrt{13 + \\sqrt{69}}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "-sqrt(6)",
              "lines": [
                {
                  "step": "Simplify $\\sqrt{13 - \\sqrt{69}} - \\sqrt{13 + \\sqrt{69}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Let $x = \\sqrt{13 - \\sqrt{69}} - \\sqrt{13 + \\sqrt{69}}$. Then $x^2 = (13 - \\sqrt{69}) - 2\\sqrt{13 + \\sqrt{69}}\\sqrt{13 - \\sqrt{69}} + (13 + \\sqrt{69})$.",
                  "reason": "Square of a binomial: the square of the two roots is the first squared, minus twice their product, plus the second squared, and the power law gives $(\\sqrt{y})^2 = y$ for $y$ at least 0."
                },
                {
                  "step": "$x^2 = 26 - 2\\sqrt{(13 + \\sqrt{69})(13 - \\sqrt{69})}$",
                  "reason": "Root of a product joins the two roots into one, and collecting like terms cancels $\\sqrt{69}$ against $-\\sqrt{69}$."
                },
                {
                  "step": "$x^2 = 26 - 2\\sqrt{169 - 69}$",
                  "reason": "Conjugate of $a + b\\sqrt{c}$: $(13 + \\sqrt{69})(13 - \\sqrt{69}) = 13^2 - 69$ by difference of squares."
                },
                {
                  "step": "$x^2 = 26 - 2 \\cdot 10 = 6$",
                  "reason": "Root of a square: $169 - 69 = 100 = 10^2$, and $\\sqrt{10^2} = 10$."
                },
                {
                  "step": "$x = -\\sqrt{6}$",
                  "reason": "Square roots of both sides: $x = \\sqrt{6}$ or $x = -\\sqrt{6}$. Since powers and roots of positive numbers keep the order, the root of $13 - \\sqrt{69}$ is below the root of $13 + \\sqrt{69}$, so the first root of $x$ is the smaller and $x$ is below 0."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t142-k3",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for $\\sqrt{39 - 12\\sqrt{3}}$, and write that line right.",
            "given": [
              "$\\sqrt{39 - 12\\sqrt{3}} = a + b\\sqrt{3}$ with integers $a$ and $b$",
              "$39 - 12\\sqrt{3} = a^2 + 3b^2 + 2ab\\sqrt{3}$",
              "$a^2 + 3b^2 = 39$ and $ab = 6$",
              "$(a, b) = (6, 1)$ or $(a, b) = (-6, -1)$",
              "$\\sqrt{39 - 12\\sqrt{3}} = 6 + \\sqrt{3}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $\\sqrt{39 - 12\\sqrt{3}}$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Lines 1 and 2 are right.",
                "reason": "Line 1 sets the root equal to $a + b\\sqrt{c}$ with integers $a$ and $b$, and each line before the wrong one changes the line before it by a rule that holds."
              },
              {
                "step": "Line 3 writes $ab = 6$ where line 2 gives $2ab = -12$.",
                "reason": "A sign lost: the parts with $\\sqrt{3}$ in line 2 are $-12\\sqrt{3}$ and $2ab\\sqrt{3}$, so $ab$ is $-12 \\div 2 = -6$, with its sign."
              },
              {
                "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
              },
              {
                "step": "Line 3 written right is $a^2 + 3b^2 = 39$ and $ab = -6$.",
                "reason": "With it the working ends on $\\sqrt{39 - 12\\sqrt{3}} = 6 - \\sqrt{3}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $\\sqrt{23 - 8\\sqrt{7}}$, and write that line right.",
              "given": [
                "$\\sqrt{23 - 8\\sqrt{7}} = a + b\\sqrt{7}$ with integers $a$ and $b$",
                "$23 - 8\\sqrt{7} = a^2 + 7b^2 + 2ab\\sqrt{7}$",
                "$a^2 + 7b^2 = 23$ and $ab = -4$",
                "$(a, b) = (4, 1)$ or $(a, b) = (-4, -1)$",
                "$\\sqrt{23 - 8\\sqrt{7}} = 4 + \\sqrt{7}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: (a, b) = (4, -1) or (a, b) = (-4, 1)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $\\sqrt{23 - 8\\sqrt{7}}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Line 1 sets the root equal to $a + b\\sqrt{c}$ with integers $a$ and $b$, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 4 gives pairs whose product is $4$, though line 3 says $ab = -4$.",
                  "reason": "A sign lost: $ab = -4$ is below 0, so $a$ and $b$ have opposite signs."
                },
                {
                  "step": "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 4 written right is $(a, b) = (4, -1)$ or $(a, b) = (-4, 1)$.",
                  "reason": "With it the working ends on $\\sqrt{23 - 8\\sqrt{7}} = 4 - \\sqrt{7}$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $\\sqrt{14 - 6\\sqrt{5}}$, and write that line right.",
              "given": [
                "$\\sqrt{14 - 6\\sqrt{5}} = a + b\\sqrt{5}$ with integers $a$ and $b$",
                "$14 - 6\\sqrt{5} = a^2 + 5b^2 + 2ab\\sqrt{5}$",
                "$a^2 + 5b^2 = 14$ and $ab = 3$",
                "$(a, b) = (3, 1)$ or $(a, b) = (-3, -1)$",
                "$\\sqrt{14 - 6\\sqrt{5}} = 3 + \\sqrt{5}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: a^2+5*b^2 = 14 and a*b = -3",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $\\sqrt{14 - 6\\sqrt{5}}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 sets the root equal to $a + b\\sqrt{c}$ with integers $a$ and $b$, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 writes $ab = 3$ where line 2 gives $2ab = -6$.",
                  "reason": "A sign lost: the parts with $\\sqrt{5}$ in line 2 are $-6\\sqrt{5}$ and $2ab\\sqrt{5}$, so $ab$ is $-6 \\div 2 = -3$, with its sign."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 3 written right is $a^2 + 5b^2 = 14$ and $ab = -3$.",
                  "reason": "With it the working ends on $\\sqrt{14 - 6\\sqrt{5}} = 3 - \\sqrt{5}$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $\\sqrt{31 + 12\\sqrt{3}}$, and write that line right.",
              "given": [
                "$\\sqrt{31 + 12\\sqrt{3}} = a + b\\sqrt{3}$ with integers $a$ and $b$",
                "$31 + 12\\sqrt{3} = a^2 + 3b^2 + 2ab\\sqrt{3}$",
                "$a^2 + 3b^2 = 31$ and $ab = 6$",
                "$(a, b) = (2, -3)$ or $(a, b) = (-2, 3)$",
                "$\\sqrt{31 + 12\\sqrt{3}} = 3\\sqrt{3} - 2$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: (a, b) = (2, 3) or (a, b) = (-2, -3)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $\\sqrt{31 + 12\\sqrt{3}}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Line 1 sets the root equal to $a + b\\sqrt{c}$ with integers $a$ and $b$, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 4 gives pairs whose product is $-6$, though line 3 says $ab = 6$.",
                  "reason": "A sign lost: $ab = 6$ is above 0, so $a$ and $b$ have the same sign."
                },
                {
                  "step": "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 4 written right is $(a, b) = (2, 3)$ or $(a, b) = (-2, -3)$.",
                  "reason": "With it the working ends on $\\sqrt{31 + 12\\sqrt{3}} = 2 + 3\\sqrt{3}$."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for $\\sqrt{6 + \\sqrt{35}} + \\sqrt{6 - \\sqrt{35}}$, and write that line right.",
            "given": [
              "$x = \\sqrt{6 + \\sqrt{35}} + \\sqrt{6 - \\sqrt{35}}$",
              "$x^2 = (6 + \\sqrt{35}) + (6 - \\sqrt{35})$",
              "$x^2 = 12$",
              "$x = \\sqrt{12}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this working for $\\sqrt{6 + \\sqrt{35}} + \\sqrt{6 - \\sqrt{35}}$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is right.",
                "reason": "Line 1 calls the number $x$, and each line before the wrong one changes the line before it by a rule that holds."
              },
              {
                "step": "Line 2 squares $\\sqrt{6 + \\sqrt{35}} + \\sqrt{6 - \\sqrt{35}}$ as the square of each root added, with no middle term.",
                "reason": "A power taken term by term over a sum: the square of a binomial keeps the middle term, twice the product of the two roots, with its sign."
              },
              {
                "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
              },
              {
                "step": "Line 2 written right is $x^2 = (6 + \\sqrt{35}) + 2\\sqrt{6 + \\sqrt{35}}\\sqrt{6 - \\sqrt{35}} + (6 - \\sqrt{35})$.",
                "reason": "With it the working ends on $x^2 = 14$ and $x = \\sqrt{14}$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $\\sqrt{7 + \\sqrt{33}} - \\sqrt{7 - \\sqrt{33}}$, and write that line right.",
              "given": [
                "$x = \\sqrt{7 + \\sqrt{33}} - \\sqrt{7 - \\sqrt{33}}$",
                "$x^2 = (7 + \\sqrt{33}) - 2\\sqrt{7 + \\sqrt{33}}\\sqrt{7 - \\sqrt{33}} + (7 - \\sqrt{33})$",
                "$x^2 = 14 - 2(7 - \\sqrt{33})$",
                "$x^2 = 2\\sqrt{33}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x^2 = 14-2*sqrt(49-33)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $\\sqrt{7 + \\sqrt{33}} - \\sqrt{7 - \\sqrt{33}}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 calls the number $x$, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 writes $\\sqrt{(7 + \\sqrt{33})(7 - \\sqrt{33})}$ as $7 - \\sqrt{33}$, the root of $7^2$ less the root of $33$.",
                  "reason": "A power taken term by term over a sum: a square root of a difference is not the difference of the roots; the conjugate of $a + b\\sqrt{c}$ gives the product $7^2 - 33$, and its root is kept whole."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 3 written right is $x^2 = 14 - 2\\sqrt{49 - 33}$.",
                  "reason": "With it the working ends on $x^2 = 6$ and $x = \\sqrt{6}$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $\\sqrt{9 + \\sqrt{77}} + \\sqrt{9 - \\sqrt{77}}$, and write that line right.",
              "given": [
                "$x = \\sqrt{9 + \\sqrt{77}} + \\sqrt{9 - \\sqrt{77}}$",
                "$x^2 = (9 + \\sqrt{77}) + 2\\sqrt{9 + \\sqrt{77}}\\sqrt{9 - \\sqrt{77}} + (9 - \\sqrt{77})$",
                "$x^2 = 18 + 2(9 - \\sqrt{77})$",
                "$x^2 = 36 - 2\\sqrt{77}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: x^2 = 18+2*sqrt(81-77)",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $\\sqrt{9 + \\sqrt{77}} + \\sqrt{9 - \\sqrt{77}}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 calls the number $x$, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 writes $\\sqrt{(9 + \\sqrt{77})(9 - \\sqrt{77})}$ as $9 - \\sqrt{77}$, the root of $9^2$ less the root of $77$.",
                  "reason": "A power taken term by term over a sum: a square root of a difference is not the difference of the roots; the conjugate of $a + b\\sqrt{c}$ gives the product $9^2 - 77$, and its root is kept whole."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 3 written right is $x^2 = 18 + 2\\sqrt{81 - 77}$.",
                  "reason": "With it the working ends on $x^2 = 22$ and $x = \\sqrt{22}$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $\\sqrt{8 + \\sqrt{55}} - \\sqrt{8 - \\sqrt{55}}$, and write that line right.",
              "given": [
                "$x = \\sqrt{8 + \\sqrt{55}} - \\sqrt{8 - \\sqrt{55}}$",
                "$x^2 = (8 + \\sqrt{55}) - (8 - \\sqrt{55})$",
                "$x^2 = 2\\sqrt{55}$",
                "$x = \\sqrt{2\\sqrt{55}}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: x^2 = (8+sqrt(55))-2*sqrt(8+sqrt(55))*sqrt(8-sqrt(55))+(8-sqrt(55))",
              "lines": [
                {
                  "step": "Find the first wrong line in this working for $\\sqrt{8 + \\sqrt{55}} - \\sqrt{8 - \\sqrt{55}}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Line 1 is right.",
                  "reason": "Line 1 calls the number $x$, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 2 squares $\\sqrt{8 + \\sqrt{55}} - \\sqrt{8 - \\sqrt{55}}$ as the square of each root subtracted, with no middle term.",
                  "reason": "A power taken term by term over a sum: the square of a binomial keeps the middle term, twice the product of the two roots, with its sign."
                },
                {
                  "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 2 written right is $x^2 = (8 + \\sqrt{55}) - 2\\sqrt{8 + \\sqrt{55}}\\sqrt{8 - \\sqrt{55}} + (8 - \\sqrt{55})$.",
                  "reason": "With it the working ends on $x^2 = 10$ and $x = \\sqrt{10}$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t142-k4",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the square root of the number that is 5 more than 4 times the square root of $x$.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the square root of the number that is 5 more than 4 times the square root of $x$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "4 times the square root of $x$ is $4\\sqrt{x}$.",
                "reason": "Writing a sentence as an equation: \"times\" multiplies, and the root of $x$ is $\\sqrt{x}$."
              },
              {
                "step": "5 more than that is $4\\sqrt{x} + 5$.",
                "reason": "Writing a sentence as an equation: \"more than\" adds the amount to what follows the words."
              },
              {
                "step": "$y = \\sqrt{4\\sqrt{x} + 5}$",
                "reason": "Writing a sentence as an equation: \"the square root of\" puts the whole amount named after it under one root sign, and \"is\" marks the place of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the square root of the number left when 2 times the square root of $x$ is taken away from 9.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = sqrt(9-2*sqrt(x))",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the square root of the number left when 2 times the square root of $x$ is taken away from 9.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "2 times the square root of $x$ is $2\\sqrt{x}$.",
                  "reason": "Writing a sentence as an equation: \"times\" multiplies, and the root of $x$ is $\\sqrt{x}$."
                },
                {
                  "step": "That taken away from 9 is $9 - 2\\sqrt{x}$.",
                  "reason": "Writing a sentence as an equation: \"taken away from\" subtracts the first amount from the number after the words."
                },
                {
                  "step": "$y = \\sqrt{9 - 2\\sqrt{x}}$",
                  "reason": "Writing a sentence as an equation: \"the square root of\" puts the whole amount named after it under one root sign, and \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the square of the number that is 3 more than 2 times the square root of $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (2*sqrt(x)+3)^2",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the square of the number that is 3 more than 2 times the square root of $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "2 times the square root of $x$ is $2\\sqrt{x}$.",
                  "reason": "Writing a sentence as an equation: \"times\" multiplies, and the root of $x$ is $\\sqrt{x}$."
                },
                {
                  "step": "3 more than that is $2\\sqrt{x} + 3$.",
                  "reason": "Writing a sentence as an equation: \"more than\" adds the amount to what follows the words."
                },
                {
                  "step": "$y = \\left(2\\sqrt{x} + 3\\right)^2$",
                  "reason": "Writing a sentence as an equation: \"the square of\" squares the whole amount, so the sum stands in brackets, and \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the fourth root of the number that is 7 more than 6 times the square root of $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = (6*sqrt(x)+7)^(1/4)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the fourth root of the number that is 7 more than 6 times the square root of $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "6 times the square root of $x$ is $6\\sqrt{x}$.",
                  "reason": "Writing a sentence as an equation: \"times\" multiplies, and the root of $x$ is $\\sqrt{x}$."
                },
                {
                  "step": "7 more than that is $6\\sqrt{x} + 7$.",
                  "reason": "Writing a sentence as an equation: \"more than\" adds the amount to what follows the words."
                },
                {
                  "step": "$y = \\sqrt[4]{6\\sqrt{x} + 7}$",
                  "reason": "Writing a sentence as an equation: \"the fourth root of\" puts the whole amount under one fourth root, and \"is\" marks the place of the equals sign."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the sum of two square roots: the first is the square root of the sum of $x$ and the square root of 6, and the second is the square root of the difference of $x$ and the square root of 6.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the sum of two square roots: the first is the square root of the sum of $x$ and the square root of 6, and the second is the square root of the difference of $x$ and the square root of 6.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The square root of 6 is $\\sqrt{6}$.",
                "reason": "Writing a sentence as an equation: \"the square root of\" puts the number under the root sign."
              },
              {
                "step": "The sum and the difference of $x$ and that are $x + \\sqrt{6}$ and $x - \\sqrt{6}$.",
                "reason": "Writing a sentence as an equation: \"the sum of\" adds the two numbers named after it, and \"the difference of\" takes the second from the first."
              },
              {
                "step": "$y = \\sqrt{x + \\sqrt{6}} + \\sqrt{x - \\sqrt{6}}$",
                "reason": "Writing a sentence as an equation: each is put under its own root sign, \"the sum of two square roots\" adds them, and \"is\" marks the place of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the difference of two square roots: the first is the square root of the sum of $x$ and the square root of 10, and the second, taken from the first, is the square root of the difference of $x$ and the square root of 10.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = sqrt(x+sqrt(10))-sqrt(x-sqrt(10))",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the difference of two square roots: the first is the square root of the sum of $x$ and the square root of 10, and the second, taken from the first, is the square root of the difference of $x$ and the square root of 10.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The square root of 10 is $\\sqrt{10}$.",
                  "reason": "Writing a sentence as an equation: \"the square root of\" puts the number under the root sign."
                },
                {
                  "step": "The sum and the difference of $x$ and that are $x + \\sqrt{10}$ and $x - \\sqrt{10}$.",
                  "reason": "Writing a sentence as an equation: \"the sum of\" adds the two numbers named after it, and \"the difference of\" takes the second from the first."
                },
                {
                  "step": "$y = \\sqrt{x + \\sqrt{10}} - \\sqrt{x - \\sqrt{10}}$",
                  "reason": "Writing a sentence as an equation: each is put under its own root sign, \"the difference … taken from the first\" subtracts the second from the first, and \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the sum of two square roots: the first is the square root of the sum of $x$ and the square root of 14, and the second is the square root of the difference of $x$ and the square root of 14.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = sqrt(x+sqrt(14))+sqrt(x-sqrt(14))",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the sum of two square roots: the first is the square root of the sum of $x$ and the square root of 14, and the second is the square root of the difference of $x$ and the square root of 14.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The square root of 14 is $\\sqrt{14}$.",
                  "reason": "Writing a sentence as an equation: \"the square root of\" puts the number under the root sign."
                },
                {
                  "step": "The sum and the difference of $x$ and that are $x + \\sqrt{14}$ and $x - \\sqrt{14}$.",
                  "reason": "Writing a sentence as an equation: \"the sum of\" adds the two numbers named after it, and \"the difference of\" takes the second from the first."
                },
                {
                  "step": "$y = \\sqrt{x + \\sqrt{14}} + \\sqrt{x - \\sqrt{14}}$",
                  "reason": "Writing a sentence as an equation: each is put under its own root sign, \"the sum of two square roots\" adds them, and \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the difference of two square roots: the first is the square root of the sum of $x$ and the square root of 15, and the second, taken from the first, is the square root of the difference of $x$ and the square root of 15.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = sqrt(x+sqrt(15))-sqrt(x-sqrt(15))",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the difference of two square roots: the first is the square root of the sum of $x$ and the square root of 15, and the second, taken from the first, is the square root of the difference of $x$ and the square root of 15.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The square root of 15 is $\\sqrt{15}$.",
                  "reason": "Writing a sentence as an equation: \"the square root of\" puts the number under the root sign."
                },
                {
                  "step": "The sum and the difference of $x$ and that are $x + \\sqrt{15}$ and $x - \\sqrt{15}$.",
                  "reason": "Writing a sentence as an equation: \"the sum of\" adds the two numbers named after it, and \"the difference of\" takes the second from the first."
                },
                {
                  "step": "$y = \\sqrt{x + \\sqrt{15}} - \\sqrt{x - \\sqrt{15}}$",
                  "reason": "Writing a sentence as an equation: each is put under its own root sign, \"the difference … taken from the first\" subtracts the second from the first, and \"is\" marks the place of the equals sign."
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
