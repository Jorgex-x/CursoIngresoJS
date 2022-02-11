function mostrar()
{

	let nota 
	
	nota = Math.round(Math.random() * 9 +1);

	if (nota >= 9){
		alert ("Excelente nota: " + nota);
	}
	else{
		
		if (nota < 4){
			alert ("Vamos, la proxima se puede: " + nota);
		}
		else{
			alert("Aprobo: " + nota);
		}
		
	}
	

}