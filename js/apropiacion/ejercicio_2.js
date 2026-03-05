// Calcular el pro medio de 3 notas para saber el resultado de sus evaluaciones calculandolo a partir de 3 valores numéricos

let Nota1 = parseFloat(prompt("Ingrese la primer nota: "));
let Nota2 = parseFloat(prompt("Ingrese la segunda nota: "));
let Nota3 = parseFloat(prompt("Ingrese la tercer nota: "));

let Promedio = (Nota1 + Nota2 + Nota3) / 3;

console.log("Notas:", Nota1, Nota2, Nota3);
console.log("Promedio:", Promedio);