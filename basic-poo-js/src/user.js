class User {
    constructor({
        username,
        password,
        name,
        age,
        tasks = [],
        goals = [],
    }){
        
        this.username = username;
        this.password = password;
        this.name = name;
        this.age = age;
        this.tasks = tasks;
        this.goals = goals;

    }

    addTask(task,expDate){
        this.tasks.push({"task":task,"expDate":expDate});
    }
}

exports.User = User;