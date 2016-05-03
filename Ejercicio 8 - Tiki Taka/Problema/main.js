//Escribe aquí tú código
function tiki(){
	var n = parseInt(prompt("Ingresa el número de ventas del día:"));
	var i = 1;
	var v1 = 0;
	var v2 = 0;
	var v3 = 0;
	var cont1 = 0;
	var cont2 = 0;
	var cont3 = 0;
	var total = 0;
	while(i<=n){
		var venta= parseInt(prompt("Ingresar el valor de la venta " +i+ " : "));
		total += venta;
		if(venta > 1000){
			v1+= venta;
			cont1++;
		} else if(venta > 500 && venta<=1000){
			v2+= venta;
			cont2++;
		} else if(venta <=500){
			v3+= venta;
			cont3++;
		}
		i++;
	}
	
	alert("Las ventas mayores a mil son : "+cont1+ " con un monto de " +v1+ "\n Las ventas mayores a 500 pero menor o igual a mil son : " +cont2+ " con un monto de " +v2+ "\n Las ventas menores  o igual a 500 son : "+cont3+" con un monto de "+v3+".");
}

tiki();