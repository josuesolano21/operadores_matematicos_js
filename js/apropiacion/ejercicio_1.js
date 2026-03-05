// Ejercicio 1: Calculadora de edad
// Descripción: Calcula cuántos años tienes y cuántos días has vivido

console.log('Ejercicio 1 cargado correctamente ✅');

// Obtener el div donde mostraremos el resultado
const resultado = document.getElementById('resultado');

// Crear el contenido HTML
resultado.innerHTML = `
    <h3>Calculadora de Edad</h3>
    <p>Ingresa tu año de nacimiento:</p>
    <input type="number" id="anioNacimiento" placeholder="Ej: 2000" min="1900" max="2025">
    <button id="calcular">Calcular</button>
    <div id="respuesta" style="margin-top: 20px;"></div>
`;

// Obtener elementos
const input = document.getElementById('anioNacimiento');
const boton = document.getElementById('calcular');
const respuesta = document.getElementById('respuesta');

// Función para calcular edad
function calcularEdad() {
    const anioNacimiento = parseInt(input.value);
    
    // Validar que ingresó un número
    if (isNaN(anioNacimiento) || anioNacimiento < 1900 || anioNacimiento > 2025) {
        respuesta.innerHTML = '<p style="color: red;">⚠️ Por favor ingresa un año válido entre 1900 y 2025</p>';
        return;
    }
    
    // Calcular edad
    const anioActual = 2025;
    const edad = anioActual - anioNacimiento;
    const dias = edad * 365;
    
    // Mostrar resultado
    respuesta.innerHTML = `
        <div style="background: #e8f5e9; padding: 15px; border-radius: 8px; border-left: 4px solid #4caf50;">
            <h4 style="color: #2e7d32; margin: 0 0 10px 0;">Resultados:</h4>
            <p><strong>Tienes:</strong> ${edad} años</p>
            <p><strong>Has vivido aproximadamente:</strong> ${dias.toLocaleString()} días</p>
            <p><strong>Eso son:</strong> ${(dias * 24).toLocaleString()} horas 🎉</p>
        </div>
    `;
}

// Agregar evento al botón
boton.addEventListener('click', calcularEdad);

// También calcular al presionar Enter
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calcularEdad();
    }
});