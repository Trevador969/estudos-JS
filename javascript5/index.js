//expressao logica: professor postar media final de um aluno informando se ele foi aprovado ou reprovado

 var media = 60
 var nome = prompt("digite o nome do aluno(a):")
 var nota = prompt("deigite a nota do aluno(a):")

 if (nota >= media) {
    document.write(nome + " foi aprovado com: " + nota + " pontos.")
 }
 else
 {
    document.write("infelizmente " + nome + " foi reprovado, nota final: "  + nota + " pontos." )
 }
