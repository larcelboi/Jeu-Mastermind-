const boutonCouleur = document.querySelectorAll(".boutonCouleur");
const bigBoxGauche = document.querySelector(".BoiteGauche");

//Création plusieurs boutons dans la boite Gauche
for (let i = 0; i < 10; i++) {
    const cercle = document.createElement("p");
    const cadreCercle = document.createElement("div");
    cadreCercle.classList.add("BoxWithOneCercle");
    cercle.classList.add("CercleInBox");
    cercle.style.background = "red";
    cadreCercle.append(cercle);
    bigBoxGauche.append(cadreCercle);
}

const liste_couleur = ['red',
    'blue',
    'green',
    'yellow',
    'orange',
    'purple',
    'pink',
    'cyan',
    'magenta',
    'lime',
    'teal',
    'brown',
    'black',
    'white',
    'gray']
// Assigner les couleurs au boutons

boutonCouleur.forEach(function (bouton,index) {
    bouton.style.backgroundColor = liste_couleur[index]

    //Activer lorsque tu click un boutton
    bouton.addEventListener('click', function () {
        bouton.style.opacity = 0.5;
        setTimeout(function () {
            bouton.style.opacity = 1;
        }
            ,1000)
    })
});
