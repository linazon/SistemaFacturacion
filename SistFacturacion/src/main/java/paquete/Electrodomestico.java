package paquete;

public class Electrodomestico {
    private  double valImportado;
    private String opcImportado;
    private double totalBase;

    public Electrodomestico( String opcImportado, Consumo consumo) {
        this.opcImportado = opcImportado;
        this.valImportado = transformarAValorProcedencia();
        this.totalBase = consumo.getConsumo()+ getValImportado();

    }

    public double getTotalBase() {
        return totalBase;
    }

    public void setTotalBase(double totalBase) {
        this.totalBase = totalBase;
    }

    public String getOpcImportado() {
        return opcImportado;
    }

    public double getValImportado() {
        return valImportado;
    }

    public enum Consumo {
        A(450000D), B(350000D), C(250000D);
        private final double consumo;

        Consumo(double consumo) { this.consumo = consumo; }

        public double getConsumo() { return consumo; }
    }

    public double transformarAValorProcedencia(){
        // tenario creado
        double result = (getOpcImportado().equals("Nacional") ) ? 250_000 : 350_000;
        return result;
        /*switch (getOpcImportado()){
            case "Nacional":
                setValImportado(250000);
                break;
            case "Importado":
                setValImportado(350000);
            break;
        }*/
    }

    public  double calcularPrecioBase(){
        return getTotalBase();
    }
}
