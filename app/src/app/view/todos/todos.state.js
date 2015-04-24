angular
    .module('todo.app.view.todos')
    .config(function todoState($stateProvider, $urlRouterProvider) {
        $stateProvider.state({
            name       : 'td.all',
            url        : '/todos',
            resolve    : {
                'todos': getAllTodos
            },
            templateUrl: 'app/view/todos/todos.tpl.html'
        });

        // use this state as default one
        $urlRouterProvider.otherwise('/td/todos');

        /**
         * Retrieves all of the todos currently available
         * @return {Array}
         */
        function getAllTodos() {
            return []
        }
    });

