# Node JS Open API Integration

Integrations of different open api with Node JS and Express

---
## Requirements

For development, you will only need Node.js and a node global package, NPM, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v16.15.1

    $ npm --version
    8.11.0


### Steps to run the projcet
  1. $ npm install
  2. $ npm start
  3. Open http://localhost:3000/doc/ in browser for swagger

### Steps to check unit testing coverage
  1. $ npm install (if not done in above steps)
  2. $ npm run coverage
  3. Navigate to coverage folder --> nodejs-open-api/coverage/index.html for HTML output or check console for text output
