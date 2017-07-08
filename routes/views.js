var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AXA Control | Inicio' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'AXA Control | Iniciar Sesion' });
});
router.get('/registrar', function(req, res, next) {
  res.render('registrar', { title: 'AXA Control | Iniciar Sesion' });
});
router.get('/ADM/', function(req, res, next) {
  res.render('Administrador/index', { title: 'AXA Control | Iniciar Sesion' });
});
router.get('/ADM/servicios', function(req, res, next) {
  res.render('Administrador/servicios', { title: 'AXA Control | Iniciar Sesion' });
});
module.exports = router;
