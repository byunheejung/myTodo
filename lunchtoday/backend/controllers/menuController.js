const Menu = require('../models/menuModel.js');

// create and save a menu
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: 'Content can not be empty!'
        });
    }

    const menu = new Menu({
        group_id: req.body.group_id,
        menu_name: req.body.menu_name 
    });

    Menu.create(menu, (err, data) => {
        // eslint-disable-next-line no-console
        console.log('err', err);
        // eslint-disable-next-line no-console
        console.log('data', data);
        if (err) {
            res.status(500).send({
                message: err.message
            });
        } else {
            res.send(data);
        }
    });    
}

// retrieve all menus from the database;
// exports.findAll = (req, res) => {
//     Menu.getAll((err, data) => {
//         if (err) {
//             res.status(500).send({
//                 message: err.message
//             });
//         } else {
//             res.send(data);
//         }
//     })
// };

// find a single menu with a menuId
exports.findOne = (req, res) => {
    Menu.findById(req.params.menuId, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: 'Not found Menu with menuId ${req.params.menuId}'
                })
            } else {
                res.status(500).send({
                    message: 'Error retrieving Menu with id ' + req.params.menuId
                })
            }
        } else {
            res.send(data);
        }
    })
};

// update a group identified by the groupId in the request
exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            messge: 'Content can not be empty!'
        });
    }

    const menu = new Menu({
        menu_id: req.body.menu_id,
        menu_name: req.body.menu_name,
        group_id: req.body.group_id
    });

    // eslint-disable-next-line no-console
    console.log('menu', menu);

    Menu.updateById(
        req.params.menuId,
        menu,
        (err, data) => {
            if (err) {
                if (err.kind === 'not_found') {
                    res.status(404).send({
                        message: 'Not found Menu with groupId ${req.params.menuId}'
                    });
                } else {
                    res.status(500).send({
                        message: 'Error retrieving Menu with id ' + req.params.menuId
                    })
                }
            } else {
                res.send(data);
            }
        }
    );
};

// delete a group with the specified groupid in the request
exports.delete = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: 'Content can not be empty!'
        });
    }

    const menu = new Menu({
        menu_id: req.body.menu_id,
        group_id: req.body.group_id
    });

    Menu.remove(
        req.params.menuId, 
        menu, 
        (err, data) => {
        // eslint-disable-next-line no-console
        console.log('req.params', menu);
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: 'Not found Menu with menuId ${menu.menu_id}'
                });
            } else {
                res.status(500).send({
                    message: 'Could not delete Menu with id ' + menu.menu_id
                })
            }
        } else {
            res.send(data);
        }
    });
}

// delete all groups from the database.
exports.deleteAll = (req, res) => {
    Menu.removeAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Some error occurred while removing all Menu.'
            });
        } else {
            res.send(data);
        }
    })
}