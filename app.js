var express = require("express");
var app = express();
//setting middleware
// app.use("/dependencies", express.static(__dirname + "/dependencies")); //Serves resources from public folder
app.use("/", express.static(__dirname + "/"));
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});
app.get("/:fileName", function(req, res) {
  res.sendFile(`src/${req.params.fileName}.html`, { root: __dirname });
});
app.listen(5000);