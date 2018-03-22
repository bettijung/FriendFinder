// ===============================================================================
// DEPENDENCIES
const express = require("express");
const friends = require("../data/friends");
const bodyParser = require("body-parser");

const app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// ===============================================================================


// ===============================================================================
// ROUTING
module.exports = (app) => {

    app.get("/api/friends", (request, response) => {
      response.json(friends.friendsArray);
      // console.log(friends.friendsArray);
    });

    app.post("/api/friends", (request, response) => {
        let newFriend = request.body;
        
        friends.friendsArray.forEach((friend, i) => {
            let diffArr = [];
            let reducer = (accumulator, currentValue) => accumulator + currentValue;
            let totalDiff;
            friend.scores.forEach(score => {
                scoreDiff = Math.abs(score - parseInt(newFriend.scores[i]));
                diffArr.push(scoreDiff);
            });

            totalDiff = diffArr.reduce(reducer);
            absDiffs.push(totalDiff);
        });

        function indexOfSmallest(a) {
            let lowest = 0;
            for (var i = 1; i < a.length; i++) {
                if (a[i] < a[lowest]) lowest = i;
            }
            // log the best match!
            console.log(friends.friends[lowest].name + " is your best match!");
        }
        indexOfSmallest(absDiffs);
  
        friends.add(newFriend);
        res.send(true);
    });
}
// ===============================================================================
