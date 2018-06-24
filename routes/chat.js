var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.send("Add Chat Id to Url : chat/id");
});

router.get('/:id', function(req, res, next) {
    var Db = require('../util/MessageDB')
    res.render('chat', { chatId: req.params.id, chatHistory: Db.get(req.params.id)  });
});





module.exports = router;
