/*Jorge gabriel Alvarenga Britez
for 8*/
function mostrar()
{

	let numero;
	let contadorDivisores = 0;

	numero = parseInt(prompt("Ingrese un numero: ")); 

	for(i = 1 ; i <= numero ; i++){

		if(numero % i == 0){

			contadorDivisores++;

		}

	}

	if(contadorDivisores == 2){

		alert("el mumero " + numero + " es primo");

	
	} 
	else{

		alert("el numero " + numero + " no es primo");
	}

	

}//FIN DE LA FUNCIÓN