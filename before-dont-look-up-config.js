/*
  FICHIER DE PARAMÉTRAGE — before don't look up
  ─────────────────────────────────────────────────────────────────────────────
  Toutes les valeurs x, y, width sont en PIXELS sur une base de page de 1920px.
  Le JS applique automatiquement un ratio scale = window.innerWidth / 1920.

  x          : position depuis le bord gauche, en px (base 1920px)
  y          : position verticale du bloc, en px (base 1920px)
               → par défaut (ancreV absent ou "haut") : coin haut-gauche du bloc
               → si ancreV: "bas"                     : coin bas-gauche du bloc
  width      : largeur de l'élément, en px (base 1920px)
               → le ratio naturel de l'image est toujours conservé (pas de height)

  Pour les blocs texte uniquement :
  taille     : taille de police, en rem fixe (ne scale PAS)
  ancreH     : "gauche" (défaut) | "droite" — x pointe le bord gauche ou droit du bloc
  ancreV     : "haut" (défaut) | "bas"      — y pointe le bord haut ou bas du bloc
  alignTexte : "gauche" (défaut) | "droite" — alignement du texte dans le bloc

  ─────────────────────────────────────────────────────────────────────────────
  ⚠️  Sur mobile (écran < 700px) les positions x/y/width sont ignorées.
      Les éléments s'affichent dans l'ordre du tableau, de haut en bas.
  ─────────────────────────────────────────────────────────────────────────────

  BASE DE RÉFÉRENCE : 1920px de large, viewport ~900px de haut, header 80px fixe.
  Le fold (bas du premier écran visible) correspond à y ≈ 820px sur cette base.
*/

const BEFORE_DONT_LOOK_UP_CONFIG = {

  // Hauteur totale de la page en px sur base 1920px
  pageHeight: 3400,

  elements: [
    {
      type   : "image",
      src    : "images/before-dont-look-up/collage-fleur.jpg",
      x      : 96,
      y      : 32,
      width  : 764.657,
      label  : "(a).",
      alt    : "les fleurs de Jean-Claude, 2025"
    },
    {
      type   : "image",
      src    : "images/before-dont-look-up/collage-voiture.jpg",
      x      : 1119,
      y      : 541.771,
      width  : 552.96,
      label  : "(b).",
      alt    : "accès 72, 2025"
    },
    {
      type   : "image",
      src    : "images/before-dont-look-up/collage-marie.jpg",
      x      : 322.343,
      y      : 1112,
      width  : 764.657,
      label  : "(c).",
      alt    : "le bureau de Marie, 2025"
    },
    {
      type   : "image",
      src    : "images/before-dont-look-up/collage-jean-claude.jpg",
      x      : 1119,
      y      : 1112,
      width  : 765,
      label  : "(d).",
      alt    : "le temps au temps, 2025"
    },
    {
      type   : "image",
      src    : "images/before-dont-look-up/collage-bureau-mer.jpg",
      x      : 96,
      y      : 2303.186,
      width  : 1212,
      label  : "(e).",
      alt    : "archives à la mer, 2025"
    },
    {
      type    : "texte",
      contenu : "(a). <em>les fleurs de Jean-Claude</em>, 2025\n(b). <em>accès 72</em>, 2025\n(c). <em>le bureau de Marie</em>, 2025\n(d). <em>le temps au temps</em>, 2025\n(e). <em>archives à la mer</em>, 2025\n",
      x       : 96,
      y       : 1872.165,
      width   : 608,
      taille  : "0.7rem"
    },
  ]

};
