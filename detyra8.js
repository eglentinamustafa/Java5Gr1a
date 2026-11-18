const cmimi1Tekst='19.90';
const cmimi2Tekst='8.50';

const sasia1 = 2;
const sasia2 = 3;

const cmimi1=Number(cmimi1Tekst);
const cmimi2=Number(cmimi2Tekst);

const shuma1=cmimi1*sasia1;
const shuma2=cmimi2*sasia2;
const shumaPorosis=shuma1 + shuma2;

const shumaFinaleNum = shumaPorosis * 1.10;

const shumaFormatizuar = shumaFinaleNum.toFixed(2);

console.log("Totali artikulli 1:",shuma1, "€");
console.log("Totali artikulli 2:",shuma2, "€");
console.log("Shuma e porosis:",shumaPorosis, "€");
console.log("Shuma finale(me 10% sherbim):",shumaFormatizuar, "€");
console.log("Tipi i vleres formatizuar:",typeof shumaFormatizuar);