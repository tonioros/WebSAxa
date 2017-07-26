var database = require("./database"),
detalleservicio = {}

detalleservicio.selectAll = function(idServicio, callback){
    database.query("SELECT * FROM detalleservicio WHERE idServicio = ? ;", 
    idServicio, function(error, resultado){
        if(!error){
            callback(null, resultado)
        }else{
            throw error
        }
    })
}

detalleservicio.select = function(idDetalleS, callback){
    database.query("SELECT * FROM detalleservicio WHERE idDetalleS = ? ;", 
    idDetalleS, function(error, resultado){
        if(!error){
            callback(null, resultado)
        }else{
            throw error
        }
    })
}

detalleservicio.insert = function(data, callback){
    database.query("INSERT INTO detalleservicio(idServicio, descripcion, subtotal) VALUES(?,?,?);", 
    data, function(error, resultado){
        if(!error){
            callback(null, {Mensaje: true})
        }else{
            throw error
        }
    })
}

detalleservicio.delete = function(idDetalleS, callback){
    database.query("DELETE FROM detalleservicio WHERE idDetalleS = ? ;", 
    idDetalleS, function(error, resultado){
        if(!error){
             callback(null, {Mensaje: true})
        }else{
            throw error
        }
    })
}

module.exports = detalleservicio
