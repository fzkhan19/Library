var Genre = require('../models/genre');


exports.genre_list = (req,res)=>{
    
    Genre.find()
      .sort([['name', 'ascending']])
      .exec(function (err, list_genres) {
        if (err) { return next(err); }
        //Successful, so render
        res.render('genre_list', { title: 'Genre List', genre_list: list_genres });
      });
  
};


exports.genre_detail = (req,res)=>{
    res.send('Not Implementd: genre Detail');
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