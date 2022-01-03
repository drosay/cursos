const User = require("./user").User;
const Goal = require("./goal").Goal;
const WorkGroup = require("./workgrup").WorkGroup;

const usuario1 = new User({
    name:"Sancho Pancho",
    age:17,
    password: "********",
    username: "sancho503",
});

usuario1.addTask("Cocinar Pastas","3 horas");
usuario1.addTask("Estudiar Javascript","2 horas");

const goal1 = new Goal({
    name: "Sacar la Basura",
    expDate: "5 horas",
});

goal1.addGoalTask("Recoger Basura del Baño");
goal1.addGoalTask("Recoger Basura de la cocina");
goal1.addGoalTask("Meter todo en una bolsa");

const grupo1 = new WorkGroup({
    name: "Familia",
    leader: usuario1,
});
console.log(usuario1);
console.log(goal1);
grupo1.addNewGoal(goal1);
console.log(
    `
    metas que debe alcanzar el grupo de trabajo:
    `
    ,grupo1.goals,
);


console.log(new Date);
