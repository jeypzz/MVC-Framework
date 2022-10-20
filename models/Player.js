const Mysql = require('../libraries/mysql');

class Player{
   
    async get_all_sports(){
        let query = "SELECT * FROM sports";
        return await Mysql.execute_query(query);
    }

    async get_all_genders(){
        let query = "SELECT * FROM genders";
        return await Mysql.execute_query(query);
    }

    async query_builder(post){
        let query = "SELECT CONCAT(players.first_name,' ',players.last_name) AS player_name, genders.name, sports.name, players.img FROM players LEFT JOIN genders on players.gender_id = genders.id LEFT JOIN sports on players.sport_id = sports.id"
        let gender_filter = [];
        let sports_filter = [];

        let name = `%${post.name}%`;

        if(post.gender_arr != null){
            for(let gender of post.gender_arr){
                gender_filter.push("'" + gender + "'")
            }
        }

        if(post.sports_arr != null){
            for(let sport of post.sports_arr){
                sports_filter.push("'" + sport + "'")
            }
        }
         
        
        if(post.name != '' && post.name != null || post.gender_arr != null || post.sports_arr != null){
            query +=  " WHERE ";
        }
        
        if(post.name != '' && post.name != null){
            query += "CONCAT(players.first_name,' ',players.last_name) like ? ";
        }
        
        if(post.gender_arr != null){
            if(post.name != '' && post.name != null){
                query += "AND ";
            }
            query += `genders.name IN (${gender_filter.join(",")}) `;
        }

        if(post.sports_arr != null){
            if(post.gender_arr != null){
                query += "AND ";
            }
            if(post.gender_arr == null && post.name != '' && post.name != null){
                query += "AND ";
            }
            query += "sports.name IN (" + sports_filter.join(",") + ") ";
        }

        return await Mysql.execute_query(query, [name]);
    }
}

/* module.exports to be required in routes.js */
module.exports = new Player;