const { Router }  = require ("express");
const nodemailer = require ("nodemailer");
const mail = new Router();

mail.get('/experiencia', (req, res) => {
    res.render('experiencia',
    { titulo: 'EL Gigante'});
});

mail.post('/enviar-mail', (req, res) =>{
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const celular = req.body.celular;
        const correo = req.body.correo;
        const asunto = req.body.asunto;
        const mensaje = req.body.mensaje;

        let transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST ,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            }
        
});

// Message object
let mailOptions= {
    to: 'bferreyra18@gmail.com.',
    from: 'Remitente', 
    subject: `${asunto}`,
    html:`<h1>Mensaje de ${nombre} ${apellido} ${celular} para el gigante:${mensaje},
    Contacto: ${correo}</h1>`,
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        res.status(500).send(error.message);
    } else{
        res.render("enviado");
        res.status(200).jsonp(reqbody)
    }

});
});

// mail.post("/enviar-mail", (req, res) => {
//         const nombre = req.body.nombre;
//         const apellido = req.body.apellido;
//         const celular = req.body.celular;
//         const correo = req.body.correo;
//         const asunto = req.body.asunto;
//         const mensaje = req.body.mensaje;

//         let transporter = nodemailer.createTransport({
//             host: process.env.SMTP_HOST,
//             port: process.env.SMTP_PORT,
//             secure: false,
//             auth: {
//                 user: process.env.SMTP_USER,
//                 pass: process.env.SMTP_PASS,
//             }
        
// });

// // Message object
// let mailOptions= {
//     to: 'bferreyra18@gmail.com.',
//     from: 'Remitente', 
//     subject: `$(asunto)`,
//     html:`<h1>Mensaje de ${nombre} ${apellido} ${celular} para el gigante: ${asunto} ${mensaje},
//     Contacto: ${correo}</h1>`,
// };



module.exports = mail;