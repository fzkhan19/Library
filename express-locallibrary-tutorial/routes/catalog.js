var express = require('express');
var router = express.Router();

var book_controller = require('../controllers/bookController');
var author_controller = require('../controllers/authorController');
var genre_controller = require('../controllers/genreController');
var bookinstance_controller = require('../controllers/bookinstanceController');

//BOOK ROUTES//
// GET catalog home page.

router.get('/',book_controller.index);

// GET/POST request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/book/create',book_controller.book_create_get);
router.post('/book/create',book_controller.book_create_post);

// GET/POST request for deleting a Book. NOTE This must come before routes that display Book (uses id).
router.get('/book/:id/delete',book_controller.book_delete_get);
router.post('/book/:id/delete',book_controller.book_delete_post);

// GET/POST request for updating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/book/:id/update',book_controller.book_update_get);
router.post('/book/:id/update',book_controller.book_update_post);

//GET request for one book
router.get('/book/:id',book_controller.book_detail);

//GET request for list of all book items 
router.get('/books',book_controller.book_list);



//AUTHOR ROUTES//

// GET/POST request for creating a author. NOTE This must come before routes that display author (uses id).
router.get('/author/create',author_controller.author_create_get);
router.post('/author/create',author_controller.author_create_post);

// GET/POST request for deleting a author. NOTE This must come before routes that display author (uses id).
router.get('/author/:id/delete',author_controller.author_delete_get);
router.post('/author/:id/delete',author_controller.author_delete_post);

// GET/POST request for updating a author. NOTE This must come before routes that display author (uses id).
router.get('/author/:id/update',author_controller.author_update_get);
router.post('/author/:id/update',author_controller.author_update_post);

//GET request for one author
router.get('/author/:id',author_controller.author_detail);

//GET request for list of all author items 
router.get('/authors',author_controller.author_list);


//GENRE ROUTES//

// GET/POST request for creating a genre. NOTE This must come before routes that display genre (uses id).
router.get('/genre/create',genre_controller.genre_create_get);
router.post('/genre/create',genre_controller.genre_create_post);

// GET/POST request for deleting a genre. NOTE This must come before routes that display genre (uses id).
router.get('/genre/:id/delete',genre_controller.genre_delete_get);
router.post('/genre/:id/delete',genre_controller.genre_delete_post);

// GET/POST request for updating a genre. NOTE This must come before routes that display genre (uses id).
router.get('/genre/:id/update',genre_controller.genre_update_get);
router.post('/genre/:id/update',genre_controller.genre_update_post);

//GET request for one genre
router.get('/genre/:id',genre_controller.genre_detail);

//GET request for list of all genre items 
router.get('/genres',genre_controller.genre_list);


//BOOKINSTANCE ROUTES//

// GET/POST request for creating a bookinstance. NOTE This must come before routes that display bookinstance (uses id).
router.get('/bookinstance/create',bookinstance_controller.bookinstance_create_get);
router.post('/bookinstance/create',bookinstance_controller.bookinstance_create_post);

// GET/POST request for deleting a bookinstance. NOTE This must come before routes that display bookinstance (uses id).
router.get('/bookinstance/:id/delete',bookinstance_controller.bookinstance_delete_get);
router.post('/bookinstance/:id/delete',bookinstance_controller.bookinstance_delete_post);

// GET/POST request for updating a bookinstance. NOTE This must come before routes that display bookinstance (uses id).
router.get('/bookinstance/:id/update',bookinstance_controller.bookinstance_update_get);
router.post('/bookinstance/:id/update',bookinstance_controller.bookinstance_update_post);

//GET request for one bookinstance
router.get('/bookinstance/:id',bookinstance_controller.bookinstance_detail);

//GET request for list of all bookinstance items 
router.get('/bookinstances',bookinstance_controller.bookinstance_list);

module.exports = router;