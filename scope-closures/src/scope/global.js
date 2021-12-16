//La doble asignación de una variable puede ser una mala practica

var globalvar1 = "Esta es una variable global ☹ 1";
var globalvar1 = "modificado";//Re declaración de variables con var (mala practica)
let globalvar2 = "Esta es una variable global ☹ 2";
const globalvar3 = "Esta es una variable global ☹ 3";

const mi_funcion = () =>{
    globalvar = "Esta es una variable global ☹";//Declaración de variables sin palabras reservadas(mala practica)
}

mi_funcion();

console.log(globalvar1);

let globalvar2 = "modificado";//Error, no podemos volver a declarar una variable previamente declarada con let