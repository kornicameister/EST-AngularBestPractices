angular.module('todo.app.view.main')
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider.state({
            name: 'todo.main',
            url : '/main',
            views: {
                'content': {
                    template: 'Main'
                }
            }
        });

        $urlRouterProvider.otherwise('/todo/main');
    });