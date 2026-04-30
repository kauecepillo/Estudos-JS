function calculo() {
  let n1 = Number(prompt("Digite o primeiro numero:"));
  let n2 = Number(prompt("Digite o segundo numero"));
  let comparacao;
  let soma;
  let comp10;
  let comp20;

  n1 === n2 ? (comparacao = "iguais") : (comparacao = "diferentes");

  soma = n1 + n2;

  soma < 10 ? (comp10 = "menor") : (comp10 = "maior");
  soma < 20 ? (comp20 = "menor") : (comp20 = "maior");

  alert(
    `Os numeros ${n1} e ${n2} são ${comparacao}. Sua soma é ${soma}, que é ${comp10} que 10 e ${comp20} que 20`,
  );

  function novoCalculo() {
    let opcao = prompt("Deseja fazer uma nova operação?\n 1- Sim\n 2- Não");

    if (opcao == 1) {
      calculo();
    } else if (opcao == 2) {
      alert("Até mais");
    } else {
      alert("Digite uma opção válida");
      novoCalculo();
    }
  }

  novoCalculo();
}

calculo();
