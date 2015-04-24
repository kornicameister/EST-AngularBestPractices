angular.module('todo.common.data')
    .service('dataHelper', function () {
        var service = this;

        service.listCompleted = listCompleted.bind(service);
        service.deleteCompleted = deleteCompleted.bind(service);

        function listCompleted() {

        }

        function deleteCompleted() {

        }
    });