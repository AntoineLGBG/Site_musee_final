        // Vérifier la largeur de l'écran et changer l'image si nécessaire
        function changerImage() {
            const image = document.getElementById("monImage");
            if (window.innerWidth <= 768) { // Si la largeur de l'écran est inférieure ou égale à 768 pixels (ajustez cette valeur selon vos besoins)
                image.src = "formatpetit.png"; // Chargez l'image pour les smartphones
            } else {
                image.src = "Groupe1_2.png"; // Chargez l'image pour les écrans de bureau
            }
        }

        // Exécutez la fonction au chargement de la page et lors du redimensionnement de la fenêtre
        window.addEventListener("load", changerImage);
        window.addEventListener("resize", changerImage);