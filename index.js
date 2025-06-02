import express from "express";


const app = express()
const port = 3000;

app.get("/",(req,res)=>{  //so app is a web server and if there is a get request and and if your browser does a web request with any client, toh it can send a variety of requests like get,post,put,delete.
    res.send("Hello Cohort!");
}) //it is a callback function that takes two parameters, req and res. req is the request object and res is the response object.
//  So when you go to localhost:3000/ then
//  it will send a response of Hello Cohort! to the browser.

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