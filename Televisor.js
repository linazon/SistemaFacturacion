let Electrodomesticos = require('./Electrodomesticos');

module.exports = class Televisor extends Electrodomesticos{
    constructor(opcProcedencia, consumo, tamaño, sintotizador){
        super(opcProcedencia, consumo);
        this.tamaño = tamaño;
        this.sintotizador = sintotizador;
    }

    adicionarPulgadas(){
         let resul = (this.tamaño > 40)?this.precio*0.3:0;
        return resul;
    }

    adicionarSintetizador(){
        let resul2 = (this.sintotizador)?250000:0;
        return resul2;
    }


    calcularPrecioBase(){
        super.calcularPrecioBase();
        return this.precio+this.adicionarSintetizador()+ this.adicionarPulgadas();
    }
}


