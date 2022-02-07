/*Jorge Gabriel Alvarenga Britez
Ejercicio 3*/
/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/

function mostrar()
{ /*txtIdNombre (nombre de la caja que esta en la pagina)*/
	
	let nombreIngresado;
	
	/*nombreIngresado=txtIdNombre.value; dieñado para chrome, no es estandar de Javascript (No realizarlo porque no es conrrecto, es un punto menos para los profes)*/

	nombreIngresado = document.getElementById("txtIdNombre").value;
	
	alert(nombreIngresado);

}


