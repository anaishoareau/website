/*
  FICHIER DE PARAMÉTRAGE — methexis / série Mathys
  ─────────────────────────────────────────────────────────────────────────────
  Toutes les valeurs x, y, width sont en PIXELS sur une base de page de 1920px.
  Le JS applique automatiquement un ratio scale = window.innerWidth / 1920.

  x      : position depuis le bord gauche, en px (base 1920px)
  y      : position depuis le haut du contenu (sous le header fixe), en px (base 1920px)
  width  : largeur de l'élément, en px (base 1920px)
           → le ratio naturel de l'image est toujours conservé (pas de height)

  taille : taille de police pour les blocs texte, en rem fixe (ne scale PAS)

  ─────────────────────────────────────────────────────────────────────────────
  ⚠️  Sur mobile (écran < 700px) les positions x/y/width sont ignorées.
      Les éléments s'affichent dans l'ordre du tableau, de haut en bas.
  ─────────────────────────────────────────────────────────────────────────────

  BASE DE RÉFÉRENCE : 1920px de large, viewport ~900px de haut, header 80px fixe.
  Le fold (bas du premier écran visible) correspond à y ≈ 820px sur cette base.
*/

const METHEXIS_CONFIG = {

  // Hauteur totale de la page en px sur base 1920px
  pageHeight: 3400,

  elements: [
    {
      type   : "image",
      src    : "images/methexis/mathys/mathys-et-l-etoile-de-mer.jpg",
      x      : 32,
      y      : 32,
      width  : 1524.768,
      label  : "(a).",
      alt    : "Mathys et l'étoile de mer, 2026"
    },
    {
      type  : "image",
      src   : "images/methexis/mathys/la-prison-des-ames-lieu-dans-l-univers-du-roman-de-mathys.jpg",
      x     : 1216,
      y     : 1263.754,
      width : 672,
      label : "(d).",
      alt   : "la prison des âmes (Lieu dans l'univers du roman de Mathys), 2026"
    },
    {
      type  : "image",
      src   : "images/methexis/mathys/led-zepplin-1970-ca_dick-barnatt.jpg",
      x     : 32,
      y     : 1080.256,
      width : 578,
      label : "(b).",
      alt   : "Led Zepplin, Dick Barnatt, 1970"
    },
    {
      type  : "image",
      src   : "images/methexis/mathys/notes-mathys-presentation.jpg",
      x     : 781.265,
      y     : 1832,
      width : 402.735,
      label : "(c).",
      alt   : "Extrait sonore et notes sur l'entretien avec Mathys"
    },
    {
      type  : "image",
      src   : "images/methexis/mathys/pieces-manquantes.jpg",
      x     : 32,
      y     : 2400,
      width : 480,
      label : "(e).",
      alt   : "pièces manquantes, 2026"
    },
    {
      type  : "image",
      src   : "images/methexis/mathys/karoline-leavitt-white-house-press-secretary_christopher-anderson.jpeg",
      x     : 544,
      y     : 2400,
      width : 480,
      label : "(f).",
      alt   : "Karoline Leavitt, White House press secretary, Christopher Anderson, 2025"
    },
    {
      type    : "texte",
      contenu : "(a). <em>Mathys et l'étoile de mer</em>, 2026\n(b). <em>Led Zepplin</em>, Dick Barnatt, 1970\n(c). Extrait sonore et notes sur l'entretien avec Mathys\n(d). <em>la prison des âmes (Lieu dans l'univers du roman de Mathys)</em>, 2026\n(e). <em>pièces manquantes</em>, 2026\n(f). <em>Karoline Leavitt, White House press secretary</em>, Christopher Anderson, 2025",
      x       : 112,
      y       : 1664.874,
      width   : 608,
      taille  : "0.7rem"
    },
    {
      type  : "son",
      src   : "sons/methexis/extrait-entretien-mathys-isolement.m4a",
      x     : 780,
      y     : 1750,
      width : 402.735,
    }

  ]

};
