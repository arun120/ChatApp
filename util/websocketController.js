websocketController = function (io) {
    io.on('connection', function(socket){

        console.log('a user connected');

        socket.on('disconnect', function(){
            console.log('user disconnected');
        });

        socket.on('send message', function(msg){
            Db = require('../util/MessageDB')
            var data=JSON.parse(msg)
            Db.add(data.id, data.msg);
            io.emit('broadcast message '+data.id, data.msg);
            if(data.msg.startsWith("$$Run$$:")) {

                var command =  data.msg.substring(8);
                var osExecute = require('./osExecute');
                osExecute(command,function (message) {
                    Db.add(data.id, message);
                    io.emit('broadcast message '+data.id, message);
                });
            }

        });


    });
}





module.exports = websocketController;