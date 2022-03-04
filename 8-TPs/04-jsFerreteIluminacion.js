/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let cantidadLamparita;
    let precioLamparita; 
    let descuento;
    let precioSinDescuento;
    let precioFinal;
    let porcentaje;
    let marca;
    let ingresoBrutos;
    let precioImpuesto;
    const impuesto = 0.1;
    


    //Ingreso por el ID
    cantidadLamparita = parseInt(document.getElementById("txtIdCantidad").value);

    marca = document.getElementById("Marca").value;

    precioLamparita = 35;

    precioSinDescuento = cantidadLamparita * precioLamparita;


    // Caso A   
     if(cantidadLamparita >= 6){
         
        porcentaje = 50

    }
    //Caso B
    if(cantidadLamparita == 5){

        if(marca == "ArgentinaLuz"){

            porcentaje = 40;
        }
        else{
            porcentaje = 30;
        }
    }
    //Caso C
    if(cantidadLamparita == 4){

        if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){

            porcentaje = 25;
        }
        else{

            porcentaje = 20;
        }
    }
    //Caso D    
    if(cantidadLamparita == 3){

        if(marca == "ArgentinaLuz"){

            porcentaje = 15;
        }
        else if(marca == "FelipeLamparas"){

            porcentaje = 10;
        }
        else{

            porcentaje = 5;
        }
    }
    if(cantidadLamparita <= 2){

        porcentaje = 0
    }
     

    descuento = precioSinDescuento * porcentaje / 100;
    precioFinal = precioSinDescuento - descuento;
   

    document.getElementById("txtIdprecioDescuento").value = precioFinal;

    if(precioFinal >= 120){

        ingresoBrutos = (precioFinal * impuesto);

        precioImpuesto = ingresoBrutos + precioFinal;
        
        alert ("IIBB usted pago $" + precioImpuesto + " siendo $" + ingresoBrutos + "")

        document.getElementById("txtIdprecioDescuento").value = precioImpuesto
    }
    
}
