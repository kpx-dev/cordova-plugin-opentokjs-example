angular.module('starter.services', [])

.factory('Todo', function() {
    var todos = [{
        id: 1,
        title: 'Installed Cordova'
    }, {
        id: 2,
        title: 'Installed Ionic'
    }, {
        id: 3,
        title: 'Installed plugin cordova-plugin-opentokjs'
    }, {
        id: 4,
        title: 'Open tab \'Videocall\''
    }];

    return {
        all: function() {
            return todos;
        }
    };
});
