var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    firstname:{
        type:String,
        default:' '
    },
    secondname:{
        type:String,
        default:' '
    },
    admin:   {
        type: Boolean,
        default: false
    },
    facebookId: String
});



User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User',User);