angular
    .module('todo.app.view.todos')
    .config(function todoState($stateProvider, $urlRouterProvider) {

        $stateProvider.state({
            name      : 'todo.all',
            url       : '/list',
            resolve   : {
                'todos': function () {
                    return []
                }
            },
            controller: angular.noop,
            template  : 'All todos'
            //controller : 'TodoListController',
            //templateUrl: 'app/view/todos/todos.tpl.html'
        });

        $urlRouterProvider.otherwise('/todo/list');
    });

