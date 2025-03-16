
// PASO 1: Crear array para guardar los nombres de los amigos 
let amigos = [];

// PASO 2: Función para agregar amigos
function agregarAmigo() {
    let input = document.getElementById("amigo"); // Capturar el nombre ingresado
    let nombre = input.value.trim(); // Eliminar espacios en blanco al inicio y al final
    let nombreLowerCase = nombre.toLowerCase(); // Convertir a minúsculas para evitar duplicados
    let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; // Expresión regular para permitir solo letras y espacios

    if (nombre === "") { // Validar que el campo no esté vacío
        alert("POR FAVOR, INSERTE UN NOMBRE");
        return;
    }

    if (!regex.test(nombre)) { // Verificar que el nombre solo contenga letras y espacios
        alert("El nombre solo puede contener letras y espacios.");
        return;
    }

    if (amigos.includes(nombreLowerCase)) { // Verificar si el nombre ya existe en la lista
        alert("Este nombre ya ha sido ingresado.");
        return;
    }

    amigos.push(nombreLowerCase); // Agregar el nombre al array
    mostrarListaAmigos();
    input.value = ""; // Limpiar el input
}

// Función para mostrar la lista de amigos
function mostrarListaAmigos() {
    let lista = document.getElementById("listaAmigos"); // Obtener la lista de amigos
    lista.innerHTML = ""; // Limpiar la lista antes de actualizarla

    for (let i = 0; i < amigos.length; i++) { // Recorrer el array de amigos
        let li = document.createElement("li"); // Crear un nuevo elemento <li>
        li.textContent = amigos[i]; // Asignar el nombre del amigo al <li>
        lista.appendChild(li); // Agregar el <li> a la lista en HTML
    }
}

// PASO 3: Función para sortear un amigo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) { // Validar que haya nombres en la lista
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Obtener índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio]; // Obtener nombre sorteado

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado} es el amigo secreto</li>`; // Mostrar resultado
}
