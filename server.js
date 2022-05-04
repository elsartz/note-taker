const express = require('express');
const PORT = process.env.PORT || 3001;
// instantiate the server
const router = express();
// parse incoming string or array data
router.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
router.use(express.json());
// added some more middleware to our server providing a file path to a location
// and instruct the server to make these files static resources
router.use(express.static('public'));

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);



router.listen(3001, () => {
    console.log(`API server now on port ${PORT}!`);
})