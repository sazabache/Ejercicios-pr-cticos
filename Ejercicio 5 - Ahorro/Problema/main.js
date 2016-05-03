//Escribe aquí tú código
function ahorro(){
	var suma = 0;
	for(var i=1; i<=12 ; i++){
		var deposito = parseInt(prompt("¿Cuánto depositaste el mes " +i+ " ?"));
		suma += deposito;
	}
	alert("La cantidad ahorrada durante el año es : " +suma);
}

ahorro();