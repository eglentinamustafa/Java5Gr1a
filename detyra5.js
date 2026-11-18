const vlera1='25';
const vlera2 ='17';
const vlera3='8';

let rezultati = vlera1 + vlera2 + vlera3;

console.log("Pa konvertim:",rezultati);

let numr1 = Number(vlera1);
let numr2 = Number(vlera2);
let numr3 = Number(vlera3);

let shuma = numr1 + numr2 + numr3;
let mesatarja = shuma/3;

console.log("Shuma:",shuma);
console.log("Mesatarja:" ,+ mesatarja.toFixed(2));

console.log("Tipi i shumes:",typeof shuma);
console.log("Tipi i mesatares:",typeof mesatarja);
