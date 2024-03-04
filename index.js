const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

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
choices: ['MIT,'Apache', 'GPL', 'None']
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








