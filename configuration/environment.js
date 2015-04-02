module.exports = (function createEnv() {

    var environment = {},
        path = require('path');

    environment.paths = {
        client: path.join(path.dirname(__filename), '../app/src'),
        clientLib: path.join(path.dirname(__filename), '../app/bower_components'),
        build: path.join(path.dirname(__filename), '../build')
    };

    environment.modes = {
        /**
         * set this as <b>process.env.NODE_ENV</b> to run production specific code
         */
        PRODUCTION: 'production',
        /**
         * set this as <b>process.env.NODE_ENV</B> to run development specific code
         */
        DEVELOPMENT: 'development'
    };

    /**
     Files names for build directory.
     JS/CSS can be found in those files
     */
    environment.build = {
        JS: 'todo.js',
        JS_LIB: 'todo.lib.js',
        JS_VIEW: 'todo.view.js',
        CSS: 'todo.css',
        CSS_LIB: 'todo.lib.css'
    };

    return environment;
}());
