var mysql = require("mysql"),
parametros = {
  host: 'johnny.heliohost.org',
  user: 'tonioros_axac',
  password: 'axac123',
  database: 'tonioros_axaControl'
};
try{

  var connection = mysql.createConnection(parametros);
  var server = "externo"
}catch(ex){
  if(connection._connectCalled == false && connection.state == 'disconnected'){
    parametros.host = "localhost"
    parametros.user = "root"
    parametros.password = ""
    parametros.database="axaControl";
    connection = null;
    connection = mysql.createConnection(parametros);
    server = "local"
  }
}
  console.log("Se conecto al Dominio "+server);

module.exports = connection
