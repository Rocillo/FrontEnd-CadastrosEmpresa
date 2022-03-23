//Com o do:
let listaDeEvento = ["Helena", "Chico", "Mário"];
let quantidadeDePessoas = listaDeEvento.length;
let inicio = 0;

//-----------------------------------------------//
if (quantidadeDePessoas < 100) {
	listaDeEvento.push("João");
	console.log(listaDeEvento);
} else {
	console.log("Não é possível inserir mais pessoas nesse evento");
}
//Com o while:
while (inicio < quantidadeDePessoas) {
	console.log(listaDeEvento[inicio]);
	inicio++;
}