var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');
var BookInstance = require('../models/bookinstance');

var async = require('async');

exports.index = (req,res)=>{
    async.parallel({
        book_count: (callback)=>{
            Book.countDocuments({},callback);
        },
        book_instance_count: (callback)=>{
            BookInstance.countDocuments({}, callback);
        },
        book_instance_available_count: (callback)=>{
            BookInstance.countDocuments({status:'Available'}, callback);
        },
        author_count: (callback)=>{
            Author.countDocuments({},callback);
        },
        genre_count: (callback)=>{
            Genre.countDocuments({},callback);
        }},(err,result)=>{
        res.render('index',{title: 'Local Library Home', error:err, data:result});
    });
}

exports.book_list = (req,res,next)=>{
    Book.find({},'title author').sort({title : 1}).populate('author').exec((err,list_books)=>{
        if(err){return next(err);}
        res.render('book_list',{title:'Book List'});
    })
};


exports.book_detail = (req,res)=>{
    res.send('Not Implementd: book Detail');
};


exports.book_create_get = (req,res)=>{
    res.send('Not Implemented: book create GET');
};


exports.book_create_post = (req,res)=>{
    res.send('Not Implemented: book create POST');
};


exports.book_delete_get = (req,res)=>{
    res.send('Not Implemented: book delete GET');
};

exports.book_delete_post = (req,res)=>{
    res.send('Not Implemented: book delete POST');
};


exports.book_update_get = (req,res)=>{
    res.send('Not Implemented: book update GET');
};

exports.book_update_post = (req,res)=>{
    res.send('Not Implemented: book update POST');
};