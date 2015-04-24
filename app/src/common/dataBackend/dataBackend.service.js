angular
    .module('todo.common.dataBackend')
    /*
     Best practice hint:
     -
     */
    .service('dataBackendService', function ($q, uuid4, localStorageService, loggerFactory) {
        var service = this,
            logger = loggerFactory('dataBackendService'),
            putLogMsg = _.template('put(${type},${data})'),
            queryLogMsg = _.template('query(${type},${query})'),
            getLogMsg = _.template('get(${type},${id})'),
            rmLogMsg = _.template('remove(${type},${id})');

        service.get = get.bind(service);
        service.query = query.bind(service);
        service.put = put.bind(service);
        service.remove = remove.bind(service);

        function query(type, query) {
            logger.info(queryLogMsg({
                type : type,
                query: query
            }));
            return $q(function (resolve) {
                var dataBucket = getDataBucket(type);
                if (!query) {
                    return resolve(dataBucket);
                }
                return resolve(_.filter(dataBucket), query);
            });
        }

        function get(type, id) {
            logger.info(getLogMsg({
                type: type,
                id  : id
            }));

            return $q(function (resolve, reject) {

                if (!id) {
                    return reject(new Error('Cannot get, id(s) undefined'));
                }

                var dataBucket = getDataBucket(type);
                return resolve(dataBucket[id]);
            });

        }

        function put(type, data) {
            logger.info(putLogMsg({
                type: type,
                data: _.keys(data)
            }));
            return $q(function (resolve, reject) {
                var isUpdate,
                    id,
                    oldData,
                    dataBucket;

                if (!data) {
                    return reject(new Error('Undefined data'));
                }

                /*
                 Best practice hint:
                 - initialize variable lazily, only if data is defined thus we actually want
                 to execute some part of the code
                 */
                dataBucket = getDataBucket(type);

                if (!(id = data.id)) {
                    isUpdate = false;
                    data.id = id = uuid4.generate();
                }

                if (isUpdate) {
                    oldData = dataBucket[id];
                    data = _.merge(oldData, data);
                }

                dataBucket[id] = data;
                saveDataBucket(type, dataBucket);

                return resolve(data);
            })
        }

        function remove(type, id) {
            logger.info(rmLogMsg({
                type: type,
                id  : id
            }));
            return $q(function (resolve, reject) {
                if (!id) {
                    return reject(new Error('Cannot remove, id(s) undefined'));
                }

                var dataBucket = getDataBucket(type),
                    removed = [],
                    rmIds = _.isArray(id) ? id : [id];

                _.forEachRight(rmIds, function (rmId) {
                    if (dataBucket[rmId]) {
                        delete dataBucket[rmId]
                        removed.push(rmId);
                    }
                });

                saveDataBucket(type, dataBucket);
                return resolve(removed);

            })
        }

        function saveDataBucket(type, bucket) {
            bucket = _.sortBy(bucket, 'id');
            localStorageService.set(type, bucket);
        }

        function getDataBucket(type) {
            var bucket = localStorageService.get(type);
            if (!bucket) {
                bucket = {};
                localStorageService.set(type, bucket);
            }
            return bucket;
        }

    });