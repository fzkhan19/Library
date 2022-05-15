var mongoose = require('mongoose');
const { DateTime } = require("luxon");

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

BookInstanceSchema
.virtual('due_back_formatted')
.get(function () {
  return DateTime.fromJSDate(this.due_back).toLocaleString(DateTime.DATE_MED);
});

module.exports = mongoose.model('BookInstance',BookInstanceSchema);