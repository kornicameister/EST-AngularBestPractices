angular
    .module('todo.app.view.abstract')
    .config(function abstractState($stateProvider) {
        $stateProvider.state({
            name    : 'td',
            url     : '/td',
            abstract: true,
            resolve : {
                /**
                 * Example of inheriting resolved values. Following
                 * value (i.e. <b>params</b>) will be available in
                 * inheriting states.
                 *
                 * @param $stateParams stateParams for current request
                 * @param loggerFactory to produce debug output
                 * @return {object} cloned state params
                 */

                // question ? is to good to have it here ?
                // what case would be good to keep it here ?

                'params': function ($stateParams, loggerFactory) {
                    var stateParams = _.clone($stateParams),
                        keys = _.keys(stateParams);

                    if (keys.length) {
                        loggerFactory('state.todo').debug('Current state params (keys) = ' + keys);
                    }

                    return stateParams;
                }
            },
            onEnter : function (loggerFactory) {
                loggerFactory('state.todo').info('Entering abstract state');
            },
            onExit  : function (logggerFactory) {
                logggerFactory('state.todo').info('Exiting abstract state');
            }
        })
    });

