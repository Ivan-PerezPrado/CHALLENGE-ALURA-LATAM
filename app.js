//PASO 1 crear array para guardar los nombres de los amigos 
let amigos = [];
/*PASO 2 crear f para agragarlos
a-capturar el valor de ingreso
b-comprobar que no este vacio
c-mostrar los nombre en la lista
d-limpiar el input*/
function agregarAmigo() {
    let input = document.getElementById("amigo"); //capturar nombre
    let nombre = input.value.trim();//obtener el valor ingresado

    if (nombre === "") {//validar que se ingrese un nombre
        alert("POR FAVOR, INSERTE UN NOMBRE");
        return;
    }
    amigos.push(nombre); //Para agregar los nombres a la lista
    mostrarListaAmigos();
    input.value = ""; //Limpiar el input
}

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

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); //Obtener índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio]; //Obtener nombre sorteado

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado} es el amigo secreto </li>`; //Mostrar resultado
}
