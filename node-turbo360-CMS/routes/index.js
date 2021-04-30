
// Full Documentation - https://www.turbo360.co/docs

const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID});
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID});
const router = vertex.router();

router.get('/', (req, res) => {
	const data = {
		greeting: 'Welcome to my Restaurant'
	}

	res.render('index', data);
});

module.exports = router
