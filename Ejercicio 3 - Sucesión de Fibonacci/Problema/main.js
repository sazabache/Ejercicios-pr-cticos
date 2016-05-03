function fibo(){
	var cantidad = parseInt(prompt("Cúantos números de la sucesión quieres ver : "))
	var i= 1;
	var j= 1;
	var k= -1;
	var resultado = " ";
	while(i<= cantidad){
		var serie = j + k;
		k = j;
		j = serie;
		resultado += serie + " ";
		i++;

	}
	alert("La serie fibonacci es : " +resultado);
}

fibo();