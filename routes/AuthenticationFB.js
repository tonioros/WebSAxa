var express = require('express');
var router = express.Router();
var passport = require("passport");
var FacebookStrategy = require('passport-facebook').Strategy;
var database = require("../model/database")
var user = {}
  passport.use(new FacebookStrategy({
    clientID:"238927383277518", 
    clientSecret: "522ccb409ae5188dc3babe54d9842b99",
    callbackURL: "http://localhost/auth/facebook/callback",
    profileFields:["id", "displayName", "emails", "photos"] 
  }, function(accessToken, refreshToken, profile, cb){
    if(profile){
     verificarDatos(user.Email,function(state){
         user.state
        user.Nombre = profile.displayName
        user.Email = profile.emails[0].value;
        user.Photo = profile.photos[0].value;
        cb(null, profile, null);
     })
    }else{
      cb('404', null, "Usuario no Encontrado");
    }
  }));


router.get('/facebook/index',function(req, res, next){
    if(user.state == 0){//No registrado

    }else{//Ya Registrado
    getUser(user.Email, function(usuario){
        res.cookie("UDI", usuario.idUsuario)
        res.cookie("UNA", usuario.nombre)
        res.cookie("UCO", usuario.correo)
        res.cookie("UCD", usuario.codigo)
        var url = "../../"+(usuario.idTipoUsuario== 1)?"ADM" :"MEC"+"/"
        res.redirect(url, 200);
    });
    }
});

router.get('/facebook/error',function(req, res, next){
  res.render("Facebook/facebookError",{erro:"404", message:"Usuario no encontrado"});
});

router.get('/auth/facebook',
  passport.authenticate('facebook' , {scope: ['public_profile','email']}));


router.get('/auth/facebook/callback', function(req, res, next){
  passport.authenticate("facebook", function(err, profile, options) {

		if (err) {
      return res.redirect("/facebook/error?error=500&mesagge="+err.message);}

    if (!profile) {
      return res.redirect("/facebook/error?error="+err+"&message="+options);}
    
    if(profile) {
      return res.redirect("/facebook/index/"); }

	})(req, res, next);

  });

function verificarDatos(email, callback){
    var state;
    database.query("SELECT COUNT(*) AS conteo FROM usuario WHERE correo = ? ;",email,
    function(error, result){
        if(typeof result != undefined){
            state = (result[0].conteo != 0)? 1 :  0;
            callback(state)
        }else{
            throw error;
        }
    })
}

function getUser(email, callback){
    var usuario = {};
    database.query("SELECT * FROM usuario WHERE correo = ?;",email,
    function(error, result){
        if(typeof result != undefined){
            usuario.nombre = result[0].nombre
            usuario.idTipoUsuario = result[0].idTipoUsuario
            usuario.Empresa = result[0].idEmpresa
            usuario.codigo = result[0].codigo
            usuario.correo = result[0].correo
            usuario.idUsuario = result[0].idUsuario
            callback(usuario);
        }else{
            throw error;
        }
    })
}

module.exports = router;
