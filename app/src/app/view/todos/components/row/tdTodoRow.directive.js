angular
    .module('todo.app.view.todos')
    .directive('tdTodoRow', function (TODO_ACTIONS) {
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
            controller      : angular.noop,
            link            : function (scope, element, attrs, tdTodoTableCtrl) {
                /*
                 Best practice hint:
                 Notice that it is possible to achieve directive<->directive communication
                 using link function, an example blow is rather an unnecessary overhead.
                 Normally we would define an actions using custom controller for this directive
                 instead doing all this DOM onClick event and so on.

                 As an exercise, there is already a controller defined to comply with the statement above.
                 Just remove link function, update tpl to use ng-click and show it methods from this controller
                 */
                var buttons = element.find('button');

                _.forEachRight(buttons, function (btn) {
                    btn = angular.element(btn);
                    btn.on('click', btnClickHandler)
                });

                function btnClickHandler() {
                    var act = $(this).data('action'),
                        todo = scope.vm.todo;
                    switch (act) {
                        case TODO_ACTIONS.DELETE:
                            tdTodoTableCtrl.deleteTodo(todo);
                            break;
                        case TODO_ACTIONS.EDIT:
                            tdTodoTableCtrl.editTodo(todo);
                            break;
                    }
                }
            },
            templateUrl     : 'app/view/todos/components/row/tdTodoRow.tpl.html'
        }
    });