document.getElementById("repetitions").addEventListener("input", function() {
    document.getElementById("rep").textContent = this.value;
});

let vocabulaire = []
let randIdx = 0
let motsFr = []
let motsTr = []
let vocabulaireeuroAng = ["Break the ice", "Hit the sack", "Let the cat out of the bag", "Piece of cake", "Once in a blue moon", "Spill the beans", "Under the weather", "Bite the bullet", "Cut to the chase", "Hit the nail on the head"];
let vocabulaireeuroFr = ["Briser la glace", "Aller au lit", "Vendre la mèche", "C'est du gâteau", "Tous les trente-six du mois", "Vendre la mèche", "Ne pas être dans son assiette", "Prendre son courage à deux mains", "Aller à l'essentiel", "Mettre dans le mille"];

// ==================== Idioms ====================
const englishIdioms = [
"From A to Z",
"Put the cart before the horse",
"Don't judge a book by its cover",
"Kill two birds with one stone",
"It's not my cup of tea",
"Put all your eggs in one basket",
"To beat around the bush",
"A piece of cake",
"Feel under the weather",
"Bob's your uncle",
"Think outside the box",
"Like taking candy off a baby",
"A pain in the neck",
"Cost an arm and a leg",
"Play it by ear",
"To get something off your chest",
"To have cold feet",
"To keep an eye on something",
"To be in a pickle",
"To put it in a nutshell",
"Spill the beans",
"Icing on the cake",
"And pigs might fly",
"Put the cat among the pigeons",
"Let the cat out of the bag",
"To have a frog in one's throat",
"It's raining cats and dogs"
];
const frenchIdioms = [
  "de A à Z / du début à la fin",
  "mettre la charrue avant les bœufs",
  "L’habit ne fait pas le moine",
  "Faire d’une pierre deux coups",
  "Ce n’est pas dans mes cordes",
  "Mettre tous ses œufs dans le même panier",
  "Tourner autour du pot",
  "C’est du gâteau",
  "Ne pas être dans son assiette",
  "Le tour est joué",
  "Penser en dehors du cadre",
  "Un jeu d’enfant",
  "Casse-pieds",
  "Coûter un bras",
  "Y aller au feeling",
  "Vider son sac",
  "Avoir la trouille",
  "Garder un œil sur",
  "Être dans le pétrin",
  "En bref",
  "Vider son sac",
  "La cerise sur le gâteau",
  "Quand les poules auront des dents",
  "Mettre le feu aux poudres",
  "Vider son sac",
  "Avoir un chat dans la gorge",
  "Il pleut des cordes"

];
// ==================== Algebra ====================
const EuroAlgebraAng = [
  "minus sign",
  "negative 5",
  "algebraic operations",
  "algebraic expressions terms",
  "literal expression",
  "addition / to add / the sum",
  "subtraction / to subtract / the difference",
  "multiplication / to multiply / the product",
  "division / to divide / the quotient",
  "formula",
  "difference of two squares",
  "remarkable identities",
  "equation",
  "unknown",
  "inequation",
  "inequality",
  "simultaneous equations"
];
const EuroAlgebraFr = [
  "signe moins",
  "moins cinq",
  "opérations algébriques",
  "termes d'expressions algébriques",
  "expression littérale",
  "addition / ajouter / somme",
  "soustraction / soustraire / différence",
  "multiplication / multiplier / produit",
  "division / diviser / quotient",
  "formule",
  "différence de deux carrés",
  "identités remarquables",
  "équation",
  "inconnue",
  "inéquation",
  "inégalité",
  "système d’équations"
];
// ==================== DIMENSIONS ====================
const EuroDimensionsAng = [
  "measurement",
  "measures",
  "dimensions",
  "quantity",
  "the length : long",
  "the width : wide",
  "the height : high",
  "the depth : deep",
  "perimeter",
  "the area",
  "the volume"
];
const EuroDimensionsFr = [
  "dimension",
  "unitée de mesure",
  "dimensions",
  "quantité",
  "la longueur : long",
  "la largeur : large",
  "la hauteur : haut",
  "la profondeur : profond",
  "périmètre",
  "aire / surface",
  "volume"
];
// ==================== ARITHMETIC ====================
const EuroArithmeticAng = [
  "arithmetic",
  "factors of 9",
  "odd",
  "even",
  "prime",
  "divisor",
  "remainder",
  "common multiple",
  "composite numbers",
  "divisible by",
  "HCF: highest common factor",
  "GCF: greatest common factor",
  "the simplest form of a fraction",
  "to simplify a fraction",
  "to divide numerator and denominator by a common factor",
  "to reduce a fraction to its lowest terms",
  "cross cancel a fraction"
];
const EuroArithmeticFr = [
  "arithmétique",
  "facteurs de 9",
  "impair",
  "pair",
  "nombre premier",
  "diviseur",
  "reste",
  "multiple commun",
  "nombres composés",
  "divisible par",
  "plus grand commun diviseur",
  "plus grand facteur commun",
  "forme la plus simple d'une fraction",
  "simplifier une fraction",
  "diviser numérateur et dénominateur par un facteur commun",
  "réduire une fraction à sa forme irréductible",
  "simplification croisée d'une fraction"
];
// ==================== FUNCTIONS - BASE & GRAPHS ====================
const EuroFunctionsBaseAng = [
  "domain (definition set)",
  "variable",
  "image",
  "variation table, skeleton",
  "maximum",
  "minimum",
  "to plot a graph",
  "gradient = rate of variation",
  "slope",
  "tangent"
];
const EuroFunctionsBaseFr = [
  "domaine (ensemble de définition)",
  "variable",
  "image",
  "tableau de variation, schéma",
  "maximum",
  "minimum",
  "tracer une courbe",
  "pente = taux de variation",
  "pente",
  "tangente"
];
// ==================== FUNCTIONS - TYPES ====================
const EuroFunctionsTypesAng = [
  "linear function (or affine function)",
  "hyperbola",
  "a quadratic equation",
  "n shape",
  "u shape",
  "square function",
  "parabola",
  "a rational function",
  "monotonic",
  "increasing",
  "decreasing",
  "reciprocal function (≠ inverse function!)",
  "exponential function",
  "cosine x",
  "sine x",
  "tangent x",
  "sinusoidal",
  "logarithm, natural logarithm"
];
const EuroFunctionsTypesFr = [
  "fonction linéaire (ou affine)",
  "hyperbole",
  "équation quadratique",
  "forme en n",
  "forme en u",
  "fonction carré",
  "parabole",
  "fonction rationnelle",
  "monotone",
  "croissante",
  "décroissante",
  "fonction réciproque (≠ fonction inverse!)",
  "fonction exponentielle",
  "cosinus x",
  "sinus x",
  "tangente x",
  "sinusoïdal",
  "logarithme, logarithme népérien"
];
// ==================== FUNCTIONS - FORMS & DERIVATIVES ====================
const EuroFunctionsFormsAng = [
  "a quadratic function: general form ax² + bx + c (or standard or expanded form)",
  "vertex form a(x − α)² + β (turning point form)",
  "factored form",
  "derivative",
  "f′(x): f prime, f dash x, the first derivative of f with respect to x",
  "f′′(x): f double-dash x",
  "to differentiate",
  "discriminant",
  "roots",
  "|x| : absolute value of x",
  "differentiable"
];
const EuroFunctionsFormsFr = [
  "fonction quadratique : forme générale ax² + bx + c (ou forme développée, canonique)",
  "forme sommet a(x − α)² + β (forme du point tournant)",
  "forme factorisée",
  "dérivée",
  "f′(x) : f prime, f apostrophe, première dérivée de f par rapport à x",
  "f′′(x) : f double apostrophe",
  "dériver",
  "discriminant",
  "racines",
  "|x| : valeur absolue de x",
  "dérivable"
];
// ==================== FUNCTIONS - OTHER PROPERTIES ====================
const EuroFunctionsOtherAng = [
  "composite function",
  "even function",
  "odd function",
  "periodic function",
  "asymptote"
];
const EuroFunctionsOtherFr = [
  "fonction composée",
  "fonction paire",
  "fonction impaire",
  "fonction périodique",
  "asymptote"
];
// ==================== NUMBERS - TYPES ====================
const EuroNumbersTypesAng = [
  "digits, figures",
  "million",
  "billion",
  "natural number",
  "whole number",
  "integer",
  "decimal",
  "rational",
  "real",
  "irrational (surd)",
  "scientific notation"
];
const EuroNumbersTypesFr = [
  "chiffres",
  "million",
  "milliard",
  "nombre naturel",
  "nombre entier positif",
  "entier",
  "décimal",
  "rationnel",
  "réel",
  "irrationnel (surd)",
  "notation scientifique"
];
// ==================== NUMBERS - POWERS & ROOTS ====================
const EuroNumbersPowersAng = [
  "x squared",
  "x cubed",
  "x to the fourth",
  "exponent, power",
  "x to the nth power",
  "square root",
  "cube root",
  "n! : n factorial"
];
const EuroNumbersPowersFr = [
  "x au carré",
  "x au cube",
  "x à la puissance quatre",
  "exposant, puissance",
  "x à la puissance n",
  "racine carrée",
  "racine cubique",
  "n! : n factorielle"
];
// ==================== NUMBERS - FRACTIONS & RATIOS ====================
const EuroNumbersFractionsAng = [
  "x over y",
  "ratio",
  "quotient",
  "fraction",
  "common denominator",
  "least common denominator",
  "common factor",
  "coefficient"
];
const EuroNumbersFractionsFr = [
  "x sur y",
  "rapport",
  "quotient",
  "fraction",
  "dénominateur commun",
  "plus petit dénominateur commun",
  "facteur commun",
  "coefficient"
];
// ==================== NUMBERS - APPROXIMATION ====================
const EuroNumbersApproxAng = [
  "approximate value",
  "an estimate",
  "approximation",
  "roughly",
  "rounded",
  "rounded down",
  "rounded up",
  "correct to n significant figures",
  "rounded to the nearest"
];
const EuroNumbersApproxFr = [
  "valeur approchée",
  "une estimation",
  "approximation",
  "environ",
  "arrondi",
  "arrondi par défaut",
  "arrondi par excès",
  "arrondi à n chiffres significatifs",
  "arrondi au plus proche"
];
// ==================== NUMBERS - INEQUALITIES & INTERVALS ====================
const EuroNumbersInequalitiesAng = [
  "interval, closed interval",
  "x belongs to R",
  "infinity",
  "order",
  "x > y : x is greater than y",
  "x ≥ y : x is greater than or equal to y",
  "x < y : x is less than y",
  "x per cent",
  "x and y are in direct proportion : y is proportional to x"
];
const EuroNumbersInequalitiesFr = [
  "intervalle, intervalle fermé",
  "x appartient à R",
  "infini",
  "ordre",
  "x > y : x est supérieur à y",
  "x ≥ y : x est supérieur ou égal à y",
  "x < y : x est inférieur à y",
  "x pour cent",
  "x et y sont en proportion directe : y est proportionnel à x"
];
// ==================== GEOMETRY - POINTS & REPÈRES ====================
const EuroGeometryPointsAng = [
  "point",
  "coordinates",
  "origin",
  "axes",
  "abscissa",
  "ordinate",
  "midpoint"
];
const EuroGeometryPointsFr = [
  "point",
  "coordonnées",
  "origine",
  "axes",
  "abscisse",
  "ordonnée",
  "milieu"
];
// ==================== GEOMETRY - CIRCLES ====================
const EuroGeometryCirclesAng = [
  "circle",
  "radius",
  "diameter",
  "circumference",
  "arc",
  "sector",
  "chord"
];
const EuroGeometryCirclesFr = [
  "cercle",
  "rayon",
  "diamètre",
  "circonférence",
  "arc",
  "secteur",
  "corde"
];
// ==================== GEOMETRY - ANGLES ====================
const EuroGeometryAnglesAng = [
  "angle",
  "right angle",
  "acute angle",
  "obtuse angle",
  "straight angle",
  "reflex angle",
  "complementary angles",
  "supplementary angles",
  "adjacent angles"
];
const EuroGeometryAnglesFr = [
  "angle",
  "angle droit",
  "angle aigu",
  "angle obtus",
  "angle plat",
  "angle rentrant",
  "angles complémentaires",
  "angles supplémentaires",
  "angles adjacents"
];
// ==================== GEOMETRY - TRIANGLES ====================
const EuroGeometryTrianglesAng = [
  "triangle",
  "equilateral triangle",
  "isosceles triangle",
  "scalene triangle",
  "right triangle",
  "hypotenuse",
  "altitude",
  "median",
  "angle bisector"
];
const EuroGeometryTrianglesFr = [
  "triangle",
  "triangle équilatéral",
  "triangle isocèle",
  "triangle scalène",
  "triangle rectangle",
  "hypoténuse",
  "hauteur",
  "médiane",
  "bissectrice"
];
// ==================== GEOMETRY - FIGURES ====================
const EuroGeometryFiguresAng = [
  "polygon",
  "square",
  "rectangle",
  "parallelogram",
  "rhombus",
  "trapezium (US: trapezoid)",
  "regular polygon",
  "perimeter",
  "area"
];
const EuroGeometryFiguresFr = [
  "polygone",
  "carré",
  "rectangle",
  "parallélogramme",
  "losange",
  "trapèze",
  "polygone régulier",
  "périmètre",
  "aire"
];
// ==================== GEOMETRY - SOLIDS ====================
const EuroGeometrySolidsAng = [
  "cube",
  "cuboid",
  "sphere",
  "cylinder",
  "cone",
  "pyramid",
  "prism",
  "surface area",
  "volume"
];
const EuroGeometrySolidsFr = [
  "cube",
  "pavé droit",
  "sphère",
  "cylindre",
  "cône",
  "pyramide",
  "prisme",
  "aire de surface",
  "volume"
];
// ==================== GEOMETRY - LINES ====================
const EuroGeometryLinesAng = [
  "line",
  "straight line",
  "ray",
  "line segment",
  "parallel lines",
  "perpendicular lines",
  "secant",
  "bisector"
];
const EuroGeometryLinesFr = [
  "droite",
  "ligne droite",
  "demi-droite",
  "segment de droite",
  "lignes parallèles",
  "lignes perpendiculaires",
  "sécante",
  "bissectrice"
];
// ==================== GEOMETRY - VECTORS ====================
const EuroGeometryVectorsAng = [
  "vector",
  "magnitude",
  "direction",
  "to add vectors",
  "to subtract vectors",
  "scalar product (dot product)",
  "orthogonal vectors"
];
const EuroGeometryVectorsFr = [
  "vecteur",
  "norme",
  "direction",
  "additionner des vecteurs",
  "soustraire des vecteurs",
  "produit scalaire",
  "vecteurs orthogonaux"
];
// ==================== PROBABILITY & STATISTICS - PROBABILITY ====================
const EuroProbabilityAng = [
  "probability",
  "outcome",
  "event",
  "sample space",
  "equally likely outcomes",
  "impossible event",
  "certain event",
  "favourable outcome",
  "independent events",
  "mutually exclusive events",
  "complementary events",
  "to toss a coin",
  "to roll a die",
  "deck of cards",
  "experiment",
  "theoretical probability",
  "experimental probability"
];
const EuroProbabilityFr = [
  "probabilité",
  "issue",
  "événement",
  "univers",
  "issues équiprobables",
  "événement impossible",
  "événement certain",
  "issue favorable",
  "événements indépendants",
  "événements mutuellement exclusifs",
  "événements complémentaires",
  "lancer une pièce",
  "lancer un dé",
  "paquet de cartes",
  "expérience",
  "probabilité théorique",
  "probabilité expérimentale"
];
// ==================== PROBABILITY & STATISTICS - STATISTICS ====================
const EuroStatisticsAng = [
  "statistics",
  "data",
  "frequency",
  "mean",
  "average",
  "median",
  "mode",
  "range",
  "bar chart",
  "histogram",
  "pie chart",
  "line graph",
  "scatter diagram",
  "correlation",
  "positive correlation",
  "negative correlation",
  "no correlation",
  "trend line (line of best fit)"
];
const EuroStatisticsFr = [
  "statistiques",
  "données",
  "fréquence",
  "moyenne",
  "moyenne (arithmétique)",
  "médiane",
  "mode",
  "étendue",
  "diagramme en barres",
  "histogramme",
  "diagramme circulaire (camembert)",
  "graphique en ligne",
  "nuage de points",
  "corrélation",
  "corrélation positive",
  "corrélation négative",
  "aucune corrélation",
  "droite de tendance (droite de régression)"
];
// ==================== CALCULUS ====================
const EuroCalculusAng = [
  "calculus",
  "limit",
  "tends to",
  "derivative",
  "differentiation",
  "to differentiate",
  "rate of change",
  "instantaneous rate of change",
  "slope of the tangent",
  "stationary point",
  "maximum point",
  "minimum point",
  "inflection point",
  "increasing function",
  "decreasing function",
  "second derivative",
  "concave up",
  "concave down",
  "integral",
  "integration",
  "to integrate",
  "indefinite integral",
  "definite integral",
  "area under the curve",
  "antiderivative",
  "constant of integration"
];
const EuroCalculusFr = [
  "calcul différentiel et intégral",
  "limite",
  "tend vers",
  "dérivée",
  "dérivation",
  "dériver",
  "taux de variation",
  "taux de variation instantané",
  "pente de la tangente",
  "point stationnaire",
  "maximum",
  "minimum",
  "point d’inflexion",
  "fonction croissante",
  "fonction décroissante",
  "seconde dérivée",
  "concave vers le haut",
  "concave vers le bas",
  "intégrale",
  "intégration",
  "intégrer",
  "intégrale indéfinie",
  "intégrale définie",
  "aire sous la courbe",
  "primitive",
  "constante d’intégration"
];
// ==================== TRIGONOMETRY ====================
const EuroTrigonometryAng = [
  "trigonometry",
  "sine",
  "cosine",
  "tangent",
  "cotangent",
  "secant",
  "cosecant",
  "unit circle",
  "opposite side",
  "adjacent side",
  "hypotenuse",
  "right triangle",
  "Pythagoras’ theorem",
  "sine rule",
  "cosine rule",
  "trigonometric identity",
  "double angle formula",
  "half angle formula",
  "radian",
  "degree",
  "arc length",
  "sector area"
];
const EuroTrigonometryFr = [
  "trigonométrie",
  "sinus",
  "cosinus",
  "tangente",
  "cotangente",
  "sécante",
  "cosécante",
  "cercle trigonométrique",
  "côté opposé",
  "côté adjacent",
  "hypoténuse",
  "triangle rectangle",
  "théorème de Pythagore",
  "formule du sinus",
  "formule du cosinus",
  "identité trigonométrique",
  "formule de l’angle double",
  "formule de l’angle moitié",
  "radian",
  "degré",
  "longueur d’arc",
  "aire d’un secteur"
];
// ==================== MATRICES ====================
const EuroMatricesAng = [
  "matrix",
  "row",
  "column",
  "square matrix",
  "diagonal matrix",
  "identity matrix",
  "zero matrix",
  "transpose",
  "determinant",
  "inverse matrix",
  "cofactor",
  "adjugate matrix",
  "rank",
  "system of equations",
  "Cramer’s rule"
];
const EuroMatricesFr = [
  "matrice",
  "ligne",
  "colonne",
  "matrice carrée",
  "matrice diagonale",
  "matrice identité",
  "matrice nulle",
  "transposée",
  "déterminant",
  "matrice inverse",
  "cofacteur",
  "matrice adjointe",
  "rang",
  "système d’équations",
  "règle de Cramer"
];
// ==================== SETS ====================
const EuroSetsAng = [
  "set",
  "element",
  "empty set",
  "universal set",
  "subset",
  "intersection",
  "union",
  "complement",
  "difference",
  "cardinality",
  "Venn diagram"
];
const EuroSetsFr = [
  "ensemble",
  "élément",
  "ensemble vide",
  "ensemble universel",
  "sous-ensemble",
  "intersection",
  "union",
  "complémentaire",
  "différence",
  "cardinalité",
  "diagramme de Venn"
];
// ==================== SEQUENCES & SERIES ====================
const EuroSequencesAng = [
  "sequence",
  "term",
  "arithmetic sequence",
  "common difference",
  "geometric sequence",
  "common ratio",
  "series",
  "arithmetic series",
  "geometric series",
  "convergent series",
  "divergent series",
  "infinite series",
  "sigma notation"
];
const EuroSequencesFr = [
  "suite",
  "terme",
  "suite arithmétique",
  "raison (arithmétique)",
  "suite géométrique",
  "raison (géométrique)",
  "série",
  "série arithmétique",
  "série géométrique",
  "série convergente",
  "série divergente",
  "série infinie",
  "notation sigma"
];
// ==================== COMPLEX NUMBERS ====================
const EuroComplexAng = [
  "complex number",
  "real part",
  "imaginary part",
  "imaginary unit i",
  "conjugate",
  "modulus",
  "argument",
  "polar form",
  "Euler’s formula",
  "De Moivre’s theorem"
];
const EuroComplexFr = [
  "nombre complexe",
  "partie réelle",
  "partie imaginaire",
  "unité imaginaire i",
  "conjugué",
  "module",
  "argument",
  "forme polaire",
  "formule d’Euler",
  "théorème de De Moivre"
];
// ==================== TRANSFORMATIONS ====================
const EuroTransformationsAng = [
  "transformation",
  "translation",
  "reflection",
  "rotation",
  "enlargement",
  "dilation",
  "stretch",
  "shear",
  "symmetry",
  "isometry",
  "similarity"
];
const EuroTransformationsFr = [
  "transformation",
  "translation",
  "symétrie axiale",
  "rotation",
  "agrandissement",
  "dilatation",
  "étirement",
  "cisaillement",
  "symétrie",
  "isométrie",
  "similarité"
];



