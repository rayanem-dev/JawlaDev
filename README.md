# JawlaDev — portail vitrine

Vitrine commerciale (FR / EN / AR) des applications : Darsy+, Horeca, Sijil, plus les projets en cours avec jauge de progression.
Site statique, sans framework ni serveur. **Aucun code des applications n'est publié ici** : seulement des descriptions et des notes de version.

## Modifier le contenu
Tout est dans `assets/data.js` : nom de la marque, applis, notes de version, projets en cours (`progress` de 0 à 100), textes des 3 langues.
Une appli sans `url` affiche un bouton « Demander une démo » à la place de « Ouvrir ».

## Mise en ligne (GitHub Pages)
1. Fusionner la branche dans `main`.
2. GitHub → Settings → Pages → Source : **GitHub Actions**.
3. Le workflow `.github/workflows/pages.yml` publie le site à chaque push sur `main`.

Test en local : ouvrir `index.html` dans un navigateur.
