angular
    .module('todo.app.view.todos')
    .directive('tdTodoTable', function () {
        return {
            restrict        : 'E',
            scope           : {
                todos  : '=',
                columns: '='
            },
            bindToController: true,
            controllerAs    : 'vm',
            controller : 'TdTodoTableController',
            templateUrl: 'app/view/todos/components/table/tdTodoTable.tpl.html'
        }
    });