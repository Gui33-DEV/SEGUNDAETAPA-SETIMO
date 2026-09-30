import { ContaBancariaProps } from "../interface/ContaBancariaProps.js";

export class ContaBancaria<T extends ContaBancariaProps> {

    protected props: T;

    constructor(props: T) {
        this.props = props;
    }

    get getNumeroConta(): string {
        return this.props.numeroConta;
    }

    get getTitular(): string {
        return this.props.titular;
    }

    get getSaldo(): number {
        return this.props.saldo;
    }
}