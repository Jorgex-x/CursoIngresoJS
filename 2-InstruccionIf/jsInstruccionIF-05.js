/*Jorge gabriel Alvarenga Britez
if 5*/

function mostrar()
{
	let edad;
	
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad < 13 || edad > 17 ){
		alert ("No es adolecente");
	}
	
}//FIN DE LA FUNCIÓN