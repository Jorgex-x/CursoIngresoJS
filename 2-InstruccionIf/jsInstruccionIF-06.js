/*Jorge gabriel Alvarenga Britez
if 6 */

function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad < 13){
		alert ("Es un niño");
	}
	else{

		if (edad >= 13 && edad <= 17){
			alert("Es un adolecente");
	
		}
		else{
			if (edad >= 18){
				alert("Es un adultos");
			}
		}
	}

}
	



