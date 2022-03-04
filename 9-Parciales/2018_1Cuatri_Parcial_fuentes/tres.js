function mostrar()
{

    let precio;
    let decuento; 
    let precioFinal 

    precio = parseFloat(prompt("Ingrese el precio del producto por favor: "));

    decuento = parseInt(prompt("Ingrese el porcentaje de descuento por favor: "));

    precioFinal = precio - (precio * decuento) / 100 ;

    document.getElementById("elPrecioFinal").value = precioFinal; 

}
