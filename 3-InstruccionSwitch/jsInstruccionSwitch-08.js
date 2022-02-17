/*Jorge gabriel Alvarenga Britez
Switch 8 */
function mostrar()
{
	let destino
	
	destino = document.getElementById("txtIdDestino").value; 

	switch(destino){
		case "Bariloche":
			alert("En el destino hace frio.");
		break;
		case "Cataratas":
			alert("En el destino hace calor.");
		break;
		case "Mar del plata":
			alert("En el destino hace calor.");
		break;
		case "Ushuaia":
			alert("En el destino hace frio.");
		break;
		default:
	}
}