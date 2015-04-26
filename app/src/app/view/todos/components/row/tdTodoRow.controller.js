angular
    .module('todo.app.view.todos')
    .controller('TdTodoRowController', function ($state, loggerFactory, TODO_ACTIONS) {
        var vm = this,
            logger = loggerFactory('TdTodoRowController');

        vm.executeAction = executeAction.bind(vm);

        function executeAction(action) {
            logger.info('About to execute action for parent controller, action=' + action);
            switch (action) {
                case TODO_ACTIONS.DELETE:
                    return deleteTodo(vm.todo).then(onActionSuccess);
                case TODO_ACTIONS.EDIT:
                    return editTodo(vm.todo).then(onActionSuccess)
            }

            function onActionSuccess() {
                logger.debug('Action ' + action + ' executed');
            }
        }

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