//dependencies imported here along with other js files
const generateHTML = require('./src/generateHTML');
const inquirer = require('inquirer');
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");
const { writeFile, copyFile } = require('./utils/genFiles');

//holds are team objects array
const teamArray = [];
//id values
let uniqueId = 1;

//ask user wat the name of the person and select a role for them
function promptUser(answers) {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "what is your role?",
            choices: ["Engineer", "Intern", "Manager"]
        },
    ]).then((res) => {
        // can use a switch case instead of if then statement
        console.log(res)
        if (res.role === "Engineer") {
            inquirer.prompt([
                {
                    name: "name",
                    message: "What is your name?",
                    type: "input"
                },
                {
                    name: "github",
                    type: "input",
                    message: "What is your github Username?"
                },
                {
                    name: "email",
                    type: "input",
                    message: "What is your email?"
                }
            ]).then((engineerRes) => {
                var newEngineer = new Engineer(engineerRes.name, uniqueId, engineerRes.email, engineerRes.github);
                uniqueId++;
                console.log(newEngineer);
                teamArray.push(newEngineer);
                addUser();
                
            });

        } else if (res.role === "Intern") {
            inquirer.prompt([
                {
                    name: "name",
                    message: "What is your name?",
                    type: "input"
                },
                {
                    name: "email",
                    type: "input",
                    message: "What is your email?"
                },
                {
                    name: "school",
                    type: "input",
                    message: "Where did you graduate from college?"
                }
            ]).then((internRes) => {
                var newIntern = new Intern(internRes.name, uniqueId, internRes.email, internRes.school);
                uniqueId++;
                console.log(newIntern)
                teamArray.push(newIntern);
                addUser();
            });
        } else if (res.role === "Manager") {
            inquirer.prompt([
                {
                    name: "name",
                    message: "What is your name?",
                    type: "input"
                },
                {
                    name: "email",
                    type: "input",
                    message: "What is your email?"
                },
                {
                    name: "office",
                    type: "input",
                    message: "What is your office number?"
                }
            ]).then((managerRes) => {
                var newManager = new Manager(managerRes.name, uniqueId, managerRes.email, managerRes.office);
                uniqueId++;
                console.log(newManager);
                teamArray.push(newManager);
                addUser();
            });
        };

    })
        .catch((err) => {
            console.log(err);
        });

};

function gen(){
    generateHTML(teamArray)
    .then(pageHTML => { 
        return writeFile(pageHTML); 
    })
    .then(writeFileResponse => {
         return copyFile();
    });
}

function addUser(){
    inquirer.prompt([
        {   
            name: "continue",
            message: "Do you want to add another team member?",
            type: "confirm",
            default: false
        }
    ]).then((confirmRes) => {
        if(confirmRes.continue){
            return promptUser();
        } else {
            //return gen();
            console.log(teamArray);
            return writeFile(generateHTML(teamArray));
        }
    });

    console.log(teamArray);
};

promptUser()
//   .then(promptRole)
//   .then(teamData => {
//       return console.log(teamData);
//   });