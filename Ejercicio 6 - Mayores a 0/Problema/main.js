//Escribe aquí tú código
function mayor(){
	var cantidad = parseInt(prompt("¿Cuántas cantidades se analizarán? : "));
	var i=1;
	var menor = 0;
	var mayor = 0;
	while(i<=cantidad){
		var num = parseInt(prompt("Escribe el número" +i + ":"));
		if(num<=0){
			menor++;
		} else {
			mayor++;
		}
		i++;
	}
	alert("Hay " +menor+ " números menores o iguales a 0 y " +mayor+ " números mayores que 0.");
}

mayor();