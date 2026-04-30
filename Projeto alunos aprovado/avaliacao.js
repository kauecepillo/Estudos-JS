const alunos = [
    {
        nome:"Kaue Cepillo",
        nota:9,
        classe:"3ºC",
    },

        {
        nome:"Lilian Lima",
        nota:10,
        classe:"3ºB",
    },

        {
        nome:"Lavinia Cepillo",
        nota:10,
        classe:"3ºD",
    },

        {
        nome:"Jhone Begod",
        nota:5,
        classe:"3ºa",
    },

]

function aprovados(alunos, media) {
    let listaAprovados = [];

   /* for (let i = 0; i < alunos.length; i++) {
      if (alunos[i].nota >= media) {
        listaAprovados.push(alunos[i].nome)
      }
    }*/

    for (const aluno of alunos) {
        if (aluno.nota >= media) {
          listaAprovados.push(aluno.nome)
        }
        
    }

    return listaAprovados;
}

console.log(aprovados(alunos,5));

