// ===============================================================================
// DEPENDENCIES
var path = require("path");
// ===============================================================================


// ===============================================================================
// ROUTING
module.exports = (app) => {

  // Sends user to survey HTML
  app.get("/survey", (request, response) => {
      response.sendFile(path.join(__dirname, "../public/survey.html"));
    });

  // Sends user to home HTML
  app.get("*", (request, response) => {
      response.sendFile(path.join(__dirname, "../public/home.html"));
    });
    
};
// ===============================================================================
