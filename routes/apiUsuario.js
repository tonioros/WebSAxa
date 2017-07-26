var express = require('express');
var Usuario = require('../model/usuario');
var router = express.Router();

router.post('/autenticar', function(req, res) {
  var data = {
    nick: req.body.nick,
    contrasena: req.body.contrasena
  }
  Usuario.autenticar(data, function(err, resultado) {
    if(resultado != null) {
      if(resultado.length != 0){
        var location = (resultado[0].idTipoUsuario != 1)? "/MEC" : "/ADM";
        res.json({Mensaje: true,  usuario : resultado[0], location: location});
      }else{
        res.json({"Mensaje":false})
      }
    } else {
      res.json({"Mensaje":false});
    }
  });
});

router.get('/api/usuario/emp/:idEmpresa', function(req, res) {
  var id = (req.params.idEmpresa != null)?req.params.idEmpresa : 0;
  Usuario.selectAll(id,function(error, resultados){
    if(typeof resultados !== undefined) {
      res.json(resultados);
    } else {
      res.json({"Mensaje": "No hay Usuarios"});
    }
  });
});

router.get('/api/usuario/co/:correo', function(req, res) {
  var email = (req.params.correo != null)?req.params.correo : '';
  Usuario.VerifyEmail(email,function(error, resultados){
    if(typeof resultados !== undefined) {
        res.json({Mensaje: (resultados[0].conteo != 0)? false:true})
    } else {
      res.json({"Mensaje": "No hay Usuarios"});
    }
  });
});

router.get('/api/usuario/:idUsuario',
  function(req, res) {
    var idUsuario = req.params.idUsuario;
    Usuario.select(idUsuario,
      function(error, resultados){
      if(typeof resultados !== undefined) {
        res.json(resultados);
      } else {
        res.json({"Mensaje": "No hay Usuarios"});
      }
  });
});

router.post('/api/usuario', function(req, res) {
  var data = {
    nombre: req.body.nombre,
    edad: req.body.edad,
    correo: req.body.correo,
    urlIMG: (req.body.urlIMG != "" || req.body.urlIMG != null)? req.body.urlIMG :'https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png' ,
    idTipoUsuario: req.body.idTipoUsuario,
    idEmpresa: req.body.idEmpresa,
    contrasena: req.body.contrasena
  }
  Usuario.insert(data, function(err, resultado) {
    if(!resultado && !resultado.Mensaje) {
      res.json({"Mensaje": false});
    } else {
      res.json({"Mensaje": true});
    }
  });
});

router.put('/api/usuario/:idUsuario', function(req, res) {
  var idUsuario = req.params.idUsuario;
  var data = {
    idUsuario : req.body.idUsuario,
    nombre: req.body.nombre,
    edad: req.body.edad,
    correo: req.body.correo,
    contrasena: req.body.contrasena,
    urlIMG: (req.body.urlIMG != "" || req.body.urlIMG != null)? req.body.urlIMG :'https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png'
  }

  if(data.idUsuario == idUsuario) {
    Usuario.update(data, function(err, resultado) {
      if(resultado != null) {
        res.json(resultado);
      } else {  
        res.json({"Mensaje": "No se modifico la Usuario"});
      } 
    });
  } else {
    res.json({"Mensaje": "No concuerdan los datos"});
  }
});

router.delete('/api/usuario/:idUsuario',
  function(req, res) {
    var idUsuario = req.params.idUsuario;
    Usuario.delete(idUsuario,
      function(error, resultado){
      if(resultado && resultado.Mensaje == "Eliminado") {
        res.json(resultado  )
      } else {
        res.json({"Mensaje": "No se puede eliminar"});
      }
  });
});


module.exports = router;
