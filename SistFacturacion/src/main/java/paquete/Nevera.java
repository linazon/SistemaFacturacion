package paquete;

public class Nevera extends Electrodomestico{
    private double valorCapacidad;
    private double porcCapacidad;

    public Nevera( String opcImportado, Consumo consumo,double valorCapacidad){
        super(opcImportado, consumo);
        this.valorCapacidad = valorCapacidad;

    }

    public double getPorcCapacidad() {
        return porcCapacidad;
    }

    public void setPorcCapacidad(double porcCapacidad) {
        this.porcCapacidad = porcCapacidad;
    }

    public double getValorCapacidad() {
        return valorCapacidad;
    }

    public void setValorCapacidad(double valorCapacidad) {
        this.valorCapacidad = valorCapacidad;
    }

    public void calcularporcCapacidad(){
        if (getValorCapacidad()>120) {
            setPorcCapacidad((((getValorCapacidad() - 120) * 5) / 1000));
        } else{
            setPorcCapacidad(0);
        }
    }

    public double calcularCapacidad(){
        calcularporcCapacidad();
        setValorCapacidad(getTotalBase()*getPorcCapacidad());
        return getValorCapacidad();
    }
    @Override
    public  double calcularPrecioBase(){
        return getTotalBase()+calcularCapacidad();
    }




    }

