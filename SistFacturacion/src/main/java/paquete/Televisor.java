package paquete;

public class Televisor extends  Electrodomestico{
private double tamaño;
private boolean sintonizador;

    public Televisor(String opcImportado, Consumo consumo, double tamaño, boolean sintonizador){
        super(opcImportado, consumo);
        this.tamaño = tamaño;
        this.sintonizador = sintonizador;
    }

    public double getTamaño() {
        return tamaño;
    }

    public void setTamaño(double tamaño) {
        this.tamaño = tamaño;
    }

    public boolean isSintonizador() {
        return sintonizador;
    }

    public void setSintonizador(boolean sintonizador) {
        this.sintonizador = sintonizador;
    }

    public  double adicionarPulgadas(){
        if(getTamaño()>40){
           return getTotalBase()*0.3;
        }
        return 0;
    }

    public double adicionarSintetizdor(){
        if(isSintonizador()){
           return 250000;
        }
        return 0;
    }

@Override
    public  double calcularPrecioBase(){
        return getTotalBase() +adicionarPulgadas()+adicionarSintetizdor();
    }
}
