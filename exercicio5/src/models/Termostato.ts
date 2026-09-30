import { Dispositivo } from "./Dispositivo.js";
import { TermostatoProps } from "../interface/TermostatoProps.js";

export class Termostato extends Dispositivo<TermostatoProps> {

    get getTemperaturaAtual(): number {
        return this.props.temperaturaAtual;
    }

    get getTemperaturaAlvo(): number {
        return this.props.temperaturaAlvo;
    }

    setTemperaturaAlvo(temperatura: number): void {
        this.props.temperaturaAlvo = temperatura;
    }
}