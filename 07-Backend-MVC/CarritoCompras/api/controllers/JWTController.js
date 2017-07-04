/**
 * JWTController
 *
 * @description :: Server-side logic for managing JWTS
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var jwt= require('jsonwebtoken');
module.exports = {
	Emitir: function(req,res){
	  var parametros=req.allParams();
	  if(!parametros.id){
	    return res.badRequest('No envía id');
    }
    var token = jwt.sign({ exep: 1500000,
      data: {
	      id:parametros.id
      }
    }, 'mi mama me mima');
    return res.ok(token);
  },
  Validar:function (req,res){
	  var parametros= req.allParams();
	  if(!parametros.token){
	    return res.badRequest('no envía el token')
    }
    var decodificado = jwt.verify(parametros.token,'mi mama me mima');
	  return res.ok(decodificado)
  },
  ValidarSecret:function (req,res){
    var parametros= req.allParams();
    if(!parametros.token){
      return res.badRequest('no envía el token')
    }
    var decodificado = jwt.verify(parametros.token,'secret');
    return res.ok(decodificado)
  }
};

