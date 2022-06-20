//Store
var {Sequelize, sequelize} = require('../../config/sequelize.js');

var HeroTierTicket = sequelize.define('HeroTierTicket', {
	id: {
		type: Sequelize.BIGINT,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true
	},
	tier          	: Sequelize.STRING,
	tickets      	: Sequelize.INTEGER,
	tix_from_stats  : Sequelize.INTEGER
},{
	tableName    	: 'hero_tier_tickets',
	timestamps   	: false,
	underscored  	: true
});

module.exports = HeroTierTicket;