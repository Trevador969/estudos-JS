var nome = prompt("digite nome do aluno:")
var prova = prompt("digite a nota da prova:")
var trabalho = prompt("digite a nota do trabalho:")
var caderno = prompt("digite a nota do cardeno:")

prova = parseInt(prova)
trabalho = parseInt(trabalho)
caderno = parseInt(caderno)


var nota = prova + trabalho + caderno
var media = 60




if (nota >= media ) {
    document.write(nome + " foi aprovado com: " + nota)
}
else
{
    document.write("infelizmente " + nome + " foi reprovado.")
}