import { DispositivoProps } from "../interface/DispositivoProps.js";

export class Dispositivo<T extends DispositivoProps> {

    protected props: T;

    constructor(props: T) {
        this.props = props;
    }

    get getIdRede(): string {
        return this.props.idRede;
    }

    get getNomeLocal(): string {
        return this.props.nomeLocal;
    }

    get getIsLigado(): boolean {
        return this.props.isLigado;
    }

    alterarEnergia(): void {
        this.props.isLigado = !this.props.isLigado;
    }
}