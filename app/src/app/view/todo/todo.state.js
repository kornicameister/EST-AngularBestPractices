angular
    .module('todo.app.view.todo')
    .config(function todoState($stateProvider) {
        $stateProvider.state({
            name              : 'todo.generic',
            url               : '/generic/{action}/{id:(?:/[^/]+)?}',
            resolve           : {
                'action': function (params) {
                    return params.action;
                },
                'id'    : function (params) {
                    return params.id
                }
            },
            controllerProvider: function (action) {
                switch (action) {
                    case 'create':
                    case 'edit':
                        return 'CreateEditTodoController';
                    case 'delete':
                        return 'DeleteTodoController';
                }
            },
            templateUrl       : function (action) {
                return 'app/view/todo/' + action + '.tpl.html'
            }
        })
    });

