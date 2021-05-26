module.exports =class InvElectrodomesticos{
    constructor(cantidad,electrodomestico){
        this.cantidad = cantidad;
        this.electrodomestico = electrodomestico;
    }

    get getCantidad(){
        return this.cantidad;
    }
    get getElectrodomestico(){
        return this.electrodomestico;
    }
    set setCantidad(cantidad){
        this.cantidad=cantidad;
    }


}