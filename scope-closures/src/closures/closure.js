

const tienda = function(){

    let totalCelularesVendidos = 0;

    const venderCelular = function(celularesVendidos){
        totalCelularesVendidos+=celularesVendidos;
        console.log(totalCelularesVendidos);
    }

    return venderCelular;
}

let ofrecerCeluco = tienda(); //1 se asigna la ejecución de la función a la variable, al asignarla se ejecuta la función y retorna la referencia del closure que en ese caso es venderCelular();

ofrecerCeluco(1); //2 al invocar la función por medio de la variable no se está ejecutando tienda(); sinó venderCelular(); porque tienda(); solo se ejecutó UNA SOLA VEZ y por lo tanto la variable totalCelularesVendidos ya está inicializada en la ejecución de la función tienda();

ofrecerCeluco(1); //3 como ya la variable totalCelularesVendidos estaba inicializada y modificada en 1 anteriormente al ejecutar de nuevo venderCelular(); se vuelve a modificar totalCelularesVendidos sobre el valor que ya tenía que es 1, y termina siendo 1 + el parametro que le pasamos.