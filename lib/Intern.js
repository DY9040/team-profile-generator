const Employee = require('./Employee');

class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
    getSchool() { 
        return `${this.school} is the school name!`; 
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;