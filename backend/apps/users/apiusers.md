
### apiusers.md

Ce fichier contient la documentation détaillée des API pour le module Users. Voici comment structurer ce fichier :

# API Documentation - Users Module

## Introduction

Cette documentation couvre les différentes API du module Users, y compris les opérations d'inscription, de connexion, et de gestion des utilisateurs. Les formats de requêtes et réponses, ainsi que les codes de statut HTTP associés, sont expliqués.

## API Endpoints

### 1. User Registration API

- **Endpoint**: `/api/register/`
- **Method**: `POST`
- **Description**: Cette API permet aux nouveaux utilisateurs de s'inscrire.
- **Request Body**:
  - `name` (string, obligatoire): Nom de l'utilisateur.
  - `email` (string, obligatoire): Adresse email de l'utilisateur.
  - `genre` (string, obligatoire): Genre de l'utilisateur.
  - `password` (string, obligatoire): Mot de passe de l'utilisateur.
- **Response**:
  - `201 Created`: L'utilisateur a été créé avec succès.
  - `400 Bad Request`: Les données fournies sont invalides.

- **Exemple de Requête**:

  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "genre": "Male",
    "password": "strongpassword123"
  }
  ```

- **Exemple de Réponse**:

  ```json
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "genre": "Male"
  }
  ```

### 2. User Login API

- **Endpoint**: `/api/login/`
- **Method**: `POST`
- **Description**: Cette API permet aux utilisateurs existants de se connecter en fournissant leurs informations d'identification.
- **Request Body**:
  - `email` (string, obligatoire): Adresse email de l'utilisateur.
  - `password` (string, obligatoire): Mot de passe de l'utilisateur.
- **Response**:
  - `200 OK`: Connexion réussie.
  - `401 Unauthorized`: Informations d'identification incorrectes.

- **Exemple de Requête**:

  ```json
  {
    "email": "john.doe@example.com",
    "password": "strongpassword123"
  }
  ```

- **Exemple de Réponse**:

  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "genre": "Male"
  }
  ```

### 3. Get User List API

- **Endpoint**: `/api/users/`
- **Method**: `GET`
- **Description**: Récupère la liste de tous les utilisateurs enregistrés.
- **Response**:
  - `200 OK`: Liste des utilisateurs récupérée avec succès.

- **Exemple de Réponse**:

  ```json
  [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "genre": "Male"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "genre": "Female"
    }
  ]
  ```

### 4. Get User Detail API

- **Endpoint**: `/api/users/<int:pk>/`
- **Method**: `GET`
- **Description**: Récupère les détails d'un utilisateur spécifique par ID.
- **Response**:
  - `200 OK`: Détails de l'utilisateur récupérés avec succès.
  - `404 Not Found`: Utilisateur non trouvé.

- **Exemple de Réponse**:

  ```json
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "genre": "Male"
  }
  ```

## Status Codes

- `200 OK`: La requête a réussi.
- `201 Created`: La ressource a été créée avec succès.
- `400 Bad Request`: La requête est invalide.
- `401 Unauthorized`: Authentification nécessaire ou échouée.
- `404 Not Found`: Ressource non trouvée.

## Notes

- **Sécurité des Mots de Passe**: Tous les mots de passe sont hachés avant d'être stockés dans la base de données pour assurer la sécurité des utilisateurs.
- **Format des Données**: Les requêtes et réponses sont toutes au format JSON.

---