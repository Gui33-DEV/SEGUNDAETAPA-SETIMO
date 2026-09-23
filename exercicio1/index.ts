import { Estagiario } from "./exercicio1/src/models/Estagiario.js";

const estagiario = new Estagiario({
    cpf: "111.222.333-44",
    nome: "Carlos Silva",
    telefone: "11999999999",
    email: "carlos@email.com",
    dataNascimento: "2005-05-15",
    instituicaoEnsino: "SENAI",
    bolsaAuxilio: 800
});

console.log("CPF:", estagiario.getCpf);
console.log("Nome:", estagiario.getNome);
console.log("Telefone:", estagiario.getTelefone);
console.log("E-mail:", estagiario.getEmail);
console.log("Data de nascimento:", estagiario.getDataNascimento);
console.log("Instituição de ensino:", estagiario.getInstituicaoEnsino);
console.log("Bolsa auxílio:", estagiario.getBolsaAuxilio);

estagiario.setNome = "João Silva";
estagiario.setBolsaAuxilio = 1000;

console.log("\nDepois da alteração:");
console.log("Nome:", estagiario.getNome);
console.log("Bolsa auxílio:", estagiario.getBolsaAuxilio);