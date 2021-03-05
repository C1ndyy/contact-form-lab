var express = require('express');
var router = express.Router();

let contactCtrl = require('../controllers/contact')


router.get('/', contactCtrl.index);
router.post('/', contactCtrl.submit);

module.exports = router;
