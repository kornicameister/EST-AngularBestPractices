angular.module('todo.app.view.abstract')
    .config(function ($stateProvider) {
        $stateProvider.state({
            name: 'todo',
            url : 'todo/'
        })
    });