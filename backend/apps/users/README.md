## Users Module

### Introduction

Le module Users gère l'inscription, la connexion, et la gestion des utilisateurs dans l'application. Ce module permet aux utilisateurs de s'enregistrer, de se connecter, et de récupérer leurs informations de profil.

### Modèle Utilisateur

Le modèle `Users` représente un utilisateur de l'application. Il inclut des champs tels que `name`, `email`, `genre`, et `password`. Le mot de passe est stocké de manière sécurisée en utilisant un hachage pour assurer la confidentialité des données.

### Serializers

Les serializers sont utilisés pour convertir les instances de modèle en formats de données pouvant être facilement rendus en JSON, XML, etc. Le module inclut plusieurs serializers pour gérer les différentes opérations :
- **UserSerializer** : Sérialiseur de base utilisé pour la représentation des utilisateurs.
- **RegisterSerializer** : Sérialiseur utilisé lors de l'inscription d'un utilisateur. Il prend en charge l'encodage sécurisé du mot de passe avant de l'enregistrer.
- **LoginSerializer** : Sérialiseur utilisé pour authentifier les utilisateurs lors de la connexion. Il vérifie les informations d'identification fournies par l'utilisateur.

### Vues

Les vues permettent de définir la logique de l'API qui interagit avec les serializers et le modèle `Users`. Ce module inclut :
- **RegisterView** : Permet aux nouveaux utilisateurs de s'inscrire.
- **LoginView** : Gère la connexion des utilisateurs existants en validant leurs informations d'identification.
- **UserListView et UserDetailView** : Gèrent la récupération de la liste des utilisateurs ou des détails d'un utilisateur en particulier.

### Gestion des Mots de Passe

Lors de l'inscription, les mots de passe sont automatiquement hachés pour garantir la sécurité. Pendant la connexion, le mot de passe fourni est vérifié par rapport au haché stocké pour valider l'utilisateur.

### Routes

Les routes API pour ce module sont définies dans `urls.py` et incluent des points de terminaison pour l'inscription, la connexion, et la gestion des utilisateurs.

### API
Tous les details des points de terminaison sont dans le fichier [apiusers.md](./apiusers.md)

---