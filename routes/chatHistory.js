var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res, next) {
    var Db = require('../util/MessageDB')
    res.setHeader('Content-Type', 'text/plain');
    res.send(Db.get(req.params.id))
});


module.exports = router;