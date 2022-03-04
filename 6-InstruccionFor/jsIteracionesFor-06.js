/*Jorge gabriel Alvarenga Britez
for 6*/
function mostrar()
{
	//Declarar las variables 

	let numero;
	let contadorPares = 0;

	//Pido un numero 
	numero = parseInt(prompt("Ingrese un numero: ")); 

	//Tengo que hacer una variable tome los valores desde el 1 hasta el numero ingresado

	for(i = 1 ; i <= numero ; i++){

		//Para cada uno de los valores que tome la variable analizo la paridad 

		//Cuando encuentro un par lo cuento y lo muestro 

		if(i % 2 == 0){

			contadorPares++;

		}

	}

	//Una vez que analice todos los valores muestro la cantidad de pares 

	alert("Pares encontrados: " + contadorPares);





}//FIN DE LA FUNCIÓN