//config. vars mongoDB
//variables de conf. base de datos mongoDB
const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGO_DB_URI;
const ns = process.env.MDB_NS;
//TODO
const dbport = process.env.PORT || 5000;
//server config vars
//variables de conf.servidor
const express = require('express');
const port_serv = 3000;
const routes = require('./routes');
//mongoDB config JS Obj
//opciones de conexion mongoDB en objeto JS
const mongoOptionsObj = {
    poolSize: 50,
    ssl: true,
    w: "majority",
    wtimeout: 2500,
    useNewUrlParser: true,
    useUnifiedTopology: true
}
//new connection
//nueva conexion
const client = new MongoClient(uri, mongoOptionsObj);
//async conection
//conexion asincrona
client.connect().then(async openConn => {
    console.log("Mongo Cluster dice : Ya esta lista tu conexion");
    const app_server = express();
    const cdb = openConn.db(ns);
    //front end static directory
    //directorio de codigo front end
    app_server.use(express.static(__dirname + '/views'));
    //import routes custom module
    //importamos las rutas del modulo routes (linea 12)
    routes(app_server, cdb);
    //server
    let server = app_server.listen(port_serv, () => {
        try {
            let host = server.address().address;
            let port = server.address().port;
            console.log("Servidor Express():_Escuchando en: ", host, port);
        } catch (err) {
            console.error("Hay un error al configurar el servidor Express: " + err.stack);
        }
    })

}).catch(err => {
    console.error(err.stack)
    process.exit(1);
});
