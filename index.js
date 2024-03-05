const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js');

// function to prompt user for input
const promptUser = () => {
return inquirer.prompt([
{
type: 'input',
name: 'title',
message: 'Enter the Title of your project:'
},
{

type: 'input',
name: 'description',
message: 'Enter a description of your project:'
},
{

type: 'input',
name: 'installation',
message: 'Enter installation instructions:'
},
{
                    
type: 'input',
name: 'usage',
message: 'Enter usage information:'
},
{
                            
type: 'input',
name: 'contributing',
message: 'Enter Contributing guidelines:'
},
{
                                    
type: 'input',
name: 'test',
message: 'Enter test instructions:'
},
{
                                            
type: 'list',
name: 'license',
message: 'Choose a license for your application:',
choices: ['MIT','Apache', 'GPL', 'None']
},
{
type: 'input',
name: 'github',
message: 'Enter your GitHub username:'
},
{  
type: 'input',
name: 'email',
message: 'Enter your email address:'
}
]);
};

// function to write README file
const writeToFile = (fileName, data) => {
fs.writeFile(fileName, data, err => {
if (err) {
    console.error('Error writing README file:', err);
} else { 
    console.log('README file generated successfully!');
}
});
};

//function to initialize app
 const init = () => {
promptUser()
.then(answers => {
const readmeContent = generateMarkdown(answers);
writeToFile('README.md' , readmeContent);
})
.catch(err => console.error(err));
 };

 init();








