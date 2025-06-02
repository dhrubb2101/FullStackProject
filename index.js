import express from "express";
import dotenv from "dotenv";
import cors from "cors"

dotenv.config() //if you have env variables in other files other than .env file then you can use this by writing path to that file in .env file

const app = express()

app.use(cors({
    origin: 'http://localhost:3000', //this is the origin that is allowed to access the server
    credentials: true,
    methods: ['GET','POST','DELETE','OPTIONS'], 
    allowedHeaders: ['Content-Type','Authorization']
})); //this is used to allow cross-origin requests, so that the server can accept requests from different origins.
//cors is a middleware that is used to enable cross-origin resource sharing, which allows the server to accept requests from different origins.

app.use(express.json())
//this is used to parse the incoming request body in JSON format,
//  so that we can access the data in the request body.

app.use(express.urlencoded({extended:true})) 
//this is used to parse the incoming request body in URL-encoded format,
// so that we can access the data in the request body.

const port = process.env.PORT || 3000; //if there is a port number in the .env file then it will use that port number otherwise it will use 3000 as the default port number.

app.get("/",(req,res)=>{  //so app is a web server and if there is a get request and and if your browser does a web request with any client, toh it can send a variety of requests like get,post,put,delete.
    res.send("Hello Cohort!");
}) //it is a callback function that takes two parameters, req and res. req is the request object and res is the response object.
//  So when you go to localhost:3000/ then
//  it will send a response of Hello Cohort! to the browser.

app.get("/piyush",(req,res)=> {
    res.send("sending response from /pyush route");
})

console.log(process.env.PORT); //this will log the port number from the .env file if it exists, otherwise it will log undefined

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//and see which route it is headin too
//route is the path of the request, 
// so if you go to localhost:3000/ then it will go to 
// the root route and it will send a response of Hello Cohort! 
// and if you go to localhost:3000/anything then 
// it will not work because there is no route defined for that.  

//express gives access to the request and response objects and it is mentioned in callback function,
// so you can use them to send a response back to the client.

//web server is an infinite loop that listens for requests and sends responses back to the client.

//in app.listen here the app is listeining for requests on port 3000.

//we run this project and enters the project from index.js file and then it will start the server and listen for requests on port 3000.
//so when you go to localhost:3000/ then it will send a response of Hello Cohort! to the browser.

//run command is node index.js

//the code line from 13-15runs first and then the code line 7-9.

//and then you restart everytime the server you make changes to the code.

//Development dependencies are the packages that are used during development and not in production.
//it's to make our life easier and we can remove it later 
// for nodemon the command is 
//npm i -D nodemon

//