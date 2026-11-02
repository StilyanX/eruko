export default {
  "number": 12,
  "manyParts": true,
  "ideas": [
    {
      "name": "The number line",
      "concrete": "Mark equally spaced points to the right of $0$ as $1$, $2$, $3$, and so on. Each whole number is then a point on the line.",
      "general": "A line marked with the whole numbers as equally spaced points, starting at $0$, is the **number line**.",
      "definitions": [
        "The segment from $0$ to $1$ on the number line is the **unit segment**."
      ]
    },
    {
      "name": "Fraction as a point on the number line",
      "concrete": "Divide the segment $[0,1]$ into 3 equal parts. Mark the first division point to the right of 0 as $\\frac{1}{3}$. The point 5 copies of $\\frac{1}{3}$ to the right of 0 is $\\frac{5}{3}$.",
      "general": "For a whole number $n$ greater than 0, divide the unit segment into $n$ equal parts. Mark the first division point to the right of 0 as $\\frac1n$. For whole numbers $m$ and $n$ with $n$ greater than 0, the **fraction** $\\frac{m}{n}$ is the $m$-th multiple of $\\frac1n$."
    },
    {
      "name": "A whole number as a fraction",
      "concrete": "The whole number 3 equals $\\frac{9}{3}$. The fraction $\\frac{9}{3}$ is the 9th multiple of $\\frac{1}{3}$, the same point as the 3rd multiple of 1.",
      "general": "For every whole number $m$ and every whole number $\\ell$ greater than 0, $\\frac{m\\ell}{\\ell}=m$."
    },
    {
      "name": "Numerator and denominator",
      "concrete": "In the fraction $\\frac{5}{7}$, 5 is the numerator and 7 is the denominator.",
      "general": "In the fraction symbol $\\frac{m}{n}$, $m$ is the **numerator** and $n$ the **denominator**."
    },
    {
      "name": "Proper fraction",
      "concrete": "The fraction $\\frac{16}{17}$ is proper, since $16<17$.",
      "general": "A fraction $\\frac{m}{n}$ is **proper** if $m<n$."
    },
    {
      "name": "Finite decimal",
      "concrete": "The fraction $\\frac{1\\,489}{10^2}$ is $14.89$ in decimal-point notation, with 2 decimal digits.",
      "general": "A **finite decimal** is a fraction with denominator $10^k$, written with a decimal point and $k$ digits to its right. The count of decimal digits equals the exponent $k$."
    },
    {
      "name": "A fraction's meaning depends on the chosen unit",
      "concrete": "If the unit 1 is a weight of 3 pounds, $\\frac{1}{3}$ of the unit represents 1 pound.",
      "general": "Let the unit 1 be the value of a quantity $X$. Partition $X$ into $\\ell$ parts of equal value. Then $\\frac{k}{\\ell}$ represents the value of $k$ of these parts."
    },
    {
      "name": "Basic properties of area",
      "concrete": "Two congruent triangles cut from the same square have equal area.",
      "general": "The area of a planar region is a number, and the area of the unit square is 1. Congruent regions have equal area. If two regions overlap only along their boundaries, the area of their union is the sum of their areas."
    },
    {
      "name": "Equality of fractions",
      "concrete": "The equality $\\frac{1}{3}=\\frac{2}{6}$ holds because both fraction symbols denote the same point on the number line.",
      "general": "Fractions $\\frac{a}{b}$ and $\\frac{m}{n}$ are **equal**, written $\\frac{a}{b}=\\frac{m}{n}$, when their fraction symbols denote the same point on the number line."
    },
    {
      "name": "Order of fractions",
      "concrete": "The inequality $\\frac{2}{3}<\\frac{5}{6}$ holds because $\\frac{2}{3}$ lies to the left of $\\frac{5}{6}$ on the number line.",
      "general": "For fractions $A$ and $B$, the statement $A<B$ means $A$ lies to the left of $B$ on the number line."
    }
  ],
  "kinds": [
    {
      "id": "t12-k1",
      "forms": [
        {
          "example": {
            "problem": "Write $\\frac{84}{17}$ as a whole number plus a proper fraction.",
            "lines": [
              {
                "step": "$84 = (4\\times 17) + 16$.",
                "reason": "division-with-remainder, dividing 84 by 17"
              },
              {
                "step": "$\\frac{84}{17} = \\frac{(4\\times 17)+16}{17}$.",
                "reason": "rewriting the numerator using the division"
              },
              {
                "step": "The $(4\\times 17)+16$ copies of $\\frac{1}{17}$ split into a run of $4\\times 17$ copies followed by 16 more copies.",
                "reason": "a count of copies of $\\frac{1}{17}$ splits into the two runs its sum names"
              },
              {
                "step": "$\\frac{4\\times 17}{17} = 4$.",
                "reason": "for whole numbers $m,\\ell$ with $\\ell$ greater than 0, $\\frac{m\\ell}{\\ell}=m$"
              },
              {
                "step": "$4\\,\\frac{16}{17}$.",
                "reason": "combining the previous two lines, with $\\frac{16}{17}$ a proper fraction less than 1",
                "figure": {
                  "file": "fractions-and-decimals-defined-1.json",
                  "alt": "A number line from 4 to 5, the whole numbers 4 and 5 marked, with 4 16/17 marked near 5."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $\\frac{255}{101}$ as a whole number plus a proper fraction.",
              "answer": "2 53/101",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "$255 = (2\\times 101) + 53$.",
                  "reason": "division-with-remainder, dividing 255 by 101"
                },
                {
                  "step": "$\\frac{255}{101} = \\frac{(2\\times 101)+53}{101}$.",
                  "reason": "rewriting the numerator using the division"
                },
                {
                  "step": "The $(2\\times 101)+53$ copies of $\\frac{1}{101}$ split into a run of $2\\times 101$ copies followed by 53 more copies.",
                  "reason": "a count of copies of $\\frac{1}{101}$ splits into the two runs its sum names"
                },
                {
                  "step": "$\\frac{2\\times 101}{101} = 2$.",
                  "reason": "for whole numbers $m,\\ell$ with $\\ell$ greater than 0, $\\frac{m\\ell}{\\ell}=m$"
                },
                {
                  "step": "$2\\,\\frac{53}{101}$.",
                  "reason": "combining the previous two lines, with $\\frac{53}{101}$ a proper fraction less than 1"
                }
              ]
            },
            {
              "prompt": "Write $\\frac{49}{5}$ as a whole number plus a proper fraction.",
              "answer": "9 4/5",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "$49 = (9\\times 5) + 4$.",
                  "reason": "division-with-remainder, dividing 49 by 5"
                },
                {
                  "step": "$\\frac{49}{5} = \\frac{(9\\times 5)+4}{5}$.",
                  "reason": "rewriting the numerator using the division"
                },
                {
                  "step": "The $(9\\times 5)+4$ copies of $\\frac{1}{5}$ split into a run of $9\\times 5$ copies followed by 4 more copies.",
                  "reason": "a count of copies of $\\frac{1}{5}$ splits into the two runs its sum names"
                },
                {
                  "step": "$\\frac{9\\times 5}{5} = 9$.",
                  "reason": "for whole numbers $m,\\ell$ with $\\ell$ greater than 0, $\\frac{m\\ell}{\\ell}=m$"
                },
                {
                  "step": "$9\\,\\frac{4}{5}$.",
                  "reason": "combining the previous two lines, with $\\frac{4}{5}$ a proper fraction less than 1"
                }
              ]
            },
            {
              "prompt": "Write $\\frac{73}{12}$ as a whole number plus a proper fraction.",
              "answer": "6 1/12",
              "form": "Answer as a mixed number in lowest terms, or equivalent.",
              "lines": [
                {
                  "step": "$73 = (6\\times 12) + 1$.",
                  "reason": "division-with-remainder, dividing 73 by 12"
                },
                {
                  "step": "$\\frac{73}{12} = \\frac{(6\\times 12)+1}{12}$.",
                  "reason": "rewriting the numerator using the division"
                },
                {
                  "step": "The $(6\\times 12)+1$ copies of $\\frac{1}{12}$ split into a run of $6\\times 12$ copies followed by 1 more copy.",
                  "reason": "a count of copies of $\\frac{1}{12}$ splits into the two runs its sum names"
                },
                {
                  "step": "$\\frac{6\\times 12}{12} = 6$.",
                  "reason": "for whole numbers $m,\\ell$ with $\\ell$ greater than 0, $\\frac{m\\ell}{\\ell}=m$"
                },
                {
                  "step": "$6\\,\\frac{1}{12}$.",
                  "reason": "combining the previous two lines, with $\\frac{1}{12}$ a proper fraction less than 1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t12-k2",
      "forms": []
    },
    {
      "id": "t12-k3",
      "forms": [
        {
          "example": {
            "problem": "Write $\\frac{163\\,079}{10^8}$ as a finite decimal.",
            "lines": [
              {
                "step": "The denominator's exponent is 8, so the decimal has 8 digits to the right of the point.",
                "reason": "the count of decimal digits equals the exponent of 10 in the denominator"
              },
              {
                "step": "The numerator $163\\,079$ has 6 digits, 2 fewer than 8, so 2 zeros go between the point and those digits.",
                "reason": "when the numerator has fewer digits than the exponent, zeros fill the places next to the point"
              },
              {
                "step": "$0.001\\,630\\,79$.",
                "reason": "combining the previous two lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $\\frac{4\\,507}{10^6}$ as a finite decimal.",
              "answer": "0.004507",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "The denominator's exponent is 6, so the decimal has 6 digits to the right of the point.",
                  "reason": "the count of decimal digits equals the exponent of 10 in the denominator"
                },
                {
                  "step": "The numerator $4\\,507$ has 4 digits, 2 fewer than 6, so 2 zeros go between the point and those digits.",
                  "reason": "when the numerator has fewer digits than the exponent, zeros fill the places next to the point"
                },
                {
                  "step": "$0.004\\,507$.",
                  "reason": "combining the previous two lines"
                }
              ]
            },
            {
              "prompt": "Write $\\frac{24}{10^5}$ as a finite decimal.",
              "answer": "0.00024",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "The denominator's exponent is 5, so the decimal has 5 digits to the right of the point.",
                  "reason": "the count of decimal digits equals the exponent of 10 in the denominator"
                },
                {
                  "step": "The numerator $24$ has 2 digits, 3 fewer than 5, so 3 zeros go between the point and those digits.",
                  "reason": "when the numerator has fewer digits than the exponent, zeros fill the places next to the point"
                },
                {
                  "step": "$0.000\\,24$.",
                  "reason": "combining the previous two lines"
                }
              ]
            },
            {
              "prompt": "Write $\\frac{719}{10^5}$ as a finite decimal.",
              "answer": "0.00719",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "The denominator's exponent is 5, so the decimal has 5 digits to the right of the point.",
                  "reason": "the count of decimal digits equals the exponent of 10 in the denominator"
                },
                {
                  "step": "The numerator $719$ has 3 digits, 2 fewer than 5, so 2 zeros go between the point and those digits.",
                  "reason": "when the numerator has fewer digits than the exponent, zeros fill the places next to the point"
                },
                {
                  "step": "$0.007\\,19$.",
                  "reason": "combining the previous two lines"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Write $4.26$ as a fraction with denominator a power of 10.",
            "lines": [
              {
                "step": "The decimal $4.26$ has 2 digits to the right of the point, so its denominator is $10^2$.",
                "reason": "the count of decimal digits equals the exponent of 10 in the denominator"
              },
              {
                "step": "The digits of $4.26$, read as a whole number, are 426.",
                "reason": "removing the decimal point gives the fraction's numerator"
              },
              {
                "step": "$\\frac{426}{100}$.",
                "reason": "combining the previous two lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Write $2.51$ as a fraction with denominator a power of 10.",
              "answer": "251/100",
              "form": "Answer as a fraction whose denominator is a power of 10, as in 43/100.",
              "lines": [
                {
                  "step": "The decimal $2.51$ has 2 digits to the right of the point, so its denominator is $10^2$.",
                  "reason": "the count of decimal digits equals the exponent of 10 in the denominator"
                },
                {
                  "step": "The digits of $2.51$, read as a whole number, are 251.",
                  "reason": "removing the decimal point gives the fraction's numerator"
                },
                {
                  "step": "$\\frac{251}{100}$.",
                  "reason": "combining the previous two lines"
                }
              ]
            },
            {
              "prompt": "Write $5.89$ as a fraction with denominator a power of 10.",
              "answer": "589/100",
              "form": "Answer as a fraction whose denominator is a power of 10, as in 43/100.",
              "lines": [
                {
                  "step": "The decimal $5.89$ has 2 digits to the right of the point, so its denominator is $10^2$.",
                  "reason": "the count of decimal digits equals the exponent of 10 in the denominator"
                },
                {
                  "step": "The digits of $5.89$, read as a whole number, are 589.",
                  "reason": "removing the decimal point gives the fraction's numerator"
                },
                {
                  "step": "$\\frac{589}{100}$.",
                  "reason": "combining the previous two lines"
                }
              ]
            },
            {
              "prompt": "Write $12.7$ as a fraction with denominator a power of 10.",
              "answer": "127/10",
              "form": "Answer as a fraction whose denominator is a power of 10, as in 43/100.",
              "lines": [
                {
                  "step": "The decimal $12.7$ has 1 digit to the right of the point, so its denominator is $10^1$.",
                  "reason": "the count of decimal digits equals the exponent of 10 in the denominator"
                },
                {
                  "step": "The digits of $12.7$, read as a whole number, are 127.",
                  "reason": "removing the decimal point gives the fraction's numerator"
                },
                {
                  "step": "$\\frac{127}{10}$.",
                  "reason": "combining the previous two lines"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t12-k4",
      "forms": [
        {
          "example": {
            "problem": "Find the fraction of a dollar (100 cents, the unit 1) that a nickel (5 cents) represents.",
            "lines": [
              {
                "step": "Dividing the unit (100 cents) into 100 parts of equal value gives parts worth 1 cent each.",
                "reason": "the unit represents the value of a quantity that you partition into equal-value parts"
              },
              {
                "step": "A nickel, worth 5 cents, is 5 of these 100 equal parts.",
                "reason": "a value of 5 cents is 5 parts of 1 cent each"
              },
              {
                "step": "$\\frac{5}{100}$.",
                "reason": "a fraction $\\frac{k}{\\ell}$ represents $k$ parts when you partition the unit into $\\ell$ equal parts"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the fraction of a dollar (100 cents, the unit 1) that a penny (1 cent) represents.",
              "answer": "1/100",
              "form": "Answer as a number, or equivalent.",
              "lines": [
                {
                  "step": "Dividing the unit (100 cents) into 100 parts of equal value gives parts worth 1 cent each.",
                  "reason": "the unit represents the value of a quantity that you partition into equal-value parts"
                },
                {
                  "step": "A penny, worth 1 cent, is 1 of these 100 equal parts.",
                  "reason": "a value of 1 cent is 1 part of 1 cent"
                },
                {
                  "step": "$\\frac{1}{100}$.",
                  "reason": "a fraction $\\frac{k}{\\ell}$ represents $k$ parts when you partition the unit into $\\ell$ equal parts"
                }
              ]
            },
            {
              "prompt": "Find the fraction of a dollar (100 cents, the unit 1) that a dime (10 cents) represents.",
              "answer": "10/100",
              "form": "Answer as a number, or equivalent.",
              "lines": [
                {
                  "step": "Dividing the unit (100 cents) into 100 parts of equal value gives parts worth 1 cent each.",
                  "reason": "the unit represents the value of a quantity that you partition into equal-value parts"
                },
                {
                  "step": "A dime, worth 10 cents, is 10 of these 100 equal parts.",
                  "reason": "a value of 10 cents is 10 parts of 1 cent each"
                },
                {
                  "step": "$\\frac{10}{100}$.",
                  "reason": "a fraction $\\frac{k}{\\ell}$ represents $k$ parts when you partition the unit into $\\ell$ equal parts"
                }
              ]
            },
            {
              "prompt": "Find the fraction of a dollar (100 cents, the unit 1) that a quarter (25 cents) represents.",
              "answer": "25/100",
              "form": "Answer as a number, or equivalent.",
              "lines": [
                {
                  "step": "Dividing the unit (100 cents) into 100 parts of equal value gives parts worth 1 cent each.",
                  "reason": "the unit represents the value of a quantity that you partition into equal-value parts"
                },
                {
                  "step": "A quarter, worth 25 cents, is 25 of these 100 equal parts.",
                  "reason": "a value of 25 cents is 25 parts of 1 cent each"
                },
                {
                  "step": "$\\frac{25}{100}$.",
                  "reason": "a fraction $\\frac{k}{\\ell}$ represents $k$ parts when you partition the unit into $\\ell$ equal parts"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the day's planned driving distance, if you have driven 150 miles, two-thirds of it.",
            "lines": [
              {
                "step": "Two-thirds of the planned total $T$ is 150 miles.",
                "reason": "restating the given data"
              },
              {
                "step": "One-third of $T$ is $150\\div 2 = 75$ miles.",
                "reason": "two equal parts of $T$ together make 150 miles, so one of those parts is half of 150"
              },
              {
                "step": "$T = 3\\times 75 = 225$.",
                "reason": "the whole $T$ is 3 of the 3 equal parts, each 75 miles"
              },
              {
                "step": "$225$.",
                "reason": "combining the previous two lines"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find how many pages a book has, if you have read 200 pages, four-fifths of it.",
              "answer": "250",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Four-fifths of the book's total pages $P$ is 200 pages.",
                  "reason": "restating the given data"
                },
                {
                  "step": "One-fifth of $P$ is $200\\div 4 = 50$ pages.",
                  "reason": "four equal parts of $P$ together make 200 pages, so one of those parts is a quarter of 200"
                },
                {
                  "step": "$P = 5\\times 50 = 250$.",
                  "reason": "the whole $P$ is 5 of the 5 equal parts, each 50 pages"
                },
                {
                  "step": "$250$.",
                  "reason": "combining the previous two lines"
                }
              ]
            },
            {
              "prompt": "Find the distance from Helena's home to school, if she has walked $0.9$ miles, three-quarters of it.",
              "answer": "1.2",
              "form": "Answer as a finite decimal.",
              "lines": [
                {
                  "step": "Three-quarters of the distance $D$ is $0.9$ miles.",
                  "reason": "restating the given data"
                },
                {
                  "step": "One-quarter of $D$ is $0.9\\div 3 = 0.3$ miles.",
                  "reason": "three equal parts of $D$ together make $0.9$ miles, so one of those parts is a third of $0.9$"
                },
                {
                  "step": "$D = 4\\times 0.3 = 1.2$.",
                  "reason": "the whole $D$ is 4 of the 4 equal parts, each $0.3$ miles"
                },
                {
                  "step": "$1.2$.",
                  "reason": "combining the previous two lines"
                }
              ]
            },
            {
              "prompt": "Find a savings goal, if you have saved \\$120, three-fifths of it.",
              "answer": "200",
              "form": "Answer as a whole number.",
              "lines": [
                {
                  "step": "Three-fifths of the goal $G$ is \\$120.",
                  "reason": "restating the given data"
                },
                {
                  "step": "One-fifth of $G$ is $120\\div 3 = 40$ dollars.",
                  "reason": "three equal parts of $G$ together make 120 dollars, so one of those parts is a third of 120"
                },
                {
                  "step": "$G = 5\\times 40 = 200$.",
                  "reason": "the whole $G$ is 5 of the 5 equal parts, each 40 dollars"
                },
                {
                  "step": "$200$.",
                  "reason": "combining the previous two lines"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t12-k5",
      "forms": [
        {
          "example": {
            "problem": "Find the fraction of the unit that one triangular region represents. The diagonals of a unit square divide it into 4 congruent triangular regions.",
            "lines": [
              {
                "step": "The unit square's area is 1, and the 4 triangular regions are congruent, so they have equal area.",
                "reason": "the unit square's area is 1, and congruent regions have equal area"
              },
              {
                "step": "The unit splits into 4 parts of equal area.",
                "reason": "the four equal-area triangles make up the whole square"
              },
              {
                "step": "$\\frac{1}{4}$.",
                "reason": "taking 1 of 4 equal parts of the unit gives $\\frac{1}{4}$, by the meaning of a fraction of a unit"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the fraction of the unit that a shaded region represents. A unit square (the unit 1) has 7 congruent columns, and 4 of them are shaded.",
              "answer": "4/7",
              "form": "Answer as a number, or equivalent.",
              "lines": [
                {
                  "step": "The unit square's area is 1, and the 7 columns are congruent, so they have equal area.",
                  "reason": "the unit square's area is 1, and congruent regions have equal area"
                },
                {
                  "step": "The unit splits into 7 parts of equal area.",
                  "reason": "the seven equal-area columns make up the whole square"
                },
                {
                  "step": "$\\frac{4}{7}$.",
                  "reason": "taking 4 of 7 equal parts of the unit gives $\\frac{4}{7}$, by the meaning of a fraction of a unit"
                }
              ]
            },
            {
              "prompt": "Find the fraction of the unit that a shaded region represents. A unit square (the unit 1) has 15 congruent cells from a $5\\times 3$ grid, and 8 of them are shaded.",
              "answer": "8/15",
              "form": "Answer as a number, or equivalent.",
              "lines": [
                {
                  "step": "The unit square's area is 1, and the 15 cells are congruent, so they have equal area.",
                  "reason": "the unit square's area is 1, and congruent regions have equal area"
                },
                {
                  "step": "The unit splits into 15 parts of equal area.",
                  "reason": "the fifteen equal-area cells make up the whole square"
                },
                {
                  "step": "$\\frac{8}{15}$.",
                  "reason": "taking 8 of 15 equal parts of the unit gives $\\frac{8}{15}$, by the meaning of a fraction of a unit"
                }
              ]
            },
            {
              "prompt": "Find the fraction of the unit that a shaded region represents. A unit rectangle (the unit 1) has 9 congruent strips, and 5 of them are shaded.",
              "answer": "5/9",
              "form": "Answer as a number, or equivalent.",
              "lines": [
                {
                  "step": "The unit rectangle's area is 1, and the 9 strips are congruent, so they have equal area.",
                  "reason": "the unit rectangle's area is 1, and congruent regions have equal area"
                },
                {
                  "step": "The unit splits into 9 parts of equal area.",
                  "reason": "the nine equal-area strips make up the whole rectangle"
                },
                {
                  "step": "$\\frac{5}{9}$.",
                  "reason": "taking 5 of 9 equal parts of the unit gives $\\frac{5}{9}$, by the meaning of a fraction of a unit"
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Find the fraction of a new unit that region A represents. The diagonals of a unit square cut it into 4 congruent triangles, and region A is 2 of them. Its area is $\\frac{1}{2}$ of a full square. A $4\\times 2$ grid cuts a same-size square into 8 congruent cells, and the new unit is 5 of them. Its area is $\\frac{5}{8}$ of a full square.",
            "lines": [
              {
                "step": "The new unit has area $\\frac{5}{8}$ of a full square.",
                "reason": "restating the given data"
              },
              {
                "step": "Region A has area $\\frac{1}{2}$ of a full square.",
                "reason": "restating the given data"
              },
              {
                "step": "Split each half into 4 equal parts. This gives 8 equal parts, so region A's area equals $\\frac{4}{8}$ of a full square.",
                "reason": "dividing the square into 8 equal parts instead of 2 splits each part into equal pieces and keeps the area"
              },
              {
                "step": "$\\frac{4}{5}$.",
                "reason": "region A is 4 of the new unit's 5 equal parts, by the meaning of a fraction of a unit"
              }
            ]
          },
          "fade": [
            {
              "prompt": "Find the fraction of the new unit that region B represents. The new unit is 3 of 8 congruent cells of a square and has area $\\frac{3}{8}$ of a full square. Region B has area $\\frac{1}{2}$ of a full square.",
              "answer": "4/3",
              "form": "Answer as a number, or equivalent.",
              "lines": [
                {
                  "step": "The new unit has area $\\frac{3}{8}$ of a full square.",
                  "reason": "restating the given data"
                },
                {
                  "step": "Region B has area $\\frac{1}{2}$ of a full square.",
                  "reason": "restating the given data"
                },
                {
                  "step": "Split each half into 4 equal parts. This gives 8 equal parts, so region B's area equals $\\frac{4}{8}$ of a full square.",
                  "reason": "dividing the square into 8 equal parts instead of 2 splits each part into equal pieces and keeps the area"
                },
                {
                  "step": "$\\frac{4}{3}$.",
                  "reason": "region B is 4 of the new unit's 3 equal parts, by the meaning of a fraction of a unit"
                }
              ]
            },
            {
              "prompt": "Find the fraction of the new unit that region C represents. The new unit is 5 of 8 congruent cells of a square and has area $\\frac{5}{8}$ of a full square. Region C has area $\\frac{3}{2}$ of a full square.",
              "answer": "12/5",
              "form": "Answer as a number, or equivalent.",
              "lines": [
                {
                  "step": "The new unit has area $\\frac{5}{8}$ of a full square.",
                  "reason": "restating the given data"
                },
                {
                  "step": "Region C has area $\\frac{3}{2}$ of a full square.",
                  "reason": "restating the given data"
                },
                {
                  "step": "Split each half into 4 equal parts. This gives 8 equal parts, so region C's area equals $\\frac{12}{8}$ of a full square.",
                  "reason": "dividing the square into 8 equal parts instead of 2 splits each part into equal pieces and keeps the area"
                },
                {
                  "step": "$\\frac{12}{5}$.",
                  "reason": "region C is 12 of the new unit's 5 equal parts, by the meaning of a fraction of a unit"
                }
              ]
            },
            {
              "prompt": "Find the fraction of a new unit that a region represents. The region has area $\\frac{1}{2}$ of a full square. The new unit is 3 of 4 equal columns of a same-size square, with area $\\frac{3}{4}$ of a full square.",
              "answer": "2/3",
              "form": "Answer as a number, or equivalent.",
              "lines": [
                {
                  "step": "The new unit has area $\\frac{3}{4}$ of a full square.",
                  "reason": "restating the given data"
                },
                {
                  "step": "The region has area $\\frac{1}{2}$ of a full square.",
                  "reason": "restating the given data"
                },
                {
                  "step": "Split each half into 2 equal parts. This gives 4 equal parts, so the region's area equals $\\frac{2}{4}$ of a full square.",
                  "reason": "dividing the square into 4 equal parts instead of 2 splits each part into equal pieces and keeps the area"
                },
                {
                  "step": "$\\frac{2}{3}$.",
                  "reason": "the region is 2 of the new unit's 3 equal parts, by the meaning of a fraction of a unit"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "t12-k6",
      "forms": [
        {
          "example": {
            "problem": "Place $\\frac{15}{4}$.",
            "figure": {
              "file": "place:line:15/4",
              "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked, nothing between."
            },
            "lines": [
              {
                "step": "$15=3\\times 4+3$, so $\\frac{15}{4}=3+\\frac{3}{4}$.",
                "reason": "15 copies of $\\frac{1}{4}$ hold 3 groups of 4 copies, each group making 1, with 3 copies left over"
              },
              {
                "step": "The mark lies between 3 and 4, $\\frac{3}{4}$ of the way from 3 to 4.",
                "reason": "the whole part 3 puts the mark in the unit from 3 to 4, and 3 of the 4 equal parts of that unit come before it",
                "figure": {
                  "file": "place:mark:15/4",
                  "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked, with 15/4 marked, between 3 and 4."
                }
              },
              {
                "step": "$\\frac{3}{4}=\\frac{3\\times 25}{4\\times 25}=\\frac{75}{100}=0.75$.",
                "reason": "multiplying the numerator and the denominator by 25 gives an equal fraction over 100, and a fraction over 100 is a decimal in hundredths"
              },
              {
                "step": "$3.75$.",
                "reason": "the whole part and the decimal part written together",
                "figure": {
                  "file": "place:check:15/4",
                  "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked and each unit cut into tenths. 15/4 lies at 3.75, in the tenth from 3.7 to 3.8, between 3 and 4."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $\\frac{13}{5}$.",
              "answer": "13/5",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$13=2\\times 5+3$, so $\\frac{13}{5}=2+\\frac{3}{5}$.",
                  "reason": "13 copies of $\\frac{1}{5}$ hold 2 groups of 5 copies, each group making 1, with 3 copies left over"
                },
                {
                  "step": "The mark lies between 2 and 3, $\\frac{3}{5}$ of the way from 2 to 3.",
                  "reason": "the whole part 2 puts the mark in the unit from 2 to 3, and 3 of the 5 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{3}{5}=\\frac{3\\times 2}{5\\times 2}=\\frac{6}{10}=0.6$.",
                  "reason": "multiplying the numerator and the denominator by 2 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$2.6$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:13/5",
                    "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked and each unit cut into tenths. 13/5 lies at 2.6, between 2 and 3."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{29}{8}$.",
              "answer": "29/8",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$29=3\\times 8+5$, so $\\frac{29}{8}=3+\\frac{5}{8}$.",
                  "reason": "29 copies of $\\frac{1}{8}$ hold 3 groups of 8 copies, each group making 1, with 5 copies left over"
                },
                {
                  "step": "The mark lies between 3 and 4, $\\frac{5}{8}$ of the way from 3 to 4.",
                  "reason": "the whole part 3 puts the mark in the unit from 3 to 4, and 5 of the 8 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{5}{8}=\\frac{5\\times 125}{8\\times 125}=\\frac{625}{1\\,000}=0.625$.",
                  "reason": "multiplying the numerator and the denominator by 125 gives an equal fraction over $1\\,000$, and a fraction over $1\\,000$ is a decimal in thousandths"
                },
                {
                  "step": "$3.625$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:29/8",
                    "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked and each unit cut into tenths. 29/8 lies at 3.625, in the tenth from 3.6 to 3.7, between 3 and 4."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{43}{20}$.",
              "answer": "43/20",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "$43=2\\times 20+3$, so $\\frac{43}{20}=2+\\frac{3}{20}$.",
                  "reason": "43 copies of $\\frac{1}{20}$ hold 2 groups of 20 copies, each group making 1, with 3 copies left over"
                },
                {
                  "step": "The mark lies between 2 and 3, $\\frac{3}{20}$ of the way from 2 to 3.",
                  "reason": "the whole part 2 puts the mark in the unit from 2 to 3, and 3 of the 20 equal parts of that unit come before it"
                },
                {
                  "step": "$\\frac{3}{20}=\\frac{3\\times 5}{20\\times 5}=\\frac{15}{100}=0.15$.",
                  "reason": "multiplying the numerator and the denominator by 5 gives an equal fraction over 100, and a fraction over 100 is a decimal in hundredths"
                },
                {
                  "step": "$2.15$.",
                  "reason": "the whole part and the decimal part written together",
                  "figure": {
                    "file": "place:check:43/20",
                    "alt": "Number line from 0 to 3, the whole numbers 0 to 3 marked and each unit cut into tenths. 43/20 lies at 2.15, in the tenth from 2.1 to 2.2, between 2 and 3."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Place $\\frac{7}{8}$.",
            "figure": {
              "file": "place:line:7/8",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
            "lines": [
              {
                "step": "The unit from 0 to 1 is cut into 8 equal parts, and the mark is the end of part 7.",
                "reason": "the denominator 8 gives the number of equal parts of the unit, and the numerator 7 counts the parts from 0"
              },
              {
                "step": "$\\frac{7}{8}=\\frac{7\\times 125}{8\\times 125}=\\frac{875}{1\\,000}=0.875$.",
                "reason": "multiplying the numerator and the denominator by 125 gives an equal fraction over $1\\,000$, and a fraction over $1\\,000$ is a decimal in thousandths"
              },
              {
                "step": "$0.875$.",
                "reason": "the place of the mark, between 0 and 1, written as a decimal",
                "figure": {
                  "file": "place:check:7/8",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 7/8 lies at 0.875, in the tenth from 0.8 to 0.9, between 0 and 1."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $\\frac{4}{5}$.",
              "answer": "4/5",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The unit from 0 to 1 is cut into 5 equal parts, and the mark is the end of part 4.",
                  "reason": "the denominator 5 gives the number of equal parts of the unit, and the numerator 4 counts the parts from 0"
                },
                {
                  "step": "$\\frac{4}{5}=\\frac{4\\times 2}{5\\times 2}=\\frac{8}{10}=0.8$.",
                  "reason": "multiplying the numerator and the denominator by 2 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$0.8$.",
                  "reason": "the place of the mark, between 0 and 1, written as a decimal",
                  "figure": {
                    "file": "place:check:4/5",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 4/5 lies at 0.8, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{3}{5}$.",
              "answer": "3/5",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The unit from 0 to 1 is cut into 5 equal parts, and the mark is the end of part 3.",
                  "reason": "the denominator 5 gives the number of equal parts of the unit, and the numerator 3 counts the parts from 0"
                },
                {
                  "step": "$\\frac{3}{5}=\\frac{3\\times 2}{5\\times 2}=\\frac{6}{10}=0.6$.",
                  "reason": "multiplying the numerator and the denominator by 2 gives an equal fraction over 10, and a fraction over 10 is a decimal in tenths"
                },
                {
                  "step": "$0.6$.",
                  "reason": "the place of the mark, between 0 and 1, written as a decimal",
                  "figure": {
                    "file": "place:check:3/5",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 3/5 lies at 0.6, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $\\frac{3}{8}$.",
              "answer": "3/8",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The unit from 0 to 1 is cut into 8 equal parts, and the mark is the end of part 3.",
                  "reason": "the denominator 8 gives the number of equal parts of the unit, and the numerator 3 counts the parts from 0"
                },
                {
                  "step": "$\\frac{3}{8}=\\frac{3\\times 125}{8\\times 125}=\\frac{375}{1\\,000}=0.375$.",
                  "reason": "multiplying the numerator and the denominator by 125 gives an equal fraction over $1\\,000$, and a fraction over $1\\,000$ is a decimal in thousandths"
                },
                {
                  "step": "$0.375$.",
                  "reason": "the place of the mark, between 0 and 1, written as a decimal",
                  "figure": {
                    "file": "place:check:3/8",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 3/8 lies at 0.375, in the tenth from 0.3 to 0.4, between 0 and 1."
                  }
                }
              ]
            }
          ]
        },
        {
          "example": {
            "problem": "Place $0.05$.",
            "figure": {
              "file": "place:line:0.05",
              "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, nothing between."
            },
            "lines": [
              {
                "step": "The whole part of $0.05$ is 0, so the mark lies between 0 and 1.",
                "reason": "the digits before the point give the whole number the decimal lies past"
              },
              {
                "step": "The part after the point is $0.05=\\frac{5}{100}$.",
                "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
              },
              {
                "step": "The tenths digit is 0 and 5 hundredths follow it, so the mark lies short of the first cut of the unit from $0$ to $1$, between $0$ and $0.1$.",
                "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut",
                "figure": {
                  "file": "place:mark:0.05",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked, with 0.05 marked, between 0 and 1."
                }
              },
              {
                "step": "$0.05$.",
                "reason": "the place of the mark, written as the decimal itself",
                "figure": {
                  "file": "place:check:0.05",
                  "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 0.05 lies at 0.05, in the tenth from 0 to 0.1, between 0 and 1."
                }
              }
            ]
          },
          "fade": [
            {
              "prompt": "Place $1.05$.",
              "answer": "1.05",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $1.05$ is 1, so the mark lies between 1 and 2.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.05=\\frac{5}{100}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 0 and 5 hundredths follow it, so the mark lies short of the first cut of the unit from $1$ to $2$, between $1$ and $1.1$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$1.05$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:1.05",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 1.05 lies at 1.05, in the tenth from 1 to 1.1, between 1 and 2."
                  }
                }
              ]
            },
            {
              "prompt": "Place $0.08$.",
              "answer": "0.08",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $0.08$ is 0, so the mark lies between 0 and 1.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.08=\\frac{8}{100}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 0 and 8 hundredths follow it, so the mark lies short of the first cut of the unit from $0$ to $1$, between $0$ and $0.1$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$0.08$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:0.08",
                    "alt": "Number line from 0 to 2, the whole numbers 0 to 2 marked and each unit cut into tenths. 0.08 lies at 0.08, in the tenth from 0 to 0.1, between 0 and 1."
                  }
                }
              ]
            },
            {
              "prompt": "Place $3.04$.",
              "answer": "3.04",
              "form": "Answer as a mark on the line, or as a decimal to one place.",
              "lines": [
                {
                  "step": "The whole part of $3.04$ is 3, so the mark lies between 3 and 4.",
                  "reason": "the digits before the point give the whole number the decimal lies past"
                },
                {
                  "step": "The part after the point is $0.04=\\frac{4}{100}$.",
                  "reason": "a decimal is the fraction over a power of 10 that its places name, with its digits as the numerator"
                },
                {
                  "step": "The tenths digit is 0 and 4 hundredths follow it, so the mark lies short of the first cut of the unit from $3$ to $4$, between $3$ and $3.1$.",
                  "reason": "the tenths digit counts the cuts of the unit, and the hundredths digit the part past the last cut"
                },
                {
                  "step": "$3.04$.",
                  "reason": "the place of the mark, written as the decimal itself",
                  "figure": {
                    "file": "place:check:3.04",
                    "alt": "Number line from 0 to 4, the whole numbers 0 to 4 marked and each unit cut into tenths. 3.04 lies at 3.04, in the tenth from 3 to 3.1, between 3 and 4."
                  }
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
