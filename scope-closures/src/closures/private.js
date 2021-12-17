const silla = function(){
    let material = 'metal';

    return {
        getMaterial: function(){
            return material;
        },
        setMaterial: function(nuevoMaterial){
            material = nuevoMaterial;
        },
    }
}

const nuevaSilla = silla();
console.log(nuevaSilla.getMaterial());
nuevaSilla.setMaterial("madera");
console.log(nuevaSilla.getMaterial());