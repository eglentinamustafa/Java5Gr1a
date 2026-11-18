const fletePune=157;
const fletePerStudent=6;

const grupet = parseInt(fletePune/fletePerStudent);

const mbetja = fletePune % fletePerStudent;

const kontrolli =(grupet * fletePerStudent) + mbetja;

console.log("Grupe te plota:",grupet);
console.log("Flete te mbetura:",mbetja);
console.log("Kontrolli (grupet * 6) + mbetja:",kontrolli);
