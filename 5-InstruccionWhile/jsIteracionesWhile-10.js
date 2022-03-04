/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos. x
2-Suma de los positivos. x
3-Cantidad de positivos. x
4-Cantidad de negativos. x
5-Cantidad de ceros.     x
6-Cantidad de números pares. x
7-Promedio de positivos. x
8-Promedios de negativos. x
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let numero;
	let acumuladorNegativo = 0;
	let acumuladorPositivo = 0;
	let contadorPositivo = 0; 
	let contadorNegativo = 0;
	let contadorCeros = 0;
	let ContadorPares = 0; 
	let promedioPositivo = 0;
	let promedioNegativo = 0;
	let diferencia;
	let seguir = "s";

	
	do{
		//Pedir numero dentro del bucle 

		numero = parseInt(prompt("Ingrese un numero: "));

		//Analizar el signo y actuar en cosecuencia 
		if(numero > 0){
			//alert("Positivo");
			acumuladorPositivo += numero;
			contadorPositivo++;

		}
		else if (numero < 0){
			//alert("Negativo");
			acumuladorNegativo += numero; 
			contadorNegativo++;
			
		}
		else{
			//alert("Cero")
			contadorCeros++;
		}
		//Analizar si el numero es par 
		if(numero % 2 == 0){
			ContadorPares++;
		}
		
	 //El usuario puede cargar los numeros que quiera
	 	seguir = prompt("Quiere ingresar otro numero? ");
	}while (seguir == "s");

	// Hacer los calculos que necesitamos con los datos conseguidos en el bucle 

	if(contadorPositivo > 0){
		promedioPositivo = acumuladorPositivo / contadorPositivo; 
 
	}
	
	if(contadorNegativo > 0){
		promedioNegativo = acumuladorNegativo / contadorNegativo;
	}

	diferencia = contadorPositivo - contadorNegativo; 

	//Nuestros resultados 

	console.log("1- Suma de los negativos: " + acumuladorNegativo);
	console.log("2- Suma de los positivos: " + acumuladorPositivo);
	console.log("3- Cantidad de positivos: " + contadorPositivo);
	console.log("4- Cantidad de negativos: " + contadorNegativo);
	console.log("5- Cantidad de ceros: " + contadorCeros);
	console.log("6- Cantidad de pares: " + ContadorPares);
	console.log("7- Promedio de positivos: " + promedioPositivo);
	console.log("8- Promedio de negativos: " + promedioNegativo);
	console.log("9- Diferencia: " + diferencia);
}