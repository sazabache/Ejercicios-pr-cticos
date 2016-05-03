//Escribe aquí tú código
function ventas(){
	var ciudad=parseInt(prompt("Ingresa el número de sucursales:"));
	var total=0;
	var result = "";
	for(var i=1;i<=ciudad;i++){
		var porCiudad = 0;
		var tiendas=parseInt(prompt("Ingresa el número de tiendas en cada sucursal:"));
		
		for(var j=1;j<=tiendas;j++){
			var empleados=parseInt(prompt("Ingresa el número de empleados que trabajan en cada tienda:"));
			var suma=0;	
				for(var k=1;k<=empleados;k++){
					var vEmpleado=parseInt(prompt("Ingresa la venta del empleado "+k+" de la tienda "+j+" y sucursal "+i));
					suma+=vEmpleado;
					porCiudad+= suma;
					total+= suma;
				}
					
				result += "Total: "+total+ "Total por ciudad :" +porCiudad+"Total por tienda: "+suma +"\n";
		}

	}
		return result;
}

alert(ventas());