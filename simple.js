var express = require("express");
var app = express();
var PORT = 6001;
var dataSet = []


dataSet.push({ name: "Priyanshu555", city: "York" });
dataSet.push({ name: "Avinash", city: "udaipur" });

app.use(express.json());

app.get('/user', function (req, res) {
    console.log("You requested for a user");
    res.json(dataSet)
    res.send(dataSet);
   
})

app.listen(PORT, function () {
    console.log("Server running port  " + PORT)
})

//delete all user 
app.delete('/messages', (req, res) => {
    return res.send("Sorry All Data Will Be Delete");
  });

  //putt all user 
app.put('/messages', (req, res) => {
    return res.send("All Data Will Be Modify/Edit");
  });
  