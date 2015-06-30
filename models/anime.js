var mongoose 	= require('mongoose');
var Schema		= mongoose.Schema;

var AnimeSchema	= new Schema({
	name: String
});

module.exports = mongoose.model('Anime', AnimeSchema);