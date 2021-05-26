let InvElectrodomesticos = require('./InvElectrodomesticos');

let arregloElectro = [];

let Electrodomesticos = require('./Electrodomesticos');
let Televisor = require('./Televisor');
let Nevera = require('./Nevera');

module.exports  = agregar = (objeto, consumo, procedencia, cantidad) => {
    const element = new objeto(consumo, procedencia);
    invElect = new InvElectrodomesticos(cantidad, element);
    arregloElectro.push(invElect)
  /*for (let index = 0; index < cantidad; index++) {
    const element = new objeto(consumo, procedencia);
    arregloElectro.push(element)
  }*/
}
agregar(Electrodomesticos, "A", "Importado",3);
agregar(Nevera, "A", "Importado",3);

console.log(arregloElectro);