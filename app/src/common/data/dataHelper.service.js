angular.module('todo.common.data')
    .service('dataHelper', function ($q, dataCrud) {
        var service = this;

        service.listCompleted = listCompleted.bind(service);
        service.deleteCompleted = deleteCompleted.bind(service);

        function listCompleted() {
            return dataCrud.read({
                completed: true
            })
        }

        function deleteCompleted() {
            return listCompleted().then(function (todos) {
                var promises = _.transform(todos, function (accumulator, todo) {
                    accumulator.push(dataCrud.remove(todo));
                });

                return $q.all(promises);
            });
        }
    });