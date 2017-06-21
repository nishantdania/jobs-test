const mongoose = require('mongoose'),  
	Schema = mongoose.Schema;

const JobSchema = new Schema({  
		role : String,
		location : String,
		link : String,
		company : String,
		category : String
	 },
	 {
	  timestamps: true
	 }
);

module.exports = mongoose.model('Job', JobSchema, 'job');
