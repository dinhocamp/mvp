var express = require("express");
var bodyParser = require("body-parser");
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var items = require("../database-mongo");
const { default: axios } = require("axios");

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + "/../react-client/dist"));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.jason());
// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

// app.get("/items", function (req, res) {
//   items.selectAll(function (err, data) {
//     if (err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });
app.post("/", function (req, res) {
  console.log(res.body);
  // axios.post("/", req.body).then(function () {
  //   console.log(response);
  // }).then (resp=>{return resp});
  res.send("connecting");
});
port = 1128;
app.listen(port, function () {
  console.log(`listening to: ${port} `);
});
