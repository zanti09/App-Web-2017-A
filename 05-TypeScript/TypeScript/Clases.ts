/**
 * Created by slema on 3/6/17.
 */

class Usuario {

    constructor(
        public nombre: string,
        private apellido?: string//paramtetros opcionales siempre van al final
    ){
        this.nombre=nombre;
        this.apellido=apellido;
    }

    imprimirNombre(saludo:string,titulo?:string):string{
            return `${saludo}, ${titulo} ${this.nombre} ${this.apellido}`;
    }
}

let santiago: Usuario = new Usuario("Santiago","Lema");
console.log(santiago.imprimirNombre("Hi","Sr."));