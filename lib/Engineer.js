const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        Super(name, id, email)
        this.github = github;
    }
    getGithub() { 
        return `${this.github} is the Github Username!`
    };

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;