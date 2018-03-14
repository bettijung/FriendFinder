// ===============================================================================
// DEPENDENCIES
var path = require("path");
var friends = require("../data/friends");
// ===============================================================================


// ===============================================================================
// ROUTING
module.exports = function(app) {

    app.get("/api/friends", function(request, response) {
      response.json(friends);
    });

    app.post("/api/friends", function(request, response) {
        // friends.push(request.body);
        // response.json(true);

// OR****
        // var newPerson = {
        //     name: req.body.name,
        //     photo: req.body.photo,
        //     scores: JSON.parse(req.body.scores)
        // }

        // var diffArray = [];

        // friends.forEach(function(item, index) {
        //     var difference = 0;
        //     for (var i = 0; i < item.scores.length; i++) {
        //         difference += Math.abs(item.scores[i] - newPerson.scores[i]);
        //     }
        //     diffArray.push({ "difference": difference, "index": index });
        // });

        // diffArray.sort(function(a, b) {
        //     return a.difference - b.difference;
        // });

        // friends.push(newPerson);
        // res.json(friends[diffArray[0].index]);



        // OR***

        // compatibility logic + handle incoming survey results
        //     function compatibility() {
        //         var curSurvRatings = req.body.results //array;
        //         var otherFriend
        //             for (var i = 0; i < friendsArray.length; i++) {
            
        //                 otherFriend = friendsArray[i]
            
            

        //                 var diffs = curSurvRatings.map(function (num, idx) {
        //                     return num - otherFriend[idx];
                    
        //                 }); 
                        
        //             }
        //  }
    });
  
};
// ===============================================================================
