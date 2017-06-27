/**
 * Created by slema on 3/6/17.
 */
let arreglo = [
    {
        nombre: "Katherine",
        apellido: "Vivanco",
        id: 1,
        nota: 1
    },
    {
        nombre: "Geomara",
        apellido: "Vásquez",
        id: 2,
        nota: 2
    },
    {
        nombre: "Katherine",
        apellido: "Vásquez",
        id: 3,
        nota: 2
    }
];
let resultado = arreglo.filter(function(value,indice, arreglo){
    return value.id > 1
});
