


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


