let cmimiProduktit1=25;
let cmimiProduktit2=24;

const sasiaProduktit1=2;
const sasiaProduktit2=1;

let cmimiParaZbritjes= (cmimiProduktit1*sasiaProduktit1) + (cmimiProduktit2*sasiaProduktit2);
let shumaZbritjes= (cmimiProduktit1*sasiaProduktit1) * 0.15;

let cmimiPasZbritjes= cmimiParaZbritjes - shumaZbritjes;

let cmimiPerfundimtar=cmimiPasZbritjes + kostoTransportit;
cmimiPerfundimtar +=4.0;

console.log("Cmimi i produktit 1:",cmimiProduktit1);
console.log("Cmimi i produktit 2:",cmimiProduktit2);
console.log("Cmimi para zbritjes:",cmimiParaZbritjes);
console.log("Shuma e zbritjes:",shumaZbritjes);
console.log("Cmimi pas zbritjes:",cmimiPasZbritjes);
console.log("Cmimi perfundimtar:",cmimiPerfundimtar);
