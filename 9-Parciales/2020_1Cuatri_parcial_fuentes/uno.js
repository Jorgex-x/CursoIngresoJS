
function mostrar()
{	
	//Declaro las variables 
	let producto;
	let precio; 
	let cantidad;
	let marca;
	let fabricante;
	let acumuladorAlcohol = 0;
	let acumuladorBarbijo = 0;
	let	acumuladorJabon = 0;
	let contadorAlcohol = 0;
	let contadorBarbijo = 0;
	let	contadorJabon = 0;
	let precioAlcoholBarato;
	let cantidadAlcoholBarato;
	let fabricanteAlcoholBarato;
	let promedioDeCompra;
	let mayorTipo; 
	let banderaAlcohol = 0;
	let mensajeAlcohol = "No se compraron alcoholes";
	let mensajeB;
	let mensajeJabon;

	
	//Creo un bucle de 5 repeticiones 

	for( i = 1 ; i <= 5 ; i++ ){

		//Valido todos los datos solicitados dentro del bucle 

		producto = prompt("Ingrese sus productos por favor (barbijo, jabon, alcohol): ");
		
		while(producto != "barbijo" && producto != "jabon" && producto != "alcohol"){
			
			producto = prompt("Producto invalido. ingrese sus productos por favor (barbijo, jabon, alcohol) : ");
		}
		precio = parseFloat(prompt("Ingrese el precio del producto por favor (100 - 300): "));

		while(precio < 100 || precio > 300 || isNaN(precio)){

			precio = parseInt(prompt("Precio invalido. ingrese el precio del producto por favor (100 - 300): "));
		}
		cantidad = parseInt(prompt("Ingrese la cantidad max 1000"));

		while(cantidad > 1000 || isNaN(cantidad)){

			cantidad = parseInt(prompt("Cantidad invalida. ingrese la cantidad (max 1000) : "));
		}
		marca = prompt("ingrese marca");
		fabricante = prompt("Ingrese fabricante");

		switch(producto){
			case "alcohol":

				acumuladorAlcohol += cantidad;
				contadorAlcohol++;

				if(banderaAlcohol == 0 || precioAlcoholBarato > precio){
					precioAlcoholBarato = precio;
					cantidadAlcoholBarato = cantidad;
					fabricanteAlcoholBarato = fabricante;
					banderaAlcohol = 1;
				}



				break;
			case "barbijo":

				acumuladorBarbijo += cantidad;
				contadorBarbijo++;


				break;
			case "jabon":

				acumuladorJabon += cantidad;
				contadorJabon++;

				break;
			default:
		}


	}
	 
	if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon){

		mayorTipo = "alcohol";
		promedioDeCompra = acumuladorAlcohol / contadorAlcohol;

	}
	else if(acumuladorBarbijo > acumuladorJabon && acumuladorBarbijo >= acumuladorAlcohol){

		mayorTipo = "barbijo";
		promedioDeCompra = acumuladorBarbijo / contadorBarbijo;

	}
	else{

		mayorTipo = "jabon";
		promedioDeCompra = acumuladorJabon / contadorJabon;

	}
		
	if(banderaAlcohol == 1){

		mensajeAlcohol = "A - Fabricante de alcohol barato: " + fabricanteAlcoholBarato + " Cantidad: " + cantidadAlcoholBarato + " Precio: " + precioAlcoholBarato;
	}

	mensajeB = "B- Tipo con mas unidades: " + mayorTipo + " Promedio: " + promedioDeCompra;
	mensajeJabon = " C- Unidades de jabones: " + acumuladorJabon; 

	alert(mensajeAlcohol);
	alert( mensajeB + mensajeJabon);



}
