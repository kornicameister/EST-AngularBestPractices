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
    })
    .run(function ($rootScope) {
        $rootScope.$on("$stateChangeError", console.log.bind(console));
    });

/*
 Do not save refernce to the module. If you need to set something
 multiple times for the same module...use following syntax.
 */