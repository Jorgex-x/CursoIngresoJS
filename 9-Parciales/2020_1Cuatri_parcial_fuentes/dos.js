function mostrar()
{
  let producto;
  let precio;
  let cantidad;
  let acumuldorCemento = 0;
  let acumuladorCal = 0;
  let acumuladorArena = 0;
  let contadorCemento = 0;
  let contadorArena = 0;
  let contadorCal = 0;
  let porcentaje;
  let seguir = "s"; 
  let precioDesc;
  let precioFinal;
  let mayorTipo;

  
  
  do{

    producto = prompt("Ingrese el producto (arena, cal, cemento): ");

    while(producto != "arena" && producto != "cal" && producto != "cemento"){

      producto = prompt("Error. ingrese el producto (arena, cal, cemento): ");

    }

    precio = parseFloat(prompt("Ingrese el precio del producto (mayor a 0):"));

    while(precio <= 0 || isNaN(precio)){

      precio = parseFloat(prompt("Error. ingrese el precio del producto (mayor a 0):"));

    }

    cantidad = parseInt(prompt("Ingrese la cantida :"));

    while(cantidad <= 0 || isNaN(cantidad)){

      cantidad = parseInt(prompt("Error. ingrese la cantida :"));

    }
    

	 	seguir = prompt("Quiere ingresar otro producto ? ");

  }while(seguir == "s");

  switch(producto){
    case "arena":

      acumuladorArena += cantidad;
      contadorArena++;

      break;
    case "cal":

      acumuladorCal += cantidad;
      contadorCal++;


      break;
    case "cemento":

      acumuldorCemento += cantidad;
      contadorCemento++;

      break;
    default:
  }

  //Para los descuentos 
  if(cantidad >= 10){

    porcentaje = 15;

  }
  else if(cantidad >= 30){

    porcentaje =25;

  }
  else{

    porcentaje = 0

  }

  // Para saber cual es el mayor tipo 
  
  if(acumuladorArena > acumuladorCal && acumuladorArena > acumuldorCemento){

		mayorTipo = "arena";

	}
	else if(acumuladorCal > acumuldorCemento && acumuladorCal >= acumuladorArena){

		mayorTipo = "cal";

	}
	else{

		mayorTipo = "cemento";
	

	} 
 
  precioFinal = precio * cantidad;

  precioDesc = precioFinal - (precioFinal * porcentaje) / 100;

  

  alert("A- El importe total a pagar , bruto sin descuento es: " + "$"  + precioFinal);

  if(porcentaje != 0){

    alert("B- El importe total a pagar con descuento es: " + "$" + precioDesc);

  }

  alert("C- El produto con mas cantidad es: " + mayorTipo);
  
}
