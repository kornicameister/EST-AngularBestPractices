angular.module('todo.common.data')
    .factory('dataCrud', function ($q, dataBackendFactory) {
        var todoBackend = dataBackendFactory('todo');

        return {
            create: create,
            read  : read,
            update: update,
            remove: remove
        };

        function create(todo) {
            return todoBackend
                .put(todo)
                .then(function (todo) {
                    todo._created = true;
                    return todo;
                })
        }

        function read(arg) {
            var isArray = _.isArray(arg), // assume list of ids
                isObject = _.isPlainObject(arg), // assume query
                isString = _.isString(arg),
                promises;

            return $q(function (resolve, reject) {

                if ((isArray && arg.length === 1) && _.isString(arg[0])) {
                    // arg is an array with single element, use get to be quick
                    todoBackend.get(arg[0]).then(resolve);
                } else if (isArray) {
                    // more complex example, overhead but demonstrated advanced $q
                    promises = [];
                    _.forEach(arg, function (id) {
                        promises.push(todoBackend.get(id));
                    });
                    $q.all(promises).then(resolve);
                } else if (isString) {
                    todoBackend.get(arg).then(resolve);
                } else if (isObject) {
                    todoBackend.query(arg).then(resolve);
                } else {
                    reject(new Error((typeof arg) + ' is not supported'));
                }

            });


        }

        function update(todo) {
            return todoBackend.put(todo);
        }

        function remove(todo) {
            return _.isString(todo) ? todoBackend.remove(todo) : todoBackend.remove(todo.id);
        }
    });