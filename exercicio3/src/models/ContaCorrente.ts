import { ContaBancaria } from "./ContaBancaria.js";
import { ContaCorrenteProps } from "../interface/ContaCorrenteProps.js";

export class ContaCorrente extends ContaBancaria<ContaCorrenteProps> {

    get getLimiteChequeEspecial(): number {
        return this.props.limiteChequeEspecial;
    }
}