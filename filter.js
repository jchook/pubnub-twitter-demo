var 
	fs = require('fs'),
	es = require('event-stream'),
	util = require('util'),

	// TwitterAPI = require('twitter'),
	// twitter = new TwitterAPI({
	// 	consumer_key: 'fBQjRueKAmxiNruEbdzfaXXok',
	// 	consumer_secret: '0m9RUxhB9gT56HzslVcfE6wJsM5LERhizYp16ckTa8aZtbjjMz',
	// 	access_token_key: '17570238-MRQmxAqwE9eHwHYwjLdbnaD31KRKU8G0Kn8mTmvmb',
	// 	access_token_secret: 'wzDQnjSJjpbuNQ8jVUuElEYqVq0y3NKe7daDRLSzJM7FX'
	// }),

	lineNr = 0,
	stream,

	// Only dump tweets from users with at least this many followers
	followerCountThreshold = 1000
;


stream = fs.createReadStream('tweets-6.txt')
	.pipe(es.split())
	.pipe(es.mapSync(function(line){

		var tweet;

		// Pause the readstream
		stream.pause();

		// Process
		try {
			tweet = JSON.parse(line);
			if (tweet.user.followers_count >= followerCountThreshold) {
				console.log(line);
			}
		} catch (e) {}

		// Resume the readstream, possibly from a callback
		// so that async actions could happen in this callback
		stream.resume();
	})
	.on('error', function(){
		console.log('Error while reading file.');
	})
	.on('end', function(){
		// console.log('Read entire file.')
	})
);