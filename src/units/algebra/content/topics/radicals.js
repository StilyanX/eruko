export default {
  "number": 104,
  "title": "Radicals",
  "section": 1,
  "book": {
    "title": "Introduction to Algebra",
    "pages": "42–49, 60–61"
  },
  "manyParts": false,
  "bare": {
    "prompt": "Simplify $\\sqrt{72}$.",
    "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
    "answer": "6*sqrt(2)",
    "solution": [
      "Simplify $\\sqrt{72}$.",
      "$\\sqrt{72} = \\sqrt{36 \\times 2}$",
      "$\\sqrt{36 \\times 2} = \\sqrt{36} \\times \\sqrt{2}$",
      "$\\sqrt{36} \\times \\sqrt{2} = 6\\sqrt{2}$"
    ]
  },
  "ideas": [
    {
      "name": "The radical sign",
      "concrete": "Arithmetic writes the positive square root of $64$ as $\\sqrt{64} = 8$, which is the power $64^{1/2}$. With the index $3$ on the same sign, the cube root $64^{1/3} = 4$ is written $\\sqrt[3]{64} = 4$.",
      "general": "The sign $\\sqrt{\\ }$ of arithmetic's square root is the **radical sign**. Let $n$ be a whole number with $n \\ge 2$. With the index $n$ written on it, the radical sign writes the root with index $n$: $\\sqrt[n]{x} = x^{1/n}$, for $x \\ge 0$ when $n$ is even and for every real $x$ when $n$ is odd. With no index written, the root is the square root: $\\sqrt{x} = x^{1/2}$. A **radical** is an expression written with a radical sign. For a whole number $m$ and $x \\ge 0$, $x^{m/n} = \\sqrt[n]{x^m} = \\left(\\sqrt[n]{x}\\right)^m$."
    },
    {
      "name": "Root of a product",
      "concrete": "The root $\\sqrt{4 \\times 9} = \\sqrt{36} = 6$, and the product $\\sqrt{4} \\times \\sqrt{9} = 2 \\times 3 = 6$.",
      "general": "For nonnegative numbers $a$ and $b$, $\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$. In the same way $\\sqrt[n]{ab} = \\sqrt[n]{a}\\sqrt[n]{b}$: for nonnegative $a$ and $b$ when $n$ is even, and for all real $a$ and $b$ when $n$ is odd. A sum under a root does not split: $\\sqrt{36 + 64} = \\sqrt{100} = 10$, and $\\sqrt{36} + \\sqrt{64} = 14$."
    },
    {
      "name": "Root of a quotient",
      "concrete": "The root $\\sqrt{\\dfrac{4}{9}} = \\dfrac{2}{3}$, because $\\left(\\dfrac{2}{3}\\right)^2 = \\dfrac{4}{9}$, and the quotient $\\dfrac{\\sqrt{4}}{\\sqrt{9}} = \\dfrac{2}{3}$.",
      "general": "For a nonnegative number $a$ and a positive number $b$, $\\sqrt{\\dfrac{a}{b}} = \\dfrac{\\sqrt{a}}{\\sqrt{b}}$. In the same way $\\sqrt[n]{\\dfrac{a}{b}} = \\dfrac{\\sqrt[n]{a}}{\\sqrt[n]{b}}$: for $a \\ge 0$ and $b > 0$ when $n$ is even, and for every real $a$ and every real $b$ other than $0$ when $n$ is odd."
    },
    {
      "name": "Root of a square",
      "concrete": "The root $\\sqrt{(-3)^2} = \\sqrt{9} = 3$, which is $|-3|$ and not $-3$.",
      "general": "For every real number $a$, $\\sqrt{a^2} = |a|$. So $\\sqrt{a^2} = a$ when $a \\ge 0$, and $\\sqrt{a^2} = -a$ when $a < 0$."
    },
    {
      "name": "Simplest radical form",
      "concrete": "Since $40 = 4 \\times 10$, the root $\\sqrt{40} = \\sqrt{4} \\times \\sqrt{10} = 2\\sqrt{10}$, and $10$ has no square factor greater than $1$.",
      "general": "Let $n$ be a whole number with $n \\ge 2$. A root with index $n$ of a positive whole number is in **simplest radical form** when the number under the root has no factor greater than $1$ that is an $n$th power, and no root with a lower index writes the same number: $\\sqrt[4]{4}$ is written $\\sqrt{2}$. A root of a fraction is in simplest radical form when it is written as a fraction with a whole number on the bottom and such a root on the top. A root of a number times powers of letters is in simplest radical form when, besides, each letter under the root has an exponent less than $n$. To simplify a radical is to write it in simplest radical form."
    },
    {
      "name": "Like radicals",
      "concrete": "The sum $2\\sqrt{3} + 5\\sqrt{3} = (2 + 5)\\sqrt{3} = 7\\sqrt{3}$.",
      "general": "**Like radicals** have the same index and the same expression under the root. Let $\\sqrt[n]{c}$ be a real number: $c \\ge 0$ when $n$ is even, and $c$ real when $n$ is odd. By the distributive law, $a\\sqrt[n]{c} + b\\sqrt[n]{c} = (a + b)\\sqrt[n]{c}$ for all real numbers $a$ and $b$. Radicals in simplest radical form that are not like radicals, such as $\\sqrt{2}$ and $\\sqrt{3}$, do not collect into one term."
    }
  ],
  "kinds": [
    {
      "id": "t104-k1",
      "forms": [
        {
          "example": {
            "problem": "Simplify $\\sqrt{180}$.",
            "lines": [
              {
                "step": "$\\sqrt{180} = \\sqrt{36 \\times 5}$",
                "reason": "The number $36$ is the largest square that divides $180$, and simplest radical form leaves no square factor under the root, so $36$ is set apart."
              },
              {
                "step": "$\\sqrt{36 \\times 5} = \\sqrt{36} \\times \\sqrt{5}$",
                "reason": "The root of a product is the product of the roots for nonnegative numbers, which puts the square under a root of its own."
              },
              {
                "step": "$\\sqrt{36} \\times \\sqrt{5} = 6\\sqrt{5}$",
                "reason": "The radical sign names the nonnegative number whose square is $36$, which is $6$, and $5$ has no square factor greater than $1$, so this is simplest radical form."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\sqrt{153}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "3*sqrt(17)",
              "lines": [
                {
                  "step": "$\\sqrt{153} = \\sqrt{9 \\times 17}$",
                  "reason": "The number $9$ is the largest square that divides $153$, and simplest radical form leaves no square factor under the root, so $9$ is set apart."
                },
                {
                  "step": "$\\sqrt{9 \\times 17} = \\sqrt{9} \\times \\sqrt{17}$",
                  "reason": "The root of a product is the product of the roots for nonnegative numbers, which puts the square under a root of its own."
                },
                {
                  "step": "$\\sqrt{9} \\times \\sqrt{17} = 3\\sqrt{17}$",
                  "reason": "The radical sign names the nonnegative number whose square is $9$, which is $3$, and $17$ has no square factor greater than $1$, so this is simplest radical form."
                }
              ]
            },
            {
              "prompt": "Simplify $\\sqrt{325}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "5*sqrt(13)",
              "lines": [
                {
                  "step": "$\\sqrt{325} = \\sqrt{25 \\times 13}$",
                  "reason": "The number $25$ is the largest square that divides $325$, and simplest radical form leaves no square factor under the root, so $25$ is set apart."
                },
                {
                  "step": "$\\sqrt{25 \\times 13} = \\sqrt{25} \\times \\sqrt{13}$",
                  "reason": "The root of a product is the product of the roots for nonnegative numbers, which puts the square under a root of its own."
                },
                {
                  "step": "$\\sqrt{25} \\times \\sqrt{13} = 5\\sqrt{13}$",
                  "reason": "The radical sign names the nonnegative number whose square is $25$, which is $5$, and $13$ has no square factor greater than $1$, so this is simplest radical form."
                }
              ]
            },
            {
              "prompt": "Simplify $\\sqrt{363}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "11*sqrt(3)",
              "lines": [
                {
                  "step": "$\\sqrt{363} = \\sqrt{121 \\times 3}$",
                  "reason": "The number $121$ is the largest square that divides $363$, and simplest radical form leaves no square factor under the root, so $121$ is set apart."
                },
                {
                  "step": "$\\sqrt{121 \\times 3} = \\sqrt{121} \\times \\sqrt{3}$",
                  "reason": "The root of a product is the product of the roots for nonnegative numbers, which puts the square under a root of its own."
                },
                {
                  "step": "$\\sqrt{121} \\times \\sqrt{3} = 11\\sqrt{3}$",
                  "reason": "The radical sign names the nonnegative number whose square is $121$, which is $11$, and $3$ has no square factor greater than $1$, so this is simplest radical form."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $\\sqrt{\\dfrac{27}{16}}$.",
            "lines": [
              {
                "step": "$\\sqrt{\\dfrac{27}{16}} = \\dfrac{\\sqrt{27}}{\\sqrt{16}}$",
                "reason": "The root of a quotient is the quotient of the roots, which leaves two roots of whole numbers."
              },
              {
                "step": "$\\sqrt{27} = \\sqrt{9 \\times 3}$",
                "reason": "The number $9$ is the largest square that divides $27$, and simplest radical form leaves no square factor under the root, so $9$ is set apart."
              },
              {
                "step": "$\\sqrt{9 \\times 3} = \\sqrt{9} \\times \\sqrt{3}$",
                "reason": "The root of a product is the product of the roots for nonnegative numbers, which puts the square under a root of its own."
              },
              {
                "step": "$\\sqrt{9} \\times \\sqrt{3} = 3\\sqrt{3}$",
                "reason": "The radical sign names the nonnegative number whose square is $9$, which is $3$, and $3$ has no square factor greater than $1$, so the top is in simplest radical form."
              },
              {
                "step": "$\\sqrt{16} = 4$",
                "reason": "The radical sign names the nonnegative number whose square is $16$, and $4^2 = 16$, so the bottom is a whole number."
              },
              {
                "step": "$\\sqrt{\\dfrac{27}{16}} = \\dfrac{3\\sqrt{3}}{4}$",
                "reason": "Replacing the top and the bottom by these values gives one fraction in simplest radical form, with no square factor left under the root."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\sqrt{\\dfrac{44}{9}}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "2*sqrt(11)/3",
              "lines": [
                {
                  "step": "$\\sqrt{\\dfrac{44}{9}} = \\dfrac{\\sqrt{44}}{\\sqrt{9}}$",
                  "reason": "The root of a quotient is the quotient of the roots, which leaves two roots of whole numbers."
                },
                {
                  "step": "$\\sqrt{44} = \\sqrt{4 \\times 11}$",
                  "reason": "The number $4$ is the largest square that divides $44$, and simplest radical form leaves no square factor under the root, so $4$ is set apart."
                },
                {
                  "step": "$\\sqrt{4 \\times 11} = \\sqrt{4} \\times \\sqrt{11}$",
                  "reason": "The root of a product is the product of the roots for nonnegative numbers, which puts the square under a root of its own."
                },
                {
                  "step": "$\\sqrt{4} \\times \\sqrt{11} = 2\\sqrt{11}$",
                  "reason": "The radical sign names the nonnegative number whose square is $4$, which is $2$, and $11$ has no square factor greater than $1$, so the top is in simplest radical form."
                },
                {
                  "step": "$\\sqrt{9} = 3$",
                  "reason": "The radical sign names the nonnegative number whose square is $9$, and $3^2 = 9$, so the bottom is a whole number."
                },
                {
                  "step": "$\\sqrt{\\dfrac{44}{9}} = \\dfrac{2\\sqrt{11}}{3}$",
                  "reason": "Replacing the top and the bottom by these values gives one fraction in simplest radical form, with no square factor left under the root."
                }
              ]
            },
            {
              "prompt": "Simplify $\\sqrt{\\dfrac{12}{49}}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "2*sqrt(3)/7",
              "lines": [
                {
                  "step": "$\\sqrt{\\dfrac{12}{49}} = \\dfrac{\\sqrt{12}}{\\sqrt{49}}$",
                  "reason": "The root of a quotient is the quotient of the roots, which leaves two roots of whole numbers."
                },
                {
                  "step": "$\\sqrt{12} = \\sqrt{4 \\times 3}$",
                  "reason": "The number $4$ is the largest square that divides $12$, and simplest radical form leaves no square factor under the root, so $4$ is set apart."
                },
                {
                  "step": "$\\sqrt{4 \\times 3} = \\sqrt{4} \\times \\sqrt{3}$",
                  "reason": "The root of a product is the product of the roots for nonnegative numbers, which puts the square under a root of its own."
                },
                {
                  "step": "$\\sqrt{4} \\times \\sqrt{3} = 2\\sqrt{3}$",
                  "reason": "The radical sign names the nonnegative number whose square is $4$, which is $2$, and $3$ has no square factor greater than $1$, so the top is in simplest radical form."
                },
                {
                  "step": "$\\sqrt{49} = 7$",
                  "reason": "The radical sign names the nonnegative number whose square is $49$, and $7^2 = 49$, so the bottom is a whole number."
                },
                {
                  "step": "$\\sqrt{\\dfrac{12}{49}} = \\dfrac{2\\sqrt{3}}{7}$",
                  "reason": "Replacing the top and the bottom by these values gives one fraction in simplest radical form, with no square factor left under the root."
                }
              ]
            },
            {
              "prompt": "Simplify $\\sqrt{\\dfrac{125}{81}}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "5*sqrt(5)/9",
              "lines": [
                {
                  "step": "$\\sqrt{\\dfrac{125}{81}} = \\dfrac{\\sqrt{125}}{\\sqrt{81}}$",
                  "reason": "The root of a quotient is the quotient of the roots, which leaves two roots of whole numbers."
                },
                {
                  "step": "$\\sqrt{125} = \\sqrt{25 \\times 5}$",
                  "reason": "The number $25$ is the largest square that divides $125$, and simplest radical form leaves no square factor under the root, so $25$ is set apart."
                },
                {
                  "step": "$\\sqrt{25 \\times 5} = \\sqrt{25} \\times \\sqrt{5}$",
                  "reason": "The root of a product is the product of the roots for nonnegative numbers, which puts the square under a root of its own."
                },
                {
                  "step": "$\\sqrt{25} \\times \\sqrt{5} = 5\\sqrt{5}$",
                  "reason": "The radical sign names the nonnegative number whose square is $25$, which is $5$, and $5$ has no square factor greater than $1$, so the top is in simplest radical form."
                },
                {
                  "step": "$\\sqrt{81} = 9$",
                  "reason": "The radical sign names the nonnegative number whose square is $81$, and $9^2 = 81$, so the bottom is a whole number."
                },
                {
                  "step": "$\\sqrt{\\dfrac{125}{81}} = \\dfrac{5\\sqrt{5}}{9}$",
                  "reason": "Replacing the top and the bottom by these values gives one fraction in simplest radical form, with no square factor left under the root."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $\\sqrt{50x^6}$, where $x < 0$.",
            "lines": [
              {
                "step": "$\\sqrt{50x^6} = \\sqrt{25} \\times \\sqrt{x^6} \\times \\sqrt{2}$",
                "reason": "The root of a product is the product of the roots for nonnegative numbers, and $25$ is the largest square that divides $50$, which gives the number and the power of the letter roots of their own."
              },
              {
                "step": "$\\sqrt{x^6} = \\sqrt{(x^3)^2}$",
                "reason": "The power law gives $(x^3)^2 = x^6$, which writes the power under the root as a square."
              },
              {
                "step": "$\\sqrt{(x^3)^2} = |x^3|$",
                "reason": "The root of a square is the absolute value, $\\sqrt{a^2} = |a|$, for every real number $a$."
              },
              {
                "step": "$|x^3| = -x^3$",
                "reason": "By the definition of absolute value, the absolute value of a negative number is its opposite, and by the sign of a power of a negative number the odd power $x^3$ is negative when $x$ is negative."
              },
              {
                "step": "$\\sqrt{50x^6} = -5x^3\\sqrt{2}$",
                "reason": "The radical sign names $5$ as the nonnegative number whose square is $25$, and replacing each root by its value gives the answer in simplest radical form."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\sqrt{12z^4}$, where $z < 0$.",
              "form": "Answer in simplest radical form, as in 3*x^2*sqrt(2*x).",
              "answer": "2*z^2*sqrt(3)",
              "lines": [
                {
                  "step": "$\\sqrt{12z^4} = \\sqrt{4} \\times \\sqrt{z^4} \\times \\sqrt{3}$",
                  "reason": "The root of a product is the product of the roots for nonnegative numbers, and $4$ is the largest square that divides $12$, which gives the number and the power of the letter roots of their own."
                },
                {
                  "step": "$\\sqrt{z^4} = \\sqrt{(z^2)^2}$",
                  "reason": "The power law gives $(z^2)^2 = z^4$, which writes the power under the root as a square."
                },
                {
                  "step": "$\\sqrt{(z^2)^2} = |z^2|$",
                  "reason": "The root of a square is the absolute value, $\\sqrt{a^2} = |a|$, for every real number $a$."
                },
                {
                  "step": "$|z^2| = z^2$",
                  "reason": "By the definition of absolute value, a nonnegative number is its own absolute value, and the even power $z^2$ is nonnegative whatever the sign of $z$."
                },
                {
                  "step": "$\\sqrt{12z^4} = 2z^2\\sqrt{3}$",
                  "reason": "The radical sign names $2$ as the nonnegative number whose square is $4$, and replacing each root by its value gives the answer in simplest radical form."
                }
              ]
            },
            {
              "prompt": "Simplify $\\sqrt{45y^6}$, where $y \\ge 0$.",
              "form": "Answer in simplest radical form, as in 3*x^2*sqrt(2*x).",
              "answer": "3*y^3*sqrt(5)",
              "lines": [
                {
                  "step": "$\\sqrt{45y^6} = \\sqrt{9} \\times \\sqrt{y^6} \\times \\sqrt{5}$",
                  "reason": "The root of a product is the product of the roots for nonnegative numbers, and $9$ is the largest square that divides $45$, which gives the number and the power of the letter roots of their own."
                },
                {
                  "step": "$\\sqrt{y^6} = \\sqrt{(y^3)^2}$",
                  "reason": "The power law gives $(y^3)^2 = y^6$, which writes the power under the root as a square."
                },
                {
                  "step": "$\\sqrt{(y^3)^2} = |y^3|$",
                  "reason": "The root of a square is the absolute value, $\\sqrt{a^2} = |a|$, for every real number $a$."
                },
                {
                  "step": "$|y^3| = y^3$",
                  "reason": "By the definition of absolute value, a nonnegative number is its own absolute value, and $y^3$ is nonnegative because $y$ is nonnegative."
                },
                {
                  "step": "$\\sqrt{45y^6} = 3y^3\\sqrt{5}$",
                  "reason": "The radical sign names $3$ as the nonnegative number whose square is $9$, and replacing each root by its value gives the answer in simplest radical form."
                }
              ]
            },
            {
              "prompt": "Simplify $\\sqrt{28x^{14}}$, where $x < 0$.",
              "form": "Answer in simplest radical form, as in 3*x^2*sqrt(2*x).",
              "answer": "-2*x^7*sqrt(7)",
              "lines": [
                {
                  "step": "$\\sqrt{28x^{14}} = \\sqrt{4} \\times \\sqrt{x^{14}} \\times \\sqrt{7}$",
                  "reason": "The root of a product is the product of the roots for nonnegative numbers, and $4$ is the largest square that divides $28$, which gives the number and the power of the letter roots of their own."
                },
                {
                  "step": "$\\sqrt{x^{14}} = \\sqrt{(x^7)^2}$",
                  "reason": "The power law gives $(x^7)^2 = x^{14}$, which writes the power under the root as a square."
                },
                {
                  "step": "$\\sqrt{(x^7)^2} = |x^7|$",
                  "reason": "The root of a square is the absolute value, $\\sqrt{a^2} = |a|$, for every real number $a$."
                },
                {
                  "step": "$|x^7| = -x^7$",
                  "reason": "By the definition of absolute value, the absolute value of a negative number is its opposite, and by the sign of a power of a negative number the odd power $x^7$ is negative when $x$ is negative."
                },
                {
                  "step": "$\\sqrt{28x^{14}} = -2x^7\\sqrt{7}$",
                  "reason": "The radical sign names $2$ as the nonnegative number whose square is $4$, and replacing each root by its value gives the answer in simplest radical form."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $\\sqrt{0.96}$.",
            "lines": [
              {
                "step": "$0.96 = \\dfrac{96}{100}$",
                "reason": "A finite decimal is a fraction over a power of $10$, which turns the decimal into a fraction."
              },
              {
                "step": "$\\dfrac{96}{100} = \\dfrac{24}{25}$",
                "reason": "A fraction in lowest terms: dividing top and bottom by $4$ leaves a square on the bottom, ready for the root of a quotient."
              },
              {
                "step": "$\\sqrt{0.96} = \\sqrt{\\dfrac{24}{25}}$",
                "reason": "Replacing the decimal by the equal fraction leaves a fraction under the root."
              },
              {
                "step": "$\\sqrt{\\dfrac{24}{25}} = \\dfrac{\\sqrt{24}}{\\sqrt{25}}$",
                "reason": "The root of a quotient is the quotient of the roots, which leaves two roots of whole numbers."
              },
              {
                "step": "$\\sqrt{24} = \\sqrt{4 \\times 6}$",
                "reason": "The number $4$ is the largest square that divides $24$, and simplest radical form leaves no square factor under the root, so $4$ is set apart."
              },
              {
                "step": "$\\sqrt{4 \\times 6} = \\sqrt{4} \\times \\sqrt{6}$",
                "reason": "The root of a product is the product of the roots for nonnegative numbers, which puts the square under a root of its own."
              },
              {
                "step": "$\\sqrt{4} \\times \\sqrt{6} = 2\\sqrt{6}$",
                "reason": "The radical sign names the nonnegative number whose square is $4$, which is $2$, and $6$ has no square factor greater than $1$, so the top is in simplest radical form."
              },
              {
                "step": "$\\sqrt{25} = 5$",
                "reason": "The radical sign names the nonnegative number whose square is $25$, and $5^2 = 25$, so the bottom is a whole number."
              },
              {
                "step": "$\\sqrt{0.96} = \\dfrac{2\\sqrt{6}}{5}$",
                "reason": "Replacing the top and the bottom by these values gives one fraction in simplest radical form, with no square factor left under the root."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\sqrt{0.32}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "2*sqrt(2)/5",
              "lines": [
                {
                  "step": "$0.32 = \\dfrac{32}{100}$",
                  "reason": "A finite decimal is a fraction over a power of $10$, which turns the decimal into a fraction."
                },
                {
                  "step": "$\\dfrac{32}{100} = \\dfrac{8}{25}$",
                  "reason": "A fraction in lowest terms: dividing top and bottom by $4$ leaves a square on the bottom, ready for the root of a quotient."
                },
                {
                  "step": "$\\sqrt{0.32} = \\sqrt{\\dfrac{8}{25}}$",
                  "reason": "Replacing the decimal by the equal fraction leaves a fraction under the root."
                },
                {
                  "step": "$\\sqrt{\\dfrac{8}{25}} = \\dfrac{\\sqrt{8}}{\\sqrt{25}}$",
                  "reason": "The root of a quotient is the quotient of the roots, which leaves two roots of whole numbers."
                },
                {
                  "step": "$\\sqrt{8} = \\sqrt{4 \\times 2}$",
                  "reason": "The number $4$ is the largest square that divides $8$, and simplest radical form leaves no square factor under the root, so $4$ is set apart."
                },
                {
                  "step": "$\\sqrt{4 \\times 2} = \\sqrt{4} \\times \\sqrt{2}$",
                  "reason": "The root of a product is the product of the roots for nonnegative numbers, which puts the square under a root of its own."
                },
                {
                  "step": "$\\sqrt{4} \\times \\sqrt{2} = 2\\sqrt{2}$",
                  "reason": "The radical sign names the nonnegative number whose square is $4$, which is $2$, and $2$ has no square factor greater than $1$, so the top is in simplest radical form."
                },
                {
                  "step": "$\\sqrt{25} = 5$",
                  "reason": "The radical sign names the nonnegative number whose square is $25$, and $5^2 = 25$, so the bottom is a whole number."
                },
                {
                  "step": "$\\sqrt{0.32} = \\dfrac{2\\sqrt{2}}{5}$",
                  "reason": "Replacing the top and the bottom by these values gives one fraction in simplest radical form, with no square factor left under the root."
                }
              ]
            },
            {
              "prompt": "Simplify $\\sqrt{2.16}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "3*sqrt(6)/5",
              "lines": [
                {
                  "step": "$2.16 = \\dfrac{216}{100}$",
                  "reason": "A finite decimal is a fraction over a power of $10$, which turns the decimal into a fraction."
                },
                {
                  "step": "$\\dfrac{216}{100} = \\dfrac{54}{25}$",
                  "reason": "A fraction in lowest terms: dividing top and bottom by $4$ leaves a square on the bottom, ready for the root of a quotient."
                },
                {
                  "step": "$\\sqrt{2.16} = \\sqrt{\\dfrac{54}{25}}$",
                  "reason": "Replacing the decimal by the equal fraction leaves a fraction under the root."
                },
                {
                  "step": "$\\sqrt{\\dfrac{54}{25}} = \\dfrac{\\sqrt{54}}{\\sqrt{25}}$",
                  "reason": "The root of a quotient is the quotient of the roots, which leaves two roots of whole numbers."
                },
                {
                  "step": "$\\sqrt{54} = \\sqrt{9 \\times 6}$",
                  "reason": "The number $9$ is the largest square that divides $54$, and simplest radical form leaves no square factor under the root, so $9$ is set apart."
                },
                {
                  "step": "$\\sqrt{9 \\times 6} = \\sqrt{9} \\times \\sqrt{6}$",
                  "reason": "The root of a product is the product of the roots for nonnegative numbers, which puts the square under a root of its own."
                },
                {
                  "step": "$\\sqrt{9} \\times \\sqrt{6} = 3\\sqrt{6}$",
                  "reason": "The radical sign names the nonnegative number whose square is $9$, which is $3$, and $6$ has no square factor greater than $1$, so the top is in simplest radical form."
                },
                {
                  "step": "$\\sqrt{25} = 5$",
                  "reason": "The radical sign names the nonnegative number whose square is $25$, and $5^2 = 25$, so the bottom is a whole number."
                },
                {
                  "step": "$\\sqrt{2.16} = \\dfrac{3\\sqrt{6}}{5}$",
                  "reason": "Replacing the top and the bottom by these values gives one fraction in simplest radical form, with no square factor left under the root."
                }
              ]
            },
            {
              "prompt": "Simplify $\\sqrt{6.75}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "3*sqrt(3)/2",
              "lines": [
                {
                  "step": "$6.75 = \\dfrac{675}{100}$",
                  "reason": "A finite decimal is a fraction over a power of $10$, which turns the decimal into a fraction."
                },
                {
                  "step": "$\\dfrac{675}{100} = \\dfrac{27}{4}$",
                  "reason": "A fraction in lowest terms: dividing top and bottom by $25$ leaves a square on the bottom, ready for the root of a quotient."
                },
                {
                  "step": "$\\sqrt{6.75} = \\sqrt{\\dfrac{27}{4}}$",
                  "reason": "Replacing the decimal by the equal fraction leaves a fraction under the root."
                },
                {
                  "step": "$\\sqrt{\\dfrac{27}{4}} = \\dfrac{\\sqrt{27}}{\\sqrt{4}}$",
                  "reason": "The root of a quotient is the quotient of the roots, which leaves two roots of whole numbers."
                },
                {
                  "step": "$\\sqrt{27} = \\sqrt{9 \\times 3}$",
                  "reason": "The number $9$ is the largest square that divides $27$, and simplest radical form leaves no square factor under the root, so $9$ is set apart."
                },
                {
                  "step": "$\\sqrt{9 \\times 3} = \\sqrt{9} \\times \\sqrt{3}$",
                  "reason": "The root of a product is the product of the roots for nonnegative numbers, which puts the square under a root of its own."
                },
                {
                  "step": "$\\sqrt{9} \\times \\sqrt{3} = 3\\sqrt{3}$",
                  "reason": "The radical sign names the nonnegative number whose square is $9$, which is $3$, and $3$ has no square factor greater than $1$, so the top is in simplest radical form."
                },
                {
                  "step": "$\\sqrt{4} = 2$",
                  "reason": "The radical sign names the nonnegative number whose square is $4$, and $2^2 = 4$, so the bottom is a whole number."
                },
                {
                  "step": "$\\sqrt{6.75} = \\dfrac{3\\sqrt{3}}{2}$",
                  "reason": "Replacing the top and the bottom by these values gives one fraction in simplest radical form, with no square factor left under the root."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $\\sqrt{18x^5}$, where $x \\ge 0$.",
            "lines": [
              {
                "step": "$18x^5 = 9 \\times 2 \\times x^4 \\times x$",
                "reason": "The product law gives $x^5 = x^4 \\times x$, which sets the even power $x^4$ apart, and $9$ is the largest square that divides $18$."
              },
              {
                "step": "$\\sqrt{18x^5} = \\sqrt{9} \\times \\sqrt{x^4} \\times \\sqrt{2x}$",
                "reason": "The root of a product is the product of the roots for nonnegative numbers, which gives the square number and the even power roots of their own."
              },
              {
                "step": "$\\sqrt{x^4} = \\sqrt{(x^2)^2}$",
                "reason": "The power law gives $(x^2)^2 = x^4$, which writes the power under the root as a square."
              },
              {
                "step": "$\\sqrt{(x^2)^2} = |x^2|$",
                "reason": "The root of a square is the absolute value, $\\sqrt{a^2} = |a|$, for every real number $a$."
              },
              {
                "step": "$|x^2| = x^2$",
                "reason": "By the definition of absolute value, a nonnegative number is its own absolute value, and the even power $x^2$ is nonnegative whatever the sign of $x$."
              },
              {
                "step": "$\\sqrt{18x^5} = 3x^2\\sqrt{2x}$",
                "reason": "The radical sign names $3$ as the nonnegative number whose square is $9$, and replacing each root by its value gives the answer in simplest radical form."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\sqrt{32y^7}$, where $y \\ge 0$.",
              "form": "Answer in simplest radical form, as in 3*x^2*sqrt(2*x).",
              "answer": "4*y^3*sqrt(2*y)",
              "lines": [
                {
                  "step": "$32y^7 = 16 \\times 2 \\times y^6 \\times y$",
                  "reason": "The product law gives $y^7 = y^6 \\times y$, which sets the even power $y^6$ apart, and $16$ is the largest square that divides $32$."
                },
                {
                  "step": "$\\sqrt{32y^7} = \\sqrt{16} \\times \\sqrt{y^6} \\times \\sqrt{2y}$",
                  "reason": "The root of a product is the product of the roots for nonnegative numbers, which gives the square number and the even power roots of their own."
                },
                {
                  "step": "$\\sqrt{y^6} = \\sqrt{(y^3)^2}$",
                  "reason": "The power law gives $(y^3)^2 = y^6$, which writes the power under the root as a square."
                },
                {
                  "step": "$\\sqrt{(y^3)^2} = |y^3|$",
                  "reason": "The root of a square is the absolute value, $\\sqrt{a^2} = |a|$, for every real number $a$."
                },
                {
                  "step": "$|y^3| = y^3$",
                  "reason": "By the definition of absolute value, a nonnegative number is its own absolute value, and $y^3$ is nonnegative because $y$ is nonnegative."
                },
                {
                  "step": "$\\sqrt{32y^7} = 4y^3\\sqrt{2y}$",
                  "reason": "The radical sign names $4$ as the nonnegative number whose square is $16$, and replacing each root by its value gives the answer in simplest radical form."
                }
              ]
            },
            {
              "prompt": "Simplify $\\sqrt{98z^9}$, where $z \\ge 0$.",
              "form": "Answer in simplest radical form, as in 3*x^2*sqrt(2*x).",
              "answer": "7*z^4*sqrt(2*z)",
              "lines": [
                {
                  "step": "$98z^9 = 49 \\times 2 \\times z^8 \\times z$",
                  "reason": "The product law gives $z^9 = z^8 \\times z$, which sets the even power $z^8$ apart, and $49$ is the largest square that divides $98$."
                },
                {
                  "step": "$\\sqrt{98z^9} = \\sqrt{49} \\times \\sqrt{z^8} \\times \\sqrt{2z}$",
                  "reason": "The root of a product is the product of the roots for nonnegative numbers, which gives the square number and the even power roots of their own."
                },
                {
                  "step": "$\\sqrt{z^8} = \\sqrt{(z^4)^2}$",
                  "reason": "The power law gives $(z^4)^2 = z^8$, which writes the power under the root as a square."
                },
                {
                  "step": "$\\sqrt{(z^4)^2} = |z^4|$",
                  "reason": "The root of a square is the absolute value, $\\sqrt{a^2} = |a|$, for every real number $a$."
                },
                {
                  "step": "$|z^4| = z^4$",
                  "reason": "By the definition of absolute value, a nonnegative number is its own absolute value, and the even power $z^4$ is nonnegative whatever the sign of $z$."
                },
                {
                  "step": "$\\sqrt{98z^9} = 7z^4\\sqrt{2z}$",
                  "reason": "The radical sign names $7$ as the nonnegative number whose square is $49$, and replacing each root by its value gives the answer in simplest radical form."
                }
              ]
            },
            {
              "prompt": "Simplify $\\sqrt{48x^{11}}$, where $x \\ge 0$.",
              "form": "Answer in simplest radical form, as in 3*x^2*sqrt(2*x).",
              "answer": "4*x^5*sqrt(3*x)",
              "lines": [
                {
                  "step": "$48x^{11} = 16 \\times 3 \\times x^{10} \\times x$",
                  "reason": "The product law gives $x^{11} = x^{10} \\times x$, which sets the even power $x^{10}$ apart, and $16$ is the largest square that divides $48$."
                },
                {
                  "step": "$\\sqrt{48x^{11}} = \\sqrt{16} \\times \\sqrt{x^{10}} \\times \\sqrt{3x}$",
                  "reason": "The root of a product is the product of the roots for nonnegative numbers, which gives the square number and the even power roots of their own."
                },
                {
                  "step": "$\\sqrt{x^{10}} = \\sqrt{(x^5)^2}$",
                  "reason": "The power law gives $(x^5)^2 = x^{10}$, which writes the power under the root as a square."
                },
                {
                  "step": "$\\sqrt{(x^5)^2} = |x^5|$",
                  "reason": "The root of a square is the absolute value, $\\sqrt{a^2} = |a|$, for every real number $a$."
                },
                {
                  "step": "$|x^5| = x^5$",
                  "reason": "By the definition of absolute value, a nonnegative number is its own absolute value, and $x^5$ is nonnegative because $x$ is nonnegative."
                },
                {
                  "step": "$\\sqrt{48x^{11}} = 4x^5\\sqrt{3x}$",
                  "reason": "The radical sign names $4$ as the nonnegative number whose square is $16$, and replacing each root by its value gives the answer in simplest radical form."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t104-k2",
      "forms": [
        {
          "example": {
            "problem": "Simplify $\\sqrt[3]{250}$.",
            "lines": [
              {
                "step": "$250 = 2 \\times 5^3$",
                "reason": "The prime decomposition of $250$ shows which of its factors make a third power."
              },
              {
                "step": "$\\sqrt[3]{250} = \\sqrt[3]{5^3 \\times 2}$",
                "reason": "The prime decomposition holds $5^3$, the largest third power that divides $250$, and simplest radical form leaves no third-power factor under the root, so it is set apart."
              },
              {
                "step": "$\\sqrt[3]{5^3 \\times 2} = \\sqrt[3]{5^3} \\times \\sqrt[3]{2}$",
                "reason": "The root of a product is the product of the roots, for cube roots as for square roots, which puts the third power under a root of its own."
              },
              {
                "step": "$\\sqrt[3]{5^3} \\times \\sqrt[3]{2} = 5\\sqrt[3]{2}$",
                "reason": "The radical sign with index $3$ names the number whose third power is $5^3$, which is $5$, and $2$ has no third-power factor greater than $1$, so this is simplest radical form."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\sqrt[4]{162}$.",
              "form": "Answer in simplest radical form, as in 6*2^(1/3).",
              "answer": "3*2^(1/4)",
              "lines": [
                {
                  "step": "$162 = 2 \\times 3^4$",
                  "reason": "The prime decomposition of $162$ shows which of its factors make a fourth power."
                },
                {
                  "step": "$\\sqrt[4]{162} = \\sqrt[4]{3^4 \\times 2}$",
                  "reason": "The prime decomposition holds $3^4$, the largest fourth power that divides $162$, and simplest radical form leaves no fourth-power factor under the root, so it is set apart."
                },
                {
                  "step": "$\\sqrt[4]{3^4 \\times 2} = \\sqrt[4]{3^4} \\times \\sqrt[4]{2}$",
                  "reason": "The root of a product is the product of the roots, for fourth roots as for square roots, which puts the fourth power under a root of its own."
                },
                {
                  "step": "$\\sqrt[4]{3^4} \\times \\sqrt[4]{2} = 3\\sqrt[4]{2}$",
                  "reason": "The radical sign with index $4$ names the number whose fourth power is $3^4$, which is $3$, and $2$ has no fourth-power factor greater than $1$, so this is simplest radical form."
                }
              ]
            },
            {
              "prompt": "Simplify $\\sqrt[5]{96}$.",
              "form": "Answer in simplest radical form, as in 6*2^(1/3).",
              "answer": "2*3^(1/5)",
              "lines": [
                {
                  "step": "$96 = 2^5 \\times 3$",
                  "reason": "The prime decomposition of $96$ shows which of its factors make a fifth power."
                },
                {
                  "step": "$\\sqrt[5]{96} = \\sqrt[5]{2^5 \\times 3}$",
                  "reason": "The prime decomposition holds $2^5$, the largest fifth power that divides $96$, and simplest radical form leaves no fifth-power factor under the root, so it is set apart."
                },
                {
                  "step": "$\\sqrt[5]{2^5 \\times 3} = \\sqrt[5]{2^5} \\times \\sqrt[5]{3}$",
                  "reason": "The root of a product is the product of the roots, for fifth roots as for square roots, which puts the fifth power under a root of its own."
                },
                {
                  "step": "$\\sqrt[5]{2^5} \\times \\sqrt[5]{3} = 2\\sqrt[5]{3}$",
                  "reason": "The radical sign with index $5$ names the number whose fifth power is $2^5$, which is $2$, and $3$ has no fifth-power factor greater than $1$, so this is simplest radical form."
                }
              ]
            },
            {
              "prompt": "Simplify $\\sqrt[3]{189}$.",
              "form": "Answer in simplest radical form, as in 6*2^(1/3).",
              "answer": "3*7^(1/3)",
              "lines": [
                {
                  "step": "$189 = 3^3 \\times 7$",
                  "reason": "The prime decomposition of $189$ shows which of its factors make a third power."
                },
                {
                  "step": "$\\sqrt[3]{189} = \\sqrt[3]{3^3 \\times 7}$",
                  "reason": "The prime decomposition holds $3^3$, the largest third power that divides $189$, and simplest radical form leaves no third-power factor under the root, so it is set apart."
                },
                {
                  "step": "$\\sqrt[3]{3^3 \\times 7} = \\sqrt[3]{3^3} \\times \\sqrt[3]{7}$",
                  "reason": "The root of a product is the product of the roots, for cube roots as for square roots, which puts the third power under a root of its own."
                },
                {
                  "step": "$\\sqrt[3]{3^3} \\times \\sqrt[3]{7} = 3\\sqrt[3]{7}$",
                  "reason": "The radical sign with index $3$ names the number whose third power is $3^3$, which is $3$, and $7$ has no third-power factor greater than $1$, so this is simplest radical form."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $\\sqrt[3]{64x^6y^{15}}$.",
            "lines": [
              {
                "step": "$\\sqrt[3]{64x^6y^{15}} = \\sqrt[3]{64} \\times \\sqrt[3]{x^6} \\times \\sqrt[3]{y^{15}}$",
                "reason": "The root of a product is the product of the roots, for cube roots as for square roots, which gives the number and each letter a root of its own."
              },
              {
                "step": "$\\sqrt[3]{64} = 4$",
                "reason": "The radical sign with index $3$ names the number whose third power is $64$, and $4^3 = 64$."
              },
              {
                "step": "$\\sqrt[3]{x^6} = x^2$",
                "reason": "The power law for whole exponents gives $(x^2)^3 = x^6$, and by the definition of $x^{1/n}$ for odd $n$ the cube root of $x^6$ is the one real number whose third power is $x^6$."
              },
              {
                "step": "$\\sqrt[3]{y^{15}} = y^5$",
                "reason": "The power law for whole exponents gives $(y^5)^3 = y^{15}$, and by the definition of $x^{1/n}$ for odd $n$ the cube root of $y^{15}$ is the one real number whose third power is $y^{15}$."
              },
              {
                "step": "$\\sqrt[3]{64x^6y^{15}} = 4x^2y^5$",
                "reason": "Replacing each root by its value gives a single term with no root left."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\sqrt[3]{343x^{12}y^3}$.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "7*x^4*y",
              "lines": [
                {
                  "step": "$\\sqrt[3]{343x^{12}y^3} = \\sqrt[3]{343} \\times \\sqrt[3]{x^{12}} \\times \\sqrt[3]{y^3}$",
                  "reason": "The root of a product is the product of the roots, for cube roots as for square roots, which gives the number and each letter a root of its own."
                },
                {
                  "step": "$\\sqrt[3]{343} = 7$",
                  "reason": "The radical sign with index $3$ names the number whose third power is $343$, and $7^3 = 343$."
                },
                {
                  "step": "$\\sqrt[3]{x^{12}} = x^4$",
                  "reason": "The power law for whole exponents gives $(x^4)^3 = x^{12}$, and by the definition of $x^{1/n}$ for odd $n$ the cube root of $x^{12}$ is the one real number whose third power is $x^{12}$."
                },
                {
                  "step": "$\\sqrt[3]{y^3} = y$",
                  "reason": "The power law for whole exponents gives $y^3 = y^3$, and by the definition of $x^{1/n}$ for odd $n$ the cube root of $y^3$ is the one real number whose third power is $y^3$."
                },
                {
                  "step": "$\\sqrt[3]{343x^{12}y^3} = 7x^4y$",
                  "reason": "Replacing each root by its value gives a single term with no root left."
                }
              ]
            },
            {
              "prompt": "Simplify $\\sqrt[4]{81x^8y^{12}}$, where $x \\ge 0$ and $y \\ge 0$.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "3*x^2*y^3",
              "lines": [
                {
                  "step": "$\\sqrt[4]{81x^8y^{12}} = \\sqrt[4]{81} \\times \\sqrt[4]{x^8} \\times \\sqrt[4]{y^{12}}$",
                  "reason": "The root of a product is the product of the roots, for fourth roots as for square roots, which gives the number and each letter a root of its own."
                },
                {
                  "step": "$\\sqrt[4]{81} = 3$",
                  "reason": "The radical sign with index $4$ names the number whose fourth power is $81$, and $3^4 = 81$."
                },
                {
                  "step": "$\\sqrt[4]{x^8} = x^2$",
                  "reason": "The power law for whole exponents gives $(x^2)^4 = x^8$, and by the definition of $x^{1/n}$ for even $n$ the fourth root is the nonnegative number with that fourth power: $x^2$ is nonnegative because $x \\ge 0$."
                },
                {
                  "step": "$\\sqrt[4]{y^{12}} = y^3$",
                  "reason": "The power law for whole exponents gives $(y^3)^4 = y^{12}$, and by the definition of $x^{1/n}$ for even $n$ the fourth root is the nonnegative number with that fourth power: $y^3$ is nonnegative because $y \\ge 0$."
                },
                {
                  "step": "$\\sqrt[4]{81x^8y^{12}} = 3x^2y^3$",
                  "reason": "Replacing each root by its value gives a single term with no root left."
                }
              ]
            },
            {
              "prompt": "Simplify $\\sqrt[5]{32x^{10}y^5}$.",
              "form": "Answer with no negative indices and each base once, as in 2*x^3/y^2.",
              "answer": "2*x^2*y",
              "lines": [
                {
                  "step": "$\\sqrt[5]{32x^{10}y^5} = \\sqrt[5]{32} \\times \\sqrt[5]{x^{10}} \\times \\sqrt[5]{y^5}$",
                  "reason": "The root of a product is the product of the roots, for fifth roots as for square roots, which gives the number and each letter a root of its own."
                },
                {
                  "step": "$\\sqrt[5]{32} = 2$",
                  "reason": "The radical sign with index $5$ names the number whose fifth power is $32$, and $2^5 = 32$."
                },
                {
                  "step": "$\\sqrt[5]{x^{10}} = x^2$",
                  "reason": "The power law for whole exponents gives $(x^2)^5 = x^{10}$, and by the definition of $x^{1/n}$ for odd $n$ the fifth root of $x^{10}$ is the one real number whose fifth power is $x^{10}$."
                },
                {
                  "step": "$\\sqrt[5]{y^5} = y$",
                  "reason": "The power law for whole exponents gives $y^5 = y^5$, and by the definition of $x^{1/n}$ for odd $n$ the fifth root of $y^5$ is the one real number whose fifth power is $y^5$."
                },
                {
                  "step": "$\\sqrt[5]{32x^{10}y^5} = 2x^2y$",
                  "reason": "Replacing each root by its value gives a single term with no root left."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $\\sqrt[3]{-320}$.",
            "lines": [
              {
                "step": "$\\sqrt[3]{-320} = -\\sqrt[3]{320}$",
                "reason": "By the sign of a power of a negative number, an odd power of a negative number is negative, so the cube root of $-320$ is the opposite of the cube root of $320$."
              },
              {
                "step": "$\\sqrt[3]{320} = \\sqrt[3]{64 \\times 5}$",
                "reason": "The number $64$ is the largest third power that divides $320$, and simplest radical form leaves no third-power factor under the root, so $64$ is set apart."
              },
              {
                "step": "$\\sqrt[3]{64 \\times 5} = \\sqrt[3]{64} \\times \\sqrt[3]{5}$",
                "reason": "The root of a product is the product of the roots for nonnegative numbers, which puts the third power under a root of its own."
              },
              {
                "step": "$\\sqrt[3]{64} \\times \\sqrt[3]{5} = 4\\sqrt[3]{5}$",
                "reason": "The radical sign names the nonnegative number whose third power is $64$, which is $4$, and $5$ has no third-power factor greater than $1$, so this is simplest radical form."
              },
              {
                "step": "$\\sqrt[3]{-320} = -4\\sqrt[3]{5}$",
                "reason": "Replacing the root in the first line by its simplest form keeps the minus sign in front."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\sqrt[3]{-56}$.",
              "form": "Answer in simplest radical form, as in 6*2^(1/3).",
              "answer": "-2*7^(1/3)",
              "lines": [
                {
                  "step": "$\\sqrt[3]{-56} = -\\sqrt[3]{56}$",
                  "reason": "By the sign of a power of a negative number, an odd power of a negative number is negative, so the cube root of $-56$ is the opposite of the cube root of $56$."
                },
                {
                  "step": "$\\sqrt[3]{56} = \\sqrt[3]{8 \\times 7}$",
                  "reason": "The number $8$ is the largest third power that divides $56$, and simplest radical form leaves no third-power factor under the root, so $8$ is set apart."
                },
                {
                  "step": "$\\sqrt[3]{8 \\times 7} = \\sqrt[3]{8} \\times \\sqrt[3]{7}$",
                  "reason": "The root of a product is the product of the roots for nonnegative numbers, which puts the third power under a root of its own."
                },
                {
                  "step": "$\\sqrt[3]{8} \\times \\sqrt[3]{7} = 2\\sqrt[3]{7}$",
                  "reason": "The radical sign names the nonnegative number whose third power is $8$, which is $2$, and $7$ has no third-power factor greater than $1$, so this is simplest radical form."
                },
                {
                  "step": "$\\sqrt[3]{-56} = -2\\sqrt[3]{7}$",
                  "reason": "Replacing the root in the first line by its simplest form keeps the minus sign in front."
                }
              ]
            },
            {
              "prompt": "Simplify $\\sqrt[5]{-64}$.",
              "form": "Answer in simplest radical form, as in 6*2^(1/3).",
              "answer": "-2*2^(1/5)",
              "lines": [
                {
                  "step": "$\\sqrt[5]{-64} = -\\sqrt[5]{64}$",
                  "reason": "By the sign of a power of a negative number, an odd power of a negative number is negative, so the fifth root of $-64$ is the opposite of the fifth root of $64$."
                },
                {
                  "step": "$\\sqrt[5]{64} = \\sqrt[5]{32 \\times 2}$",
                  "reason": "The number $32$ is the largest fifth power that divides $64$, and simplest radical form leaves no fifth-power factor under the root, so $32$ is set apart."
                },
                {
                  "step": "$\\sqrt[5]{32 \\times 2} = \\sqrt[5]{32} \\times \\sqrt[5]{2}$",
                  "reason": "The root of a product is the product of the roots for nonnegative numbers, which puts the fifth power under a root of its own."
                },
                {
                  "step": "$\\sqrt[5]{32} \\times \\sqrt[5]{2} = 2\\sqrt[5]{2}$",
                  "reason": "The radical sign names the nonnegative number whose fifth power is $32$, which is $2$, and $2$ has no fifth-power factor greater than $1$, so this is simplest radical form."
                },
                {
                  "step": "$\\sqrt[5]{-64} = -2\\sqrt[5]{2}$",
                  "reason": "Replacing the root in the first line by its simplest form keeps the minus sign in front."
                }
              ]
            },
            {
              "prompt": "Simplify $\\sqrt[3]{-81}$.",
              "form": "Answer in simplest radical form, as in 6*2^(1/3).",
              "answer": "-3*3^(1/3)",
              "lines": [
                {
                  "step": "$\\sqrt[3]{-81} = -\\sqrt[3]{81}$",
                  "reason": "By the sign of a power of a negative number, an odd power of a negative number is negative, so the cube root of $-81$ is the opposite of the cube root of $81$."
                },
                {
                  "step": "$\\sqrt[3]{81} = \\sqrt[3]{27 \\times 3}$",
                  "reason": "The number $27$ is the largest third power that divides $81$, and simplest radical form leaves no third-power factor under the root, so $27$ is set apart."
                },
                {
                  "step": "$\\sqrt[3]{27 \\times 3} = \\sqrt[3]{27} \\times \\sqrt[3]{3}$",
                  "reason": "The root of a product is the product of the roots for nonnegative numbers, which puts the third power under a root of its own."
                },
                {
                  "step": "$\\sqrt[3]{27} \\times \\sqrt[3]{3} = 3\\sqrt[3]{3}$",
                  "reason": "The radical sign names the nonnegative number whose third power is $27$, which is $3$, and $3$ has no third-power factor greater than $1$, so this is simplest radical form."
                },
                {
                  "step": "$\\sqrt[3]{-81} = -3\\sqrt[3]{3}$",
                  "reason": "Replacing the root in the first line by its simplest form keeps the minus sign in front."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $\\sqrt[3]{432}$.",
            "lines": [
              {
                "step": "$432 = 2^4 \\times 3^3$",
                "reason": "The prime decomposition of $432$ shows which of its factors make a third power."
              },
              {
                "step": "$2^3 \\times 3^3 = 6^3$",
                "reason": "The power of a product, read from right to left, gathers the third powers of the primes into one third power."
              },
              {
                "step": "$\\sqrt[3]{432} = \\sqrt[3]{6^3 \\times 2}$",
                "reason": "The number $6^3$ is the largest third power that divides $432$, and simplest radical form leaves no third-power factor under the root, so it is set apart."
              },
              {
                "step": "$\\sqrt[3]{6^3 \\times 2} = \\sqrt[3]{6^3} \\times \\sqrt[3]{2}$",
                "reason": "The root of a product is the product of the roots, for cube roots as for square roots, which puts the third power under a root of its own."
              },
              {
                "step": "$\\sqrt[3]{6^3} \\times \\sqrt[3]{2} = 6\\sqrt[3]{2}$",
                "reason": "The radical sign with index $3$ names the number whose third power is $6^3$, which is $6$, and $2$ has no third-power factor greater than $1$, so this is simplest radical form."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\sqrt[3]{1080}$.",
              "form": "Answer in simplest radical form, as in 6*2^(1/3).",
              "answer": "6*5^(1/3)",
              "lines": [
                {
                  "step": "$1080 = 2^3 \\times 3^3 \\times 5$",
                  "reason": "The prime decomposition of $1080$ shows which of its factors make a third power."
                },
                {
                  "step": "$2^3 \\times 3^3 = 6^3$",
                  "reason": "The power of a product, read from right to left, gathers the third powers of the primes into one third power."
                },
                {
                  "step": "$\\sqrt[3]{1080} = \\sqrt[3]{6^3 \\times 5}$",
                  "reason": "The number $6^3$ is the largest third power that divides $1080$, and simplest radical form leaves no third-power factor under the root, so it is set apart."
                },
                {
                  "step": "$\\sqrt[3]{6^3 \\times 5} = \\sqrt[3]{6^3} \\times \\sqrt[3]{5}$",
                  "reason": "The root of a product is the product of the roots, for cube roots as for square roots, which puts the third power under a root of its own."
                },
                {
                  "step": "$\\sqrt[3]{6^3} \\times \\sqrt[3]{5} = 6\\sqrt[3]{5}$",
                  "reason": "The radical sign with index $3$ names the number whose third power is $6^3$, which is $6$, and $5$ has no third-power factor greater than $1$, so this is simplest radical form."
                }
              ]
            },
            {
              "prompt": "Simplify $\\sqrt[4]{2592}$.",
              "form": "Answer in simplest radical form, as in 6*2^(1/3).",
              "answer": "6*2^(1/4)",
              "lines": [
                {
                  "step": "$2592 = 2^5 \\times 3^4$",
                  "reason": "The prime decomposition of $2592$ shows which of its factors make a fourth power."
                },
                {
                  "step": "$2^4 \\times 3^4 = 6^4$",
                  "reason": "The power of a product, read from right to left, gathers the fourth powers of the primes into one fourth power."
                },
                {
                  "step": "$\\sqrt[4]{2592} = \\sqrt[4]{6^4 \\times 2}$",
                  "reason": "The number $6^4$ is the largest fourth power that divides $2592$, and simplest radical form leaves no fourth-power factor under the root, so it is set apart."
                },
                {
                  "step": "$\\sqrt[4]{6^4 \\times 2} = \\sqrt[4]{6^4} \\times \\sqrt[4]{2}$",
                  "reason": "The root of a product is the product of the roots, for fourth roots as for square roots, which puts the fourth power under a root of its own."
                },
                {
                  "step": "$\\sqrt[4]{6^4} \\times \\sqrt[4]{2} = 6\\sqrt[4]{2}$",
                  "reason": "The radical sign with index $4$ names the number whose fourth power is $6^4$, which is $6$, and $2$ has no fourth-power factor greater than $1$, so this is simplest radical form."
                }
              ]
            },
            {
              "prompt": "Simplify $\\sqrt[3]{5400}$.",
              "form": "Answer in simplest radical form, as in 6*2^(1/3).",
              "answer": "6*25^(1/3)",
              "lines": [
                {
                  "step": "$5400 = 2^3 \\times 3^3 \\times 5^2$",
                  "reason": "The prime decomposition of $5400$ shows which of its factors make a third power."
                },
                {
                  "step": "$2^3 \\times 3^3 = 6^3$",
                  "reason": "The power of a product, read from right to left, gathers the third powers of the primes into one third power."
                },
                {
                  "step": "$\\sqrt[3]{5400} = \\sqrt[3]{6^3 \\times 25}$",
                  "reason": "The number $6^3$ is the largest third power that divides $5400$, and simplest radical form leaves no third-power factor under the root, so it is set apart."
                },
                {
                  "step": "$\\sqrt[3]{6^3 \\times 25} = \\sqrt[3]{6^3} \\times \\sqrt[3]{25}$",
                  "reason": "The root of a product is the product of the roots, for cube roots as for square roots, which puts the third power under a root of its own."
                },
                {
                  "step": "$\\sqrt[3]{6^3} \\times \\sqrt[3]{25} = 6\\sqrt[3]{25}$",
                  "reason": "The radical sign with index $3$ names the number whose third power is $6^3$, which is $6$, and $25$ has no third-power factor greater than $1$, so this is simplest radical form."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $\\sqrt[3]{\\dfrac{81}{64}}$.",
            "lines": [
              {
                "step": "$\\sqrt[3]{\\dfrac{81}{64}} = \\dfrac{\\sqrt[3]{81}}{\\sqrt[3]{64}}$",
                "reason": "The root of a quotient is the quotient of the roots, for cube roots as for square roots, which leaves two roots of whole numbers."
              },
              {
                "step": "$\\sqrt[3]{81} = \\sqrt[3]{27 \\times 3}$",
                "reason": "The number $27$ is the largest third power that divides $81$, and simplest radical form leaves no third-power factor under the root, so $27$ is set apart."
              },
              {
                "step": "$\\sqrt[3]{27 \\times 3} = \\sqrt[3]{27} \\times \\sqrt[3]{3}$",
                "reason": "The root of a product is the product of the roots for nonnegative numbers, which puts the third power under a root of its own."
              },
              {
                "step": "$\\sqrt[3]{27} \\times \\sqrt[3]{3} = 3\\sqrt[3]{3}$",
                "reason": "The radical sign names the nonnegative number whose third power is $27$, which is $3$, and $3$ has no third-power factor greater than $1$, so the top is in simplest radical form."
              },
              {
                "step": "$\\sqrt[3]{64} = 4$",
                "reason": "The radical sign names the nonnegative number whose third power is $64$, and $4^3 = 64$, so the bottom is a whole number."
              },
              {
                "step": "$\\sqrt[3]{\\dfrac{81}{64}} = \\dfrac{3\\sqrt[3]{3}}{4}$",
                "reason": "Replacing the top and the bottom by these values gives one fraction in simplest radical form, with no third-power factor left under the root."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\sqrt[3]{\\dfrac{250}{343}}$.",
              "form": "Answer in simplest radical form, as in 6*2^(1/3).",
              "answer": "5*2^(1/3)/7",
              "lines": [
                {
                  "step": "$\\sqrt[3]{\\dfrac{250}{343}} = \\dfrac{\\sqrt[3]{250}}{\\sqrt[3]{343}}$",
                  "reason": "The root of a quotient is the quotient of the roots, for cube roots as for square roots, which leaves two roots of whole numbers."
                },
                {
                  "step": "$\\sqrt[3]{250} = \\sqrt[3]{125 \\times 2}$",
                  "reason": "The number $125$ is the largest third power that divides $250$, and simplest radical form leaves no third-power factor under the root, so $125$ is set apart."
                },
                {
                  "step": "$\\sqrt[3]{125 \\times 2} = \\sqrt[3]{125} \\times \\sqrt[3]{2}$",
                  "reason": "The root of a product is the product of the roots for nonnegative numbers, which puts the third power under a root of its own."
                },
                {
                  "step": "$\\sqrt[3]{125} \\times \\sqrt[3]{2} = 5\\sqrt[3]{2}$",
                  "reason": "The radical sign names the nonnegative number whose third power is $125$, which is $5$, and $2$ has no third-power factor greater than $1$, so the top is in simplest radical form."
                },
                {
                  "step": "$\\sqrt[3]{343} = 7$",
                  "reason": "The radical sign names the nonnegative number whose third power is $343$, and $7^3 = 343$, so the bottom is a whole number."
                },
                {
                  "step": "$\\sqrt[3]{\\dfrac{250}{343}} = \\dfrac{5\\sqrt[3]{2}}{7}$",
                  "reason": "Replacing the top and the bottom by these values gives one fraction in simplest radical form, with no third-power factor left under the root."
                }
              ]
            },
            {
              "prompt": "Simplify $\\sqrt[4]{\\dfrac{80}{81}}$.",
              "form": "Answer in simplest radical form, as in 6*2^(1/3).",
              "answer": "2*5^(1/4)/3",
              "lines": [
                {
                  "step": "$\\sqrt[4]{\\dfrac{80}{81}} = \\dfrac{\\sqrt[4]{80}}{\\sqrt[4]{81}}$",
                  "reason": "The root of a quotient is the quotient of the roots, for fourth roots as for square roots, which leaves two roots of whole numbers."
                },
                {
                  "step": "$\\sqrt[4]{80} = \\sqrt[4]{16 \\times 5}$",
                  "reason": "The number $16$ is the largest fourth power that divides $80$, and simplest radical form leaves no fourth-power factor under the root, so $16$ is set apart."
                },
                {
                  "step": "$\\sqrt[4]{16 \\times 5} = \\sqrt[4]{16} \\times \\sqrt[4]{5}$",
                  "reason": "The root of a product is the product of the roots for nonnegative numbers, which puts the fourth power under a root of its own."
                },
                {
                  "step": "$\\sqrt[4]{16} \\times \\sqrt[4]{5} = 2\\sqrt[4]{5}$",
                  "reason": "The radical sign names the nonnegative number whose fourth power is $16$, which is $2$, and $5$ has no fourth-power factor greater than $1$, so the top is in simplest radical form."
                },
                {
                  "step": "$\\sqrt[4]{81} = 3$",
                  "reason": "The radical sign names the nonnegative number whose fourth power is $81$, and $3^4 = 81$, so the bottom is a whole number."
                },
                {
                  "step": "$\\sqrt[4]{\\dfrac{80}{81}} = \\dfrac{2\\sqrt[4]{5}}{3}$",
                  "reason": "Replacing the top and the bottom by these values gives one fraction in simplest radical form, with no fourth-power factor left under the root."
                }
              ]
            },
            {
              "prompt": "Simplify $\\sqrt[5]{\\dfrac{96}{3125}}$.",
              "form": "Answer in simplest radical form, as in 6*2^(1/3).",
              "answer": "2*3^(1/5)/5",
              "lines": [
                {
                  "step": "$\\sqrt[5]{\\dfrac{96}{3125}} = \\dfrac{\\sqrt[5]{96}}{\\sqrt[5]{3125}}$",
                  "reason": "The root of a quotient is the quotient of the roots, for fifth roots as for square roots, which leaves two roots of whole numbers."
                },
                {
                  "step": "$\\sqrt[5]{96} = \\sqrt[5]{32 \\times 3}$",
                  "reason": "The number $32$ is the largest fifth power that divides $96$, and simplest radical form leaves no fifth-power factor under the root, so $32$ is set apart."
                },
                {
                  "step": "$\\sqrt[5]{32 \\times 3} = \\sqrt[5]{32} \\times \\sqrt[5]{3}$",
                  "reason": "The root of a product is the product of the roots for nonnegative numbers, which puts the fifth power under a root of its own."
                },
                {
                  "step": "$\\sqrt[5]{32} \\times \\sqrt[5]{3} = 2\\sqrt[5]{3}$",
                  "reason": "The radical sign names the nonnegative number whose fifth power is $32$, which is $2$, and $3$ has no fifth-power factor greater than $1$, so the top is in simplest radical form."
                },
                {
                  "step": "$\\sqrt[5]{3125} = 5$",
                  "reason": "The radical sign names the nonnegative number whose fifth power is $3125$, and $5^5 = 3125$, so the bottom is a whole number."
                },
                {
                  "step": "$\\sqrt[5]{\\dfrac{96}{3125}} = \\dfrac{2\\sqrt[5]{3}}{5}$",
                  "reason": "Replacing the top and the bottom by these values gives one fraction in simplest radical form, with no fifth-power factor left under the root."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $\\sqrt[3]{16x^5}$.",
            "lines": [
              {
                "step": "$16x^5 = 8 \\times x^3 \\times 2x^2$",
                "reason": "The product law gives $x^5 = x^3 \\times x^2$, and $8$ is the largest third power that divides $16$, so the third powers are set apart."
              },
              {
                "step": "$\\sqrt[3]{16x^5} = \\sqrt[3]{8} \\times \\sqrt[3]{x^3} \\times \\sqrt[3]{2x^2}$",
                "reason": "The root of a product is the product of the roots, for cube roots of all real numbers, which gives each third power a root of its own."
              },
              {
                "step": "$\\sqrt[3]{8} = 2$",
                "reason": "The radical sign with index $3$ names the number whose third power is $8$, and $2^3 = 8$."
              },
              {
                "step": "$\\sqrt[3]{x^3} = x$",
                "reason": "The power $x^3$ is the third power of $x$, and by the definition of $x^{1/n}$ for odd $n$ the cube root of $x^3$ is the one real number whose third power is $x^3$."
              },
              {
                "step": "$\\sqrt[3]{16x^5} = 2x\\sqrt[3]{2x^2}$",
                "reason": "Replacing the two roots by their values gives the answer, and nothing under the root is a third power, so this is simplest radical form."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\sqrt[3]{24y^4}$.",
              "form": "Answer in simplest radical form, as in 3*x^2*sqrt(2*x).",
              "answer": "2*y*(3*y)^(1/3)",
              "lines": [
                {
                  "step": "$24y^4 = 8 \\times y^3 \\times 3y$",
                  "reason": "The product law gives $y^4 = y^3 \\times y$, and $8$ is the largest third power that divides $24$, so the third powers are set apart."
                },
                {
                  "step": "$\\sqrt[3]{24y^4} = \\sqrt[3]{8} \\times \\sqrt[3]{y^3} \\times \\sqrt[3]{3y}$",
                  "reason": "The root of a product is the product of the roots, for cube roots of all real numbers, which gives each third power a root of its own."
                },
                {
                  "step": "$\\sqrt[3]{8} = 2$",
                  "reason": "The radical sign with index $3$ names the number whose third power is $8$, and $2^3 = 8$."
                },
                {
                  "step": "$\\sqrt[3]{y^3} = y$",
                  "reason": "The power $y^3$ is the third power of $y$, and by the definition of $x^{1/n}$ for odd $n$ the cube root of $y^3$ is the one real number whose third power is $y^3$."
                },
                {
                  "step": "$\\sqrt[3]{24y^4} = 2y\\sqrt[3]{3y}$",
                  "reason": "Replacing the two roots by their values gives the answer, and nothing under the root is a third power, so this is simplest radical form."
                }
              ]
            },
            {
              "prompt": "Simplify $\\sqrt[5]{64x^7}$.",
              "form": "Answer in simplest radical form, as in 3*x^2*sqrt(2*x).",
              "answer": "2*x*(2*x^2)^(1/5)",
              "lines": [
                {
                  "step": "$64x^7 = 32 \\times x^5 \\times 2x^2$",
                  "reason": "The product law gives $x^7 = x^5 \\times x^2$, and $32$ is the largest fifth power that divides $64$, so the fifth powers are set apart."
                },
                {
                  "step": "$\\sqrt[5]{64x^7} = \\sqrt[5]{32} \\times \\sqrt[5]{x^5} \\times \\sqrt[5]{2x^2}$",
                  "reason": "The root of a product is the product of the roots, for fifth roots of all real numbers, which gives each fifth power a root of its own."
                },
                {
                  "step": "$\\sqrt[5]{32} = 2$",
                  "reason": "The radical sign with index $5$ names the number whose fifth power is $32$, and $2^5 = 32$."
                },
                {
                  "step": "$\\sqrt[5]{x^5} = x$",
                  "reason": "The power $x^5$ is the fifth power of $x$, and by the definition of $x^{1/n}$ for odd $n$ the fifth root of $x^5$ is the one real number whose fifth power is $x^5$."
                },
                {
                  "step": "$\\sqrt[5]{64x^7} = 2x\\sqrt[5]{2x^2}$",
                  "reason": "Replacing the two roots by their values gives the answer, and nothing under the root is a fifth power, so this is simplest radical form."
                }
              ]
            },
            {
              "prompt": "Simplify $\\sqrt[3]{250z^8}$.",
              "form": "Answer in simplest radical form, as in 3*x^2*sqrt(2*x).",
              "answer": "5*z^2*(2*z^2)^(1/3)",
              "lines": [
                {
                  "step": "$250z^8 = 125 \\times z^6 \\times 2z^2$",
                  "reason": "The product law gives $z^8 = z^6 \\times z^2$, and $125$ is the largest third power that divides $250$, so the third powers are set apart."
                },
                {
                  "step": "$\\sqrt[3]{250z^8} = \\sqrt[3]{125} \\times \\sqrt[3]{z^6} \\times \\sqrt[3]{2z^2}$",
                  "reason": "The root of a product is the product of the roots, for cube roots of all real numbers, which gives each third power a root of its own."
                },
                {
                  "step": "$\\sqrt[3]{125} = 5$",
                  "reason": "The radical sign with index $3$ names the number whose third power is $125$, and $5^3 = 125$."
                },
                {
                  "step": "$\\sqrt[3]{z^6} = z^2$",
                  "reason": "The power law for whole exponents gives $(z^2)^3 = z^6$, and by the definition of $x^{1/n}$ for odd $n$ the cube root of $z^6$ is the one real number whose third power is $z^6$."
                },
                {
                  "step": "$\\sqrt[3]{250z^8} = 5z^2\\sqrt[3]{2z^2}$",
                  "reason": "Replacing the two roots by their values gives the answer, and nothing under the root is a third power, so this is simplest radical form."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $\\sqrt[5]{-\\dfrac{3072}{3125}}$.",
            "lines": [
              {
                "step": "$\\sqrt[5]{-\\dfrac{3072}{3125}} = -\\sqrt[5]{\\dfrac{3072}{3125}}$",
                "reason": "By the sign of a power of a negative number, an odd power of a negative number is negative, so the fifth root of $-\\frac{3072}{3125}$ is the opposite of the fifth root of $\\frac{3072}{3125}$."
              },
              {
                "step": "$\\sqrt[5]{\\dfrac{3072}{3125}} = \\dfrac{\\sqrt[5]{3072}}{\\sqrt[5]{3125}}$",
                "reason": "The root of a quotient is the quotient of the roots, for fifth roots as for square roots, which leaves two roots of whole numbers."
              },
              {
                "step": "$\\sqrt[5]{3072} = \\sqrt[5]{1024 \\times 3}$",
                "reason": "The number $1024$ is the largest fifth power that divides $3072$, and simplest radical form leaves no fifth-power factor under the root, so $1024$ is set apart."
              },
              {
                "step": "$\\sqrt[5]{1024 \\times 3} = \\sqrt[5]{1024} \\times \\sqrt[5]{3}$",
                "reason": "The root of a product is the product of the roots for nonnegative numbers, which puts the fifth power under a root of its own."
              },
              {
                "step": "$\\sqrt[5]{1024} \\times \\sqrt[5]{3} = 4\\sqrt[5]{3}$",
                "reason": "The radical sign names the nonnegative number whose fifth power is $1024$, which is $4$, and $3$ has no fifth-power factor greater than $1$, so the top is in simplest radical form."
              },
              {
                "step": "$\\sqrt[5]{3125} = 5$",
                "reason": "The radical sign names the nonnegative number whose fifth power is $3125$, and $5^5 = 3125$, so the bottom is a whole number."
              },
              {
                "step": "$\\sqrt[5]{\\dfrac{3072}{3125}} = \\dfrac{4\\sqrt[5]{3}}{5}$",
                "reason": "Replacing the top and the bottom by these values gives one fraction in simplest radical form, with no fifth-power factor left under the root."
              },
              {
                "step": "$\\sqrt[5]{-\\dfrac{3072}{3125}} = -\\dfrac{4\\sqrt[5]{3}}{5}$",
                "reason": "Replacing the root in the first line by its value keeps the minus sign in front."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\sqrt[3]{-\\dfrac{513}{64}}$.",
              "form": "Answer in simplest radical form, as in 6*2^(1/3).",
              "answer": "-3*19^(1/3)/4",
              "lines": [
                {
                  "step": "$\\sqrt[3]{-\\dfrac{513}{64}} = -\\sqrt[3]{\\dfrac{513}{64}}$",
                  "reason": "By the sign of a power of a negative number, an odd power of a negative number is negative, so the cube root of $-\\frac{513}{64}$ is the opposite of the cube root of $\\frac{513}{64}$."
                },
                {
                  "step": "$\\sqrt[3]{\\dfrac{513}{64}} = \\dfrac{\\sqrt[3]{513}}{\\sqrt[3]{64}}$",
                  "reason": "The root of a quotient is the quotient of the roots, for cube roots as for square roots, which leaves two roots of whole numbers."
                },
                {
                  "step": "$\\sqrt[3]{513} = \\sqrt[3]{27 \\times 19}$",
                  "reason": "The number $27$ is the largest third power that divides $513$, and simplest radical form leaves no third-power factor under the root, so $27$ is set apart."
                },
                {
                  "step": "$\\sqrt[3]{27 \\times 19} = \\sqrt[3]{27} \\times \\sqrt[3]{19}$",
                  "reason": "The root of a product is the product of the roots for nonnegative numbers, which puts the third power under a root of its own."
                },
                {
                  "step": "$\\sqrt[3]{27} \\times \\sqrt[3]{19} = 3\\sqrt[3]{19}$",
                  "reason": "The radical sign names the nonnegative number whose third power is $27$, which is $3$, and $19$ has no third-power factor greater than $1$, so the top is in simplest radical form."
                },
                {
                  "step": "$\\sqrt[3]{64} = 4$",
                  "reason": "The radical sign names the nonnegative number whose third power is $64$, and $4^3 = 64$, so the bottom is a whole number."
                },
                {
                  "step": "$\\sqrt[3]{\\dfrac{513}{64}} = \\dfrac{3\\sqrt[3]{19}}{4}$",
                  "reason": "Replacing the top and the bottom by these values gives one fraction in simplest radical form, with no third-power factor left under the root."
                },
                {
                  "step": "$\\sqrt[3]{-\\dfrac{513}{64}} = -\\dfrac{3\\sqrt[3]{19}}{4}$",
                  "reason": "Replacing the root in the first line by its value keeps the minus sign in front."
                }
              ]
            },
            {
              "prompt": "Simplify $\\sqrt[3]{-\\dfrac{1331}{27}}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-11/3",
              "lines": [
                {
                  "step": "$\\sqrt[3]{-\\dfrac{1331}{27}} = -\\sqrt[3]{\\dfrac{1331}{27}}$",
                  "reason": "By the sign of a power of a negative number, an odd power of a negative number is negative, so the cube root of $-\\frac{1331}{27}$ is the opposite of the cube root of $\\frac{1331}{27}$."
                },
                {
                  "step": "$\\sqrt[3]{\\dfrac{1331}{27}} = \\dfrac{\\sqrt[3]{1331}}{\\sqrt[3]{27}}$",
                  "reason": "The root of a quotient is the quotient of the roots, for cube roots as for square roots, which leaves two roots of whole numbers."
                },
                {
                  "step": "$\\sqrt[3]{1331} = 11$",
                  "reason": "The radical sign names the nonnegative number whose third power is $1331$, and $11^3 = 1331$, so the top is a whole number."
                },
                {
                  "step": "$\\sqrt[3]{27} = 3$",
                  "reason": "The radical sign names the nonnegative number whose third power is $27$, and $3^3 = 27$, so the bottom is a whole number."
                },
                {
                  "step": "$\\sqrt[3]{\\dfrac{1331}{27}} = \\dfrac{11}{3}$",
                  "reason": "Replacing the top and the bottom by these values gives a fraction in lowest terms, with no root left."
                },
                {
                  "step": "$\\sqrt[3]{-\\dfrac{1331}{27}} = -\\dfrac{11}{3}$",
                  "reason": "Replacing the root in the first line by its value keeps the minus sign in front."
                }
              ]
            },
            {
              "prompt": "Simplify $\\sqrt[3]{-\\dfrac{448}{125}}$.",
              "form": "Answer in simplest radical form, as in 6*2^(1/3).",
              "answer": "-4*7^(1/3)/5",
              "lines": [
                {
                  "step": "$\\sqrt[3]{-\\dfrac{448}{125}} = -\\sqrt[3]{\\dfrac{448}{125}}$",
                  "reason": "By the sign of a power of a negative number, an odd power of a negative number is negative, so the cube root of $-\\frac{448}{125}$ is the opposite of the cube root of $\\frac{448}{125}$."
                },
                {
                  "step": "$\\sqrt[3]{\\dfrac{448}{125}} = \\dfrac{\\sqrt[3]{448}}{\\sqrt[3]{125}}$",
                  "reason": "The root of a quotient is the quotient of the roots, for cube roots as for square roots, which leaves two roots of whole numbers."
                },
                {
                  "step": "$\\sqrt[3]{448} = \\sqrt[3]{64 \\times 7}$",
                  "reason": "The number $64$ is the largest third power that divides $448$, and simplest radical form leaves no third-power factor under the root, so $64$ is set apart."
                },
                {
                  "step": "$\\sqrt[3]{64 \\times 7} = \\sqrt[3]{64} \\times \\sqrt[3]{7}$",
                  "reason": "The root of a product is the product of the roots for nonnegative numbers, which puts the third power under a root of its own."
                },
                {
                  "step": "$\\sqrt[3]{64} \\times \\sqrt[3]{7} = 4\\sqrt[3]{7}$",
                  "reason": "The radical sign names the nonnegative number whose third power is $64$, which is $4$, and $7$ has no third-power factor greater than $1$, so the top is in simplest radical form."
                },
                {
                  "step": "$\\sqrt[3]{125} = 5$",
                  "reason": "The radical sign names the nonnegative number whose third power is $125$, and $5^3 = 125$, so the bottom is a whole number."
                },
                {
                  "step": "$\\sqrt[3]{\\dfrac{448}{125}} = \\dfrac{4\\sqrt[3]{7}}{5}$",
                  "reason": "Replacing the top and the bottom by these values gives one fraction in simplest radical form, with no third-power factor left under the root."
                },
                {
                  "step": "$\\sqrt[3]{-\\dfrac{448}{125}} = -\\dfrac{4\\sqrt[3]{7}}{5}$",
                  "reason": "Replacing the root in the first line by its value keeps the minus sign in front."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $\\sqrt[3]{-6.656}$.",
            "lines": [
              {
                "step": "$\\sqrt[3]{-6.656} = -\\sqrt[3]{6.656}$",
                "reason": "By the sign of a power of a negative number, an odd power of a negative number is negative, so the cube root of $-6.656$ is the opposite of the cube root of $6.656$."
              },
              {
                "step": "$6.656 = \\dfrac{6656}{1000}$",
                "reason": "A finite decimal is a fraction over a power of $10$, which turns the decimal into a fraction."
              },
              {
                "step": "$\\dfrac{6656}{1000} = \\dfrac{832}{125}$",
                "reason": "A fraction in lowest terms: dividing top and bottom by $8$ leaves a third power on the bottom, ready for the root of a quotient."
              },
              {
                "step": "$\\sqrt[3]{6.656} = \\sqrt[3]{\\dfrac{832}{125}}$",
                "reason": "Replacing the decimal by the equal fraction leaves a fraction under the root."
              },
              {
                "step": "$\\sqrt[3]{\\dfrac{832}{125}} = \\dfrac{\\sqrt[3]{832}}{\\sqrt[3]{125}}$",
                "reason": "The root of a quotient is the quotient of the roots, for cube roots as for square roots, which leaves two roots of whole numbers."
              },
              {
                "step": "$\\sqrt[3]{832} = \\sqrt[3]{64 \\times 13}$",
                "reason": "The number $64$ is the largest third power that divides $832$, and simplest radical form leaves no third-power factor under the root, so $64$ is set apart."
              },
              {
                "step": "$\\sqrt[3]{64 \\times 13} = \\sqrt[3]{64} \\times \\sqrt[3]{13}$",
                "reason": "The root of a product is the product of the roots for nonnegative numbers, which puts the third power under a root of its own."
              },
              {
                "step": "$\\sqrt[3]{64} \\times \\sqrt[3]{13} = 4\\sqrt[3]{13}$",
                "reason": "The radical sign names the nonnegative number whose third power is $64$, which is $4$, and $13$ has no third-power factor greater than $1$, so the top is in simplest radical form."
              },
              {
                "step": "$\\sqrt[3]{125} = 5$",
                "reason": "The radical sign names the nonnegative number whose third power is $125$, and $5^3 = 125$, so the bottom is a whole number."
              },
              {
                "step": "$\\sqrt[3]{6.656} = \\dfrac{4\\sqrt[3]{13}}{5}$",
                "reason": "Replacing the top and the bottom by these values gives one fraction in simplest radical form, with no third-power factor left under the root."
              },
              {
                "step": "$\\sqrt[3]{-6.656} = -\\dfrac{4\\sqrt[3]{13}}{5}$",
                "reason": "Replacing the root in the first line by its value keeps the minus sign in front."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\sqrt[3]{3.672}$.",
              "form": "Answer in simplest radical form, as in 6*2^(1/3).",
              "answer": "3*17^(1/3)/5",
              "lines": [
                {
                  "step": "$3.672 = \\dfrac{3672}{1000}$",
                  "reason": "A finite decimal is a fraction over a power of $10$, which turns the decimal into a fraction."
                },
                {
                  "step": "$\\dfrac{3672}{1000} = \\dfrac{459}{125}$",
                  "reason": "A fraction in lowest terms: dividing top and bottom by $8$ leaves a third power on the bottom, ready for the root of a quotient."
                },
                {
                  "step": "$\\sqrt[3]{3.672} = \\sqrt[3]{\\dfrac{459}{125}}$",
                  "reason": "Replacing the decimal by the equal fraction leaves a fraction under the root."
                },
                {
                  "step": "$\\sqrt[3]{\\dfrac{459}{125}} = \\dfrac{\\sqrt[3]{459}}{\\sqrt[3]{125}}$",
                  "reason": "The root of a quotient is the quotient of the roots, for cube roots as for square roots, which leaves two roots of whole numbers."
                },
                {
                  "step": "$\\sqrt[3]{459} = \\sqrt[3]{27 \\times 17}$",
                  "reason": "The number $27$ is the largest third power that divides $459$, and simplest radical form leaves no third-power factor under the root, so $27$ is set apart."
                },
                {
                  "step": "$\\sqrt[3]{27 \\times 17} = \\sqrt[3]{27} \\times \\sqrt[3]{17}$",
                  "reason": "The root of a product is the product of the roots for nonnegative numbers, which puts the third power under a root of its own."
                },
                {
                  "step": "$\\sqrt[3]{27} \\times \\sqrt[3]{17} = 3\\sqrt[3]{17}$",
                  "reason": "The radical sign names the nonnegative number whose third power is $27$, which is $3$, and $17$ has no third-power factor greater than $1$, so the top is in simplest radical form."
                },
                {
                  "step": "$\\sqrt[3]{125} = 5$",
                  "reason": "The radical sign names the nonnegative number whose third power is $125$, and $5^3 = 125$, so the bottom is a whole number."
                },
                {
                  "step": "$\\sqrt[3]{3.672} = \\dfrac{3\\sqrt[3]{17}}{5}$",
                  "reason": "Replacing the top and the bottom by these values gives one fraction in simplest radical form, with no third-power factor left under the root."
                }
              ]
            },
            {
              "prompt": "Simplify $\\sqrt[3]{-4.096}$.",
              "form": "Answer as a fraction in lowest terms.",
              "answer": "-8/5",
              "lines": [
                {
                  "step": "$\\sqrt[3]{-4.096} = -\\sqrt[3]{4.096}$",
                  "reason": "By the sign of a power of a negative number, an odd power of a negative number is negative, so the cube root of $-4.096$ is the opposite of the cube root of $4.096$."
                },
                {
                  "step": "$4.096 = \\dfrac{4096}{1000}$",
                  "reason": "A finite decimal is a fraction over a power of $10$, which turns the decimal into a fraction."
                },
                {
                  "step": "$\\dfrac{4096}{1000} = \\dfrac{512}{125}$",
                  "reason": "A fraction in lowest terms: dividing top and bottom by $8$ leaves a third power on the bottom, ready for the root of a quotient."
                },
                {
                  "step": "$\\sqrt[3]{4.096} = \\sqrt[3]{\\dfrac{512}{125}}$",
                  "reason": "Replacing the decimal by the equal fraction leaves a fraction under the root."
                },
                {
                  "step": "$\\sqrt[3]{\\dfrac{512}{125}} = \\dfrac{\\sqrt[3]{512}}{\\sqrt[3]{125}}$",
                  "reason": "The root of a quotient is the quotient of the roots, for cube roots as for square roots, which leaves two roots of whole numbers."
                },
                {
                  "step": "$\\sqrt[3]{512} = 8$",
                  "reason": "The radical sign names the nonnegative number whose third power is $512$, and $8^3 = 512$, so the top is a whole number."
                },
                {
                  "step": "$\\sqrt[3]{125} = 5$",
                  "reason": "The radical sign names the nonnegative number whose third power is $125$, and $5^3 = 125$, so the bottom is a whole number."
                },
                {
                  "step": "$\\sqrt[3]{4.096} = \\dfrac{8}{5}$",
                  "reason": "Replacing the top and the bottom by these values gives a fraction in lowest terms, with no root left."
                },
                {
                  "step": "$\\sqrt[3]{-4.096} = -\\dfrac{8}{5}$",
                  "reason": "Replacing the root in the first line by its value keeps the minus sign in front."
                }
              ]
            },
            {
              "prompt": "Simplify $\\sqrt[3]{-3.024}$.",
              "form": "Answer in simplest radical form, as in 6*2^(1/3).",
              "answer": "-3*14^(1/3)/5",
              "lines": [
                {
                  "step": "$\\sqrt[3]{-3.024} = -\\sqrt[3]{3.024}$",
                  "reason": "By the sign of a power of a negative number, an odd power of a negative number is negative, so the cube root of $-3.024$ is the opposite of the cube root of $3.024$."
                },
                {
                  "step": "$3.024 = \\dfrac{3024}{1000}$",
                  "reason": "A finite decimal is a fraction over a power of $10$, which turns the decimal into a fraction."
                },
                {
                  "step": "$\\dfrac{3024}{1000} = \\dfrac{378}{125}$",
                  "reason": "A fraction in lowest terms: dividing top and bottom by $8$ leaves a third power on the bottom, ready for the root of a quotient."
                },
                {
                  "step": "$\\sqrt[3]{3.024} = \\sqrt[3]{\\dfrac{378}{125}}$",
                  "reason": "Replacing the decimal by the equal fraction leaves a fraction under the root."
                },
                {
                  "step": "$\\sqrt[3]{\\dfrac{378}{125}} = \\dfrac{\\sqrt[3]{378}}{\\sqrt[3]{125}}$",
                  "reason": "The root of a quotient is the quotient of the roots, for cube roots as for square roots, which leaves two roots of whole numbers."
                },
                {
                  "step": "$\\sqrt[3]{378} = \\sqrt[3]{27 \\times 14}$",
                  "reason": "The number $27$ is the largest third power that divides $378$, and simplest radical form leaves no third-power factor under the root, so $27$ is set apart."
                },
                {
                  "step": "$\\sqrt[3]{27 \\times 14} = \\sqrt[3]{27} \\times \\sqrt[3]{14}$",
                  "reason": "The root of a product is the product of the roots for nonnegative numbers, which puts the third power under a root of its own."
                },
                {
                  "step": "$\\sqrt[3]{27} \\times \\sqrt[3]{14} = 3\\sqrt[3]{14}$",
                  "reason": "The radical sign names the nonnegative number whose third power is $27$, which is $3$, and $14$ has no third-power factor greater than $1$, so the top is in simplest radical form."
                },
                {
                  "step": "$\\sqrt[3]{125} = 5$",
                  "reason": "The radical sign names the nonnegative number whose third power is $125$, and $5^3 = 125$, so the bottom is a whole number."
                },
                {
                  "step": "$\\sqrt[3]{3.024} = \\dfrac{3\\sqrt[3]{14}}{5}$",
                  "reason": "Replacing the top and the bottom by these values gives one fraction in simplest radical form, with no third-power factor left under the root."
                },
                {
                  "step": "$\\sqrt[3]{-3.024} = -\\dfrac{3\\sqrt[3]{14}}{5}$",
                  "reason": "Replacing the root in the first line by its value keeps the minus sign in front."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t104-k3",
      "forms": [
        {
          "example": {
            "problem": "Simplify $5\\sqrt{2} + 3\\sqrt{7} - 2\\sqrt{2} + \\sqrt{7}$.",
            "lines": [
              {
                "step": "$5\\sqrt{2} + 3\\sqrt{7} - 2\\sqrt{2} + \\sqrt{7} = (5\\sqrt{2} - 2\\sqrt{2}) + (3\\sqrt{7} + \\sqrt{7})$",
                "reason": "Like radicals have the same index and the same number under the root, and the commutative law of addition brings them side by side."
              },
              {
                "step": "$(5\\sqrt{2} - 2\\sqrt{2}) + (3\\sqrt{7} + \\sqrt{7}) = (5 - 2)\\sqrt{2} + (3 + 1)\\sqrt{7}$",
                "reason": "The distributive law collects like radicals: the numbers in front are added and the root is kept."
              },
              {
                "step": "$(5 - 2)\\sqrt{2} + (3 + 1)\\sqrt{7} = 3\\sqrt{2} + 4\\sqrt{7}$",
                "reason": "The sums in brackets are worked out, and $\\sqrt{2}$ and $\\sqrt{7}$ are not like radicals, so the two terms stay apart."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $4\\sqrt{3} + 2\\sqrt{5} + 3\\sqrt{3} + 6\\sqrt{5}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "7*sqrt(3)+8*sqrt(5)",
              "lines": [
                {
                  "step": "$4\\sqrt{3} + 2\\sqrt{5} + 3\\sqrt{3} + 6\\sqrt{5} = (4\\sqrt{3} + 3\\sqrt{3}) + (2\\sqrt{5} + 6\\sqrt{5})$",
                  "reason": "Like radicals have the same index and the same number under the root, and the commutative law of addition brings them side by side."
                },
                {
                  "step": "$(4\\sqrt{3} + 3\\sqrt{3}) + (2\\sqrt{5} + 6\\sqrt{5}) = (4 + 3)\\sqrt{3} + (2 + 6)\\sqrt{5}$",
                  "reason": "The distributive law collects like radicals: the numbers in front are added and the root is kept."
                },
                {
                  "step": "$(4 + 3)\\sqrt{3} + (2 + 6)\\sqrt{5} = 7\\sqrt{3} + 8\\sqrt{5}$",
                  "reason": "The sums in brackets are worked out, and $\\sqrt{3}$ and $\\sqrt{5}$ are not like radicals, so the two terms stay apart."
                }
              ]
            },
            {
              "prompt": "Simplify $6\\sqrt{5} + 5\\sqrt{2} - 4\\sqrt{5} - 2\\sqrt{2}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "2*sqrt(5)+3*sqrt(2)",
              "lines": [
                {
                  "step": "$6\\sqrt{5} + 5\\sqrt{2} - 4\\sqrt{5} - 2\\sqrt{2} = (6\\sqrt{5} - 4\\sqrt{5}) + (5\\sqrt{2} - 2\\sqrt{2})$",
                  "reason": "Like radicals have the same index and the same number under the root, and the commutative law of addition brings them side by side."
                },
                {
                  "step": "$(6\\sqrt{5} - 4\\sqrt{5}) + (5\\sqrt{2} - 2\\sqrt{2}) = (6 - 4)\\sqrt{5} + (5 - 2)\\sqrt{2}$",
                  "reason": "The distributive law collects like radicals: the numbers in front are added and the root is kept."
                },
                {
                  "step": "$(6 - 4)\\sqrt{5} + (5 - 2)\\sqrt{2} = 2\\sqrt{5} + 3\\sqrt{2}$",
                  "reason": "The sums in brackets are worked out, and $\\sqrt{5}$ and $\\sqrt{2}$ are not like radicals, so the two terms stay apart."
                }
              ]
            },
            {
              "prompt": "Simplify $2\\sqrt{7} + 9\\sqrt{3} + 5\\sqrt{7} - 4\\sqrt{3}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "7*sqrt(7)+5*sqrt(3)",
              "lines": [
                {
                  "step": "$2\\sqrt{7} + 9\\sqrt{3} + 5\\sqrt{7} - 4\\sqrt{3} = (2\\sqrt{7} + 5\\sqrt{7}) + (9\\sqrt{3} - 4\\sqrt{3})$",
                  "reason": "Like radicals have the same index and the same number under the root, and the commutative law of addition brings them side by side."
                },
                {
                  "step": "$(2\\sqrt{7} + 5\\sqrt{7}) + (9\\sqrt{3} - 4\\sqrt{3}) = (2 + 5)\\sqrt{7} + (9 - 4)\\sqrt{3}$",
                  "reason": "The distributive law collects like radicals: the numbers in front are added and the root is kept."
                },
                {
                  "step": "$(2 + 5)\\sqrt{7} + (9 - 4)\\sqrt{3} = 7\\sqrt{7} + 5\\sqrt{3}$",
                  "reason": "The sums in brackets are worked out, and $\\sqrt{7}$ and $\\sqrt{3}$ are not like radicals, so the two terms stay apart."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $\\sqrt{20} + \\sqrt{80} - \\sqrt{45}$.",
            "lines": [
              {
                "step": "$\\sqrt{20} = 2\\sqrt{5}$",
                "reason": "The root of a product takes the largest square factor $4$ of $20$ out as $2$, which puts the term in simplest radical form."
              },
              {
                "step": "$\\sqrt{80} = 4\\sqrt{5}$",
                "reason": "The root of a product takes the largest square factor $16$ of $80$ out as $4$, which puts the term in simplest radical form."
              },
              {
                "step": "$\\sqrt{45} = 3\\sqrt{5}$",
                "reason": "The root of a product takes the largest square factor $9$ of $45$ out as $3$, which puts the term in simplest radical form."
              },
              {
                "step": "$\\sqrt{20} + \\sqrt{80} - \\sqrt{45} = 2\\sqrt{5} + 4\\sqrt{5} - 3\\sqrt{5}$",
                "reason": "Replacing each term by its simplest form shows that the terms are like radicals."
              },
              {
                "step": "$2\\sqrt{5} + 4\\sqrt{5} - 3\\sqrt{5} = (2 + 4 - 3)\\sqrt{5}$",
                "reason": "The distributive law collects like radicals: the root is kept and the numbers in front go into one bracket."
              },
              {
                "step": "$(2 + 4 - 3)\\sqrt{5} = 3\\sqrt{5}$",
                "reason": "The sum in the bracket is worked out, which leaves one term."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\sqrt{108} - \\sqrt{27} + \\sqrt{12}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "5*sqrt(3)",
              "lines": [
                {
                  "step": "$\\sqrt{108} = 6\\sqrt{3}$",
                  "reason": "The root of a product takes the largest square factor $36$ of $108$ out as $6$, which puts the term in simplest radical form."
                },
                {
                  "step": "$\\sqrt{27} = 3\\sqrt{3}$",
                  "reason": "The root of a product takes the largest square factor $9$ of $27$ out as $3$, which puts the term in simplest radical form."
                },
                {
                  "step": "$\\sqrt{12} = 2\\sqrt{3}$",
                  "reason": "The root of a product takes the largest square factor $4$ of $12$ out as $2$, which puts the term in simplest radical form."
                },
                {
                  "step": "$\\sqrt{108} - \\sqrt{27} + \\sqrt{12} = 6\\sqrt{3} - 3\\sqrt{3} + 2\\sqrt{3}$",
                  "reason": "Replacing each term by its simplest form shows that the terms are like radicals."
                },
                {
                  "step": "$6\\sqrt{3} - 3\\sqrt{3} + 2\\sqrt{3} = (6 - 3 + 2)\\sqrt{3}$",
                  "reason": "The distributive law collects like radicals: the root is kept and the numbers in front go into one bracket."
                },
                {
                  "step": "$(6 - 3 + 2)\\sqrt{3} = 5\\sqrt{3}$",
                  "reason": "The sum in the bracket is worked out, which leaves one term."
                }
              ]
            },
            {
              "prompt": "Simplify $\\sqrt{162} - \\sqrt{128} + \\sqrt{18}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "4*sqrt(2)",
              "lines": [
                {
                  "step": "$\\sqrt{162} = 9\\sqrt{2}$",
                  "reason": "The root of a product takes the largest square factor $81$ of $162$ out as $9$, which puts the term in simplest radical form."
                },
                {
                  "step": "$\\sqrt{128} = 8\\sqrt{2}$",
                  "reason": "The root of a product takes the largest square factor $64$ of $128$ out as $8$, which puts the term in simplest radical form."
                },
                {
                  "step": "$\\sqrt{18} = 3\\sqrt{2}$",
                  "reason": "The root of a product takes the largest square factor $9$ of $18$ out as $3$, which puts the term in simplest radical form."
                },
                {
                  "step": "$\\sqrt{162} - \\sqrt{128} + \\sqrt{18} = 9\\sqrt{2} - 8\\sqrt{2} + 3\\sqrt{2}$",
                  "reason": "Replacing each term by its simplest form shows that the terms are like radicals."
                },
                {
                  "step": "$9\\sqrt{2} - 8\\sqrt{2} + 3\\sqrt{2} = (9 - 8 + 3)\\sqrt{2}$",
                  "reason": "The distributive law collects like radicals: the root is kept and the numbers in front go into one bracket."
                },
                {
                  "step": "$(9 - 8 + 3)\\sqrt{2} = 4\\sqrt{2}$",
                  "reason": "The sum in the bracket is worked out, which leaves one term."
                }
              ]
            },
            {
              "prompt": "Simplify $2\\sqrt{99} - \\sqrt{44} + \\sqrt{275}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "9*sqrt(11)",
              "lines": [
                {
                  "step": "$2\\sqrt{99} = 6\\sqrt{11}$",
                  "reason": "The root of a product takes the largest square factor $9$ of $99$ out as $3$, and $2 \\times 3 = 6$, which puts the term in simplest radical form."
                },
                {
                  "step": "$\\sqrt{44} = 2\\sqrt{11}$",
                  "reason": "The root of a product takes the largest square factor $4$ of $44$ out as $2$, which puts the term in simplest radical form."
                },
                {
                  "step": "$\\sqrt{275} = 5\\sqrt{11}$",
                  "reason": "The root of a product takes the largest square factor $25$ of $275$ out as $5$, which puts the term in simplest radical form."
                },
                {
                  "step": "$2\\sqrt{99} - \\sqrt{44} + \\sqrt{275} = 6\\sqrt{11} - 2\\sqrt{11} + 5\\sqrt{11}$",
                  "reason": "Replacing each term by its simplest form shows that the terms are like radicals."
                },
                {
                  "step": "$6\\sqrt{11} - 2\\sqrt{11} + 5\\sqrt{11} = (6 - 2 + 5)\\sqrt{11}$",
                  "reason": "The distributive law collects like radicals: the root is kept and the numbers in front go into one bracket."
                },
                {
                  "step": "$(6 - 2 + 5)\\sqrt{11} = 9\\sqrt{11}$",
                  "reason": "The sum in the bracket is worked out, which leaves one term."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $\\dfrac{\\sqrt{90} + \\sqrt{250}}{\\sqrt{125} - \\sqrt{45}}$.",
            "lines": [
              {
                "step": "$\\sqrt{90} + \\sqrt{250} = 3\\sqrt{10} + 5\\sqrt{10}$",
                "reason": "The root of a product puts each root on the top in simplest radical form, which shows like radicals."
              },
              {
                "step": "$3\\sqrt{10} + 5\\sqrt{10} = 8\\sqrt{10}$",
                "reason": "The distributive law collects like radicals: the numbers in front are added and the root is kept."
              },
              {
                "step": "$\\sqrt{125} - \\sqrt{45} = 5\\sqrt{5} - 3\\sqrt{5}$",
                "reason": "The root of a product puts each root on the bottom in simplest radical form, which shows like radicals."
              },
              {
                "step": "$5\\sqrt{5} - 3\\sqrt{5} = 2\\sqrt{5}$",
                "reason": "The distributive law collects like radicals: the numbers in front are added and the root is kept."
              },
              {
                "step": "$\\dfrac{\\sqrt{90} + \\sqrt{250}}{\\sqrt{125} - \\sqrt{45}} = \\dfrac{8\\sqrt{10}}{2\\sqrt{5}}$",
                "reason": "Replacing the top and the bottom by their collected forms gives a quotient of two single terms."
              },
              {
                "step": "$\\dfrac{8\\sqrt{10}}{2\\sqrt{5}} = 4 \\times \\dfrac{\\sqrt{10}}{\\sqrt{5}}$",
                "reason": "A fraction in lowest terms: the numbers in front are $8$ over $2$, which is $4$."
              },
              {
                "step": "$\\dfrac{\\sqrt{10}}{\\sqrt{5}} = \\sqrt{\\dfrac{10}{5}}$",
                "reason": "The root of a quotient, read from right to left, puts the two roots under one radical sign."
              },
              {
                "step": "$\\sqrt{\\dfrac{10}{5}} = \\sqrt{2}$",
                "reason": "The fraction under the root is the whole number $2$, which has no square factor greater than $1$."
              },
              {
                "step": "$\\dfrac{\\sqrt{90} + \\sqrt{250}}{\\sqrt{125} - \\sqrt{45}} = 4\\sqrt{2}$",
                "reason": "Replacing the quotient of roots by the single root gives the answer in simplest radical form."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\dfrac{\\sqrt{60} + \\sqrt{240}}{\\sqrt{75} - \\sqrt{27}}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "3*sqrt(5)",
              "lines": [
                {
                  "step": "$\\sqrt{60} + \\sqrt{240} = 2\\sqrt{15} + 4\\sqrt{15}$",
                  "reason": "The root of a product puts each root on the top in simplest radical form, which shows like radicals."
                },
                {
                  "step": "$2\\sqrt{15} + 4\\sqrt{15} = 6\\sqrt{15}$",
                  "reason": "The distributive law collects like radicals: the numbers in front are added and the root is kept."
                },
                {
                  "step": "$\\sqrt{75} - \\sqrt{27} = 5\\sqrt{3} - 3\\sqrt{3}$",
                  "reason": "The root of a product puts each root on the bottom in simplest radical form, which shows like radicals."
                },
                {
                  "step": "$5\\sqrt{3} - 3\\sqrt{3} = 2\\sqrt{3}$",
                  "reason": "The distributive law collects like radicals: the numbers in front are added and the root is kept."
                },
                {
                  "step": "$\\dfrac{\\sqrt{60} + \\sqrt{240}}{\\sqrt{75} - \\sqrt{27}} = \\dfrac{6\\sqrt{15}}{2\\sqrt{3}}$",
                  "reason": "Replacing the top and the bottom by their collected forms gives a quotient of two single terms."
                },
                {
                  "step": "$\\dfrac{6\\sqrt{15}}{2\\sqrt{3}} = 3 \\times \\dfrac{\\sqrt{15}}{\\sqrt{3}}$",
                  "reason": "A fraction in lowest terms: the numbers in front are $6$ over $2$, which is $3$."
                },
                {
                  "step": "$\\dfrac{\\sqrt{15}}{\\sqrt{3}} = \\sqrt{\\dfrac{15}{3}}$",
                  "reason": "The root of a quotient, read from right to left, puts the two roots under one radical sign."
                },
                {
                  "step": "$\\sqrt{\\dfrac{15}{3}} = \\sqrt{5}$",
                  "reason": "The fraction under the root is the whole number $5$, which has no square factor greater than $1$."
                },
                {
                  "step": "$\\dfrac{\\sqrt{60} + \\sqrt{240}}{\\sqrt{75} - \\sqrt{27}} = 3\\sqrt{5}$",
                  "reason": "Replacing the quotient of roots by the single root gives the answer in simplest radical form."
                }
              ]
            },
            {
              "prompt": "Simplify $\\dfrac{\\sqrt{126} + \\sqrt{350}}{\\sqrt{162} - \\sqrt{98}}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "4*sqrt(7)",
              "lines": [
                {
                  "step": "$\\sqrt{126} + \\sqrt{350} = 3\\sqrt{14} + 5\\sqrt{14}$",
                  "reason": "The root of a product puts each root on the top in simplest radical form, which shows like radicals."
                },
                {
                  "step": "$3\\sqrt{14} + 5\\sqrt{14} = 8\\sqrt{14}$",
                  "reason": "The distributive law collects like radicals: the numbers in front are added and the root is kept."
                },
                {
                  "step": "$\\sqrt{162} - \\sqrt{98} = 9\\sqrt{2} - 7\\sqrt{2}$",
                  "reason": "The root of a product puts each root on the bottom in simplest radical form, which shows like radicals."
                },
                {
                  "step": "$9\\sqrt{2} - 7\\sqrt{2} = 2\\sqrt{2}$",
                  "reason": "The distributive law collects like radicals: the numbers in front are added and the root is kept."
                },
                {
                  "step": "$\\dfrac{\\sqrt{126} + \\sqrt{350}}{\\sqrt{162} - \\sqrt{98}} = \\dfrac{8\\sqrt{14}}{2\\sqrt{2}}$",
                  "reason": "Replacing the top and the bottom by their collected forms gives a quotient of two single terms."
                },
                {
                  "step": "$\\dfrac{8\\sqrt{14}}{2\\sqrt{2}} = 4 \\times \\dfrac{\\sqrt{14}}{\\sqrt{2}}$",
                  "reason": "A fraction in lowest terms: the numbers in front are $8$ over $2$, which is $4$."
                },
                {
                  "step": "$\\dfrac{\\sqrt{14}}{\\sqrt{2}} = \\sqrt{\\dfrac{14}{2}}$",
                  "reason": "The root of a quotient, read from right to left, puts the two roots under one radical sign."
                },
                {
                  "step": "$\\sqrt{\\dfrac{14}{2}} = \\sqrt{7}$",
                  "reason": "The fraction under the root is the whole number $7$, which has no square factor greater than $1$."
                },
                {
                  "step": "$\\dfrac{\\sqrt{126} + \\sqrt{350}}{\\sqrt{162} - \\sqrt{98}} = 4\\sqrt{7}$",
                  "reason": "Replacing the quotient of roots by the single root gives the answer in simplest radical form."
                }
              ]
            },
            {
              "prompt": "Simplify $\\dfrac{\\sqrt{132} + \\sqrt{528}}{\\sqrt{48} - \\sqrt{12}}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "3*sqrt(11)",
              "lines": [
                {
                  "step": "$\\sqrt{132} + \\sqrt{528} = 2\\sqrt{33} + 4\\sqrt{33}$",
                  "reason": "The root of a product puts each root on the top in simplest radical form, which shows like radicals."
                },
                {
                  "step": "$2\\sqrt{33} + 4\\sqrt{33} = 6\\sqrt{33}$",
                  "reason": "The distributive law collects like radicals: the numbers in front are added and the root is kept."
                },
                {
                  "step": "$\\sqrt{48} - \\sqrt{12} = 4\\sqrt{3} - 2\\sqrt{3}$",
                  "reason": "The root of a product puts each root on the bottom in simplest radical form, which shows like radicals."
                },
                {
                  "step": "$4\\sqrt{3} - 2\\sqrt{3} = 2\\sqrt{3}$",
                  "reason": "The distributive law collects like radicals: the numbers in front are added and the root is kept."
                },
                {
                  "step": "$\\dfrac{\\sqrt{132} + \\sqrt{528}}{\\sqrt{48} - \\sqrt{12}} = \\dfrac{6\\sqrt{33}}{2\\sqrt{3}}$",
                  "reason": "Replacing the top and the bottom by their collected forms gives a quotient of two single terms."
                },
                {
                  "step": "$\\dfrac{6\\sqrt{33}}{2\\sqrt{3}} = 3 \\times \\dfrac{\\sqrt{33}}{\\sqrt{3}}$",
                  "reason": "A fraction in lowest terms: the numbers in front are $6$ over $2$, which is $3$."
                },
                {
                  "step": "$\\dfrac{\\sqrt{33}}{\\sqrt{3}} = \\sqrt{\\dfrac{33}{3}}$",
                  "reason": "The root of a quotient, read from right to left, puts the two roots under one radical sign."
                },
                {
                  "step": "$\\sqrt{\\dfrac{33}{3}} = \\sqrt{11}$",
                  "reason": "The fraction under the root is the whole number $11$, which has no square factor greater than $1$."
                },
                {
                  "step": "$\\dfrac{\\sqrt{132} + \\sqrt{528}}{\\sqrt{48} - \\sqrt{12}} = 3\\sqrt{11}$",
                  "reason": "Replacing the quotient of roots by the single root gives the answer in simplest radical form."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $\\sqrt{\\dfrac{18}{25}} + \\sqrt{8} - \\sqrt{\\dfrac{32}{25}}$.",
            "lines": [
              {
                "step": "$\\sqrt{\\dfrac{18}{25}} = \\dfrac{3\\sqrt{2}}{5}$",
                "reason": "The root of a quotient gives $\\sqrt{18}$ over $\\sqrt{25}$, which is $3\\sqrt{2}$ over $5$ in simplest radical form."
              },
              {
                "step": "$\\sqrt{8} = 2\\sqrt{2}$",
                "reason": "The root of a product takes the largest square factor $4$ of $8$ out as $2$, which puts the term in simplest radical form."
              },
              {
                "step": "$\\sqrt{\\dfrac{32}{25}} = \\dfrac{4\\sqrt{2}}{5}$",
                "reason": "The root of a quotient gives $\\sqrt{32}$ over $\\sqrt{25}$, which is $4\\sqrt{2}$ over $5$ in simplest radical form."
              },
              {
                "step": "$\\sqrt{\\dfrac{18}{25}} + \\sqrt{8} - \\sqrt{\\dfrac{32}{25}} = \\dfrac{3\\sqrt{2}}{5} + 2\\sqrt{2} - \\dfrac{4\\sqrt{2}}{5}$",
                "reason": "Replacing each term by its simplest form shows that the terms are like radicals."
              },
              {
                "step": "$\\dfrac{3\\sqrt{2}}{5} + 2\\sqrt{2} - \\dfrac{4\\sqrt{2}}{5} = \\left(\\dfrac{3}{5} + 2 - \\dfrac{4}{5}\\right)\\sqrt{2}$",
                "reason": "The distributive law collects like radicals: the root is kept and the numbers in front go into one bracket."
              },
              {
                "step": "$\\left(\\dfrac{3}{5} + 2 - \\dfrac{4}{5}\\right)\\sqrt{2} = \\dfrac{9\\sqrt{2}}{5}$",
                "reason": "The numbers in the bracket are added as fractions with a common denominator, which leaves one term."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\sqrt{\\dfrac{27}{4}} + \\sqrt{48} - \\sqrt{\\dfrac{147}{4}}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "2*sqrt(3)",
              "lines": [
                {
                  "step": "$\\sqrt{\\dfrac{27}{4}} = \\dfrac{3\\sqrt{3}}{2}$",
                  "reason": "The root of a quotient gives $\\sqrt{27}$ over $\\sqrt{4}$, which is $3\\sqrt{3}$ over $2$ in simplest radical form."
                },
                {
                  "step": "$\\sqrt{48} = 4\\sqrt{3}$",
                  "reason": "The root of a product takes the largest square factor $16$ of $48$ out as $4$, which puts the term in simplest radical form."
                },
                {
                  "step": "$\\sqrt{\\dfrac{147}{4}} = \\dfrac{7\\sqrt{3}}{2}$",
                  "reason": "The root of a quotient gives $\\sqrt{147}$ over $\\sqrt{4}$, which is $7\\sqrt{3}$ over $2$ in simplest radical form."
                },
                {
                  "step": "$\\sqrt{\\dfrac{27}{4}} + \\sqrt{48} - \\sqrt{\\dfrac{147}{4}} = \\dfrac{3\\sqrt{3}}{2} + 4\\sqrt{3} - \\dfrac{7\\sqrt{3}}{2}$",
                  "reason": "Replacing each term by its simplest form shows that the terms are like radicals."
                },
                {
                  "step": "$\\dfrac{3\\sqrt{3}}{2} + 4\\sqrt{3} - \\dfrac{7\\sqrt{3}}{2} = \\left(\\dfrac{3}{2} + 4 - \\dfrac{7}{2}\\right)\\sqrt{3}$",
                  "reason": "The distributive law collects like radicals: the root is kept and the numbers in front go into one bracket."
                },
                {
                  "step": "$\\left(\\dfrac{3}{2} + 4 - \\dfrac{7}{2}\\right)\\sqrt{3} = 2\\sqrt{3}$",
                  "reason": "The numbers in the bracket are added as fractions with a common denominator, which leaves one term."
                }
              ]
            },
            {
              "prompt": "Simplify $\\sqrt{\\dfrac{20}{9}} + \\sqrt{45} - \\sqrt{\\dfrac{80}{9}}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "7*sqrt(5)/3",
              "lines": [
                {
                  "step": "$\\sqrt{\\dfrac{20}{9}} = \\dfrac{2\\sqrt{5}}{3}$",
                  "reason": "The root of a quotient gives $\\sqrt{20}$ over $\\sqrt{9}$, which is $2\\sqrt{5}$ over $3$ in simplest radical form."
                },
                {
                  "step": "$\\sqrt{45} = 3\\sqrt{5}$",
                  "reason": "The root of a product takes the largest square factor $9$ of $45$ out as $3$, which puts the term in simplest radical form."
                },
                {
                  "step": "$\\sqrt{\\dfrac{80}{9}} = \\dfrac{4\\sqrt{5}}{3}$",
                  "reason": "The root of a quotient gives $\\sqrt{80}$ over $\\sqrt{9}$, which is $4\\sqrt{5}$ over $3$ in simplest radical form."
                },
                {
                  "step": "$\\sqrt{\\dfrac{20}{9}} + \\sqrt{45} - \\sqrt{\\dfrac{80}{9}} = \\dfrac{2\\sqrt{5}}{3} + 3\\sqrt{5} - \\dfrac{4\\sqrt{5}}{3}$",
                  "reason": "Replacing each term by its simplest form shows that the terms are like radicals."
                },
                {
                  "step": "$\\dfrac{2\\sqrt{5}}{3} + 3\\sqrt{5} - \\dfrac{4\\sqrt{5}}{3} = \\left(\\dfrac{2}{3} + 3 - \\dfrac{4}{3}\\right)\\sqrt{5}$",
                  "reason": "The distributive law collects like radicals: the root is kept and the numbers in front go into one bracket."
                },
                {
                  "step": "$\\left(\\dfrac{2}{3} + 3 - \\dfrac{4}{3}\\right)\\sqrt{5} = \\dfrac{7\\sqrt{5}}{3}$",
                  "reason": "The numbers in the bracket are added as fractions with a common denominator, which leaves one term."
                }
              ]
            },
            {
              "prompt": "Simplify $\\sqrt{\\dfrac{28}{25}} + \\sqrt{\\dfrac{112}{25}} - \\sqrt{63}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "-9*sqrt(7)/5",
              "lines": [
                {
                  "step": "$\\sqrt{\\dfrac{28}{25}} = \\dfrac{2\\sqrt{7}}{5}$",
                  "reason": "The root of a quotient gives $\\sqrt{28}$ over $\\sqrt{25}$, which is $2\\sqrt{7}$ over $5$ in simplest radical form."
                },
                {
                  "step": "$\\sqrt{\\dfrac{112}{25}} = \\dfrac{4\\sqrt{7}}{5}$",
                  "reason": "The root of a quotient gives $\\sqrt{112}$ over $\\sqrt{25}$, which is $4\\sqrt{7}$ over $5$ in simplest radical form."
                },
                {
                  "step": "$\\sqrt{63} = 3\\sqrt{7}$",
                  "reason": "The root of a product takes the largest square factor $9$ of $63$ out as $3$, which puts the term in simplest radical form."
                },
                {
                  "step": "$\\sqrt{\\dfrac{28}{25}} + \\sqrt{\\dfrac{112}{25}} - \\sqrt{63} = \\dfrac{2\\sqrt{7}}{5} + \\dfrac{4\\sqrt{7}}{5} - 3\\sqrt{7}$",
                  "reason": "Replacing each term by its simplest form shows that the terms are like radicals."
                },
                {
                  "step": "$\\dfrac{2\\sqrt{7}}{5} + \\dfrac{4\\sqrt{7}}{5} - 3\\sqrt{7} = \\left(\\dfrac{2}{5} + \\dfrac{4}{5} - 3\\right)\\sqrt{7}$",
                  "reason": "The distributive law collects like radicals: the root is kept and the numbers in front go into one bracket."
                },
                {
                  "step": "$\\left(\\dfrac{2}{5} + \\dfrac{4}{5} - 3\\right)\\sqrt{7} = -\\dfrac{9\\sqrt{7}}{5}$",
                  "reason": "The numbers in the bracket are added as fractions with a common denominator, which leaves one term."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $\\sqrt{12x^3} + \\sqrt{27x^3}$, where $x \\ge 0$.",
            "lines": [
              {
                "step": "$\\sqrt{12x^3} = 2x\\sqrt{3x}$",
                "reason": "The root of a product takes the square factors $4$ and $x^2$ out as $2$ and $x$, the letter being nonnegative, which puts the term in simplest radical form."
              },
              {
                "step": "$\\sqrt{27x^3} = 3x\\sqrt{3x}$",
                "reason": "The root of a product takes the square factors $9$ and $x^2$ out as $3$ and $x$, the letter being nonnegative, which puts the term in simplest radical form."
              },
              {
                "step": "$\\sqrt{12x^3} + \\sqrt{27x^3} = 2x\\sqrt{3x} + 3x\\sqrt{3x}$",
                "reason": "Replacing each term by its simplest form shows that the terms are like radicals."
              },
              {
                "step": "$2x\\sqrt{3x} + 3x\\sqrt{3x} = (2 + 3)x\\sqrt{3x}$",
                "reason": "The distributive law collects like radicals: the root is kept and the numbers in front go into one bracket."
              },
              {
                "step": "$(2 + 3)x\\sqrt{3x} = 5x\\sqrt{3x}$",
                "reason": "The sum in the bracket is worked out, which leaves one term."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $\\sqrt{50y^5} - \\sqrt{8y^5}$, where $y \\ge 0$.",
              "form": "Answer in simplest radical form, as in 3*x^2*sqrt(2*x).",
              "answer": "3*y^2*sqrt(2*y)",
              "lines": [
                {
                  "step": "$\\sqrt{50y^5} = 5y^2\\sqrt{2y}$",
                  "reason": "The root of a product takes the square factors $25$ and $y^4$ out as $5$ and $y^2$, the letter being nonnegative, which puts the term in simplest radical form."
                },
                {
                  "step": "$\\sqrt{8y^5} = 2y^2\\sqrt{2y}$",
                  "reason": "The root of a product takes the square factors $4$ and $y^4$ out as $2$ and $y^2$, the letter being nonnegative, which puts the term in simplest radical form."
                },
                {
                  "step": "$\\sqrt{50y^5} - \\sqrt{8y^5} = 5y^2\\sqrt{2y} - 2y^2\\sqrt{2y}$",
                  "reason": "Replacing each term by its simplest form shows that the terms are like radicals."
                },
                {
                  "step": "$5y^2\\sqrt{2y} - 2y^2\\sqrt{2y} = (5 - 2)y^2\\sqrt{2y}$",
                  "reason": "The distributive law collects like radicals: the root is kept and the numbers in front go into one bracket."
                },
                {
                  "step": "$(5 - 2)y^2\\sqrt{2y} = 3y^2\\sqrt{2y}$",
                  "reason": "The sum in the bracket is worked out, which leaves one term."
                }
              ]
            },
            {
              "prompt": "Simplify $\\sqrt{20z^3} + \\sqrt{45z^3}$, where $z \\ge 0$.",
              "form": "Answer in simplest radical form, as in 3*x^2*sqrt(2*x).",
              "answer": "5*z*sqrt(5*z)",
              "lines": [
                {
                  "step": "$\\sqrt{20z^3} = 2z\\sqrt{5z}$",
                  "reason": "The root of a product takes the square factors $4$ and $z^2$ out as $2$ and $z$, the letter being nonnegative, which puts the term in simplest radical form."
                },
                {
                  "step": "$\\sqrt{45z^3} = 3z\\sqrt{5z}$",
                  "reason": "The root of a product takes the square factors $9$ and $z^2$ out as $3$ and $z$, the letter being nonnegative, which puts the term in simplest radical form."
                },
                {
                  "step": "$\\sqrt{20z^3} + \\sqrt{45z^3} = 2z\\sqrt{5z} + 3z\\sqrt{5z}$",
                  "reason": "Replacing each term by its simplest form shows that the terms are like radicals."
                },
                {
                  "step": "$2z\\sqrt{5z} + 3z\\sqrt{5z} = (2 + 3)z\\sqrt{5z}$",
                  "reason": "The distributive law collects like radicals: the root is kept and the numbers in front go into one bracket."
                },
                {
                  "step": "$(2 + 3)z\\sqrt{5z} = 5z\\sqrt{5z}$",
                  "reason": "The sum in the bracket is worked out, which leaves one term."
                }
              ]
            },
            {
              "prompt": "Simplify $2\\sqrt{44x^7} - \\sqrt{99x^7}$, where $x \\ge 0$.",
              "form": "Answer in simplest radical form, as in 3*x^2*sqrt(2*x).",
              "answer": "x^3*sqrt(11*x)",
              "lines": [
                {
                  "step": "$2\\sqrt{44x^7} = 4x^3\\sqrt{11x}$",
                  "reason": "The root of a product takes the square factors $4$ and $x^6$ out as $2$ and $x^3$, the letter being nonnegative, and $2 \\times 2 = 4$, which puts the term in simplest radical form."
                },
                {
                  "step": "$\\sqrt{99x^7} = 3x^3\\sqrt{11x}$",
                  "reason": "The root of a product takes the square factors $9$ and $x^6$ out as $3$ and $x^3$, the letter being nonnegative, which puts the term in simplest radical form."
                },
                {
                  "step": "$2\\sqrt{44x^7} - \\sqrt{99x^7} = 4x^3\\sqrt{11x} - 3x^3\\sqrt{11x}$",
                  "reason": "Replacing each term by its simplest form shows that the terms are like radicals."
                },
                {
                  "step": "$4x^3\\sqrt{11x} - 3x^3\\sqrt{11x} = (4 - 3)x^3\\sqrt{11x}$",
                  "reason": "The distributive law collects like radicals: the root is kept and the numbers in front go into one bracket."
                },
                {
                  "step": "$(4 - 3)x^3\\sqrt{11x} = x^3\\sqrt{11x}$",
                  "reason": "The sum in the bracket is worked out, which leaves one term."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t104-k4",
      "forms": [
        {
          "example": {
            "problem": "Evaluate $(\\sqrt[3]{5})^{6}$.",
            "lines": [
              {
                "step": "$(\\sqrt[3]{5})^{6} = (5^{1/3})^{6}$",
                "reason": "The radical sign with index $3$ is the exponent $\\frac{1}{3}$, and in exponent form the laws of exponents apply."
              },
              {
                "step": "$(5^{1/3})^{6} = 5^{6/3}$",
                "reason": "The power law multiplies the two exponents, which leaves one power."
              },
              {
                "step": "$5^{6/3} = 5^2$",
                "reason": "The fraction $\\frac{6}{3}$ equals the whole number $2$, which leaves a whole exponent."
              },
              {
                "step": "$5^2 = 25$",
                "reason": "A power with a whole exponent is a repeated product, which is worked out."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $(\\sqrt{7})^{4}$.",
              "form": "Answer as an integer.",
              "answer": "49",
              "lines": [
                {
                  "step": "$(\\sqrt{7})^{4} = (7^{1/2})^{4}$",
                  "reason": "The radical sign is the exponent $\\frac{1}{2}$, and in exponent form the laws of exponents apply."
                },
                {
                  "step": "$(7^{1/2})^{4} = 7^{4/2}$",
                  "reason": "The power law multiplies the two exponents, which leaves one power."
                },
                {
                  "step": "$7^{4/2} = 7^2$",
                  "reason": "The fraction $\\frac{4}{2}$ equals the whole number $2$, which leaves a whole exponent."
                },
                {
                  "step": "$7^2 = 49$",
                  "reason": "A power with a whole exponent is a repeated product, which is worked out."
                }
              ]
            },
            {
              "prompt": "Evaluate $(\\sqrt[4]{3})^{12}$.",
              "form": "Answer as an integer.",
              "answer": "27",
              "lines": [
                {
                  "step": "$(\\sqrt[4]{3})^{12} = (3^{1/4})^{12}$",
                  "reason": "The radical sign with index $4$ is the exponent $\\frac{1}{4}$, and in exponent form the laws of exponents apply."
                },
                {
                  "step": "$(3^{1/4})^{12} = 3^{12/4}$",
                  "reason": "The power law multiplies the two exponents, which leaves one power."
                },
                {
                  "step": "$3^{12/4} = 3^3$",
                  "reason": "The fraction $\\frac{12}{4}$ equals the whole number $3$, which leaves a whole exponent."
                },
                {
                  "step": "$3^3 = 27$",
                  "reason": "A power with a whole exponent is a repeated product, which is worked out."
                }
              ]
            },
            {
              "prompt": "Evaluate $(\\sqrt[5]{2})^{20}$.",
              "form": "Answer as an integer.",
              "answer": "16",
              "lines": [
                {
                  "step": "$(\\sqrt[5]{2})^{20} = (2^{1/5})^{20}$",
                  "reason": "The radical sign with index $5$ is the exponent $\\frac{1}{5}$, and in exponent form the laws of exponents apply."
                },
                {
                  "step": "$(2^{1/5})^{20} = 2^{20/5}$",
                  "reason": "The power law multiplies the two exponents, which leaves one power."
                },
                {
                  "step": "$2^{20/5} = 2^4$",
                  "reason": "The fraction $\\frac{20}{5}$ equals the whole number $4$, which leaves a whole exponent."
                },
                {
                  "step": "$2^4 = 16$",
                  "reason": "A power with a whole exponent is a repeated product, which is worked out."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write $2^{5/2}$ with a radical sign, in simplest radical form.",
            "lines": [
              {
                "step": "$2^{5/2} = (2^5)^{1/2}$",
                "reason": "The rule $x^{m/n} = \\left(x^m\\right)^{1/n}$ puts the whole power inside, which leaves the exponent $\\frac{1}{2}$ outside."
              },
              {
                "step": "$(2^5)^{1/2} = \\sqrt{2^5}$",
                "reason": "The radical sign is another way to write the exponent $\\frac{1}{2}$."
              },
              {
                "step": "$\\sqrt{2^5} = \\sqrt{32}$",
                "reason": "A power with a whole exponent is a repeated product, which is worked out."
              },
              {
                "step": "$\\sqrt{32} = \\sqrt{16 \\times 2}$",
                "reason": "The number $16$ is the largest square that divides $32$, and simplest radical form leaves no square factor under the root, so $16$ is set apart."
              },
              {
                "step": "$\\sqrt{16 \\times 2} = \\sqrt{16} \\times \\sqrt{2}$",
                "reason": "The root of a product is the product of the roots for nonnegative numbers, which puts the square under a root of its own."
              },
              {
                "step": "$\\sqrt{16} \\times \\sqrt{2} = 4\\sqrt{2}$",
                "reason": "The radical sign names the nonnegative number whose square is $16$, which is $4$, and $2$ has no square factor greater than $1$, so this is simplest radical form."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $3^{3/2}$ with a radical sign, in simplest radical form.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "3*sqrt(3)",
              "lines": [
                {
                  "step": "$3^{3/2} = (3^3)^{1/2}$",
                  "reason": "The rule $x^{m/n} = \\left(x^m\\right)^{1/n}$ puts the whole power inside, which leaves the exponent $\\frac{1}{2}$ outside."
                },
                {
                  "step": "$(3^3)^{1/2} = \\sqrt{3^3}$",
                  "reason": "The radical sign is another way to write the exponent $\\frac{1}{2}$."
                },
                {
                  "step": "$\\sqrt{3^3} = \\sqrt{27}$",
                  "reason": "A power with a whole exponent is a repeated product, which is worked out."
                },
                {
                  "step": "$\\sqrt{27} = \\sqrt{9 \\times 3}$",
                  "reason": "The number $9$ is the largest square that divides $27$, and simplest radical form leaves no square factor under the root, so $9$ is set apart."
                },
                {
                  "step": "$\\sqrt{9 \\times 3} = \\sqrt{9} \\times \\sqrt{3}$",
                  "reason": "The root of a product is the product of the roots for nonnegative numbers, which puts the square under a root of its own."
                },
                {
                  "step": "$\\sqrt{9} \\times \\sqrt{3} = 3\\sqrt{3}$",
                  "reason": "The radical sign names the nonnegative number whose square is $9$, which is $3$, and $3$ has no square factor greater than $1$, so this is simplest radical form."
                }
              ]
            },
            {
              "prompt": "Write $5^{4/3}$ with a radical sign, in simplest radical form.",
              "form": "Answer in simplest radical form, as in 6*2^(1/3).",
              "answer": "5*5^(1/3)",
              "lines": [
                {
                  "step": "$5^{4/3} = (5^4)^{1/3}$",
                  "reason": "The rule $x^{m/n} = \\left(x^m\\right)^{1/n}$ puts the whole power inside, which leaves the exponent $\\frac{1}{3}$ outside."
                },
                {
                  "step": "$(5^4)^{1/3} = \\sqrt[3]{5^4}$",
                  "reason": "The radical sign with index $3$ is another way to write the exponent $\\frac{1}{3}$."
                },
                {
                  "step": "$\\sqrt[3]{5^4} = \\sqrt[3]{625}$",
                  "reason": "A power with a whole exponent is a repeated product, which is worked out."
                },
                {
                  "step": "$\\sqrt[3]{625} = \\sqrt[3]{125 \\times 5}$",
                  "reason": "The number $125$ is the largest third power that divides $625$, and simplest radical form leaves no third-power factor under the root, so $125$ is set apart."
                },
                {
                  "step": "$\\sqrt[3]{125 \\times 5} = \\sqrt[3]{125} \\times \\sqrt[3]{5}$",
                  "reason": "The root of a product is the product of the roots for nonnegative numbers, which puts the third power under a root of its own."
                },
                {
                  "step": "$\\sqrt[3]{125} \\times \\sqrt[3]{5} = 5\\sqrt[3]{5}$",
                  "reason": "The radical sign names the nonnegative number whose third power is $125$, which is $5$, and $5$ has no third-power factor greater than $1$, so this is simplest radical form."
                }
              ]
            },
            {
              "prompt": "Write $2^{7/2}$ with a radical sign, in simplest radical form.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "8*sqrt(2)",
              "lines": [
                {
                  "step": "$2^{7/2} = (2^7)^{1/2}$",
                  "reason": "The rule $x^{m/n} = \\left(x^m\\right)^{1/n}$ puts the whole power inside, which leaves the exponent $\\frac{1}{2}$ outside."
                },
                {
                  "step": "$(2^7)^{1/2} = \\sqrt{2^7}$",
                  "reason": "The radical sign is another way to write the exponent $\\frac{1}{2}$."
                },
                {
                  "step": "$\\sqrt{2^7} = \\sqrt{128}$",
                  "reason": "A power with a whole exponent is a repeated product, which is worked out."
                },
                {
                  "step": "$\\sqrt{128} = \\sqrt{64 \\times 2}$",
                  "reason": "The number $64$ is the largest square that divides $128$, and simplest radical form leaves no square factor under the root, so $64$ is set apart."
                },
                {
                  "step": "$\\sqrt{64 \\times 2} = \\sqrt{64} \\times \\sqrt{2}$",
                  "reason": "The root of a product is the product of the roots for nonnegative numbers, which puts the square under a root of its own."
                },
                {
                  "step": "$\\sqrt{64} \\times \\sqrt{2} = 8\\sqrt{2}$",
                  "reason": "The radical sign names the nonnegative number whose square is $64$, which is $8$, and $2$ has no square factor greater than $1$, so this is simplest radical form."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $(\\sqrt{6})^{5}$.",
            "lines": [
              {
                "step": "$(\\sqrt{6})^{5} = (6^{1/2})^{5}$",
                "reason": "The radical sign is the exponent $\\frac{1}{2}$, and in exponent form the laws of exponents apply."
              },
              {
                "step": "$(6^{1/2})^{5} = 6^{5/2}$",
                "reason": "The power law multiplies the two exponents, which leaves one power."
              },
              {
                "step": "$6^{5/2} = 6^2 \\times 6^{1/2}$",
                "reason": "The product law adds exponents, and $\\frac{5}{2} = 2 + \\frac{1}{2}$, which sets a whole power apart."
              },
              {
                "step": "$6^2 \\times 6^{1/2} = 36\\sqrt{6}$",
                "reason": "The whole power is worked out as $36$, and the radical sign writes the exponent $\\frac{1}{2}$ as a square root again."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $(\\sqrt{3})^{7}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "27*sqrt(3)",
              "lines": [
                {
                  "step": "$(\\sqrt{3})^{7} = (3^{1/2})^{7}$",
                  "reason": "The radical sign is the exponent $\\frac{1}{2}$, and in exponent form the laws of exponents apply."
                },
                {
                  "step": "$(3^{1/2})^{7} = 3^{7/2}$",
                  "reason": "The power law multiplies the two exponents, which leaves one power."
                },
                {
                  "step": "$3^{7/2} = 3^3 \\times 3^{1/2}$",
                  "reason": "The product law adds exponents, and $\\frac{7}{2} = 3 + \\frac{1}{2}$, which sets a whole power apart."
                },
                {
                  "step": "$3^3 \\times 3^{1/2} = 27\\sqrt{3}$",
                  "reason": "The whole power is worked out as $27$, and the radical sign writes the exponent $\\frac{1}{2}$ as a square root again."
                }
              ]
            },
            {
              "prompt": "Simplify $(\\sqrt{13})^{3}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "13*sqrt(13)",
              "lines": [
                {
                  "step": "$(\\sqrt{13})^{3} = (13^{1/2})^{3}$",
                  "reason": "The radical sign is the exponent $\\frac{1}{2}$, and in exponent form the laws of exponents apply."
                },
                {
                  "step": "$(13^{1/2})^{3} = 13^{3/2}$",
                  "reason": "The power law multiplies the two exponents, which leaves one power."
                },
                {
                  "step": "$13^{3/2} = 13 \\times 13^{1/2}$",
                  "reason": "The product law adds exponents, and $\\frac{3}{2} = 1 + \\frac{1}{2}$, which sets a whole power apart."
                },
                {
                  "step": "$13 \\times 13^{1/2} = 13\\sqrt{13}$",
                  "reason": "The whole power is worked out as $13$, and the radical sign writes the exponent $\\frac{1}{2}$ as a square root again."
                }
              ]
            },
            {
              "prompt": "Simplify $(\\sqrt{2})^{13}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "64*sqrt(2)",
              "lines": [
                {
                  "step": "$(\\sqrt{2})^{13} = (2^{1/2})^{13}$",
                  "reason": "The radical sign is the exponent $\\frac{1}{2}$, and in exponent form the laws of exponents apply."
                },
                {
                  "step": "$(2^{1/2})^{13} = 2^{13/2}$",
                  "reason": "The power law multiplies the two exponents, which leaves one power."
                },
                {
                  "step": "$2^{13/2} = 2^6 \\times 2^{1/2}$",
                  "reason": "The product law adds exponents, and $\\frac{13}{2} = 6 + \\frac{1}{2}$, which sets a whole power apart."
                },
                {
                  "step": "$2^6 \\times 2^{1/2} = 64\\sqrt{2}$",
                  "reason": "The whole power is worked out as $64$, and the radical sign writes the exponent $\\frac{1}{2}$ as a square root again."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Simplify $(-\\sqrt{5})^{3}$.",
            "lines": [
              {
                "step": "$(-\\sqrt{5})^{3} = -(\\sqrt{5})^{3}$",
                "reason": "By the sign of a power of a negative number, an odd power of a negative number is negative, so the minus sign comes out in front."
              },
              {
                "step": "$(\\sqrt{5})^{3} = (5^{1/2})^{3}$",
                "reason": "The radical sign is the exponent $\\frac{1}{2}$, and in exponent form the laws of exponents apply."
              },
              {
                "step": "$(5^{1/2})^{3} = 5^{3/2}$",
                "reason": "The power law multiplies the two exponents, which leaves one power."
              },
              {
                "step": "$5^{3/2} = 5 \\times 5^{1/2}$",
                "reason": "The product law adds exponents, and $\\frac{3}{2} = 1 + \\frac{1}{2}$, which sets a whole power apart."
              },
              {
                "step": "$5 \\times 5^{1/2} = 5\\sqrt{5}$",
                "reason": "The whole power is worked out as $5$, and the radical sign writes the exponent $\\frac{1}{2}$ as a square root again."
              },
              {
                "step": "$(-\\sqrt{5})^{3} = -5\\sqrt{5}$",
                "reason": "Replacing the power in the first line by its value keeps the minus sign in front."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Simplify $(-\\sqrt{3})^{5}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "-9*sqrt(3)",
              "lines": [
                {
                  "step": "$(-\\sqrt{3})^{5} = -(\\sqrt{3})^{5}$",
                  "reason": "By the sign of a power of a negative number, an odd power of a negative number is negative, so the minus sign comes out in front."
                },
                {
                  "step": "$(\\sqrt{3})^{5} = (3^{1/2})^{5}$",
                  "reason": "The radical sign is the exponent $\\frac{1}{2}$, and in exponent form the laws of exponents apply."
                },
                {
                  "step": "$(3^{1/2})^{5} = 3^{5/2}$",
                  "reason": "The power law multiplies the two exponents, which leaves one power."
                },
                {
                  "step": "$3^{5/2} = 3^2 \\times 3^{1/2}$",
                  "reason": "The product law adds exponents, and $\\frac{5}{2} = 2 + \\frac{1}{2}$, which sets a whole power apart."
                },
                {
                  "step": "$3^2 \\times 3^{1/2} = 9\\sqrt{3}$",
                  "reason": "The whole power is worked out as $9$, and the radical sign writes the exponent $\\frac{1}{2}$ as a square root again."
                },
                {
                  "step": "$(-\\sqrt{3})^{5} = -9\\sqrt{3}$",
                  "reason": "Replacing the power in the first line by its value keeps the minus sign in front."
                }
              ]
            },
            {
              "prompt": "Simplify $(-\\sqrt{7})^{5}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "-49*sqrt(7)",
              "lines": [
                {
                  "step": "$(-\\sqrt{7})^{5} = -(\\sqrt{7})^{5}$",
                  "reason": "By the sign of a power of a negative number, an odd power of a negative number is negative, so the minus sign comes out in front."
                },
                {
                  "step": "$(\\sqrt{7})^{5} = (7^{1/2})^{5}$",
                  "reason": "The radical sign is the exponent $\\frac{1}{2}$, and in exponent form the laws of exponents apply."
                },
                {
                  "step": "$(7^{1/2})^{5} = 7^{5/2}$",
                  "reason": "The power law multiplies the two exponents, which leaves one power."
                },
                {
                  "step": "$7^{5/2} = 7^2 \\times 7^{1/2}$",
                  "reason": "The product law adds exponents, and $\\frac{5}{2} = 2 + \\frac{1}{2}$, which sets a whole power apart."
                },
                {
                  "step": "$7^2 \\times 7^{1/2} = 49\\sqrt{7}$",
                  "reason": "The whole power is worked out as $49$, and the radical sign writes the exponent $\\frac{1}{2}$ as a square root again."
                },
                {
                  "step": "$(-\\sqrt{7})^{5} = -49\\sqrt{7}$",
                  "reason": "Replacing the power in the first line by its value keeps the minus sign in front."
                }
              ]
            },
            {
              "prompt": "Simplify $(-\\sqrt{2})^{7}$.",
              "form": "Answer in simplest surd form, as in 3+2*sqrt(5).",
              "answer": "-8*sqrt(2)",
              "lines": [
                {
                  "step": "$(-\\sqrt{2})^{7} = -(\\sqrt{2})^{7}$",
                  "reason": "By the sign of a power of a negative number, an odd power of a negative number is negative, so the minus sign comes out in front."
                },
                {
                  "step": "$(\\sqrt{2})^{7} = (2^{1/2})^{7}$",
                  "reason": "The radical sign is the exponent $\\frac{1}{2}$, and in exponent form the laws of exponents apply."
                },
                {
                  "step": "$(2^{1/2})^{7} = 2^{7/2}$",
                  "reason": "The power law multiplies the two exponents, which leaves one power."
                },
                {
                  "step": "$2^{7/2} = 2^3 \\times 2^{1/2}$",
                  "reason": "The product law adds exponents, and $\\frac{7}{2} = 3 + \\frac{1}{2}$, which sets a whole power apart."
                },
                {
                  "step": "$2^3 \\times 2^{1/2} = 8\\sqrt{2}$",
                  "reason": "The whole power is worked out as $8$, and the radical sign writes the exponent $\\frac{1}{2}$ as a square root again."
                },
                {
                  "step": "$(-\\sqrt{2})^{7} = -8\\sqrt{2}$",
                  "reason": "Replacing the power in the first line by its value keeps the minus sign in front."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Evaluate $(\\sqrt[4]{8})^{8/3}$.",
            "lines": [
              {
                "step": "$(\\sqrt[4]{8})^{8/3} = (8^{1/4})^{8/3}$",
                "reason": "The radical sign with index $4$ is the exponent $\\frac{1}{4}$, and in exponent form the laws of exponents apply."
              },
              {
                "step": "$(8^{1/4})^{8/3} = 8^{\\frac{1}{4} \\times \\frac{8}{3}}$",
                "reason": "The power law multiplies the two exponents, which leaves one power."
              },
              {
                "step": "$8^{\\frac{1}{4} \\times \\frac{8}{3}} = 8^{2/3}$",
                "reason": "The product of the two fractions in lowest terms is $\\frac{2}{3}$."
              },
              {
                "step": "$8^{2/3} = (2^3)^{2/3}$",
                "reason": "The number $8$ is the power $2^3$, and with the base $2$ the exponents can be multiplied again."
              },
              {
                "step": "$(2^3)^{2/3} = 2^{2}$",
                "reason": "The power law multiplies the exponents, and $3 \\times \\frac{2}{3} = 2$, which leaves a whole exponent."
              },
              {
                "step": "$2^{2} = 4$",
                "reason": "A power with a whole exponent is a repeated product, which is worked out."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Evaluate $(\\sqrt[3]{25})^{3/2}$.",
              "form": "Answer as an integer.",
              "answer": "5",
              "lines": [
                {
                  "step": "$(\\sqrt[3]{25})^{3/2} = (25^{1/3})^{3/2}$",
                  "reason": "The radical sign with index $3$ is the exponent $\\frac{1}{3}$, and in exponent form the laws of exponents apply."
                },
                {
                  "step": "$(25^{1/3})^{3/2} = 25^{\\frac{1}{3} \\times \\frac{3}{2}}$",
                  "reason": "The power law multiplies the two exponents, which leaves one power."
                },
                {
                  "step": "$25^{\\frac{1}{3} \\times \\frac{3}{2}} = 25^{1/2}$",
                  "reason": "The product of the two fractions in lowest terms is $\\frac{1}{2}$."
                },
                {
                  "step": "$25^{1/2} = (5^2)^{1/2}$",
                  "reason": "The number $25$ is the power $5^2$, and with the base $5$ the exponents can be multiplied again."
                },
                {
                  "step": "$(5^2)^{1/2} = 5^{1}$",
                  "reason": "The power law multiplies the exponents, and $2 \\times \\frac{1}{2} = 1$, which leaves a whole exponent."
                },
                {
                  "step": "$5^{1} = 5$",
                  "reason": "A power with a whole exponent is a repeated product, which is worked out."
                }
              ]
            },
            {
              "prompt": "Evaluate $(\\sqrt{27})^{2/3}$.",
              "form": "Answer as an integer.",
              "answer": "3",
              "lines": [
                {
                  "step": "$(\\sqrt{27})^{2/3} = (27^{1/2})^{2/3}$",
                  "reason": "The radical sign is the exponent $\\frac{1}{2}$, and in exponent form the laws of exponents apply."
                },
                {
                  "step": "$(27^{1/2})^{2/3} = 27^{\\frac{1}{2} \\times \\frac{2}{3}}$",
                  "reason": "The power law multiplies the two exponents, which leaves one power."
                },
                {
                  "step": "$27^{\\frac{1}{2} \\times \\frac{2}{3}} = 27^{1/3}$",
                  "reason": "The product of the two fractions in lowest terms is $\\frac{1}{3}$."
                },
                {
                  "step": "$27^{1/3} = (3^3)^{1/3}$",
                  "reason": "The number $27$ is the power $3^3$, and with the base $3$ the exponents can be multiplied again."
                },
                {
                  "step": "$(3^3)^{1/3} = 3^{1}$",
                  "reason": "The power law multiplies the exponents, and $3 \\times \\frac{1}{3} = 1$, which leaves a whole exponent."
                },
                {
                  "step": "$3^{1} = 3$",
                  "reason": "A power with a whole exponent is a repeated product, which is worked out."
                }
              ]
            },
            {
              "prompt": "Evaluate $(\\sqrt[5]{4})^{15/2}$.",
              "form": "Answer as an integer.",
              "answer": "8",
              "lines": [
                {
                  "step": "$(\\sqrt[5]{4})^{15/2} = (4^{1/5})^{15/2}$",
                  "reason": "The radical sign with index $5$ is the exponent $\\frac{1}{5}$, and in exponent form the laws of exponents apply."
                },
                {
                  "step": "$(4^{1/5})^{15/2} = 4^{\\frac{1}{5} \\times \\frac{15}{2}}$",
                  "reason": "The power law multiplies the two exponents, which leaves one power."
                },
                {
                  "step": "$4^{\\frac{1}{5} \\times \\frac{15}{2}} = 4^{3/2}$",
                  "reason": "The product of the two fractions in lowest terms is $\\frac{3}{2}$."
                },
                {
                  "step": "$4^{3/2} = (2^2)^{3/2}$",
                  "reason": "The number $4$ is the power $2^2$, and with the base $2$ the exponents can be multiplied again."
                },
                {
                  "step": "$(2^2)^{3/2} = 2^{3}$",
                  "reason": "The power law multiplies the exponents, and $2 \\times \\frac{3}{2} = 3$, which leaves a whole exponent."
                },
                {
                  "step": "$2^{3} = 8$",
                  "reason": "A power with a whole exponent is a repeated product, which is worked out."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write $\\sqrt[3]{5^{3/4}}$ as one radical with a whole number under it.",
            "lines": [
              {
                "step": "$\\sqrt[3]{5^{3/4}} = (5^{3/4})^{1/3}$",
                "reason": "The radical sign with index $3$ is the exponent $\\frac{1}{3}$, and in exponent form the laws of exponents apply."
              },
              {
                "step": "$(5^{3/4})^{1/3} = 5^{\\frac{3}{4} \\times \\frac{1}{3}}$",
                "reason": "The power law multiplies the two exponents, which leaves one power."
              },
              {
                "step": "$5^{\\frac{3}{4} \\times \\frac{1}{3}} = 5^{1/4}$",
                "reason": "The product of the two fractions in lowest terms is $\\frac{1}{4}$."
              },
              {
                "step": "$5^{1/4} = \\sqrt[4]{5}$",
                "reason": "The radical sign with index $4$ writes the exponent $\\frac{1}{4}$ as a root."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $\\sqrt[6]{7^{3/2}}$ as one radical with a whole number under it.",
              "form": "Answer in simplest radical form, as in 6*2^(1/3).",
              "answer": "7^(1/4)",
              "lines": [
                {
                  "step": "$\\sqrt[6]{7^{3/2}} = (7^{3/2})^{1/6}$",
                  "reason": "The radical sign with index $6$ is the exponent $\\frac{1}{6}$, and in exponent form the laws of exponents apply."
                },
                {
                  "step": "$(7^{3/2})^{1/6} = 7^{\\frac{3}{2} \\times \\frac{1}{6}}$",
                  "reason": "The power law multiplies the two exponents, which leaves one power."
                },
                {
                  "step": "$7^{\\frac{3}{2} \\times \\frac{1}{6}} = 7^{1/4}$",
                  "reason": "The product of the two fractions in lowest terms is $\\frac{1}{4}$."
                },
                {
                  "step": "$7^{1/4} = \\sqrt[4]{7}$",
                  "reason": "The radical sign with index $4$ writes the exponent $\\frac{1}{4}$ as a root."
                }
              ]
            },
            {
              "prompt": "Write $\\sqrt[5]{2^{5/3}}$ as one radical with a whole number under it.",
              "form": "Answer in simplest radical form, as in 6*2^(1/3).",
              "answer": "2^(1/3)",
              "lines": [
                {
                  "step": "$\\sqrt[5]{2^{5/3}} = (2^{5/3})^{1/5}$",
                  "reason": "The radical sign with index $5$ is the exponent $\\frac{1}{5}$, and in exponent form the laws of exponents apply."
                },
                {
                  "step": "$(2^{5/3})^{1/5} = 2^{\\frac{5}{3} \\times \\frac{1}{5}}$",
                  "reason": "The power law multiplies the two exponents, which leaves one power."
                },
                {
                  "step": "$2^{\\frac{5}{3} \\times \\frac{1}{5}} = 2^{1/3}$",
                  "reason": "The product of the two fractions in lowest terms is $\\frac{1}{3}$."
                },
                {
                  "step": "$2^{1/3} = \\sqrt[3]{2}$",
                  "reason": "The radical sign with index $3$ writes the exponent $\\frac{1}{3}$ as a root."
                }
              ]
            },
            {
              "prompt": "Write $\\sqrt{3^{2/5}}$ as one radical with a whole number under it.",
              "form": "Answer in simplest radical form, as in 6*2^(1/3).",
              "answer": "3^(1/5)",
              "lines": [
                {
                  "step": "$\\sqrt{3^{2/5}} = (3^{2/5})^{1/2}$",
                  "reason": "The radical sign is the exponent $\\frac{1}{2}$, and in exponent form the laws of exponents apply."
                },
                {
                  "step": "$(3^{2/5})^{1/2} = 3^{\\frac{2}{5} \\times \\frac{1}{2}}$",
                  "reason": "The power law multiplies the two exponents, which leaves one power."
                },
                {
                  "step": "$3^{\\frac{2}{5} \\times \\frac{1}{2}} = 3^{1/5}$",
                  "reason": "The product of the two fractions in lowest terms is $\\frac{1}{5}$."
                },
                {
                  "step": "$3^{1/5} = \\sqrt[5]{3}$",
                  "reason": "The radical sign with index $5$ writes the exponent $\\frac{1}{5}$ as a root."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t104-k5",
      "special": "error",
      "forms": [
        {
          "example": {
            "problem": "Find the first wrong line in this working for $\\sqrt{5^2 + 12^2}$, and write that line right with the expression under the root worked out.",
            "given": [
              "$\\sqrt{5^2 + 12^2} = \\sqrt{25 + 144}$",
              "$\\sqrt{25 + 144} = \\sqrt{25} + \\sqrt{144}$",
              "$\\sqrt{25} + \\sqrt{144} = 17$"
            ],
            "lines": [
              {
                "step": "Line 2 takes the root of the sum $25 + 144$ as the sum of the roots $\\sqrt{25} + \\sqrt{144}$.",
                "reason": "The root of a product splits a product under a root, and no fact splits a sum or a difference under a root."
              },
              {
                "step": "The sum under the root is worked out first: $25 + 144 = 169$.",
                "reason": "The radical sign reaches over the whole sum, so the sum is one number under the root, as brackets would make it in the order of operations."
              },
              {
                "step": "Line 2 written right is $\\sqrt{25 + 144} = \\sqrt{169}$.",
                "reason": "The square of $5 + 12 = 17$ is $289$ and not $169$, so the line as given is false."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $\\sqrt{144 + 81}$, and write that line right with the expression under the root worked out.",
              "given": [
                "$\\sqrt{144 + 81} = \\sqrt{144} + \\sqrt{81}$",
                "$\\sqrt{144} + \\sqrt{81} = 12 + \\sqrt{81}$",
                "$12 + \\sqrt{81} = 12 + 9$",
                "$12 + 9 = 21$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: sqrt(144+81) = sqrt(225)",
              "lines": [
                {
                  "step": "Line 1 takes the root of the sum $144 + 81$ as the sum of the roots $\\sqrt{144} + \\sqrt{81}$.",
                  "reason": "The root of a product splits a product under a root, and no fact splits a sum or a difference under a root."
                },
                {
                  "step": "The sum under the root is worked out first: $144 + 81 = 225$.",
                  "reason": "The radical sign reaches over the whole sum, so the sum is one number under the root, as brackets would make it in the order of operations."
                },
                {
                  "step": "Line 1 written right is $\\sqrt{144 + 81} = \\sqrt{225}$.",
                  "reason": "The square of $12 + 9 = 21$ is $441$ and not $225$, so the line as given is false."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $\\sqrt{(8x)^2 + (15x)^2}$, where $x < 0$, and write that line right with the expression under the root worked out.",
              "given": [
                "$\\sqrt{(8x)^2 + (15x)^2} = \\sqrt{64x^2 + 225x^2}$",
                "$\\sqrt{64x^2 + 225x^2} = \\sqrt{64x^2} + \\sqrt{225x^2}$",
                "$\\sqrt{64x^2} + \\sqrt{225x^2} = -8x - 15x$",
                "$-8x - 15x = -23x$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: sqrt(64*x^2+225*x^2) = sqrt(289*x^2)",
              "lines": [
                {
                  "step": "Line 2 takes the root of the sum $64x^2 + 225x^2$ as the sum of the roots $\\sqrt{64x^2} + \\sqrt{225x^2}$.",
                  "reason": "The root of a product splits a product under a root, and no fact splits a sum or a difference under a root."
                },
                {
                  "step": "The sum under the root is worked out first: $64x^2 + 225x^2 = (64 + 225)x^2 = 289x^2$.",
                  "reason": "The radical sign reaches over the whole sum, so the sum is one term under the root, and the distributive law adds the two numbers in front."
                },
                {
                  "step": "Line 2 written right is $\\sqrt{64x^2 + 225x^2} = \\sqrt{289x^2}$.",
                  "reason": "With $-1$ in place of $x$, the left side of the line as given is $\\sqrt{289}$ and the right side is $8 + 15 = 23$, whose square is $529$ and not $289$, so that line is false."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $\\sqrt{4 \\times 9 + 4 \\times 25}$, and write that line right with the expression under the root worked out.",
              "given": [
                "$\\sqrt{4 \\times 9 + 4 \\times 25} = \\sqrt{4 \\times (9 + 25)}$",
                "$\\sqrt{4 \\times (9 + 25)} = \\sqrt{4} \\times \\sqrt{9 + 25}$",
                "$\\sqrt{4} \\times \\sqrt{9 + 25} = \\sqrt{4} \\times (\\sqrt{9} + \\sqrt{25})$",
                "$\\sqrt{4} \\times (\\sqrt{9} + \\sqrt{25}) = 16$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: sqrt(4)*sqrt(9+25) = sqrt(4)*sqrt(34)",
              "lines": [
                {
                  "step": "Line 3 takes the root of the sum $9 + 25$ as the sum of the roots $\\sqrt{9} + \\sqrt{25}$.",
                  "reason": "The root of a product splits a product under a root, and no fact splits a sum or a difference under a root."
                },
                {
                  "step": "The sum under the root is worked out first: $9 + 25 = 34$.",
                  "reason": "The radical sign reaches over the whole sum, so the sum is one number under the root, as brackets would make it in the order of operations."
                },
                {
                  "step": "Line 3 written right is $\\sqrt{4} \\times \\sqrt{9 + 25} = \\sqrt{4} \\times \\sqrt{34}$.",
                  "reason": "The square of $3 + 5 = 8$ is $64$ and not $34$, so the line as given is false."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for $\\sqrt{25x^2}$, where $x < 0$, and write that line right without an absolute value sign.",
            "given": [
              "$\\sqrt{25x^2} = \\sqrt{25} \\times \\sqrt{x^2}$",
              "$\\sqrt{25} \\times \\sqrt{x^2} = 5\\sqrt{x^2}$",
              "$5\\sqrt{x^2} = 5x$"
            ],
            "lines": [
              {
                "step": "Line 3 takes $\\sqrt{x^2}$ as $x$, and $x$ is negative.",
                "reason": "The radical sign names the nonnegative root, so a square root is never a negative number: the line loses a sign."
              },
              {
                "step": "The root of a square is the absolute value: $\\sqrt{x^2} = |x|$, and $|x| = -x$ because $x$ is negative.",
                "reason": "The fact $\\sqrt{a^2} = |a|$ holds for every real number, and by the definition of absolute value the absolute value of a negative number is its opposite."
              },
              {
                "step": "Line 3 written right is $5\\sqrt{x^2} = -5x$.",
                "reason": "With the opposite of the negative number in place of the root, the two sides of the line are the same number."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $5 + \\sqrt{(-7)^2}$, and write that line right without an absolute value sign.",
              "given": [
                "$5 + \\sqrt{(-7)^2} = 5 + (-7)$",
                "$5 + (-7) = 5 - 7$",
                "$5 - 7 = -2$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: 5+sqrt((-7)^2) = 5+7",
              "lines": [
                {
                  "step": "Line 1 takes $\\sqrt{(-7)^2}$ as $-7$.",
                  "reason": "The radical sign names the nonnegative root, so a square root is never a negative number: the line loses a sign."
                },
                {
                  "step": "The root of a square is the absolute value: $\\sqrt{(-7)^2} = |-7| = 7$.",
                  "reason": "The fact $\\sqrt{a^2} = |a|$ holds for every real number, and by the definition of absolute value the absolute value of a negative number is its opposite."
                },
                {
                  "step": "Line 1 written right is $5 + \\sqrt{(-7)^2} = 5 + 7$.",
                  "reason": "With the opposite of the negative number in place of the root, the two sides of the line are the same number."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $\\sqrt{16x^2} - x$, where $x < 0$, and write that line right without an absolute value sign.",
              "given": [
                "$\\sqrt{16x^2} - x = 4\\sqrt{x^2} - x$",
                "$4\\sqrt{x^2} - x = 4x - x$",
                "$4x - x = 3x$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 4*sqrt(x^2)-x = -4*x-x",
              "lines": [
                {
                  "step": "Line 2 takes $\\sqrt{x^2}$ as $x$, and $x$ is negative.",
                  "reason": "The radical sign names the nonnegative root, so a square root is never a negative number: the line loses a sign."
                },
                {
                  "step": "The root of a square is the absolute value: $\\sqrt{x^2} = |x|$, and $|x| = -x$ because $x$ is negative.",
                  "reason": "The fact $\\sqrt{a^2} = |a|$ holds for every real number, and by the definition of absolute value the absolute value of a negative number is its opposite."
                },
                {
                  "step": "Line 2 written right is $4\\sqrt{x^2} - x = -4x - x$.",
                  "reason": "With the opposite of the negative number in place of the root, the two sides of the line are the same number."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $\\sqrt{y^2} + 4y$, where $y < 0$, and write that line right without an absolute value sign.",
              "given": [
                "$\\sqrt{y^2} + 4y = 4y + \\sqrt{y^2}$",
                "$4y + \\sqrt{y^2} = 4y + y$",
                "$4y + y = 5y$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: 4*y+sqrt(y^2) = 4*y-y",
              "lines": [
                {
                  "step": "Line 2 takes $\\sqrt{y^2}$ as $y$, and $y$ is negative.",
                  "reason": "The radical sign names the nonnegative root, so a square root is never a negative number: the line loses a sign."
                },
                {
                  "step": "The root of a square is the absolute value: $\\sqrt{y^2} = |y|$, and $|y| = -y$ because $y$ is negative.",
                  "reason": "The fact $\\sqrt{a^2} = |a|$ holds for every real number, and by the definition of absolute value the absolute value of a negative number is its opposite."
                },
                {
                  "step": "Line 2 written right is $4y + \\sqrt{y^2} = 4y - y$.",
                  "reason": "With the opposite of the negative number in place of the root, the two sides of the line are the same number."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the first wrong line in this working for $\\sqrt{4 \\times 5} + \\sqrt{9 \\times 5}$, and write that line right with each root in simplest radical form.",
            "given": [
              "$\\sqrt{4 \\times 5} + \\sqrt{9 \\times 5} = \\sqrt{20} + \\sqrt{45}$",
              "$\\sqrt{20} + \\sqrt{45} = \\sqrt{65}$",
              "$\\sqrt{65} = \\sqrt{5 \\times 13}$"
            ],
            "lines": [
              {
                "step": "Line 2 takes the sum of the roots $\\sqrt{20} + \\sqrt{45}$ as the root of the sum $\\sqrt{20 + 45}$.",
                "reason": "The root of a product joins and splits products under a root, and no fact joins or splits a sum."
              },
              {
                "step": "Each root is simplified on its own: $\\sqrt{20} = 2\\sqrt{5}$ and $\\sqrt{45} = 3\\sqrt{5}$.",
                "reason": "The root of a product takes the largest square factor of each number out of its root."
              },
              {
                "step": "Line 2 written right is $\\sqrt{20} + \\sqrt{45} = 2\\sqrt{5} + 3\\sqrt{5}$.",
                "reason": "The right side is now $(2 + 3)\\sqrt{5} = 5\\sqrt{5}$, whose square is $125$ and not $65$, so the line as given is false."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the first wrong line in this working for $\\sqrt{52} + \\sqrt{117}$, and write that line right with each root in simplest radical form.",
              "given": [
                "$\\sqrt{52} + \\sqrt{117} = \\sqrt{169}$",
                "$\\sqrt{169} = \\sqrt{13 \\times 13}$",
                "$\\sqrt{13 \\times 13} = \\sqrt{13} \\times \\sqrt{13}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 1: sqrt(52)+sqrt(117) = 2*sqrt(13)+3*sqrt(13)",
              "lines": [
                {
                  "step": "Line 1 takes the sum of the roots $\\sqrt{52} + \\sqrt{117}$ as the root of the sum $\\sqrt{52 + 117}$.",
                  "reason": "The root of a product joins and splits products under a root, and no fact joins or splits a sum."
                },
                {
                  "step": "Each root is simplified on its own: $\\sqrt{52} = 2\\sqrt{13}$ and $\\sqrt{117} = 3\\sqrt{13}$.",
                  "reason": "The root of a product takes the largest square factor of each number out of its root."
                },
                {
                  "step": "Line 1 written right is $\\sqrt{52} + \\sqrt{117} = 2\\sqrt{13} + 3\\sqrt{13}$.",
                  "reason": "The right side is now $(2 + 3)\\sqrt{13} = 5\\sqrt{13}$, whose square is $325$ and not $169$, so the line as given is false."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $\\sqrt{2^2 \\times 3} + \\sqrt{4^2 \\times 3}$, and write that line right with each root in simplest radical form.",
              "given": [
                "$\\sqrt{2^2 \\times 3} + \\sqrt{4^2 \\times 3} = \\sqrt{4 \\times 3} + \\sqrt{16 \\times 3}$",
                "$\\sqrt{4 \\times 3} + \\sqrt{16 \\times 3} = \\sqrt{12} + \\sqrt{48}$",
                "$\\sqrt{12} + \\sqrt{48} = \\sqrt{60}$",
                "$\\sqrt{60} = \\sqrt{3 \\times 20}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 3: sqrt(12)+sqrt(48) = 2*sqrt(3)+4*sqrt(3)",
              "lines": [
                {
                  "step": "Line 3 takes the sum of the roots $\\sqrt{12} + \\sqrt{48}$ as the root of the sum $\\sqrt{12 + 48}$.",
                  "reason": "The root of a product joins and splits products under a root, and no fact joins or splits a sum."
                },
                {
                  "step": "Each root is simplified on its own: $\\sqrt{12} = 2\\sqrt{3}$ and $\\sqrt{48} = 4\\sqrt{3}$.",
                  "reason": "The root of a product takes the largest square factor of each number out of its root."
                },
                {
                  "step": "Line 3 written right is $\\sqrt{12} + \\sqrt{48} = 2\\sqrt{3} + 4\\sqrt{3}$.",
                  "reason": "The right side is now $(2 + 4)\\sqrt{3} = 6\\sqrt{3}$, whose square is $108$ and not $60$, so the line as given is false."
                }
              ]
            },
            {
              "prompt": "Find the first wrong line in this working for $\\sqrt{4 \\times 10} + \\sqrt{9 \\times 10}$, and write that line right with each root in simplest radical form.",
              "given": [
                "$\\sqrt{4 \\times 10} + \\sqrt{9 \\times 10} = \\sqrt{40} + \\sqrt{90}$",
                "$\\sqrt{40} + \\sqrt{90} = \\sqrt{130}$",
                "$\\sqrt{130} = \\sqrt{10 \\times 13}$",
                "$\\sqrt{10 \\times 13} = \\sqrt{10} \\times \\sqrt{13}$"
              ],
              "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
              "answer": "Line 2: sqrt(40)+sqrt(90) = 2*sqrt(10)+3*sqrt(10)",
              "lines": [
                {
                  "step": "Line 2 takes the sum of the roots $\\sqrt{40} + \\sqrt{90}$ as the root of the sum $\\sqrt{40 + 90}$.",
                  "reason": "The root of a product joins and splits products under a root, and no fact joins or splits a sum."
                },
                {
                  "step": "Each root is simplified on its own: $\\sqrt{40} = 2\\sqrt{10}$ and $\\sqrt{90} = 3\\sqrt{10}$.",
                  "reason": "The root of a product takes the largest square factor of each number out of its root."
                },
                {
                  "step": "Line 2 written right is $\\sqrt{40} + \\sqrt{90} = 2\\sqrt{10} + 3\\sqrt{10}$.",
                  "reason": "The right side is now $(2 + 3)\\sqrt{10} = 5\\sqrt{10}$, whose square is $250$ and not $130$, so the line as given is false."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t104-k6",
      "special": "translate",
      "forms": [
        {
          "example": {
            "problem": "Write this as an equation in $x$: a number $x$ is increased by 5, and the square root of the result is 4.",
            "lines": [
              {
                "step": "The number increased by 5 is $x + 5$.",
                "reason": "In writing a sentence as an equation, the words \"increased by\" mean that the amount is added."
              },
              {
                "step": "The square root of the result is $\\sqrt{x + 5}$.",
                "reason": "The radical sign reaches over the whole of $x + 5$, because the root is taken of all of it."
              },
              {
                "step": "$\\sqrt{x + 5} = 4$",
                "reason": "In writing a sentence as an equation, the word \"is\" stands where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this as an equation in $x$: a number $x$ is reduced by 3, and the square root of the result is 6.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "sqrt(x-3) = 6",
              "lines": [
                {
                  "step": "The number reduced by 3 is $x - 3$.",
                  "reason": "In writing a sentence as an equation, the words \"reduced by\" mean that the amount is taken away, so it is written after the minus sign."
                },
                {
                  "step": "The square root of the result is $\\sqrt{x - 3}$.",
                  "reason": "The radical sign reaches over the whole of $x - 3$, because the root is taken of all of it."
                },
                {
                  "step": "$\\sqrt{x - 3} = 6$",
                  "reason": "In writing a sentence as an equation, the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this as an equation in $y$: a number $y$ is doubled, and the square root of the result is 8.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "sqrt(2*y) = 8",
              "lines": [
                {
                  "step": "The number doubled is $2y$.",
                  "reason": "In writing a sentence as an equation, the word \"doubled\" means that the amount is multiplied by 2."
                },
                {
                  "step": "The square root of the result is $\\sqrt{2y}$.",
                  "reason": "The radical sign reaches over the whole of $2y$, because the root is taken of all of it."
                },
                {
                  "step": "$\\sqrt{2y} = 8$",
                  "reason": "In writing a sentence as an equation, the word \"is\" stands where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this as an equation for $y$: a number $x$ is divided by 4, and the number $y$ is the square root of the result.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = sqrt(x/4)",
              "lines": [
                {
                  "step": "The number divided by 4 is $\\dfrac{x}{4}$.",
                  "reason": "In writing a sentence as an equation, the words \"divided by\" make a fraction with the divisor on the bottom."
                },
                {
                  "step": "The square root of the result is $\\sqrt{\\dfrac{x}{4}}$.",
                  "reason": "The radical sign reaches over the whole of $\\dfrac{x}{4}$, because the root is taken of all of it."
                },
                {
                  "step": "$y = \\sqrt{\\dfrac{x}{4}}$",
                  "reason": "In writing a sentence as an equation, the words \"the number $y$ is\" put $y$ alone on one side of the equals sign."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write this as an equation in $x$: the square root of a number $x$ is increased by 5, and the result is 9.",
            "lines": [
              {
                "step": "The square root of the number is $\\sqrt{x}$.",
                "reason": "The radical sign reaches over $x$ alone, because the root is taken first."
              },
              {
                "step": "The square root increased by 5 is $\\sqrt{x} + 5$.",
                "reason": "In writing a sentence as an equation, the words \"increased by\" mean that the amount is added."
              },
              {
                "step": "$\\sqrt{x} + 5 = 9$",
                "reason": "In writing a sentence as an equation, the words \"the result is\" stand where the equals sign goes."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write this as an equation in $x$: the square root of a number $x$ is multiplied by 3, and the result is 12.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "3*sqrt(x) = 12",
              "lines": [
                {
                  "step": "The square root of the number is $\\sqrt{x}$.",
                  "reason": "The radical sign reaches over $x$ alone, because the root is taken first."
                },
                {
                  "step": "The square root multiplied by 3 is $3\\sqrt{x}$.",
                  "reason": "In writing a sentence as an equation, the words \"multiplied by\" put the number in front as a coefficient."
                },
                {
                  "step": "$3\\sqrt{x} = 12$",
                  "reason": "In writing a sentence as an equation, the words \"the result is\" stand where the equals sign goes."
                }
              ]
            },
            {
              "prompt": "Write this as an equation for $y$: the square root of a number $x$ is reduced by 2, and the result is the number $y$.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "y = sqrt(x)-2",
              "lines": [
                {
                  "step": "The square root of the number is $\\sqrt{x}$.",
                  "reason": "The radical sign reaches over $x$ alone, because the root is taken first."
                },
                {
                  "step": "The square root reduced by 2 is $\\sqrt{x} - 2$.",
                  "reason": "In writing a sentence as an equation, the words \"reduced by\" mean that the amount is taken away, so it is written after the minus sign."
                },
                {
                  "step": "$y = \\sqrt{x} - 2$",
                  "reason": "In writing a sentence as an equation, the words \"the result is the number $y$\" put $y$ alone on one side of the equals sign."
                }
              ]
            },
            {
              "prompt": "Write this as an equation in $z$: the square root of a number $z$ is halved, and the result is 7.",
              "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
              "answer": "sqrt(z)/2 = 7",
              "lines": [
                {
                  "step": "The square root of the number is $\\sqrt{z}$.",
                  "reason": "The radical sign reaches over $z$ alone, because the root is taken first."
                },
                {
                  "step": "The square root halved is $\\dfrac{\\sqrt{z}}{2}$.",
                  "reason": "In writing a sentence as an equation, the word \"halved\" means that the amount is divided by 2, written as a fraction."
                },
                {
                  "step": "$\\dfrac{\\sqrt{z}}{2} = 7$",
                  "reason": "In writing a sentence as an equation, the words \"the result is\" stand where the equals sign goes."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t104-k7",
      "forms": [
        {
          "example": {
            "problem": "Decide whether $\\sqrt{126}$ can be simplified.",
            "lines": [
              {
                "step": "$126 = 2 \\times 3^2 \\times 7$",
                "reason": "The prime decomposition of $126$ shows every prime factor with its exponent."
              },
              {
                "step": "The exponent of $3$ is $2$, which is not less than the index $2$, so $3^2$ divides $126$.",
                "reason": "A divisor is read off from a prime decomposition: a power of a prime divides the number when its exponent is not greater than the exponent in the decomposition."
              },
              {
                "step": "Yes: the number under the root has the square factor $3^2$, so $\\sqrt{126}$ can be simplified.",
                "reason": "Simplest radical form allows no square factor greater than $1$ under a root with index $2$, and the root of a product takes such a factor out."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Decide whether $\\sqrt{210}$ can be simplified.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "$210 = 2 \\times 3 \\times 5 \\times 7$",
                  "reason": "The prime decomposition of $210$ shows every prime factor with its exponent."
                },
                {
                  "step": "Every exponent is less than the index $2$, so no square greater than $1$ divides $210$.",
                  "reason": "A divisor is read off from a prime decomposition: a square greater than $1$ holds some prime at least $2$ times, and a divisor of $210$ holds no prime more often than $210$ does."
                },
                {
                  "step": "No: $\\sqrt{210}$ is in simplest radical form as it stands.",
                  "reason": "Simplest radical form allows no square factor greater than $1$ under a root with index $2$, and here there is none."
                }
              ]
            },
            {
              "prompt": "Decide whether $\\sqrt[3]{180}$ can be simplified.",
              "form": "Answer as Yes or No.",
              "answer": "No",
              "lines": [
                {
                  "step": "$180 = 2^2 \\times 3^2 \\times 5$",
                  "reason": "The prime decomposition of $180$ shows every prime factor with its exponent."
                },
                {
                  "step": "Every exponent is less than the index $3$, so no third power greater than $1$ divides $180$.",
                  "reason": "A divisor is read off from a prime decomposition: a third power greater than $1$ holds some prime at least $3$ times, and a divisor of $180$ holds no prime more often than $180$ does."
                },
                {
                  "step": "No: $\\sqrt[3]{180}$ is in simplest radical form as it stands.",
                  "reason": "Simplest radical form allows no third-power factor greater than $1$ under a root with index $3$, and here there is none."
                }
              ]
            },
            {
              "prompt": "Decide whether $\\sqrt[3]{297}$ can be simplified.",
              "form": "Answer as Yes or No.",
              "answer": "Yes",
              "lines": [
                {
                  "step": "$297 = 3^3 \\times 11$",
                  "reason": "The prime decomposition of $297$ shows every prime factor with its exponent."
                },
                {
                  "step": "The exponent of $3$ is $3$, which is not less than the index $3$, so $3^3$ divides $297$.",
                  "reason": "A divisor is read off from a prime decomposition: a power of a prime divides the number when its exponent is not greater than the exponent in the decomposition."
                },
                {
                  "step": "Yes: the number under the root has the third-power factor $3^3$, so $\\sqrt[3]{297}$ can be simplified.",
                  "reason": "Simplest radical form allows no third-power factor greater than $1$ under a root with index $3$, and the root of a product takes such a factor out."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t104-k8",
      "forms": [
        {
          "example": {
            "problem": "Find a number $x$ for which $\\sqrt[3]{5} \\times \\sqrt[4]{5} = 5^x$.",
            "lines": [
              {
                "step": "$\\sqrt[3]{5} \\times \\sqrt[4]{5} = 5^{1/3} \\times 5^{1/4}$",
                "reason": "The radical sign with index $n$ is the exponent $\\frac{1}{n}$, and in exponent form the laws of exponents apply."
              },
              {
                "step": "$5^{1/3} \\times 5^{1/4} = 5^{1/3 + 1/4}$",
                "reason": "The product law adds the exponents of two powers of one base."
              },
              {
                "step": "$\\frac{1}{3} + \\frac{1}{4} = \\frac{7}{12}$",
                "reason": "The two fractions are added over a common denominator, which gives the exponent as one number."
              },
              {
                "step": "$x = \\frac{7}{12}$",
                "reason": "Substituting a value: with this number in place of $x$, the power on the right is the product on the left."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a number $x$ for which $\\sqrt{2} \\times \\sqrt[4]{2} = 2^x$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 3/4",
              "lines": [
                {
                  "step": "$\\sqrt{2} \\times \\sqrt[4]{2} = 2^{1/2} \\times 2^{1/4}$",
                  "reason": "The radical sign with index $n$ is the exponent $\\frac{1}{n}$, and in exponent form the laws of exponents apply."
                },
                {
                  "step": "$2^{1/2} \\times 2^{1/4} = 2^{1/2 + 1/4}$",
                  "reason": "The product law adds the exponents of two powers of one base."
                },
                {
                  "step": "$\\frac{1}{2} + \\frac{1}{4} = \\frac{3}{4}$",
                  "reason": "The two fractions are added over a common denominator, which gives the exponent as one number."
                },
                {
                  "step": "$x = \\frac{3}{4}$",
                  "reason": "Substituting a value: with this number in place of $x$, the power on the right is the product on the left."
                }
              ]
            },
            {
              "prompt": "Find a number $x$ for which $\\sqrt{7} \\times \\sqrt[5]{7} = 7^x$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 7/10",
              "lines": [
                {
                  "step": "$\\sqrt{7} \\times \\sqrt[5]{7} = 7^{1/2} \\times 7^{1/5}$",
                  "reason": "The radical sign with index $n$ is the exponent $\\frac{1}{n}$, and in exponent form the laws of exponents apply."
                },
                {
                  "step": "$7^{1/2} \\times 7^{1/5} = 7^{1/2 + 1/5}$",
                  "reason": "The product law adds the exponents of two powers of one base."
                },
                {
                  "step": "$\\frac{1}{2} + \\frac{1}{5} = \\frac{7}{10}$",
                  "reason": "The two fractions are added over a common denominator, which gives the exponent as one number."
                },
                {
                  "step": "$x = \\frac{7}{10}$",
                  "reason": "Substituting a value: with this number in place of $x$, the power on the right is the product on the left."
                }
              ]
            },
            {
              "prompt": "Find a number $x$ for which $\\sqrt[4]{10} \\times \\sqrt[6]{10} = 10^x$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 5/12",
              "lines": [
                {
                  "step": "$\\sqrt[4]{10} \\times \\sqrt[6]{10} = 10^{1/4} \\times 10^{1/6}$",
                  "reason": "The radical sign with index $n$ is the exponent $\\frac{1}{n}$, and in exponent form the laws of exponents apply."
                },
                {
                  "step": "$10^{1/4} \\times 10^{1/6} = 10^{1/4 + 1/6}$",
                  "reason": "The product law adds the exponents of two powers of one base."
                },
                {
                  "step": "$\\frac{1}{4} + \\frac{1}{6} = \\frac{5}{12}$",
                  "reason": "The two fractions are added over a common denominator, which gives the exponent as one number."
                },
                {
                  "step": "$x = \\frac{5}{12}$",
                  "reason": "Substituting a value: with this number in place of $x$, the power on the right is the product on the left."
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find a number $x$ for which $\\sqrt{27} \\times \\sqrt[4]{9} = 3^x$.",
            "lines": [
              {
                "step": "$\\sqrt{27} \\times \\sqrt[4]{9} = \\sqrt{3^3} \\times \\sqrt[4]{3^2}$",
                "reason": "The numbers under the roots are powers of one base, $27 = 3^3$ and $9 = 3^2$, which gives both roots the base $3$."
              },
              {
                "step": "$\\sqrt{3^3} \\times \\sqrt[4]{3^2} = 3^{3/2} \\times 3^{2/4}$",
                "reason": "The radical sign with index $n$ is the exponent $\\frac{1}{n}$, and the rule $x^{m/n} = \\left(x^m\\right)^{1/n}$ writes each root as one power."
              },
              {
                "step": "$3^{3/2} \\times 3^{2/4} = 3^{3/2 + 2/4}$",
                "reason": "The product law adds the exponents of two powers of one base."
              },
              {
                "step": "$\\frac{3}{2} + \\frac{2}{4} = 2$",
                "reason": "The two fractions are added over a common denominator, which gives the exponent as one number."
              },
              {
                "step": "$x = 2$",
                "reason": "Substituting a value: with this number in place of $x$, the power on the right is the product on the left."
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find a number $x$ for which $\\sqrt[3]{25} \\times \\sqrt{125} = 5^x$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 13/6",
              "lines": [
                {
                  "step": "$\\sqrt[3]{25} \\times \\sqrt{125} = \\sqrt[3]{5^2} \\times \\sqrt{5^3}$",
                  "reason": "The numbers under the roots are powers of one base, $25 = 5^2$ and $125 = 5^3$, which gives both roots the base $5$."
                },
                {
                  "step": "$\\sqrt[3]{5^2} \\times \\sqrt{5^3} = 5^{2/3} \\times 5^{3/2}$",
                  "reason": "The radical sign with index $n$ is the exponent $\\frac{1}{n}$, and the rule $x^{m/n} = \\left(x^m\\right)^{1/n}$ writes each root as one power."
                },
                {
                  "step": "$5^{2/3} \\times 5^{3/2} = 5^{2/3 + 3/2}$",
                  "reason": "The product law adds the exponents of two powers of one base."
                },
                {
                  "step": "$\\frac{2}{3} + \\frac{3}{2} = \\frac{13}{6}$",
                  "reason": "The two fractions are added over a common denominator, which gives the exponent as one number."
                },
                {
                  "step": "$x = \\frac{13}{6}$",
                  "reason": "Substituting a value: with this number in place of $x$, the power on the right is the product on the left."
                }
              ]
            },
            {
              "prompt": "Find a number $x$ for which $\\sqrt[3]{16} \\times \\sqrt[4]{32} = 2^x$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 31/12",
              "lines": [
                {
                  "step": "$\\sqrt[3]{16} \\times \\sqrt[4]{32} = \\sqrt[3]{2^4} \\times \\sqrt[4]{2^5}$",
                  "reason": "The numbers under the roots are powers of one base, $16 = 2^4$ and $32 = 2^5$, which gives both roots the base $2$."
                },
                {
                  "step": "$\\sqrt[3]{2^4} \\times \\sqrt[4]{2^5} = 2^{4/3} \\times 2^{5/4}$",
                  "reason": "The radical sign with index $n$ is the exponent $\\frac{1}{n}$, and the rule $x^{m/n} = \\left(x^m\\right)^{1/n}$ writes each root as one power."
                },
                {
                  "step": "$2^{4/3} \\times 2^{5/4} = 2^{4/3 + 5/4}$",
                  "reason": "The product law adds the exponents of two powers of one base."
                },
                {
                  "step": "$\\frac{4}{3} + \\frac{5}{4} = \\frac{31}{12}$",
                  "reason": "The two fractions are added over a common denominator, which gives the exponent as one number."
                },
                {
                  "step": "$x = \\frac{31}{12}$",
                  "reason": "Substituting a value: with this number in place of $x$, the power on the right is the product on the left."
                }
              ]
            },
            {
              "prompt": "Find a number $x$ for which $\\sqrt[3]{81} \\times \\sqrt[5]{9} = 3^x$.",
              "form": "Answer as the unknown = a number, as in x = 6/7.",
              "answer": "x = 26/15",
              "lines": [
                {
                  "step": "$\\sqrt[3]{81} \\times \\sqrt[5]{9} = \\sqrt[3]{3^4} \\times \\sqrt[5]{3^2}$",
                  "reason": "The numbers under the roots are powers of one base, $81 = 3^4$ and $9 = 3^2$, which gives both roots the base $3$."
                },
                {
                  "step": "$\\sqrt[3]{3^4} \\times \\sqrt[5]{3^2} = 3^{4/3} \\times 3^{2/5}$",
                  "reason": "The radical sign with index $n$ is the exponent $\\frac{1}{n}$, and the rule $x^{m/n} = \\left(x^m\\right)^{1/n}$ writes each root as one power."
                },
                {
                  "step": "$3^{4/3} \\times 3^{2/5} = 3^{4/3 + 2/5}$",
                  "reason": "The product law adds the exponents of two powers of one base."
                },
                {
                  "step": "$\\frac{4}{3} + \\frac{2}{5} = \\frac{26}{15}$",
                  "reason": "The two fractions are added over a common denominator, which gives the exponent as one number."
                },
                {
                  "step": "$x = \\frac{26}{15}$",
                  "reason": "Substituting a value: with this number in place of $x$, the power on the right is the product on the left."
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "proofs": [
    {
      "id": "t104-p1",
      "method": "direct proof",
      "statement": "Let $a$ and $b$ be nonnegative numbers. Then $\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$.",
      "idea": "Square the product $\\sqrt{a}\\sqrt{b}$ to get $ab$. The product is nonnegative, and only one nonnegative number has square $ab$.",
      "lines": [
        {
          "line": "Let $a \\ge 0$ and $b \\ge 0$. Then $ab \\ge 0$.",
          "reason": "the product of two nonnegative numbers is nonnegative"
        },
        {
          "line": "So $\\sqrt{ab}$ is the one nonnegative number whose square is $ab$.",
          "reason": "the radical sign and the definition of $x^{1/n}$ for even $n$"
        },
        {
          "line": "The square of the product is $\\left(\\sqrt{a}\\sqrt{b}\\right)^2 = \\left(\\sqrt{a}\\right)^2\\left(\\sqrt{b}\\right)^2$.",
          "reason": "the power of a product"
        },
        {
          "line": "The first square is $\\left(\\sqrt{a}\\right)^2 = a$.",
          "reason": "the definition of $x^{1/n}$: the square root of $a$ is a number whose square is $a$"
        },
        {
          "line": "The second square is $\\left(\\sqrt{b}\\right)^2 = b$.",
          "reason": "the definition of $x^{1/n}$: the square root of $b$ is a number whose square is $b$"
        },
        {
          "line": "So $\\left(\\sqrt{a}\\sqrt{b}\\right)^2 = ab$.",
          "reason": "replacing the two squares in the third line by the fourth and fifth lines"
        },
        {
          "line": "Both $\\sqrt{a}$ and $\\sqrt{b}$ are nonnegative.",
          "reason": "the definition of $x^{1/n}$ for even $n$: the root is the nonnegative one"
        },
        {
          "line": "So $\\sqrt{a}\\sqrt{b}$ is nonnegative.",
          "reason": "the product of two nonnegative numbers is nonnegative"
        },
        {
          "line": "Therefore $\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$.",
          "reason": "the second line: $\\sqrt{a}\\sqrt{b}$ is a nonnegative number whose square is $ab$, by the sixth and eighth lines"
        }
      ]
    },
    {
      "id": "t104-p2",
      "method": "proof by cases",
      "statement": "For every real number $x$, $\\sqrt{x^2} = |x|$.",
      "idea": "Split by the sign of $x$. In each case name the nonnegative number whose square is $x^2$, and see that it is $|x|$.",
      "lines": [
        {
          "line": "Let $x$ be a real number. Either $x \\ge 0$ or $x < 0$.",
          "reason": "every real number is negative, zero or positive"
        },
        {
          "line": "Case $x \\ge 0$: here $x^2 = x \\cdot x \\ge 0$.",
          "reason": "the product of two nonnegative numbers is nonnegative"
        },
        {
          "line": "So in this case $\\sqrt{x^2}$ is the one nonnegative number whose square is $x^2$.",
          "reason": "the radical sign and the definition of $x^{1/n}$ for even $n$"
        },
        {
          "line": "The number $x$ is nonnegative and its square is $x^2$, so $\\sqrt{x^2} = x$.",
          "reason": "the third line"
        },
        {
          "line": "In this case $|x| = x$.",
          "reason": "the definition of absolute value for a nonnegative number"
        },
        {
          "line": "So in this case $\\sqrt{x^2} = |x|$.",
          "reason": "the fourth and fifth lines"
        },
        {
          "line": "Case $x < 0$: here $-x$ is positive.",
          "reason": "the opposite of a negative number is positive"
        },
        {
          "line": "In this case $x^2 = (-x)(-x)$.",
          "reason": "the product of two negative numbers equals the product of their opposites"
        },
        {
          "line": "So in this case $x^2$ is positive.",
          "reason": "the product of two positive numbers is positive"
        },
        {
          "line": "So in this case $\\sqrt{x^2}$ is the one nonnegative number whose square is $x^2$.",
          "reason": "the radical sign and the definition of $x^{1/n}$ for even $n$"
        },
        {
          "line": "The number $-x$ is nonnegative and its square is $x^2$, so $\\sqrt{x^2} = -x$.",
          "reason": "the eighth and tenth lines"
        },
        {
          "line": "In this case $|x| = -x$.",
          "reason": "the definition of absolute value for a negative number"
        },
        {
          "line": "So in this case $\\sqrt{x^2} = |x|$.",
          "reason": "the eleventh and twelfth lines"
        },
        {
          "line": "In both cases $\\sqrt{x^2} = |x|$.",
          "reason": "the two cases cover every real number"
        }
      ]
    }
  ],
  "prove": [
    {
      "id": "t104-s1",
      "method": "direct proof",
      "statement": "Let $a$ be a nonnegative number and let $b$ be a positive number. Then $\\sqrt{\\dfrac{a}{b}} = \\dfrac{\\sqrt{a}}{\\sqrt{b}}$.",
      "check": {
        "proof": [
          {
            "line": "Let $a \\ge 0$ and $b > 0$. Then $\\dfrac{1}{b} > 0$.",
            "reason": "the reciprocal of a positive number is positive"
          },
          {
            "line": "The quotient is a product: $\\dfrac{a}{b} = a \\cdot \\dfrac{1}{b}$.",
            "reason": "dividing by $b$ is multiplying by $\\frac{1}{b}$"
          },
          {
            "line": "So $\\sqrt{\\dfrac{a}{b}} = \\sqrt{a} \\cdot \\sqrt{\\dfrac{1}{b}}$.",
            "reason": "the root of a product, for the nonnegative numbers $a$ and $\\frac{1}{b}$"
          },
          {
            "line": "The number $\\sqrt{b}$ is nonnegative and its square is $b$.",
            "reason": "the radical sign and the definition of $x^{1/n}$ for even $n$"
          },
          {
            "line": "So $\\sqrt{b}$ is not $0$.",
            "reason": "the square of $0$ is $0$, and $b$ is not $0$"
          },
          {
            "line": "So $\\sqrt{b}$ is positive.",
            "reason": "a nonnegative number other than $0$ is positive"
          },
          {
            "line": "So $\\dfrac{1}{\\sqrt{b}}$ is positive.",
            "reason": "the reciprocal of a positive number is positive"
          },
          {
            "line": "The square of this reciprocal is $\\left(\\dfrac{1}{\\sqrt{b}}\\right)^2 = \\dfrac{1}{\\left(\\sqrt{b}\\right)^2}$.",
            "reason": "the power of a quotient"
          },
          {
            "line": "So $\\left(\\dfrac{1}{\\sqrt{b}}\\right)^2 = \\dfrac{1}{b}$.",
            "reason": "the fourth line: the square of $\\sqrt{b}$ is $b$"
          },
          {
            "line": "So $\\sqrt{\\dfrac{1}{b}} = \\dfrac{1}{\\sqrt{b}}$.",
            "reason": "the definition of $x^{1/n}$ for even $n$: one nonnegative number, and no other, has square $\\frac{1}{b}$"
          },
          {
            "line": "So $\\sqrt{\\dfrac{a}{b}} = \\sqrt{a} \\cdot \\dfrac{1}{\\sqrt{b}}$.",
            "reason": "replacing the second root in the third line by the tenth line"
          },
          {
            "line": "Therefore $\\sqrt{\\dfrac{a}{b}} = \\dfrac{\\sqrt{a}}{\\sqrt{b}}$.",
            "reason": "multiplying by $\\frac{1}{\\sqrt{b}}$ is dividing by $\\sqrt{b}$"
          }
        ]
      }
    },
    {
      "id": "t104-s2",
      "method": "proof by cases",
      "statement": "For every real number $x$, $\\sqrt[4]{x^4} = |x|$.",
      "check": {
        "proof": [
          {
            "line": "Let $x$ be a real number. Either $x \\ge 0$ or $x < 0$.",
            "reason": "every real number is negative, zero or positive"
          },
          {
            "line": "Case $x \\ge 0$: here $x^4 \\ge 0$.",
            "reason": "the product of nonnegative numbers is nonnegative"
          },
          {
            "line": "So in this case $\\sqrt[4]{x^4}$ is the one nonnegative number whose fourth power is $x^4$.",
            "reason": "the radical sign and the definition of $x^{1/n}$ for even $n$"
          },
          {
            "line": "The number $x$ is nonnegative and its fourth power is $x^4$, so $\\sqrt[4]{x^4} = x$.",
            "reason": "the third line"
          },
          {
            "line": "In this case $|x| = x$.",
            "reason": "the definition of absolute value for a nonnegative number"
          },
          {
            "line": "So in this case $\\sqrt[4]{x^4} = |x|$.",
            "reason": "the fourth and fifth lines"
          },
          {
            "line": "Case $x < 0$: here $-x$ is positive.",
            "reason": "the opposite of a negative number is positive"
          },
          {
            "line": "In this case $(-x)^4 = (-1)^4x^4$.",
            "reason": "the power of a product, for $-x = (-1)x$"
          },
          {
            "line": "So in this case $(-x)^4 = x^4$.",
            "reason": "the sign of a power of a negative number: $(-1)^4 = 1$"
          },
          {
            "line": "So in this case $x^4$ is positive.",
            "reason": "the product of positive numbers is positive"
          },
          {
            "line": "So in this case $\\sqrt[4]{x^4}$ is the one nonnegative number whose fourth power is $x^4$.",
            "reason": "the radical sign and the definition of $x^{1/n}$ for even $n$"
          },
          {
            "line": "The number $-x$ is nonnegative and its fourth power is $x^4$, so $\\sqrt[4]{x^4} = -x$.",
            "reason": "the ninth and eleventh lines"
          },
          {
            "line": "In this case $|x| = -x$.",
            "reason": "the definition of absolute value for a negative number"
          },
          {
            "line": "So in this case $\\sqrt[4]{x^4} = |x|$.",
            "reason": "the twelfth and thirteenth lines"
          },
          {
            "line": "In both cases $\\sqrt[4]{x^4} = |x|$.",
            "reason": "the two cases cover every real number"
          }
        ]
      }
    },
    {
      "id": "t104-s3",
      "method": "direct proof",
      "statement": "For all real numbers $a$ and $b$, $\\sqrt[3]{ab} = \\sqrt[3]{a}\\,\\sqrt[3]{b}$.",
      "check": {
        "proof": [
          {
            "line": "Let $a$ and $b$ be real numbers. The cube of the product is $\\left(\\sqrt[3]{a}\\,\\sqrt[3]{b}\\right)^3 = \\left(\\sqrt[3]{a}\\right)^3\\left(\\sqrt[3]{b}\\right)^3$.",
            "reason": "the power of a product"
          },
          {
            "line": "The first cube is $\\left(\\sqrt[3]{a}\\right)^3 = a$.",
            "reason": "the radical sign and the definition of $x^{1/n}$ for odd $n$: the cube root of $a$ is the real number whose cube is $a$"
          },
          {
            "line": "The second cube is $\\left(\\sqrt[3]{b}\\right)^3 = b$.",
            "reason": "the radical sign and the definition of $x^{1/n}$ for odd $n$: the cube root of $b$ is the real number whose cube is $b$"
          },
          {
            "line": "So $\\sqrt[3]{a}\\,\\sqrt[3]{b}$ is a real number whose cube is $ab$.",
            "reason": "replacing the two cubes in the first line by the second and third lines"
          },
          {
            "line": "Therefore $\\sqrt[3]{ab} = \\sqrt[3]{a}\\,\\sqrt[3]{b}$.",
            "reason": "the definition of $x^{1/n}$ for odd $n$: $\\sqrt[3]{ab}$ is the one real number whose cube is $ab$"
          }
        ]
      }
    }
  ]
}
