import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: '#DE9A38', // Couleur primaire
                secondary: '#424242', // Couleur secondaire
                accent: '#82B1FF', // Couleur d'accentuation
                error: '#FF5252', // Couleur d'erreur
                info: '#2196F3', // Couleur d'information
                success: '#4CAF50', // Couleur de succès
                warning: '#FB8C00', // Couleur d'avertissement
                background: '#DDE5EC',
                lighterBackground: '#FFFFFF',
                greyBackground: '#F2F2F2',
                text: '#12104E',
                white: '#FFFFFF',
                tag: '#444444',
            },
            dark: {
                primary: '#DE9A38',
                secondary: '#424242',
                accent: '#FF4081',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FB8C00',
                background: '#DDE5EC',
                lighterBackground: '#FFFFFF',
                greyBackground: '#F2F2F2',
                text: '#FFFFFF',
                tag: '#444444',
            },
        },
        dark: false, // Mettre à true pour utiliser le thème sombre par défaut
    },
});
