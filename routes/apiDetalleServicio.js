var router = require("express").Router(),
    detalleS = require("../model/detalleservicio");
    
router.get("/api/ds/serv/:idServicio", function (req, res, next) {
    if (req.params.idServicio != null) {
        detalleS.selectAll(req.params.idServicio, function (err, response) {
            if (response != null) {
                res.json(response);
            } else {
                res.json({ Mensaje: "No se encontraro resultados" });
            }
        })
    } else {
        res.json({ Mensaje: "ID NO VALIDO" });
    }
})

router.get("/api/ds/:idDetalleS", function (req, res, next) {
    if (req.params.idDetalleS != null) {
        detalleS.select(req.params.idDetalleS, function (err, response) {
            if (response != null) {
                if(response.length != 0){
                    res.json(response[0]);
                }else{
                    res.json({ Mensaje: "No se encontraro resultados" });    
                }
            } else {
                res.json({ Mensaje: "DATOS NO VALIDOS" });
            }
        })
    } else {
        res.json({ Mensaje: "ID NO VALIDO" });
    }
})

router.post("/api/ds", function (req, res, next) {
    var data = [req.body.idServicio, req.body.descripcion, req.body.subtotal]
    detalleS.insert(data, function (err, response) {
        if (!err) {
          res.json(response);
        } else {
            res.json({ Mensaje: false });
        }
    })
})

router.delete("/api/ds/:idDetalleS", function (req, res, next) {
    if (req.params.idDetalleS != null) {
        detalleS.delete(req.params.idDetalleS, function (err, response) {
            if (response != null) {
                res.json(response);
            } else {
                res.json({ Mensaje: false});
            }
        })
    } else {
        res.json({ Mensaje: "ID NO VALIDO" });
    }
})

module.exports = router
