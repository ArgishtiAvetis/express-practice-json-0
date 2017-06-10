const path = require('path');
const express = require('express');
const routes = require('./routes');
const app = express();

app.set('port', process.env.PORT || 8080);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.home);

app.get('/challenge/:challenge_slug?', routes.single_challenge);

app.get('*', routes.not_found);

app.listen(app.get('port'), () => {
  console.log(`App is running on port ${app.get('port')}`);
});
