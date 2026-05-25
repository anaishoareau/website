/*
  FICHIER DE PARAMÉTRAGE — methexis / série Mathys
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

const METHEXIS_CONFIG = {

  // Hauteur totale de la page en px sur base 1920px
  pageHeight: 7840+800,

  elements: [
    {
      type   : "image",
      src    : "images/methexis/mathys-et-l-etoile-de-mer.webp",
      x      : 32,
      y      : 32,
      width  : 1524.768,
      label  : "(a).",
      alt    : "Mathys et l'étoile de mer, 2026"
    },
    {
      type  : "image",
      src   : "images/methexis/dick-barnatt_led-zepplin.webp",
      x     : 32,
      y     : 1080.256,
      width : 578,
      label : "(b).",
      alt   : "Inspiration : Led Zepplin, Dick Barnatt, 1970"
    },
    {
      type  : "image",
      src   : "images/methexis/martin-parr_benidorm-spain.webp",
      x     : 640,
      y     : 1080.256,
      width : 351.744,
      label : "(c).",
      alt   : "Inspiration : Benidorm, Spain, Martin Parr, 1997"
    },
    {
      type    : "texte",
      contenu : "(a). <em>Mathys et l'étoile de mer</em>, 2026\n (b). Inspiration : <em>Led Zepplin</em>, Dick Barnatt, 1970\n(c). Inspiration : <em>Benidorm, Spain</em>, Martin Parr, 1997\n(d). Notes sur l'entretien avec Mathys\n(e). <em>la prison des âmes (lieu dans l'univers du roman de Mathys)</em>, 2026\n",
      x       : 112,
      y       : 1664.874,
      width   : 608,
      taille  : "0.7rem"
    },
    {
      type    : "texte",
      contenu : "Les photographies font suite à des entretiens individuels avec les participant.e.s. permettant de mieux les connaître et de produire des images qui les représentent.",
      x       : 749.265,
      y       : 2272.281,
      width   : 526,
      taille  : "0.7rem",
      ancreV  : "bas",
      ancreH : "droite",
      alignTexte : "droite"
    },
    {
      type  : "image",
      src   : "images/methexis/notes-mathys-presentation.webp",
      x     : 781.265,
      y     : 1832,
      width : 402.735,
      label : "(d).",
      alt   : "Notes sur l'entretien avec Mathys"
    },
    {
      type  : "image",
      src   : "images/methexis/la-prison-des-ames-lieu-dans-l-univers-du-roman-de-mathys.webp",
      x     : 1216,
      y     : 1263.754,
      width : 672,
      label : "(e).",
      alt   : "la prison des âmes (lieu dans l'univers du roman de Mathys), 2026"
    },
    {
      type  : "image",
      src   : "images/methexis/pieces-manquantes.webp",
      x     : 32,
      y     : 2400,
      width : 480,
      label : "(f).",
      alt   : "pièces manquantes, 2026"
    },
    {
      type  : "image",
      src   : "images/methexis/christopher-anderson_karoline-leavitt-white-house-press-secretary.webp",
      x     : 544,
      y     : 2400,
      width : 480,
      label : "(g).",
      alt   : "Inspiration : Karoline Leavitt, White House press secretary, Christopher Anderson, 2025"
    },
        {
      type    : "texte",
      contenu : "(f). <em>pièces manquantes</em>, 2026\n(g). Inspiration : <em>Karoline Leavitt, White House press secretary</em>, Christopher Anderson, 2025",
      x       : 1280,
      y       : 2976,
      width   : 544,
      taille  : "0.7rem",
      ancreV  : "bas",
      alignTexte : "gauche"
    },
    {
      type  : "image",
      src   : "images/methexis/methexis-questionnaire.webp",
      x     : 320,
      y     : 3168,
      width : 416,
      label : "(h).",
      alt   : "Questionnaire pour les entretiens"
    },
    {
      type    : "texte",
      contenu : "J’utilise une liste d’affirmations comme point de départ des entretiens, mais le protocole n'est pas strict. Certain.e.s participant.e.s ne sont pas à l’aise avec la parole, on utilise aussi d’autres formes d’expression, comme le dessin.",
      x       : 768,
      y       : 3168,
      width   : 841,
      taille  : "0.7rem"
    },
    {
      type  : "image",
      src   : "images/methexis/dessin-lilas.webp",
      x     : 800,
      y     : 3264,
      width : 672,
      label : "(i).",
      alt   : "Dessin de Lilas sur son rapport aux autres"
    },
        {
      type  : "image",
      src   : "images/methexis/jamais-assez-toujours-trop.webp",
      x     : 895.789,
      y     : 4192,
      width : 864.211,
      label : "(j).",
      alt   : "jamais assez, toujours trop, 2026"
    },
    {
      type  : "image",
      src   : "images/methexis/stimming.webp",
      x     : 895.859,
      y     : 4800,
      width : 576.141,
      label : "(k).",
      alt   : "stimming, 2026"
    },
    {
      type    : "texte",
      contenu : "(h). Questionnaire pour les entretiens\n(i). Dessin de Lilas sur son rapport aux autres\n(j). <em>jamais assez, toujours trop</em>, 2026\n(k). <em>stimming</em>, 2026",
      x       : 112,
      y       : 4800,
      width   : 608,
      taille  : "0.7rem"
    },
    {
      type    : "texte",
      contenu : "J'essaie de capter les points fixes dans chaque discours pour en imprégner les photographies.",
      x       : 640,
      y       : 4192,
      width   : 224,
      taille  : "0.7rem",
      ancreV  : "haut",
      alignTexte : "droite"
    },
    {
      type    : "texte",
      contenu : "Une partie du processus est la recherche documentaire. Tout au long du projet, je me documente et nourris la pratique artistique d'études et de données.",
      x       : 448.477,
      y       : 5312,
      width   : 209,
      taille  : "0.7rem",
      ancreV  : "haut",
      ancreH  : "droite",
      alignTexte : "droite"
    },
    {
      type  : "image",
      src   : "images/methexis/submersion.webp",
      x     : 479.89,
      y     : 5312,
      width : 608.11,
      label : "(l).",
      alt   : "submersion, 2026"
    },
    {
      type  : "image",
      src   : "images/methexis/undiagnose-autism-percentage-by-age.webp",
      x     : 1116.225,
      y     : 5306.835,
      width : 402.061,
      label : "(m).",
      alt   : "Pourcentage de personnes autistes non diagnostiquées par tranche d'âge, figure issue de l'étude : Stewart, G. R., & Happé, F. (2025). Aging across the autism spectrum. Annual Review of Developmental Psychology, 7."
    },
    {
      type    : "texte",
      contenu : "(l). <em>submersion</em>, 2026\n(m). Pourcentage de personnes autistes non diagnostiquées par tranche d'âge, figure issue de l'étude : Stewart, G. R., & Happé, F. (2025). Aging across the autism spectrum. <em>Annual Review of Developmental Psychology</em>, 7.",
      x       : 1120,
      y       : 6048,
      width   : 608,
      taille  : "0.7rem"
    },
    {
      type  : "image",
      src   : "images/methexis/miniature-portfolio.webp",
      x     : 82.346,
      y     : 6368,
      width : 928,
      label : "(n).",
      alt   : "Miniature des planches du projet methexis dans le portfolio"
    },
    {
      type    : "texte",
      contenu : "Le projet est pensé pour l’exposition et la curation fait partie intégrante du projet, au même titre que les images. Je cherche le dialogue entre les vécus.",
      x       : 1042.346,
      y       : 6368,
      width   : 429.654,
      taille  : "0.7rem"
    },
    {
      type  : "image",
      src   : "images/methexis/document-florine-recto-verso.webp",
      x     : 1170.346,
      y     : 6651.263,
      width : 589.672,
      label : "(o).",
      alt   : "auto-évaluation, 2026 (motif du papier peint)"
    },
    {
      type  : "image",
      src   : "images/methexis/erwin-olaf_danse-in-close-up.webp",
      x     : 1344,
      y     : 7872,
      width : 384,
      label : "(q).",
      alt   : "Inspiration : vidéos issues de Dance in Close-Up, Hans van Manen seen by Erwin Olaf series, Erwin Olaf, 2022 (photographie prise au Stedelijk Museum, à Amsterdam)"
    },
    {
      type    : "texte",
      contenu : "(n). Miniature des planches du projet <em>methexis</em> dans le portfolio\n(o). <em>auto-évaluation</em>, 2026 (motif du papier peint)\n(p). <em>Jade et le ver rouge</em>, 2026\n(q). Inspiration : vidéos issues de <em>Dance in Close-Up, Hans van Manen seen by Erwin Olaf series</em>, Erwin Olaf, 2022 (photographie prise au Stedelijk Museum, à Amsterdam)\n(r). Inspiration : <em>Sculpture hystérique</em>, Christophe Berdaguer et Marie Péjus, 2017 (photographie prise au MO.CO., à Montpellier)",
      x       : 832,
      y       : 7489.583+50,
      width   : 650,
      taille  : "0.7rem"
    },
    {
      type  : "video",
      src   : "videos/methexis/methexis_web.mp4",
      x     : 160,
      y     : 7872,
      width : 1151.893,
      label : "(p).",
      alt   : "Jade et le ver rouge, 2026"
    },
    {
      type  : "image",
      src   : "images/methexis/20250504_montpellier_moco_eprouver-l-inconnu_christophe-berdaguer-et-marie-pejus_sculpture-hysterique_2017_detail.webp",
      x     : 1344,
      y     : 8192,
      width : 245.43,
      label : "(r).",
      alt   : "Inspiration : Sculpture hystérique, Christophe Berdaguer et Marie Péjus, 2017"
    },
    {
      type    : "texte",
      contenu : "Le projet est aussi un lieu d'expérimentation. Je teste et me nourris du travail d’artistes de tous horizons.",
      x       : 160,
      y       : 7840,
      width   : 495,
      taille  : "0.7rem",
      ancreV  : "bas",
      ancreH  : "gauche",
      alignTexte : "gauche"
    },
    
        // {
    //   type  : "son",
    //   src   : "sons/methexis/extrait-entretien-mathys-isolement.m4a",
    //   x     : 780,
    //   y     : 1750,
    //   width : 402.735,
    // }
  ]

};
