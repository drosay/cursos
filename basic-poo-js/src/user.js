class User {
    constructor({
        username,
        password,
        name,
        age,
    }){
        
        this._username = username;
        this._password = password;
        this._name = name;
        this._age = age;
        this._tasks = [];
        this._goals = [];

    }

    addTask(task,expDate){
        this._tasks.push({"task":task,"expDate":expDate});
    }

    removeTask(task){
        this._tasks = this._tasks.map( (item) => {
            return item.task !== task;
        } );
    }

    get username(){
        return this._username;
    }

    set username(new_username){
        this._username === undefined ? this._username = new_username : console.log(`No puedes cambiar el nombre de usuario más de una vez.`);
    }

    get password(){
        return this._password;
    }

    set password(new_password){
        this._password === undefined ? this._password = new_password : console.log(`Ingresa tu anterior contraseña para asignar una nueva por favor.`);
    }

    get name(){
        return this._name;
    }

    set name(new_name){
        this._name = new_name;
    }

    get age(){
        return this._age;
    }

    set age(new_age){
        this._age === undefined ?
            new_age > 120 || new_age < 1 ?
                console.log("Ingrese una edad válida por favor!")
                : this._age = new_age
            : console.log("Ingresa la contraseña para cambiar tu edad.");
    }

    get tasks(){
        return this._tasks;
    }

    set tasks(new_tasks){
        console.error(new_tasks);
        console.error("Solicitud rechazada. . .");
    }

    get goals(){
        return this._goals;
    }

    set goals(new_goals){
        console.error(new_goals);
        console.error("Ohhh. . ., no podemos hacer esto. . .");
    }
}

exports.User = User;