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
  pageHeight: 3400-80,

  elements: [
    {
      type   : "image",
      src    : "images/les-places-du-savoir/DSCF3321.webp",
      x      : 64,
      y      : 225,
      width  : 1118.477,
      label  : "(a).",
      alt    : "bureau de Maxime à Lyon, 2025"
    },
    {
      type    : "texte",
      contenu : "<em>Les places du savoir</em> cherche à traverser les lieux empruntés pendant la thèse d’un jeune chercheur, autant physiquement qu’intellectuellement. C’est une étude sur la recherche contemporaine via la place qu’elle occupe dans le quotidien du chercheur.",
      x       : 64+1118.477+32,
      y       : 225,
      width   : 400,
      taille  : "0.7rem"
    },
    {
      type    : "texte",
      contenu : "(a). <em>bureau de Maxime à Lyon</em>, 2025\n(b). <em>entretien du vivarium</em>, 2025\n(c). <em>auto-portrait dans le bassin sur la terrasse</em>, 2025\n(d). <em>table du salon</em>, 2025\n(e). <em>les lamiacées</em>, 2025\n(f). <em>insecte du rez-de-chaussée</em>, 2025\n",
      x       : 1400,
      y       : 1080+40+50,
      width   : 608,
      taille  : "0.7rem"
    },
    {
      type   : "image",
      src    : "images/les-places-du-savoir/DSCF3407.webp",
      x      : 213,
      y      : 1080+40,
      width  : 677,
      label  : "(b).",
      alt    : "entretien du vivarium, 2025"
    },
    {
      type   : "image",
      src    : "images/les-places-du-savoir/DSCF3344.webp",
      x      : 922,
      y      : 1506,
      width  : 560,
      label  : "(c).",
      alt    : "auto-portrait dans le bassin sur la terrasse, 2025"
    },
    {
      type   : "image",
      src    : "images/les-places-du-savoir/DSCF3391.webp",
      x      : 128,
      y      : 2370,
      width  : 400,
      label  : "(d).",
      alt    : "table du salon, 2025"
    },
    {
      type   : "image",
      src    : "images/les-places-du-savoir/DSCF3178.webp",
      x      : 592,
      y      : 2280,
      width  : 622,
      label  : "(e).",
      alt    : "les lamiacées, 2025"
    },
    {
      type   : "image",
      src    : "images/les-places-du-savoir/DSCF3360.webp",
      x      : 1246,
      y      : 2582,
      width  : 307,
      label  : "(f).",
      alt    : "insecte du rez-de-chaussée, 2025"
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
