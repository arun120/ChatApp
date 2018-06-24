osExecute = function (command, callback) {
    const {exec} = require('child_process');
    exec(command, (err, stdout, stderr) => {
        if (err) {
            // node couldn't execute the command
            callback("Command Failed");
            return;
        }
        callback("Command Ran Successfully "+ stdout);
        // the *entire* stdout and stderr (buffered)
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    });

}


module.exports = osExecute;