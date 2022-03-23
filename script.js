function print(){
	var dateToday = new Date();
	var dateTodayDia = ("0" + dateToday.getDate()).slice(-2);
	var dateTodayMes = ("0" + (dateToday.getMonth() + 1)).slice(-2)
	var dateTodayAno = dateToday.getFullYear();
	var dateOne = document.getElementById("diaDoEvento");
	var diaDeHoje = (dateTodayAno + '-' + dateTodayMes + '-' + dateTodayDia);

	console.log(dateOne.value);
	console.log(diaDeHoje);

	if (dateOne.value < diaDeHoje) {    
		alert("Não foi possível seguir com o processo de cadastro!");    
	}
	else {    
		alert("A data escolhida é valida.");    
	}
} 