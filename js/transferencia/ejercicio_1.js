/*Ejercico 1: Calculadora de gastos de viaje
Un grupo de amigos realiza un viaje con los siguientes costos fijos:
• Transporte: $120.000
• Alojamiento: $200.000
• Alimentación: $150.000
El total debe dividirse en partes iguales entre 4 personas. Además, cada persona
entregará $130.000 y se debe calcular el sobrante.
Requerimiento:
• Usa constantes para los costos y la cantidad de personas.
• Usa variables para el total, el aporte individual y el sobrante.
*/

const transporte = 120000;
const alojamiento = 200000;
const alimentacion = 150000;
const personas = 4;

let total = transporte + alojamiento + alimentacion;
let costoPorPersona = total / personas;

let aporteIndividual = 130000;
let totalRecaudado = aporteIndividual * personas;

let sobrante = totalRecaudado - total;

console.log("Total del viaje:", total)
console.log("Cada persona debe pagar:", costoPorPersona)
console.log("Total recaudado:", totalRecaudado)
console.log("Sobrante:", sobrante)