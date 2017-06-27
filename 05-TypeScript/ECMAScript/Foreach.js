/**
 * Created by slema on 29/5/17.
 */
var arreglo = [1, 2, 4, 5, 6];
var resultado = arreglo.forEach(function (valor, indice, arr) {
    console.log("el valor es " + valor + "\nel indice es " + indice + "\nel arreglo es " + arr);
});
console.log("resultdo = " + resultado);
