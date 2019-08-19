var path = require("path");
var friends = require("../data/friends.js");

module.exports = function (app) { 
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        console.log("post request received.\n");
        var maxDiff = 50; 
        var matchedFriend; 
        var currentFriend = req.body;
        console.log("current friend: " + currentFriend + "\n");
        forEach(function (friend) { 
            var difference = 0; 
            for (i = 0; i < friend.scores.length; i++) {
                difference += Math.abs(friend.scores[i] - currentFriend.scores[i]);
            }
            if (difference < maxDiff) {
                maxDiff = difference;
                matchedFriend = friend;
            };
        });
        res.json(matchedFriend); 
        push(req.body);
    });
};