var PubNub = require('pubnub')
var pubnub = new PubNub({ 
  uuid: 'MyIdentifier', 
  subscribeKey: 
    'sub-c-d00e0d32-66ac-4628-aa65-a42a1f0c493b' 
}); 
pubnub.addListener({ 
  message: function(message) { 
    console.log(message.message);} 
}); 
pubnub.subscribe({ 
  channels: ['pubnub-twitter'] 
}); 
