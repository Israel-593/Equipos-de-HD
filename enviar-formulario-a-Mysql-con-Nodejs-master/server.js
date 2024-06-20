// Requiriendo el módulo 'express', 'cors' y 'body-parser'
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Requiriendo la conexión a BD gestor (MySQL)
const connection = require("./configBD");

// Creando una nueva aplicación Express.
const app = express();
const path = require("path");
const { error } = require("console");


/**
 * app.use(cors()): Es un middleware, al utilizar app.use(cors()),
 * estás permitiendo que tu servidor responda a las solicitudes de otros dominios.
 * 
 * app.use(bodyParser.urlencoded({ extended: false })): habilita el middleware de body-parser para analizar los datos enviados
 * en el cuerpo de las solicitudes HTTP.
 * body-parser es un middleware de Express que permite acceder y procesar los datos enviados en formularios HTML.
 * bodyParser.urlencoded() se utiliza para analizar los datos codificados en URL enviados en las solicitudes POST.
 * El parámetro { extended: false } configura el analizador para que solo admita datos codificados en URL tradicionales.
 */
app.use(cors());
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * app.use Se utiliza para montar middlewares en la aplicación Express.
 * Los middlewares son funciones que se ejecutan en el flujo de procesamiento de una solicitud antes
 * de que se envíe una respuesta Middleware para servir archivos estáticos desde la carpeta "public"
 */
app.use("/public", express.static(path.join(__dirname, "public")));

/**
 * Establecer EJS como el Motor de plantillas
 */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/**
 * Definiendo mi ruta Home
 */
app.get("/", (req, res) => {
  res.render("inicio", {
    rutaActual: "/",
  });
});

/**
 * Ruta para mostrar el formulario
 */
app.get("/form-mantenimiento", (req, res) => {
  res.render("pages/form2",{
     rutaActual: "/form-mantenimiento",
  });
});
/**
 * Ruta para mostrar la informacion ingresada
 */
app.get("/form-registros", (req, res) => {
  res.render("pages/registros",{
     rutaActual: "/form-registros",
  });
});
/**
 * Insert
 */

app.post("/procesar-formulario2", (req, res) => {
  const datos=req.body;
  let fecha            = datos.fech;
  let numero_maquina   = datos.num;
  let numero_serie     =datos.num_Ser;
  let tipo_maquina     =datos.tipo_Maq;
  let novedades        =datos.nov;
  let observaciones    =datos.obser;
  let repuestos        =datos.repues;
  let estado           =datos.est;

  
  /*
  console.log(fecha);
  console.log(numero_maquina);
  console.log(numero_serie);
  console.log(tipo_maquina);
  console.log(novedades);
  console.log(observaciones);
  console.log(repuestos);
  console.log(estado);
*/
    let registrar = "INSERT INTO maquinas(fecha, numero_maquina, numero_serie, tipo_maquina, novedades, observaciones, repuestos,estado) VALUES ('"+fecha+"','"+numero_maquina+"', '"+numero_serie+"', '"+tipo_maquina+"', '"+novedades+"', '"+observaciones+"', '"+repuestos+"','"+estado+"')";
    connection.query(registrar, function(error){
      if (error){
        throw error;
      }else{
        console.log("Conexion Exitosa Datos almacenados Correctamente");
      }
    })

    res.render("inicio", {
      rutaActual: "/",
      mensaje: "Datos almacenados Correctamente",
    })
    
  });
  
//API
//const PORT = 3308; // Puedes cambiar el puerto si es necesario
app.get('/api/equipos', (req, res) => {
      connection.query('SELECT * FROM maquinas', (error,filas)=>{
        if (error) {
          throw error;
      }else{
        res.send(filas);
      }
    })
});


   
// Iniciar el servidor con Express
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

