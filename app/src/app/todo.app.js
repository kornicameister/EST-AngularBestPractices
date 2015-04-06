angular
    .module('todo.app', [
        'ngAnimate',
        'todo.app.view',
        'todo.app.components',
        'todo.common.utils' // access DEBUG_MODE for the $compileProvider
    ])
    .value('$anchorScroll', angular.noop)
    .config(function ($compileProvider, DEBUG_MODE) {
        $compileProvider.debugInfoEnabled(DEBUG_MODE);
    });