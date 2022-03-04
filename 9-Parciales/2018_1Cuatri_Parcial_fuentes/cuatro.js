function mostrar()
{

    let numero1;
    let numero2;
    let resta;
    let suma;
    
    numero1 = parseFloat(prompt("Ingrese el primer numero por favor: ")); 
   
    numero2 = parseFloat(prompt("Ingrese el segundo numero por favor: "));  

    if(numero1 == numero2){
        
        alert("El primero numero igresado " + numero1 + " es igual al segundo numero ingresado " + numero2); 
    }
    else if(numero1 > numero2){

        resta = numero1 - numero2; 

        alert(resta);
    }
    else{

        suma = numero1 + numero2;
        
        alert(suma);
    }

    if(suma > 10);

    alert("La suma es " + numero1 + " + " + numero2 + " y supero el 10");

}
