const boutonCouleur = document.querySelectorAll(".boutonCouleur");
const bigBoxGauche = document.querySelector(".BoiteGauche");
//Création plusieurs boutons dans la boite Gauche
let id = 0
for (let i = 0; i < 40; i++) {
    const cercle = document.createElement("p");
    const cadreCercle = document.createElement("div");
    cadreCercle.classList.add("BoxWithOneCercle");
    cercle.classList.add("CercleInBox");
    cercle.id = `ID${i}`
    cadreCercle.append(cercle);
    bigBoxGauche.append(cadreCercle);
}

// put the border of the case cercle blue
const cercleInvisibe = document.querySelectorAll(".CercleInBox");
const caddre =document.querySelectorAll(".BoxWithOneCercle");
const chaque_ligne_list = []
caddre.forEach((leCadre) => {
    if (!(chaque_ligne_list.length === 4)) {
        chaque_ligne_list.push(leCadre);
    }
})
chaque_ligne_list.forEach((leCadre) => {
    leCadre.style.border = "2px solid blue";
})
let positionDansListe = 0
function DonnerCouleurCercle(cercle){
    const LeCadre  = chaque_ligne_list[positionDansListe]
    const cercleInvisible = LeCadre.firstChild
    if (cercleInvisible.style.backgroundColor === "") {
        cercleInvisible.style.backgroundColor = cercle.style.backgroundColor ;
        }
    positionDansListe++
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
boutonCouleur.forEach(function (boutonCercle,index) {
    boutonCercle.style.backgroundColor = liste_couleur[index]

    //Activer lorsque tu click un boutton
    boutonCercle.addEventListener('click', function () {
        boutonCercle.style.opacity = 0.5;
        setTimeout(function () {
            boutonCercle.style.opacity = 1;
            DonnerCouleurCercle(boutonCercle)
        }
            ,1000)
    })
});

