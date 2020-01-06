module.exports = [{
    name: 'User Management',
    id: 'basic',
    icon: 'el-icon-menu',
    sub: [{
        name: 'User List',
        componentName: 'UserList'
    }, {
        name: 'Admin List',
        componentName: 'AdminList'
    }, {
        name: 'Add User/Admin',
        componentName: 'AddUser'
    }]
}, {
    name: 'Server Management',
    id: 'server',
    icon: 'el-icon-s-platform',
    sub: [{
            name: 'Server List',
            componentName: 'ServerList'
        }, {
            name: 'Server Dashboard',
            componentName: 'ServerDashboard'
        },
        {
            name: 'Apply Server',
            componentName: 'AddServer'
        },
    ]
}, {
    name: 'Dashboard',
    id: 'dashboard',
    icon: 'el-icon-s-data',
    sub: [{
        name: 'User Track',
        componentName: 'backup1'
    }, {
        name: 'Server Usage',
        componentName: 'backup2'
    }]
}]