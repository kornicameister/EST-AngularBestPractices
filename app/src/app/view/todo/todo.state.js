angular
    .module('todo.app.view.todo')
    .config(function todoState($stateProvider, TODO_ACTIONS) {

        var loggerName = 'td.generic';

        /*
         Best practice hints:
         - at top of the file meaning, which is the place visible right away we have entire
         state definition which is not bloated with extended functions...
         - always keep the code realizing the core of given piece of logic at the top of the file
         - keep function down
         - but use function declaration...always [question is....why ?]
         */

        /*
         In the end...is it really a good approach here ?
         Identify the errors with the participants, perhaps
         more scalable solution would be to distribute 3 different
         cases over separate states ?

         Confront this case with participants !
         */

        $stateProvider.state({
            name              : 'td.generic',
            /*
             Route parameters are optional by default !
             */
            url               : '/form/{action}/{id}',
            resolve           : {
                stateInformation: getStateInformation
            },
            controllerAs: 'vm',
            controllerProvider: provideController,
            templateUrl       : provideTemplateUrl
        });

        function provideTemplateUrl(params) {
            var action = params.action;
            switch (action) {
                case TODO_ACTIONS.CREATE:
                case TODO_ACTIONS.EDIT:
                    return 'app/view/todo/modify.tpl.html';
                case TODO_ACTIONS.DELETE:
                    return 'app/view/todo/delete.tpl.html';
            }
            throw new Error('Unsupported action, cannot provide template url');
        }

        function provideController($stateParams) {
            var action = $stateParams.action;
            switch (action) {
                case TODO_ACTIONS.CREATE:
                case TODO_ACTIONS.EDIT:
                    return 'CreateEditTodoController';
                case TODO_ACTIONS.DELETE:
                    return 'DeleteTodoController';
            }
            return angular.noop;
        }

        /**
         * <b>Best practice hint</b>
         *
         * Method retrieves a data object for the controllers and the views.
         * Data object is combined from following information
         *  * action [create, delete, edit]
         *  * id, only if action = {delete,edit}
         *  * todo_object
         *
         * @param $q promise
         * @param $stateParams state params
         * @param dataCrud an API o the CRUD interface of an application
         * @param loggerFactory logger factory
         */
        function getStateInformation($q, $stateParams, dataCrud, loggerFactory) {
            var action = $stateParams.action,
                id = $stateParams.id,
                data,
                logger = loggerFactory(loggerName);

            return $q(function (resolve, reject) {
                switch (action) {
                    case TODO_ACTIONS.EDIT:
                    case TODO_ACTIONS.DELETE:
                        if (!id) {
                            // TODO add routing to error state or provide simple alert
                            reject(new Error('Creating, updating and deleting requires a knowledge of todo id'));
                        }
                }

                logger.info('Generic view detected action = ' + action);

                data = {
                    action: action
                };

                if (id && [TODO_ACTIONS.DELETE, TODO_ACTIONS.EDIT].indexOf(action) > -1) {
                    logger.debug('Id = ' + id + ' has been specified, todo will be retrieved');
                    dataCrud.read(id).then(function (todo) {
                        data.id = id;
                        data.todo = todo;
                        resolve(data);
                    })
                } else {
                    resolve(data);
                }
            });
        }
    }
);
