# Spinalcom-exercice: Vue.js 2 avec TypeScript, Vue CLI et Vuetify

[![Netlify Status](https://api.netlify.com/api/v1/badges/c7a2027a-57bd-4d3b-9148-63c08d8e23a0/deploy-status)](https://app.netlify.com/sites/roxaneviette-spinalcom-exercice/deploys)

![Vue.js](https://img.shields.io/badge/Vue.js-2.x-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue)
![Vue CLI](https://img.shields.io/badge/Vue%20CLI-4.x-orange)
![Vuetify](https://img.shields.io/badge/Vuetify-2.x-purple)
![Docker](https://img.shields.io/badge/Docker-Compose-blue)

## Description

**Attention cette application est uniquement utilisable pour le moment en version desktop**

Ce mini projet est une application destiner à analyser l'occupation de chaque pièce, par étage, du bâtiment en question.

Ce dernier a été réaliser en **Vue.js 2** en **TypeScript**, créée à l'aide de **Vue CLI** et en utilisant **Vuetify** pour les thèmes, certaines classes et quelques composants UI.
Néanmoins de nombreux composants on été fait "From scratch".

## Prérequis

-   Node.js (version 12 ou supérieure) ou nvm (Node Version Manager) pour choisir les différentes versions de Node.js
-   npm, pnpm, ou yarn
-   Docker (optionnel)
-   Docker Compose (optionnel)

## Installation

### Cloner le dépôt

```bash
git clone git@github.com:Roxanne2904/spinalcom-exercice.git
cd spinalcom-exercice
```

### Avec Docker Compose

Si vous préférez utiliser Docker Compose pour lancer l'application, suivez ces étapes :

1. Assurez-vous que Docker et Docker Compose sont installés et en cours d'exécution sur votre machine.
2. Dans le répertoire du projet, exécutez :

```bash
docker compose up --build
```

ou

```bash
docker-compose up --build
```

Cela va construire et démarrer les conteneurs Docker nécessaires pour l'application.

L'application devrait maintenant être accessible à l'adresse [http://localhost:8080](http://localhost:8080).

### Sans Docker Compose

Si vous préférez lancer l'application directement sur votre machine sans Docker, suivez ces étapes :

1. Assurez-vous que Node.js et npm, pnpm, ou yarn sont installés.
2. Installez les dépendances du projet :

```bash
# Avec npm
npm install

# Avec pnpm
pnpm install

# Avec yarn
yarn
```

#### Démarrez l'application :

```bash
# Avec npm
npm run start

# Avec pnpm
pnpm run start

# Avec yarn
yarn start

```

L'application devrait maintenant être accessible à l'adresse [http://localhost:8080](http://localhost:8080).

## Utilisation

Après avoir démarré l'application, vous pouvez commencer à l'utiliser en naviguant sur [http://localhost:8080](http://localhost:8080) dans votre navigateur web.
