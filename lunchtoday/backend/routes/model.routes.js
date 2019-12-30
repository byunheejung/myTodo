const express = require('express');
const router = express.Router();
const menuGroup = require('../controllers/menuGroupController.js');
const menu = require('../controllers/menuController.js');

// 메뉴그룹
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

// 메뉴 
// create a new menu
router.post('/menu', menu.create);

// retrieve all groups
// router.get('/menu', menu.findAll);

// retrieve a single menu with menuId
router.get('/menu/:menuId', menu.findOne);

// update a menu with menuId
router.put('/menu/:menuId', menu.update);

// delete a menu with menuId
router.delete('/menu/:menuId', menu.delete);

// delete all menus
router.delete('/menu', menu.deleteAll);

module.exports = router;