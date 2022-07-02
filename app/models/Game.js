//Store
var {Sequelize, sequelize} = require('../../config/sequelize.js');
const Op = Sequelize.Op;
var GamePlaying = require('../Models/GamePlaying');
const _ = require('lodash');
var moment = require('moment');


var Game = sequelize.define('Game', {
	id: {
		type: Sequelize.BIGINT,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true
	},
	data          	: Sequelize.JSON,
	result          : Sequelize.STRING,
	back_pot		: Sequelize.FLOAT,
	thieves_count	: Sequelize.INTEGER,
	end				: Sequelize.INTEGER,
	note			: Sequelize.TEXT,
	raked			: Sequelize.FLOAT
},{
	tableName    	: 'games',
	createdAt    	: 'created_at',
	updatedAt    	: 'updated_at',
	timestamps   	: true,
	underscored  	: true
});

const format_date = 'YYYY-MM-DD 17:00:00';

Game.getTodayGame = async function(){
	const START = moment().tz('UTC').subtract(1, 'd').format(format_date);
	const END = moment().tz('UTC').format(format_date);
	
	const game = await Game.findOne({where: {
      	created_at: { 
        	[Op.gt]: START,
        	[Op.lt]: END
      	},
      	end: 0
    }});

    return game;
}

// Get current game today
Game.getCurrentId = async function(){
	const game = await Game.getTodayGame();
    return game !== null? parseInt(game.id): 0;
}

Game.getQueuedThieves = async function(){
	const game_id = await Game.getCurrentId();
	const count = await GamePlaying.count({where: {game_id: game_id}});
	await Game.update({thieves_count: count}, {where: {id: game_id}});
	return count;
}

Game.getData = async function(){
	const game = await Game.getTodayGame();
	return game !== null? game.data: {};
}

// Update game data
Game.updateData = async function(data_json, current_game_id){
	if(typeof current_game_id === 'undefined'){
		current_game_id = await Game.getCurrentId();
	}
	return await Game.update(data_json, {where: {id: current_game_id}});
}

Game.updateBackPot = async function(back_pot, current_game_id){
	return await Game.updateData({back_pot, back_pot}, current_game_id);
}

// Set current game to ended
Game.setEndGame = async function(current_game_id){
	return await Game.updateData({end: 1}, current_game_id);
}

// Get back_pot yesterday
Game.getBackPot = async function(){
	const START = moment().tz('UTC').subtract(1, 'd').format(format_date);
	const END = moment().tz('UTC').subtract(2, 'd').format(format_date);

	const game = await Game.findOne({where: {
      	created_at: { 
        	[Op.gt]: START,
        	[Op.lt]: END
      	},
      	end: 0
    }});

    return game !== null? parseFloat(game.back_pot): 0;
}

module.exports = Game;