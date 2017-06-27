declare let module:any;
declare let sails;
declare var Usuario

module.exports = {
  bienvenido: (req,res) => {
    //sails.log.info()
    //change status res.status(404)
    if (req.method != "PUT" ){
      return res.forbidden(req.method+" not allowed")
    }
    return res.send("hola")
  },

  welcome: (req,res) => {

    if (req.method != "POST" ){
      return res.forbidden(req.method+" not allowed")
    }
    return res.json({saludo:"hola"})

  },

  crearUsuarioQuemado: (req,res) => {

    let parametros = req.allParams();
    let nuevoUsuario = {
      nombres:parametros.nombres,
      apellidos:parametros.apellidos,
      clave:parametros.clave,
      correo:parametros.correo,
      fechaNacimiento: parametros.fechaNacimiento
    }
    //1- Query parameters
    //2- Forms Parameters

    let nuevoUsuarioOld = {
      nombres:"Santiago",
      apellidos:"Lema",
      clave:"abcd",
      correo:"santiago@hotmail.com",
      fechaNacimiento: new Date
    }
    Usuario.create(nuevoUsuario).exec(
      (error,usuarioCreado) => {
        if (error){
          return res.serverError(error)
        }else{
          return res.ok(usuarioCreado)
        }
      }
    )
  }

}
