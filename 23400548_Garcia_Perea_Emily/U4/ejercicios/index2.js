/*

console.log(typeof (10));

console.log(typeof ("Hola"));

console.log(typeof (true));

console.log(typeof ({}));

*/



//const edad = 17;
/*comparacion sencilla*/
//const mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad"
//console.log(mensaje);



const estudiante = {

    nombre: "Pedroskli",
    direccion: {
        calle: "calle"

    }

}


    //cuando sea null
    //console.log(estudiante.edad ?? "Sin edad")



    //let nombre = "";


    /* compara los valores si ve que es nulo envia el otro*/
    //console.log(nombre || "Invitado")



    /*
    
    let edad = 25;
    
    edad >= 18 && console.log("Puede entrar");
    
    */
/*
let alumno = {
    nombre: "Juan",
    edad: 20,
    carrera: "ISC"

}
delete alumno.edad;
console.log(alumno);
console.log("nombre" in alumno);
console.log("edad" in alumno);

const numeros = [1, 2, 3];

const copia = [...numeros]
//console.log(copia);

const a = [1,2];
const b = [3,4];
const c = [...a, ...b];

console.log(c);

*/


const productos = [
{nombre: "Laptop", precio: 15000, categoria: "Electrónica"},
{nombre: "Celular", precio: 2900, categoria: "Electrónica"},
{nombre: "TV", precio: 6000, categoria: "Electrónica"},
{nombre: "Mortalika", precio: 28000, categoria: "Transporte"}
];

const caros = productos.filter(p => p.precio > 10000);
const nombres = productos.map(p => p.nombre);
const total = productos.reduce((suma, p) => {
    return suma + p.precio;
}, 0)

console.log(caros);
console.log(nombres);
console.log("Total: "+total)
