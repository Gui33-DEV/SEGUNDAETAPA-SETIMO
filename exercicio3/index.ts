import { ContaCorrente } from "./src/models/ContaCorrente.js";
import { ContaPoupanca } from "./src/models/ContaPoupanca.js";

const contaCorrente = new ContaCorrente({
    numeroConta: "12345",
    titular: "Guilherme",
    saldo: 1000,
    limiteChequeEspecial: 500
});

const contaPoupanca = new ContaPoupanca({
    numeroConta: "67890",
    titular: "Guilherme",
    saldo: 2000,
    taxaRendimentoMensal: 0.5
});

console.log(contaCorrente.getNumeroConta);
console.log(contaCorrente.getTitular);
console.log(contaCorrente.getSaldo);
console.log(contaCorrente.getLimiteChequeEspecial);

console.log(contaPoupanca.getNumeroConta);
console.log(contaPoupanca.getTitular);
console.log(contaPoupanca.getSaldo);
console.log(contaPoupanca.getTaxaRendimentoMensal);