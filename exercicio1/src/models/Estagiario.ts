import { PessoaFisica } from "./PessoaFisica.js";
import { EstagiarioProps } from "../interface/EstagiarioProps.js";

export class Estagiario extends PessoaFisica<EstagiarioProps> {

    constructor(props: EstagiarioProps) {
        super(props);
    }

    public get getInstituicaoEnsino(): string {
        return this.props.instituicaoEnsino;
    }

    public get getBolsaAuxilio(): number {
        return this.props.bolsaAuxilio;
    }

    public set setInstituicaoEnsino(novaInstituicao: string) {
        this.props.instituicaoEnsino = novaInstituicao;
    }

    public set setBolsaAuxilio(valor: number) {
        this.props.bolsaAuxilio = valor;
    }
}