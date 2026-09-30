import { Dispositivo } from "./Dispositivo.js";
import { LampadaInteligenteProps } from "../interface/LampadaInteligenteProps.js";

export class LampadaInteligente extends Dispositivo<LampadaInteligenteProps> {

    get getCorHexadecimal(): string {
        return this.props.corHexadecimal;
    }

    get getNivelBrilho(): number {
        return this.props.nivelBrilho;
    }

    setBrilho(nivel: number): void {
        this.props.nivelBrilho = nivel;
    }
}