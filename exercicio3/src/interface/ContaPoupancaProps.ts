import { ContaBancariaProps } from "./ContaBancariaProps.js";

export interface ContaPoupancaProps extends ContaBancariaProps {
    taxaRendimentoMensal: number;
}