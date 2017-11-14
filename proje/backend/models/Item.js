var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Item = new Schema({
	name: {
		type: String
	},
	price: {
		type: String
	}
},{
		collection: 'items'
});

module.exports = mongoose.model('Item', Item);
