let eHena=95;
let eMarta=80;
let eMerkura=115;

let gjithsejMinutat= eHena+eMarta+eMerkura;

let kohaNeOre=gjithsejMinutat/60;

let minutatEMbetura=gjithsejMinutat%60;

console.log("Gjithsej minuta:" + gjithsejMinutat);
console.log("Koha në orë(numer dhjetor):" + kohaNeOre.toFixed(2));
console.log("Minutat e mbetura(pas ndarjes me 60):" + minutatEMbetura);
