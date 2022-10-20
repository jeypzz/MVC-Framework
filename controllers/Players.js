const Player = require('../models/Player');

class Players{

   index(req, res){
      res.redirect('/search')
   }

   async load_search(req, res){
      const sports = await Player.get_all_sports();
      const genders = await Player.get_all_genders();
      let result = await Player.query_builder(req.body);
      
      res.render('players/index', { sports: sports, genders: genders, csrf_token: req.csrfToken(), players: result });
   }

   async search_players(req, res){
      let result = await Player.query_builder(req.body);
      res.render('partials/players_partial.ejs', { players: result });
   }

}
/* module.exports to be required in routes.js */
module.exports = new Players;