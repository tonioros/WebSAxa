var express = require('express');
var calendario = require('../model/calendario');
var router = express.Router();

router.get('/apiCalendario/cli/:idCliente',
  function(req, res) {
    var idCliente = req.params.idCliente;
    calendario.selectAllByCli(idCliente, function(error, resultados){
      if(typeof resultados !== undefined) {
        res.json(resultados);
      } else {
        res.json({"Mensaje": "No hay calendario"});
      }
  });
});

router.get('/apiCalendario/aut/:idAuto',
  function(req, res) {
    var idAuto = req.params.idAuto;
    calendario.selectAllByAut(idAuto, function(error, resultados){
      if(typeof resultados !== undefined) {
        res.json(resultados);
      } else {
        res.json({"Mensaje": "No hay calendario"});
      }
  });
});

router.get('/apiCalendario/emp/:idEmpresa',
  function(req, res) {
    var idEmpresa = req.params.idEmpresa;
    calendario.selectAllByEmp(idEmpresa, function(error, resultados){
      if(typeof resultados !== undefined) {
        res.json(resultados);
      } else {
        res.json({"Mensaje": "No hay calendario"});
      }
  });
});

router.get('/apiCalendario/', function(req, res) {
    calendario.selectAll(function(error, resultados){
      if(typeof resultados !== undefined) {
        res.json(resultados);
      } else {
        res.json({"Mensaje": "No hay calendario"});
      }
    });

});

router.get('/apiCalendario/:idCalendario',
  function(req, res) {
    var idCalendario = req.params.idCalendario;
    calendario.SelectOne(idCalendario, function(error, resultados){
      if(typeof resultados !== undefined) {
        res.json(resultados);
      } else {
        res.json({"Mensaje": "No hay calendario"});
      }
  });
});

router.post('/apiCalendario', function(req, res) {
  var data = {
    idCliente: req.body.idCliente,
    fecha: req.body.fecha,
    descripcion: req.body.descripcion,
    idAuto: req.body.idAuto,
    idEmpresa: req.body.idEmpresa
  }
  calendario.Insert(data, function(err, resultado) {
    if(resultado && resultado.insertId > 0) {
      res.redirect('/');
    } else {
      res.json({"Mensaje": "No se ingreso el calendario"});
    }
  });
});

router.put('/apiCalendario/:idCalendario', function(req, res) {
  var cookie = req.cookies;
  var data = {
    idCliente: req.body.idCliente,
    fecha: req.body.fecha,
    descripcion: req.body.descripcion,
    idAuto: req.body.idAuto,
    idEmpresa: req.body.idEmpresa,
    idCalendario: req.body.idCalendario
  }
  calendario.Update(data, function(err, resultado) {
    if(resultado !== undefined) {
      res.json(resultado);
    } else {
      res.json({"Mensaje": "No se modifico el calendario"});
    }
  });
});

router.delete('/apiCalendario/:idCalendario', function(req, res) {
    var idCalendario = req.params.idCalendario;
    calendario.Delete(idCalendario,function(error, resultado){
      if(resultado && resultado.Mensaje === "Eliminado") {
        res.json(resultado)
      } else {
        res.json({"Mensaje": "No se puede eliminar"});
      }
  });
});


module.exports = router;