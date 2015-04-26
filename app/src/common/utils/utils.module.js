(function () {
    angular
        .module('todo.common.utils', [])
        .constant('DEBUG_MODE', isDebug())
        .service('todoUtils', function () {
            return {
                /**
                 *
                 */
                urlParams : urlParams,
                /**
                 *
                 */
                urlDecode : urlDecode,
                /**
                 *
                 */
                isDebug   : isDebug,
                dumpObject: dumpObject
            }
        });

    function dumpObject(obj) {
        return _(obj)
            .chain()
            .thru(function (val) {
                return JSON.stringify(val, null, 4);
            })
            .toString()
            .trim();
    }

    function urlParams(url) {
        url = url || window.location.href;
        if (!url || (url.indexOf("?") < 0 && url.indexOf("&") < 0)) {
            return {};
        }
        if (url.indexOf('#') > -1) {
            url = url.substr(0, url.indexOf('#'));
        }
        var params = url.substr(url.indexOf("?") + 1);
        return urlDecode(params);
    }

    function urlDecode(string, overwrite) {
        var obj = {},
            pairs = string.split('&'),
            name,
            value;
        angular.forEach(pairs, function (pair) {
            pair = pair.split('=');
            name = decodeURIComponent(pair[0]);
            value = decodeURIComponent(pair[1]);
            obj[name] = overwrite || !obj[name] ? value : [].concat(obj[name]).concat(value);
        });
        return obj;
    }

    function isDebug(_url_) {
        var url = _url_ || window.location.href,
            params = urlParams(url);
        return params['debug'] || false;
    }
}());