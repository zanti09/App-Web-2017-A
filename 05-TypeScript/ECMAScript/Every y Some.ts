/**
 * Created by slema on 29/5/17.
 */
let arreglo = [4,7,6,5,8,10,4];
let resultado2 = arreglo.every(
    (valor,indice,arreglo) => {
        return (valor>=2);
    }
);

console.log(resultado2);

let resultado2 = arreglo.some(
    (valor,indice,arreglo) => {
        return (valor>=2);
    }
);