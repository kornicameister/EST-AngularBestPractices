angular.module('todo.app.view.todo',[
    /*
     - best practice hint 1:
     always keep 3rd party dependencies at the top
     - best practice hint 2:
     for a larger number of such dependencies use wrapping module
     */
    'angular-growl',
    'ui.router',
    'todo.app.view.abstract',
    'todo.common.data'
]);