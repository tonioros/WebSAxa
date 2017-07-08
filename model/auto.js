var database = require('./database');
var auto = {};

auto.selectAll = function(idUsuario, callback){
  if(database){
    database.query("SELECT * FROM Auto WHERE idUsuario = ?",idUsuario,function(error,resultados){
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
    var sql = "SELECT * FROM Auto WHERE idAuto = ?";
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
    database.query("INSERT INTO Auto (idUsuario,modelo,marca,anio,codigo,fechaCreacion)"
    +"VALUES(?,?,?,?,?,?)",
    [data.idUsuario,data.modelo,data.marca,data.anio,data.codigo,data.fechaCreacion],
    function(error,resultado){
      if(error){
        throw error;
      }else {
        callback(null, {'insertId': resultado.insertId})
      }
    });
  }
}

auto.update = function (data,callback){
  if(database){
    database.query('UPDATE Auto SET modelo = ?, marca = ?,anio = ?'+
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
    database.query('DELETE FROM Usuario WHERE idUsuario = ?'.id,
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