function melange(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function ajouter() {
    motsFr = []
    motsTr = []
    if (document.getElementById("prefait").checked) {
        if (document.getElementById("idioms").checked) {
            motsTr = motsTr.concat(englishIdioms);
            motsFr = motsFr.concat(frenchIdioms);
        }

        if (document.getElementById("euro").checked) {
            // ========== ALGEBRA ==========
            if (document.getElementById("algebra").checked) {
                motsTr = motsTr.concat(EuroAlgebraAng);
                motsFr = motsFr.concat(EuroAlgebraFr);
            }
            // ========== DIMENSIONS ==========
            if (document.getElementById("dimensions").checked) {
                motsTr = motsTr.concat(EuroDimensionsAng);
                motsFr = motsFr.concat(EuroDimensionsFr);
            }
            // ========== ARITHMETIC ==========
            if (document.getElementById("arithmetic").checked) {
                motsTr = motsTr.concat(EuroArithmeticAng);
                motsFr = motsFr.concat(EuroArithmeticFr);
            }
            // ========== FUNCTIONS ==========
            if (document.getElementById("functions").checked) {
                if (document.getElementById("basegraphs").checked) {
                    motsTr = motsTr.concat(EuroFunctionsBaseAng);
                    motsFr = motsFr.concat(EuroFunctionsBaseFr);
                }
                if (document.getElementById("typesfunctions").checked) {
                    motsTr = motsTr.concat(EuroFunctionsTypesAng);
                    motsFr = motsFr.concat(EuroFunctionsTypesFr);
                }
                if (document.getElementById("formsfunctions").checked) {
                    motsTr = motsTr.concat(EuroFunctionsFormsAng);
                    motsFr = motsFr.concat(EuroFunctionsFormsFr);
                }
                if (document.getElementById("otherfunctions").checked) {
                    motsTr = motsTr.concat(EuroFunctionsOtherAng);
                    motsFr = motsFr.concat(EuroFunctionsOtherFr);
                }
            }
            // ========== NUMBERS ==========
            if (document.getElementById("numbers").checked) {
                if (document.getElementById("typenumbers").checked) {
                    motsTr = motsTr.concat(EuroNumbersTypesAng);
                    motsFr = motsFr.concat(EuroNumbersTypesFr);
                }
                if (document.getElementById("powersnumbers").checked) {
                    motsTr = motsTr.concat(EuroNumbersPowersAng);
                    motsFr = motsFr.concat(EuroNumbersPowersFr);
                }
                if (document.getElementById("fractionsnumbers").checked) {
                    motsTr = motsTr.concat(EuroNumbersFractionsAng);
                    motsFr = motsFr.concat(EuroNumbersFractionsFr);
                }
                if (document.getElementById("approxnumbers").checked) {
                    motsTr = motsTr.concat(EuroNumbersApproxAng);
                    motsFr = motsFr.concat(EuroNumbersApproxFr);
                }
                if (document.getElementById("inequalitiesnumbers").checked) {
                    motsTr = motsTr.concat(EuroNumbersInequalitiesAng);
                    motsFr = motsFr.concat(EuroNumbersInequalitiesFr);
                }
            }
            // ========== GEOMETRY ==========
            if (document.getElementById("geometry").checked) {
                if (document.getElementById("geometrypoints").checked) {
                    motsTr = motsTr.concat(EuroGeometryPointsAng);
                    motsFr = motsFr.concat(EuroGeometryPointsFr);
                }
                if (document.getElementById("geometrycircles").checked) {
                    motsTr = motsTr.concat(EuroGeometryCirclesAng);
                    motsFr = motsFr.concat(EuroGeometryCirclesFr);
                }
                if (document.getElementById("geometryangles").checked) {
                    motsTr = motsTr.concat(EuroGeometryAnglesAng);
                    motsFr = motsFr.concat(EuroGeometryAnglesFr);
                }
                if (document.getElementById("geometrytriangles").checked) {
                    motsTr = motsTr.concat(EuroGeometryTrianglesAng);
                    motsFr = motsFr.concat(EuroGeometryTrianglesFr);
                }
                if (document.getElementById("geometryfigures").checked) {
                    motsTr = motsTr.concat(EuroGeometryFiguresAng);
                    motsFr = motsFr.concat(EuroGeometryFiguresFr);
                }
                if (document.getElementById("geometrysolids").checked) {
                    motsTr = motsTr.concat(EuroGeometrySolidsAng);
                    motsFr = motsFr.concat(EuroGeometrySolidsFr);
                }
                if (document.getElementById("geometrylines").checked) {
                    motsTr = motsTr.concat(EuroGeometryLinesAng);
                    motsFr = motsFr.concat(EuroGeometryLinesFr);
                }
                if (document.getElementById("geometryvectors").checked) {
                    motsTr = motsTr.concat(EuroGeometryVectorsAng);
                    motsFr = motsFr.concat(EuroGeometryVectorsFr);
                }
            }
            // ========== PROBABILITY & STATISTICS ==========
            if (document.getElementById("probstats").checked) {
                if (document.getElementById("probability").checked) {
                    motsTr = motsTr.concat(EuroProbabilityAng);
                    motsFr = motsFr.concat(EuroProbabilityFr);
                }
                if (document.getElementById("statistics").checked) {
                    motsTr = motsTr.concat(EuroStatisticsAng);
                    motsFr = motsFr.concat(EuroStatisticsFr);
                }
            }
            // ========== CALCULUS ==========
            if (document.getElementById("calculus").checked) {
                motsTr = motsTr.concat(EuroCalculusAng);
                motsFr = motsFr.concat(EuroCalculusFr);
            }
            // ========== TRIGONOMETRY ==========
            if (document.getElementById("trigonometry").checked) {
                motsTr = motsTr.concat(EuroTrigonometryAng);
                motsFr = motsFr.concat(EuroTrigonometryFr);
            }
            // ========== MATRICES ==========
            if (document.getElementById("matrices").checked) {
                motsTr = motsTr.concat(EuroMatricesAng);
                motsFr = motsFr.concat(EuroMatricesFr);
            }
            // ========== SETS ==========
            if (document.getElementById("sets").checked) {
                motsTr = motsTr.concat(EuroSetsAng);
                motsFr = motsFr.concat(EuroSetsFr);
            }
            // ========== SEQUENCES & SERIES ==========
            if (document.getElementById("sequences").checked) {
                motsTr = motsTr.concat(EuroSequencesAng);
                motsFr = motsFr.concat(EuroSequencesFr);
            }
            // ========== COMPLEX NUMBERS ==========
            if (document.getElementById("complex").checked) {
                motsTr = motsTr.concat(EuroComplexAng);
                motsFr = motsFr.concat(EuroComplexFr);
            }
            // ========== TRANSFORMATIONS ==========
            if (document.getElementById("transformations").checked) {
                motsTr = motsTr.concat(EuroTransformationsAng);
                motsFr = motsFr.concat(EuroTransformationsFr);
            }
        }
    }
    else {
        let ListeFrancais = document.getElementById("francais").value;
        let ListeTraduction = document.getElementById("traduction").value;
        motsFr = ListeFrancais.split(",");
        motsTr = ListeTraduction.split(",");
    }// Affiche le message 'ajouté !' pendant 1 seconde
    let msg = document.getElementById("ajouter");
    if (motsFr.length !== motsTr.length) {
        msg.textContent = "Erreur : les listes n'ont pas la même longueur !";}
    else if (motsFr.length < 5) {
        msg.textContent = "Erreur : Liste trop courtes !";}
    else {  
        msg.textContent = motsFr.length + " éléments enregistrés !";
    }
    setTimeout(function() {
        msg.textContent = "Ajouter ?";
    }, 1000);
    
}
document.getElementById("startquiz").onclick = function() {
    document.getElementById("quizcontainer").style.display = "block";
    document.getElementById("startcontainer").style.display = "none";
    let buttons = [
        document.getElementById("1bouton"),
        document.getElementById("2bouton"),
        document.getElementById("3bouton"),
        document.getElementById("4bouton")
    ];
    let motAffiche = document.getElementById("motAffiche");
    let actualscore = document.getElementById("actualscore");
    let questionsrestantes = document.getElementById("questionsrestantes");
    let lastscore = document.getElementById("lastscore");
    let bestscore = document.getElementById("bestscore");
    let repetitions = parseInt(document.getElementById("repetitions").value);

    let repjuste = 0;
    let total = 0;
    let reste = [];
    for (let i = 0; i < repetitions; i++) {
        for (let j = 0; j < motsFr.length; j++) {
            reste.push(j);}}
    reste = melange(reste);
    questionsrestantes.innerHTML = reste.length;
    ajouter()
    function nextQuestion() {
        if (reste.length === 0) {
            lastscore.innerText = Math.round(repjuste / total * 100) + "%";
            if (parseInt(lastscore.innerText) > parseInt(bestscore.innerText)) {
                bestscore.innerText = lastscore.innerText;
            }
            document.getElementById("quizcontainer").style.display = "none";
            document.getElementById("startcontainer").style.display = "block";
            return;
        }
        let idx = reste[0];
        let inverser = document.getElementById("inverser").checked;
        let question, bonneReponse, listeOptions, listeDistracteurs;
        if (!inverser) {
            question = motsFr[idx];
            bonneReponse = motsTr[idx];
            listeOptions = [bonneReponse];
            listeDistracteurs = motsTr;
        } else {
            question = motsTr[idx];
            bonneReponse = motsFr[idx];
            listeOptions = [bonneReponse];
            listeDistracteurs = motsFr;
        }
        motAffiche.innerText = question;
        while (listeOptions.length < 4) {
            randIdx = Math.floor(Math.random() * listeDistracteurs.length);
            if (!listeOptions.includes(listeDistracteurs[randIdx]) && listeDistracteurs[randIdx] != bonneReponse) {
                listeOptions.push(listeDistracteurs[randIdx]);
            }
        }
        listeOptions = melange(listeOptions);
        for (let b = 0; b < buttons.length; b++) {
            buttons[b].innerText = listeOptions[b];
                buttons[b].onclick = function() {
                    total++;
                    if (listeOptions[b] === bonneReponse) {
                        repjuste++;
                    }
                    actualscore.innerHTML = Math.round(repjuste / total * 100) + "%";
                    questionsrestantes.innerHTML = reste.length;
                    reste.shift();
                    for (let a = 0; a < buttons.length; a++) {
                        if (listeOptions[a] === bonneReponse) {
                            buttons[a].style.backgroundColor = "#00cc81";
                        } else {
                            buttons[a].style.backgroundColor = "#ff4c4c";
                        }
                    }
                    // Désactive les boutons pendant l'attente
                    for (let a = 0; a < buttons.length; a++) {
                        buttons[a].disabled = true;
                    }
                    setTimeout(function() {
                        // Réinitialise la couleur et réactive les boutons
                        for (let a = 0; a < buttons.length; a++) {
                            buttons[a].style.backgroundColor = "";
                            buttons[a].disabled = false;
                        }
                        nextQuestion();
                    }, 1000);
                };
        }
    }
    nextQuestion();

}
document.getElementById("prefait").onchange = function() {
    if (document.getElementById("prefait").checked) {
        document.getElementById("prefaitcontainer").style.display = "block";
        document.getElementById("customcontainer").style.display = "none";
    }
    else {
        document.getElementById("prefaitcontainer").style.display = "none";
        document.getElementById("customcontainer").style.display = "block"; 
    }
}
// EURO
document.getElementById("euro").onchange = function() {
    if (document.getElementById("euro").checked) {
        document.getElementById("eurocontainer").style.display = "block";
    } else {
        document.getElementById("eurocontainer").style.display = "none"; 
    }
};
// FUNCTIONS
document.getElementById("functions").onchange = function() {
    if (document.getElementById("functions").checked) {
        document.getElementById("functionscontainer").style.display = "block";
    } else {
        document.getElementById("functionscontainer").style.display = "none"; 
    }
};
// NUMBERS
document.getElementById("numbers").onchange = function() {
    if (document.getElementById("numbers").checked) {
        document.getElementById("numberscontainer").style.display = "block";
    } else {
        document.getElementById("numberscontainer").style.display = "none"; 
    }
};
// GEOMETRY
document.getElementById("geometry").onchange = function() {
    if (document.getElementById("geometry").checked) {
        document.getElementById("geometrycontainer").style.display = "block";
    } else {
        document.getElementById("geometrycontainer").style.display = "none"; 
    }
};
// PROBABILITY & STATISTICS
document.getElementById("probstats").onchange = function() {
    if (document.getElementById("probstats").checked) {
        document.getElementById("probstatscontainer").style.display = "block";
    } else {
        document.getElementById("probstatscontainer").style.display = "none"; 
    }

};

