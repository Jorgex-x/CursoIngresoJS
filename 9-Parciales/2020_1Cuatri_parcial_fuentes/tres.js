function mostrar()
{
	let nombre;
	let sexo;	
	let edad;
	let	estadoCivil;
	let seguir = "s";

	do{

		nombre = prompt("Ingrese su nombre: ");

		edad = parseInt(prompt("Ingrese su edad:" ));

		while(edad <= 0 || isNaN(edad)){

			edad = parseInt(prompt("Error. ingrese su edad:" ));

		}

		

		seguir = prompt("Quiere ingresar otro pasajero ? ");

	}while(seguir == "s");
}
