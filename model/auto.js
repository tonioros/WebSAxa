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
    database.query("CALL `sp_crearAuto`(?,?,?,?,?)",
    [data.marca,data.modelo,data.anio,data.idUsuario,data.idEmpresa],
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
    var sql = `DELETE FROM auto WHERE idAuto = ${id}`
    console.log(sql)
    database.query(sql,
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
