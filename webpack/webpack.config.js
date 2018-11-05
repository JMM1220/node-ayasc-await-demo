const path = require('path');
var axios = require('axios')
const app = express()
var apiRoutes = express.Router()
app.use('/', apiRoutes)

module.exports = {
	entry: './app/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, dist);
	}
}