/*Jorge gabriel Alvarenga Britez
Switch 10 */
function mostrar()
{
	let estacionDelAño
	let destinoViaje

	estacionDelAño = document.getElementById("txtIdEstacion").value;

	destinoViaje = document.getElementById("txtIdDestino").value; 

	switch(estacionDelAño){
		case "Invierno":
			if(destinoViaje == "Bariloche"){
				alert("Se viaja !!!");
			}
			else{
				alert("No se viaja !!!");
			}
			break;
		case "Verano":
			if(destinoViaje == "Mar del plata" || destinoViaje == "Cataratas"){
				alert("Se viaja !!!");
			}
			else{
				alert("No se viaja !!!");
			}
			break;
		case "Otoño":
			alert("Se viaja !!!");
			
		break;
		case "Primavera":
			if(destinoViaje == "Bariloche"){
				alert("No se viaja !!!");
			}
			else{
				alert("Se viaja !!!");	
			}
			
			
	}
}//FIN DE LA FUNCIÓN