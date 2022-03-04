/*Jorge gabriel Alvarenga Britez
Switch 9 */
function mostrar()
{
	let estacionDelAño;
	let destinoViaje; 
	let precioFinal;
	let aumento = 0;
	let descuento = 0;
	const precioViaje = 15000;
	
	estacionDelAño = document.getElementById("txtIdEstacion").value;

	destinoViaje = document.getElementById("txtIdDestino").value; 



	switch(estacionDelAño){
		case "Invierno":
			if(destinoViaje == "Bariloche"){
				aumento = 20
			}
			else if (destinoViaje == "Mar del plata"){
				descuento = 20
			}
			else{
				descuento = 10
			}
			break;

		case "Verano":
			if(destinoViaje == "Mar del plata"){
				aumento = 20
			}
			else if (destinoViaje == "Bariloche"){
				descuento = 20
			}
			else{
				aumento = 10
			}
			break;

		case "Otoño":
		case "Primavera":
			if(destinoViaje == "Cordoba"){

			}
			else{
				aumento = 10
			}
		
		default:

	}

	if(aumento != 0){
		precioFinal = (precioViaje * aumento) /100 + precioViaje;
	}
	else if (descuento != 0){
		precioFinal = precioViaje - (precioViaje * descuento) / 100;

	}
	else{
		precioFinal = precioViaje;

	}

	alert("El precio final a pagar por el viaje es de $" + precioFinal);


}//FIN DE LA FUNCIÓN