/**
 * Created by slema on 22/5/17.
 */
function imprimirHolaMundo() {
    console.log("hola mundo")
}

imprimirHolaMundo();

function imprimir(texto) {
    console.log(texto);
}

imprimir("Santiago");

function suma(a, b) {
    return a+b;
}

console.log(suma(1,2));

function operar2Numeros(n1, n2, funcion) {
    n1 ++;
    n2 +=2;
    funcion(n1,n2);
}

operar2Numeros(2,4,function (primerNumero, segundoNmero) {
   return primerNumero * segundoNmero;
});

[1,2,3,4].forEach(function (valorIteracion, indice, arreglo) {
   console.log(valorIteracion);
});