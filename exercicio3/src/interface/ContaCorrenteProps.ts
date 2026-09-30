import { ContaBancariaProps } from "./ContaBancariaProps.js";

export interface ContaCorrenteProps extends ContaBancariaProps {
    limiteChequeEspecial: number;
}