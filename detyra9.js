const pjesmarres = 45;
const pagesaPerPerson = 12;

const salla =180;
const materialet = 95;
const reklama = 60;

let teArdhurat = pjesmarres * pagesaPerPerson;
let shpenzimetTotale = salla + materialet + reklama;
let diferenca = teArdhurat - shpenzimetTotale;

console.log("Te ardhurat:", teArdhurat, "€");
console.log("Shpenzimet totale:", shpenzimetTotale, "€");
console.log("Diferenca:", diferenca, "€");

shpenzimetTotale +=25;

let diferencaRe = teArdhurat - shpenzimetTotale;

console.log("Shpenzimet totale pas shtimit te shpenzimeve te reja:", shpenzimetTotale, "€");
console.log("Diferenca pas shtimit te shpenzimeve te reja:", diferencaRe, "€");