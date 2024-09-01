# Meteo du Monde

Ce projet est une application React qui affiche les conditions météorologiques actuelles et les prévisions pour une ville donnée. Les données sont obtenues en temps réel via l'API OpenWeatherMap.

## Fonctionnalités
- **Conditions actuelles** : Affichage des informations météorologiques actuelles, y compris la température, la description du ciel, et les heures de lever/coucher du soleil.
- **Prévisions** : Affichage des prévisions météorologiques pour les prochaines heures, avec des détails sur la température, l'état du ciel, et la probabilité de pluie.

## API Utilisée
- **OpenWeatherMap API** :
  - Pour obtenir les données actuelles de la ville, l'application utilise l'endpoint `weather`.
  - Pour obtenir les prévisions météorologiques, l'application utilise l'endpoint `forecast`.

## Installation du Projet

1. **Cloner le projet :**
   ```bash
   git clone https://github.com/vncpsq/weather-app.git
   cd weather-app
   ```

2. **Installer les dépendances :**
   ```bash
   npm install
   ```

3. **Configuration de l'API :**
   - Créez un fichier `.env` à la racine du projet et ajoutez-y votre clé API OpenWeatherMap :
     ```plaintext
     VITE_APP_ID= YOUR API KEY
     ```

4. **Lancer l'application :**
   ```bash
   npm run dev
   ```

## Composants et Services
- **CityCard** : Composant principal qui affiche les données météorologiques pour une ville.
- **Services** :
  - `convertUnix` : Convertit les timestamps Unix en heures lisibles.
  - `sunshineCalculator` : Calcule la durée d'ensoleillement en fonction des heures de lever et coucher du soleil.
  - `roundTemperature` : Arrondit la température à l'entier le plus proche.

## Dépendances
- `react`, `react-dom`, `prop-types` : Pour construire l'interface utilisateur.
- `vite` : Pour le bundling et le développement rapide.
