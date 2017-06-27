/**
 * Created by slema on 3/6/17.
 */

const fs = require('fs');
const express = require('express');
const calculadora = require('twj-a-lema');
let a= 2;
let b= 3;
let resultado= calculadora.calculadoraUdla.sumar(a,b);
console.log(`resultado es ${resultado}`);
console.log('empieza');

//callback

fs.readFile('Texto.txt', 'utf8' ,function(err, data) {
    if (err) throw err;
    console.log(data);
});
console.log('termina');


// Encrypt a string using the BCrypt algorithm.
calculadora.calculadoraUdla.passwords.encryptPassword({
    password: '1234',
}).exec({
// An unexpected error occurred.
    error: (err) => {
        console.log(`Error: ${err}`)
    },
// OK.
    success:  (result)=> {
        console.log(`Resultado: ${result}`)
    },
});