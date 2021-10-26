'use strict'


let colors = [];
colors.push('green', 'red', 'yellow');



for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
};

colors.forEach(element => console.log(element));


// Hoeveel regels neemt mijn for loop en mijn while loop in beslag?

// 3


// Hoeveel regels neemt mijn forEach method in beslag?

// 1

// Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. 
// een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?

// ik vind for loop makkelijker (volgens mij is het beter te begrijpen). 
// Maar ik ga forEach method ook gebruiken. (natuurlijk!)



// Kun je een array method gebruiken op een object? Het antwoord is nee.

// Nee

// Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt 
// console.loggen met een loop: Looping through the properties of an object.
// Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?

// let obj = {
//     naam: "Dasha",
//     age: 39,
//     hobby: "fotograaf",
//     kinderen: 1,
//     man: 1,

// };

// obj.forEach(element => console.log(obj.element))


// Nee, het werkt niet