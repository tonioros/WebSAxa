var formidable = require('formidable');
var router = require('express').Router();

router.post('/upload', function(req, res, next) {
    var form = formidable.IncomingForm()
    var filePath = 'http://localhost/';
    var fileServer = 'http://localhost/';
    var nameFile = ""
    //Aca entra la peticion y Formidable se encarga de obtener solo el encabezado
    //"file" para asi comenzar a guardarlo
    form.parse(req, function() {
    });
    //Al estar ya en el proceso de guardado, Formidable permite modificarlo u 
    //obtener datos del archivo enviado en este caso se le indica a donde se
    //Ira a guardar y se obtiene el nombre para completar la URL de la imagen
    form.on('fileBegin', function(name, file) {
      filePath += file.path = './public/images/' + file.name;
      nameFile = file.name
    });
    //Al finalizar, envia la peticion devuleta ya con la URL de imagen
    //Esta sera guardada como String en la DB y asi solo se manda a llamar eso
    form.on('end', ()=> {
      res.json({"Mensaje": fileServer+"images/"+nameFile});
      res.end();
    })

});


module.exports = router;