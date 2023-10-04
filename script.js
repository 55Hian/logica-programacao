// declarar variavel:
// const - declara constante (não muda valor)
// let - declara variaveis em escopo local
// var - declara variaveis em escopo global
console.log("Testando o console")
// problema: receber 3 notas de um aluno e calcular a média; apresentar a média; e o resultado (se aprovado ou não aprovado)
console.log("\n")


let nota1;
let nota2;
let nota3;

let mediaminima = 5;

let media;

console.log("Inicio do processo.");

nota1 = parseInt(prompt("Digite a primeira nota do aluno"));git 
nota2 = parseInt(prompt("Digite a segunda nota do aluno"));
nota3 = parseInt(prompt("Digite a terceira nota do aluno"));

media = (nota1 + nota2 + nota3)/3;

console.log("\n")
console.log("\t A primeira nota do aluno é: " + nota1)
console.log("\t A segunda nota do aluno é: " + nota2)
console.log("\t A terceira nota do aluno é: " + nota3)
console.log("\n")
console.log ("\t A nota média do aluno é: " + media);
console.log("\n")

if (media < mediaminima){
    console.log("\t O aluno está reprovado!");
} else {
    console.log("\t O aluno está aprovado!");
}
console.log("\n")
console.log("Fim do processo.")