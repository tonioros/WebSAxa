var express = require('express');
var model = require('../model/empresa');
var router = express.Router();

router.get('/api/empresa/', function(req, res) {
  model.selectAll(function(error, resultados){
    if(typeof resultados !== undefined) {
      res.json(resultados);
    } else {
      res.json({"Mensaje": "No hay empresas"});
    }
  });
});

router.get('/api/empresa/:idEmpresa',
  function(req, res) {
    var idEmpresa = req.params.idEmpresa;
    model.select(idUsuario,
      function(error, resultados){
      if(typeof resultados !== undefined) {
        res.json(resultados);
      } else {
        res.json({"Mensaje": "No hay empresa"});
      }
  });
});

router.get('/api/empresa/CD/:codigo',
  function(req, res) {
    var codigo = req.params.codigo;
    model.selectByCodigo(codigo,
      function(error, resultados){
      if(typeof resultados !== undefined && resultados.length != 0) {
        res.json({"Mensaje": resultados[0]});
      } else {
        res.json({"Mensaje": false});
      }
  });
});

router.post('/api/empresa', function(req, res) {
  var data = {
    nombre : req.body.nombre,
    codigo: req.body.codigo,
    direccion: req.body.direccion
  }
  model.insert(data, function(err, resultado) {
    if(resultado && resultado.insertId > 0) {
      res.json({"Mensaje": "Se ingreso una empresa"});
    } else {
      res.json({"Mensaje": "No se ingreso la empresa"});
    }
  });
});

router.put('/api/empresa/:id', function(req, res) {
  var id = req.params.id;
  var data = {
    idEmpresa : req.body.idEmpresa,
    nombre: req.body.nombre,
    codigo: req.body.codigo,
    direccion: req.body.direccion
  }

  if(data.idEmpresa === data.idEmpresa) {
    model.update(data, function(err, resultado) {
      if(resultado !== undefined) {
        res.json(resultado);
      } else {
        res.json({"Mensaje": "No se modifico la empresa"});
      }
    });
  } else {
    res.json({"Mensaje": "No concuerdan los datos"});
  }
});

router.delete('/api/empresa/:id',
  function(req, res) {
    var id = req.params.id;
    model.delete(id,
      function(error, resultado){
      if(resultado && resultado.Mensaje === "Eliminado") {
        res.json({"Mensaje": "Se elimino"});
      } else {
        res.json({"Mensaje": "No se puede eliminar"});
      }
  });
});


module.exports = router;
