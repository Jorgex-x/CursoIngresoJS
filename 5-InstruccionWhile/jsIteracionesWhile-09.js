/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/

function mostrar()
{	
	// declarar variables
	
	let numeroMaximo;
	let numeroMinimo;
	let numero;
	let seguir = "s";
	let flag = 0;

	do{
		//Pedir numero dentro del bucle:

		numero = parseInt(prompt("Ingrese un numero: "));

		//Debo reconocer si estoy pidiendo por primera vez 
		if(flag == 0){
			//Si es asi inicializo max y min 
			numeroMaximo = numero;

			numeroMinimo = numero;

			flag = 1;
		}
		//Caso contrario me fijo si tengo un nuevo maximo o un nuevo minimo 
		if(numero > numeroMaximo){
			numeroMaximo = numero
		}
		else if(numero < numeroMinimo){
			numeroMinimo = numero
		}

	 //El usuario puede cargar los numeros que quiera
	 	seguir = prompt("Quiere ingresar otro numero? ");

	}while(seguir == "s"); 

	//Muestro información max y min 

	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;

}