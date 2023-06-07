// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title the project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Describe your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the steps for installation?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'How would a user use your app?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Who contributed?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Test Instructions:',
        name: 'test'
    },
    {
        type: 'list',
        message: 'Choose license:',
        choices: [
            'Apache 2.0 License',
            'Boost Software License 1.0',
            'BSD 3-Clause License',
            'The MIT License',
            'The Do What the Fuck You Want to Public License',
            'None'
        ],
        name: 'license'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
     err ? console.log(err) : console.log("Successfully created README.md!"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (answers => writeToFile('README.md', generateMarkdown(answers)))
}

// Function call to initialize app
init();
