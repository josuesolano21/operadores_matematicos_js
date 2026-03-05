/* programa que simule el contador de visitas de un sitio web. 
 Se parte de 100 visitas, se agregan 25, se restan 10 por error de registro y finalmente se duplica el total para tener su valor final. */

let Contador_visitas = 100;

Contador_visitas = Contador_visitas + 25;
Contador_visitas = Contador_visitas - 10;
Contador_visitas = Contador_visitas * 2;

console.log("Valor final de visitas capturadas por el contador:", Contador_visitas);