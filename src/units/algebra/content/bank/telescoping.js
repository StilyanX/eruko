export default [
  {
    "id": "t182-k1-p01",
    "topic": "telescoping",
    "kind": "t182-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Evaluate $(87 - 94) + (94 - 101) + (101 - 108) + \\dots + (192 - 199)$.",
    "form": "Answer as an integer.",
    "answer": "-112",
    "solution": [
      "Evaluate $(87 - 94) + (94 - 101) + (101 - 108) + \\dots + (192 - 199)$.",
      "Without brackets the sum is $87 - 94 + 94 - 101 + 101 - \\dots + 192 - 199$.",
      "The sum is $87 + (-94 + 94) + (-101 + 101) + \\dots + (-192 + 192) - 199$.",
      "The sum is $87 - 199$.",
      "$87 - 199 = -112$"
    ]
  },
  {
    "id": "t182-k1-p02",
    "topic": "telescoping",
    "kind": "t182-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Evaluate $(130 - 139) + (139 - 148) + (148 - 157) + \\dots + (337 - 346)$.",
    "form": "Answer as an integer.",
    "answer": "-216",
    "solution": [
      "Evaluate $(130 - 139) + (139 - 148) + (148 - 157) + \\dots + (337 - 346)$.",
      "Without brackets the sum is $130 - 139 + 139 - 148 + 148 - \\dots + 337 - 346$.",
      "The sum is $130 + (-139 + 139) + (-148 + 148) + \\dots + (-337 + 337) - 346$.",
      "The sum is $130 - 346$.",
      "$130 - 346 = -216$"
    ]
  },
  {
    "id": "t182-k1-p03",
    "topic": "telescoping",
    "kind": "t182-k1",
    "formNo": 1,
    "calc": "no",
    "prompt": "Evaluate $(358 - 354) + (354 - 350) + (350 - 346) + \\dots + (310 - 306)$.",
    "form": "Answer as an integer.",
    "answer": "52",
    "solution": [
      "Evaluate $(358 - 354) + (354 - 350) + (350 - 346) + \\dots + (310 - 306)$.",
      "Without brackets the sum is $358 - 354 + 354 - 350 + 350 - \\dots + 310 - 306$.",
      "The sum is $358 + (-354 + 354) + (-350 + 350) + \\dots + (-310 + 310) - 306$.",
      "The sum is $358 - 306$.",
      "$358 - 306 = 52$"
    ]
  },
  {
    "id": "t182-k1-p04",
    "topic": "telescoping",
    "kind": "t182-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Evaluate $\\dfrac{11}{9 \\cdot 14} + \\dfrac{11}{14 \\cdot 19} + \\dfrac{11}{19 \\cdot 24} + \\dots + \\dfrac{11}{49 \\cdot 54}$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "11/54",
    "solution": [
      "Evaluate $\\dfrac{11}{9 \\cdot 14} + \\dfrac{11}{14 \\cdot 19} + \\dfrac{11}{19 \\cdot 24} + \\dots + \\dfrac{11}{49 \\cdot 54}$.",
      "Each term is $\\dfrac{11}{k(k + 5)}$, for $k = 9, 14, \\dots, 49$.",
      "$\\dfrac{11}{k(k + 5)} = \\dfrac{a}{k} + \\dfrac{b}{k + 5}$",
      "$11 = a(k + 5) + bk$",
      "$a = \\dfrac{11}{5}$",
      "$b = -\\dfrac{11}{5}$",
      "The sum is $\\dfrac{11}{5}\\left(\\dfrac{1}{9} - \\dfrac{1}{14}\\right) + \\dfrac{11}{5}\\left(\\dfrac{1}{14} - \\dfrac{1}{19}\\right) + \\dots + \\dfrac{11}{5}\\left(\\dfrac{1}{49} - \\dfrac{1}{54}\\right)$.",
      "The sum is $\\dfrac{11}{5}\\left(\\dfrac{1}{9} - \\dfrac{1}{14} + \\dfrac{1}{14} - \\dfrac{1}{19} + \\dots + \\dfrac{1}{49} - \\dfrac{1}{54}\\right)$.",
      "The sum is $\\dfrac{11}{5}\\left(\\dfrac{1}{9} - \\dfrac{1}{54}\\right)$.",
      "$\\dfrac{1}{9} - \\dfrac{1}{54} = \\dfrac{45}{486}$",
      "$\\dfrac{11}{5} \\cdot \\dfrac{45}{486} = \\dfrac{11}{54}$"
    ]
  },
  {
    "id": "t182-k1-p05",
    "topic": "telescoping",
    "kind": "t182-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Evaluate $\\dfrac{10}{7 \\cdot 11} + \\dfrac{10}{11 \\cdot 15} + \\dfrac{10}{15 \\cdot 19} + \\dots + \\dfrac{10}{55 \\cdot 59}$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "130/413",
    "solution": [
      "Evaluate $\\dfrac{10}{7 \\cdot 11} + \\dfrac{10}{11 \\cdot 15} + \\dfrac{10}{15 \\cdot 19} + \\dots + \\dfrac{10}{55 \\cdot 59}$.",
      "Each term is $\\dfrac{10}{k(k + 4)}$, for $k = 7, 11, \\dots, 55$.",
      "$\\dfrac{10}{k(k + 4)} = \\dfrac{a}{k} + \\dfrac{b}{k + 4}$",
      "$10 = a(k + 4) + bk$",
      "$a = \\dfrac{5}{2}$",
      "$b = -\\dfrac{5}{2}$",
      "The sum is $\\dfrac{5}{2}\\left(\\dfrac{1}{7} - \\dfrac{1}{11}\\right) + \\dfrac{5}{2}\\left(\\dfrac{1}{11} - \\dfrac{1}{15}\\right) + \\dots + \\dfrac{5}{2}\\left(\\dfrac{1}{55} - \\dfrac{1}{59}\\right)$.",
      "The sum is $\\dfrac{5}{2}\\left(\\dfrac{1}{7} - \\dfrac{1}{11} + \\dfrac{1}{11} - \\dfrac{1}{15} + \\dots + \\dfrac{1}{55} - \\dfrac{1}{59}\\right)$.",
      "The sum is $\\dfrac{5}{2}\\left(\\dfrac{1}{7} - \\dfrac{1}{59}\\right)$.",
      "$\\dfrac{1}{7} - \\dfrac{1}{59} = \\dfrac{52}{413}$",
      "$\\dfrac{5}{2} \\cdot \\dfrac{52}{413} = \\dfrac{130}{413}$"
    ]
  },
  {
    "id": "t182-k1-p06",
    "topic": "telescoping",
    "kind": "t182-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Evaluate $\\dfrac{11}{13 \\cdot 15} + \\dfrac{11}{15 \\cdot 17} + \\dfrac{11}{17 \\cdot 19} + \\dots + \\dfrac{11}{47 \\cdot 49}$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "198/637",
    "solution": [
      "Evaluate $\\dfrac{11}{13 \\cdot 15} + \\dfrac{11}{15 \\cdot 17} + \\dfrac{11}{17 \\cdot 19} + \\dots + \\dfrac{11}{47 \\cdot 49}$.",
      "Each term is $\\dfrac{11}{k(k + 2)}$, for $k = 13, 15, \\dots, 47$.",
      "$\\dfrac{11}{k(k + 2)} = \\dfrac{a}{k} + \\dfrac{b}{k + 2}$",
      "$11 = a(k + 2) + bk$",
      "$a = \\dfrac{11}{2}$",
      "$b = -\\dfrac{11}{2}$",
      "The sum is $\\dfrac{11}{2}\\left(\\dfrac{1}{13} - \\dfrac{1}{15}\\right) + \\dfrac{11}{2}\\left(\\dfrac{1}{15} - \\dfrac{1}{17}\\right) + \\dots + \\dfrac{11}{2}\\left(\\dfrac{1}{47} - \\dfrac{1}{49}\\right)$.",
      "The sum is $\\dfrac{11}{2}\\left(\\dfrac{1}{13} - \\dfrac{1}{15} + \\dfrac{1}{15} - \\dfrac{1}{17} + \\dots + \\dfrac{1}{47} - \\dfrac{1}{49}\\right)$.",
      "The sum is $\\dfrac{11}{2}\\left(\\dfrac{1}{13} - \\dfrac{1}{49}\\right)$.",
      "$\\dfrac{1}{13} - \\dfrac{1}{49} = \\dfrac{36}{637}$",
      "$\\dfrac{11}{2} \\cdot \\dfrac{36}{637} = \\dfrac{198}{637}$"
    ]
  },
  {
    "id": "t182-k1-p07",
    "topic": "telescoping",
    "kind": "t182-k1",
    "formNo": 2,
    "calc": "no",
    "prompt": "Evaluate $\\dfrac{11}{3 \\cdot 6} + \\dfrac{11}{6 \\cdot 9} + \\dfrac{11}{9 \\cdot 12} + \\dots + \\dfrac{11}{72 \\cdot 75}$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "88/75",
    "solution": [
      "Evaluate $\\dfrac{11}{3 \\cdot 6} + \\dfrac{11}{6 \\cdot 9} + \\dfrac{11}{9 \\cdot 12} + \\dots + \\dfrac{11}{72 \\cdot 75}$.",
      "Each term is $\\dfrac{11}{k(k + 3)}$, for $k = 3, 6, \\dots, 72$.",
      "$\\dfrac{11}{k(k + 3)} = \\dfrac{a}{k} + \\dfrac{b}{k + 3}$",
      "$11 = a(k + 3) + bk$",
      "$a = \\dfrac{11}{3}$",
      "$b = -\\dfrac{11}{3}$",
      "The sum is $\\dfrac{11}{3}\\left(\\dfrac{1}{3} - \\dfrac{1}{6}\\right) + \\dfrac{11}{3}\\left(\\dfrac{1}{6} - \\dfrac{1}{9}\\right) + \\dots + \\dfrac{11}{3}\\left(\\dfrac{1}{72} - \\dfrac{1}{75}\\right)$.",
      "The sum is $\\dfrac{11}{3}\\left(\\dfrac{1}{3} - \\dfrac{1}{6} + \\dfrac{1}{6} - \\dfrac{1}{9} + \\dots + \\dfrac{1}{72} - \\dfrac{1}{75}\\right)$.",
      "The sum is $\\dfrac{11}{3}\\left(\\dfrac{1}{3} - \\dfrac{1}{75}\\right)$.",
      "$\\dfrac{1}{3} - \\dfrac{1}{75} = \\dfrac{72}{225}$",
      "$\\dfrac{11}{3} \\cdot \\dfrac{72}{225} = \\dfrac{88}{75}$"
    ]
  },
  {
    "id": "t182-k1-p08",
    "topic": "telescoping",
    "kind": "t182-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Evaluate $\\dfrac{13}{7 \\cdot 9} + \\dfrac{13}{8 \\cdot 10} + \\dfrac{13}{9 \\cdot 11} + \\dots + \\dfrac{13}{13 \\cdot 15}$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "1417/1680",
    "solution": [
      "Evaluate $\\dfrac{13}{7 \\cdot 9} + \\dfrac{13}{8 \\cdot 10} + \\dfrac{13}{9 \\cdot 11} + \\dots + \\dfrac{13}{13 \\cdot 15}$.",
      "Each term is $\\dfrac{13}{k(k + 2)}$, for $k = 7, 8, \\dots, 13$.",
      "$\\dfrac{13}{k(k + 2)} = \\dfrac{a}{k} + \\dfrac{b}{k + 2}$",
      "$13 = a(k + 2) + bk$",
      "$a = \\dfrac{13}{2}$",
      "$b = -\\dfrac{13}{2}$",
      "The sum is $\\dfrac{13}{2}\\left(\\dfrac{1}{7} - \\dfrac{1}{9}\\right) + \\dfrac{13}{2}\\left(\\dfrac{1}{8} - \\dfrac{1}{10}\\right) + \\dfrac{13}{2}\\left(\\dfrac{1}{9} - \\dfrac{1}{11}\\right) + \\dots + \\dfrac{13}{2}\\left(\\dfrac{1}{13} - \\dfrac{1}{15}\\right)$.",
      "The sum is $\\dfrac{13}{2}\\left(\\dfrac{1}{7} - \\dfrac{1}{9} + \\dfrac{1}{8} - \\dfrac{1}{10} + \\dfrac{1}{9} - \\dfrac{1}{11} + \\dots + \\dfrac{1}{13} - \\dfrac{1}{15}\\right)$.",
      "The sum is $\\dfrac{13}{2}\\left(\\dfrac{1}{7} + \\dfrac{1}{8} - \\dfrac{1}{14} - \\dfrac{1}{15}\\right)$.",
      "$\\dfrac{1}{7} + \\dfrac{1}{8} - \\dfrac{1}{14} - \\dfrac{1}{15} = \\dfrac{109}{840}$",
      "$\\dfrac{13}{2} \\cdot \\dfrac{109}{840} = \\dfrac{1417}{1680}$"
    ]
  },
  {
    "id": "t182-k1-p09",
    "topic": "telescoping",
    "kind": "t182-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Evaluate $\\dfrac{13}{17 \\cdot 19} + \\dfrac{13}{18 \\cdot 20} + \\dfrac{13}{19 \\cdot 21} + \\dots + \\dfrac{13}{50 \\cdot 52}$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "601/1224",
    "solution": [
      "Evaluate $\\dfrac{13}{17 \\cdot 19} + \\dfrac{13}{18 \\cdot 20} + \\dfrac{13}{19 \\cdot 21} + \\dots + \\dfrac{13}{50 \\cdot 52}$.",
      "Each term is $\\dfrac{13}{k(k + 2)}$, for $k = 17, 18, \\dots, 50$.",
      "$\\dfrac{13}{k(k + 2)} = \\dfrac{a}{k} + \\dfrac{b}{k + 2}$",
      "$13 = a(k + 2) + bk$",
      "$a = \\dfrac{13}{2}$",
      "$b = -\\dfrac{13}{2}$",
      "The sum is $\\dfrac{13}{2}\\left(\\dfrac{1}{17} - \\dfrac{1}{19}\\right) + \\dfrac{13}{2}\\left(\\dfrac{1}{18} - \\dfrac{1}{20}\\right) + \\dfrac{13}{2}\\left(\\dfrac{1}{19} - \\dfrac{1}{21}\\right) + \\dots + \\dfrac{13}{2}\\left(\\dfrac{1}{50} - \\dfrac{1}{52}\\right)$.",
      "The sum is $\\dfrac{13}{2}\\left(\\dfrac{1}{17} - \\dfrac{1}{19} + \\dfrac{1}{18} - \\dfrac{1}{20} + \\dfrac{1}{19} - \\dfrac{1}{21} + \\dots + \\dfrac{1}{50} - \\dfrac{1}{52}\\right)$.",
      "The sum is $\\dfrac{13}{2}\\left(\\dfrac{1}{17} + \\dfrac{1}{18} - \\dfrac{1}{51} - \\dfrac{1}{52}\\right)$.",
      "$\\dfrac{1}{17} + \\dfrac{1}{18} - \\dfrac{1}{51} - \\dfrac{1}{52} = \\dfrac{601}{7956}$",
      "$\\dfrac{13}{2} \\cdot \\dfrac{601}{7956} = \\dfrac{601}{1224}$"
    ]
  },
  {
    "id": "t182-k1-p10",
    "topic": "telescoping",
    "kind": "t182-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Evaluate $\\dfrac{7}{20 \\cdot 22} + \\dfrac{7}{21 \\cdot 23} + \\dfrac{7}{22 \\cdot 24} + \\dots + \\dfrac{7}{47 \\cdot 49}$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "221/1120",
    "solution": [
      "Evaluate $\\dfrac{7}{20 \\cdot 22} + \\dfrac{7}{21 \\cdot 23} + \\dfrac{7}{22 \\cdot 24} + \\dots + \\dfrac{7}{47 \\cdot 49}$.",
      "Each term is $\\dfrac{7}{k(k + 2)}$, for $k = 20, 21, \\dots, 47$.",
      "$\\dfrac{7}{k(k + 2)} = \\dfrac{a}{k} + \\dfrac{b}{k + 2}$",
      "$7 = a(k + 2) + bk$",
      "$a = \\dfrac{7}{2}$",
      "$b = -\\dfrac{7}{2}$",
      "The sum is $\\dfrac{7}{2}\\left(\\dfrac{1}{20} - \\dfrac{1}{22}\\right) + \\dfrac{7}{2}\\left(\\dfrac{1}{21} - \\dfrac{1}{23}\\right) + \\dfrac{7}{2}\\left(\\dfrac{1}{22} - \\dfrac{1}{24}\\right) + \\dots + \\dfrac{7}{2}\\left(\\dfrac{1}{47} - \\dfrac{1}{49}\\right)$.",
      "The sum is $\\dfrac{7}{2}\\left(\\dfrac{1}{20} - \\dfrac{1}{22} + \\dfrac{1}{21} - \\dfrac{1}{23} + \\dfrac{1}{22} - \\dfrac{1}{24} + \\dots + \\dfrac{1}{47} - \\dfrac{1}{49}\\right)$.",
      "The sum is $\\dfrac{7}{2}\\left(\\dfrac{1}{20} + \\dfrac{1}{21} - \\dfrac{1}{48} - \\dfrac{1}{49}\\right)$.",
      "$\\dfrac{1}{20} + \\dfrac{1}{21} - \\dfrac{1}{48} - \\dfrac{1}{49} = \\dfrac{221}{3920}$",
      "$\\dfrac{7}{2} \\cdot \\dfrac{221}{3920} = \\dfrac{221}{1120}$"
    ]
  },
  {
    "id": "t182-k1-p11",
    "topic": "telescoping",
    "kind": "t182-k1",
    "formNo": 3,
    "calc": "no",
    "prompt": "Evaluate $\\dfrac{5}{27 \\cdot 29} + \\dfrac{5}{28 \\cdot 30} + \\dfrac{5}{29 \\cdot 31} + \\dots + \\dfrac{5}{34 \\cdot 36}$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "31/756",
    "solution": [
      "Evaluate $\\dfrac{5}{27 \\cdot 29} + \\dfrac{5}{28 \\cdot 30} + \\dfrac{5}{29 \\cdot 31} + \\dots + \\dfrac{5}{34 \\cdot 36}$.",
      "Each term is $\\dfrac{5}{k(k + 2)}$, for $k = 27, 28, \\dots, 34$.",
      "$\\dfrac{5}{k(k + 2)} = \\dfrac{a}{k} + \\dfrac{b}{k + 2}$",
      "$5 = a(k + 2) + bk$",
      "$a = \\dfrac{5}{2}$",
      "$b = -\\dfrac{5}{2}$",
      "The sum is $\\dfrac{5}{2}\\left(\\dfrac{1}{27} - \\dfrac{1}{29}\\right) + \\dfrac{5}{2}\\left(\\dfrac{1}{28} - \\dfrac{1}{30}\\right) + \\dfrac{5}{2}\\left(\\dfrac{1}{29} - \\dfrac{1}{31}\\right) + \\dots + \\dfrac{5}{2}\\left(\\dfrac{1}{34} - \\dfrac{1}{36}\\right)$.",
      "The sum is $\\dfrac{5}{2}\\left(\\dfrac{1}{27} - \\dfrac{1}{29} + \\dfrac{1}{28} - \\dfrac{1}{30} + \\dfrac{1}{29} - \\dfrac{1}{31} + \\dots + \\dfrac{1}{34} - \\dfrac{1}{36}\\right)$.",
      "The sum is $\\dfrac{5}{2}\\left(\\dfrac{1}{27} + \\dfrac{1}{28} - \\dfrac{1}{35} - \\dfrac{1}{36}\\right)$.",
      "$\\dfrac{1}{27} + \\dfrac{1}{28} - \\dfrac{1}{35} - \\dfrac{1}{36} = \\dfrac{31}{1890}$",
      "$\\dfrac{5}{2} \\cdot \\dfrac{31}{1890} = \\dfrac{31}{756}$"
    ]
  },
  {
    "id": "t182-k1-p12",
    "topic": "telescoping",
    "kind": "t182-k1",
    "formNo": 4,
    "calc": "no",
    "prompt": "Evaluate $\\dfrac{1}{\\sqrt{57} + \\sqrt{64}} + \\dfrac{1}{\\sqrt{64} + \\sqrt{71}} + \\dfrac{1}{\\sqrt{71} + \\sqrt{78}} + \\dots + \\dfrac{1}{\\sqrt{218} + \\sqrt{225}}$.",
    "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
    "answer": "(15-sqrt(57))/7",
    "solution": [
      "Evaluate $\\dfrac{1}{\\sqrt{57} + \\sqrt{64}} + \\dfrac{1}{\\sqrt{64} + \\sqrt{71}} + \\dfrac{1}{\\sqrt{71} + \\sqrt{78}} + \\dots + \\dfrac{1}{\\sqrt{218} + \\sqrt{225}}$.",
      "Each term is $\\dfrac{1}{\\sqrt{k} + \\sqrt{k + 7}}$, for $k = 57, 64, \\dots, 218$.",
      "$\\dfrac{1}{\\sqrt{k} + \\sqrt{k + 7}} = \\dfrac{\\sqrt{k + 7} - \\sqrt{k}}{(\\sqrt{k + 7} + \\sqrt{k})(\\sqrt{k + 7} - \\sqrt{k})}$",
      "$(\\sqrt{k + 7} + \\sqrt{k})(\\sqrt{k + 7} - \\sqrt{k}) = (k + 7) - k$",
      "$\\dfrac{1}{\\sqrt{k} + \\sqrt{k + 7}} = \\dfrac{\\sqrt{k + 7} - \\sqrt{k}}{7}$",
      "The sum is $\\dfrac{\\sqrt{64} - \\sqrt{57}}{7} + \\dfrac{\\sqrt{71} - \\sqrt{64}}{7} + \\dots + \\dfrac{\\sqrt{225} - \\sqrt{218}}{7}$.",
      "The sum is $\\dfrac{1}{7}\\left(\\sqrt{64} - \\sqrt{57} + \\sqrt{71} - \\sqrt{64} + \\dots + \\sqrt{225} - \\sqrt{218}\\right)$.",
      "The sum is $\\dfrac{1}{7}\\left(\\sqrt{225} - \\sqrt{57}\\right)$.",
      "$\\sqrt{225} = 15$",
      "The sum is $\\dfrac{15 - \\sqrt{57}}{7}$."
    ]
  },
  {
    "id": "t182-k1-p13",
    "topic": "telescoping",
    "kind": "t182-k1",
    "formNo": 4,
    "calc": "no",
    "prompt": "Evaluate $\\dfrac{1}{\\sqrt{30} + \\sqrt{32}} + \\dfrac{1}{\\sqrt{32} + \\sqrt{34}} + \\dfrac{1}{\\sqrt{34} + \\sqrt{36}} + \\dots + \\dfrac{1}{\\sqrt{62} + \\sqrt{64}}$.",
    "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
    "answer": "(8-sqrt(30))/2",
    "solution": [
      "Evaluate $\\dfrac{1}{\\sqrt{30} + \\sqrt{32}} + \\dfrac{1}{\\sqrt{32} + \\sqrt{34}} + \\dfrac{1}{\\sqrt{34} + \\sqrt{36}} + \\dots + \\dfrac{1}{\\sqrt{62} + \\sqrt{64}}$.",
      "Each term is $\\dfrac{1}{\\sqrt{k} + \\sqrt{k + 2}}$, for $k = 30, 32, \\dots, 62$.",
      "$\\dfrac{1}{\\sqrt{k} + \\sqrt{k + 2}} = \\dfrac{\\sqrt{k + 2} - \\sqrt{k}}{(\\sqrt{k + 2} + \\sqrt{k})(\\sqrt{k + 2} - \\sqrt{k})}$",
      "$(\\sqrt{k + 2} + \\sqrt{k})(\\sqrt{k + 2} - \\sqrt{k}) = (k + 2) - k$",
      "$\\dfrac{1}{\\sqrt{k} + \\sqrt{k + 2}} = \\dfrac{\\sqrt{k + 2} - \\sqrt{k}}{2}$",
      "The sum is $\\dfrac{\\sqrt{32} - \\sqrt{30}}{2} + \\dfrac{\\sqrt{34} - \\sqrt{32}}{2} + \\dots + \\dfrac{\\sqrt{64} - \\sqrt{62}}{2}$.",
      "The sum is $\\dfrac{1}{2}\\left(\\sqrt{32} - \\sqrt{30} + \\sqrt{34} - \\sqrt{32} + \\dots + \\sqrt{64} - \\sqrt{62}\\right)$.",
      "The sum is $\\dfrac{1}{2}\\left(\\sqrt{64} - \\sqrt{30}\\right)$.",
      "$\\sqrt{64} = 8$",
      "The sum is $\\dfrac{8 - \\sqrt{30}}{2}$."
    ]
  },
  {
    "id": "t182-k1-p14",
    "topic": "telescoping",
    "kind": "t182-k1",
    "formNo": 4,
    "calc": "no",
    "prompt": "Evaluate $\\dfrac{1}{\\sqrt{25} + \\sqrt{30}} + \\dfrac{1}{\\sqrt{30} + \\sqrt{35}} + \\dfrac{1}{\\sqrt{35} + \\sqrt{40}} + \\dots + \\dfrac{1}{\\sqrt{50} + \\sqrt{55}}$.",
    "form": "Answer in simplest surd form with no root in a denominator, as in (1+sqrt(3))/2.",
    "answer": "(sqrt(55)-5)/5",
    "solution": [
      "Evaluate $\\dfrac{1}{\\sqrt{25} + \\sqrt{30}} + \\dfrac{1}{\\sqrt{30} + \\sqrt{35}} + \\dfrac{1}{\\sqrt{35} + \\sqrt{40}} + \\dots + \\dfrac{1}{\\sqrt{50} + \\sqrt{55}}$.",
      "Each term is $\\dfrac{1}{\\sqrt{k} + \\sqrt{k + 5}}$, for $k = 25, 30, \\dots, 50$.",
      "$\\dfrac{1}{\\sqrt{k} + \\sqrt{k + 5}} = \\dfrac{\\sqrt{k + 5} - \\sqrt{k}}{(\\sqrt{k + 5} + \\sqrt{k})(\\sqrt{k + 5} - \\sqrt{k})}$",
      "$(\\sqrt{k + 5} + \\sqrt{k})(\\sqrt{k + 5} - \\sqrt{k}) = (k + 5) - k$",
      "$\\dfrac{1}{\\sqrt{k} + \\sqrt{k + 5}} = \\dfrac{\\sqrt{k + 5} - \\sqrt{k}}{5}$",
      "The sum is $\\dfrac{\\sqrt{30} - \\sqrt{25}}{5} + \\dfrac{\\sqrt{35} - \\sqrt{30}}{5} + \\dots + \\dfrac{\\sqrt{55} - \\sqrt{50}}{5}$.",
      "The sum is $\\dfrac{1}{5}\\left(\\sqrt{30} - \\sqrt{25} + \\sqrt{35} - \\sqrt{30} + \\dots + \\sqrt{55} - \\sqrt{50}\\right)$.",
      "The sum is $\\dfrac{1}{5}\\left(\\sqrt{55} - \\sqrt{25}\\right)$.",
      "$\\sqrt{25} = 5$",
      "The sum is $\\dfrac{\\sqrt{55} - 5}{5}$."
    ]
  },
  {
    "id": "t182-k2-p01",
    "topic": "telescoping",
    "kind": "t182-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Evaluate $\\dfrac{5}{2} \\cdot \\dfrac{8}{5} \\cdot \\dfrac{11}{8} \\cdots \\dfrac{56}{53}$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "28",
    "solution": [
      "Evaluate $\\dfrac{5}{2} \\cdot \\dfrac{8}{5} \\cdot \\dfrac{11}{8} \\cdots \\dfrac{56}{53}$.",
      "The product is $\\dfrac{5 \\cdot 8 \\cdot 11 \\cdots 56}{2 \\cdot 5 \\cdot 8 \\cdots 53}$.",
      "The product is $\\dfrac{56}{2}$.",
      "$\\dfrac{56}{2} = 28$"
    ]
  },
  {
    "id": "t182-k2-p02",
    "topic": "telescoping",
    "kind": "t182-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Evaluate $\\dfrac{16}{10} \\cdot \\dfrac{22}{16} \\cdot \\dfrac{28}{22} \\cdots \\dfrac{118}{112}$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "59/5",
    "solution": [
      "Evaluate $\\dfrac{16}{10} \\cdot \\dfrac{22}{16} \\cdot \\dfrac{28}{22} \\cdots \\dfrac{118}{112}$.",
      "The product is $\\dfrac{16 \\cdot 22 \\cdot 28 \\cdots 118}{10 \\cdot 16 \\cdot 22 \\cdots 112}$.",
      "The product is $\\dfrac{118}{10}$.",
      "$\\dfrac{118}{10} = \\dfrac{59}{5}$"
    ]
  },
  {
    "id": "t182-k2-p03",
    "topic": "telescoping",
    "kind": "t182-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Evaluate $\\dfrac{25}{22} \\cdot \\dfrac{28}{25} \\cdot \\dfrac{31}{28} \\cdots \\dfrac{46}{43}$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "23/11",
    "solution": [
      "Evaluate $\\dfrac{25}{22} \\cdot \\dfrac{28}{25} \\cdot \\dfrac{31}{28} \\cdots \\dfrac{46}{43}$.",
      "The product is $\\dfrac{25 \\cdot 28 \\cdot 31 \\cdots 46}{22 \\cdot 25 \\cdot 28 \\cdots 43}$.",
      "The product is $\\dfrac{46}{22}$.",
      "$\\dfrac{46}{22} = \\dfrac{23}{11}$"
    ]
  },
  {
    "id": "t182-k2-p04",
    "topic": "telescoping",
    "kind": "t182-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Evaluate $\\dfrac{32}{26} \\cdot \\dfrac{38}{32} \\cdot \\dfrac{44}{38} \\cdots \\dfrac{134}{128}$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "67/13",
    "solution": [
      "Evaluate $\\dfrac{32}{26} \\cdot \\dfrac{38}{32} \\cdot \\dfrac{44}{38} \\cdots \\dfrac{134}{128}$.",
      "The product is $\\dfrac{32 \\cdot 38 \\cdot 44 \\cdots 134}{26 \\cdot 32 \\cdot 38 \\cdots 128}$.",
      "The product is $\\dfrac{134}{26}$.",
      "$\\dfrac{134}{26} = \\dfrac{67}{13}$"
    ]
  },
  {
    "id": "t182-k2-p05",
    "topic": "telescoping",
    "kind": "t182-k2",
    "formNo": 1,
    "calc": "no",
    "prompt": "Evaluate $\\dfrac{7}{2} \\cdot \\dfrac{12}{7} \\cdot \\dfrac{17}{12} \\cdots \\dfrac{32}{27}$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "16",
    "solution": [
      "Evaluate $\\dfrac{7}{2} \\cdot \\dfrac{12}{7} \\cdot \\dfrac{17}{12} \\cdots \\dfrac{32}{27}$.",
      "The product is $\\dfrac{7 \\cdot 12 \\cdot 17 \\cdots 32}{2 \\cdot 7 \\cdot 12 \\cdots 27}$.",
      "The product is $\\dfrac{32}{2}$.",
      "$\\dfrac{32}{2} = 16$"
    ]
  },
  {
    "id": "t182-k2-p06",
    "topic": "telescoping",
    "kind": "t182-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Evaluate $\\left(1 - \\dfrac{2}{34}\\right)\\left(1 - \\dfrac{2}{36}\\right)\\left(1 - \\dfrac{2}{38}\\right) \\cdots \\left(1 - \\dfrac{2}{54}\\right)$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "16/27",
    "solution": [
      "Evaluate $\\left(1 - \\dfrac{2}{34}\\right)\\left(1 - \\dfrac{2}{36}\\right)\\left(1 - \\dfrac{2}{38}\\right) \\cdots \\left(1 - \\dfrac{2}{54}\\right)$.",
      "Each factor is $1 - \\dfrac{2}{k}$, for $k = 34, 36, \\dots, 54$.",
      "$1 - \\dfrac{2}{k} = \\dfrac{k - 2}{k}$",
      "The product is $\\dfrac{32}{34} \\cdot \\dfrac{34}{36} \\cdot \\dfrac{36}{38} \\cdots \\dfrac{52}{54}$.",
      "The product is $\\dfrac{32 \\cdot 34 \\cdot 36 \\cdots 52}{34 \\cdot 36 \\cdot 38 \\cdots 54}$.",
      "The product is $\\dfrac{32}{54}$.",
      "$\\dfrac{32}{54} = \\dfrac{16}{27}$"
    ]
  },
  {
    "id": "t182-k2-p07",
    "topic": "telescoping",
    "kind": "t182-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Evaluate $\\left(1 - \\dfrac{3}{19}\\right)\\left(1 - \\dfrac{3}{22}\\right)\\left(1 - \\dfrac{3}{25}\\right) \\cdots \\left(1 - \\dfrac{3}{46}\\right)$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "8/23",
    "solution": [
      "Evaluate $\\left(1 - \\dfrac{3}{19}\\right)\\left(1 - \\dfrac{3}{22}\\right)\\left(1 - \\dfrac{3}{25}\\right) \\cdots \\left(1 - \\dfrac{3}{46}\\right)$.",
      "Each factor is $1 - \\dfrac{3}{k}$, for $k = 19, 22, \\dots, 46$.",
      "$1 - \\dfrac{3}{k} = \\dfrac{k - 3}{k}$",
      "The product is $\\dfrac{16}{19} \\cdot \\dfrac{19}{22} \\cdot \\dfrac{22}{25} \\cdots \\dfrac{43}{46}$.",
      "The product is $\\dfrac{16 \\cdot 19 \\cdot 22 \\cdots 43}{19 \\cdot 22 \\cdot 25 \\cdots 46}$.",
      "The product is $\\dfrac{16}{46}$.",
      "$\\dfrac{16}{46} = \\dfrac{8}{23}$"
    ]
  },
  {
    "id": "t182-k2-p08",
    "topic": "telescoping",
    "kind": "t182-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Evaluate $\\left(1 - \\dfrac{4}{37}\\right)\\left(1 - \\dfrac{4}{41}\\right)\\left(1 - \\dfrac{4}{45}\\right) \\cdots \\left(1 - \\dfrac{4}{57}\\right)$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "11/19",
    "solution": [
      "Evaluate $\\left(1 - \\dfrac{4}{37}\\right)\\left(1 - \\dfrac{4}{41}\\right)\\left(1 - \\dfrac{4}{45}\\right) \\cdots \\left(1 - \\dfrac{4}{57}\\right)$.",
      "Each factor is $1 - \\dfrac{4}{k}$, for $k = 37, 41, \\dots, 57$.",
      "$1 - \\dfrac{4}{k} = \\dfrac{k - 4}{k}$",
      "The product is $\\dfrac{33}{37} \\cdot \\dfrac{37}{41} \\cdot \\dfrac{41}{45} \\cdots \\dfrac{53}{57}$.",
      "The product is $\\dfrac{33 \\cdot 37 \\cdot 41 \\cdots 53}{37 \\cdot 41 \\cdot 45 \\cdots 57}$.",
      "The product is $\\dfrac{33}{57}$.",
      "$\\dfrac{33}{57} = \\dfrac{11}{19}$"
    ]
  },
  {
    "id": "t182-k2-p09",
    "topic": "telescoping",
    "kind": "t182-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Evaluate $\\left(1 - \\dfrac{4}{32}\\right)\\left(1 - \\dfrac{4}{36}\\right)\\left(1 - \\dfrac{4}{40}\\right) \\cdots \\left(1 - \\dfrac{4}{76}\\right)$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "7/19",
    "solution": [
      "Evaluate $\\left(1 - \\dfrac{4}{32}\\right)\\left(1 - \\dfrac{4}{36}\\right)\\left(1 - \\dfrac{4}{40}\\right) \\cdots \\left(1 - \\dfrac{4}{76}\\right)$.",
      "Each factor is $1 - \\dfrac{4}{k}$, for $k = 32, 36, \\dots, 76$.",
      "$1 - \\dfrac{4}{k} = \\dfrac{k - 4}{k}$",
      "The product is $\\dfrac{28}{32} \\cdot \\dfrac{32}{36} \\cdot \\dfrac{36}{40} \\cdots \\dfrac{72}{76}$.",
      "The product is $\\dfrac{28 \\cdot 32 \\cdot 36 \\cdots 72}{32 \\cdot 36 \\cdot 40 \\cdots 76}$.",
      "The product is $\\dfrac{28}{76}$.",
      "$\\dfrac{28}{76} = \\dfrac{7}{19}$"
    ]
  },
  {
    "id": "t182-k2-p10",
    "topic": "telescoping",
    "kind": "t182-k2",
    "formNo": 2,
    "calc": "no",
    "prompt": "Evaluate $\\left(1 - \\dfrac{6}{28}\\right)\\left(1 - \\dfrac{6}{34}\\right)\\left(1 - \\dfrac{6}{40}\\right) \\cdots \\left(1 - \\dfrac{6}{106}\\right)$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "11/53",
    "solution": [
      "Evaluate $\\left(1 - \\dfrac{6}{28}\\right)\\left(1 - \\dfrac{6}{34}\\right)\\left(1 - \\dfrac{6}{40}\\right) \\cdots \\left(1 - \\dfrac{6}{106}\\right)$.",
      "Each factor is $1 - \\dfrac{6}{k}$, for $k = 28, 34, \\dots, 106$.",
      "$1 - \\dfrac{6}{k} = \\dfrac{k - 6}{k}$",
      "The product is $\\dfrac{22}{28} \\cdot \\dfrac{28}{34} \\cdot \\dfrac{34}{40} \\cdots \\dfrac{100}{106}$.",
      "The product is $\\dfrac{22 \\cdot 28 \\cdot 34 \\cdots 100}{28 \\cdot 34 \\cdot 40 \\cdots 106}$.",
      "The product is $\\dfrac{22}{106}$.",
      "$\\dfrac{22}{106} = \\dfrac{11}{53}$"
    ]
  },
  {
    "id": "t182-k2-p11",
    "topic": "telescoping",
    "kind": "t182-k2",
    "formNo": 3,
    "calc": "no",
    "prompt": "Evaluate $\\dfrac{13^2 - 16}{13^2} \\cdot \\dfrac{14^2 - 16}{14^2} \\cdot \\dfrac{15^2 - 16}{15^2} \\cdots \\dfrac{23^2 - 16}{23^2}$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "1215/2254",
    "solution": [
      "Evaluate $\\dfrac{13^2 - 16}{13^2} \\cdot \\dfrac{14^2 - 16}{14^2} \\cdot \\dfrac{15^2 - 16}{15^2} \\cdots \\dfrac{23^2 - 16}{23^2}$.",
      "Each factor is $\\dfrac{k^2 - 16}{k^2}$, for $k = 13, 14, \\dots, 23$.",
      "$\\dfrac{k^2 - 16}{k^2} = \\dfrac{(k - 4)(k + 4)}{k \\cdot k}$",
      "$\\dfrac{(k - 4)(k + 4)}{k \\cdot k} = \\dfrac{k - 4}{k} \\cdot \\dfrac{k + 4}{k}$",
      "The product is $\\left(\\dfrac{9}{13} \\cdot \\dfrac{10}{14} \\cdot \\dfrac{11}{15} \\cdots \\dfrac{19}{23}\\right)\\left(\\dfrac{17}{13} \\cdot \\dfrac{18}{14} \\cdot \\dfrac{19}{15} \\cdots \\dfrac{27}{23}\\right)$.",
      "$\\dfrac{9}{13} \\cdot \\dfrac{10}{14} \\cdot \\dfrac{11}{15} \\cdots \\dfrac{19}{23} = \\dfrac{9 \\cdot 10 \\cdot 11 \\cdot 12}{20 \\cdot 21 \\cdot 22 \\cdot 23}$",
      "$\\dfrac{17}{13} \\cdot \\dfrac{18}{14} \\cdot \\dfrac{19}{15} \\cdots \\dfrac{27}{23} = \\dfrac{24 \\cdot 25 \\cdot 26 \\cdot 27}{13 \\cdot 14 \\cdot 15 \\cdot 16}$",
      "The product is $\\dfrac{9 \\cdot 10 \\cdot 11 \\cdot 12}{20 \\cdot 21 \\cdot 22 \\cdot 23} \\cdot \\dfrac{24 \\cdot 25 \\cdot 26 \\cdot 27}{13 \\cdot 14 \\cdot 15 \\cdot 16} = \\dfrac{1215}{2254}$"
    ]
  },
  {
    "id": "t182-k2-p12",
    "topic": "telescoping",
    "kind": "t182-k2",
    "formNo": 3,
    "calc": "no",
    "prompt": "Evaluate $\\dfrac{38^2 - 1}{38^2} \\cdot \\dfrac{39^2 - 1}{39^2} \\cdot \\dfrac{40^2 - 1}{40^2} \\cdots \\dfrac{43^2 - 1}{43^2}$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "814/817",
    "solution": [
      "Evaluate $\\dfrac{38^2 - 1}{38^2} \\cdot \\dfrac{39^2 - 1}{39^2} \\cdot \\dfrac{40^2 - 1}{40^2} \\cdots \\dfrac{43^2 - 1}{43^2}$.",
      "Each factor is $\\dfrac{k^2 - 1}{k^2}$, for $k = 38, 39, \\dots, 43$.",
      "$\\dfrac{k^2 - 1}{k^2} = \\dfrac{(k - 1)(k + 1)}{k \\cdot k}$",
      "$\\dfrac{(k - 1)(k + 1)}{k \\cdot k} = \\dfrac{k - 1}{k} \\cdot \\dfrac{k + 1}{k}$",
      "The product is $\\left(\\dfrac{37}{38} \\cdot \\dfrac{38}{39} \\cdot \\dfrac{39}{40} \\cdots \\dfrac{42}{43}\\right)\\left(\\dfrac{39}{38} \\cdot \\dfrac{40}{39} \\cdot \\dfrac{41}{40} \\cdots \\dfrac{44}{43}\\right)$.",
      "$\\dfrac{37}{38} \\cdot \\dfrac{38}{39} \\cdot \\dfrac{39}{40} \\cdots \\dfrac{42}{43} = \\dfrac{37}{43}$",
      "$\\dfrac{39}{38} \\cdot \\dfrac{40}{39} \\cdot \\dfrac{41}{40} \\cdots \\dfrac{44}{43} = \\dfrac{44}{38}$",
      "The product is $\\dfrac{37}{43} \\cdot \\dfrac{44}{38} = \\dfrac{814}{817}$"
    ]
  },
  {
    "id": "t182-k2-p13",
    "topic": "telescoping",
    "kind": "t182-k2",
    "formNo": 3,
    "calc": "no",
    "prompt": "Evaluate $\\dfrac{6^2 - 16}{6^2} \\cdot \\dfrac{7^2 - 16}{7^2} \\cdot \\dfrac{8^2 - 16}{8^2} \\cdots \\dfrac{11^2 - 16}{11^2}$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "65/396",
    "solution": [
      "Evaluate $\\dfrac{6^2 - 16}{6^2} \\cdot \\dfrac{7^2 - 16}{7^2} \\cdot \\dfrac{8^2 - 16}{8^2} \\cdots \\dfrac{11^2 - 16}{11^2}$.",
      "Each factor is $\\dfrac{k^2 - 16}{k^2}$, for $k = 6, 7, \\dots, 11$.",
      "$\\dfrac{k^2 - 16}{k^2} = \\dfrac{(k - 4)(k + 4)}{k \\cdot k}$",
      "$\\dfrac{(k - 4)(k + 4)}{k \\cdot k} = \\dfrac{k - 4}{k} \\cdot \\dfrac{k + 4}{k}$",
      "The product is $\\left(\\dfrac{2}{6} \\cdot \\dfrac{3}{7} \\cdot \\dfrac{4}{8} \\cdots \\dfrac{7}{11}\\right)\\left(\\dfrac{10}{6} \\cdot \\dfrac{11}{7} \\cdot \\dfrac{12}{8} \\cdots \\dfrac{15}{11}\\right)$.",
      "$\\dfrac{2}{6} \\cdot \\dfrac{3}{7} \\cdot \\dfrac{4}{8} \\cdots \\dfrac{7}{11} = \\dfrac{2 \\cdot 3 \\cdot 4 \\cdot 5}{8 \\cdot 9 \\cdot 10 \\cdot 11}$",
      "$\\dfrac{10}{6} \\cdot \\dfrac{11}{7} \\cdot \\dfrac{12}{8} \\cdots \\dfrac{15}{11} = \\dfrac{12 \\cdot 13 \\cdot 14 \\cdot 15}{6 \\cdot 7 \\cdot 8 \\cdot 9}$",
      "The product is $\\dfrac{2 \\cdot 3 \\cdot 4 \\cdot 5}{8 \\cdot 9 \\cdot 10 \\cdot 11} \\cdot \\dfrac{12 \\cdot 13 \\cdot 14 \\cdot 15}{6 \\cdot 7 \\cdot 8 \\cdot 9} = \\dfrac{65}{396}$"
    ]
  },
  {
    "id": "t182-k2-p14",
    "topic": "telescoping",
    "kind": "t182-k2",
    "formNo": 3,
    "calc": "no",
    "prompt": "Evaluate $\\dfrac{44^2 - 1}{44^2} \\cdot \\dfrac{45^2 - 1}{45^2} \\cdot \\dfrac{46^2 - 1}{46^2} \\cdots \\dfrac{52^2 - 1}{52^2}$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "2279/2288",
    "solution": [
      "Evaluate $\\dfrac{44^2 - 1}{44^2} \\cdot \\dfrac{45^2 - 1}{45^2} \\cdot \\dfrac{46^2 - 1}{46^2} \\cdots \\dfrac{52^2 - 1}{52^2}$.",
      "Each factor is $\\dfrac{k^2 - 1}{k^2}$, for $k = 44, 45, \\dots, 52$.",
      "$\\dfrac{k^2 - 1}{k^2} = \\dfrac{(k - 1)(k + 1)}{k \\cdot k}$",
      "$\\dfrac{(k - 1)(k + 1)}{k \\cdot k} = \\dfrac{k - 1}{k} \\cdot \\dfrac{k + 1}{k}$",
      "The product is $\\left(\\dfrac{43}{44} \\cdot \\dfrac{44}{45} \\cdot \\dfrac{45}{46} \\cdots \\dfrac{51}{52}\\right)\\left(\\dfrac{45}{44} \\cdot \\dfrac{46}{45} \\cdot \\dfrac{47}{46} \\cdots \\dfrac{53}{52}\\right)$.",
      "$\\dfrac{43}{44} \\cdot \\dfrac{44}{45} \\cdot \\dfrac{45}{46} \\cdots \\dfrac{51}{52} = \\dfrac{43}{52}$",
      "$\\dfrac{45}{44} \\cdot \\dfrac{46}{45} \\cdot \\dfrac{47}{46} \\cdots \\dfrac{53}{52} = \\dfrac{53}{44}$",
      "The product is $\\dfrac{43}{52} \\cdot \\dfrac{53}{44} = \\dfrac{2279}{2288}$"
    ]
  },
  {
    "id": "t182-k2-p15",
    "topic": "telescoping",
    "kind": "t182-k2",
    "formNo": 3,
    "calc": "no",
    "prompt": "Evaluate $\\dfrac{31^2 - 1}{31^2} \\cdot \\dfrac{32^2 - 1}{32^2} \\cdot \\dfrac{33^2 - 1}{33^2} \\cdots \\dfrac{36^2 - 1}{36^2}$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "185/186",
    "solution": [
      "Evaluate $\\dfrac{31^2 - 1}{31^2} \\cdot \\dfrac{32^2 - 1}{32^2} \\cdot \\dfrac{33^2 - 1}{33^2} \\cdots \\dfrac{36^2 - 1}{36^2}$.",
      "Each factor is $\\dfrac{k^2 - 1}{k^2}$, for $k = 31, 32, \\dots, 36$.",
      "$\\dfrac{k^2 - 1}{k^2} = \\dfrac{(k - 1)(k + 1)}{k \\cdot k}$",
      "$\\dfrac{(k - 1)(k + 1)}{k \\cdot k} = \\dfrac{k - 1}{k} \\cdot \\dfrac{k + 1}{k}$",
      "The product is $\\left(\\dfrac{30}{31} \\cdot \\dfrac{31}{32} \\cdot \\dfrac{32}{33} \\cdots \\dfrac{35}{36}\\right)\\left(\\dfrac{32}{31} \\cdot \\dfrac{33}{32} \\cdot \\dfrac{34}{33} \\cdots \\dfrac{37}{36}\\right)$.",
      "$\\dfrac{30}{31} \\cdot \\dfrac{31}{32} \\cdot \\dfrac{32}{33} \\cdots \\dfrac{35}{36} = \\dfrac{30}{36}$",
      "$\\dfrac{32}{31} \\cdot \\dfrac{33}{32} \\cdot \\dfrac{34}{33} \\cdots \\dfrac{37}{36} = \\dfrac{37}{31}$",
      "The product is $\\dfrac{30}{36} \\cdot \\dfrac{37}{31} = \\dfrac{185}{186}$"
    ]
  },
  {
    "id": "t182-k2-p16",
    "topic": "telescoping",
    "kind": "t182-k2",
    "formNo": 4,
    "calc": "no",
    "prompt": "Evaluate $\\dfrac{3 \\cdot 10}{6^2} \\cdot \\dfrac{4 \\cdot 11}{7^2} \\cdot \\dfrac{5 \\cdot 12}{8^2} \\cdots \\dfrac{24 \\cdot 31}{27^2}$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "899/1053",
    "solution": [
      "Evaluate $\\dfrac{3 \\cdot 10}{6^2} \\cdot \\dfrac{4 \\cdot 11}{7^2} \\cdot \\dfrac{5 \\cdot 12}{8^2} \\cdots \\dfrac{24 \\cdot 31}{27^2}$.",
      "Each factor is $\\dfrac{k(k + 7)}{(k + 3)^2}$, for $k = 3, 4, \\dots, 24$.",
      "$\\dfrac{k(k + 7)}{(k + 3)^2} = \\dfrac{k(k + 7)}{(k + 3)(k + 3)}$",
      "$\\dfrac{k(k + 7)}{(k + 3)(k + 3)} = \\dfrac{k}{k + 3} \\cdot \\dfrac{k + 7}{k + 3}$",
      "The product is $\\left(\\dfrac{3}{6} \\cdot \\dfrac{4}{7} \\cdot \\dfrac{5}{8} \\cdots \\dfrac{24}{27}\\right)\\left(\\dfrac{10}{6} \\cdot \\dfrac{11}{7} \\cdot \\dfrac{12}{8} \\cdots \\dfrac{31}{27}\\right)$.",
      "$\\dfrac{3}{6} \\cdot \\dfrac{4}{7} \\cdot \\dfrac{5}{8} \\cdots \\dfrac{24}{27} = \\dfrac{3 \\cdot 4 \\cdot 5}{25 \\cdot 26 \\cdot 27}$",
      "$\\dfrac{10}{6} \\cdot \\dfrac{11}{7} \\cdot \\dfrac{12}{8} \\cdots \\dfrac{31}{27} = \\dfrac{28 \\cdot 29 \\cdot 30 \\cdot 31}{6 \\cdot 7 \\cdot 8 \\cdot 9}$",
      "The product is $\\dfrac{3 \\cdot 4 \\cdot 5}{25 \\cdot 26 \\cdot 27} \\cdot \\dfrac{28 \\cdot 29 \\cdot 30 \\cdot 31}{6 \\cdot 7 \\cdot 8 \\cdot 9} = \\dfrac{899}{1053}$"
    ]
  },
  {
    "id": "t182-k2-p17",
    "topic": "telescoping",
    "kind": "t182-k2",
    "formNo": 4,
    "calc": "no",
    "prompt": "Evaluate $\\dfrac{15 \\cdot 22}{20^2} \\cdot \\dfrac{16 \\cdot 23}{21^2} \\cdot \\dfrac{17 \\cdot 24}{22^2} \\cdots \\dfrac{33 \\cdot 40}{38^2}$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "156/1813",
    "solution": [
      "Evaluate $\\dfrac{15 \\cdot 22}{20^2} \\cdot \\dfrac{16 \\cdot 23}{21^2} \\cdot \\dfrac{17 \\cdot 24}{22^2} \\cdots \\dfrac{33 \\cdot 40}{38^2}$.",
      "Each factor is $\\dfrac{k(k + 7)}{(k + 5)^2}$, for $k = 15, 16, \\dots, 33$.",
      "$\\dfrac{k(k + 7)}{(k + 5)^2} = \\dfrac{k(k + 7)}{(k + 5)(k + 5)}$",
      "$\\dfrac{k(k + 7)}{(k + 5)(k + 5)} = \\dfrac{k}{k + 5} \\cdot \\dfrac{k + 7}{k + 5}$",
      "The product is $\\left(\\dfrac{15}{20} \\cdot \\dfrac{16}{21} \\cdot \\dfrac{17}{22} \\cdots \\dfrac{33}{38}\\right)\\left(\\dfrac{22}{20} \\cdot \\dfrac{23}{21} \\cdot \\dfrac{24}{22} \\cdots \\dfrac{40}{38}\\right)$.",
      "$\\dfrac{15}{20} \\cdot \\dfrac{16}{21} \\cdot \\dfrac{17}{22} \\cdots \\dfrac{33}{38} = \\dfrac{15 \\cdot 16 \\cdot 17 \\cdot 18 \\cdot 19}{34 \\cdot 35 \\cdot 36 \\cdot 37 \\cdot 38}$",
      "$\\dfrac{22}{20} \\cdot \\dfrac{23}{21} \\cdot \\dfrac{24}{22} \\cdots \\dfrac{40}{38} = \\dfrac{39 \\cdot 40}{20 \\cdot 21}$",
      "The product is $\\dfrac{15 \\cdot 16 \\cdot 17 \\cdot 18 \\cdot 19}{34 \\cdot 35 \\cdot 36 \\cdot 37 \\cdot 38} \\cdot \\dfrac{39 \\cdot 40}{20 \\cdot 21} = \\dfrac{156}{1813}$"
    ]
  },
  {
    "id": "t182-k2-p18",
    "topic": "telescoping",
    "kind": "t182-k2",
    "formNo": 4,
    "calc": "no",
    "prompt": "Evaluate $\\dfrac{5 \\cdot 14}{10^2} \\cdot \\dfrac{6 \\cdot 15}{11^2} \\cdot \\dfrac{7 \\cdot 16}{12^2} \\cdots \\dfrac{17 \\cdot 26}{22^2}$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "230/2299",
    "solution": [
      "Evaluate $\\dfrac{5 \\cdot 14}{10^2} \\cdot \\dfrac{6 \\cdot 15}{11^2} \\cdot \\dfrac{7 \\cdot 16}{12^2} \\cdots \\dfrac{17 \\cdot 26}{22^2}$.",
      "Each factor is $\\dfrac{k(k + 9)}{(k + 5)^2}$, for $k = 5, 6, \\dots, 17$.",
      "$\\dfrac{k(k + 9)}{(k + 5)^2} = \\dfrac{k(k + 9)}{(k + 5)(k + 5)}$",
      "$\\dfrac{k(k + 9)}{(k + 5)(k + 5)} = \\dfrac{k}{k + 5} \\cdot \\dfrac{k + 9}{k + 5}$",
      "The product is $\\left(\\dfrac{5}{10} \\cdot \\dfrac{6}{11} \\cdot \\dfrac{7}{12} \\cdots \\dfrac{17}{22}\\right)\\left(\\dfrac{14}{10} \\cdot \\dfrac{15}{11} \\cdot \\dfrac{16}{12} \\cdots \\dfrac{26}{22}\\right)$.",
      "$\\dfrac{5}{10} \\cdot \\dfrac{6}{11} \\cdot \\dfrac{7}{12} \\cdots \\dfrac{17}{22} = \\dfrac{5 \\cdot 6 \\cdot 7 \\cdot 8 \\cdot 9}{18 \\cdot 19 \\cdot 20 \\cdot 21 \\cdot 22}$",
      "$\\dfrac{14}{10} \\cdot \\dfrac{15}{11} \\cdot \\dfrac{16}{12} \\cdots \\dfrac{26}{22} = \\dfrac{23 \\cdot 24 \\cdot 25 \\cdot 26}{10 \\cdot 11 \\cdot 12 \\cdot 13}$",
      "The product is $\\dfrac{5 \\cdot 6 \\cdot 7 \\cdot 8 \\cdot 9}{18 \\cdot 19 \\cdot 20 \\cdot 21 \\cdot 22} \\cdot \\dfrac{23 \\cdot 24 \\cdot 25 \\cdot 26}{10 \\cdot 11 \\cdot 12 \\cdot 13} = \\dfrac{230}{2299}$"
    ]
  },
  {
    "id": "t182-k3-p01",
    "topic": "telescoping",
    "kind": "t182-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\dfrac{5}{16 \\cdot 23} + \\dfrac{5}{23 \\cdot 30} + \\dfrac{5}{30 \\cdot 37} + \\dots$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "5/112",
    "solution": [
      "Find the sum of the infinite series $\\dfrac{5}{16 \\cdot 23} + \\dfrac{5}{23 \\cdot 30} + \\dfrac{5}{30 \\cdot 37} + \\dots$.",
      "Each term is $\\dfrac{5}{m(m + 7)}$, for $m = 16, 23, 30, \\dots$",
      "$\\dfrac{5}{m(m + 7)} = \\dfrac{a}{m} + \\dfrac{b}{m + 7}$",
      "$5 = a(m + 7) + bm$",
      "$a = \\dfrac{5}{7}$",
      "$b = -\\dfrac{5}{7}$",
      "The $n$th first factor is $16 + 7(n - 1)$.",
      "$16 + 7(n - 1) = 7n + 9$",
      "The sum of the first $n$ terms is $\\dfrac{5}{7}\\left(\\dfrac{1}{16} - \\dfrac{1}{23}\\right) + \\dfrac{5}{7}\\left(\\dfrac{1}{23} - \\dfrac{1}{30}\\right) + \\dots + \\dfrac{5}{7}\\left(\\dfrac{1}{7n + 9} - \\dfrac{1}{7n + 16}\\right)$.",
      "The sum of the first $n$ terms is $\\dfrac{5}{7}\\left(\\dfrac{1}{16} - \\dfrac{1}{23} + \\dfrac{1}{23} - \\dots + \\dfrac{1}{7n + 9} - \\dfrac{1}{7n + 16}\\right)$.",
      "The sum of the first $n$ terms is $\\dfrac{5}{7}\\left(\\dfrac{1}{16} - \\dfrac{1}{7n + 16}\\right)$.",
      "As $n$ grows, $\\dfrac{1}{7n + 16}$ has limit $0$.",
      "The partial sums have limit $\\dfrac{5}{7}\\left(\\dfrac{1}{16} - 0\\right) = \\dfrac{5}{112}$.",
      "The sum of the series is $\\dfrac{5}{112}$."
    ]
  },
  {
    "id": "t182-k3-p02",
    "topic": "telescoping",
    "kind": "t182-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\dfrac{13}{12 \\cdot 15} + \\dfrac{13}{15 \\cdot 18} + \\dfrac{13}{18 \\cdot 21} + \\dots$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "13/36",
    "solution": [
      "Find the sum of the infinite series $\\dfrac{13}{12 \\cdot 15} + \\dfrac{13}{15 \\cdot 18} + \\dfrac{13}{18 \\cdot 21} + \\dots$.",
      "Each term is $\\dfrac{13}{m(m + 3)}$, for $m = 12, 15, 18, \\dots$",
      "$\\dfrac{13}{m(m + 3)} = \\dfrac{a}{m} + \\dfrac{b}{m + 3}$",
      "$13 = a(m + 3) + bm$",
      "$a = \\dfrac{13}{3}$",
      "$b = -\\dfrac{13}{3}$",
      "The $n$th first factor is $12 + 3(n - 1)$.",
      "$12 + 3(n - 1) = 3n + 9$",
      "The sum of the first $n$ terms is $\\dfrac{13}{3}\\left(\\dfrac{1}{12} - \\dfrac{1}{15}\\right) + \\dfrac{13}{3}\\left(\\dfrac{1}{15} - \\dfrac{1}{18}\\right) + \\dots + \\dfrac{13}{3}\\left(\\dfrac{1}{3n + 9} - \\dfrac{1}{3n + 12}\\right)$.",
      "The sum of the first $n$ terms is $\\dfrac{13}{3}\\left(\\dfrac{1}{12} - \\dfrac{1}{15} + \\dfrac{1}{15} - \\dots + \\dfrac{1}{3n + 9} - \\dfrac{1}{3n + 12}\\right)$.",
      "The sum of the first $n$ terms is $\\dfrac{13}{3}\\left(\\dfrac{1}{12} - \\dfrac{1}{3n + 12}\\right)$.",
      "As $n$ grows, $\\dfrac{1}{3n + 12}$ has limit $0$.",
      "The partial sums have limit $\\dfrac{13}{3}\\left(\\dfrac{1}{12} - 0\\right) = \\dfrac{13}{36}$.",
      "The sum of the series is $\\dfrac{13}{36}$."
    ]
  },
  {
    "id": "t182-k3-p03",
    "topic": "telescoping",
    "kind": "t182-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\dfrac{13}{21 \\cdot 25} + \\dfrac{13}{25 \\cdot 29} + \\dfrac{13}{29 \\cdot 33} + \\dots$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "13/84",
    "solution": [
      "Find the sum of the infinite series $\\dfrac{13}{21 \\cdot 25} + \\dfrac{13}{25 \\cdot 29} + \\dfrac{13}{29 \\cdot 33} + \\dots$.",
      "Each term is $\\dfrac{13}{m(m + 4)}$, for $m = 21, 25, 29, \\dots$",
      "$\\dfrac{13}{m(m + 4)} = \\dfrac{a}{m} + \\dfrac{b}{m + 4}$",
      "$13 = a(m + 4) + bm$",
      "$a = \\dfrac{13}{4}$",
      "$b = -\\dfrac{13}{4}$",
      "The $n$th first factor is $21 + 4(n - 1)$.",
      "$21 + 4(n - 1) = 4n + 17$",
      "The sum of the first $n$ terms is $\\dfrac{13}{4}\\left(\\dfrac{1}{21} - \\dfrac{1}{25}\\right) + \\dfrac{13}{4}\\left(\\dfrac{1}{25} - \\dfrac{1}{29}\\right) + \\dots + \\dfrac{13}{4}\\left(\\dfrac{1}{4n + 17} - \\dfrac{1}{4n + 21}\\right)$.",
      "The sum of the first $n$ terms is $\\dfrac{13}{4}\\left(\\dfrac{1}{21} - \\dfrac{1}{25} + \\dfrac{1}{25} - \\dots + \\dfrac{1}{4n + 17} - \\dfrac{1}{4n + 21}\\right)$.",
      "The sum of the first $n$ terms is $\\dfrac{13}{4}\\left(\\dfrac{1}{21} - \\dfrac{1}{4n + 21}\\right)$.",
      "As $n$ grows, $\\dfrac{1}{4n + 21}$ has limit $0$.",
      "The partial sums have limit $\\dfrac{13}{4}\\left(\\dfrac{1}{21} - 0\\right) = \\dfrac{13}{84}$.",
      "The sum of the series is $\\dfrac{13}{84}$."
    ]
  },
  {
    "id": "t182-k3-p04",
    "topic": "telescoping",
    "kind": "t182-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\dfrac{9}{16 \\cdot 20} + \\dfrac{9}{20 \\cdot 24} + \\dfrac{9}{24 \\cdot 28} + \\dots$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "9/64",
    "solution": [
      "Find the sum of the infinite series $\\dfrac{9}{16 \\cdot 20} + \\dfrac{9}{20 \\cdot 24} + \\dfrac{9}{24 \\cdot 28} + \\dots$.",
      "Each term is $\\dfrac{9}{m(m + 4)}$, for $m = 16, 20, 24, \\dots$",
      "$\\dfrac{9}{m(m + 4)} = \\dfrac{a}{m} + \\dfrac{b}{m + 4}$",
      "$9 = a(m + 4) + bm$",
      "$a = \\dfrac{9}{4}$",
      "$b = -\\dfrac{9}{4}$",
      "The $n$th first factor is $16 + 4(n - 1)$.",
      "$16 + 4(n - 1) = 4n + 12$",
      "The sum of the first $n$ terms is $\\dfrac{9}{4}\\left(\\dfrac{1}{16} - \\dfrac{1}{20}\\right) + \\dfrac{9}{4}\\left(\\dfrac{1}{20} - \\dfrac{1}{24}\\right) + \\dots + \\dfrac{9}{4}\\left(\\dfrac{1}{4n + 12} - \\dfrac{1}{4n + 16}\\right)$.",
      "The sum of the first $n$ terms is $\\dfrac{9}{4}\\left(\\dfrac{1}{16} - \\dfrac{1}{20} + \\dfrac{1}{20} - \\dots + \\dfrac{1}{4n + 12} - \\dfrac{1}{4n + 16}\\right)$.",
      "The sum of the first $n$ terms is $\\dfrac{9}{4}\\left(\\dfrac{1}{16} - \\dfrac{1}{4n + 16}\\right)$.",
      "As $n$ grows, $\\dfrac{1}{4n + 16}$ has limit $0$.",
      "The partial sums have limit $\\dfrac{9}{4}\\left(\\dfrac{1}{16} - 0\\right) = \\dfrac{9}{64}$.",
      "The sum of the series is $\\dfrac{9}{64}$."
    ]
  },
  {
    "id": "t182-k3-p05",
    "topic": "telescoping",
    "kind": "t182-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\dfrac{11}{17 \\cdot 20} + \\dfrac{11}{20 \\cdot 23} + \\dfrac{11}{23 \\cdot 26} + \\dots$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "11/51",
    "solution": [
      "Find the sum of the infinite series $\\dfrac{11}{17 \\cdot 20} + \\dfrac{11}{20 \\cdot 23} + \\dfrac{11}{23 \\cdot 26} + \\dots$.",
      "Each term is $\\dfrac{11}{m(m + 3)}$, for $m = 17, 20, 23, \\dots$",
      "$\\dfrac{11}{m(m + 3)} = \\dfrac{a}{m} + \\dfrac{b}{m + 3}$",
      "$11 = a(m + 3) + bm$",
      "$a = \\dfrac{11}{3}$",
      "$b = -\\dfrac{11}{3}$",
      "The $n$th first factor is $17 + 3(n - 1)$.",
      "$17 + 3(n - 1) = 3n + 14$",
      "The sum of the first $n$ terms is $\\dfrac{11}{3}\\left(\\dfrac{1}{17} - \\dfrac{1}{20}\\right) + \\dfrac{11}{3}\\left(\\dfrac{1}{20} - \\dfrac{1}{23}\\right) + \\dots + \\dfrac{11}{3}\\left(\\dfrac{1}{3n + 14} - \\dfrac{1}{3n + 17}\\right)$.",
      "The sum of the first $n$ terms is $\\dfrac{11}{3}\\left(\\dfrac{1}{17} - \\dfrac{1}{20} + \\dfrac{1}{20} - \\dots + \\dfrac{1}{3n + 14} - \\dfrac{1}{3n + 17}\\right)$.",
      "The sum of the first $n$ terms is $\\dfrac{11}{3}\\left(\\dfrac{1}{17} - \\dfrac{1}{3n + 17}\\right)$.",
      "As $n$ grows, $\\dfrac{1}{3n + 17}$ has limit $0$.",
      "The partial sums have limit $\\dfrac{11}{3}\\left(\\dfrac{1}{17} - 0\\right) = \\dfrac{11}{51}$.",
      "The sum of the series is $\\dfrac{11}{51}$."
    ]
  },
  {
    "id": "t182-k3-p06",
    "topic": "telescoping",
    "kind": "t182-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\dfrac{7}{4 \\cdot 10} + \\dfrac{7}{10 \\cdot 16} + \\dfrac{7}{16 \\cdot 22} + \\dots$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "7/24",
    "solution": [
      "Find the sum of the infinite series $\\dfrac{7}{4 \\cdot 10} + \\dfrac{7}{10 \\cdot 16} + \\dfrac{7}{16 \\cdot 22} + \\dots$.",
      "Each term is $\\dfrac{7}{m(m + 6)}$, for $m = 4, 10, 16, \\dots$",
      "$\\dfrac{7}{m(m + 6)} = \\dfrac{a}{m} + \\dfrac{b}{m + 6}$",
      "$7 = a(m + 6) + bm$",
      "$a = \\dfrac{7}{6}$",
      "$b = -\\dfrac{7}{6}$",
      "The $n$th first factor is $4 + 6(n - 1)$.",
      "$4 + 6(n - 1) = 6n - 2$",
      "The sum of the first $n$ terms is $\\dfrac{7}{6}\\left(\\dfrac{1}{4} - \\dfrac{1}{10}\\right) + \\dfrac{7}{6}\\left(\\dfrac{1}{10} - \\dfrac{1}{16}\\right) + \\dots + \\dfrac{7}{6}\\left(\\dfrac{1}{6n - 2} - \\dfrac{1}{6n + 4}\\right)$.",
      "The sum of the first $n$ terms is $\\dfrac{7}{6}\\left(\\dfrac{1}{4} - \\dfrac{1}{10} + \\dfrac{1}{10} - \\dots + \\dfrac{1}{6n - 2} - \\dfrac{1}{6n + 4}\\right)$.",
      "The sum of the first $n$ terms is $\\dfrac{7}{6}\\left(\\dfrac{1}{4} - \\dfrac{1}{6n + 4}\\right)$.",
      "As $n$ grows, $\\dfrac{1}{6n + 4}$ has limit $0$.",
      "The partial sums have limit $\\dfrac{7}{6}\\left(\\dfrac{1}{4} - 0\\right) = \\dfrac{7}{24}$.",
      "The sum of the series is $\\dfrac{7}{24}$."
    ]
  },
  {
    "id": "t182-k3-p07",
    "topic": "telescoping",
    "kind": "t182-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\dfrac{9}{20 \\cdot 25} + \\dfrac{9}{25 \\cdot 30} + \\dfrac{9}{30 \\cdot 35} + \\dots$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "9/100",
    "solution": [
      "Find the sum of the infinite series $\\dfrac{9}{20 \\cdot 25} + \\dfrac{9}{25 \\cdot 30} + \\dfrac{9}{30 \\cdot 35} + \\dots$.",
      "Each term is $\\dfrac{9}{m(m + 5)}$, for $m = 20, 25, 30, \\dots$",
      "$\\dfrac{9}{m(m + 5)} = \\dfrac{a}{m} + \\dfrac{b}{m + 5}$",
      "$9 = a(m + 5) + bm$",
      "$a = \\dfrac{9}{5}$",
      "$b = -\\dfrac{9}{5}$",
      "The $n$th first factor is $20 + 5(n - 1)$.",
      "$20 + 5(n - 1) = 5n + 15$",
      "The sum of the first $n$ terms is $\\dfrac{9}{5}\\left(\\dfrac{1}{20} - \\dfrac{1}{25}\\right) + \\dfrac{9}{5}\\left(\\dfrac{1}{25} - \\dfrac{1}{30}\\right) + \\dots + \\dfrac{9}{5}\\left(\\dfrac{1}{5n + 15} - \\dfrac{1}{5n + 20}\\right)$.",
      "The sum of the first $n$ terms is $\\dfrac{9}{5}\\left(\\dfrac{1}{20} - \\dfrac{1}{25} + \\dfrac{1}{25} - \\dots + \\dfrac{1}{5n + 15} - \\dfrac{1}{5n + 20}\\right)$.",
      "The sum of the first $n$ terms is $\\dfrac{9}{5}\\left(\\dfrac{1}{20} - \\dfrac{1}{5n + 20}\\right)$.",
      "As $n$ grows, $\\dfrac{1}{5n + 20}$ has limit $0$.",
      "The partial sums have limit $\\dfrac{9}{5}\\left(\\dfrac{1}{20} - 0\\right) = \\dfrac{9}{100}$.",
      "The sum of the series is $\\dfrac{9}{100}$."
    ]
  },
  {
    "id": "t182-k3-p08",
    "topic": "telescoping",
    "kind": "t182-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\dfrac{5}{18 \\cdot 24} + \\dfrac{5}{24 \\cdot 30} + \\dfrac{5}{30 \\cdot 36} + \\dots$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "5/108",
    "solution": [
      "Find the sum of the infinite series $\\dfrac{5}{18 \\cdot 24} + \\dfrac{5}{24 \\cdot 30} + \\dfrac{5}{30 \\cdot 36} + \\dots$.",
      "Each term is $\\dfrac{5}{m(m + 6)}$, for $m = 18, 24, 30, \\dots$",
      "$\\dfrac{5}{m(m + 6)} = \\dfrac{a}{m} + \\dfrac{b}{m + 6}$",
      "$5 = a(m + 6) + bm$",
      "$a = \\dfrac{5}{6}$",
      "$b = -\\dfrac{5}{6}$",
      "The $n$th first factor is $18 + 6(n - 1)$.",
      "$18 + 6(n - 1) = 6n + 12$",
      "The sum of the first $n$ terms is $\\dfrac{5}{6}\\left(\\dfrac{1}{18} - \\dfrac{1}{24}\\right) + \\dfrac{5}{6}\\left(\\dfrac{1}{24} - \\dfrac{1}{30}\\right) + \\dots + \\dfrac{5}{6}\\left(\\dfrac{1}{6n + 12} - \\dfrac{1}{6n + 18}\\right)$.",
      "The sum of the first $n$ terms is $\\dfrac{5}{6}\\left(\\dfrac{1}{18} - \\dfrac{1}{24} + \\dfrac{1}{24} - \\dots + \\dfrac{1}{6n + 12} - \\dfrac{1}{6n + 18}\\right)$.",
      "The sum of the first $n$ terms is $\\dfrac{5}{6}\\left(\\dfrac{1}{18} - \\dfrac{1}{6n + 18}\\right)$.",
      "As $n$ grows, $\\dfrac{1}{6n + 18}$ has limit $0$.",
      "The partial sums have limit $\\dfrac{5}{6}\\left(\\dfrac{1}{18} - 0\\right) = \\dfrac{5}{108}$.",
      "The sum of the series is $\\dfrac{5}{108}$."
    ]
  },
  {
    "id": "t182-k3-p09",
    "topic": "telescoping",
    "kind": "t182-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\dfrac{2}{11 \\cdot 17} + \\dfrac{2}{17 \\cdot 23} + \\dfrac{2}{23 \\cdot 29} + \\dots$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "1/33",
    "solution": [
      "Find the sum of the infinite series $\\dfrac{2}{11 \\cdot 17} + \\dfrac{2}{17 \\cdot 23} + \\dfrac{2}{23 \\cdot 29} + \\dots$.",
      "Each term is $\\dfrac{2}{m(m + 6)}$, for $m = 11, 17, 23, \\dots$",
      "$\\dfrac{2}{m(m + 6)} = \\dfrac{a}{m} + \\dfrac{b}{m + 6}$",
      "$2 = a(m + 6) + bm$",
      "$a = \\dfrac{1}{3}$",
      "$b = -\\dfrac{1}{3}$",
      "The $n$th first factor is $11 + 6(n - 1)$.",
      "$11 + 6(n - 1) = 6n + 5$",
      "The sum of the first $n$ terms is $\\dfrac{1}{3}\\left(\\dfrac{1}{11} - \\dfrac{1}{17}\\right) + \\dfrac{1}{3}\\left(\\dfrac{1}{17} - \\dfrac{1}{23}\\right) + \\dots + \\dfrac{1}{3}\\left(\\dfrac{1}{6n + 5} - \\dfrac{1}{6n + 11}\\right)$.",
      "The sum of the first $n$ terms is $\\dfrac{1}{3}\\left(\\dfrac{1}{11} - \\dfrac{1}{17} + \\dfrac{1}{17} - \\dots + \\dfrac{1}{6n + 5} - \\dfrac{1}{6n + 11}\\right)$.",
      "The sum of the first $n$ terms is $\\dfrac{1}{3}\\left(\\dfrac{1}{11} - \\dfrac{1}{6n + 11}\\right)$.",
      "As $n$ grows, $\\dfrac{1}{6n + 11}$ has limit $0$.",
      "The partial sums have limit $\\dfrac{1}{3}\\left(\\dfrac{1}{11} - 0\\right) = \\dfrac{1}{33}$.",
      "The sum of the series is $\\dfrac{1}{33}$."
    ]
  },
  {
    "id": "t182-k3-p10",
    "topic": "telescoping",
    "kind": "t182-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\dfrac{8}{15 \\cdot 21} + \\dfrac{8}{21 \\cdot 27} + \\dfrac{8}{27 \\cdot 33} + \\dots$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "4/45",
    "solution": [
      "Find the sum of the infinite series $\\dfrac{8}{15 \\cdot 21} + \\dfrac{8}{21 \\cdot 27} + \\dfrac{8}{27 \\cdot 33} + \\dots$.",
      "Each term is $\\dfrac{8}{m(m + 6)}$, for $m = 15, 21, 27, \\dots$",
      "$\\dfrac{8}{m(m + 6)} = \\dfrac{a}{m} + \\dfrac{b}{m + 6}$",
      "$8 = a(m + 6) + bm$",
      "$a = \\dfrac{4}{3}$",
      "$b = -\\dfrac{4}{3}$",
      "The $n$th first factor is $15 + 6(n - 1)$.",
      "$15 + 6(n - 1) = 6n + 9$",
      "The sum of the first $n$ terms is $\\dfrac{4}{3}\\left(\\dfrac{1}{15} - \\dfrac{1}{21}\\right) + \\dfrac{4}{3}\\left(\\dfrac{1}{21} - \\dfrac{1}{27}\\right) + \\dots + \\dfrac{4}{3}\\left(\\dfrac{1}{6n + 9} - \\dfrac{1}{6n + 15}\\right)$.",
      "The sum of the first $n$ terms is $\\dfrac{4}{3}\\left(\\dfrac{1}{15} - \\dfrac{1}{21} + \\dfrac{1}{21} - \\dots + \\dfrac{1}{6n + 9} - \\dfrac{1}{6n + 15}\\right)$.",
      "The sum of the first $n$ terms is $\\dfrac{4}{3}\\left(\\dfrac{1}{15} - \\dfrac{1}{6n + 15}\\right)$.",
      "As $n$ grows, $\\dfrac{1}{6n + 15}$ has limit $0$.",
      "The partial sums have limit $\\dfrac{4}{3}\\left(\\dfrac{1}{15} - 0\\right) = \\dfrac{4}{45}$.",
      "The sum of the series is $\\dfrac{4}{45}$."
    ]
  },
  {
    "id": "t182-k3-p11",
    "topic": "telescoping",
    "kind": "t182-k3",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\dfrac{5}{23 \\cdot 26} + \\dfrac{5}{26 \\cdot 29} + \\dfrac{5}{29 \\cdot 32} + \\dots$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "5/69",
    "solution": [
      "Find the sum of the infinite series $\\dfrac{5}{23 \\cdot 26} + \\dfrac{5}{26 \\cdot 29} + \\dfrac{5}{29 \\cdot 32} + \\dots$.",
      "Each term is $\\dfrac{5}{m(m + 3)}$, for $m = 23, 26, 29, \\dots$",
      "$\\dfrac{5}{m(m + 3)} = \\dfrac{a}{m} + \\dfrac{b}{m + 3}$",
      "$5 = a(m + 3) + bm$",
      "$a = \\dfrac{5}{3}$",
      "$b = -\\dfrac{5}{3}$",
      "The $n$th first factor is $23 + 3(n - 1)$.",
      "$23 + 3(n - 1) = 3n + 20$",
      "The sum of the first $n$ terms is $\\dfrac{5}{3}\\left(\\dfrac{1}{23} - \\dfrac{1}{26}\\right) + \\dfrac{5}{3}\\left(\\dfrac{1}{26} - \\dfrac{1}{29}\\right) + \\dots + \\dfrac{5}{3}\\left(\\dfrac{1}{3n + 20} - \\dfrac{1}{3n + 23}\\right)$.",
      "The sum of the first $n$ terms is $\\dfrac{5}{3}\\left(\\dfrac{1}{23} - \\dfrac{1}{26} + \\dfrac{1}{26} - \\dots + \\dfrac{1}{3n + 20} - \\dfrac{1}{3n + 23}\\right)$.",
      "The sum of the first $n$ terms is $\\dfrac{5}{3}\\left(\\dfrac{1}{23} - \\dfrac{1}{3n + 23}\\right)$.",
      "As $n$ grows, $\\dfrac{1}{3n + 23}$ has limit $0$.",
      "The partial sums have limit $\\dfrac{5}{3}\\left(\\dfrac{1}{23} - 0\\right) = \\dfrac{5}{69}$.",
      "The sum of the series is $\\dfrac{5}{69}$."
    ]
  },
  {
    "id": "t182-k3-p12",
    "topic": "telescoping",
    "kind": "t182-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\dfrac{16}{37 \\cdot 39} + \\dfrac{16}{38 \\cdot 40} + \\dfrac{16}{39 \\cdot 41} + \\dots$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "300/703",
    "solution": [
      "Find the sum of the infinite series $\\dfrac{16}{37 \\cdot 39} + \\dfrac{16}{38 \\cdot 40} + \\dfrac{16}{39 \\cdot 41} + \\dots$.",
      "Each term is $\\dfrac{16}{m(m + 2)}$, for $m = 37, 38, 39, \\dots$",
      "$\\dfrac{16}{m(m + 2)} = \\dfrac{a}{m} + \\dfrac{b}{m + 2}$",
      "$16 = a(m + 2) + bm$",
      "$a = 8$",
      "$b = -8$",
      "The $n$th first factor is $37 + (n - 1)$.",
      "$37 + (n - 1) = n + 36$",
      "The sum of the first $n$ terms is $8\\left(\\dfrac{1}{37} - \\dfrac{1}{39}\\right) + 8\\left(\\dfrac{1}{38} - \\dfrac{1}{40}\\right) + 8\\left(\\dfrac{1}{39} - \\dfrac{1}{41}\\right) + \\dots + 8\\left(\\dfrac{1}{n + 36} - \\dfrac{1}{n + 38}\\right)$.",
      "The sum of the first $n$ terms is $8\\left(\\dfrac{1}{37} - \\dfrac{1}{39} + \\dfrac{1}{38} - \\dfrac{1}{40} + \\dfrac{1}{39} - \\dots + \\dfrac{1}{n + 36} - \\dfrac{1}{n + 38}\\right)$.",
      "The sum of the first $n$ terms is $8\\left(\\dfrac{1}{37} + \\dfrac{1}{38} - \\dfrac{1}{n + 37} - \\dfrac{1}{n + 38}\\right)$.",
      "As $n$ grows, $\\dfrac{1}{n + 37}$ has limit $0$.",
      "As $n$ grows, $\\dfrac{1}{n + 38}$ has limit $0$.",
      "The partial sums have limit $8\\left(\\dfrac{1}{37} + \\dfrac{1}{38} - 0 - 0\\right) = \\dfrac{300}{703}$.",
      "The sum of the series is $\\dfrac{300}{703}$."
    ]
  },
  {
    "id": "t182-k3-p13",
    "topic": "telescoping",
    "kind": "t182-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\dfrac{4}{39 \\cdot 41} + \\dfrac{4}{40 \\cdot 42} + \\dfrac{4}{41 \\cdot 43} + \\dots$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "79/780",
    "solution": [
      "Find the sum of the infinite series $\\dfrac{4}{39 \\cdot 41} + \\dfrac{4}{40 \\cdot 42} + \\dfrac{4}{41 \\cdot 43} + \\dots$.",
      "Each term is $\\dfrac{4}{m(m + 2)}$, for $m = 39, 40, 41, \\dots$",
      "$\\dfrac{4}{m(m + 2)} = \\dfrac{a}{m} + \\dfrac{b}{m + 2}$",
      "$4 = a(m + 2) + bm$",
      "$a = 2$",
      "$b = -2$",
      "The $n$th first factor is $39 + (n - 1)$.",
      "$39 + (n - 1) = n + 38$",
      "The sum of the first $n$ terms is $2\\left(\\dfrac{1}{39} - \\dfrac{1}{41}\\right) + 2\\left(\\dfrac{1}{40} - \\dfrac{1}{42}\\right) + 2\\left(\\dfrac{1}{41} - \\dfrac{1}{43}\\right) + \\dots + 2\\left(\\dfrac{1}{n + 38} - \\dfrac{1}{n + 40}\\right)$.",
      "The sum of the first $n$ terms is $2\\left(\\dfrac{1}{39} - \\dfrac{1}{41} + \\dfrac{1}{40} - \\dfrac{1}{42} + \\dfrac{1}{41} - \\dots + \\dfrac{1}{n + 38} - \\dfrac{1}{n + 40}\\right)$.",
      "The sum of the first $n$ terms is $2\\left(\\dfrac{1}{39} + \\dfrac{1}{40} - \\dfrac{1}{n + 39} - \\dfrac{1}{n + 40}\\right)$.",
      "As $n$ grows, $\\dfrac{1}{n + 39}$ has limit $0$.",
      "As $n$ grows, $\\dfrac{1}{n + 40}$ has limit $0$.",
      "The partial sums have limit $2\\left(\\dfrac{1}{39} + \\dfrac{1}{40} - 0 - 0\\right) = \\dfrac{79}{780}$.",
      "The sum of the series is $\\dfrac{79}{780}$."
    ]
  },
  {
    "id": "t182-k3-p14",
    "topic": "telescoping",
    "kind": "t182-k3",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the sum of the infinite series $\\dfrac{23}{35 \\cdot 37} + \\dfrac{23}{36 \\cdot 38} + \\dfrac{23}{37 \\cdot 39} + \\dots$.",
    "form": "Answer as a fraction in lowest terms.",
    "answer": "1633/2520",
    "solution": [
      "Find the sum of the infinite series $\\dfrac{23}{35 \\cdot 37} + \\dfrac{23}{36 \\cdot 38} + \\dfrac{23}{37 \\cdot 39} + \\dots$.",
      "Each term is $\\dfrac{23}{m(m + 2)}$, for $m = 35, 36, 37, \\dots$",
      "$\\dfrac{23}{m(m + 2)} = \\dfrac{a}{m} + \\dfrac{b}{m + 2}$",
      "$23 = a(m + 2) + bm$",
      "$a = \\dfrac{23}{2}$",
      "$b = -\\dfrac{23}{2}$",
      "The $n$th first factor is $35 + (n - 1)$.",
      "$35 + (n - 1) = n + 34$",
      "The sum of the first $n$ terms is $\\dfrac{23}{2}\\left(\\dfrac{1}{35} - \\dfrac{1}{37}\\right) + \\dfrac{23}{2}\\left(\\dfrac{1}{36} - \\dfrac{1}{38}\\right) + \\dfrac{23}{2}\\left(\\dfrac{1}{37} - \\dfrac{1}{39}\\right) + \\dots + \\dfrac{23}{2}\\left(\\dfrac{1}{n + 34} - \\dfrac{1}{n + 36}\\right)$.",
      "The sum of the first $n$ terms is $\\dfrac{23}{2}\\left(\\dfrac{1}{35} - \\dfrac{1}{37} + \\dfrac{1}{36} - \\dfrac{1}{38} + \\dfrac{1}{37} - \\dots + \\dfrac{1}{n + 34} - \\dfrac{1}{n + 36}\\right)$.",
      "The sum of the first $n$ terms is $\\dfrac{23}{2}\\left(\\dfrac{1}{35} + \\dfrac{1}{36} - \\dfrac{1}{n + 35} - \\dfrac{1}{n + 36}\\right)$.",
      "As $n$ grows, $\\dfrac{1}{n + 35}$ has limit $0$.",
      "As $n$ grows, $\\dfrac{1}{n + 36}$ has limit $0$.",
      "The partial sums have limit $\\dfrac{23}{2}\\left(\\dfrac{1}{35} + \\dfrac{1}{36} - 0 - 0\\right) = \\dfrac{1633}{2520}$.",
      "The sum of the series is $\\dfrac{1633}{2520}$."
    ]
  },
  {
    "id": "t182-k4-p01",
    "topic": "telescoping",
    "kind": "t182-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the sum $\\dfrac{17}{8 \\cdot 15} + \\dfrac{17}{15 \\cdot 22} + \\dfrac{17}{22 \\cdot 29} + \\dots + \\dfrac{17}{85 \\cdot 92}$, and write that line right.",
    "given": [
      "$\\dfrac{1}{k} - \\dfrac{1}{k + 7} = \\dfrac{(k + 7) - k}{k(k + 7)} = \\dfrac{7}{k(k + 7)}$",
      "$\\dfrac{17}{k(k + 7)} = \\dfrac{17}{7}\\left(\\dfrac{1}{k} - \\dfrac{1}{k + 7}\\right)$",
      "The sum is $\\dfrac{17}{7}\\left(\\dfrac{1}{8} + \\dfrac{1}{92}\\right)$.",
      "$\\dfrac{1}{8} + \\dfrac{1}{92} = \\dfrac{25}{184}$",
      "$\\dfrac{17}{7} \\cdot \\dfrac{25}{184} = \\dfrac{425}{1288}$",
      "The sum is $\\dfrac{425}{1288}$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: 17/7*(1/8-1/92)",
    "solution": [
      "Find the first wrong line in this working for the sum $\\dfrac{17}{8 \\cdot 15} + \\dfrac{17}{15 \\cdot 22} + \\dfrac{17}{22 \\cdot 29} + \\dots + \\dfrac{17}{85 \\cdot 92}$, and write that line right.",
      "Line 3 adds the last fraction $\\dfrac{1}{92}$.",
      "Every line other than line 3 follows by a rule that holds, from the data or from the line before it as it is written, so line 3 is the first wrong line.",
      "Line 3 written right is \"The sum is $\\dfrac{17}{7}\\left(\\dfrac{1}{8} - \\dfrac{1}{92}\\right)$\"."
    ]
  },
  {
    "id": "t182-k4-p02",
    "topic": "telescoping",
    "kind": "t182-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the sum $\\dfrac{19}{10 \\cdot 15} + \\dfrac{19}{15 \\cdot 20} + \\dfrac{19}{20 \\cdot 25} + \\dots + \\dfrac{19}{60 \\cdot 65}$, and write that line right.",
    "given": [
      "$\\dfrac{19}{k(k + 5)} = \\dfrac{19}{5}\\left(\\dfrac{1}{k} - \\dfrac{1}{k + 5}\\right)$",
      "The sum is $\\dfrac{19}{5}\\left(\\dfrac{1}{10} - \\dfrac{1}{65}\\right)$.",
      "$\\dfrac{1}{10} - \\dfrac{1}{65} = -\\dfrac{11}{130}$",
      "$\\dfrac{19}{5} \\cdot -\\dfrac{11}{130} = -\\dfrac{209}{650}$",
      "The sum is $-\\dfrac{209}{650}$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: 1/10-1/65 = 11/130",
    "solution": [
      "Find the first wrong line in this working for the sum $\\dfrac{19}{10 \\cdot 15} + \\dfrac{19}{15 \\cdot 20} + \\dfrac{19}{20 \\cdot 25} + \\dots + \\dfrac{19}{60 \\cdot 65}$, and write that line right.",
      "Line 3 gives a negative value for $\\dfrac{1}{10} - \\dfrac{1}{65}$.",
      "Every line other than line 3 follows by a rule that holds, from the data or from the line before it as it is written, so line 3 is the first wrong line.",
      "Line 3 written right is $\\dfrac{1}{10} - \\dfrac{1}{65} = \\dfrac{11}{130}$."
    ]
  },
  {
    "id": "t182-k4-p03",
    "topic": "telescoping",
    "kind": "t182-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the sum $-\\dfrac{17}{20 \\cdot 26} - \\dfrac{17}{26 \\cdot 32} - \\dfrac{17}{32 \\cdot 38} - \\dots - \\dfrac{17}{86 \\cdot 92}$, and write that line right.",
    "given": [
      "$-\\dfrac{17}{k(k + 6)} = \\dfrac{17}{6}\\left(\\dfrac{1}{k} - \\dfrac{1}{k + 6}\\right)$",
      "The sum is $\\dfrac{17}{6}\\left(\\dfrac{1}{20} - \\dfrac{1}{92}\\right)$.",
      "$\\dfrac{1}{20} - \\dfrac{1}{92} = \\dfrac{9}{230}$",
      "$\\dfrac{17}{6} \\cdot \\dfrac{9}{230} = \\dfrac{51}{460}$",
      "The sum is $\\dfrac{51}{460}$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 1: -17/(k*(k+6)) = -17/6*(1/k-1/(k+6))",
    "solution": [
      "Find the first wrong line in this working for the sum $-\\dfrac{17}{20 \\cdot 26} - \\dfrac{17}{26 \\cdot 32} - \\dfrac{17}{32 \\cdot 38} - \\dots - \\dfrac{17}{86 \\cdot 92}$, and write that line right.",
      "Line 1 gives the factor in front as $\\dfrac{17}{6}$.",
      "Every line other than line 1 follows by a rule that holds, from the data or from the line before it as it is written, so line 1 is the first wrong line.",
      "Line 1 written right is $-\\dfrac{17}{k(k + 6)} = -\\dfrac{17}{6}\\left(\\dfrac{1}{k} - \\dfrac{1}{k + 6}\\right)$."
    ]
  },
  {
    "id": "t182-k4-p04",
    "topic": "telescoping",
    "kind": "t182-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the sum $-\\dfrac{19}{8 \\cdot 11} - \\dfrac{19}{11 \\cdot 14} - \\dfrac{19}{14 \\cdot 17} - \\dots - \\dfrac{19}{56 \\cdot 59}$, and write that line right.",
    "given": [
      "$\\dfrac{1}{k} - \\dfrac{1}{k + 3} = \\dfrac{(k + 3) - k}{k(k + 3)} = \\dfrac{3}{k(k + 3)}$",
      "$-\\dfrac{19}{k(k + 3)} = -\\dfrac{19}{3}\\left(\\dfrac{1}{k} - \\dfrac{1}{k + 3}\\right)$",
      "The sum is $-\\dfrac{19}{3}\\left(\\dfrac{1}{8} - \\dfrac{1}{59}\\right)$.",
      "$\\dfrac{1}{8} - \\dfrac{1}{59} = \\dfrac{51}{472}$",
      "$-\\dfrac{19}{3} \\cdot \\dfrac{51}{472} = \\dfrac{323}{472}$",
      "The sum is $\\dfrac{323}{472}$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 5: -19/3*51/472 = -323/472",
    "solution": [
      "Find the first wrong line in this working for the sum $-\\dfrac{19}{8 \\cdot 11} - \\dfrac{19}{11 \\cdot 14} - \\dfrac{19}{14 \\cdot 17} - \\dots - \\dfrac{19}{56 \\cdot 59}$, and write that line right.",
      "Line 5 gives a positive value for the product of $-\\dfrac{19}{3}$ and $\\dfrac{51}{472}$.",
      "Every line other than line 5 follows by a rule that holds, from the data or from the line before it as it is written, so line 5 is the first wrong line.",
      "Line 5 written right is $-\\dfrac{19}{3} \\cdot \\dfrac{51}{472} = -\\dfrac{323}{472}$."
    ]
  },
  {
    "id": "t182-k4-p05",
    "topic": "telescoping",
    "kind": "t182-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the sum $\\dfrac{17}{10 \\cdot 12} + \\dfrac{17}{12 \\cdot 14} + \\dfrac{17}{14 \\cdot 16} + \\dots + \\dfrac{17}{18 \\cdot 20}$, and write that line right.",
    "given": [
      "$\\dfrac{17}{k(k + 2)} = \\dfrac{17}{2}\\left(\\dfrac{1}{k} - \\dfrac{1}{k + 2}\\right)$",
      "The sum is $\\dfrac{17}{2}\\left(\\dfrac{1}{10} + \\dfrac{1}{20}\\right)$.",
      "$\\dfrac{1}{10} + \\dfrac{1}{20} = \\dfrac{3}{20}$",
      "$\\dfrac{17}{2} \\cdot \\dfrac{3}{20} = \\dfrac{51}{40}$",
      "The sum is $\\dfrac{51}{40}$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 2: 17/2*(1/10-1/20)",
    "solution": [
      "Find the first wrong line in this working for the sum $\\dfrac{17}{10 \\cdot 12} + \\dfrac{17}{12 \\cdot 14} + \\dfrac{17}{14 \\cdot 16} + \\dots + \\dfrac{17}{18 \\cdot 20}$, and write that line right.",
      "Line 2 adds the last fraction $\\dfrac{1}{20}$.",
      "Every line other than line 2 follows by a rule that holds, from the data or from the line before it as it is written, so line 2 is the first wrong line.",
      "Line 2 written right is \"The sum is $\\dfrac{17}{2}\\left(\\dfrac{1}{10} - \\dfrac{1}{20}\\right)$\"."
    ]
  },
  {
    "id": "t182-k4-p06",
    "topic": "telescoping",
    "kind": "t182-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the sum $\\dfrac{11}{2 \\cdot 6} + \\dfrac{11}{6 \\cdot 10} + \\dfrac{11}{10 \\cdot 14} + \\dots + \\dfrac{11}{70 \\cdot 74}$, and write that line right.",
    "given": [
      "$\\dfrac{1}{k} - \\dfrac{1}{k + 4} = \\dfrac{(k + 4) - k}{k(k + 4)} = \\dfrac{4}{k(k + 4)}$",
      "$\\dfrac{11}{k(k + 4)} = \\dfrac{11}{4}\\left(\\dfrac{1}{k} - \\dfrac{1}{k + 4}\\right)$",
      "The sum is $\\dfrac{11}{4}\\left(\\dfrac{1}{2} - \\dfrac{1}{74}\\right)$.",
      "$\\dfrac{1}{2} - \\dfrac{1}{74} = -\\dfrac{18}{37}$",
      "$\\dfrac{11}{4} \\cdot -\\dfrac{18}{37} = -\\dfrac{99}{74}$",
      "The sum is $-\\dfrac{99}{74}$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: 1/2-1/74 = 18/37",
    "solution": [
      "Find the first wrong line in this working for the sum $\\dfrac{11}{2 \\cdot 6} + \\dfrac{11}{6 \\cdot 10} + \\dfrac{11}{10 \\cdot 14} + \\dots + \\dfrac{11}{70 \\cdot 74}$, and write that line right.",
      "Line 4 gives a negative value for $\\dfrac{1}{2} - \\dfrac{1}{74}$.",
      "Every line other than line 4 follows by a rule that holds, from the data or from the line before it as it is written, so line 4 is the first wrong line.",
      "Line 4 written right is $\\dfrac{1}{2} - \\dfrac{1}{74} = \\dfrac{18}{37}$."
    ]
  },
  {
    "id": "t182-k4-p07",
    "topic": "telescoping",
    "kind": "t182-k4",
    "formNo": 1,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the sum $-\\dfrac{11}{27 \\cdot 32} - \\dfrac{11}{32 \\cdot 37} - \\dfrac{11}{37 \\cdot 42} - \\dots - \\dfrac{11}{67 \\cdot 72}$, and write that line right.",
    "given": [
      "$\\dfrac{1}{k} - \\dfrac{1}{k + 5} = \\dfrac{(k + 5) - k}{k(k + 5)} = \\dfrac{5}{k(k + 5)}$",
      "$-\\dfrac{11}{k(k + 5)} = -\\dfrac{11}{5}\\left(\\dfrac{1}{k} - \\dfrac{1}{k + 5}\\right)$",
      "The sum is $-\\dfrac{11}{5}\\left(\\dfrac{1}{27} - \\dfrac{1}{72}\\right)$.",
      "$\\dfrac{1}{27} - \\dfrac{1}{72} = \\dfrac{5}{216}$",
      "$-\\dfrac{11}{5} \\cdot \\dfrac{5}{216} = \\dfrac{11}{216}$",
      "The sum is $\\dfrac{11}{216}$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 5: -11/5*5/216 = -11/216",
    "solution": [
      "Find the first wrong line in this working for the sum $-\\dfrac{11}{27 \\cdot 32} - \\dfrac{11}{32 \\cdot 37} - \\dfrac{11}{37 \\cdot 42} - \\dots - \\dfrac{11}{67 \\cdot 72}$, and write that line right.",
      "Line 5 gives a positive value for the product of $-\\dfrac{11}{5}$ and $\\dfrac{5}{216}$.",
      "Every line other than line 5 follows by a rule that holds, from the data or from the line before it as it is written, so line 5 is the first wrong line.",
      "Line 5 written right is $-\\dfrac{11}{5} \\cdot \\dfrac{5}{216} = -\\dfrac{11}{216}$."
    ]
  },
  {
    "id": "t182-k4-p08",
    "topic": "telescoping",
    "kind": "t182-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the sum $\\dfrac{19}{2 \\cdot 11} + \\dfrac{19}{11 \\cdot 20} + \\dfrac{19}{20 \\cdot 29} + \\dots + \\dfrac{19}{47 \\cdot 56}$, and write that line right.",
    "given": [
      "$\\dfrac{1}{k} - \\dfrac{1}{k + 9} = \\dfrac{(k + 9) - k}{k(k + 9)} = \\dfrac{9}{k(k + 9)}$",
      "$\\dfrac{19}{k(k + 9)} = \\dfrac{19}{9}\\left(\\dfrac{1}{k} - \\dfrac{1}{k + 9}\\right)$",
      "The sum is $\\dfrac{19}{9}\\left(\\dfrac{1}{2} - \\dfrac{1}{56}\\right)$.",
      "$\\dfrac{1}{2} - \\dfrac{1}{56} = \\dfrac{54}{112} \\cdot \\dfrac{19}{9} = \\dfrac{57}{56}$",
      "The sum is $\\dfrac{57}{56}$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: 19/9*(1/2-1/56) = 57/56",
    "solution": [
      "Find the first wrong line in this working for the sum $\\dfrac{19}{2 \\cdot 11} + \\dfrac{19}{11 \\cdot 20} + \\dfrac{19}{20 \\cdot 29} + \\dots + \\dfrac{19}{47 \\cdot 56}$, and write that line right.",
      "Line 4 writes $\\dfrac{1}{2} - \\dfrac{1}{56}$, then times $\\dfrac{19}{9}$, in one run of equals signs, so it states $\\dfrac{1}{2} - \\dfrac{1}{56} = \\dfrac{57}{56}$.",
      "Every line other than line 4 follows by a rule that holds, from the data or from the line before it as it is written, so line 4 is the first wrong line.",
      "Line 4 written right is $\\dfrac{19}{9}\\left(\\dfrac{1}{2} - \\dfrac{1}{56}\\right) = \\dfrac{57}{56}$."
    ]
  },
  {
    "id": "t182-k4-p09",
    "topic": "telescoping",
    "kind": "t182-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the sum $\\dfrac{5}{24 \\cdot 33} + \\dfrac{5}{33 \\cdot 42} + \\dfrac{5}{42 \\cdot 51} + \\dots + \\dfrac{5}{87 \\cdot 96}$, and write that line right.",
    "given": [
      "$\\dfrac{1}{k} - \\dfrac{1}{k + 9} = \\dfrac{(k + 9) - k}{k(k + 9)} = \\dfrac{9}{k(k + 9)}$",
      "The sum is $\\dfrac{5}{9}\\left(\\dfrac{1}{24} - \\dfrac{1}{96}\\right)$.",
      "$\\dfrac{1}{24} - \\dfrac{1}{96} = \\dfrac{96}{2304} - \\dfrac{24}{2304} = \\dfrac{72}{2304}$",
      "$5 \\cdot 72 = \\dfrac{360}{9 \\cdot 2304} = \\dfrac{5}{288}$",
      "The sum is $\\dfrac{5}{288}$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: 5*72/(9*2304) = 5/288",
    "solution": [
      "Find the first wrong line in this working for the sum $\\dfrac{5}{24 \\cdot 33} + \\dfrac{5}{33 \\cdot 42} + \\dfrac{5}{42 \\cdot 51} + \\dots + \\dfrac{5}{87 \\cdot 96}$, and write that line right.",
      "Line 4 writes $5 \\cdot 72$, then divided by $9 \\cdot 2304$, in one run of equals signs, so it states $5 \\cdot 72 = \\dfrac{5}{288}$.",
      "Every line other than line 4 follows by a rule that holds, from the data or from the line before it as it is written, so line 4 is the first wrong line.",
      "Line 4 written right is $\\dfrac{5 \\cdot 72}{9 \\cdot 2304} = \\dfrac{5}{288}$."
    ]
  },
  {
    "id": "t182-k4-p10",
    "topic": "telescoping",
    "kind": "t182-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the sum $\\dfrac{17}{21 \\cdot 26} + \\dfrac{17}{26 \\cdot 31} + \\dfrac{17}{31 \\cdot 36} + \\dots + \\dfrac{17}{106 \\cdot 111}$, and write that line right.",
    "given": [
      "$\\dfrac{17}{k(k + 5)} = \\dfrac{17}{5}\\left(\\dfrac{1}{k} - \\dfrac{1}{k + 5}\\right)$",
      "The sum is $\\dfrac{17}{5}\\left(\\dfrac{1}{21} - \\dfrac{1}{111}\\right)$.",
      "$\\dfrac{1}{21} - \\dfrac{1}{111} = \\dfrac{111}{2331} - \\dfrac{21}{2331} = \\dfrac{90}{2331}$",
      "$17 \\cdot 90 = \\dfrac{1530}{5 \\cdot 2331} = \\dfrac{34}{259}$",
      "The sum is $\\dfrac{34}{259}$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: 17*90/(5*2331) = 34/259",
    "solution": [
      "Find the first wrong line in this working for the sum $\\dfrac{17}{21 \\cdot 26} + \\dfrac{17}{26 \\cdot 31} + \\dfrac{17}{31 \\cdot 36} + \\dots + \\dfrac{17}{106 \\cdot 111}$, and write that line right.",
      "Line 4 writes $17 \\cdot 90$, then divided by $5 \\cdot 2331$, in one run of equals signs, so it states $17 \\cdot 90 = \\dfrac{34}{259}$.",
      "Every line other than line 4 follows by a rule that holds, from the data or from the line before it as it is written, so line 4 is the first wrong line.",
      "Line 4 written right is $\\dfrac{17 \\cdot 90}{5 \\cdot 2331} = \\dfrac{34}{259}$."
    ]
  },
  {
    "id": "t182-k4-p11",
    "topic": "telescoping",
    "kind": "t182-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the sum $\\dfrac{3}{26 \\cdot 28} + \\dfrac{3}{28 \\cdot 30} + \\dfrac{3}{30 \\cdot 32} + \\dots + \\dfrac{3}{58 \\cdot 60}$, and write that line right.",
    "given": [
      "$\\dfrac{1}{k} - \\dfrac{1}{k + 2} = \\dfrac{(k + 2) - k}{k(k + 2)} = \\dfrac{2}{k(k + 2)}$",
      "The sum is $\\dfrac{3}{2}\\left(\\dfrac{1}{26} - \\dfrac{1}{60}\\right)$.",
      "$\\dfrac{1}{26} - \\dfrac{1}{60} = \\dfrac{60}{1560} - \\dfrac{26}{1560} = \\dfrac{34}{1560}$",
      "$3 \\cdot 34 = \\dfrac{102}{2 \\cdot 1560} = \\dfrac{17}{520}$",
      "The sum is $\\dfrac{17}{520}$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: 3*34/(2*1560) = 17/520",
    "solution": [
      "Find the first wrong line in this working for the sum $\\dfrac{3}{26 \\cdot 28} + \\dfrac{3}{28 \\cdot 30} + \\dfrac{3}{30 \\cdot 32} + \\dots + \\dfrac{3}{58 \\cdot 60}$, and write that line right.",
      "Line 4 writes $3 \\cdot 34$, then divided by $2 \\cdot 1560$, in one run of equals signs, so it states $3 \\cdot 34 = \\dfrac{17}{520}$.",
      "Every line other than line 4 follows by a rule that holds, from the data or from the line before it as it is written, so line 4 is the first wrong line.",
      "Line 4 written right is $\\dfrac{3 \\cdot 34}{2 \\cdot 1560} = \\dfrac{17}{520}$."
    ]
  },
  {
    "id": "t182-k4-p12",
    "topic": "telescoping",
    "kind": "t182-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the sum $\\dfrac{17}{16 \\cdot 19} + \\dfrac{17}{19 \\cdot 22} + \\dfrac{17}{22 \\cdot 25} + \\dots + \\dfrac{17}{49 \\cdot 52}$, and write that line right.",
    "given": [
      "$\\dfrac{1}{k} - \\dfrac{1}{k + 3} = \\dfrac{(k + 3) - k}{k(k + 3)} = \\dfrac{3}{k(k + 3)}$",
      "$\\dfrac{17}{k(k + 3)} = \\dfrac{17}{3}\\left(\\dfrac{1}{k} - \\dfrac{1}{k + 3}\\right)$",
      "The sum is $\\dfrac{17}{3}\\left(\\dfrac{1}{16} - \\dfrac{1}{52}\\right)$.",
      "$\\dfrac{1}{16} - \\dfrac{1}{52} = \\dfrac{52}{832} - \\dfrac{16}{832} = \\dfrac{36}{832}$",
      "$17 \\cdot 36 = \\dfrac{612}{3 \\cdot 832} = \\dfrac{51}{208}$",
      "The sum is $\\dfrac{51}{208}$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 5: 17*36/(3*832) = 51/208",
    "solution": [
      "Find the first wrong line in this working for the sum $\\dfrac{17}{16 \\cdot 19} + \\dfrac{17}{19 \\cdot 22} + \\dfrac{17}{22 \\cdot 25} + \\dots + \\dfrac{17}{49 \\cdot 52}$, and write that line right.",
      "Line 5 writes $17 \\cdot 36$, then divided by $3 \\cdot 832$, in one run of equals signs, so it states $17 \\cdot 36 = \\dfrac{51}{208}$.",
      "Every line other than line 5 follows by a rule that holds, from the data or from the line before it as it is written, so line 5 is the first wrong line.",
      "Line 5 written right is $\\dfrac{17 \\cdot 36}{3 \\cdot 832} = \\dfrac{51}{208}$."
    ]
  },
  {
    "id": "t182-k4-p13",
    "topic": "telescoping",
    "kind": "t182-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the sum $\\dfrac{13}{3 \\cdot 12} + \\dfrac{13}{12 \\cdot 21} + \\dfrac{13}{21 \\cdot 30} + \\dots + \\dfrac{13}{138 \\cdot 147}$, and write that line right.",
    "given": [
      "$\\dfrac{1}{k} - \\dfrac{1}{k + 9} = \\dfrac{(k + 9) - k}{k(k + 9)} = \\dfrac{9}{k(k + 9)}$",
      "The sum is $\\dfrac{13}{9}\\left(\\dfrac{1}{3} - \\dfrac{1}{147}\\right)$.",
      "$\\dfrac{1}{3} - \\dfrac{1}{147} = \\dfrac{144}{441} \\cdot \\dfrac{13}{9} = \\dfrac{1872}{3969}$",
      "$\\dfrac{1872}{3969} = \\dfrac{208}{441}$",
      "The sum is $\\dfrac{208}{441}$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 3: 13/9*(1/3-1/147) = 1872/3969",
    "solution": [
      "Find the first wrong line in this working for the sum $\\dfrac{13}{3 \\cdot 12} + \\dfrac{13}{12 \\cdot 21} + \\dfrac{13}{21 \\cdot 30} + \\dots + \\dfrac{13}{138 \\cdot 147}$, and write that line right.",
      "Line 3 writes $\\dfrac{1}{3} - \\dfrac{1}{147}$, then times $\\dfrac{13}{9}$, in one run of equals signs, so it states $\\dfrac{1}{3} - \\dfrac{1}{147} = \\dfrac{1872}{3969}$.",
      "Every line other than line 3 follows by a rule that holds, from the data or from the line before it as it is written, so line 3 is the first wrong line.",
      "Line 3 written right is $\\dfrac{13}{9}\\left(\\dfrac{1}{3} - \\dfrac{1}{147}\\right) = \\dfrac{1872}{3969}$."
    ]
  },
  {
    "id": "t182-k4-p14",
    "topic": "telescoping",
    "kind": "t182-k4",
    "formNo": 2,
    "calc": "no",
    "prompt": "Find the first wrong line in this working for the sum $\\dfrac{13}{18 \\cdot 23} + \\dfrac{13}{23 \\cdot 28} + \\dfrac{13}{28 \\cdot 33} + \\dots + \\dfrac{13}{43 \\cdot 48}$, and write that line right.",
    "given": [
      "$\\dfrac{13}{k(k + 5)} = \\dfrac{13}{5}\\left(\\dfrac{1}{k} - \\dfrac{1}{k + 5}\\right)$",
      "The sum is $\\dfrac{13}{5}\\left(\\dfrac{1}{18} - \\dfrac{1}{48}\\right)$.",
      "$\\dfrac{1}{18} - \\dfrac{1}{48} = \\dfrac{48}{864} - \\dfrac{18}{864} = \\dfrac{30}{864}$",
      "$13 \\cdot 30 = \\dfrac{390}{5 \\cdot 864} = \\dfrac{390}{4320}$",
      "$\\dfrac{390}{4320} = \\dfrac{13}{144}$",
      "The sum is $\\dfrac{13}{144}$."
    ],
    "form": "Answer as the wrong line and that line written right, as in Line 3: 2*x = 10.",
    "answer": "Line 4: 13*30/(5*864) = 390/4320",
    "solution": [
      "Find the first wrong line in this working for the sum $\\dfrac{13}{18 \\cdot 23} + \\dfrac{13}{23 \\cdot 28} + \\dfrac{13}{28 \\cdot 33} + \\dots + \\dfrac{13}{43 \\cdot 48}$, and write that line right.",
      "Line 4 writes $13 \\cdot 30$, then divided by $5 \\cdot 864$, in one run of equals signs, so it states $13 \\cdot 30 = \\dfrac{390}{4320}$.",
      "Every line other than line 4 follows by a rule that holds, from the data or from the line before it as it is written, so line 4 is the first wrong line.",
      "Line 4 written right is $\\dfrac{13 \\cdot 30}{5 \\cdot 864} = \\dfrac{390}{4320}$."
    ]
  },
  {
    "id": "t182-k5-p01",
    "topic": "telescoping",
    "kind": "t182-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the $k$th term of the sum $\\dfrac{1}{\\sqrt{29} + \\sqrt{35}} + \\dfrac{1}{\\sqrt{35} + \\sqrt{41}} + \\dfrac{1}{\\sqrt{41} + \\sqrt{47}} + \\dots + \\dfrac{1}{\\sqrt{125} + \\sqrt{131}}$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = 1/(sqrt(6*k+23)+sqrt(6*k+29))",
    "solution": [
      "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the $k$th term of the sum $\\dfrac{1}{\\sqrt{29} + \\sqrt{35}} + \\dfrac{1}{\\sqrt{35} + \\sqrt{41}} + \\dfrac{1}{\\sqrt{41} + \\sqrt{47}} + \\dots + \\dfrac{1}{\\sqrt{125} + \\sqrt{131}}$.",
      "The numbers under the first roots, $29, 35, 41, \\dots$, form an arithmetic sequence with first term $29$ and common difference $6$.",
      "The $k$th of them is $29 + 6(k - 1)$.",
      "$29 + 6(k - 1) = 6k + 23$",
      "The $k$th term is $\\dfrac{1}{\\sqrt{6k + 23} + \\sqrt{6k + 29}}$.",
      "$y = \\dfrac{1}{\\sqrt{6k + 23} + \\sqrt{6k + 29}}$"
    ]
  },
  {
    "id": "t182-k5-p02",
    "topic": "telescoping",
    "kind": "t182-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $y$ alone on the left: Counted from the left, the $k$th factor of the product $\\dfrac{29}{27} \\cdot \\dfrac{31}{29} \\cdot \\dfrac{33}{31} \\cdots \\dfrac{57}{55}$ is the number $y$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (2*k+27)/(2*k+25)",
    "solution": [
      "Write this sentence as an equation, with $y$ alone on the left: Counted from the left, the $k$th factor of the product $\\dfrac{29}{27} \\cdot \\dfrac{31}{29} \\cdot \\dfrac{33}{31} \\cdots \\dfrac{57}{55}$ is the number $y$.",
      "The bottoms of the factors, $27, 29, 31, \\dots$, form an arithmetic sequence with first term $27$ and common difference $2$.",
      "The $k$th of them is $27 + 2(k - 1)$.",
      "$27 + 2(k - 1) = 2k + 25$",
      "The $k$th factor is $\\dfrac{2k + 27}{2k + 25}$.",
      "$y = \\dfrac{2k + 27}{2k + 25}$"
    ]
  },
  {
    "id": "t182-k5-p03",
    "topic": "telescoping",
    "kind": "t182-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the $k$th term of the sum $\\dfrac{1}{\\sqrt{18} + \\sqrt{23}} + \\dfrac{1}{\\sqrt{23} + \\sqrt{28}} + \\dfrac{1}{\\sqrt{28} + \\sqrt{33}} + \\dots + \\dfrac{1}{\\sqrt{53} + \\sqrt{58}}$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = 1/(sqrt(5*k+13)+sqrt(5*k+18))",
    "solution": [
      "Write this sentence as an equation, with $y$ alone on the left: The number $y$ is the $k$th term of the sum $\\dfrac{1}{\\sqrt{18} + \\sqrt{23}} + \\dfrac{1}{\\sqrt{23} + \\sqrt{28}} + \\dfrac{1}{\\sqrt{28} + \\sqrt{33}} + \\dots + \\dfrac{1}{\\sqrt{53} + \\sqrt{58}}$.",
      "The numbers under the first roots, $18, 23, 28, \\dots$, form an arithmetic sequence with first term $18$ and common difference $5$.",
      "The $k$th of them is $18 + 5(k - 1)$.",
      "$18 + 5(k - 1) = 5k + 13$",
      "The $k$th term is $\\dfrac{1}{\\sqrt{5k + 13} + \\sqrt{5k + 18}}$.",
      "$y = \\dfrac{1}{\\sqrt{5k + 13} + \\sqrt{5k + 18}}$"
    ]
  },
  {
    "id": "t182-k5-p04",
    "topic": "telescoping",
    "kind": "t182-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $y$ alone on the left: The product $\\dfrac{15}{10} \\cdot \\dfrac{20}{15} \\cdot \\dfrac{25}{20} \\cdots \\dfrac{105}{100}$ has the number $y$ as its $k$th factor.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (5*k+10)/(5*k+5)",
    "solution": [
      "Write this sentence as an equation, with $y$ alone on the left: The product $\\dfrac{15}{10} \\cdot \\dfrac{20}{15} \\cdot \\dfrac{25}{20} \\cdots \\dfrac{105}{100}$ has the number $y$ as its $k$th factor.",
      "The bottoms of the factors, $10, 15, 20, \\dots$, form an arithmetic sequence with first term $10$ and common difference $5$.",
      "The $k$th of them is $10 + 5(k - 1)$.",
      "$10 + 5(k - 1) = 5k + 5$",
      "The $k$th factor is $\\dfrac{5k + 10}{5k + 5}$.",
      "$y = \\dfrac{5k + 10}{5k + 5}$"
    ]
  },
  {
    "id": "t182-k5-p05",
    "topic": "telescoping",
    "kind": "t182-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $y$ alone on the left: The sum $\\dfrac{1}{\\sqrt{12} + \\sqrt{17}} + \\dfrac{1}{\\sqrt{17} + \\sqrt{22}} + \\dfrac{1}{\\sqrt{22} + \\sqrt{27}} + \\dots + \\dfrac{1}{\\sqrt{92} + \\sqrt{97}}$ has the number $y$ as its $k$th term.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = 1/(sqrt(5*k+7)+sqrt(5*k+12))",
    "solution": [
      "Write this sentence as an equation, with $y$ alone on the left: The sum $\\dfrac{1}{\\sqrt{12} + \\sqrt{17}} + \\dfrac{1}{\\sqrt{17} + \\sqrt{22}} + \\dfrac{1}{\\sqrt{22} + \\sqrt{27}} + \\dots + \\dfrac{1}{\\sqrt{92} + \\sqrt{97}}$ has the number $y$ as its $k$th term.",
      "The numbers under the first roots, $12, 17, 22, \\dots$, form an arithmetic sequence with first term $12$ and common difference $5$.",
      "The $k$th of them is $12 + 5(k - 1)$.",
      "$12 + 5(k - 1) = 5k + 7$",
      "The $k$th term is $\\dfrac{1}{\\sqrt{5k + 7} + \\sqrt{5k + 12}}$.",
      "$y = \\dfrac{1}{\\sqrt{5k + 7} + \\sqrt{5k + 12}}$"
    ]
  },
  {
    "id": "t182-k5-p06",
    "topic": "telescoping",
    "kind": "t182-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $y$ alone on the left: The sum $\\dfrac{11}{19 \\cdot 23} + \\dfrac{11}{23 \\cdot 27} + \\dfrac{11}{27 \\cdot 31} + \\dots + \\dfrac{11}{103 \\cdot 107}$ has the number $y$ as its $k$th term.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = 11/((4*k+15)*(4*k+19))",
    "solution": [
      "Write this sentence as an equation, with $y$ alone on the left: The sum $\\dfrac{11}{19 \\cdot 23} + \\dfrac{11}{23 \\cdot 27} + \\dfrac{11}{27 \\cdot 31} + \\dots + \\dfrac{11}{103 \\cdot 107}$ has the number $y$ as its $k$th term.",
      "The first factors of the bottoms, $19, 23, 27, \\dots$, form an arithmetic sequence with first term $19$ and common difference $4$.",
      "The $k$th of them is $19 + 4(k - 1)$.",
      "$19 + 4(k - 1) = 4k + 15$",
      "The $k$th term is $\\dfrac{11}{(4k + 15)(4k + 19)}$.",
      "$y = \\dfrac{11}{(4k + 15)(4k + 19)}$"
    ]
  },
  {
    "id": "t182-k5-p07",
    "topic": "telescoping",
    "kind": "t182-k5",
    "formNo": 1,
    "calc": "no",
    "prompt": "Write this sentence as an equation, with $y$ alone on the left: Counted from the left, the $k$th factor of the product $\\dfrac{28}{23} \\cdot \\dfrac{33}{28} \\cdot \\dfrac{38}{33} \\cdots \\dfrac{83}{78}$ is the number $y$.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "y = (5*k+23)/(5*k+18)",
    "solution": [
      "Write this sentence as an equation, with $y$ alone on the left: Counted from the left, the $k$th factor of the product $\\dfrac{28}{23} \\cdot \\dfrac{33}{28} \\cdot \\dfrac{38}{33} \\cdots \\dfrac{83}{78}$ is the number $y$.",
      "The bottoms of the factors, $23, 28, 33, \\dots$, form an arithmetic sequence with first term $23$ and common difference $5$.",
      "The $k$th of them is $23 + 5(k - 1)$.",
      "$23 + 5(k - 1) = 5k + 18$",
      "The $k$th factor is $\\dfrac{5k + 23}{5k + 18}$.",
      "$y = \\dfrac{5k + 23}{5k + 18}$"
    ]
  },
  {
    "id": "t182-k5-p08",
    "topic": "telescoping",
    "kind": "t182-k5",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $k$, with the bottom of the $k$th factor on the left and no solving: The last factor of the product $\\dfrac{25}{18} \\cdot \\dfrac{32}{25} \\cdot \\dfrac{39}{32} \\cdots \\dfrac{151}{144}$ is its $k$th factor.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "7*k+11 = 144",
    "solution": [
      "Write this sentence as an equation in $k$, with the bottom of the $k$th factor on the left and no solving: The last factor of the product $\\dfrac{25}{18} \\cdot \\dfrac{32}{25} \\cdot \\dfrac{39}{32} \\cdots \\dfrac{151}{144}$ is its $k$th factor.",
      "The bottoms of the factors, $18, 25, 32, \\dots$, form an arithmetic sequence with first term $18$ and common difference $7$.",
      "The $k$th of them is $18 + 7(k - 1)$.",
      "$18 + 7(k - 1) = 7k + 11$",
      "The last factor is $\\dfrac{151}{144}$, so its bottom is $144$.",
      "$7k + 11 = 144$"
    ]
  },
  {
    "id": "t182-k5-p09",
    "topic": "telescoping",
    "kind": "t182-k5",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $k$, with the number under the first root of the $k$th term on the left and no solving: The sum $\\dfrac{1}{\\sqrt{12} + \\sqrt{16}} + \\dfrac{1}{\\sqrt{16} + \\sqrt{20}} + \\dfrac{1}{\\sqrt{20} + \\sqrt{24}} + \\dots + \\dfrac{1}{\\sqrt{100} + \\sqrt{104}}$ ends on its $k$th term.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "4*k+8 = 100",
    "solution": [
      "Write this sentence as an equation in $k$, with the number under the first root of the $k$th term on the left and no solving: The sum $\\dfrac{1}{\\sqrt{12} + \\sqrt{16}} + \\dfrac{1}{\\sqrt{16} + \\sqrt{20}} + \\dfrac{1}{\\sqrt{20} + \\sqrt{24}} + \\dots + \\dfrac{1}{\\sqrt{100} + \\sqrt{104}}$ ends on its $k$th term.",
      "The numbers under the first roots, $12, 16, 20, \\dots$, form an arithmetic sequence with first term $12$ and common difference $4$.",
      "The $k$th of them is $12 + 4(k - 1)$.",
      "$12 + 4(k - 1) = 4k + 8$",
      "The last term is $\\dfrac{1}{\\sqrt{100} + \\sqrt{104}}$, so the number under its first root is $100$.",
      "$4k + 8 = 100$"
    ]
  },
  {
    "id": "t182-k5-p10",
    "topic": "telescoping",
    "kind": "t182-k5",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $k$, with the bottom of the $k$th factor on the left and no solving: The $k$th factor of the product $\\dfrac{11}{9} \\cdot \\dfrac{13}{11} \\cdot \\dfrac{15}{13} \\cdots \\dfrac{27}{25}$ is its last factor.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "2*k+7 = 25",
    "solution": [
      "Write this sentence as an equation in $k$, with the bottom of the $k$th factor on the left and no solving: The $k$th factor of the product $\\dfrac{11}{9} \\cdot \\dfrac{13}{11} \\cdot \\dfrac{15}{13} \\cdots \\dfrac{27}{25}$ is its last factor.",
      "The bottoms of the factors, $9, 11, 13, \\dots$, form an arithmetic sequence with first term $9$ and common difference $2$.",
      "The $k$th of them is $9 + 2(k - 1)$.",
      "$9 + 2(k - 1) = 2k + 7$",
      "The last factor is $\\dfrac{27}{25}$, so its bottom is $25$.",
      "$2k + 7 = 25$"
    ]
  },
  {
    "id": "t182-k5-p11",
    "topic": "telescoping",
    "kind": "t182-k5",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $k$, with the number under the first root of the $k$th term on the left and no solving: The $k$th term of the sum $\\dfrac{1}{\\sqrt{19} + \\sqrt{25}} + \\dfrac{1}{\\sqrt{25} + \\sqrt{31}} + \\dfrac{1}{\\sqrt{31} + \\sqrt{37}} + \\dots + \\dfrac{1}{\\sqrt{109} + \\sqrt{115}}$ is its last term.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "6*k+13 = 109",
    "solution": [
      "Write this sentence as an equation in $k$, with the number under the first root of the $k$th term on the left and no solving: The $k$th term of the sum $\\dfrac{1}{\\sqrt{19} + \\sqrt{25}} + \\dfrac{1}{\\sqrt{25} + \\sqrt{31}} + \\dfrac{1}{\\sqrt{31} + \\sqrt{37}} + \\dots + \\dfrac{1}{\\sqrt{109} + \\sqrt{115}}$ is its last term.",
      "The numbers under the first roots, $19, 25, 31, \\dots$, form an arithmetic sequence with first term $19$ and common difference $6$.",
      "The $k$th of them is $19 + 6(k - 1)$.",
      "$19 + 6(k - 1) = 6k + 13$",
      "The last term is $\\dfrac{1}{\\sqrt{109} + \\sqrt{115}}$, so the number under its first root is $109$.",
      "$6k + 13 = 109$"
    ]
  },
  {
    "id": "t182-k5-p12",
    "topic": "telescoping",
    "kind": "t182-k5",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $k$, with the bottom of the $k$th factor on the left and no solving: The last factor of the product $\\dfrac{24}{21} \\cdot \\dfrac{27}{24} \\cdot \\dfrac{30}{27} \\cdots \\dfrac{51}{48}$ is its $k$th factor.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "3*k+18 = 48",
    "solution": [
      "Write this sentence as an equation in $k$, with the bottom of the $k$th factor on the left and no solving: The last factor of the product $\\dfrac{24}{21} \\cdot \\dfrac{27}{24} \\cdot \\dfrac{30}{27} \\cdots \\dfrac{51}{48}$ is its $k$th factor.",
      "The bottoms of the factors, $21, 24, 27, \\dots$, form an arithmetic sequence with first term $21$ and common difference $3$.",
      "The $k$th of them is $21 + 3(k - 1)$.",
      "$21 + 3(k - 1) = 3k + 18$",
      "The last factor is $\\dfrac{51}{48}$, so its bottom is $48$.",
      "$3k + 18 = 48$"
    ]
  },
  {
    "id": "t182-k5-p13",
    "topic": "telescoping",
    "kind": "t182-k5",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $k$, with the first factor of the bottom of the $k$th term on the left and no solving: The sum $\\dfrac{8}{25 \\cdot 31} + \\dfrac{8}{31 \\cdot 37} + \\dfrac{8}{37 \\cdot 43} + \\dots + \\dfrac{8}{127 \\cdot 133}$ ends on its $k$th term.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "6*k+19 = 127",
    "solution": [
      "Write this sentence as an equation in $k$, with the first factor of the bottom of the $k$th term on the left and no solving: The sum $\\dfrac{8}{25 \\cdot 31} + \\dfrac{8}{31 \\cdot 37} + \\dfrac{8}{37 \\cdot 43} + \\dots + \\dfrac{8}{127 \\cdot 133}$ ends on its $k$th term.",
      "The first factors of the bottoms, $25, 31, 37, \\dots$, form an arithmetic sequence with first term $25$ and common difference $6$.",
      "The $k$th of them is $25 + 6(k - 1)$.",
      "$25 + 6(k - 1) = 6k + 19$",
      "The last term is $\\dfrac{8}{127 \\cdot 133}$, so the first factor of its bottom is $127$.",
      "$6k + 19 = 127$"
    ]
  },
  {
    "id": "t182-k5-p14",
    "topic": "telescoping",
    "kind": "t182-k5",
    "formNo": 2,
    "calc": "no",
    "prompt": "Write this sentence as an equation in $k$, with the bottom of the $k$th factor on the left and no solving: The product $\\dfrac{19}{14} \\cdot \\dfrac{24}{19} \\cdot \\dfrac{29}{24} \\cdots \\dfrac{104}{99}$ ends on its $k$th factor.",
    "form": "Answer as an equation, or equivalent, as in y = 2*x-3.",
    "answer": "5*k+9 = 99",
    "solution": [
      "Write this sentence as an equation in $k$, with the bottom of the $k$th factor on the left and no solving: The product $\\dfrac{19}{14} \\cdot \\dfrac{24}{19} \\cdot \\dfrac{29}{24} \\cdots \\dfrac{104}{99}$ ends on its $k$th factor.",
      "The bottoms of the factors, $14, 19, 24, \\dots$, form an arithmetic sequence with first term $14$ and common difference $5$.",
      "The $k$th of them is $14 + 5(k - 1)$.",
      "$14 + 5(k - 1) = 5k + 9$",
      "The last factor is $\\dfrac{104}{99}$, so its bottom is $99$.",
      "$5k + 9 = 99$"
    ]
  }
]
