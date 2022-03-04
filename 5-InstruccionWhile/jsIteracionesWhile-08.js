/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	//Declaracion de variables 
	let numero;
	let acumuladorPositivo = 0; // Elemento nulo con respecto a la suma
	let acumuladorNegativo = 1; // Elemento nulo con respecto al producto 
	let promedio;
	let contador = 0;
	let seguir = "s"; 
	 
	//Armamos un bucle en el que el usuario ingrese los numero que el quiera 
	do {

		//Pedir lo numero dentro del bucle x
		numero = parseInt(prompt("Ingrese un numero: "));

		//Analizar el signo de cada numero dentro del bucle x
		//Acumulamos el numero en el acumulador correspondiente 

		if(numero >= 0){
			//alert("Positivo");

			acumuladorPositivo = acumuladorPositivo + numero

		}
		else{
			//alert("Negativo")

			acumuladorNegativo = acumuladorNegativo * numero
		}
		seguir = prompt("Quiere ingresar otro numero? ");

		
	} while(seguir == "s");

	//Mostramos resultados ---> fuera del bucle

	document.getElementById("txtIdSuma").value = acumuladorPositivo;
	document.getElementById("txtIdProducto").value = acumuladorNegativo;


	
	
	 


	
	

}