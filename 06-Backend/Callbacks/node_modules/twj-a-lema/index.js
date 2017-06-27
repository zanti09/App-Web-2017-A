/**
 * Created by slema on 5/6/17.
 */
let Passwords = require('machinepack-passwords');

//se importa todo el paquete en la variable passwords

exports.calculadoraUdla = {
  sumar:(n1,n2)=>{
      return n1+n2;
  },
    restar:(n1,n2)=>{
      return n1-n2;
    },
    multiplicar:(n1,n2)=>{
      return n1*n2;
    },
    passwords:Passwords
};
