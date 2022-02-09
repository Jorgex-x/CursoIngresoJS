/*Jorge gabriel Alvarenga Britez
Tp 1*/
/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precio1;
    let precio2;
    let precio3;
    let total;

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);

    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);

    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    total = precio1 + precio2 + precio3;

    alert("La suma es " + total);
}
function Promedio () 
{
    let precio1;
    let precio2;
    let precio3;
    let total;

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);

    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);

    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    total = (precio1 + precio2 + precio3) / 3;

    alert("El promedio es  " + total);
	
}
function PrecioFinal () 
{
    let precio1;
    let precio2;
    let precio3;
    let total;

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);

    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);

    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    total = (precio1 + precio2 + precio3)*1.21

    alert("El total con IVA incluido es " + total);
}