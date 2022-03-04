function mostrar()
{
    // Asigno variables 

    let nota;
    let sexo;
    let contadorMasculino = 0;
    let contadorFemenino = 0;
    let notaBaja = 0;
    let notaAlta = 0;
    let bandera = 0;
    let acumuladorNotas = 0;
    let acumuladorSexo = 0;
    let promedioNota;

    //Pido los datos por promt

    for( i = 1 ; i <= 5 ; i++ ){ 

        nota = prompt("Ingrese su nota por favor: ");

        while(nota <= 0 || nota > 10){

            nota = prompt("Ingrese una nota de 1 a 10: ");

            acumuladorNotas++;
        }
        sexo = prompt("Ingrese un sexo F o M: ");

        while(!(sexo == "f" || sexo == "F" || sexo == "m" || sexo == "M")){

            sexo = prompt("Ingrese un sexo valido por favor: ");

            acumuladorSexo++;
        }
        

            

        
    }

    
        
    
    
        
    
    

        
    
      



}
