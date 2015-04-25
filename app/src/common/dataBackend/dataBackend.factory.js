angular
    .module('todo.common.dataBackend')
    /*
     Best practice hint:
     - notice how
     */
/**
 * @ngdoc factory
 * @name dataBackendFactory
 * @description
 *  Provides a simple delegate instance bound to key [identifying data type]
 *  which uses this key to communicate with dataBackendService
 */
    .factory('dataBackendFactory', function (dataBackendService) {
        function DataBackendFactory(key) {
            this.key = key;
        }


        DataBackendFactory.prototype.put = function put(data) {
            return dataBackendService.put(this.key, data);
        };
        DataBackendFactory.prototype.remove = function remove(id) {
            return dataBackendService.remove(this.key, id);
        };
        DataBackendFactory.prototype.get = function get(id) {
            return dataBackendService.get(this.key, id);
        };
        DataBackendFactory.prototype.query = function query(query) {
            return dataBackendService.query(this.key, query);
        };
        DataBackendFactory.prototype.all = function all() {
            return dataBackendService.all(this.key);
        };

        return function ctor(key) {
            return new DataBackendFactory(key);
        };
    });