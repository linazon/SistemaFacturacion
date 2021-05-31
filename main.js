const inquirer = require("inquirer");

let Electrodomesticos = require('./Electrodomesticos');
let valor = new Electrodomesticos('Nacional', "A");
//console.log(valor);

let Televisor = require('./Televisor');
let valor2 = new Televisor('Nacional', "C", 50, true);
//console.log(valor2, valor2.calcularPrecioBase());

let Nevera = require('./Nevera');
let valor3 = new Nevera('Internacional', "B", 300);
//console.log(valor3, valor3.calcularPrecioBase());

/*
console.log("Seleccione una opcion\n"+
            "1.Electrodomestico general\n"+
            "2.Televisor\n"+
            "3.Nevera");

let opcElectr = "texto"; 
console.log("¿Cuántos electrodomesticos va a ingresar?");
let contElectr = 5;
*/
let arregloElectro = [];
let agregar = require('./Inventario');
//agregar(Electrodomesticos, "A", "Importado",3,arregloElectro);
//console.log(arregloElectro)


// ejemplo para 
const obtenerConsumo = async (msg) => {
    const { consumo } = await inquirer.prompt({
      type: "input",
      name: "consumo",
      message: msg,
    });
    return consumo;
  };
    
  const cargarInventario= async() => {
    let cantidadElectrodomestico = await obtenerConsumo("Ingrese la cantidad de electrodomesticos a agregar");
    let procedencia = await obtenerConsumo("ingresa la procedencia\n 1. Internacional 0.Nacional");
    let tipoElectrodimestico = await obtenerConsumo("ingresa el tipo de electrodomestico \n 1. Electrodomestico general\n 2. Nevera\n 3.Televisor");
    
    let consumo;
    var ciclo = true;
    while (ciclo){
      cantidadElectrodomestico = cantidadElectrodomestico *1;
      consumo = await obtenerConsumo("Seleccione un consumo○\n A, B, C");
      switch(consumo.toUpperCase()){
        case "A":  
        case "B":  
        case "C": return ciclo = false; 
        default:
          console.log("Ingrese la opcion correcta");
          continue;
      }
   
    }
    console.log(consumo);
  }

  const main = async () => {
    //const resultado = await obtenerConsumo("Cual es el consumo del electrodomestico");
    //const procedencia = await obtenerConsumo("ingresa la procedencia");
    cargarInventario();
    agregar(Electrodomesticos, "A", "Importado",3,arregloElectro);
   // console.log(arregloElectro) 
   // console.log(resultado + "prueba" + procedencia);
  };
  
  main();