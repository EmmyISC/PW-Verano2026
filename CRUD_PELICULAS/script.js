

/*
let peliculas = [];
let siguienteId =1;

//declarar las id
const formulario = document.getElementById("formulario");
const id = document.getElementById("id");
const titulo = document.getElementById("titulo");
const director = document.getElementById("director");
const año = document.getElementById("año");
const tabla = document.getElementById("tablaPeliculas");


//metodo


function mostrarPeliculas(){
tabla.innerHTML = "";
peliculas.forEach((peliculas) => {
    tabla.innerHTML += `
    <tr>
        <td>${peliculas.id}</td>
        <td>${peliculas.titulo}</td>
        <td>${peliculas.director}</td>
        <td>${peliculas.año}</td>
        <td>
            <button id="editB"onclick="editar(${peliculas.id})">
                Editar
                </button>
                <button id="deleteB" onclick="eliminar(${peliculas.id})">
                Eliminar
            </button>
        </td>
    </tr>
    `;
});


}//mostrarPeliculas




//evento

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    if(id.value == ""){
        peliculas.push({
            id: siguienteId++,
            titulo: titulo.value,
            director: director.value,
            año: Number(año.value)

        })
    }else{
        const pelicula = peliculas.find(p => p.id == id.value)
        pelicula.titulo = titulo.value;
        pelicula.director = director.value;
        pelicula.año = Number(año.value);
    }

    formulario.reset();
    id.value = "";


    console.log(peliculas)
    mostrarPeliculas();

});

function editar(idPelicula){
    const pelicula = peliculas.find(p => p.id == idPelicula);

    id.value = pelicula.id;
    titulo.value = pelicula.titulo;
    director.value = pelicula.director;
    año.value = pelicula.año;

}

function eliminar(idPelicula){
peliculas = peliculas.filter(p => p.id != idPelicula);
mostrarPeliculas();
}


*/

//---------------------------------------------------------------------------------------
const API_URL = "http://localhost:3000/peliculas";

const formulario = document.getElementById("formulario");
const id = document.getElementById("id");
const titulo = document.getElementById("titulo");
const director = document.getElementById("director");
const año = document.getElementById("año");
const tabla = document.getElementById("tablaPeliculas");

let peliculas = [];

// Inicializar la tabla al cargar
mostrarPeliculas();

async function mostrarPeliculas() {
    try {
        const respuesta = await fetch(API_URL);
        
        if (!respuesta.ok) throw new Error("Error al obtener las películas");
        
        peliculas = await respuesta.json();

        let filasHTML = "";

        peliculas.forEach((pelicula) => {
            filasHTML += `
                <tr>
                    <td>${pelicula.id}</td>
                    <td>${pelicula.titulo}</td>
                    <td>${pelicula.director}</td>
                    <td>${pelicula.año}</td>
                    <td>
                        <button type="button" onclick="editar('${pelicula.id}')">
                            Editar
                        </button>
                        <button type="button" onclick="eliminar('${pelicula.id}')">
                            Eliminar
                        </button>
                    </td>
                </tr>
            `;
        });

        tabla.innerHTML = filasHTML;
    } catch (error) {
        console.error("Error en mostrarPeliculas:", error);
    }
}

formulario.addEventListener("submit", async (e) => {
    e.preventDefault();

    const pelicula = {
        titulo: titulo.value,
        director: director.value,
        año: Number(año.value)
    };

    try {
        if (id.value === "") {
            // POST: Crear nueva película
            await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pelicula)
            });
        } else {
            await fetch(`${API_URL}/${id.value}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pelicula)
            });
        }

        // Limpiar inputs despues de guardar
        formulario.reset();
        id.value = "";

        // Recargar la lista
        await mostrarPeliculas();
    } catch (error) {
        console.error("Error al guardar la película:", error);
    }
});

function editar(idPelicula) {
    const pelicula = peliculas.find(
        (pelicula) => String(pelicula.id) === String(idPelicula)
    );

    if (!pelicula) return;

    id.value = pelicula.id;
    titulo.value = pelicula.titulo;
    director.value = pelicula.director;
    año.value = pelicula.año;
}

async function eliminar(idPelicula) {
    if (!confirm("¿Seguro que deseas eliminar esta película?")) return;

    try {
        await fetch(`${API_URL}/${idPelicula}`, {
            method: "DELETE"
        });

        await mostrarPeliculas();
    } catch (error) {
        console.error("Error al eliminar película:", error);
    }
}