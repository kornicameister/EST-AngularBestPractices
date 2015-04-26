angular
    .module('todo.app.view.todos')
    .controller('TodosController', function ($state, dataCrud, TODO_ACTIONS, todos) {
        var vm = this;

        vm.todos = todos || [];
        vm.columns = [
            {
                label: 'Pk',
                index: 'pk'
            },
            {
                label   : 'Id',
                index   : 'id',
                sortable: true
            },
            {
                label: 'Message',
                index: 'message'
            },
            {
                label   : 'Completed',
                index   : 'completed',
                sortable: true
            },
            {
                label   : 'Timestamp',
                index   : 'updated_at',
                sortable: true
            },
            {
                label: 'Actions',
                index: 'actions'
            }
        ];

        vm.editTodo = editTodo.bind(vm);
        vm.deleteTodo = deleteTodo.bind(vm);

        function editTodo(todo) {
            $state.go('td.generic', {
                action: TODO_ACTIONS.EDIT,
                id    : todo.id
            });
        }

        function deleteTodo(todo) {
            $state.go('td.generic', {
                action: TODO_ACTIONS.DELETE,
                id    : todo.id
            });
        }
    });