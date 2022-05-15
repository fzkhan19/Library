var Author = require('../models/author');

// Display list of all Authors.
exports.author_list = function(req, res, next) {

    Author.find()
      .sort([['family_name', 'ascending']])
      .exec(function (err, list_authors) {
        if (err) { return next(err); }
        //Successful, so render
        res.render('author_list', { title: 'Author List', author_list: list_authors });
      });
  
  };
  


exports.author_detail = (req,res)=>{
    res.send('Not Implementd: Author Detail');
};


exports.author_create_get = (req,res)=>{
    res.send('Not Implemented: Author create GET');
};


exports.author_create_post = (req,res)=>{
    res.send('Not Implemented: Author create POST');
};


exports.author_delete_get = (req,res)=>{
    res.send('Not Implemented: Author delete GET');
};

exports.author_delete_post = (req,res)=>{
    res.send('Not Implemented: Author delete POST');
};


exports.author_update_get = (req,res)=>{
    res.send('Not Implemented: Author update GET');
};

exports.author_update_post = (req,res)=>{
    res.send('Not Implemented: Author update POST');
};