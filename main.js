let Electrodomesticos = require('./Electrodomesticos');
let valor = new Electrodomesticos('Nacional', "A");
console.log(valor);

let Televisor = require('./Televisor');
let valor2 = new Televisor('Nacional', "C", 50, true);
console.log(valor2, valor2.calcularPrecioBase());

let Nevera = require('./Nevera');
let valor3 = new Nevera('Internacional', "B", 300);
console.log(valor3, valor3.calcularPrecioBase());