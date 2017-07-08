var database = require('./database');
var empresa = {};

empresa.selectAll = function(callback){
  if(database){
    database.query("SELECT * FROM empresa",function(error,resultados){
      if(error){
        throw error;
      }else {
        callback(null,resultados);
      }
    });
  }
}

empresa.selectByCodigo = function(codigo, callback){
  if(database){
    var sql = "SELECT * FROM empresa WHERE codigo = ?";
    database.query(sql,codigo,function(error,resultado){
      if(error){
        throw error;
      }else {
        callback(null,resultado);
      }
    });
  }
}

empresa.select = function(id, callback){
  if(database){
    var sql = "SELECT * FROM empresa WHERE idEmpresa = ?";
    database.query(sql,id,function(error,resultado){
      if(error){
        throw error;
      }else {
        callback(null,resultado);
      }
    });
  }
}

empresa.insert = function(data,callback){
  if(database){
    database.query("INSERT INTO Empresa(nombre,codigo,direccion) VALUES(?,?,?)",
    [data.nombre,data.codigo,data.direccion],
    function(error,resultado){
      if(error){
        throw error;
      }else {
        callback(null, {'insertId': resultado.insertId})
      }
    });
  }
}

empresa.update = function (data,callback){
  if(database){
    database.query('UPDATE empresa SET nombre = ?, codigo = ?, direccion = ?'+
    'WHERE idEmpresa = ?',[data.nombre,data.codigo,data.direccion,data.idEmpresa],
    function(error,resultado){
      if(error){
        throw error;
      }else {
        callback(null,{'Mensaje': 'Se edito una empresa'})
      }
    });
  }
}

empresa.delete = function (id, callback){
  if(database){
    database.query('DELETE FROM Empresa WHERE idEmpresa = ?'.id,
    function(error,resultado){
      if(error){
        throw error;
      }else{
        callback(null,{'Mensaje': 'Eliminado'})
      }
    })
  }
}

module.exports = empresa;
