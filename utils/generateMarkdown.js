// Adds license badge, link, and info based off user input and adds to the prompt object
function renderLicenseBadge(answers) {
  
    switch(answers.license) {
      case 'MIT':
            
            answers["badge"] = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            answers["licenseLink"] = 'https://opensource.org/licenses/MIT';
            answers["licenseInfo"] = `Copyright 2021 Grimace
            Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
            
            The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
            
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;

            break;
      case 'GNU':
            
            answers["badge"] = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) ';
            answers["licenseLink"] = 'https://www.gnu.org/licenses/gpl-3.0';
            answers["licenseInfo"] = `    Copyright (C) 2021  Grimace
            This program is free software: you can redistribute it and/or modify
            it under the terms of the GNU General Public License as published by
            the Free Software Foundation, either version 3 of the License, or
            (at your option) any later version.
        
            This program is distributed in the hope that it will be useful,
            but WITHOUT ANY WARRANTY; without even the implied warranty of
            MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
            GNU General Public License for more details.
        
            You should have received a copy of the GNU General Public License
            along with this program.  If not, see <https://www.gnu.org/licenses/>.`;



            break;
      case 'Apache':
            
            answers["badge"] = '[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)';
            answers["licenseLink"] = 'https://opensource.org/licenses/Apache-2.0';
            answers["licenseInfo"] = `   Copyright 2021 Grimace
            Licensed under the Apache License, Version 2.0 (the "License");
            you may not use this file except in compliance with the License.
            You may obtain a copy of the License at
         
              http://www.apache.org/licenses/LICENSE-2.0
         
            Unless required by applicable law or agreed to in writing, software
            distributed under the License is distributed on an "AS IS" BASIS,
            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            See the License for the specific language governing permissions and
            limitations under the License.`;


            break;
      case 'None':
            
            answers["badge"] = '';
            answers["licenseLink"] = '';
            answers["licenseInfo"] = ``;


            break;
    }

    return answers;
  }
  

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${data.badge}
  ## Table of Contents
  #### - [Installation](#installation)
  #### - [Usage](#usage)
  #### - [Contributions](#contributions)
  #### - [Tests](#tests)
  #### - [License](#license)
  #### - [Questions](#questions)
  
  ## [Installation](#installation)
  ${data.install} 
  ## [Usage](#usage)
  ${data.usage}
  ## [Contributions](#contributions)
  ${data.contribution}
  ## [Tests](#tests)
  ${data.tests}
  ## [License](#license) - ${data.license} 
  ${data.licenseLink}
  ${data.licenseInfo}
  ## [Questions](#questions)
  Find me on Github at: [${data.github}](https://www.github.com/${data.github})
  
  or
  
  Email me at: ${data.email}
`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge

}