package paquete;


public class Main {

    public static void main(String[] args) {
                    Electrodomestico electrodomestico = new Electrodomestico("Importado", Electrodomestico.Consumo.B);
                    System.out.println("Electrodomestico: "+electrodomestico.calcularPrecioBase());

                    Nevera nevera = new Nevera("Nacional", Electrodomestico.Consumo.B,200);
                    System.out.println("Nevera: "+nevera.calcularPrecioBase());

                    Televisor televisor = new Televisor("Nacional", Electrodomestico.Consumo.C,50,true);
                    System.out.println("Televisor: "+televisor.calcularPrecioBase());
    }
}
