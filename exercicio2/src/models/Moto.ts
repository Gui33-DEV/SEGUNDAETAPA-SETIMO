import { Veiculo } from "./Veiculo.js";
import { MotoProps } from "../interfaces/MotoProps.js";

export class Moto extends Veiculo<MotoProps> {

    constructor(props: MotoProps) {
        super(props);
    }

    public get getCilindradas(): number {
        return this.props.cilindradas;
    }

    public set setCilindradas(cc: number) {
        this.props.cilindradas = cc;
    }
}