/**
 * Created by slema on 29/5/17.
 */

let arreglo = [4,7,6,5,8,10,4];
let resultado = arreglo.map(function (valor, indice, arreglo) {
    return valor*0.2;
});
console.log(resultado);
