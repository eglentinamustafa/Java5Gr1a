let stoku=120;
let cmimiPerNjesi=6.75;

console.log("Stoku fillestar:" + stoku +"njesi");

stoku -=18;
console.log("Stoku pas shitjes se 18 njesive:" + stoku +"njesi");

stoku -=27;
console.log("Stoku pas shitjes se 27 njesive:" + stoku +"njesi");

stoku +=35;
console.log("Stoku pas furnizimit me 35 njesi:" + stoku +"njesi");

let vleraTotale = stoku *cmimiPerNjesi;
console.log("Vlera totale e stokut :" + vleraTotale.toFixed(2) + " euro");
