/**
 * Created by slema on 29/5/17.
 */
function holaMundo(){
    console.log("hola mundo")
}

let holaMundo2 = function () {
    console.log("hola mundo")
};

let holaMundo3 = ()=>{
    console.log("hola mundo")
};

let holaMundo4 = ()=> console.log("Hola mundo");

let holaMundo5 = function () {
    return 5;
};

let holaMundo6= () => {
    let a = 2;
    return a + 3;
};

let saludar = nombre => "Hola"+nombre;
let saludarConApellido = (nombre,apellido) => `HOla ${nombre} ${apellido}`;

console.log(saludarConApellido("Santiago","Lema"));
