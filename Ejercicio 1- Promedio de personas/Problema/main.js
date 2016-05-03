function promedio(){
	var cantidad = parseInt(prompt("Ingrese el número de estaturas a promediar: "));
	var i = 1;
	var suma = 0;
	while(i<=cantidad){
		var estatura = parseFloat(prompt("Ingrese la estatura de la persona " +i+ " :"));
		suma += parseFloat(estatura);
		i++;
	}
	var prom = parseFloat(suma/cantidad).toFixed(2);
	alert("La estatura promedio es : " +prom);
}

promedio();