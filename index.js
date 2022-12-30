const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./src/html-template.js');

const teamMembers = [];
const teamIds = [];

function appStart() {
    function createManager() {
        console.log("Enter information to build your team");
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "managerName",
                    message: "What is the name of the Team Manager?",

                },
                {
                    type: "input",
                    name: "managerId",
                    message: "What is the Team Manager's ID?",
                },
                {
                    type: "input",
                    name: "managerEmail",
                    message: "What is the Team Manager's Email?"
                },
                {
                    type: "input",
                    name: "managerOfficeNumber",
                    message: "What is the Team Manager's Office Number?",
                }
            ])
            .then((responses) => {
                const manager = new Manager(
                    responses.managerName,
                    responses.managerId,
                    responses.managerEmail,
                    responses.managerOfficeNumber
                );
                teamMembers.push(manager);
                teamIds.push(responses.managerId);
                createTeam();
            });
    }

    function createTeam() {
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "teamMemberChoice",
                    message: "What is the Role of the team member you want to add?",
                    choices: [
                        "Engineer",
                        "Intern",
                        "I am done adding team members"
                    ],
                },
            ])
            .then((Choice) => {
                switch (Choice.teamMemberChoice) {
                    case "Engineer":
                        addEngineer();
                        break;
                    case "Intern":
                        addIntern();
                        break;
                    default:
                        buildTeam();
                }
            });
    }

    function addEngineer() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "engineerName",
                    message: "What is the Engineer's name?"
                },
                {
                    type: "input",
                    name: "engineerId",
                    message: "What is the Engineer's id?"
                },
                {
                    type: "input",
                    name: "engineerEmail",
                    message: "What is the Engineer's email?"
                },
                {
                    type: "input",
                    name: "engineerGithub",
                    message: "What is the Engineer's GitHub Username?"
                },

            ])
            .then((responses) => {
                const engineer = new Engineer(
                    responses.engineerName,
                    responses.engineerId,
                    responses.engineerEmail,
                    responses.engineerGithub
                );
                teamMembers.push(engineer);
                teamIds.push(responses.engineerId);
                createTeam();
            });
    }

    function addIntern() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "internName",
                    message: "What is the Intern's name?"
                },
                {
                    type: "input",
                    name: "internId",
                    message: "What is the Intern's id?"
                },
                {
                    type: "input",
                    name: "internEmail",
                    message: "What is the Intern's email?"
                },
                {
                    type: "input",
                    name: 'internSchool',
                    message: "What is the Intern's school?"
                },
            ])
            .then((responses) => {
                const intern = new Intern(
                    responses.internName,
                    responses.internId,
                    responses.internEmail,
                    responses.internSchool
                );
                teamMembers.push(intern);
                teamIds.push(responses.internId);
                createTeam();
            });
    }

    function buildTeam() {
        if(!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR);
        }
        fs.writeFileSync(distPath, render(teamMembers), "utf-8");
    }

    createManager();
}

appStart();