/*Jorge gabriel Alvarenga Britez
Switch 7 */
function mostrar()
{
	let destino
	
	destino = document.getElementById("txtIdDestino").value; 

	switch(destino){
		case "Bariloche":
			alert("Se encuentra en el Oeste.");
		break;
		case "Cataratas":
			alert("Se encuentra en el norte");
		break;
		case "Mar del plata":
			alert("Se encuentra en el este.");
		break;
		case "Ushuaia":
			alert("Se encuentra en el sur");
		break;
		default:
	}

}//FIN DE LA FUNCIÓN