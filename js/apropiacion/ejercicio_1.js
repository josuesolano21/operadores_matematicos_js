/* 1. El terreno rectangular
Un agricultor tiene un terreno rectangular y conoce su base y su altura en metros.
Quiere calcular tanto el área como el perímetro del terreno para cercarlo y sembrar.
Diseña un programa en el que él pueda obtener ambos valores.*/

let base, altura, area, perimetro;

base = parseFloat(prompt('Ingrese la base: en metros: '))
altura = parseFloat(prompt('Ingrese la altura en metros: '))

area = base * altura
perimetro = 2 *(base + altura)

console.log("El área es:", area)
console.log("El perimetro es:", perimetro)