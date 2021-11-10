# Examen blanc #1

## Durée

3 heures

## Contexte
Start-Up Nation est un service en ligne qui met chaque semaine en avant les start-up innovantes dans le secteur du numérique. Pensé au départ exclusivement comme un site web pour smartphone, le service a gagné en popularité et l'entreprise souhaite à présent faire développer une version consultable de façon plus confortable sur d'autres tailles d'écran.
À partir de l'identité visuelle de la maquette mobile existante, vous devez concevoir une maquette adaptée pour la consultation sur écran d'ordinateur, puis réaliser une intégration responsive des deux maquettes.

## Éléments à votre disposition :

- un fichier `startup_mobile.psd` : la maquette de la version mobile, de `480px` de largeur
- un fichier `index.html` : une ébauche de la page HTML
- un répertoire `images` : contient les illustrations dont vous avez besoin
- un répertoire `polices` : contient les polices `Open Sans` et `Proza Libre`
- un répertoire `menu` contenant un exemple de menu
- une palette de couleur :
  - White : `#ffffff`
  - Mist : `#90AFC5`
  - Stone : `#336B87`
  - Shadow : `#2A3132`

> :warning: Ce qui n'est pas prescrit dans les consignes qui suivent est laissé à votre appréciation, mais attention à toujours rester cohérent par rapport à la charte graphique, et à privilégier la lisibilité et l'accessibilité.

## Tâches à réaliser

### Partie Conception Graphique

- Installez les polices fournies
- À partir de la maquette pour mobile, déclinez une version desktop :
  - Créez un fichier `startup_desktop.psd` d'une largeur de `1024px`, la hauteur est laissée à votre appréciation (ce n'est pas grave si il y a du blanc en dessous du footer)
  - Réorganisez les éléments de la page pour qu'ils occupent l'espace d'une façon équilibrée et ergonomique dans un conteneur centré de `960px`
  - Étudiez les polices et couleurs utilisées sur la maquette mobile pour concevoir la version desktop de la façon la plus respectueuse possible de la charte graphique et de l'esprit de la version mobile
  - Créez sous Adobe Illustrator ou Adobe XD un pictogramme représentant l'idée de prise de contact (une enveloppe, un téléphone, un répertoire de contact, un avion en papier, etc. au choix)
  - Intégrez votre pictogramme aux versions mobiles et desktop sous photoshop : vous êtes libres de juger de la position la plus adéquate pour le bouton (sur les versions desktop et mobile)
- Pour la version mobile, il n'y a pas d'effet sur les liens du menu, pour la version desktop, à l'état normal il n'ont pas de bordure, mais au survol, ils auront en css la propriété `border-top : 2px solid #90AFC5` : faites apparaître cette bordure au-dessus de l'un des items du menu de la version desktop de votre maquette
- Optimisez le poids et la qualité des images

### Partie Intégration

- Réalisez l'intégration HTML/CSS sur la base du fichier `index.html` fourni
- Pour la version desktop, les liens du menu doivent prendre, au survol, la propriété css suivante : `border-top : 2px solid #90AFC5`
- Placez le pictogramme `contact` comme prévu sur vos maquettes : au survol doit apparaître le texte `Un retour d'expérience ? Contactez-nous !`
- L'intégration doit être responsive : le point de rupture est à `520px`
- Vous pouvez, si vous le souhaiter utiliser le menu rétractable fourni (attention, n'oubliez pas de le personnaliser pour qu'il s'intègre et respecte la charte graphique)
- Vous pouvez aussi, si vous le souhaitez, utiliser un framework responsive de votre choix
- Optimisez la page web pour les navigateurs Chrome et Firefox
- Prenez en compte les standards du W3C
- Optimisez le code pour le référencement naturel
- Mentionnez dans le footer les crédits, comme indiqué sur la maquette

> Remarque : 
> Des retours utilisateurs indiquent que le placeholder `RECHERCHER` dans le champs de recherche fait doublon avec la loupe placée à gauche de ce champs et génère même de la confusion en terme d'expérience utilisateur (la loupe est-elle un lien ? que se passe-t-il si on clique dessus plutôt que dans le champs de recherche ?).
> Prenez en compte ces retours utilisateurs et solutionnez le problème (par exemple en faisant le choix de supprimer l'un des 2 éléments, ou une solution plus dynamique comme le masquage par défaut du champs et sa ré-apparition au clic sur la loupe...) dans votre intégration.

# Conseil

**Priorisez les tâches**, ne perdez pas de temps sur une tâche que vous n'arrivez pas à faire.  
Rationnalisez votre travail en réalisant d'abord ce que vous savez faire ou ce qui sera plus dur à faire si vous avez réalisé d'autres tâches avant.

# Rendu attendu

- Enregistrez votre travail dans un dossier nommé `[initial prénom+nom]_entrainement`.  
- Ce dossier doit contenir :
  - votre maquette `startup_desktop.psd` ou `startup_desktop.xd` (selon le logiciel choisi, mais pas de fichier illustrator)
  - un sous-dossier nommé `startup` qui contient les éléments de l'intégration :
      - la page `index.html`
      - la (ou les) feuille(s) de style
      - le (ou les) fichier(s) scripts
      - le dossier `images`
      - le dossier `polices`
      - les autres éventuels éléments nécessaires à l'affichage de la page web
# examen-startupnation
