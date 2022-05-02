const router = require('express').Router();

// it might look unnecessary to redirect only one file
// but in the future we might add more features
router.use(require('./notes'));

module.exports = router;