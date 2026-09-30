import { Animal } from "./Animal.js";
import { CachorroProps } from "../interface/CachorroProps.js";

export class Cachorro extends Animal<CachorroProps> {

    get getPorte(): string {
        return this.props.porte;
    }

    get getPrecisaTosa(): boolean {
        return this.props.precisaTosa;
    }
}