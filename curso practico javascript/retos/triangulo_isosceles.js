let lado1, lado2,lado3;

function validarIsosceles(lado1,lado2,lado3){

    if(lado1 === lado2 && lado1 !== lado3) return alturaIsosceles(lado1,lado3);
    else if(lado2 === lado3 && lado2 !== lado1) return alturaIsosceles(lado2,lado1);
    else if(lado3 === lado1 && lado3 !== lado2) return alturaIsosceles(lado3,lado2);
    return "No es isosceles";
}

function alturaIsosceles(lado,base){
    return Math.sqrt((lado*lado)-((base*base)/4));
}
console.log(validarIsosceles(4,5,4).toFixed(2));