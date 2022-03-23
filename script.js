function submit(){
	var list = document.getElementById('users');
	var username = document.getElementById('nomeDaPessoa').value;
	var entrada = document.createElement('li');
	var idade = document.getElementById('idadeDaPessoa').value;
	entrada.appendChild(document.createTextNode(username + ', ' + idade + ' anos'));
	var dateToday = new Date();
	var dateTodayDia = ("0" + dateToday.getDate()).slice(-2);
	var dateTodayMes = ("0" + (dateToday.getMonth() + 1)).slice(-2)
	var dateTodayAno = dateToday.getFullYear();
	var dateOne = document.getElementById("diaDoEvento");
	var diaDeHoje = (dateTodayAno + '-' + dateTodayMes + '-' + dateTodayDia);
	//	console.log(dateOne.value);
	//	console.log(diaDeHoje);

		if (dateOne.value <= diaDeHoje) {    
			alert("Data inválida!");    
		}

		else if (username == "") {
        	alert("Digite um nome!");
        	return false;
    	}

		else if (idade < 18){
			alert("Não é possível cadastrar pessoas com menos de 18 anos!");
		}

		else if (list.length > 10) {

			alert("Capacidade máxima de participantes!")

		}

		else{
			list.appendChild(entrada);
		}
	return false;
}

