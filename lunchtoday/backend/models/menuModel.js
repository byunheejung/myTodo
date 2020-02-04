const sql = require('./db.js');

const Menu = function(menu) {
    this.group_id = menu.group_id;
    this.menu_name = menu.menu_name;
    this.menu_id = menu.menu_id;
};

Menu.create = (newMenu, result) => {
    // sql.query('INSERT INTO MENU_LIST (GROUP_ID, MENU_NAME) VALUES (?, ?)',
    // [newMenu.group_id, newMenu.menu_name],
    // (err, res) => {
    //     if (err) {
    //         // eslint-disable-next-line no-console
    //         console.log('error : ', err);
    //         result(err, null);
    //         return;
    //     }

    //     // eslint-disable-next-line no-console
    //     console.log('res', { id: res.insertMenu_id, ...newMenu});
    //     result(null, { id: res.insertMenu_id, ...newMenu});
    // });
    sql.query('INSERT INTO MENU_LIST (GROUP_ID, MENU_NAME) VALUES (?, ?)',
    ['1', newMenu.menu_name],
    (err, res) => {
        if (err) {
            // eslint-disable-next-line no-console
            console.log('error : ', err);
            result(err, null);
            return;
        }

        // eslint-disable-next-line no-console
        console.log('res', { id: res.insertMenu_id, ...newMenu});
        result(null, { id: res.insertMenu_id, ...newMenu});
    });
};

Menu.findById = (groupId, result) => {
    sql.query('SELECT * FROM MENU_LIST WHERE GROUP_ID = ?', groupId, (err, res) => {
        if (err) {
            // eslint-disable-next-line no-console
            console.log('error: ', err);
            result(err, null);
            return;
        }

        if (res.length) {
            // eslint-disable-next-line no-console
            console.log('found menu: ', res[0]);
            // result(null, res[0]);
            result(null, res);
            return;
        }

        result( {kind: 'not_found'}, null);
    });
};

Menu.getAll = result => {
    sql.query('SELECT * FROM MENU_LIST', (err, res) => {
        if (err) {
            // eslint-disable-next-line no-console
            console.log('error :', err);
            result(null, err);
            return;
        }

        // eslint-disable-next-line no-console
        console.log('menu_list', res);
        result(null, res);
    });
}

Menu.updateById = (menuId, newMenu, result) => {
    sql.query('UPDATE MENU_LIST SET MENU_NAME = ? WHERE MENU_ID = ? AND GROUP_ID = ?',
        [newMenu.menu_name, menuId, '1'],
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
            console.log('update MENU_LIST SUCCESS');
            // eslint-disable-next-line no-console
            console.log('updateById', newMenu);
            result(null, { menu_id: res.insertMenu_id, menu_name: res.insertMenu_name });
        }
    );
};

Menu.remove = (menuId, newMenu, result) => {
    sql.query('DELETE FROM MENU_LIST WHERE MENU_ID = ? AND GROUP_ID = ?',
    [menuId, '1'],
    (err, res) => {
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
        console.log('delete menu_list with group_id and menu_id :', newMenu.menu_id, newMenu.group_id);
        result(null, res);
    });
};

Menu.removeAll = result => {
    sql.query('DELETE FROM MENU_LIST', (err, res) => {
        if (err) {
           // eslint-disable-next-line no-console
           console.log('error: ', err);
           result(null, err);
           return;
        }

        // eslint-disable-next-line no-console
        console.log('deleted ${res.affectedRows} menu_list');
        result(null, res);
    });
};

module.exports = Menu;