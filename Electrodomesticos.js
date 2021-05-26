module.exports = class Electrodomesticos{
    constructor(opcProcedencia, consumo){
        this.consumo= consumo;
        this.opcProcedencia = opcProcedencia;
        this.precio = this.obtenerValorConsumo()+this.obtenerValorProcedencia();
        //this.precio =
    }

    obtenerValorProcedencia(){
        var resultado =  this.opcProcedencia == 'Nacional' ? 250_000 : 350_000;
        return resultado;
    }

    obtenerValorConsumo(){
        switch (this.consumo){
            case "A":
                return  450_000;
               // break;
            case "B":
                return 350_000;
               // break;
            case "C":
                return 250_000;
               // break;
        }
    }

    calcularPrecioBase(){
        return this.precio;
    }

}



