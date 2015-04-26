angular
    .module('todo.app.view.todos')
    .controller('TdTodosController', function ($state, TODO_ACTIONS) {
        var vm = this;

        /*
         Since we used bindToController with controllerAs syntax
         objects passed to scope and bound to controller are already
         assigned to this of this controller.

         In order to realize requirement (i.e adding the actions column)
         we can only modify current columns.
         */

        vm.columns.push({
            label: 'Actions',
            index: 'actions'
        });

        // notice that these methods can be removed if You decide to reuse
        // them from TdTodoRowController
        vm.editTodo = editTodo.bind(vm);
        vm.deleteTodo = deleteTodo.bind(vm);

        function editTodo(todo) {
            return $state.go('td.generic', {
                action: TODO_ACTIONS.EDIT,
                id    : todo.id
            });
        }

        function deleteTodo(todo) {
            return $state.go('td.generic', {
                action: TODO_ACTIONS.DELETE,
                id    : todo.id
            });
        }
    });