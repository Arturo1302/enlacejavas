function menu() {
    respuesta = prompt("\n=== MENÚ DE API ===\n 1. Personajes\n 2. Caracteristica\n Elige una opción:")

    switch (respuesta) {
        case "1":
            personajes()
            break;
        case "2":
            caracteristica()
            break;
        default:
            alert("Opción no válida. Por favor, elige 1 o 2.")
            menu()
    }
}

function personajes() {
const nombre = prompt("Cual personaje de Rick and Morty quieres conocer?")

fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}`)
  .then((response) => response.json())
  .then((data) => {
    if (data.results) {
    console.log(data.results);
    } else {
      console.log("No se encontraron resultados para el personaje: " + nombre);
    }
  })
}

function caracteristica() {
const id = prompt("Cual caracteristica de Rick and Morty quieres conocer? (Ejemplo: 1 para 'Alive', 2 para 'Dead', etc.)")

fetch(`https://rickandmortyapi.com/api/character/?status=${id}`)
  .then((response) => response.json())
  .then((data) => {
    if (data.results) {
    console.log(data.results);
    } else {
      console.log("No se encontraron resultados para la característica: " + id);
    }
  })
}

menu()