let Electrodomesticos = require('./Electrodomesticos');

module.exports = class Nevera extends Electrodomesticos{
    constructor(opcProcedencia, consumo, valorCapacidad){
        super(opcProcedencia, consumo);
        this.valorCapacidad = valorCapacidad;
        //this.porceCapacidad = porceCapacidad;
    }

    calcularporcCapacidad(){
        if (this.valorCapacidad>120) {
            this.porceCapacidad =(((this.valorCapacidad - 120) * 5) / 1000);
        } else{
            this.porceCapacidad = 0;
        }
    }

    calcularCapacidad(){
        this.calcularporcCapacidad();
        this.valorCapacidad=this.precio*this.porceCapacidad;
        return this.valorCapacidad;
    }

    calcularPrecioBase(){
        super.calcularPrecioBase();
        return this.precio+this.calcularCapacidad();
    }
}