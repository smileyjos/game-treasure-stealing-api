/**
 * User Controller
 */
const Hero = require('../models/Hero');
const User = require('../models/User');
const UserMeta = require('../models/UserMeta');

/**
 * [description]
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
exports.updateHeroStatus = async (req, res) => {
	// console.log(req)
	let update = false;
	const hero_mint = req.body.hero_mint;
	const user_id = req.user.id;

	const hero = await Hero.findOne({ where: {mint: hero_mint, user_id: user_id} })
	if(hero){
		let status = hero.active;
		if(status === null || status === ''){
			status = 1;
		}else{
			status = !status;
		}

		hero.active = !status? 0: 1;
		update = await hero.save();
	}

	res.json({ 
		success: true,
		update: update
	});
}

/**
 * Update Non-NFT Entries:
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
exports.updateNonNftEntries = async (req, res) => {
	const user_id = parseInt(req.user.id);
	const entries = req.body.entries || 0;
	await UserMeta._update(user_id, 'non_nft_entries', entries);
	const user = await User.findByPk(user_id);
	const game_info = await user.getCalGameInfo();
	UserMeta._update(user_id, 'current_entries_calc', JSON.stringify(game_info));

	res.json({ 
		success: true,
		game_info: game_info
	});
}

/**
 * Enter the game, will create new game for today
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
exports.enterGame = async (req, res) => {
	const user_id = parseInt(req.user.id);
	const user = await User.findByPk(user_id);
	const game_info = await user.getCalGameInfo();

	res.json({ 
		success: true,
		game_info: game_info
	});
}