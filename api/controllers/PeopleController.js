/**
 * PeopleController
 *
 * @description :: Server-side logic for managing people
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    create: function(req, res) {
        sails.sockets.broadcast('ListUpdates', 'update', {msg: 'Create Function Called'});
        
        People.create({
            name: req.param('name')
        }).exec(
            function(err, person){
                if(err) return res.send(err,500);

                return res.send(person);
            }
        );
    },

    findAll: function(req, res) {
        People.find().exec(function(err, people) {
            res.send(people);
        });
    },

    join: function(req, res) {
        if (req.isSocket){
            sails.sockets.join(req.socket, 'ListUpdates');
            res.send('Subscribed to room');
        }
    }
};

