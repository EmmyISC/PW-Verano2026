
//ACTIVIDAD 1

//1. Escribe un programa que genere dos números aleatorios y que escriba en consola 
// qué números se generaron. Además, el programa deberá señalar si los números 
// son iguales, y en caso de que no lo sean, mostrará cuál es el mayor.  
console.log("Ejercicio 1----");

function random(){

    let n1 = Math.floor(Math.random()*100)+1;
    console.log("Numero random 1: "+n1);
    let n2 = Math.floor(Math.random()*100)+1;
    console.log("Numero random 2: "+n2);

if(n1 === n2){
console.log("Los numeros son iguales");

}else if(n1 > n2){

console.log("Los numeros son diferentes y el mayor es el No.Random 1: "+n1)
}else{
console.log("Los numeros son diferentes y el mayor es el No.Random 2: "+n2)
}


}//random

random();


//2. Escribe un programa que genere de forma continua números entre el 0 y el 5, 
// hasta que salga el número 0.

console.log("Ejercicio 2----");

function randomCero(){
do{

    numero = Math.floor(Math.random()*6);
    console.log("Numero: "+numero);

}while(numero !== 0);
console.log("Salió cero!");

}//randomCero

randomCero();



//3. Elabora un programa que genere un número aleatorio entre el número 2 y el 10, 
// y después escriba la tabla de multiplicar del número generado.

console.log("Ejercicio 3----")

function randomTabla(){

    let n1 = Math.floor(Math.random()*9)+2;
    console.log("Tabla de multiplicar del: "+n1);

    
    for (let i = 1; i <=10; i++){
    console.log(n1+" x "+i+" = "+n1*i);
}
}

randomTabla();

//4. Escribe un programa que solicite 10 números entre el 1 y el 100, y determine
//  cuántos de esos números son pares y cuántos impares.
console.log("Ejercicio 4----")

function ParesImpares(){

 let pares = 0;
let impares = 0;
const totalNumeros = 10;


for (let i = 1; i <= totalNumeros; i++) {
    let numero;
    
    while (true) {
        let entrada = prompt("Número "+i+" Ingresa un número entre 1 y 100: ");
        numero = parseInt(entrada);

        if (!isNaN(numero) && numero >= 1 && numero <= 100) {
            break; 
        } else {
            console.log("Entrada inválida. Por favor, ingresa solo números enteros entre 1 y 100.");
        }
    }

    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}


console.log("Cantidad de numeros pares: "+pares);
console.log("Cantidad de numeros impares: "+impares);


}//ParesImpares


ParesImpares();


//5. Una tienda departamental paga a sus empleados el 10% de comisión a quienes 
// vendan menos de $10,000.00 en artículos; mientras que otorga un 15% a quienes 
// vendan $10,000.00 o más. Diseña un programa que solicite un número entre $5,000 
// y $30,000 (validar entrada hasta que sea número válido) en ventas para un empleado,
//  y muestre en pantalla cuánto dinero va a recibir por comisión.


console.log("Ejercicio 5----");

function tienda(){

let ventas = 0;

while (true) {
    let entrada = prompt("Por favor, ingresa el total de ventas del empleado entre $5,000 y $30,000: ");
    ventas = parseFloat(entrada);


    if (!isNaN(ventas) && ventas >= 5000 && ventas <= 30000) {
        break; 
    } else {
        console.log("Entrada inválida. Debes ingresar un número entre 5000 y 30000.");
    }
}

let porcentaje = 0;

if (ventas < 10000) {
    porcentaje = 0.10; 
} else {
    porcentaje = 0.15; 
}

const dinero = ventas * porcentaje;

console.log("Total de ventas:" +ventas);
console.log("Porcentaje aplicado:" +porcentaje * 100)
console.log("Total a recibir por comisión:" +dinero);


}//tienda

tienda();