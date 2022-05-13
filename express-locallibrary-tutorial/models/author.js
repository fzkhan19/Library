var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Defining Schema for author
var AuthorSchema = new Schema(
    {
        first_name: {type: String, required: true, maxLength:100},
        family_name: {type: String, required: true, maxLength:100},
        date_of_birth:{type: Date},
        date_of_death:{type: Date}
    }
);


//Virtual for author's full name
AuthorSchema.virtual('name').get(()=>{
    var fullname = '';
    if(this.first_name && this.family_name){
        fullname = this.first_name + ', ' + this.family_name;
    }
    if(!this.first_name || !this.family_name){
        fullname = '';
    }
    return fullname;
});


//Virtual for author's lifespan
AuthorSchema.virtual('lifespan').get(()=>{
    var lifetime_string = '';
    if(this.date_of_birth){
        lifetime_string = this.date_of_birth.getYear().toString();
    }
    lifetime_string += ' - ';
    if(this.date_of_death){
        lifetime_string += this.date_of_death.getYear().toString();
    }

    return lifetime_string;
});


//Virtual for author's URL
AuthorSchema.virtual('url').get(()=>{
    return '/catalog/author/'+this._id;
});

module.exports = mongoose.model('Author',AuthorSchema);