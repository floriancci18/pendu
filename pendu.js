// Récupérer un mot (Tristan)
let mots =
[
  "Bouygues",
  "Bonjour",
  "Bien",
  "Accueil",
  "Assassin",
  "Aspirateur",
  "Lieutenant",
  "Dimanche",
  "Ordinateur",
  "Bonnet",
  "Lunettes",
  "Stylo",
  "Dentier",
  "Pantalon",
  "Usine",
  "Aisselle",
  "Laboratoire",
  "Cachalot",
  "Petunia",
  "Serviette",
  "Présentation",
  "Élite",
  "Lithopedion",
  "Apitoyer",
  "Biloute",
  "Babache",
  "Dracher",
  "Braire",
  "Éponge",
  "Écouteurs",
  "Représenteraient",
  "Tesla",
  "Usurpation",
  "Xylophone",
  "Ipséité",
  "Cocaïnomane",
  "Phéromones",
  "Kenza",
  "Wakfu",
  "Sopalin",
  "ketchup",
  "pain-au-chocolat",
  "Api",
  "asynchrone",
  "JaiEnvieDeMeTuer"
];

let motADeviner = mots[Math.floor(Math.random() * mots.length)].toLowerCase();
console.log(motADeviner);

// Avoir le nom des joueurs dans un tableau (Stéphane)

let joueurs = [["Jimmy",0],["Hugo",0],["Romain",0],["Imane",0],["Nicolas",0],["Tristan",0],["Imran",0],["Tanguy",0],["Ilan",0],["Florian",0],["Stephane",0]];
//console.log(joueurs[1][0]);


// Sélectionner un joueur en aléatoire (Romain)
function tirerJoueur(){
    let hasard = Math.floor(Math.random(joueurs.length) * joueurs.length);
    let joueur_courant = joueurs[hasard][0];
    return joueur_courant;
}
//console.log(tirerJoueur())

// Afficher le mot caché (Ilan)
let idMot = document.querySelector('#mot');
let tableauTiret = [];
function cacherMot(motF){
  for(let i=0 ; i<motF.length ; i++){
    if(i<(motF.length-1)){
      tableauTiret.push('_') 
    }else{
      tableauTiret.push('_') 
    } 
  }
  let nombreDeTirets = tableauTiret.join(" ");
  return nombreDeTirets;
}
idMot.textContent = cacherMot(motADeviner);

// Voir si la lettre saisie est bien dans le mot (Nicolas & Imane)
let letters = document.getElementById("letter");

letters.addEventListener('keyup', function(){
    let lettre = letters.value;
	let tableau = motADeviner.split('');
    console.log(lettre);
    let mottrouver = false;
	for( let i=0 ; i<= tableau.length; i++ ){
		if (tableau[i] == lettre){
			  tableauTiret[i] = lettre;
        mottrouver = true;  
		} 
	}
	idMot.textContent = tableauTiret.join('');
})
// Afficher le pendu en fonction des erreurs (Imran)
let erreur = 0
function afficherErreur(){

} ;
// Faire le reset du jeu (Tanguy)

// Vérifier si la partie est terminé (Hugo)

// Afficher le tableau des joueurs en fonction de leur score (Jimmy)
