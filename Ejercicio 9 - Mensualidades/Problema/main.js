//Escribe aquí tú código
function mensualidades(){
 var pago = 10;
 var montoTotal =0;
 var mensual= 0;
 var resultado =" ";
 for(var i=1; i<=20; i++){
 	
 	mensual += pago;
 	pago= mensual;
 	resultado += mensual + " ";
 	montoTotal += mensual; 

 }
 alert("Cada mes pagó" + resultado+ " Y el monto que pagó en 20 meses fue : " +montoTotal);
}
mensualidades();