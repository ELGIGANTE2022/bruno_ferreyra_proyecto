const express =require('express');
const app = express();
const hbs = require('hbs');
const port = 8080;   


app.use(express.urlencoded({ extended:false }));

//invocamos a dotenv
const dontenv = require('dotenv');
dontenv.config({path:'./env/.env'});   

//directorio public
app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));


//Establecer motor de plantillas
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')

//Invocamos al modulo de conexion de la BD
const conn = require ('./router/router');

//estableciendo rutas
app.use (express.static ('public'));
app.use(require('./router/router'));
app.use(require('./router/mail'));





app.listen(port, () =>{
    console.log(`Usando el puerto http://localhost:${8080}`);
}
) 



