var express = require('express');
var router = express.Router();

var controller = require('../controllers/masterController')

router.get('/welcome', function (req,res) {
    res.send('home page');
}
)
router.get('/find_one', controller.find_one)

module.exports = router;