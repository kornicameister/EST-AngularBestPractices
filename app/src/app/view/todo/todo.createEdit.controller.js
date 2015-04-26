//CreateEditTodoController

angular
    .module('todo.app.view.todo')
    .controller('CreateEditTodoController', function (growl,
                                                      $state,
                                                      loggerFactory,
                                                      todoUtils,
                                                      dataCrud,
                                                      TODO_ACTIONS,
                                                      stateInformation) {
        var vm = this,
            logger = loggerFactory('CreateEditTodoController'),
            editMode,
            todo,
            emptyModel = {};

        vm.isEditMode = editMode = (stateInformation.action === TODO_ACTIONS.EDIT);
        vm.model = {};
        vm.submit = submit.bind(vm);
        vm.reset = reset.bind(vm);

        initialize();


        function submit(form) {
            if (form.$invalid) {
                growl.warning('Cannot submit invalid form');
                logger.error('Couldn\'t submit the form, following error has been detected\n' + todoUtils.dumpObject(form.$error));
                return false;
            }

            return dataCrud
                .create(vm.model)
                .then(submitOk, submitNotOk)
                .catch(submitError);

            function submitOk(todo) {
                growl.success('New todo has been saved, it\'s id = ' + todo.id);
                $state.go('td.all');
            }

            function submitNotOk() {
                growl.warning('Something went wrong when creating new todo');
                reset();
            }

            function submitError(err) {
                growl.error(err.message);
            }
        }

        function reset() {
            if (!editMode) {
                vm.model = _.clone(emptyModel);
            } else {
                vm.model = _.clone(todo);
            }
        }

        function initialize() {
            todo = stateInformation.todo;
            if (editMode) {
                vm.model = _.cloneDeep(todo)
            } else {
                vm.model = _.clone(emptyModel);
            }
        }

    });