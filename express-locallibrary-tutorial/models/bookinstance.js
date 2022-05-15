var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookInstanceSchema = new Schema(
    {
        book: {type: Schema.Types.ObjectId, ref: 'Book', required: true},
        imprint: {type: String, required: true},
        due_back: {type: Date, default: Date.now},
        status: {type: String, enum:['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance'}
    }
);

BookInstanceSchema.virtual('url').get(()=>{
    return '/catalog/bookinstance/' + this._id;
});

module.exports = mongoose.model('BookInstance',BookInstanceSchema);