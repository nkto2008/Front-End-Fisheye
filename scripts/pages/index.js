    async function getPhotographers() {
        let photographers = []
        // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
        // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
        await fetch('./data/photographers.json').then(response => {
            return response.json();
          }).then(data => {
            // Work with JSON data here
            console.log(data)
            photographers = data["photographers"]
            
          }).catch(err => {
            console.log(err);
          });
        // et bien retourner le tableau photographers seulement une fois récupéré
        return photographers
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const photographers = await getPhotographers();
        displayData(photographers);
    }
    
    init();
    
