
/*
1.- Elabora un programa que contenga una función llamada potencia y reciba dos parámetros;
 base y exponente. La función deberá retornar la potencia de acuerdo con los parámetros recibidos.
 El cálculo de la potencia se realizará por medio de un ciclo for.

 Salida: BASE elevado a POTENCIA es RESULTADO
*/


function potencia(base , exponente){
let resultado = 1;

    for(let i =0; i< exponente; i++){
    resultado *=base;

    return resultado;

    }

let base = 4;
let exponente =2;


}//potencia

potencia();



/*2.- Cajero automático

Simula un cajero con un saldo inicial de $5000. Mostrar un menú:

Consultar saldo

Depositar

Retirar

Salir

No permitir retirar más dinero del disponible.*/

function cajeroAutomatico() {
    let saldo = 5000;
    let opcion = 0;

    while (opcion !== 4) {
        opcion = parseInt(prompt(
            "Menú: "+"\n" +
            "1. Consultar saldo"+"\n" +
            "2. Depositar"+"\n" +
            "3. Retirar"+"\n" +
            "4. Salir"+"\n" +
            "Seleccione una opción: "
        ));

        switch (opcion) {
            case 1:
                console.log("Su saldo actual es: "+saldo);
                break;
            case 2:
                let deposito = parseFloat(prompt("Ingrese la cantidad a depositar:"));
                if (deposito > 0) {
                    saldo += deposito;
                    console.log("Depósito exitoso. Nuevo saldo: "+saldo);
                } else {
                    alert("Cantidad no válida.");
                }
                break;
            case 3:
                let retiro = parseFloat(prompt("Ingrese la cantidad a retirar:"));
                if (retiro > saldo) {
                    alert("Error: No se permite retirar más dinero del disponible.");
                } else if (retiro > 0) {
                    saldo -= retiro;
                    console.log("Retiro exitoso. Nuevo saldo: "+saldo);
                } else {
                    alert("Cantidad no válida.");
                }
                break;
            case 4:
                alert("Gracias por usar el cajero automático.");
                break;
            default:
                alert("Opción no válida.");
        }
    }
}//cajeroAutomatico

cajeroAutomatico();


/* 3.- Juego de dados
Genera dos dados hasta que ambos tengan el mismo valor.

Salida:
3 - 5
1 - 6
2 - 4
6 - 6
Se necesitaron 4 lanzamientos.*/


function juegoDados() {
    let dado1, dado2;
    let lanzamientos = 0;

    do {
        
        dado1 = Math.floor(Math.random() * 6) + 1;
        dado2 = Math.floor(Math.random() * 6) + 1;
        lanzamientos++;
        
        console.log(dado1+" - "+dado2);
    } while (dado1 !== dado2);

    console.log("Se necesitaron "+lanzamientos+ " lanzamientos.");
}//juegoDados

juegoDados();


/*4.- Adivinar número

La computadora genera un número entre 1 y 100.
 El usuario tiene máximo 7 intentos. Después de cada intento indicar Más grande 
 Más pequeño*/

function adivinarNumero() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    const maxIntentos = 7;
    let intentos = 0;
    let gano = false;

    alert("He pensado un número entre 1 y 100. Tienes 7 intentos para adivinarlo.");

    while (intentos < maxIntentos) {
        let suposicion = parseInt(prompt("Intento: "+[intentos + 1]+ " de "+ maxIntentos+". ¿Cuál es el número?"));
        intentos++;

        if (suposicion === numeroSecreto) {
            alert("Adivinaste el número en "+intentos+ " intentos.");
            gano = true;
            break;
        } else if (suposicion < numeroSecreto) {
            console.log("Más grande");
        } else {
            console.log("Más pequeño");
        }
    }

    if (!gano) {
        alert("Te quedaste sin intentos. El número era "+numeroSecreto);
    }
}//AdivinarNumero

adivinarNumero();


/*
5.- Crea un programa que simule el registro de ventas de una tienda. Cada venta 
debe contener el nombre del vendedor, el nombre del producto, la cantidad vendida
 y el precio unitario. El programa debe permitir registrar múltiples ventas 
 (solicitándolos mediante prompt()) y al finalizar debe mostrar en consola el total 
 de ventas realizadas, el total de ingresos generados, cuántas unidades se vendieron 
 de cada producto y cuál fue el vendedor que generó el mayor monto en ventas. 
 El ejercicio debe aplicar ciclos, arreglos, objetos, condicionales y usar métodos 
 como .push(), .map(), .forEach() o .reduce().  

Total de ventas realizadas: 6
Total de ingresos: $15,700.00
Unidades vendidas por producto:

Laptop: 3 unidades

Mouse: 5 unidades

Teclado: 2 unidades

Vendedor con más ventas: Carla ($8000)*/

function registroVentas() {
    let ventas = [];
    let continuar = true;


    while (continuar) {
        let vendedor = prompt("Nombre del vendedor:");
        let producto = prompt("Nombre del producto:");
        let cantidad = parseInt(prompt("Cantidad vendida:"));
        let precioUnitario = parseFloat(prompt("Precio unitario:"));

        ventas.push({ vendedor, producto, cantidad, precioUnitario });

        continuar = confirm("¿Desea registrar otra venta?");
    }

    let totalVentas = ventas.length;

    // Total de ingresos generados usando .reduce()
    let totalIngresos = ventas.reduce((suma, venta) => suma + (venta.cantidad * venta.precioUnitario), 0);

    // Unidades vendidas por producto usando .forEach()
    let unidadesPorProducto = {};
    ventas.forEach(venta => {
        if (unidadesPorProducto[venta.producto]) {
            unidadesPorProducto[venta.producto] += venta.cantidad;
        } else {
            unidadesPorProducto[venta.producto] = venta.cantidad;
        }
    });

    // Vendedor con mayor monto en ventas usando .forEach()
    let ingresosPorVendedor = {};
    ventas.forEach(venta => {
        let montoVenta = venta.cantidad * venta.precioUnitario;
        if (ingresosPorVendedor[venta.vendedor]) {
            ingresosPorVendedor[venta.vendedor] += montoVenta;
        } else {
            ingresosPorVendedor[venta.vendedor] = montoVenta;
        }
    });

    let mejorVendedor = "";
    let maxMonto = 0;
    for (let vendedor in ingresosPorVendedor) {
        if (ingresosPorVendedor[vendedor] > maxMonto) {
            maxMonto = ingresosPorVendedor[vendedor];
            mejorVendedor = vendedor;
        }
    }

    console.log("Total de ventas realizadas: "+totalVentas);
    console.log("Total de ingresos:" +totalIngresos);
    
    console.log("Unidades vendidas por producto:");
    for (let prod in unidadesPorProducto) {
        console.log(`  * ${prod}: ${unidadesPorProducto[prod]} unidades`);
    }
    
    console.log("Vendedor con más ventas: "+mejorVendedor+ maxMonto);
}


registroVentas();

