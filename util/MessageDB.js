var map={}
module.exports = {

    add: function (id,msg) {
        console.log("Add function called");
        if (map[id] == undefined) {
            //New Chat
            message = [msg];
            map[id] = message;
        } else {
            //Old Chat
            message = map[id];
            message.push(msg);
            map[id] = message;
        }
        console.log(msg+" Added");
    },
    get: function (id) {
        console.log("Get function called");
        if (map[id] == undefined) {
            return []
        }
        return map[id]
    }

};
