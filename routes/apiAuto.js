var express = require('express');
var model = require('../model/auto');
var router = express.Router();

router.get('/api/auto/:idUsuario', function(req, res) {
  var id = req.params.idUsuario;
  model.selectAll(id,function(error, resultados){
    if(typeof resultados !== undefined) {
      res.json(resultados);
    } else {
      res.json({"Mensaje": "No hay autos"});
    }
  });
});

router.get('/api/auto/:idAuto',
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

router.post('/api/auto', function(req, res) {
  var data = {
    idAuto : 0,
    idUsuario: req.body.idUsuario,
    modelo: req.body.modelo,
    marca: req.body.marca,
    anio: req.body.anio,
    codigo: req.body.codigo,
    fechaCreacion: req.body.fechaCreacion
  }
  model.insert(data, function(err, resultado) {
    if(resultado && resultado.insertId > 0) {
      res.json({"Mensaje": "Se ingreso un auto"});
    } else {
      res.json({"Mensaje": "No se ingreso el auto"});
    }
  });
});

router.put('/api/auto/:id', function(req, res) {
  var id = req.params.id;
  var data = {
    idAuto : req.body.idAuto,
    modelo: req.body.modelo,
    marca: req.body.marca,
    anio: req.body.anio
  }

  if(data.idAuto === data.idAuto) {
    model.update(data, function(err, resultado) {
      if(resultado !== undefined) {
        res.json(resultado);
      } else {
        res.json({"Mensaje": "No se modifico el auto"});
      }
    });
  } else {
    res.json({"Mensaje": "No concuerdan los datos"});
  }
});

router.delete('/api/auto/:id',
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
