// ===============================================================================
// DEPENDENCIES
var path = require("path");
// ===============================================================================


// ===============================================================================
// ROUTING
module.exports = function(app) {

  // Sends user to survey HTML
  app.get("/survey", function(request, response) {
      response.sendFile(path.join(__dirname, "../public/survey.html"));
    });

  // Sends user to home HTML
  app.get("*", function(request, response) {
      response.sendFile(path.join(__dirname, "../public/home.html"));
    });
    
};
// ===============================================================================
