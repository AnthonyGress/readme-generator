// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'

  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your e-mail address?'

  }, {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project'

  }, {
    type: 'input',
    name: 'description',
    message: 'Please enter a brief description of your project.'

  }, {
    type: 'list',
    name: 'license',
    message: 'What license does your project use?',
    choices:[
      'MIT',
      'APACHE 2.0',
      'GPL 3.0',
      'BSD 3',
      'None',
    ],
  }, {
    type: 'input',
    name: 'installation',
    message: 'What commands should be ran to install the dependencies?',
    default: "npm i"

  }, {
    type: 'input',
    name: 'test',
    message: 'What commands should be ran to run tests?',
    default: 'npm test'

  }, {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using this repo?'

  }, {
    type: 'input',
    name: 'contribute',
    message: 'What does the user need to know about contributing to this repo?',
    default: 'Please feel free to contribute to this project. Just fork it and submit a well documented pull request.'
  }
];



// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
  console.log('writing to file');
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((answers) => {
    writeToFile('README.md', generateMarkdown(answers));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

// Function call to initialize app
init();
