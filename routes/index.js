const moviesJSON = require('../movies.json');

exports.home = (req, res) => {

  var movies = moviesJSON.movies;

  res.render('home', {
    title: 'Home Title',
    movies: movies
  });
};

exports.single_challenge =  (req, res) => {
  var challenge_slug = req.params.challenge_slug;
  var movies = moviesJSON.movies;
  var movie = movies[challenge_slug - 1];
  res.render('single', {
    title: movie.title,
    movies: movies
  });
};

exports.not_found = (req, res) => {
  res.send('Page doesn\'t exist!');
};
