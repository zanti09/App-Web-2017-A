/**
 * Created by slema on 3/6/17.
 */
var Usuario = (function () {
    function Usuario(nombre, apellido //paramtetros opcionales siempre van al final
    ) {
        this.nombre = nombre;
        this.apellido = apellido; //paramtetros opcionales siempre van al final
        this.nombre = nombre;
        this.apellido = apellido;
    }
    Usuario.prototype.imprimirNombre = function (saludo, titulo) {
        return saludo + ", " + titulo + " " + this.nombre + " " + this.apellido;
    };
    return Usuario;
}());
var santiago = new Usuario("Santiago", "Lema");
console.log(santiago.imprimirNombre("Hi", "Sr."));
