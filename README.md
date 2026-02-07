# WiShare

Une application web moderne de partage de fichiers et de collaboration construite avec React, TypeScript et Tailwind CSS.

## 📸 Aperçu

![WiShare Screenshot](screenshots/WiShare_screenshot_1.png)

## 🚀 Fonctionnalités

- **Partage de fichiers** : Téléchargez et partagez facilement vos fichiers
- **Interface moderne** : Construite avec shadcn/ui et Tailwind CSS pour une expérience utilisateur élégante
- **Responsive design** : Fonctionne parfaitement sur desktop et mobile
- **TypeScript** : Code typé pour une meilleure maintenabilité
- **Performance** : Construit avec Vite pour des chargements rapides

## 🛠️ Stack Technique

- **Frontend** : React 18 avec TypeScript
- **Build Tool** : Vite
- **Styling** : Tailwind CSS + shadcn/ui
- **State Management** : React Query
- **Routing** : React Router DOM
- **Forms** : React Hook Form avec Zod
- **Icons** : Lucide React
- **Components** : Radix UI primitives

## 📦 Installation

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation locale

```bash
# Cloner le repository
git clone https://github.com/rachid-softdev/WiShare.git
cd WiShare

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

L'application sera disponible sur `http://localhost:5173`

## 🐳 Docker

### Construction et lancement avec Docker

```bash
# Construire l'image Docker
docker build -t wishare .

# Lancer le conteneur
docker run -p 80:80 wishare
```

L'application sera disponible sur `http://localhost:80`

### Avec Docker Compose

Créez un fichier `docker-compose.yml` :

```yaml
version: '3.8'
services:
  wishare:
    build: .
    ports:
      - "80:80"
    restart: unless-stopped
```

Puis lancez :

```bash
docker-compose up -d
```

## 📜 Scripts Disponibles

- `npm run dev` : Démarre le serveur de développement
- `npm run build` : Construit l'application pour la production
- `npm run build:dev` : Construit en mode développement
- `npm run preview` : Prévisualise la build de production
- `npm run lint` : Exécute ESLint

## 🏗️ Structure du Projet

```
WiShare/
├── public/          # Fichiers statiques
├── src/            # Code source
│   ├── components/ # Composants React
│   ├── pages/      # Pages de l'application
│   ├── hooks/      # Hooks personnalisés
│   ├── utils/      # Utilitaires
│   └── types/      # Définitions TypeScript
├── Dockerfile      # Configuration Docker
├── nginx.conf      # Configuration Nginx
├── package.json    # Dépendances et scripts
└── README.md       # Documentation
```

## 🚀 Déploiement

### Déploiement sur Vercel

1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement la configuration
3. Déployez !

### Déploiement sur Netlify

1. Connectez votre repository GitHub à Netlify
2. Configurez les paramètres de build :
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Déployez !

### Déploiement avec Docker

```bash
# Build et push sur un registry
docker build -t votre-registry/wishare:latest .
docker push votre-registry/wishare:latest

# Pull et run sur le serveur
docker pull votre-registry/wishare:latest
docker run -d -p 80:80 --name wishare votre-registry/wishare:latest
```

## 🤝 Contribuer

Les contributions sont les bienvenues ! Voici comment contribuer :

1. Fork le projet
2. Créez une branche (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commitez vos changements (`git commit -am 'Ajout d'une nouvelle fonctionnalité'`)
4. Push sur la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Créez une Pull Request

## 📝 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 📞 Support

Pour toute question ou suggestion, n'hésitez pas à :

- Ouvrir une [issue](https://github.com/rachid-softdev/WiShare/issues)
- Contacter l'équipe de développement

## 🙏 Remerciements

- [React](https://reactjs.org/) pour le framework frontend
- [Vite](https://vitejs.dev/) pour l'outil de build
- [Tailwind CSS](https://tailwindcss.com/) pour le styling
- [shadcn/ui](https://ui.shadcn.com/) pour les composants UI
- [Radix UI](https://www.radix-ui.com/) pour les primitives accessibles
