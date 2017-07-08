var database = require("./database"),
comentarioS = {}

comentarioS.selectAll = function(idServicio, callback){
    database.query("SELECT * FROM  comentarioServicio WHERE idComentarioS = ? ;", idServicio, function(err, response){
        if(!err){
            callback(null,response)
        }else{
            throw err;
        }
    })
}

comentarioS.insert = function(data, callback){
    database.query("INSERT INTO comentarioServicio(idServicio, idCliente,descripcion) VALUES(?,?,?);", 
                data, function(err, response){
        if(!err){
            callback(null,{Mensaje: true})
        }else{
            throw err;
        }
    })
}

comentarioS.update = function(data, callback){
    database.query("UPDATE comentarioServicio SET idServicio=? , idCliente=? , descripcion=? WHERE idComentarioS = ?;", 
                data, function(err, response){
        if(!err){
            callback(null,{Mensaje: true})
        }else{
            throw err;
        }
    })
}

comentarioS.delete = function(idComentarioS, callback){
    database.query("DELETE FROM comentarioServicio WHERE idComentarioS = ?;", 
                idComentarioS, function(err, response){
        if(!err){
            callback(null,{Mensaje: true})
        }else{
            throw err;
        }
    })
}

module.exports = comentarioS