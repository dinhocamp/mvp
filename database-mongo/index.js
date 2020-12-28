var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");

var db = mongoose.connection;

db.on("error", function () {
  console.log("mongoose connection error");
});

db.once("open", function () {
  console.log("mongoose connected successfully");
});

var employeeSchema = mongoose.Schema({
  name: String,
});

var employee = mongoose.model("employee", employeeSchema);

// var selectAll = function (callback) {
//   Item.find({}, function (err, items) {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, items);
//     }
//   });
// };
let save =
  (employee,
  (err, employee) => {
    if (err) {
      console.error("error", err);
    } else {
      console.log(employee);
    }
  });

module.exports.save = save;
