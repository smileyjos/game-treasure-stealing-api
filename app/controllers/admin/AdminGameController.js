/**
 * Game Controller
 */
const Game = require('../../models/Game');
const GamePlaying = require('../../models/GamePlaying');
const GameSimulatorTest = require('../../GameSimulatorTest');
const GameHelper = require('../../GameHelper');
const _ = require('lodash');

exports.loadGameHistory = async (req, res) => {
	const history_game = await Game.findAll({order: [['id', 'desc']]});
	let history = [];

	if(history_game !== null){
		// history_game.forEach( async game => {
		// 	let tmp_game = game.dataValues;
		// 	tmp_game.id = parseInt(game.id);
		// 	tmp_game.pot_data = await Game.getPot(tmp_game.id);
		// 	history.push(tmp_game);
		// })
		await Promise.all(history_game.map(async game => {
			let tmp_game = game.dataValues;
			tmp_game.id = parseInt(game.id);
			tmp_game.pot_data = await Game.getPot(tmp_game.id);
			history.push(tmp_game);
		}));
	}

	history = _.orderBy(history, ['id'], ['desc']);

	res.json({ 
		success: true,
		history: history
	});
}

exports.loadGameInfo = async (req, res) => {
	const game_id = parseInt(req.params.game_id);
	const current_game = await Game.findByPk(game_id);
	const game_player = await GamePlaying.findAll({where: {game_id: game_id}});

	res.json({ 
		success: true,
		game_id: game_id,
		current_game: current_game,
		game_player: game_player
	});
}


exports.createGameForAllUser = async (req, res) => {
	const simulator = new GameSimulatorTest();
	await simulator.createGameForAllUser();

	res.json({ 
		success: true
	});
}

exports.gameCheck = async (req, res) => {
	const game_id = parseInt(req.body.game_id) || 0;
	const helper = new GameHelper();
	helper.game_id = game_id;
	let pre_data = await helper.PrepareCalculation();
	let data = await helper.PrizeCalc(game_id);

	res.json({ 
		success: true,
		pre_calc_data: pre_data,
		prize_calc: data
	});
}

exports.gameEnd = async (req, res) => {
	const game_id = parseInt(req.body.game_id) || 0;
	const helper = new GameHelper();
	await helper.endGame(game_id);

	res.json({ 
		success: true
	});
}

