const MenuGroup = require('../models/model.js');

// create and save a new group
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: 'Content can not be empty!'
        });
    }

    const menuGroup = new MenuGroup({
        group_id: req.body.group_id,
        group_name: req.body.group_name
    });

    MenuGroup.create(menuGroup, (err, data) => {
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
};

// retrieve all groups from the database;
exports.findAll = (req, res) => {
    MenuGroup.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message
            });
        } else {
            res.send(data);
        }
    })
};

// find a single group with a groupId
exports.findOne = (req, res) => {
    MenuGroup.findById(req.params.groupId, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: 'Not found MenuGroup with groupId ${req.params.groupId}'
                })
            } else {
                res.status(500).send({
                    message: 'Error retrieving MenuGroup with id ' + req.params.groupId
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

    MenuGroup.updateById(
        req.params.groupId,
        new MenuGroup(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === 'not_found') {
                    res.status(404).send({
                        message: 'Not found MenuGroup with groupId ${req.params.groupId}'
                    });
                } else {
                    res.status(500).send({
                        message: 'Error retrieving MenuGroup with id ' + req.params.groupId
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
    MenuGroup.remove(req.params.groupId, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: 'Not found MenuGroup with groupId ${req.params.groupId}'
                });
            } else {
                res.status(500).send({
                    message: 'Could not delete MenuGroup with id ' + req.params.groupId
                })
            }
        } else {
            res.send(data);
        }
    });
}

// delete all groups from the database.
exports.deleteAll = (req, res) => {
    MenuGroup.removeAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Some error occurred while removing all MenuGroup.'
            });
        } else {
            res.send(data);
        }
    })
}