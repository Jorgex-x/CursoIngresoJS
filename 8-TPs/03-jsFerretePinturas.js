/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let gradosFahrenheit
    let gradosCelsius
    let celsius
    const deFahrenheitACelsius = 5/9 

    gradosCelsius = parseFloat(document.getElementById("txtIdTemperatura").value);

    gradosFahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);

    celsius = (gradosFahrenheit - 32) * deFahrenheitACelsius;

    alert (gradosFahrenheit + "° F son " + celsius.toFixed(2) + "° C" )
}

function CentigradosFahrenheit () 
{
    let gradosFahrenheit
    let gradosCelsius
    let fahrenheit
    const deCelsiusAFahrenheit = 9/5

    gradosCelsius = parseFloat(document.getElementById("txtIdTemperatura").value);

    gradosFahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);

    fahrenheit = (gradosCelsius * deCelsiusAFahrenheit) +32;

    alert (gradosCelsius + "° C son " + fahrenheit.toFixed(2) + " °F")
}
