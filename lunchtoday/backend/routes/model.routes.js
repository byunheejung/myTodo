// module.exports = app => {
//     const menuGroup = require('../controllers/controller.js');

//     // create a new group
//     app.post('/menuGroup', menuGroup.create);

//     // Retrieve all groups
//     app.get('/menuGroup', menuGroup.findAll);

//     // retrieve a single group with groupId
//     app.get('/menuGroup/:groupId', menuGroup.findOne);

//     //update a group with groupId
//     app.put('/menuGroup/:groupId', menuGroup.update);

//     // delete a group with groupId
//     app.delete('/menuGroup/:groupId', menuGroup.delete);

//     // delete all groups
//     app.delete('/menuGroup', menuGroup.deleteAll);
// }

const express = require('express');
const router = express.Router();
const menuGroup = require('../controllers/controller.js');

// create a new group
router.post('/menuGroup', menuGroup.create);

// Retrieve all groups
router.get('/menuGroup', menuGroup.findAll);

// retrieve a single group with groupId
router.get('/menuGroup/:groupId', menuGroup.findOne);

//update a group with groupId
router.put('/menuGroup/:groupId', menuGroup.update);

// delete a group with groupId
router.delete('/menuGroup/:groupId', menuGroup.delete);

// delete all groups
router.delete('/menuGroup', menuGroup.deleteAll);

module.exports = router;