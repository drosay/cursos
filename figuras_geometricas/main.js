//Constructor del cuadrado
function square(side){
    this.side = side;
    this.perimeter = function(){
        return `El perimetro del cuadrado es: ${this.side*4}cm`;
    }
    this.area = function(){
        return `El area del cuadrado es: ${this.side*this.side}cm^2`;
    }
    
}
//Constructor del triangulo
function triangle(side1,side2,base,altura){
    this.side1 = side1;
    this.side2 = side2;
    this.base = base;
    this.altura = altura;
    this.perimeter = function(){
        return `El perimetro del triangulo es: ${this.side1+this.side2+this.base}cm`;
    }
    this.area = function(){
        return `El area del triangulo es: ${(this.base*this.altura)/2}cm^2`;
    }
    
}

//Constructor del circulo
function circle(radio){
    const PI = Math.PI;
    this.radio = radio;
    this.perimeter = function(){
        return `La circunferencia del circulo es: ${((this.radio+this.radio)*PI).toFixed(2)}cm`;
    }
    this.area = function(){
        return `El area del circulo es: ${((this.radio*this.radio)*PI).toFixed(2)}cm^2`;
    }
    
}

let cuadrado = new square(5);
cuadrado["area"]();
//Funciones
function calculations(buttons,shape_type,results){
    for(let index in buttons){
        index = Number(index);
        buttons[index].addEventListener('click',function(e){
            e.preventDefault();
            const button_pressed = this.value;
            switch(shape_type){
                case "square":
                    const square1 = new square(0 | document.getElementById("side").value);
                    results.innerHTML = `<p>${square1[button_pressed]()}</p>`;
                    break;
                case "triangle":
                    //sides
                    const side1 = 0 | document.getElementById("side1").value;
                    const side2 = 0 | document.getElementById("side2").value;
                    const base = 0 | document.getElementById("base").value;
                    const height = 0 | document.getElementById("height").value;
                    const triangle1 = new triangle(side1,side2,base,height);
                    results.innerHTML = `<p>${triangle1[button_pressed]()}</p>`;
                    break;
                case "circle":
                    const circle1 = new circle(0 | document.getElementById("radius").value);
                    results.innerHTML = `<p>${circle1[button_pressed]()}</p>`;
                    break;
                            
            }
        });
        if(index == 1)break;
    }
}

//Figuras del dom
const figures = document.getElementsByName("geometric");

//Añadir eventos a cada nodo de la figura del dom
for(let index in figures){
    index = Number(index);
    figures[index].addEventListener('click',function(){
        const buttons = document.getElementsByTagName("button");
        const inputs = document.getElementById("inputs");
        const results = document.getElementById("results");
        results.innerHTML = "";
        switch(this.value){
            case "square":
                inputs.innerHTML = 
                    `
                        <h2>Introducir medida del lado del cuadrado</h2>
                        <label for="side">Lados</label>
                        <input type="number" id="side" required>
                        <br>
                        <button value="perimeter">Perimetro</button>
                        <button value="area">Área</button>
                    `;

                break;
            case "triangle":
                inputs.innerHTML = 
                    `
                        <h2>Introdusca medidas de todos los lados del triangulo</h2>
                        <label for="side1">Lado #1</label>
                        <input type="number" name="side" id="side1" required>
                        <br>
                        <label for="side2">Lado #2</label>
                        <input type="number" name="side" id="side2" required>
                        <br>
                        <label for="base">Lado #3</label>
                        <input type="number" name="base" id="base" required>
                        <label for="base"><-Base</label>
                        <br>
                        <label for="altura">Altura</label>
                        <input type="number" name="altura" id="height">
                        <br>
                        <button value="perimeter">Perimetro</button>
                        <button value="area">Área</button>
                    `;
                break;
            case "circle":
                   inputs.innerHTML =
                    `
                    <h2>Introdusca el radio del circulo</h2>
                    <label for="radius">Radio</label>
                    <input type="number" name="radius" id="radius" required>
                    <br>
                    <button value="perimeter">Circunferencia</button>
                    <button value="area">Área</button>
                    `;
                break;
        }
        
        calculations(buttons,this.value,results);
        
    });
    if(index==2)break;
}