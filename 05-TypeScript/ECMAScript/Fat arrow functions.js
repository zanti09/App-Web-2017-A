/**
 * Created by slema on 29/5/17.
 */
function holaMundo() {
    console.log("hola mundo");
}
var holaMundo2 = function () {
    console.log("hola mundo");
};
var holaMundo3 = function () {
    console.log("hola mundo");
};
var holaMundo4 = function () { return console.log("Hola mundo"); };
var holaMundo5 = function () {
    return 5;
};
var holaMundo6 = function () {
    var a = 2;
    return a + 3;
};
var saludar = function (nombre) { return "Hola" + nombre; };
var saludarConApellido = function (nombre, apellido) { return "HOla " + nombre + " " + apellido; };
console.log(saludarConApellido("Santiago", "Lema"));
