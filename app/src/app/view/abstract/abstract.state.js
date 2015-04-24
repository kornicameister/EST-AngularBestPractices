angular
    .module('todo.app.view.abstract')
    .config(function abstractState($stateProvider) {

        var loggerName = 'td';

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
                 * @param loggerFactory to produce debug output
                 * @return {object} cloned state params
                 */

                // question ? is to good to have it here ?
                // what case would be good to keep it here ?

                applicationLabel: function (loggerFactory) {
                    loggerFactory(loggerName).debug('Retrieving application label from abstract state td');
                    return 'Todo Showcase';
                }
            },
            /*
             Notice that in order to display sub states of an abstract
             state we need to specify an own ui-view in here.
             This ui-view will be understood as unnamed view and matched
             by ui-router for the inheritating states.

             Another approach would be to create a named structure of views
             and refer in children to the parent placeholder like this

             views: {
             abstract: {}
             }

             and in child:

             views: {
             'abstract@': {}
             }

             or, if abstract parent has unnamed view

             views: {
             '@': {}
             }


             Approach to be choosen depends clearly on requirements but for the sake of best practice
             always name your views and refer to them by name. Requires more coding ( ;-) ) but is:
             - verbose
             - clearly provides distinction between the structure

             For an example of complex structure go here:

             https://github.com/kornicameister/SpringAtom/blob/1faf0a670de47e9b6287475cd743763e21d0d3e5/src/app/view/abstract/abstract.state.js

             */
            template: '<div id="abstractView" ui-view></div>',
            onEnter : function (loggerFactory) {
                loggerFactory(loggerName).info('Entering abstract state');
            },
            onExit  : function (logggerFactory) {
                logggerFactory(loggerName).info('Exiting abstract state');
            }
        })
    });

