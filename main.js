const inquirer = require("inquirer");

let Electrodomesticos = require('./Electrodomesticos');
let valor = new Electrodomesticos('Nacional', "A");
console.log(valor);

let Televisor = require('./Televisor');
let valor2 = new Televisor('Nacional', "C", 50, true);
console.log(valor2, valor2.calcularPrecioBase());

let Nevera = require('./Nevera');
let valor3 = new Nevera('Internacional', "B", 300);
console.log(valor3, valor3.calcularPrecioBase());

/*
console.log("Seleccione una opcion\n"+
            "1.Electrodomestico general\n"+
            "2.Televisor\n"+
            "3.Nevera");

let opcElectr = "texto"; 
console.log("¿Cuántos electrodomesticos va a ingresar?");
let contElectr = 5;
*/
const obtenerConsumo = async (msg) => {
    const { consumo } = await inquirer.prompt({
      type: "input",
      name: "consumo",
      message: msg,
    });
    return consumo;
  };
  
  const main = async () => {
    const resultado = await obtenerConsumo("Cual es el consumo del electrodomestico");
    console.log(resultado);
  };
  
  main();
