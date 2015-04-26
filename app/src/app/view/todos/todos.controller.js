angular
    .module('todo.app.view.todos')
    .controller('TodosController', function (todos) {
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
            }
        ];

        vm.onlyCompleted = false;

    });