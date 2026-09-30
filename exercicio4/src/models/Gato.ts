import { Animal } from "./Animal.js";
import { GatoProps } from "../interface/GatoProps.js";

export class Gato extends Animal<GatoProps> {

    get getFivFelvTestado(): boolean {
        return this.props.viveFIVFelvTestado;
    }

    get getIsIndoor(): boolean {
        return this.props.isIndoor;
    }
}