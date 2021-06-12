const db = require("../models");

module.exports = {
    findByID: function(req, res) {
        db.Location.findById(req.params.id)
            .then(dbLocation => res.json(dbLocation))
            .catch(err => res.status(422).json(err));
    },

    findByCity: function(req, res) {
        db.Location.findOne(req.params)
            .then(dbLocation => res.json(dbLocation))
            .catch(err => res.status(422).json(err));
    },

    findAll: function(req, res) {
        db.Location
            .find(req.query)
            .sort({ city: 1 })
            .then(dbLocation => res.json(dbLocation))
            .catch(err => res.status(422).json(err));
    }
    //methods to save and remove locations pending
};