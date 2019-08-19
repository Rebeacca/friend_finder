import path from "path";
import express from "express";

var app = express(); // create express server
var PORT = process.env.PORT || 8000;

require("./app/routing/apiRoutes.js").default(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function () {
	console.log("Listening on port: " + PORT);
});

