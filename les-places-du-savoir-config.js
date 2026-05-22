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
    // {
    //   type   : "image",
    //   src    : "images/les-places-du-savoir/nom-du-fichier.jpg",
    //   x      : 32,
    //   y      : 32,
    //   width  : 800,
    //   label  : "(a).",
    //   alt    : "description"
    // },
    // {
    //   type    : "texte",
    //   contenu : "Texte à afficher",
    //   x       : 32,
    //   y       : 32,
    //   width   : 500,
    //   taille  : "0.7rem"
    // },
    // {
    //   type  : "video",
    //   src   : "videos/les-places-du-savoir/nom-du-fichier.mp4",
    //   x     : 32,
    //   y     : 32,
    //   width : 800,
    //   label : "(a).",
    //   alt   : "description"
    // },
    // {
    //   type  : "son",
    //   src   : "sons/les-places-du-savoir/nom-du-fichier.m4a",
    //   x     : 32,
    //   y     : 32,
    //   width : 400,
    // },
  ]

};
