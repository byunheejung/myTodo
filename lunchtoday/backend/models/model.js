const sql = require('./db.js');

// constructor
const MenuGroup = function(menuGroup) {
    this.group_id = menuGroup.group_id;
    this.group_name = menuGroup.group_name;
};

MenuGroup.create = (newMenuGroup, result) => {
    sql.query('INSERT INTO MENU_GROUP SET ?', newMenuGroup, (err, res) => {
        if (err) {
            // eslint-disable-next-line no-console
            console.log('error : ', err);
            result(err, null);
            return;
        }

        // eslint-disable-next-line no-console
        console.log('res', res);
    });
};

MenuGroup.findById = (groupId, result) => {
    sql.query('SELECT * FROM MENU_GROUP WHERE GROUP_ID = ?', groupId, (err, res) => {
        if (err) {
            // eslint-disable-next-line no-console
            console.log('error: ', err);
            result(err, null);
            return;
        }

        if (res.length) {
            // eslint-disable-next-line no-console
            console.log('found group: ', res[0]);
            result(null, res[0]);
            return;
        }

        result( {kind: 'not_found'}, null);
    });
};

MenuGroup.getAll = result => {
    sql.query('SELECT * FROM MENU_GROUP', (err, res) => {
        if (err) {
            // eslint-disable-next-line no-console
            console.log('error :', err);
            result(null, err);
            return;
        }

        // eslint-disable-next-line no-console
        console.log('menu_group', res);
        result(null, res);
    });
}

MenuGroup.updateById = (groupId, newMenuGroup, result) => {
    sql.query('UPDATE MENU_GROUP SET GROUP_NAME = ? WHERE GROUP_ID = ?',
        [newMenuGroup.group_name, groupId],
        (err, res) => {
            if (err) {
                // eslint-disable-next-line no-console
                console.log('error: ', err);
                result(null, err);
                return;
            }

            if (res.affectdRows == 0) {
                result({knd: 'not_found'}, null);
                return;
            }

            // eslint-disable-next-line no-console
            console.log('update MENU_GROUP SUCCESS');
            result(null, { group_id: res.insertGroup_id, group_name: res.insertGroup_name });
        }
    );
};

MenuGroup.remove = (groupId, result) => {
    sql.query('DELETE FROM MENU_GROUP WHERE GROUP_ID = ?', groupId, (err, res) => {
        if (err) {
            // eslint-disable-next-line no-console
            console.log('error: ', err);
            result(null, err);
            return;
        }

        if (res.affectdRows == 0) {
            result( {kind: 'not_found'}, null );
            return;
        }

        // eslint-disable-next-line no-console
        console.log('delete menu_group with group_id :', groupId);
        result(null, res);
    });
};

MenuGroup.removeAll = result => {
    sql.query('DELETE FROM MENU_GROUP', (err, res) => {
        if (err) {
            // eslint-disable-next-line no-console
            console.log('error: ', err);
            result(null, err);
            return;
        }

        // eslint-disable-next-line no-console
        console.log('deleted ${res.affectedRows} menu_group');
        result(null, res);
    });
};

module.exports = MenuGroup;