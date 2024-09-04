
---

### **README principal (`main`)**

```markdown
# Kontranaviavytech

**Kontranaviavytech** est une initiative visant à faciliter l'accès des femmes au monde numérique et technologique à travers un forum de partage avancé et personnalisé. Ce projet se divise en deux parties principales : un front-end basé sur React et un back-end basé sur Django. Chaque partie est développée sur des branches séparées pour faciliter la gestion et la collaboration.

## Structure du Projet

Le projet est organisé en deux branches principales :
- **frontend** : pour le développement de l'interface utilisateur avec React.
- **backend** : pour le développement du serveur et de l'API avec Django.

## Gestion des Branches

### Création des branches

Les branches `frontend` et `backend` sont déjà créées. Si vous devez en créer de nouvelles :

```bash
# Créer une nouvelle branche
git checkout -b nouvelle-branche
```

### Travailler sur une branche spécifique

Pour basculer entre les branches et y travailler :

```bash
# Passer à une branche existante
git checkout nom-de-la-branche
```

### Fusion des branches

Pour fusionner une branche (par exemple `frontend`) dans la branche `main` :

```bash
# Passer sur la branche main
git checkout main

# Fusionner la branche frontend dans main
git merge frontend

# Résoudre les conflits éventuels
git add .
git commit -m "Fusion de la branche frontend dans main"

# Pousser les modifications sur GitHub
git push origin main
```

## Collaboration

Chaque collaborateur doit travailler sur la branche appropriée (`frontend` ou `backend`) et suivre les bonnes pratiques Git (commits réguliers, messages clairs, etc.). Les branches doivent être fusionnées régulièrement dans `main` pour éviter les conflits majeurs.

Pour plus de détails, consultez les README de chaque branche :
- [Frontend README](frontend/README.md)
- [Backend README](backend/README.md)
<<<<<<< HEAD
```
=======
`
>>>>>>> backend
