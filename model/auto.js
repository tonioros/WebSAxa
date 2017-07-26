var database = require('./database');
var auto = {};

auto.selectAll = function(idUsuario, callback){
  if(database){
    database.query("SELECT * FROM auto WHERE idUsuario = ?",idUsuario,function(error,resultados){
      if(error){
        throw error;
      }else {
        callback(null,resultados);
      }
    });
  }
}

auto.select = function(id, callback){
  if(database){
    var sql = "SELECT * FROM auto WHERE idAuto = ? ";
    database.query(sql,id,function(error,resultado){
      if(error){
        throw error;
      }else {
        callback(null,resultado);
      }
    });
  }
}

auto.insert = function(data,callback){
  if(database){
    database.query("INSERT INTO auto (idUsuario,modelo,marca,anio,codigo,fechaCreacion) "
    +"VALUES(?,?,?,?,?,?, NOW())",
    [data.idUsuario,data.modelo,data.marca,data.anio,data.codigo,data.fechaCreacion],
    function(error,resultado){
      if(error){
        throw error;
      }else {
        callback(null, {'Mensaje': true})
      }
    });
  }
}

auto.update = function (data,callback){
  if(database){
    database.query('UPDATE auto SET modelo = ?, marca = ?,anio = ? '+
    'WHERE idAuto = ?',[data.modelo,data.marca,data.anio,data.idAuto],
    function(error,resultado){
      if(error){
        throw error;
      }else {
        callback(null,{'Mensaje': 'Se edito un auto'})
      }
    });
  }
}

auto.delete = function (id, callback){
  if(database){
    database.query('DELETE FROM auto WHERE idAuto = ?'.id,
    function(error,resultado){
      if(error){
        throw error;
      }else{
        callback(null,{'Mensaje': 'Eliminado'})
      }
    })
  }
}

module.exports = auto;
