

// generateMarkdown.js 

// Function to generate markdown content for README
 const generateMarkdown = (data) => { 
return `
 # ${data.title} 

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
