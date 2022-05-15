var async = require('async');
var Book = require('../models/book');
var Genre = require('../models/genre');

exports.genre_list = function(req,res){
    Genre.find()
      .sort([['name', 'ascending']])
      .exec(function (err, list_genres) {
        if (err) { return next(err); }
        //Successful, so render
        res.render('genre_list', { title: 'Genre List', genre_list: list_genres });
      });
      
};


// Display detail page for a specific Genre.
exports.genre_detail = function(req, res, next) {

    async.parallel({
        genre: function(callback) {
            Genre.findById(req.params.id)
              .exec(callback);
        },

        genre_books: function(callback) {
            Book.find({ 'genre': req.params.id })
              .exec(callback);
        },

    }, function(err, results) {
        if (err) { return next(err); }
        if (results.genre==null) { // No results.
            var err = new Error('Genre not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render
        res.render('genre_detail', { title: 'Genre Detail', genre: results.genre, genre_books: results.genre_books } );
    });

};



exports.genre_create_get = (req,res)=>{
    res.send('Not Implemented: genre create GET');
};


exports.genre_create_post = (req,res)=>{
    res.send('Not Implemented: genre create POST');
};


exports.genre_delete_get = (req,res)=>{
    res.send('Not Implemented: genre delete GET');
};

exports.genre_delete_post = (req,res)=>{
    res.send('Not Implemented: genre delete POST');
};


exports.genre_update_get = (req,res)=>{
    res.send('Not Implemented: genre update GET');
};

exports.genre_update_post = (req,res)=>{
    res.send('Not Implemented: genre update POST');
};