module.exports = {
    bienvenido: function (req, res) {
        //sails.log.info()
        //change status res.status(404)
        if (req.method != "PUT") {
            return res.forbidden(req.method + " not allowed");
        }
        return res.send("hola");
    },
    welcome: function (req, res) {
        if (req.method != "POST") {
            return res.forbidden(req.method + " not allowed");
        }
        return res.json({ saludo: "hola" });
    },
    crearUsuarioQuemado: function (req, res) {
        var parametros = req.allParams();
        var nuevoUsuario = {
            nombres: parametros.nombres,
            apellidos: parametros.apellidos,
            clave: parametros.clave,
            correo: parametros.correo,
            fechaNacimiento: parametros.fechaNacimiento
        };
        //1- Query parameters
        //2- Forms Parameters
        var nuevoUsuarioOld = {
            nombres: "Santiago",
            apellidos: "Lema",
            clave: "abcd",
            correo: "santiago@hotmail.com",
            fechaNacimiento: new Date
        };
        Usuario.create(nuevoUsuario).exec(function (error, usuarioCreado) {
            if (error) {
                return res.serverError(error);
            }
            else {
                return res.ok(usuarioCreado);
            }
        });
    }
};
