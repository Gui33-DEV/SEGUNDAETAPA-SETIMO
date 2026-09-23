import { Veiculo } from "./Veiculo.js";
import { CarroProps } from "../interfaces/CarroProps.js";

export class Carro extends Veiculo<CarroProps> {

    constructor(props: CarroProps) {
        super(props);
    }

    public get getQuantidadeDePortas(): number {
        return this.props.quantidadeDePortas;
    }

    public set setQuantidadeDePortas(qtd: number) {
        this.props.quantidadeDePortas = qtd;
    }
}