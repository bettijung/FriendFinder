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
app.use("/static", express.static(path.join(__dirname, "public")));

// ==============================================================================


// ==============================================================================
// ROUTER
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);
// ==============================================================================


// ==============================================================================
// LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
// ==============================================================================
