// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
switch (license) {
  case 'MIT':
    let badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
    return badge;
  case 'APACHE 2.0':
    let badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
    return badge;
  case 'GPL 3.0':
    let badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
    return badge;
  case 'BSD 3':
    let badge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]';
    return badge;
  default:
    break;
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  switch (license) {
    case 'MIT':
      let link = '(https://opensource.org/licenses/MIT)';
      return link;
    case 'APACHE 2.0':
      let link = '(https://opensource.org/licenses/Apache-2.0)';
      return link;
    case 'GPL 3.0':
      let link = '(https://www.gnu.org/licenses/gpl-3.0)';
      return link;
    case 'BSD 3':
      let link = '(https://opensource.org/licenses/BSD-3-Clause)';
      return link;
    default:
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {

  if (license == ""){
    let section = "";
    return section;
  }
  else {
    let section = "## License " + license + "\n\n Please feel free to fork and collaborate with me on this project. Techx-Guy™ [2021-Present](https://github.com/techx-guy) All Rights Reserved. \n\n Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the Software), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: \nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."
    return section;
  }


}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  console.log('start');
  let content = `
  # ${data.title}
  ##### ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)} ${data.github} [Video Walk Through](url) ${data.license}
  ## Table of Contents
  * [Description](#Description)
  * [Usage](#Usage)
  * [Installation](#Installation)
  * [Tests](#Tests)
  * [License](#License)
  * [Contributions](#Contributions)
  
  ## Description

  ${data.description}
  

  ## Usage

  ${data.usage}

  ## Installation 

  To install please run ${data.installation}
  
  ## Tests

  To test please run ${data.test}

  ${renderLicenseSection(data.license)}

  ## Contributions 

  ${data.contribute}
  
  If you have any questions, please contact me at ${data.email}
  `

  console.log('end');
  return content;
};

module.exports = generateMarkdown;
