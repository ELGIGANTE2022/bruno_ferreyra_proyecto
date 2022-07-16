const { Router }  = require ("express");
const router = new Router();

const mysql = require('mysql');

// const conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'productos'
// });
// router.connect((error) =>{
//     if (error)throw error;
//     console.log ('Conectado a la base de datos');
//     });

// router.get('/productos', (req, res) => {
//     let sql = "SELECT * FROM inventario";
//     let query = conn.query(sql, (err, results)=>{
//         if(err)throw err;
//     res.render('productos',{
//         results: results
//     });
// });
// });

// router.post('/save', (req, res) => {
//     let data = { producto_nombre: req.body.producto_nombre, producto_precio: req.body.producto_precio};
//     let sql = "INSERT INTO inventario SET ?";
//     let query = conn.query(sql, data, (err, results)=>{
//         if(err)throw err;
//     res.redirect('/productos')
//     });
// });



router.get('/', (req, res) => {
    res.render('home',
    { titulo: 'EL Gigante'});
});
router.get('/alcohol', (req, res) => {
    res.render('producto1',
    { titulo: 'EL Gigante'});
});
router.get('/bebidas', (req, res) => {
    res.render('producto2',
    { titulo: 'EL Gigante'});
});
router.get('/comestibles', (req, res) => {
    res.render('producto3',
    { titulo: 'EL Gigante'});
});
router.get('/limpieza', (req, res) => {
    res.render('producto4',
    { titulo: 'EL Gigante'});
});
router.get('/productos', (req, res) => {
    res.render('productos',
    { titulo: 'EL Gigante'});
});
router.get('/register', (req, res) => {
    res.render('register',
    { titulo: 'EL Gigante'});
});

router.get('/login', (req, res) => {
    res.render('login',
    { titulo: 'EL Gigante'});
});

router.get('/experiencia', (req, res) => {
    res.render('experiencia',
    { titulo: 'EL Gigante'});
});

router.get('/contacto', (req, res) => {
    res.render('contacto',
    { titulo: 'EL Gigante'});
});

router.get('*', (req, res) => {
    res.render('404',
    { titulo: 'EL Gigante'});
});



module.exports = router;