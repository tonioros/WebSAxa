var database = require('./database');
var calendario = {};

calendario.selectAllByCli = function(idCliente, callback) {
  if(database) {
    database.query("SELECT * FROM calendario WHERE idCliente = ?",
    idCliente,
    function(error, resultados) {
      if(error) {
        throw error;
      } else {
        callback(null, resultados);
      }
    });
  }
}

calendario.selectAllByAut = function(idAuto, callback) {
  if(database) {
    database.query("SELECT * FROM calendario WHERE idAuto = ?",
    idAuto,
    function(error, resultados) {
      if(error) {
        throw error;
      } else {
        callback(null, resultados);
      }
    });
  }
}

calendario.selectAllByEmp = function(idEmpresa, callback) {
  if(database) {
    database.query("SELECT * FROM calendario WHERE idEmpresa = ?",
    idEmpresa,
    function(error, resultados) {
      if(error) {
        throw error;
      } else {
        callback(null, resultados);
      }
    });
  }
}

calendario.selectAll = function(callback) {
  if(database) {
    database.query("SELECT * FROM calendario",
    function(error, resultados) {
      if(error) {
        throw error;
      } else {
        callback(null, resultados);
      }
    });
  }
}

calendario.SelectOne = function(idDetalleS, callback) {
  if(database) {
    var sql = "SELECT * FROM calendario WHERE idCalendario = ?";
    database.query(sql, idDetalleS,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, resultado);
      }
    });
  }
}

calendario.Insert = function(data, callback) {
  if(database) {
    database.query("INSERT INTO calendario(idCliente, fecha, descripcion, idAuto, idEmpresa) VALUES(?,?,?,?,?) ", [data.idCliente, data.fecha, data.descripcion, 
    data.idAuto, data.idEmpresa],
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"insertId": resultado.insertId});
      }
    });
  }
}

calendario.Update = function(data, callback) {
  if(database) {
    var sql = "UPDATE calendario SET idCliente = ?, fecha = ?, descripcion = ?, idAuto = ?, idEmpresa = ? WHERE idCalendario = ?";
    database.query(sql,
    [data.idCliente , data.fecha, data.descripcion, data.idAuto , data.idEmpresa, data.idCalendario],
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, data);
      }
    });
  }
}

calendario.Delete = function(idCalendario, callback) {
  if(database) {
    var sql = "DELETE FROM calendario WHERE idCalendario = ?";
    database.query(sql, idCalendario,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"Mensaje": "Eliminado"});
      }
    });
  }
}

module.exports = calendario;