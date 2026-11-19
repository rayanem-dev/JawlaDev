# JawlaDev — portail vitrine

Vitrine commerciale (FR / EN / AR) des applications : Darsy+, Horeca, Sijil, Boutika, Pompa, plus les projets en cours avec jauge de progression.
Site statique, sans framework ni serveur. **Aucun code des applications n'est publié ici** : seulement des descriptions et des notes de version.

## Modifier le contenu
Tout est dans `assets/data.js` : nom de la marque, applis, notes de version, projets en cours (`progress` de 0 à 100), textes des 3 langues.
Une appli sans `url` affiche un bouton « Demander une démo » à la place de « Ouvrir ».

## Mise en ligne (GitHub Pages)
1. Fusionner la branche dans `main`.
2. GitHub → Settings → Pages → Source : **GitHub Actions**.
3. Le workflow `.github/workflows/pages.yml` publie le site à chaque push sur `main`.

## Domaine personnalisé (jawladev.com)
Le site fonctionne à la racine d'un domaine comme dans un sous-dossier (`/JawlaDev/`) : tous les chemins sont relatifs, y compris dans `manifest.json`.
1. Chez le registraire, DNS du domaine nu `jawladev.com` : quatre enregistrements `A` vers `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, et un `CNAME` `www` vers `rayanem-dev.github.io`.
2. GitHub → Settings → Pages → Custom domain : `jawladev.com`, puis cocher **Enforce HTTPS** quand le certificat est prêt.
3. Avec le déploiement par GitHub Actions, un fichier `CNAME` dans le dépôt est ignoré : le domaine se règle uniquement dans les réglages Pages.

Test en local : ouvrir `index.html` dans un navigateur.
