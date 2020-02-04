const express = require('express');
const router = express.Router();
const menu = require('../controllers/menuController.js');

// create a new menu
router.post('/menu', menu.create);

// retrieve all groups
router.get('/menuAll', menu.findAll);

// retrieve a single menu with menuId
router.get('/menu/:menuId', menu.findOne);

// update a menu with menuId
router.put('/menu/:menuId', menu.update);

// delete a menu with menuId
router.delete('/menu/:menuId', menu.delete);

// delete all menus
router.delete('/menu', menu.deleteAll);

module.exports = router;
