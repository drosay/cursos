var bear = "soy un oso fuera de la cueva";

const cave = () =>{

    var bear = "soy un oso dentro de la cueva";

    const looking = () => bear;

    console.log(looking());

    //Como creamos la variable bear dentro de la función la función trabaja sobre la nueva variable y no toma en cuenta la variable bear global, no reasignandola, porque bear local solo existe en la función, esto es ambito léxico ó lexical scope.

    //Lo que hace javascript es buscar la variable en cuestión de adentro hacia afuera, si no la cuentra se genera una excepción.

}

cave();
console.log(bear);