function mostrar()
{

    let planeta 

    planeta = prompt("Ingrese un planeta por favor: ");

    switch(planeta){

        case "tierra":
                
            alert("Aca vivimos");

        break;
        case "mercurio":
        case "venus":

            alert("Aca hace mas calor");
        
        break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "nepturno":
            
            alert("Aca hace mas frio");

        break;
        default:
    }       alert("No es un planeta valido")

}
