/*Jorge gabriel Alvarenga Britez
Tp 2*/
/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let alambre;
    
    largo = parseFloat(document.getElementById("txtIdLargo").value);

    ancho = parseFloat(document.getElementById("txtIdAncho").value);

    alambre = ((largo * 2) + (ancho * 2)) * 3;
    
    alert ("la cantidad de alambre que se van a usar son " + alambre + " metros");

}
function Circulo () 
{
	let radio;
    let perimetro;
    let alambre;
    const pi = 3.141592

    radio = parseFloat(document.getElementById("txtIdRadio").value);

    perimetro = 2 * pi * radio;

    alambre = perimetro * 3;



    alert ("la cantidad de alambre que se van a usar son " + alambre + " metros");
}
function Materiales () 
{
	let largo;
    let ancho;
    let area;
    let cementoTotal;
    let calTotal;
    const cemento = 2;
    const cal = 3;

    largo = parseFloat(document.getElementById("txtIdLargo").value);

    ancho = parseFloat(document.getElementById("txtIdAncho").value);

    area = largo * ancho;

    cementoTotal = area * cemento;

    calTotal = area * cal;

    alert("Se usaran " + cementoTotal + " bolsas de cemento " + "y " + calTotal + " bolsas de cal");

    
}