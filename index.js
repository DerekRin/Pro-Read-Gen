// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('../Pro-Read-Gen/utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'project',
    message: 'What is your project name? (Required)',
    validate: projectInput => {
        if (projectInput) {
        return true;
        } else {
        console.log('You need to enter a project name!');
        return false;
        }
          }
        }, 
    {
    type: 'input',
    name: 'git_name',
    message: 'What is your gihub name? (Required)',
    validate: git_nameInput => {
        if (git_nameInput) {
          return true;
        } else {
          console.log('You need to enter a github name!');
          return false;
        }
      }
    },    
    {
    type: 'input',
    name: 'email',
    message: 'What is your email (Required)',
    validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('You need to enter a email!');
          return false;
        }
      }
    },
    {
    type: 'input',
    name: "description",
    message: "Can you provide a description?",
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('You need to enter a project description!');
        return false;
      }
    }
    },
    {
    type: 'confirm',
    name: "Table of Contents",
    message: "Would you like to provide a Table of Contents?",
    },
    {
    type: 'input',
    name: "usage",
    message: "What is this the usage of this program?",
    },
    {
    type: 'checkbox',
    name: "License",
    message: "Did you use have any Licenses for this program?",
    choices: ['BSD', 'MIT', 'GPL'],
    },
    {
    type: 'input',
    name: "contributing",
    message: "Who contributed to this program?",
    },
    {
    type: 'input',
    name: "tests",
    message: "Describing the testing procress for this program?",
    },
    {
    type: 'input',
    name: "questions",
    message: "Where can people contact you for questions?",
    },
];


// TODO: Create a function to write README file
//markdown function that passes through fs
function writeFile(answers) {
  fs.writeFile("README.md", generateMarkdown(answers), err => {
      if (err) {
        return console.log(err);
      }
      console.log("Success! Your README.md file has been generated")
  });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
    writeFile(answers);
    });  
}

// Function call to initialize app
init();

