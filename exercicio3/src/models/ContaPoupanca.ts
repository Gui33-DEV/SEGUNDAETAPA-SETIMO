import { ContaBancaria } from "./ContaBancaria.js";
import { ContaPoupancaProps } from "../interface/ContaPoupancaProps.js";

export class ContaPoupanca extends ContaBancaria<ContaPoupancaProps> {

    get getTaxaRendimentoMensal(): number {
        return this.props.taxaRendimentoMensal;
    }
}