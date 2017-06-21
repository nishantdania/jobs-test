module.exports = {
	'database' : process.env.ENV_VARIABLE === 'production' ? 'mongodb://localhost/jobs' : 'mongodb://localhost/jobs'
}
