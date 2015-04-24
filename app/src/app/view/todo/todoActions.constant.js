/*
 Best practice hint > use constants to wrap all immutable values
 for a module/application.
 */

/**
 * @ngdoc constant
 * @name TODO_ACTIONS
 * @description
 *  <b>TODO_ACTIONS</b> describes what actions can be performed for a single object
 */
angular.module('todo.app.view.todo').constant('TODO_ACTIONS', {
    CREATE: 'create',
    EDIT  : 'edit',
    DELETE: 'delete'
});