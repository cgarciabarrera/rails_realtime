var io = require('socket.io').listen(5001),
    redis = require('redis').createClient();

redis.subscribe('rt-change');

redis.on('message', function(){
    console.log("pepe");
});


io.on('connection', function(socket){
  redis.on('message', function(channel, message){
    socket.emit('rt-change', message);
  });
});