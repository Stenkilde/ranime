// Base Setup for the server
var express		= require('express');
var mongoose	= require('mongoose');
var bodyParser	= require('body-parser');
var app			= express();
var port 		= 1337;

mongoose.connect('mongodb://localhost/simple');

var Anime 		= require('./models/anime');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res) {
	res.sendfile('./app/index.html');
});

// Router setup
var router 		= express.Router();

// Routes for API
router.use(function(req, res, next) {
	console.log('Something is happening here');
	next();
});

// Test route
router.get('/', function(req, res) {
	res.json({ message: 'Get out of here!'});
});

router.route('/animes')
	.post(function(req, res) {
		var anime = new Anime();
		anime.name	= req.body.name;

		anime.save(function(err) {
			if(err)
				res.send(err);;
			res.json({ message: 'Anime have been added' });
		});
	})
	.get(function(req, res) {
		Anime.find(function(err, animes) {
			if(err)
				res.send(err);

			res.json(animes)
		});
	});

router.route('/animes/:anime_id')
	.get(function(req, res) {
		Anime.findById(req.params.anime_id, function(err, anime) {
			if(err)
				res.send(err)

			res.json(anime)
		});
	})
	.delete(function(req, res) {
		Anime.remove({
			_id: req.params.anime_id
		}, function(err, anime) {
			if(err)
				res.send(err)

			res.json({ message: 'I deleted this anime!' });
		});
	});


app.use('/api', router);


// Start the server
app.listen(port);
console.log('We are up and running!');