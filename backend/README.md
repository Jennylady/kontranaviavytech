
---

```markdown
# Kontranaviavytech - Backend

Ce dossier contient le code source du serveur et de l'API pour le projet **Kontranaviavytech**, développé avec Django. Le backend gère la logique métier, les interactions avec la base de données, et expose les API nécessaires pour le frontend.

## Installation et Configuration

### Prérequis

- Python et pip installés sur votre machine.
- Un environnement virtuel pour isoler les dépendances.

### Installation

1. Clonez la branche `backend` :
   ```bash
   git clone -b backend https://github.com/<votre-utilisateur-github>/kontranaviavytech.git
   ```

2. Créez et activez un environnement virtuel (facultatif):
   ```bash
   python -m venv env
   source env/bin/activate  # Sur Windows, utilisez `env\Scripts\activate`
   ```

3. Installez les dépendances :
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

4. Appliquez les migrations de la base de données :
   ```bash
   python manage.py makemigrations

   python manage.py migrate
   ```

5. Lancez le serveur Django :
   ```bash
   python manage.py runserver
   ```

L'API sera disponible à l'adresse `http://localhost:8000`.

## Travailler sur la branche `backend`

Pour travailler sur cette branche, assurez-vous de l'avoir sélectionnée :

```bash
git checkout backend
```

### Ajout de nouvelles fonctionnalités

1. Faites vos modifications.
2. Ajoutez les fichiers modifiés :
   ```bash
   git add .
   ```
3. Commitez vos modifications :
   ```bash
   git commit -m "Description des modifications"
   ```
4. Poussez vos modifications :
   ```bash
   git push origin backend
   ```

## Fusionner la branche `backend` avec `main`

1. Assurez-vous d'avoir poussé toutes vos modifications sur la branche `backend`.
2. Passez sur la branche `main` :
   ```bash
   git checkout main
   ```
3. Fusionnez la branche `backend` :
   ```bash
   git merge backend
   ```
4. Résolvez les conflits éventuels, ajoutez les fichiers modifiés, et commitez :
   ```bash
   git add .
   git commit -m "Fusion de la branche backend dans main"
   ```
5. Poussez les modifications sur GitHub :
   ```bash
   git push origin main
   ```
```

---