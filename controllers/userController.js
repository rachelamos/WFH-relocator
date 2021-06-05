const db = require("../models");

module.exports = {
    signup: function(req, res){
        db.User.create(req.body)
        .then(dbUser => res.json(dbUser))
        .catch(err => console.log(err));
    },

    login: function(req, res){
        db.User.findOne({email: req.params.email})
        .then((dbUser, err) => {
            if (err) {
                console.log("Error: " + err)
            }
            res.json(dbUser)})
        .catch(err => console.log(err));
    }
}