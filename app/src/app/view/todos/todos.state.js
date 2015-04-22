angular.module('todo.app.view.todos').state(todoState);

function todoState($stateProvider) {
    $stateProvider.state({
        name       : 'todo.all',
        url        : '/list',
        resolve    : {
            'todos': function () {
                return []
            }
        },
        controller : 'TodoListController',
        templateUrl: 'app/view/todos/todos.tpl.html'
    })
}