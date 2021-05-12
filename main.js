//Partie1
//1.1
let exo11 = document.querySelector('h1');
exo11.innerHTML = "Les attributs class et id"
console.log(exo11.innerHTML);

//1.2
let exo12 = document.querySelector('h2');
exo12.innerHTML = "Exercice 2 partie A";
console.log(exo12.innerHTML);

//1.3
let exo13 = document.querySelectorAll('h2')[1];
exo13.innerHTML = "Exercice 2 partie B"
console.log(exo13);

//1.4
let exo14 = document.querySelector('p')
exo14.innerHTML = "L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b> ";
console.log(exo14);

//1.5
let exo15 = document.querySelectorAll('p')[1];
exo15.innerHTML = "La manipulation de l'attribut Style peut-être une <i>solution</i> rapide";
console.log(exo15);

//Partie 2.1
//1.6
exo11.setAttribute("id","bigTitle");
console.log(exo11);

//1.7
let exo17 = document.querySelector('div').setAttribute("class","container");

//1.8
document.querySelectorAll('h2').forEach(e =>{
    e.setAttribute("class","title");
    console.log(e);
})

//1.9
document.querySelectorAll('p').forEach(e =>{
    e.setAttribute("class","text");
    console.log(e);
})

//Partie 2.2
//1.10
document.querySelector('section').classList = "margin-bottom border-black padding";
console.log(document.querySelector('section'));

//1.11
document.querySelectorAll('section')[1].classList = "margin-bottom border-black padding";
console.log(document.querySelectorAll('section')[1]);

//1.12
document.querySelectorAll('section')[1].querySelector('div').setAttribute("style", "background-color:blue; border:orange; border-width:2px; border-style:solid; height:20px; width:20px;")
console.log(document.querySelectorAll('section')[1].querySelector('div'));