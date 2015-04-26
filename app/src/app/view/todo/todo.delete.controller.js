//CreateEditTodoController

angular
    .module('todo.app.view.todo')
    .controller('DeleteTodoController', function (growl,
                                                  $state,
                                                  todoUtils,
                                                  loggerFactory,
                                                  dataCrud,
                                                  stateInformation) {
        var vm = this,
            logger = loggerFactory('DeleteTodoController'),
            todo;

        vm.yes = yes.bind(vm);
        vm.no = no.bind(vm);

        initialize();

        function yes() {
            logger.debug('About to remove todo=\n' + todoUtils.dumpObject(todo));
            dataCrud.remove(vm.todo).then(function (removed) {
                if (removed.length) {
                    growl.success('Successfully removed todo ' + todo.id);
                    $state.go('td.all');
                } else {
                    growl.warning('Something went wrong when removing todo');
                }
            });
        }

        function no() {
            growl.info('You\'ve decided not to delete todo ' + todo.id);
            $state.go('td.all');
        }

        function initialize() {
            vm.todo = todo = stateInformation.todo;
            vm.canDelete = todo.completed;
        }

    });