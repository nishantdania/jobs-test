var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var async = require('async');
//var phantom = require('phantom');
var mongoose = require('mongoose');

var frontend = require('./categories/frontend');
var backend = require('./categories/backend');
var sde = require('./categories/sde');
var design = require('./categories/design');
var sdet = require('./categories/sdet');
var devops = require('./categories/devops');
var product = require('./categories/product');
var android = require('./categories/android');
var ios = require('./categories/ios');
var normalize = require('./categories/normalize');

var companies = require('./companies');

var config = require('./baseConfig');

const Job = require('./models/job');

var jobs = [];

mongoose.connect(config.database);

function generateJob (keywords, html, company, category) {

	var pageData = html.toString().toLowerCase();
	var $ = cheerio.load(html.toString());
	
	var anchor = undefined;
	var role;

	$("a").each(function(i, link){
		for(var i = 0; i < keywords.length; i++) {
			var exp = new RegExp(keywords[i]);
			if(exp.test($(link).text().toLowerCase())){
				//console.log('ANCHOR FOUND !', company.name);
				anchor = link;	
				role = keywords[i];
				break;
			}
		}
	});

	if(!anchor) {
		for(var i = 0; i < keywords.length; i++) {
			var exp = new RegExp(keywords[i]);
			if(exp.test(pageData)) {
				role = keywords[i];
				break;
			}
		}
	}

	var exp = new RegExp('http');
	var link;
	if(anchor) {
		link = exp.test($(anchor).attr('href').toLowerCase()) ? $(anchor).attr('href') : company.careers + $(anchor).attr('href');
	}

	var job = {};
	job.company = company.name || '';
	job.role = role ? normalize[role] : '';
	job.link = anchor ? link : company.careers || ''; 
	job.category = category || '';
	job.location = company.location;

	
	if(role) {
		console.log('\x1b[32m]%s\x1b[0m', job.company);
		jobs.push(job);	
	}
	else {
		console.log('\x1b[31m]%s\x1b[0m', company.name);
	}
}

app.get('/scrape', function(req, res){

	console.log('TOTAL COMPANIES : ',companies.length);

	async.times(companies.length, function(i, cb) {

		var company = companies[i];
		var url = company.api.length > 0 ? company.api : company.careers;
		var options = {
			url: url,
			timeout: 20000
		};

		request(options, function(error, response, html){
			if(!error){
				generateJob(frontend, html, company, 'frontend');	
				generateJob(backend, html, company, 'backend');	
				generateJob(design, html, company, 'design');	
				generateJob(product, html, company, 'product');	
				generateJob(devops, html, company, 'devops');	
				generateJob(sde, html, company, 'sde');	
				generateJob(sdet, html, company, 'sdet');	
				generateJob(ios, html, company, 'ios');	
				generateJob(android, html, company, 'android');	
				cb();
			}
			else {
				cb();
			}
		});
	}, function(err, results) {
		console.log('FETCHING COMPLETE');
		var job = jobs;
		Job.insertMany(job)
			.then(function(docs) {
				res.json(job);
			})
			.catch(function(err) {
				res.send(err);
			})
	});
})

app.listen('8081')

console.log('Scraper on port 8081');

exports = module.exports = app;
