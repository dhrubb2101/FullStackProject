console.log("This is a test file to check if the code is running correctly.");

//bun,dino,node are execution engines for javascript
// bun is a fast JavaScript runtime like Node.js, but with a focus on performance.
// dino is a secure JavaScript and TypeScript runtime built on V8, focusing on developer experience and productivity.
// node is a popular JavaScript runtime built on Chrome's V8 engine, widely used for building server-side applications. 

//then we use npm init to initialize a new Node.js projectthat means initializing a new project with node.js environment

//then we give version of the project in three parts major.minor.patch
//major is the first part of the version number, minor is the second part, and patch is the third part.
// we get it from Semver.org

//then to use third party libraries  and the code within and them and use it we use require and import
//today we use import instead of require
//and if we are using import then we need to use type module in package.json file and change it to "module "

//express.js 
// command is 
//npm install express

// "scripts": {
//     "start": "nodemon index.js"
//   }, 
// this is the script that we use to start the server and 
// it will run nodemon index.js command

//dotenv package is used to load environment variables from a .env file into process.env.
// command is
//npm install dotenv
// and then we use it in the code by importing it
// import dotenv from "dotenv";
//environment variables are used to store sensitive information like API keys, database credentials, etc.
//they should always be stored in a .env file and not in the code. 
