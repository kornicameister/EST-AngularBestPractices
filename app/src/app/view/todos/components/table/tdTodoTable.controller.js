angular
    .module('todo.app.view.todos')
    .controller('TdTodoTableController', function ($state, TODO_ACTIONS) {
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
    });