// ==============================================================================
// DEPENDENCIES
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
// ==============================================================================


// ==============================================================================
// EXPRESS CONFIGURATION
const app = express();
var PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
// ==============================================================================


// ==============================================================================
// ROUTER
require("./app/routing/apiRouters.js")(app);
require("./app/routing/htmlRouters.js")(app);
// ==============================================================================


// ==============================================================================
// LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
// ==============================================================================
