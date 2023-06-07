// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return ''
  } else if (license === 'Apache 2.0 License') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'Boost Software License 1.0') {
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  } else if (license === 'BSD 3-Clause License') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  } else if (license === 'The MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'The Do What the Fuck You Want to Public License') {
    return '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return ''
  } else if (license === 'Apache 2.0 License') {
    return '(https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'Boost Software License 1.0') {
    return '(https://www.boost.org/LICENSE_1_0.txt)'
  } else if (license === 'BSD 3-Clause License') {
    return '(https://opensource.org/licenses/BSD-3-Clause)'
  } else if (license === 'The MIT License') {
    return '(https://opensource.org/licenses/MIT)'
  } else if (license === 'The Do What the Fuck You Want to Public License') {
    return '(http://www.wtfpl.net/about/)'
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `##License <br />
    Licensed under ${license}. Find more information here ${renderLicenseLink(license)}`
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Testing

  ${data.test}

  ${renderLicenseSection(data.license)}
  

  ## Questions
  
  Feel free to contact me at:
  * GitHub Username: ${data.github}
  * Email: ${data.email}
`;
}

module.exports = generateMarkdown;
