// declarar variavel:
// const - declara constante (não muda valor)
// let - declara variaveis em escopo local
// var - declara variaveis em escopo global
console.log("Testando o console")
// problema: receber 3 notas de um aluno e calcular a média; apresentar a média; e o resultado (se aprovado ou não aprovado)
console.log("\n")



function mediaAluno() {
    
    console.log("Inicio do processo.");

// declara variavel
    let nota1;
    let nota2;
    let nota3;
    let media;
    let mediaminima = 5;

// Busca dados nos inputs do html
    nota1 = parseInt(document.getElementById("nota1").value);
    nota2 = parseInt(document.getElementById("nota2").value);
    nota3 = parseInt(document.getElementById("nota3").value);

// calcula média
    media = (nota1 + nota2 + nota3)/3;

// mostra notas e média

    // no console
    console.log("\n")
    console.log("\t A primeira nota do aluno é: " + nota1)
    console.log("\t A segunda nota do aluno é: " + nota2)
    console.log("\t A terceira nota do aluno é: " + nota3)
    console.log("\n")
    
    // na pagina
    document.getElementById('resultado').innerHTML =  '<br>' + 'A média do aluno é: ' + media + '<br>';

    // no console
    console.log ("\t A nota média do aluno é: " + media);
    console.log("\n")

    // logica que define se o aluno está aprovado, reprovado ou se vai para exame
    if (media < mediaminima){
        console.log("\t O aluno está reprovado!");  // mostra no console
        document.getElementById('resultado').innerHTML +=  "O aluno está reprovado!";     // mostra na pagina
    } else if(media > mediaminima){
        console.log("\t O aluno está aprovado!");   // mostra no console
        document.getElementById('resultado').innerHTML += "O aluno está aprovado!";     // mostra na pagina
    } else{
        console.log("\t Aluno precisa realizar exame");     // mostra no console
        document.getElementById('resultado').innerHTML += "Aluno precisa realizar exame";     // mostra na pagina
    }

    console.log("\n")
    console.log("Fim do processo.")
}

mediaAluno();