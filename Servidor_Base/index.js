const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

const PORT = 3000;

let peliculas = [
  {
    id: 1,
    titulo: "Interestelar",
    director: "Christopher Nolan",
    año: 2014,
  },
  {
    id: 2,
    titulo: "Hola",
    director: "Gerson",
    año: 2005,
  },
];

let idActual = peliculas.length + 1;

// Obtener las pelis
app.get("/peliculas", (req, res) => {
  res.json(peliculas);
});

// Obtener las pelis por ID
app.get("/peliculas/:id", (req, res) => {
  const id = Number(req.params.id);
  const pelicula = peliculas.find((pelicula) => pelicula.id === id);

  if (!pelicula) {
    return res.status(404).json({
      mensaje: "Película no encontrada",
    });
  }

  res.json(pelicula);
});//id

// Crear película 
app.post("/peliculas", (req, res) => {
  const { titulo, director, año } = req.body;
  
  if (!titulo || !director || !año) {
    
    return res.status(400).json({
      mensaje: "Faltan datos de película",
    });
  }

  const nuevaPelicula = {
    id: idActual++,
    titulo: titulo,
    director: director,
    año: Number(año),
  };

  peliculas.push(nuevaPelicula);
  res.status(201).json({
    mensaje: "Película registrada correctamente",
    pelicula: nuevaPelicula,
  });
});//registrar


//Actualizar una peli
app.put("/peliculas:id", (req, res) => {
  const id = Number(req.params.id);
  const { titulo, director, año } = req.body;
  
  if (!titulo || !director || !año) {
    
    return res.status(400).json({
      mensaje: "Faltan datos de película",
    });
  }

const indice = peliculas.findIndex(
    pelicula => pelicula.id === id

);

if (indice === -1){

return res.status(404).json({
    mensaje: "Pelicula no encontrada"
    });

}

peliculas[indice] = {

    id: id,
    titulo: titulo,
    director: director,
    año: Number(año)

};


res.json({

    mensaje: "Pelicula actualizada correctamente",
    pelicula: peliculas[indice]

    });

});//actualizar


//Eliminar una peli
app.delete("/peliculas:id", (req, res) => {
  const id = Number(req.params.id);
  const indice = peliculas.findIndex(
  pelicula => pelicula.id === id
  );

if (indice === -1){

return res.status(404).json({
    mensaje: "Pelicula no encontrada"
    });

}

const peliculaEliminada = peliculas[indice];

peliculas.splice(indice, 1);

res.json({
    mensaje: "Pelicula eliminada correctamente",
    pelicula: peliculaEliminada


    });

});//eliminar




//----------------------------------
//INICIO

app.get("/", (req, res) => {
  res.send("Bienvenido a mi primer servidor con express");
});

app.get("/pagina", (req, res) => {
  res.send(`
    <style>
      h1 { color: red; }
    </style>
    <h1>Mi pagina</h1>
    <p>Creada con Express</p>
  `);
});





//-----------------------------------------



app.get("/saludo/:nombre", (req, res) => {
  const nombre = req.params.nombre;
  res.send("Hola " + nombre);
});

//Ejercicio 1. Número par o impar 
//Ruta: /par/:numero
//Respuesta: :numero es un número par/impar
app.get("/par/:numero", (req, res) => {
  const numero = Number(req.params.numero);
  if (numero % 2 === 0) {
    res.send("Es un número par: " + numero);
  } else {
    res.send("Es un número impar: " + numero);
  }
});

//Ejercicio 2. Mayor de edad
//Ruta: /edad/:edad
app.get("/edad/:edad", (req, res) => {
  const edad = Number(req.params.edad);
  if (edad >= 18) {
    res.send("Es mayor de edad con " + edad + " años");
  } else {
    res.send("Es menor de edad con " + edad + " años");
  }
});

//Ejercicio 3. Calculadora
//Ruta: /calculadora/:operacion/:a/:b
//Respuesta: Resultado: N

//Donde operacion: suma/resta/multiplicacion/division
app.get("/calculadora/:operacion/:a/:b", (req, res) => {
  const operacion = req.params.operacion.toLowerCase();
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  let resultado;

  switch (operacion) {
    case "suma":
      resultado = a + b;
      break;
    case "resta":
      resultado = a - b;
      break;
    case "multiplicacion":
      resultado = a * b;
      break;
    case "division":
      if (b === 0) {
        return res.send("No se puede dividir entre cero");
      }
      resultado = a / b;
      break;
    default:
      return res.send(
        "Operación no válida (usa: suma, resta, multiplicacion o division)"
      );
  }

  res.send("Resultado: " + resultado);
});


//Ejercicio 4. Tabla de multiplicar
//Ruta: /tabla/:numero
//Respuesta:

/*
"N x 1 = R",
"N x 2 = R",
"N x 3 = R",
...
"N x 10 = R"
*/

app.get("/tabla/:numero", (req, res) => {
  const numero = Number(req.params.numero);
  const tabla = [];

  for (let i = 1; i <= 10; i++) {
    tabla.push(numero + " x " + i + " = " + numero * i);
  }

  res.json(tabla);
});

//Ejercicio 5. Calificacion
//Ruta: /calificacion/:nota
//Respuesta:

//:nota: < 10 -> Reprobado
//:nota >=70 -> Aprobado
//:nota >=80 -> Muy Bien
//:nota >= 90 -> Excelente
app.get("/calificacion/:nota", (req, res) => {
  const nota = Number(req.params.nota);

  if (nota >= 90) {
    res.send("Nota: " + nota + " - Excelente");
  } else if (nota >= 80) {
    res.send("Nota: " + nota + " - Muy Bien");
  } else if (nota >= 70) {
    res.send("Nota: " + nota + " - Aprobado");
  } else {
    res.send("Nota: " + nota + " - Reprobado");
  }
});

// Iniciando servidor (Un solo app.listen)
app.listen(PORT, () => {
  console.log("Servidor iniciado en http://localhost:" + PORT);
});