/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numero;
	let acumulador = 0;
	let promedio;
	let contador = 0;
	let seguir = "s"; 

	while(seguir == "s"){
		numero = parseInt(prompt("ingrese un numero: "));
		acumulador = acumulador + numero;
		contador++; 

		seguir = prompt("Quiere seguir ingresando numeros");
	}
	

	promedio = acumulador / contador;
	document.getElementById("txtIdSuma").value = acumulador
	document.getElementById("txtIdPromedio").value = promedio

}//FIN DE LA FUNCIÓN