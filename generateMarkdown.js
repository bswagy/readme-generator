const renderBatch = (license) => {
    if (license==="MIT") {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }

   if (license==="Apache") {
       return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
       }

     if (license==="GPL") {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
        }
     if (license==="none") {
       return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
            }

}

// generateMarkdown.js 

// Function to generate markdown content for README
 const generateMarkdown = (data) => { 
return `
 # ${data.title} 
${renderBatch(data.license)}
## Description 
 ${data.description} 
 
## Table of Contents
- [Installation](#installation) 
- [Usage](#usage) 
- [Contributing](#contributing) 
- [Tests](#tests)
- [License](#license) 
- [Questions](#questions) 
## Installation 
  ${data.installation} 
  
## Usage 
  ${data.usage} 
  
## Contributing 
  ${data.contributing} 
  
## Tests 
  ${data.test} 
  
## License
   This application is covered under the ${data.license} license. 
   
## Questions For questions or inquiries, please contact: 
- GitHub: [${data.github}](https://github.com/${data.github}) 
- Email: ${data.email} 
 `; 
}; 

module.exports = generateMarkdown;
