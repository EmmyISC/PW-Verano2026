
/* //APUNTES
var nombre = 'Juan';
let promedio = 9.5;
const edad = 20;

//console.log(nombre);

//IMPRIMIR
if(true){

    var libro = "libro 1";
    let animal ="perro";
    animal = 5;
    console.log(animal);
}

console.log(libro)
*/

//PA SUMAR
/* 
//prompt 
let n1 = parseInt(prompt("Ingresa un número"));
let n2 = Number(prompt("Ingresa un número"));


console.log(n1);
console.log(n2);

let suma = n1+n2;
console.log(suma);
*/

//MULTIPLICACION
/*
let multiplicacion = 10 *5
console.log("Multiplicacion: ",multiplicacion)
*/

//COMPARACIONES
/*
console.log(5 > 3); //true
console.log(5 <= 4); //false

console.log(5=="5"); //true
console.log(5==="5"); //false

console.log(5 != 3); //true
*/

//CONDICIONES
/*
let calificacion = 85;
if (calificacion >= 70){
    console.log("Aprobado");
}else{
console.log("reprobado");

}

let calificacion = 85;
if (calificacion >= 90){
    console.log("Excelente");
}else if(calificacion >=70){
console.log("Aprobado");
}else{
console.log("Reprobado");
}
*/

/*
//CICLOS
for (let i = 1; i <=5; i++){
    console.log("Interacion: ",i);
}

//concatenar
let tabla =5;
for (let i = 1; i <=5; i++){
    console.log(tabla+" x "+i+" = "+tabla*i);
}


let contador = 1;

while (contador <= 5){
    console.log(contador);
    contador++;

}

*/

/*
//FUNCIONES
//SALUDAR
function saludar(nombre){
    console.log("Hola "+nombre);
}
saludar("Emily");

//NUMERO RANDOM
function aleatorio(){

    let n = Math.floor(Math.random()*100)+1;
    console.log(n);
}

aleatorio();
*/

//ARRAYS
/*
let numeros  = [5,2];

console.log(numeros);

numeros.push(20);

console.log(numeros);

console.log(numeros[2]);



numeros.push(20);
numeros.push(8);
numeros.push(53);

for(let i = 0; i <numeros.length; i++){
    console.log(numeros[i]);
}

let persona = {
    nombre: "Juan",
    edad: 20,
    ciudad: "Tepic"
}

console.log(persona);
persona.nombre = "Carlos";
persona.carrera = "ISC"; //la crea
console.log(persona.nombre);
*/

let numeros = [1,2,3,4,5];
numeros.forEach(numero => {
    console.log(numero);

});


let numeros = [1,2,3,4,5];
let dobles = numeros.map(numero => {
   return numero*2;

});
 console.log(dobles);7