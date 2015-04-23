angular
    .module('todo.app.view.todos')
    .config(function todoState($stateProvider, $urlRouterProvider) {
        $stateProvider.state({
            name       : 'td.all',
            url        : '/todos',
            resolve    : {
                'todos': getAllTodos
            },
            templateUrl: 'app/view/todos/todos.tpl.html',
            onEnter    : function (applicationLabel, loggerFactory) {
                /*
                 This shows that indeed what has been resolved in the parent state is available for child
                 */
                loggerFactory('td.all').info('Application label I inherited from my parent is > ' + applicationLabel);
            }
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
