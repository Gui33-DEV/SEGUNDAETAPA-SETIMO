import { Cachorro } from "./src/models/Cachorro.js";
import { Gato } from "./src/models/Gato.js";

const cachorro = new Cachorro({
    nomePaciente: "Rex",
    nomeTutor: "João",
    pesoKG: 15,
    porte: "Médio",
    precisaTosa: true
});

const gato = new Gato({
    nomePaciente: "Mia",
    nomeTutor: "Maria",
    pesoKG: 5,
    viveFIVFelvTestado: true,
    isIndoor: true
});

console.log(cachorro.getNomePaciente);
console.log(cachorro.getNomeTutor);
console.log(cachorro.getPesoKG);
console.log(cachorro.getPorte);
console.log(cachorro.getPrecisaTosa);

console.log(gato.getNomePaciente);
console.log(gato.getNomeTutor);
console.log(gato.getPesoKG);
console.log(gato.getFivFelvTestado);
console.log(gato.getIsIndoor);