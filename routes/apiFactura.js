var express = require('express');
var model = require('../model/factura');
var router = express.Router();

router.get('/api/factura/em/:idEmpresa', function(req, res) {
  model.selectByEmpresa(req.params.idEmpresa,function(error, resultados){
    if(typeof resultados !== undefined) {
      res.json(resultados);
    } else {
      res.json({"Mensaje": "No hay facturas"});
    }
  });
});

router.get('/api/factura/cl/:idCliente',
  function(req, res) {
    model.selectByClient(req.params.idCliente,
      function(error, resultados){
      if(typeof resultados !== undefined) {
        res.json(resultados);
      } else {
        res.json({"Mensaje": "No hay factura"});
      }
  });
});

router.post('/api/factura', function(req, res) {
  var data = {
    idServicio: req.body.idServicio,
    fecha: req.body.fecha,
    idUsuario: req.body.idUsuario,
    total: req.body.total,
    idEmpresa: req.body.idEmpresa
  }
  model.insert(data, function(err, resultado) {
    if(resultado != null) {
      res.json({"Mensaje":true});
    } else {
      res.json({"Mensaje": false});
    }
  });
});

module.exports = router;
