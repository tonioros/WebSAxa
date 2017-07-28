var express = require('express');
var calendario = require('../model/calendario');
var router = express.Router();

router.get('/api/Cal/cli/:idCliente',
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

router.get('/api/Cal/aut/:idAuto',
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

router.get('/api/Cal/emp/:idEmpresa',
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

router.get('/api/Calendario', function(req, res) {
    calendario.selectAll(function(error, resultados){
      if(typeof resultados !== undefined) {
        res.json(resultados);
      } else {
        res.json({"Mensaje": "No hay calendario"});
      }
    });

});

router.get('/api/Cal/:idCalendario',
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

router.post('/api/Calendario', function(req, res) {
  var data = {
    idCliente: req.body.idCliente,
    fecha: req.body.fecha,
    descripcion: req.body.descripcion,
    idAuto: req.body.idAuto,
    idEmpresa: req.body.idEmpresa
  }
  calendario.Insert(data, function(err, resultado) {
    if(resultado != null) {
      res.json(resultado)
    } else {
      res.json({"Mensaje": false});
    }
  });
});

router.put('/api/Cal/:idCalendario', function(req, res) {
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

router.delete('/api/Cal/:idCalendario', function(req, res) {
    var idCalendario = req.params.idCalendario;
    calendario.Delete(idCalendario,function(error, resultado){
      if(resultado != null) {
        res.json(resultado)
      } else {
        res.json({"Mensaje": false});
      }
  });
});


module.exports = router;