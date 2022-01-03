class WorkGroup{
    constructor({
        name,
        leader = {},
        members = [],
        goals = [],
    }){
        this.name = name;
        this.leader = leader;
        this.members = members;
        this.goals = goals;
    }

    addNewGoal(goal){
        this.goals.push(goal);
    }
}

exports.WorkGroup = WorkGroup;