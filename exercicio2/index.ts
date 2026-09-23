import { Carro } from "./src/models/Carro.js";
import { Moto } from "./src/models/Moto.js";

const carro = new Carro({
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2024,
    quantidadeDePortas: 4
});

const moto = new Moto({
    marca: "Honda",
    modelo: "CB 500",
    ano: 2023,
    cilindradas: 500
});

console.log("=== CARRO ===");
console.log("Marca:", carro.getMarca);
console.log("Modelo:", carro.getModelo);
console.log("Ano:", carro.getAno);
console.log("Portas:", carro.getQuantidadeDePortas);

console.log("\n=== MOTO ===");
console.log("Marca:", moto.getMarca);
console.log("Modelo:", moto.getModelo);
console.log("Ano:", moto.getAno);
console.log("Cilindradas:", moto.getCilindradas);

carro.setMarca = "Volkswagen";
carro.setQuantidadeDePortas = 2;

moto.setMarca = "Yamaha";
moto.setCilindradas = 600;

console.log("\n=== DEPOIS DA ALTERAÇÃO ===");
console.log("Carro:", carro.getMarca, carro.getQuantidadeDePortas);
console.log("Moto:", moto.getMarca, moto.getCilindradas);