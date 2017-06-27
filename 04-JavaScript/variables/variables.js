/**
 * Created by slema on 22/5/17.
 */
var text="";
var text2='';
var numero = 2;
var booleano = false;
var decimal = 1.2;
var fecha = new Date();
var objeto = {
    llave:"valor",
    llave2:"valor2",

};
objeto.llave;
text = 2;
//arreglos
var arregloNumeros = [1,2];
var arregloStrings = ["a","b","c"];

var persona = {
    nombre:"",
    apellido:"",
    fechaNacimiento: new Date(),
    peso:65,
    sumar:function (a, b) {
        return a+b;
    },
    imprimirNombre:function () {
        return this.nombre + " " +this.apellido;
    }
};

delete persona.peso;

var arregloStrings = ["1","2"];
arregloStrings.push("3");
console.log(arregloStrings.pop());
arregloStrings.splice(0,1,"3");
console.log(arregloStrings);
