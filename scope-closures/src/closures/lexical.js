const fabrica = function (cant){
    let total_sillas = cant;
    const fabricarSilla = function(){
        return ++total_sillas;
    }
    return fabricarSilla;
}

const sillas_de_madera = fabrica(1);

console.log(`Sillas de madera: ${sillas_de_madera()}`);
console.log(`Sillas de madera: ${sillas_de_madera()}`);


const sillas_de_metal = fabrica(2);
console.log(`Sillas de metal: ${sillas_de_metal()}`);
console.log(`Sillas de metal: ${sillas_de_metal()}`);