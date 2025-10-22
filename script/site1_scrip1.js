const boutonCouleur = document.querySelectorAll(".boutonCouleur");
const bigBoxGauche = document.querySelector(".BoiteGauche");
const btnEffacer = document.querySelector("#btnEffacer");
const btnValider = document.querySelector("#btnValider");
const btnNouvellePartie = document.querySelector("#btnNouvellePartie");

let firstValidation = false
let valider = false
const liste_couleur_choisi = []
let positionDansListe = 0
btnValider.style.opacity = 0.5;


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
    'wheat',
    'brown']


function ChoisirCarteDeviner(){
    for (let i = 0; i < 4; i++) {
        while (true){
            let random_index = Math.floor(Math.random() * liste_couleur.length);
            let couleur = liste_couleur[random_index];
            const count = liste_couleur_choisi.filter(element => element === couleur).length;
            if (count < 1){
                liste_couleur_choisi.push(couleur);
                break;
            }
        }
    }
    console.log(liste_couleur_choisi)

}
ChoisirCarteDeviner();

//Création plusieurs boutons dans la boite Gauche
for (let i = 0; i < 44; i++) {
    const cercle = document.createElement("p");
    const cadreCercle = document.createElement("div");
    cadreCercle.classList.add("BoxWithOneCercle");
    cadreCercle.id = `id${i}`
    cercle.classList.add("CercleInBox");
    cercle.id = `ID${i}`
    cadreCercle.append(cercle);
    bigBoxGauche.append(cadreCercle);
}

// put the border of the case cercle blue
const cercleInvisibe = document.querySelectorAll(".CercleInBox");
const caddre =document.querySelectorAll(".BoxWithOneCercle");

const chaque_ligne_list = []
const liste_ligne_passer = []
function PasserLigner(){
    if (!(firstValidation)){
        caddre.forEach((leCadre) => {
            if (!(chaque_ligne_list.length === 4)) {
                chaque_ligne_list.push(leCadre);
                liste_ligne_passer.push(leCadre);
            }
        })
    }
    else{
        chaque_ligne_list.length = 0;
        for (let i = 0; i < caddre.length; i++) {
            const leCadre = caddre[i];

             if(liste_ligne_passer.length < i + 1 ){
                chaque_ligne_list.push(leCadre);
                liste_ligne_passer.push(leCadre);
            }
            if (chaque_ligne_list.length === 4){
                positionDansListe  = 0
                BackgroundBlue();
                break;
            }
        }
    }
}
PasserLigner();

function BackgroundBlue(){
    chaque_ligne_list.forEach((leCadre) => {
        leCadre.style.border = "3px solid blue";
    })
}
BackgroundBlue();


function DonnerCouleurCercle(cercle){
    if (positionDansListe === 4){
        return;
    }
    const LeCadre  = chaque_ligne_list[positionDansListe]
    const cercleInvisible = LeCadre.firstChild
    if (cercleInvisible.style.backgroundColor === "") {
        cercleInvisible.style.backgroundColor = cercle.style.backgroundColor ;
    }
    btnValiderOpaciter();
    positionDansListe++
}
function btnValiderOpaciter(){
    const lastCare = chaque_ligne_list[chaque_ligne_list.length - 1]
    const cadreChildd = lastCare.firstChild

    if(!(cadreChildd.style.backgroundColor === "")) {
        valider = true
        btnValider.style.opacity = 1;
    }

}

// Assigner les couleurs aux boutons
boutonCouleur.forEach(function (boutonCercle,index) {
    boutonCercle.style.backgroundColor = liste_couleur[index]

    //Activer lorsque tu click un boutton
    boutonCercle.addEventListener('click', function () {
        boutonCercle.style.opacity = 0.5;
        setTimeout(function () {
            boutonCercle.style.opacity = 1;
            DonnerCouleurCercle(boutonCercle)
        }
            ,50)
    })
});

btnEffacer.addEventListener("click", function () {
    chaque_ligne_list.forEach(function (leCadre) {
        const cercleInvisible = leCadre.firstChild
        if (!(cercleInvisible.style.backgroundColor === "")) {
            cercleInvisible.style.backgroundColor = "";
        }
    })
})
btnValider.addEventListener("click", function () {
    if(!(valider)){
        return;
    }

    firstValidation = true
    chaque_ligne_list.forEach(function(element,index){
        const cercle = element.firstChild
        const count = liste_couleur_choisi.filter(element => element === cercle.style.backgroundColor).length;

        if (cercle.style.backgroundColor === liste_couleur_choisi[index]) {
            element.style.border = "3px solid lightgreen"
        }
        else if(count === 1){
            element.style.border = "3px solid yellow"
        }
    })
    btnValider.style.opacity = 0.5;
    valider = false
    PasserLigner();
})

btnNouvellePartie.addEventListener("click", function () {
    liste_ligne_passer.forEach(function (leCadre) {
        leCadre.style.border = "3px dashed white"
        leCadre.firstChild.style.backgroundColor = ""
    })
    liste_couleur_choisi.length = 0;
    liste_ligne_passer.length = 0;
    chaque_ligne_list.length = 0;

    positionDansListe = 0
    btnValider.style.opacity = 0.5;
    firstValidation = false
    valider = false


    PasserLigner();
    ChoisirCarteDeviner();
    BackgroundBlue();

})