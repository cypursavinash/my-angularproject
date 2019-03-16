var express = require("express");
var app = express();
var PORT = 7001;
var dataSet = []
var reqest = []

dataSet.push({ question: "select-any", id: "101", option:["tea","coffy"]});
reqest.push({ appid: "102", responce: "food" })
app.use(express.json());

app.get('/question', function (req, res)  {
    
    console.log("You requested for a user");
    console.log(dataSet)
    res.json(dataSet)
    });
app.post('/question1', function (req, res) 
{
    console.log("your reqest for a user");
    
    let data = req.body
    dataSet.push(data)
    console.log(dataSet)
    res.json(dataSet)
   
});

app.get('/question', function (req, res)  {
    
    console.log("You requested for a user");
    console.log(reqestt)
    res.json(reqest)
    });
app.post('/question' , function (req, res) 
{
    console.log("your reqest for a user");
    let data = req.body
    console.log(data)
    res.json(reqest)
   
});


app.listen(PORT, function () {
    console.log("We Are Live On Server  " + PORT)
})
