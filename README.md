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

## Hébergement sur jawladev.com (hors GitHub Pages)
Le site fonctionne à la racine d'un domaine comme dans un sous-dossier : tous les chemins sont relatifs, y compris dans `manifest.json`.
Il suffit de déposer les fichiers dans le dossier web du domaine (`public_html`). Le site n'utilise ni PHP ni MySQL.
- À déposer : `index.html`, `manifest.json`, `sw.js`, `version.json`, `.htaccess`, les icônes `*.png` et le dossier `assets/`. Ne pas déposer `.git`, `.github` ni ce `README.md`.
- Les deux étapes du workflow GitHub Pages sont à refaire à la main si on dépose les fichiers du dépôt tels quels : mettre à jour `version.json` avec la version de `assets/data.js` (`window.PORTAL.version`), et ajouter `?v=<code>` aux scripts et feuilles de style de `index.html` pour éviter le cache.
- `.htaccess` force HTTPS et le domaine sans `www`. Activer d'abord le certificat SSL du domaine (AutoSSL / Let's Encrypt), sinon le site devient inaccessible.

Test en local : ouvrir `index.html` dans un navigateur.
