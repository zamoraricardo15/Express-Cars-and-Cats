var express = require("express");
console.log("What is Express", express);
var app = express();
console.log("What is in this app", app);
app.get('/', function(request, response) {
   console.log("Object request", request);
   console.log("Object Response", response);
   response.send("<h1>Hello from Express Cars and Cats</h1>");
})
app.listen(8000, function() {
  console.log("running in port 8000");
})
app.use(express.static(__dirname + "/static"));