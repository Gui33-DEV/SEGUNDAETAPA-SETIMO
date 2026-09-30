import { LampadaInteligente } from "./src/models/LampadaInteligente.js";
import { Termostato } from "./src/models/Termostato.js";

const lampada = new LampadaInteligente({
    idRede: "LAMP001",
    nomeLocal: "Sala",
    isLigado: false,
    corHexadecimal: "#FFFFFF",
    nivelBrilho: 80
});

const termostato = new Termostato({
    idRede: "TERM001",
    nomeLocal: "Quarto",
    isLigado: true,
    temperaturaAtual: 22,
    temperaturaAlvo: 24
});

console.log(lampada.getIdRede);
console.log(lampada.getNomeLocal);
console.log(lampada.getIsLigado);
console.log(lampada.getCorHexadecimal);
console.log(lampada.getNivelBrilho);

lampada.alterarEnergia();
lampada.setBrilho(50);

console.log(lampada.getIsLigado);
console.log(lampada.getNivelBrilho);

console.log(termostato.getIdRede);
console.log(termostato.getNomeLocal);
console.log(termostato.getIsLigado);
console.log(termostato.getTemperaturaAtual);
console.log(termostato.getTemperaturaAlvo);

termostato.alterarEnergia();
termostato.setTemperaturaAlvo(26);

console.log(termostato.getIsLigado);
console.log(termostato.getTemperaturaAlvo);