export default {
  "number": 140,
  "title": "Rationalising denominators",
  "section": 7,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "344-348, 352-356"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Write $\\dfrac{6}{\\sqrt{10}}$ with no root in the denominator.",
    "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
    "answer": "3*sqrt(10)/5",
    "solution": [
      "Write $\\dfrac{6}{\\sqrt{10}}$ with no root in the denominator.",
      "$\\dfrac{6}{\\sqrt{10}} = \\dfrac{6\\sqrt{10}}{\\sqrt{10} \\cdot \\sqrt{10}}$",
      "$\\dfrac{6\\sqrt{10}}{\\sqrt{10} \\cdot \\sqrt{10}} = \\dfrac{6\\sqrt{10}}{10}$",
      "$\\dfrac{6\\sqrt{10}}{10} = \\dfrac{3\\sqrt{10}}{5}$"
    ]
  },
  "ideas": [
    {
      "name": "Rationalising the denominator",
      "concrete": "The fraction $\\dfrac{1}{\\sqrt{11}}$ has a root in its denominator. Multiplying its top and its bottom by $\\sqrt{11}$ keeps its value and gives $\\dfrac{\\sqrt{11}}{\\sqrt{11} \\cdot \\sqrt{11}} = \\dfrac{\\sqrt{11}}{11}$, whose denominator is a whole number.",
      "general": "**Rationalising the denominator** is writing a fraction as an equal fraction with no root in its denominator. The top and the bottom are multiplied by one nonzero number, picked so that the bottom becomes a whole number. For a number $a$ and a number $b$ above $0$, $\\dfrac{a}{\\sqrt{b}} = \\dfrac{a\\sqrt{b}}{b}$."
    },
    {
      "name": "Conjugate of $a + b\\sqrt{c}$",
      "concrete": "The conjugate of $5 + 2\\sqrt{3}$ is $5 - 2\\sqrt{3}$, and by difference of squares $(5 + 2\\sqrt{3})(5 - 2\\sqrt{3}) = 25 - 12 = 13$, a whole number.",
      "general": "For numbers $a$ and $b$ and a number $c$ above $0$, the **conjugate of $a + b\\sqrt{c}$** is $a - b\\sqrt{c}$. By difference of squares, $(a + b\\sqrt{c})(a - b\\sqrt{c}) = a^2 - b^2c$, which has no root when $a$, $b$ and $c$ are whole numbers. In the same way, for whole numbers $m$ and $n$, $(a\\sqrt{m} + b\\sqrt{n})(a\\sqrt{m} - b\\sqrt{n}) = a^2m - b^2n$."
    }
  ],
  "kinds": [
    {
      "id": "t140-k1",
      "forms": [
        {
          "example": {
            "problem": "Write $\\dfrac{14}{\\sqrt{22}}$ with no root in the denominator.",
            "lines": [
              {
                "step": "Write $\\dfrac{14}{\\sqrt{22}}$ with no root in the denominator.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{14}{\\sqrt{22}} = \\dfrac{14\\sqrt{22}}{\\sqrt{22} \\cdot \\sqrt{22}}$",
                "reason": "Rationalising the denominator: the top and the bottom are multiplied by $\\sqrt{22}$, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
              },
              {
                "step": "$\\dfrac{14\\sqrt{22}}{\\sqrt{22} \\cdot \\sqrt{22}} = \\dfrac{14\\sqrt{22}}{22}$",
                "reason": "Root of a product: $\\sqrt{22} \\cdot \\sqrt{22} = \\sqrt{484} = 22$."
              },
              {
                "step": "$\\dfrac{14\\sqrt{22}}{22} = \\dfrac{7\\sqrt{22}}{11}$",
                "reason": "Cancelling a common factor: $2$ divides the top and the bottom."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $\\dfrac{10}{\\sqrt{15}}$ with no root in the denominator.",
              "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
              "answer": "2*sqrt(15)/3",
              "lines": [
                {
                  "step": "Write $\\dfrac{10}{\\sqrt{15}}$ with no root in the denominator.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{10}{\\sqrt{15}} = \\dfrac{10\\sqrt{15}}{\\sqrt{15} \\cdot \\sqrt{15}}$",
                  "reason": "Rationalising the denominator: the top and the bottom are multiplied by $\\sqrt{15}$, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
                },
                {
                  "step": "$\\dfrac{10\\sqrt{15}}{\\sqrt{15} \\cdot \\sqrt{15}} = \\dfrac{10\\sqrt{15}}{15}$",
                  "reason": "Root of a product: $\\sqrt{15} \\cdot \\sqrt{15} = \\sqrt{225} = 15$."
                },
                {
                  "step": "$\\dfrac{10\\sqrt{15}}{15} = \\dfrac{2\\sqrt{15}}{3}$",
                  "reason": "Cancelling a common factor: $5$ divides the top and the bottom."
                }
              ]
            },
            {
              "prompt": "Write $\\dfrac{12}{\\sqrt{33}}$ with no root in the denominator.",
              "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
              "answer": "4*sqrt(33)/11",
              "lines": [
                {
                  "step": "Write $\\dfrac{12}{\\sqrt{33}}$ with no root in the denominator.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{12}{\\sqrt{33}} = \\dfrac{12\\sqrt{33}}{\\sqrt{33} \\cdot \\sqrt{33}}$",
                  "reason": "Rationalising the denominator: the top and the bottom are multiplied by $\\sqrt{33}$, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
                },
                {
                  "step": "$\\dfrac{12\\sqrt{33}}{\\sqrt{33} \\cdot \\sqrt{33}} = \\dfrac{12\\sqrt{33}}{33}$",
                  "reason": "Root of a product: $\\sqrt{33} \\cdot \\sqrt{33} = \\sqrt{1089} = 33$."
                },
                {
                  "step": "$\\dfrac{12\\sqrt{33}}{33} = \\dfrac{4\\sqrt{33}}{11}$",
                  "reason": "Cancelling a common factor: $3$ divides the top and the bottom."
                }
              ]
            },
            {
              "prompt": "Write $\\dfrac{4}{\\sqrt{14}}$ with no root in the denominator.",
              "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
              "answer": "2*sqrt(14)/7",
              "lines": [
                {
                  "step": "Write $\\dfrac{4}{\\sqrt{14}}$ with no root in the denominator.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{4}{\\sqrt{14}} = \\dfrac{4\\sqrt{14}}{\\sqrt{14} \\cdot \\sqrt{14}}$",
                  "reason": "Rationalising the denominator: the top and the bottom are multiplied by $\\sqrt{14}$, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
                },
                {
                  "step": "$\\dfrac{4\\sqrt{14}}{\\sqrt{14} \\cdot \\sqrt{14}} = \\dfrac{4\\sqrt{14}}{14}$",
                  "reason": "Root of a product: $\\sqrt{14} \\cdot \\sqrt{14} = \\sqrt{196} = 14$."
                },
                {
                  "step": "$\\dfrac{4\\sqrt{14}}{14} = \\dfrac{2\\sqrt{14}}{7}$",
                  "reason": "Cancelling a common factor: $2$ divides the top and the bottom."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write $\\dfrac{6}{\\sqrt[3]{4}}$ with no root in the denominator.",
            "lines": [
              {
                "step": "Write $\\dfrac{6}{\\sqrt[3]{4}}$ with no root in the denominator.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{6}{\\sqrt[3]{4}} = \\dfrac{6\\sqrt[3]{2}}{\\sqrt[3]{4} \\cdot \\sqrt[3]{2}}$",
                "reason": "Rationalising the denominator: $4 \\cdot 2 = 8 = 2^3$, so the top and the bottom are multiplied by $\\sqrt[3]{2}$, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
              },
              {
                "step": "$\\dfrac{6\\sqrt[3]{2}}{\\sqrt[3]{4} \\cdot \\sqrt[3]{2}} = \\dfrac{6\\sqrt[3]{2}}{2}$",
                "reason": "Root of a product: $\\sqrt[3]{4} \\cdot \\sqrt[3]{2} = \\sqrt[3]{8} = 2$, since $2$ is the cube root of $8$."
              },
              {
                "step": "$\\dfrac{6\\sqrt[3]{2}}{2} = 3\\sqrt[3]{2}$",
                "reason": "Cancelling a common factor: $2$ divides the top and the bottom."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $\\dfrac{10}{\\sqrt[3]{5}}$ with no root in the denominator.",
              "form": "Answer in simplest radical form, as in 6*2^(1/3).",
              "answer": "2*25^(1/3)",
              "lines": [
                {
                  "step": "Write $\\dfrac{10}{\\sqrt[3]{5}}$ with no root in the denominator.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{10}{\\sqrt[3]{5}} = \\dfrac{10\\sqrt[3]{25}}{\\sqrt[3]{5} \\cdot \\sqrt[3]{25}}$",
                  "reason": "Rationalising the denominator: $5 \\cdot 25 = 125 = 5^3$, so the top and the bottom are multiplied by $\\sqrt[3]{25}$, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
                },
                {
                  "step": "$\\dfrac{10\\sqrt[3]{25}}{\\sqrt[3]{5} \\cdot \\sqrt[3]{25}} = \\dfrac{10\\sqrt[3]{25}}{5}$",
                  "reason": "Root of a product: $\\sqrt[3]{5} \\cdot \\sqrt[3]{25} = \\sqrt[3]{125} = 5$, since $5$ is the cube root of $125$."
                },
                {
                  "step": "$\\dfrac{10\\sqrt[3]{25}}{5} = 2\\sqrt[3]{25}$",
                  "reason": "Cancelling a common factor: $5$ divides the top and the bottom."
                }
              ]
            },
            {
              "prompt": "Write $\\dfrac{9}{\\sqrt[3]{36}}$ with no root in the denominator.",
              "form": "Answer in simplest radical form, as in 6*2^(1/3).",
              "answer": "3*6^(1/3)/2",
              "lines": [
                {
                  "step": "Write $\\dfrac{9}{\\sqrt[3]{36}}$ with no root in the denominator.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{9}{\\sqrt[3]{36}} = \\dfrac{9\\sqrt[3]{6}}{\\sqrt[3]{36} \\cdot \\sqrt[3]{6}}$",
                  "reason": "Rationalising the denominator: $36 \\cdot 6 = 216 = 6^3$, so the top and the bottom are multiplied by $\\sqrt[3]{6}$, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
                },
                {
                  "step": "$\\dfrac{9\\sqrt[3]{6}}{\\sqrt[3]{36} \\cdot \\sqrt[3]{6}} = \\dfrac{9\\sqrt[3]{6}}{6}$",
                  "reason": "Root of a product: $\\sqrt[3]{36} \\cdot \\sqrt[3]{6} = \\sqrt[3]{216} = 6$, since $6$ is the cube root of $216$."
                },
                {
                  "step": "$\\dfrac{9\\sqrt[3]{6}}{6} = \\dfrac{3\\sqrt[3]{6}}{2}$",
                  "reason": "Cancelling a common factor: $3$ divides the top and the bottom."
                }
              ]
            },
            {
              "prompt": "Write $\\dfrac{14}{\\sqrt[3]{7}}$ with no root in the denominator.",
              "form": "Answer in simplest radical form, as in 6*2^(1/3).",
              "answer": "2*49^(1/3)",
              "lines": [
                {
                  "step": "Write $\\dfrac{14}{\\sqrt[3]{7}}$ with no root in the denominator.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{14}{\\sqrt[3]{7}} = \\dfrac{14\\sqrt[3]{49}}{\\sqrt[3]{7} \\cdot \\sqrt[3]{49}}$",
                  "reason": "Rationalising the denominator: $7 \\cdot 49 = 343 = 7^3$, so the top and the bottom are multiplied by $\\sqrt[3]{49}$, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
                },
                {
                  "step": "$\\dfrac{14\\sqrt[3]{49}}{\\sqrt[3]{7} \\cdot \\sqrt[3]{49}} = \\dfrac{14\\sqrt[3]{49}}{7}$",
                  "reason": "Root of a product: $\\sqrt[3]{7} \\cdot \\sqrt[3]{49} = \\sqrt[3]{343} = 7$, since $7$ is the cube root of $343$."
                },
                {
                  "step": "$\\dfrac{14\\sqrt[3]{49}}{7} = 2\\sqrt[3]{49}$",
                  "reason": "Cancelling a common factor: $7$ divides the top and the bottom."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write $\\dfrac{\\sqrt{10}}{\\sqrt{34}}$ with no root in the denominator.",
            "lines": [
              {
                "step": "Write $\\dfrac{\\sqrt{10}}{\\sqrt{34}}$ with no root in the denominator.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{\\sqrt{10}}{\\sqrt{34}} = \\dfrac{\\sqrt{10} \\cdot \\sqrt{34}}{\\sqrt{34} \\cdot \\sqrt{34}}$",
                "reason": "Rationalising the denominator: the top and the bottom are multiplied by $\\sqrt{34}$, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
              },
              {
                "step": "$\\dfrac{\\sqrt{10} \\cdot \\sqrt{34}}{\\sqrt{34} \\cdot \\sqrt{34}} = \\dfrac{\\sqrt{340}}{34}$",
                "reason": "Root of a product: $\\sqrt{10} \\cdot \\sqrt{34} = \\sqrt{340}$ and $\\sqrt{34} \\cdot \\sqrt{34} = 34$."
              },
              {
                "step": "$\\dfrac{\\sqrt{340}}{34} = \\dfrac{2\\sqrt{85}}{34}$",
                "reason": "Simplest radical form: $340 = 4 \\cdot 85$, and the root of a product gives $\\sqrt{340} = 2\\sqrt{85}$."
              },
              {
                "step": "$\\dfrac{2\\sqrt{85}}{34} = \\dfrac{\\sqrt{85}}{17}$",
                "reason": "Cancelling a common factor: $2$ divides the top and the bottom."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $\\dfrac{\\sqrt{6}}{\\sqrt{51}}$ with no root in the denominator.",
              "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
              "answer": "sqrt(34)/17",
              "lines": [
                {
                  "step": "Write $\\dfrac{\\sqrt{6}}{\\sqrt{51}}$ with no root in the denominator.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{\\sqrt{6}}{\\sqrt{51}} = \\dfrac{\\sqrt{6} \\cdot \\sqrt{51}}{\\sqrt{51} \\cdot \\sqrt{51}}$",
                  "reason": "Rationalising the denominator: the top and the bottom are multiplied by $\\sqrt{51}$, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
                },
                {
                  "step": "$\\dfrac{\\sqrt{6} \\cdot \\sqrt{51}}{\\sqrt{51} \\cdot \\sqrt{51}} = \\dfrac{\\sqrt{306}}{51}$",
                  "reason": "Root of a product: $\\sqrt{6} \\cdot \\sqrt{51} = \\sqrt{306}$ and $\\sqrt{51} \\cdot \\sqrt{51} = 51$."
                },
                {
                  "step": "$\\dfrac{\\sqrt{306}}{51} = \\dfrac{3\\sqrt{34}}{51}$",
                  "reason": "Simplest radical form: $306 = 9 \\cdot 34$, and the root of a product gives $\\sqrt{306} = 3\\sqrt{34}$."
                },
                {
                  "step": "$\\dfrac{3\\sqrt{34}}{51} = \\dfrac{\\sqrt{34}}{17}$",
                  "reason": "Cancelling a common factor: $3$ divides the top and the bottom."
                }
              ]
            },
            {
              "prompt": "Write $\\dfrac{\\sqrt{22}}{\\sqrt{46}}$ with no root in the denominator.",
              "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
              "answer": "sqrt(253)/23",
              "lines": [
                {
                  "step": "Write $\\dfrac{\\sqrt{22}}{\\sqrt{46}}$ with no root in the denominator.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{\\sqrt{22}}{\\sqrt{46}} = \\dfrac{\\sqrt{22} \\cdot \\sqrt{46}}{\\sqrt{46} \\cdot \\sqrt{46}}$",
                  "reason": "Rationalising the denominator: the top and the bottom are multiplied by $\\sqrt{46}$, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
                },
                {
                  "step": "$\\dfrac{\\sqrt{22} \\cdot \\sqrt{46}}{\\sqrt{46} \\cdot \\sqrt{46}} = \\dfrac{\\sqrt{1012}}{46}$",
                  "reason": "Root of a product: $\\sqrt{22} \\cdot \\sqrt{46} = \\sqrt{1012}$ and $\\sqrt{46} \\cdot \\sqrt{46} = 46$."
                },
                {
                  "step": "$\\dfrac{\\sqrt{1012}}{46} = \\dfrac{2\\sqrt{253}}{46}$",
                  "reason": "Simplest radical form: $1012 = 4 \\cdot 253$, and the root of a product gives $\\sqrt{1012} = 2\\sqrt{253}$."
                },
                {
                  "step": "$\\dfrac{2\\sqrt{253}}{46} = \\dfrac{\\sqrt{253}}{23}$",
                  "reason": "Cancelling a common factor: $2$ divides the top and the bottom."
                }
              ]
            },
            {
              "prompt": "Write $\\dfrac{\\sqrt{15}}{\\sqrt{55}}$ with no root in the denominator.",
              "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
              "answer": "sqrt(33)/11",
              "lines": [
                {
                  "step": "Write $\\dfrac{\\sqrt{15}}{\\sqrt{55}}$ with no root in the denominator.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{\\sqrt{15}}{\\sqrt{55}} = \\dfrac{\\sqrt{15} \\cdot \\sqrt{55}}{\\sqrt{55} \\cdot \\sqrt{55}}$",
                  "reason": "Rationalising the denominator: the top and the bottom are multiplied by $\\sqrt{55}$, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
                },
                {
                  "step": "$\\dfrac{\\sqrt{15} \\cdot \\sqrt{55}}{\\sqrt{55} \\cdot \\sqrt{55}} = \\dfrac{\\sqrt{825}}{55}$",
                  "reason": "Root of a product: $\\sqrt{15} \\cdot \\sqrt{55} = \\sqrt{825}$ and $\\sqrt{55} \\cdot \\sqrt{55} = 55$."
                },
                {
                  "step": "$\\dfrac{\\sqrt{825}}{55} = \\dfrac{5\\sqrt{33}}{55}$",
                  "reason": "Simplest radical form: $825 = 25 \\cdot 33$, and the root of a product gives $\\sqrt{825} = 5\\sqrt{33}$."
                },
                {
                  "step": "$\\dfrac{5\\sqrt{33}}{55} = \\dfrac{\\sqrt{33}}{11}$",
                  "reason": "Cancelling a common factor: $5$ divides the top and the bottom."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t140-k2",
      "forms": [
        {
          "example": {
            "problem": "Write $\\dfrac{4}{3 + \\sqrt{5}}$ with no root in the denominator.",
            "lines": [
              {
                "step": "Write $\\dfrac{4}{3 + \\sqrt{5}}$ with no root in the denominator.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{4}{3 + \\sqrt{5}} = \\dfrac{4(3 - \\sqrt{5})}{(3 + \\sqrt{5})(3 - \\sqrt{5})}$",
                "reason": "Conjugate of $a + b\\sqrt{c}$: the conjugate of $3 + \\sqrt{5}$ is $3 - \\sqrt{5}$. Rationalising the denominator: the top and the bottom are multiplied by it, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
              },
              {
                "step": "$\\dfrac{4(3 - \\sqrt{5})}{(3 + \\sqrt{5})(3 - \\sqrt{5})} = \\dfrac{4(3 - \\sqrt{5})}{3^2 - (\\sqrt{5})^2}$",
                "reason": "Difference of squares: $(x + y)(x - y) = x^2 - y^2$, with $x = 3$ and $y = \\sqrt{5}$."
              },
              {
                "step": "$\\dfrac{4(3 - \\sqrt{5})}{3^2 - (\\sqrt{5})^2} = \\dfrac{4(3 - \\sqrt{5})}{4}$",
                "reason": "Root of a product and power of a product: $(\\sqrt{5})^2 = 5$, so the bottom is $9 - 5 = 4$."
              },
              {
                "step": "$\\dfrac{4(3 - \\sqrt{5})}{4} = 3 - \\sqrt{5}$",
                "reason": "The distributive law multiplies out the top. Cancelling a common factor: $4$ divides the top and the bottom."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $\\dfrac{14}{4 + \\sqrt{2}}$ with no root in the denominator.",
              "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
              "answer": "4-sqrt(2)",
              "lines": [
                {
                  "step": "Write $\\dfrac{14}{4 + \\sqrt{2}}$ with no root in the denominator.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{14}{4 + \\sqrt{2}} = \\dfrac{14(4 - \\sqrt{2})}{(4 + \\sqrt{2})(4 - \\sqrt{2})}$",
                  "reason": "Conjugate of $a + b\\sqrt{c}$: the conjugate of $4 + \\sqrt{2}$ is $4 - \\sqrt{2}$. Rationalising the denominator: the top and the bottom are multiplied by it, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
                },
                {
                  "step": "$\\dfrac{14(4 - \\sqrt{2})}{(4 + \\sqrt{2})(4 - \\sqrt{2})} = \\dfrac{14(4 - \\sqrt{2})}{4^2 - (\\sqrt{2})^2}$",
                  "reason": "Difference of squares: $(x + y)(x - y) = x^2 - y^2$, with $x = 4$ and $y = \\sqrt{2}$."
                },
                {
                  "step": "$\\dfrac{14(4 - \\sqrt{2})}{4^2 - (\\sqrt{2})^2} = \\dfrac{14(4 - \\sqrt{2})}{14}$",
                  "reason": "Root of a product and power of a product: $(\\sqrt{2})^2 = 2$, so the bottom is $16 - 2 = 14$."
                },
                {
                  "step": "$\\dfrac{14(4 - \\sqrt{2})}{14} = 4 - \\sqrt{2}$",
                  "reason": "The distributive law multiplies out the top. Cancelling a common factor: $14$ divides the top and the bottom."
                }
              ]
            },
            {
              "prompt": "Write $\\dfrac{6}{4 - \\sqrt{10}}$ with no root in the denominator.",
              "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
              "answer": "4+sqrt(10)",
              "lines": [
                {
                  "step": "Write $\\dfrac{6}{4 - \\sqrt{10}}$ with no root in the denominator.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{6}{4 - \\sqrt{10}} = \\dfrac{6(4 + \\sqrt{10})}{(4 - \\sqrt{10})(4 + \\sqrt{10})}$",
                  "reason": "Conjugate of $a + b\\sqrt{c}$: the conjugate of $4 - \\sqrt{10}$ is $4 + \\sqrt{10}$. Rationalising the denominator: the top and the bottom are multiplied by it, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
                },
                {
                  "step": "$\\dfrac{6(4 + \\sqrt{10})}{(4 - \\sqrt{10})(4 + \\sqrt{10})} = \\dfrac{6(4 + \\sqrt{10})}{4^2 - (\\sqrt{10})^2}$",
                  "reason": "Difference of squares: $(x + y)(x - y) = x^2 - y^2$, with $x = 4$ and $y = \\sqrt{10}$."
                },
                {
                  "step": "$\\dfrac{6(4 + \\sqrt{10})}{4^2 - (\\sqrt{10})^2} = \\dfrac{6(4 + \\sqrt{10})}{6}$",
                  "reason": "Root of a product and power of a product: $(\\sqrt{10})^2 = 10$, so the bottom is $16 - 10 = 6$."
                },
                {
                  "step": "$\\dfrac{6(4 + \\sqrt{10})}{6} = 4 + \\sqrt{10}$",
                  "reason": "The distributive law multiplies out the top. Cancelling a common factor: $6$ divides the top and the bottom."
                }
              ]
            },
            {
              "prompt": "Write $\\dfrac{8}{6 - 2\\sqrt{3}}$ with no root in the denominator.",
              "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
              "answer": "(6+2*sqrt(3))/3",
              "lines": [
                {
                  "step": "Write $\\dfrac{8}{6 - 2\\sqrt{3}}$ with no root in the denominator.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{8}{6 - 2\\sqrt{3}} = \\dfrac{8(6 + 2\\sqrt{3})}{(6 - 2\\sqrt{3})(6 + 2\\sqrt{3})}$",
                  "reason": "Conjugate of $a + b\\sqrt{c}$: the conjugate of $6 - 2\\sqrt{3}$ is $6 + 2\\sqrt{3}$. Rationalising the denominator: the top and the bottom are multiplied by it, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
                },
                {
                  "step": "$\\dfrac{8(6 + 2\\sqrt{3})}{(6 - 2\\sqrt{3})(6 + 2\\sqrt{3})} = \\dfrac{8(6 + 2\\sqrt{3})}{6^2 - (2\\sqrt{3})^2}$",
                  "reason": "Difference of squares: $(x + y)(x - y) = x^2 - y^2$, with $x = 6$ and $y = 2\\sqrt{3}$."
                },
                {
                  "step": "$\\dfrac{8(6 + 2\\sqrt{3})}{6^2 - (2\\sqrt{3})^2} = \\dfrac{8(6 + 2\\sqrt{3})}{24}$",
                  "reason": "Root of a product and power of a product: $(2\\sqrt{3})^2 = 12$, so the bottom is $36 - 12 = 24$."
                },
                {
                  "step": "$\\dfrac{8(6 + 2\\sqrt{3})}{24} = \\dfrac{6 + 2\\sqrt{3}}{3}$",
                  "reason": "The distributive law multiplies out the top. Cancelling a common factor: $8$ divides the top and the bottom."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write $\\dfrac{6}{\\sqrt{2} + \\sqrt{5}}$ with no root in the denominator.",
            "lines": [
              {
                "step": "Write $\\dfrac{6}{\\sqrt{2} + \\sqrt{5}}$ with no root in the denominator.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{6}{\\sqrt{2} + \\sqrt{5}} = \\dfrac{6(\\sqrt{2} - \\sqrt{5})}{(\\sqrt{2} + \\sqrt{5})(\\sqrt{2} - \\sqrt{5})}$",
                "reason": "Conjugate of $a + b\\sqrt{c}$: the conjugate of $\\sqrt{2} + \\sqrt{5}$ is $\\sqrt{2} - \\sqrt{5}$. Rationalising the denominator: the top and the bottom are multiplied by it, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
              },
              {
                "step": "$\\dfrac{6(\\sqrt{2} - \\sqrt{5})}{(\\sqrt{2} + \\sqrt{5})(\\sqrt{2} - \\sqrt{5})} = \\dfrac{6(\\sqrt{2} - \\sqrt{5})}{(\\sqrt{2})^2 - (\\sqrt{5})^2}$",
                "reason": "Difference of squares: $(x + y)(x - y) = x^2 - y^2$, with $x = \\sqrt{2}$ and $y = \\sqrt{5}$."
              },
              {
                "step": "$\\dfrac{6(\\sqrt{2} - \\sqrt{5})}{(\\sqrt{2})^2 - (\\sqrt{5})^2} = \\dfrac{6(\\sqrt{2} - \\sqrt{5})}{-3}$",
                "reason": "Root of a product and power of a product: $(\\sqrt{2})^2 = 2$ and $(\\sqrt{5})^2 = 5$, so the bottom is $2 - 5 = -3$."
              },
              {
                "step": "$\\dfrac{6(\\sqrt{2} - \\sqrt{5})}{-3} = -2\\sqrt{2} + 2\\sqrt{5}$",
                "reason": "The distributive law multiplies out the top. Cancelling a common factor: $3$ divides the top and the bottom, and the minus sign of the bottom moves to the top."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $\\dfrac{8}{\\sqrt{5} - \\sqrt{13}}$ with no root in the denominator.",
              "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
              "answer": "-sqrt(5)-sqrt(13)",
              "lines": [
                {
                  "step": "Write $\\dfrac{8}{\\sqrt{5} - \\sqrt{13}}$ with no root in the denominator.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{8}{\\sqrt{5} - \\sqrt{13}} = \\dfrac{8(\\sqrt{5} + \\sqrt{13})}{(\\sqrt{5} - \\sqrt{13})(\\sqrt{5} + \\sqrt{13})}$",
                  "reason": "Conjugate of $a + b\\sqrt{c}$: the conjugate of $\\sqrt{5} - \\sqrt{13}$ is $\\sqrt{5} + \\sqrt{13}$. Rationalising the denominator: the top and the bottom are multiplied by it, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
                },
                {
                  "step": "$\\dfrac{8(\\sqrt{5} + \\sqrt{13})}{(\\sqrt{5} - \\sqrt{13})(\\sqrt{5} + \\sqrt{13})} = \\dfrac{8(\\sqrt{5} + \\sqrt{13})}{(\\sqrt{5})^2 - (\\sqrt{13})^2}$",
                  "reason": "Difference of squares: $(x + y)(x - y) = x^2 - y^2$, with $x = \\sqrt{5}$ and $y = \\sqrt{13}$."
                },
                {
                  "step": "$\\dfrac{8(\\sqrt{5} + \\sqrt{13})}{(\\sqrt{5})^2 - (\\sqrt{13})^2} = \\dfrac{8(\\sqrt{5} + \\sqrt{13})}{-8}$",
                  "reason": "Root of a product and power of a product: $(\\sqrt{5})^2 = 5$ and $(\\sqrt{13})^2 = 13$, so the bottom is $5 - 13 = -8$."
                },
                {
                  "step": "$\\dfrac{8(\\sqrt{5} + \\sqrt{13})}{-8} = -\\sqrt{5} - \\sqrt{13}$",
                  "reason": "The distributive law multiplies out the top. Cancelling a common factor: $8$ divides the top and the bottom, and the minus sign of the bottom moves to the top."
                }
              ]
            },
            {
              "prompt": "Write $\\dfrac{4}{\\sqrt{3} + \\sqrt{11}}$ with no root in the denominator.",
              "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
              "answer": "(sqrt(11)-sqrt(3))/2",
              "lines": [
                {
                  "step": "Write $\\dfrac{4}{\\sqrt{3} + \\sqrt{11}}$ with no root in the denominator.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{4}{\\sqrt{3} + \\sqrt{11}} = \\dfrac{4(\\sqrt{3} - \\sqrt{11})}{(\\sqrt{3} + \\sqrt{11})(\\sqrt{3} - \\sqrt{11})}$",
                  "reason": "Conjugate of $a + b\\sqrt{c}$: the conjugate of $\\sqrt{3} + \\sqrt{11}$ is $\\sqrt{3} - \\sqrt{11}$. Rationalising the denominator: the top and the bottom are multiplied by it, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
                },
                {
                  "step": "$\\dfrac{4(\\sqrt{3} - \\sqrt{11})}{(\\sqrt{3} + \\sqrt{11})(\\sqrt{3} - \\sqrt{11})} = \\dfrac{4(\\sqrt{3} - \\sqrt{11})}{(\\sqrt{3})^2 - (\\sqrt{11})^2}$",
                  "reason": "Difference of squares: $(x + y)(x - y) = x^2 - y^2$, with $x = \\sqrt{3}$ and $y = \\sqrt{11}$."
                },
                {
                  "step": "$\\dfrac{4(\\sqrt{3} - \\sqrt{11})}{(\\sqrt{3})^2 - (\\sqrt{11})^2} = \\dfrac{4(\\sqrt{3} - \\sqrt{11})}{-8}$",
                  "reason": "Root of a product and power of a product: $(\\sqrt{3})^2 = 3$ and $(\\sqrt{11})^2 = 11$, so the bottom is $3 - 11 = -8$."
                },
                {
                  "step": "$\\dfrac{4(\\sqrt{3} - \\sqrt{11})}{-8} = \\dfrac{-\\sqrt{3} + \\sqrt{11}}{2}$",
                  "reason": "The distributive law multiplies out the top. Cancelling a common factor: $4$ divides the top and the bottom, and the minus sign of the bottom moves to the top."
                }
              ]
            },
            {
              "prompt": "Write $\\dfrac{12}{2\\sqrt{2} - \\sqrt{14}}$ with no root in the denominator.",
              "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
              "answer": "-4*sqrt(2)-2*sqrt(14)",
              "lines": [
                {
                  "step": "Write $\\dfrac{12}{2\\sqrt{2} - \\sqrt{14}}$ with no root in the denominator.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{12}{2\\sqrt{2} - \\sqrt{14}} = \\dfrac{12(2\\sqrt{2} + \\sqrt{14})}{(2\\sqrt{2} - \\sqrt{14})(2\\sqrt{2} + \\sqrt{14})}$",
                  "reason": "Conjugate of $a + b\\sqrt{c}$: the conjugate of $2\\sqrt{2} - \\sqrt{14}$ is $2\\sqrt{2} + \\sqrt{14}$. Rationalising the denominator: the top and the bottom are multiplied by it, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
                },
                {
                  "step": "$\\dfrac{12(2\\sqrt{2} + \\sqrt{14})}{(2\\sqrt{2} - \\sqrt{14})(2\\sqrt{2} + \\sqrt{14})} = \\dfrac{12(2\\sqrt{2} + \\sqrt{14})}{(2\\sqrt{2})^2 - (\\sqrt{14})^2}$",
                  "reason": "Difference of squares: $(x + y)(x - y) = x^2 - y^2$, with $x = 2\\sqrt{2}$ and $y = \\sqrt{14}$."
                },
                {
                  "step": "$\\dfrac{12(2\\sqrt{2} + \\sqrt{14})}{(2\\sqrt{2})^2 - (\\sqrt{14})^2} = \\dfrac{12(2\\sqrt{2} + \\sqrt{14})}{-6}$",
                  "reason": "Root of a product and power of a product: $(2\\sqrt{2})^2 = 8$ and $(\\sqrt{14})^2 = 14$, so the bottom is $8 - 14 = -6$."
                },
                {
                  "step": "$\\dfrac{12(2\\sqrt{2} + \\sqrt{14})}{-6} = -4\\sqrt{2} - 2\\sqrt{14}$",
                  "reason": "The distributive law multiplies out the top. Cancelling a common factor: $6$ divides the top and the bottom, and the minus sign of the bottom moves to the top."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $\\dfrac{1}{\\sqrt{5} + \\sqrt{6}} + \\dfrac{1}{\\sqrt{6} + \\sqrt{7}} + \\dfrac{1}{\\sqrt{7} + \\sqrt{8}} + \\cdots + \\dfrac{1}{\\sqrt{19} + \\sqrt{20}}$.",
            "lines": [
              {
                "step": "Simplify $\\dfrac{1}{\\sqrt{5} + \\sqrt{6}} + \\dfrac{1}{\\sqrt{6} + \\sqrt{7}} + \\dfrac{1}{\\sqrt{7} + \\sqrt{8}} + \\cdots + \\dfrac{1}{\\sqrt{19} + \\sqrt{20}}$.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Each fraction $\\dfrac{1}{\\sqrt{n} + \\sqrt{n + 1}}$, for a whole number $n$, equals $\\dfrac{\\sqrt{n + 1} - \\sqrt{n}}{(\\sqrt{n + 1} + \\sqrt{n})(\\sqrt{n + 1} - \\sqrt{n})}$.",
                "reason": "Rationalising the denominator: the top and the bottom are multiplied by $\\sqrt{n + 1} - \\sqrt{n}$, which is the conjugate of $\\sqrt{n + 1} + \\sqrt{n}$ by conjugate of $a + b\\sqrt{c}$, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
              },
              {
                "step": "Its bottom is $(n + 1) - n = 1$, so each fraction equals $\\sqrt{n + 1} - \\sqrt{n}$.",
                "reason": "Difference of squares: $(x + y)(x - y) = x^2 - y^2$, with $x = \\sqrt{n + 1}$ and $y = \\sqrt{n}$, and dividing by $1$ keeps the number."
              },
              {
                "step": "The sum is $(\\sqrt{6} - \\sqrt{5}) + (\\sqrt{7} - \\sqrt{6}) + (\\sqrt{8} - \\sqrt{7}) + \\cdots + (\\sqrt{20} - \\sqrt{19})$.",
                "reason": "Each fraction is replaced by the expression equal to it in line 3."
              },
              {
                "step": "The sum is $\\sqrt{20} - \\sqrt{5}$.",
                "reason": "Collecting like terms: each root between the first and the last appears once with a plus sign and once with a minus sign, and the two cancel."
              },
              {
                "step": "$\\sqrt{20} - \\sqrt{5} = 2\\sqrt{5} - \\sqrt{5}$",
                "reason": "Simplest radical form: the root of a product takes the square factor out of each root that has one."
              },
              {
                "step": "$2\\sqrt{5} - \\sqrt{5} = \\sqrt{5}$",
                "reason": "Like radicals: the numbers in front are collected by the distributive law and the root is kept."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\dfrac{1}{\\sqrt{8} + \\sqrt{9}} + \\dfrac{1}{\\sqrt{9} + \\sqrt{10}} + \\dfrac{1}{\\sqrt{10} + \\sqrt{11}} + \\cdots + \\dfrac{1}{\\sqrt{49} + \\sqrt{50}}$.",
              "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
              "answer": "3*sqrt(2)",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{1}{\\sqrt{8} + \\sqrt{9}} + \\dfrac{1}{\\sqrt{9} + \\sqrt{10}} + \\dfrac{1}{\\sqrt{10} + \\sqrt{11}} + \\cdots + \\dfrac{1}{\\sqrt{49} + \\sqrt{50}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each fraction $\\dfrac{1}{\\sqrt{n} + \\sqrt{n + 1}}$, for a whole number $n$, equals $\\dfrac{\\sqrt{n + 1} - \\sqrt{n}}{(\\sqrt{n + 1} + \\sqrt{n})(\\sqrt{n + 1} - \\sqrt{n})}$.",
                  "reason": "Rationalising the denominator: the top and the bottom are multiplied by $\\sqrt{n + 1} - \\sqrt{n}$, which is the conjugate of $\\sqrt{n + 1} + \\sqrt{n}$ by conjugate of $a + b\\sqrt{c}$, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
                },
                {
                  "step": "Its bottom is $(n + 1) - n = 1$, so each fraction equals $\\sqrt{n + 1} - \\sqrt{n}$.",
                  "reason": "Difference of squares: $(x + y)(x - y) = x^2 - y^2$, with $x = \\sqrt{n + 1}$ and $y = \\sqrt{n}$, and dividing by $1$ keeps the number."
                },
                {
                  "step": "The sum is $(\\sqrt{9} - \\sqrt{8}) + (\\sqrt{10} - \\sqrt{9}) + (\\sqrt{11} - \\sqrt{10}) + \\cdots + (\\sqrt{50} - \\sqrt{49})$.",
                  "reason": "Each fraction is replaced by the expression equal to it in line 3."
                },
                {
                  "step": "The sum is $\\sqrt{50} - \\sqrt{8}$.",
                  "reason": "Collecting like terms: each root between the first and the last appears once with a plus sign and once with a minus sign, and the two cancel."
                },
                {
                  "step": "$\\sqrt{50} - \\sqrt{8} = 5\\sqrt{2} - 2\\sqrt{2}$",
                  "reason": "Simplest radical form: the root of a product takes the square factor out of each root that has one."
                },
                {
                  "step": "$5\\sqrt{2} - 2\\sqrt{2} = 3\\sqrt{2}$",
                  "reason": "Like radicals: the numbers in front are collected by the distributive law and the root is kept."
                }
              ]
            },
            {
              "prompt": "Simplify $\\dfrac{1}{\\sqrt{18} + \\sqrt{19}} + \\dfrac{1}{\\sqrt{19} + \\sqrt{20}} + \\dfrac{1}{\\sqrt{20} + \\sqrt{21}} + \\cdots + \\dfrac{1}{\\sqrt{31} + \\sqrt{32}}$.",
              "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
              "answer": "sqrt(2)",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{1}{\\sqrt{18} + \\sqrt{19}} + \\dfrac{1}{\\sqrt{19} + \\sqrt{20}} + \\dfrac{1}{\\sqrt{20} + \\sqrt{21}} + \\cdots + \\dfrac{1}{\\sqrt{31} + \\sqrt{32}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each fraction $\\dfrac{1}{\\sqrt{n} + \\sqrt{n + 1}}$, for a whole number $n$, equals $\\dfrac{\\sqrt{n + 1} - \\sqrt{n}}{(\\sqrt{n + 1} + \\sqrt{n})(\\sqrt{n + 1} - \\sqrt{n})}$.",
                  "reason": "Rationalising the denominator: the top and the bottom are multiplied by $\\sqrt{n + 1} - \\sqrt{n}$, which is the conjugate of $\\sqrt{n + 1} + \\sqrt{n}$ by conjugate of $a + b\\sqrt{c}$, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
                },
                {
                  "step": "Its bottom is $(n + 1) - n = 1$, so each fraction equals $\\sqrt{n + 1} - \\sqrt{n}$.",
                  "reason": "Difference of squares: $(x + y)(x - y) = x^2 - y^2$, with $x = \\sqrt{n + 1}$ and $y = \\sqrt{n}$, and dividing by $1$ keeps the number."
                },
                {
                  "step": "The sum is $(\\sqrt{19} - \\sqrt{18}) + (\\sqrt{20} - \\sqrt{19}) + (\\sqrt{21} - \\sqrt{20}) + \\cdots + (\\sqrt{32} - \\sqrt{31})$.",
                  "reason": "Each fraction is replaced by the expression equal to it in line 3."
                },
                {
                  "step": "The sum is $\\sqrt{32} - \\sqrt{18}$.",
                  "reason": "Collecting like terms: each root between the first and the last appears once with a plus sign and once with a minus sign, and the two cancel."
                },
                {
                  "step": "$\\sqrt{32} - \\sqrt{18} = 4\\sqrt{2} - 3\\sqrt{2}$",
                  "reason": "Simplest radical form: the root of a product takes the square factor out of each root that has one."
                },
                {
                  "step": "$4\\sqrt{2} - 3\\sqrt{2} = \\sqrt{2}$",
                  "reason": "Like radicals: the numbers in front are collected by the distributive law and the root is kept."
                }
              ]
            },
            {
              "prompt": "Simplify $\\dfrac{1}{\\sqrt{10} + \\sqrt{11}} + \\dfrac{1}{\\sqrt{11} + \\sqrt{12}} + \\dfrac{1}{\\sqrt{12} + \\sqrt{13}} + \\cdots + \\dfrac{1}{\\sqrt{39} + \\sqrt{40}}$.",
              "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
              "answer": "sqrt(10)",
              "lines": [
                {
                  "step": "Simplify $\\dfrac{1}{\\sqrt{10} + \\sqrt{11}} + \\dfrac{1}{\\sqrt{11} + \\sqrt{12}} + \\dfrac{1}{\\sqrt{12} + \\sqrt{13}} + \\cdots + \\dfrac{1}{\\sqrt{39} + \\sqrt{40}}$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Each fraction $\\dfrac{1}{\\sqrt{n} + \\sqrt{n + 1}}$, for a whole number $n$, equals $\\dfrac{\\sqrt{n + 1} - \\sqrt{n}}{(\\sqrt{n + 1} + \\sqrt{n})(\\sqrt{n + 1} - \\sqrt{n})}$.",
                  "reason": "Rationalising the denominator: the top and the bottom are multiplied by $\\sqrt{n + 1} - \\sqrt{n}$, which is the conjugate of $\\sqrt{n + 1} + \\sqrt{n}$ by conjugate of $a + b\\sqrt{c}$, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
                },
                {
                  "step": "Its bottom is $(n + 1) - n = 1$, so each fraction equals $\\sqrt{n + 1} - \\sqrt{n}$.",
                  "reason": "Difference of squares: $(x + y)(x - y) = x^2 - y^2$, with $x = \\sqrt{n + 1}$ and $y = \\sqrt{n}$, and dividing by $1$ keeps the number."
                },
                {
                  "step": "The sum is $(\\sqrt{11} - \\sqrt{10}) + (\\sqrt{12} - \\sqrt{11}) + (\\sqrt{13} - \\sqrt{12}) + \\cdots + (\\sqrt{40} - \\sqrt{39})$.",
                  "reason": "Each fraction is replaced by the expression equal to it in line 3."
                },
                {
                  "step": "The sum is $\\sqrt{40} - \\sqrt{10}$.",
                  "reason": "Collecting like terms: each root between the first and the last appears once with a plus sign and once with a minus sign, and the two cancel."
                },
                {
                  "step": "$\\sqrt{40} - \\sqrt{10} = 2\\sqrt{10} - \\sqrt{10}$",
                  "reason": "Simplest radical form: the root of a product takes the square factor out of each root that has one."
                },
                {
                  "step": "$2\\sqrt{10} - \\sqrt{10} = \\sqrt{10}$",
                  "reason": "Like radicals: the numbers in front are collected by the distributive law and the root is kept."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t140-k3",
      "forms": [
        {
          "example": {
            "problem": "Write $\\dfrac{6}{\\sqrt{3} + \\sqrt{7} + \\sqrt{10}}$ with no root in the denominator.",
            "lines": [
              {
                "step": "Write $\\dfrac{6}{\\sqrt{3} + \\sqrt{7} + \\sqrt{10}}$ with no root in the denominator.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{6}{\\sqrt{3} + \\sqrt{7} + \\sqrt{10}} = \\dfrac{6\\left((\\sqrt{3} + \\sqrt{7}) - \\sqrt{10}\\right)}{\\left((\\sqrt{3} + \\sqrt{7}) + \\sqrt{10}\\right)\\left((\\sqrt{3} + \\sqrt{7}) - \\sqrt{10}\\right)}$",
                "reason": "Conjugate of $a + b\\sqrt{c}$, with $\\sqrt{3} + \\sqrt{7}$ taken as one number: the conjugate of $(\\sqrt{3} + \\sqrt{7}) + \\sqrt{10}$ is $(\\sqrt{3} + \\sqrt{7}) - \\sqrt{10}$. Rationalising the denominator: the top and the bottom are multiplied by it, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
              },
              {
                "step": "$\\dfrac{6\\left((\\sqrt{3} + \\sqrt{7}) - \\sqrt{10}\\right)}{\\left((\\sqrt{3} + \\sqrt{7}) + \\sqrt{10}\\right)\\left((\\sqrt{3} + \\sqrt{7}) - \\sqrt{10}\\right)} = \\dfrac{6\\left((\\sqrt{3} + \\sqrt{7}) - \\sqrt{10}\\right)}{(\\sqrt{3} + \\sqrt{7})^2 - 10}$",
                "reason": "Difference of squares: $(x + y)(x - y) = x^2 - y^2$, with $x = \\sqrt{3} + \\sqrt{7}$ and $y = \\sqrt{10}$, and $(\\sqrt{10})^2 = 10$."
              },
              {
                "step": "$\\dfrac{6\\left((\\sqrt{3} + \\sqrt{7}) - \\sqrt{10}\\right)}{(\\sqrt{3} + \\sqrt{7})^2 - 10} = \\dfrac{6\\left((\\sqrt{3} + \\sqrt{7}) - \\sqrt{10}\\right)}{2\\sqrt{21}}$",
                "reason": "Square of a binomial: $(\\sqrt{3} + \\sqrt{7})^2 = 3 + 2\\sqrt{21} + 7$ by the root of a product, and $3 + 7 - 10 = 0$."
              },
              {
                "step": "$\\dfrac{6\\left((\\sqrt{3} + \\sqrt{7}) - \\sqrt{10}\\right)}{2\\sqrt{21}} = \\dfrac{6\\left((\\sqrt{3} + \\sqrt{7}) - \\sqrt{10}\\right)\\sqrt{21}}{42}$",
                "reason": "Rationalising the denominator: the top and the bottom are multiplied by $\\sqrt{21}$, and the root of a product gives $2\\sqrt{21} \\cdot \\sqrt{21} = 42$."
              },
              {
                "step": "$\\dfrac{6\\left((\\sqrt{3} + \\sqrt{7}) - \\sqrt{10}\\right)\\sqrt{21}}{42} = \\dfrac{42\\sqrt{3} + 18\\sqrt{7} - 6\\sqrt{210}}{42}$",
                "reason": "The distributive law multiplies out the top, and the root of a product with simplest radical form writes each root."
              },
              {
                "step": "$\\dfrac{42\\sqrt{3} + 18\\sqrt{7} - 6\\sqrt{210}}{42} = \\dfrac{7\\sqrt{3} + 3\\sqrt{7} - \\sqrt{210}}{7}$",
                "reason": "Cancelling a common factor: $6$ divides the top and the bottom."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $\\dfrac{4}{\\sqrt{2} + \\sqrt{11} - \\sqrt{13}}$ with no root in the denominator.",
              "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
              "answer": "(11*sqrt(2)+2*sqrt(11)+sqrt(286))/11",
              "lines": [
                {
                  "step": "Write $\\dfrac{4}{\\sqrt{2} + \\sqrt{11} - \\sqrt{13}}$ with no root in the denominator.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{4}{\\sqrt{2} + \\sqrt{11} - \\sqrt{13}} = \\dfrac{4\\left((\\sqrt{2} + \\sqrt{11}) + \\sqrt{13}\\right)}{\\left((\\sqrt{2} + \\sqrt{11}) - \\sqrt{13}\\right)\\left((\\sqrt{2} + \\sqrt{11}) + \\sqrt{13}\\right)}$",
                  "reason": "Conjugate of $a + b\\sqrt{c}$, with $\\sqrt{2} + \\sqrt{11}$ taken as one number: the conjugate of $(\\sqrt{2} + \\sqrt{11}) - \\sqrt{13}$ is $(\\sqrt{2} + \\sqrt{11}) + \\sqrt{13}$. Rationalising the denominator: the top and the bottom are multiplied by it, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
                },
                {
                  "step": "$\\dfrac{4\\left((\\sqrt{2} + \\sqrt{11}) + \\sqrt{13}\\right)}{\\left((\\sqrt{2} + \\sqrt{11}) - \\sqrt{13}\\right)\\left((\\sqrt{2} + \\sqrt{11}) + \\sqrt{13}\\right)} = \\dfrac{4\\left((\\sqrt{2} + \\sqrt{11}) + \\sqrt{13}\\right)}{(\\sqrt{2} + \\sqrt{11})^2 - 13}$",
                  "reason": "Difference of squares: $(x + y)(x - y) = x^2 - y^2$, with $x = \\sqrt{2} + \\sqrt{11}$ and $y = \\sqrt{13}$, and $(\\sqrt{13})^2 = 13$."
                },
                {
                  "step": "$\\dfrac{4\\left((\\sqrt{2} + \\sqrt{11}) + \\sqrt{13}\\right)}{(\\sqrt{2} + \\sqrt{11})^2 - 13} = \\dfrac{4\\left((\\sqrt{2} + \\sqrt{11}) + \\sqrt{13}\\right)}{2\\sqrt{22}}$",
                  "reason": "Square of a binomial: $(\\sqrt{2} + \\sqrt{11})^2 = 2 + 2\\sqrt{22} + 11$ by the root of a product, and $2 + 11 - 13 = 0$."
                },
                {
                  "step": "$\\dfrac{4\\left((\\sqrt{2} + \\sqrt{11}) + \\sqrt{13}\\right)}{2\\sqrt{22}} = \\dfrac{4\\left((\\sqrt{2} + \\sqrt{11}) + \\sqrt{13}\\right)\\sqrt{22}}{44}$",
                  "reason": "Rationalising the denominator: the top and the bottom are multiplied by $\\sqrt{22}$, and the root of a product gives $2\\sqrt{22} \\cdot \\sqrt{22} = 44$."
                },
                {
                  "step": "$\\dfrac{4\\left((\\sqrt{2} + \\sqrt{11}) + \\sqrt{13}\\right)\\sqrt{22}}{44} = \\dfrac{44\\sqrt{2} + 8\\sqrt{11} + 4\\sqrt{286}}{44}$",
                  "reason": "The distributive law multiplies out the top, and the root of a product with simplest radical form writes each root."
                },
                {
                  "step": "$\\dfrac{44\\sqrt{2} + 8\\sqrt{11} + 4\\sqrt{286}}{44} = \\dfrac{11\\sqrt{2} + 2\\sqrt{11} + \\sqrt{286}}{11}$",
                  "reason": "Cancelling a common factor: $4$ divides the top and the bottom."
                }
              ]
            },
            {
              "prompt": "Write $\\dfrac{10}{\\sqrt{5} + \\sqrt{6} + \\sqrt{11}}$ with no root in the denominator.",
              "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
              "answer": "(6*sqrt(5)+5*sqrt(6)-sqrt(330))/6",
              "lines": [
                {
                  "step": "Write $\\dfrac{10}{\\sqrt{5} + \\sqrt{6} + \\sqrt{11}}$ with no root in the denominator.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{10}{\\sqrt{5} + \\sqrt{6} + \\sqrt{11}} = \\dfrac{10\\left((\\sqrt{5} + \\sqrt{6}) - \\sqrt{11}\\right)}{\\left((\\sqrt{5} + \\sqrt{6}) + \\sqrt{11}\\right)\\left((\\sqrt{5} + \\sqrt{6}) - \\sqrt{11}\\right)}$",
                  "reason": "Conjugate of $a + b\\sqrt{c}$, with $\\sqrt{5} + \\sqrt{6}$ taken as one number: the conjugate of $(\\sqrt{5} + \\sqrt{6}) + \\sqrt{11}$ is $(\\sqrt{5} + \\sqrt{6}) - \\sqrt{11}$. Rationalising the denominator: the top and the bottom are multiplied by it, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
                },
                {
                  "step": "$\\dfrac{10\\left((\\sqrt{5} + \\sqrt{6}) - \\sqrt{11}\\right)}{\\left((\\sqrt{5} + \\sqrt{6}) + \\sqrt{11}\\right)\\left((\\sqrt{5} + \\sqrt{6}) - \\sqrt{11}\\right)} = \\dfrac{10\\left((\\sqrt{5} + \\sqrt{6}) - \\sqrt{11}\\right)}{(\\sqrt{5} + \\sqrt{6})^2 - 11}$",
                  "reason": "Difference of squares: $(x + y)(x - y) = x^2 - y^2$, with $x = \\sqrt{5} + \\sqrt{6}$ and $y = \\sqrt{11}$, and $(\\sqrt{11})^2 = 11$."
                },
                {
                  "step": "$\\dfrac{10\\left((\\sqrt{5} + \\sqrt{6}) - \\sqrt{11}\\right)}{(\\sqrt{5} + \\sqrt{6})^2 - 11} = \\dfrac{10\\left((\\sqrt{5} + \\sqrt{6}) - \\sqrt{11}\\right)}{2\\sqrt{30}}$",
                  "reason": "Square of a binomial: $(\\sqrt{5} + \\sqrt{6})^2 = 5 + 2\\sqrt{30} + 6$ by the root of a product, and $5 + 6 - 11 = 0$."
                },
                {
                  "step": "$\\dfrac{10\\left((\\sqrt{5} + \\sqrt{6}) - \\sqrt{11}\\right)}{2\\sqrt{30}} = \\dfrac{10\\left((\\sqrt{5} + \\sqrt{6}) - \\sqrt{11}\\right)\\sqrt{30}}{60}$",
                  "reason": "Rationalising the denominator: the top and the bottom are multiplied by $\\sqrt{30}$, and the root of a product gives $2\\sqrt{30} \\cdot \\sqrt{30} = 60$."
                },
                {
                  "step": "$\\dfrac{10\\left((\\sqrt{5} + \\sqrt{6}) - \\sqrt{11}\\right)\\sqrt{30}}{60} = \\dfrac{60\\sqrt{5} + 50\\sqrt{6} - 10\\sqrt{330}}{60}$",
                  "reason": "The distributive law multiplies out the top, and the root of a product with simplest radical form writes each root."
                },
                {
                  "step": "$\\dfrac{60\\sqrt{5} + 50\\sqrt{6} - 10\\sqrt{330}}{60} = \\dfrac{6\\sqrt{5} + 5\\sqrt{6} - \\sqrt{330}}{6}$",
                  "reason": "Cancelling a common factor: $10$ divides the top and the bottom."
                }
              ]
            },
            {
              "prompt": "Write $\\dfrac{12}{\\sqrt{3} + \\sqrt{10} - \\sqrt{13}}$ with no root in the denominator.",
              "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
              "answer": "(10*sqrt(3)+3*sqrt(10)+sqrt(390))/5",
              "lines": [
                {
                  "step": "Write $\\dfrac{12}{\\sqrt{3} + \\sqrt{10} - \\sqrt{13}}$ with no root in the denominator.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{12}{\\sqrt{3} + \\sqrt{10} - \\sqrt{13}} = \\dfrac{12\\left((\\sqrt{3} + \\sqrt{10}) + \\sqrt{13}\\right)}{\\left((\\sqrt{3} + \\sqrt{10}) - \\sqrt{13}\\right)\\left((\\sqrt{3} + \\sqrt{10}) + \\sqrt{13}\\right)}$",
                  "reason": "Conjugate of $a + b\\sqrt{c}$, with $\\sqrt{3} + \\sqrt{10}$ taken as one number: the conjugate of $(\\sqrt{3} + \\sqrt{10}) - \\sqrt{13}$ is $(\\sqrt{3} + \\sqrt{10}) + \\sqrt{13}$. Rationalising the denominator: the top and the bottom are multiplied by it, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
                },
                {
                  "step": "$\\dfrac{12\\left((\\sqrt{3} + \\sqrt{10}) + \\sqrt{13}\\right)}{\\left((\\sqrt{3} + \\sqrt{10}) - \\sqrt{13}\\right)\\left((\\sqrt{3} + \\sqrt{10}) + \\sqrt{13}\\right)} = \\dfrac{12\\left((\\sqrt{3} + \\sqrt{10}) + \\sqrt{13}\\right)}{(\\sqrt{3} + \\sqrt{10})^2 - 13}$",
                  "reason": "Difference of squares: $(x + y)(x - y) = x^2 - y^2$, with $x = \\sqrt{3} + \\sqrt{10}$ and $y = \\sqrt{13}$, and $(\\sqrt{13})^2 = 13$."
                },
                {
                  "step": "$\\dfrac{12\\left((\\sqrt{3} + \\sqrt{10}) + \\sqrt{13}\\right)}{(\\sqrt{3} + \\sqrt{10})^2 - 13} = \\dfrac{12\\left((\\sqrt{3} + \\sqrt{10}) + \\sqrt{13}\\right)}{2\\sqrt{30}}$",
                  "reason": "Square of a binomial: $(\\sqrt{3} + \\sqrt{10})^2 = 3 + 2\\sqrt{30} + 10$ by the root of a product, and $3 + 10 - 13 = 0$."
                },
                {
                  "step": "$\\dfrac{12\\left((\\sqrt{3} + \\sqrt{10}) + \\sqrt{13}\\right)}{2\\sqrt{30}} = \\dfrac{12\\left((\\sqrt{3} + \\sqrt{10}) + \\sqrt{13}\\right)\\sqrt{30}}{60}$",
                  "reason": "Rationalising the denominator: the top and the bottom are multiplied by $\\sqrt{30}$, and the root of a product gives $2\\sqrt{30} \\cdot \\sqrt{30} = 60$."
                },
                {
                  "step": "$\\dfrac{12\\left((\\sqrt{3} + \\sqrt{10}) + \\sqrt{13}\\right)\\sqrt{30}}{60} = \\dfrac{120\\sqrt{3} + 36\\sqrt{10} + 12\\sqrt{390}}{60}$",
                  "reason": "The distributive law multiplies out the top, and the root of a product with simplest radical form writes each root."
                },
                {
                  "step": "$\\dfrac{120\\sqrt{3} + 36\\sqrt{10} + 12\\sqrt{390}}{60} = \\dfrac{10\\sqrt{3} + 3\\sqrt{10} + \\sqrt{390}}{5}$",
                  "reason": "Cancelling a common factor: $12$ divides the top and the bottom."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write $\\dfrac{119}{5 - \\sqrt[3]{6}}$ with no root in the denominator.",
            "lines": [
              {
                "step": "Write $\\dfrac{119}{5 - \\sqrt[3]{6}}$ with no root in the denominator.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{119}{5 - \\sqrt[3]{6}} = \\dfrac{119(25 + 5\\sqrt[3]{6} + \\sqrt[3]{36})}{(5 - \\sqrt[3]{6})(25 + 5\\sqrt[3]{6} + \\sqrt[3]{36})}$",
                "reason": "Difference of cubes: $(x - y)(x^2 + xy + y^2) = x^3 - y^3$, with $x = 5$ and $y = \\sqrt[3]{6}$, so the bottom is one factor and $25 + 5\\sqrt[3]{6} + \\sqrt[3]{36}$ is the other factor. Rationalising the denominator: the top and the bottom are multiplied by $25 + 5\\sqrt[3]{6} + \\sqrt[3]{36}$, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
              },
              {
                "step": "$\\dfrac{119(25 + 5\\sqrt[3]{6} + \\sqrt[3]{36})}{(5 - \\sqrt[3]{6})(25 + 5\\sqrt[3]{6} + \\sqrt[3]{36})} = \\dfrac{119(25 + 5\\sqrt[3]{6} + \\sqrt[3]{36})}{5^3 - (\\sqrt[3]{6})^3}$",
                "reason": "Difference of cubes, with $x = 5$ and $y = \\sqrt[3]{6}$."
              },
              {
                "step": "$\\dfrac{119(25 + 5\\sqrt[3]{6} + \\sqrt[3]{36})}{5^3 - (\\sqrt[3]{6})^3} = \\dfrac{119(25 + 5\\sqrt[3]{6} + \\sqrt[3]{36})}{119}$",
                "reason": "The radical sign is the exponent $\\frac{1}{3}$, and the power law multiplies the exponents, so a cube root cubed is the number under it: $5^3 = 125$ and $(\\sqrt[3]{6})^3 = 6$."
              },
              {
                "step": "$\\dfrac{119(25 + 5\\sqrt[3]{6} + \\sqrt[3]{36})}{119} = 25 + 5\\sqrt[3]{6} + \\sqrt[3]{36}$",
                "reason": "The distributive law multiplies out the top. Cancelling a common factor: $119$ divides the top and the bottom."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $\\dfrac{23}{3 - \\sqrt[3]{4}}$ with no root in the denominator.",
              "form": "Answer in simplest radical form, as in 6*2^(1/3).",
              "answer": "9+2*2^(1/3)+3*4^(1/3)",
              "lines": [
                {
                  "step": "Write $\\dfrac{23}{3 - \\sqrt[3]{4}}$ with no root in the denominator.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{23}{3 - \\sqrt[3]{4}} = \\dfrac{23(9 + 2\\sqrt[3]{2} + 3\\sqrt[3]{4})}{(3 - \\sqrt[3]{4})(9 + 2\\sqrt[3]{2} + 3\\sqrt[3]{4})}$",
                  "reason": "Difference of cubes: $(x - y)(x^2 + xy + y^2) = x^3 - y^3$, with $x = 3$ and $y = \\sqrt[3]{4}$, so the bottom is one factor and $9 + 2\\sqrt[3]{2} + 3\\sqrt[3]{4}$ is the other factor. Rationalising the denominator: the top and the bottom are multiplied by $9 + 2\\sqrt[3]{2} + 3\\sqrt[3]{4}$, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
                },
                {
                  "step": "$\\dfrac{23(9 + 2\\sqrt[3]{2} + 3\\sqrt[3]{4})}{(3 - \\sqrt[3]{4})(9 + 2\\sqrt[3]{2} + 3\\sqrt[3]{4})} = \\dfrac{23(9 + 2\\sqrt[3]{2} + 3\\sqrt[3]{4})}{3^3 - (\\sqrt[3]{4})^3}$",
                  "reason": "Difference of cubes, with $x = 3$ and $y = \\sqrt[3]{4}$."
                },
                {
                  "step": "$\\dfrac{23(9 + 2\\sqrt[3]{2} + 3\\sqrt[3]{4})}{3^3 - (\\sqrt[3]{4})^3} = \\dfrac{23(9 + 2\\sqrt[3]{2} + 3\\sqrt[3]{4})}{23}$",
                  "reason": "The radical sign is the exponent $\\frac{1}{3}$, and the power law multiplies the exponents, so a cube root cubed is the number under it: $3^3 = 27$ and $(\\sqrt[3]{4})^3 = 4$."
                },
                {
                  "step": "$\\dfrac{23(9 + 2\\sqrt[3]{2} + 3\\sqrt[3]{4})}{23} = 9 + 2\\sqrt[3]{2} + 3\\sqrt[3]{4}$",
                  "reason": "The distributive law multiplies out the top. Cancelling a common factor: $23$ divides the top and the bottom."
                }
              ]
            },
            {
              "prompt": "Write $\\dfrac{13}{2\\sqrt[3]{5} - 3}$ with no root in the denominator.",
              "form": "Answer in simplest radical form, as in 6*2^(1/3).",
              "answer": "9+6*5^(1/3)+4*25^(1/3)",
              "lines": [
                {
                  "step": "Write $\\dfrac{13}{2\\sqrt[3]{5} - 3}$ with no root in the denominator.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{13}{2\\sqrt[3]{5} - 3} = \\dfrac{13(9 + 6\\sqrt[3]{5} + 4\\sqrt[3]{25})}{(2\\sqrt[3]{5} - 3)(9 + 6\\sqrt[3]{5} + 4\\sqrt[3]{25})}$",
                  "reason": "Difference of cubes: $(x - y)(x^2 + xy + y^2) = x^3 - y^3$, with $x = 2\\sqrt[3]{5}$ and $y = 3$, so the bottom is one factor and $9 + 6\\sqrt[3]{5} + 4\\sqrt[3]{25}$ is the other factor. Rationalising the denominator: the top and the bottom are multiplied by $9 + 6\\sqrt[3]{5} + 4\\sqrt[3]{25}$, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
                },
                {
                  "step": "$\\dfrac{13(9 + 6\\sqrt[3]{5} + 4\\sqrt[3]{25})}{(2\\sqrt[3]{5} - 3)(9 + 6\\sqrt[3]{5} + 4\\sqrt[3]{25})} = \\dfrac{13(9 + 6\\sqrt[3]{5} + 4\\sqrt[3]{25})}{(2\\sqrt[3]{5})^3 - 3^3}$",
                  "reason": "Difference of cubes, with $x = 2\\sqrt[3]{5}$ and $y = 3$."
                },
                {
                  "step": "$\\dfrac{13(9 + 6\\sqrt[3]{5} + 4\\sqrt[3]{25})}{(2\\sqrt[3]{5})^3 - 3^3} = \\dfrac{13(9 + 6\\sqrt[3]{5} + 4\\sqrt[3]{25})}{13}$",
                  "reason": "The radical sign is the exponent $\\frac{1}{3}$, and the power law multiplies the exponents, so a cube root cubed is the number under it: $(2\\sqrt[3]{5})^3 = 40$ and $3^3 = 27$."
                },
                {
                  "step": "$\\dfrac{13(9 + 6\\sqrt[3]{5} + 4\\sqrt[3]{25})}{13} = 9 + 6\\sqrt[3]{5} + 4\\sqrt[3]{25}$",
                  "reason": "The distributive law multiplies out the top. Cancelling a common factor: $13$ divides the top and the bottom."
                }
              ]
            },
            {
              "prompt": "Write $\\dfrac{10}{4 + 2\\sqrt[3]{3} + \\sqrt[3]{9}}$ with no root in the denominator.",
              "form": "Answer in simplest radical form, as in 6*2^(1/3).",
              "answer": "4-2*3^(1/3)",
              "lines": [
                {
                  "step": "Write $\\dfrac{10}{4 + 2\\sqrt[3]{3} + \\sqrt[3]{9}}$ with no root in the denominator.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{10}{4 + 2\\sqrt[3]{3} + \\sqrt[3]{9}} = \\dfrac{10(2 - \\sqrt[3]{3})}{(4 + 2\\sqrt[3]{3} + \\sqrt[3]{9})(2 - \\sqrt[3]{3})}$",
                  "reason": "Difference of cubes: $(x - y)(x^2 + xy + y^2) = x^3 - y^3$, with $x = 2$ and $y = \\sqrt[3]{3}$, so the bottom is one factor and $2 - \\sqrt[3]{3}$ is the first factor. Rationalising the denominator: the top and the bottom are multiplied by $2 - \\sqrt[3]{3}$, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
                },
                {
                  "step": "$\\dfrac{10(2 - \\sqrt[3]{3})}{(4 + 2\\sqrt[3]{3} + \\sqrt[3]{9})(2 - \\sqrt[3]{3})} = \\dfrac{10(2 - \\sqrt[3]{3})}{2^3 - (\\sqrt[3]{3})^3}$",
                  "reason": "Difference of cubes, with $x = 2$ and $y = \\sqrt[3]{3}$."
                },
                {
                  "step": "$\\dfrac{10(2 - \\sqrt[3]{3})}{2^3 - (\\sqrt[3]{3})^3} = \\dfrac{10(2 - \\sqrt[3]{3})}{5}$",
                  "reason": "The radical sign is the exponent $\\frac{1}{3}$, and the power law multiplies the exponents, so a cube root cubed is the number under it: $2^3 = 8$ and $(\\sqrt[3]{3})^3 = 3$."
                },
                {
                  "step": "$\\dfrac{10(2 - \\sqrt[3]{3})}{5} = 4 - 2\\sqrt[3]{3}$",
                  "reason": "The distributive law multiplies out the top. Cancelling a common factor: $5$ divides the top and the bottom."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write $\\dfrac{75}{4 + \\sqrt[3]{11}}$ with no root in the denominator.",
            "lines": [
              {
                "step": "Write $\\dfrac{75}{4 + \\sqrt[3]{11}}$ with no root in the denominator.",
                "reason": "This is the problem as given."
              },
              {
                "step": "$\\dfrac{75}{4 + \\sqrt[3]{11}} = \\dfrac{75(16 - 4\\sqrt[3]{11} + \\sqrt[3]{121})}{(4 + \\sqrt[3]{11})(16 - 4\\sqrt[3]{11} + \\sqrt[3]{121})}$",
                "reason": "Sum of cubes: $(x + y)(x^2 - xy + y^2) = x^3 + y^3$, with $x = 4$ and $y = \\sqrt[3]{11}$, so the bottom is one factor and $16 - 4\\sqrt[3]{11} + \\sqrt[3]{121}$ is the other factor. Rationalising the denominator: the top and the bottom are multiplied by $16 - 4\\sqrt[3]{11} + \\sqrt[3]{121}$, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
              },
              {
                "step": "$\\dfrac{75(16 - 4\\sqrt[3]{11} + \\sqrt[3]{121})}{(4 + \\sqrt[3]{11})(16 - 4\\sqrt[3]{11} + \\sqrt[3]{121})} = \\dfrac{75(16 - 4\\sqrt[3]{11} + \\sqrt[3]{121})}{4^3 + (\\sqrt[3]{11})^3}$",
                "reason": "Sum of cubes, with $x = 4$ and $y = \\sqrt[3]{11}$."
              },
              {
                "step": "$\\dfrac{75(16 - 4\\sqrt[3]{11} + \\sqrt[3]{121})}{4^3 + (\\sqrt[3]{11})^3} = \\dfrac{75(16 - 4\\sqrt[3]{11} + \\sqrt[3]{121})}{75}$",
                "reason": "The radical sign is the exponent $\\frac{1}{3}$, and the power law multiplies the exponents, so a cube root cubed is the number under it: $4^3 = 64$ and $(\\sqrt[3]{11})^3 = 11$."
              },
              {
                "step": "$\\dfrac{75(16 - 4\\sqrt[3]{11} + \\sqrt[3]{121})}{75} = 16 - 4\\sqrt[3]{11} + \\sqrt[3]{121}$",
                "reason": "The distributive law multiplies out the top. Cancelling a common factor: $75$ divides the top and the bottom."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $\\dfrac{3}{1 + \\sqrt[3]{5}}$ with no root in the denominator.",
              "form": "Answer in simplest radical form, as in 6*2^(1/3).",
              "answer": "(1-5^(1/3)+25^(1/3))/2",
              "lines": [
                {
                  "step": "Write $\\dfrac{3}{1 + \\sqrt[3]{5}}$ with no root in the denominator.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{3}{1 + \\sqrt[3]{5}} = \\dfrac{3(1 - \\sqrt[3]{5} + \\sqrt[3]{25})}{(1 + \\sqrt[3]{5})(1 - \\sqrt[3]{5} + \\sqrt[3]{25})}$",
                  "reason": "Sum of cubes: $(x + y)(x^2 - xy + y^2) = x^3 + y^3$, with $x = \\sqrt[3]{5}$ and $y = 1$, so the bottom is one factor and $1 - \\sqrt[3]{5} + \\sqrt[3]{25}$ is the other factor. Rationalising the denominator: the top and the bottom are multiplied by $1 - \\sqrt[3]{5} + \\sqrt[3]{25}$, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
                },
                {
                  "step": "$\\dfrac{3(1 - \\sqrt[3]{5} + \\sqrt[3]{25})}{(1 + \\sqrt[3]{5})(1 - \\sqrt[3]{5} + \\sqrt[3]{25})} = \\dfrac{3(1 - \\sqrt[3]{5} + \\sqrt[3]{25})}{(\\sqrt[3]{5})^3 + 1^3}$",
                  "reason": "Sum of cubes, with $x = \\sqrt[3]{5}$ and $y = 1$."
                },
                {
                  "step": "$\\dfrac{3(1 - \\sqrt[3]{5} + \\sqrt[3]{25})}{(\\sqrt[3]{5})^3 + 1^3} = \\dfrac{3(1 - \\sqrt[3]{5} + \\sqrt[3]{25})}{6}$",
                  "reason": "The radical sign is the exponent $\\frac{1}{3}$, and the power law multiplies the exponents, so a cube root cubed is the number under it: $(\\sqrt[3]{5})^3 = 5$ and $1^3 = 1$."
                },
                {
                  "step": "$\\dfrac{3(1 - \\sqrt[3]{5} + \\sqrt[3]{25})}{6} = \\dfrac{1 - \\sqrt[3]{5} + \\sqrt[3]{25}}{2}$",
                  "reason": "The distributive law multiplies out the top. Cancelling a common factor: $3$ divides the top and the bottom."
                }
              ]
            },
            {
              "prompt": "Write $\\dfrac{129}{5 + \\sqrt[3]{4}}$ with no root in the denominator.",
              "form": "Answer in simplest radical form, as in 6*2^(1/3).",
              "answer": "25+2*2^(1/3)-5*4^(1/3)",
              "lines": [
                {
                  "step": "Write $\\dfrac{129}{5 + \\sqrt[3]{4}}$ with no root in the denominator.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{129}{5 + \\sqrt[3]{4}} = \\dfrac{129(25 + 2\\sqrt[3]{2} - 5\\sqrt[3]{4})}{(5 + \\sqrt[3]{4})(25 + 2\\sqrt[3]{2} - 5\\sqrt[3]{4})}$",
                  "reason": "Sum of cubes: $(x + y)(x^2 - xy + y^2) = x^3 + y^3$, with $x = 5$ and $y = \\sqrt[3]{4}$, so the bottom is one factor and $25 + 2\\sqrt[3]{2} - 5\\sqrt[3]{4}$ is the other factor. Rationalising the denominator: the top and the bottom are multiplied by $25 + 2\\sqrt[3]{2} - 5\\sqrt[3]{4}$, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
                },
                {
                  "step": "$\\dfrac{129(25 + 2\\sqrt[3]{2} - 5\\sqrt[3]{4})}{(5 + \\sqrt[3]{4})(25 + 2\\sqrt[3]{2} - 5\\sqrt[3]{4})} = \\dfrac{129(25 + 2\\sqrt[3]{2} - 5\\sqrt[3]{4})}{5^3 + (\\sqrt[3]{4})^3}$",
                  "reason": "Sum of cubes, with $x = 5$ and $y = \\sqrt[3]{4}$."
                },
                {
                  "step": "$\\dfrac{129(25 + 2\\sqrt[3]{2} - 5\\sqrt[3]{4})}{5^3 + (\\sqrt[3]{4})^3} = \\dfrac{129(25 + 2\\sqrt[3]{2} - 5\\sqrt[3]{4})}{129}$",
                  "reason": "The radical sign is the exponent $\\frac{1}{3}$, and the power law multiplies the exponents, so a cube root cubed is the number under it: $5^3 = 125$ and $(\\sqrt[3]{4})^3 = 4$."
                },
                {
                  "step": "$\\dfrac{129(25 + 2\\sqrt[3]{2} - 5\\sqrt[3]{4})}{129} = 25 + 2\\sqrt[3]{2} - 5\\sqrt[3]{4}$",
                  "reason": "The distributive law multiplies out the top. Cancelling a common factor: $129$ divides the top and the bottom."
                }
              ]
            },
            {
              "prompt": "Write $\\dfrac{43}{3 + 2\\sqrt[3]{2}}$ with no root in the denominator.",
              "form": "Answer in simplest radical form, as in 6*2^(1/3).",
              "answer": "9-6*2^(1/3)+4*4^(1/3)",
              "lines": [
                {
                  "step": "Write $\\dfrac{43}{3 + 2\\sqrt[3]{2}}$ with no root in the denominator.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "$\\dfrac{43}{3 + 2\\sqrt[3]{2}} = \\dfrac{43(9 - 6\\sqrt[3]{2} + 4\\sqrt[3]{4})}{(3 + 2\\sqrt[3]{2})(9 - 6\\sqrt[3]{2} + 4\\sqrt[3]{4})}$",
                  "reason": "Sum of cubes: $(x + y)(x^2 - xy + y^2) = x^3 + y^3$, with $x = 2\\sqrt[3]{2}$ and $y = 3$, so the bottom is one factor and $9 - 6\\sqrt[3]{2} + 4\\sqrt[3]{4}$ is the other factor. Rationalising the denominator: the top and the bottom are multiplied by $9 - 6\\sqrt[3]{2} + 4\\sqrt[3]{4}$, and multiplying the top and the bottom by one nonzero number keeps the value, which is cancelling a common factor read backwards."
                },
                {
                  "step": "$\\dfrac{43(9 - 6\\sqrt[3]{2} + 4\\sqrt[3]{4})}{(3 + 2\\sqrt[3]{2})(9 - 6\\sqrt[3]{2} + 4\\sqrt[3]{4})} = \\dfrac{43(9 - 6\\sqrt[3]{2} + 4\\sqrt[3]{4})}{(2\\sqrt[3]{2})^3 + 3^3}$",
                  "reason": "Sum of cubes, with $x = 2\\sqrt[3]{2}$ and $y = 3$."
                },
                {
                  "step": "$\\dfrac{43(9 - 6\\sqrt[3]{2} + 4\\sqrt[3]{4})}{(2\\sqrt[3]{2})^3 + 3^3} = \\dfrac{43(9 - 6\\sqrt[3]{2} + 4\\sqrt[3]{4})}{43}$",
                  "reason": "The radical sign is the exponent $\\frac{1}{3}$, and the power law multiplies the exponents, so a cube root cubed is the number under it: $(2\\sqrt[3]{2})^3 = 16$ and $3^3 = 27$."
                },
                {
                  "step": "$\\dfrac{43(9 - 6\\sqrt[3]{2} + 4\\sqrt[3]{4})}{43} = 9 - 6\\sqrt[3]{2} + 4\\sqrt[3]{4}$",
                  "reason": "The distributive law multiplies out the top. Cancelling a common factor: $43$ divides the top and the bottom."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t140-k4",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this rationalising of $\\dfrac{\\sqrt{7} + \\sqrt{3}}{\\sqrt{7} - \\sqrt{3}}$, and write that line right.",
            "given": [
              "$\\dfrac{\\sqrt{7} + \\sqrt{3}}{\\sqrt{7} - \\sqrt{3}}$",
              "$\\dfrac{10}{(\\sqrt{7})^2 - (\\sqrt{3})^2}$",
              "$\\dfrac{10}{4}$",
              "$\\dfrac{5}{2}$"
            ],
            "lines": [
              {
                "step": "Find the first wrong line in this rationalising of $\\dfrac{\\sqrt{7} + \\sqrt{3}}{\\sqrt{7} - \\sqrt{3}}$, and write that line right.",
                "reason": "This is the problem as given."
              },
              {
                "step": "Line 1 is right.",
                "reason": "Line 1 is the expression as given."
              },
              {
                "step": "Line 2 writes the square of $\\sqrt{7} + \\sqrt{3}$ as $7 + 3$ and leaves out the middle term.",
                "reason": "A power taken term by term over a sum: the square of a bracket is the bracket times itself, and the square of a binomial keeps the middle term $2\\sqrt{7}\\sqrt{3}$ with its sign."
              },
              {
                "step": "The later lines follow from line 2 as it is written, so line 2 is the first wrong line.",
                "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
              },
              {
                "step": "Line 2 written right is $\\dfrac{10 + 2\\sqrt{21}}{(\\sqrt{7})^2 - (\\sqrt{3})^2}$.",
                "reason": "Square of a binomial, with the root of a product: $(\\sqrt{7} + \\sqrt{3})^2 = 7 + 2\\sqrt{21} + 3$."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this rationalising of $\\dfrac{6}{2 + \\sqrt{7}}$, and write that line right.",
              "given": [
                "$\\dfrac{6}{2 + \\sqrt{7}}$",
                "$\\dfrac{6(2 - \\sqrt{7})}{2^2 - (\\sqrt{7})^2}$",
                "$\\dfrac{6(2 - \\sqrt{7})}{-3}$",
                "$4 - 2\\sqrt{7}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: 2*sqrt(7)-4",
              "lines": [
                {
                  "step": "Find the first wrong line in this rationalising of $\\dfrac{6}{2 + \\sqrt{7}}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 4 moves the minus sign of the bottom $-3$ away and keeps every sign of the top.",
                  "reason": "A sign lost: dividing by $-3$ is dividing by $3$ and changing the sign of every term of the top."
                },
                {
                  "step": "Line 4 is the last line, so line 4 is the first wrong line.",
                  "reason": "Lines 1 to 3 are right, and line 4 is the only line that is wrong."
                },
                {
                  "step": "Line 4 written right is $2\\sqrt{7} - 4$.",
                  "reason": "Each term of the top changes its sign."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this rationalising of $\\dfrac{\\sqrt{11} - \\sqrt{5}}{\\sqrt{11} + \\sqrt{5}}$, and write that line right.",
              "given": [
                "$\\dfrac{\\sqrt{11} - \\sqrt{5}}{\\sqrt{11} + \\sqrt{5}}$",
                "$\\dfrac{(\\sqrt{11} - \\sqrt{5})(\\sqrt{11} - \\sqrt{5})}{(\\sqrt{11} + \\sqrt{5})(\\sqrt{11} - \\sqrt{5})}$",
                "$\\dfrac{(\\sqrt{11} - \\sqrt{5})^2}{6}$",
                "$\\dfrac{16}{6}$",
                "$\\dfrac{8}{3}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 4: (16-2*sqrt(55))/(6)",
              "lines": [
                {
                  "step": "Find the first wrong line in this rationalising of $\\dfrac{\\sqrt{11} - \\sqrt{5}}{\\sqrt{11} + \\sqrt{5}}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 to 3 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 4 writes the square of $\\sqrt{11} - \\sqrt{5}$ as $11 + 5$ and leaves out the middle term.",
                  "reason": "A power taken term by term over a sum: the square of a bracket is the bracket times itself, and the square of a binomial keeps the middle term $2\\sqrt{11}\\sqrt{5}$ with its sign."
                },
                {
                  "step": "The later lines follow from line 4 as it is written, so line 4 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 4 written right is $\\dfrac{16 - 2\\sqrt{55}}{6}$.",
                  "reason": "Square of a binomial, with the root of a product: $(\\sqrt{11} - \\sqrt{5})^2 = 11 - 2\\sqrt{55} + 5$."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this rationalising of $\\dfrac{10}{3 - \\sqrt{14}}$, and write that line right.",
              "given": [
                "$\\dfrac{10}{3 - \\sqrt{14}}$",
                "$\\dfrac{10(3 + \\sqrt{14})}{3^2 - (\\sqrt{14})^2}$",
                "$\\dfrac{10(3 + \\sqrt{14})}{5}$",
                "$\\dfrac{30 + 10\\sqrt{14}}{5}$",
                "$6 + 2\\sqrt{14}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: 10*(3+sqrt(14))/(-5)",
              "lines": [
                {
                  "step": "Find the first wrong line in this rationalising of $\\dfrac{10}{3 - \\sqrt{14}}$, and write that line right.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "Lines 1 and 2 are right.",
                  "reason": "Line 1 is the expression as given, and each line before the wrong one changes the line before it by a rule that holds."
                },
                {
                  "step": "Line 3 writes the bottom $3^2 - (\\sqrt{14})^2$ as $5$.",
                  "reason": "A sign lost: $3^2 - (\\sqrt{14})^2 = 9 - 14 = -5$, a negative number, since $14$ is larger than $9$."
                },
                {
                  "step": "The later lines follow from line 3 as it is written, so line 3 is the first wrong line.",
                  "reason": "Each later line changes the line before it by a rule that holds, and carries the wrong line's fault with it."
                },
                {
                  "step": "Line 3 written right is $\\dfrac{10(3 + \\sqrt{14})}{-5}$.",
                  "reason": "The bottom keeps its minus sign."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t140-k5",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the reciprocal of the sum of the square root of $x$ and 3.",
            "lines": [
              {
                "step": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the reciprocal of the sum of the square root of $x$ and 3.",
                "reason": "This is the problem as given."
              },
              {
                "step": "The square root of $x$ is $\\sqrt{x}$.",
                "reason": "Writing a sentence as an equation: \"the square root of\" puts the number under the root sign."
              },
              {
                "step": "The sum of that and 3 is $\\sqrt{x} + 3$.",
                "reason": "Writing a sentence as an equation: \"the sum of\" adds the two numbers named after it."
              },
              {
                "step": "$y = \\dfrac{1}{\\sqrt{x} + 3}$",
                "reason": "Writing a sentence as an equation: \"the reciprocal of\" divides $1$ by the whole number, and \"is\" marks the place of the equals sign."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the reciprocal of the difference when 2 is taken away from the square root of $x$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 1/(sqrt(x)-2)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the reciprocal of the difference when 2 is taken away from the square root of $x$.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The square root of $x$ is $\\sqrt{x}$.",
                  "reason": "Writing a sentence as an equation: \"the square root of\" puts the number under the root sign."
                },
                {
                  "step": "2 taken away from that is $\\sqrt{x} - 2$.",
                  "reason": "Writing a sentence as an equation: \"taken away from\" subtracts the first amount from the number after the words."
                },
                {
                  "step": "$y = \\dfrac{1}{\\sqrt{x} - 2}$",
                  "reason": "Writing a sentence as an equation: \"the reciprocal of\" divides $1$ by the whole number, and \"is\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ equals 4 divided by the sum of the square root of $x$ and 7.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 4/(sqrt(x)+7)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ equals 4 divided by the sum of the square root of $x$ and 7.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The square root of $x$ is $\\sqrt{x}$.",
                  "reason": "Writing a sentence as an equation: \"the square root of\" puts the number under the root sign."
                },
                {
                  "step": "The sum of that and 7 is $\\sqrt{x} + 7$.",
                  "reason": "Writing a sentence as an equation: \"the sum of\" adds the two numbers named after it."
                },
                {
                  "step": "$y = \\dfrac{4}{\\sqrt{x} + 7}$",
                  "reason": "Writing a sentence as an equation: \"4 divided by\" puts $4$ on top of the whole sum, and \"equals\" marks the place of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the reciprocal of the sum of the cube root of $x$ and 6.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = 1/(x^(1/3)+6)",
              "lines": [
                {
                  "step": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the reciprocal of the sum of the cube root of $x$ and 6.",
                  "reason": "This is the problem as given."
                },
                {
                  "step": "The cube root of $x$ is $\\sqrt[3]{x}$.",
                  "reason": "Writing a sentence as an equation: \"the cube root of\" puts the number under the root sign."
                },
                {
                  "step": "The sum of that and 6 is $\\sqrt[3]{x} + 6$.",
                  "reason": "Writing a sentence as an equation: \"the sum of\" adds the two numbers named after it."
                },
                {
                  "step": "$y = \\dfrac{1}{\\sqrt[3]{x} + 6}$",
                  "reason": "Writing a sentence as an equation: \"the reciprocal of\" divides $1$ by the whole number, and \"is\" marks the place of the equals sign."
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
