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
  pageHeight: 4830+500,

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
    {
      type    : "texte",
      contenu : "(f). Inspiration : <em>France, Theatre of Authenticity</em>, Natacha de Mahieu\n(g). Inspiration : <em>Gloconde</em>, Rene Magritte, 1953\n(h). Inspiration : <em>El Ojo Eterno</em>, Grete Stern, 1950\n(i). Inspiration : <em>Red Stripe Kitchen</em>, Martha Rosler, from <em>House Beautiful: Bringing the War Home</em>, 1967-1972\n(j). Inspiration : <em>Photo Op</em>, Martha Rosler, from <em>House Beautiful: Bringing the War Home, New Series</em>, 2004-2008\n",
      x       : 134,
      y       : 3492,
      width   : 608,
      taille  : "0.7rem"
    },
    {
      type   : "image",
      src    : "images/before-dont-look-up/natacha-de-mahieu_france-theatre-of-authenticity.jpg",
      x      : 960,
      y      : 3349.1-60,
      width  : 832,
      label  : "(f).",
      alt    : "Inspiration : France, Theatre of Authenticity, Natacha de Mahieu"
    },
    {
      type   : "image",
      src    : "images/before-dont-look-up/rene-magritte_gloconde_1953.jpg",
      x      : 238,
      y      : 3904-60,
      width  : 402,
      label  : "(g).",
      alt    : "Inspiration : Gloconde, Rene Magritte, 1953"
    },
    {
      type   : "image",
      src    : "images/before-dont-look-up/grete-stern_el-ojo-eterno_1950.png",
      x      : 214,
      y      : 4560,
      width  : 265,
      label  : "(h).",
      alt    : "Inspiration : El Ojo Eterno, Grete Stern, 1950"
    },
    {
      type   : "image",
      src    : "images/before-dont-look-up/martha-rosler_red-stripe-kitchen_1967-1972.jpg",
      x      : 690,
      y      : 4320,
      width  : 574,
      label  : "(i).",
      alt    : "Inspiration : Red Stripe Kitchen, Martha Rosler, from House Beautiful: Bringing the War Home, 1967-1972"
    },
    {
      type   : "image",
      src    : "images/before-dont-look-up/martha-rosler_photo-op_2004.png",
      x      : 1293.874,
      y      : 4830,
      width  : 441.144,
      label  : "(j).",
      alt    : "Inspiration : Photo Op, Martha Rosler, from House Beautiful: Bringing the War Home, New Series, 2004-2008"
    },
  ]

};
