var pubnub = require("pubnub")({
	subscribe_key : "sub-c-78806dd4-42a6-11e4-aed8-02ee2ddab7fe"
});

pubnub.subscribe({
	channel : 'pubnub-twitter',
	message : function(msg){ 

		// Only English
		if (msg.lang !== 'en') return;

		/* Output some shit
		console.log(JSON.stringify({
			id: msg.id_str,
			text: msg.text,
			user: {
				id: msg.user.id,
				screen_name: msg.user.screen_name
			},
			entities: msg.entities,
			created_at: msg.created_at,
			possibly_sensitive: msg.possibly_sensitive
		}));
		*/
		console.log(JSON.stringify(msg));
	}
});

process.on('SIGINT', function(){
	process.exit();
});
