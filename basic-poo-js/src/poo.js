const dylan = {
    name: "Dilan de la Rosa",
    age: 24,
    approvedCourses: [
        "Curso Básico de Javascript",
        "Curso de Programación Orientada a Objetos",
    ],
    aprobarCursos(curso){
        this.approvedCourses.push(curso);
    },
};

dylan.aprobarCursos("Curso Práctico de Javascript");

console.log(dylan);

function Student(name,age,approvedCourses){

    this.name = name;
    this.age = age;
    this.approvedCourses = approvedCourses;

    this.aprobarCursos = function(curso){
        this.approvedCourses.push(curso);
    };
};

Student.prototype.mostrarse = function(){
    console.log(this);
};

const juancho = new Student("Juancho Mendez",35,["Curso de Valer Verga","Curso de llorar hasta dormir"]);

juancho.aprobarCursos("Curso de chupar culo sucio");
juancho.mostrarse();