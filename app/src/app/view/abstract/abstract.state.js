angular.module('todo.app.view.abstract').config(abstractState);

function abstractState($stateProvider) {
    $stateProvider.state({
        name    : 'todo',
        url     : 'todo/',
        abstract: true,
        resolve : {
            /**
             * Example of inheriting resolve values
             * @param $stateParams
             * @return {*}
             */
            'params': function ($stateParams) {
                return _.clone($stateParams);
            }
        },
        onEnter : function (loggerFactory) {
            loggerFactory('state.todo').info('Entering abstract state');
        },
        onExit  : function (logggerFactory) {
            logggerFactory('state.todo').info('Exiting abstract state');
        }
    })
}