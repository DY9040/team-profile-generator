const inquirer = require('inquirer');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

const employeeList = [];

function Questions() {

};
    
    const pickManager = () => {
        return inquirer
        .prompt([
            { 
                type: 'text',
                name: 'name',
                message: 'What is the team Managers name? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a team manager name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the team Managers id #? (Required)',
                validate: idInput => {
                    if(idInput) {
                        return true;
                    } else {
                        console.log('Please enter a team manager id #!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the team Managers email? (Required)',
                validate: emailInput => {
                    if(emailInput) {
                        return true;
                    } else {
                        console.log('Please enter a team manager email!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'office',
                message: 'What is the team Managers office #? (Required)',
                validate: officeInput => {
                    if(officeInput) {
                        return true;
                    } else {
                        console.log('Please enter a team manager office #!');
                        return false;
                    }
                }
            }
        ])
        .then(employeeData => {
            const manager = new Manager(employeeData.name, employeeData.id, employeeData.email, employeeData.office)
            employeeList.push(manager);
        });
    };


    ////////////////////////////////// select Team////////////////////////////////////
    const selectTeam = morePeople => {
        return inquirer.prompt([
            {
                type: 'list',
                name: 'type',
                message: 'What type of employee do you want to add to the team?',
                choices: ['Engineer', 'Intern', 'Quit']
            }
            .then(({type}) => {
                if (type === 'Engineer'){
                    return addEngineer();
                } else if (type === 'Intern'){
                    return addIntern();
                } else if (type === 'Quit'){
                    return generatePage(employeeList);
                }
            })
        ])
    }

    ///////////////////// select Team////////////////////////////////

    const addEngineer = () => {

        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is your Engineer's name? (Required)",
                validate: engineerNameInput => {
                    if (engineerNameInput){
                        return true;
                    } else {
                        console.log("Please enter the Engineer's name!'");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the ID # of the Engineer? (Required)",
                validate: engineerIdInput => {
                    if (engineerIdInput){
                        return true;
                    } else {
                        console.log("Please enter the ID # of the Engineer!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the Engineer's email address? (Required)",
                validate: engineerEmailInput => {
                    if(engineerEmailInput){
                        return true;
                    } else {
                        console.log("Please enter the Engineer's email address!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "Enter the Engineer's github username. (Required)",
                validate: engineerGithubInput => {
                    if(engineerGithubInput){
                        return true;
                    } else {
                        console.log("Please enter the Engineer's github username!");
                        return false;
                    }
                }
            }
        ])
        .then(employeeData => {
            const engineer = new Engineer(employeeData.name, employeeData.id, employeeData.email, employeeData.github)
            employeeList.push(engineer);
        })
        .then(data => {
            return selectTeam(data)
        })
    }

    const addIntern = () => {

        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is your Intern's name? (Required)",
                validate: internNameInput => {
                    if (internNameInput){
                        return true;
                    } else {
                        console.log("Please enter the Intern's name!'");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is your Engineer's id #? (Required)",
                validate: internIdInput => {
                    if (internIdInput){
                        return true;
                    } else {
                        console.log("Please enter the Engineer's Id #!'");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is your Intern's email address? (Required)",
                validate: internEmailInput => {
                    if (internEmailInput){
                        return true;
                    } else {
                        console.log("Please enter the Intern's email address!'");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "What is your Interns's  School name? (Required)",
                validate: internSchoolInput => {
                    if (internSchoolInput){
                        return true;
                    } else {
                        console.log("Please enter the Intern's School name!'");
                        return false;
                    }
                }
            }
        ])
        .then(employeeData => {
            const intern = new Intern(employeeData.name, employeeData.id, employeeData.email, employeeData.school)
            employeeList.push(intern);
        })
        .then(data =>{
            return selectTeam(data)
        })
    };