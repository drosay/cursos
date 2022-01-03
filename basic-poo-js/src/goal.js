class Goal{
    constructor({
        name,
        expDate,
        goalTasks = [],
    }){
        this.name = name;
        this.expDate = expDate;
        this.goalTasks = goalTasks;
    }

    addGoalTask(task){
        this.goalTasks.push(task);
    }
}

exports.Goal = Goal;