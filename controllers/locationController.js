const db = require("../models");

module.exports = {
    findByID: function(req, res) {
        db.Location.findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByCity: function(req, res) {
        db.Location.findOne({ city: req.params.city }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }

    //methods to save and remove locations pending
};