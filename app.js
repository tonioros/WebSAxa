var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//Index
index = require("./routes/views"),
//Declaracion de Routers
apiServicio = require('./routes/apiServicio'),
apiDServicio = require('./routes/apiDetalleServicio'),
apiCServicio = require('./routes/apiComentarioServicio'),
apiCalendario  = require("./routes/apiCalendario"),
apiAuto = require('./routes/apiAuto'),
apiEmpresa = require('./routes/apiEmpresa'),
apiFactura = require('./routes/apiFactura'),
apiUsuario = require('./routes/apiUsuario'),
//Conexion a Router para Autenticar por Facebook
authFacebook = require('./routes/AuthenticationFB'),
//Router de Carga de Imagenes
upload = require("./routes/upload.images")

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './')));
app.use(logger('dev'));

app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, authorization, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  next();
})


app.use("/", index) 
//Rutas para WEB SERVICES
app.use('/', apiServicio)
app.use('/', apiDServicio)
app.use('/', apiCServicio)
app.use('/', apiCalendario)
app.use('/', apiAuto)
app.use('/', apiEmpresa)
app.use('/', apiUsuario)
app.use('/', apiFactura)
//Carga de Imagenes
app.use('/',upload)
//Autenticacion de Facebook
app.use("/",authFacebook)

app.use((req,res,next)=>{
  if(req.method == "OPTIONS"){
    next();
  }
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;