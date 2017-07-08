var router = require("express").Router() ,
comentarioS = require("../model/comentarioservicio")

router.get("/apiComentarioServicio/ID/:idServicio", function(req,res,next){
    if(req.params.idServicio != null){
        comentarioS.selectAll(req.params.idServicio, function(err, response){
            if(response != null){
                res.json(response)
            }else{
                res.json({Mensaje: "No encontraron datos o ocurrio un error"})
            }
        })
    }else{
        res.json({Mensaje:"ID NO VALIDO"})
    }
})

router.post("/apiComentarioServicio", function(req,res,next){
    var data = [req.body.idServicio, req.body.idCliente,req.body.descripcion]
    comentarioS.insert(data, function(err, response){
        if(response != null){
            res.json(response)
        }else{
            res.json({Mensaje: false})
        }
    })
})

router.put("/apiComentarioServicio/:idComentarioS", function(req,res,next){
    if(req.params.idComentarioS == req.body.idComentarioS){
    var data = [req.body.idServicio, req.body.idCliente,req.body.descripcion,req.body.idComentarioS]
    comentarioS.update(data, function(err, response){
        if(response != null){
            res.json(response)
        }else{
            res.json({Mensaje: false})
        }
    })
    }else{
        res.json({Mensaje: "ID INCOHERENTE"})
    }
})

router.delete("/apiComentarioServicio/:idComentarioS", function(req,res,next){
    if(req.params.idComentarioS != null){
        comentarioS.delete(req.params.idComentarioS, function(err, response){
            if(response != null){
                res.json(response)
            }else{
                res.json({Mensaje: false})
            }
        })
    }else{
        res.json({Mensaje: "ID INCOHERENTE"})
    }
})

module.exports = router