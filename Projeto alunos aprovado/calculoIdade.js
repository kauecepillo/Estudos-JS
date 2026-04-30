function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Kaue',
	idade: 40,
};

const pessoa2 = {
	nome: 'Lilian',
	idade: 45,
};

const pessoa3 = {
	nome: 'Lavinia',
	idade: 9,
};

//console.log(calculaIdade.call(pessoa1, 5));

console.log(calculaIdade.apply(pessoa1, [5]))

