angular
    .module('todo.common.dataBackend', [
        'LocalStorageModule',
        'uuid4',
        'todo.common.log'
    ])
    .constant('NOTIFY_ITEM_SET', true)
    .constant('NOTIFY_ITEM_REMOVE', true)
    .config(function (localStorageServiceProvider, NOTIFY_ITEM_SET, NOTIFY_ITEM_REMOVE) {
        localStorageServiceProvider
            .setPrefix('todo')
            .setNotify(NOTIFY_ITEM_SET, NOTIFY_ITEM_REMOVE);
    });