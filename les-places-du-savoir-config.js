/*
  FICHIER DE PARAMÉTRAGE — les places du savoir
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

const LES_PLACES_DU_SAVOIR_CONFIG = {

  // Hauteur totale de la page en px sur base 1920px
  pageHeight: 3400,

  elements: [
    {
      type   : "image",
      src    : "images/les-places-du-savoir/DSCF3321.jpg",
      x      : 64,
      y      : 170,
      width  : 1118.477,
      label  : "(a).",
      alt    : "description"
    },
    {
      type   : "image",
      src    : "images/les-places-du-savoir/DSCF3407.jpg",
      x      : 213,
      y      : 1080,
      width  : 677,
      label  : "(b).",
      alt    : "description"
    },
    {
      type   : "image",
      src    : "images/les-places-du-savoir/DSCF3344.jpg",
      x      : 922,
      y      : 1506,
      width  : 560,
      label  : "(c).",
      alt    : "description"
    },
    {
      type   : "image",
      src    : "images/les-places-du-savoir/DSCF3391.jpg",
      x      : 128,
      y      : 2370,
      width  : 400,
      label  : "(d).",
      alt    : "description"
    },
    {
      type   : "image",
      src    : "images/les-places-du-savoir/DSCF3178.jpg",
      x      : 592,
      y      : 2280,
      width  : 622,
      label  : "(e).",
      alt    : "description"
    },
    {
      type   : "image",
      src    : "images/les-places-du-savoir/DSCF3360.jpg",
      x      : 1246,
      y      : 2582,
      width  : 307,
      label  : "(f).",
      alt    : "description"
    },
    // {
    //   type    : "texte",
    //   contenu : "Texte à afficher",
    //   x       : 32,
    //   y       : 32,
    //   width   : 500,
    //   taille  : "0.7rem"
    // },
  ]

};
