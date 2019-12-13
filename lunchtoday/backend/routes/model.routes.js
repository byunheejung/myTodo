module.exports = app => {
    const menuGroup = require('../controllers/controller.js');

    // create a new group
    app.post('/menuGroup', menuGroup.create);

    // Retrieve all groups
    app.get('/menuGroup', menuGroup.findAll);

    // retrieve a single group with groupId
    app.get('/menuGroup/:groupId', menuGroup.findOne);

    //update a group with groupId
    app.put('/menuGroup/:groupId', menuGroup.update);

    // delete a group with groupId
    app.delete('/menuGroup/:groupId', menuGroup.delete);

    // delete all groups
    app.delete('/menuGroup', menuGroup.deleteAll);
}