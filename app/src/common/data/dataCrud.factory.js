angular.module('todo.common.data')
    .factory('dataCrud', function (dataBackendFactory) {
        var todoBackend = dataBackendFactory('todo');

        return {
            create: create,
            read  : read,
            update: update,
            remove: remove
        };

        function create() {

        }

        function read() {

        }

        function update() {

        }

        function remove() {

        }
    });