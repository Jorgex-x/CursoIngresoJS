/*Jorge gabriel Alvarenga Britez
for 7*/
function mostrar()
{

	//Declarar las variables 

	let numero;
	let contadorDivisores = 0;

	//Pido un numero 
	numero = parseInt(prompt("Ingrese un numero: ")); 

	//Tengo que hacer una variable tome los valores desde el 1 hasta el numero ingresado

	for(i = 1 ; i <= numero ; i++){

		//Para cada uno de los valores que tome la variable analizo si es un divisor 

		//Cuando encuentro un divisor lo cuento y lo muestro 

		if(numero % i == 0){

			contadorDivisores++;

		}

	}

	//Una vez que analice todos los valores muestro la cantidad de Divisores 

	alert("Divisores encontrados: " + contadorDivisores);



}//FIN DE LA FUNCIÓN