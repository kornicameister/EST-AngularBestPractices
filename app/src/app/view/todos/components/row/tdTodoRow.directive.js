angular
    .module('todo.app.view.todos')
    .directive('tdTodoRow', function () {
        return {
            restrict        : 'A',
            replace         : true,
            /*
             Best practice hint:
             - It is possible to combine ng-repeat along with custom directive.
             But it order to do this using only one line we have to use
             A restriction, not E restriction.

             Check comment on scope for further information
             */
            scope           : {
                /*
                 Note what name we expect for the attribute which is a desired object.
                 It is the same one as for the directive, thus usage is very natural
                 and does not require much coding.
                 */
                todo : '=tdTodoRow',
                index: '@tdTodoRowPk'
            },
            /*
             We have two actions defined in the template (check it to confirm) but
             we don't want this directive controller to handle it. We inform angular
             that our directive require tdTodos directive in order to communicate with it
             and call some public methods of its controller.
             */
            require         : '^tdTodoTable', // !!! parent tdTodos is required here, thus directive may exists only withing tdTodos
            bindToController: true,
            controllerAs    : 'vm',
            controller: 'TdTodoRowController',
            templateUrl     : 'app/view/todos/components/row/tdTodoRow.tpl.html'
        }
    });