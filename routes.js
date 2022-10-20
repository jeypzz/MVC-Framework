const Express = require('express');
const Router = Express.Router();
const PlayerController = require(`./controllers/players`);

/* User Controller  */
Router.get('/', PlayerController.index);
Router.get('/search', PlayerController.load_search);
Router.post('/search/players', PlayerController.search_players);


module.exports = Router;
