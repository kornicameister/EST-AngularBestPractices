angular
    .module('todo.app.view.todos')
    .directive('tdTodos', function () {
        return {
            restrict        : 'E',
            scope           : {
                todos  : '=',
                columns: '='
            },
            bindToController: true,
            controllerAs    : 'vm',
            controller      : 'TdTodosController',
            templateUrl     : 'app/view/todos/components/tdTodos.tpl.html'
        }
    });