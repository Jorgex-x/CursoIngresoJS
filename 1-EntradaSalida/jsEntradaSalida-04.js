/*Jorge Gabriel Alvarenga Britez
Ejercicio 3*/
/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	/*alert("ok");*/
	let nombre;

	nombre = prompt("ingrese su nombre");

	document.getElementById("txtIdNombre").value = nombre; 

}

