angular
    .module('todo', [
        'todo.app',
        'todo.common'
    ])
    .constant('todoVersion', '0.0.1')
    .run(function (todoVersion) {
        console.log('todo application is running in version > ' + todoVersion)
    });
