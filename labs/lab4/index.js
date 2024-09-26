const express = require('express')
const app = express()
const port = 3000


// this endpoint returns a string and uses a get request
app.get('/hello', (req, res) => {  
    res.send("Hello Express JS")
})


// this endpoint is a get request that takes 2 parameters via query string
// and returns them as a JSON string. It has defaults to catch if one parameter
// is not provided
app.get("/user", (req, res) => {
    let response = req.query
    if (!response["firstname"]) {
        response["firstname"] = "Pritesh"
    }
    if (!response["lastname"]) {
        response["lastname"] = "Patel"
    }
    response = JSON.stringify(response)
    res.send(response)
})


// this endpoint is a post request that takes the parameters as a route and
// returns them as a json string
app.post("/user/:firstname/:lastname", (req,res) => {
    let response = JSON.stringify(req.params)
    res.end(response)
})


app.listen(port, () => {
    console.log("Server running on port: " + port)
})