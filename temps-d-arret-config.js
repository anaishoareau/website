/*
  FICHIER DE PARAMÉTRAGE — temps d'arrêt
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

const TEMPS_D_ARRET_CONFIG = {

  // Hauteur totale de la page en px (base 1920px)
  pageHeight: 3260,

  elements: [
    {
      type   : "image",
      src    : "images/temps-d-arret/DSCF1273-3.jpg",
      x      : 96,
      y      : 565.069,
      width  : 628.09,
      label  : "(a).",
      alt    : "sel, poivre et quatre appareils de mesure du temps, 2025"
    },
    {
      type   : "image",
      src    : "images/temps-d-arret/5-DSCF1114.jpg",
      x      : 760.09,
      y      : 286.507,
      width  : 464.882,
      label  : "(b).",
      alt    : "le goûter, 2025"
    },
    {
      type   : "image",
      src    : "images/temps-d-arret/DSCF1277-6.jpg",
      x      : 1502.605,
      y      : 176,
      width  : 321.395,
      label  : "(c).",
      alt    : "un vaisselier parmi trois, 2025"
    },
    {
      type    : "texte",
      contenu : "(a). <em>sel, poivre et quatre appareils de mesure du temps</em>, 2025\n(b). <em>le goûter</em>, 2025\n(c). <em>un vaisselier parmi trois</em>, 2025\n(d). <em>retour de courses</em>, 2025\n(e). <em>choix du film du soir</em>, 2025",
      x       : 96,
      y       : 1858.032,
      width   : 608,
      taille  : "0.7rem",
      ancreH : "gauche",
      ancreV : "bas",
    },
    {
      type   : "image",
      src    : "images/temps-d-arret/DSCF1097-5.jpg",
      x      : 924.412,
      y      : 1212,
      width  : 430.583,
      label  : "(d).",
      alt    : "retour de courses, 2025"
    },
    {
      type   : "image",
      src    : "images/temps-d-arret/DSCF1149-9.jpg",
      x      : 1393.417,
      y      : 1335.858,
      width  : 430.583,
      label  : "(e).",
      alt    : "choix du film du soir, 2025"
    },
    {
      type   : "image",
      src    : "images/temps-d-arret/stephan-gladieu_Kim-Gum-Sim-and-Ryu-Song-Hyang_north-koreans-portraits_2017.png",
      x      : 96,
      y      : 2232,
      width  : 622.032,
      label  : "(f).",
      alt    : "Inspiration : Kim Gum Sim et Ryu Song Hyang, North Koreans portraits, Stephan Gladieu, 2017"
    },
    {
      type   : "image",
      src    : "images/temps-d-arret/nikita-teryoshin_I-ve-never-been-to-russia_2019-2022.jpg",
      x      : 718.032+32,
      y      : 2554.075,
      width  : 413.799,
      label  : "(g).",
      alt    : "Inspiration : I've never been to Russia, Nikita Teryoshin, 2019-2022"
    },
    {
      type   : "image",
      src    : "images/temps-d-arret/martin-parr_benidorm_1997.webp",
      x      : 1166.9+32,
      y      : 2346.094,
      width  : 534.422,
      label  : "(h).",
      alt    : "Inspiration : Benidorm, Spain, Martin Parr, 1997"
    },
    {
      type    : "texte",
      contenu : "(f). Inspiration : <em>Kim Gum Sim et Ryu Song Hyang, North Koreans portraits</em>, Stephan Gladieu, 2017\n(g). Inspiration : <em>I've never been to Russia</em>, Nikita Teryoshin, 2019-2022\n(h). Inspiration : <em>Benidorm, Spain</em>, Martin Parr, 1997",
      x       : 1198.9,
      y       : 3174.154,
      width   : 500,
      taille  : "0.7rem",
      ancreH : "gauche",
      ancreV : "bas",
    },
  ],
};
