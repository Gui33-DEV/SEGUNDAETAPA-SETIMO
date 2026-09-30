import { AnimalProps } from "../interface/AnimalProps.js";

export class Animal<T extends AnimalProps> {

    protected props: T;

    constructor(props: T) {
        this.props = props;
    }

    get getNomePaciente(): string {
        return this.props.nomePaciente;
    }

    get getNomeTutor(): string {
        return this.props.nomeTutor;
    }

    get getPesoKG(): number {
        return this.props.pesoKG;
    }

    set setPeso(peso: number) {
        this.props.pesoKG = peso;
    }
}