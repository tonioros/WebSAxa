var database = require("./database"),
comentarioS = {}

comentarioS.selectAll = function(idServicio, callback){
    database.query("SELECT * FROM  comentarioservicio WHERE idServicio = ? ;", idServicio, function(err, response){
        if(!err){
            callback(null,response)
        }else{
            throw err;
        }
    })
}

comentarioS.insert = function(data, callback){
    database.query("INSERT INTO comentarioservicio(idServicio, idCliente,descripcion) VALUES(?,?,?);", 
                data, function(err, response){
        if(!err){
            callback(null,{Mensaje: true})
        }else{
            throw err;
        }
    })
}

comentarioS.update = function(data, callback){
    database.query("UPDATE comentarioservicio SET idServicio=? , idCliente=? , descripcion=? WHERE idComentarioS = ?;", 
                data, function(err, response){
        if(!err){
            callback(null,{Mensaje: true})
        }else{
            throw err;
        }
    })
}

comentarioS.delete = function(idComentarioS, callback){
    database.query("DELETE FROM comentarioservicio WHERE idComentarioS = ?;", 
                idComentarioS, function(err, response){
        if(!err){
            callback(null,{Mensaje: true})
        }else{
            throw err;
        }
    })
}

module.exports = comentarioS
