//Escribe aquí tú código
function trabajo(){
	suma=0;
	pagoPorHora= 5;
	for(var i=1; i<=6; i++){
		var horas = parseInt(prompt("¿Cuántas horas trabajó el día" +i+ "?"));
		suma+= horas;
		var total= (suma*pagoPorHora);
	}
	alert("El monto que gana por las horas trabajadas en la semana es : " +total)
}
trabajo();